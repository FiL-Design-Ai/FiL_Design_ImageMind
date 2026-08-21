"""A node is more than a Python class — every layer it needs must be there.

`tests/test_node_contracts.py` already checks the two seams that were paid for
with a shipped defect: a node class with no contract, and a node id with no
`nodes2/nodes/*.ts` module. The layer below that one had nothing on it. Each
node module loads its panel through

    defineAsyncComponent(() => import("@/components/nodes/Seed.vue"))

which resolves when the node is first dropped on a canvas, in a browser, with
the failure arriving as a rejected chunk rather than a build error. Renaming or
moving a panel is a one-line change that looks complete and stays silent until
someone opens the graph — the smoke suite catches it, but only where a real
ComfyUI is running, which is the slowest and least available check there is.

These are static and read the source, so they run in the ordinary suite.
"""

from __future__ import annotations

import re
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
FRONTEND_SRC = PACKAGE_ROOT / "frontend" / "src"
NODE_MODULES_DIR = FRONTEND_SRC / "nodes2" / "nodes"

_ID_RE = re.compile(r"""\bid:\s*["'](FiL\w+)["']""")
# Any `@/...` module path a node module imports, static or dynamic. The panels
# arrive through `import()` inside `defineAsyncComponent`, so a check that only
# read top-level imports would miss every one of them.
_ALIAS_IMPORT_RE = re.compile(r"""["'](@/[^"']+)["']""")

# Nodes that deliberately ship no Vue panel — native ComfyUI widgets only.
# Kept as the place to record such a decision, mirroring NODES_WITHOUT_PANELS
# in the smoke suite.
NODES_WITHOUT_PANELS: set[str] = set()


def _node_modules() -> dict[str, Path]:
    """`{node id: nodes2/nodes/*.ts path}`."""
    found: dict[str, Path] = {}
    for path in sorted(NODE_MODULES_DIR.glob("*.ts")):
        match = _ID_RE.search(path.read_text(encoding="utf-8"))
        if match:
            found[match.group(1)] = path
    return found


def _resolve(alias: str) -> Path:
    """`@/components/nodes/Seed.vue` -> the file it names."""
    return FRONTEND_SRC / alias[len("@/"):]


def test_every_alias_import_in_a_node_module_resolves_to_a_file():
    """Including the dynamic ones, which is the whole point.

    A static `import` is checked by `vue-tsc`. The panel imports are inside
    `defineAsyncComponent(() => import(...))` and only resolve at runtime, in
    the browser, the first time that node is created.
    """
    broken: list[str] = []
    for node_id, path in _node_modules().items():
        source = path.read_text(encoding="utf-8")
        for alias in sorted(set(_ALIAS_IMPORT_RE.findall(source))):
            target = _resolve(alias)
            # A bare `@/components/widgets` style import resolves through the
            # directory's index; anything with a suffix must exist as written.
            if target.suffix:
                if not target.is_file():
                    broken.append(f"{node_id} ({path.name}): {alias}")
            elif not target.is_dir() and not target.with_suffix(".ts").is_file():
                broken.append(f"{node_id} ({path.name}): {alias}")

    assert not broken, (
        "node modules import files that do not exist:\n  " + "\n  ".join(broken)
    )


def test_every_node_mounts_a_panel_that_exists():
    """Each node either loads a `components/nodes/*.vue`, or is a declared exception."""
    missing: list[str] = []
    for node_id, path in _node_modules().items():
        if node_id in NODES_WITHOUT_PANELS:
            continue
        panels = [
            alias
            for alias in _ALIAS_IMPORT_RE.findall(path.read_text(encoding="utf-8"))
            if alias.startswith("@/components/nodes/") and alias.endswith(".vue")
        ]
        if not panels:
            missing.append(f"{node_id} ({path.name}) mounts no panel")
            continue
        for alias in panels:
            if not _resolve(alias).is_file():
                missing.append(f"{node_id} ({path.name}) -> {alias} does not exist")

    assert not missing, (
        "\n  ".join(["node panels that are not there:"] + missing)
        + "\n\nIf a node is meant to use native ComfyUI widgets only, add its id to "
        "NODES_WITHOUT_PANELS here and in frontend/tests/smoke/allNodes.spec.ts."
    )


def test_the_two_no_panel_lists_agree():
    """The smoke suite keeps the same exception list; they must not drift apart.

    Two lists is one more than ideal, but the smoke spec runs in Playwright's
    runtime and cannot import Python. Comparing them is what makes the
    duplication safe.
    """
    spec = (
        PACKAGE_ROOT / "frontend" / "tests" / "smoke" / "allNodes.spec.ts"
    ).read_text(encoding="utf-8")
    block = re.search(
        r"NODES_WITHOUT_PANELS\s*=\s*new Set<string>\(\[(.*?)\]\)", spec, re.DOTALL
    )
    assert block, "could not find NODES_WITHOUT_PANELS in allNodes.spec.ts"

    in_spec = set(re.findall(r"""["'](FiL\w+)["']""", block.group(1)))
    assert in_spec == NODES_WITHOUT_PANELS, (
        f"only in the spec: {sorted(in_spec - NODES_WITHOUT_PANELS)}; "
        f"only in this file: {sorted(NODES_WITHOUT_PANELS - in_spec)}"
    )
