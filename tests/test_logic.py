from __future__ import annotations


def test_the_bundle_returns_the_language_rule_instead_of_burying_it():
    """A run over 132 models on 2026-07-29 found 38 answering in English.

    "Answer in Russian." sat third among eight blocks of English prose, which
    the smaller models read straight past. The rule must be the LAST block the
    model reads — but the node stacks style overlays (enforcement / NSFW /
    custom style) on top of this bundle, so the bundle no longer embeds the
    rule: it returns it separately and the node appends it after its overlays
    (see node_scanner.py and the node-level test in test_prompt_pipeline.py).
    """
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    prompt, _, _, language_hint = PromptGenerator().build_system_prompt_bundle(
        language="ru", model_type="FLUX", has_image=False, response_format="tags"
    )
    assert "LANGUAGE:" not in prompt, "the node appends the rule after its overlays"
    assert language_hint.startswith("LANGUAGE:")
    assert "Cyrillic" in language_hint
    # The tag-shape override stays inside the bundle — it is content, and the
    # language rule still has to close the final prompt.
    assert "tags" in prompt.split("\n\n")[-1], "tag mode is where English slipped through most"


def test_two_stage_bundle_returns_the_language_rule_for_the_node_to_close_with():
    """Stage 2 rewrites stage 1's text, so English in stage 1 spreads.

    The node appends the rule to stage 1 right away and to stage 2 only after
    its style overlays — the bundle just hands it over.
    """
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    bundle = PromptGenerator().build_system_prompt_two_stage_bundle(
        language="ru", model_type="FLUX", has_image=True, response_format="text"
    )
    assert bundle["language_hint"].startswith("LANGUAGE:")
    for stage in ("stage1", "stage2"):
        assert "LANGUAGE:" not in bundle[stage]["prompt"], stage


def test_english_output_asks_for_english():
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    prompt, _, _, language_hint = PromptGenerator().build_system_prompt_bundle(language="en", has_image=False)
    assert language_hint == "LANGUAGE: write the entire response in English."
    assert "LANGUAGE:" not in prompt


def test_two_stage_bundle_includes_director_life_injection_in_stage2():
    from FiL_Design_ImageMind.common.logic import PromptGenerator
    from FiL_Design_ImageMind.common.data import DIRECTOR_LIFE_INJECTION_INSTRUCTION

    bundle = PromptGenerator().build_system_prompt_two_stage_bundle(
        language="ru", model_type="FLUX", has_image=True
    )
    # Stage 1 stays objective VLM descriptor without life injection directives
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION not in bundle["stage1"]["prompt"]
    # Stage 2 MUST contain director life injection to turn catalog pose into living scene
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION in bundle["stage2"]["prompt"]


def test_styled_single_stage_includes_director_life_injection():
    from FiL_Design_ImageMind.common.logic import PromptGenerator
    from FiL_Design_ImageMind.common.data import DIRECTOR_LIFE_INJECTION_INSTRUCTION

    pg = PromptGenerator()
    # No style and model_type="Auto/None" with image: pure VLM analysis, no life directive
    plain_prompt, _, _, _ = pg.build_system_prompt_bundle(has_image=True, model_type="Auto/None")
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION not in plain_prompt

    # Target generative model without style: life injection IS active!
    flux_prompt, _, _, _ = pg.build_system_prompt_bundle(has_image=True, model_type="FLUX")
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION in flux_prompt

    # Text-to-image without image or style: life injection IS active!
    text_prompt, _, _, _ = pg.build_system_prompt_bundle(has_image=False, model_type="Auto/None")
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION in text_prompt

    # With style: life injection is injected to naturally blend the style
    styled_prompt, _, _, _ = pg.build_system_prompt_bundle(
        has_image=True, model_type="Auto/None", photo_style="📷 КАМЕРЫ/📸 Polaroid 600"
    )
    assert DIRECTOR_LIFE_INJECTION_INSTRUCTION in styled_prompt

