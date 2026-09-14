"""Frontend contract for `FiLTileAssembly`."""

from __future__ import annotations

from ..widgets import _combo, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE
from ...tile_calc import BLEND_MODES, COLOR_MATCH_MODES

CONTRACT = NodeContract(
    id="FiLTileAssembly",
    title="🧩 Tile Assembly",
    category=CATEGORY_IMAGE,
    description="Recombines processed tiles back into one image, feathered across the real overlap zones.",
    min_size=(280, 110),
    family="image",
    inputs=NodeInputs(
        required=[
            _combo("blend_mode", BLEND_MODES, "Cosine (Smooth)", label="Blend curve"),
            _slider("feather_strength", default=1.0, minv=0.2, maxv=1.5, step=0.05, label="Feather depth"),
            _combo("color_match", COLOR_MATCH_MODES, "Match Overlap Means", label="Color match"),
        ]
    ),
    outputs=[NodeOutput(name="image", type="IMAGE")],
)

