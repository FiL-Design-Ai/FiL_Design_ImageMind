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
    monkeypatch.setattr(client.rate_limiter, "wait_if_needed", lambda ms=None, provider="": calls.append(ms))
    monkeypatch.setattr(client.http_client, "post", lambda *a, **kw: _FakeResponse())

    client.generate(provider="ollama", model="llama3", system_prompt="s", user_prompt="u", rate_limit_ms=250)

    assert calls == [250]


def test_generate_passes_none_through_when_rate_limit_unset(monkeypatch):
    # RateLimiter itself falls back to its own default (100ms) when given
    # None — see test_rate_limiter_defaults_to_100ms_when_ms_is_none below.
    client = ModelClient()
    calls = []
    monkeypatch.setattr(client.rate_limiter, "wait_if_needed", lambda ms=None, provider="": calls.append(ms))
    monkeypatch.setattr(client.http_client, "post", lambda *a, **kw: _FakeResponse())

    client.generate(provider="ollama", model="llama3", system_prompt="s", user_prompt="u")

    assert calls == [None]


def test_rate_limiter_defaults_to_100ms_when_ms_is_none(monkeypatch):
    from FiL_Design_ImageMind.common.network import RateLimiter

    limiter = RateLimiter(default_ms=100)
    slept = []
    monkeypatch.setattr(time, "sleep", lambda s: slept.append(s))
    limiter._last["ollama"] = time.time()  # force "elapsed < interval"

    limiter.wait_if_needed(None, "ollama")

    assert slept and slept[0] <= 0.1


def test_a_429_widens_the_spacing_for_that_provider_only(monkeypatch):
    """The 429 is the provider's own answer about pace — the limiter must hear it.

    Google's free tier allows 15 requests a minute while the Provider Loader
    ships with 100ms, so a Dataset Forge run over a folder walked into the wall
    and then kept knocking at exactly the same rate.
    """
    from FiL_Design_ImageMind.common.network import RATE_LIMIT_PENALTY_MS, RateLimiter

    limiter = RateLimiter(default_ms=100)
    assert limiter.penalize("google") == RATE_LIMIT_PENALTY_MS
    # A limit hit twice means the widened pace was still too fast.
    assert limiter.penalize("google") == RATE_LIMIT_PENALTY_MS * 2

    slept = []
    monkeypatch.setattr(time, "sleep", lambda s: slept.append(s))
    limiter._last["google"] = time.time()
    limiter.wait_if_needed(100, "google")
    assert slept and slept[0] > 1.0, "the penalty has to outrank the widget value"

    # Groq was never refused and keeps its own pace: the spacing used to be one
    # clock shared by every provider.
    slept.clear()
    limiter._last["groq"] = time.time()
    limiter.wait_if_needed(100, "groq")
    assert slept and slept[0] <= 0.1


def test_the_provider_named_delay_wins_over_the_default_penalty():
    from FiL_Design_ImageMind.common.network import RateLimiter, retry_after_seconds

    class Response:
        headers = {"Retry-After": "12"}

    assert retry_after_seconds(Response()) == 12.0
    assert RateLimiter().penalize("openrouter", 12.0) == 12000
    # A header the provider never sent must not read as "no wait at all".
    class Bare:
        headers = {}

    assert retry_after_seconds(Bare()) is None


def test_the_penalty_expires_so_one_bad_minute_does_not_slow_the_session(monkeypatch):
    from FiL_Design_ImageMind.common import network

    limiter = network.RateLimiter(default_ms=100)
    limiter.penalize("google")
    assert limiter._penalty_ms("google") > 0

    later = time.time() + network.RATE_LIMIT_PENALTY_TTL_S + 1
    monkeypatch.setattr(network.time, "time", lambda: later)
    assert limiter._penalty_ms("google") == 0


# ---------------------------------------------------------------------------
# Multi-image payloads — every strategy used to send only images[0], silently
# discarding the other reference images (Style Mixer Smart Fusion wired up to
# four and three of them never reached the model).
# ---------------------------------------------------------------------------


def test_ollama_build_payload_sends_every_image():
    strategy = _strategy(OllamaStrategy)
    payload = strategy.build_payload(
        {"model": "llava"}, "sys", "user",
        images=["aaa", "data:image/jpeg;base64,bbb"],
    )
    assert payload["messages"][-1]["images"] == ["aaa", "bbb"]


def test_openai_build_payload_sends_every_image_as_content_parts():
    strategy = _strategy(OpenAIStrategy)
    payload = strategy.build_payload(
        {"model": "gpt-4o", "provider": "openai"}, "sys", "user",
        images=["aaa", "data:image/jpeg;base64,bbb"],
    )
    content = payload["messages"][0]["content"]
    image_parts = [p for p in content if p["type"] == "image_url"]
    assert [p["image_url"]["url"] for p in image_parts] == [
        "data:image/jpeg;base64,aaa",
        "data:image/jpeg;base64,bbb",
    ]
    assert any(p["type"] == "text" for p in content)


def test_google_build_payload_sends_every_image_before_the_text():
    strategy = _strategy(GoogleStrategy)
    payload = strategy.build_payload(
        {"model": "gemini-2.0-flash"}, "sys", "user",
        images=["aaa", "data:image/jpeg;base64,bbb"],
    )
    parts = payload["contents"][0]["parts"]
    assert parts[0] == {"inline_data": {"mime_type": "image/jpeg", "data": "aaa"}}
    assert parts[1] == {"inline_data": {"mime_type": "image/jpeg", "data": "bbb"}}
    assert "text" in parts[-1]


def test_generate_passes_every_image_to_the_strategy(monkeypatch):
    client = ModelClient()
    seen = {}

    def fake_build_payload(cfg, system, user, images=None, **kwargs):
        seen["images"] = images
        return {"model": cfg["model"]}

    monkeypatch.setattr(client.http_client, "post", lambda *a, **kw: _FakeResponse())
    monkeypatch.setattr(client._strategies["ollama"], "build_payload", fake_build_payload)

    client.generate(provider="ollama", model="llava", system_prompt="s", user_prompt="u", images=["a", "b", "c"])
    assert seen["images"] == ["a", "b", "c"]


# ---------------------------------------------------------------------------
# RateLimiter must not hold its global lock while sleeping — doing so
# serialized every provider (and penalize) for the whole duration of a wait.
# ---------------------------------------------------------------------------


def test_rate_limiter_releases_the_lock_while_it_waits(monkeypatch):
    from FiL_Design_ImageMind.common.network import RateLimiter

    limiter = RateLimiter(default_ms=100)
    limiter._last["ollama"] = time.time()  # force a wait
    lock_free = []

    def fake_sleep(_s):
        got = limiter._lock.acquire(blocking=False)
        lock_free.append(got)
        if got:
            limiter._lock.release()

    monkeypatch.setattr(time, "sleep", fake_sleep)
    limiter.wait_if_needed(100, "ollama")
    assert lock_free == [True], "other providers must not block while one waits"


def test_rate_limiter_reserves_slots_so_concurrent_waiters_line_up(monkeypatch):
    from FiL_Design_ImageMind.common.network import RateLimiter

    limiter = RateLimiter(default_ms=100)
    monkeypatch.setattr(time, "time", lambda: 1000.0)
    waits = []
    monkeypatch.setattr(time, "sleep", lambda s: waits.append(round(s, 6)))
    limiter.wait_if_needed(100, "p")  # first caller — nothing scheduled yet
    limiter.wait_if_needed(100, "p")  # lines up one interval behind
    limiter.wait_if_needed(100, "p")  # lines up two intervals behind
    assert waits == [0.1, 0.2]
