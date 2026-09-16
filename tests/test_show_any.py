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


def test_show_any_node_execute_image_tensor():
    img = torch.zeros((1, 64, 64, 3), dtype=torch.float32)
    out = FiLShowAny.execute(source=img)
    args = out.args if hasattr(out, "args") else out
    assert len(args) == 1
    assert args[0] is img
    assert hasattr(out, "ui")
    assert out.ui["data_type"] == ["IMAGE"]
    assert "images" in out.ui


def test_show_any_node_execute_mask_tensor():
    mask = torch.zeros((1, 64, 64), dtype=torch.float32)
    out = FiLShowAny.execute(source=mask)
    args = out.args if hasattr(out, "args") else out
    assert len(args) == 1
    assert args[0] is mask
    assert hasattr(out, "ui")
    assert out.ui["data_type"] == ["MASK"]
    assert "images" in out.ui


def test_show_any_mask_2d():
    mask_2d = torch.zeros((512, 768), dtype=torch.float32)
    passthrough, text, data_type, _, _ = inspect_data(mask_2d)
    assert passthrough is mask_2d
    assert "MASK TENSOR [H=512, W=768]" in text
    assert data_type == "MASK"

    out = FiLShowAny.execute(source=mask_2d)
    assert out.ui["data_type"] == ["MASK"]


def test_show_any_video_tensor():
    # Video tensor: [Batch=1, Frames=8, Height=256, Width=384, Channels=3]
    video_tensor = torch.zeros((1, 8, 256, 384, 3), dtype=torch.float32)
    passthrough, text, data_type, _, _ = inspect_data(video_tensor)
    assert passthrough is video_tensor
    assert "VIDEO TENSOR [B=1, Frames=8, H=256, W=384, C=3]" in text
    assert "384 × 256 px (8 frames, RGB)" in text
    assert data_type == "VIDEO"

    out = FiLShowAny.execute(source=video_tensor)
    assert out.ui["data_type"] == ["VIDEO"]
    assert "images" in out.ui


def test_show_any_video_latent():
    # Video latent: [Batch=1, Channels=16, Frames=8, Height=32, Width=48]
    samples = torch.zeros((1, 16, 8, 32, 48), dtype=torch.float32)
    latent_dict = {"samples": samples}
    passthrough, text, data_type, _, _ = inspect_data(latent_dict)
    assert passthrough is latent_dict
    assert "VIDEO LATENT [B=1, Frames=8, C=16, H=32, W=48]" in text
    assert "384 × 256 px (8 frames, 8x)" in text
    assert data_type == "LATENT"


def test_show_any_comfy_objects():
    # Mock ModelPatcher
    class MockModel:
        model_type = "DiffusionModelWan21"
        manual_cast_dtype = torch.float16

    class MockModelPatcher:
        model = MockModel()
        model_dtype = torch.bfloat16
        load_device = "cuda:0"

    patcher = MockModelPatcher()
    passthrough, text, data_type, _, _ = inspect_data(patcher)
    assert passthrough is patcher
    assert "🧠 MODEL (MockModelPatcher)" in text
    assert "DiffusionModelWan21" in text
    assert data_type == "MODEL"

    # Mock VAE
    class MockVAE:
        first_stage_model = object()
        device = "cuda:0"
        vae_dtype = torch.float32

    vae = MockVAE()
    passthrough, text, data_type, _, _ = inspect_data(vae)
    assert passthrough is vae
    assert "📦 VAE" in text
    assert data_type == "VAE"

    # Mock CLIP
    class MockCLIP:
        cond_stage_model = object()
        tokenizer = object()

    clip = MockCLIP()
    passthrough, text, data_type, _, _ = inspect_data(clip)
    assert passthrough is clip
    assert "📎 CLIP" in text
    assert data_type == "CLIP"


def test_show_any_empty_unwired_returns_none():
    passthrough, text, data_type, words, chars = inspect_data(None, "")
    assert passthrough is None
    assert text == ""
    assert data_type == "STANDALONE"
    assert words == 0
    assert chars == 0

