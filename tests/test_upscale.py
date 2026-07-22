from __future__ import annotations

import numpy as np
import pytest

from FiL_Design_ImageMind.nodes.node_upscale import FiLUpscaleTileCalc


def image(width=320, height=192):
    return np.zeros((1, height, width, 3), dtype=np.float32)


def image_filled(width=320, height=192, value=1.0):
    return np.full((1, height, width, 3), value, dtype=np.float32)


def test_output_contract_has_stable_twenty_one_values():
    schema = FiLUpscaleTileCalc.GET_SCHEMA()
    assert len(schema.outputs) == 21
    expected_names = [
        "image", "tiles", "upscale_by", "denoise", "tile_width",
        "tile_height", "mask_blur", "tile_padding", "overlap", "width", "height",
        "tile_cols", "tile_rows", "tile_count", "latent_w", "latent_h",
        "info", "warnings", "latent", "latent_tiles", "layout",
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
    )
    assert result[4] == expected_tile
    assert result[5] == expected_tile
    assert result[11] * result[12] == result[13]


def test_auto_mode_surfaces_profile_summary_in_info():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, auto_mode=True, auto_profile="Balanced",
    )
    assert "Profile: Balanced square tiles" in result[16]


def test_manual_grid_and_latent_dimensions_are_consistent():
    result = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=3, manual_tile_rows=2,
    )
    # tw/th (1048x672) are bigger than the naive edge-to-edge size (960x608)
    # — grown by tile_size_for_count to fit real 128px overlap while still
    # landing on exactly the requested 3x2 grid.
    assert result[4:6] == (1048, 672)
    assert result[9:14] == (2880, 1216, 3, 2, 6)
    assert result[14:16] == (360, 152)


def test_partial_manual_grid_computes_missing_dimension():
    result = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=3, manual_tile_rows=0,
    )
    assert result[11] == 3
    assert result[12] >= 1
    assert "Manual cols set — rows computed automatically" in result[17]

    result_rows = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024,
        tile_overlap=128, manual_tile_cols=0, manual_tile_rows=2,
    )
    assert result_rows[12] == 2
    assert result_rows[11] >= 1
    assert "Manual rows set — cols computed automatically" in result_rows[17]


def test_overlap_output_matches_effective_overlap_in_info():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64,
    )
    assert f"Overlap: {result[8]:g}" in result[16]


def test_overlap_output_is_float_and_preserves_fractional_average():
    # non_square 800x1379 at tile_size=512/overlap=233 gives tw/th=416x624;
    # the per-axis REDISTRIBUTED overlap (see compute_layout) ends up
    # different on each axis and their average genuinely lands on a
    # fractional pixel (285.5). `overlap` is FLOAT precisely so this isn't
    # silently rounded away — downstream decides how to use the fraction.
    result = FiLUpscaleTileCalc.execute(
        image=image(800, 1379), upscale_factor=1.0, tile_size=512,
        tile_overlap=233, non_square_tiles=True,
    )
    assert result[4:6] == (416, 624)
    assert result[8] == 285.5


def test_single_tile_covers_full_image_warning():
    result = FiLUpscaleTileCalc.execute(
        image=image(128, 128), upscale_factor=2.0, tile_size=2048,
        tile_overlap=64,
    )
    assert "Single tile covers full image" in result[17]


def test_non_square_tiles_follow_image_orientation():
    landscape = FiLUpscaleTileCalc.execute(image(800, 400), 2.0, 512, 64, non_square_tiles=True)
    portrait = FiLUpscaleTileCalc.execute(image(400, 800), 2.0, 512, 64, non_square_tiles=True)
    assert landscape[4] > landscape[5]
    assert portrait[5] > portrait[4]


def test_thin_edge_and_zero_overlap_warnings():
    result = FiLUpscaleTileCalc.execute(
        image=image(1088, 512), upscale_factor=1.0, tile_size=512,
        tile_overlap=0,
    )
    assert "Zero padding/blend basis" in result[17]
    assert "Thin edge tile" in result[17]


