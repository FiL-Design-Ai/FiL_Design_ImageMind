"""Frontend contract for `FiLKSampler`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _samplers, _schedulers, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_SAMPLING

CONTRACT = NodeContract(
    id="FiLKSampler",
    title="⚡ KSampler",
    category=CATEGORY_SAMPLING,
    description="Full-featured sampler with every sampler and scheduler.",
    min_size=(300, 240),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
            _int("steps", default=20, minv=1, maxv=10000, step=1, label="Steps"),
            _slider("cfg", default=7.0, minv=0.0, maxv=100.0, step=0.1, label="CFG"),
            _combo("sampler_name", values=_samplers(), default=_samplers()[0], label="Sampler"),
            _combo("scheduler", values=_schedulers(), default=_schedulers()[0], label="Scheduler"),
            _slider("denoise", default=1.0, minv=0.0, maxv=1.0, step=0.01, label="Denoise"),
            _slider("eta", default=1.0, minv=0.0, maxv=100.0, step=0.01, label="Eta (η)"),
            _bool("bongmath", default=True, label="Bongmath", section="advanced"),
        ],
        optional=[
            _combo("preview_method",
                   values=["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"],
                   default="auto", label="Preview", section="advanced"),
            _combo("vae_decode", values=["true", "true (tiled)", "false"], default="true",
                   label="VAE decode", section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="model", type="ANY"),
        NodeOutput(name="positive", type="ANY"),
        NodeOutput(name="negative", type="ANY"),
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="vae", type="ANY"),
        NodeOutput(name="image", type="IMAGE"),
    ],
)
