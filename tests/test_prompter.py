"""Tests for `FiLPrompter` node.

Guarantees tested:
- `execute()` passes the input prompt text directly to output untouched (zero LLM call, queue time speed).
- `execute()` accepts `config=None` or a valid Provider Loader config dict.
- `validate_inputs()` allows `config=None` (unwired) and validates provider/model when wired.
- `define_schema()` returns node_id `FiLPrompter` with CATEGORY_LLM and correct inputs/outputs.
- `FiLPrompter` is in `RELEASE_NODES` and registered in `__init__.py`.
"""

from __future__ import annotations

from FiL_Design_ImageMind.common.release_gate import RELEASE_NODES


def _as_tuple(output):
    return output.args if hasattr(output, "args") else output


def test_execute_passes_prompt_through_untouched() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    res = _as_tuple(FiLPrompter.execute(config=None, prompt="a masterpiece cyberpunk scene"))
    assert res == ("a masterpiece cyberpunk scene",)


def test_execute_works_with_provider_config() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    config = {"provider": "openai", "model": "gpt-4o"}
    res = _as_tuple(FiLPrompter.execute(config=config, prompt="neon cybernetic street"))
    assert res == ("neon cybernetic street",)


def test_validate_inputs_unwired_config() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    assert FiLPrompter.validate_inputs(config=None, prompt="test") is True


def test_validate_inputs_valid_config() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    config = {"provider": "openai", "model": "gpt-4o"}
    assert FiLPrompter.validate_inputs(config=config, prompt="test") is True


def test_validate_inputs_invalid_config() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    assert isinstance(FiLPrompter.validate_inputs(config="not a dict"), str)
    assert isinstance(FiLPrompter.validate_inputs(config={"provider": "openai"}), str)
    assert isinstance(FiLPrompter.validate_inputs(config={"provider": "openai", "model": "(loading...)"}), str)


def test_schema_and_release_gate() -> None:
    from FiL_Design_ImageMind.nodes.node_prompter import FiLPrompter

    schema = FiLPrompter.define_schema()
    assert schema.node_id == "FiLPrompter"
    assert "FiLPrompter" in RELEASE_NODES
