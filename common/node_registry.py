"""Single source of truth for the public FiL_LLM node registry (V3)."""

from __future__ import annotations

NODE_CONTRACTS = {
    "FiLSeed": {"title": "FiL Seed", "category": "FiL_LLM/Values"},
    "FiLProviderLoader": {"title": "FiL Provider Loader", "category": "FiL_LLM/LLM"},
    "FiLOpticScanner": {"title": "FiL Optic Scanner", "category": "FiL_LLM/LLM"},
    "FiLNeuroCleaner": {"title": "FiL Neuro Cleaner", "category": "FiL_LLM/Tools"},
    "FiLBeforeAfterCompare": {"title": "FiL Before/After Compare", "category": "FiL_LLM/Image"},
    "FiLUpscaleTileCalc": {"title": "FiL Upscale Tile Calc", "category": "FiL_LLM/Image"},
}

CANONICAL_NODE_IDS = tuple(NODE_CONTRACTS)


def public_node_contracts() -> dict[str, dict[str, str]]:
    return {node_id: dict(contract) for node_id, contract in NODE_CONTRACTS.items()}
