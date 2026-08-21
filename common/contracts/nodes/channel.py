"""Frontend contract for `FiLChannel`."""

from __future__ import annotations

from ..schema import NodeContract, NodeInputs
from ...brand import CATEGORY_TOOLS

CONTRACT = NodeContract(
    id="FiLChannel",
    title="📡 Channel",
    category=CATEGORY_TOOLS,
    description="Send data across the graph without wires.",
    min_size=(250, 80),
    family="tool",
    # No widgets at all. The node's only inputs are the autogrowing `value*`
    # sockets, and a channel is named by its slot label — a single name widget
    # could only ever name one of many inputs. See `nodes/node_channel.py`.
    inputs=NodeInputs(required=[]),
    outputs=[],
)
