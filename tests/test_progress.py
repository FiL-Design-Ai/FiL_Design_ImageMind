"""FilProgress — V3 `set_progress` backend, legacy fallback, node wiring."""

from __future__ import annotations

import pytest
from PIL import Image

from FiL_Design_ImageMind.common import progress as progress_mod
from FiL_Design_ImageMind.common.progress import FilProgress


class _RecordingExecution:
    def __init__(self) -> None:
        self.calls: list[dict] = []

    def set_progress(self, **kwargs) -> None:
        self.calls.append(kwargs)


class _FakeApi:
    def __init__(self) -> None:
        self.execution = _RecordingExecution()


@pytest.fixture
def v3_api(monkeypatch):
    fake = _FakeApi()
    monkeypatch.setattr(progress_mod, "_PROGRESS_API", fake)
    return fake


@pytest.fixture
def legacy_bar(monkeypatch):
    """Force the fallback path and record what the legacy bar receives."""
    monkeypatch.setattr(progress_mod, "_PROGRESS_API", None)
    created: list = []

    class _RecordingBar:
        def __init__(self, total, node_id=None):
            self.total = total
            self.node_id = node_id
            self.updates: list[tuple] = []
            created.append(self)

        def update_absolute(self, value, total=None, preview=None):
            self.updates.append((value, total, preview))

    import comfy.utils

    monkeypatch.setattr(comfy.utils, "ProgressBar", _RecordingBar)
    return created


def test_v3_backend_receives_value_max_node_and_preview(v3_api):
    frame = Image.new("RGB", (8, 8))
    progress = FilProgress(3, "node-7")
    progress.update(1, preview=frame)

    assert v3_api.execution.calls == [
        {"value": 1.0, "max_value": 3.0, "node_id": "node-7", "preview_image": frame},
    ]


def test_v3_backend_tolerates_missing_node_id(v3_api):
    # The API can still resolve the id from the executing context at runtime.
    FilProgress(2, None).update(0)
    assert v3_api.execution.calls[0]["node_id"] is None


def test_total_is_clamped_above_zero(v3_api):
    progress = FilProgress(0, "node-1")
    assert progress.total == 1
    progress.update(0)
    assert v3_api.execution.calls[0]["max_value"] == 1.0


def test_legacy_fallback_gets_numbers_and_no_preview(legacy_bar):
    progress = FilProgress(4, "node-9")
    progress.update(2, preview=Image.new("RGB", (8, 8)))

    (bar,) = legacy_bar
    assert bar.node_id == "node-9"
    assert bar.updates == [(2, 4, None)]


@pytest.mark.skipif(progress_mod._PROGRESS_API is None, reason="host has no ComfyAPI sync execution")
def test_real_v3_api_smoke():
    # No handlers are registered outside a real prompt run, so this only
    # proves the sync bridge and the registry lookup do not raise.
    FilProgress(2, "test-node").update(1)


def test_caption_batch_reports_the_frame_being_captioned(monkeypatch):
    from FiL_Design_ImageMind.common.dataset import captioning
    from FiL_Design_ImageMind.nodes import node_dataset

    frames = [Image.new("RGB", (32, 32), color=(i * 40, 0, 0)) for i in range(3)]

    constructor_calls: list[tuple] = []
    updates: list[tuple] = []

    class _RecordingProgress:
        def __init__(self, total, node_id):
            constructor_calls.append((total, node_id))

        def update(self, value, preview=None):
            updates.append((value, preview))

    monkeypatch.setattr(node_dataset, "FilProgress", _RecordingProgress)
    monkeypatch.setattr(node_dataset, "_client", lambda: object())
    monkeypatch.setattr(captioning, "caption_image", lambda *a, **kw: "a caption")

    node_dataset.FiLDatasetForge._caption_all(
        frames, {"provider": "ollama", "model": "qwen2.5vl:7b", "max_image_side": 64},
        mode="natural", language="en", max_words=45, class_token="",
        dont_caption="", extra_instruction="", seed=7, unique_id="node-3",
    )

    assert constructor_calls == [(3, "node-3")]
    assert [value for value, _ in updates] == [0, 1, 2]
    assert [preview is frame for (_, preview), frame in zip(updates, frames)] == [True, True, True]
