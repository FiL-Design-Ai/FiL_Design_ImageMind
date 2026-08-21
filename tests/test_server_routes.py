"""Route handlers, called the way aiohttp calls them.

`tests/test_model_cycler.py::test_sort_models_logic` was named after the
`/sort_models` route and never touched it: it re-implemented the sorting inside
the test and asserted on its own copy. It passed for as long as it existed
while the real handler raised `NameError` on the first line it reached, because
`re` and `os` were used there and imported nowhere — seven F821s that `ruff`
reported the whole time, in a job failing on unrelated noise.

So the handlers are exercised here instead. `register_routes()` builds them as
closures inside a `PromptServer.instance`, which is why nothing reached them
before; `_handlers()` supplies a stand-in server that records what gets
registered, which is the same trick `frontend/tests/fakes/comfyHost.ts` uses on
the other side of the seam.
"""

from __future__ import annotations

import asyncio
import json

import pytest


class _Recorder:
    """Stands in for `PromptServer.instance.routes`, keeping what it is handed.

    aiohttp's decorators return the function unchanged, so stacked routes on one
    handler (`/model_preview` and `/model_preview/{mode}`) register it twice —
    recorded under both, which is what the real router does too.
    """

    def __init__(self) -> None:
        self.handlers: dict[str, object] = {}

    def __getattr__(self, verb: str):
        # get / post / delete / put — whatever a route is declared with. Written
        # as `__getattr__` rather than a list so a handler added under a new verb
        # is recorded instead of raising AttributeError halfway through
        # registration, which is what a hand-listed `get = post = ...` did.
        if verb.startswith("_"):
            raise AttributeError(verb)

        def route(_path):
            def decorate(handler):
                self.handlers[handler.__name__] = handler
                return handler

            return decorate

        return route


class _Server:
    def __init__(self) -> None:
        self.routes = _Recorder()


class _Request:
    """The parts of `aiohttp.web.Request` these handlers read."""

    def __init__(self, payload=None, query=None, headers=None):
        self._payload = payload
        self.query = query or {}
        self.headers = headers or {}
        self.match_info: dict[str, str] = {}

    async def json(self):
        if self._payload is None:
            raise ValueError("no body")
        return self._payload


def _handlers() -> dict[str, object]:
    """Every route handler `register_routes()` declares."""
    import FiL_Design_ImageMind.server_routes as routes

    server = _Server()
    # `register_routes()` returns early unless it can reach a real PromptServer,
    # and sets a module-level flag so it only ever runs once. Neither helps a
    # test, so the body is re-run against the stand-in.
    original = routes._ROUTES_REGISTERED
    routes._ROUTES_REGISTERED = False
    try:
        import sys
        import types

        stub = types.ModuleType("server")
        stub.PromptServer = type("PromptServer", (), {"instance": server})
        previous = sys.modules.get("server")
        sys.modules["server"] = stub
        try:
            routes.register_routes()
        finally:
            if previous is None:
                del sys.modules["server"]
            else:
                sys.modules["server"] = previous
    finally:
        routes._ROUTES_REGISTERED = original
    return server.routes.handlers


def _body(response) -> dict:
    return json.loads(response.body.decode("utf-8"))


@pytest.fixture
def handlers(monkeypatch):
    # The mutating routes refuse a cross-site request; a test has no Origin at
    # all, which the guard already treats as a non-browser caller, but the
    # escape hatch keeps this independent of that decision.
    monkeypatch.setenv("FIL_ALLOW_CROSS_SITE", "1")
    return _handlers()


def test_register_routes_declares_the_documented_endpoints(handlers):
    for name in ("health", "sort_models", "node_contracts", "list_providers"):
        assert name in handlers, f"{name} is not registered: {sorted(handlers)}"


def test_sort_models_sorts_by_name(handlers):
    """The case the old test only pretended to cover."""
    response = asyncio.run(handlers["sort_models"](_Request({
        "mode": "checkpoints",
        "sort_by": "name_asc",
        "models": ["# zebra.safetensors", "beta.safetensors", "alpha.safetensors"],
    })))

    assert response.status == 200
    assert _body(response)["sorted_models"] == [
        "alpha.safetensors",
        "beta.safetensors",
        "# zebra.safetensors",
    ]


def test_sort_models_puts_enabled_first(handlers):
    """A `#` prefix is how the cycler spells "skip this one"."""
    response = asyncio.run(handlers["sort_models"](_Request({
        "sort_by": "enabled_first",
        "models": ["# off.safetensors", "on.safetensors"],
    })))

    assert _body(response)["sorted_models"] == ["on.safetensors", "# off.safetensors"]


def test_sort_models_keeps_the_commented_prefix_it_was_given(handlers):
    """`clean` is for comparing; what goes back is the caller's own string.

    Returning the stripped name would silently re-enable every disabled model
    in the queue.
    """
    response = asyncio.run(handlers["sort_models"](_Request({
        "sort_by": "name_asc",
        "models": ["#  spaced.safetensors"],
    })))

    assert _body(response)["sorted_models"] == ["#  spaced.safetensors"]


def test_sort_models_rejects_a_models_field_that_is_not_a_list(handlers):
    response = asyncio.run(handlers["sort_models"](_Request({"models": "everything"})))
    assert response.status == 400


def test_sort_models_rejects_an_unparseable_body(handlers):
    response = asyncio.run(handlers["sort_models"](_Request(None)))
    assert response.status == 400
