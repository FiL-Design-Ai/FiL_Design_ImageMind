from __future__ import annotations

import json

from FiL_LLM.common.model_prompt_adapters import (
    adapt_ideogram4_caption,
    append_response_format_instruction,
    build_response_format_instruction,
    convert_to_dit_format,
    format_for_flux_json,
    post_convert_prompt,
    text_needs_dit_restructure,
)


# ---------------------------------------------------------------------------
# adapt_ideogram4_caption
# ---------------------------------------------------------------------------


def test_ideogram4_canonical_input_passes_through():
    canonical = {
        "high_level_description": "A serene mountain lake at dawn.",
        "style_description": {
            "aesthetics": "calm",
            "lighting": "soft morning light",
            "photo": "wide angle",
            "medium": "photograph",
        },
        "compositional_deconstruction": {
            "background": "distant peaks",
            "elements": [
                {"type": "obj", "desc": "a wooden dock"},
            ],
        },
    }
    text = json.dumps(canonical)
    output, meta = adapt_ideogram4_caption(text)
    parsed = json.loads(output)
    assert list(parsed.keys()) == [
        "high_level_description",
        "style_description",
        "compositional_deconstruction",
    ]
    assert list(parsed["compositional_deconstruction"].keys()) == ["background", "elements"]
    assert meta["schema_valid"] is True
    assert meta["target_prompt_format"] == "ideogram4_json"


def test_ideogram4_repair_malformed_json():
    malformed = '{"prompt": "a cat", "aspect_ratio": "1:1"}'
    output, meta = adapt_ideogram4_caption(malformed, source_text="a cat on a mat")
    parsed = json.loads(output)
    assert list(parsed.keys()) == [
        "high_level_description",
        "style_description",
        "compositional_deconstruction",
    ]
    assert "a cat" in parsed["high_level_description"]
    assert meta["schema_valid"] is False
    assert meta["schema_repaired"] is True


def test_ideogram4_empty_and_non_json_falls_back_to_source_text():
    output, meta = adapt_ideogram4_caption("not json at all", source_text="described scene")
    parsed = json.loads(output)
    assert "described scene" in parsed["high_level_description"]
    assert meta["schema_valid"] is False
    assert meta["schema_repaired"] is True
    assert parsed["compositional_deconstruction"]["elements"]  # non-empty fallback


def test_ideogram4_bbox_validation_rejects_bad_values():
    bad = {
        "high_level_description": "scene",
        "style_description": {"aesthetics": "x", "lighting": "y", "photo": "z", "medium": "photograph"},
        "compositional_deconstruction": {
            "background": "bg",
            "elements": [
                {"type": "obj", "desc": "thing", "bbox": [10, 20, 5, 30]},  # y1 >= y2 -> invalid
            ],
        },
    }
    output, meta = adapt_ideogram4_caption(json.dumps(bad))
    parsed = json.loads(output)
    element = parsed["compositional_deconstruction"]["elements"][0]
    assert "bbox" not in element  # invalid bbox dropped


def test_ideogram4_palette_only_accepts_hex_uppercase():
    caption = {
        "high_level_description": "scene",
        "style_description": {
            "aesthetics": "x",
            "lighting": "y",
            "photo": "z",
            "medium": "photograph",
            "color_palette": ["#ff0000", "red", "#abc", "#00ff00"],
        },
        "compositional_deconstruction": {"background": "bg", "elements": []},
    }
    output, _meta = adapt_ideogram4_caption(json.dumps(caption))
    parsed = json.loads(output)
    palette = parsed["style_description"]["color_palette"]
    assert palette == ["#FF0000", "#00FF00"]  # only valid 6-digit hex, uppercased, deduped


def test_ideogram4_quoted_literal_injection():
    source = 'a sign reading "Hello World" and another saying \'goodbye\''
    output, meta = adapt_ideogram4_caption("just a scene", source_text=source)
    parsed = json.loads(output)
    text_elements = [e for e in parsed["compositional_deconstruction"]["elements"] if e.get("type") == "text"]
    texts = [e.get("text") for e in text_elements]
    assert "Hello World" in texts
    assert "goodbye" in texts
    assert meta["text_element_count"] >= 2


def test_ideogram4_output_is_minified():
    output, _ = adapt_ideogram4_caption("scene")
    assert "\n" not in output  # no pretty-printing
    # Minified separators: no space after a colon that follows a key.
    # (commas inside string values are fine, so only check the key:value gap.)
    assert '"high_level_description": ' not in output


