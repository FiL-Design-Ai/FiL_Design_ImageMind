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

    source = (PACKAGE_ROOT / "common" / "contracts" / "registry.py").read_text(encoding="utf-8")
    tree = ast.parse(source)

    host_imports = sorted(
        {
            name.name
            for node in ast.walk(tree)
            if isinstance(node, ast.Import)
            for name in node.names
            if name.name.split(".")[0] in {"comfy", "folder_paths", "nodes"}
        }
        | {
            node.module
            for node in ast.walk(tree)
            if isinstance(node, ast.ImportFrom)
            and node.module
            and node.module.split(".")[0] in {"comfy", "folder_paths", "nodes"}
        }
    )

    assert not host_imports, (
        "common/contracts/registry.py imports from the running host: "
        f"{host_imports}\n\n"
        "That makes the generated contract depend on the machine that ran the "
        "generator, and `contracts.json` is committed. Declare the widget with a "
        "single-entry placeholder instead — see SAMPLER_PLACEHOLDER — and let the "
        "node's define_schema() and the panel read the live list from the host."
    )
