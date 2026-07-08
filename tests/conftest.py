from __future__ import annotations

import pytest
import sys
from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
COMFY_ROOT = PACKAGE_ROOT.parents[1]
CUSTOM_NODES_ROOT = PACKAGE_ROOT.parent

for path in (str(COMFY_ROOT), str(CUSTOM_NODES_ROOT)):
    if path not in sys.path:
        sys.path.insert(0, path)


@pytest.fixture(autouse=True)
def _clear_model_cache():
    """Clear the TTL model cache between tests to avoid stale state."""
    from FiL_LLM.common.provider_runtime import invalidate_model_cache
    invalidate_model_cache()
