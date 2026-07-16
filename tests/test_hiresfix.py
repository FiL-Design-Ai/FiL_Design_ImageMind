from __future__ import annotations

from FiL_Design_ImageMind.common.sampling import apply_hiresfix
from FiL_Design_ImageMind.nodes.node_hiresfix import FiLHighResFix


def _inputs_by_id(schema):
    return {getattr(i, "id", None): i for i in schema.inputs}


def _base_kwargs(**over):
    kwargs = dict(
        upscale_type="latent",
        hires_ckpt_name="(use same)",
        latent_upscaler="nearest-exact",
        pixel_upscaler="(none)",
        upscale_by=1.5,
        use_same_seed=True,
        seed=42,
        hires_steps=10,
        denoise=0.5,
        iterations=2,
        use_controlnet=False,
        control_net_name=None,
        strength=1.0,
    )
    kwargs.update(over)
    return kwargs


def test_output_is_script_socket():
    schema = FiLHighResFix.GET_SCHEMA()
    assert len(schema.outputs) == 1
    assert schema.outputs[0].io_type == "FIL_HIRES_SCRIPT"


def test_no_advanced_sampling_sockets():
    inputs = _inputs_by_id(FiLHighResFix.GET_SCHEMA())
    for name in ("sampler", "sigmas"):
        assert name not in inputs, f"unexpected socket input {name}"


def test_execute_packs_hiresfix_dict():
    out = FiLHighResFix.execute(**_base_kwargs())
    script = out[0]
    assert "hiresfix" in script
    hf = script["hiresfix"]
    assert hf["upscale_type"] == "latent"
    assert hf["upscale_by"] == 1.5
    assert hf["iterations"] == 2
    assert hf["control_net"] is None


def test_execute_extends_upstream_script_without_mutating_it():
    upstream = {"other": 1}
    out = FiLHighResFix.execute(**_base_kwargs(script=upstream))
    script = out[0]
    assert script["other"] == 1
    assert "hiresfix" in script
    assert "hiresfix" not in upstream  # upstream dict left untouched


def test_pixel_none_normalized_to_none():
    out = FiLHighResFix.execute(**_base_kwargs(upscale_type="pixel", pixel_upscaler="(none)"))
    assert out[0]["hiresfix"]["pixel_upscaler"] is None


def test_apply_hiresfix_noop_when_zero_iterations():
    latent = {"samples": "SENTINEL"}
    result, warnings = apply_hiresfix(
        {"iterations": 0, "upscale_by": 2.0},
        model=None, positive=None, negative=None, vae=None,
        latent=latent, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert result is latent
    assert warnings == []


def test_apply_hiresfix_warns_when_pixel_needs_vae():
    latent = {"samples": "SENTINEL"}
    result, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "pixel", "pixel_upscaler": "x.pth"},
        model=None, positive=None, negative=None, vae=None,
        latent=latent, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert result is latent
    assert any("VAE" in w for w in warnings)
