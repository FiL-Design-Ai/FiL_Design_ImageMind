from __future__ import annotations

from FiL_Design_ImageMind.common.data import (
    get_visible_style_keys,
    model_uses_positive_constraints,
)
from FiL_Design_ImageMind.common.logic import (
    PromptGenerator,
    build_model_type_guidance,
    build_observed_only_clause,
    negative_to_positive_clause,
)
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

pg = PromptGenerator()
_execute = as_the_executor_calls_it(FiLOpticScanner)
_PHOTO_STYLE_KEY = get_visible_style_keys("photo_style")[0]  # first real style
_RU_LANGUAGE_TAIL = "Do not answer in English even though these instructions are in English."


def _basic_config():
    return {"provider": "ollama", "model": "llama3.2-vision"}


# ---------------------------------------------------------------------------
# model-aware system prompt guidance
# ---------------------------------------------------------------------------


def test_model_type_guidance_present_for_supported_models():
    for model_type in ("Z-Image Turbo", "FLUX", "QWEN", "SDXL", "Krea 2", "Ideogram 4", "Video", "MiniMax H3"):
        assert build_model_type_guidance(model_type), f"{model_type} has no guidance"


def test_model_type_guidance_empty_for_auto():
    assert build_model_type_guidance("Auto/None") == ""


def test_system_prompt_bundle_includes_flux_guidance():
    system_prompt, _agent, _style, _lang = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="FLUX"
    )
    assert "FLUX" in system_prompt
    assert "natural language" in system_prompt


def test_system_prompt_bundle_includes_ideogram4_guidance():
    # Ideogram 4's real API takes a plain text prompt (docs.ideogram.ai) —
    # the guidance no longer describes the fabricated JSON caption schema.
    system_prompt, _agent, _style, _lang = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Ideogram 4"
    )
    assert "Ideogram 4" in system_prompt
    assert "no JSON" in system_prompt
    assert "high_level_description" not in system_prompt
    assert "compositional_deconstruction" not in system_prompt


def test_krea2_guidance_follows_krea_own_docs():
    # Rewritten against krea-ai/krea-2 docs/, which supersede the fal.ai
    # community guide's shorter budgets: long detailed prompts win here.
    guidance = build_model_type_guidance("Krea 2")

    # One paragraph of prose, at the length Krea's own docs ask for.
    assert "ONE flowing natural-language paragraph" in guidance
    assert "120-200 words" in guidance

    # The medium leads, and stylisation has to be spelled out or a cartoon
    # request comes back photoreal.
    assert "first words" in guidance and "name the medium" in guidance
    assert "stylised 3D cartoon character" in guidance
    assert "head size against the body" in guidance

    # On-image text is asked for once — a mirrored second copy renders as
    # scrambled letters.
    assert "double quotes" in guidance
    assert "ONCE" in guidance

    # The closing object is the other half of the absence ban: it gives the
    # model somewhere better to put its final sentence.
    assert "close enough to see its surface" in guidance

    # Faithfulness: the canonical invented-props case is named on purpose,
    # because naming it is what stopped it.
    assert "broken oars" in guidance


def test_absence_ban_reaches_every_positive_constraints_model():
    # An image model cannot subtract, so naming an absent thing tends to add
    # it. The clause attaches by negative_strategy, not by a hand-kept list.
    for model_type in ("Z-Image Turbo", "FLUX", "Krea 2", "Ideogram 4", "Video", "MiniMax H3"):
        guidance = build_model_type_guidance(model_type)
        assert model_uses_positive_constraints(model_type), model_type
        assert "NEVER NAME WHAT IS ABSENT" in guidance, model_type
        assert "cannot subtract" in guidance, model_type

    # Models with a real negative prompt keep their own policy.
    for model_type in ("SDXL", "QWEN"):
        assert "NEVER NAME WHAT IS ABSENT" not in build_model_type_guidance(model_type)


