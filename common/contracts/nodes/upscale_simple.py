"""Frontend contract for `FiLUpscaleSimple`."""

from __future__ import annotations

from ..widgets import _bool, _int, _segmented, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE

CONTRACT = NodeContract(
    id="FiLUpscaleSimple",
    title="🔍 Upscaler Simple",
    category=CATEGORY_IMAGE,
    description="Upscale + tile an image through a required model — same tiling controls as Advanced.",
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
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="latent_tiles", type="LATENT"),
        NodeOutput(name="layout", type="DICT"),
    ],
)