def test_auto_fix_thin_edges_shrinks_tile_to_avoid_seam():
    # 1200x1200 -> aligned to 1216x1216: a 1024 tile leaves a 192px thin
    # remainder (< 256 threshold); 768 divides cleanly enough to pass.
    baseline = FiLUpscaleTileCalc.execute(
        image=image(1200, 1200), upscale_factor=1.0, tile_size=1024,
        tile_overlap=64,
    )
    assert baseline[4:6] == (1024, 1024)
    assert "Thin edge tile" in baseline[17]
    assert "Auto: tile_size adjusted" not in baseline[16]

    fixed = FiLUpscaleTileCalc.execute(
        image=image(1200, 1200), upscale_factor=1.0, tile_size=1024,
        tile_overlap=64, auto_fix_thin_edges=True,
    )
    assert fixed[4:6] == (768, 768)
    assert "Thin edge tile" not in fixed[17]
    assert "Auto: tile_size adjusted from 1024 to avoid thin edge" in fixed[16]


def test_auto_fix_thin_edges_does_not_touch_explicit_manual_grid():
    result = FiLUpscaleTileCalc.execute(
        image=image(1200, 1200), upscale_factor=1.0, tile_size=1024,
        tile_overlap=64, manual_tile_cols=3, manual_tile_rows=3,
        auto_fix_thin_edges=True,
    )
    assert "Auto: tile_size adjusted" not in result[16]


def test_tiles_batch_matches_tile_count_with_zero_overlap():
    # tiles is always computed (no toggle) — it's the node's primary preview.
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512,
        tile_overlap=0,
    )
    tiles = result[1]
    tw, th, tile_count = result[4], result[5], result[13]
    assert tile_count == 4  # 1024 / 512 divides exactly, no overlap -> clean 2x2 grid
    assert tiles.shape == (tile_count, th, tw, 3)


def test_tile_overlap_actually_shrinks_the_grid_step():
    # tile_overlap must genuinely reduce the step between tiles (step = tw -
    # overlap), not just get reported as a number — same image/tile_size,
    # only overlap differs, so a bigger overlap must yield MORE, denser tiles.
    no_overlap = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512, tile_overlap=0,
    )
    with_overlap = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512, tile_overlap=64,
    )
    assert no_overlap[13] == 4    # 2x2, tiles edge-to-edge (step=512)
    assert with_overlap[13] == 9  # 3x3, step=512-64=448 fits one more tile per axis
    assert with_overlap[1].shape[0] == 9


def test_non_square_overlap_does_not_collapse_short_axis_step():
    # Non-square tile (tw=624, th=416, capped at MAX_TILE_ASPECT_RATIO=1.5)
    # with a large tile_overlap=500: sov clamps to tw//2=312, soh clamps to
    # th//2=208 — averaging those two into one shared eff_overlap used to
    # exceed th entirely, collapsing step_h toward 1px and exploding the
    # grid. Each axis must use its OWN clamped overlap for stepping instead.
    result = FiLUpscaleTileCalc.execute(
        image=image(1600, 200), upscale_factor=1.0, tile_size=512,
        tile_overlap=500, non_square_tiles=True,
    )
    tile_count = result[13]
    assert tile_count == 5  # was 146 before the per-axis overlap fix + 50% cap
    assert result[1].shape[0] == tile_count


def test_overlap_capped_at_half_tile_size_prevents_tile_explosion():
    # tile_overlap can be requested up to the schema max (512) which may
    # exceed the tile itself once non_square_tiles derives a small axis —
    # the old `tw - 8` bound let overlap reach ~100% of that axis, collapsing
    # its step to a handful of px. 486 tiles were observed on a real photo
    # (674x1198, factor=1.5, tile_size=512, overlap=400, non_square) before
    # the 50% cap; must stay small after it.
    result = FiLUpscaleTileCalc.execute(
        image=image(674, 1198), upscale_factor=1.5, tile_size=512,
        tile_overlap=400, non_square_tiles=True,
    )
    assert result[13] == 20  # was 486 before the 50%-of-tile-size overlap cap
    assert result[1].shape[0] == 20


def test_manual_grid_keeps_exact_count_while_growing_tile_for_overlap():
    # An explicit manual_tile_cols/rows grid fixes the tile COUNT by direct
    # user intent — overlap must not inflate the grid past what was
    # explicitly requested. It IS applied for real though: the tile itself
    # grows past the naive edge-to-edge size to make room for genuinely
    # shared pixels (see test_manual_grid_applies_real_overlap_between_tiles).
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512,
        tile_overlap=64, manual_tile_cols=2, manual_tile_rows=2,
    )
    assert result[13] == 4  # exactly the requested 2x2, not overlap-inflated


