from __future__ import annotations

from pathlib import Path

import pytest

from FiL_Design_ImageMind.nodes.node_compare import FiLBeforeAfterCompare
from FiL_Design_ImageMind.server_routes import save_compare_image


def descriptor(filename="preview.png", subfolder=""):
    return {"filename": filename, "subfolder": subfolder, "type": "temp"}


def test_compare_is_output_node_so_terminal_viewer_executes():
    """The Compare node emits a `ui` payload for its in-node before/after
    viewer. It must be an output node, otherwise ComfyUI prunes a terminal
    Compare (image outputs unconnected), execute() never runs, and the viewer
    stays blank. Regression guard for that pruning bug."""
    assert FiLBeforeAfterCompare.GET_SCHEMA().is_output_node is True


def test_compare_save_copies_temp_image_and_uses_unique_name(tmp_path):
    temp = tmp_path / "temp"
    output = tmp_path / "output"
    temp.mkdir()
    (temp / "preview.png").write_bytes(b"image")
    first = save_compare_image(descriptor(), temp_dir=temp, output_dir=output)
    second = save_compare_image(descriptor(), temp_dir=temp, output_dir=output)
    assert first == {"filename": "preview.png", "subfolder": "FiL_Design_ImageMind/compare", "type": "output"}
    assert second["filename"] == "preview_001.png"
    assert (output / "FiL_Design_ImageMind" / "compare" / first["filename"]).read_bytes() == b"image"


@pytest.mark.parametrize("bad", [
    {"filename": "../secret.png", "subfolder": "", "type": "temp"},
    {"filename": "secret.png", "subfolder": "../", "type": "temp"},
    {"filename": "secret.txt", "subfolder": "", "type": "temp"},
    {"filename": "secret.png", "subfolder": "", "type": "output"},
])
def test_compare_save_rejects_unsafe_descriptors(tmp_path, bad):
    with pytest.raises(ValueError):
        save_compare_image(bad, temp_dir=tmp_path / "temp", output_dir=tmp_path / "output")


def test_compare_save_rejects_missing_file(tmp_path):
    with pytest.raises(FileNotFoundError):
        save_compare_image(descriptor(), temp_dir=tmp_path / "temp", output_dir=tmp_path / "output")
