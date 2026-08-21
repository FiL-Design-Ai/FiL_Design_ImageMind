"""Frontend contract for `FiLImageDecomposer`."""

from __future__ import annotations

from ..widgets import _combo, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_ANALYSIS
from ...data import LANGUAGES

CONTRACT = NodeContract(
    id="FiLImageDecomposer",
    title="👁️‍🗨️ Image Decomposer",
    category=CATEGORY_ANALYSIS,
    description="Decomposes image or prompt into Subject, Lighting, Composition, Style, and Full Prompt outputs.",
    family="llm",
    min_size=(300, 180),
    inputs=NodeInputs(
        required=[
            _string("prompt", default="", multiline=True, label="Description"),
        ],
        optional=[
            _combo("language", values=LANGUAGES, default="English", label="Language"),
        ],
    ),
    outputs=[
        NodeOutput(name="subject", type="STRING"),
        NodeOutput(name="lighting", type="STRING"),
        NodeOutput(name="composition", type="STRING"),
        NodeOutput(name="style", type="STRING"),
        NodeOutput(name="full_prompt", type="STRING"),
    ],
)
