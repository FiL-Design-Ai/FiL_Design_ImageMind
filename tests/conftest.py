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
    from FiL_Design_ImageMind.common.provider_runtime import invalidate_model_cache
    invalidate_model_cache()


class _StubModelClient:
    """Drop-in replacement for the `ModelClient` singleton `node_scanner._model_client`."""

    def __init__(self, generate):
        self.generate = generate


@pytest.fixture
def stub_scanner_generate(monkeypatch):
    """Return `install(fn)`: makes FiLOpticScanner.execute() call `fn(**kwargs)` instead of a real provider.

    Swaps the MODULE-LEVEL name `node_scanner._model_client`, not the shared
    singleton instance's `.generate` attribute. `ModelClient()` is instantiated
    once at import time and reused for the whole test process; monkeypatching
    `.generate` directly onto that instance looks safe (monkeypatch undoes it
    after each test) but isn't: `.generate` only exists via the class, so
    monkeypatch's teardown captures the original *bound method* and re-`setattr`s
    it onto the instance instead of `delattr`-ing it — which pins a stray
    instance attribute on that process-wide singleton forever. That stray
    attribute then shadows any later `unittest.mock.patch("...ModelClient.generate")`
    in a different test file for the rest of the run (reproduced: broke
    test_multi_style.py, which patches the class, only once a test file sorting
    alphabetically before it started using the instance form).

    Patching the class instead has its own trap: a plain function assigned to a
    class attribute is a descriptor, so `instance.generate(...)` binds `self` as
    an implicit first positional argument — a stub written as `def fn(**kw)`
    then raises TypeError on every call (silently caught by execute()'s broad
    exception handler, surfacing only as "the stub was never called").

    Replacing the module-level `_model_client` name sidesteps both: it is a
    plain module attribute pytest's monkeypatch owns cleanly, and the stub
    object controls exactly what `self` its `.generate` sees (none).
    """
    from FiL_Design_ImageMind.nodes import node_scanner

    def install(generate):
        monkeypatch.setattr(node_scanner, "_model_client", _StubModelClient(generate))

    return install
