"""The seam between our nodes and ComfyUI's executor.

Every defect these tests exist to catch has the same shape: `execute()` names a
parameter, the executor never fills it, and nothing notices because our own
tests call `execute()` themselves and pass whatever they like. The Cleaner
shipped a shim for four inputs that could never arrive (`3c8c888`); the checks
below ask ComfyUI what it passes instead of assuming.

`tests/executor_harness.py` explains how the call is assembled.
"""

from __future__ import annotations

import inspect

import pytest

from executor_harness import (
    LINK_VALUE,
    declares,
    executor_call,
    node_classes,
    validate_call,
    wired_prompt,
)


NODE_CLASSES = node_classes()
NODE_IDS = sorted(NODE_CLASSES)

VALIDATING_IDS = [node_id for node_id in NODE_IDS if declares(NODE_CLASSES[node_id], "validate_inputs")]
FINGERPRINTING_IDS = [node_id for node_id in NODE_IDS if declares(NODE_CLASSES[node_id], "fingerprint_inputs")]


def _declared_parameters(node_class: type) -> dict[str, inspect.Parameter]:
    """Named parameters of `execute()`, without `*args` / `**kwargs`.

    `execute` is a classmethod, so `cls` is already bound out of the signature.
    """
    variadic = (inspect.Parameter.VAR_KEYWORD, inspect.Parameter.VAR_POSITIONAL)
    return {
        name: parameter
        for name, parameter in inspect.signature(node_class.execute).parameters.items()
        if parameter.kind not in variadic
    }


@pytest.mark.parametrize("node_id", NODE_IDS)
def test_every_declared_input_reaches_the_node(node_id):
    """An input in the schema arrives in the call, under the same name.

    Guards the rename: change `INPUT_TYPES` and forget `execute()`, and the
    value silently falls back to its default for every user.
    """
    node_class = NODE_CLASSES[node_id]
    call = executor_call(node_class)

    declared = {schema_input.id for schema_input in node_class.GET_SCHEMA().inputs}
    assert not declared - set(call.kwargs), (
        f"{node_id}: declared in the schema but never passed by the executor: "
        f"{sorted(declared - set(call.kwargs))}"
    )
    assert not call.missing, (
        f"{node_id}: the executor could not resolve {sorted(call.missing)}"
    )


@pytest.mark.parametrize("node_id", NODE_IDS)
def test_execute_names_no_parameter_the_executor_never_fills(node_id):
    """No parameter that only ever sees its own default.

    A parameter the executor does not know about is not a compatibility
    cushion — it is dead code that reads as live, which is how `prompt` and
    `extra_pnginfo` sat in three signatures collecting `None`. Hidden values
    are the usual temptation: in the V3 API they reach the node through
    `cls.hidden`, never as an argument.
    """
    node_class = NODE_CLASSES[node_id]
    call = executor_call(node_class)

    unfilled = set(_declared_parameters(node_class)) - set(call.kwargs)
    assert not unfilled, (
        f"{node_id}.execute() takes {sorted(unfilled)}, which the executor never "
        "passes — read hidden values through cls.hidden, and drop the rest"
    )


@pytest.mark.parametrize("node_id", NODE_IDS)
def test_the_assembled_call_binds_to_execute(node_id):
    """The call the executor makes is one `execute()` can accept.

    `f(**inputs)` in `_async_map_node_over_list` is the moment a mismatch turns
    into a TypeError mid-run, with the workflow already half executed.
    """
    node_class = NODE_CLASSES[node_id]
    call = executor_call(node_class)

    try:
        inspect.signature(node_class.execute).bind(**call.kwargs)
    except TypeError as exc:
        pytest.fail(f"{node_id}.execute() cannot take the executor's call: {exc}")


