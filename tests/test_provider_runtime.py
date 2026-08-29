from __future__ import annotations

import json

import pytest
import requests


def test_credentials_are_saved_redacted_and_deleted(tmp_path, monkeypatch):
    from FiL_Design_ImageMind.common import provider_accounts

    path = tmp_path / "auth.json"
    monkeypatch.setattr(provider_accounts, "AUTH_JSON_PATH", path)
    provider_accounts.save_provider_credentials("openai", key="secret-value")

    raw = json.loads(path.read_text(encoding="utf-8"))
    assert raw["openai"]["api"]["key"] == "secret-value"
    public = provider_accounts.get_safe_provider_accounts()
    assert public["openai"]["configured"] is True
    assert "key" not in public["openai"]
    assert "secret-value" not in json.dumps(public)

    provider_accounts.delete_provider_credentials("openai")
    assert "openai" not in provider_accounts.read_auth()


def test_key_hint_shows_enough_to_recognise_and_no_more(tmp_path, monkeypatch):
    from FiL_Design_ImageMind.common import provider_accounts

    path = tmp_path / "auth.json"
    monkeypatch.setattr(provider_accounts, "AUTH_JSON_PATH", path)
    key = "sk-proj-0123456789abcdefghijklmnop"
    provider_accounts.save_provider_credentials("openai", key=key)

    public = provider_accounts.get_safe_provider_accounts()["openai"]
    assert public["key_hint"] == "sk-…mnop"
    assert public["key_source"] == "file"
    # The masked form must not be a usable fragment of the real key.
    assert key not in json.dumps(public)
    assert key[3:-4] not in json.dumps(public)

    # A short value reveals nothing at all.
    assert provider_accounts.mask_api_key("sk-short") == "•" * 8
    assert provider_accounts.mask_api_key(None) == ""


def test_key_hint_reports_an_environment_key_as_not_ours(tmp_path, monkeypatch):
    from FiL_Design_ImageMind.common import provider_accounts

    monkeypatch.setattr(provider_accounts, "AUTH_JSON_PATH", tmp_path / "auth.json")
    monkeypatch.setenv("GROQ_API_KEY", "gsk_env0123456789abcdefghijkl")

    public = provider_accounts.get_safe_provider_accounts()["groq"]
    assert public["key_source"] == "env"
    assert public["env_var"] == "GROQ_API_KEY"
    assert public["configured"] is True


def test_missing_cloud_key_does_not_make_network_request(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: None)
    result = provider_runtime.fetch_models_with_status("openai")
    assert result == {
        "models": [],
        "status": "configured",
        "message": "Сначала сохрани API-ключ.",
        "vision_models": [],
    }


