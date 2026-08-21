"""Frontend contract for `FiLSignalSwitch`."""

from __future__ import annotations

from ..widgets import _bool
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLSignalSwitch",
    title="🔀 Cyber Switch",
    category=CATEGORY_TOOLS,
    description="Universal signal pass-through toggle.",
    inputs=NodeInputs(
        required=[
            _bool("enable", default=True, label="Enable", section="settings", tooltip="Toggle signal pass-through ON or OFF."),
        ]
    ),
    outputs=[
        NodeOutput(name="output", type="ANY"),
    ],
)
