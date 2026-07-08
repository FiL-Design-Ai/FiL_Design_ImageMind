"""FiL_LLM node contract models (Pydantic v2).

Single source of truth describing the shape of every FiL_LLM node that the
frontend needs to drive. `NODE_SCHEMAS` is exported as JSON Schema via the
`/fil_llm/node_contracts` endpoint and consumed by the Vue 3 + TS frontend
to generate TypeScript interfaces (scripts/gen_contracts.mjs).

The models intentionally describe the *frontend-visible* widget contract: a
widget has a `kind` (combo, segmented, chip_grid, chip_list, number, slider,
boolean, string, color, dict, custom) and a set of options. The Python node
classes still own `INPUT_TYPES()` for ComfyUI core — this layer is the
typed mirror the frontend relies on. When a node module is ported to read
its contract from here, both stay in lockstep.
"""

from __future__ import annotations

from .schema import (
    WidgetKind,
    WidgetSpec,
    NodeInputs,
    NodeOutput,
    NodeContract,
)
from .registry import (
    NODE_SCHEMAS,
    CANONICAL_IDS,
    get_node_contract,
    get_node_schemas,
    public_node_contracts_v2,
)

__all__ = [
    "WidgetKind",
    "WidgetSpec",
    "NodeInputs",
    "NodeOutput",
    "NodeContract",
    "NODE_SCHEMAS",
    "CANONICAL_IDS",
    "get_node_contract",
    "get_node_schemas",
    "public_node_contracts_v2",
]