def test_successful_model_list(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    class Response:
        def json(self):
            return {"data": [{"id": "model-b"}, {"id": "model-a"}]}

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    result = provider_runtime.fetch_models_with_status("openai")
    assert result["status"] == "available"
    assert result["models"] == ["model-a", "model-b"]


def test_listing_reports_the_vision_subset_the_provider_declares(monkeypatch):
    """The badge comes from the payload, both ways round.

    `gpt-oss-20b` reads as vision to any name-based rule and is text-only;
    `qwen3.6-27b` reads as text and Groq declares it image-capable. Before the
    2026-07-29 audit the pack got both backwards.
    """
    from FiL_Design_ImageMind.common import provider_runtime

    class Response:
        def json(self):
            return {
                "data": [
                    {"id": "openai/gpt-oss-20b", "input_modalities": ["text"], "output_modalities": ["text"]},
                    {"id": "qwen/qwen3.6-27b", "input_modalities": ["text", "image"], "output_modalities": ["text"]},
                    {"id": "whisper-large-v3", "input_modalities": ["audio"], "output_modalities": ["text"]},
                ]
            }

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    result = provider_runtime.fetch_models_with_status("groq", force=True)

    assert result["vision_models"] == ["qwen/qwen3.6-27b"]
    # The audio model never becomes a chat option.
    assert result["models"] == ["openai/gpt-oss-20b", "qwen/qwen3.6-27b"]


def test_a_listed_declaration_reaches_the_name_only_callers(monkeypatch):
    """The nodes ask by name alone; they must get the provider's answer too."""
    from FiL_Design_ImageMind.common import provider_runtime
    from FiL_Design_ImageMind.common.config import is_model_vision_capable

    class Response:
        def json(self):
            return {"data": [{"id": "qwen/qwen3.6-27b", "input_modalities": ["text", "image"]}]}

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")

    provider_runtime.fetch_models_with_status("groq", force=True)
    assert is_model_vision_capable("groq", "qwen/qwen3.6-27b") is True

    # Dropping the listing drops the answer with it.
    provider_runtime.invalidate_model_cache("groq")
    assert is_model_vision_capable("groq", "qwen/qwen3.6-27b") is False


def test_google_media_models_are_not_offered_as_chat(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    class Response:
        def json(self):
            return {
                "models": [
                    {"name": "models/gemini-3.6-flash", "supportedGenerationMethods": ["generateContent"]},
                    {"name": "models/lyria-3-pro-preview", "supportedGenerationMethods": ["generateContent"]},
                    {"name": "models/gemini-2.5-flash-preview-tts", "supportedGenerationMethods": ["generateContent"]},
                    {"name": "models/nano-banana-pro-preview", "supportedGenerationMethods": ["generateContent"]},
                ]
            }

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    result = provider_runtime.fetch_models_with_status("google", force=True)

    assert result["models"] == ["gemini-3.6-flash"]
    assert result["vision_models"] == ["gemini-3.6-flash"]


def test_cloudflare_reads_its_catalogue_and_falls_back_when_it_is_gone(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    catalog = {
        "result": [
            {
                "name": "@cf/meta/llama-4-scout-17b-16e-instruct",
                "task": {"name": "Text Generation"},
                "properties": [{"property_id": "vision", "value": "true"}],
            },
            {
                "name": "@cf/zai-org/glm-5.2",
                "task": {"name": "Text Generation"},
                "properties": [{"property_id": "context_window", "value": "262144"}],
            },
            {"name": "@cf/black-forest-labs/flux-1-schnell", "task": {"name": "Text-to-Image"}, "properties": []},
        ]
    }

    class Response:
        def json(self):
            return catalog

    class Client:
        fail = False

        def __init__(self, **kwargs):
            pass

        def get(self, url, **kwargs):
            if Client.fail:
                raise requests.ConnectionError("offline")
            assert url.endswith("/ai/models/search"), url
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    monkeypatch.setattr(
        provider_runtime,
        "get_provider_base_url",
        lambda p: "https://api.cloudflare.com/client/v4/accounts/acct/ai/v1",
    )

    result = provider_runtime.fetch_models_with_status("cloudflare", force=True)
    assert result["models"] == ["@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/zai-org/glm-5.2"]
    # glm-5.2 carries no vision property — the name used to badge it anyway.
    assert result["vision_models"] == ["@cf/meta/llama-4-scout-17b-16e-instruct"]

    Client.fail = True
    fallback = provider_runtime.fetch_models_with_status("cloudflare", force=True)
    assert fallback["status"] == "available"
    assert fallback["models"], "the curated list must still answer when the catalogue is unreachable"


def test_http_statuses_are_safely_classified(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    class Client:
        status = 401

        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            response = requests.Response()
            response.status_code = self.status
            raise requests.HTTPError(response=response)

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    assert provider_runtime.fetch_models_with_status("openai")["status"] == "auth_error"
    Client.status = 429
    assert provider_runtime.fetch_models_with_status("openai")["status"] == "rate_limited"


def test_a_failed_listing_still_offers_the_curated_models(monkeypatch):
    """An empty dropdown is unusable: there is nothing to pick and nothing to run.

    The four cloud providers other than Cloudflare had `RECOMMENDED_MODELS`
    entries that no code path ever read, so any `/models` hiccup left the
    Provider Loader with no options at all.
    """
    from FiL_Design_ImageMind.common import provider_runtime
    from FiL_Design_ImageMind.common.config import get_recommended_models
    from FiL_Design_ImageMind.common.model_capabilities import forget_declared

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            raise requests.ConnectionError("offline")

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")

    for prov in ("openai", "google", "groq", "openrouter"):
        forget_declared(prov)
        result = provider_runtime.fetch_models_with_status(prov, force=True)
        # The list is a fallback, not a connection: the failure keeps its status.
        assert result["status"] == "offline"
        assert result["models"] == sorted(get_recommended_models(prov))
        assert result["vision_models"], f"{prov} recommends at least one model that takes images"
        assert set(result["vision_models"]) <= set(result["models"])

    # Groq is the case the name hints get wrong: `qwen/qwen3.6-27b` is the one
    # model Groq declares image-capable and no hint token matches it.
    forget_declared("groq")
    assert "qwen/qwen3.6-27b" in provider_runtime.fetch_models_with_status("groq", force=True)["vision_models"]

    # And it is never cached as if it had succeeded.
    assert "openai" not in provider_runtime._model_cache


def test_the_curated_vision_set_stays_inside_the_curated_list():
    """Two lists that drift apart would badge a model nobody is offered."""
    from FiL_Design_ImageMind.common.config import RECOMMENDED_MODELS, RECOMMENDED_VISION_MODELS

    for provider, vision in RECOMMENDED_VISION_MODELS.items():
        assert provider in RECOMMENDED_MODELS
        assert vision <= set(RECOMMENDED_MODELS[provider]), f"{provider} badges a model it never offers"


def test_a_readable_catalogue_is_not_a_working_connection(monkeypatch):
    """The listing must not claim more than it proves.

    An OpenAI key with no billing lists 76 models and then answers 429 to the
    first completion. "Подключение работает" on the listing is what put a green
    badge on an account that cannot run a single node.
    """
    from FiL_Design_ImageMind.common import provider_runtime

    class Response:
        def json(self):
            return {"data": [{"id": "gpt-4o-mini"}]}

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            return Response()

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    message = provider_runtime.fetch_models_with_status("openai", force=True)["message"]
    assert "подключение" not in message.lower()


def test_the_probe_generates_even_when_no_model_was_named(monkeypatch):
    """Probe means "it answered", not "it listed".

    The settings panel probes with an empty model; before this the backend
    reported the listing as success for every provider but Cloudflare, so the
    button confirmed a connection it had never tested.
    """
    from FiL_Design_ImageMind.common import provider_runtime

    calls = []

    class FakeClient:
        def generate(self, **kwargs):
            calls.append(kwargs)
            return "OK"

    monkeypatch.setattr(
        provider_runtime,
        "fetch_models_with_status",
        lambda provider, force=False: {
            "status": "available",
            "message": "Список моделей получен.",
            "models": ["gpt-4o-mini", "zzz-expensive"],
            "vision_models": [],
        },
    )
    import FiL_Design_ImageMind.common.models as models_module

    monkeypatch.setattr(models_module, "ModelClient", lambda: FakeClient())

    result = provider_runtime.probe_provider("openai")
    assert result["status"] == "available"
    assert len(calls) == 1, "the probe must actually call the provider"
    # A curated id that is on offer is preferred over the alphabetical first.
    assert calls[0]["model"] == "gpt-4o-mini"
    # Reasoning models spend the budget before they answer; 16 tokens was not
    # enough for `gpt-oss-20b` to emit a single visible character.
    assert calls[0]["max_tokens"] >= 64


def test_no_quota_is_not_the_same_as_too_many_requests(monkeypatch):
    """429 splits in two, and the user's next move differs: wait, or pay."""
    from FiL_Design_ImageMind.common import provider_runtime

    class Client:
        body = '{"error": {"code": "insufficient_quota"}}'

        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            response = requests.Response()
            response.status_code = 429
            response._content = self.body.encode()
            raise requests.HTTPError(response=response)

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: "configured")
    assert provider_runtime.fetch_models_with_status("openai", force=True)["status"] == "quota_exhausted"

    Client.body = '{"error": {"message": "Rate limit reached, slow down"}}'
    assert provider_runtime.fetch_models_with_status("openai", force=True)["status"] == "rate_limited"


def test_openrouter_asks_for_cheap_reasoning_and_nobody_else_does():
    """The knob goes only where the host accepts it.

    Asked on 2026-07-29: OpenRouter takes `reasoning` from every model in its
    catalogue and cut `gpt-oss-20b` from 143 thinking tokens to 8. Groq answers
    400 `reasoning_effort is not supported with this model` on its
    non-reasoning models, so sending it there would break what works today.
    """
    from FiL_Design_ImageMind.common.models import OpenAIStrategy

    strategy = OpenAIStrategy(http_client=None, rate_limiter=None)
    for provider, expected in (("openrouter", True), ("groq", False), ("openai", False), ("cloudflare", False)):
        payload = strategy.build_payload(
            {"provider": provider, "model": "some-model"}, "sys", "user", max_tokens=100
        )
        assert ("reasoning" in payload) is expected, provider


def test_an_answer_eaten_by_reasoning_is_retried_with_a_bigger_budget(monkeypatch):
    """The pack's Max tokens widget defaults to 100.

    Every reasoning model spends more than that before its first visible
    character, so without the retry those models can never answer at all.
    """
    from FiL_Design_ImageMind.common import models as models_module

    budgets = []

    class Response:
        def __init__(self, budget):
            self.budget = budget

        def raise_for_status(self):
            return None

        def json(self):
            if self.budget < 500:
                return {
                    "choices": [{"finish_reason": "length", "message": {"content": None}}],
                    "usage": {"completion_tokens_details": {"reasoning_tokens": self.budget}},
                }
            return {"choices": [{"finish_reason": "stop", "message": {"content": "Одинокий маяк на скале"}}]}

    class FakeHTTP:
        def post(self, url, **kwargs):
            budget = kwargs["json"].get("max_tokens", 0)
            budgets.append(budget)
            return Response(budget)

    client = models_module.ModelClient()
    monkeypatch.setattr(client, "http_client", FakeHTTP())
    monkeypatch.setattr(client.rate_limiter, "wait_if_needed", lambda *a, **k: None)
    monkeypatch.setattr(models_module, "get_api_key", lambda provider: "configured")

    answer = client.generate(
        provider="groq",
        model="openai/gpt-oss-20b",
        system_prompt="sys",
        user_prompt="user",
        max_tokens=100,
    )
    assert answer == "Одинокий маяк на скале"
    assert budgets == [100, models_module._retry_budget(100)]
    assert budgets[1] >= 2000, "the retry has to clear the reasoning cost, not nudge past it"
    # A model that stays silent climbs one more rung — `@cf/moonshotai/kimi-k2.6`
    # had nothing to show even at 2000.
    ladder = models_module._budget_ladder(100)
    assert ladder == [100, 2000, models_module.RETRY_BUDGET_CEILING]
    assert ladder == sorted(set(ladder)), "no rung may repeat or go backwards"


def test_a_reply_cut_off_by_the_token_budget_says_so(monkeypatch):
    """`content: None` with `finish_reason: length` is a truncated answer.

    Reported as "could not find a response", it sent a user hunting for a
    network fault while the provider had answered and billed for it.
    """
    from FiL_Design_ImageMind.common.base import InferenceError
    from FiL_Design_ImageMind.common.models import OpenAIStrategy

    payload = {
        "choices": [{"finish_reason": "length", "message": {"content": None, "reasoning": "thinking..."}}],
        "usage": {"completion_tokens_details": {"reasoning_tokens": 13}},
    }
    with pytest.raises(InferenceError) as excinfo:
        OpenAIStrategy(http_client=None, rate_limiter=None).parse_response(payload)
    assert "max_tokens" in str(excinfo.value)
    assert "13" in str(excinfo.value)


def test_offline_local_provider(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            raise requests.ConnectionError("offline")

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    result = provider_runtime.fetch_models_with_status("ollama")
    assert result["status"] == "offline"
    assert "offline" not in result["message"].lower()
    # No curated fallback here: a model that was never pulled is not a choice,
    # and a dead local server cannot pull it.
    assert result["models"] == []


def test_all_seven_providers_schema_and_fetching(monkeypatch):
    from FiL_Design_ImageMind.common.config import PROVIDERS, is_model_vision_capable
    from FiL_Design_ImageMind.common.provider_runtime import fetch_models_with_status
    from FiL_Design_ImageMind.common.processing import is_valid_model_name

    expected_providers = {"ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"}
    assert set(PROVIDERS.keys()) == expected_providers

    # Mock API key so cloud providers get beyond auth missing check
    monkeypatch.setattr("FiL_Design_ImageMind.common.provider_runtime.get_api_key", lambda p: "fake_key")

    # Cloudflare's base URL is built from an account id that only exists in a
    # developer's data/auth.json or CLOUDFLARE_ACCOUNT_ID — neither is in the
    # repo, so without this the provider stops at "configured" on a clean
    # checkout. The URLs feed FakeClient.get, which routes on their shape.
    base_urls = {
        "google": "https://generativelanguage.googleapis.com/v1beta",
        "ollama": "http://127.0.0.1:11434",
        "lmstudio": "http://127.0.0.1:1234/v1",
        "cloudflare": "https://api.cloudflare.com/client/v4/accounts/test-account/ai/v1",
    }
    monkeypatch.setattr(
        "FiL_Design_ImageMind.common.provider_runtime.get_provider_base_url",
        lambda p: base_urls.get(p, "https://api.example.test/v1"),
    )

    class FakeResponse:
        def __init__(self, prov):
            self.prov = prov

        def json(self):
            if self.prov == "google":
                return {"models": [{"name": "models/gemini-2.0-flash"}]}
            elif self.prov == "ollama":
                return {"models": [{"name": "qwen3-vl:8b"}]}
            return {"data": [{"id": "test-model-vl"}]}

    class FakeClient:
        def __init__(self, **kwargs):
            pass

        def get(self, url, **kwargs):
            prov = "google" if "googleapis" in url else ("ollama" if "11434" in url else "generic")
            return FakeResponse(prov)

    monkeypatch.setattr("FiL_Design_ImageMind.common.provider_runtime.HTTPClient", FakeClient)

    for prov in expected_providers:
        res = fetch_models_with_status(prov, force=True)
        assert res["status"] == "available"
        assert len(res["models"]) > 0
        for m in res["models"]:
            assert is_valid_model_name(m)
        # Verify vision capability check works for each provider
        v_model = res["models"][0]
        assert isinstance(is_model_vision_capable(prov, v_model), bool)



def test_the_next_budget_follows_what_the_provider_reported_spending():
    """The fixed ladder topped out at 6000 for every model at once.

    A model that thought for 5800 tokens needs room past that ceiling, not a
    second attempt at it — and the provider states the number in `usage`.
    """
    from FiL_Design_ImageMind.common import models as models_module

    # Nothing reported: the planned rung stands.
    assert models_module._next_budget(2000, 0) == 2000
    # A cheap thinker does not drag the budget down below the plan either.
    assert models_module._next_budget(2000, 300) == 2000
    # An expensive one lifts it above the old ceiling.
    assert models_module._next_budget(6000, 5800) == 5800 * 2 + models_module.ANSWER_HEADROOM


def test_a_truncated_answer_carries_the_spend_it_reported():
    from FiL_Design_ImageMind.common.models import OpenAIStrategy, TruncatedAnswerError

    payload = {
        "choices": [{"finish_reason": "length", "message": {"content": None}}],
        "usage": {"completion_tokens": 298, "completion_tokens_details": {"reasoning_tokens": 297}},
    }
    try:
        OpenAIStrategy(http_client=None, rate_limiter=None).parse_response(payload)
    except TruncatedAnswerError as exc:
        assert exc.spent == 298
    else:
        raise AssertionError("a truncated answer must raise")


def test_a_half_finished_answer_is_truncation_not_a_result():
    """Text plus `finish_reason: length` means cut off mid-sentence.

    Found live on 2026-07-29: `gemini-3.6-flash` answered "Red circle, green"
    at max_tokens=200 and the pack passed those three words downstream as the
    finished prompt, because the truncation check sat *after* the early return
    for non-empty content. A reasoning model made it worse — cut inside its own
    `<think>` block, it handed the scanner an unfinished internal monologue.

    Both strategies are checked here: they had the same shape and the same bug.
    """
    from FiL_Design_ImageMind.common.models import (
        GoogleStrategy,
        OpenAIStrategy,
        TruncatedAnswerError,
    )

    openai_payload = {
        "choices": [{"finish_reason": "length", "message": {"content": "Red circle, green"}}],
        "usage": {"completion_tokens": 200},
    }
    try:
        OpenAIStrategy(http_client=None, rate_limiter=None).parse_response(openai_payload)
    except TruncatedAnswerError as exc:
        assert exc.partial == "Red circle, green"
        assert exc.spent == 200
    else:
        raise AssertionError("a half-finished OpenAI-shaped answer must raise, not return")

    google_payload = {
        "candidates": [
            {"finishReason": "MAX_TOKENS", "content": {"parts": [{"text": "Red circle, green"}]}}
        ],
        "usageMetadata": {"candidatesTokenCount": 8, "thoughtsTokenCount": 192},
    }
    try:
        GoogleStrategy(http_client=None, rate_limiter=None).parse_response(google_payload)
    except TruncatedAnswerError as exc:
        assert exc.partial == "Red circle, green"
    else:
        raise AssertionError("a half-finished Gemini answer must raise, not return")


def test_a_complete_answer_is_still_returned_untouched():
    """The truncation check must not swallow ordinary answers.

    Reordering the `finish_reason` test in front of the return is exactly the
    kind of change that could start rejecting good replies, so the normal path
    is pinned alongside the broken one.
    """
    from FiL_Design_ImageMind.common.models import GoogleStrategy, OpenAIStrategy

    openai_ok = {"choices": [{"finish_reason": "stop", "message": {"content": " a red circle "}}]}
    assert OpenAIStrategy(http_client=None, rate_limiter=None).parse_response(openai_ok) == "a red circle"

    google_ok = {
        "candidates": [{"finishReason": "STOP", "content": {"parts": [{"text": "a red circle"}]}}]
    }
    assert GoogleStrategy(http_client=None, rate_limiter=None).parse_response(google_ok) == "a red circle"


# ---------------------------------------------------------------------------
# unload_local_model — the Provider Loader's "unload LLM after prompt" switch
# lands here. Each local server speaks its own dialect of "forget the model".
# ---------------------------------------------------------------------------


class _RecordingResponse:
    def raise_for_status(self):
        return None


class _RecordingUnloadClient:
    """Collects every POST; installed over provider_runtime.HTTPClient."""

    posts: list = []

    def __init__(self, **kwargs):
        pass

    def post(self, url, **kwargs):
        _RecordingUnloadClient.posts.append((url, kwargs.get("json")))
        return _RecordingResponse()


def test_unload_posts_keep_alive_zero_to_ollama(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    _RecordingUnloadClient.posts = []
    monkeypatch.setattr(provider_runtime, "HTTPClient", _RecordingUnloadClient)
    monkeypatch.setattr(provider_runtime, "get_provider_base_url", lambda provider: "http://127.0.0.1:11434")

    provider_runtime.unload_local_model("ollama", "qwen3-vl:8b")

    assert _RecordingUnloadClient.posts == [
        ("http://127.0.0.1:11434/api/generate", {"model": "qwen3-vl:8b", "keep_alive": 0})
    ]


def test_unload_posts_the_instance_id_to_lmstudio(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    _RecordingUnloadClient.posts = []
    monkeypatch.setattr(provider_runtime, "HTTPClient", _RecordingUnloadClient)
    monkeypatch.setattr(provider_runtime, "get_provider_base_url", lambda provider: "http://127.0.0.1:1234")

    provider_runtime.unload_local_model("lmstudio", "google/gemma-4-e4b")

    assert _RecordingUnloadClient.posts == [
        ("http://127.0.0.1:1234/api/v1/models/unload", {"instance_id": "google/gemma-4-e4b"})
    ]


def test_unload_ignores_cloud_providers_and_empty_models(monkeypatch):
    from FiL_Design_ImageMind.common import provider_runtime

    _RecordingUnloadClient.posts = []
    monkeypatch.setattr(provider_runtime, "HTTPClient", _RecordingUnloadClient)
    monkeypatch.setattr(provider_runtime, "get_provider_base_url", lambda provider: "https://api.example.test/v1")

    provider_runtime.unload_local_model("openai", "gpt-4o")
    provider_runtime.unload_local_model("ollama", "")

    assert _RecordingUnloadClient.posts == []


def test_unload_failure_is_logged_not_raised(monkeypatch, caplog):
    """The prompt is already written when this runs — a dead server must not
    poison it. Verified against the live probe on 2026-08-09."""
    from FiL_Design_ImageMind.common import provider_runtime

    class FailingClient:
        def __init__(self, **kwargs):
            pass

        def post(self, *args, **kwargs):
            raise requests.ConnectionError("server gone")

    monkeypatch.setattr(provider_runtime, "HTTPClient", FailingClient)
    monkeypatch.setattr(provider_runtime, "get_provider_base_url", lambda provider: "http://127.0.0.1:1234")

    with caplog.at_level("WARNING", logger=provider_runtime.logger.name):
        provider_runtime.unload_local_model("lmstudio", "google/gemma-4-e4b")

    assert any("unload" in record.message.lower() for record in caplog.records)


def test_google_prompt_feedback_blocked_raises_content_blocked_error():
    from FiL_Design_ImageMind.common.base import ContentBlockedError
    from FiL_Design_ImageMind.common.models import GoogleStrategy

    payload = {
        "promptFeedback": {
            "blockReason": "PROHIBITED_CONTENT",
            "safetyRatings": [
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "probability": "HIGH", "blocked": True}
            ],
        },
        "usageMetadata": {"promptTokenCount": 638, "totalTokenCount": 638},
        "modelVersion": "gemini-3.5-flash-lite",
    }
    with pytest.raises(ContentBlockedError) as excinfo:
        GoogleStrategy(http_client=None, rate_limiter=None).parse_response(payload)

    assert "Google Gemini blocked the prompt" in str(excinfo.value)
    assert "PROHIBITED_CONTENT" in str(excinfo.value)
    assert "HARM_CATEGORY_SEXUALLY_EXPLICIT" in str(excinfo.value)


def test_google_candidate_finish_reason_safety_raises_content_blocked_error():
    from FiL_Design_ImageMind.common.base import ContentBlockedError
    from FiL_Design_ImageMind.common.models import GoogleStrategy

    payload = {
        "candidates": [
            {
                "finishReason": "SAFETY",
                "safetyRatings": [
                    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "probability": "HIGH", "blocked": True}
                ],
                "content": {"parts": []},
            }
        ]
    }
    with pytest.raises(ContentBlockedError) as excinfo:
        GoogleStrategy(http_client=None, rate_limiter=None).parse_response(payload)

    assert "Google Gemini stopped generation due to safety policy" in str(excinfo.value)
    assert "SAFETY" in str(excinfo.value)
    assert "HARM_CATEGORY_DANGEROUS_CONTENT" in str(excinfo.value)


def test_openai_content_filter_raises_content_blocked_error():
    from FiL_Design_ImageMind.common.base import ContentBlockedError
    from FiL_Design_ImageMind.common.models import OpenAIStrategy

    payload = {
        "choices": [
            {
                "finish_reason": "content_filter",
                "message": {"content": None},
            }
        ]
    }
    with pytest.raises(ContentBlockedError) as excinfo:
        OpenAIStrategy(http_client=None, rate_limiter=None).parse_response(payload)

    assert "content safety filter" in str(excinfo.value)
    assert "content_filter" in str(excinfo.value)
