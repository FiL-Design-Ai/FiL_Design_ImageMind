"""Static pre-flight: does the pack hold together without importing it?

Runs in CI before the test suite and needs neither torch nor a ComfyUI tree,
so everything here is read out of the source with `ast` rather than imported.

The node list used to be spelled out twice in this file — an `EXPECTED` set of
19 ids and a `NODE_FILES` tuple of the 19 modules holding them — and compared
against the same modules those tuples named. That is the shape of check
`common/contracts/registry.py` already retired one of ("a duplicated list here
only ever compared two copies of the same file's content"): adding a node meant
editing both tuples, and forgetting to made the check pass while covering one
node fewer.

`__init__.py` is the one place that has to name every node, because it imports
them. Everything below is derived from it, which turns the vacuous comparison
into four questions the source cannot answer by itself:

  * does every module `__init__.py` imports a node from exist?
  * is every imported class actually defined in the module it comes from?
  * does every one of those modules declare exactly one `node_id`?
  * is every imported class also in the list `get_node_list()` returns?
"""

from __future__ import annotations

import ast
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Directories that are not this package's source. `.kilo` and `.qwen` hold local
# agent state — one of them held a full second checkout of this repository, and
# the syntax sweep at the end of this file was parsing every duplicate in it.
PRUNED = {".git", ".venv", "venv", "node_modules", "__pycache__", ".kilo", ".qwen",
          ".ruff_cache", "_archive", ".pytest_cache", "build", "dist"}


def _entrypoint_tree() -> ast.Module:
    return ast.parse((ROOT / "__init__.py").read_text(encoding="utf-8"), filename="__init__.py")


def _declared_nodes(tree: ast.Module) -> dict[str, str]:
    """`{class name: module file}` for every node `__init__.py` imports.

    Matches `from .nodes.node_seed import FiLSeed` — a relative import whose
    module sits under `nodes.`. Written as a prefix check rather than a fixed
    list so a node added tomorrow is picked up by having been imported.
    """
    found: dict[str, str] = {}
    for node in ast.walk(tree):
        if not isinstance(node, ast.ImportFrom) or not node.level or not node.module:
            continue
        if not node.module.startswith("nodes."):
            continue
        module_file = node.module.split(".", 1)[1] + ".py"
        for alias in node.names:
            found[alias.name] = module_file
    return found


def _registered_nodes(tree: ast.Module) -> set[str]:
    """Class names in the list `get_node_list()` returns.

    The list is the argument to `filter_release_nodes([...])`; a node imported
    but left out of it registers with nobody.
    """
    for node in ast.walk(tree):
        if (
            isinstance(node, ast.Call)
            and isinstance(node.func, ast.Name)
            and node.func.id == "filter_release_nodes"
            and node.args
            and isinstance(node.args[0], ast.List)
        ):
            return {e.id for e in node.args[0].elts if isinstance(e, ast.Name)}
    return set()


def _module_facts(path: Path) -> tuple[set[str], set[str]]:
    """`(class names defined, node_ids declared)` for one node module."""
    try:
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    except (OSError, SyntaxError):
        return set(), set()
    classes = {n.name for n in ast.walk(tree) if isinstance(n, ast.ClassDef)}
    ids = {
        n.value.value
        for n in ast.walk(tree)
        if isinstance(n, ast.keyword)
        and n.arg == "node_id"
        and isinstance(n.value, ast.Constant)
        and isinstance(n.value.value, str)
    }
    return classes, ids


def _source_files() -> list[Path]:
    """Every Python file belonging to this package."""
    found: list[Path] = []
    stack = [ROOT]
    while stack:
        for entry in stack.pop().iterdir():
            if entry.is_symlink():
                continue
            if entry.is_dir():
                if entry.name not in PRUNED:
                    stack.append(entry)
            elif entry.suffix == ".py":
                found.append(entry)
    return found


def main() -> int:
    entry = ROOT / "__init__.py"
    if not entry.is_file():
        print(f"[FAIL] Missing {entry}", file=sys.stderr)
        return 1

    tree = _entrypoint_tree()
    declared = _declared_nodes(tree)
    if not declared:
        print("[FAIL] __init__.py imports no node classes from .nodes.*", file=sys.stderr)
        return 1

    registered = _registered_nodes(tree)
    unregistered = sorted(set(declared) - registered)
    if unregistered:
        print(
            f"[FAIL] Imported but never registered in get_node_list(): {unregistered}",
            file=sys.stderr,
        )
        return 1
    unknown = sorted(registered - set(declared))
    if unknown:
        print(f"[FAIL] Registered but never imported: {unknown}", file=sys.stderr)
        return 1

    node_ids: set[str] = set()
    for class_name, module_file in sorted(declared.items()):
        path = ROOT / "nodes" / module_file
        if not path.is_file():
            print(f"[FAIL] Missing node file: {path}", file=sys.stderr)
            return 1
        classes, ids = _module_facts(path)
        if class_name not in classes:
            print(f"[FAIL] {module_file} does not define {class_name}", file=sys.stderr)
            return 1
        if len(ids) != 1:
            print(
                f"[FAIL] {module_file} declares {len(ids)} node_id(s), expected exactly 1: "
                f"{sorted(ids)}",
                file=sys.stderr,
            )
            return 1
        node_ids |= ids

    if "comfy_entrypoint" not in entry.read_text(encoding="utf-8"):
        print("[FAIL] __init__.py missing comfy_entrypoint export", file=sys.stderr)
        return 1

    bundle = ROOT / "frontend" / "dist" / "fil_design_imagemind.js"
    if not bundle.is_file():
        print(f"[FAIL] Missing JS bundle: {bundle}", file=sys.stderr)
        return 1

    for py_file in _source_files():
        try:
            ast.parse(py_file.read_text(encoding="utf-8"), filename=str(py_file))
        except SyntaxError as err:
            print(f"[FAIL] Syntax error in {py_file}: {err}", file=sys.stderr)
            return 1

    print(
        f"FiL_Design_ImageMind preflight: OK ({len(node_ids)} nodes, entrypoint, "
        "frontend, Python syntax)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
