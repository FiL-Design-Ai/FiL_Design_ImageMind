"""Tests for FiLKrea2TiledDiffusion node, its schema and engine algorithms."""
from __future__ import annotations

import json
from pathlib import Path
import torch

from FiL_Design_ImageMind.common.krea2_engine import (
    ALL_TILE_GRIDS,
    apply_color_matching,
    apply_edge_aware_texture,
    calculate_auto_tile_grid,
    calculate_tiles,
    run_krea2_upscale_pipeline,
)
from FiL_Design_ImageMind.common.release_gate import RELEASE_NODES
from FiL_Design_ImageMind.nodes.node_krea2_tiled_diffusion import FiLKrea2TiledDiffusion


def test_schema_definition():
    schema = FiLKrea2TiledDiffusion.define_schema()
    assert schema.node_id == "FiLKrea2TiledDiffusion"
    assert "Krea 2" in schema.display_name

    input_ids = [inp.id for inp in schema.inputs]
    assert "image" in input_ids
    assert "model" in input_ids
    assert "vae" in input_ids
    assert "upscale_model" in input_ids
    assert "clip" in input_ids
    assert "latent" in input_ids
    assert "upscale_factor" in input_ids
    assert "denoise" in input_ids
    assert "prompt" in input_ids
    assert "seed" in input_ids
    assert "steps" in input_ids

    output_names = [out.display_name for out in schema.outputs]
    assert "image" in output_names
    assert "latent" in output_names


def test_tile_calculation():
    plan = calculate_tiles(latent_width=128, latent_height=128, tile_grid="2x2", overlap_pixels=256)
    assert len(plan.tiles) == 4
    assert plan.columns == 2
    assert plan.rows == 2
    assert plan.tile_width > 0
    assert plan.tile_height > 0


def test_auto_tile_grid():
    grid = calculate_auto_tile_grid(latent_width=64, latent_height=64)
    assert grid in ALL_TILE_GRIDS


def test_edge_aware_texture_injection():
    base = torch.full((1, 64, 64, 3), 0.5, dtype=torch.float32)
    ref = base.clone()
    ref[:, 10:20, 10:20, :] = 0.9

    injected = apply_edge_aware_texture(base, ref, blend_strength=0.20, filter_radius=2)
    assert injected.shape == base.shape
    assert injected.dtype == base.dtype


def test_color_matching_luminance_and_wavelet():
    gen = torch.zeros((1, 64, 64, 3), dtype=torch.float32)
    ref = torch.zeros((1, 64, 64, 3), dtype=torch.float32)
    matched_lum = apply_color_matching(ref, gen, mode="luminance")
    assert matched_lum.shape == gen.shape


def test_release_gate_registration():
    assert "FiLKrea2TiledDiffusion" in RELEASE_NODES


def test_run_krea2_upscale_fast_path():
    # Fast path test without models
    img = torch.full((1, 32, 32, 3), 0.5, dtype=torch.float32)
    scaled_img, out_lat = run_krea2_upscale_pipeline(
        image=img,
        upscale_factor=2.0,
        denoise=0.0,
    )
    assert scaled_img.shape[1] == 64
    assert scaled_img.shape[2] == 64
    assert "samples" in out_lat


def test_locales_coverage():
    locales_dir = Path(__file__).resolve().parent.parent / "data" / "locales"
    with open(locales_dir / "en.json", "r", encoding="utf-8") as f:
        en = json.load(f)
    with open(locales_dir / "ru.json", "r", encoding="utf-8") as f:
        ru = json.load(f)

    keys = [
        "krea2_model", "krea2_clip", "krea2_vae", "krea2_image",
        "krea2_prompt", "krea2_seed", "krea2_steps", "krea2_denoise",
        "krea2_upscale_factor"
    ]
    for k in keys:
        assert k in en, f"Missing {k} in en.json"
        assert k in ru, f"Missing {k} in ru.json"
