from __future__ import annotations

import time

import pytest

from FiL_Design_ImageMind.common.base import InferenceError
from FiL_Design_ImageMind.common.models import GoogleStrategy, ModelClient, OllamaStrategy, OpenAIStrategy


def _strategy(cls):
    return cls(http_client=None, rate_limiter=None)


# ---------------------------------------------------------------------------
# max_tokens wiring — previously accepted by ModelClient.generate() but
# silently dropped by every strategy's build_payload.
# ---------------------------------------------------------------------------


def test_ollama_build_payload_sets_num_predict_when_max_tokens_given():
    strategy = _strategy(OllamaStrategy)
    payload = strategy.build_payload({"model": "llama3"}, "sys", "user", max_tokens=256)
    assert payload["options"]["num_predict"] == 256


def test_ollama_build_payload_omits_num_predict_when_max_tokens_zero():
    strategy = _strategy(OllamaStrategy)
    payload = strategy.build_payload({"model": "llama3"}, "sys", "user", max_tokens=0)
    assert "num_predict" not in payload["options"]


def test_openai_build_payload_sets_max_tokens():
    strategy = _strategy(OpenAIStrategy)
    payload = strategy.build_payload({"model": "gpt-4o", "provider": "openai"}, "sys", "user", max_tokens=512)
    assert payload["max_tokens"] == 512


def test_openai_build_payload_omits_max_tokens_when_zero():
    strategy = _strategy(OpenAIStrategy)
    payload = strategy.build_payload({"model": "gpt-4o", "provider": "openai"}, "sys", "user", max_tokens=0)
    assert "max_tokens" not in payload


def test_google_build_payload_sets_max_output_tokens_seed_and_json_mime():
    strategy = _strategy(GoogleStrategy)
    payload = strategy.build_payload(
        {"model": "gemini-2.0-flash"}, "sys", "user",
        max_tokens=128, seed=42, response_format="json",
    )
    cfg = payload["generationConfig"]
    assert cfg["maxOutputTokens"] == 128
    assert cfg["seed"] == 42
    assert cfg["responseMimeType"] == "application/json"


def test_google_build_payload_omits_optional_fields_by_default():
    strategy = _strategy(GoogleStrategy)
    payload = strategy.build_payload({"model": "gemini-2.0-flash"}, "sys", "user")
    cfg = payload["generationConfig"]
    assert "maxOutputTokens" not in cfg
    assert "seed" not in cfg
    assert "responseMimeType" not in cfg


# ---------------------------------------------------------------------------
# parse_response must no longer mask a failed/error payload by dumping it
# as if it were the model's actual text answer.
# ---------------------------------------------------------------------------


def test_openai_parse_response_extracts_content():
    strategy = _strategy(OpenAIStrategy)
    text = strategy.parse_response({"choices": [{"message": {"content": " hello "}}]})
    assert text == "hello"


def test_openai_parse_response_accepts_bare_content_field():
    strategy = _strategy(OpenAIStrategy)
    text = strategy.parse_response({"content": " hi "})
    assert text == "hi"


def test_openai_parse_response_raises_on_provider_error():
    strategy = _strategy(OpenAIStrategy)
    with pytest.raises(InferenceError):
        strategy.parse_response({"error": {"message": "invalid api key"}})


def test_openai_parse_response_raises_when_nothing_usable():
    strategy = _strategy(OpenAIStrategy)
    with pytest.raises(InferenceError):
        strategy.parse_response({"choices": []})


def test_google_parse_response_extracts_text():
    strategy = _strategy(GoogleStrategy)
    text = strategy.parse_response(
        {"candidates": [{"content": {"parts": [{"text": "hello"}, {"text": " world"}]}}]}
    )
    assert text == "hello world"


def test_google_parse_response_raises_on_provider_error():
    strategy = _strategy(GoogleStrategy)
    with pytest.raises(InferenceError):
        strategy.parse_response({"error": {"message": "blocked"}})


def test_google_parse_response_raises_when_no_candidates():
    strategy = _strategy(GoogleStrategy)
    with pytest.raises(InferenceError):
        strategy.parse_response({"candidates": []})


# ---------------------------------------------------------------------------
# ModelClient.generate() must actually rate-limit — RateLimiter was
# constructed and injected into every strategy but never called anywhere.
# ---------------------------------------------------------------------------


class _FakeResponse:
    def raise_for_status(self):
        pass

    def json(self):
        return {"message": {"content": "ok"}}


def test_generate_waits_on_the_rate_limiter_before_each_request(monkeypatch):
    client = ModelClient()
    calls = []
    monkeypatch.setattr(client.rate_limiter, "wait_if_needed", lambda ms=None: calls.append(ms))
    monkeypatch.setattr(client.http_client, "post", lambda *a, **kw: _FakeResponse())

    client.generate(provider="ollama", model="llama3", system_prompt="s", user_prompt="u", rate_limit_ms=250)

    assert calls == [250]


def test_generate_passes_none_through_when_rate_limit_unset(monkeypatch):
    # RateLimiter itself falls back to its own default (100ms) when given
    # None — see test_rate_limiter_defaults_to_100ms_when_ms_is_none below.
    client = ModelClient()
    calls = []
    monkeypatch.setattr(client.rate_limiter, "wait_if_needed", lambda ms=None: calls.append(ms))
    monkeypatch.setattr(client.http_client, "post", lambda *a, **kw: _FakeResponse())

    client.generate(provider="ollama", model="llama3", system_prompt="s", user_prompt="u")

    assert calls == [None]


def test_rate_limiter_defaults_to_100ms_when_ms_is_none(monkeypatch):
    from FiL_Design_ImageMind.common.network import RateLimiter

    limiter = RateLimiter(default_ms=100)
    slept = []
    monkeypatch.setattr(time, "sleep", lambda s: slept.append(s))
    limiter._last = time.time()  # force "elapsed < interval"

    limiter.wait_if_needed(None)

    assert slept and slept[0] <= 0.1
