from __future__ import annotations

from FiL_Design_ImageMind.common import sampling
from FiL_Design_ImageMind.nodes.node_ksampler import FiLKSampler


def _inputs_by_id(schema):
    return {getattr(i, "id", None): i for i in schema.inputs}


def test_output_contract_is_stable_six_values():
    schema = FiLKSampler.GET_SCHEMA()
    assert [o.display_name for o in schema.outputs] == [
        "model", "positive", "negative", "latent", "vae", "image",
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


def test_vae_and_script_are_optional():
    inputs = _inputs_by_id(FiLKSampler.GET_SCHEMA())
    assert inputs["vae"].optional is True
    assert inputs["script"].optional is True


def test_no_advanced_sampling_sockets():
    inputs = _inputs_by_id(FiLKSampler.GET_SCHEMA())
    for name in ("sampler", "sigmas", "noise"):
        assert name not in inputs, f"unexpected socket input {name}"


def test_ksampler_passes_tiled_to_hiresfix(monkeypatch):
    captured: dict = {}

    monkeypatch.setattr(sampling, "sample_unified", lambda *a, **kw: {"samples": "BASE"})
    monkeypatch.setattr(sampling, "_decode", lambda vae, latent, tiled=False: "IMAGE")

    def _fake_hiresfix(hf, **kw):
        captured.update(kw)
        return kw["latent"], []

    monkeypatch.setattr(sampling, "apply_hiresfix", _fake_hiresfix)

    FiLKSampler.execute(
        model="MODEL", seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "L"},
        vae_decode="true (tiled)", vae="VAE",
        script={"hiresfix": {"iterations": 1}},
    )
    assert captured.get("tiled") is True


def test_vae_decode_false_returns_placeholder_image(monkeypatch):
    monkeypatch.setattr(sampling, "sample_unified", lambda *a, **kw: {"samples": "BASE"})

    def _boom(*a, **kw):
        raise AssertionError("_decode must not run when vae_decode is off")

    monkeypatch.setattr(sampling, "_decode", _boom)

    result = FiLKSampler.execute(
        model="MODEL", seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "L"},
        vae_decode="false", vae=None,
    )
    assert tuple(result[5].shape) == (1, 1, 1, 3)


def test_missing_vae_forces_decode_off_even_if_widget_says_true(monkeypatch):
    monkeypatch.setattr(sampling, "sample_unified", lambda *a, **kw: {"samples": "BASE"})

    def _boom(*a, **kw):
        raise AssertionError("_decode must not run without a connected VAE")

    monkeypatch.setattr(sampling, "_decode", _boom)

    result = FiLKSampler.execute(
        model="MODEL", seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "L"},
        vae_decode="true", vae=None,
    )
    assert tuple(result[5].shape) == (1, 1, 1, 3)


def test_script_without_hiresfix_key_is_a_noop(monkeypatch):
    monkeypatch.setattr(sampling, "sample_unified", lambda *a, **kw: {"samples": "BASE"})

    def _boom(*a, **kw):
        raise AssertionError("apply_hiresfix must not run without a 'hiresfix' key")

    monkeypatch.setattr(sampling, "apply_hiresfix", _boom)

    result = FiLKSampler.execute(
        model="MODEL", seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "L"},
        vae_decode="false", script={"other": 1},
    )
    assert result[3] == {"samples": "BASE"}
