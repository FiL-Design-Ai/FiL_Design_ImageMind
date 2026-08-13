"""Unit tests for 🧬 LoRA Loader dynamic stack (FiLLoraLoader)."""

from __future__ import annotations

import os
import tempfile
import pytest

from FiL_Design_ImageMind.nodes.node_lora_loader import (
    FiLLoraLoader,
    _clean_lora_name,
    _extract_trigger_words,
    _filter_loras,
    _parse_lora_line,
)


def test_parse_lora_line_plain():
    spec = _parse_lora_line("style_v1.safetensors", 1.0, 1.0)
    assert spec is not None
    assert spec.filename == "style_v1.safetensors"
    assert spec.enabled is True
    assert spec.strength_model == 1.0
    assert spec.strength_clip == 1.0


def test_parse_lora_line_disabled():
    spec = _parse_lora_line("# style_v1.safetensors:0.8:0.5", 1.0, 1.0)
    assert spec is not None
    assert spec.filename == "style_v1.safetensors"
    assert spec.enabled is False
    assert spec.strength_model == 0.8
    assert spec.strength_clip == 0.5


def test_clean_lora_name():
    assert _clean_lora_name("subfolder/style_v1.safetensors") == "style_v1"
    assert _clean_lora_name("subfolder\\cyber_v2.ckpt") == "cyber_v2"
    assert _clean_lora_name("") == ""


def test_filter_loras():
    loras = ["cyberpunk_v1.safetensors", "anime_v2.safetensors", "cyber_v2.safetensors"]
    filtered = _filter_loras(loras, "cyber*")
    assert filtered == ["cyberpunk_v1.safetensors", "cyber_v2.safetensors"]


def test_extract_trigger_words_sidecar_txt(monkeypatch):
    with tempfile.TemporaryDirectory() as tmpdir:
        lora_file = os.path.join(tmpdir, "test_style.safetensors")
        txt_file = os.path.join(tmpdir, "test_style.txt")

        with open(lora_file, "w") as f:
            f.write("fake lora")
        with open(txt_file, "w", encoding="utf-8") as f:
            f.write("cyberpunk, neon glow, futuristic city")

        import folder_paths

        def mock_get_full_path(folder_type, filename):
            if folder_type == "loras" and filename == "test_style.safetensors":
                return lora_file
            return None

        monkeypatch.setattr(folder_paths, "get_full_path", mock_get_full_path)

        words = _extract_trigger_words("test_style.safetensors")
        assert words == "cyberpunk, neon glow, futuristic city"


def test_execute_disabled_lines_returns_passthrough():
    out = FiLLoraLoader.execute(
        model="dummy_model",
        clip="dummy_clip",
        lora_list="# style_v1.safetensors:0.8:0.5\n# cyber_v2.safetensors",
    )
    assert out[0] == "dummy_model"
    assert out[1] == "dummy_clip"
    assert out[2] == ""
    assert "Bypass" in out[3]
