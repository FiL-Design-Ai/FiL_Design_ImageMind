import math
from dataclasses import dataclass
from typing import List, Tuple

import numpy as np

try:
    from PIL import Image, ImageDraw, ImageFont
    _PIL_OK = True
except ImportError:
    _PIL_OK = False

from comfy_api.latest import io

from ..common.localization import t as _t


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


class FiLUpscaleTileCalc(io.ComfyNode):
    _STANDARD_SIZES = [1536, 1024, 768, 512]
    _AUTO_PROFILES = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"]

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLUpscaleTileCalc",
            display_name="FiL Upscale Tile Calc",
            category="FiL_LLM/Image/Upscale",
            description="📐 FiL Upscale Tile Calc — computes optimal tile grid layout for upscaling. Supports auto-profile, manual grid, and MP cap.",
            inputs=[
                io.Image.Input("image", tooltip=_t("utc_image", "Input image to analyze.")),
                io.Float.Input("upscale_factor", default=2.0, min=0.1, max=8.0, step=0.25, display_mode=io.NumberDisplay.slider, tooltip=_t("utc_factor", "Upscale multiplier.")),
                io.Int.Input("tile_size", default=512, min=64, max=2048, step=64, tooltip=_t("utc_tile_size", "Base tile size.")),
                io.Int.Input("tile_overlap", default=64, min=0, max=512, step=8, tooltip=_t("utc_overlap", "Tile overlap.")),
                io.Boolean.Input("auto_mode", default=False, label_on="Full Auto", label_off="Manual Tiles", advanced=True,
                                  tooltip=_t("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile.")),
                io.Combo.Input("auto_profile", options=cls._AUTO_PROFILES, default="Balanced", advanced=True,
                               tooltip=_t("utc_auto_profile", "VRAM/quality profile used when Full Auto is on.")),
                io.Int.Input("manual_tile_cols", default=0, min=0, max=64, advanced=True,
                             tooltip=_t("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")),
                io.Int.Input("manual_tile_rows", default=0, min=0, max=64, advanced=True,
                             tooltip=_t("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")),
                io.Float.Input("max_megapixels", default=0.0, min=0.0, max=64.0, step=0.5, advanced=True,
                               tooltip=_t("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap.")),
                io.Boolean.Input("non_square_tiles", default=False, label_on="Non-Square", label_off="Square", advanced=True,
                                  tooltip=_t("utc_non_square", "Allow rectangular tiles instead of forcing square ones.")),
                io.Boolean.Input("show_grid_preview", default=True, label_on="Preview ON", label_off="Preview OFF", advanced=True,
                                  tooltip=_t("utc_show_grid", "Render a tile-grid overlay on the preview output.")),
            ],
            outputs=[
                io.Image.Output(display_name="image", tooltip="Passthrough input image."),
                io.Image.Output(display_name="tile_grid_preview", tooltip="Tile grid preview overlay."),
                io.Float.Output(display_name="upscale_by", tooltip="Actual upscale ratio."),
                io.Float.Output(display_name="denoise", tooltip="Denoise hint."),
                io.Int.Output(display_name="tile_width", tooltip="Tile width."),
                io.Int.Output(display_name="tile_height", tooltip="Tile height."),
                io.Int.Output(display_name="mask_blur", tooltip="Mask blur radius."),
                io.Int.Output(display_name="tile_padding", tooltip="Tile padding."),
                io.Int.Output(display_name="overlap", tooltip="Effective tile overlap (after clamping/auto-profile)."),
                io.Int.Output(display_name="width", tooltip="Output width."),
                io.Int.Output(display_name="height", tooltip="Output height."),
                io.Int.Output(display_name="tile_cols", tooltip="Tile columns."),
                io.Int.Output(display_name="tile_rows", tooltip="Tile rows."),
                io.Int.Output(display_name="tile_count", tooltip="Total tile count."),
                io.Int.Output(display_name="latent_w", tooltip="Latent width."),
                io.Int.Output(display_name="latent_h", tooltip="Latent height."),
                io.String.Output(display_name="info", tooltip="Info string."),
                io.String.Output(display_name="warnings", tooltip="Warnings string."),
            ],
            search_aliases=["upscale", "tile", "grid", "calculator", "SD upscale", "tile calc"],
        )

    @staticmethod
    def _align(val: float, grid: int, mode: str) -> int:
        if mode == "ceil":
            r = math.ceil(val / grid) * grid
        elif mode == "floor":
            r = math.floor(val / grid) * grid
        else:
            r = round(val / grid) * grid
        return max(grid, r)

    @staticmethod
    def _blank_preview(w, h):
        arr = np.zeros((1, max(8, h), max(8, w), 3), dtype=np.float32)
        try:
            import torch
            return torch.from_numpy(arr)
        except ImportError:
            return arr

    @staticmethod
    def _compute_tile_dimensions(base_tile_size, ow, oh, non_square):
        if not non_square:
            return base_tile_size, base_tile_size
        ar = ow / oh
        if ar >= 1.0:
            tw = max(64, round(base_tile_size * math.sqrt(ar) / 8) * 8)
            th = max(64, round(base_tile_size / math.sqrt(ar) / 8) * 8)
        else:
            th = max(64, round(base_tile_size / math.sqrt(ar) / 8) * 8)
            tw = max(64, round(base_tile_size * math.sqrt(ar) / 8) * 8)
        return tw, th

    @staticmethod
    def _has_thin_edge(aw, ah, tw, th):
        cols = max(1, math.ceil(aw / tw))
        rows = max(1, math.ceil(ah / th))
        re = aw - ((cols - 1) * tw) if cols > 1 else aw
        be = ah - ((rows - 1) * th) if rows > 1 else ah
        return (cols > 1 and re < max(256, int(tw * 0.25))) or (rows > 1 and be < max(256, int(th * 0.25)))

    @classmethod
    def _choose_edge_safe_tile(cls, aw, ah, preferred):
        candidates = [s for s in cls._STANDARD_SIZES if s <= preferred]
        if preferred not in candidates:
            candidates.insert(0, preferred)
        for c in candidates:
            if not cls._has_thin_edge(aw, ah, c, c):
                return c
        return preferred

    @staticmethod
    def _is_standard_quality_tile(tw: int, th: int) -> bool:
        return tw == th and tw in {512, 768, 1024, 1536}

    @staticmethod
    def _compute_denoise_hint(scale):
        return round(max(0.10, min(0.24, 0.10 + (scale - 1.0) * 0.04)), 2)

    @staticmethod
    def _compute_tile_padding(tw, th):
        base = min(tw, th)
        ratio = 0.073 if 640 < base <= 896 else 0.0625
        tp = round((base * ratio) / 8.0) * 8
        return max(16, min(tp, 128))

    @staticmethod
    def _compute_mask_blur(tp, ov):
        if ov <= 0:
            return 0
        raw = max(tp * 0.5, ov * 0.25)
        mb = round(raw / 4.0) * 4
        return int(max(8, min(mb, 24)))

    @classmethod
    def _compute_auto_tile_settings(cls, ow, oh, aw, ah, actual_scale, auto_profile, non_square_enabled=False):
        profiles = {
            "Low VRAM": {"tile_size": 512, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.16, "summary": "Compact square tiles"},
            "Balanced": {"tile_size": 768, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.18, "summary": "Balanced square tiles"},
            "High VRAM": {"tile_size": 1024, "non_square": False, "overlap_bias": 1.0, "denoise_delta": 0.0, "denoise_cap": 0.22, "summary": "Larger square tiles"},
            "Max Quality": {"tile_size": 1024, "non_square": False, "overlap_bias": 1.5, "denoise_delta": 0.02, "denoise_cap": 0.24, "summary": "More padding/blend"},
            "Ultra Quality": {"tile_size": 1536, "non_square": False, "overlap_bias": 2.0, "denoise_delta": 0.02, "denoise_cap": 0.24, "summary": "Very large tiles"},
        }
        prof = profiles.get(auto_profile, profiles["Balanced"])
        preferred = prof["tile_size"]
        tile_size = cls._choose_edge_safe_tile(aw, ah, preferred)
        adjusted = preferred if tile_size != preferred else 0
        tw, th = cls._compute_tile_dimensions(tile_size, ow, oh, prof.get("non_square", False) or non_square_enabled)
        base_ov = max(32, round(tile_size / 64.0) * 8)
        eff_ov = round((base_ov * prof["overlap_bias"]) / 8) * 8
        eff_ov = max(32, min(eff_ov, min(tw, th) - 8))
        denoise = cls._compute_denoise_hint(actual_scale)
        denoise = min(prof["denoise_cap"], denoise + prof["denoise_delta"])
        denoise = round(max(0.10, min(0.24, denoise)), 2)
        return AutoTileSettings(tile_size, tw, th, eff_ov, denoise, prof["summary"], adjusted)

    @staticmethod
    def _compute_layout(aw, ah, tw, th):
        step_w, step_h = tw, th
        cols = max(1, math.ceil(aw / step_w))
        rows = max(1, math.ceil(ah / step_h))
        rects = []
        for row in range(rows):
            sy = row * step_h
            ey = min(sy + th, ah)
            for col in range(cols):
                sx = col * step_w
                ex = min(sx + tw, aw)
                rects.append((sx, sy, ex, ey))
        return TileLayout(step_w, step_h, cols, rows, cols * rows, rects)

    @staticmethod
    def _render_preview(image, aw, ah, tw, th, layout):
        if not _PIL_OK:
            return FiLUpscaleTileCalc._blank_preview(aw, ah)
        try:
            if hasattr(image, "cpu"):
                np_img = (image[0].cpu().numpy() * 255).clip(0, 255).astype(np.uint8)
            else:
                np_img = (np.array(image[0]) * 255).clip(0, 255).astype(np.uint8)
            pil = Image.fromarray(np_img).convert("RGB").resize((aw, ah), Image.LANCZOS)
            ov = Image.new("RGBA", (aw, ah), (0, 0, 0, 0))
            draw = ImageDraw.Draw(ov)
            bw = 8
            vert = {0, aw - 1}
            vert.update(c * layout.step_w for c in range(1, layout.tile_cols))
            hor = {0, ah - 1}
            hor.update(r * layout.step_h for r in range(1, layout.tile_rows))
            for x in sorted(vert):
                s = max(0, min(x - bw // 2, aw - bw))
                e = min(aw - 1, s + bw - 1)
                draw.rectangle([(s, 0), (e, ah - 1)], fill=(255, 48, 48, 255))
            for y in sorted(hor):
                s = max(0, min(y - bw // 2, ah - bw))
                e = min(ah - 1, s + bw - 1)
                draw.rectangle([(0, s), (aw - 1, e)], fill=(255, 48, 48, 255))
            draw_rgb = ImageDraw.Draw(pil.convert("RGB"))
            if layout.tile_count <= 64:
                tile_font_size = max(14, min(36, int(min(tw, th) * 0.045)))
                try:
                    tile_font = ImageFont.truetype("arial.ttf", tile_font_size)
                except OSError:
                    try:
                        tile_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", tile_font_size)
                    except OSError:
                        tile_font = ImageFont.load_default()
                for idx, (x0, y0, x1, y1) in enumerate(layout.tile_rects, start=1):
                    n = str(idx)
                    nl, nt, nr, nb = draw_rgb.textbbox((0, 0), n, font=tile_font)
                    tw_text = nr - nl
                    th_text = nb - nt
                    cx = x0 + max(1, x1 - x0) // 2
                    cy = y0 + max(1, y1 - y0) // 2
                    po = (cx - tw_text // 2, cy - th_text // 2)
                    pd = max(4, tile_font_size // 4)
                    draw_rgb.rounded_rectangle(
                        (po[0] - pd, po[1] - pd, po[0] + tw_text + pd, po[1] + th_text + pd),
                        radius=max(4, tile_font_size // 4), fill=(8, 12, 18), outline=(255, 48, 48), width=max(1, tile_font_size // 12),
                    )
                    draw_rgb.text(po, n, fill=(255, 245, 245), font=tile_font)
            merged = Image.alpha_composite(pil.convert("RGBA"), ov).convert("RGB")
            arr = np.array(merged).astype(np.float32) / 255.0
            try:
                import torch
                return torch.from_numpy(arr).unsqueeze(0)
            except ImportError:
                return arr[np.newaxis]
        except Exception:
            return FiLUpscaleTileCalc._blank_preview(aw, ah)

    @classmethod
    def execute(cls, image, upscale_factor, tile_size, tile_overlap, auto_mode=False,
                auto_profile="Balanced", manual_tile_cols=0, manual_tile_rows=0,
                max_megapixels=0.0, non_square_tiles=False,
                show_grid_preview=True) -> io.NodeOutput:
        _, oh, ow, _ = image.shape
        ow, oh = int(ow), int(oh)
        rw, rh = ow * upscale_factor, oh * upscale_factor
        mp_cap = False
        mp_before = (rw * rh) / 1e6
        if max_megapixels > 0.0:
            max_px = max_megapixels * 1e6
            cp = rw * rh
            if cp > max_px:
                sd = math.sqrt(max_px / cp)
                rw *= sd
                rh *= sd
                mp_cap = True
        actual_scale = math.sqrt((rw * rh) / (ow * oh))
        aw = cls._align(ow * actual_scale, 64, "ceil")
        ah = cls._align(oh * actual_scale, 64, "ceil")
        lw, lh = aw // 8, ah // 8
        mc = int(manual_tile_cols or 0)
        mr = int(manual_tile_rows or 0)
        mg_req = mc > 0 or mr > 0
        mg_full = not auto_mode and mc > 0 and mr > 0
        mg_partial_cols = not auto_mode and mc > 0 and mr == 0
        mg_partial_rows = not auto_mode and mr > 0 and mc == 0
        mg_act = mg_full or mg_partial_cols or mg_partial_rows
        profile_summary = ""
        if auto_mode:
            ats = cls._compute_auto_tile_settings(ow, oh, aw, ah, actual_scale, auto_profile, non_square_tiles)
            tw, th = ats.tile_w, ats.tile_h
            eff_ov = ats.effective_overlap
            denoise = ats.denoise_hint
            auto_adj = ats.adjusted_from
            profile_summary = ats.profile_summary
        else:
            auto_adj = 0
            if mg_full:
                tw = math.ceil(aw / mc)
                th = math.ceil(ah / mr)
                tw = math.ceil(tw / 8.0) * 8
                th = math.ceil(th / 8.0) * 8
                tw = max(64, min(tw, 8192))
                th = max(64, min(th, 8192))
            elif mg_partial_cols:
                tw = math.ceil(aw / mc)
                tw = max(64, min(math.ceil(tw / 8.0) * 8, 8192))
                th = cls._compute_tile_dimensions(tile_size, ow, oh, True)[1] if non_square_tiles else tw
            elif mg_partial_rows:
                th = math.ceil(ah / mr)
                th = max(64, min(math.ceil(th / 8.0) * 8, 8192))
                tw = cls._compute_tile_dimensions(tile_size, ow, oh, True)[0] if non_square_tiles else th
            else:
                tw, th = cls._compute_tile_dimensions(tile_size, ow, oh, non_square_tiles)
            eff_ov = tile_overlap
            denoise = cls._compute_denoise_hint(actual_scale)
        sov = min(eff_ov, tw - 8)
        soh = min(eff_ov, th - 8)
        eff_overlap = int((sov + soh) / 2)
        layout = cls._compute_layout(aw, ah, tw, th)
        tp = cls._compute_tile_padding(tw, th)
        mb = cls._compute_mask_blur(tp, eff_overlap)
        re = aw - ((layout.tile_cols - 1) * tw) if layout.tile_cols > 1 else aw
        be = ah - ((layout.tile_rows - 1) * th) if layout.tile_rows > 1 else ah
        warn = []
        if auto_mode and mg_req:
            warn.append("Manual tile grid ignored because Full Auto is active")
        if mg_partial_cols:
            warn.append("Manual cols set — rows computed automatically")
        if mg_partial_rows:
            warn.append("Manual rows set — cols computed automatically")
        if mg_act and not cls._is_standard_quality_tile(tw, th):
            warn.append(f"Manual grid produced non-standard tile {tw}x{th}px")
        if eff_ov == 0:
            warn.append("Zero padding/blend basis — tile seams likely")
        if tw < 256 or th < 256:
            warn.append(f"Tile {tw}x{th}px too small for SDXL/DiT (min 256px)")
        if aw <= tw and ah <= th:
            warn.append("Single tile covers full image")
        thin_edges = []
        if layout.tile_cols > 1 and re < max(256, int(tw * 0.25)):
            thin_edges.append(f"right {re}px of {tw}px")
        if layout.tile_rows > 1 and be < max(256, int(th * 0.25)):
            thin_edges.append(f"bottom {be}px of {th}px")
        if thin_edges:
            warn.append(f"Thin edge tile: {', '.join(thin_edges)}")
        if mp_cap:
            warn.append(f"MP cap applied: {mp_before:.2f} MP -> {max_megapixels:.1f} MP")
        if tp in (16, 128):
            warn.append(f"Tile padding clamped to {tp}px")
        if show_grid_preview:
            prev = cls._render_preview(image, aw, ah, tw, th, layout)
        else:
            prev = cls._blank_preview(aw, ah)
        mode_str = f"Manual{' + Full Auto' if auto_mode else ''}{' + Grid' if mg_act else ''}"
        info = (
            f"Tile Upscale Calculator v2\n"
            f"Original: {ow}x{oh} ({ow*oh/1e6:.2f}MP) | Target: {aw}x{ah} ({aw*ah/1e6:.2f}MP)\n"
            f"Scale: {actual_scale:.3f} | Mode: {mode_str}\n"
            f"Tiles: {tw}x{th} | Grid: {layout.tile_cols}x{layout.tile_rows}={layout.tile_count}\n"
            f"Overlap: {eff_overlap} | Padding: {tp} | MaskBlur: {mb} | Denoise: {denoise}\n"
            f"Latent: {lw}x{lh}"
        )
        if auto_mode:
            info += f"\nProfile: {profile_summary}"
        if auto_adj:
            info += f"\nAuto: tile_size adjusted from {auto_adj} to avoid thin edge"
        warn_str = "\n".join(warn) if warn else "No warnings"
        return io.NodeOutput(image, prev, actual_scale, denoise, tw, th, mb, tp, eff_overlap, aw, ah,
                             layout.tile_cols, layout.tile_rows, layout.tile_count,
                             lw, lh, info, warn_str)
