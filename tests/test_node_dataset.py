"""End-to-end behaviour of 📚 LoRA Dataset Forge at the node level."""

from __future__ import annotations

import json

import pytest
import torch

from FiL_Design_ImageMind.common.dataset import writer
from FiL_Design_ImageMind.nodes import node_dataset
from FiL_Design_ImageMind.nodes.node_dataset import FiLDatasetForge

CONFIG = {"provider": "ollama", "model": "qwen3-vl", "max_image_side": 512, "rate_limit_ms": 0}


class _StubClient:
    """Stands in for the module-level `_model_client` singleton.

    Patching the module name (not the instance's `.generate`) for the same
    reason `conftest.stub_scanner_generate` does — see its docstring.
    """

    def __init__(self, answers=None):
        self.calls = []
        self._answers = list(answers or [])

    def generate(self, **kwargs):
        self.calls.append(kwargs)
        return self._answers.pop(0) if self._answers else "a subject in a room"


@pytest.fixture
def stub_client(monkeypatch):
    def install(answers=None):
        client = _StubClient(answers)
        monkeypatch.setattr(node_dataset, "_model_client", client)
        return client

    return install


@pytest.fixture
def local_root(monkeypatch, tmp_path):
    """Redirect the dataset root away from ComfyUI/output for the whole test."""
    monkeypatch.setattr(writer, "default_output_root", lambda: tmp_path)
    return tmp_path


def _stack(sizes):
    """IMAGE batch is (B, H, W, C) — one frame per (width, height) pair.

    All sizes must match: ComfyUI cannot batch differently-shaped frames, which
    is exactly why mixed aspects reach this node one execution at a time.
    """
    return torch.cat(
        [torch.rand((1, height, width, 3), dtype=torch.float32) for width, height in sizes],
        dim=0,
    )


def test_writes_bucketed_pairs_toml_and_manifest(local_root, stub_client):
    stub_client(["red car at night", "blue car in fog", "green car in snow"])
    image = _stack([(1024, 1024)] * 3)

    preview, report, dataset_path, manifest = FiLDatasetForge.execute(
        image=image, config=CONFIG, dataset_name="test_ds",
        trigger_word="ohwx", class_token="car", base_resolution="512", repeats=10,
    )

    image_dir = local_root / "test_ds" / "img" / "10_ohwx car"
    assert sorted(p.name for p in image_dir.glob("*.png")) == ["00001.png", "00002.png", "00003.png"]
    assert (image_dir / "00001.txt").read_text(encoding="utf-8") == "ohwx car, red car at night"
    assert (local_root / "test_ds" / "dataset.toml").is_file()

    written = json.loads((local_root / "test_ds" / "manifest.json").read_text(encoding="utf-8"))
    assert written["image_count"] == 3
    assert written["bucket_histogram"] == {"512x512": 3}
    assert manifest["caption_source"] == "llm:ollama"
    assert dataset_path.endswith("test_ds")
    assert preview.shape == (3, 512, 512, 3)
    assert "test_ds" in report


def test_mixed_aspects_land_in_different_buckets(local_root, stub_client):
    stub_client()
    written_sizes = []
    for size in [(1024, 1024), (1920, 1080), (1080, 1920)]:
        _, _, _, manifest = FiLDatasetForge.execute(
            image=_stack([size]), config=CONFIG, dataset_name="mixed",
            base_resolution="512", trigger_word="ohwx",
        )
        written_sizes.append(tuple(manifest["items"][-1]["bucket"]))

    assert written_sizes[0][0] == written_sizes[0][1]
    assert written_sizes[1][0] > written_sizes[1][1]
    assert written_sizes[2] == (written_sizes[1][1], written_sizes[1][0])


