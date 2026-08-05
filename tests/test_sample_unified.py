from __future__ import annotations

import sys
import types

from FiL_Design_ImageMind.common import sampling


def _install_fake_common_ksampler(monkeypatch, spy):
    """Provide a fake ``nodes.common_ksampler`` that records its call."""
    fake_nodes = types.ModuleType("nodes")

    def common_ksampler(model, seed, steps, cfg, sampler_name, scheduler,
                        positive, negative, latent, denoise=1.0):
        spy["called"] = True
        spy["args"] = (seed, steps, cfg, sampler_name, scheduler, denoise)
        return ({"samples": "LEGACY"},)

    fake_nodes.common_ksampler = common_ksampler
    monkeypatch.setitem(sys.modules, "nodes", fake_nodes)


def test_no_sockets_delegates_to_common_ksampler(monkeypatch):
    spy: dict = {}
    _install_fake_common_ksampler(monkeypatch, spy)

    result = sampling.sample_unified(
        model=object(), seed=7, steps=20, cfg=7.0,
        sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent={"samples": "IN"}, denoise=1.0,
    )

    assert spy["called"] is True
    assert result == {"samples": "LEGACY"}


def test_noise_control_bypasses_common_ksampler(monkeypatch):
    """A noise_control script must route through the manual comfy.sample
    path, not the stock nodes.common_ksampler wrapper (which always
    generates its own CPU noise internally with no seam to override it)."""
    spy: dict = {}
    _install_fake_common_ksampler(monkeypatch, spy)
    monkeypatch.setattr(
        sampling, "_sample_core",
        lambda *a, **kw: {"samples": "NOISE_CONTROLLED", "kw": kw},
    )

    result = sampling.sample_unified(
        model=object(), seed=7, steps=20, cfg=7.0,
        sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent={"samples": "IN"}, denoise=1.0,
        noise_control={"rng_source": "gpu"},
    )

    assert spy.get("called") is None
    assert result["samples"] == "NOISE_CONTROLLED"
    assert result["kw"]["noise_control"] == {"rng_source": "gpu"}


def test_prepare_noise_cpu_delegates_to_comfy_stock(monkeypatch):
    import torch

    calls: list = []
    monkeypatch.setattr(
        "comfy.sample.prepare_noise",
        lambda latent_image, seed, batch_inds=None: calls.append(
            (latent_image.shape, seed, batch_inds)
        ) or torch.zeros_like(latent_image),
    )
    latent = torch.zeros(1, 4, 8, 8)
    noise = sampling._prepare_noise(latent, seed=3, rng_source="cpu")
    assert calls == [((1, 4, 8, 8), 3, None)]
    assert noise.shape == latent.shape


def test_prepare_noise_forwards_batch_index_like_stock_ksampler(monkeypatch):
    """Stock common_ksampler passes latent["batch_index"] into prepare_noise.

    Dropping it gave latents from LatentFromBatch / RepeatLatentBatch different
    noise than the stock KSampler produces for the same seed.
    """
    import torch

    calls: list = []
    monkeypatch.setattr(
        "comfy.sample.prepare_noise",
        lambda latent_image, seed, batch_inds=None: calls.append(batch_inds)
        or torch.zeros_like(latent_image),
    )
    latent = torch.zeros(2, 4, 8, 8)
    sampling._prepare_noise(latent, seed=3, rng_source="cpu", batch_inds=[2, 3])
    assert calls == [[2, 3]]


def test_prepare_noise_gpu_source_is_deterministic_and_shape_matched(monkeypatch):
    import torch
    import comfy.model_management

    monkeypatch.setattr(comfy.model_management, "get_torch_device", lambda: torch.device("cpu"))
    latent = torch.zeros(1, 4, 8, 8)
    noise_a = sampling._prepare_noise(latent, seed=5, rng_source="gpu")
    noise_b = sampling._prepare_noise(latent, seed=5, rng_source="gpu")
    noise_c = sampling._prepare_noise(latent, seed=6, rng_source="gpu")
    assert noise_a.shape == latent.shape
    assert noise_a.dtype == latent.dtype
    assert noise_a.device.type == "cpu"
    assert torch.equal(noise_a, noise_b)  # same seed -> same noise
    assert not torch.equal(noise_a, noise_c)  # different seed -> different noise


