"""Tile-grid layout math and preview rendering for FiLUpscaleTileCalc.

Pure calculation + PIL rendering, no ComfyUI/V3 schema concerns — the node
wrapper (`nodes/node_upscale.py`) is a thin schema + `execute()` shell that
calls into this module.
"""

import math
from dataclasses import dataclass
from typing import List, Tuple

import numpy as np

try:
    from PIL import Image
    _PIL_OK = True
except ImportError:
    _PIL_OK = False

STANDARD_SIZES = [1536, 1024, 768, 512]
AUTO_PROFILES = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"]

AUTO_PROFILE_TABLE = {
    "Low VRAM": {"tile_size": 512, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.20, "summary": "Compact square tiles"},
    "Balanced": {"tile_size": 768, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.24, "summary": "Balanced square tiles"},
    "High VRAM": {"tile_size": 1024, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.26, "summary": "Larger square tiles"},
    "Max Quality": {"tile_size": 1024, "non_square": False, "overlap_bias": 1.5, "denoise_delta": 0.02, "denoise_cap": 0.30, "summary": "More padding/blend"},
    "Ultra Quality": {"tile_size": 1536, "non_square": False, "overlap_bias": 2.0, "denoise_delta": 0.02, "denoise_cap": 0.30, "summary": "Very large tiles"},
}


@dataclass(frozen=True)
class TileLayout:
    step_w: int
    step_h: int
    tile_cols: int
    tile_rows: int
    tile_count: int
    tile_rects: List[Tuple[int, int, int, int]]


@dataclass(frozen=True)
class AutoTileSettings:
    tile_size: int
    tile_w: int
    tile_h: int
    effective_overlap: int
    denoise_hint: float
    profile_summary: str
    adjusted_from: int = 0


def align(val: float, grid: int, mode: str) -> int:
    if mode == "ceil":
        r = math.ceil(val / grid) * grid
    elif mode == "floor":
        r = math.floor(val / grid) * grid
    else:
        r = round(val / grid) * grid
    return max(grid, r)


def blank_preview(w, h):
    arr = np.zeros((1, max(8, h), max(8, w), 3), dtype=np.float32)
    try:
        import torch
        return torch.from_numpy(arr)
    except ImportError:
        return arr


def blank_latent():
    """Minimal placeholder LATENT dict for the `latent`/`latent_tiles`
    outputs when no `latent` input is connected — keeps the graph valid
    (ComfyUI outputs must always return a value of the declared type)
    without implying any real upscale happened.
    """
    arr = np.zeros((1, 4, 8, 8), dtype=np.float32)
    try:
        import torch
        return {"samples": torch.from_numpy(arr)}
    except ImportError:
        return {"samples": arr}


def apply_latent_resize(latent, target_lw: int, target_lh: int):
    """Resize a LATENT dict's `samples` tensor to target_lw x target_lh using
    bislerp — the standard ComfyUI latent-space upscale interpolation
    (lanczos, used for the pixel `image` output, only applies to RGB data).
    """
    import comfy.utils

    resized = comfy.utils.common_upscale(latent["samples"], target_lw, target_lh, "bislerp", "disabled")
    return {"samples": resized}


def crop_latent_tiles(latent, target_lw: int, target_lh: int, layout: TileLayout, tile_lw: int, tile_lh: int):
    """Split a LATENT already resized to target_lw x target_lh into per-tile
    crops at 1/8th the pixel-space `layout` positions, one latent tile per
    image tile in `crop_tiles` — same row/col loop and tile COUNT as the
    pixel grid, so a downstream per-tile KSampler can pair image tile N with
    latent tile N directly. Positions are rounded (tile sizes divide evenly
    by 8 by construction, but overlap/step values are not always an exact
    multiple of 8), each tile clamped in-bounds like `crop_tiles`.
    """
    import torch

    samples = latent["samples"]
    tile_lw = min(tile_lw, target_lw)
    tile_lh = min(tile_lh, target_lh)
    tiles = []
    for row in range(layout.tile_rows):
        y0 = max(0, min(round(row * layout.step_h / 8), target_lh - tile_lh))
        for col in range(layout.tile_cols):
            x0 = max(0, min(round(col * layout.step_w / 8), target_lw - tile_lw))
            tiles.append(samples[:, :, y0:y0 + tile_lh, x0:x0 + tile_lw])
    return {"samples": torch.cat(tiles, dim=0)}


