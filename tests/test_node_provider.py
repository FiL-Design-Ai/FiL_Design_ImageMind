from __future__ import annotations

from FiL_Design_ImageMind.nodes import node_provider


def test_execute_packs_all_widget_values_into_config():
    result = node_provider.FiLProviderLoader.execute(
        provider="ollama", model="llama3", temperature=0.3,
        max_tokens=256, rate_limit_ms=50, max_image_side=768,
    )
    config, model_name = result[0], result[1]
    assert model_name == "llama3"
    assert config["provider"] == "ollama"
    assert config["model"] == "llama3"
    assert config["temperature"] == 0.3
    assert config["max_tokens"] == 256
    assert config["rate_limit_ms"] == 50
    assert config["max_image_side"] == 768


def test_refresh_models_forces_a_real_cache_invalidation(monkeypatch):
    calls = []
    monkeypatch.setattr(node_provider, "invalidate_model_cache", lambda p: calls.append(("invalidate", p)))
    monkeypatch.setattr(node_provider, "fetch_models_from_provider", lambda p: calls.append(("fetch", p)))

    node_provider.FiLProviderLoader.execute(provider="ollama", model="llama3", refresh_models=True)

    assert calls == [("invalidate", "ollama"), ("fetch", "ollama")]


def test_refresh_models_failure_is_logged_not_swallowed_silently(monkeypatch, caplog):
    def _boom(provider):
        raise RuntimeError("network down")

    monkeypatch.setattr(node_provider, "invalidate_model_cache", lambda p: None)
    monkeypatch.setattr(node_provider, "fetch_models_from_provider", _boom)

    with caplog.at_level("WARNING", logger=node_provider.logger.name):
        result = node_provider.FiLProviderLoader.execute(provider="ollama", model="llama3", refresh_models=True)

    # Execution still succeeds (best-effort refresh) but the failure is visible in logs.
    assert result[1] == "llama3"
    assert any("refresh failed" in record.message.lower() for record in caplog.records)


def test_refresh_models_false_never_touches_cache(monkeypatch):
    calls = []
    monkeypatch.setattr(node_provider, "invalidate_model_cache", lambda p: calls.append(p))
    node_provider.FiLProviderLoader.execute(provider="ollama", model="llama3", refresh_models=False)
    assert calls == []


def test_validate_inputs_rejects_placeholders():
    assert node_provider.FiLProviderLoader.validate_inputs("qwen2.5:7b") is True
    assert node_provider.FiLProviderLoader.validate_inputs("(loading...)") != True
    assert node_provider.FiLProviderLoader.validate_inputs("(no models)") != True
    assert node_provider.FiLProviderLoader.validate_inputs("") != True

