"""Aspect-ratio bucketing for LoRA datasets.

Mirrors the kohya_ss / sd-scripts convention: every bucket keeps roughly the
same pixel area (``base²``) with both sides divisible by ``step`` (64 by
default), so a mixed-aspect source folder trains at one effective resolution
without letterboxing.

Pure PIL + numpy — no torch, no ComfyUI imports — so the math is testable on
its own.
"""

from __future__ import annotations

import math
from typing import Any

import numpy as np
from PIL import Image

CROP_MODES: tuple[str, ...] = ("center", "entropy")

BASE_RESOLUTIONS: tuple[int, ...] = (512, 640, 768, 896, 1024, 1152, 1216, 1536)

# Sliding-window search for `entropy` crops runs on a thumbnail this wide/tall
# at most: the offset it picks is scaled back up, so full-resolution detail
# buys nothing but time on a 4K source.
_ENTROPY_PROBE_SIDE = 256


def generate_buckets(
    base: int,
    step: int = 64,
    min_side: int = 256,
    max_ratio: float = 2.0,
) -> list[tuple[int, int]]:
    """Bucket resolutions of ~``base²`` pixels, both sides divisible by ``step``.

    Returns a sorted, de-duplicated list of ``(width, height)``. Always contains
    the square bucket, even when `base` itself is not a multiple of `step`.
    """
    step = max(8, int(step))
    base = max(step, int(base))
    min_side = max(step, int(min_side))
    max_ratio = max(1.0, float(max_ratio))

    area = base * base
    square = max(step, (base // step) * step)
    buckets: set[tuple[int, int]] = {(square, square)}

    width = min_side - (min_side % step) or step
    limit = int(base * max_ratio)
    while width <= limit:
        height = (area // width // step) * step
        if height >= min_side:
            ratio = max(width / height, height / width)
            if ratio <= max_ratio:
                buckets.add((width, height))
                buckets.add((height, width))
        width += step

    return sorted(buckets)


def pick_bucket(width: int, height: int, buckets: list[tuple[int, int]]) -> tuple[int, int]:
    """Bucket whose aspect ratio is closest to the source's, in log space.

    Log space so 2:1 and 1:2 are equally far from square — a linear ``w/h``
    comparison biases every landscape source toward the widest bucket.
    """
    if not buckets:
        raise ValueError("buckets must not be empty")
    if width <= 0 or height <= 0:
        return min(buckets, key=lambda b: abs(math.log(b[0] / b[1])))
    source = math.log(width / height)
    return min(buckets, key=lambda b: (abs(math.log(b[0] / b[1]) - source), -b[0] * b[1], b))


def _gradient_energy(image: Image.Image) -> np.ndarray:
    """Per-pixel edge energy of a grayscale probe, as float32."""
    gray = np.asarray(image.convert("L"), dtype=np.float32)
    dx = np.zeros_like(gray)
    dy = np.zeros_like(gray)
    dx[:, 1:] = np.abs(np.diff(gray, axis=1))
    dy[1:, :] = np.abs(np.diff(gray, axis=0))
    return dx + dy


def _entropy_offset(image: Image.Image, window: int, axis: int) -> int:
    """Offset of the `window`-wide slice with the most edge energy along `axis`.

    ``axis=0`` scans horizontally (picks `left`), ``axis=1`` scans vertically
    (picks `top`).
    """
    full = image.size[axis]
    slack = full - window
    if slack <= 0:
        return 0

    probe_scale = min(1.0, _ENTROPY_PROBE_SIDE / full)
    probe_size = (
        max(1, int(round(image.width * probe_scale))),
        max(1, int(round(image.height * probe_scale))),
    )
    probe = image.resize(probe_size, Image.Resampling.BILINEAR)
    energy = _gradient_energy(probe)

    # Collapse the axis we are NOT scanning, then slide a window over the rest.
    profile = energy.sum(axis=0) if axis == 0 else energy.sum(axis=1)
    probe_window = max(1, int(round(window * probe_scale)))
    if probe_window >= profile.size:
        return 0

    cumulative = np.concatenate(([0.0], np.cumsum(profile, dtype=np.float64)))
    sums = cumulative[probe_window:] - cumulative[:-probe_window]
    probe_offset = int(np.argmax(sums))
    return int(min(slack, round(probe_offset / probe_scale)))


def fit_to_bucket(
    image: Image.Image,
    bucket: tuple[int, int],
    crop_mode: str = "center",
) -> tuple[Image.Image, dict[str, Any]]:
    """Resize (cover) + crop `image` to exactly `bucket`.

    Returns the cropped image and metadata: the crop box in resized-pixel
    space, the scale factor, and `upscaled` — True when the source was smaller
    than the bucket and had to be enlarged. The node never runs an upscale
    model, so `upscaled` is what surfaces "this source is too small" in the
    report and manifest.
    """
    bucket_w, bucket_h = int(bucket[0]), int(bucket[1])
    if bucket_w <= 0 or bucket_h <= 0:
        raise ValueError(f"invalid bucket {bucket!r}")

    source_w, source_h = image.size
    scale = max(bucket_w / source_w, bucket_h / source_h)
    resized_w = max(bucket_w, int(math.ceil(source_w * scale)))
    resized_h = max(bucket_h, int(math.ceil(source_h * scale)))

    resized = image
    if (resized_w, resized_h) != (source_w, source_h):
        resized = image.resize((resized_w, resized_h), Image.Resampling.LANCZOS)

    if crop_mode == "entropy":
        left = _entropy_offset(resized, bucket_w, axis=0)
        top = _entropy_offset(resized, bucket_h, axis=1)
    else:
        left = (resized_w - bucket_w) // 2
        top = (resized_h - bucket_h) // 2

    box = (left, top, left + bucket_w, top + bucket_h)
    return resized.crop(box), {
        "source_size": [source_w, source_h],
        "resized_size": [resized_w, resized_h],
        "crop_box": list(box),
        "scale": round(scale, 4),
        "crop_mode": crop_mode if crop_mode in CROP_MODES else "center",
        "upscaled": scale > 1.0,
    }


def pad_to_canvas(image: Image.Image, size: int, background: int = 0) -> Image.Image:
    """Letterbox `image` onto a `size`×`size` canvas, preserving aspect.

    Only used for the node's IMAGE preview output: bucketed frames have
    different shapes and cannot be stacked into one ComfyUI batch tensor.
    """
    size = max(1, int(size))
    scale = min(size / image.width, size / image.height)
    width = max(1, int(round(image.width * scale)))
    height = max(1, int(round(image.height * scale)))
    resample = Image.Resampling.LANCZOS if scale < 1.0 else Image.Resampling.BICUBIC
    canvas = Image.new("RGB", (size, size), (background, background, background))
    canvas.paste(image.resize((width, height), resample), ((size - width) // 2, (size - height) // 2))
    return canvas