def test_noise_control_forwarded_to_base_sample_call(monkeypatch):
    """noise_control from the script socket must reach the BASE
    FiLKSampler.execute() sample_unified call — the hires-resample path is
    already covered by test_noise_control_forwarded_to_resample in
    test_hiresfix.py, but the base call had no coverage."""
    from FiL_Design_ImageMind.nodes.node_ksampler import FiLKSampler

    captured: dict = {}

    def _spy_sample_unified(model, **kw):
        captured.update(kw)
        return {"samples": "BASE"}

    monkeypatch.setattr(sampling, "sample_unified", _spy_sample_unified)

    noise_control = {"rng_source": "gpu", "add_seed_noise": True, "seed": 99, "weight": 0.3}
    FiLKSampler.execute(
        model="MODEL", seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "L"},
        vae_decode="false", vae=None,
        script={"noise_control": noise_control},
    )
    assert captured.get("noise_control") == noise_control


def test_sample_core_zero_weight_skips_variation_noise_generation(monkeypatch):
    """add_seed_noise=True with weight=0.0 must take the short-circuit path in
    _sample_core: only base noise is generated, no variation noise is
    prepared or blended."""
    import torch

    prepare_calls: list = []

    def _fake_prepare_noise(latent_image, seed, rng_source="cpu", batch_inds=None):
        prepare_calls.append(seed)
        return torch.zeros_like(latent_image)

    def _blend_boom(base, variation, weight):
        raise AssertionError("_blend_noise must not run when weight == 0.0")

    monkeypatch.setattr(sampling, "_prepare_noise", _fake_prepare_noise)
    monkeypatch.setattr(sampling, "_blend_noise", _blend_boom)
    monkeypatch.setattr(
        "comfy.sample.fix_empty_latent_channels",
        lambda model, latent_image, dr_s, dr_t: latent_image,
    )

    class _FakeKSampler:
        def __init__(self, model, steps, device, sampler, scheduler, denoise, model_options):
            self.sigmas = "SIGMAS"

    monkeypatch.setattr("comfy.samplers.KSampler", _FakeKSampler)
    monkeypatch.setattr(
        "comfy.samplers.ksampler",
        lambda name, extra_options=None, inpaint_options=None: "SAMPLER_INSTANCE",
    )
    samples_out = torch.full((1, 4, 8, 8), 3.0)
    monkeypatch.setattr("comfy.samplers.sample", lambda *a, **kw: samples_out)
    monkeypatch.setattr("latent_preview.prepare_callback", lambda model, steps: None)
    monkeypatch.setattr("comfy.model_management.intermediate_device", lambda: torch.device("cpu"))
    monkeypatch.setattr("comfy.model_management.intermediate_dtype", lambda: torch.float32)

    model = types.SimpleNamespace(load_device="cpu", model_options={})
    latent = {"samples": torch.zeros(1, 4, 8, 8)}

    result = sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent=latent, denoise=1.0,
        noise_control={"add_seed_noise": True, "weight": 0.0, "seed": 99},
    )

    assert prepare_calls == [1]  # only the base-noise call, keyed to the real seed
    assert torch.equal(result["samples"], samples_out)


def test_blend_noise_endpoints_and_midpoint():
    import math
    import torch

    base = torch.ones(4)
    variation = torch.zeros(4)
    assert torch.equal(sampling._blend_noise(base, variation, 0.0), base)
    assert torch.allclose(sampling._blend_noise(base, variation, 1.0), variation, atol=1e-6)
    mid = sampling._blend_noise(base, variation, 0.5)
    assert torch.allclose(mid, base * math.cos(math.pi / 4), atol=1e-6)


# --- _ETA_SAMPLERS drift guards ---------------------------------------------
# KSAMPLER.sample() unpacks extra_options as **kwargs into the registered
# sampler function, so eta must only ever be sent to functions that actually
# declare it. The allowlist got this wrong once already (er_sde / sa_solver /
# sa_solver_pece were listed but take s_noise instead of eta — every
# generation with them died in TypeError), so these tests pin both directions
# against the installed ComfyUI's real signatures.

def _bind_eta(sampler_name):
    """Return True if the registered function for ``sampler_name`` accepts the
    ``eta`` kwarg the same way KSAMPLER.sample() would pass it."""
    import inspect

    import comfy.samplers

    fn = comfy.samplers.ksampler(sampler_name).sampler_function
    sig = inspect.signature(fn)
    try:
        sig.bind(None, None, None, extra_args={}, callback=None, disable=True, eta=0.5)
        return True
    except TypeError:
        return False


