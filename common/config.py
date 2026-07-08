import logging
import os
import time
import threading
from dataclasses import dataclass
from enum import Enum
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger("FiL_LLM.Config")

try:
    import yaml
except ImportError:
    yaml = None


class ProviderStatus(str, Enum):
    UNKNOWN = "unknown"
    CONFIGURED = "configured"
    MISSING_API_KEY = "missing_api_key"
    ONLINE = "online"
    OFFLINE = "offline"
    TIMEOUT = "timeout"
    AUTH_ERROR = "auth_error"
    RATE_LIMITED = "rate_limited"
    PAYMENT_REQUIRED = "payment_required"
    TERMS_NOT_ACCEPTED = "terms_not_accepted"


class ModelAvailabilityStatus(str, Enum):
    AVAILABLE = "available"
    RATE_LIMITED = "rate_limited"
    PAYMENT_REQUIRED = "payment_required"
    OFFLINE = "offline"
    UNVERIFIED = "unverified"


@dataclass
class HealthInfo:
    status: ProviderStatus
    last_check: float
    message: str = ""
    model_count: int = 0


class ProviderHealthManager:
    _instance: Optional["ProviderHealthManager"] = None
    _health_data: Dict[str, HealthInfo] = {}
    _lock = threading.Lock()

    def __new__(cls) -> "ProviderHealthManager":
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def update_status(self, provider: str, status: ProviderStatus, message: str = "", model_count: int = 0):
        with self._lock:
            self._health_data[provider] = HealthInfo(status=status, last_check=time.time(), message=message, model_count=model_count)

    def get_status(self, provider: str) -> HealthInfo:
        with self._lock:
            return self._health_data.get(provider, HealthInfo(ProviderStatus.UNKNOWN, 0))

    def get_all_statuses(self) -> Dict[str, Dict[str, Any]]:
        with self._lock:
            return {k: {"status": v.status.value, "last_check": v.last_check, "message": v.message, "model_count": v.model_count} for k, v in self._health_data.items()}


def get_health_manager() -> ProviderHealthManager:
    return ProviderHealthManager()


class ModelAvailabilityManager:
    _instance: Optional["ModelAvailabilityManager"] = None
    _availability_data: Dict[str, ModelAvailabilityStatus] = {}
    _lock = threading.Lock()

    def __new__(cls) -> "ModelAvailabilityManager":
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def update_status(self, provider: str, model: str, status: ModelAvailabilityStatus):
        with self._lock:
            self._availability_data[f"{provider}:{model}"] = status

    def get_status(self, provider: str, model: str) -> ModelAvailabilityStatus:
        with self._lock:
            return self._availability_data.get(f"{provider}:{model}", ModelAvailabilityStatus.UNVERIFIED)


class AuthType(str, Enum):
    API_KEY = "api_key"
    BEARER = "bearer"
    BASIC = "basic"
    NONE = "none"


@dataclass
class ProviderConfig:
    name: str
    display_name: str
    base_url: str
    auth_type: AuthType = AuthType.BEARER
    header_name: str = "Authorization"
    header_prefix: str = "Bearer "
    models_endpoint: str = "/models"
    chat_endpoint: str = "/chat/completions"
    vision_support: bool = True
    streaming_support: bool = True
    max_context_length: int = 128000
    timeout_default: int = 60
    environment_var: str = "API_KEY"
    description: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return {
            "name": self.name, "display_name": self.display_name, "base_url": self.base_url,
            "auth_type": self.auth_type.value, "header_name": self.header_name, "header_prefix": self.header_prefix,
            "models_endpoint": self.models_endpoint, "chat_endpoint": self.chat_endpoint,
            "vision_support": self.vision_support, "streaming_support": self.streaming_support,
            "max_context_length": self.max_context_length, "timeout_default": self.timeout_default,
            "environment_var": self.environment_var, "description": self.description,
        }


PROVIDERS: Dict[str, ProviderConfig] = {
    "ollama": ProviderConfig(name="ollama", display_name="Ollama (Local)", base_url="http://127.0.0.1:11434", auth_type=AuthType.NONE, header_name="", header_prefix="", models_endpoint="/api/tags", chat_endpoint="/api/chat", vision_support=True, max_context_length=32000, timeout_default=120, description="Local models via Ollama"),
    "lmstudio": ProviderConfig(name="lmstudio", display_name="LM Studio (Local)", base_url="http://127.0.0.1:1234", auth_type=AuthType.NONE, header_name="", header_prefix="", models_endpoint="/v1/models", chat_endpoint="/v1/chat/completions", vision_support=True, max_context_length=32000, timeout_default=120, description="Local models via LM Studio"),
    "openai": ProviderConfig(name="openai", display_name="OpenAI API", base_url="https://api.openai.com/v1", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=128000, timeout_default=90, environment_var="OPENAI_API_KEY", description="OpenAI Platform API models"),
    "google": ProviderConfig(name="google", display_name="Google AI (Gemini)", base_url="https://generativelanguage.googleapis.com/v1beta", auth_type=AuthType.NONE, header_name="", header_prefix="", models_endpoint="/models", chat_endpoint="/models/gemini-pro:generateContent", vision_support=True, max_context_length=128000, timeout_default=60, environment_var="GOOGLE_API_KEY", description="Gemini models"),
    "groq": ProviderConfig(name="groq", display_name="Groq (Fast Inference)", base_url="https://api.groq.com/openai/v1", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=32000, timeout_default=30, environment_var="GROQ_API_KEY", description="Lightning fast Llama and Mixtral models"),
    "openrouter": ProviderConfig(name="openrouter", display_name="OpenRouter", base_url="https://openrouter.ai/api/v1", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=128000, timeout_default=60, environment_var="OPENROUTER_API_KEY", description="Free and routed OpenAI-compatible models"),
    "cloudflare": ProviderConfig(name="cloudflare", display_name="Cloudflare Workers AI", base_url="", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="", chat_endpoint="/chat/completions", vision_support=True, max_context_length=128000, timeout_default=120, environment_var="CLOUDFLARE_API_TOKEN", description="Workers AI via OpenAI-compatible chat endpoint"),
}

