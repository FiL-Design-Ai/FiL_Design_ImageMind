from __future__ import annotations

import json
from unittest.mock import patch

import requests

from FiL_Design_ImageMind.common import provider_resilience as pr
from FiL_Design_ImageMind.common.provider_resilience import (
    RetryPolicy,
    classify_cloudflare_error,
    get_openrouter_candidates,
    get_retry_policy,
    is_timeout_error,
    normalize_cloud_error,
)


# ---------------------------------------------------------------------------
# Retry policy table
# ---------------------------------------------------------------------------


def test_retry_policy_per_provider():
    assert get_retry_policy("google") == RetryPolicy(max_retries=3, retry_delay_base=5.0)
    assert get_retry_policy("groq") == RetryPolicy(max_retries=2, retry_delay_base=1.25)
    assert get_retry_policy("openrouter") == RetryPolicy(max_retries=1, retry_delay_base=0.75)
    assert get_retry_policy("cloudflare") == RetryPolicy(max_retries=1, retry_delay_base=0.75)


def test_retry_policy_none_for_transport_only_providers():
    for provider in ("ollama", "lmstudio", "openai"):
        assert get_retry_policy(provider) is None


def test_retry_policy_as_kwargs():
    policy = RetryPolicy(max_retries=2)
    kwargs = policy.as_kwargs()
    assert kwargs["max_retries"] == 2
    assert 429 in kwargs["retry_statuses"]
    assert 400 in kwargs["no_retry_statuses"]
    assert kwargs["retry_delay_base"] == 0.75


# ---------------------------------------------------------------------------
# Cloudflare error classification
# ---------------------------------------------------------------------------


def test_cloudflare_auth_failed():
    cat, _ = classify_cloudflare_error({"status": 401})
    assert cat == "auth_failed"


def test_cloudflare_terms_not_accepted():
    cat, _ = classify_cloudflare_error({"status": 403, "provider_code": 5016})
    assert cat == "terms_not_accepted"


def test_cloudflare_model_access_denied():
    cat, _ = classify_cloudflare_error({"status": 403, "provider_code": 5018})
    assert cat == "model_access_denied"
    cat, _ = classify_cloudflare_error({"status": 403, "provider_code": 3041})
    assert cat == "model_access_denied"


def test_cloudflare_rate_limited():
    cat, _ = classify_cloudflare_error({"status": 429, "provider_code": 3036})
    assert cat == "rate_limited"


def test_cloudflare_bad_payload_or_model():
    cat, _ = classify_cloudflare_error({"status": 400})
    assert cat == "bad_payload_or_model"
    cat, _ = classify_cloudflare_error({"status": 404})
    assert cat == "bad_payload_or_model"


def test_cloudflare_generic_error():
    cat, msg = classify_cloudflare_error({"status": 500, "provider_message": "boom"})
    assert cat == "error"
    assert "boom" in msg


# ---------------------------------------------------------------------------
# normalize_cloud_error
# ---------------------------------------------------------------------------


def test_normalize_cloud_error_timeout_retryable():
    exc = requests.exceptions.Timeout("timed out")
    result = normalize_cloud_error(exc, "openai", "gpt-4o")
    assert result["error_category"] == "network_error"
    assert result["retryable"] is True


def test_normalize_cloud_error_auth_not_retryable():
    exc = requests.exceptions.HTTPError("401 unauthorized")
    result = normalize_cloud_error(exc, "openai", "gpt-4o")
    assert result["error_category"] == "auth_failed"
    assert result["retryable"] is False


def test_normalize_cloud_error_rate_limited_retryable():
    exc = requests.exceptions.HTTPError("429 too many requests")
    result = normalize_cloud_error(exc, "groq", "llama")
    assert result["error_category"] == "rate_limited"
    assert result["retryable"] is True


def test_normalize_cloud_error_payment_required_not_retryable():
    exc = requests.exceptions.HTTPError("402 payment required - insufficient funds")
    result = normalize_cloud_error(exc, "openrouter", "model")
    assert result["error_category"] == "payment_required"
    assert result["retryable"] is False


def _http_error(status: int, body: str, url: str = "https://api.openai.com/v1/chat/completions"):
    """A real HTTPError with a response attached, the way requests raises it."""
    response = requests.Response()
    response.status_code = status
    response.reason = "Too Many Requests"
    response.url = url
    response._content = body.encode()
    return requests.exceptions.HTTPError(
        f"{status} Client Error: {response.reason} for url: {url}", response=response
    )


