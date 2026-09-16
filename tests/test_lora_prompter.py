"""Tests for `FiLLoraPrompter` node.

Guarantees tested:
- `execute()` passes the input prompt text directly to output untouched.
- `define_schema()` returns node_id `FiLLoraPrompter` with CATEGORY_TOOLS and correct inputs/outputs.
- `FiLLoraPrompter` is in `RELEASE_NODES` and registered in `__init__.py`.
"""

from __future__ import annotations

from FiL_Design_ImageMind.common.release_gate import RELEASE_NODES


def _as_tuple(output):
    return output.args if hasattr(output, "args") else output


def test_execute_passes_prompt_through() -> None:
    from FiL_Design_ImageMind.nodes.node_lora_prompter import FiLLoraPrompter

    res = _as_tuple(FiLLoraPrompter.execute(prompt="masterpiece cyberpunk girl", triggers="ohwx, neon"))
    assert res == ("masterpiece cyberpunk girl",)


def test_execute_empty_fallback() -> None:
    from FiL_Design_ImageMind.nodes.node_lora_prompter import FiLLoraPrompter

    res = _as_tuple(FiLLoraPrompter.execute())
    assert res == ("",)


def test_schema_and_release_gate() -> None:
    from FiL_Design_ImageMind.nodes.node_lora_prompter import FiLLoraPrompter

    schema = FiLLoraPrompter.define_schema()
    assert schema.node_id == "FiLLoraPrompter"
    assert "FiLLoraPrompter" in RELEASE_NODES
    input_ids = [inp.id for inp in schema.inputs]
    assert "prompt" in input_ids
    assert "triggers" in input_ids
    output_names = [out.display_name for out in schema.outputs]
    assert "prompt" in output_names
