from __future__ import annotations

import asyncio
import importlib
import os
import re
from collections import Counter
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
FRONTEND_NODES_DIR = PACKAGE_ROOT / "frontend" / "src" / "nodes2" / "nodes"

_ID_RE = re.compile(r"""\bid:\s*["'](FiL\w+)["']""")


def _backend_schemas():
    """Every node class the package declares, staged ones included.

    The release gate is bypassed on purpose. Without it these checks only see
    the nodes already promoted, so a node held back for hardening — which is the
    entire point of the gate — reads as a frontend module with no backend node
    and fails `test_frontend_ids_match_backend_node_ids`. Uniqueness of ids and
    display names is also worth knowing before a node ships, not after.
    """
    package = importlib.import_module("FiL_Design_ImageMind")
    previous = os.environ.get("FIL_RELEASE_ALL")
    os.environ["FIL_RELEASE_ALL"] = "1"
    try:
        ext = asyncio.run(package.comfy_entrypoint())
        node_classes = asyncio.run(ext.get_node_list())
    finally:
        if previous is None:
            del os.environ["FIL_RELEASE_ALL"]
        else:
            os.environ["FIL_RELEASE_ALL"] = previous
    return [c.GET_SCHEMA() for c in node_classes]


def _frontend_ids() -> set[str]:
    ids: set[str] = set()
    for ts_file in FRONTEND_NODES_DIR.glob("*.ts"):
        for match in _ID_RE.finditer(ts_file.read_text(encoding="utf-8")):
            ids.add(match.group(1))
    return ids


def test_node_ids_are_unique():
    """No two nodes may share a node_id (would silently overwrite on load)."""
    ids = [s.node_id for s in _backend_schemas()]
    dupes = [i for i, n in Counter(ids).items() if n > 1]
    assert not dupes, f"duplicate node_id(s): {dupes}"


def test_display_names_are_unique():
    """Duplicate display names collide in the ComfyUI add-node menu."""
    names = [s.display_name for s in _backend_schemas()]
    dupes = [n for n, c in Counter(names).items() if c > 1]
    assert not dupes, f"duplicate display_name(s): {dupes}"


def test_frontend_ids_match_backend_node_ids():
    """Frontend registration ids must map 1:1 to backend node_ids."""
    backend = {s.node_id for s in _backend_schemas()}
    frontend = _frontend_ids()
    missing_in_frontend = backend - frontend
    orphan_in_frontend = frontend - backend
    assert not missing_in_frontend, f"node(s) without frontend module: {missing_in_frontend}"
    assert not orphan_in_frontend, f"frontend id(s) with no backend node: {orphan_in_frontend}"
