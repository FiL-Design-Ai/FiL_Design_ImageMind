from __future__ import annotations


def test_the_language_rule_is_the_last_thing_the_model_reads():
    """A run over 132 models on 2026-07-29 found 38 answering in English.

    "Answer in Russian." sat third among eight blocks of English prose, which
    the smaller models read straight past. It is now explicit, names the
    script, covers the tag form, and goes last.
    """
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    prompt, _, _ = PromptGenerator().build_system_prompt_bundle(
        language="ru", model_type="FLUX", has_image=False, response_format="tags"
    )
    blocks = prompt.split("\n\n")
    assert "LANGUAGE:" in blocks[-1], "the language rule must come last, after the output shape"
    assert "Cyrillic" in blocks[-1]
    assert "tags" in blocks[-1], "tag mode is where English slipped through most"
    assert prompt.count("LANGUAGE:") == 1, "stated once — repeating it is not what fixed this"


def test_both_two_stage_prompts_end_on_the_language_rule():
    """Stage 2 rewrites stage 1's text, so English in stage 1 spreads."""
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    bundle = PromptGenerator().build_system_prompt_two_stage_bundle(
        language="ru", model_type="FLUX", has_image=True, response_format="text"
    )
    for stage in ("stage1", "stage2"):
        assert bundle[stage]["prompt"].split("\n\n")[-1].startswith("LANGUAGE:"), stage


def test_english_output_asks_for_english():
    from FiL_Design_ImageMind.common.logic import PromptGenerator

    prompt, _, _ = PromptGenerator().build_system_prompt_bundle(language="en", has_image=False)
    assert prompt.split("\n\n")[-1] == "LANGUAGE: write the entire response in English."
