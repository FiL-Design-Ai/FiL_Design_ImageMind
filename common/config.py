import logging
import os
import time
import threading
from dataclasses import dataclass
from enum import Enum
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, List, Optional

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.Config")

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
# Every id here must be one OpenRouter declares image-capable: when the catalog
# fetch fails this list is returned verbatim, so a text-only model in it becomes
# a vision attempt that cannot succeed. `nvidia/nemotron-3-nano-30b-a3b:free`
# and `openai/gpt-oss-20b:free` sat here until the 2026-07-29 audit read their
# `architecture.input_modalities` and found both text-only.
OPENROUTER_PREFERRED_VISION_MODELS = [
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
    "nvidia/nemotron-nano-12b-v2-vl:free",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "openrouter/free",
]
OPENROUTER_EXCLUDED_MODEL_PATTERNS = ["lyria-", "llama-guard", "whisper", "tts-", "safeguard"]
OPENROUTER_EXCLUDED_MODEL_IDS = {
    "google/gemma-3-27b-it:free",
    "google/gemma-3-12b-it:free",
    "google/gemma-3-4b-it:free",
    # The `3n` variants match the `gemma-3` vision hint but take text only.
    # Recorded by a real probe on 2026-05-01; kept here when the cached probe
    # file was dropped, since it was the one verdict that file actually changed.
    "google/gemma-3n-e2b-it:free",
    "google/gemma-3n-e4b-it:free",
}
ACCOUNT_PROVIDER_KEYS = ("openai", "google", "groq", "openrouter", "cloudflare")

# Last-resort name matching, and by now only the local providers reach it —
# Ollama and LM Studio publish no capability metadata. Every cloud provider is
# answered from its own /models response (see `model_capabilities`).
#
# Dropped on 2026-07-29 because the providers themselves contradicted them:
# `gpt-oss` (Groq and OpenRouter both declare the family text-only, yet the
# token badged all three Groq gpt-oss models), `nemotron` (the family splits —
# `nemotron-nano-12b-v2-vl` sees, `nemotron-3-nano-30b-a3b` does not), and
# `glm-4`/`glm-5` (Cloudflare's catalogue carries no vision flag for glm-5.2).
# Bare "vl" also went: it matched any id with those two letters anywhere.
VISION_MODEL_HINTS = ["vision", "-vl", "/vl", "_vl", "vl:", "llava", "qwen-vl", "qwenvl", "qwen2vl", "qwen3vl", "moondream", "gemini", "gemma-3", "gemma-4", "pixtral", "llama-3.2-11b", "llama-4-scout", "llama-4-maverick", "claude", "grok", "kimi"]

