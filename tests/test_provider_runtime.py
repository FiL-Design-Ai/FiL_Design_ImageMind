from __future__ import annotations

import json

import requests


def test_credentials_are_saved_redacted_and_deleted(tmp_path, monkeypatch):
    from FiL_LLM.common import provider_accounts

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
    from FiL_LLM.common import provider_runtime

    monkeypatch.setattr(provider_runtime, "get_api_key", lambda provider: None)
    result = provider_runtime.fetch_models_with_status("openai")
    assert result == {
        "models": [],
        "status": "configured",
        "message": "Сначала сохрани API-ключ.",
        "vision_models": [],
    }


def test_successful_model_list(monkeypatch):
    from FiL_LLM.common import provider_runtime

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
    from FiL_LLM.common import provider_runtime

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
    from FiL_LLM.common import provider_runtime

    class Client:
        def __init__(self, **kwargs):
            pass

        def get(self, *args, **kwargs):
            raise requests.ConnectionError("offline")

    monkeypatch.setattr(provider_runtime, "HTTPClient", Client)
    result = provider_runtime.fetch_models_with_status("ollama")
    assert result["status"] == "offline"
    assert "offline" not in result["message"].lower()
