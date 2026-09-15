"""Frontend contract for `FiLLatentUpscalePro`."""

from __future__ import annotations

from ..widgets import _combo, _int, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE

CONTRACT = NodeContract(
    id="FiLLatentUpscalePro",
    title="📐 Latent Upscaler Pro",
    category=CATEGORY_IMAGE,
    description="Smart latent scaler with artifact-free grid snapping (64/16/8 px), aspect ratio preservation, and pixel dimension outputs.",
    min_size=(280, 240),
    family="image",
    inputs=NodeInputs(
        required=[
            _combo("mode", values=["By Factor", "Target Size", "Longest Edge"], default="By Factor", label="Mode"),
            _slider("scale_by", default=1.5, minv=0.05, maxv=8.0, step=0.05, label="Scale by"),
            _combo(
                "upscale_method",
                values=["bislerp", "nearest-exact", "area", "bilinear", "bicubic"],
                default="bislerp",
                label="Upscale method",
            ),
            _combo(
                "snap_to",
                values=[
                    "64 px (U-Net & DiT Safe)",
                    "32 px (DiT Safe 4x4)",
                    "16 px (DiT Patch 2x2)",
                    "8 px (1 Latent Pixel)",
                    "Disabled (Exact)",
                ],
                default="64 px (U-Net & DiT Safe)",
                label="Snap to",
            ),
        ],
        optional=[
            _int("target_width", default=1024, minv=64, maxv=8192, step=64, label="Target width"),
            _int("target_height", default=1024, minv=64, maxv=8192, step=64, label="Target height"),
            _int("longest_edge", default=1536, minv=128, maxv=8192, step=64, label="Longest edge"),
            _combo("round_mode", values=["nearest", "up", "down"], default="nearest", label="Round mode", section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="width", type="INT"),
        NodeOutput(name="height", type="INT"),
    ],
)