def test_manual_grid_applies_real_overlap_between_tiles():
    # Same 3-col manual grid, only tile_overlap differs: with real overlap
    # applied (not just reported), the tile must be genuinely bigger than
    # the zero-overlap version to fit the shared margin while keeping the
    # same requested column count.
    no_overlap = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512,
        tile_overlap=0, manual_tile_cols=3, manual_tile_rows=1,
    )
    with_overlap = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512,
        tile_overlap=64, manual_tile_cols=3, manual_tile_rows=1,
    )
    assert no_overlap[11] == 3
    assert with_overlap[11] == 3  # same requested column count...
    assert with_overlap[4] > no_overlap[4]  # ...but a genuinely bigger tile (344 -> 384)


def test_auto_overlap_ignores_manual_value_and_scales_with_tile_size():
    # tile_size=1024 -> compute_auto_overlap = max(32, round(1024/64)*8) = 128,
    # NOT the manual tile_overlap=64 passed alongside it. On a 2944x2944
    # target the 128px request needs a 4th column (redistributed evenly to
    # 384px, see compute_layout), while 64px still fits in 3 columns with
    # its nominal step dividing evenly (no redistribution, stays exactly 64).
    auto = FiLUpscaleTileCalc.execute(
        image=image(2944, 2944), upscale_factor=1.0, tile_size=1024,
        tile_overlap=64, auto_overlap=True,
    )
    manual = FiLUpscaleTileCalc.execute(
        image=image(2944, 2944), upscale_factor=1.0, tile_size=1024,
        tile_overlap=64, auto_overlap=False,
    )
    assert auto[8] == 384
    assert manual[8] == 64


def test_layout_redistributes_overlap_evenly_instead_of_dumping_it_on_last_tile():
    # Real case (1520x2704 photo, factor=2, tile_size=1024, tile_overlap=64):
    # the naive fixed-step grid needs a 4th column whose position must clamp
    # inward to stay in bounds, concentrating the ENTIRE ceil() overshoot
    # onto just that one boundary — 64px overlap on 2 boundaries but 896px
    # (87.5%!) on the 3rd, making the last two tile crops look almost
    # identical. Redistributing the step evenly spreads that same overshoot
    # across all 3 boundaries instead (~341px each here).
    result = FiLUpscaleTileCalc.execute(
        image=image(1520, 2704), upscale_factor=2.0, tile_size=1024, tile_overlap=64,
    )
    assert result[9:11] == (3072, 5440)  # aw, ah
    assert result[11] == 4  # tile_cols
    # No boundary should be anywhere near the old 896px/87.5% worst case.
    assert result[8] < 500


def test_auto_overlap_ignored_when_full_auto_active():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, auto_overlap=True, auto_mode=True, auto_profile="Balanced",
    )
    assert "Auto overlap ignored because Full Auto already derives its own overlap" in result[17]


def test_denoise_hint_matches_upscale_practice():
    # Denoise hint tracks practice: ~0.20 at a typical 2x, 0.30 ceiling,
    # 0.15 floor (was an under-denoising 0.10-0.24 band before).
    at2x = FiLUpscaleTileCalc.execute(image(1024, 1024), 2.0, 512, 64)
    at4x = FiLUpscaleTileCalc.execute(image(512, 512), 4.0, 512, 64)
    downscale = FiLUpscaleTileCalc.execute(image(1024, 1024), 0.5, 512, 64)
    assert at2x[3] == 0.20
    assert at4x[3] == 0.30
    assert downscale[3] == 0.15


def test_non_square_manual_grid_has_no_false_nonstandard_warning():
    # A rectangular tile is EXPECTED with non_square_tiles on, so the
    # "non-standard tile" warning must not fire on it (it used to on any
    # manual grid / non-square config).
    result = FiLUpscaleTileCalc.execute(
        image=image(1920, 1080), upscale_factor=2.0, tile_size=1024, tile_overlap=64,
        non_square_tiles=True, manual_tile_cols=3, manual_tile_rows=2,
    )
    assert "non-standard tile" not in result[17]
    assert "non-square tile" not in result[17]


def test_full_manual_grid_warns_when_square_mode_yields_rectangular_tile():
    # mg_full (both cols AND rows set) computes tw/th independently per axis
    # from their own count/overlap — it ignores non_square_tiles entirely, so
    # a cols != rows request can silently produce a non-square tile even with
    # Square mode selected. The suppression added for the overlap-growth case
    # (tile no longer matching a "standard" size once overlap makes it bigger)
    # must not also hide THIS surprise — cols=3/rows=2 here forces 1048x672,
    # not a square tile, and the user asked for Square.
    result = FiLUpscaleTileCalc.execute(
        image=image(2016, 864), upscale_factor=1.4, tile_size=1024, tile_overlap=128,
        manual_tile_cols=3, manual_tile_rows=2, non_square_tiles=False,
    )
    assert result[4:6] == (1048, 672)
    assert "non-square tile" in result[17]
    assert "despite Square mode" in result[17]


