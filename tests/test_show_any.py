from __future__ import annotations

import torch

from FiL_Design_ImageMind.nodes.node_show_any import FiLShowAny, inspect_data


def test_show_any_standalone_fallback():
    passthrough, text, data_type, words, chars = inspect_data(None, "hello world from fil")
    assert passthrough == "hello world from fil"
    assert text == "hello world from fil"
    assert data_type == "STANDALONE"
    assert words == 4
    assert chars == 20


def test_show_any_string():
    prompt = "A high-end cinematic photo of a cyberpunk city with neon lights"
    passthrough, text, data_type, words, chars = inspect_data(prompt)
    assert passthrough == prompt
    assert text == prompt
    assert data_type == "STRING"
    assert words == 11
    assert chars == len(prompt)


def test_show_any_primitives():
    # Int
    _, text, data_type, words, chars = inspect_data(1024)
    assert text == "1024"
    assert data_type == "INT"
    assert words == 1
    assert chars == 4

    # Float
    _, text, data_type, _, _ = inspect_data(0.75)
    assert text == "0.75"
    assert data_type == "FLOAT"

    # Bool
    _, text, data_type, _, _ = inspect_data(True)
    assert text == "True"
    assert data_type == "BOOLEAN"


def test_show_any_json_dict():
    payload = {"model": "flux-schnell", "steps": 4, "cfg": 1.0}
    passthrough, text, data_type, _, _ = inspect_data(payload)
    assert passthrough is payload
    assert "flux-schnell" in text
    assert data_type == "JSON"


def test_show_any_image_tensor():
    img_tensor = torch.zeros((1, 512, 768, 3), dtype=torch.float32)
    passthrough, text, data_type, _, _ = inspect_data(img_tensor)
    assert passthrough is img_tensor
    assert "768 × 512 px (RGB)" in text
    assert data_type == "IMAGE"


def test_show_any_mask_tensor():
    mask_tensor = torch.zeros((1, 512, 768), dtype=torch.float32)
    passthrough, text, data_type, _, _ = inspect_data(mask_tensor)
    assert passthrough is mask_tensor
    assert "MASK TENSOR" in text
    assert data_type == "MASK"


def test_show_any_latent():
    latent_tensor = torch.zeros((1, 4, 64, 64), dtype=torch.float32)
    latent_dict = {"samples": latent_tensor}
    passthrough, text, data_type, _, _ = inspect_data(latent_dict)
    assert passthrough is latent_dict
    assert "512 × 512 px (8x)" in text
    assert data_type == "LATENT"


def test_show_any_node_execute():
    out = FiLShowAny.execute(source="test prompt", text="")
    args = out.args if hasattr(out, "args") else out
    assert len(args) == 1
    assert args[0] == "test prompt"
    assert hasattr(out, "ui")
    assert out.ui["text"] == ["test prompt"]
    assert out.ui["data_type"] == ["STRING"]