def test_ideogram4_style_branch_photo_vs_art():
    # photo branch includes 'photo' key
    out_photo, _ = adapt_ideogram4_caption(
        "scene", style_text="portrait", style_type="photo_style"
    )
    parsed = json.loads(out_photo)
    assert "photo" in parsed["style_description"]
    assert parsed["style_description"]["medium"] == "photograph"
    # art branch includes 'art_style' key
    out_art, _ = adapt_ideogram4_caption("scene", style_text="oil painting", style_type="art")
    parsed = json.loads(out_art)
    assert "art_style" in parsed["style_description"]
    assert parsed["style_description"]["art_style"] == "oil painting"


# ---------------------------------------------------------------------------
# format_for_flux_json
# ---------------------------------------------------------------------------


def test_flux_json_extracts_all_fields():
    desc = (
        "A serene mountain lake at dawn with mist rising.\n"
        "Shot with a 35mm lens at f/2.8, eye level perspective.\n"
        "Colors: #1a2b3c #ff8800 and deep blue hues.\n"
        "Soft morning lighting illuminates the peaks.\n"
        "Mood: tranquil and contemplative.\n"
        "Style: cinematic landscape photography."
    )
    result = format_for_flux_json(desc)
    assert set(result.keys()) == {
        "scene", "subjects", "style", "color_palette", "lighting", "mood", "camera"
    }
    assert set(result["camera"].keys()) == {"angle", "lens", "f_number"}
    assert "mountain lake" in result["scene"]
    assert result["camera"]["lens"] == "35mm"
    assert result["camera"]["f_number"] == "f/2.8"
    assert result["camera"]["angle"] == "eye level"
    assert "#1A2B3C" in result["color_palette"]
    assert "#FF8800" in result["color_palette"]
    assert "blue" in result["color_palette"]
    assert "morning lighting" in result["lighting"]
    assert "tranquil" in result["mood"]
    assert "cinematic" in result["style"]


def test_flux_json_empty_input_returns_blank_skeleton():
    result = format_for_flux_json("")
    assert result == {
        "scene": "",
        "subjects": [],
        "style": "",
        "color_palette": [],
        "lighting": "",
        "mood": "",
        "camera": {"angle": "", "lens": "", "f_number": ""},
    }


def test_flux_json_color_palette_deterministic_order():
    desc = "red red blue #ff0000 blue green"
    result = format_for_flux_json(desc)
    # deduped, insertion order preserved (not a random set)
    assert result["color_palette"].count("red") == 1
    assert result["color_palette"].count("blue") == 1
    # hex keeps leading '#'
    assert any(c.startswith("#") for c in result["color_palette"])
    assert len(result["color_palette"]) <= 5


# ---------------------------------------------------------------------------
# text_needs_dit_restructure / convert_to_dit_format
# ---------------------------------------------------------------------------


def test_restructure_detects_markdown_bold():
    assert text_needs_dit_restructure("**bold text** here", "SDXL", 500) is True


def test_restructure_detects_bullet_list():
    assert text_needs_dit_restructure("- item one\n- item two", "SDXL", 500) is True


def test_restructure_detects_field_labels():
    assert text_needs_dit_restructure("Subject: a woman. Lighting: soft.", "SDXL", 500) is True


def test_restructure_detects_over_length():
    long_text = " ".join(["word"] * 600)
    assert text_needs_dit_restructure(long_text, "FLUX", 160) is True


def test_restructure_plain_prose_returns_false():
    plain = "a serene mountain lake at dawn with mist rising over the peaks"
    assert text_needs_dit_restructure(plain, "Auto/None", 500) is False


def test_restructure_sdxl_low_comma_count():
    assert text_needs_dit_restructure("a plain description without commas here", "SDXL", 500) is True


def test_dit_convert_qwen_forces_restructure_of_plain_prose():
    plain = "a serene mountain lake at dawn with mist rising"
    output, meta = convert_to_dit_format(plain, "QWEN", detail_level="normal")
    # QWEN forces restructure -> labeled clauses
    assert "Scene type:" in output or "Main subject:" in output or "Details:" in output
    assert meta["mode"] == "restructured"


def test_dit_convert_sdxl_plain_prose_comma_joined():
    plain = "a serene mountain lake, dawn, mist rising, peaks in the distance"
    output, meta = convert_to_dit_format(plain, "SDXL", detail_level="normal")
    assert meta["mode"] in ("restructured", "normalize_only", "normalize_style_preserve")
    assert "serene" in output


def test_dit_convert_auto_passes_through():
    output, meta = convert_to_dit_format("any text here", "Auto/None", "text")
    assert output == "any text here"
    assert meta["mode"] == "skipped"


