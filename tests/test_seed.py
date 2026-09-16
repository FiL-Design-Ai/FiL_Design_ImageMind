from __future__ import annotations

import pytest
from FiL_Design_ImageMind.nodes.node_seed import FiLSeed, SEED_MAX


def test_seed_schema():
    schema = FiLSeed.GET_SCHEMA()
    assert schema.node_id == "FiLSeed"
    assert len(schema.inputs) == 1
    seed_input = schema.inputs[0]
    assert seed_input.id == "seed"
    assert seed_input.default == 0
    assert seed_input.min == 0
    assert seed_input.max == SEED_MAX
    assert getattr(seed_input, "control_after_generate", False) is True

    assert len(schema.outputs) == 1
    assert schema.outputs[0].id == "SEED"
    assert schema.outputs[0].io_type == "INT"


def test_seed_fingerprint():
    assert FiLSeed.fingerprint_inputs(12345) == 12345
    assert FiLSeed.fingerprint_inputs(0) == 0
    assert FiLSeed.fingerprint_inputs(SEED_MAX) == SEED_MAX


@pytest.mark.parametrize("value", [0, 42, 123456789, SEED_MAX])
def test_seed_execute(value: int):
    res = FiLSeed.execute(seed=value)
    assert res[0] == value
