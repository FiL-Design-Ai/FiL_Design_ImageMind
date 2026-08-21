"""Frontend contract for `FiLHighResFix`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _segmented, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_SAMPLING

CONTRACT = NodeContract(
    id="FiLHighResFix",
    title="🔬 HighRes Fix",
    category=CATEGORY_SAMPLING,
    description="Packs latent/pixel upscale + re-sample settings into a script.",
    # Keep in step with nodes2/nodes/hiresfix.ts — test_ui_presentation guards it.
    min_size=(300, 230),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _segmented("upscale_type", options=["latent", "pixel", "both"], default="latent", label="Upscale type"),
            _combo("hires_ckpt_name", values=["(use same)"],
                   default="(use same)", label="Hires checkpoint"),
            _combo("latent_upscaler",
                   values=["nearest-exact", "bilinear", "area", "bicubic", "bislerp"],
                   default="nearest-exact", label="Latent upscaler",
                   visible_when="upscale_type", visible_when_value="latent"),
            _combo("pixel_upscaler", values=["(none)"],
                   default="(none)", label="Pixel upscaler",
                   visible_when="upscale_type", visible_when_value=["pixel", "both"]),
            _slider("upscale_by", default=1.25, minv=0.01, maxv=8.0, step=0.05, label="Upscale by"),
            _bool("use_same_seed", default=True, label="Use same seed"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
            _int("hires_steps", default=12, minv=1, maxv=10000, step=1, label="Hires steps"),
            _slider("denoise", default=0.56, minv=0.0, maxv=1.0, step=0.01, label="Denoise"),
            _int("iterations", default=1, minv=0, maxv=5, step=1, label="Iterations"),
        ],
        optional=[
            _bool("use_controlnet", default=False, label="Use ControlNet", section="controlnet"),
            _combo("control_net_name", values=["(none)"],
                   default="(none)", label="ControlNet", section="controlnet",
                   visible_when="use_controlnet", visible_when_value=True),
            _slider("strength", default=1.0, minv=0.0, maxv=10.0, step=0.01, label="Strength",
                    section="controlnet", visible_when="use_controlnet", visible_when_value=True),
            _combo("preprocessor", values=["none", "canny"],
                   default="none", label="Preprocessor", section="controlnet",
                   visible_when="use_controlnet", visible_when_value=True),
        ],
    ),
    outputs=[NodeOutput(name="script", type="DICT")],
)
