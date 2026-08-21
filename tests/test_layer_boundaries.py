"""Fixing one node must not be able to break another.

This is the one property that made the neighbouring ComfyUI-Pixaroma pack feel
solid next to this one, and it is not a matter of style: a node that reaches
into another node is a node whose behaviour two files decide. `docs/architecture.md`
has always said shared code belongs in `common/` — nothing checked it.

Exceptions are listed rather than forbidden. A dependency written down here is
visible in review and in a grep; the same dependency with no list is one nobody
finds until a change to the imported node surprises the importing one.
"""

from __future__ import annotations

import ast
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
NODES_DIR = PACKAGE_ROOT / "nodes"

# node module -> the sibling it may import, and why.
ALLOWED_NODE_IMPORTS: dict[str, dict[str, str]] = {
    "node_upscale_simple.py": {
        "node_upscale": (
            "FiLUpscaleSimple delegates to FiLUpscaleTileCalc.execute() so the two "
            "share one tiling implementation rather than two copies of the maths. "
            "The maths itself already lives in common/tile_calc.py; what is borrowed "
            "is the orchestration around it."
        ),
    },
}


def _sibling_imports(path: Path) -> set[str]:
    """Names of other `nodes/` modules this one imports."""
    tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    found: set[str] = set()
    for node in ast.walk(tree):
        # `from .node_upscale import X` — same package, so level 1 and a module
        # name that is one of this directory's own.
        if isinstance(node, ast.ImportFrom) and node.level == 1 and node.module:
            head = node.module.split(".")[0]
            if head.startswith("node_") and head != path.stem:
                found.add(head)
    return found


def test_a_node_does_not_import_another_node():
    unlisted: list[str] = []
    for path in sorted(NODES_DIR.glob("node_*.py")):
        allowed = ALLOWED_NODE_IMPORTS.get(path.name, {})
        for sibling in sorted(_sibling_imports(path)):
            if sibling not in allowed:
                unlisted.append(f"{path.name} imports {sibling}")

    assert not unlisted, (
        "\n  ".join(["node modules importing each other:"] + unlisted)
        + "\n\nShared behaviour belongs in common/. If the dependency is deliberate, "
        "add it to ALLOWED_NODE_IMPORTS here with the reason."
    )


def test_the_allowed_list_has_no_stale_entries():
    """An exception that no longer exists is a claim about code that moved on."""
    stale: list[str] = []
    for module, allowed in ALLOWED_NODE_IMPORTS.items():
        path = NODES_DIR / module
        if not path.is_file():
            stale.append(f"{module} no longer exists")
            continue
        actual = _sibling_imports(path)
        for sibling in allowed:
            if sibling not in actual:
                stale.append(f"{module} no longer imports {sibling}")

    assert not stale, (
        "\n  ".join(["ALLOWED_NODE_IMPORTS entries that no longer apply:"] + stale)
        + "\n\nRemove them — the boundary is tighter than the list admits."
    )


def test_a_node_contract_does_not_import_another_node_contract():
    """The same rule one layer down, where the contracts now live.

    Each node's contract moved into its own module under
    `common/contracts/nodes/`. Nineteen files that may import each other is the
    900-line registry again, just spread out.
    """
    contracts = PACKAGE_ROOT / "common" / "contracts" / "nodes"
    offenders: list[str] = []
    for path in sorted(contracts.glob("*.py")):
        if path.stem == "__init__":
            continue
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        for node in ast.walk(tree):
            if isinstance(node, ast.ImportFrom) and node.level == 1 and node.module:
                offenders.append(f"{path.name} imports {node.module}")

    assert not offenders, (
        "\n  ".join(["node contracts importing each other:"] + offenders)
        + "\n\nShared widget builders belong in common/contracts/widgets.py."
    )
