from __future__ import annotations

from FiL_Design_ImageMind.common import sampling
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


def test_same_seed_mode_pins_packed_seed_for_cache_stability():
    """The 'seed' widget's own control_after_generate defaults to
    'randomize' and changes every queue regardless of use_same_seed — but
    apply_hiresfix never reads it in same-seed mode. Packing the live value
    anyway would bust FiLKSampler's input-hash cache every run even with a
    fixed base seed, forcing a full re-sample for no reason."""
    out_a = FiLHighResFix.execute(**_base_kwargs(use_same_seed=True, seed=111))
    out_b = FiLHighResFix.execute(**_base_kwargs(use_same_seed=True, seed=222))
    assert out_a[0]["hiresfix"]["seed"] == out_b[0]["hiresfix"]["seed"] == 0


def test_own_seed_mode_packs_live_seed_value():
    out = FiLHighResFix.execute(**_base_kwargs(use_same_seed=False, seed=222))
    assert out[0]["hiresfix"]["seed"] == 222


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


def test_apply_hiresfix_pixel_mode_never_resamples(monkeypatch):
    """upscale_type='pixel' must be a single-shot ESRGAN upscale, no re-sample
    pass — matching efficiency-nodes' HiRes-Fix Script."""
    calls: list[str] = []
    monkeypatch.setattr(sampling, "_decode", lambda vae, latent, tiled=False: "IMAGE")
    monkeypatch.setattr(sampling, "_encode", lambda vae, image, tiled=False: {"samples": "ENCODED"})
    monkeypatch.setattr(sampling, "_pixel_upscale", lambda image, upscaler, scale: image)
    monkeypatch.setattr(sampling, "sample_unified", lambda *a, **kw: calls.append("sampled") or {"samples": "SAMPLED"})

    latent = {"samples": "SENTINEL"}
    result, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "pixel", "pixel_upscaler": "x.pth"},
        model=None, positive=None, negative=None, vae="VAE",
        latent=latent, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert calls == []
    assert result == {"samples": "ENCODED"}
    assert warnings == []


def _patch_pipeline(monkeypatch, sampled_models: list | None = None,
                    decode_calls: list | None = None, encode_calls: list | None = None):
    """Stub every ComfyUI-touching seam of apply_hiresfix for pure-logic tests."""
    monkeypatch.setattr(
        sampling, "_decode",
        lambda vae, latent, tiled=False: (decode_calls is not None and decode_calls.append(tiled)) or "IMAGE",
    )
    monkeypatch.setattr(
        sampling, "_encode",
        lambda vae, image, tiled=False: (encode_calls is not None and encode_calls.append(tiled)) or {"samples": "ENCODED"},
    )
    monkeypatch.setattr(sampling, "_pixel_upscale", lambda image, upscaler, scale: image)
    monkeypatch.setattr(
        sampling, "sample_unified",
        lambda m, **kw: (sampled_models is not None and sampled_models.append(m)) or {"samples": "SAMPLED"},
    )


def test_hires_ckpt_loaded_and_used_for_resample(monkeypatch):
    sampled: list = []
    _patch_pipeline(monkeypatch, sampled_models=sampled)
    monkeypatch.setattr(sampling, "load_hires_checkpoint", lambda name: f"HIRES:{name}")

    _, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both",
         "pixel_upscaler": "x.pth", "hires_ckpt_name": "other.safetensors"},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert sampled == ["HIRES:other.safetensors"]
    assert warnings == []


def test_hires_ckpt_missing_falls_back_with_warning(monkeypatch):
    sampled: list = []
    _patch_pipeline(monkeypatch, sampled_models=sampled)

    def _boom(name):
        raise RuntimeError("no such file")

    monkeypatch.setattr(sampling, "load_hires_checkpoint", _boom)

    _, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both",
         "pixel_upscaler": "x.pth", "hires_ckpt_name": "missing.safetensors"},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert sampled == ["BASE"]
    assert any("missing.safetensors" in w for w in warnings)


def test_noise_control_forwarded_to_resample(monkeypatch):
    captured: dict = {}

    def _spy_sample_unified(m, **kw):
        captured.update(kw)
        return {"samples": "SAMPLED"}

    _patch_pipeline(monkeypatch)
    monkeypatch.setattr(sampling, "sample_unified", _spy_sample_unified)

    noise_control = {"rng_source": "gpu", "add_seed_noise": True, "seed": 99, "weight": 0.3}
    apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both", "pixel_upscaler": "x.pth"},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
        noise_control=noise_control,
    )
    assert captured.get("noise_control") == noise_control


