"""Krea 2 Upscaler & Tiled Diffusion core engine for FiL_Design_ImageMind.

Pure tensor math and execution primitives for:
1. High-fidelity pixel super-resolution (ESRGAN / DAT-2 / Lanczos).
2. Latent encoding and smart adaptive sampling (direct full-frame or seamless tiled).
3. Raised cosine taper blending for seamless tile fusion.
4. Robust VAE decoding with OOM prevention and dimension safety.
"""
from __future__ import annotations

import logging
from dataclasses import dataclass
import math
from typing import Any

import torch
import torch.nn.functional as F

import comfy.model_management
import comfy.sample
import comfy.samplers
import comfy.sd
import comfy.utils

from .sampling import sample_unified

logger = logging.getLogger(__name__)

LATENT_SCALE = 8
KREA2_PATCH_SIZE = 2
TILE_GRIDS = ["1x1", "1x2", "2x1", "2x2", "2x3", "3x2", "3x3", "4x4"]
ALL_TILE_GRIDS = ["auto"] + TILE_GRIDS
DEFAULT_TILE_GRID = "2x2"
DEFAULT_TILE_OVERLAP_PIXELS = 256
TAPER_FLOOR = 0.0001
POSITIVE_ROW = 0


@dataclass(frozen=True)
class LatentTile:
    """One tile's place on the latent canvas, in latent cells."""
    column_start: int
    row_start: int
    width: int
    height: int


@dataclass(frozen=True)
class LatentTilePlan:
    """Everything the denoise loop needs, and what the geometry actually became."""
    tiles: list[LatentTile]
    tile_width: int
    tile_height: int
    overlap: int
    columns: int
    rows: int


def calculate_auto_tile_grid(latent_width: int, latent_height: int,
                             max_tile_dim_pixels: int = 1024) -> str:
    """Selects the smallest grid so tile sizes do not exceed max_tile_dim_pixels."""
    max_latent = max_tile_dim_pixels // LATENT_SCALE
    cols = max(1, math.ceil(latent_width / max_latent))
    rows = max(1, math.ceil(latent_height / max_latent))
    grid_str = f"{cols}x{rows}"
    if grid_str in TILE_GRIDS:
        return grid_str
    cols = min(4, max(1, cols))
    rows = min(4, max(1, rows))
    clamped = f"{cols}x{rows}"
    return clamped if clamped in TILE_GRIDS else "2x2"


def calculate_tiles(latent_width: int, latent_height: int, tile_grid: str,
                    overlap_pixels: int = DEFAULT_TILE_OVERLAP_PIXELS) -> LatentTilePlan:
    """Calculates tiles and overlap for a given latent dimension and grid."""
    if tile_grid == "auto":
        tile_grid = calculate_auto_tile_grid(latent_width, latent_height)

    cols_str, rows_str = tile_grid.split("x")
    columns, rows = int(cols_str), int(rows_str)

    req_overlap = max(0, int(round(overlap_pixels / LATENT_SCALE)))
    tile_w = math.ceil((latent_width + (columns - 1) * req_overlap) / columns)
    tile_h = math.ceil((latent_height + (rows - 1) * req_overlap) / rows)

    overlap_x = 0 if columns <= 1 else math.ceil((columns * tile_w - latent_width) / (columns - 1))
    overlap_y = 0 if rows <= 1 else math.ceil((rows * tile_h - latent_height) / (rows - 1))
    overlap = max(overlap_x, overlap_y)

    tiles: list[LatentTile] = []
    for r in range(rows):
        r_start = 0 if rows <= 1 else round(r * (latent_height - tile_h) / (rows - 1))
        for c in range(columns):
            c_start = 0 if columns <= 1 else round(c * (latent_width - tile_w) / (columns - 1))
            tiles.append(LatentTile(column_start=c_start, row_start=r_start, width=tile_w, height=tile_h))

    return LatentTilePlan(tiles=tiles, tile_width=tile_w, tile_height=tile_h,
                          overlap=overlap, columns=columns, rows=rows)


def raised_cosine_taper(index: int, length: int) -> float:
    """Taper weight across [0, length-1] smoothly falling off at borders."""
    if length <= 1:
        return 1.0
    half = length / 2.0
    dist = abs(index + 0.5 - half)
    taper = 0.5 * (1.0 + math.cos(math.pi * dist / half))
    return max(TAPER_FLOOR, taper)