def test_every_allowlisted_sampler_actually_accepts_eta():
    """A listed name whose function has no eta parameter crashes every
    generation — the node always passes eta (default 1.0)."""
    import comfy.samplers

    broken = []
    for name in sorted(sampling._ETA_SAMPLERS):
        try:
            accepts = _bind_eta(name)
        except AttributeError:
            continue  # sampler not in this ComfyUI build — never selectable
        if not accepts:
            broken.append(name)
    assert not broken, (
        f"_ETA_SAMPLERS lists samplers whose registered function rejects eta "
        f"(would TypeError at sample time): {broken}. "
        f"Installed: {comfy.samplers.KSampler.SAMPLERS}"
    )


def test_every_installed_eta_sampler_is_covered():
    """Completeness direction: any installed sampler whose registered function
    declares an explicit eta parameter must be covered by the runtime check
    (stock allowlist, or the introspection fallback for custom packs like
    RES4LYF's rk / rk_beta), or its eta widget silently does nothing."""
    import inspect

    import comfy.samplers

    missed = []
    for name in comfy.samplers.KSampler.SAMPLERS:
        try:
            fn = comfy.samplers.ksampler(name).sampler_function
        except AttributeError:
            continue  # ddim / uni_pc etc. — not k_diffusion samplers, no eta path
        params = inspect.signature(fn).parameters
        if params.get("eta") is not None and not sampling._sampler_accepts_eta(name):
            missed.append(name)
    assert not missed, (
        f"Installed samplers accept eta but _sampler_accepts_eta rejects them: {missed}"
    )


# --- eta / bongmath routing into extra_options -------------------------------

def _patch_sample_core_comfy(monkeypatch, captured):
    """Patch every comfy piece ``_sample_core`` touches; record the
    extra_options the sampler instance is created with."""
    import torch

    monkeypatch.setattr(
        sampling, "_prepare_noise",
        lambda latent_image, seed, rng_source="cpu", batch_inds=None: "NOISE",
    )
    monkeypatch.setattr(
        "comfy.sample.fix_empty_latent_channels",
        lambda model, latent_image, dr_s, dr_t: latent_image,
    )

    class _FakeKSampler:
        def __init__(self, model, steps, device, sampler, scheduler, denoise, model_options):
            self.sigmas = "SIGMAS"

    def _fake_ksampler(name, extra_options=None, inpaint_options=None):
        captured["sampler_name"] = name
        captured["extra_options"] = extra_options
        return "SAMPLER_INSTANCE"

    monkeypatch.setattr("comfy.samplers.KSampler", _FakeKSampler)
    monkeypatch.setattr("comfy.samplers.ksampler", _fake_ksampler)
    monkeypatch.setattr("comfy.samplers.sample", lambda *a, **kw: torch.zeros(1, 4, 8, 8))
    monkeypatch.setattr("latent_preview.prepare_callback", lambda model, steps: None)
    monkeypatch.setattr("comfy.model_management.intermediate_device", lambda: torch.device("cpu"))
    monkeypatch.setattr("comfy.model_management.intermediate_dtype", lambda: torch.float32)
    # The fallback introspects the patched fake ksampler and would cache its
    # verdicts on the REAL module dict otherwise.
    monkeypatch.setattr(sampling, "_ETA_CACHE", {})
    return types.SimpleNamespace(load_device="cpu", model_options={})


def test_eta_reaches_extra_options_for_eta_sampler(monkeypatch):
    captured: dict = {}
    model = _patch_sample_core_comfy(monkeypatch, captured)

    sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler_ancestral", scheduler="normal",
        positive=None, negative=None, latent={"samples": "L"}, denoise=1.0, eta=0.42,
    )
    assert captured["extra_options"] == {"eta": 0.42}


def test_eta_is_not_sent_to_deterministic_samplers(monkeypatch):
    """Deterministic samplers have no eta parameter — sending it would raise
    TypeError when KSAMPLER.sample() unpacks extra_options."""
    captured: dict = {}
    model = _patch_sample_core_comfy(monkeypatch, captured)

    sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent={"samples": "L"}, denoise=1.0, eta=0.42,
    )
    assert captured["extra_options"] == {}


def test_bongmath_reaches_extra_options_when_sampler_accepts_it(monkeypatch):
    captured: dict = {}
    model = _patch_sample_core_comfy(monkeypatch, captured)
    monkeypatch.setattr(sampling, "_sampler_accepts_bongmath", lambda name: True)

    sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="rk_beta", scheduler="normal",
        positive=None, negative=None, latent={"samples": "L"}, denoise=1.0, bongmath=False,
    )
    assert captured["extra_options"] == {"BONGMATH": False}