def _resize_source(single, aw: int, ah: int):
    """Resize a single [1,H,W,C] image up/down to exactly aw x ah if it isn't
    already — `out_image` in node_upscale.py stays at the ORIGINAL resolution
    when no upscale_model is connected (intentional passthrough), while
    tile_rects are always computed against the tile-aligned TARGET size.
    Cropping tile regions straight out of a smaller source silently reads
    out-of-bounds (numpy/torch just clip to empty), producing all-black
    tiles — this keeps crop_tiles correct regardless of whether a real model
    upscale ran.
    """
    if single.shape[1] == ah and single.shape[2] == aw:
        return single
    if hasattr(single, "movedim"):
        import comfy.utils
        samples = single.movedim(-1, 1)
        resized = comfy.utils.common_upscale(samples, aw, ah, "lanczos", "disabled")
        return resized.movedim(1, -1)
    if not _PIL_OK:
        return single
    np_img = (np.array(single[0]) * 255).clip(0, 255).astype(np.uint8)
    pil = Image.fromarray(np_img).convert("RGB").resize((aw, ah), Image.LANCZOS)
    return (np.array(pil).astype(np.float32) / 255.0)[np.newaxis]


def crop_tiles(image, aw: int, ah: int, layout: TileLayout, tw: int, th: int):
    """Split `image` (first item of the batch, resized to aw x ah if needed)
    into full-size tile crops for the `tiles` batch output.

    Every crop is exactly `min(tw, aw) x min(th, ah)` of REAL pixels — a
    ComfyUI IMAGE batch requires a uniform shape, so instead of zero-padding
    the thin edge tiles (which left black borders), the last column/row is
    shifted inward to `aw - tile_w` / `ah - tile_h` so it stays full-size and
    simply OVERLAPS its neighbour. This is the standard tiled-upscale tiling
    (cf. Ultimate SD Upscale / comfy.utils.tiled_scale): no distortion, no
    black bars. Purely a debug/preview view — the real recombine step stays
    with the downstream sampler using the overlap/mask_blur/tile_padding outputs.
    """
    is_torch = hasattr(image, "movedim")
    single = _resize_source(image[0:1], aw, ah)
    tile_w = min(tw, aw)
    tile_h = min(th, ah)
    tiles = []
    for row in range(layout.tile_rows):
        y0 = max(0, min(row * layout.step_h, ah - tile_h))
        for col in range(layout.tile_cols):
            x0 = max(0, min(col * layout.step_w, aw - tile_w))
            tiles.append(single[:, y0:y0 + tile_h, x0:x0 + tile_w, :])
    if is_torch:
        import torch
        return torch.cat(tiles, dim=0)
    return np.concatenate(tiles, axis=0)


MAX_TILE_ASPECT_RATIO = 1.5  # cap tw:th elongation for non_square_tiles: SD
# tiled-upscale tooling (Ultimate SD Upscale, TiledDiffusion/MultiDiffusion)
# converges on tiles close to SQUARE near the model's native training
# resolution — straying far from 1:1 causes compositional/anatomical
# artifacts. Where those tools do use rectangular tiles they derive them as
# bounded image-width/col-count subdivisions, never a single tile shape that
# mirrors the whole image's own aspect ratio. 1.5:1 keeps the tile a modest
# rectangle (at most 50% longer on one axis) instead of an unbounded strip.


