"""Provider resilience: retry policies, error classification, OpenRouter fallback.

Pure helpers kept out of ModelClient so the client stays a thin strategy
dispatcher. ModelClient imports what it needs from here and applies retry /
fallback / classification at the call boundary.
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple

import requests

from .config import (
    OPENROUTER_EXCLUDED_MODEL_IDS,
    OPENROUTER_EXCLUDED_MODEL_PATTERNS,
    OPENROUTER_PREFERRED_VISION_MODELS,
    PROVIDERS,
    get_config,
    get_provider_config,
)
from .network import HTTPClient
from .processing import normalize_model_name

logger = logging.getLogger("FiL_LLM.ProviderResilience")


# ---------------------------------------------------------------------------
# Retry policy
# ---------------------------------------------------------------------------


@dataclass(frozen=True)
class RetryPolicy:
    max_retries: int
    retry_statuses: Tuple[int, ...] = (429, 500, 502, 503, 504)
    no_retry_statuses: Tuple[int, ...] = (400, 401, 403, 404)
    retry_delay_base: float = 0.75

    def as_kwargs(self) -> Dict[str, Any]:
        return {
            "max_retries": self.max_retries,
            "retry_statuses": set(self.retry_statuses),
            "no_retry_statuses": set(self.no_retry_statuses),
            "retry_delay_base": self.retry_delay_base,
        }


_RETRY_TABLE: Dict[str, RetryPolicy] = {
    "google": RetryPolicy(max_retries=2, retry_delay_base=0.75),
    "groq": RetryPolicy(max_retries=2, retry_delay_base=1.25),
    "openrouter": RetryPolicy(max_retries=1, retry_delay_base=0.75),
    "cloudflare": RetryPolicy(max_retries=1, retry_delay_base=0.75),
}


def get_retry_policy(provider: str) -> Optional[RetryPolicy]:
    """Return the per-provider retry policy, or None for providers that retry
    only at the transport level (ollama, lmstudio, openai)."""
    return _RETRY_TABLE.get(provider)


# ---------------------------------------------------------------------------
# Cloudflare error classification
# ---------------------------------------------------------------------------


def classify_cloudflare_error(error_details: Dict[str, Any]) -> Tuple[str, str]:
    """Classify a Cloudflare Workers AI error into (category, message)."""
    status = error_details.get("status")
    code = error_details.get("provider_code")
    body = error_details.get("provider_message") or error_details.get("body") or ""
    if status == 401:
        return "auth_failed", "Cloudflare отклонил токен. Проверьте CLOUDFLARE_API_TOKEN."
    if status == 403 and code == 5016:
        return "terms_not_accepted", "Для Meta vision-модели не приняты license terms в Cloudflare dashboard."
    if status == 403 and code in {5018, 3041}:
        return "model_access_denied", "Аккаунту Cloudflare недоступна выбранная модель."
    if status == 429 and code == 3036:
        return "rate_limited", "У Cloudflare закончилась daily free allocation для Workers AI."
    if status in {400, 404}:
        return "bad_payload_or_model", "Cloudflare отклонил payload или model id."
    return "error", str(body) or "Cloudflare request failed"


# ---------------------------------------------------------------------------
# Generic cloud error normalization
# ---------------------------------------------------------------------------


def normalize_cloud_error(exc: BaseException, provider: str, model: str) -> Dict[str, Any]:
    """Provider-agnostic error classifier producing a normalized dict."""
    message = str(exc)
    lowered = message.lower()
    status: Optional[int] = None
    if isinstance(exc, requests.exceptions.HTTPError) and exc.response is not None:
        status = exc.response.status_code
    if status is None:
        # Fall back to sniffing a leading HTTP status code out of the message.
        import re

        match = re.search(r"\b(4\d{2}|5\d{2})\b", message)
        if match:
            status = int(match.group(1))

    is_timeout = isinstance(exc, requests.exceptions.Timeout) or any(
        token in lowered for token in ("timed out", "timeout", "cloudflare timed out")
    )

    if is_timeout:
        category, retryable = "network_error", True
    elif status == 402 or any(t in lowered for t in ("payment required", "credit balance", "insufficient funds", "billing", "purchase credits")):
        category, retryable = "payment_required", False
    elif status == 429:
        category, retryable = "rate_limited", True
    elif status == 401:
        category, retryable = "auth_failed", False
    elif status == 403:
        category, retryable = "access_denied", False
    elif status in (400, 404):
        category, retryable = "bad_payload_or_model", False
    elif status is not None and status >= 500:
        category, retryable = "network_error", True
    elif isinstance(exc, requests.exceptions.ConnectionError):
        category, retryable = "network_error", True
    else:
        category, retryable = "network_error", True

    recommendations = {
        "auth_failed": "Проверьте API-ключ провайдера.",
        "payment_required": "Пополните баланс аккаунта провайдера.",
        "rate_limited": "Подождите или уменьшите частоту запросов.",
        "access_denied": "Проверьте доступ к модели на аккаунте.",
        "bad_payload_or_model": "Проверьте имя модели и формат запроса.",
        "network_error": "Проверьте подключение к сети или уменьшите размер запроса.",
    }

    return {
        "provider": provider,
        "model": model,
        "http_status": status,
        "error_category": category,
        "retryable": retryable,
        "user_message": message,
        "recommendation": recommendations.get(category, ""),
    }


def is_timeout_error(exc: BaseException) -> bool:
    """True if ``exc`` represents a request timeout."""
    if isinstance(exc, requests.exceptions.Timeout):
        return True
    lowered = str(exc).lower()
    return any(token in lowered for token in ("timed out", "timeout", "cloudflare timed out"))


# ---------------------------------------------------------------------------
# OpenRouter free-model vision fallback
# ---------------------------------------------------------------------------


def _fetch_openrouter_catalog(api_key: str) -> Tuple[List[Dict[str, Any]], bool]:
    """Fetch the OpenRouter /models catalog. Returns (data, catalog_available)."""
    if not api_key:
        return [], False
    try:
        client = HTTPClient(max_retries=0, default_timeout=15)
        base_url = PROVIDERS["openrouter"].base_url
        resp = client.get(
            f"{base_url}/models",
            headers={"Authorization": f"Bearer {api_key}"},
            quiet=True,
        )
        data = resp.json().get("data", [])
        return data, True
    except Exception:
        return [], False


def _candidate_sort_key(model_id: str, priority_rank: Dict[str, int]) -> Tuple[int, int, int, str]:
    clean = model_id.lower()
    in_priority = 0 if clean in priority_rank else 1
    rank = priority_rank.get(clean, 999)
    vision_hint = 0 if any(t in clean for t in ("vision", "vl", "gemma-3", "gemma-4", "nemotron-nano-12b-v2-vl")) else 1
    return (in_priority, rank, vision_hint, clean)


def get_openrouter_candidates(
    config: Dict[str, Any],
    preferred_model: str,
    require_vision: bool = True,
) -> List[str]:
    """Return a ranked list of free OpenRouter vision candidate model ids.

    Falls back to OPENROUTER_PREFERRED_VISION_MODELS when the catalog is
    unavailable (e.g. offline) so the node still has something to try.
    """
    api_key = (get_provider_config("openrouter") or {}).get("api_key") or ""
    catalog, catalog_available = _fetch_openrouter_catalog(api_key)
    priority_rank = {name.lower(): idx for idx, name in enumerate(OPENROUTER_PREFERRED_VISION_MODELS)}
    preferred_clean = normalize_model_name(preferred_model).lower()

    candidates: List[str] = []
    for item in catalog:
        model_id = item.get("id") or ""
        if not model_id:
            continue
        clean = model_id.lower()
        if any(pat in clean for pat in OPENROUTER_EXCLUDED_MODEL_PATTERNS):
            continue
        if clean in OPENROUTER_EXCLUDED_MODEL_IDS:
            continue
        input_modalities = item.get("architecture", {}).get("input_modalities", []) or item.get("input_modalities", [])
        output_modalities = item.get("architecture", {}).get("output_modalities", []) or item.get("output_modalities", [])
        modality = item.get("modality", "")
        if "text" not in input_modalities:
            continue
        if "text" not in output_modalities and "text" not in modality:
            continue
        pricing = item.get("pricing", {}) or {}
        is_free = (
            clean == "openrouter/free"
            or clean.endswith(":free")
            or all(float(v) == 0.0 for v in pricing.values() if isinstance(v, (int, float, str)))
        )
        if not is_free:
            continue
        if require_vision and "image" not in input_modalities:
            continue
        candidates.append(model_id)

    candidates.sort(key=lambda mid: _candidate_sort_key(mid, priority_rank))
    # Dedup preserving order.
    candidates = list(dict.fromkeys(candidates))

    # Move the user's preferred model to the front if it's among candidates.
    if preferred_clean and preferred_clean in (c.lower() for c in candidates):
        idx = next(i for i, c in enumerate(candidates) if c.lower() == preferred_clean)
        candidates.insert(0, candidates.pop(idx))
    # Push the generic "openrouter/free" router to the end if we have real candidates.
    if require_vision and "openrouter/free" in candidates and len(candidates) > 1:
        idx = candidates.index("openrouter/free")
        candidates.append(candidates.pop(idx))

    if not candidates and require_vision and not catalog_available:
        return list(OPENROUTER_PREFERRED_VISION_MODELS)
    return candidates
