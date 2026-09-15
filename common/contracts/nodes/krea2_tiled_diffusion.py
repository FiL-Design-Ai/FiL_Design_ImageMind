"""Frontend contract for `FiLKrea2TiledDiffusion`."""

from __future__ import annotations

from ..widgets import _int, _slider, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE

CONTRACT = NodeContract(
    id="FiLKrea2TiledDiffusion",
    title="💎 Krea 2 Tiled Diffusion",
    category=CATEGORY_IMAGE,
    description="High-fidelity one-click AI upscale and detail enhancement with strict original preservation.",
    min_size=(320, 360),
    family="image",
    inputs=NodeInputs(
        required=[
            _slider("upscale_factor", default=2.0, minv=1.0, maxv=8.0, step=0.1, label="Upscale factor"),
            _slider("denoise", default=0.20, minv=0.0, maxv=1.0, step=0.01, label="Denoise"),
            _string("prompt", default="high quality, ultra detailed, sharp focus, 8k uhd", label="Prompt"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
            _int("steps", default=20, minv=1, maxv=100, step=1, label="Steps"),
        ],
        optional=[],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
        NodeOutput(name="latent", type="LATENT"),
    ],
)