def compute_tile_dimensions(base_tile_size, ow, oh, non_square):
    if not non_square:
        return base_tile_size, base_tile_size
    ar = ow / oh
    ar = max(1.0 / MAX_TILE_ASPECT_RATIO, min(MAX_TILE_ASPECT_RATIO, ar))
    if ar >= 1.0:
        tw = max(64, round(base_tile_size * math.sqrt(ar) / 8) * 8)
        th = max(64, round(base_tile_size / math.sqrt(ar) / 8) * 8)
    else:
        th = max(64, round(base_tile_size / math.sqrt(ar) / 8) * 8)
        tw = max(64, round(base_tile_size * math.sqrt(ar) / 8) * 8)
    return tw, th


def has_thin_edge(aw, ah, tw, th):
    cols = max(1, math.ceil(aw / tw))
    rows = max(1, math.ceil(ah / th))
    re = aw - ((cols - 1) * tw) if cols > 1 else aw
    be = ah - ((rows - 1) * th) if rows > 1 else ah
    return (cols > 1 and re < max(256, int(tw * 0.25))) or (rows > 1 and be < max(256, int(th * 0.25)))


def choose_edge_safe_tile(aw, ah, preferred):
    candidates = [s for s in STANDARD_SIZES if s <= preferred]
    if preferred not in candidates:
        candidates.insert(0, preferred)
    for c in candidates:
        if not has_thin_edge(aw, ah, c, c):
            return c
    return preferred


def is_standard_quality_tile(tw: int, th: int) -> bool:
    return tw == th and tw in {512, 768, 1024, 1536}


def compute_denoise_hint(scale):
    # ~0.20 at a typical 2x upscale, 0.30 ceiling — matches mainstream
    # tiled-upscale practice (Ultimate SD Upscale defaults ~0.2 for
    # enhancement; keep < 0.4 to preserve composition). The old 0.10-0.24
    # band under-denoised (0.14 at 2x → soft, low-detail results).
    return round(max(0.15, min(0.30, 0.15 + (scale - 1.0) * 0.05)), 2)


def compute_tile_padding(tw, th):
    base = min(tw, th)
    ratio = 0.073 if 640 < base <= 896 else 0.0625
    tp = round((base * ratio) / 8.0) * 8
    return max(16, min(tp, 128))


def compute_mask_blur(tp, ov):
    if ov <= 0:
        return 0
    raw = max(tp * 0.5, ov * 0.25)
    mb = round(raw / 4.0) * 4
    return int(max(8, min(mb, 24)))


def compute_auto_overlap(tile_size: int) -> int:
    """~12.5% of tile_size, floored at 32px — the shared-blend zone between
    adjacent tiles should scale with the TILE, not the raw image resolution
    (resolution already drives tile_size/tile count upstream). Matches the
    community-standard overlap-to-tile ratio for tiled diffusion upscaling
    (Ultimate SD Upscale / MultiDiffusion), same formula Full Auto already
    used internally — exposed here so Manual Tiles mode can opt into it too.
    """
    return max(32, round(tile_size / 64.0) * 8)


def compute_auto_tile_settings(ow, oh, aw, ah, actual_scale, auto_profile, non_square_enabled=False) -> AutoTileSettings:
    prof = AUTO_PROFILE_TABLE.get(auto_profile, AUTO_PROFILE_TABLE["Balanced"])
    preferred = prof["tile_size"]
    tile_size = choose_edge_safe_tile(aw, ah, preferred)
    adjusted = preferred if tile_size != preferred else 0
    tw, th = compute_tile_dimensions(tile_size, ow, oh, prof.get("non_square", False) or non_square_enabled)
    base_ov = compute_auto_overlap(tile_size)
    eff_ov = round((base_ov * prof["overlap_bias"]) / 8) * 8
    eff_ov = max(32, min(eff_ov, min(tw, th) - 8))
    denoise = compute_denoise_hint(actual_scale)
    denoise = min(prof["denoise_cap"], denoise + prof["denoise_delta"])
    denoise = round(max(0.15, min(0.30, denoise)), 2)
    return AutoTileSettings(tile_size, tw, th, eff_ov, denoise, prof["summary"], adjusted)