def test_auto_fix_at_min_tile_explains_noop_in_info():
    # tile_size=512 is the smallest standard size — auto-fix can't shrink
    # further, so instead of silently doing nothing it must explain why in
    # `info` when a thin edge is present.
    result = FiLUpscaleTileCalc.execute(
        image=image(1088, 512), upscale_factor=2.0, tile_size=512,
        tile_overlap=64, auto_fix_thin_edges=True,
    )
    assert result[4] == 512  # unchanged, didn't shrink below the floor
    assert "Thin edge tile" in result[17]
    assert "Auto-fix: tile already at min standard 512px" in result[16]


def test_tile_previews_upscale_source_when_no_model_ran():
    # upscale_factor=2.0 with no upscale_model connected: `image` output stays
    # passthrough at the ORIGINAL 320x192 resolution, but tile_rects are
    # always computed against the tile-aligned 640x384 TARGET. Cropping tiles
    # straight out of the smaller source would read out of bounds and come
    # back all-black — this proves crop_tiles resizes its source first.
    result = FiLUpscaleTileCalc.execute(
        image=image_filled(320, 192, value=1.0), upscale_factor=2.0, tile_size=64,
        tile_overlap=16,
    )
    tiles = result[1]
    tile_count = result[13]
    assert tile_count == 104  # 13x8 grid: step=64-16=48 shrinks vs a 64px no-overlap step
    assert tiles.shape[0] == tile_count
    assert tiles.min() > 0.5  # every tile has real (near-1.0) content, none all-black


def test_tile_previews_edge_tiles_are_full_size_without_black_padding():
    # 1088x512, tile_size=512: cols=3. The last column can't fit a full 512
    # tile at x=1024 (only 64px left), so instead of zero-padding it black it
    # is shifted inward to x=576 and overlaps the middle tile — every tile is
    # full-size with real content, no black bars.
    result = FiLUpscaleTileCalc.execute(
        image=image_filled(1088, 512, value=1.0), upscale_factor=1.0, tile_size=512,
        tile_overlap=64,
    )
    tiles = result[1]
    tw, th = result[4], result[5]
    assert tiles.shape[1:3] == (th, tw)
    # Every tile is entirely real (near-1.0) content — no zero-padding anywhere.
    assert np.allclose(tiles, 1.0)


def test_tile_previews_shift_reads_real_content_from_photo():
    # Gradient across the width so a black bar (zero-pad) would be detectable
    # as an abrupt drop to 0 at the right edge of the last tile.
    grad = np.tile(np.linspace(0.2, 1.0, 1088, dtype=np.float32), (512, 1))
    img = np.stack([grad, grad, grad], axis=-1)[np.newaxis]
    result = FiLUpscaleTileCalc.execute(
        image=img, upscale_factor=1.0, tile_size=512, tile_overlap=64,
    )
    tiles = result[1]
    # Right-most column of the last tile must carry real (non-zero) gradient
    # pixels, not a black pad.
    assert float(tiles[-1][:, -1, :].min()) > 0.1


def test_min_factor_01():
    result = FiLUpscaleTileCalc.execute(image(100, 100), 0.1, 512, 64)
    assert result[2] == 0.1
    assert result[9] > 0 and result[10] > 0


def test_max_factor_80():
    result = FiLUpscaleTileCalc.execute(image(16, 16), 8.0, 1024, 64)
    assert result[2] == 8.0
    assert result[9] > 0 and result[10] > 0


def test_auto_profile_zero_dimensions():
    result = FiLUpscaleTileCalc.execute(image(1, 1), 2.0, 512, 64, auto_mode=True, auto_profile="Balanced")
    assert result[4] == 768
    assert result[5] == 768