@pytest.mark.parametrize("node_id", NODE_IDS)
def test_a_wired_socket_arrives_as_the_upstream_value(node_id):
    """A link delivers what the upstream node produced, not the link itself.

    Cheap, but it pins the shape: `[node_id, slot]` in the prompt is resolved
    before the call, so a node never sees a two-element list where it expects an
    image. Only inputs with no default are wired by `wired_prompt`.
    """
    node_class = NODE_CLASSES[node_id]
    prompt = wired_prompt(node_class)
    wired = [name for name, value in prompt.items() if value == ["upstream", 0]]
    if not wired:
        pytest.skip(f"{node_id} has no socket-only inputs")

    call = executor_call(node_class, prompt)
    for name in wired:
        assert call.kwargs[name] is LINK_VALUE, (
            f"{node_id}: {name} arrived as {call.kwargs[name]!r}, not the upstream value"
        )


def test_hidden_values_are_not_arguments():
    """Pins the rule the previous test enforces, at the node that relies on it.

    Stated once, explicitly: what a schema lists under `hidden` lands in the
    hidden holder and nowhere else. Without this, a reader hitting the failure
    above has to rediscover why from ComfyUI's source.
    """
    node_class = NODE_CLASSES["FiLKSampler"]
    call = executor_call(node_class)

    declared_hidden = node_class.GET_SCHEMA().hidden
    assert declared_hidden, "FiLKSampler is the example because it declares hidden inputs"

    for hidden in declared_hidden:
        assert hidden.name not in call.kwargs, (
            f"{hidden.name} is a hidden value; it must not arrive as an argument"
        )
        assert hidden in call.hidden, f"{hidden.name} is missing from cls.hidden"


def test_a_widget_the_schema_dropped_never_reaches_the_node():
    """The Cleaner regression from `3c8c888`, pinned.

    The four per-kind switches collapsed into one `unload_models`. A saved
    workflow still carries the old names in its prompt; a compatibility shim
    reading them was written, tested green, and could never run. This is the
    test that would have said so.
    """
    node_class = NODE_CLASSES["FiLNeuroCleaner"]
    legacy = {
        "clean_vram": True,
        "unload_models": True,
        "unload_diffusion": True,
        "unload_clip": True,
        "unload_vae": True,
        "unload_controlnet": True,
    }

    call = executor_call(node_class, legacy)

    assert set(call.kwargs) == {"clean_vram", "unload_models"}, (
        "a dropped widget cannot be read from kwargs — the old value only "
        "survives as the frontend's positional mapping onto unload_models"
    )


def test_a_socket_renamed_out_of_the_schema_still_arrives_when_wired():
    """The other half of the rule, which is why the Cleaner's shim looked sound.

    `get_input_data()` resolves anything shaped like a link before it checks the
    schema, so a *wired* input under a dropped name does reach `**kwargs` — that
    is what keeps `latent_image` and `optional_vae` working in workflows saved
    before the KSampler renamed them. A dropped *widget* has no such path. The
    two cases read identically in the source, so both are pinned here.
    """
    node_class = NODE_CLASSES["FiLKSampler"]
    prompt = wired_prompt(node_class)
    del prompt["latent"]
    prompt["latent_image"] = ["upstream", 0]

    call = executor_call(node_class, prompt)

    assert call.kwargs["latent_image"] is LINK_VALUE
    assert "latent" not in call.kwargs
    inspect.signature(node_class.execute).bind(**call.kwargs)


# ── The other two entry points ──────────────────────────────────────────────
#
# `execute()` is not the only thing ComfyUI calls into. Validation and cache
# fingerprinting are assembled by separate code paths with their own rules, and
# both were unchecked — the same blind spot that let the Cleaner shim through,
# one function over.


@pytest.mark.parametrize("node_id", VALIDATING_IDS)
def test_validation_binds_to_what_the_executor_filters_in(node_id):
    """Validation is handed a filtered call, not the one `execute()` gets.

    ComfyUI reads the signature and passes only the inputs it names; a
    parameter that names nothing in the schema is simply never filled.
    """
    node_class = NODE_CLASSES[node_id]
    call = validate_call(node_class)
    validate_inputs = node_class.validate_inputs

    try:
        inspect.signature(validate_inputs).bind(**call.kwargs)
    except TypeError as exc:
        pytest.fail(f"{node_id}.validate_inputs() cannot take the executor's call: {exc}")