def tile_size_for_count(axis_len: int, count: int, overlap: int) -> int:
    """Smallest 8-aligned tile size `t` such that exactly `count` tiles of
    size `t`, stepping by `t - overlap` (same step formula as
    `compute_layout`), cover `axis_len` px edge-to-edge.

    Used so an explicit manual_tile_cols/rows grid gets a REAL overlapping
    stitch (shared pixels a downstream sampler can actually blend across)
    instead of tiles touching with zero shared margin while the `overlap`
    output still claims a non-zero value.
    """
    count = max(1, int(count))
    if count == 1:
        return max(64, min(math.ceil(axis_len / 8.0) * 8, 8192))
    overlap = max(0, int(overlap))
    # Closed-form real-valued size solving count*t - (count-1)*overlap == axis_len
    # (last tile ends exactly at axis_len); round up to 8px, then verify/nudge
    # against compute_layout's own formula since 8px rounding can occasionally
    # shift the achieved count by one.
    raw = (axis_len + (count - 1) * overlap) / count
    t = max(64, math.ceil(raw / 8.0) * 8)
    for _ in range(32):
        step = max(1, t - overlap)
        cols = 1 if axis_len <= t else math.ceil((axis_len - t) / step) + 1
        if cols == count or t >= 8192 or t <= 64:
            break
        t = max(64, min(t + (8 if cols > count else -8), 8192))
    return t


def compute_layout(aw, ah, tw, th, overlap_w: int = 0, overlap_h: int = 0) -> TileLayout:
    """Lay out `tw x th` tiles across `aw x ah`, advancing by an EVENLY
    distributed step per axis (the standard tiled-upscale scheme — cf.
    `comfy.utils.tiled_scale`), not a fixed `tw - overlap` step for every gap.

    `cols`/`rows` are still derived the nominal way first (`ceil((axis-tile)
    /step)+1`), but the ACTUAL step used for every gap is then recomputed as
    `(axis - tile) / (count - 1)` — because that nominal step is a ceiling,
    the naive fixed-step grid usually overshoots the far edge, and clamping
    just the LAST tile inward to stay in bounds dumps the entire overshoot
    onto one boundary instead of spreading it across all of them. Verified
    on a real 3072x5440 target at tile=1024/overlap=64: the fixed-step
    version gave 64px overlap on 2 boundaries but 896px (87.5%!) on the
    3rd — evenly distributing spreads that same total overshoot into ~341px
    on all 3 instead of concentrating it on one.
    Overlap is taken PER AXIS, not a single shared number: with
    `non_square_tiles` (tw != th), a large overlap safe for the wide axis can
    exceed the short axis entirely — averaging the two into one scalar let
    the short axis's step collapse toward 1px and explode the tile count
    (146 tiles instead of ~10 for a 1448x184 tile at overlap=500, verified).
    `overlap_w=overlap_h=0` reproduces the old edge-to-edge grid exactly.
    Every tile is clamped to stay fully in-bounds (shifted inward on the last
    row/col instead of running off the edge), so tile_rects are always
    `tw x th` with no thin/partial tiles — `crop_tiles` relies on this.
    """
    nominal_step_w = max(1, tw - overlap_w)
    nominal_step_h = max(1, th - overlap_h)
    cols = 1 if aw <= tw else math.ceil((aw - tw) / nominal_step_w) + 1
    rows = 1 if ah <= th else math.ceil((ah - th) / nominal_step_h) + 1
    step_w = (aw - tw) / (cols - 1) if cols > 1 else nominal_step_w
    step_h = (ah - th) / (rows - 1) if rows > 1 else nominal_step_h
    rects = []
    for row in range(rows):
        sy = min(round(row * step_h), max(0, ah - th))
        ey = min(sy + th, ah)
        for col in range(cols):
            sx = min(round(col * step_w), max(0, aw - tw))
            ex = min(sx + tw, aw)
            rects.append((sx, sy, ex, ey))
    return TileLayout(round(step_w), round(step_h), cols, rows, cols * rows, rects)


