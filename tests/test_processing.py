"""Tests for ImageProcessor, in particular the thread-safe `with_max_side` override.

The nodes used to assign `processor.max_side` and then process; ComfyUI runs
nodes on a thread pool, so two concurrent executions of the same node could
overwrite each other's size. `with_max_side` makes the set-and-use atomic and
restores the previous value on exit.
"""

from PIL import Image

from FiL_Design_ImageMind.common.processing import ImageProcessor


def test_with_max_side_applies_and_restores():
    processor = ImageProcessor(max_side=1024)
    assert processor.max_side == 1024
    with processor.with_max_side(512) as proc:
        assert proc is processor
        assert proc.max_side == 512
    assert processor.max_side == 1024


def test_with_max_side_restores_even_on_error():
    processor = ImageProcessor(max_side=1024)
    try:
        with processor.with_max_side(256):
            raise RuntimeError("boom")
    except RuntimeError:
        pass
    assert processor.max_side == 1024


def test_with_max_side_ignores_non_positive_values():
    processor = ImageProcessor(max_side=1024)
    with processor.with_max_side(0) as proc:
        assert proc.max_side == 1024  # unchanged
    with processor.with_max_side(None) as proc:
        assert proc.max_side == 1024
    assert processor.max_side == 1024


def test_with_max_side_controls_resize():
    processor = ImageProcessor(max_side=1024)
    big = Image.new("RGB", (2000, 1000))

    assert max(processor.resize(big).size) == 1024

    with processor.with_max_side(500):
        assert max(processor.resize(big).size) == 500

    # The original limit is back once the block exits.
    assert max(processor.resize(big).size) == 1024
