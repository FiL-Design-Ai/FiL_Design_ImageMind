"""Comprehensive prompting validation tests for all supported models.

Each model has specific requirements for prompt structure, JSON schema,
and post-conversion rules. This test suite validates that every model's
prompting is correctly implemented.
"""

from __future__ import annotations

import json

from FiL_Design_ImageMind.common.model_prompt_adapters import (
    build_response_format_instruction,
    convert_to_dit_format,
    format_for_flux_json,
)


# ─────────────────────────────────────────────────────────────────────────
# Auto/None - Passthrough model
# ─────────────────────────────────────────────────────────────────────────


def test_auto_none_text_mode_passthrough():
    """Auto/None should pass text through unchanged."""
    prompt = "A sleek android in neon city"
    output, meta = convert_to_dit_format(prompt, "Auto/None", "text")
    assert output == prompt
    assert meta["mode"] == "skipped"


def test_auto_none_json_mode_wraps_in_generic():
    """Auto/None JSON mode wraps invalid JSON."""
    prompt = "not valid json"
    output, meta = convert_to_dit_format(prompt, "Auto/None", "json")
    parsed = json.loads(output)
    assert parsed == {"prompt": "not valid json"}
    assert meta["mode"] == "generic_json_wrap"


def test_auto_none_no_response_instruction():
    """Auto/None has no response format instruction."""
    assert build_response_format_instruction("Auto/None", "text") == ""
    # JSON mode still gets generic instruction
    instr = build_response_format_instruction("Auto/None", "json")
    assert "OUTPUT: JSON" in instr


# ─────────────────────────────────────────────────────────────────────────
# Z-Image Turbo - Text normalization
# ─────────────────────────────────────────────────────────────────────────


def test_z_image_turbo_text_normalization():
    """Z-Image Turbo normalizes text but doesn't restructure."""
    prompt = "**bold text** here with commas, and dashes - and more"
    output, meta = convert_to_dit_format(prompt, "Z-Image Turbo", "text")
    assert meta["mode"] == "normalize_only"
    # Bold should be removed
    assert "**" not in output
    # Text should be preserved
    assert "commas" in output and "dashes" in output


def test_z_image_turbo_json_mode():
    """Z-Image Turbo JSON mode wraps in generic schema."""
    prompt = "a scene"
    output, meta = convert_to_dit_format(prompt, "Z-Image Turbo", "json")
    parsed = json.loads(output)
    assert "prompt" in parsed
    assert meta["mode"] == "generic_json_wrap"


# ─────────────────────────────────────────────────────────────────────────
# FLUX - Specialized JSON schema
# ─────────────────────────────────────────────────────────────────────────


def test_flux_text_mode_normalization():
    """FLUX text mode normalizes but doesn't force restructure."""
    prompt = "A mountain lake at dawn with 50mm lens, soft lighting"
    output, meta = convert_to_dit_format(prompt, "FLUX", "text")
    assert meta["mode"] == "normalize_only"
    assert "lake" in output
    assert "dawn" in output


def test_flux_json_schema_structure():
    """FLUX JSON mode returns proper 7-field schema."""
    prompt = (
        "A serene mountain lake at dawn with mist rising.\n"
        "Shot with a 35mm lens at f/2.8, eye level perspective.\n"
        "Colors: #1a2b3c and deep blue hues.\n"
        "Soft morning lighting illuminates the peaks.\n"
        "Mood: tranquil and contemplative.\n"
        "Style: cinematic landscape photography."
    )
    output, meta = convert_to_dit_format(prompt, "FLUX", "json")
    parsed = json.loads(output)

    expected_keys = {"scene", "subjects", "style", "color_palette", "lighting", "mood", "camera"}
    assert set(parsed.keys()) == expected_keys
    assert meta["mode"] == "flux_json"


def test_flux_json_schema_fields():
    """FLUX JSON schema extracts all required fields."""
    prompt = (
        "A serene mountain lake at dawn with mist rising.\n"
        "Shot with a 35mm lens at f/2.8, eye level perspective.\n"
        "Colors: #FF0000 #00FF00 and blue.\n"
        "Soft morning lighting illuminates the peaks.\n"
        "Mood: tranquil and contemplative.\n"
        "Style: cinematic landscape photography."
    )
    output, meta = convert_to_dit_format(prompt, "FLUX", "json")
    parsed = json.loads(output)

    assert "mountain lake" in parsed["scene"]
    assert parsed["camera"]["lens"] == "35mm"
    assert parsed["camera"]["f_number"] == "f/2.8"
    assert parsed["camera"]["angle"] == "eye level"
    assert "#FF0000" in parsed["color_palette"]
    assert "blue" in parsed["color_palette"]
    assert "tranquil" in parsed["mood"]
    assert "cinematic" in parsed["style"]


def test_flux_response_format_instruction():
    """FLUX JSON instruction specifies the schema."""
    instr = build_response_format_instruction("FLUX", "json")
    assert "FLUX JSON schema" in instr
    assert "scene" in instr and "camera" in instr


