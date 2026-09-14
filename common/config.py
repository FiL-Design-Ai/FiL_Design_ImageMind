import logging
import os
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
    "huggingface": ProviderConfig(name="huggingface", display_name="Hugging Face (Serverless)", base_url="https://router.huggingface.co/v1", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=128000, timeout_default=90, environment_var="HF_TOKEN", description="Hugging Face Serverless Inference (Qwen3-VL, DeepSeek, Aya)"),
    "deepinfra": ProviderConfig(name="deepinfra", display_name="DeepInfra", base_url="https://api.deepinfra.com/v1/openai", auth_type=AuthType.BEARER, header_name="Authorization", header_prefix="Bearer ", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=128000, timeout_default=90, environment_var="DEEPINFRA_API_KEY", description="DeepInfra serverless AI models (Qwen3-VL 235B, DeepSeek-R1)"),
    "vllm": ProviderConfig(name="vllm", display_name="vLLM (Local)", base_url="http://127.0.0.1:8000/v1", auth_type=AuthType.NONE, header_name="", header_prefix="", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=64000, timeout_default=120, description="High-throughput local models via vLLM"),
    "llamacpp": ProviderConfig(name="llamacpp", display_name="llama.cpp (Local)", base_url="http://127.0.0.1:8080/v1", auth_type=AuthType.NONE, header_name="", header_prefix="", models_endpoint="/models", chat_endpoint="/chat/completions", vision_support=True, max_context_length=32000, timeout_default=120, description="Local inference via llama.cpp / llama-server"),
}

LOCAL_PROVIDERS = ("ollama", "lmstudio", "vllm", "llamacpp")

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
ACCOUNT_PROVIDER_KEYS = ("openai", "google", "groq", "openrouter", "cloudflare", "huggingface", "deepinfra")

# Last-resort name matching, and by now only the local providers reach it —
# Ollama and LM Studio publish no capability metadata. Every cloud provider is
# answered from its own /models response (see `model_capabilities`).
#
# Dropped on 2026-07-29 because the providers themselves contradicted them:
# `gpt-oss` (Groq and OpenRouter both declare the family text-only, yet the
# token badged all three Groq gpt-oss models), `nemotron` (the family splits —
# `nemotron-nano-12b-v2-vl` sees, `nemotron-3-nano-30b-a3b` does not), and
# `glm-4`/`glm-5` (Cloudflare's catalogue carries no vision flag for glm-5.2).
VISION_MODEL_HINTS = [
    "vision", "-vl", "/vl", "_vl", "vl:", "llava", "qwen-vl", "qwenvl", "qwen2vl", "qwen3vl", "qwen3-vl",
    "moondream", "gemini", "gemma-3", "gemma-4", "pixtral", "mistral-small-3.1",
    "llama-3.2-11b", "llama-3.2-90b", "llama-4-scout", "llama-4-maverick", "claude", "grok", "kimi",
    "minicpm", "internvl", "deepseek-vl", "xcomposer",
]

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
    # Google — tested 2026-09-07: flash models work on free tier.
    "google": [
        "gemini-2.5-flash",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.7-flash",
        "gemini-3-flash-preview",
        "gemini-flash-latest",
    ],
    # Groq — tested 2026-09-07: all 8 models work fast. qwen/qwen3.6-27b does vision.
    "groq": [
        "qwen/qwen3.8-27b",
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "qwen/qwen3.6-27b",
        "groq/compound-mini",
        "allam-2-7b",
    ],
    # OpenRouter — models verified working via live audit on 2026-09-07.
    "openrouter": [
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        "minimax/minimax-m3:free",
        "meta-llama/llama-4-scout",
        "meta-llama/llama-4-maverick",
        "mistralai/mistral-small-3.2-24b-instruct",
        "google/gemini-2.5-flash",
        "google/gemini-3.1-flash-lite",
        "amazon/nova-pro-v1",
        "minimax/minimax-01",
        "baidu/ernie-4.5-vl-424b-a47b",
        "openrouter/free",
    ],
    # Cloudflare Workers AI — verified working on 2026-09-07:
    # scout carries vision: true; llama-3.3-70b-fast and qwen3.8 are text workhorses.
    "cloudflare": [
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        "@cf/qwen/qwen3.8-27b",
        "@cf/qwen/qwen3-30b-a3b-fp8",
        "@cf/qwen/qwq-32b",
        "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
        "@cf/google/gemma-4-26b-a4b-it",
        "@cf/openai/gpt-oss-120b",
    ],
    "huggingface": [
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "Qwen/Qwen2.5-VL-72B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
        "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
        "Qwen/Qwen2.5-72B-Instruct",
    ],
    "deepinfra": [
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
        "deepseek-ai/DeepSeek-R1-0528",
        "meta-llama/Llama-3.3-70B-Instruct",
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
        "gemini-2.5-flash",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.7-flash",
        "gemini-3-flash-preview",
        "gemini-flash-latest",
    },
    "groq": {
        "qwen/qwen3.6-27b",
        "qwen/qwen3.8-27b",
    },
    # `openrouter/free` is the auto-router: OpenRouter declares it
    # image-capable because it can route to a model that sees.
    "openrouter": {
        "openrouter/free",
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        "meta-llama/llama-4-scout",
        "meta-llama/llama-4-maverick",
        "mistralai/mistral-small-3.2-24b-instruct",
        "google/gemini-2.5-flash",
        "google/gemini-3.1-flash-lite",
        "amazon/nova-pro-v1",
        "baidu/ernie-4.5-vl-424b-a47b",
    },
    "cloudflare": {
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "@cf/google/gemma-4-26b-a4b-it",
        "@cf/qwen/qwen3.8-27b",
    },
    "huggingface": {
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "Qwen/Qwen2.5-VL-72B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    },
    "deepinfra": {
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    },
}

