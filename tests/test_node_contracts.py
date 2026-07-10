from __future__ import annotations

import importlib
import asyncio


EXPECTED_IDS = {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLBeforeAfterCompare",
    "FiLUpscaleTileCalc",
}


def test_package_has_comfy_entrypoint():
    package = importlib.import_module("FiL_Design_ImageMind")
    assert hasattr(package, "comfy_entrypoint")
    assert callable(package.comfy_entrypoint)
    assert package.WEB_DIRECTORY == "./frontend/dist"


def test_entrypoint_returns_all_seven_nodes():
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    node_classes = asyncio.run(ext.get_node_list())
    node_ids = {c.GET_SCHEMA().node_id for c in node_classes}
    assert node_ids == EXPECTED_IDS


def test_contracts_use_fil_design_imagemind_categories_and_valid_schema():
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    node_classes = asyncio.run(ext.get_node_list())
    for node_class in node_classes:
        schema = node_class.GET_SCHEMA()
        assert schema.category.startswith("FiL_Design_ImageMind/")


def test_seed_passthrough():
    from FiL_Design_ImageMind.nodes.node_seed import FiLSeed

    result = FiLSeed.execute(seed=123)
    assert result[0] == 123

    result = FiLSeed.execute(seed=0)
    assert result[0] == 0

    result = FiLSeed.execute(seed=0xFFFFFFFFFFFFFFFF)
    assert result[0] == 0xFFFFFFFFFFFFFFFF


def test_compare_swap_keeps_output_order():
    pytest = __import__("pytest")
    torch = pytest.importorskip("torch")
    from FiL_Design_ImageMind.nodes.node_compare import FiLBeforeAfterCompare

    before = torch.zeros((1, 8, 8, 3))
    after = torch.ones((1, 8, 8, 3))
    result = FiLBeforeAfterCompare.execute(before, after, swap=True, resize_mode="Off", max_resolution=4096)
    assert torch.equal(result[0], after)
    assert torch.equal(result[1], before)


def test_cleaner_passthrough_when_cleanup_disabled():
    from FiL_Design_ImageMind.nodes.node_cleaner import FiLNeuroCleaner

    marker = object()
    result = FiLNeuroCleaner.execute(clean_vram=False, clean_ram=False, anything=marker)
    assert result[0] is marker


def test_scanner_returns_clear_error_without_model():
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

    result = FiLOpticScanner.execute(config={}, prompt="test")
    assert result[0] == "Ошибка: модель не выбрана в Provider Loader."
    assert result[1] == "{}"
    assert result[2] == {}


def test_provider_loader_does_not_expose_api_key():
    from FiL_Design_ImageMind.nodes.node_provider import FiLProviderLoader

    result = FiLProviderLoader.execute(provider="ollama", model="qwen3-vl")
    config = result[0]
    assert config["provider"] == "ollama"
    assert config["model"] == "qwen3-vl"
    assert "api_key" not in config
    assert "account_id" not in config


def test_scanner_text_only_success(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner, _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "ready prompt")
    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "qwen3"}, prompt="red sports car"
    )
    assert result[0] == "ready prompt"
    assert result[2]["provider"] == "ollama"
    assert '"provider": "ollama"' in result[1]


def test_scanner_rejects_non_vision_model_before_processing():
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "plain-text-model"}, image=object()
    )
    assert "не поддерживает анализ изображений" in result[0]


def test_scanner_no_image_no_text_returns_error():
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

    result = FiLOpticScanner.execute(config={"provider": "ollama", "model": "qwen3"}, prompt="")
    assert "подключи изображение или введи текст" in result[0]


def test_scanner_empty_prompt_with_image_succeeds(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner, _model_client, _processor

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "described image")
    monkeypatch.setattr(_processor, "process_batch", lambda img: (["img0"], 64, 64))
    fake_image = [type("Frame", (), {"cpu": lambda self: self, "numpy": lambda self: type("N", (), {"tobytes": lambda b=b"x"*128: b"x"*128})()})()]
    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "qwen3-vl"}, prompt="", image=fake_image
    )
    assert result[0] == "described image"


def test_scanner_custom_style_unicode(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner, _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "styled unicode result")
    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", custom_style="стиль с юникодом 🔥",
    )
    assert result[0] == "styled unicode result"
    assert result[2]["decision_trace"]["style_selected"] is True


def test_scanner_response_format_short(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner, _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "short")
    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", response_format="short",
    )
    assert result[0] == "short"


def test_scanner_response_format_json(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner, _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: '{"key": "value"}')
    result = FiLOpticScanner.execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", response_format="json",
    )
    assert "key" in result[0]
    assert "value" in result[0]
