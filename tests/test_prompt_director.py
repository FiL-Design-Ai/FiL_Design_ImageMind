"""Prompt Director is the pack's prompt rewriter: instruction + source prompt
in, a finished DiT prompt out, through the Provider Loader's LLM.

The guarantees that matter here: the LLM gets both texts plus a language rule
that closes the system prompt; Provider Loader owns temperature/max_tokens/
rate_limit/unload; failures answer with a readable "Ошибка: ..." string on the
prompt output instead of raising; the zh language mode keeps ideographs, which
the default cleaner would strip.
"""

from __future__ import annotations

from unittest.mock import patch

from FiL_Design_ImageMind.common.base import FiLError
from FiL_Design_ImageMind.nodes.node_prompt_director import (
    build_system_prompt,
    build_user_message,
)

CONFIG = {"provider": "openai", "model": "gpt-4o", "temperature": 0.4, "rate_limit_ms": 50}


def _as_tuple(output):
    return output.args if hasattr(output, "args") else output


def _execute(**overrides):
    from FiL_Design_ImageMind.nodes.node_prompt_director import FiLPromptDirector

    kwargs = dict(
        config=dict(CONFIG),
        instruction="make it photorealistic",
        source_prompt="anime girl in the rain",
        language="en",
        seed=7,
    )
    kwargs.update(overrides)
    return _as_tuple(FiLPromptDirector.execute(**kwargs))


# ── Prompt assembly ────────────────────────────────────────────────────────


def test_the_language_rule_closes_the_system_prompt() -> None:
    for language, name in (("en", "English"), ("ru", "Russian"), ("zh", "Simplified Chinese")):
        system_prompt = build_system_prompt(language)
        assert name in system_prompt
        # The language rule sits last — the instruction models drop first.
        assert system_prompt.rindex("Language rule") > system_prompt.rindex("ZERO META-NOISE")


def test_the_user_message_carries_both_texts() -> None:
    message = build_user_message("  make it dark  ", "  a cat on a roof  ")
    assert "make it dark" in message
    assert "a cat on a roof" in message


# ── The happy path ─────────────────────────────────────────────────────────


def test_execute_returns_the_rewritten_prompt() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    answer = "A rain-soaked anime girl, now a real photograph."
    with patch.object(node_prompt_director._model_client, "generate", return_value=answer) as gen:
        (prompt,) = _execute()
    assert prompt == answer

    payload = gen.call_args.kwargs
    assert payload["provider"] == "openai"
    assert payload["model"] == "gpt-4o"
    assert payload["temperature"] == 0.4
    assert payload["rate_limit_ms"] == 50
    assert payload["seed"] == 7
    assert "make it photorealistic" in payload["user_prompt"]
    assert "anime girl in the rain" in payload["user_prompt"]
    assert "Language rule" in payload["system_prompt"]


def test_the_answer_is_cleaned_of_llm_preamble() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    with patch.object(
        node_prompt_director._model_client, "generate",
        return_value="Here is your rewritten prompt: A wet street at night, shot on 35mm.",
    ):
        (prompt,) = _execute()
    assert prompt == "A wet street at night, shot on 35mm."


def test_chinese_output_keeps_its_ideographs() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    answer = "一位少女站在雨中，胶片质感"
    with patch.object(node_prompt_director._model_client, "generate", return_value=answer):
        (prompt,) = _execute(language="zh")
    assert prompt == answer


def test_max_tokens_zero_means_no_explicit_limit() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    config = dict(CONFIG, max_tokens=0)
    with patch.object(node_prompt_director._model_client, "generate", return_value="ok") as gen:
        _execute(config=config)
    assert gen.call_args.kwargs["max_tokens"] is None

    with patch.object(node_prompt_director._model_client, "generate", return_value="ok") as gen:
        _execute()
    assert gen.call_args.kwargs["max_tokens"] == 1024


def test_unload_llm_drops_the_local_model_after_the_answer() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    config = dict(CONFIG, provider="ollama", model="qwen3:8b", unload_llm=True)
    with (
        patch.object(node_prompt_director._model_client, "generate", return_value="done"),
        patch.object(node_prompt_director, "unload_local_model") as unload,
    ):
        _execute(config=config)
    unload.assert_called_once_with("ollama", "qwen3:8b")


# ── Failure modes ──────────────────────────────────────────────────────────


def test_a_provider_failure_becomes_a_readable_error() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    with patch.object(node_prompt_director._model_client, "generate", side_effect=RuntimeError("boom")):
        (prompt,) = _execute()
    assert prompt.startswith("Ошибка:")


def test_a_fil_error_message_is_surfaced_without_secrets() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    with patch.object(
        node_prompt_director._model_client, "generate",
        side_effect=FiLError("auth failed: Bearer sk-secret123", code="AUTH_ERROR"),
    ):
        (prompt,) = _execute()
    assert prompt.startswith("Ошибка:")
    assert "sk-secret123" not in prompt
    assert "***REDACTED***" in prompt


def test_an_empty_answer_is_reported() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    with patch.object(node_prompt_director._model_client, "generate", return_value="   "):
        (prompt,) = _execute()
    assert "пустой ответ" in prompt


def test_missing_inputs_never_reach_the_provider() -> None:
    from FiL_Design_ImageMind.nodes import node_prompt_director

    cases = [
        dict(config=None),
        dict(config={"provider": "openai"}),  # no model
        dict(instruction="   "),
        dict(source_prompt=""),
    ]
    for overrides in cases:
        with patch.object(node_prompt_director._model_client, "generate") as gen:
            (prompt,) = _execute(**overrides)
        assert prompt.startswith("Ошибка:"), f"case {overrides!r} must error out"
        gen.assert_not_called()


# ── Schema & validation ────────────────────────────────────────────────────


def test_schema_declares_the_two_text_fields_and_seed() -> None:
    from FiL_Design_ImageMind.nodes.node_prompt_director import FiLPromptDirector

    schema = FiLPromptDirector.define_schema()
    assert schema.node_id == "FiLPromptDirector"
    inputs = {i.id: i for i in schema.inputs}
    for name in ("config", "instruction", "source_prompt", "language", "seed"):
        assert name in inputs, f"missing input {name}"
    assert inputs["language"].default == "en"
    assert inputs["seed"].default == 0
    assert [o.display_name for o in schema.outputs] == ["prompt"]


def test_validate_inputs_rejects_a_broken_config() -> None:
    from FiL_Design_ImageMind.nodes.node_prompt_director import FiLPromptDirector

    assert FiLPromptDirector.validate_inputs(config=None) is True
    assert isinstance(FiLPromptDirector.validate_inputs(config="not a dict"), str)
    assert isinstance(FiLPromptDirector.validate_inputs(config={"provider": "openai"}), str)
    assert isinstance(FiLPromptDirector.validate_inputs(config={"provider": "openai", "model": "(loading...)"}), str)
    assert FiLPromptDirector.validate_inputs(config=dict(CONFIG)) is True


def test_the_node_is_promoted_to_the_release_gate() -> None:
    from FiL_Design_ImageMind.common.release_gate import RELEASE_NODES

    assert "FiLPromptDirector" in RELEASE_NODES