def test_use_same_ckpt_never_loads(monkeypatch):
    _patch_pipeline(monkeypatch)

    def _forbidden(name):
        raise AssertionError("loader must not be called for '(use same)'")

    monkeypatch.setattr(sampling, "load_hires_checkpoint", _forbidden)

    _, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both", "pixel_upscaler": "x.pth"},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert warnings == []


def test_hires_ckpt_cache_loads_once(monkeypatch):
    calls: list[str] = []
    monkeypatch.setattr(sampling, "_load_checkpoint_raw", lambda name: calls.append(name) or f"M:{name}")
    sampling._HIRES_CKPT_CACHE.clear()
    try:
        assert sampling.load_hires_checkpoint("a.ckpt") == "M:a.ckpt"
        assert sampling.load_hires_checkpoint("a.ckpt") == "M:a.ckpt"
        assert calls == ["a.ckpt"]
        assert sampling.load_hires_checkpoint("b.ckpt") == "M:b.ckpt"
        assert list(sampling._HIRES_CKPT_CACHE) == ["b.ckpt"]  # single-entry cache
    finally:
        sampling._HIRES_CKPT_CACHE.clear()


def test_pixel_mode_warns_that_hires_ckpt_is_ignored(monkeypatch):
    _patch_pipeline(monkeypatch)
    _, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "pixel",
         "pixel_upscaler": "x.pth", "hires_ckpt_name": "other.safetensors"},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert any("ignored in pixel mode" in w for w in warnings)


def test_execute_packs_preprocessor():
    out = FiLHighResFix.execute(**_base_kwargs(preprocessor="canny"))
    assert out[0]["hiresfix"]["preprocessor"] == "canny"
    out_default = FiLHighResFix.execute(**_base_kwargs())
    assert out_default[0]["hiresfix"]["preprocessor"] == "none"


def test_preprocessor_routed_to_hint(monkeypatch):
    _patch_pipeline(monkeypatch)
    seen: list[tuple] = []
    monkeypatch.setattr(sampling, "_preprocess_hint", lambda image, pre: seen.append((image, pre)) or "HINT")
    applied: list[tuple] = []
    monkeypatch.setattr(
        sampling, "_apply_controlnet",
        lambda positive, cn, hint, strength: applied.append((hint, strength)) or "COND",
    )

    apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both", "pixel_upscaler": "x.pth",
         "control_net": object(), "strength": 0.7, "preprocessor": "canny"},
        model="BASE", positive="POS", negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert seen == [("IMAGE", "canny")]
    assert applied == [("HINT", 0.7)]


def test_tiled_flag_reaches_all_decodes_and_encodes(monkeypatch):
    decode_calls: list[bool] = []
    encode_calls: list[bool] = []
    _patch_pipeline(monkeypatch, decode_calls=decode_calls, encode_calls=encode_calls)
    monkeypatch.setattr(sampling, "_preprocess_hint", lambda image, pre: image)
    monkeypatch.setattr(sampling, "_apply_controlnet", lambda positive, cn, hint, strength: "COND")

    apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "both",
         "pixel_upscaler": "x.pth", "control_net": object()},
        model="BASE", positive="POS", negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
        tiled=True,
    )
    # "both" decode + CN hint decode; "both" encode — every one tiled.
    assert decode_calls == [True, True]
    assert encode_calls == [True]


