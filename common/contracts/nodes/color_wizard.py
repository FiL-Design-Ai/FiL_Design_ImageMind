"""Frontend contract for `FiLColorWizard`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _float, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_IMAGE
from ...color_correction import METHOD_KEYS as COLOR_METHOD_KEYS

CONTRACT = NodeContract(
    id="FiLColorWizard",
    title="🎨 Color Wizard",
    category=CATEGORY_IMAGE,
    description="Automatically corrects image colours using white balance, LAB contrast enhancement, channel stretching, reference colour matching, and WB picker.",
    family="image",
    min_size=(300, 310),
    inputs=NodeInputs(
        required=[
            _combo("method", values=COLOR_METHOD_KEYS, default="Full Auto", label="Method"),
            _slider("strength", default=0.8, minv=0.0, maxv=1.0, step=0.05, label="Strength"),
        ],
        optional=[
            _float("saturate", default=0.5, minv=0.0, maxv=5.0, step=0.1, label="Saturate", section="advanced"),
            _slider("temperature", default=0.0, minv=-1.0, maxv=1.0, step=0.05, label="Temperature", section="advanced"),
            _slider("tint", default=0.0, minv=-1.0, maxv=1.0, step=0.05, label="Tint", section="advanced"),
            _bool("preserve_skin", default=False, label="Preserve skin", section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
    ],
)
