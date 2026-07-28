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
    monkeypatch.setattr("comfy.samplers.sample", lambda *a, **kw: "SAMPLES")
    monkeypatch.setattr("latent_preview.prepare_callback", lambda model, steps: None)

    model = types.SimpleNamespace(load_device="cpu", model_options={})
    latent = {"samples": torch.zeros(1, 4, 8, 8)}

    result = sampling._sample_core(
        model, seed=1, steps=1, cfg=7.0, sampler_name="euler", scheduler="normal",
        positive=None, negative=None, latent=latent, denoise=1.0,
        noise_control={"add_seed_noise": True, "weight": 0.0, "seed": 99},
    )

    assert prepare_calls == [1]  # only the base-noise call, keyed to the real seed
    assert result["samples"] == "SAMPLES"


def test_blend_noise_endpoints_and_midpoint():
    import math
    import torch

    base = torch.ones(4)
    variation = torch.zeros(4)
    assert torch.equal(sampling._blend_noise(base, variation, 0.0), base)
    assert torch.allclose(sampling._blend_noise(base, variation, 1.0), variation, atol=1e-6)
    mid = sampling._blend_noise(base, variation, 0.5)
    assert torch.allclose(mid, base * math.cos(math.pi / 4), atol=1e-6)