def test_bongmath_is_not_sent_when_sampler_rejects_it(monkeypatch):
    captured: dict = {}
    model = _patch_sample_core_comfy(monkeypatch, captured)
    monkeypatch.setattr(sampling, "_sampler_accepts_bongmath", lambda name: False)

    sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent={"samples": "L"}, denoise=1.0, bongmath=True,
    )
    assert captured["extra_options"] == {}


def test_sample_core_casts_result_like_stock_common_ksampler(monkeypatch):
    """Stock common_ksampler → comfy.sample.sample moves the latent to the
    intermediate device/dtype; _sample_core must match or its output sits on
    the GPU in the model's compute dtype."""
    import torch

    captured: dict = {}
    model = _patch_sample_core_comfy(monkeypatch, captured)
    monkeypatch.setattr(
        "comfy.samplers.sample",
        lambda *a, **kw: torch.zeros(1, 4, 8, 8, dtype=torch.float16),
    )

    result = sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent={"samples": "L"}, denoise=1.0,
    )
    assert result["samples"].device.type == "cpu"
    assert result["samples"].dtype is torch.float32


# --- eta introspection fallback for custom samplers ---------------------------

def _patch_eta_registry(monkeypatch, registry, calls=None):
    import comfy.samplers

    def _fake_ksampler(name, extra_options=None, inpaint_options=None):
        if calls is not None:
            calls.append(name)
        return types.SimpleNamespace(sampler_function=registry[name])

    monkeypatch.setattr(comfy.samplers, "ksampler", _fake_ksampler)
    monkeypatch.setattr(sampling, "_ETA_CACHE", {})


def test_eta_fallback_introspects_custom_samplers(monkeypatch):
    """RES4LYF-style custom samplers that declare a named eta parameter must
    get it even though they never appear in the stock allowlist."""

    def fn_with_eta(model, x, sigmas, extra_args=None, eta=1.0): ...
    def fn_without_eta(model, x, sigmas, extra_args=None): ...
    def fn_kwargs_only(model, x, sigmas, **kw): ...

    _patch_eta_registry(monkeypatch, {
        "custom_sde": fn_with_eta,
        "custom_det": fn_without_eta,
        "custom_kwargs": fn_kwargs_only,
    })

    assert sampling._sampler_accepts_eta("custom_sde") is True
    assert sampling._sampler_accepts_eta("custom_det") is False
    # A bare **kwargs proves the function swallows the kwarg, not that it
    # reads it — must stay False.
    assert sampling._sampler_accepts_eta("custom_kwargs") is False


def test_eta_fallback_is_cached(monkeypatch):
    calls: list = []

    def fn_with_eta(model, x, sigmas, eta=1.0): ...

    _patch_eta_registry(monkeypatch, {"custom_sde": fn_with_eta}, calls=calls)

    assert sampling._sampler_accepts_eta("custom_sde") is True
    assert sampling._sampler_accepts_eta("custom_sde") is True
    assert calls == ["custom_sde"]  # second hit served from the cache


def test_eta_fallback_unknown_sampler_is_false_not_an_error(monkeypatch):
    import comfy.samplers

    def _boom(name, extra_options=None, inpaint_options=None):
        raise AttributeError(f"no sampler named {name!r}")

    monkeypatch.setattr(comfy.samplers, "ksampler", _boom)
    monkeypatch.setattr(sampling, "_ETA_CACHE", {})

    assert sampling._sampler_accepts_eta("not_installed_sampler") is False


# --- /sampler_options payload -------------------------------------------------

def test_sampler_option_support_reflects_installed_samplers():
    """What GET /sampler_options serves to the KSampler panel: only samplers
    that actually read the option, drawn from the installed list."""
    import comfy.samplers

    support = sampling.sampler_option_support()
    installed = set(comfy.samplers.KSampler.SAMPLERS)
    assert set(support["eta"]) <= installed
    assert set(support["bongmath"]) <= installed
    # Stochastic stock samplers in, deterministic ones out.
    assert "euler_ancestral" in support["eta"]
    assert "dpmpp_2m_sde" in support["eta"]
    assert "euler" not in support["eta"]
    assert "dpmpp_2m" not in support["eta"]
    # Without RES4LYF imported (the test process never loads it) no stock
    # sampler reads BONGMATH.
    if "rk_beta" not in installed:
        assert support["bongmath"] == []