def test_flux_color_palette_deterministic():
    """FLUX color palette is deduped and deterministic."""
    prompt = "red red blue #ff0000 blue green #00ff00"
    result = format_for_flux_json(prompt)

    # Should have unique colors in order
    palette = result["color_palette"]
    assert "red" in palette
    assert "blue" in palette
    assert "green" in palette
    assert "#FF0000" in palette
    assert "#00FF00" in palette

    # No duplicates
    assert len(palette) == len(set(p.lower() for p in palette))


# ─────────────────────────────────────────────────────────────────────────
# SDXL - Forced restructuring
# ─────────────────────────────────────────────────────────────────────────


def test_sdxl_forces_restructuring():
    """SDXL always uses the restructured (prose) mode."""
    prompt = "A simple scene description"
    output, meta = convert_to_dit_format(prompt, "SDXL", "text")
    # SDXL always restructures
    assert meta["mode"] == "restructured"
    # Restructuring preserves the content (prose, not artificial padding)
    assert output.strip()


def test_sdxl_restructure_is_natural_language_not_labels():
    """SDXL restructuring yields natural-language prose, not label:value tags.

    The tag-style output (`subject: ...`, `composition: ...`) was intentionally
    removed — official guidance is that SDXL underperforms on tag-style prompts.
    """
    prompt = "A sleek android in a neon city with rain"
    output, meta = convert_to_dit_format(prompt, "SDXL", "text")

    assert meta["mode"] == "restructured"
    # Original terms preserved
    assert "android" in output or "neon" in output or "rain" in output
    # No SDXL label tags should be introduced
    lower = output.lower()
    for label in ("subject:", "composition:", "focal:", "scene:", "details:"):
        assert label not in lower


def test_sdxl_json_mode_wraps():
    """SDXL JSON mode wraps in generic schema."""
    prompt = "a scene"
    output, meta = convert_to_dit_format(prompt, "SDXL", "json")
    parsed = json.loads(output)
    assert "prompt" in parsed
    assert meta["mode"] == "generic_json_wrap"


# ─────────────────────────────────────────────────────────────────────────
# QWEN - clean prose passes, messy output gets repaired
# ─────────────────────────────────────────────────────────────────────────


def test_qwen_clean_prose_passes_through():
    """Clean LLM prose reaches Qwen-Image normalized, not bucketed."""
    prompt = "A simple scene description"
    output, meta = convert_to_dit_format(prompt, "QWEN", "text")
    assert meta["mode"] == "normalize_only"
    assert output == "A simple scene description"


def test_qwen_messy_output_still_restructured():
    """Markdown/bullet LLM output is repaired via the labeled restructure."""
    prompt = "**Subject:** A cyberpunk android\n- neon implants\n- rainy street"
    output, meta = convert_to_dit_format(prompt, "QWEN", "text")
    assert meta["mode"] == "restructured"

    # Must contain original key terms
    assert "android" in output or "neon" in output or "cyberpunk" in output


def test_qwen_word_truncation():
    """QWEN respects max word limits."""
    long_prompt = " ".join(["word"] * 600)
    output, meta = convert_to_dit_format(long_prompt, "QWEN", "text", detail_level="tiny")

    # Tiny detail level = 50 words max
    word_count = len(output.split())
    assert word_count <= 51  # 50 + possible ellipsis


# ─────────────────────────────────────────────────────────────────────────
# Krea 2 - Natural language mode
# ─────────────────────────────────────────────────────────────────────────


def test_krea2_natural_language_mode():
    """Krea 2 uses natural language mode."""
    prompt = "A serene landscape with mountains and lake"
    output, meta = convert_to_dit_format(prompt, "Krea 2", "text")

    assert meta["mode"] == "krea2_natural_language"
    # Should pass through mostly unchanged
    assert prompt in output or output == prompt


def test_krea2_no_restructuring():
    """Krea 2 does not restructure prompts."""
    prompt = "**bold text** with commas, and dashes - text"
    output, meta = convert_to_dit_format(prompt, "Krea 2", "text")

    # Bold markup might be normalized but not restructured
    assert meta["mode"] == "krea2_natural_language"
    assert "bold" in output or "text" in output


def test_krea2_json_mode():
    """Krea 2 JSON mode wraps in generic schema."""
    prompt = "a scene"
    output, meta = convert_to_dit_format(prompt, "Krea 2", "json")
    parsed = json.loads(output)
    assert "prompt" in parsed


# ─────────────────────────────────────────────────────────────────────────
# MiniMax H3 - Timeline shot-blocks pass through intact
# ─────────────────────────────────────────────────────────────────────────