def test_dit_convert_krea2_natural_language():
    output, meta = convert_to_dit_format("a scene description", "Krea 2", "text")
    assert meta["mode"] == "krea2_natural_language"
    assert output == "a scene description"


def test_dit_convert_flux_json_mode_returns_7_field_schema():
    output, meta = convert_to_dit_format(
        "a scene. 50mm lens f/1.8. red color.", "FLUX", "json"
    )
    parsed = json.loads(output)
    assert set(parsed.keys()) == {
        "scene", "subjects", "style", "color_palette", "lighting", "mood", "camera"
    }
    assert meta["mode"] == "flux_json"


def test_dit_convert_ideogram4_text_mode_normalizes_plain_text():
    # Ideogram 4's real API takes a plain natural-language prompt (docs.ideogram.ai) —
    # it no longer routes to the fabricated JSON caption schema.
    output, meta = convert_to_dit_format("a scene description", "Ideogram 4", "text")
    assert "scene description" in output
    assert meta["mode"] != "ideogram4_json"


def test_dit_convert_generic_json_passthrough():
    output, meta = convert_to_dit_format('{"key": "value"}', "SDXL", "json")
    parsed = json.loads(output)
    assert parsed == {"key": "value"}
    assert meta["mode"] == "json_passthrough"


def test_dit_convert_generic_json_wrap_on_invalid():
    output, meta = convert_to_dit_format("not valid json", "SDXL", "json")
    parsed = json.loads(output)
    assert parsed == {"prompt": "not valid json"}
    assert meta["mode"] == "generic_json_wrap"


def test_dit_convert_word_truncation_respects_detail_level():
    long_text = " ".join(["word"] * 600)
    output, meta = convert_to_dit_format(long_text, "FLUX", "text", detail_level="tiny")
    # tiny max_words = 50
    assert len(output.split()) <= 51  # 50 words + possible trailing "..."


def test_post_convert_prompt_returns_tuple_and_meta():
    output, meta = post_convert_prompt("a scene", "Ideogram 4", "text")
    assert isinstance(output, str)
    assert isinstance(meta, dict)
    # Ideogram 4 no longer forces json response_format — real API takes a
    # plain text prompt (docs.ideogram.ai).
    assert meta["mode"] != "ideogram4_json"
    assert meta["response_format"] == "text"


# ---------------------------------------------------------------------------
# build_response_format_instruction / append_response_format_instruction
# ---------------------------------------------------------------------------


def test_response_format_instruction_empty_in_text_mode():
    assert build_response_format_instruction("Ideogram 4", "text") == ""
    assert build_response_format_instruction("FLUX", "text") == ""


def test_response_format_instruction_ideogram4_no_longer_uses_json_schema():
    # Ideogram 4 no longer routes to the fabricated JSON caption schema —
    # it falls through to the generic JSON instruction like any other model.
    instruction = build_response_format_instruction("Ideogram 4", "json")
    assert "IDEOGRAM 4 JSON" not in instruction
    assert instruction == "OUTPUT: JSON\nReturn valid JSON only."


def test_response_format_instruction_flux_json_mode():
    instruction = build_response_format_instruction("FLUX", "json")
    assert "FLUX JSON schema" in instruction
    assert "scene" in instruction and "camera" in instruction


def test_response_format_instruction_generic_json():
    instruction = build_response_format_instruction("SDXL", "json")
    assert instruction == "OUTPUT: JSON\nReturn valid JSON only."


def test_append_instruction_idempotent():
    user = "describe the image"
    once = append_response_format_instruction(user, "FLUX", "json")
    twice = append_response_format_instruction(once, "FLUX", "json")
    assert once == twice


def test_append_instruction_no_op_in_text_mode():
    user = "describe the image"
    assert append_response_format_instruction(user, "FLUX", "text") == user


# ---------------------------------------------------------------------------
# Ideogram 4 edge cases
# ---------------------------------------------------------------------------


def test_ideogram4_fenced_json_block_extracted():
    fenced = '```json\n{"high_level_description": "scene", "extra": "x"}\n```'
    output, meta = adapt_ideogram4_caption(fenced, source_text="fallback scene")
    parsed = json.loads(output)
    assert parsed["high_level_description"] == "scene"
    assert meta["schema_repaired"] is True


def test_ideogram4_empty_input_uses_placeholder():
    output, meta = adapt_ideogram4_caption("")
    parsed = json.loads(output)
    assert parsed["high_level_description"]  # non-empty placeholder
    assert "elements" in parsed["compositional_deconstruction"]
    assert meta["schema_repaired"] is True
