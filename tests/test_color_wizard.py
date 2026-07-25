"""Tests for FiL Color Wizard — color correction algorithms and node contract."""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np

# Import color_correction directly (not through FiL_Design_ImageMind package)
# to avoid pulling in comfy_api.latest which requires torch.
_COMMON = Path(__file__).resolve().parents[1] / "common"
if str(_COMMON) not in sys.path:
    sys.path.insert(0, str(_COMMON))

from color_correction import (  # type: ignore[import-untyped]
    METHODS,
    METHOD_KEYS,
    rgb_to_lab,
    lab_to_rgb,
    temperature_tint,
    gray_world,
    white_patch,
    channel_stretch,
    lab_enhance,
    full_auto,
    preserve_skin_blend,
    match_to_reference,
    white_balance_from_mask,
)


def test_all_methods_registered():
    for k in METHOD_KEYS:
        assert k in METHODS, f"{k} missing from METHODS dict"
    assert len(METHODS) == len(METHOD_KEYS)


def test_each_method_produces_same_shape():
    img = np.ones((32, 32, 3), dtype=np.uint8) * 128
    for name, fn in METHODS.items():
        kwargs = {"strength": 0.8}
        if name == "Channel Stretch":
            kwargs["saturate"] = 0.5
        if name == "White Patch":
            kwargs["percentile"] = 99.0
        result = fn(img, **kwargs)
        assert result.shape == (32, 32, 3)
        assert result.dtype == np.uint8


def test_each_method_handles_zero_strength():
    img = np.ones((16, 16, 3), dtype=np.uint8) * [200, 180, 150]
    for name, fn in METHODS.items():
        kwargs = {"strength": 0.0}
        if name == "Channel Stretch":
            kwargs["saturate"] = 0.5
        result = fn(img.copy(), **kwargs)
        assert np.array_equal(result, img), f"{name} did not pass through at strength 0"


def test_each_method_handles_solid_colour():
    for r in (0, 64, 128, 192, 255):
        img = np.ones((8, 8, 3), dtype=np.uint8) * r
        for name, fn in METHODS.items():
            kwargs = {"strength": 1.0}
            if name == "Channel Stretch":
                kwargs["saturate"] = 0.5
            result = fn(img.copy(), **kwargs)
            assert result.shape == img.shape
            assert result.dtype == np.uint8


def test_gray_world_corrects_warm_cast():
    img = np.ones((32, 32, 3), dtype=np.uint8) * [200, 180, 150]
    result = gray_world(img, strength=1.0)
    mean = result.mean(axis=(0, 1))
    orig_spread = max([200, 180, 150]) - min([200, 180, 150])
    result_spread = max(mean) - min(mean)
    assert result_spread < orig_spread * 0.5, f"Gray World didn't balance: {mean}"


def test_white_patch_stretches():
    img = np.ones((16, 16, 3), dtype=np.uint8) * 128
    result = white_patch(img, strength=1.0)
    assert result.max() == 255


def test_channel_stretch_zero_input():
    img = np.ones((8, 8, 3), dtype=np.uint8) * 128
    result = channel_stretch(img, strength=1.0)
    assert result.min() == 0 and result.max() == 0


def test_lab_enhance_unchanged_low_strength():
    img = np.random.randint(0, 256, (16, 16, 3), dtype=np.uint8)
    result = lab_enhance(img, strength=0.0)
    assert np.array_equal(result, img)


def test_full_auto_pipeline():
    img = np.random.randint(0, 256, (16, 16, 3), dtype=np.uint8)
    result = full_auto(img, strength=0.8)
    assert result.shape == img.shape
    assert result.dtype == np.uint8


def test_lab_roundtrip():
    img = np.random.randint(0, 256, (32, 32, 3), dtype=np.uint8)
    lab = rgb_to_lab(img)
    recovered = lab_to_rgb(lab)
    diff = np.abs(img.astype(np.int16) - recovered.astype(np.int16))
    assert diff.max() <= 3, f"LAB roundtrip error too high: max {diff.max()}"


def test_temperature_tint_neutral():
    img = np.random.randint(0, 256, (16, 16, 3), dtype=np.uint8)
    result = temperature_tint(img, 0.0, 0.0)
    assert np.array_equal(result, img)


def test_temperature_tint_changes_channels():
    img = np.ones((8, 8, 3), dtype=np.uint8) * [128, 128, 128]
    warm = temperature_tint(img, temperature=1.0)
    cool = temperature_tint(img, temperature=-1.0)
    assert warm[..., 0].mean() > 128
    assert warm[..., 2].mean() < 128
    assert cool[..., 0].mean() < 128
    assert cool[..., 2].mean() > 128


