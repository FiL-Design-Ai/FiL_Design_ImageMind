import math

from comfy_api.latest import io

from ..common import tile_calc
from ..common.brand import CATEGORY_ROOT
from ..common.io_types import FilTileLayout
from ..common.localization import t as _t


class FiLUpscaleTileCalc(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLUpscaleTileCalc",
            display_name="🔍 Upscaler Advanced",
            category=f"{CATEGORY_ROOT}/Image",
            description="📐 FiL Upscale Tile Calc — computes optimal tile grid layout for upscaling. Supports auto-profile and manual grid.",
            inputs=[
                io.Image.Input("image", optional=True,
                                tooltip=_t("utc_image", "Input image to analyze. Optional if latent is connected instead — at least one of image/latent is required; source dimensions come from whichever is connected.")),
                io.UpscaleModel.Input("upscale_model", optional=True,
                                       tooltip=_t("utc_upscale_model", "Optional ESRGAN-style model. When connected, the image output is actually upscaled through it (then resized to the tile-aligned target). When left unconnected, image is passed through unchanged and this node is calculator-only.")),
                io.Latent.Input("latent", optional=True,
                                 tooltip=_t("utc_latent", "Optional latent to resize/tile alongside (or instead of) the image. When connected, the latent output is resized (bislerp) to the tile-aligned target and latent_tiles gets one crop per tile. Can stand in for image entirely — at least one of image/latent is required.")),
                io.Float.Input("upscale_factor", default=2.0, min=0.1, max=8.0, step=0.25, display_mode=io.NumberDisplay.slider, tooltip=_t("utc_factor", "Upscale multiplier.")),
                io.Int.Input("tile_size", default=1024, min=64, max=2048, step=64, tooltip=_t("utc_tile_size", "Base tile size.")),
                io.Int.Input("tile_overlap", default=64, min=0, max=512, step=8, tooltip=_t("utc_overlap", "Tile overlap.")),
                io.Boolean.Input("auto_overlap", default=False, label_on="Auto ON", label_off="Auto OFF", advanced=True,
                                  tooltip=_t("utc_auto_overlap", "Ignore tile_overlap and derive it automatically from the tile size (~12.5%, min 32px) instead — keeps overlap proportional when you change tile_size. No effect when Full Auto is on (it already derives its own overlap).")),
                io.Boolean.Input("auto_mode", default=False, label_on="Full Auto", label_off="Manual Tiles", advanced=True,
                                  tooltip=_t("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile.")),
                io.Combo.Input("auto_profile", options=tile_calc.AUTO_PROFILES, default="Balanced", advanced=True,
                               tooltip=_t("utc_auto_profile", "VRAM/quality profile used when Full Auto is on.")),
                io.Int.Input("manual_tile_cols", default=0, min=0, max=64, advanced=True,
                             tooltip=_t("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")),
                io.Int.Input("manual_tile_rows", default=0, min=0, max=64, advanced=True,
                             tooltip=_t("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")),
                io.Boolean.Input("non_square_tiles", default=False, label_on="Non-Square", label_off="Square", advanced=True,
                                  tooltip=_t("utc_non_square", "Allow rectangular tiles instead of forcing square ones.")),
                io.Boolean.Input("auto_fix_thin_edges", default=False, label_on="Auto-fix ON", label_off="Auto-fix OFF", advanced=True,
                                  tooltip=_t("utc_auto_fix_edges", "In Manual Tiles mode, shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile. Does not affect an explicit manual column/row grid.")),
            ],
            outputs=[
                io.Image.Output(display_name="image", tooltip="Actually upscaled when upscale_model is connected, otherwise the input image passed through unchanged. Empty placeholder when no image is connected (latent-only mode)."),
                io.Image.Output(display_name="tiles", tooltip="Batch of the actual cropped tile pieces (edge tiles shifted inward to stay full-size, no black padding). Empty placeholder when no image is connected (latent-only mode)."),
                io.Float.Output(display_name="upscale_by", tooltip="Actual upscale ratio."),
                io.Float.Output(display_name="denoise", tooltip="Denoise hint."),
                io.Int.Output(display_name="tile_width", tooltip="Tile width."),
                io.Int.Output(display_name="tile_height", tooltip="Tile height."),
                io.Int.Output(display_name="mask_blur", tooltip="Mask blur radius."),
                io.Int.Output(display_name="tile_padding", tooltip="Tile padding."),
                io.Float.Output(display_name="overlap", tooltip="Effective tile overlap in pixels (after clamping/auto-profile) — the average of the per-axis overlap, which can be a fractional pixel when axes differ (non_square_tiles)."),
                io.Int.Output(display_name="width", tooltip="Output width."),
                io.Int.Output(display_name="height", tooltip="Output height."),
                io.Int.Output(display_name="tile_cols", tooltip="Tile columns."),
                io.Int.Output(display_name="tile_rows", tooltip="Tile rows."),
                io.Int.Output(display_name="tile_count", tooltip="Total tile count."),
                io.Int.Output(display_name="latent_w", tooltip="Latent width."),
                io.Int.Output(display_name="latent_h", tooltip="Latent height."),
                io.String.Output(display_name="info", tooltip="Info string."),
                io.String.Output(display_name="warnings", tooltip="Warnings string."),
                # Appended at the end (not next to image/tiles) so existing
                # saved workflows keep every current output at its same slot
                # index — inserting earlier would silently rewire connections
                # on reload.
                io.Latent.Output(display_name="latent", tooltip="Input latent resized to the tile-aligned target (bislerp). Empty placeholder when no latent is connected."),
                io.Latent.Output(display_name="latent_tiles", tooltip="Batch of latent crops, one per image tile (same grid/order as `tiles`). Empty placeholder when no latent is connected."),
                FilTileLayout.Output(display_name="layout", tooltip="Tile-grid layout (exact per-tile positions) — wire into FiL Tile Assembly to recombine processed tiles. Always the real computed grid, independent of image/latent connection."),
            ],
            search_aliases=["upscale", "tile", "grid", "calculator", "SD upscale", "tile calc"],
        )

    @classmethod
    def execute(cls, image=None, upscale_factor=2.0, tile_size=1024, tile_overlap=64, upscale_model=None, latent=None,
                auto_overlap=False,
                auto_mode=False, auto_profile="Balanced", manual_tile_cols=0, manual_tile_rows=0,
                non_square_tiles=False,
                auto_fix_thin_edges=False) -> io.NodeOutput:
        if image is None and latent is None:
            raise ValueError("FiL Upscale: connect at least one of `image` or `latent`.")
        if image is not None:
            _, oh, ow, _ = image.shape
            ow, oh = int(ow), int(oh)
        else:
            # Latent-only mode: source dimensions come from the latent's own
            # spatial size (8x the sample tensor's H/W) instead of an image.
            lsamples = latent["samples"]
            oh, ow = int(lsamples.shape[-2]) * 8, int(lsamples.shape[-1]) * 8
        actual_scale = upscale_factor
        aw = tile_calc.align(ow * actual_scale, 64, "ceil")
        ah = tile_calc.align(oh * actual_scale, 64, "ceil")
        lw, lh = aw // 8, ah // 8
        if image is not None and upscale_model is not None:
            out_image = tile_calc.apply_upscale_model(image, upscale_model, aw, ah)
        elif image is not None:
            out_image = image
        else:
            out_image = None
        mc = int(manual_tile_cols or 0)
        mr = int(manual_tile_rows or 0)
        mg_req = mc > 0 or mr > 0
        mg_full = not auto_mode and mc > 0 and mr > 0
        mg_partial_cols = not auto_mode and mc > 0 and mr == 0
        mg_partial_rows = not auto_mode and mr > 0 and mc == 0
        mg_act = mg_full or mg_partial_cols or mg_partial_rows
        profile_summary = ""
        auto_fix_noop = False
        if auto_mode:
            ats = tile_calc.compute_auto_tile_settings(ow, oh, aw, ah, actual_scale, auto_profile, non_square_tiles)
            tw, th = ats.tile_w, ats.tile_h
            eff_ov = ats.effective_overlap
            denoise = ats.denoise_hint
            auto_adj = ats.adjusted_from
            profile_summary = ats.profile_summary
        else:
            auto_adj = 0
            if mg_full:
                base_tw = max(64, min(math.ceil(math.ceil(aw / mc) / 8.0) * 8, 8192))
                base_th = max(64, min(math.ceil(math.ceil(ah / mr) / 8.0) * 8, 8192))
                eff_ov = tile_calc.compute_auto_overlap(min(base_tw, base_th)) if auto_overlap else tile_overlap
                eff_ov = min(eff_ov, base_tw // 2, base_th // 2)
                # Grow the tile past the naive edge-to-edge size so cols/rows
                # keep EXACTLY the requested count while genuinely sharing
                # `eff_ov` px with their neighbour — see tile_size_for_count's
                # docstring for why edge-to-edge (0 shared px) leaves nothing
                # for a downstream sampler to blend across.
                tw = tile_calc.tile_size_for_count(aw, mc, eff_ov)
                th = tile_calc.tile_size_for_count(ah, mr, eff_ov)
            elif mg_partial_cols:
                base_tw = max(64, min(math.ceil(math.ceil(aw / mc) / 8.0) * 8, 8192))
                base_th = tile_calc.compute_tile_dimensions(tile_size, ow, oh, True)[1] if non_square_tiles else base_tw
                eff_ov = tile_calc.compute_auto_overlap(min(base_tw, base_th)) if auto_overlap else tile_overlap
                eff_ov = min(eff_ov, base_tw // 2, base_th // 2)
                tw = tile_calc.tile_size_for_count(aw, mc, eff_ov)
                th = tile_calc.compute_tile_dimensions(tile_size, ow, oh, True)[1] if non_square_tiles else tw
            elif mg_partial_rows:
                base_th = max(64, min(math.ceil(math.ceil(ah / mr) / 8.0) * 8, 8192))
                base_tw = tile_calc.compute_tile_dimensions(tile_size, ow, oh, True)[0] if non_square_tiles else base_th
                eff_ov = tile_calc.compute_auto_overlap(min(base_tw, base_th)) if auto_overlap else tile_overlap
                eff_ov = min(eff_ov, base_tw // 2, base_th // 2)
                th = tile_calc.tile_size_for_count(ah, mr, eff_ov)
                tw = tile_calc.compute_tile_dimensions(tile_size, ow, oh, True)[0] if non_square_tiles else th
            else:
                resolved_tile_size = tile_size
                if auto_fix_thin_edges:
                    resolved_tile_size = tile_calc.choose_edge_safe_tile(aw, ah, tile_size)
                    if resolved_tile_size != tile_size:
                        auto_adj = tile_size
                    else:
                        # Requested but couldn't shrink — tile_size is already
                        # the smallest standard size (512), so there's nothing
                        # to step down to. Flag it so we can explain in `info`
                        # instead of silently doing nothing (see below).
                        auto_fix_noop = True
                tw, th = tile_calc.compute_tile_dimensions(resolved_tile_size, ow, oh, non_square_tiles)
                # auto_overlap derives overlap from the ACTUAL tw/th (post
                # non_square_tiles split), not the raw tile_size widget —
                # min(tw, th) keeps it safe for elongated non-square tiles
                # too (never exceeds the shorter axis's own proportion).
                eff_ov = tile_calc.compute_auto_overlap(min(tw, th)) if auto_overlap else tile_overlap
            denoise = tile_calc.compute_denoise_hint(actual_scale)
        # Cap overlap at half the tile size per axis: standard tiled-upscale
        # practice rarely exceeds ~50%, and without this an overlap close to
        # tw/th (the old `tw - 8` bound let it reach ~100%) collapses the
        # grid step to a handful of px and explodes the tile count — 486
        # tiles instead of ~15 was observed at overlap=400 on a 384px tile
        # before this cap.
        sov = min(eff_ov, tw // 2)
        soh = min(eff_ov, th // 2)
        # Overlap genuinely shifts the grid step — per axis (sov/soh, each
        # already clamped to half its own axis: tw//2 / th//2), not a single
        # shared number: with non_square_tiles a wide/short tile can have
        # sov >> soh, and stepping both axes by one shared value could still
        # exceed the short axis and collapse its step toward 1px. An explicit
        # manual grid (mg_act) already had tw/th grown by tile_size_for_count
        # above to keep the requested cols/rows count exact even with this
        # real per-axis overlap applied.
        layout = tile_calc.compute_layout(aw, ah, tw, th, sov, soh)
        # Reported AFTER compute_layout, from its actual (evenly-redistributed
        # — see its docstring) step, not the pre-redistribution sov/soh: those
        # are only the NOMINAL request used to derive cols/rows, and the real
        # per-gap step compute_layout ends up using can differ from it once
        # the grid needs redistributing to avoid dumping the whole remainder
        # on the last tile. Reporting the stale nominal number here would
        # silently mismatch the geometry actually used for the tiles.
        eff_overlap = ((tw - layout.step_w) + (th - layout.step_h)) / 2
        tp = tile_calc.compute_tile_padding(tw, th)
        mb = tile_calc.compute_mask_blur(tp, eff_overlap)
        # "Thin edge" is about tw/th's fit against aw/ah with NO overlap — a
        # signal that the chosen tile_size doesn't divide evenly. Recomputed
        # independently from `layout`, since layout.tile_cols/tile_rows are
        # now the overlap-aware tile count (a different, larger count once
        # overlap > 0) and every tile it produces is already full-size by
        # construction (see compute_layout) — never actually thin.
        naive_cols = max(1, math.ceil(aw / tw))
        naive_rows = max(1, math.ceil(ah / th))
        re = aw - ((naive_cols - 1) * tw) if naive_cols > 1 else aw
        be = ah - ((naive_rows - 1) * th) if naive_rows > 1 else ah
        warn = []
        if auto_mode and mg_req:
            warn.append("Manual tile grid ignored because Full Auto is active")
        if auto_mode and auto_overlap:
            warn.append("Auto overlap ignored because Full Auto already derives its own overlap")
        if mg_partial_cols:
            warn.append("Manual cols set — rows computed automatically")
        if mg_partial_rows:
            warn.append("Manual rows set — cols computed automatically")
        if mg_act and not non_square_tiles and tw != th:
            # mg_full computes tw/th independently per axis from their own
            # cols/rows count (ignores non_square_tiles entirely — see the
            # branch above), so an explicit cols != rows grid can produce a
            # rectangular tile even with Square mode selected. That's a real
            # mode-contract surprise regardless of overlap, so it always
            # warns (unlike the non-standard-SIZE check below, which only
            # matters when the tile is otherwise square).
            warn.append(f"Manual grid produced a non-square tile {tw}x{th}px despite Square mode (cols/rows counts don't divide into equal axes)")
        elif mg_act and not non_square_tiles and eff_ov <= 0 and not tile_calc.is_standard_quality_tile(tw, th):
            # Only flag this for a zero-overlap grid — once eff_ov > 0 the
            # tile was deliberately grown past a "standard" size by
            # tile_size_for_count to fit real overlap, that's expected, not
            # a warning-worthy surprise.
            warn.append(f"Manual grid produced non-standard tile {tw}x{th}px")
        if eff_ov == 0:
            warn.append("Zero padding/blend basis — tile seams likely")
        if tw < 256 or th < 256:
            warn.append(f"Tile {tw}x{th}px too small for SDXL/DiT (min 256px)")
        if aw <= tw and ah <= th:
            warn.append("Single tile covers full image")
        thin_edges = []
        if naive_cols > 1 and re < max(256, int(tw * 0.25)):
            thin_edges.append(f"right {re}px of {tw}px")
        if naive_rows > 1 and be < max(256, int(th * 0.25)):
            thin_edges.append(f"bottom {be}px of {th}px")
        if thin_edges:
            warn.append(f"Thin edge tile: {', '.join(thin_edges)}")
        if tp in (16, 128):
            warn.append(f"Tile padding clamped to {tp}px")
        if out_image is not None:
            tiles_batch = tile_calc.crop_tiles(out_image, aw, ah, layout, tw, th)
        else:
            out_image = tile_calc.blank_preview(8, 8)
            tiles_batch = tile_calc.blank_preview(8, 8)
        if latent is not None:
            out_latent = tile_calc.apply_latent_resize(latent, lw, lh)
            latent_tiles_batch = tile_calc.crop_latent_tiles(out_latent, lw, lh, layout, tw // 8, th // 8)
        else:
            out_latent = tile_calc.blank_latent()
            latent_tiles_batch = tile_calc.blank_latent()
        mode_str = f"Manual{' + Full Auto' if auto_mode else ''}{' + Grid' if mg_act else ''}"
        info = (
            f"Tile Upscale Calculator v2\n"
            f"Original: {ow}x{oh} ({ow*oh/1e6:.2f}MP) | Target: {aw}x{ah} ({aw*ah/1e6:.2f}MP)\n"
            f"Scale: {actual_scale:.3f} | Mode: {mode_str}\n"
            f"Tiles: {tw}x{th} | Grid: {layout.tile_cols}x{layout.tile_rows}={layout.tile_count}\n"
            f"Overlap: {eff_overlap:g} | Padding: {tp} | MaskBlur: {mb} | Denoise: {denoise}\n"
            f"Latent: {lw}x{lh}"
        )
        if auto_mode:
            info += f"\nProfile: {profile_summary}"
        if auto_adj:
            info += f"\nAuto: tile_size adjusted from {auto_adj} to avoid thin edge"
        if auto_fix_noop and thin_edges:
            info += (f"\nAuto-fix: tile already at min standard {tile_size}px — thin edge "
                     f"handled by overlap/mask_blur downstream, not by shrinking")
        warn_str = "\n".join(warn) if warn else "No warnings"
        layout_dict = {
            "rects": layout.tile_rects,
            "cols": layout.tile_cols,
            "rows": layout.tile_rows,
            "canvas_w": aw,
            "canvas_h": ah,
        }
        return io.NodeOutput(out_image, tiles_batch, actual_scale, denoise, tw, th, mb, tp, eff_overlap, aw, ah,
                             layout.tile_cols, layout.tile_rows, layout.tile_count,
                             lw, lh, info, warn_str, out_latent, latent_tiles_batch, layout_dict)
