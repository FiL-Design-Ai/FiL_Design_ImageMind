"""
Provider runtime — remote fetch, cache, and probe.
"""

import logging
import time
from typing import Any, Dict, List, Optional

import requests

from .config import (
    LOCAL_PROVIDERS,
    PROVIDERS,
    get_recommended_models,
    get_recommended_vision_models,
    is_model_vision_capable,
)
from .model_capabilities import (
    declared_vision,
    forget_declared,
    is_chat_capable,
    known_declaration,
    remember_declared,
)
from .network import HTTPClient
from .processing import normalize_model_name
from .provider_accounts import get_api_key, get_provider_base_url
from .provider_resilience import QUOTA_MESSAGE, http_cause, looks_like_quota

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.ProviderRuntime")

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
    http = http_cause(exc)
    if http is not None:
        code = http.response.status_code
        if code in (401, 403):
            return "auth_error", "API-ключ отклонён провайдером."
        if code in (402, 429):
            body = ""
            try:
                body = http.response.text or ""
            except Exception:
                body = ""
            if code == 402 or looks_like_quota(body, str(exc)):
                return "quota_exhausted", QUOTA_MESSAGE
            return "rate_limited", "Провайдер временно ограничил запросы."
    if isinstance(exc, (requests.exceptions.ConnectionError, requests.exceptions.Timeout)):
        return "offline", "Провайдер недоступен."
    text = str(exc).lower()
    if "401" in text or "403" in text or "unauthorized" in text or "forbidden" in text:
        return "auth_error", "API-ключ отклонён провайдером."
    if looks_like_quota(text) or "402" in text:
        return "quota_exhausted", QUOTA_MESSAGE
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
    # The capability answers came with that listing; keeping them past it would
    # let a withdrawn model keep its badge.
    forget_declared(provider)


def _entries_from_payload(provider_key: str, data: Any) -> List[tuple[str, Dict[str, Any]]]:
    """(model id, raw catalogue entry) pairs, per provider response shape.

    The raw entry is carried along because that is where the provider states
    what the model can do — dropping it early is what forced the pack to guess.
    """
    if provider_key == "ollama":
        raw = data.get("models", [])
        return [(item.get("name", ""), item) for item in raw if isinstance(item, dict)]
    if provider_key == "google":
        raw = data.get("models", [])
        return [
            (item.get("name", "").removeprefix("models/"), item)
            for item in raw
            if isinstance(item, dict)
            and "generateContent" in item.get("supportedGenerationMethods", ["generateContent"])
        ]
    raw = data.get("data", data.get("models", []))
    return [(item.get("id") or item.get("name", ""), item) for item in raw if isinstance(item, dict)]


def _classify(provider_key: str, entries: List[tuple[str, Dict[str, Any]]]) -> tuple[List[str], List[str]]:
    """Split a raw catalogue into (chat models, the vision subset of them)."""
    models: List[str] = []
    vision: List[str] = []
    for name, entry in entries:
        if not name:
            continue
        clean = normalize_model_name(name)
        if not clean or not is_chat_capable(provider_key, clean, entry):
            continue
        models.append(clean)
        stated = declared_vision(provider_key, entry)
        if stated is not None:
            remember_declared(provider_key, clean, stated)
        if is_model_vision_capable(provider_key, clean):
            vision.append(clean)
    models = sorted(set(models))
    vision = sorted(set(vision) & set(models))
    return models, vision


def _curated_fallback(provider_key: str) -> tuple[List[str], List[str]]:
    """The offline answer for a provider: its curated list, vision resolved.

    The audited answers are seeded as declarations, so the name-only callers
    (`node_scanner`, `node_decomposer`, `node_dataset`) badge these models the
    same way the dropdown does. Anything the provider itself declared during an
    earlier successful listing wins — that is fresher than the audit.
    """
    models = sorted(get_recommended_models(provider_key))
    audited = get_recommended_vision_models(provider_key)
    for name in models:
        if known_declaration(provider_key, name) is None:
            remember_declared(provider_key, name, name in audited)
    return models, [m for m in models if is_model_vision_capable(provider_key, m)]