def test_an_exhausted_balance_is_not_reported_as_a_rate_limit():
    """OpenAI answers an empty balance with 429, not 402, and says so only in
    the body — `str(exc)` is just "429 Client Error: Too Many Requests". Reading
    the status alone tells the user to wait a minute and retry, which can never
    succeed. `probe_provider` already got this right; the generate path did not.
    """
    exc = _http_error(429, json.dumps({"error": {
        "type": "insufficient_quota",
        "message": "You exceeded your current quota, please check your plan and billing details.",
    }}))
    result = normalize_cloud_error(exc, "openai", "gpt-4o")
    assert result["error_category"] == "payment_required"
    assert result["retryable"] is False


def test_an_exhausted_balance_is_still_seen_through_the_wrapper():
    """ModelClient re-raises as `InferenceError(...) from exc`, so by the time a
    node sees the failure the response is one link down the cause chain."""
    inner = _http_error(429, json.dumps({"error": {"type": "insufficient_quota"}}))
    try:
        try:
            raise inner
        except Exception as cause:
            raise RuntimeError(f"API call to openai/gpt-4o failed: {cause}") from cause
    except RuntimeError as wrapped:
        result = normalize_cloud_error(wrapped, "openai", "gpt-4o")
    assert result["error_category"] == "payment_required"
    assert result["retryable"] is False


def test_a_genuine_rate_limit_still_says_wait():
    """The guard above must not swallow real 429s — those are worth retrying,
    and telling someone to top up an account that has money is its own defect."""
    exc = _http_error(429, json.dumps({"error": {
        "message": "Rate limit exceeded: free-models-per-min",
        "code": 429,
    }}), url="https://openrouter.ai/api/v1/chat/completions")
    result = normalize_cloud_error(exc, "openrouter", "model")
    assert result["error_category"] == "rate_limited"
    assert result["retryable"] is True


def test_normalize_cloud_error_has_recommendation():
    exc = requests.exceptions.ConnectionError("connection refused")
    result = normalize_cloud_error(exc, "openai", "gpt-4o")
    assert result["recommendation"]  # non-empty guidance


# ---------------------------------------------------------------------------
# is_timeout_error
# ---------------------------------------------------------------------------


def test_is_timeout_error_requests_timeout():
    assert is_timeout_error(requests.exceptions.Timeout("timed out")) is True


def test_is_timeout_error_message_match():
    assert is_timeout_error(Exception("The request timed out after 30s")) is True
    assert is_timeout_error(Exception("Cloudflare timed out")) is True


def test_is_timeout_error_non_timeout():
    assert is_timeout_error(Exception("404 not found")) is False
    assert is_timeout_error(Exception("connection refused")) is False


# ---------------------------------------------------------------------------
# get_openrouter_candidates (catalog mocked)
# ---------------------------------------------------------------------------


def _mock_catalog_item(model_id, *, input_mods=("text", "image"), output_mods=("text",), pricing=None):
    if pricing is None:
        pricing = {"prompt": "0", "completion": "0"}
    return {
        "id": model_id,
        "architecture": {"input_modalities": list(input_mods), "output_modalities": list(output_mods)},
        "pricing": pricing,
    }


def test_openrouter_candidates_filters_to_free_vision():
    catalog = [
        _mock_catalog_item("google/gemma-4-26b-a4b-it:free"),  # valid free vision
        _mock_catalog_item("paid-model", pricing={"prompt": "0.001", "completion": "0.001"}),  # not free
        _mock_catalog_item("some/text-only:free", input_mods=("text",)),  # free but no vision
        _mock_catalog_item("meta/llama-guard:free"),  # excluded by pattern
    ]
    with patch.object(pr, "_fetch_openrouter_catalog", return_value=(catalog, True)):
        candidates = get_openrouter_candidates({"provider": "openrouter"}, "google/gemma-4-26b-a4b-it:free")
    assert "google/gemma-4-26b-a4b-it:free" in candidates
    assert "paid-model" not in candidates
    assert "some/text-only:free" not in candidates
    assert "meta/llama-guard:free" not in candidates


def test_openrouter_candidates_excluded_ids_dropped():
    catalog = [
        _mock_catalog_item("google/gemma-3-27b-it:free"),  # excluded id
        _mock_catalog_item("nvidia/nemotron-nano-12b-v2-vl:free"),  # allowed
    ]
    with patch.object(pr, "_fetch_openrouter_catalog", return_value=(catalog, True)):
        candidates = get_openrouter_candidates({"provider": "openrouter"}, "")
    assert "nvidia/nemotron-nano-12b-v2-vl:free" in candidates
    assert "google/gemma-3-27b-it:free" not in candidates


