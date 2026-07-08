"""Dump the public FiL_LLM node contracts as JSON to stdout.

Used by `frontend/scripts/gen_contracts.mjs` to regenerate
`frontend/src/api/contracts.ts` without needing ComfyUI running. Keeps the
contract layer single-source-of-truth: this script imports the same
Pydantic models exposed by `/fil_llm/node_contracts`.

Usage::

    python scripts/dump_contracts.py > frontend/src/api/contracts.json

Exits non-zero on import failure so the TS generator stops cleanly.
"""

from __future__ import annotations

import json
import os
import sys


def main() -> int:
    # Windows consoles default to a locale codepage (e.g. cp1251) that can't
    # encode the emoji used in node descriptions — force UTF-8 regardless of
    # which Python/locale invokes this script (gen_contracts.mjs spawns the
    # system `python`, not necessarily the UTF-8-configured embedded one).
    sys.stdout.reconfigure(encoding="utf-8")
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if base not in sys.path:
        sys.path.insert(0, base)
    try:
        from common.contracts import public_node_contracts_v2
    except Exception as exc:  # pragma: no cover - exit-time diagnostic
        print(f"[dump_contracts] import failed: {exc}", file=sys.stderr)
        return 1

    payload = public_node_contracts_v2()
    json.dump(payload, sys.stdout, ensure_ascii=False, indent=2)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())