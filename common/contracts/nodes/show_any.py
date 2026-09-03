"""Frontend contract for `FiLShowAny`."""

from __future__ import annotations

from ..schema import NodeContract, NodeInputs, NodeOutput
from ..widgets import _string
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLShowAny",
    title="👁️ Show Any",
    category=CATEGORY_TOOLS,
    description=(
        "Universal data inspector & pass-through monitor. "
        "Displays formatted data, text, or JSON with live word/char counters and 1-click Copy."
    ),
    family="tool",
    min_size=(260, 120),
    inputs=NodeInputs(
        optional=[
            _string("text", default="", multiline=True, label="Text"),
        ],
    ),
    outputs=[
        NodeOutput(name="*", type="ANY"),
    ],
)
