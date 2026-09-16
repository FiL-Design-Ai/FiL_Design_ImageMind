"""Frontend contract for `FiLLoraPrompter`."""

from __future__ import annotations

from ..schema import NodeContract, NodeInputs, NodeOutput
from ..widgets import _string
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLLoraPrompter",
    title="🧬 LoRA Prompter",
    category=CATEGORY_TOOLS,
    description=(
        "Dynamic LoRA prompt composer. Displays interactive trigger-word chips from "
        "connected LoRA Loader, allowing 1-click toggling and smart prompt assembly."
    ),
    family="llm",
    min_size=(340, 160),
    inputs=NodeInputs(
        required=[
            _string("prompt", default="", multiline=True, label="Prompt"),
        ],
        optional=[
            _string("triggers", default="", multiline=True, label="Triggers"),
        ],
    ),
    outputs=[
        NodeOutput(name="prompt", type="STRING"),
    ],
)
