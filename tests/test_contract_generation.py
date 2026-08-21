"""`frontend/src/api/contracts.json` must be what this repo's contracts produce.

The generated artifacts are committed and the frontend imports them directly —
`contracts.json` by four test files, `contracts.ts` by the panels. Regenerating
them is a manual `npm run gen:contracts`, and until this test existed nothing
noticed when that step was skipped: the Python suite reads `registry.py`, the
frontend suite reads the stale `contracts.json`, and `sourceHash.mjs --check`
compares `frontend/src` against itself. All three stay green while the bundle
ships a contract the backend no longer describes.

This is the contract half of the guarantee `sourceHash.mjs` gives the bundle.

Numbers are compared as numbers, never as text. `seed.max` is
`0xFFFFFFFFFFFFFFFF`, which Python serialises as `1.8446744073709552e+19` and
JavaScript writes as `18446744073709552000` — the same value, two spellings, on
four different nodes. A byte comparison here would fail on every run and teach
whoever hit it to ignore this test.
"""

from __future__ import annotations

import json
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
COMMITTED = PACKAGE_ROOT / "frontend" / "src" / "api" / "contracts.json"

REGENERATE = "cd frontend && npm run gen:contracts"


def _round_trip(payload: object) -> object:
    """Put the Python payload through JSON so tuples and enums read as they ship.

    `min_size` is a tuple in Pydantic and a list once serialised; `WidgetKind`
    is an enum member and ships as its value. Comparing the live object to
    parsed JSON without this step reports differences that only exist in
    memory.
    """
    return json.loads(json.dumps(payload))


def _differences(live: object, shipped: object, path: str = "") -> list[str]:
    """Every place the two payloads disagree, as readable paths.

    Returns the paths rather than asserting per-branch so one run reports the
    whole drift instead of the first field of it.
    """
    if isinstance(live, dict) and isinstance(shipped, dict):
        out = []
        for key in sorted(set(live) | set(shipped)):
            where = f"{path}.{key}" if path else key
            if key not in shipped:
                out.append(f"{where}: only in the registry")
            elif key not in live:
                out.append(f"{where}: only in the committed file")
            else:
                out += _differences(live[key], shipped[key], where)
        return out

    if isinstance(live, list) and isinstance(shipped, list):
        if len(live) != len(shipped):
            return [f"{path}: {len(live)} entries in the registry, {len(shipped)} committed"]
        return [
            diff
            for index, (a, b) in enumerate(zip(live, shipped))
            for diff in _differences(a, b, f"{path}[{index}]")
        ]

    # bool is a subclass of int; `True == 1` must not read as a match.
    numeric = (int, float)
    if (
        isinstance(live, numeric)
        and isinstance(shipped, numeric)
        and not isinstance(live, bool)
        and not isinstance(shipped, bool)
    ):
        return [] if float(live) == float(shipped) else [f"{path}: {live!r} vs {shipped!r}"]

    return [] if live == shipped else [f"{path}: {live!r} vs {shipped!r}"]


def test_committed_contracts_match_the_registry():
    from FiL_Design_ImageMind.common.contracts import public_node_contracts_v2

    assert COMMITTED.is_file(), f"{COMMITTED} is missing — run `{REGENERATE}`"

    live = _round_trip(public_node_contracts_v2())
    shipped = json.loads(COMMITTED.read_text(encoding="utf-8"))

    drift = _differences(live, shipped)
    assert not drift, (
        "the committed contracts no longer match common/contracts/:\n  "
        + "\n  ".join(drift[:40])
        + (f"\n  ... and {len(drift) - 40} more" if len(drift) > 40 else "")
        + f"\n\nThe frontend imports this file directly, so this ships a contract the\n"
        f"backend does not describe. Regenerate and commit both artifacts:\n  {REGENERATE}"
    )


def test_the_registry_only_collects_contracts():
    """Contracts live one per module under `contracts/nodes/`, not in the registry.

    All nineteen used to be inline here, in a 900-line file importing from eight
    modules under `common/` — so changing one node's widgets meant editing the
    file every other node's contract was read from, every importer paid to build
    all nineteen, and two people touching different nodes touched the same file.

    Nothing stops a twentieth from being written back into the registry except
    this.
    """
    import ast

    registry = PACKAGE_ROOT / "common" / "contracts" / "registry.py"
    tree = ast.parse(registry.read_text(encoding="utf-8"), filename=str(registry))

    built_here = [
        node.lineno
        for node in ast.walk(tree)
        if isinstance(node, ast.Call)
        and isinstance(node.func, ast.Name)
        and node.func.id == "NodeContract"
    ]
    assert not built_here, (
        f"registry.py builds NodeContract(...) at line(s) {built_here}. "
        "Put the contract in its own module under common/contracts/nodes/ and "
        "import its CONTRACT here."
    )

    node_modules = sorted(
        p.stem for p in (PACKAGE_ROOT / "common" / "contracts" / "nodes").glob("*.py")
        if p.stem != "__init__"
    )
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    assert len(node_modules) == len(NODE_SCHEMAS), (
        f"{len(node_modules)} modules under contracts/nodes/ for "
        f"{len(NODE_SCHEMAS)} contracts: {node_modules}"
    )


def test_the_registry_does_not_depend_on_a_running_comfyui():
    """The contract must be the same on every machine, or it cannot be checked.

    `_samplers()`/`_schedulers()` used to read `comfy.samplers` and fall back to
    a one-entry list when the import failed, so this module produced 44 samplers
    on a workstation and one in a bare checkout — while `contracts.json` is
    committed. Whoever regenerated last decided what every user received, and
    the test above would have failed for everyone else.

    Sampler and scheduler lists reach the UI from the running host instead: the
    node reads them in `define_schema()`, the panel off the live widget.
    """
    import ast

    host = {"comfy", "folder_paths", "nodes", "server", "execution"}
    host_imports: list[str] = []

    # The whole package, not just registry.py: the contracts now live in
    # `common/contracts/nodes/`, which is where such an import would land.
    for path in sorted((PACKAGE_ROOT / "common" / "contracts").rglob("*.py")):
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        where = path.relative_to(PACKAGE_ROOT).as_posix()
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                host_imports += [
                    f"{where}: {a.name}" for a in node.names if a.name.split(".")[0] in host
                ]
            # `node.level` must be 0: `from .nodes.seed import ...` is this
            # package's own `contracts/nodes/`, not ComfyUI's top-level
            # `nodes.py`. They share a name and nothing else.
            elif isinstance(node, ast.ImportFrom) and not node.level and node.module:
                if node.module.split(".")[0] in host:
                    host_imports.append(f"{where}: {node.module}")

    assert not host_imports, (
        "the contract layer imports from the running host:\n  "
        + "\n  ".join(sorted(host_imports))
        + "\n\n"
        "That makes the generated contract depend on the machine that ran the "
        "generator, and `contracts.json` is committed. Declare the widget with a "
        "single-entry placeholder instead — see SAMPLER_PLACEHOLDER — and let the "
        "node's define_schema() and the panel read the live list from the host."
    )
