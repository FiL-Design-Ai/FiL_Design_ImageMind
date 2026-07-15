from __future__ import annotations

from FiL_Design_ImageMind.nodes.node_ksampler import FiLKSampler


def _inputs_by_id(schema):
    return {getattr(i, "id", None): i for i in schema.inputs}


def test_output_contract_is_stable_six_values():
    schema = FiLKSampler.GET_SCHEMA()
    assert [o.display_name for o in schema.outputs] == [
        "MODEL", "CONDITIONING+", "CONDITIONING-", "LATENT", "VAE", "IMAGE",
    ]


def test_exposes_full_sampler_and_scheduler_lists():
    schema = FiLKSampler.GET_SCHEMA()
    inputs = _inputs_by_id(schema)
    # Should mirror comfy's full built-in lists, not a hardcoded subset.
    import comfy.samplers

    assert inputs["sampler_name"].options == list(comfy.samplers.KSampler.SAMPLERS)
    assert inputs["scheduler"].options == list(comfy.samplers.KSampler.SCHEDULERS)
    assert len(inputs["sampler_name"].options) > 5
    assert len(inputs["scheduler"].options) > 3


def test_is_output_node_for_preview():
    schema = FiLKSampler.GET_SCHEMA()
    assert schema.is_output_node is True


def test_optional_vae_and_script_are_optional():
    inputs = _inputs_by_id(FiLKSampler.GET_SCHEMA())
    assert inputs["optional_vae"].optional is True
    assert inputs["script"].optional is True


def test_advanced_sampling_sockets_are_optional_typed_inputs():
    inputs = _inputs_by_id(FiLKSampler.GET_SCHEMA())
    for name, io_type in (("sampler", "SAMPLER"), ("sigmas", "SIGMAS"), ("noise", "NOISE")):
        assert name in inputs, f"missing socket input {name}"
        assert inputs[name].optional is True
        assert inputs[name].io_type == io_type
