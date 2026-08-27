"""Frontend contract for `FiLPrompter`."""

from __future__ import annotations

from ..schema import NodeContract, NodeInputs, NodeOutput
from ..widgets import _string
from ...brand import CATEGORY_LLM

CONTRACT = NodeContract(
    id="FiLPrompter",
    title="📝 Prompter",
    category=CATEGORY_LLM,
    description=(
        "A text node whose prompt the three assist buttons (rephrase / densify / expand) "
        "rewrite live through the Provider Loader's LLM; at queue time the text passes "
        "through untouched."
    ),
    family="llm",
    min_size=(340, 140),
    inputs=NodeInputs(
        required=[
            _string("prompt", default="", multiline=True, label="Prompt"),
        ],
    ),
    outputs=[
        NodeOutput(name="prompt", type="STRING"),
    ],
)
