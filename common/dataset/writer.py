"""On-disk layout for a LoRA dataset: images, caption sidecars, TOML, manifest.

Two layouts, chosen per run:

* ``kohya`` — ``<root>/<name>/img/<repeats>_<trigger> <class>/`` plus a
  ``dataset.toml`` that sd-scripts can be pointed at directly. kohya reads the
  repeat count and class tokens out of that folder name, and prefers the
  ``.txt`` sidecars over it when they exist.
* ``flat``  — ``<root>/<name>/``, image + sidecar side by side. What
  OneTrainer / ai-toolkit / Civitai uploads expect.

A ``manifest.json`` is written for both, and is the only record of what got
cropped, bucketed or upscaled.
"""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable

from PIL import Image

LAYOUTS: tuple[str, ...] = ("kohya", "flat")
WRITE_MODES: tuple[str, ...] = ("append", "overwrite")
CAPTION_EXTENSIONS: tuple[str, ...] = (".txt", ".caption")
IMAGE_FORMATS: tuple[str, ...] = ("png", "jpg")

_IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp"}
# Filenames `write_dataset` produces — the `%05d` stem and nothing else.
_OWNED_STEM = re.compile(r"\d+")
# Dataset/folder names land in a filesystem path, so they are restricted to a
# conservative allowlist rather than merely having ".." stripped.
_NAME_ALLOWED = re.compile(r"[^A-Za-z0-9._-]+")
# Trigger/class tokens additionally allow spaces — kohya's own folder
# convention is `10_ohwx woman`.
_TOKEN_ALLOWED = re.compile(r"[^A-Za-z0-9._\- ]+")


def sanitize_name(name: str, fallback: str = "dataset") -> str:
    """Filesystem-safe single path segment. Never empty, never traversing."""
    cleaned = _NAME_ALLOWED.sub("_", str(name or "").strip())
    cleaned = cleaned.strip("._ ")
    return cleaned or fallback


def sanitize_token(token: str) -> str:
    """Trigger word / class token as it may appear in a kohya folder name."""
    cleaned = _TOKEN_ALLOWED.sub("", str(token or "")).strip()
    return re.sub(r"\s{2,}", " ", cleaned)


def default_output_root() -> Path:
    """``ComfyUI/output/datasets``, or a CWD-relative fallback outside ComfyUI."""
    try:
        import folder_paths

        return Path(folder_paths.get_output_directory()) / "datasets"
    except Exception:
        return Path.cwd() / "output" / "datasets"


def concept_folder_name(repeats: int, trigger_word: str, class_token: str) -> str:
    """kohya's ``<repeats>_<trigger> <class>`` concept folder name."""
    tokens = " ".join(t for t in (sanitize_token(trigger_word), sanitize_token(class_token)) if t)
    return f"{max(1, int(repeats))}_{tokens or 'concept'}"


def resolve_dirs(
    dataset_name: str,
    layout: str = "kohya",
    repeats: int = 10,
    trigger_word: str = "",
    class_token: str = "",
    root: Path | str | None = None,
) -> tuple[Path, Path]:
    """``(dataset_dir, image_dir)`` for the requested layout.

    Nothing is created here — `dry_run` needs the paths without touching disk.
    """
    base = Path(root) if root is not None else default_output_root()
    dataset_dir = base / sanitize_name(dataset_name)
    if layout == "flat":
        return dataset_dir, dataset_dir
    return dataset_dir, dataset_dir / "img" / concept_folder_name(repeats, trigger_word, class_token)


@dataclass
class DatasetItem:
    """One prepared frame on its way to disk."""

    image: Image.Image
    caption: str
    bucket: tuple[int, int]
    meta: dict[str, Any] = field(default_factory=dict)


