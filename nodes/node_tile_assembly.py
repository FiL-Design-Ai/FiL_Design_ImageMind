"""FiL Tile Assembly — recombines a batch of independently processed tiles
back into one image.

Pairs with FiLUpscaleTileCalc/FiLUpscaleSimple's `layout` output: that output
carries the exact per-tile positions from `tile_calc.compute_layout()`, so
this node doesn't re-derive any grid math — it just feathers the real overlap
zones (see `tile_calc.assemble_tiles`) and pastes.
"""

from comfy_api.latest import io

from ..common import tile_calc
from ..common.brand import CATEGORY_IMAGE
from ..common.io_types import FilTileLayout
from ..common.localization import t as _t

try:
    from nodes import PreviewImage as _PreviewImageV1

    _preview_saver = _PreviewImageV1()
except Exception:  # pragma: no cover
    _preview_saver = None


class FiLTileAssembly(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLTileAssembly",
            display_name="🧩 Tile Assembly",
            category=CATEGORY_IMAGE,
            description="🧩 FiL Tile Assembly — recombines processed tiles (from FiL Upscaler Advanced/Simple) back into one image, feathered across the real overlap zones.",
            inputs=[
                io.Image.Input("tiles", tooltip=_t("tla_tiles", "Batch of processed tile images — same order/count as the `tiles` output that produced `layout`.")),
                FilTileLayout.Input("layout", tooltip=_t("tla_layout", "Tile layout from FiL Upscaler Advanced/Simple's `layout` output.")),
                io.Combo.Input(
                    "blend_mode",
                    options=tile_calc.BLEND_MODES,
                    default="Cosine (Smooth)",
                    tooltip=_t("tla_blend_mode", "Curve used to feather overlap seams: Cosine for smooth transitions, Linear for classic ramp, Smoothstep for cubic interpolation."),
                ),
                io.Float.Input(
                    "feather_strength",
                    default=1.0,
                    min=0.2,
                    max=1.5,
                    step=0.05,
                    display_mode=io.NumberDisplay.slider,
                    tooltip=_t("tla_feather_strength", "Feathering depth multiplier across overlap zones."),
                ),
                io.Combo.Input(
                    "color_match",
                    options=tile_calc.COLOR_MATCH_MODES,
                    default="Match Overlap Means",
                    tooltip=_t("tla_color_match", "Automatically match mean color/brightness in tile overlaps to eliminate visible exposure seams."),
                ),
            ],
            outputs=[
                io.Image.Output(display_name="image", tooltip="Reassembled full-size image."),
            ],
            search_aliases=["tile", "assembly", "stitch", "recombine", "merge tiles", "upscale"],
            hidden=[io.Hidden.prompt, io.Hidden.extra_pnginfo, io.Hidden.unique_id],
            # Doubles as a preview node — the assembled result shows directly
            # on the node instead of needing a separate PreviewImage downstream.
            is_output_node=True,
        )

    @classmethod
    def execute(
        cls,
        tiles,
        layout,
        blend_mode: str = "Cosine (Smooth)",
        feather_strength: float = 1.0,
        color_match: str = "Match Overlap Means",
    ) -> io.NodeOutput:
        image = tile_calc.assemble_tiles(
            tiles,
            layout,
            blend_mode=blend_mode,
            feather_strength=feather_strength,
            color_match=color_match,
        )
        ui_data: dict = {"images": []}
        if _preview_saver is not None:
            try:
                # Hidden values reach a V3 node through `cls.hidden` only; as
                # parameters they stayed None and the preview went to disk with
                # no workflow embedded in it.
                saved = _preview_saver.save_images(
                    image, "fil.tileassembly", cls.hidden.prompt, cls.hidden.extra_pnginfo,
                )
                ui_data["images"] = saved["ui"]["images"]
            except Exception:
                pass
        return io.NodeOutput(image, ui=ui_data)
