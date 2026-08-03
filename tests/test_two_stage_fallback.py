from __future__ import annotations

import requests

from FiL_Design_ImageMind.common.data import get_visible_style_keys
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

# The scanner reports per-image progress through `cls.hidden.unique_id`,
# which only the clone the executor prepares carries — calling
# `FiLOpticScanner.execute()` straight from a test does not have it.
# See tests/executor_harness.py.
_execute = as_the_executor_calls_it(FiLOpticScanner)

PHOTO_STYLE = get_visible_style_keys("photo_style")[0]


def _basic_config():
    return {"provider": "ollama", "model": "llama3.2-vision"}


def test_stage1_timeout_falls_back_to_hybrid(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            raise requests.exceptions.Timeout("stage 1 timed out")
        return "a serene mountain lake, cinematic"

    stub_scanner_generate(fake_generate)
    result, meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a mountain lake",
        prompt_mode="Two-Stage",
        photo_style=PHOTO_STYLE,
    )
    assert "mountain lake" in result
    assert meta_dict.get("fallback_reason") == "two_stage_stage1_timeout"
    assert len(calls) == 2


def test_stage2_timeout_falls_back_to_hybrid(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "raw stage 1 description of the scene"
        if len(calls) == 2:
            raise requests.exceptions.Timeout("stage 2 timed out")
        return "styled hybrid result"

    stub_scanner_generate(fake_generate)
    result, meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a scene",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
    )
    assert "styled hybrid" in result
    assert meta_dict.get("fallback_reason") == "two_stage_stage2_timeout"
    assert len(calls) == 3


def test_stage2_empty_returns_stage1(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "a detailed raw description of the mountain lake at dawn"
        return "   "

    stub_scanner_generate(fake_generate)
    result, meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
    )
    assert "raw description" in result
    assert meta_dict.get("fallback_reason") == "stage2_empty_using_stage1"
    assert len(calls) == 2


def test_non_timeout_error_does_not_fallback(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        raise requests.exceptions.HTTPError("400 bad request")

    stub_scanner_generate(fake_generate)
    result, meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
    )
    assert "Ошибка" in result
    assert meta_dict.get("status") == "error"
    assert "fallback_reason" not in meta_dict
    assert len(calls) == 1


def test_hybrid_mode_no_fallback_logic(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        return "single hybrid result"

    stub_scanner_generate(fake_generate)
    result, _meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        prompt_mode="Hybrid",
    )
    assert result == "single hybrid result"
    assert "fallback_reason" not in meta_dict
    assert len(calls) == 1


def test_negative_prompt_reaches_both_stages(stub_scanner_generate):
    """Stage 2 writes the text the user actually receives, so it has to carry
    the ban too. Passing it to stage 1 only let the styled rewrite put back
    whatever the user asked to keep out.
    """
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "a detailed raw description of the mountain lake at dawn"
        return "final styled prompt"

    stub_scanner_generate(fake_generate)
    _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        negative_prompt="watermark, text overlay",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
    )
    assert len(calls) == 2
    assert "Avoid: watermark, text overlay" in calls[0]["user_prompt"]
    assert "Avoid: watermark, text overlay" in calls[1]["user_prompt"]


def test_negative_prompt_stage2_uses_model_specific_wording(stub_scanner_generate):
    """FLUX cannot parse negations, so both stages must get the positive-
    constraint phrasing rather than a bare 'Avoid:' list.
    """
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "a detailed raw description of the mountain lake at dawn"
        return "final styled prompt"

    stub_scanner_generate(fake_generate)
    _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        negative_prompt="watermark",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
        model_type="FLUX",
    )
    assert len(calls) == 2
    for call in calls:
        assert "express the scene positively" in call["user_prompt"]
        assert "Avoid:" not in call["user_prompt"]


def test_seed_zero_derives_a_deterministic_stage2_seed(stub_scanner_generate):
    """seed=0 is a valid fixed seed (widget min=-1), so stage 2 must derive
    seed+1 from it. The old `seed > 0` check sent stage 2 a random seed (-1)
    when the user fixed seed=0, silently breaking two-stage reproducibility.
    """
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "a detailed raw description of the mountain lake at dawn"
        return "final styled prompt"

    stub_scanner_generate(fake_generate)
    _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        photo_style=PHOTO_STYLE,
        prompt_mode="Two-Stage",
        seed=0,
    )
    assert len(calls) == 2
    assert calls[0]["seed"] == 0  # stage 1 keeps the user's seed
    assert calls[1]["seed"] == 1  # stage 2 derives a deterministic seed, not -1