RECOMMENDED_MODELS = {
    # Local providers — pulled from Ollama Hub / LM Studio catalog July 2026
    "ollama": ["qwen3-vl:8b", "qwen2.5-vl:7b", "llava:13b", "moondream:latest", "deepseek-r1:8b", "llama-3.3:latest"],
    "lmstudio": ["qwen2.5-vl-7b-instruct", "qwen2-vl-7b-instruct", "llama-3.2-3b-instruct"],
    # Every cloud entry below was read back from the provider's own /models on
    # 2026-07-29. Seven ids in the previous list no longer existed, and a
    # recommendation that 404s is worse than no recommendation — it is the
    # first thing a new user clicks.
    #
    # OpenAI — plain `gpt-5.6` was never a real id; the flagship ships as three
    # named variants. `gpt-4o` stays only as the cheap long-tail fallback.
    "openai": [
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-5.6-luna",
        "gpt-5.5",
        "gpt-5.4-mini",
        "gpt-4.1-mini",
        "gpt-4o-mini",
    ],
    # Google — 3.6-flash is the current workhorse. 3.1-pro ships as
    # `-preview` only, and 1.5-flash is gone from the account listing.
    "google": [
        "gemini-3.6-flash",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.1-pro-preview",
        "gemini-2.5-flash",
        "gemini-2.5-pro",
        "gemini-2.0-flash",
    ],
    # Groq — `llama-4-scout` and `deepseek-r1-distill-llama-70b` were both
    # withdrawn, and the note claiming llama-3.1-8b-instant/llama-3.3-70b-versatile
    # were deprecated was wrong: Groq still serves both. `qwen/qwen3.6-27b` is
    # the only model Groq declares image-capable.
    "groq": [
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "qwen/qwen3.6-27b",
        "llama-3.3-70b-versatile",
        "llama-3.1-8b-instant",
    ],
    # OpenRouter — `meta-llama/llama-3.3-70b-instruct:free` is no longer in the
    # catalog. The two gemma-4 slugs and nemotron-nano-12b-v2-vl are the free
    # models OpenRouter declares image-capable.
    "openrouter": [
        "openrouter/free",
        "google/gemma-4-31b-it:free",
        "google/gemma-4-26b-a4b-it:free",
        "nvidia/nemotron-nano-12b-v2-vl:free",
        "nvidia/nemotron-3-nano-30b-a3b:free",
        "openai/gpt-oss-20b:free",
    ],
    # Cloudflare Workers AI — llama-3.3-70b is published only as the
    # `-fp8-fast` build. Per the account catalogue, scout / 3.2-11b-vision /
    # gemma-4 / kimi-k2.6 carry `vision: true`; glm-5.2 does not.
    "cloudflare": [
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "@cf/meta/llama-3.2-11b-vision-instruct",
        "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        "@cf/moonshotai/kimi-k2.6",
        "@cf/google/gemma-4-26b-a4b-it",
        "@cf/zai-org/glm-5.2",
    ],
}


# Which of those curated ids the provider declared image-capable during the same
# 2026-07-29 audit. Recorded rather than re-derived: when the fallback list is
# showing, there is no /models answer to read, and the name hints get exactly the
# case that matters wrong — `qwen/qwen3.6-27b` is the only model Groq declares
# image-capable and no hint token matches it.
RECOMMENDED_VISION_MODELS: Dict[str, set] = {
    "openai": {
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "gpt-5.6-luna",
        "gpt-5.5",
        "gpt-5.4-mini",
        "gpt-4.1-mini",
        "gpt-4o-mini",
    },
    "google": {
        "gemini-3.6-flash",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.1-pro-preview",
        "gemini-2.5-flash",
        "gemini-2.5-pro",
        "gemini-2.0-flash",
    },
    "groq": {"qwen/qwen3.6-27b"},
    # `openrouter/free` is the auto-router: OpenRouter declares it
    # image-capable because it can route to a model that sees.
    "openrouter": {
        "openrouter/free",
        "google/gemma-4-31b-it:free",
        "google/gemma-4-26b-a4b-it:free",
        "nvidia/nemotron-nano-12b-v2-vl:free",
    },
    "cloudflare": {
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "@cf/meta/llama-3.2-11b-vision-instruct",
        "@cf/moonshotai/kimi-k2.6",
        "@cf/google/gemma-4-26b-a4b-it",
    },
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
    """Whether `model` accepts images, asked of the provider where possible.

    Imported late: `model_capabilities` reads this module's constants, and the
    nodes call this name directly.
    """
    from .model_capabilities import resolve_vision

    return resolve_vision(provider, model)


def get_recommended_models(provider: str) -> List[str]:
    return RECOMMENDED_MODELS.get(provider, [])


def get_recommended_vision_models(provider: str) -> set:
    """The audited image-capable subset of `get_recommended_models(provider)`."""
    return RECOMMENDED_VISION_MODELS.get(provider, set())


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
            except Exception as exc:
                # Loudly, because the symptom is otherwise unrecognisable: an
                # unreadable API.env leaves every cloud provider reporting "no
                # key", and the user goes looking at their keys instead of at
                # the file holding them. The exception text is safe — it names
                # the file, never its contents.
                logger.warning("Could not read %s (%s); provider keys from it are unavailable.", env_file, exc)
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
            except Exception as exc:
                # A broken config.yaml used to roll every setting silently back
                # to its built-in default — timeouts, rate limits, local server
                # URLs — with nothing in the log to connect the two.
                logger.warning("Could not parse %s (%s); falling back to built-in defaults.", config_file, exc)

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
