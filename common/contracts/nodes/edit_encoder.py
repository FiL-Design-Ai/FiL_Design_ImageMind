"""Frontend contract for `FiLEditEncoder`."""

from __future__ import annotations

from ..widgets import _combo, _slider, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_CONDITIONING
# The role names come from the node's own table rather than a copy: this file is
# a mirror of the node's schema, and a mirror that can drift is worse than none.
# `common/edit_roles` is where that table lives precisely so this layer can read
# it — it imports nothing but `json`, and nothing from the running host.
from ...edit_roles import ROLE_NAMES

CONTRACT = NodeContract(
    id="FiLEditEncoder",
    title="🎯 Edit Encoder",
    category=CATEGORY_CONDITIONING,
    description="Prompt + reference images in one conditioning for FLUX.2-family edit models.",
    min_size=(300, 300),
    family="conditioning",
    inputs=NodeInputs(
        required=[
            _string(
                "prompt", default="", multiline=True, label="Prompt",
                tooltip="Edit instruction: what to change, keep, or compose from the references.",
            ),
            _string(
                "reference_cards", default="", label="Reference cards",
                tooltip="A job for each reference, in slot order, as JSON: "
                        '[{"role": "lighting"}, {"role": "palette", "window": "look"}]. '
                        "The role decides what the model takes from that picture and "
                        "brings the treatment that makes it true; `strength` weighs that "
                        "one reference (below zero steers away from it) and `window` says "
                        "when during sampling it speaks — 'whole run', 'layout' for the "
                        "early steps that settle the framing, 'look' for the later ones "
                        "that settle the surface. Roles: "
                        + ", ".join(ROLE_NAMES) + ".",
                values=ROLE_NAMES,
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
                values=["normal", "grayscale", "soft blur", "strong blur",
                        "shape wash", "palette wash"],
                default="normal", label="Treatment",
                section="advanced",
                tooltip="Legacy: the treatment for every reference without a role of its own. "
                        "Reference cards carry the treatment their role needs, so this is kept "
                        "for workflows saved before them and hidden in the panel.",
            ),
            _slider(
                "reference_strength", default=1.0, minv=0.0, maxv=3.0, step=0.05,
                label="Reference strength",
                section="advanced",
                tooltip="One dial over every card: each card's own strength is multiplied by "
                        "this. Meant for driving them all together from the graph — set the "
                        "cards for one reference against another. No effect in "
                        "reference_mode 'latents'.",
            ),
            _string(
                "treatment_per_reference", default="", label="Per reference",
                section="advanced",
                tooltip="Legacy: per-reference treatments in slot order, comma separated. "
                        "A card carries its own treatment next to its role; this is kept only "
                        "so workflows saved before cards keep working.",
            ),
            _combo(
                "system_preset", values=["none", "use reference"], default="none",
                label="System preset", section="advanced",
                tooltip="Legacy: a canned role for the text encoder. Reference cards write "
                        "the roles now, one per picture; kept for workflows saved before them.",
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
            _slider(
                "prompt_strength", default=1.0, minv=0.0, maxv=2.0, step=0.05,
                label="Prompt strength",
                tooltip="How loudly the written instruction speaks against the pictures. "
                        "1.0 is as written and costs nothing. Below 1 the references decide "
                        "more; 0 is what the model takes from the pictures alone. Anything "
                        "but 1.0 encodes a second time with the instruction silenced.",
            ),
        ],
    ),
    outputs=[
        NodeOutput(name="conditioning", type="CONDITIONING"),
        NodeOutput(name="summary", type="STRING"),
        NodeOutput(name="references", type="IMAGE"),
        NodeOutput(name="latent", type="LATENT"),
    ],
)
