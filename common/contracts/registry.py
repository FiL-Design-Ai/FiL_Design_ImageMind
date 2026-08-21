"""FiL_Design_ImageMind node-contract registry.

The contracts describe the *frontend-visible* widget layer; the Python node
classes still own their own `define_schema()` for ComfyUI core. Every node class
must have an entry here — `tests/test_node_contracts.py` enforces that parity.

Each contract lives in its own module under `nodes/`; this file only collects
them. It used to hold all nineteen inline, at 900 lines, importing from eight
modules under `common/` — so changing one node's widgets meant editing the file
every other node's contract was read from, and every importer of the registry
paid to build all of them. `tests/test_contract_generation.py` keeps the
collected result honest: what the frontend imports must be what this produces.

`scripts/gen_contracts.mjs` renders that result into
`frontend/src/api/contracts.ts`.
"""

from __future__ import annotations

from ..brand import CATEGORY_ROOT, SETTINGS_PREFIX
from .nodes.channel import CONTRACT as CHANNEL
from .nodes.cinema_rig import CONTRACT as CINEMA_RIG
from .nodes.cleaner import CONTRACT as CLEANER
from .nodes.color_wizard import CONTRACT as COLOR_WIZARD
from .nodes.dataset import CONTRACT as DATASET_FORGE
from .nodes.decomposer import CONTRACT as DECOMPOSER
from .nodes.edit_encoder import CONTRACT as EDIT_ENCODER
from .nodes.hiresfix import CONTRACT as HIRESFIX
from .nodes.ksampler import CONTRACT as KSAMPLER
from .nodes.lora_loader import CONTRACT as LORA_LOADER
from .nodes.model_cycler import CONTRACT as MODEL_CYCLER
from .nodes.noise_control import CONTRACT as NOISE_CONTROL
from .nodes.provider import CONTRACT as PROVIDER
from .nodes.scanner import CONTRACT as SCANNER
from .nodes.seed import CONTRACT as SEED
from .nodes.style_mixer import CONTRACT as STYLE_MIXER
from .nodes.switch import CONTRACT as SWITCH
from .nodes.tile_assembly import CONTRACT as TILE_ASSEMBLY
from .nodes.upscale import CONTRACT as UPSCALE
from .nodes.upscale_simple import CONTRACT as UPSCALE_SIMPLE
from .schema import NodeContract

NODE_SCHEMAS: dict[str, NodeContract] = {
    contract.id: contract
    for contract in (
        SEED,
        PROVIDER,
        SCANNER,
        CLEANER,
        UPSCALE,
        UPSCALE_SIMPLE,
        TILE_ASSEMBLY,
        KSAMPLER,
        HIRESFIX,
        NOISE_CONTROL,
        DECOMPOSER,
        STYLE_MIXER,
        CINEMA_RIG,
        COLOR_WIZARD,
        SWITCH,
        DATASET_FORGE,
        CHANNEL,
        MODEL_CYCLER,
        LORA_LOADER,
        EDIT_ENCODER,
    )
}

CANONICAL_IDS: tuple[str, ...] = tuple(NODE_SCHEMAS)

# Contract widgets that deliberately have no matching input in the node's
# `define_schema()` — purely frontend controls rendered by the Vue panel.
# Anything not listed here must exist in the schema; tests/test_node_contracts.py
# enforces that, which is what caught a stale `seed` widget left on
# FiLProviderLoader after the input was removed from the node.
UI_ONLY_WIDGETS: dict[str, set[str]] = {
    "FiLSeed": {"mode", "use_last_seed", "new_fixed"},
}

# NOTE: no hand-written id list guards this module any more. A duplicated list
# here only ever compared two copies of the same file's content, which is how
# FiLColorWizard shipped registered-but-contract-less. Parity against the actual
# node classes is enforced by tests/test_node_contracts.py.


def get_node_contract(node_id: str) -> NodeContract:
    if node_id not in NODE_SCHEMAS:
        raise KeyError(f"Unknown {CATEGORY_ROOT} node contract: {node_id!r}")
    return NODE_SCHEMAS[node_id]


def get_node_schemas() -> dict[str, dict[str, object]]:
    """Return `{node_id: NodeContract.model_json_schema()}` for the API endpoint."""
    return {node_id: contract.model_json_schema() for node_id, contract in NODE_SCHEMAS.items()}


def public_node_contracts_v2() -> dict[str, object]:
    """Top-level payload returned by `GET /fil_design_imagemind/node_contracts`.

    - `node_ids` — Mapping of node ID to {title, category} (quick lookup for UI).
    - `schemas` — Pydantic JSON Schema per node (used by the Vue 3 + TS
      frontend to type widgets at compile time without a server round-trip).
    - `data` — per-node `NodeContract.model_dump()` (the actual widget
      values, consumed by `scripts/gen_contracts.mjs` to render the typed
      frontend catalog).
    - `settings_prefix` — e.g. `FiL_Design_ImageMind.` (used by ComfyUI settings keys).
    """
    return {
        "node_ids": {node_id: {"title": c.title, "category": c.category} for node_id, c in NODE_SCHEMAS.items()},
        "schemas": get_node_schemas(),
        "data": {node_id: c.model_dump(mode="json") for node_id, c in NODE_SCHEMAS.items()},
        "settings_prefix": SETTINGS_PREFIX,
    }
