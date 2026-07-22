from __future__ import annotations

import pytest

from FiL_Design_ImageMind.common import tile_calc
from FiL_Design_ImageMind.nodes import node_tile_assembly
from FiL_Design_ImageMind.nodes.node_tile_assembly import FiLTileAssembly
from FiL_Design_ImageMind.nodes.node_upscale import FiLUpscaleTileCalc


def image(width=320, height=192, value=0.0):
    import torch

    return torch.full((1, height, width, 3), value, dtype=torch.float32)


def test_output_is_image_socket():
    schema = FiLTileAssembly.GET_SCHEMA()
    assert len(schema.outputs) == 1
    assert schema.outputs[0].io_type == "IMAGE"


def test_is_output_node_for_preview():
    schema = FiLTileAssembly.GET_SCHEMA()
    assert schema.is_output_node is True


def test_execute_delegates_to_assemble_tiles(monkeypatch):
    captured = {}

    def _fake_assemble(tiles, layout):
        captured["tiles"] = tiles
        captured["layout"] = layout
        return "ASSEMBLED"

    monkeypatch.setattr(tile_calc, "assemble_tiles", _fake_assemble)
    monkeypatch.setattr(node_tile_assembly, "_preview_saver", None)
    result = FiLTileAssembly.execute(tiles="TILES", layout={"rects": []})
    assert result[0] == "ASSEMBLED"
    assert captured == {"tiles": "TILES", "layout": {"rects": []}}


def test_execute_populates_preview_ui_images(monkeypatch):
    monkeypatch.setattr(tile_calc, "assemble_tiles", lambda tiles, layout: "ASSEMBLED")

    class _FakePreviewSaver:
        def save_images(self, image, prefix, prompt, extra_pnginfo):
            assert image == "ASSEMBLED"
            return {"ui": {"images": [{"filename": "fake.png"}]}}

    monkeypatch.setattr(node_tile_assembly, "_preview_saver", _FakePreviewSaver())
    result = FiLTileAssembly.execute(tiles="TILES", layout={"rects": []})
    assert result.ui["images"] == [{"filename": "fake.png"}]


def test_execute_survives_preview_saver_failure(monkeypatch):
    monkeypatch.setattr(tile_calc, "assemble_tiles", lambda tiles, layout: "ASSEMBLED")

    class _BoomPreviewSaver:
        def save_images(self, *a, **kw):
            raise RuntimeError("disk full")

    monkeypatch.setattr(node_tile_assembly, "_preview_saver", _BoomPreviewSaver())
    result = FiLTileAssembly.execute(tiles="TILES", layout={"rects": []})
    assert result[0] == "ASSEMBLED"
    assert result.ui["images"] == []


def test_assemble_tiles_reconstructs_uniform_color_exactly():
    import torch

    """A flat-color image survives split -> assemble byte-for-byte: every
    overlap pixel is a weighted average of the SAME value from every
    contributing tile, so the feathering math can't shift it."""
    src = image(320, 192, value=0.5)
    result = FiLUpscaleTileCalc.execute(src, upscale_factor=1.0, tile_size=128, tile_overlap=32)
    tiles, layout = result[1], result[20]

    assembled = tile_calc.assemble_tiles(tiles, layout)
    assert assembled.shape == (1, layout["canvas_h"], layout["canvas_w"], 3)
    assert torch.allclose(assembled, torch.full_like(assembled, 0.5))


def test_assemble_tiles_raises_on_batch_count_mismatch():
    src = image(320, 192)
    result = FiLUpscaleTileCalc.execute(src, upscale_factor=1.0, tile_size=128, tile_overlap=32)
    tiles, layout = result[1], result[20]

    with pytest.raises(ValueError):
        tile_calc.assemble_tiles(tiles[:-1], layout)


def test_assemble_tiles_matches_distinct_tiles_in_non_overlapping_interior():
    """Give each tile a distinct color; deep-interior pixels (far from any
    overlap zone) must come back exactly as that tile's own color — proves
    positions/order line up correctly, not just that flat colors survive.

    512x512 @ tile=128/overlap=32 divides exactly (5 cols/rows, no remainder),
    so compute_layout's overlap-redistribution lands on the nominal 32px
    overlap instead of stretching it toward half a tile — keeping each tile's
    64px-from-edge center safely outside every overlap band."""
    import torch

    src = image(512, 512, value=0.0)
    result = FiLUpscaleTileCalc.execute(src, upscale_factor=1.0, tile_size=128, tile_overlap=32)
    tiles, layout = result[1], result[20]
    rects = layout["rects"]

    colored = tiles.clone()
    for i in range(colored.shape[0]):
        colored[i, :, :, :] = (i + 1) / 10.0

    assembled = tile_calc.assemble_tiles(colored, layout)
    for i, (sx, sy, ex, ey) in enumerate(rects):
        cx, cy = (sx + ex) // 2, (sy + ey) // 2
        assert torch.allclose(assembled[0, cy, cx, :], torch.full((3,), (i + 1) / 10.0))