def test_video_on_screen_text_clause_stays_positive():
    # The last place the guidance still asked for a negative ("no other
    # lettering, no subtitles") — reworded, or it contradicts the ban above.
    guidance = build_model_type_guidance("Video")
    assert "only that text appears" in guidance
    assert "only lettering in the shot" in guidance
    assert "no other lettering" not in guidance


def test_system_prompt_bundle_auto_has_no_model_guidance():
    system_prompt, _agent, _style, _lang = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Auto/None"
    )
    # No model-type guidance section for Auto
    assert "Target generator:" not in system_prompt


# ---------------------------------------------------------------------------
# the frame outranks the template
# ---------------------------------------------------------------------------


def test_observed_only_clause_only_with_a_profile_and_an_image():
    # Auto/None asks for nothing but a description, so it needs no rule; and
    # without an image there is nothing to stay faithful to — text-only runs
    # invent the scene on purpose.
    assert build_observed_only_clause("Auto/None", True) == ""
    assert build_observed_only_clause("FLUX", False) == ""
    assert build_observed_only_clause("FLUX", True).startswith("GROUNDING:")


def test_observed_only_clause_present_for_every_image_profile():
    for model_type in ("Z-Image Turbo", "FLUX", "QWEN", "SDXL", "Krea 2", "Ideogram 4"):
        clause = build_observed_only_clause(model_type, True)
        assert "skip the slot" in clause, f"{model_type} lost the skip-the-slot rule"
        assert "invent a plausible value" in clause


def test_observed_only_clause_for_video_keeps_motion_extendable():
    # A video profile is asked for the seconds around the frame — the rule must
    # bind WHAT is in the shot without forbidding the motion it exists for.
    for model_type in ("Video", "MiniMax H3"):
        clause = build_observed_only_clause(model_type, True)
        assert "Motion, camera and sound are the one extension allowed" in clause
        assert "skip the slot" not in clause


def test_system_prompt_bundle_grounds_a_profile_on_the_image():
    system_prompt, _agent, _style, _lang = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="FLUX", has_image=True,
    )
    assert "GROUNDING:" in system_prompt
    # It has to read after the template it constrains, or the template wins.
    assert system_prompt.index("Target generator:") < system_prompt.index("GROUNDING:")

    text_only, _agent, _style, _lang = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="FLUX", has_image=False,
    )
    assert "GROUNDING:" not in text_only


def test_two_stage_bundle_grounds_both_stages():
    # Stage 2 never sees the image, but it rewrites stage 1 under the same
    # template and can invent the same camera/lighting slots.
    bundle = pg.build_system_prompt_two_stage_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="FLUX", has_image=True, photo_style=_PHOTO_STYLE_KEY,
    )
    assert "GROUNDING:" in bundle["stage1"]["prompt"]
    assert "GROUNDING:" in bundle["stage2"]["prompt"]

    auto = pg.build_system_prompt_two_stage_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="Auto/None", has_image=True, photo_style=_PHOTO_STYLE_KEY,
    )
    assert "GROUNDING:" not in auto["stage1"]["prompt"]
    assert "GROUNDING:" not in auto["stage2"]["prompt"]