def test_dry_run_reports_the_plan_without_writing_anything(local_root, stub_client):
    stub_client()
    _, report, _, manifest = FiLDatasetForge.execute(
        image=_stack([(768, 768)] * 2), config=CONFIG, dataset_name="planned",
        base_resolution="512", dry_run=True,
    )

    assert not (local_root / "planned").exists()
    assert manifest["dry_run"] is True
    assert manifest["image_count"] == 2
    assert "DRY RUN" in report


def test_manual_captions_skip_the_llm_entirely(local_root, stub_client):
    client = stub_client()
    _, _, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)] * 2), config=CONFIG, dataset_name="manual_ds",
        captions="first shot\n\n---\n\nsecond shot", trigger_word="ohwx",
        base_resolution="512", layout="flat",
    )

    assert client.calls == []
    assert manifest["caption_source"] == "manual"
    assert (local_root / "manual_ds" / "00002.txt").read_text(encoding="utf-8") == "ohwx, second shot"


def test_caption_mode_none_needs_no_provider_at_all(local_root):
    _, _, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), dataset_name="trigger_only", caption_mode="none",
        trigger_word="ohwx", class_token="woman", base_resolution="512", layout="flat",
    )

    assert manifest["caption_source"] == "trigger_only"
    assert (local_root / "trigger_only" / "00001.txt").read_text(encoding="utf-8") == "ohwx woman"


def test_append_continues_numbering_across_runs(local_root, stub_client):
    stub_client()
    for _ in range(2):
        FiLDatasetForge.execute(
            image=_stack([(512, 512)]), config=CONFIG, dataset_name="grow",
            base_resolution="512", layout="flat", write_mode="append",
        )
    assert sorted(p.name for p in (local_root / "grow").glob("*.png")) == ["00001.png", "00002.png"]


def test_append_manifest_describes_the_whole_dataset_not_just_the_last_batch(local_root, stub_client):
    stub_client()
    kwargs = dict(config=CONFIG, dataset_name="cumulative", base_resolution="512", layout="flat")
    FiLDatasetForge.execute(image=_stack([(512, 512)] * 2), **kwargs)

    _, report, _, manifest = FiLDatasetForge.execute(image=_stack([(512, 512)]), **kwargs)

    assert manifest["image_count"] == 3
    assert [item["file"] for item in manifest["items"]] == ["00001.png", "00002.png", "00003.png"]
    assert "всего в датасете: 3" in report

    written = json.loads((local_root / "cumulative" / "manifest.json").read_text(encoding="utf-8"))
    assert written["image_count"] == 3


def test_overwrite_manifest_forgets_the_deleted_run(local_root, stub_client):
    stub_client()
    kwargs = dict(config=CONFIG, dataset_name="fresh", base_resolution="512", layout="flat")
    FiLDatasetForge.execute(image=_stack([(512, 512)] * 3), **kwargs)

    _, _, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), write_mode="overwrite", **kwargs
    )
    assert manifest["image_count"] == 1


def test_overwrite_restarts_numbering_and_clears_old_pairs(local_root, stub_client):
    stub_client()
    kwargs = dict(config=CONFIG, dataset_name="reset", base_resolution="512", layout="flat")
    FiLDatasetForge.execute(image=_stack([(512, 512)] * 3), **kwargs)

    _, report, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), write_mode="overwrite", **kwargs
    )

    assert sorted(p.name for p in (local_root / "reset").glob("*.png")) == ["00001.png"]
    assert len(manifest["removed_files"]) == 6
    assert "Удалено" in report


def test_upscaled_frames_are_flagged_not_silently_accepted(local_root, stub_client):
    stub_client()
    _, report, _, manifest = FiLDatasetForge.execute(
        image=_stack([(256, 256)]), config=CONFIG, dataset_name="tiny",
        base_resolution="1024", layout="flat",
    )

    assert manifest["upscaled_count"] == 1
    assert "⚠️" in report


