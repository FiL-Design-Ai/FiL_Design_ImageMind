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


def test_wired_sampler_and_sigmas_route_to_sample_custom(monkeypatch):
    spy: dict = {}
    _install_fake_common_ksampler(monkeypatch, spy)

    # Fake the comfy modules the custom path pulls in.
    fake_sample = types.ModuleType("comfy.sample")
    captured: dict = {}

    def fix_empty_latent_channels(model, latent_image):
        return latent_image

    def sample_custom(model, noise, cfg, sampler, sigmas, positive, negative,
                      latent_image, noise_mask=None, disable_pbar=False, seed=0):
        captured.update(sampler=sampler, sigmas=sigmas, noise=noise, seed=seed)
        return "OUT_SAMPLES"

    fake_sample.fix_empty_latent_channels = fix_empty_latent_channels
    fake_sample.sample_custom = sample_custom

    fake_samplers = types.ModuleType("comfy.samplers")
    fake_samplers.sampler_object = lambda name: f"SAMPLER<{name}>"

    fake_utils = types.ModuleType("comfy.utils")
    fake_utils.PROGRESS_BAR_ENABLED = False

    fake_comfy = types.ModuleType("comfy")
    # `import comfy.sample` resolves the submodule from sys.modules but reads it
    # off the parent as an attribute — attach them so the lookup succeeds.
    fake_comfy.sample = fake_sample
    fake_comfy.samplers = fake_samplers
    fake_comfy.utils = fake_utils
    monkeypatch.setitem(sys.modules, "comfy", fake_comfy)
    monkeypatch.setitem(sys.modules, "comfy.sample", fake_sample)
    monkeypatch.setitem(sys.modules, "comfy.samplers", fake_samplers)
    monkeypatch.setitem(sys.modules, "comfy.utils", fake_utils)

    class _Sigmas:
        # Two-entry schedule → one real step, passes the > 1 length guard.
        shape = (2,)

    result = sampling.sample_unified(
        model=object(), seed=99, steps=20, cfg=6.0,
        sampler_name="euler", scheduler="normal",
        positive="P", negative="N", latent={"samples": "IN"}, denoise=1.0,
        sampler="MY_SAMPLER", sigmas=_Sigmas(), noise="MY_NOISE",
    )

    assert spy.get("called") is not True  # legacy path not taken
    assert captured["sampler"] == "MY_SAMPLER"
    assert captured["noise"] == "MY_NOISE"
    assert captured["seed"] == 99
    assert result["samples"] == "OUT_SAMPLES"
