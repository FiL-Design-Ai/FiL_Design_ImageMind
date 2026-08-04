from __future__ import annotations

from FiL_Design_ImageMind.common.data import get_visible_style_keys
from FiL_Design_ImageMind.common.logic import (
    PromptGenerator,
    build_model_type_guidance,
    negative_to_positive_clause,
)

pg = PromptGenerator()
_PHOTO_STYLE_KEY = get_visible_style_keys("photo_style")[0]  # first real style


# ---------------------------------------------------------------------------
# model-aware system prompt guidance
# ---------------------------------------------------------------------------


def test_model_type_guidance_present_for_supported_models():
    for model_type in ("Z-Image Turbo", "FLUX", "QWEN", "SDXL", "Krea 2", "Ideogram 4", "Video", "MiniMax H3"):
        assert build_model_type_guidance(model_type), f"{model_type} has no guidance"


def test_model_type_guidance_empty_for_auto():
    assert build_model_type_guidance("Auto/None") == ""


def test_system_prompt_bundle_includes_flux_guidance():
    system_prompt, _agent, _style = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="FLUX"
    )
    assert "FLUX" in system_prompt
    assert "natural language" in system_prompt


def test_system_prompt_bundle_includes_ideogram4_guidance():
    # Ideogram 4's real API takes a plain text prompt (docs.ideogram.ai) —
    # the guidance no longer describes the fabricated JSON caption schema.
    system_prompt, _agent, _style = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Ideogram 4"
    )
    assert "Ideogram 4" in system_prompt
    assert "no JSON" in system_prompt
    assert "high_level_description" not in system_prompt
    assert "compositional_deconstruction" not in system_prompt


def test_system_prompt_bundle_auto_has_no_model_guidance():
    system_prompt, _agent, _style = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Auto/None"
    )
    # No model-type guidance section for Auto
    assert "Target generator:" not in system_prompt


def test_system_prompt_bundle_includes_video_guidance():
    # The universal video profile must teach the LLM to write a motion-aware
    # shot description for video models (MiniMax H2/H3, Wan, HunyuanVideo, ...)
    system_prompt, _agent, _style = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Video"
    )
    assert "video generation models" in system_prompt
    assert "MiniMax" in system_prompt
    assert "MOTION" in system_prompt
    assert "camera" in system_prompt
    # Video models have no negative-prompt mechanism — constraints stay positive
    assert "positively" in system_prompt
    # Static shots must be called out, or the model defaults to a slow push-in
    assert "locked-off" in system_prompt
    # Native-audio models invent a random ambience unless sound is described
    assert "sound design" in system_prompt
    # Wired references get explicit jobs instead of an unstructured image pile
    assert "reference controls" in system_prompt
    # On-screen text is quoted verbatim and declared the only lettering
    assert "only that text appears" in system_prompt


# ---------------------------------------------------------------------------
# two-stage bundle
# ---------------------------------------------------------------------------


def test_two_stage_bundle_stage1_has_no_style_stage2_has_style():
    bundle = pg.build_system_prompt_two_stage_bundle(
        agent_key="Universal",
        detail_level="normal",
        language="en",
        model_type="FLUX",
        photo_style=_PHOTO_STYLE_KEY,
    )
    stage1 = bundle["stage1"]["prompt"]
    stage2 = bundle["stage2"]["prompt"]
    style_block = bundle["style_block"]
    assert style_block  # a style was selected
    assert "Style overlay" not in stage1  # stage 1 has NO style
    assert "Style overlay" in stage2  # stage 2 HAS style
    # Both include the FLUX model guidance
    assert "FLUX" in stage1 and "FLUX" in stage2


def test_two_stage_bundle_no_style_when_none_selected():
    bundle = pg.build_system_prompt_two_stage_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="FLUX"
    )
    assert bundle["style_block"] == ""
    assert "Style overlay" not in bundle["stage2"]["prompt"]


# ---------------------------------------------------------------------------
# stage user prompts
# ---------------------------------------------------------------------------


def test_stage1_user_prompt_with_image():
    msg = pg.build_stage1_user_prompt("describe the lighting", has_image=True)
    assert "source of truth" in msg
    assert "describe the lighting" in msg


def test_stage1_user_prompt_no_image_passthrough():
    msg = pg.build_stage1_user_prompt("a mountain lake", has_image=False)
    assert msg == "a mountain lake"


def test_stage2_user_prompt_includes_source_description():
    msg = pg.build_stage2_user_prompt(
        "a serene mountain lake", "emphasize the mist", model_type="FLUX"
    )
    assert "a serene mountain lake" in msg
    assert "emphasize the mist" in msg
    assert "Reformat" in msg or "generation prompt" in msg


# ---------------------------------------------------------------------------
# negative -> positive constraints
# ---------------------------------------------------------------------------


def test_negative_clause_standard_model_uses_avoid():
    clause = negative_to_positive_clause("blurry, extra fingers", "SDXL")
    assert clause.startswith("Avoid:")
    assert "blurry" in clause


def test_negative_clause_positive_constraints_model_reframes():
    clause = negative_to_positive_clause("blurry, extra fingers", "FLUX")
    assert "Avoid:" not in clause
    assert "positively" in clause or "do not include" in clause
    assert "blurry" in clause


def test_negative_clause_empty_for_no_negative():
    assert negative_to_positive_clause("", "FLUX") == ""
    assert negative_to_positive_clause("   ", "SDXL") == ""


def test_negative_clause_applies_to_all_positive_models():
    for model_type in ("FLUX", "Z-Image Turbo", "Krea 2", "Ideogram 4", "Video", "MiniMax H3"):
        clause = negative_to_positive_clause("x", model_type)
        assert "Avoid:" not in clause, f"{model_type} should use positive constraints"


def test_negative_clause_ideogram4_uses_positive_constraints():
    # Ideogram 4's v4 API exposes no negative_prompt field (only v3 had one)
    # and its prompting guide recommends positive opposites, so exclusions are
    # reframed the same way as FLUX/Z-Image/Krea 2/Video.
    clause = negative_to_positive_clause("x", "Ideogram 4")
    assert "Avoid:" not in clause
    assert clause.startswith("Constraints")