def calculate_edge_taper(length: int, overlap: int, is_start_border: bool, is_end_border: bool) -> list[float]:
    """Calculates seamless Hann window feathering across overlap zones.

    Borders against the image canvas keep full 1.0 weight (no edge darkening).
    Inter-tile seams feather smoothly with raised cosine across the overlap band.
    """
    if length <= 1:
        return [1.0]
    feather_band = max(1, min(overlap, length // 2)) if overlap > 0 else 0
    tapers: list[float] = []
    for i in range(length):
        w = 1.0
        if not is_start_border and feather_band > 0 and i < feather_band:
            w = min(w, 0.5 * (1.0 - math.cos(math.pi * (i + 0.5) / feather_band)))
        dist_end = length - 1 - i
        if not is_end_border and feather_band > 0 and dist_end < feather_band:
            w = min(w, 0.5 * (1.0 - math.cos(math.pi * (dist_end + 0.5) / feather_band)))
        tapers.append(max(TAPER_FLOOR, w))
    return tapers


def build_tile_fusion_weight(
    tile_height: int,
    tile_width: int,
    latent_rank: int,
    device: torch.device,
    dtype: torch.dtype,
    overlap: int = 0,
    is_top_border: bool = False,
    is_bottom_border: bool = False,
    is_left_border: bool = False,
    is_right_border: bool = False,
) -> torch.Tensor:
    """Seamless window weight tensor shaped to broadcast over latent."""
    if overlap > 0:
        row_weights = calculate_edge_taper(tile_height, overlap, is_top_border, is_bottom_border)
        col_weights = calculate_edge_taper(tile_width, overlap, is_left_border, is_right_border)
    else:
        row_weights = [raised_cosine_taper(r, tile_height) for r in range(tile_height)]
        col_weights = [raised_cosine_taper(c, tile_width) for c in range(tile_width)]

    row_taper = torch.tensor(row_weights, device=device, dtype=dtype)
    col_taper = torch.tensor(col_weights, device=device, dtype=dtype)
    leading_singletons = (1,) * max(0, latent_rank - 2)
    return torch.outer(row_taper, col_taper).reshape(*leading_singletons, tile_height, tile_width)


def run_upscale_model(upscale_model, image: torch.Tensor) -> torch.Tensor:
    """Tiled execution of ESRGAN/DAT2 upscale models to prevent VRAM OOM."""
    device = comfy.model_management.get_torch_device()
    upscale_model.to(device)
    in_img = image.movedim(-1, -3).to(device)

    tile = 512
    overlap = 32
    output_device = comfy.model_management.intermediate_device()

    oom = True
    while oom:
        try:
            steps = in_img.shape[0] * comfy.utils.get_tiled_scale_steps(
                in_img.shape[3], in_img.shape[2], tile_x=tile, tile_y=tile, overlap=overlap)
            pbar = comfy.utils.ProgressBar(steps)
            s = comfy.utils.tiled_scale(
                in_img, lambda a: upscale_model(a.float()),
                tile_x=tile, tile_y=tile, overlap=overlap,
                upscale_amount=upscale_model.scale, pbar=pbar, output_device=output_device)
            oom = False
        except Exception as e:
            comfy.model_management.raise_non_oom(e)
            tile //= 2
            if tile < 128:
                raise e

    return torch.clamp(s.movedim(-3, -1), min=0.0, max=1.0).to(image.dtype)


def scale_image_by_factor(image: torch.Tensor, factor: float,
                          upscale_model=None, upscale_method: str = "lanczos") -> torch.Tensor:
    """Upscales IMAGE tensor by factor, ensuring dimensions are multiples of 16."""
    if image is None:
        return image
    samples = image.movedim(-1, 1)
    target_width = max(16, int(round(samples.shape[3] * factor / 16.0)) * 16)
    target_height = max(16, int(round(samples.shape[2] * factor / 16.0)) * 16)

    if upscale_model is not None:
        logger.info("FiLKrea2TiledDiffusion: upscaling image with AI upscale model")
        model_upscaled = run_upscale_model(upscale_model, image[:, :, :, :3])
        if model_upscaled.shape[2] != target_width or model_upscaled.shape[1] != target_height:
            resized = comfy.utils.common_upscale(
                model_upscaled.movedim(-1, 1), target_width, target_height,
                "lanczos", "disabled")
            return resized.movedim(1, -1)[:, :, :, :3]
        return model_upscaled

    resized = comfy.utils.common_upscale(samples, target_width, target_height,
                                         upscale_method, "disabled")
    return resized.movedim(1, -1)[:, :, :, :3]


def decode_vae_safely(vae: Any, samples: torch.Tensor, tile_size: int = 512, overlap: int = 64) -> torch.Tensor:
    """Safely decodes 4D or 5D latents using VAE, handling tiled parameters and multidim reshaping."""
    images = None
    if hasattr(vae, "decode_tiled"):
        try:
            compression = vae.spacial_compression_decode() if hasattr(vae, "spacial_compression_decode") else 8
            temporal_compression = vae.temporal_compression_decode() if hasattr(vae, "temporal_compression_decode") else None

            tile_x = max(16, tile_size // compression)
            tile_y = max(16, tile_size // compression)
            overlap_val = max(4, overlap // compression)

            temporal_size = None
            temporal_overlap = None
            if temporal_compression is not None:
                temporal_size = max(2, 64 // temporal_compression)
                temporal_overlap = max(1, min(temporal_size // 2, 8 // temporal_compression))
            elif samples.ndim == 5:
                temporal_size = max(2, samples.shape[2])
                temporal_overlap = 1

            images = vae.decode_tiled(
                samples,
                tile_x=tile_x,
                tile_y=tile_y,
                overlap=overlap_val,
                tile_t=temporal_size,
                overlap_t=temporal_overlap
            )
        except Exception as exc:
            logger.warning("Krea 2: decode_tiled failed (%s); falling back to vae.decode", exc)
            images = None

    if images is None:
        images = vae.decode(samples)

    if images.ndim == 5:
        if images.shape[-1] in (1, 3, 4):
            images = images.reshape(-1, images.shape[-3], images.shape[-2], images.shape[-1])
        elif images.shape[1] in (1, 3, 4):
            images = images.movedim(1, -1)
            images = images.reshape(-1, images.shape[-3], images.shape[-2], images.shape[-1])
        else:
            images = images.reshape(-1, images.shape[-3], images.shape[-2], images.shape[-1])

    return images


def run_krea2_upscale_pipeline(
    model=None,
    clip=None,
    vae=None,
    image: torch.Tensor | None = None,
    upscale_model=None,
    latent: dict | None = None,
    prompt: str = "high quality, ultra detailed, sharp focus, 8k uhd",
    seed: int = 0,
    steps: int = 20,
    denoise: float = 0.20,
    upscale_factor: float = 2.0,
    tile_overlap: str = "auto (256px)",
    texture_injection: float = 0.20,
    color_match: str = "none",
) -> tuple[torch.Tensor, dict]:
    """High-fidelity one-click upscale and detail refinement.

    1. Uses AI upscale model (or Lanczos) to establish crisp, pristine geometry.
    2. Encodes to latent and runs faithful micro-texture refinement.
    3. Seamlessly handles large resolutions without seams or noise degradation.
    4. Applies Sobel high-pass texture injection and color locking.
    """
    if image is None and latent is None:
        raise ValueError("FiLKrea2TiledDiffusion requires at least one of 'image' or 'latent' to be connected.")

    # 1. Base upscale (pixel space)
    if image is not None:
        scaled_image = scale_image_by_factor(image, upscale_factor, upscale_model)
    else:
        scaled_image = None

    # Fast path: if no model/vae or denoise is 0, return the pristine pixel upscale immediately
    if model is None or vae is None or denoise <= 0.001 or steps <= 0:
        if scaled_image is not None:
            if vae is not None:
                try:
                    out_latent = {"samples": vae.encode(scaled_image[:, :, :, :3])}
                except Exception:
                    out_latent = latent if latent is not None else {"samples": torch.zeros((1, 4, 64, 64))}
                    lat_h_fb = max(2, scaled_image.shape[1] // LATENT_SCALE)
                    lat_w_fb = max(2, scaled_image.shape[2] // LATENT_SCALE)
                    out_latent = latent if latent is not None else {"samples": torch.zeros((scaled_image.shape[0], 4, lat_h_fb, lat_w_fb), device=scaled_image.device, dtype=scaled_image.dtype)}
            else:
                out_latent = latent if latent is not None else {"samples": torch.zeros((1, 4, 64, 64))}
                lat_h_fb = max(2, scaled_image.shape[1] // LATENT_SCALE)
                lat_w_fb = max(2, scaled_image.shape[2] // LATENT_SCALE)
                out_latent = latent if latent is not None else {"samples": torch.zeros((scaled_image.shape[0], 4, lat_h_fb, lat_w_fb), device=scaled_image.device, dtype=scaled_image.dtype)}
            return scaled_image, out_latent
        elif latent is not None:
            in_lat = latent["samples"]
            t_w = max(16, int(round(in_lat.shape[-1] * upscale_factor / 2.0)) * 2)
            t_h = max(16, int(round(in_lat.shape[-2] * upscale_factor / 2.0)) * 2)
            resized_lat = comfy.utils.common_upscale(in_lat, t_w, t_h, "bislerp", "disabled")
            decoded = decode_vae_safely(vae, resized_lat) if vae is not None else torch.zeros((1, t_h * 8, t_w * 8, 3))
            return decoded, {"samples": resized_lat}

    # 2. Target latent preparation
    if scaled_image is not None:
        target_latent_samples = vae.encode(scaled_image[:, :, :, :3])
    else:
        in_lat = latent["samples"]
        t_w = max(16, int(round(in_lat.shape[-1] * upscale_factor / 2.0)) * 2)
        t_h = max(16, int(round(in_lat.shape[-2] * upscale_factor / 2.0)) * 2)
        target_latent_samples = comfy.utils.common_upscale(in_lat, t_w, t_h, "bislerp", "disabled")

    target_latent = {"samples": target_latent_samples}
    lat_h = target_latent_samples.shape[-2]
    lat_w = target_latent_samples.shape[-1]
    latent_channels = target_latent_samples.shape[1]

    # 3. Conditioning preparation
    if clip is not None:
        tokens_pos = clip.tokenize(prompt)
        cond_pos = clip.encode_from_tokens(tokens_pos)
        positive = [[cond_pos, {}]]

        neg_text = "blurry, bad quality, distorted, deformed, lowres, noise artifact, oversaturated"
        tokens_neg = clip.tokenize(neg_text)
        cond_neg = clip.encode_from_tokens(tokens_neg)
        negative = [[cond_neg, {}]]
    else:
        # Fallback dummy conditioning compatible with model
        dev = model.load_device if hasattr(model, "load_device") else torch.device("cpu")
        dummy = torch.zeros((1, 1, 768), device=dev)
        positive = [[dummy, {}]]
        negative = [[dummy, {}]]

    # 4. Adaptive model parameters (Flux vs SDXL / SD1.5)
    if latent_channels == 16:
        # Flux or SD3.5 (16 channels)
        cfg = 1.0
        sampler_name = "euler"
        scheduler = "simple"
    else:
        # SDXL or SD1.5 (4 channels)
        cfg = 4.0
        sampler_name = "euler"
        scheduler = "normal"

    # 5. Full-frame vs Seamless Tiled Sampling
    max_direct_latent_dim = 128 if latent_channels == 16 else 256

    if max(lat_w, lat_h) <= max_direct_latent_dim:
        logger.info("FiLKrea2TiledDiffusion: full-frame latent sampling (%dx%d)", lat_w * 8, lat_h * 8)
        sampled_latent = sample_unified(
            model=model,
            seed=seed,
            steps=steps,
            cfg=cfg,
            sampler_name=sampler_name,
            scheduler=scheduler,
            positive=positive,
            negative=negative,
            latent=target_latent,
            denoise=denoise,
        )
        final_samples = sampled_latent["samples"]
    else:
        # Large resolution: run seamless tiled sampling with cosine blending
        overlap_px = DEFAULT_TILE_OVERLAP_PIXELS
        if "128" in str(tile_overlap):
            overlap_px = 128
        elif "384" in str(tile_overlap):
            overlap_px = 384
        elif "256" in str(tile_overlap):
            overlap_px = 256

        logger.info("FiLKrea2TiledDiffusion: tiled latent sampling for canvas (%dx%d, overlap %dpx)", lat_w * 8, lat_h * 8, overlap_px)
        plan = calculate_tiles(lat_w, lat_h, tile_grid="auto", overlap_pixels=overlap_px)

        accumulator = torch.zeros_like(target_latent_samples)
        weight_sum = torch.zeros_like(target_latent_samples)

        for tile in plan.tiles:
            tile_lat_slice = target_latent_samples[..., tile.row_start:tile.row_start + tile.height,
                                                   tile.column_start:tile.column_start + tile.width]
            tile_dict = {"samples": tile_lat_slice.clone()}

            is_top = (tile.row_start == 0)
            is_bottom = (tile.row_start + tile.height >= lat_h)
            is_left = (tile.column_start == 0)
            is_right = (tile.column_start + tile.width >= lat_w)

            weight = build_tile_fusion_weight(
                tile.height, tile.width,
                target_latent_samples.dim(),
                target_latent_samples.device,
                target_latent_samples.dtype,
                overlap=plan.overlap,
                is_top_border=is_top,
                is_bottom_border=is_bottom,
                is_left_border=is_left,
                is_right_border=is_right,
            )

            sampled_tile = sample_unified(
                model=model,
                seed=seed,
                steps=steps,
                cfg=cfg,
                sampler_name=sampler_name,
                scheduler=scheduler,
                positive=positive,
                negative=negative,
                latent=tile_dict,
                denoise=denoise,
            )

            out_tile = sampled_tile["samples"].to(accumulator.device)
            accumulator[..., tile.row_start:tile.row_start + tile.height,
                        tile.column_start:tile.column_start + tile.width] += out_tile * weight
            weight_sum[..., tile.row_start:tile.row_start + tile.height,
                       tile.column_start:tile.column_start + tile.width] += weight
            comfy.model_management.soft_empty_cache()

        final_samples = accumulator / torch.clamp(weight_sum, min=1e-5)

    # 6. Decode VAE safely
    decoded_image = decode_vae_safely(vae, final_samples)
    comfy.model_management.soft_empty_cache()

    # 7. Post-processing: Texture Injection & Color Locking
    ref_image = scaled_image if scaled_image is not None else image
    if ref_image is not None and decoded_image is not None:
        if texture_injection > 0.0:
            decoded_image = apply_texture_injection(decoded_image, ref_image, blend_strength=texture_injection)
        if color_match and color_match != "none":
            decoded_image = apply_color_matching(ref_image, decoded_image, mode=color_match)

    return decoded_image, {"samples": final_samples}


def apply_texture_injection(
    base_image: torch.Tensor,
    reference_image: torch.Tensor,
    blend_strength: float = 0.20,
    filter_radius: int = 3,
) -> torch.Tensor:
    """Injects edge-aware high-pass microtexture (pores, fibers, film grain, sharp decals)
    from reference_image into base_image using Sobel saliency masking to suppress noise on flat areas.
    """
    if blend_strength <= 0.0 or reference_image is None or base_image is None:
        return base_image

    if base_image.shape[1:3] != reference_image.shape[1:3]:
        ref = comfy.utils.common_upscale(
            reference_image.movedim(-1, 1), base_image.shape[2], base_image.shape[1],
            "lanczos", "disabled").movedim(1, -1)[:, :, :, :3]
    else:
        ref = reference_image[:, :, :, :3]

    ref_ch = ref.movedim(-1, 1).to(base_image.device, dtype=torch.float32)
    base_ch = base_image[:, :, :, :3].movedim(-1, 1).to(torch.float32)

    # 1. High-pass filter of reference image
    kernel_size = filter_radius * 2 + 1
    sigma = filter_radius / 2.0
    x = torch.arange(kernel_size, dtype=torch.float32, device=base_image.device) - filter_radius
    gauss = torch.exp(-0.5 * (x / sigma) ** 2)
    k1d = gauss / gauss.sum()
    k2d = torch.outer(k1d, k1d).unsqueeze(0).unsqueeze(0).repeat(3, 1, 1, 1)

    pad = filter_radius
    padded = F.pad(ref_ch, (pad, pad, pad, pad), mode="reflect")
    low_pass = F.conv2d(padded, k2d, groups=3)
    high_pass = ref_ch - low_pass

    # 2. Sobel edge magnitude to detect high-frequency contours vs flat skin/glass/background
    gray = 0.299 * ref_ch[:, 0:1] + 0.587 * ref_ch[:, 1:2] + 0.114 * ref_ch[:, 2:3]
    kx = torch.tensor([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], dtype=torch.float32, device=base_image.device).unsqueeze(0).unsqueeze(0)
    ky = torch.tensor([[-1, -2, -1], [0, 0, 0], [1, 2, 1]], dtype=torch.float32, device=base_image.device).unsqueeze(0).unsqueeze(0)

    gx = F.conv2d(gray, kx, padding=1)
    gy = F.conv2d(gray, ky, padding=1)
    edge_mag = torch.sqrt(gx**2 + gy**2)

    # Normalize: smooth flat areas -> 0.0, sharp edges/textures -> 1.0
    edge_norm = torch.clamp((edge_mag - 0.03) / 0.18, 0.0, 1.0)
    smooth_mask = edge_norm * edge_norm * (3.0 - 2.0 * edge_norm)

    # Dynamic adaptive weighting: floor preserves subtle micro-texture without noise, boost sharpens edges
    floor_strength = blend_strength * 0.15
    boost_strength = blend_strength * 1.40
    adaptive_weight = floor_strength + ((boost_strength - floor_strength) * smooth_mask)

    injected = base_ch + (high_pass * adaptive_weight)
    return torch.clamp(injected.movedim(1, -1), 0.0, 1.0).to(base_image.dtype)


# Compatible alias
apply_edge_aware_texture = apply_texture_injection


def apply_color_matching(
    reference_image: torch.Tensor,
    generated_image: torch.Tensor,
    mode: str = "none",
) -> torch.Tensor:
    """Locks colors / skin tones of generated_image to reference_image."""
    if mode == "none" or reference_image is None or generated_image is None:
        return generated_image

    ref = reference_image[:, :, :, :3].to(generated_image.device, dtype=torch.float32)
    gen = generated_image[:, :, :, :3].to(torch.float32)

    if ref.shape[1:3] != gen.shape[1:3]:
        ref = comfy.utils.common_upscale(
            ref.movedim(-1, 1), gen.shape[2], gen.shape[1],
            "lanczos", "disabled").movedim(1, -1)

    if mode == "luminance":
        mat_rgb2ycbcr = torch.tensor([
            [ 0.299000,  0.587000,  0.114000],
            [-0.168736, -0.331264,  0.500000],
            [ 0.500000, -0.418688, -0.081312],
        ], device=gen.device, dtype=torch.float32)

        ref_ycbcr = torch.matmul(ref, mat_rgb2ycbcr.T)
        ref_ycbcr[..., 1:] += 0.5

        gen_ycbcr = torch.matmul(gen, mat_rgb2ycbcr.T)
        gen_ycbcr[..., 1:] += 0.5

        merged_ycbcr = torch.cat([gen_ycbcr[..., 0:1], ref_ycbcr[..., 1:]], dim=-1)
        merged_ycbcr[..., 1:] -= 0.5

        mat_ycbcr2rgb = torch.tensor([
            [1.000000,  0.000000,  1.402000],
            [1.000000, -0.344136, -0.714136],
            [1.000000,  1.772000,  0.000000],
        ], device=gen.device, dtype=torch.float32)

        restored_rgb = torch.matmul(merged_ycbcr, mat_ycbcr2rgb.T)
        return torch.clamp(restored_rgb, 0.0, 1.0).to(generated_image.dtype)

    elif mode == "wavelet":
        radius = 48
        kernel_size = radius * 2 + 1
        sigma = radius / 3.0
        x = torch.arange(kernel_size, dtype=torch.float32, device=gen.device) - radius
        gauss = torch.exp(-0.5 * (x / sigma) ** 2)
        k1d = gauss / gauss.sum()
        k2d = torch.outer(k1d, k1d).unsqueeze(0).unsqueeze(0).repeat(3, 1, 1, 1)

        pad = radius
        ref_pad = F.pad(ref.movedim(-1, 1), (pad, pad, pad, pad), mode="reflect")
        gen_pad = F.pad(gen.movedim(-1, 1), (pad, pad, pad, pad), mode="reflect")

        ref_low = F.conv2d(ref_pad, k2d, groups=3)
        gen_low = F.conv2d(gen_pad, k2d, groups=3)

        gen_high = gen.movedim(-1, 1) - gen_low
        restored = torch.clamp(ref_low + gen_high, 0.0, 1.0)
        return restored.movedim(1, -1).to(generated_image.dtype)

    return generated_image
