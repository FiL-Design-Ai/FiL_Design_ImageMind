from __future__ import annotations

import numpy as np
import pytest

from FiL_Design_ImageMind.nodes.node_upscale import FiLUpscaleTileCalc
from FiL_Design_ImageMind.nodes.node_upscale_simple import FiLUpscaleSimple


def image(width=320, height=192):
    return np.zeros((1, height, width, 3), dtype=np.float32)


class FakeUpscaleModel:
    """Stand-in for a spandrel ImageModelDescriptor — only `.scale` matters
    here, real inference is faked out (see `_fake_apply_upscale_model`)."""

    def __init__(self, scale):
        self.scale = scale


def _fake_apply_upscale_model(image, upscale_model, target_w, target_h):
    # numpy-only resize standing in for the real model + comfy.utils.common_upscale
    # pass — mirrors _resize_source's own numpy/PIL fallback path exactly, so
    # the rest of the pipeline (crop_tiles) behaves identically either way.
    from PIL import Image as PILImage

    np_img = (np.array(image[0]) * 255).clip(0, 255).astype(np.uint8)
    pil = PILImage.fromarray(np_img).convert("RGB").resize((target_w, target_h), PILImage.LANCZOS)
    return (np.array(pil).astype(np.float32) / 255.0)[np.newaxis]


@pytest.fixture(autouse=True)
def _fake_model_inference(monkeypatch):
    monkeypatch.setattr(
        "FiL_Design_ImageMind.nodes.node_upscale.tile_calc.apply_upscale_model",
        _fake_apply_upscale_model,
    )


def test_returns_exactly_five_outputs():
    result = FiLUpscaleSimple.execute(image(320, 192), FakeUpscaleModel(2), 2.0, 512, 64)
    assert len(result.args) == 5


def test_matches_advanced_with_same_widget_values():
    model = FakeUpscaleModel(2)
    simple = FiLUpscaleSimple.execute(image(320, 192), model, 2.0, 512, 64, auto_mode=True, auto_profile="Balanced")
    advanced = FiLUpscaleTileCalc.execute(
        image=image(320, 192), upscale_factor=2.0, tile_size=512, tile_overlap=64,
        upscale_model=model, auto_mode=True, auto_profile="Balanced",
    )
    assert simple[0].shape == advanced[0].shape
    assert simple[1].shape == advanced[1].shape


@pytest.mark.parametrize("factor", [1.0, 2.0, 4.0])
def test_upscale_factor_widget_drives_output_size_proportionally(factor):
    result = FiLUpscaleSimple.execute(image(320, 192), FakeUpscaleModel(4), factor, 512, 64)
    _, h, w, _ = result[0].shape
    assert w >= 320 * factor * 0.9
    assert h >= 192 * factor * 0.9


def test_manual_tile_grid_widgets_are_forwarded():
    model = FakeUpscaleModel(2)
    simple = FiLUpscaleSimple.execute(
        image(320, 192), model, 2.0, 512, 64, manual_tile_cols=2, manual_tile_rows=2,
    )
    advanced = FiLUpscaleTileCalc.execute(
        image=image(320, 192), upscale_factor=2.0, tile_size=512, tile_overlap=64,
        upscale_model=model, manual_tile_cols=2, manual_tile_rows=2,
    )
    assert simple[1].shape == advanced[1].shape


def test_upscale_model_is_optional_when_image_connected():
    # upscale_model no longer required — without it image just passes through
    # (calculator-only), same as Advanced's own optional-model behavior.
    result = FiLUpscaleSimple.execute(image(320, 192), None, 2.0, 512, 64)
    assert result[0].shape[1:3] == (192, 320)


def test_raises_when_neither_image_nor_latent_connected():
    with pytest.raises(ValueError):
        FiLUpscaleSimple.execute()


def test_latent_only_mode_works_without_image_or_model():
    import torch

    fake_latent = {"samples": torch.zeros(1, 4, 192 // 8, 320 // 8)}
    result = FiLUpscaleSimple.execute(latent=fake_latent, upscale_factor=2.0, tile_size=512, tile_overlap=64)
    # image/tiles fall back to the tiny placeholder (no image was connected)...
    assert result[0].shape == (1, 8, 8, 3)
    # ...but latent genuinely resized to the tile-aligned target derived from
    # the latent's OWN dimensions: 320x192 latent-space (40x24) -> x2 pixel
    # equiv 640x384 (already 64-aligned) -> latent target 80x48 (lw, lh).
    assert result[2]["samples"].shape[2:4] == (48, 80)


def test_latent_outputs_are_blank_placeholder_when_not_connected():
    result = FiLUpscaleSimple.execute(image(320, 192), FakeUpscaleModel(2), 2.0, 512, 64)
    latent, latent_tiles = result[2], result[3]
    assert latent["samples"].shape == (1, 4, 8, 8)
    assert latent_tiles["samples"].shape == (1, 4, 8, 8)


def test_latent_forwards_through_to_advanced_and_matches():
    import torch

    model = FakeUpscaleModel(2)
    fake_latent = {"samples": torch.zeros(1, 4, 192 // 8, 320 // 8)}
    simple = FiLUpscaleSimple.execute(image(320, 192), model, 2.0, 512, 64, latent=fake_latent)
    advanced = FiLUpscaleTileCalc.execute(
        image=image(320, 192), upscale_factor=2.0, tile_size=512, tile_overlap=64,
        upscale_model=model, latent=fake_latent,
    )
    assert simple[2]["samples"].shape == advanced[18]["samples"].shape
    assert simple[3]["samples"].shape == advanced[19]["samples"].shape


def test_layout_forwards_through_to_advanced_and_matches():
    model = FakeUpscaleModel(2)
    simple = FiLUpscaleSimple.execute(image(320, 192), model, 2.0, 512, 64)
    advanced = FiLUpscaleTileCalc.execute(
        image=image(320, 192), upscale_factor=2.0, tile_size=512, tile_overlap=64, upscale_model=model,
    )
    assert simple[4] == advanced[20]