def test_system_prompt_bundle_includes_video_guidance():
    # The universal video profile must teach the LLM to write a motion-aware
    # shot description for video models (MiniMax H2/H3, Wan, HunyuanVideo, ...)
    system_prompt, _agent, _style, _lang = pg.build_system_prompt_bundle(
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


def test_video_guidance_teaches_motion_camera_sound_structure():
    # The 2026-08-05 rewrite targets four observed failure modes: still-frame
    # prompts, collapsed structure, generic sound, vague camera. Each block
    # below is the guidance that fixes one of them — assert they survive edits.
    guidance = build_model_type_guidance("Video")

    # Still frames: the prompt is a shot in time; a wired image is one frozen
    # instant whose motion evidence must be projected forward.
    assert "shot unfolding in time" in guidance
    assert "frozen instant" in guidance
    assert "Never" in guidance and "still frame" in guidance

    # Camera specificity: shot size + angle vocabulary and the one-move rule.
    assert "shot size" in guidance
    assert "extreme close-up" in guidance
    assert "one move per shot" in guidance

    # Motion specificity: secondary motion and light changing over time.
    assert "secondary motion" in guidance
    assert "light changes" in guidance

    # Structure: one paragraph, no markup, no timestamps/bracket tags.
    assert "ONE continuous natural-language paragraph" in guidance
    assert "timestamps" in guidance
    assert "[bracket]" in guidance

    # Sound: a layered clause tied to what is on screen, not a generic line.
    assert "ambience bed" in guidance
    assert "foley" in guidance

    # Narrative arcs keep their stages instead of flattening into a portrait.
    assert "first / then / finally" in guidance


def test_minimax_h3_guidance_teaches_timeline_blocks():
    guidance = build_model_type_guidance("MiniMax H3")

    # Header line: duration + aspect, per the official prompt guide examples.
    assert "16:9" in guidance
    assert "4 to" in guidance and "15" in guidance  # API duration range

    # Beats: time-coded, covering the whole duration without gaps or overlap.
    assert "[0-3s]" in guidance
    assert "no gaps" in guidance

    # Every beat needs a motion instruction — H3 loops otherwise — and a
    # camera behavior; empty beats must be merged, not padded.
    assert "loops motion" in guidance
    assert "one camera move" in guidance
    assert "do not pad beats" in guidance

    # Vendor-documented inline camera tags (platform.minimax.io, 2026-08-05).
    assert "[pan]" in guidance and "[zoom]" in guidance and "[static]" in guidance

    # Subject identity must hold across cuts: same words in every beat.
    assert "same words" in guidance

    # Reference images get explicit jobs on the first line.
    assert "Image 1:" in guidance

    # Native stereo audio: layered Sound: clause, not a throwaway line.
    assert "Sound:" in guidance
    assert "ambience bed" in guidance

    # The API has no negative-prompt input.
    assert "positively" in guidance
    assert "no negative-prompt" in guidance


# ---------------------------------------------------------------------------
# language rule closes the final system prompt (node level)
# ---------------------------------------------------------------------------
# The bundle returns the language rule separately; the node stacks style
# overlays on top of the bundle and must append the rule AFTER them, or the
# English style text pulls small models out of Russian (the 29% incident).


def test_language_rule_closes_the_hybrid_system_prompt_after_overlays(stub_scanner_generate):
    captured = {}

    def fake_generate(**kwargs):
        captured.update(kwargs)
        return "неоновая улица под дождём"

    stub_scanner_generate(fake_generate)
    _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="неон",
        language="ru",
        photo_style=_PHOTO_STYLE_KEY,
        custom_style="cyberpunk noir",
    )
    system = captured.get("system_prompt", "")
    assert "Custom style override" in system
    assert system.rstrip().endswith(_RU_LANGUAGE_TAIL)
    assert system.index("Custom style override") < system.index("LANGUAGE:")
    assert system.count("LANGUAGE:") == 1, "stated once — repeating it is not what fixed this"


def test_language_rule_closes_stage2_after_its_overlays(stub_scanner_generate):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        return "неоновая улица под дождём, кинематографично"

    stub_scanner_generate(fake_generate)
    _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="неон",
        language="ru",
        prompt_mode="Two-Stage",
        photo_style=_PHOTO_STYLE_KEY,
        custom_style="cyberpunk noir",
    )
    assert len(calls) == 2
    stage2 = calls[1]["system_prompt"]
    assert "Style overlay" in stage2
    assert stage2.rstrip().endswith(_RU_LANGUAGE_TAIL)
    assert stage2.index("Style overlay") < stage2.index("LANGUAGE:")
    # Stage 1 carries the rule too — English in stage 1 would spread into
    # stage 2's source text.
    assert calls[0]["system_prompt"].rstrip().endswith(_RU_LANGUAGE_TAIL)


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
