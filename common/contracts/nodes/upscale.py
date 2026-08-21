"""Frontend contract for `FiLUpscaleTileCalc`."""

from __future__ import annotations

from ..widgets import _bool, _int, _segmented, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE

CONTRACT = NodeContract(
    id="FiLUpscaleTileCalc",
    title="🔍 Upscaler Advanced",
    category=CATEGORY_IMAGE,
    description="Computes optimal tile grid layout for upscaling.",
    min_size=(320, 300),
    family="image",
    inputs=NodeInputs(
        required=[
            _slider("upscale_factor", default=2.0, minv=0.1, maxv=8.0, step=0.25, label="Upscale factor"),
            _int("tile_size", default=1024, minv=64, maxv=2048, step=64, label="Tile size"),
            _int("tile_overlap", default=64, minv=0, maxv=512, step=8, label="Tile overlap"),
        ],
        optional=[
            _bool("auto_overlap", default=False, label="Auto overlap", section="advanced"),
            _bool("auto_mode", default=False, label="Full auto", section="advanced"),
            _segmented(
                "auto_profile",
                options=["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"],
                default="Balanced",
                section="advanced",
            ),
            _int("manual_tile_cols", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _int("manual_tile_rows", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _bool("non_square_tiles", default=False, section="advanced"),
            _bool("auto_fix_thin_edges", default=False, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
        NodeOutput(name="tiles", type="IMAGE"),
        NodeOutput(name="upscale_by", type="FLOAT"),
        NodeOutput(name="denoise", type="FLOAT"),
        NodeOutput(name="tile_width", type="INT"),
        NodeOutput(name="tile_height", type="INT"),
        NodeOutput(name="mask_blur", type="INT"),
        NodeOutput(name="tile_padding", type="INT"),
        NodeOutput(name="overlap", type="FLOAT"),
        NodeOutput(name="width", type="INT"),
        NodeOutput(name="height", type="INT"),
        NodeOutput(name="tile_cols", type="INT"),
        NodeOutput(name="tile_rows", type="INT"),
        NodeOutput(name="tile_count", type="INT"),
        NodeOutput(name="latent_w", type="INT"),
        NodeOutput(name="latent_h", type="INT"),
        NodeOutput(name="info", type="STRING"),
        NodeOutput(name="warnings", type="STRING"),
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="latent_tiles", type="LATENT"),
        NodeOutput(name="layout", type="DICT"),
    ],
)