def test_tint_changes_green():
    img = np.ones((8, 8, 3), dtype=np.uint8) * [128, 128, 128]
    g = temperature_tint(img, tint=-1.0)
    m = temperature_tint(img, tint=1.0)
    assert g[..., 1].mean() < 128
    assert m[..., 1].mean() > 128


def test_skin_preservation_blends_skin():
    skin = np.ones((16, 16, 3), dtype=np.uint8) * [210, 160, 130]
    corrected = gray_world(skin, strength=1.0)
    preserved = preserve_skin_blend(skin, corrected)
    dist_corrected = np.abs(skin.astype(np.int16) - corrected.astype(np.int16)).mean()
    dist_preserved = np.abs(skin.astype(np.int16) - preserved.astype(np.int16)).mean()
    assert dist_preserved < dist_corrected * 0.8, "Skin preservation didn't reduce distance to original"


def test_skin_preservation_ignores_non_skin():
    non = np.ones((16, 16, 3), dtype=np.uint8) * [60, 130, 210]
    corrected = gray_world(non, strength=1.0)
    preserved = preserve_skin_blend(non, corrected)
    assert np.array_equal(preserved, corrected), "Non-skin areas should not be altered"


def test_reference_match_accepts_smaller_reference():
    """A reference smaller than the source used to raise IndexError."""
    rng = np.random.default_rng(0)
    src = rng.integers(0, 256, (128, 128, 3), dtype=np.uint8)
    ref = rng.integers(0, 256, (16, 16, 3), dtype=np.uint8)
    out = match_to_reference(src, ref, strength=1.0)
    assert out.shape == src.shape
    assert out.dtype == np.uint8


def test_reference_match_accepts_larger_reference():
    """A larger reference used to silently map onto its darkest pixels only."""
    rng = np.random.default_rng(1)
    src = rng.integers(0, 256, (16, 16, 3), dtype=np.uint8)
    ref = rng.integers(0, 256, (128, 128, 3), dtype=np.uint8)
    out = match_to_reference(src, ref, strength=1.0)
    assert out.shape == src.shape
    # The matched result must span a comparable range to the reference, not be
    # squashed into its lowest values.
    assert out.max() > 200, f"reference range not transferred, max={out.max()}"


def test_reference_match_is_stable_for_equal_sizes():
    rng = np.random.default_rng(2)
    src = rng.integers(0, 256, (32, 32, 3), dtype=np.uint8)
    out = match_to_reference(src, src, strength=1.0)
    assert np.abs(out.astype(np.int16) - src.astype(np.int16)).mean() < 3.0


def test_wb_mask_of_a_different_size_is_resampled():
    """A mask at another resolution used to raise a raw numpy IndexError."""
    rng = np.random.default_rng(3)
    img = rng.integers(0, 256, (64, 64, 3), dtype=np.uint8)
    for mask_shape in ((32, 32), (128, 128), (64, 32)):
        mask = np.ones(mask_shape, dtype=np.float32)
        out = white_balance_from_mask(img, mask, strength=1.0)
        assert out.shape == img.shape
        assert out.dtype == np.uint8


def test_wb_mask_matching_size_still_selects_only_the_masked_area():
    img = np.full((16, 16, 3), 128, dtype=np.uint8)
    mask = np.zeros((16, 16), dtype=np.float32)
    # Fewer than 10 masked pixels -> the function must leave the image alone.
    mask[0, 0] = 1.0
    assert np.array_equal(white_balance_from_mask(img, mask), img)


def test_single_wb_mask_applies_to_a_whole_image_batch():
    """One mask wired to a multi-image batch used to raise IndexError on frame 2."""
    import torch

    from FiL_Design_ImageMind.nodes.node_color_wizard import FiLColorWizard

    images = torch.rand(3, 32, 32, 3)
    mask = torch.ones(1, 32, 32)
    result = FiLColorWizard.execute(images, wb_mask=mask)
    assert result[0].shape[0] == 3


def test_per_frame_wb_masks_are_still_used():
    import torch

    from FiL_Design_ImageMind.nodes.node_color_wizard import FiLColorWizard

    images = torch.rand(2, 32, 32, 3)
    masks = torch.ones(2, 32, 32)
    result = FiLColorWizard.execute(images, wb_mask=masks)
    assert result[0].shape[0] == 2
