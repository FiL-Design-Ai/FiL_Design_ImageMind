"""On-disk layout of a written LoRA dataset: naming, sidecars, TOML, safety."""

from __future__ import annotations

import json

import pytest
from PIL import Image

from FiL_Design_ImageMind.common.dataset import writer


def _items(count: int, size=(512, 512)):
    return [
        writer.DatasetItem(
            image=Image.new("RGB", size, "white"),
            caption=f"caption {index}",
            bucket=size,
            meta={"upscaled": index == 0},
        )
        for index in range(count)
    ]


@pytest.mark.parametrize(
    "raw, expected",
    [
        ("my lora", "my_lora"),
        ("../../etc/passwd", "etc_passwd"),
        ("..", "dataset"),
        ("", "dataset"),
        ("   ", "dataset"),
        ("C:\\Windows\\System32", "C_Windows_System32"),
        ("nice-name_v2.1", "nice-name_v2.1"),
    ],
)
def test_sanitize_name_never_escapes_its_folder(raw, expected):
    assert writer.sanitize_name(raw) == expected


def test_resolve_dirs_stays_under_the_root_even_for_hostile_names(tmp_path):
    dataset_dir, image_dir = writer.resolve_dirs("../../escape", root=tmp_path)
    assert tmp_path in dataset_dir.parents or dataset_dir.parent == tmp_path
    assert tmp_path in image_dir.parents


def test_kohya_layout_uses_the_repeats_trigger_class_folder(tmp_path):
    dataset_dir, image_dir = writer.resolve_dirs(
        "set", layout="kohya", repeats=10, trigger_word="ohwx", class_token="woman", root=tmp_path
    )
    assert dataset_dir == tmp_path / "set"
    assert image_dir == tmp_path / "set" / "img" / "10_ohwx woman"


def test_flat_layout_puts_files_next_to_the_dataset_root(tmp_path):
    dataset_dir, image_dir = writer.resolve_dirs("set", layout="flat", root=tmp_path)
    assert dataset_dir == image_dir == tmp_path / "set"


def test_concept_folder_falls_back_when_no_tokens_are_given():
    assert writer.concept_folder_name(5, "", "") == "5_concept"
    assert writer.concept_folder_name(0, "ohwx", "") == "1_ohwx"


def test_write_dataset_pairs_every_image_with_its_caption(tmp_path):
    records = writer.write_dataset(_items(3), tmp_path, caption_extension=".txt")

    assert [r["file"] for r in records] == ["00001.png", "00002.png", "00003.png"]
    for index, record in enumerate(records):
        image_path = tmp_path / record["file"]
        caption_path = tmp_path / record["caption_file"]
        assert image_path.is_file()
        assert caption_path.read_text(encoding="utf-8") == f"caption {index}"
        assert record["sha1"]


def test_empty_caption_gets_no_sidecar_at_all(tmp_path):
    """kohya only falls back to the concept folder when the .txt is missing.

    An empty file is read as an empty caption, so writing one would turn a
    trigger-word-only dataset into an uncaptioned one.
    """
    items = _items(2)
    items[1].caption = "   "

    records = writer.write_dataset(items, tmp_path)

    assert (tmp_path / "00001.txt").is_file()
    assert not (tmp_path / "00002.txt").exists()
    assert records[1]["caption_file"] == ""


def test_renumbering_over_an_older_pair_drops_its_stale_caption(tmp_path):
    writer.write_dataset(_items(1), tmp_path)
    assert (tmp_path / "00001.txt").read_text(encoding="utf-8") == "caption 0"

    replacement = _items(1)
    replacement[0].caption = ""
    writer.write_dataset(replacement, tmp_path, start_index=1)

    assert not (tmp_path / "00001.txt").exists()


def test_dry_run_produces_the_same_records_without_touching_disk(tmp_path):
    target = tmp_path / "not_created"
    records = writer.write_dataset(_items(2), target, dry_run=True)

    assert [r["file"] for r in records] == ["00001.png", "00002.png"]
    assert all(r["sha1"] == "" for r in records)
    assert not target.exists()


def test_append_continues_numbering_from_existing_files(tmp_path):
    writer.write_dataset(_items(2), tmp_path)
    assert writer.next_index(tmp_path) == 3

    records = writer.write_dataset(_items(1), tmp_path, start_index=writer.next_index(tmp_path))
    assert records[0]["file"] == "00003.png"
    assert len(list(tmp_path.glob("*.png"))) == 3


def test_overwrite_removes_dataset_pairs_but_leaves_foreign_files_alone(tmp_path):
    writer.write_dataset(_items(2), tmp_path)
    keeper = tmp_path / "training_notes.md"
    keeper.write_text("mine", encoding="utf-8")

    removed = writer.clear_dataset_files(tmp_path)

    assert sorted(removed) == ["00001.png", "00001.txt", "00002.png", "00002.txt"]
    assert keeper.read_text(encoding="utf-8") == "mine"
    assert writer.next_index(tmp_path) == 1


