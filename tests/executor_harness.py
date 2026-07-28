"""What ComfyUI's executor actually hands a node.

A test that calls `execute()` directly proves only that our own beliefs are
self-consistent. The Cleaner's compatibility shim had a green test of exactly
that shape and could never run (`3c8c888`): the executor does not pass an input
the schema no longer declares, whatever the prompt carries, and no test asking
the node directly can notice.

So this harness does not describe the executor — it *calls* it. `get_input_data`
comes from ComfyUI's own `execution.py`, and the step from its result to the
node's keyword arguments mirrors `_async_map_node_over_list` (the `slice_dict`
of index 0, then `build_nested_inputs` for a V3 class). When ComfyUI changes how
a call is assembled, these tests change with it instead of quietly going stale.
"""

from __future__ import annotations

import asyncio
import importlib
import os
from dataclasses import dataclass
from typing import Any

import execution
from comfy_api.latest import io


@dataclass(frozen=True)
class ExecutorCall:
    """One assembled call, as the executor would make it."""

    kwargs: dict[str, Any]
    """Exactly what arrives as keyword arguments to the node's `execute()`."""

    missing: dict[str, bool]
    """Inputs the executor could not resolve — a link with nothing upstream."""

    hidden: dict[io.Hidden, Any]
    """Hidden values, which a V3 node reaches through `cls.hidden`, not arguments."""


def node_classes() -> dict[str, type]:
    """Every node class the pack registers, keyed by node_id.

    `FIL_RELEASE_ALL` bypasses the release gate so nodes held back from a public
    build are covered too. It is set and restored here rather than through
    monkeypatch because the list is built at collection time, to parametrize by
    node_id — the fixture does not exist yet at that point.
    """
    previous = os.environ.get("FIL_RELEASE_ALL")
    os.environ["FIL_RELEASE_ALL"] = "1"
    try:
        package = importlib.import_module("FiL_Design_ImageMind")
        extension = asyncio.run(package.comfy_entrypoint())
        classes = asyncio.run(extension.get_node_list())
    finally:
        if previous is None:
            os.environ.pop("FIL_RELEASE_ALL", None)
        else:
            os.environ["FIL_RELEASE_ALL"] = previous
    return {node_class.GET_SCHEMA().node_id: node_class for node_class in classes}


_LINK_SOURCE = "upstream"

LINK_VALUE = object()
"""Stands in for whatever an upstream node produced; identity is what gets asserted."""


class _CachedOutputs:
    def __init__(self, outputs: list[list[Any]]) -> None:
        self.outputs = outputs


class _ExecutionList:
    """The one method `get_input_data()` calls on the execution list.

    Every link in a harness prompt points at the same fake upstream node, whose
    single output slot holds `value`. That is enough for `get_input_data` to
    treat the link as resolved instead of recording it as missing.
    """

    def __init__(self, value: Any) -> None:
        self._value = value

    def get_cache(self, node_id: str, unique_id: str) -> _CachedOutputs:
        if node_id != _LINK_SOURCE:
            return None
        return _CachedOutputs([[self._value]])


def wired_prompt(node_class: type) -> dict[str, Any]:
    """The `inputs` of a node with everything supplied.

    An input carrying a default appears as that literal, the way the frontend
    sends a widget; one without appears as a link, the way a wired socket does.
    Maximal on purpose: it is the case where every declared input should reach
    the node, so anything absent from the call is absent by the executor's rules
    rather than because the prompt never mentioned it.
    """
    inputs: dict[str, Any] = {}
    for schema_input in node_class.GET_SCHEMA().inputs:
        default = getattr(schema_input, "default", None)
        inputs[schema_input.id] = [_LINK_SOURCE, 0] if default is None else default
    return inputs


def hidden_values(node_class: type, unique_id: str = "1") -> dict[io.Hidden, Any]:
    """What `get_input_data()` puts in the hidden holder for this node.

    Same values, same source of truth: only what the schema declares under
    `hidden` is there, and `prompt` with nothing queued is `{}`.
    """
    filled = {io.Hidden.prompt: {}, io.Hidden.unique_id: unique_id}
    return {
        hidden: filled.get(hidden, None)
        for hidden in (node_class.GET_SCHEMA().hidden or [])
    }


def as_the_executor_calls_it(node_class: type, *, hidden: dict[io.Hidden, Any] | None = None):
    """`execute` bound the way the executor binds it.

    A V3 node does not run on its own class. The executor hands it a locked
    clone carrying the hidden values (`PREPARE_CLASS_CLONE`), which is what
    makes `cls.hidden` readable; calling `NodeClass.execute(...)` straight from
    a test skips that step, so anything reaching for `cls.hidden` blows up in
    the test while working in the app — or the reverse, which is worse.
    """
    v3_data = {"hidden_inputs": hidden if hidden is not None else hidden_values(node_class)}
    class_clone = node_class.PREPARE_CLASS_CLONE(v3_data)
    return execution.make_locked_method_func(node_class, "execute", class_clone)


def executor_call(
    node_class: type,
    inputs: dict[str, Any] | None = None,
    *,
    unique_id: str = "1",
    link_value: Any = LINK_VALUE,
    extra_data: dict[str, Any] | None = None,
) -> ExecutorCall:
    """Assemble the call ComfyUI would make into `node_class.execute()`."""
    if inputs is None:
        inputs = wired_prompt(node_class)

    input_data_all, missing, v3_data = execution.get_input_data(
        inputs,
        node_class,
        unique_id,
        execution_list=_ExecutionList(link_value),
        dynprompt=None,
        extra_data=extra_data or {},
    )

    # `_async_map_node_over_list` slices index 0 out of every input, then folds
    # dynamic inputs back into their nested shape for a V3 class.
    sliced = {name: values[0] for name, values in input_data_all.items()}
    kwargs = execution._io.build_nested_inputs(sliced, v3_data)

    return ExecutorCall(
        kwargs=kwargs,
        missing=missing,
        hidden=v3_data.get("hidden_inputs", {}),
    )