def _fetch_cloudflare_catalog(base_url: str, api_key: str) -> List[Dict[str, Any]]:
    """Cloudflare's model catalogue, which lives outside the OpenAI-compatible base.

    `/ai/v1` speaks chat completions and has no `/models`; the catalogue — and
    with it every `vision` flag — sits at `/ai/models/search` on the account.
    """
    root = base_url.rstrip("/")
    if root.endswith("/v1"):
        root = root[: -len("/v1")]
    client = HTTPClient(max_retries=0, default_timeout=15)
    response = client.get(
        f"{root}/models/search",
        headers={"Authorization": f"Bearer {api_key}"},
        params={"per_page": 500},
        quiet=True,
    )
    result = response.json().get("result", [])
    return [
        item
        for item in result
        if isinstance(item, dict) and (item.get("task") or {}).get("name") == "Text Generation"
    ]


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
        # Prefer the account's own catalogue: it carries the `vision` property,
        # so the badges stop depending on what the model was named. The curated
        # list stays as the offline answer.
        forget_declared(provider_key)
        models: List[str] = []
        vision_models: List[str] = []
        message = "Подключение работает."
        try:
            entries = [(item.get("name", ""), item) for item in _fetch_cloudflare_catalog(base_url, api_key)]
            models, vision_models = _classify(provider_key, entries)
        except Exception:
            logger.warning("Cloudflare model catalogue unavailable — using the curated list")
        # An empty catalogue is a failed catalogue: a reachable endpoint that
        # answers with nothing must not present itself as a working provider
        # with no models.
        if not models:
            forget_declared(provider_key)
            models, vision_models = _curated_fallback(provider_key)
            message = "Каталог недоступен — показан проверенный список моделей Cloudflare."
        result = _result("available", message, models, vision_models)
        _model_cache[provider_key] = (time.time(), models, "available", message, vision_models)
        return result

    try:
        client = HTTPClient(max_retries=0, default_timeout=15)
        url = f"{base_url.rstrip('/')}{definition.models_endpoint}"
        headers: Dict[str, str] = {}
        if provider_key == "google":
            headers["x-goog-api-key"] = api_key
        elif provider_key not in LOCAL_PROVIDERS:
            headers[definition.header_name] = f"{definition.header_prefix}{api_key}".strip()
        response = client.get(url, headers=headers, quiet=True)
        forget_declared(provider_key)
        clean, vision_models = _classify(provider_key, _entries_from_payload(provider_key, response.json()))
        # Only what the answer proves: the key was accepted by `/models` and the
        # catalogue is readable. It says nothing about generation — OpenAI and
        # Google both list this key happily and answer 429 on the first
        # completion. Claiming "подключение работает" here is what put a green
        # badge on an account that cannot run a single node.
        message = "Список моделей получен."
        result = _result("available", message, clean, vision_models)
        _model_cache[provider_key] = (time.time(), clean, "available", message, vision_models)
        return result
    except Exception as exc:
        status, message = _error_status(exc)
        logger.warning("Model list request failed for %s (%s)", provider_key, status)
        _model_cache.pop(provider_key, None)
        # A failed listing must not leave the dropdown empty — there would be
        # nothing to pick and no way to run the node at all. The curated list
        # fills it; the status stays the real one, because a fallback list is
        # not a working connection. Not cached: the next call retries the
        # provider. Local servers get no fallback — a model that was never
        # pulled is not a choice.
        if provider_key in LOCAL_PROVIDERS:
            return _result(status, message)
        models, vision_models = _curated_fallback(provider_key)
        if not models:
            return _result(status, message)
        return _result(status, f"{message} Показан проверенный список моделей.", models, vision_models)


def fetch_models_from_provider(provider: str) -> List[str]:
    return fetch_models_with_status(provider)["models"]


def _probe_model(provider_key: str, listed: List[str]) -> str:
    """Which model to spend the probe on when the caller named none.

    A curated id that is actually listed, if there is one — those were chosen
    to be cheap and are known to exist. Otherwise the first thing on offer.
    """
    for candidate in get_recommended_models(provider_key):
        if candidate in listed:
            return candidate
    return listed[0] if listed else ""


def probe_provider(provider: str, model: str = "") -> Dict[str, Any]:
    """Verify a provider end to end: list its models, then actually generate.

    The generation is the point. A readable `/models` is not a working
    provider — it is the state an unpaid OpenAI key sits in — so the probe
    picks a model itself when the caller names none, rather than reporting the
    listing as success.
    """
    started = time.perf_counter()
    listing = fetch_models_with_status(provider)
    if listing["status"] != "available":
        return {
            "status": listing["status"],
            "message": listing["message"],
            "latency_ms": round((time.perf_counter() - started) * 1000),
        }

    model_name = normalize_model_name(model) or _probe_model(provider, listing["models"])
    if not model_name:
        return {
            "status": "offline",
            "message": "Провайдер не предложил ни одной модели.",
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
            # Reasoning models spend the budget before they say anything: at 16
            # tokens `gpt-oss-20b` returned 13 reasoning tokens, empty content
            # and `finish_reason: length`, and the probe reported the provider
            # as unreachable while it was billing for the call.
            max_tokens=64,
        )
        return {
            "status": "available",
            "message": f"Модель {model_name} отвечает.",
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
