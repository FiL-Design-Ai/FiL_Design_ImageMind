"""Frontend contract for `FiLTileAssembly`."""

from __future__ import annotations

from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE

CONTRACT = NodeContract(
    id="FiLTileAssembly",
    title="🧩 Tile Assembly",
    category=CATEGORY_IMAGE,
    description="Recombines processed tiles back into one image, feathered across the real overlap zones.",
    min_size=(270, 120),
    family="image",
    inputs=NodeInputs(required=[]),
    outputs=[NodeOutput(name="image", type="IMAGE")],
)
