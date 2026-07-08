from __future__ import annotations

import numpy as np
import pytest

from FiL_LLM.nodes.node_upscale import FiLUpscaleTileCalc


def image(width=320, height=192):
    return np.zeros((1, height, width, 3), dtype=np.float32)


def test_output_contract_has_stable_eighteen_values():
    schema = FiLUpscaleTileCalc.GET_SCHEMA()
    assert len(schema.outputs) == 18
    expected_names = [
        "image", "tile_grid_preview", "upscale_by", "denoise", "tile_width",
        "tile_height", "mask_blur", "tile_padding", "overlap", "width", "height",
        "tile_cols", "tile_rows", "tile_count", "latent_w", "latent_h",
        "info", "warnings",
    ]
    assert [o.display_name for o in schema.outputs] == expected_names


def test_rounding_modes_constant_removed():
    assert not hasattr(FiLUpscaleTileCalc, "_ROUNDING_MODES")


@pytest.mark.parametrize(
    ("profile", "expected_tile"),
    [("Low VRAM", 512), ("Balanced", 768), ("High VRAM", 1024), ("Max Quality", 1024), ("Ultra Quality", 1536)],
)
def test_auto_profiles_choose_expected_base_tile(profile, expected_tile):
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, auto_mode=True, auto_profile=profile,
        show_grid_preview=False,
    )
    assert result[4] == expected_tile
    assert result[5] == expected_tile
    assert result[11] * result[12] == result[13]


def test_auto_mode_surfaces_profile_summary_in_info():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, auto_mode=True, auto_profile="Balanced",
        show_grid_preview=False,
    )
    assert "Profile: Balanced square tiles" in result[16]


def test_manual_grid_and_latent_dimensions_are_consistent():
    result = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=3, manual_tile_rows=2,
        show_grid_preview=False,
    )
    assert result[4:6] == (960, 608)
    assert result[9:14] == (2880, 1216, 3, 2, 6)
    assert result[14:16] == (360, 152)


def test_partial_manual_grid_computes_missing_dimension():
    result = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=3, manual_tile_rows=0,
        show_grid_preview=False,
    )
    assert result[11] == 3
    assert result[12] >= 1
    assert "Manual cols set — rows computed automatically" in result[17]

    result_rows = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=0, manual_tile_rows=2,
        show_grid_preview=False,
    )
    assert result_rows[12] == 2
    assert result_rows[11] >= 1
    assert "Manual rows set — cols computed automatically" in result_rows[17]


def test_overlap_output_matches_effective_overlap_in_info():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, show_grid_preview=False,
    )
    assert f"Overlap: {result[8]}" in result[16]


def test_megapixel_cap_and_single_tile_warning():
    result = FiLUpscaleTileCalc.execute(
        image=image(128, 128), upscale_factor=8.0, tile_size=2048,
        tile_overlap=64, max_megapixels=0.25, show_grid_preview=False,
    )
    assert result[9] * result[10] <= 0.30 * 1_000_000
    assert "MP cap applied" in result[17]
    assert "Single tile covers full image" in result[17]


def test_non_square_tiles_follow_image_orientation():
    landscape = FiLUpscaleTileCalc.execute(image(800, 400), 2.0, 512, 64, non_square_tiles=True, show_grid_preview=False)
    portrait = FiLUpscaleTileCalc.execute(image(400, 800), 2.0, 512, 64, non_square_tiles=True, show_grid_preview=False)
    assert landscape[4] > landscape[5]
    assert portrait[5] > portrait[4]


def test_thin_edge_and_zero_overlap_warnings():
    result = FiLUpscaleTileCalc.execute(
        image=image(1088, 512), upscale_factor=1.0, tile_size=512,
        tile_overlap=0, show_grid_preview=False,
    )
    assert "Zero padding/blend basis" in result[17]
    assert "Thin edge tile" in result[17]


def test_grid_preview_has_target_shape_and_disabled_preview_is_blank():
    enabled = FiLUpscaleTileCalc.execute(image(128, 96), 1.0, 64, 16, show_grid_preview=True)
    disabled = FiLUpscaleTileCalc.execute(image(128, 96), 1.0, 64, 16, show_grid_preview=False)
    assert tuple(enabled[1].shape[1:3]) == (enabled[10], enabled[9])
    assert tuple(disabled[1].shape[1:3]) == (disabled[10], disabled[9])
    assert float(disabled[1].max()) == 0.0


def test_min_factor_01():
    result = FiLUpscaleTileCalc.execute(image(100, 100), 0.1, 512, 64, show_grid_preview=False)
    assert result[2] == 0.1
    assert result[9] > 0 and result[10] > 0


def test_max_factor_80():
    result = FiLUpscaleTileCalc.execute(image(16, 16), 8.0, 1024, 64, max_megapixels=4.0, show_grid_preview=False)
    assert result[2] == 8.0
    assert result[9] * result[10] <= 4.0 * 1_000_000


def test_auto_profile_zero_dimensions():
    result = FiLUpscaleTileCalc.execute(image(1, 1), 2.0, 512, 64, auto_mode=True, auto_profile="Balanced", show_grid_preview=False)
    assert result[4] == 768
    assert result[5] == 768
