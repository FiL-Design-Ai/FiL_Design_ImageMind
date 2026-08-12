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
    "FiLUpscaleTileCalc",
    "FiLUpscaleSimple",
    "FiLTileAssembly",
    "FiLKSampler",
    "FiLHighResFix",
    "FiLNoiseControl",
    "FiLImageDecomposer",
    "FiLStyleMixer",
    "FiLColorWizard",
    "FiLSignalSwitch",
    "FiLDatasetForge",
    "FiLChannel",
    "FiLModelCycler",
}
NODE_FILES = (
    "node_seed.py",
    "node_provider.py",
    "node_scanner.py",
    "node_cleaner.py",
    "node_upscale.py",
    "node_upscale_simple.py",
    "node_tile_assembly.py",
    "node_ksampler.py",
    "node_hiresfix.py",
    "node_noise_control.py",
    "node_decomposer.py",
    "node_style_mixer.py",
    "node_color_wizard.py",
    "node_switch.py",
    "node_dataset.py",
    "node_channel.py",
    "node_model_cycler.py",
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
    nodes_dir = ROOT / "nodes"
    found: set[str] = set()
    for f_name in NODE_FILES:
        p = nodes_dir / f_name
        if not p.is_file():
            print(f"[FAIL] Missing node file: {p}", file=sys.stderr)
            return 1
        found |= _node_ids_in(p)

    missing = EXPECTED - found
    if missing:
        print(f"[FAIL] Missing expected node_ids: {sorted(missing)}", file=sys.stderr)
        return 1

    entry = ROOT / "__init__.py"
    if not entry.is_file():
        print(f"[FAIL] Missing {entry}", file=sys.stderr)
        return 1
    source = entry.read_text(encoding="utf-8")
    if "def comfy_entrypoint" not in source and "comfy_entrypoint" not in source:
        print("[FAIL] __init__.py missing comfy_entrypoint export", file=sys.stderr)
        return 1

    bundle = ROOT / "frontend" / "dist" / "fil_design_imagemind.js"
    if not bundle.is_file():
        print(f"[FAIL] Missing JS bundle: {bundle}", file=sys.stderr)
        return 1

    for py_file in ROOT.glob("**/*.py"):
        if ".venv" in py_file.parts or "node_modules" in py_file.parts:
            continue
        try:
            ast.parse(py_file.read_text(encoding="utf-8"), filename=str(py_file))
        except SyntaxError as err:
            print(f"[FAIL] Syntax error in {py_file}: {err}", file=sys.stderr)
            return 1

    print(f"FiL_Design_ImageMind preflight: OK ({len(found)} nodes, entrypoint, frontend, Python syntax)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
