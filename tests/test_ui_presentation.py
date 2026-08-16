"""Presentation-layer parity: schema vs contract vs frontend node module.

A node's appearance is described in three independent places, and nothing at
runtime reconciles them:

  * ``define_schema()``        — ``display_name`` ComfyUI puts in the menu
  * contracts registry        — ``title`` / ``min_size`` / ``family``
  * ``nodes2/nodes/*.ts``     — ``minSize`` / ``family`` handed to
                                ``registerStyledNode()``, which is what actually
                                reaches LiteGraph

Because the frontend never reads ``min_size``/``family`` from the contract, those
two fields drifted on 11 of 13 nodes before this test existed.
"""

from __future__ import annotations

import asyncio
import importlib
import re
from pathlib import Path

import pytest

NODES_TS_DIR = Path(__file__).resolve().parents[1] / "frontend" / "src" / "nodes2" / "nodes"


def _module_presentation() -> dict[str, dict[str, object]]:
    """`registerStyledNode()` arguments parsed out of each frontend node module."""
    out: dict[str, dict[str, object]] = {}
    for ts in NODES_TS_DIR.glob("*.ts"):
        text = ts.read_text(encoding="utf-8")
        ids = re.findall(r'id:\s*"(\w+)"', text)
        if not ids:
            continue
        entry: dict[str, object] = {"file": ts.name}
        size = re.search(r"minSize:\s*\[(\d+),\s*(\d+)\]", text)
        if size:
            entry["minSize"] = (int(size.group(1)), int(size.group(2)))
        family = re.search(r'family:\s*"([\w-]+)"', text)
        if family:
            entry["family"] = family.group(1)
        entry["hasBadges"] = "badges:" in text
        out[ids[0]] = entry
    return out


@pytest.fixture(scope="module")
def nodes(monkeypatch_module=None):
    import os

    previous = os.environ.get("FIL_RELEASE_ALL")
    os.environ["FIL_RELEASE_ALL"] = "1"
    try:
        package = importlib.import_module("FiL_Design_ImageMind")
        ext = asyncio.run(package.comfy_entrypoint())
        return list(asyncio.run(ext.get_node_list()))
    finally:
        if previous is None:
            os.environ.pop("FIL_RELEASE_ALL", None)
        else:
            os.environ["FIL_RELEASE_ALL"] = previous


def test_contract_title_matches_schema_display_name(nodes):
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    mismatched = {}
    for node_class in nodes:
        schema = node_class.GET_SCHEMA()
        contract = NODE_SCHEMAS.get(schema.node_id)
        if contract is None or not schema.display_name:
            continue
        if contract.title != schema.display_name:
            mismatched[schema.node_id] = (contract.title, schema.display_name)

    assert not mismatched, f"contract title != schema display_name: {mismatched}"


def test_contract_min_size_matches_the_frontend_module(nodes):
    """The module value is what reaches LiteGraph; the contract must not disagree."""
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    modules = _module_presentation()
    mismatched = {}
    for node_class in nodes:
        node_id = node_class.GET_SCHEMA().node_id
        contract = NODE_SCHEMAS.get(node_id)
        module = modules.get(node_id, {})
        if contract is None or not contract.min_size or "minSize" not in module:
            continue
        if tuple(contract.min_size) != module["minSize"]:
            mismatched[node_id] = (tuple(contract.min_size), module["minSize"])

    assert not mismatched, f"contract min_size != module minSize: {mismatched}"


def test_contract_family_matches_the_frontend_module(nodes):
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    modules = _module_presentation()
    mismatched = {}
    for node_class in nodes:
        node_id = node_class.GET_SCHEMA().node_id
        contract = NODE_SCHEMAS.get(node_id)
        module = modules.get(node_id, {})
        if contract is None or not contract.family or "family" not in module:
            continue
        if contract.family != module["family"]:
            mismatched[node_id] = (contract.family, module["family"])

    assert not mismatched, f"contract family != module family: {mismatched}"


# A badge that repeats the title is noise, and the owner asked for this one to
# go: "LORA LOADER" sat beside a header already reading "🧬 LoRA Loader". The
# rule stays for every other node — a badge missing by accident still reads as
# unfinished — so the exception is listed rather than the check dropped.
NODES_WITHOUT_A_BADGE = {"FiLLoraLoader"}


def test_every_node_module_sets_a_badge(nodes):
    """A node without a badge reads as unfinished next to the rest of the pack."""
    modules = _module_presentation()
    missing = [
        node_class.GET_SCHEMA().node_id
        for node_class in nodes
        if node_class.GET_SCHEMA().node_id not in NODES_WITHOUT_A_BADGE
        and not modules.get(node_class.GET_SCHEMA().node_id, {}).get("hasBadges")
    ]
    assert not missing, f"node modules without badges: {missing}"


def test_the_badge_exceptions_are_still_badge_less(nodes):
    """A node that grows a badge again should drop off the exception list."""
    modules = _module_presentation()
    stale = [
        node_id
        for node_id in NODES_WITHOUT_A_BADGE
        if modules.get(node_id, {}).get("hasBadges")
    ]
    assert not stale, f"listed as badge-less but declares one: {stale}"
