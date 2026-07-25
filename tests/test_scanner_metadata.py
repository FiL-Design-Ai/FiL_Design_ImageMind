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
            assert "Universal" in inp.default
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


# ---------------------------------------------------------------------------
# temperature/max_tokens/rate_limit_ms have no widget of their own on Scanner
# — they must come from the Provider Loader `config` dict, not a hardcoded
# default that silently ignores whatever the user set upstream.
# ---------------------------------------------------------------------------


def test_execute_forwards_config_temperature_and_max_tokens_to_provider(monkeypatch):
    calls = []
    _setup(monkeypatch, lambda **kw: calls.append(kw) or "a prompt")
    config = {"provider": "ollama", "model": "qwen3", "temperature": 0.2, "max_tokens": 512, "rate_limit_ms": 250}

    FiLOpticScanner.execute(config, prompt="a scene")

    assert calls[0]["temperature"] == 0.2
    assert calls[0]["max_tokens"] == 512
    assert calls[0]["rate_limit_ms"] == 250


def test_execute_uses_config_defaults_when_config_omits_them(monkeypatch):
    calls = []
    _setup(monkeypatch, lambda **kw: calls.append(kw) or "a prompt")

    FiLOpticScanner.execute(CONFIG, prompt="a scene")

    assert calls[0]["temperature"] == 0.7
    assert calls[0]["max_tokens"] == 1024
    assert calls[0]["rate_limit_ms"] == 100


# ---------------------------------------------------------------------------
# Preset-support wiring (Two-Stage mode): the style-contract enforcement
# block and the preset-specific weak/full/blocked support contract must
# actually reach stage 2's system prompt — previously both were computed
# but discarded (stage2_sys was rebuilt from scratch and never saw them).
# ---------------------------------------------------------------------------

CORPO_CYBORG = "🦾 КИБЕРПАНК/🏢 Corpo-Cyborg"


def _setup_ordered(monkeypatch, responses):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        idx = len(calls) - 1
        return responses[idx] if idx < len(responses) else responses[-1]

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)
    return calls


def test_two_stage_stage2_receives_the_enforcement_block(monkeypatch):
    calls = _setup_ordered(monkeypatch, ["a plain scene description", "styled result"])
    FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Two-Stage",
    )
    assert len(calls) == 2
    stage2_system_prompt = calls[1]["system_prompt"]
    assert "STYLE VOCABULARY" in stage2_system_prompt


def test_two_stage_full_support_mode_when_signals_present_in_description(monkeypatch):
    description = "A figure with visible ocular implants and neck ports under cold light."
    calls = _setup_ordered(monkeypatch, [description, "styled result"])
    _, _, meta = FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Two-Stage",
    )
    assert meta["preset_support_mode"] == "full"
    stage2_system_prompt = calls[1]["system_prompt"]
    assert "PRESET SUPPORT" in stage2_system_prompt
    assert "FULL PRESET MODE" in stage2_system_prompt


def test_two_stage_weak_support_mode_when_description_has_no_signals(monkeypatch):
    description = "A person standing quietly in a plain room."
    calls = _setup_ordered(monkeypatch, [description, "styled result"])
    _, _, meta = FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Two-Stage",
    )
    assert meta["preset_support_mode"] == "weak"
    stage2_system_prompt = calls[1]["system_prompt"]
    assert "WEAK PRESET MODE" in stage2_system_prompt


def test_hybrid_mode_keeps_the_pre_generation_contract_unmodified(monkeypatch):
    # Hybrid has no separate stage-1 description to analyze support against —
    # the contract computed before generation (support_text="") stays as-is.
    _setup(monkeypatch, lambda **kw: "styled result")
    _, _, meta = FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Hybrid",
    )
    assert meta["preset_support_mode"] == "inert"


def test_professional_tagger_keeps_comma_tags_on_sdxl(monkeypatch):
    tags = "red car, sunset, dramatic lighting, close-up shot"
    _setup(monkeypatch, lambda **kw: tags)
    prompt_out, _meta_json, meta_dict = FiLOpticScanner.execute(
        CONFIG, prompt="scene", agent="Professional Tagger", model_type="SDXL",
    )
    assert prompt_out == tags
    assert meta_dict["decision_trace"]["post_convert_mode"] == "tags_as_is"


def test_sent_prompt_reflects_hybrid_mode_system_and_user(monkeypatch):
    _setup(monkeypatch, lambda **kw: "a prompt")
    _, _, meta = FiLOpticScanner.execute(CONFIG, prompt="a red car", prompt_mode="Hybrid")
    sent = meta["sent_prompt"]
    assert "a red car" in sent["user"]
    assert sent["system"]  # non-empty agent/language/detail system prompt


def test_sent_prompt_reflects_stage2_in_two_stage_mode(monkeypatch):
    calls = _setup_ordered(monkeypatch, ["stage1 description", "stage2 styled result"])
    _, _, meta = FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Two-Stage",
    )
    sent = meta["sent_prompt"]
    assert sent["system"] == calls[1]["system_prompt"]
    assert sent["user"] == calls[1]["user_prompt"]


def test_sent_prompt_falls_back_to_stage1_when_stage2_is_too_short(monkeypatch):
    calls = _setup_ordered(monkeypatch, ["a full stage1 description", "x"])
    _, _, meta = FiLOpticScanner.execute(
        CONFIG, prompt="scene", photo_style=CORPO_CYBORG, prompt_mode="Two-Stage",
    )
    assert meta["fallback_reason"] == "stage2_empty_using_stage1"
    sent = meta["sent_prompt"]
    assert sent["system"] == calls[0]["system_prompt"]
    assert sent["user"] == calls[0]["user_prompt"]


def test_ideogram4_json_mode_produces_canonical_caption_schema(monkeypatch):
    # End-to-end: model_type="Ideogram 4" + response_format="json" must reach
    # the caption schema (adapt_ideogram4_caption), not generic JSON passthrough.
    _setup(monkeypatch, lambda **kw: '{"high_level_description": "a red sports car"}')
    prompt_out, meta_json, meta_dict = FiLOpticScanner.execute(
        CONFIG, prompt="scene", model_type="Ideogram 4", response_format="json",
    )
    import json as _json
    parsed = _json.loads(prompt_out)
    assert list(parsed.keys()) == [
        "high_level_description",
        "style_description",
        "compositional_deconstruction",
    ]
    assert parsed["high_level_description"] == "a red sports car"


def test_post_convert_prompt_receives_the_style_enforcer(monkeypatch):
    _setup(monkeypatch, lambda **kw: "a plain description with no commas")
    captured = {}
    original = node_scanner.post_convert_prompt

    def spy(*args, **kwargs):
        captured.update(kwargs)
        return original(*args, **kwargs)

    monkeypatch.setattr(node_scanner, "post_convert_prompt", spy)
    FiLOpticScanner.execute(CONFIG, prompt="scene", photo_style=CORPO_CYBORG, model_type="QWEN")

    assert captured.get("style_enforcer") is node_scanner._style_enforcer
    assert captured.get("style_key") == CORPO_CYBORG