def _latent(width=320, height=192, channels=4):
    import torch
    return {"samples": torch.zeros(1, channels, height // 8, width // 8)}


def test_latent_tiles_support_5d_video_style_latent_format():
    """Some checkpoints (e.g. Z-Image-style models) return a 5D
    (B, C, T=1, H, W) latent even for a single still image, not the usual
    4D (B, C, H, W). Reproduced live: `crop_latent_tiles` sliced dims 2/3
    positionally, cropping the T axis (size 1) instead of H for every row
    past the first — RuntimeError 'size 0 for tensor number 3 in the list'."""
    import torch

    latent = {"samples": torch.zeros(1, 16, 1, 128, 128)}
    result = FiLUpscaleTileCalc.execute(
        image=None, upscale_factor=2.0, tile_size=1024, tile_overlap=64, latent=latent,
    )
    latent_tiles = result[19]
    assert latent_tiles["samples"].shape == (9, 16, 1, 128, 128)


def test_latent_outputs_are_blank_placeholder_when_not_connected():
    result = FiLUpscaleTileCalc.execute(image(320, 192), 2.0, 512, 64)
    latent, latent_tiles = result[18], result[19]
    assert latent["samples"].shape == (1, 4, 8, 8)
    assert latent_tiles["samples"].shape == (1, 4, 8, 8)


def test_layout_output_matches_tile_grid_and_canvas_size():
    result = FiLUpscaleTileCalc.execute(image(320, 192), 2.0, 512, 64)
    width, height = result[9], result[10]
    tile_cols, tile_rows, tile_count = result[11], result[12], result[13]
    layout = result[20]
    assert layout["cols"] == tile_cols
    assert layout["rows"] == tile_rows
    assert layout["cols"] * layout["rows"] == tile_count
    assert len(layout["rects"]) == tile_count
    assert layout["canvas_w"] == width
    assert layout["canvas_h"] == height


def test_layout_output_is_real_grid_even_in_latent_only_mode():
    """`layout` describes the grid geometry, not the `tiles` image batch —
    it must stay the real computed grid even when there's no image to crop
    (latent-only mode), so FiLTileAssembly always has something meaningful
    to work with regardless of which input was connected."""
    result = FiLUpscaleTileCalc.execute(image=None, upscale_factor=2.0, tile_size=512, tile_overlap=64,
                                        latent=_latent(320, 192))
    layout = result[20]
    assert layout["cols"] * layout["rows"] == result[13]
    assert len(layout["rects"]) == result[13]


def test_latent_resizes_to_latent_aligned_target():
    result = FiLUpscaleTileCalc.execute(
        image=image(320, 192), upscale_factor=2.0, tile_size=512, tile_overlap=64,
        latent=_latent(320, 192),
    )
    lw, lh = result[14], result[15]
    latent = result[18]
    assert latent["samples"].shape[2:4] == (lh, lw)


def test_latent_tiles_match_image_tile_count_and_size():
    result = FiLUpscaleTileCalc.execute(
        image=image(1024, 1024), upscale_factor=1.0, tile_size=512, tile_overlap=64,
        latent=_latent(1024, 1024),
    )
    tile_count = result[13]
    tw, th = result[4], result[5]
    latent_tiles = result[19]
    assert latent_tiles["samples"].shape[0] == tile_count
    assert latent_tiles["samples"].shape[2:4] == (th // 8, tw // 8)


def test_raises_when_neither_image_nor_latent_connected():
    with pytest.raises(ValueError):
        FiLUpscaleTileCalc.execute()


def test_latent_only_mode_derives_dimensions_from_latent_and_placeholders_image():
    # No image connected at all — source ow/oh come from the latent's own
    # spatial size (40x24 latent -> 320x192 pixel-equivalent), and image/tiles
    # fall back to the tiny placeholder since there's nothing to crop from.
    result = FiLUpscaleTileCalc.execute(
        upscale_factor=2.0, tile_size=512, tile_overlap=64, latent=_latent(320, 192),
    )
    assert result[9:11] == (640, 384)  # aw, ah: 320x192 * 2, already 64-aligned
    assert result[0].shape == (1, 8, 8, 3)  # image placeholder
    assert result[1].shape == (1, 8, 8, 3)  # tiles placeholder
    latent = result[18]
    assert latent["samples"].shape[2:4] == (48, 80)  # lh, lw


def test_upscale_model_ignored_without_image_in_latent_only_mode():
    # A model connected alongside latent-only input must not blow up (there's
    # no image to run it on) — it's simply unused.
    class _FakeModel:
        scale = 4

    result = FiLUpscaleTileCalc.execute(
        upscale_factor=2.0, tile_size=512, tile_overlap=64,
        latent=_latent(320, 192), upscale_model=_FakeModel(),
    )
    assert result[0].shape == (1, 8, 8, 3)
