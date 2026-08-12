"""FiL Noise Control — a lean re-implementation of efficiency-nodes' Noise
Control Script.

This node does not sample. It packs noise-generation parameters into a
``script`` dict that a downstream ``FiLKSampler`` consumes: which RNG source
to draw the initial noise from, and an optional seed-variation blend. The
original's ``cfg_denoiser`` (an A1111-replication hook that monkeypatches
comfy's CFG denoiser) is intentionally omitted — it breaks with ControlNet/
GLIGEN and depends on comfy internals that can shift under it; everything
here instead goes through the public ``comfy.sample`` API (see
``common/sampling.py``).
"""

from comfy_api.latest import io

from ..common.brand import CATEGORY_SAMPLING
from ..common.io_types import FilHiresScript
from ..common.localization import t

_RNG_SOURCES = ["cpu", "gpu"]


class FiLNoiseControl(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLNoiseControl",
            display_name="🎛️ Noise Control",
            category=CATEGORY_SAMPLING,
            description="🎛️ FiL Noise Control — RNG source + seed-variation script for FiLKSampler.",
            inputs=[
                io.Combo.Input("rng_source", options=_RNG_SOURCES, default="cpu",
                               tooltip=t("nsc_rng_source", "Device the initial noise is drawn on. 'gpu' can better match Automatic1111-style noise for the same seed.")),
                io.Boolean.Input("add_seed_noise", default=True, label_on="Variation ON", label_off="Variation OFF",
                                 tooltip=t("nsc_add_seed_noise", "Blend in noise from a second seed for a controlled variation.")),
                io.Int.Input("seed", default=0, min=0, max=0xFFFFFFFFFFFFFFFF, control_after_generate=True,
                             tooltip=t("nsc_seed", "Variation seed (used when Variation is ON).")),
                io.Float.Input("weight", default=0.5, min=0.0, max=1.0, step=0.01,
                               tooltip=t("nsc_weight", "Variation strength: 0 = base seed only, 1 = variation seed only.")),
                FilHiresScript.Input("script", optional=True,
                                     tooltip=t("nsc_script", "Optional upstream FiL script to extend.")),
            ],
            outputs=[
                FilHiresScript.Output("script", display_name="script", tooltip="FiL script for FiLKSampler."),
            ],
            search_aliases=["noise", "noise control", "rng", "seed variation", "variation"],
        )

    @classmethod
    def execute(cls, rng_source, add_seed_noise, seed, weight, script=None) -> io.NodeOutput:
        new_script = dict(script) if isinstance(script, dict) else {}
        new_script["noise_control"] = {
            "rng_source": rng_source,
            "add_seed_noise": bool(add_seed_noise),
            "seed": int(seed),
            "weight": float(weight),
        }
        return io.NodeOutput(new_script)
