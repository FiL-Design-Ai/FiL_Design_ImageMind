"""A number outside the schema's range must not reach the node.

ComfyUI checks every numeric input against the ``min``/``max`` its schema
declares — except on nodes whose ``validate_inputs()`` takes ``**kwargs``,
where it skips the check for *all* inputs (execution.py: ``if x not in
validate_function_inputs and not validate_has_kwargs``). Optic Scanner,
Dataset Forge and Image Decomposer are all in that position.

That silence is what let a fixed seed ~9000x the declared maximum travel from
the panel's "New fixed" button to the provider API, which cannot represent it
and substitutes its own — a pinned seed producing a new answer every run.

These tests go through ``executor_harness.validate_call()``, which assembles
the call the way execution.py does (signature-filtered, links unresolved),
rather than calling ``validate_inputs()`` with hand-picked arguments.
"""

from typing import Any

import pytest

from executor_harness import node_classes, validate_call

NODE_CLASSES = node_classes()

# The three nodes whose `**kwargs` turns the host's range check off. Their
# `seed` is forwarded to a provider API, so its ceiling is far below the
# 64-bit one the sampler nodes use.
KWARGS_VALIDATING_IDS = ["FiLOpticScanner", "FiLDatasetForge", "FiLImageDecomposer"]

PROVIDER_SEED_MAX = 999999999999


def _validate(node_id: str, inputs: dict[str, Any]):
    node_class = NODE_CLASSES[node_id]
    call = validate_call(node_class, inputs)
    return node_class.validate_inputs(**call.kwargs)


def test_the_host_really_does_skip_these_nodes():
    """The premise, checked against ComfyUI's own source rather than assumed.

    If a future ComfyUI stops making the check all-or-nothing per node, these
    tests become belt-and-braces instead of the only line of defence — and this
    is the test that will say so.
    """
    import inspect

    for node_id in KWARGS_VALIDATING_IDS:
        argspec = inspect.getfullargspec(NODE_CLASSES[node_id].validate_inputs)
        assert argspec.varkw is not None, (
            f"{node_id}.validate_inputs() no longer takes **kwargs — the host "
            "validates its ranges again, so check whether this module is still needed"
        )


@pytest.mark.parametrize("node_id", KWARGS_VALIDATING_IDS)
def test_a_default_prompt_still_validates(node_id):
    """The check must not reject the values the schema itself defaults to."""
    result = _validate(node_id, {})
    assert result is True or isinstance(result, str)
    if isinstance(result, str):
        # Whatever it complains about, it must not be a range.
        assert "maximum" not in result and "minimum" not in result, result


def test_seed_above_the_declared_maximum_is_rejected():
    result = _validate("FiLOpticScanner", {"seed": PROVIDER_SEED_MAX + 1})
    assert isinstance(result, str), "an out-of-range seed has to be refused"
    assert "seed" in result and "maximum" in result, result


def test_the_seed_the_panel_used_to_draw_is_rejected():
    """The exact shape of the bug: `Math.random() * Number.MAX_SAFE_INTEGER`."""
    result = _validate("FiLOpticScanner", {"seed": 9007199254740991})
    assert isinstance(result, str) and "seed" in result, result


def test_seed_below_the_declared_minimum_is_rejected():
    result = _validate("FiLOpticScanner", {"seed": -2})
    assert isinstance(result, str), "-1 is the lowest the schema allows"
    assert "minimum" in result, result


@pytest.mark.parametrize("seed", [-1, 0, 1, PROVIDER_SEED_MAX])
def test_every_seed_inside_the_range_passes(seed):
    """Both edges included, and 0 — which the panels used to read back as -1."""
    result = _validate("FiLOpticScanner", {"seed": seed})
    assert result is True, result


def test_a_wired_input_is_not_judged():
    """A link's value is unknowable at validation time and arrives as None.

    `validate_inputs()` is assembled with no execution list, so upstream
    outputs are not available — refusing the prompt over that would block every
    graph that feeds the seed from a wire.
    """
    result = _validate("FiLOpticScanner", {"seed": None})
    assert result is True, result


def test_other_numeric_inputs_are_covered_too():
    """Not a seed-shaped patch: the check reads the whole schema.

    `width`/`height` are socket-only inputs — exactly the path the frontend
    clamp cannot reach.
    """
    result = _validate("FiLOpticScanner", {"width": 16385})
    assert isinstance(result, str) and "width" in result, result


def test_dataset_forge_shares_the_check():
    result = _validate("FiLDatasetForge", {"seed": PROVIDER_SEED_MAX + 1})
    assert isinstance(result, str) and "seed" in result, result
