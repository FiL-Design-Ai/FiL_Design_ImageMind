"""Frontend contract for `FiLNoiseControl`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_SAMPLING

CONTRACT = NodeContract(
    id="FiLNoiseControl",
    title="🎛️ Noise Control",
    category=CATEGORY_SAMPLING,
    description="RNG source + seed-variation script for FiLKSampler.",
    min_size=(250, 160),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _combo("rng_source", values=["cpu", "gpu"], default="cpu", label="RNG source"),
            _bool("add_seed_noise", default=False, label="Seed variation"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Variation seed"),
            _slider("weight", default=0.5, minv=0.0, maxv=1.0, step=0.01, label="Weight"),
        ],
    ),
    outputs=[NodeOutput(name="script", type="DICT")],
)
