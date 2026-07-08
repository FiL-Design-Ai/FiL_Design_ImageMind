"""
Provider runtime — remote fetch, cache, and probe.
"""

import logging
import time
from typing import Any, Dict, List, Optional

import requests

from .config import LOCAL_PROVIDERS, PROVIDERS, get_recommended_models, is_model_vision_capable
from .network import HTTPClient
from .processing import normalize_model_name
from .provider_accounts import get_api_key, get_provider_base_url

logger = logging.getLogger("FiL_LLM.ProviderRuntime")

MODEL_CACHE_TTL = 300  # seconds (5 minutes)
_model_cache: Dict[str, tuple[float, List[str], str, str, List[str]]] = {}
"""provider → (timestamp, model_names, status_label, message, vision_model_names)"""


def _result(
    status: str, message: str, models: List[str] | None = None, vision_models: List[str] | None = None
) -> Dict[str, Any]:
    return {
        "models": models or [],
        "status": status,
        "message": message,
        "vision_models": vision_models or [],
    }


def _error_status(exc: Exception) -> tuple[str, str]:
    if isinstance(exc, requests.exceptions.HTTPError) and exc.response is not None:
        code = exc.response.status_code
        if code in (401, 403):
            return "auth_error", "API-ключ отклонён провайдером."
        if code == 429:
            return "rate_limited", "Провайдер временно ограничил запросы."
    if isinstance(exc, (requests.exceptions.ConnectionError, requests.exceptions.Timeout)):
        return "offline", "Провайдер недоступен."
    text = str(exc).lower()
    if "401" in text or "403" in text or "unauthorized" in text or "forbidden" in text:
        return "auth_error", "API-ключ отклонён провайдером."
    if "429" in text or "rate limit" in text:
        return "rate_limited", "Провайдер временно ограничил запросы."
    if "connection" in text or "timeout" in text or "timed out" in text:
        return "offline", "Провайдер недоступен."
    return "offline", "Не удалось связаться с провайдером."


def safe_provider_error(exc: Exception) -> str:
    """Convert provider failures to a user-safe Russian message."""
    return _error_status(exc)[1]


def invalidate_model_cache(provider: Optional[str] = None) -> None:
    """Drop cached model list for one provider (or all if provider is None)."""
    if provider:
        _model_cache.pop(provider.lower().strip(), None)
    else:
        _model_cache.clear()


def fetch_models_with_status(provider: str, force: bool = False) -> Dict[str, Any]:
    provider_key = provider.lower().strip()

    # Fresh cache hit (success results only — errors always retry)
    if not force:
        cached = _model_cache.get(provider_key)
        if cached is not None:
            ts, models, status, message, vision_models = cached
            if status == "available" and time.time() - ts < MODEL_CACHE_TTL:
                return _result(status, message, models, vision_models)

    definition = PROVIDERS.get(provider_key)
    if not definition:
        return _result("offline", "Неизвестный провайдер.")

    api_key = get_api_key(provider_key)
    if provider_key not in LOCAL_PROVIDERS and not api_key:
        _model_cache.pop(provider_key, None)
        return _result("configured", "Сначала сохрани API-ключ.")

    base_url = get_provider_base_url(provider_key)
    if not base_url:
        result = _result("configured", "Не указан URL или account_id провайдера.")
        _model_cache.pop(provider_key, None)
        return result

    if provider_key == "cloudflare":
        models = sorted(get_recommended_models(provider_key))
        vision_models = [m for m in models if is_model_vision_capable(provider_key, m)]
        message = "Используется проверенный список моделей Cloudflare."
        result = _result("available", message, models, vision_models)
        _model_cache[provider_key] = (time.time(), models, "available", message, vision_models)
        return result

    try:
        client = HTTPClient(max_retries=0, default_timeout=15)
        url = f"{base_url.rstrip('/')}{definition.models_endpoint}"
        headers: Dict[str, str] = {}
        if provider_key == "google":
            url = f"{url}?key={api_key}"
        elif provider_key not in LOCAL_PROVIDERS:
            headers[definition.header_name] = f"{definition.header_prefix}{api_key}".strip()
        response = client.get(url, headers=headers, quiet=True)
        data = response.json()
        if provider_key == "ollama":
            models = [item.get("name", "") for item in data.get("models", [])]
        else:
            models = [item.get("id") or item.get("name", "") for item in data.get("data", data.get("models", []))]
            if provider_key == "google":
                models = [name.removeprefix("models/") for name in models]
        clean = sorted({normalize_model_name(name) for name in models if name})
        vision_models = [m for m in clean if is_model_vision_capable(provider_key, m)]
        message = "Подключение работает."
        result = _result("available", message, clean, vision_models)
        _model_cache[provider_key] = (time.time(), clean, "available", message, vision_models)
        return result
    except Exception as exc:
        status, message = _error_status(exc)
        logger.warning("Model list request failed for %s (%s)", provider_key, status)
        _model_cache.pop(provider_key, None)
        return _result(status, message)


def fetch_models_from_provider(provider: str) -> List[str]:
    return fetch_models_with_status(provider)["models"]


def probe_provider(provider: str, model: str = "") -> Dict[str, Any]:
    started = time.perf_counter()
    listing = fetch_models_with_status(provider)
    if listing["status"] != "available":
        return {
            "status": listing["status"],
            "message": listing["message"],
            "latency_ms": round((time.perf_counter() - started) * 1000),
        }

    model_name = normalize_model_name(model)
    if provider == "cloudflare" and not model_name and listing["models"]:
        model_name = listing["models"][0]
    if not model_name:
        return {
            "status": "available",
            "message": listing["message"],
            "latency_ms": round((time.perf_counter() - started) * 1000),
        }

    try:
        from .models import ModelClient

        ModelClient().generate(
            provider=provider,
            model=model_name,
            system_prompt="Return a short connection confirmation.",
            user_prompt="Reply with OK.",
            temperature=0.0,
            max_tokens=16,
        )
        return {
            "status": "available",
            "message": "Модель отвечает.",
            "latency_ms": round((time.perf_counter() - started) * 1000),
        }
    except Exception as exc:
        status, message = _error_status(exc)
        logger.warning("Provider probe failed for %s (%s)", provider, status)
        return {
            "status": status,
            "message": message,
            "latency_ms": round((time.perf_counter() - started) * 1000),
        }
