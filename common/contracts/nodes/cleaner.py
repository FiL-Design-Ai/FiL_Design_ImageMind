"""Frontend contract for `FiLNeuroCleaner`."""

from __future__ import annotations

from ..widgets import _bool
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLNeuroCleaner",
    title="🧹 Cleaner",
    category=CATEGORY_TOOLS,
    description="GPU VRAM and loaded model memory cleanup.",
    min_size=(250, 110),
    family="tool",
    inputs=NodeInputs(
        required=[
            _bool("clean_vram", default=True, label="Flush GPU Cache"),
            _bool("unload_models", default=True, label="Unload Models"),
        ],
    ),
    outputs=[NodeOutput(name="output", type="ANY")],
)