def test_cancel_stops_the_batch_instead_of_running_it_to_the_end(local_root, stub_client, monkeypatch):
    """ComfyUI only checks for interrupts between nodes.

    Without an in-loop check, hitting Cancel on a 40-image run keeps paying
    for provider calls until the batch finishes.
    """
    client = stub_client()
    calls = {"n": 0}

    def fake_interrupt():
        calls["n"] += 1
        if calls["n"] > 2:
            raise KeyboardInterrupt("cancelled")

    monkeypatch.setattr(node_dataset, "_raise_if_interrupted", fake_interrupt)

    with pytest.raises(KeyboardInterrupt):
        FiLDatasetForge.execute(
            image=_stack([(512, 512)] * 6), config=CONFIG, dataset_name="cancelled",
            base_resolution="512", layout="flat",
        )

    # Stopped early, and nothing half-written was left behind.
    assert len(client.calls) < 6
    assert not (local_root / "cancelled").exists()


def test_preview_is_capped_well_below_the_training_resolution(local_root, stub_client):
    """The preview exists to eyeball crops, not to hand ComfyUI a float32 flood.

    Uncapped, a 40-image 1024² set would be ~500 MB on this output alone.
    """
    stub_client()
    preview, _, _, manifest = FiLDatasetForge.execute(
        image=_stack([(1024, 1024)] * 2), config=CONFIG, dataset_name="big",
        base_resolution="1536", layout="flat",
    )

    assert preview.shape == (2, 512, 512, 3)
    # The files on disk keep their real, uncapped bucket size.
    assert manifest["items"][0]["bucket"] == [1536, 1536]


def test_missing_image_is_a_clean_error(local_root):
    preview, report, dataset_path, manifest = FiLDatasetForge.execute(image=None)

    assert manifest["error_code"] == "NO_IMAGE"
    assert report.startswith("❌")
    assert dataset_path == ""
    assert preview.shape == (1, 64, 64, 3)


def test_captioning_without_a_provider_explains_the_three_ways_out(local_root):
    _, report, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), dataset_name="no_cfg", base_resolution="512",
    )

    assert manifest["error_code"] == "NO_CONFIG"
    assert "captions" in report and "none" in report
    assert not (local_root / "no_cfg").exists()


def test_non_vision_model_is_rejected_before_any_file_is_written(local_root):
    _, report, _, manifest = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), config={"provider": "ollama", "model": "plain-text-model"},
        dataset_name="no_vision", base_resolution="512",
    )

    assert manifest["error_code"] == "VISION_NOT_AVAILABLE"
    assert "не поддерживает" in report
    assert not (local_root / "no_vision").exists()


def test_placeholder_model_is_rejected_by_validate_inputs():
    assert FiLDatasetForge.validate_inputs(config={"model": "(no models)"}) is not True
    assert FiLDatasetForge.validate_inputs(config={"model": "qwen3-vl"}) is True
    assert FiLDatasetForge.validate_inputs(config=None) is True


def test_fingerprint_changes_with_pixels_and_with_widgets():
    image = _stack([(64, 64)])
    base = FiLDatasetForge.fingerprint_inputs(image=image, config=CONFIG, dataset_name="a")

    assert base == FiLDatasetForge.fingerprint_inputs(image=image.clone(), config=CONFIG, dataset_name="a")
    assert base != FiLDatasetForge.fingerprint_inputs(image=image, config=CONFIG, dataset_name="b")
    assert base != FiLDatasetForge.fingerprint_inputs(image=torch.rand((1, 64, 64, 3)), config=CONFIG, dataset_name="a")


def test_hostile_dataset_name_cannot_escape_the_datasets_root(local_root, stub_client):
    stub_client()
    _, _, dataset_path, _ = FiLDatasetForge.execute(
        image=_stack([(512, 512)]), config=CONFIG, dataset_name="../../pwned",
        base_resolution="512", layout="flat",
    )

    assert dataset_path == (local_root / "pwned").as_posix()
    assert (local_root / "pwned").is_dir()
