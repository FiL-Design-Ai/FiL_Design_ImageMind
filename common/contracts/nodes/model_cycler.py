"""Frontend contract for `FiLModelCycler`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLModelCycler",
    title="🔄 Model Cycler",
    category=CATEGORY_TOOLS,
    description="Automatically cycles through diffusion models or checkpoints on each generation.",
    min_size=(460, 120),
    family="tool",
    inputs=NodeInputs(
        required=[
            _combo("source_mode", values=["Checkpoints", "Diffusion Models"], default="Checkpoints", label="Source mode"),
            _string("model_list", default="", multiline=True, label="Model list"),
            _string("filter_pattern", default="", label="Filter pattern"),
            _combo("cycle_mode", values=["Sequential (Loop)", "Sequential (Stop)", "Ping-Pong", "Random", "Fixed Index"], default="Sequential (Loop)", label="Cycle mode"),
            _int("index", default=0, minv=0, maxv=99999, step=1, label="Index"),
            _bool("auto_advance", default=True, label="Auto advance"),
            _bool("unload_previous", default=True, label="Unload previous"),
            _bool("free_vram", default=True, label="Free VRAM"),
            _bool("skip_on_error", default=True, label="Skip on error"),
        ],
        optional=[
            _combo("weight_dtype", values=["default", "fp16", "bf16", "fp8_e4m3fn", "fp8_e5m2"], default="default", label="Weight dtype"),
        ],
    ),
    outputs=[
        NodeOutput(name="model", type="MODEL"),
        NodeOutput(name="clip", type="CLIP"),
        NodeOutput(name="vae", type="VAE"),
        NodeOutput(name="model_name", type="STRING"),
        NodeOutput(name="clean_name", type="STRING"),
    ],
)
