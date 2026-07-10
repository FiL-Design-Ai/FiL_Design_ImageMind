from __future__ import annotations

import requests

from FiL_Design_ImageMind.common.data import get_visible_style_keys
from FiL_Design_ImageMind.nodes import node_scanner
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

PHOTO_STYLE = get_visible_style_keys("photo_style")[0]


def _basic_config():
    return {"provider": "ollama", "model": "llama3.2-vision"}


def test_stage1_timeout_falls_back_to_hybrid(monkeypatch):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            raise requests.exceptions.Timeout("stage 1 timed out")
        return "a serene mountain lake, cinematic"

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    result, meta_json, meta_dict = FiLOpticScanner.execute(
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


def test_stage2_timeout_falls_back_to_hybrid(monkeypatch):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "raw stage 1 description of the scene"
        if len(calls) == 2:
            raise requests.exceptions.Timeout("stage 2 timed out")
        return "styled hybrid result"

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    result, meta_json, meta_dict = FiLOpticScanner.execute(
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


def test_stage2_empty_returns_stage1(monkeypatch):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            return "a detailed raw description of the mountain lake at dawn"
        return "   "

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    result, meta_json, meta_dict = FiLOpticScanner.execute(
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


def test_non_timeout_error_does_not_fallback(monkeypatch):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        raise requests.exceptions.HTTPError("400 bad request")

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    result, meta_json, meta_dict = FiLOpticScanner.execute(
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


def test_hybrid_mode_no_fallback_logic(monkeypatch):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        return "single hybrid result"

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    result, _meta_json, meta_dict = FiLOpticScanner.execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a lake",
        prompt_mode="Hybrid",
    )
    assert result == "single hybrid result"
    assert "fallback_reason" not in meta_dict
    assert len(calls) == 1
