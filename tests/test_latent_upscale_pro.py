from __future__ import annotations

import torch
import pytest

from FiL_Design_ImageMind.nodes.node_latent_upscale_pro import (
    FiLLatentUpscalePro,
    _snap_dimension,
)


def _make_latent(b: int = 1, c: int = 4, h: int = 128, w: int = 128) -> dict[str, torch.Tensor]:
    """Helper creating a synthetic latent tensor."""
    return {"samples": torch.randn(b, c, h, w, dtype=torch.float32)}


def test_snap_dimension_logic():
    # step 64
    assert _snap_dimension(1024, 64, "nearest") == 1024
    # 1361.92 / 64 = 21.28 -> 21 * 64 = 1344
    assert _snap_dimension(1361.92, 64, "nearest") == 1344
    assert _snap_dimension(1361.92, 64, "up") == 1408
    assert _snap_dimension(1361.92, 64, "down") == 1344

    # step 16
    assert _snap_dimension(1361.92, 16, "nearest") == 1360
    assert _snap_dimension(1361.92, 16, "up") == 1376
    assert _snap_dimension(1361.92, 16, "down") == 1360


def test_upscale_by_factor_snap_64():
    # 128x128 latent = 1024x1024 px
    latent = _make_latent(1, 4, 128, 128)
    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="By Factor",
        scale_by=1.33,
        snap_to="64 px (U-Net & DiT Safe)",
        round_mode="nearest",
    )

    out_latent, w, h, lw, lh, eff_scale = out
    # 1024 * 1.33 = 1361.92 -> 1344 px (divisible by 64)
    assert w == 1344
    assert h == 1344
    assert w % 64 == 0
    assert h % 64 == 0
    assert lw == 1344 // 8
    assert lh == 1344 // 8
    assert out_latent["samples"].shape == (1, 4, lh, lw)
    assert round(eff_scale, 2) == 1.31


def test_upscale_by_factor_snap_16():
    latent = _make_latent(1, 4, 128, 128)
    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="By Factor",
        scale_by=1.33,
        snap_to="16 px (DiT Patch 2x2)",
        round_mode="nearest",
    )

    out_latent, w, h, lw, lh, eff_scale = out
    # 1361.92 snapped to 16 = 1360
    assert w == 1360
    assert h == 1360
    assert w % 16 == 0
    assert h % 16 == 0
    assert lw % 2 == 0  # Guarantees even latent for DiT
    assert out_latent["samples"].shape == (1, 4, lh, lw)


def test_upscale_target_size():
    latent = _make_latent(1, 4, 128, 128)
    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="Target Size",
        target_width=1200,
        target_height=800,
        snap_to="64 px (U-Net & DiT Safe)",
        round_mode="nearest",
    )

    out_latent, w, h, lw, lh, _ = out
    # 1200 -> 1216, 800 -> 832
    assert w == 1216
    assert h == 832
    assert w % 64 == 0
    assert h % 64 == 0
    assert out_latent["samples"].shape == (1, 4, 832 // 8, 1216 // 8)


def test_upscale_longest_edge_preserves_aspect_ratio():
    # 1024 x 512 (2:1 aspect ratio) -> latent 128 x 64
    latent = _make_latent(1, 4, 64, 128)
    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="Longest Edge",
        longest_edge=1536,
        snap_to="64 px (U-Net & DiT Safe)",
        round_mode="nearest",
    )

    out_latent, w, h, lw, lh, _ = out
    # longest edge = 1536, short edge = 768
    assert w == 1536
    assert h == 768
    assert w / h == 2.0
    assert w % 64 == 0
    assert h % 64 == 0
    assert out_latent["samples"].shape == (1, 4, 768 // 8, 1536 // 8)


def test_upscale_preserves_noise_mask():
    latent = _make_latent(1, 4, 128, 128)
    latent["noise_mask"] = torch.ones((1, 1, 128, 128), dtype=torch.float32)

    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="By Factor",
        scale_by=1.5,
        snap_to="64 px (U-Net & DiT Safe)",
    )

    out_latent, w, h, lw, lh, _ = out
    assert "noise_mask" in out_latent
    assert out_latent["noise_mask"].shape == (1, 1, lh, lw)


def test_upscale_preserves_3d_noise_mask():
    latent = _make_latent(1, 4, 128, 128)
    latent["noise_mask"] = torch.ones((1, 128, 128), dtype=torch.float32)

    out = FiLLatentUpscalePro.execute(
        samples=latent,
        mode="By Factor",
        scale_by=1.5,
        snap_to="64 px (U-Net & DiT Safe)",
    )

    out_latent, w, h, lw, lh, _ = out
    assert "noise_mask" in out_latent
    assert out_latent["noise_mask"].shape == (1, lh, lw)


def test_upscale_invalid_inputs():
    with pytest.raises(ValueError, match="must be a valid LATENT dictionary"):
        FiLLatentUpscalePro.execute(samples=None)

    with pytest.raises(ValueError, match="Expected 4D latent tensor"):
        FiLLatentUpscalePro.execute(samples={"samples": torch.zeros((10, 10))})
