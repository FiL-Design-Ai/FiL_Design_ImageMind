from __future__ import annotations

import json

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

