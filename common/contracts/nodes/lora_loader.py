"""Frontend contract for `FiLLoraLoader`."""

from __future__ import annotations

from ..widgets import _bool, _float, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLLoraLoader",
    title="🧬 LoRA Loader",
    category=CATEGORY_TOOLS,
    description="Dynamic stack loader for combining multiple LoRA adapters with per-item sliders.",
    min_size=(460, 120),
    family="tool",
    inputs=NodeInputs(
        required=[
            _string("lora_list", default="", multiline=True, label="LoRA list"),
            _string("filter_pattern", default="", label="Filter pattern"),
            _float("strength_model", default=1.0, minv=-10.0, maxv=10.0, step=0.05, label="Strength Model"),
            _float("strength_clip", default=1.0, minv=-10.0, maxv=10.0, step=0.05, label="Strength CLIP"),
            _bool("skip_on_error", default=True, label="Skip Bad"),
        ],
    ),
    outputs=[
        NodeOutput(name="model", type="MODEL"),
        NodeOutput(name="clip", type="CLIP"),
        NodeOutput(name="triggers", type="STRING"),
        NodeOutput(name="label", type="STRING"),
    ],
)
