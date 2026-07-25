from __future__ import annotations



import pytest

from FiL_Design_ImageMind.nodes.node_provider import FiLProviderLoader
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner
from FiL_Design_ImageMind.common import models

global_payloads = []

def mock_generate(*args, **kwargs):
    global_payloads.append(kwargs)
    return "MOCK_RESPONSE"

def setup_mock(monkeypatch):
    global global_payloads
    global_payloads = []
    monkeypatch.setattr(models.ModelClient, "generate", mock_generate)

@pytest.fixture
def base_config():
    result = FiLProviderLoader.execute(
        provider="ollama", model="llama3", temperature=0.5,
        max_tokens=2048, rate_limit_ms=50, max_image_side=512
    )
    return result[0] # Returns config dict

def test_widget_agent(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(config=base_config, prompt="test", agent="Universal")
    payload = global_payloads[-1]
    assert "Universal Agent" in payload["system_prompt"]

def test_widget_prompt_and_negative_prompt(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(config=base_config, prompt="red car", negative_prompt="blue car")
    payload = global_payloads[-1]
    assert "red car" in payload["user_prompt"]
    assert "blue car" in payload["system_prompt"] or "blue car" in payload["user_prompt"]

def test_widget_detail_level(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(config=base_config, prompt="cat", detail_level="tiny")
    payload_low = global_payloads[-1]
    
    FiLOpticScanner.execute(config=base_config, prompt="cat", detail_level="ultra")
    payload_extreme = global_payloads[-1]
    
    # Just verify they are different or handled correctly
    assert payload_low["system_prompt"] != payload_extreme["system_prompt"] or payload_low["user_prompt"] != payload_extreme["user_prompt"]

def test_widget_language(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(config=base_config, prompt="test", language="en")
    payload_en = global_payloads[-1]
    
    FiLOpticScanner.execute(config=base_config, prompt="test", language="ru")
    payload_ru = global_payloads[-1]
    
    sys_en = payload_en["system_prompt"].lower()
    sys_ru = payload_ru["system_prompt"].lower()
    assert "english" in sys_en or "en" in sys_en
    assert "russian" in sys_ru or "ru" in sys_ru or "русск" in sys_ru

def test_widget_model_type(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(config=base_config, prompt="test", model_type="SDXL")
    payload = global_payloads[-1]
    assert "SDXL" in payload["user_prompt"] or "SDXL" in payload["system_prompt"]

def test_widget_photo_style_and_mode(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(
        config=base_config, prompt="test", prompt_mode="Two-Stage", photo_style="analog_film"
    )
    assert len(global_payloads) > 0

def test_widget_custom_style(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(
        config=base_config, prompt="test", custom_style="make it neon"
    )
    payload = global_payloads[-1]
    assert "make it neon" in payload["system_prompt"] or "make it neon" in payload["user_prompt"]

def test_widget_seed_and_response_format(monkeypatch, base_config):
    setup_mock(monkeypatch)
    FiLOpticScanner.execute(
        config=base_config, prompt="test", seed=777, response_format="json"
    )
    payload = global_payloads[-1]
    assert payload["seed"] == 777
    assert payload["response_format"] == "json"

def test_widget_image_pass(monkeypatch, base_config):
    setup_mock(monkeypatch)
    import torch
    fake_image = torch.zeros((1, 512, 512, 3))
    base_config_vision = dict(base_config)
    base_config_vision["model"] = "llava"
    FiLOpticScanner.execute(
        config=base_config_vision, prompt="describe this", image=fake_image
    )
    payload = global_payloads[-1]
    assert len(payload["images"]) == 1

def test_provider_loader_widgets():
    result = FiLProviderLoader.execute(
        provider="groq", model="llama-3.1-70b-versatile",
        temperature=0.9, max_tokens=1000, rate_limit_ms=200, max_image_side=2048
    )
    config = result[0]
    assert config["provider"] == "groq"
    assert config["model"] == "llama-3.1-70b-versatile"
    assert config["temperature"] == 0.9
    assert config["max_tokens"] == 1000
    assert config["rate_limit_ms"] == 200
    assert config["max_image_side"] == 2048
