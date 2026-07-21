from __future__ import annotations

from FiL_Design_ImageMind.nodes.node_noise_control import FiLNoiseControl


def _inputs_by_id(schema):
    return {getattr(i, "id", None): i for i in schema.inputs}


def _base_kwargs(**over):
    kwargs = dict(rng_source="cpu", add_seed_noise=False, seed=0, weight=0.5)
    kwargs.update(over)
    return kwargs


def test_output_is_script_socket():
    schema = FiLNoiseControl.GET_SCHEMA()
    assert len(schema.outputs) == 1
    assert schema.outputs[0].io_type == "FIL_HIRES_SCRIPT"


def test_script_input_is_optional():
    inputs = _inputs_by_id(FiLNoiseControl.GET_SCHEMA())
    assert inputs["script"].optional is True


def test_rng_source_options():
    inputs = _inputs_by_id(FiLNoiseControl.GET_SCHEMA())
    assert inputs["rng_source"].options == ["cpu", "gpu"]


def test_execute_packs_noise_control_dict():
    out = FiLNoiseControl.execute(**_base_kwargs(rng_source="gpu", add_seed_noise=True, seed=123, weight=0.7))
    script = out[0]
    assert script["noise_control"] == {
        "rng_source": "gpu", "add_seed_noise": True, "seed": 123, "weight": 0.7,
    }


def test_execute_extends_upstream_script_without_mutating_it():
    upstream = {"hiresfix": {"iterations": 1}}
    out = FiLNoiseControl.execute(**_base_kwargs(script=upstream))
    script = out[0]
    assert script["hiresfix"] == {"iterations": 1}
    assert "noise_control" in script
    assert "noise_control" not in upstream
