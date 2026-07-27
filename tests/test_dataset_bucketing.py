"""Bucket math for the LoRA dataset node — pure PIL/numpy, no torch, no ComfyUI."""

from __future__ import annotations

import pytest
from PIL import Image

from FiL_Design_ImageMind.common.dataset import bucketing


def test_buckets_are_step_aligned_and_near_the_target_area():
    buckets = bucketing.generate_buckets(1024, step=64)
    assert (1024, 1024) in buckets
    for width, height in buckets:
        assert width % 64 == 0 and height % 64 == 0
        # kohya rounds the second side DOWN to the step, so a bucket is never
        # larger than the target area, only slightly smaller.
        assert width * height <= 1024 * 1024
        assert width * height >= 1024 * 1024 * 0.8


def test_buckets_respect_the_max_ratio_and_are_symmetric():
    buckets = bucketing.generate_buckets(768, step=64, max_ratio=2.0)
    for width, height in buckets:
        assert max(width / height, height / width) <= 2.0
        assert (height, width) in buckets


def test_odd_base_resolution_still_yields_a_square_bucket():
    buckets = bucketing.generate_buckets(1000, step=64)
    assert (960, 960) in buckets


def test_pick_bucket_matches_aspect_not_just_width():
    buckets = bucketing.generate_buckets(1024, step=64)

    assert bucketing.pick_bucket(1000, 1000, buckets) == (1024, 1024)

    portrait = bucketing.pick_bucket(1080, 1920, buckets)
    assert portrait[0] < portrait[1]
    landscape = bucketing.pick_bucket(1920, 1080, buckets)
    assert landscape == (portrait[1], portrait[0])


def test_pick_bucket_survives_degenerate_sizes():
    buckets = bucketing.generate_buckets(512, step=64)
    assert bucketing.pick_bucket(0, 0, buckets) == (512, 512)
    with pytest.raises(ValueError):
        bucketing.pick_bucket(100, 100, [])


def test_fit_to_bucket_covers_and_crops_exactly():
    source = Image.new("RGB", (2000, 1000), "white")
    fitted, meta = bucketing.fit_to_bucket(source, (1216, 832))

    assert fitted.size == (1216, 832)
    assert meta["upscaled"] is False
    assert meta["source_size"] == [2000, 1000]
    # Cover scaling never leaves a side shorter than the bucket — no padding.
    assert meta["resized_size"][0] >= 1216 and meta["resized_size"][1] >= 832


def test_fit_to_bucket_flags_sources_smaller_than_the_bucket():
    source = Image.new("RGB", (400, 400), "white")
    fitted, meta = bucketing.fit_to_bucket(source, (1024, 1024))

    assert fitted.size == (1024, 1024)
    assert meta["upscaled"] is True
    assert meta["scale"] > 1.0


def test_entropy_crop_follows_the_detail_and_center_crop_does_not():
    # Flat left half, noisy right half: entropy must land on the right.
    source = Image.new("RGB", (1024, 512), "black")
    detail = Image.effect_noise((512, 512), 120).convert("RGB")
    source.paste(detail, (512, 0))

    _, entropy_meta = bucketing.fit_to_bucket(source, (512, 512), crop_mode="entropy")
    _, center_meta = bucketing.fit_to_bucket(source, (512, 512), crop_mode="center")

    assert entropy_meta["crop_box"][0] > center_meta["crop_box"][0]
    assert entropy_meta["crop_box"][0] >= 384


def test_pad_to_canvas_keeps_aspect_on_a_square_canvas():
    padded = bucketing.pad_to_canvas(Image.new("RGB", (1216, 832), "white"), 512)
    assert padded.size == (512, 512)
    # Letterbox bars stay black; the content is centred.
    assert padded.getpixel((256, 4)) == (0, 0, 0)
    assert padded.getpixel((256, 256)) == (255, 255, 255)
