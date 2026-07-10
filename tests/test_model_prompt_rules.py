from __future__ import annotations

from FiL_Design_ImageMind.common.data import (
    DETAIL_LEVELS,
    MODEL_PROMPT_RULES,
    MODEL_TYPE_OPTIONS,
    get_detail_info,
    get_effective_response_format,
    get_model_prompt_max_words,
    get_model_prompt_rule,
    get_target_prompt_format,
    model_needs_prompt_post_conversion,
    model_supports_negative_prompt,
    model_uses_dit_prompting,
    model_uses_flux_json_schema,
    model_uses_ideogram_json_schema,
    model_uses_positive_constraints,
)


def test_model_type_options_match_rules_keys():
    """MODEL_PROMPT_RULES keys must equal MODEL_TYPE_OPTIONS, in order."""
    assert list(MODEL_PROMPT_RULES.keys()) == MODEL_TYPE_OPTIONS


def test_every_rule_has_full_schema():
    expected_fields = {
        "label",
        "uses_dit_prompting",
        "post_convert_text",
        "supports_negative_prompt",
        "negative_strategy",
        "max_words",
        "json_schema",
        "target_prompt_format",
        "force_response_format",
        "source_status",
    }
    for model_type, rule in MODEL_PROMPT_RULES.items():
        missing = expected_fields - set(rule.keys())
        assert not missing, f"{model_type} missing fields: {missing}"
        assert rule["label"] == model_type
        assert rule["negative_strategy"] in ("standard", "positive_constraints")
        assert rule["json_schema"] in (None, "ideogram4", "flux")
        assert rule["source_status"] in (
            "project_fallback",
            "verified",
            "partially_verified",
        )


def test_ideogram4_no_longer_forces_json_response_format():
    # Ideogram's real API takes a plain text prompt (docs.ideogram.ai) —
    # the old "always force JSON" behavior was based on a fabricated schema.
    assert get_effective_response_format("Ideogram 4", "text") == "text"
    assert get_effective_response_format("Ideogram 4", "json") == "json"


def test_non_forced_models_passthrough_response_format():
    assert get_effective_response_format("FLUX", "text") == "text"
    assert get_effective_response_format("FLUX", "json") == "json"
    assert get_effective_response_format("Auto/None", "text") == "text"


def test_target_prompt_format_explicit_vs_computed():
    # explicit
    assert get_target_prompt_format("Krea 2", "text") == "krea2_natural_language"
    # computed (Ideogram 4 no longer has an explicit target_prompt_format —
    # it uses the same computed fallback as any other plain-text model)
    assert get_target_prompt_format("Ideogram 4", "json") == "ideogram_4_json"
    assert get_target_prompt_format("FLUX", "json") == "flux_json"
    assert get_target_prompt_format("Z-Image Turbo", "text") == "z-image_turbo_text"
    assert get_target_prompt_format("Auto/None", "text") == "auto/none_text"


def test_dit_prompting_flags():
    assert model_uses_dit_prompting("FLUX") is True
    assert model_uses_dit_prompting("Z-Image Turbo") is True
    assert model_uses_dit_prompting("QWEN") is True
    assert model_uses_dit_prompting("SDXL") is False
    assert model_uses_dit_prompting("Krea 2") is False
    assert model_uses_dit_prompting("Ideogram 4") is False
    assert model_uses_dit_prompting("Auto/None") is False


def test_positive_constraints_flags():
    # positive_constraints: FLUX, Z-Image, Krea 2 (no real negative-prompt support)
    assert model_uses_positive_constraints("FLUX") is True
    assert model_uses_positive_constraints("Z-Image Turbo") is True
    assert model_uses_positive_constraints("Krea 2") is True
    # standard: SDXL, QWEN, Auto, Ideogram 4 (Ideogram's API has a real
    # negative_prompt field per docs.ideogram.ai)
    assert model_uses_positive_constraints("SDXL") is False
    assert model_uses_positive_constraints("QWEN") is False
    assert model_uses_positive_constraints("Auto/None") is False
    assert model_uses_positive_constraints("Ideogram 4") is False


def test_json_schema_helpers():
    assert model_uses_ideogram_json_schema("Ideogram 4") is False
    assert model_uses_ideogram_json_schema("FLUX") is False
    assert model_uses_flux_json_schema("FLUX", "json") is True
    assert model_uses_flux_json_schema("FLUX", "text") is False
    assert model_uses_flux_json_schema("Ideogram 4", "json") is False


def test_post_conversion_needs():
    # json mode always triggers post-conversion
    assert model_needs_prompt_post_conversion("Auto/None", "json") is True
    # text mode respects post_convert_text flag
    assert model_needs_prompt_post_conversion("FLUX", "text") is True
    assert model_needs_prompt_post_conversion("Auto/None", "text") is False
    assert model_needs_prompt_post_conversion("Krea 2", "text") is False
    # ideogram forced json -> always needs
    assert model_needs_prompt_post_conversion("Ideogram 4", "text") is True


def test_negative_prompt_support():
    assert model_supports_negative_prompt("Auto/None") is True
    assert model_supports_negative_prompt("SDXL") is True
    assert model_supports_negative_prompt("QWEN") is True
    assert model_supports_negative_prompt("FLUX") is False
    assert model_supports_negative_prompt("Z-Image Turbo") is False
    assert model_supports_negative_prompt("Ideogram 4") is True
    assert model_supports_negative_prompt("Krea 2") is False


def test_max_words():
    assert get_model_prompt_max_words("Z-Image Turbo") == 250
    assert get_model_prompt_max_words("FLUX") == 160
    assert get_model_prompt_max_words("Auto/None") is None
    assert get_model_prompt_max_words("SDXL") is None


def test_unknown_model_falls_back_to_auto():
    rule = get_model_prompt_rule("Nonexistent Model")
    assert rule == MODEL_PROMPT_RULES["Auto/None"]


def test_detail_levels_dict_has_word_ranges():
    assert isinstance(DETAIL_LEVELS, dict)
    for key, info in DETAIL_LEVELS.items():
        assert "words" in info
        words = info["words"]
        assert isinstance(words, list) and len(words) == 2
        assert words[0] < words[1]
    assert DETAIL_LEVELS["normal"]["words"] == [100, 250]
    assert DETAIL_LEVELS["ultra"]["words"] == [500, 1200]


def test_get_detail_info_lookup():
    assert get_detail_info("normal")["words"] == [100, 250]
    assert get_detail_info("tiny")["words"] == [20, 50]
    # tolerant of emoji/label-prefixed keys
    assert get_detail_info("🌳 normal")["words"] == [100, 250]
    assert get_detail_info("ultra detail")["words"] == [500, 1200]
    # fallback for unknown
    fallback = get_detail_info("nonexistent")
    assert fallback["words"] == [100, 250]