def _feather_ramp_1d(length: int, overlap_start: int, overlap_end: int, dtype):
    """1D weight ramp for `assemble_tiles`: 1.0 in the interior, linearly
    ramping down toward (but never reaching) 0 across `overlap_start`/
    `overlap_end` px at each end — only where that end actually has a
    neighbouring tile to blend with (0 = no ramp, e.g. a real canvas edge).
    Never hitting exactly 0 keeps every pixel covered by at least one
    nonzero-weighted tile even before the two neighbours' masks are summed.
    """
    import torch

    w = torch.ones(length, dtype=dtype)
    if overlap_start > 0:
        n = min(overlap_start, length)
        w[:n] = torch.minimum(w[:n], torch.linspace(1.0 / (n + 1), 1.0, n, dtype=dtype))
    if overlap_end > 0:
        n = min(overlap_end, length)
        w[length - n:] = torch.minimum(w[length - n:], torch.linspace(1.0, 1.0 / (n + 1), n, dtype=dtype))
    return w


def assemble_tiles(tiles, layout: dict):
    """Recombine a batch of (independently processed) tile images back into
    one canvas, using the exact positions in `layout` (a FIL_TILE_LAYOUT dict
    — see `common/io_types.py`) — the same grid `crop_tiles` produced them
    from, so no re-derivation of the tile math is needed.

    Blends the real overlap zones with a separable linear feather (per-tile
    2D weight mask, accumulated then normalized) rather than pairwise
    row-then-column blending — this handles a 4-way corner overlap correctly
    by construction instead of needing special-case corner logic. Pure
    torch/float throughout (no PIL round-trip, no precision loss).
    """
    import torch

    rects = layout["rects"]
    cols = int(layout["cols"])
    rows = int(layout["rows"])
    canvas_w = int(layout["canvas_w"])
    canvas_h = int(layout["canvas_h"])

    if tiles.shape[0] != len(rects):
        raise ValueError(
            f"FiL Tile Assembly: tiles batch has {tiles.shape[0]} image(s) but layout "
            f"expects {len(rects)} — keep the tile order/count unchanged after processing."
        )

    channels = tiles.shape[-1]
    canvas = torch.zeros((1, canvas_h, canvas_w, channels), dtype=tiles.dtype)
    weight = torch.zeros((1, canvas_h, canvas_w, 1), dtype=tiles.dtype)

    for idx, (sx, sy, ex, ey) in enumerate(rects):
        row, col = divmod(idx, cols)
        overlap_left = max(0, rects[idx - 1][2] - sx) if col > 0 else 0
        overlap_right = max(0, ex - rects[idx + 1][0]) if col < cols - 1 else 0
        overlap_top = max(0, rects[idx - cols][3] - sy) if row > 0 else 0
        overlap_bottom = max(0, ey - rects[idx + cols][1]) if row < rows - 1 else 0

        wx = _feather_ramp_1d(ex - sx, overlap_left, overlap_right, tiles.dtype)
        wy = _feather_ramp_1d(ey - sy, overlap_top, overlap_bottom, tiles.dtype)
        mask = (wy.view(-1, 1) * wx.view(1, -1)).unsqueeze(-1)  # [th, tw, 1]

        tile = tiles[idx, : ey - sy, : ex - sx, :]
        canvas[0, sy:ey, sx:ex, :] += tile * mask
        weight[0, sy:ey, sx:ex, :] += mask

    return canvas / torch.clamp(weight, min=1e-6)


def apply_upscale_model(image, upscale_model, target_w: int, target_h: int):
    """Run a loaded ESRGAN-style model over `image`, then resize the result to
    the exact tile-aligned target size. The model's own scale factor (e.g. 4x)
    rarely matches `target_w/target_h` (derived from `upscale_factor` + the
    64px tile-grid alignment), so a resize pass afterwards is required to keep
    the tile grid this module computes valid for the returned pixels.
    """
    import comfy.utils
    from comfy_extras.nodes_upscale_model import ImageUpscaleWithModel

    upscaled = ImageUpscaleWithModel.execute(upscale_model, image).result[0]
    samples = upscaled.movedim(-1, 1)
    resized = comfy.utils.common_upscale(samples, target_w, target_h, "lanczos", "disabled")
    return resized.movedim(1, -1)