# Live verified working models — audited via real API probe 2026-09-07.
# These models are guaranteed to be online, responsive and within free quotas.
VERIFIED_MODELS: Dict[str, List[str]] = {
    "groq": [
        "qwen/qwen3.8-27b",
        "qwen/qwen3.6-27b",
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "openai/gpt-oss-safeguard-20b",
        "groq/compound",
        "groq/compound-mini",
        "allam-2-7b",
    ],
    "google": [
        "gemini-2.5-flash",
        "gemini-2.5-flash-lite",
        "gemini-3-flash-preview",
        "gemini-3.1-flash-lite",
        "gemini-3.1-flash-lite-preview",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.6-flash",
        "gemini-3.7-flash",
        "gemini-3.8-flash",
        "gemini-flash-latest",
        "gemini-flash-lite-latest",
        "gemini-robotics-er-2-preview",
        "gemma-4-26b-a4b-it",
    ],
    "cloudflare": [
        "@cf/meta/llama-4-scout-17b-16e-instruct",
        "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "@cf/google/gemma-4-26b-a4b-it",
        "@cf/qwen/qwen3.8-27b",
        "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        "@cf/meta/llama-3.2-1b-instruct",
        "@cf/meta/llama-3.2-3b-instruct",
        "@cf/meta/llama-3.1-8b-instruct-fp8",
        "@cf/meta-llama/llama-2-7b-chat-hf-lora",
        "@cf/qwen/qwen3-30b-a3b-fp8",
        "@cf/qwen/qwq-32b",
        "@cf/qwen/qwen2.5-coder-32b-instruct",
        "@cf/mistralai/mistral-small-3.1-24b-instruct",
        "@cf/mistral/mistral-7b-instruct-v0.2-lora",
        "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
        "@cf/google/gemma-4-26b-a4b-it",
        "@cf/google/gemma-2b-it-lora",
        "@cf/google/gemma-7b-it-lora",
        "@cf/openai/gpt-oss-120b",
        "@cf/openai/gpt-oss-20b",
        "@cf/nvidia/nemotron-3-120b-a12b",
        "@cf/ibm-granite/granite-4.0-h-micro",
        "@cf/aisingapore/gemma-sea-lion-v4-27b-it",
        "@cf/zai-org/glm-4.7-flash",
    ],
    "openrouter": [
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        "minimax/minimax-m3:free",
        "meta-llama/llama-4-scout",
        "meta-llama/llama-4-maverick",
        "mistralai/mistral-small-3.2-24b-instruct",
        "google/gemini-2.5-flash",
        "google/gemini-2.5-flash-lite",
        "google/gemini-2.5-pro",
        "google/gemini-3.1-flash-lite",
        "google/gemini-3.5-flash-lite",
        "google/gemini-3.6-flash",
        "google/gemma-3-4b-it",
        "amazon/nova-pro-v1",
        "amazon/nova-lite-v1",
        "anthropic/claude-3-haiku",
        "baidu/ernie-4.5-vl-424b-a47b",
        "bytedance/ui-tars-1.5-7b",
        "minimax/minimax-01",
        "openrouter/free",
    ],
    "huggingface": [
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "Qwen/Qwen2.5-VL-72B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
        "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
        "Qwen/Qwen2.5-72B-Instruct",
    ],
    "deepinfra": [
        "Qwen/Qwen3-VL-235B-A22B-Instruct",
        "Qwen/Qwen3-VL-30B-A3B-Instruct",
        "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
        "deepseek-ai/DeepSeek-R1-0528",
        "meta-llama/Llama-3.3-70B-Instruct",
    ],
}


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


def get_verified_models(provider: str) -> List[str]:
    """Models confirmed working via live API probe with verified latency and availability."""
    return VERIFIED_MODELS.get(provider.strip().lower(), [])


def is_model_verified(provider: str, model: str) -> bool:
    """Whether `model` is in the audited, verified-working set for `provider`."""
    verified_list = VERIFIED_MODELS.get(provider.strip().lower())
    if not verified_list:
        return False
    clean = model.strip()
    if clean in verified_list:
        return True
    # Strip optional vendor prefix or namespace for robust matching
    clean_base = clean.split("/")[-1].lower()
    for v in verified_list:
        if v.split("/")[-1].lower() == clean_base:
            return True
    return False


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