def test_minimax_h3_timeline_passthrough():
    """Time-coded beats are H3's native rich format — never restructured."""
    timeline = (
        "10s, 16:9. [0-3s] Close-up of a lion on a cliff at sunset, eyes glowing "
        "gold, camera slowly pushes in. [3-7s] Energy lines race across its body "
        "as fur turns to metal plates, sparks flying, camera orbits. [7-10s] The "
        "transformed robot-lion roars, camera pulls back to a wide silhouette. "
        "Sound: wind, servo whine, a deep synthetic roar."
    )
    output, meta = convert_to_dit_format(timeline, "MiniMax H3", "text")

    assert meta["mode"] == "video_timeline_blocks"
    for beat in ("[0-3s]", "[3-7s]", "[7-10s]"):
        assert beat in output
    assert "Sound:" in output


# ─────────────────────────────────────────────────────────────────────────
# Ideogram 4 - Plain text mode (JSON schema discontinued)
# ─────────────────────────────────────────────────────────────────────────


def test_ideogram4_text_mode_passthrough():
    """Ideogram 4 text mode normalizes but doesn't restructure."""
    prompt = "A neon-lit cyberpunk scene with androids"
    output, meta = convert_to_dit_format(prompt, "Ideogram 4", "text")

    # Ideogram 4 uses plain text
    assert meta["mode"] != "ideogram4_json"
    assert "cyberpunk" in output or "android" in output


def test_ideogram4_json_mode_uses_caption_schema():
    """Ideogram 4 JSON mode routes through the canonical caption schema —
    response_format="json" is an explicit request for it, not generic JSON."""
    prompt = "A scene"
    output, meta = convert_to_dit_format(prompt, "Ideogram 4", "json")
    parsed = json.loads(output)

    assert list(parsed.keys()) == [
        "high_level_description",
        "style_description",
        "compositional_deconstruction",
    ]


# ─────────────────────────────────────────────────────────────────────────
# Cross-model comparison
# ─────────────────────────────────────────────────────────────────────────


def test_all_models_text_mode_produce_output():
    """All models produce text output in text mode."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]
    prompt = "A cyberpunk scene with neon lights"

    for model in models:
        output, meta = convert_to_dit_format(prompt, model, "text")
        assert isinstance(output, str)
        assert len(output) > 0
        assert isinstance(meta, dict)
        assert "mode" in meta


def test_all_models_json_mode_valid():
    """All models produce valid JSON in JSON mode."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]
    prompt = "A cyberpunk scene with neon lights"

    for model in models:
        output, meta = convert_to_dit_format(prompt, model, "json")
        # Should be valid JSON
        parsed = json.loads(output)
        assert isinstance(parsed, dict)
        assert isinstance(meta, dict)


def test_model_instructions_consistency():
    """All models have consistent instruction structure."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]

    for model in models:
        # Text mode should have no instruction
        text_instr = build_response_format_instruction(model, "text")
        assert text_instr == ""

        # JSON mode should have instruction or be empty (Auto/None)
        json_instr = build_response_format_instruction(model, "json")
        assert isinstance(json_instr, str)
        if json_instr:
            assert "OUTPUT" in json_instr or "JSON" in json_instr


# ─────────────────────────────────────────────────────────────────────────
# Detail level scaling
# ─────────────────────────────────────────────────────────────────────────


def test_detail_levels_affect_output_length():
    """Different detail levels produce different output lengths."""
    prompt = " ".join(["word"] * 100)

    tiny_out, _ = convert_to_dit_format(prompt, "FLUX", "text", detail_level="tiny")
    normal_out, _ = convert_to_dit_format(prompt, "FLUX", "text", detail_level="normal")
    ultra_out, _ = convert_to_dit_format(prompt, "FLUX", "text", detail_level="ultra")

    # Lengths should be proportional to detail level
    tiny_words = len(tiny_out.split())
    normal_words = len(normal_out.split())
    ultra_words = len(ultra_out.split())

    assert tiny_words <= normal_words <= ultra_words


def test_sdxl_respects_detail_level():
    """SDXL restructuring respects detail level limits."""
    long_prompt = " ".join(["word"] * 600)

    output, _ = convert_to_dit_format(long_prompt, "SDXL", "text", detail_level="tiny")
    word_count = len(output.split())

    # Tiny should limit to ~50 words
    assert word_count <= 51


# ─────────────────────────────────────────────────────────────────────────
# Error handling
# ─────────────────────────────────────────────────────────────────────────


def test_empty_prompt_handled():
    """All models handle empty prompts gracefully."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]

    for model in models:
        output, meta = convert_to_dit_format("", model, "text")
        assert isinstance(output, str)


def test_very_long_prompt_handled():
    """All models handle very long prompts."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]
    long_prompt = " ".join(["long"] * 1000)

    for model in models:
        output, meta = convert_to_dit_format(long_prompt, model, "text", detail_level="normal")
        assert isinstance(output, str)
        # Should be truncated/limited
        assert len(output.split()) <= 500  # reasonable limit


def test_special_characters_handled():
    """All models handle special characters."""
    models = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]
    prompt = "A scene with emoji 🎨 and symbols: #FF0000, @mention, $price"

    for model in models:
        output, meta = convert_to_dit_format(prompt, model, "text")
        assert isinstance(output, str)
