"""Frontend contract for `FiLPromptDirector`."""

from __future__ import annotations

from ..widgets import _int, _segmented, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_LLM
from ...data import DIRECTOR_LANGUAGES

CONTRACT = NodeContract(
    id="FiLPromptDirector",
    title="💬 Prompt Director",
    category=CATEGORY_LLM,
    description=(
        "Tells the LLM how to rewrite an existing prompt: style transfer (anime → photorealism), "
        "re-lighting, medium change. Instruction + source prompt in, a finished DiT prompt out."
    ),
    family="llm",
    min_size=(340, 300),
    inputs=NodeInputs(
        required=[
            _string("instruction", default="", multiline=True, label="Instruction"),
            _string("source_prompt", default="", multiline=True, label="Source prompt"),
            _segmented("language", options=DIRECTOR_LANGUAGES, default="en", label="Language"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
        ],
    ),
    outputs=[
        NodeOutput(name="prompt", type="STRING"),
    ],
)