def test_openrouter_candidates_empty_catalog_falls_back_to_preferred():
    with patch.object(pr, "_fetch_openrouter_catalog", return_value=([], False)):
        candidates = get_openrouter_candidates({"provider": "openrouter"}, "")
    assert candidates == list(pr.OPENROUTER_PREFERRED_VISION_MODELS)


def test_openrouter_candidates_preferred_model_moved_to_front():
    catalog = [
        _mock_catalog_item("nvidia/nemotron-nano-12b-v2-vl:free"),
        _mock_catalog_item("google/gemma-4-26b-a4b-it:free"),
    ]
    preferred = "nvidia/nemotron-nano-12b-v2-vl:free"
    with patch.object(pr, "_fetch_openrouter_catalog", return_value=(catalog, True)):
        candidates = get_openrouter_candidates({"provider": "openrouter"}, preferred)
    assert candidates[0] == preferred


def test_openrouter_candidates_openrouter_free_pushed_to_end():
    catalog = [
        _mock_catalog_item("openrouter/free"),
        _mock_catalog_item("google/gemma-4-26b-a4b-it:free"),
    ]
    with patch.object(pr, "_fetch_openrouter_catalog", return_value=(catalog, True)):
        candidates = get_openrouter_candidates({"provider": "openrouter"}, "")
    assert candidates[-1] == "openrouter/free"


def test_sanitize_sensitive_data():
    raw_err = "429 Client Error: Too Many Requests for url: https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=AQ.Ab8RN6Jxa8pAyoUN82"
    sanitized = pr.sanitize_sensitive_data(raw_err)
    assert "AQ.Ab8RN6Jxa8pAyoUN82" not in sanitized
    assert "key=***REDACTED***" in sanitized

    raw_header = "x-goog-api-key: MY_SECRET_KEY_12345"
    sanitized_hdr = pr.sanitize_sensitive_data(raw_header)
    assert "MY_SECRET_KEY_12345" not in sanitized_hdr
    assert "***REDACTED***" in sanitized_hdr


# ---------------------------------------------------------------------------
# OpenRouter catalog TTL cache — it used to be re-fetched on every vision
# generation, an extra network round before each call.
# ---------------------------------------------------------------------------


class _FakeCatalogResponse:
    def __init__(self, data):
        self._data = data

    def json(self):
        return {"data": self._data}


def _install_fake_catalog_http(monkeypatch, calls, data):
    class FakeClient:
        def __init__(self, *args, **kwargs):
            pass

        def get(self, url, **kwargs):
            calls.append(url)
            return _FakeCatalogResponse(data)

    monkeypatch.setattr(pr, "HTTPClient", FakeClient)


def test_openrouter_catalog_is_fetched_once_within_ttl(monkeypatch):
    pr.invalidate_openrouter_catalog_cache()
    calls = []
    _install_fake_catalog_http(monkeypatch, calls, [_mock_catalog_item("x/y:free")])

    data_a, ok_a = pr._fetch_openrouter_catalog("key")
    data_b, ok_b = pr._fetch_openrouter_catalog("key")

    assert ok_a and ok_b
    assert data_a == data_b
    assert len(calls) == 1, "the second call must be served from the cache"


def test_openrouter_catalog_is_refetched_after_ttl(monkeypatch):
    pr.invalidate_openrouter_catalog_cache()
    calls = []
    _install_fake_catalog_http(monkeypatch, calls, [_mock_catalog_item("x/y:free")])
    now = [1000.0]
    monkeypatch.setattr(pr.time, "time", lambda: now[0])

    pr._fetch_openrouter_catalog("key")
    now[0] += pr._OPENROUTER_CATALOG_TTL + 1
    pr._fetch_openrouter_catalog("key")

    assert len(calls) == 2


def test_openrouter_catalog_failure_is_not_cached(monkeypatch):
    pr.invalidate_openrouter_catalog_cache()
    calls = []

    class BrokenClient:
        def __init__(self, *args, **kwargs):
            pass

        def get(self, url, **kwargs):
            calls.append(url)
            raise RuntimeError("offline")

    monkeypatch.setattr(pr, "HTTPClient", BrokenClient)

    data, ok = pr._fetch_openrouter_catalog("key")
    assert (data, ok) == ([], False)
    # A failed fetch must not be cached — the next call retries the provider.
    pr._fetch_openrouter_catalog("key")
    assert len(calls) == 2


def test_openrouter_catalog_needs_a_key():
    pr.invalidate_openrouter_catalog_cache()
    data, ok = pr._fetch_openrouter_catalog("")
    assert (data, ok) == ([], False)
