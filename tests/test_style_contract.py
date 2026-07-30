"""Tests for StyleEnforcer contract resolution and enforcement block generation."""
from __future__ import annotations

from FiL_Design_ImageMind.common.style_enforcer import StyleEnforcer


def test_resolve_style_contract_empty_style_returns_inactive():
    enforcer = StyleEnforcer()
    contract = enforcer.resolve_style_contract("", style_key="")
    assert contract["style_applied"] is False
    assert contract["category"] == "general"
    assert contract["required_cues"] == []
    assert contract["forbidden_drift"] == []
    assert contract["camera_override_allowed"] is False


def test_resolve_style_contract_cyborg_returns_cues_and_drift():
    enforcer = StyleEnforcer()
    cyborg_text = "sleek white android with ocular hardware and servo joints"
    contract = enforcer.resolve_style_contract(cyborg_text, style_key="cyborg")
    assert contract["style_applied"] is True
    assert contract["category"] == "cyborg"
    assert len(contract["required_cues"]) > 0
    assert len(contract["forbidden_drift"]) > 0
    # required_cues trimmed to 6
    assert len(contract["required_cues"]) <= 6
    # forbidden_drift trimmed to 12
    assert len(contract["forbidden_drift"]) <= 12


def test_build_enforcement_block_empty_returns_empty():
    enforcer = StyleEnforcer()
    assert enforcer.build_enforcement_block("", style_key="") == ""


def test_build_enforcement_block_returns_contract_text():
    enforcer = StyleEnforcer()
    cyborg_text = "sleek white android with ocular hardware and servo joints"
    block = enforcer.build_enforcement_block(cyborg_text, style_key="cyborg")
    assert "STYLE CONTRACT" in block
    assert "REQUIRED CUES" in block
    assert "AVOID" in block
    assert "VOCABULARY" in block


def test_count_required_cue_hits_empty_returns_zero():
    enforcer = StyleEnforcer()
    assert enforcer.count_required_cue_hits("", ["implant", "servo"]) == 0


def test_count_required_cue_hits_with_text_returns_positive():
    enforcer = StyleEnforcer()
    assert enforcer.count_required_cue_hits(
        "the implant is visible on the servo joint", ["implant", "servo"]
    ) >= 1


def test_build_compact_enforcement_block_empty_returns_empty():
    enforcer = StyleEnforcer()
    assert enforcer.build_compact_enforcement_block("", style_key="") == ""


# ---------------------------------------------------------------------------
# Edge cases — camera override, explicit allowlist, cue filtering, presets
# ---------------------------------------------------------------------------


def test_camera_override_drone_topdown_returns_profile():
    enforcer = StyleEnforcer()
    contract = enforcer.resolve_style_contract("aerial drone top-down view", style_key="")
    assert contract["style_applied"] is True
    assert contract["category"] == "drone"
    assert contract["camera_override_allowed"] is True
    assert contract["camera_override_profile"] == "drone_topdown"


def test_solarpunk_category_detected_and_contract_active():
    enforcer = StyleEnforcer()
    contract = enforcer.resolve_style_contract("solarpunk eco-futurism biophilic", style_key="")
    assert contract["style_applied"] is True
    assert contract["category"] == "solarpunk"


def test_explicitly_allowed_tokens_excluded_from_forbidden():
    """Latex/lingerie explicitly allowed when present in the style text."""
    enforcer = StyleEnforcer()
    forbidden = enforcer.get_forbidden_words("latex fetish lingerie bondage", style_key="")
    assert "latex" not in forbidden
    assert "lingerie" not in forbidden
    assert "fetish" not in forbidden
    assert "bondage" not in forbidden


def test_get_evaluable_required_cues_filters_complex_phrases():
    """Cues containing separators (comma, 'or', '/') are filtered out."""
    enforcer = StyleEnforcer()
    cues = ["facial plating", "implant seam or socket", "medium, text", "servo joints", "hud/overlay"]
    evaluable = enforcer.get_evaluable_required_cues(cues)
    # 'implant seam or socket' contains ' or ' → filtered
    # 'medium, text' contains ',' → filtered
    # 'hud/overlay' contains '/' → filtered
    assert "facial plating" in evaluable
    assert "servo joints" in evaluable
    assert "implant seam or socket" not in evaluable
    assert "medium, text" not in evaluable
    assert "hud/overlay" not in evaluable


def test_count_required_cue_hits_partial_word_match():
    """Cue 'facial plating' should hit even when surrounded by other words."""
    enforcer = StyleEnforcer()
    text = "the facial plating is visible around the jaw"
    hits = enforcer.count_required_cue_hits(text, ["facial plating", "implant seam"])
    assert hits >= 1


def test_build_preset_steering_block_unknown_preset_returns_empty():
    enforcer = StyleEnforcer()
    assert enforcer.build_preset_steering_block("solarpunk biophilic", style_key="NonExistentPreset") == ""


def test_summarize_style_text_truncates_long_text():
    enforcer = StyleEnforcer()
    long_text = ", ".join(["cue number " + str(i) for i in range(20)])
    summary = enforcer.summarize_style_text(long_text, max_cues=6, max_words_per_cue=8)
    assert len(summary.split(",")) <= 6


def test_detect_category_returns_general_for_empty_text():
    enforcer = StyleEnforcer()
    assert enforcer.detect_category("") == "general"
    assert enforcer.detect_category("   ") == "general"
