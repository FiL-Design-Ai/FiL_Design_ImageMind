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
        lambda latent_image, seed: calls.append((latent_image.shape, seed)) or torch.zeros_like(latent_image),
    )
    latent = torch.zeros(1, 4, 8, 8)
    noise = sampling._prepare_noise(latent, seed=3, rng_source="cpu")
    assert calls == [((1, 4, 8, 8), 3)]
    assert noise.shape == latent.shape


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


def test_blend_noise_endpoints_and_midpoint():
    import math
    import torch

    base = torch.ones(4)
    variation = torch.zeros(4)
    assert torch.equal(sampling._blend_noise(base, variation, 0.0), base)
    assert torch.allclose(sampling._blend_noise(base, variation, 1.0), variation, atol=1e-6)
    mid = sampling._blend_noise(base, variation, 0.5)
    assert torch.allclose(mid, base * math.cos(math.pi / 4), atol=1e-6)
