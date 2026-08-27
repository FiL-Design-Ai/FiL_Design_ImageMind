from __future__ import annotations

import pytest

from FiL_Design_ImageMind.common.director_assist import (
    ASSIST_MAX_TEXT_LEN,
    ASSIST_OPERATIONS,
    build_assist_system_prompt,
    validate_assist_request,
)


def _valid_body(**overrides):
    body = {"operation": "rephrase", "text": "make it photorealistic", "provider": "ollama", "model": "qwen2.5:7b"}
    body.update(overrides)
    return body


@pytest.mark.parametrize("operation", ASSIST_OPERATIONS)
def test_system_prompt_contains_op_rules_and_common_rules(operation):
    prompt = build_assist_system_prompt(operation)
    assert "same language as the input" in prompt
    assert "Output only the rewritten instruction" in prompt


def test_system_prompts_differ_per_operation():
    prompts = {build_assist_system_prompt(op) for op in ASSIST_OPERATIONS}
    assert len(prompts) == len(ASSIST_OPERATIONS)


def test_expand_prompt_carries_the_dit_physics_not_meta_noise():
    prompt = build_assist_system_prompt("expand")
    assert "material truth" in prompt
    assert "meta-noise" in prompt


def test_unknown_operation_raises():
    with pytest.raises(ValueError):
        build_assist_system_prompt("translate")


def test_valid_body_passes():
    assert validate_assist_request(_valid_body()) is None


def test_non_dict_body_rejected():
    assert validate_assist_request(["nope"]) is not None


@pytest.mark.parametrize("operation", ["", "translate", None])
def test_unknown_operation_rejected(operation):
    assert validate_assist_request(_valid_body(operation=operation)) is not None


@pytest.mark.parametrize("text", ["", "   ", None, 42])
def test_empty_or_non_string_text_rejected(text):
    assert validate_assist_request(_valid_body(text=text)) is not None


def test_overlong_text_rejected():
    assert validate_assist_request(_valid_body(text="x" * (ASSIST_MAX_TEXT_LEN + 1))) is not None


def test_unknown_provider_rejected():
    assert validate_assist_request(_valid_body(provider="not-a-provider")) is not None


@pytest.mark.parametrize("model", ["", "(loading...)", "(no models)"])
def test_placeholder_model_rejected(model):
    assert validate_assist_request(_valid_body(model=model)) is not None
