"""Single source of truth for the public node registry (V3)."""

from __future__ import annotations

from .brand import CATEGORY_ROOT

NODE_CONTRACTS = {
    "FiLSeed": {"title": "♻️ Seed", "category": f"{CATEGORY_ROOT}/Values"},
    "FiLProviderLoader": {"title": "🔌 Provider Loader", "category": f"{CATEGORY_ROOT}/LLM"},
    "FiLOpticScanner": {"title": "🕵️ Optic Scanner", "category": f"{CATEGORY_ROOT}/LLM"},
    "FiLNeuroCleaner": {"title": "🧹 Cleaner", "category": f"{CATEGORY_ROOT}/Tools"},
    "FiLBeforeAfterCompare": {"title": "🔄 Compare", "category": f"{CATEGORY_ROOT}/Image"},
    "FiLUpscaleTileCalc": {"title": "🔍 Upscaler", "category": f"{CATEGORY_ROOT}/Image"},
}

CANONICAL_NODE_IDS = tuple(NODE_CONTRACTS)


def public_node_contracts() -> dict[str, dict[str, str]]:
    return {node_id: dict(contract) for node_id, contract in NODE_CONTRACTS.items()}