@pytest.mark.parametrize("node_id", VALIDATING_IDS)
def test_validation_answers_either_true_or_a_reason(node_id):
    """`True`, or a sentence the user can act on. Never anything else.

    execution.py treats every non-`True` return as a failure, and puts the
    return value itself in the message it shows. So a function that falls off
    the end returning `None` blocks the queue with "Custom validation failed"
    and no way to tell what is wrong — which is the same failure as returning
    `False`, only harder to spot in the source.

    Rejecting a default prompt is legitimate: a node may genuinely need
    configuring first, as the Provider Loader does. What is not legitimate is
    rejecting it without saying why.
    """
    node_class = NODE_CLASSES[node_id]
    call = validate_call(node_class)

    result = node_class.validate_inputs(**call.kwargs)

    if result is not True:
        assert isinstance(result, str) and result.strip(), (
            f"{node_id}.validate_inputs() returned {result!r}; a rejection has to "
            "be a message explaining what to fix"
        )


def test_the_provider_loader_rejects_its_own_placeholder_model():
    """The one node that deliberately fails validation until it is configured.

    `model`'s schema carries a static `(loading...)` placeholder — the real list
    only exists once the frontend has fetched it — so naming `model` here opts
    it out of ComfyUI's built-in COMBO membership check. That makes this
    function the only thing standing between the placeholder and a run that
    would fail much later, with a much worse message.
    """
    node_class = NODE_CLASSES["FiLProviderLoader"]
    call = validate_call(node_class)

    result = node_class.validate_inputs(**call.kwargs)

    assert isinstance(result, str) and "Provider Loader" in result


@pytest.mark.parametrize("node_id", VALIDATING_IDS)
def test_validation_sees_a_wired_socket_as_none(node_id):
    """Nothing has run yet, so a link has no value to hand over.

    Validation happens before execution and is assembled without an execution
    list, so every wired input arrives as `None` however the graph is built.
    Validation logic that inspects the *contents* of a wired input can never
    run — it has to be written for `None`, or live in `execute()`.
    """
    node_class = NODE_CLASSES[node_id]
    prompt = wired_prompt(node_class)
    wired = [name for name, value in prompt.items() if value == ["upstream", 0]]
    if not wired:
        pytest.skip(f"{node_id} has no socket-only inputs")

    call = validate_call(node_class, prompt)

    for name in wired:
        if name in call.kwargs:
            assert call.kwargs[name] is None, (
                f"{node_id}: {name} is a link, and validation runs before "
                f"anything produced it — got {call.kwargs[name]!r}"
            )


@pytest.mark.parametrize("node_id", FINGERPRINTING_IDS)
def test_fingerprinting_binds_to_the_executors_call(node_id):
    """The cache fingerprint is assembled like `execute()` but without links.

    A mismatch here does not crash the run: execution.py catches it, logs a
    warning and fingerprints the node as NaN — which marks it permanently
    dirty, so it re-runs on every queue forever.
    """
    node_class = NODE_CLASSES[node_id]
    call = executor_call(node_class, resolve_links=False)
    fingerprint_inputs = node_class.fingerprint_inputs

    try:
        inspect.signature(fingerprint_inputs).bind(**call.kwargs)
    except TypeError as exc:
        pytest.fail(f"{node_id}.fingerprint_inputs() cannot take the executor's call: {exc}")


@pytest.mark.parametrize("node_id", FINGERPRINTING_IDS)
def test_fingerprinting_names_no_parameter_the_executor_never_fills(node_id):
    """Same rule as `execute()`, and the same temptation.

    Hidden values reach a V3 node through `cls.hidden`; a `unique_id`
    parameter here would collect `None` and quietly make the fingerprint a
    constant.
    """
    node_class = NODE_CLASSES[node_id]
    call = executor_call(node_class, resolve_links=False)

    variadic = (inspect.Parameter.VAR_KEYWORD, inspect.Parameter.VAR_POSITIONAL)
    named = {
        name for name, parameter in inspect.signature(node_class.fingerprint_inputs).parameters.items()
        if parameter.kind not in variadic
    }

    unfilled = named - set(call.kwargs)
    assert not unfilled, (
        f"{node_id}.fingerprint_inputs() takes {sorted(unfilled)}, which the "
        "executor never passes"
    )
