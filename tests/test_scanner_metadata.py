"""Tests for OpticScanner metadata output (V3 execute classmethod)."""
from __future__ import annotations

from FiL_Design_ImageMind.nodes import node_scanner
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner


CONFIG = {"provider": "ollama", "model": "qwen3"}


def _get_photo_style_options():
    schema = FiLOpticScanner.GET_SCHEMA()
    for inp in schema.inputs:
        if inp.id == "photo_style":
            return list(getattr(inp, "options", []))
    return []


def _setup(monkeypatch, generate_fn):
    monkeypatch.setattr(node_scanner._model_client, "generate", generate_fn)


def test_metadata_contains_decision_trace(monkeypatch):
    _setup(monkeypatch, lambda **kw: "ready prompt")
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="red car")
    dt = meta["decision_trace"]
    assert dt["pipeline_selected"] in ("Hybrid", "Two-Stage")
    assert dt["input_mode"] == "text"
    assert dt["style_selected"] is False
    assert "post_convert_mode" in dt


def test_metadata_decision_trace_with_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "styled prompt")
    photo_styles = _get_photo_style_options()
    style = photo_styles[-1] if photo_styles else "None"
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="portrait", photo_style=style)
    dt = meta["decision_trace"]
    assert dt["style_selected"] is True
    assert dt["input_mode"] == "text"


def test_metadata_response_outcome_none_without_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "plain caption")
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="scene")
    assert meta["response_outcome"] is None


def test_metadata_response_outcome_with_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "styled with cyborg implant and servo")
    photo_styles = _get_photo_style_options()
    style = photo_styles[-1] if photo_styles else "None"
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="cyborg", photo_style=style)
    ro = meta["response_outcome"]
    assert ro is not None
    assert "required_cue_hits" in ro
    assert "forbidden_drift_hits" in ro
    assert "style_drift_detected" in ro
    assert ro["response_empty"] is False


def test_metadata_style_category_general_without_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "a scene")
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="scene")
    assert meta["style_category"] == "general"


def test_metadata_dynamic_default_agent_is_universal(monkeypatch):
    schema = FiLOpticScanner.GET_SCHEMA()
    for inp in schema.inputs:
        if inp.id == "agent":
            assert inp.default == "Universal"
            break


def test_metadata_dynamic_default_detail_normal(monkeypatch):
    schema = FiLOpticScanner.GET_SCHEMA()
    for inp in schema.inputs:
        if inp.id == "detail_level":
            assert inp.default == "normal"
            break


def test_metadata_dynamic_default_language_en(monkeypatch):
    schema = FiLOpticScanner.GET_SCHEMA()
    for inp in schema.inputs:
        if inp.id == "language":
            assert inp.default == "en"
            break