def test_overwrite_spares_same_suffix_files_this_node_never_wrote(tmp_path):
    """The `flat` layout shares the user's own folder — .txt alone isn't ours.

    Ownership needs the NNNNN stem too, otherwise a readme sitting next to the
    dataset is deleted by a mode that promises to only clear its own pairs.
    """
    writer.write_dataset(_items(1), tmp_path)
    readme = tmp_path / "readme.txt"
    readme.write_text("how this set was shot", encoding="utf-8")
    source = tmp_path / "original_scan.png"
    source.write_bytes((tmp_path / "00001.png").read_bytes())

    removed = writer.clear_dataset_files(tmp_path)

    assert sorted(removed) == ["00001.png", "00001.txt"]
    assert readme.is_file()
    assert source.is_file()


def test_next_index_stays_wide_so_appending_cannot_clobber(tmp_path):
    """Numbering skips past anything digit-prefixed, even files we don't own."""
    (tmp_path / "00042_backup.png").write_bytes(b"")
    assert writer.next_index(tmp_path) == 43
    # ...while that same file is not ours to delete.
    assert writer.existing_dataset_files(tmp_path) == []


def test_jpg_output_writes_jpeg_files(tmp_path):
    records = writer.write_dataset(_items(1), tmp_path, image_format="jpg", jpg_quality=90)
    assert records[0]["file"] == "00001.jpg"
    with Image.open(tmp_path / "00001.jpg") as opened:
        assert opened.format == "JPEG"


def test_dataset_toml_is_parseable_and_carries_the_training_settings(tmp_path):
    tomllib = pytest.importorskip("tomllib")
    image_dir = tmp_path / "set" / "img" / "10_ohwx woman"

    text = writer.build_dataset_toml(image_dir, resolution=1024, repeats=10, class_tokens="ohwx woman")
    config = tomllib.loads(text)

    assert config["general"]["caption_extension"] == ".txt"
    dataset = config["datasets"][0]
    assert dataset["resolution"] == 1024
    assert dataset["enable_bucket"] is True
    subset = dataset["subsets"][0]
    assert subset["num_repeats"] == 10
    assert subset["class_tokens"] == "ohwx woman"
    assert subset["image_dir"] == image_dir.as_posix()


def test_manifest_summarises_buckets_and_upscaled_frames(tmp_path):
    records = writer.write_dataset(_items(2), tmp_path)
    records[1]["bucket"] = [1216, 832]

    manifest = writer.build_manifest(
        records, dataset_dir=tmp_path, image_dir=tmp_path, layout="flat",
        base_resolution=1024, buckets=[(1024, 1024), (1216, 832)], repeats=10,
        trigger_word="ohwx", class_token="woman", caption_source="manual",
        provider="ollama", model="qwen3-vl",
    )

    assert manifest["image_count"] == 2
    assert manifest["upscaled_count"] == 1
    assert manifest["bucket_histogram"] == {"512x512": 1, "1216x832": 1}
    assert manifest["model"] == "qwen3-vl"


def test_load_previous_records_keeps_only_entries_still_on_disk(tmp_path):
    records = writer.write_dataset(_items(2), tmp_path)
    writer.write_sidecars(tmp_path, writer.build_manifest(
        records, dataset_dir=tmp_path, image_dir=tmp_path, layout="flat",
        base_resolution=512, buckets=[(512, 512)], repeats=10,
        trigger_word="", class_token="", caption_source="manual",
    ))
    (tmp_path / "00002.png").unlink()

    kept = writer.load_previous_records(tmp_path, tmp_path, new_files=set())
    assert [r["file"] for r in kept] == ["00001.png"]

    # A file this run is about to rewrite is not carried over twice.
    assert writer.load_previous_records(tmp_path, tmp_path, {"00001.png"}) == []


def test_load_previous_records_survives_a_missing_or_broken_manifest(tmp_path):
    assert writer.load_previous_records(tmp_path, tmp_path, set()) == []

    (tmp_path / "manifest.json").write_text("{not json", encoding="utf-8")
    assert writer.load_previous_records(tmp_path, tmp_path, set()) == []


def test_write_sidecars_writes_manifest_always_and_toml_only_when_given(tmp_path):
    written = writer.write_sidecars(tmp_path, {"image_count": 0}, toml_text="")
    assert "toml" not in written
    assert json.loads((tmp_path / "manifest.json").read_text(encoding="utf-8"))["image_count"] == 0

    written = writer.write_sidecars(tmp_path, {"image_count": 1}, toml_text="[general]\n")
    assert (tmp_path / "dataset.toml").read_text(encoding="utf-8") == "[general]\n"
    assert "toml" in written
