"""Frontend contract for `FiLStyleMixer`."""

from __future__ import annotations

from ..widgets import _chip_list, _combo, _slider, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_STYLING
from ...data import get_all_style_keys

CONTRACT = NodeContract(
    id="FiLStyleMixer",
    title="🎛️ Style Mixer",
    category=CATEGORY_STYLING,
    description="Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
    family="base",
    min_size=(320, 320),
    inputs=NodeInputs(
        required=[
            _string("base_prompt", default="", multiline=True, label="Base Prompt"),
            _chip_list("style_1", values=["(None)"] + get_all_style_keys(), default="(None)", label="Style 1"),
            _slider("weight_1", default=1.0, minv=0.0, maxv=1.0, step=0.05, label="Weight 1"),
        ],
        optional=[
            _combo("fusion_mode", values=["Weighted Stack (Fast)", "Smart LLM Fusion (Gen-Mix)"], default="Weighted Stack (Fast)", label="Fusion Mode"),
            _combo("img_focus_1", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 1 Focus"),
            _slider("img_weight_1", default=0.8, minv=0.0, maxv=1.0, step=0.05, label="Image 1 Weight"),
            _combo("img_focus_2", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 2 Focus"),
            _slider("img_weight_2", default=0.6, minv=0.0, maxv=1.0, step=0.05, label="Image 2 Weight"),
            _combo("img_focus_3", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 3 Focus"),
            _slider("img_weight_3", default=0.4, minv=0.0, maxv=1.0, step=0.05, label="Image 3 Weight"),
            _combo("img_focus_4", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 4 Focus"),
            _slider("img_weight_4", default=0.2, minv=0.0, maxv=1.0, step=0.05, label="Image 4 Weight"),
            _chip_list("style_2", values=["(None)"] + get_all_style_keys(), default="(None)", label="Style 2"),
            _slider("weight_2", default=0.5, minv=0.0, maxv=1.0, step=0.05, label="Weight 2"),
            _chip_list("style_3", values=["(None)"] + get_all_style_keys(), default="(None)", label="Style 3"),
            _slider("weight_3", default=0.3, minv=0.0, maxv=1.0, step=0.05, label="Weight 3"),
        ],
    ),
    outputs=[
        NodeOutput(name="styled_prompt", type="STRING"),
        NodeOutput(name="style_overlay", type="STRING"),
    ],
)