LOCAL_PROVIDERS = ("ollama", "lmstudio")

# OpenRouter free-model vision fallback chain. Used by provider_resilience when
# a vision request to the user-selected OpenRouter model fails (e.g. the model
# is not vision-capable or is rate-limited). The catalog is fetched live and
# filtered; these constants guide preference and exclusion.
OPENROUTER_PREFERRED_VISION_MODELS = [
    "google/gemma-4-26b-a4b-it:free",
    "google/gemma-4-31b-it:free",
    "nvidia/nemotron-nano-12b-v2-vl:free",
    "openrouter/free",
]
OPENROUTER_EXCLUDED_MODEL_PATTERNS = ["lyria-", "llama-guard"]
OPENROUTER_EXCLUDED_MODEL_IDS = {
    "google/gemma-3-27b-it:free",
    "google/gemma-3-12b-it:free",
    "google/gemma-3-4b-it:free",
}
ACCOUNT_PROVIDER_KEYS = ("openai", "google", "groq", "openrouter", "cloudflare")

VISION_MODEL_HINTS = ["vision", "vl", "llava", "qwen-vl", "qwenvl", "qwen2vl", "qwen3vl", "moondream", "gemini", "gemma-3", "gemma-4", "pixtral", "llama-3.2-11b", "llama-4-scout", "llama-4-maverick", "claude", "grok"]

RECOMMENDED_MODELS = {
    "ollama": ["qwen3-vl:8b", "llava:13b", "moondream:latest", "deepseek-r1:8b", "llama-3.3:latest"],
    "lmstudio": ["qwen2-vl-7b-instruct", "llama-3.2-3b-instruct"],
    "openai": ["gpt-4o", "gpt-4o-mini", "gpt-4.1-mini"],
    "google": ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"],
    "groq": ["meta-llama/llama-4-scout-17b-16e-instruct", "llama-3.3-70b-versatile", "llama-3.1-8b-instant", "deepseek-r1-distill-llama-70b"],
    "openrouter": ["google/gemma-4-26b-a4b-it:free", "openrouter/free"],
    "cloudflare": ["@cf/meta/llama-3.2-11b-vision-instruct", "@cf/meta/llama-4-scout-17b-16e-instruct"],
}


def get_provider_config(provider: str) -> Optional[Dict[str, Any]]:
    prov = PROVIDERS.get(provider)
    if not prov:
        return None
    cfg = prov.to_dict()
    config_obj = get_config()
    env_var = cfg.get("environment_var")
    if env_var:
        api_key = config_obj.get(env_var)
        if api_key:
            cfg["api_key"] = api_key
    if provider == "cloudflare":
        account_id = config_obj.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
        cfg["account_id"] = account_id
        if account_id:
            cfg["base_url"] = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1"
    cfg["url"] = cfg.get("base_url", "")
    return cfg


def get_provider_key(display_name: Any) -> str:
    if not display_name:
        return "ollama"
    value = str(display_name).strip().lower()
    if value in PROVIDERS:
        return value
    for k, v in PROVIDERS.items():
        if v.display_name.lower() == value:
            return k
    return "ollama"


def is_known_vision_model_name(model: str) -> bool:
    clean = (model or "").strip().lower()
    if not clean:
        return False
    return any(token in clean for token in VISION_MODEL_HINTS)


def is_model_vision_capable(provider: str, model: str) -> bool:
    prov = str(provider or "").strip().lower()
    if prov == "google":
        return True
    try:
        from .vision_smoke import is_vision_capable as _smoke_check
        return _smoke_check(provider, model)
    except ImportError:
        return is_known_vision_model_name(model)


def get_recommended_models(provider: str) -> List[str]:
    return RECOMMENDED_MODELS.get(provider, [])


