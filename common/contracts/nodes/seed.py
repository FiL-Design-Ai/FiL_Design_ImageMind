"""Frontend contract for `FiLSeed`."""

from __future__ import annotations

from ..widgets import _bool, _int, _segmented
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_VALUES

CONTRACT = NodeContract(
    id="FiLSeed",
    title="♻️ Seed",
    category=CATEGORY_VALUES,
    description="Fixed or randomized seed with reuse buttons.",
    min_size=(300, 90),
    family="value",
    inputs=NodeInputs(
        required=[
            # `mode` and the two action buttons are frontend-only controls that
            # Seed.vue renders by hand — the node's own schema has just `seed`.
            # Listed in UI_ONLY_WIDGETS in registry.py so the contract/schema
            # parity test accepts them.
            _segmented("mode", options=["random", "fixed"], default="random", label="Mode"),
            # 0xFFFFFFFFFFFFFFFF, same as `SEED_MAX` in nodes/node_seed.py and
            # same as the seed on ksampler, hiresfix and noise_control. It sat
            # at 999999999999
            # until the 2026-07-29 audit — the panel refused values the node
            # itself accepts, and the widget-name check in
            # test_node_contracts.py never looked at ranges.
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
        ],
        optional=[
            _bool("use_last_seed", default=False, label="Use last seed", section="actions"),
            _bool("new_fixed", default=False, label="New fixed random", section="actions"),
        ],
    ),
    outputs=[NodeOutput(name="seed", type="INT")],
)
