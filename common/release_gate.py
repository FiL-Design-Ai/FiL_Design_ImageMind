"""Release staging gate for the 1.0.0 hardening pass.

During hardening we re-introduce nodes one at a time. Only node-ids listed in
``RELEASE_NODES`` are registered with ComfyUI; every other node is hidden from
the menu until it passes the hardening checklist (see
``docs/release/HARDENING_LEDGER.md``).

Set the environment variable ``FIL_RELEASE_ALL=1`` to bypass the gate and
register every node — used for CI full runs and whole-package smoke tests.

The gate only affects *node registration* (``FiLExtension.get_node_list``). The
contracts endpoint and the frontend node modules still describe all nodes, so
no drift check is triggered while nodes are staged.
"""

from __future__ import annotations

import os

# Node-ids promoted to the hardened release. Grows as each node passes the gate.
RELEASE_NODES: set[str] = {
    "FiLSeed",
    "FiLUpscaleTileCalc",
    "FiLUpscaleSimple",
    "FiLTileAssembly",
    "FiLKSampler",
    "FiLHighResFix",
    "FiLNoiseControl",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLImageDecomposer",
    "FiLStyleMixer",
    "FiLColorWizard",
    "FiLSignalSwitch",
    "FiLDatasetForge",
}

_TRUTHY = {"1", "true", "yes", "on"}


def release_all_enabled() -> bool:
    """True when ``FIL_RELEASE_ALL`` requests bypassing the staging gate."""
    return os.environ.get("FIL_RELEASE_ALL", "").strip().lower() in _TRUTHY


def _node_id(node_cls: type) -> str | None:
    """Best-effort node-id extraction from a V3 node class."""
    try:
        return node_cls.define_schema().node_id
    except Exception:
        return None


def filter_release_nodes(classes: list[type]) -> list[type]:
    """Keep only nodes promoted to the release (unless the bypass is set)."""
    if release_all_enabled():
        return list(classes)
    return [cls for cls in classes if _node_id(cls) in RELEASE_NODES]
