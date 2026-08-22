"""Frontend contract for `FiLEditEncoder`."""

from __future__ import annotations

from ..widgets import _combo, _slider, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_CONDITIONING

CONTRACT = NodeContract(
    id="FiLEditEncoder",
    title="🎯 Edit Encoder",
    category=CATEGORY_CONDITIONING,
    description="Prompt + reference images in one conditioning for FLUX.2-family edit models.",
    min_size=(300, 150),
    family="conditioning",
    inputs=NodeInputs(
        required=[
            _string(
                "prompt", default="", multiline=True, label="Prompt",
                tooltip="Edit instruction: what to change, keep, or compose from the references.",
            ),
            _combo(
                "prompt_preset",
                values=["none", "edit this image", "keep subject, change scene",
                        "use as style reference"],
                default="none", label="Preset",
                tooltip="A ready-made opening, prepended to whatever you type.",
            ),
            _combo(
                "reference_mode", values=["vision", "latents", "both"], default="vision",
                label="Reference mode",
                tooltip="'vision': the encoder looks at the references, nothing enters the frame. "
                        "'latents': they are VAE-encoded into the frame itself, which is what tiles "
                        "the source into the output. 'both': both channels.",
            ),
        ],
        optional=[
            _combo(
                "reference_treatment",
                values=["normal", "grayscale", "soft blur", "strong blur", "palette wash"],
                default="normal", label="Treatment",
                tooltip="What to do to each reference before the text encoder looks at it. "
                        "The blurs and 'palette wash' strip detail the model should not copy. "
                        "Never touches the copy the VAE encodes.",
            ),
            _slider(
                "reference_strength", default=1.0, minv=0.0, maxv=3.0, step=0.05,
                label="Reference strength",
                tooltip="How hard the references pull on the text encoder. 1.0 costs one "
                        "encode; anything else encodes again against blank references and "
                        "interpolates. No effect in reference_mode 'latents'.",
            ),
            _combo(
                "system_preset", values=["none", "use reference"], default="none",
                label="System preset", section="advanced",
                tooltip="'none' for a prompt that gives an instruction — and it lets the "
                        "field below supply a role of your own. 'use reference' for a prompt "
                        "that only describes a style.",
            ),
            _string(
                "system_prompt", default="", multiline=True, label="System prompt",
                section="advanced",
                tooltip="Optional role for the text encoder, used when system_preset is "
                        "'none'. Empty leaves the tokenizer's own template alone. "
                        "Vision-language encoders only.",
            ),
            _slider(
                "vision_megapixels", default=0.15, minv=0.01, maxv=4.0, step=0.01,
                label="Vision MP", section="advanced",
                tooltip="Size of the copy the text encoder reads. 0.15 MP (~384x384) is "
                        "what core uses.",
            ),
            _slider(
                "latent_megapixels", default=1.0, minv=0.1, maxv=4.0, step=0.05,
                label="Latent MP", section="advanced",
                tooltip="Cap for the copy the VAE encodes, when reference_mode uses "
                        "latents. Smaller references stay at native size.",
            ),
            _combo(
                "reference_latents_method",
                values=["index_timestep_zero", "index", "offset", "uxo"],
                default="index_timestep_zero", label="Latents method", section="advanced",
                tooltip="Only used when reference_mode sends latents.",
            ),
        ],
    ),
    outputs=[
        NodeOutput(name="conditioning", type="CONDITIONING"),
        NodeOutput(name="summary", type="STRING"),
        NodeOutput(name="references", type="IMAGE"),
    ],
)
