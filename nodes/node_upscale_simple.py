from comfy_api.latest import io

from .node_upscale import FiLUpscaleTileCalc
from ..common import tile_calc
from ..common.brand import CATEGORY_IMAGE
from ..common.io_types import FilTileLayout
from ..common.localization import t as _t


class FiLUpscaleSimple(io.ComfyNode):
    """Sibling of FiLUpscaleTileCalc with the same tiling widget panel.
    Delegates entirely to FiLUpscaleTileCalc.execute() — no duplicated
    tiling logic, one source of truth for the math.
    """

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLUpscaleSimple",
            display_name="🔍 Upscaler Simple",
            category=CATEGORY_IMAGE,
            description="📐 FiL Upscale Simple — upscale + tile an image (or latent) through a model.",
            inputs=[
                io.Image.Input("image", optional=True,
                               tooltip=_t("upl_image", "Input image to upscale. Optional if latent is connected instead — at least one of image/latent is required.")),
                io.UpscaleModel.Input("upscale_model", optional=True,
                                      tooltip=_t("upl_model", "ESRGAN-style upscale model. Only applies when image is connected — has no effect in latent-only mode.")),
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
                io.Image.Output(display_name="image", tooltip="Upscaled through the model, resized to the tile-aligned target. Empty placeholder when no image is connected (latent-only mode)."),
                io.Image.Output(display_name="tiles", tooltip="Batch of the actual cropped tile pieces (edge tiles shifted inward to stay full-size, no black padding). Empty placeholder when no image is connected (latent-only mode)."),
                io.Latent.Output(display_name="latent", tooltip="Input latent resized to the tile-aligned target (bislerp). Empty placeholder when no latent is connected."),
                io.Latent.Output(display_name="latent_tiles", tooltip="Batch of latent crops, one per image tile (same grid/order as `tiles`). Empty placeholder when no latent is connected."),
                FilTileLayout.Output(display_name="layout", tooltip="Tile-grid layout (exact per-tile positions) — wire into FiL Tile Assembly to recombine processed tiles."),
            ],
            search_aliases=["upscale", "tile", "simple", "SD upscale"],
        )

    @classmethod
    def execute(cls, image=None, upscale_model=None, upscale_factor=2.0, tile_size=1024, tile_overlap=64, latent=None,
                auto_overlap=False,
                auto_mode=False, auto_profile="Balanced", manual_tile_cols=0, manual_tile_rows=0,
                non_square_tiles=False, auto_fix_thin_edges=False) -> io.NodeOutput:
        result = FiLUpscaleTileCalc.execute(
            image=image,
            upscale_model=upscale_model,
            upscale_factor=upscale_factor,
            tile_size=tile_size,
            tile_overlap=tile_overlap,
            latent=latent,
            auto_overlap=auto_overlap,
            auto_mode=auto_mode,
            auto_profile=auto_profile,
            manual_tile_cols=manual_tile_cols,
            manual_tile_rows=manual_tile_rows,
            non_square_tiles=non_square_tiles,
            auto_fix_thin_edges=auto_fix_thin_edges,
        )
        return io.NodeOutput(result[0], result[1], result[18], result[19], result[20])