def test_apply_hiresfix_iterations_two_upscales_and_resamples_twice(monkeypatch):
    """iterations=2 must run the upscale + resample loop body exactly twice, not once."""
    upscale_calls: list = []
    resample_calls: list = []

    class _FakeLatentUpscaleBy:
        def upscale(self, latent, upscaler, scale):
            upscale_calls.append(latent["samples"])
            return ({"samples": latent["samples"] + "_UP"},)

    monkeypatch.setattr("nodes.LatentUpscaleBy", _FakeLatentUpscaleBy)
    monkeypatch.setattr(
        sampling, "sample_unified",
        lambda m, **kw: resample_calls.append(kw) or {"samples": kw["latent"]["samples"] + "_SAMPLED"},
    )

    apply_hiresfix(
        {"iterations": 2, "upscale_by": 2.0, "upscale_type": "latent"},
        model="BASE", positive=None, negative=None, vae=None,
        latent={"samples": "S0"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert len(upscale_calls) == 2
    assert len(resample_calls) == 2


def test_apply_hiresfix_iteration_two_receives_iteration_one_output_not_original(monkeypatch):
    """The latent produced by iteration 1's resample must be what iteration 2's
    upscale consumes — not the pre-loop original latent fed into iteration 1."""
    upscale_inputs: list = []

    class _FakeLatentUpscaleBy:
        def upscale(self, latent, upscaler, scale):
            upscale_inputs.append(latent["samples"])
            return ({"samples": latent["samples"] + "_UP"},)

    monkeypatch.setattr("nodes.LatentUpscaleBy", _FakeLatentUpscaleBy)
    monkeypatch.setattr(
        sampling, "sample_unified",
        lambda m, **kw: {"samples": kw["latent"]["samples"] + "_SAMPLED"},
    )

    apply_hiresfix(
        {"iterations": 2, "upscale_by": 2.0, "upscale_type": "latent"},
        model="BASE", positive=None, negative=None, vae=None,
        latent={"samples": "S0"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert upscale_inputs[0] == "S0"
    assert upscale_inputs[1] == "S0_UP_SAMPLED"  # iteration 1's own resampled output
    assert upscale_inputs[1] != "S0"


def test_apply_hiresfix_own_seed_mode_uses_hires_seed_plus_iteration_index(monkeypatch):
    """use_same_seed=False must feed seed=hires_seed + i to each iteration's
    resample — the exact formula in apply_hiresfix (common/sampling.py)."""
    seeds: list = []
    _patch_pipeline(monkeypatch)
    monkeypatch.setattr(
        sampling, "sample_unified",
        lambda m, **kw: seeds.append(kw["seed"]) or {"samples": "SAMPLED"},
    )

    apply_hiresfix(
        {"iterations": 3, "upscale_by": 2.0, "upscale_type": "both", "pixel_upscaler": "x.pth",
         "use_same_seed": False, "seed": 500},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=999, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert seeds == [500, 501, 502]


def test_apply_hiresfix_same_seed_mode_uses_base_seed_not_hires_widget(monkeypatch):
    """use_same_seed=True must feed the KSampler's base_seed to every
    iteration — NOT the hires_seed widget value packed into hiresfix['seed']."""
    seeds: list = []
    _patch_pipeline(monkeypatch)
    monkeypatch.setattr(
        sampling, "sample_unified",
        lambda m, **kw: seeds.append(kw["seed"]) or {"samples": "SAMPLED"},
    )

    apply_hiresfix(
        {"iterations": 3, "upscale_by": 2.0, "upscale_type": "both", "pixel_upscaler": "x.pth",
         "use_same_seed": True, "seed": 500},
        model="BASE", positive=None, negative=None, vae="VAE",
        latent={"samples": "S"}, base_seed=999, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert seeds == [999, 999, 999]


def test_apply_hiresfix_latent_mode_never_touches_vae(monkeypatch):
    """upscale_type='latent' must go through the latent upscaler only — no VAE
    decode/encode round-trip like 'pixel'/'both' need."""
    def _boom_decode(vae, latent, tiled=False):
        raise AssertionError("_decode must not run in latent mode")

    def _boom_encode(vae, image, tiled=False):
        raise AssertionError("_encode must not run in latent mode")

    monkeypatch.setattr(sampling, "_decode", _boom_decode)
    monkeypatch.setattr(sampling, "_encode", _boom_encode)
    monkeypatch.setattr(sampling, "sample_unified", lambda m, **kw: {"samples": "SAMPLED"})

    class _FakeLatentUpscaleBy:
        def upscale(self, latent, upscaler, scale):
            return ({"samples": "UP"},)

    monkeypatch.setattr("nodes.LatentUpscaleBy", _FakeLatentUpscaleBy)

    result, warnings = apply_hiresfix(
        {"iterations": 1, "upscale_by": 2.0, "upscale_type": "latent"},
        model="BASE", positive=None, negative=None, vae=None,
        latent={"samples": "S"}, base_seed=0, cfg=7.0, sampler_name="euler", scheduler="normal",
    )
    assert result == {"samples": "SAMPLED"}
    assert warnings == []