class Config:
    _instance: Optional["Config"] = None
    _config_data: Dict[str, Any] = {}
    _env_data: Dict[str, str] = {}

    def __new__(cls) -> "Config":
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if hasattr(self, "_initialized") and self._initialized:
            return
        self._initialized = True
        self._node_root = Path(__file__).resolve().parent.parent
        self._load_env()
        self._load_yaml()
        self._merge_configs()

    def _load_env(self) -> None:
        self._env_data = {}
        env_file = self._node_root / "API.env"
        if env_file.exists():
            try:
                with open(env_file, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith("#") and "=" in line:
                            key, _, value = line.partition("=")
                            self._env_data[key.strip()] = value.strip()
            except Exception:
                pass
        for key in {"OLLAMA_URL", "LMSTUDIO_URL"}:
            if key in os.environ:
                self._env_data[key] = os.environ[key]

    def _load_yaml(self) -> None:
        self._yaml_data = {}
        config_file = self._node_root / "config.yaml"
        if config_file.exists() and yaml:
            try:
                with open(config_file, "r", encoding="utf-8") as f:
                    content = f.read()
                    self._yaml_data = yaml.safe_load(content) or {} if content.strip() else {}
            except Exception:
                pass

    def _merge_configs(self) -> None:
        self._config_data = self._yaml_data.copy()
        self._apply_env_overrides()

    def reload(self) -> None:
        self._load_env()
        self._load_yaml()
        self._merge_configs()

    def _apply_env_overrides(self) -> None:
        overrides = {"OLLAMA_URL": "local_servers.ollama.url", "LMSTUDIO_URL": "local_servers.lmstudio.url"}
        for env_k, cfg_k in overrides.items():
            if env_k in self._env_data:
                self._set_nested(cfg_k, self._env_data[env_k])

    def _set_nested(self, key: str, value: Any) -> None:
        keys = key.split(".")
        data = self._config_data
        for k in keys[:-1]:
            data = data.setdefault(k, {})
        data[keys[-1]] = value

    def _get_nested(self, key: str, default: Any = None) -> Any:
        data = self._config_data
        for k in key.split("."):
            if isinstance(data, dict) and k in data:
                data = data[k]
            else:
                return default
        return data

    def get(self, key: str, default: Any = None) -> Any:
        env_key = key.replace(".", "_").upper()
        if env_key in self._env_data:
            return self._env_data[env_key]
        return self._get_nested(key, default)

    def get_int(self, key: str, default: int = 0) -> int:
        val = self.get(key, default)
        try:
            return int(val)
        except (ValueError, TypeError):
            return default

    def get_bool(self, key: str, default: bool = False) -> bool:
        val = self.get(key, default)
        if isinstance(val, bool):
            return val
        return str(val).lower() in ("true", "1", "yes", "on")

    def get_server_url(self, provider: str = "ollama") -> str:
        if provider == "cloudflare":
            account_id = self.get("CLOUDFLARE_ACCOUNT_ID", "").strip()
            if account_id:
                return f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1"
        url = self.get(f"local_servers.{provider}.url") or self.get(f"cloud_providers.{provider}.base_url")
        if url:
            return url
        if provider in PROVIDERS and PROVIDERS[provider].base_url:
            return PROVIDERS[provider].base_url
        defaults = {"ollama": "http://127.0.0.1:11434", "lmstudio": "http://127.0.0.1:1234"}
        return self.get(f"servers.{provider}.url", defaults.get(provider, "http://127.0.0.1:11434"))

    def get_timeout(self, provider: str = "ollama", prompt_mode: str = "hybrid") -> int:
        """Resolve the request timeout for ``provider`` given ``prompt_mode``.

        Two-stage generation makes two sequential LLM calls, so cloud providers
        get a bumped timeout (max(base, 90); cloudflare max(base, 120)) unless a
        ``timeouts.<provider>_two_stage`` override is set. Local providers are
        unaffected by prompt_mode.
        """
        default = PROVIDERS[provider].timeout_default if provider in PROVIDERS else 120
        base = self.get_int(f"timeouts.{provider}", default)
        if prompt_mode != "two_stage" or provider in LOCAL_PROVIDERS:
            return base
        two_stage_default = max(base, 120 if provider == "cloudflare" else 90)
        return self.get_int(f"timeouts.{provider}_two_stage", two_stage_default)

    def get_proxy(self, url: str = "") -> Optional[str]:
        if not url:
            return self.get("network.proxy.https") or self.get("network.proxy.http")
        no_proxy = self.get("network.proxy.no_proxy", "")
        import urllib.parse
        parsed = urllib.parse.urlparse(url)
        if no_proxy:
            no_proxy_list = [x.strip() for x in no_proxy.split(",")]
            if parsed.hostname in no_proxy_list:
                return None
        return self.get("network.proxy.https") or self.get("network.proxy.http")

    def get_image_config(self) -> Dict[str, Any]:
        return {"max_side": self.get_int("image_processing.max_side", 1024), "quality": self.get_int("image_processing.quality", 80), "format": self.get("image_processing.format", "JPEG")}

    def to_dict(self) -> Dict[str, Any]:
        return self._config_data.copy()


@lru_cache(maxsize=1)
def get_config() -> Config:
    return Config()
