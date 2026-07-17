from __future__ import annotations

import ast
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXPECTED = {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLBeforeAfterCompare",
    "FiLUpscaleTileCalc",
    "FiLKSampler",
    "FiLHighResFix",
}
NODE_FILES = (
    "node_seed.py",
    "node_provider.py",
    "node_scanner.py",
    "node_cleaner.py",
    "node_compare.py",
    "node_upscale.py",
    "node_ksampler.py",
    "node_hiresfix.py",
)


def _node_ids_in(path: Path) -> set[str]:
    """Static-extract io.Schema(node_id="...") ids from one source file."""
    try:
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    except (OSError, SyntaxError):
        return set()
    ids: set[str] = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.keyword) and node.arg == "node_id":
            if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                ids.add(node.value.value)
    return ids


def main() -> int:
    problems: list[str] = []

    required = [ROOT / "__init__.py", ROOT / "server_routes.py", ROOT / "frontend" / "dist" / "fil_design_imagemind.js"]
    required.extend(ROOT / "nodes" / name for name in NODE_FILES)
    for path in required:
        if not path.is_file():
            problems.append(f"missing: {path.relative_to(ROOT)}")

    for path in [ROOT / "__init__.py", ROOT / "server_routes.py", *sorted((ROOT / "common").glob("*.py")), *sorted((ROOT / "nodes").glob("*.py"))]:
        try:
            ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        except (OSError, SyntaxError) as exc:
            problems.append(f"invalid python: {path.relative_to(ROOT)}: {exc}")

    # Node ids declared across nodes/*.py must match the expected set exactly.
    declared: set[str] = set()
    for name in NODE_FILES:
        declared |= _node_ids_in(ROOT / "nodes" / name)
    for node_id in sorted(EXPECTED - declared):
        problems.append(f"node_id not declared: {node_id}")
    for node_id in sorted(declared - EXPECTED):
        problems.append(f"unexpected node_id: {node_id}")

    # Every expected node must be wired into the extension entrypoint
    # (class names match node_ids, so a plain substring check is enough).
    init_source = (ROOT / "__init__.py").read_text(encoding="utf-8") if (ROOT / "__init__.py").is_file() else ""
    for node_id in EXPECTED:
        if node_id not in init_source:
            problems.append(f"entrypoint missing: {node_id}")

    if problems:
        print("FiL_Design_ImageMind preflight: FAILED")
        for problem in problems:
            print(f"- {problem}")
        return 1
    print(f"FiL_Design_ImageMind preflight: OK ({len(EXPECTED)} nodes, entrypoint, frontend, Python syntax)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
