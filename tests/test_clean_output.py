from __future__ import annotations

from FiL_Design_ImageMind.common.clean_output import OutputCleanConfig, clean_output


def test_strip_think_true_removes_think_block_by_default():
    text = "<think>internal reasoning</think>a red car on a street"
    assert clean_output(text) == "a red car on a street"


def test_strip_think_false_preserves_think_block():
    text = "<think>internal reasoning</think>a red car on a street"
    result = clean_output(text, OutputCleanConfig(strip_think=False))
    assert "<think>internal reasoning</think>" in result
    assert "a red car on a street" in result


def test_analysis_scratchpad_always_stripped_regardless_of_strip_think():
    text = "<analysis_scratchpad>notes</analysis_scratchpad>a red car"
    result = clean_output(text, OutputCleanConfig(strip_think=False))
    assert "analysis_scratchpad" not in result
    assert "a red car" in result
