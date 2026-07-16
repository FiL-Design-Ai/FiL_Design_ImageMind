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