def existing_dataset_files(image_dir: Path, caption_extension: str = ".txt") -> list[Path]:
    """Image + caption sidecar files this node itself wrote in `image_dir`.

    Ownership needs the ``NNNNN`` stem, not just a matching suffix. The `flat`
    layout puts captions in the same folder the user picked, so "every .txt
    here is mine" would have deleted a `readme.txt` sitting next to the
    dataset — which is exactly what `clear_dataset_files` promises not to do.
    """
    if not image_dir.is_dir():
        return []
    owned = _IMAGE_SUFFIXES | {caption_extension, *CAPTION_EXTENSIONS}
    return sorted(
        p for p in image_dir.iterdir()
        if p.is_file() and p.suffix.lower() in owned and _OWNED_STEM.fullmatch(p.stem)
    )


def clear_dataset_files(image_dir: Path, caption_extension: str = ".txt") -> list[str]:
    """Delete the image/caption pairs in `image_dir` — and nothing else.

    `overwrite` mode deliberately does not `rmtree` the folder: users point
    this node at directories that also hold their own notes, backups or a
    previous `manifest.json`, and a stray sibling file is not ours to remove.
    """
    removed: list[str] = []
    for path in existing_dataset_files(image_dir, caption_extension):
        path.unlink()
        removed.append(path.name)
    return removed


def next_index(image_dir: Path) -> int:
    """First free numeric filename index in `image_dir` (1-based).

    Deliberately looser than `existing_dataset_files`: a leading-digits match
    also counts `00042_backup.png`, so appending starts past anything that
    could collide. The two rules err in opposite directions on purpose —
    ownership stays narrow so deletion can't overreach, numbering stays wide
    so writing can't clobber.
    """
    highest = 0
    if image_dir.is_dir():
        for path in image_dir.iterdir():
            if path.is_file() and path.suffix.lower() in _IMAGE_SUFFIXES:
                match = re.match(r"^(\d+)", path.stem)
                if match:
                    highest = max(highest, int(match.group(1)))
    return highest + 1


def write_dataset(
    items: Iterable[DatasetItem],
    image_dir: Path,
    *,
    caption_extension: str = ".txt",
    image_format: str = "png",
    jpg_quality: int = 95,
    start_index: int = 1,
    dry_run: bool = False,
) -> list[dict[str, Any]]:
    """Write every item as ``NNNNN.<ext>`` plus its caption sidecar.

    Returns one record per pair, for the manifest. With `dry_run` the same
    records are produced (minus the file hash) and nothing touches disk, so the
    node's preview report describes exactly what a real run would write.

    An empty caption gets no sidecar at all. kohya only falls back to the
    concept folder name (`10_ohwx woman`) when the `.txt` is *missing* — an
    empty one is read as an empty caption, so writing it would silently turn
    a trigger-word-only dataset into an uncaptioned one.
    """
    suffix = ".jpg" if image_format == "jpg" else ".png"
    if caption_extension not in CAPTION_EXTENSIONS:
        caption_extension = ".txt"
    if not dry_run:
        image_dir.mkdir(parents=True, exist_ok=True)

    records: list[dict[str, Any]] = []
    for offset, item in enumerate(items):
        stem = f"{start_index + offset:05d}"
        image_path = image_dir / f"{stem}{suffix}"
        caption_path = image_dir / f"{stem}{caption_extension}"

        has_caption = bool(item.caption.strip())
        sha1 = ""
        if not dry_run:
            if suffix == ".jpg":
                item.image.convert("RGB").save(image_path, format="JPEG", quality=int(jpg_quality), subsampling=0)
            else:
                item.image.save(image_path, format="PNG")
            if has_caption:
                caption_path.write_text(item.caption, encoding="utf-8")
            elif caption_path.exists():
                # An `overwrite` run that re-numbers onto an older pair would
                # otherwise leave that pair's caption attached to a new image.
                caption_path.unlink()
            sha1 = hashlib.sha1(image_path.read_bytes()).hexdigest()

        records.append({
            "file": image_path.name,
            "caption_file": caption_path.name if has_caption else "",
            "caption": item.caption,
            "bucket": [int(item.bucket[0]), int(item.bucket[1])],
            "sha1": sha1,
            **item.meta,
        })
    return records


def _toml_escape(value: str) -> str:
    return str(value).replace("\\", "\\\\").replace('"', '\\"')


