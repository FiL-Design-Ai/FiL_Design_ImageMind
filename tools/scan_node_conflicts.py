"""Scan every installed custom_nodes pack for duplicate node registrations.

Two custom-node packs that register the same identifier collide: ComfyUI keeps
only the one loaded last, silently breaking the other. This offline scanner walks
the whole ``custom_nodes`` tree and reports every id claimed by more than one pack,
plus any pack that reuses one of our own FiL ids.

Usage (from the ComfyUI embedded interpreter or any Python 3.10+):

    python tools/scan_node_conflicts.py

Exit code is non-zero when a conflict involving this pack is found.
"""
from __future__ import annotations

import ast
import warnings
from collections import defaultdict
from pathlib import Path

# Other packs' sources may contain invalid escape sequences; ast.parse warns on them.
warnings.filterwarnings("ignore", category=SyntaxWarning)

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
CUSTOM_NODES_ROOT = PACKAGE_ROOT.parent
OUR_PACK = PACKAGE_ROOT.name

OUR_IDS = {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLBeforeAfterCompare",
    "FiLUpscaleTileCalc",
    "FiLKSampler",
    "FiLHighResFix",
}


def _ids_in_source(source: str) -> set[str]:
    """Extract node identifiers from one .py file (V3 node_id + V1 mappings)."""
    ids: set[str] = set()
    try:
        tree = ast.parse(source)
    except SyntaxError:
        return ids

    for node in ast.walk(tree):
        # V3: io.Schema(node_id="...")
        if isinstance(node, ast.keyword) and node.arg == "node_id":
            if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                ids.add(node.value.value)
        # V1: NODE_CLASS_MAPPINGS = { "Key": Cls, ... }
        if isinstance(node, ast.Assign):
            targets = {t.id for t in node.targets if isinstance(t, ast.Name)}
            if "NODE_CLASS_MAPPINGS" in targets and isinstance(node.value, ast.Dict):
                for key in node.value.keys:
                    if isinstance(key, ast.Constant) and isinstance(key.value, str):
                        ids.add(key.value)
    return ids


def scan() -> dict[str, set[str]]:
    """Map node_id -> set of pack names that register it."""
    owners: dict[str, set[str]] = defaultdict(set)
    for pack in sorted(CUSTOM_NODES_ROOT.iterdir()):
        if not pack.is_dir() or pack.name.startswith((".", "__")):
            continue
        for py in pack.rglob("*.py"):
            if any(part in {"__pycache__", ".git", "node_modules"} for part in py.parts):
                continue
            try:
                source = py.read_text(encoding="utf-8", errors="ignore")
            except OSError:
                continue
            for node_id in _ids_in_source(source):
                owners[node_id].add(pack.name)
    return owners


def main() -> int:
    owners = scan()
    duplicates = {nid: packs for nid, packs in owners.items() if len(packs) > 1}
    our_conflicts = {
        nid: packs for nid, packs in duplicates.items() if OUR_PACK in packs
    }

    print(f"Scanned {CUSTOM_NODES_ROOT}")
    print(f"  packs with node ids : {len({p for ps in owners.values() for p in ps})}")
    print(f"  distinct node ids   : {len(owners)}")
    print(f"  duplicate ids total : {len(duplicates)}")

    if our_conflicts:
        print("\n[FAIL] ids we register that another pack also claims:")
        for nid, packs in sorted(our_conflicts.items()):
            print(f"  {nid}: {', '.join(sorted(packs))}")
    else:
        print(f"\n[OK] none of our {len(OUR_IDS)} ids collide with any other pack.")

    if duplicates:
        others = {n: p for n, p in duplicates.items() if n not in our_conflicts}
        if others:
            print("\n[INFO] duplicate ids between other packs (they conflict with each other):")
            for nid, packs in sorted(others.items()):
                print(f"  {nid}: {', '.join(sorted(packs))}")

    return 1 if our_conflicts else 0


if __name__ == "__main__":
    raise SystemExit(main())
