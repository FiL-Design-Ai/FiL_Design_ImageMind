from __future__ import annotations

import pytest

torch = pytest.importorskip("torch")

from FiL_Design_ImageMind.nodes.node_compare import FiLBeforeAfterCompare


class _MockSaver:
    def save_images(self, images, prefix, prompt, extra):
        return {"ui": {"images": [{"filename": prefix}]}}


def _patch_saver(monkeypatch):
    monkeypatch.setattr("FiL_Design_ImageMind.nodes.node_compare._preview_saver", _MockSaver())


def test_preview_only_resizes_preview_but_preserves_batch_outputs(monkeypatch):
    _patch_saver(monkeypatch)
    before = torch.zeros((2, 100, 200, 3))
    after = torch.ones((2, 160, 80, 3))
    result = FiLBeforeAfterCompare.execute(before, after, resize_mode="Preview only", max_resolution=64)
    assert result[0] is before
    assert result[1] is after
    assert result.ui["a_images"][0]["filename"] == "fil.compare.before"
    assert result.ui["b_images"][0]["filename"] == "fil.compare.after"


def test_preview_plus_output_resizes_full_batch(monkeypatch):
    _patch_saver(monkeypatch)
    before = torch.zeros((2, 100, 200, 3))
    after = torch.ones((2, 200, 100, 3))
    result = FiLBeforeAfterCompare.execute(before, after, resize_mode="Preview + output", max_resolution=50)
    assert tuple(result[0].shape) == (2, 25, 50, 3)
    assert tuple(result[1].shape) == (2, 50, 25, 3)


def test_off_and_swap_preserve_expected_order(monkeypatch):
    _patch_saver(monkeypatch)
    before = torch.zeros((1, 8, 8, 3))
    after = torch.ones((1, 8, 8, 3))
    result = FiLBeforeAfterCompare.execute(before, after, swap=True, resize_mode="Off")
    assert torch.equal(result[0], after)
    assert torch.equal(result[1], before)
    assert set(result.ui) == {"a_images", "b_images"}


def test_opacity_zero_one_edges(monkeypatch):
    _patch_saver(monkeypatch)
    before = torch.zeros((1, 8, 8, 3))
    after = torch.ones((1, 8, 8, 3))
    r_off = FiLBeforeAfterCompare.execute(before, after, resize_mode="Off")
    assert set(r_off.ui) == {"a_images", "b_images"}
    r_preview = FiLBeforeAfterCompare.execute(before, after, resize_mode="Preview only", max_resolution=64)
    assert set(r_preview.ui) == {"a_images", "b_images"}


def test_minimal_1x1_image_compare(monkeypatch):
    _patch_saver(monkeypatch)
    before = torch.zeros((1, 1, 1, 3))
    after = torch.ones((1, 1, 1, 3))
    result = FiLBeforeAfterCompare.execute(before, after, resize_mode="Preview + output", max_resolution=16)
    assert result[0].dtype == before.dtype
    assert result[1].dtype == after.dtype