def build_dataset_toml(
    image_dir: Path,
    *,
    resolution: int,
    repeats: int,
    caption_extension: str = ".txt",
    batch_size: int = 1,
    min_bucket_reso: int = 256,
    max_bucket_reso: int = 2048,
    class_tokens: str = "",
) -> str:
    """sd-scripts dataset config — ``accelerate launch ... --dataset_config``."""
    lines = [
        "# Generated by FiL Design ImageMind — 📚 LoRA Dataset Forge",
        "[general]",
        f'caption_extension = "{_toml_escape(caption_extension)}"',
        "shuffle_caption = false",
        "keep_tokens = 1",
        "",
        "[[datasets]]",
        f"resolution = {int(resolution)}",
        f"batch_size = {int(batch_size)}",
        "enable_bucket = true",
        "bucket_no_upscale = false",
        f"min_bucket_reso = {int(min_bucket_reso)}",
        f"max_bucket_reso = {int(max_bucket_reso)}",
        "",
        "  [[datasets.subsets]]",
        f'  image_dir = "{_toml_escape(image_dir.as_posix())}"',
        f"  num_repeats = {max(1, int(repeats))}",
    ]
    if class_tokens:
        lines.append(f'  class_tokens = "{_toml_escape(class_tokens)}"')
    return "\n".join(lines) + "\n"


def load_previous_records(dataset_dir: Path, image_dir: Path, new_files: set[str]) -> list[dict[str, Any]]:
    """Records from an earlier run that are still on disk.

    `append` writes the manifest afresh every run, so without this the manifest
    would describe only the last batch while the folder holds everything —
    a dataset of 40 images reporting `image_count: 3`. Entries whose image is
    gone (or that this run just replaced) are dropped.
    """
    manifest_path = dataset_dir / "manifest.json"
    if not manifest_path.is_file():
        return []
    try:
        previous = json.loads(manifest_path.read_text(encoding="utf-8")).get("items", [])
    except (OSError, ValueError, AttributeError):
        return []
    return [
        item
        for item in previous
        if isinstance(item, dict)
        and item.get("file") not in new_files
        and (image_dir / str(item.get("file", ""))).is_file()
    ]


def build_manifest(
    records: list[dict[str, Any]],
    *,
    dataset_dir: Path,
    image_dir: Path,
    layout: str,
    base_resolution: int,
    buckets: list[tuple[int, int]],
    repeats: int,
    trigger_word: str,
    class_token: str,
    caption_source: str,
    provider: str = "",
    model: str = "",
) -> dict[str, Any]:
    histogram: dict[str, int] = {}
    for record in records:
        key = f"{record['bucket'][0]}x{record['bucket'][1]}"
        histogram[key] = histogram.get(key, 0) + 1

    return {
        "generator": "FiL Design ImageMind / FiLDatasetForge",
        "created": datetime.now(timezone.utc).isoformat(),
        "dataset_dir": dataset_dir.as_posix(),
        "image_dir": image_dir.as_posix(),
        "layout": layout,
        "base_resolution": int(base_resolution),
        "available_buckets": [[int(w), int(h)] for w, h in buckets],
        "bucket_histogram": histogram,
        "repeats": max(1, int(repeats)),
        "trigger_word": trigger_word,
        "class_token": class_token,
        "caption_source": caption_source,
        "provider": provider,
        "model": model,
        "image_count": len(records),
        "upscaled_count": sum(1 for r in records if r.get("upscaled")),
        "items": records,
    }


def write_sidecars(
    dataset_dir: Path,
    manifest: dict[str, Any],
    toml_text: str = "",
) -> dict[str, str]:
    """Write ``manifest.json`` (always) and ``dataset.toml`` (kohya only)."""
    dataset_dir.mkdir(parents=True, exist_ok=True)
    written: dict[str, str] = {}

    manifest_path = dataset_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    written["manifest"] = manifest_path.as_posix()

    if toml_text:
        toml_path = dataset_dir / "dataset.toml"
        toml_path.write_text(toml_text, encoding="utf-8")
        written["toml"] = toml_path.as_posix()
    return written
