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
}


def main() -> int:
    problems: list[str] = []
    required = [ROOT / "__init__.py", ROOT / "server_routes.py", ROOT / "frontend" / "dist" / "fil_design_imagemind.js"]
    required.extend(ROOT / "nodes" / name for name in (
        "node_seed.py", "node_provider.py", "node_scanner.py", "node_cleaner.py",
        "node_compare.py", "node_upscale.py", "node_help.py",
    ))
    for path in required:
        if not path.is_file():
            problems.append(f"missing: {path.relative_to(ROOT)}")

    for path in [ROOT / "__init__.py", ROOT / "server_routes.py", *sorted((ROOT / "common").glob("*.py")), *sorted((ROOT / "nodes").glob("*.py"))]:
        try:
            ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        except (OSError, SyntaxError) as exc:
            problems.append(f"invalid python: {path.relative_to(ROOT)}: {exc}")

    registry_path = ROOT / "common" / "node_registry.py"
    if registry_path.is_file():
        registry_source = registry_path.read_text(encoding="utf-8")
        for node_id in EXPECTED:
            if f'"{node_id}"' not in registry_source:
                problems.append(f"registry missing: {node_id}")

    if problems:
        print("FiL_Design_ImageMind preflight: FAILED")
        for problem in problems:
            print(f"- {problem}")
        return 1
    print(f"FiL_Design_ImageMind preflight: OK ({len(EXPECTED)} nodes, API, frontend, Python syntax)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
