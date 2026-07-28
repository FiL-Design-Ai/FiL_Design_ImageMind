from comfy_execution.graph_utils import ExecutionBlocker

from FiL_Design_ImageMind.nodes.node_switch import FiLSignalSwitch


def _blocked(result) -> bool:
    """True when the node asked ComfyUI to skip everything downstream."""
    return len(result.args) == 1 and isinstance(result.args[0], ExecutionBlocker)


def test_switch_schema():
    schema = FiLSignalSwitch.GET_SCHEMA()
    assert schema.node_id == "FiLSignalSwitch"
    assert schema.display_name == "🔀 Cyber Switch"


def test_switch_pass_through_on():
    # Pass image tensor / dict / string / int
    dummy_image = {"type": "fake_image_tensor", "data": [1, 2, 3]}
    res = FiLSignalSwitch.execute(input=dummy_image, enable=True)
    assert res.args == (dummy_image,)

    dummy_str = "hello world"
    res_str = FiLSignalSwitch.execute(input=dummy_str, enable=True)
    assert res_str.args == ("hello world",)

    dummy_int = 1024
    res_int = FiLSignalSwitch.execute(input=dummy_int, enable=True)
    assert res_int.args == (1024,)


def test_switch_off_emits_none():
    """OFF empties the wire instead of skipping the branch: consumers that only
    wanted this signal on an optional input still get to run."""
    dummy_image = {"type": "fake_image_tensor", "data": [1, 2, 3]}
    result = FiLSignalSwitch.execute(input=dummy_image, enable=False)
    assert result.args == (None,)
    assert not _blocked(result)


def test_switch_with_nothing_connected_blocks_on_only():
    """`input` is optional, so an unwired ON switch would otherwise pass None."""
    assert _blocked(FiLSignalSwitch.execute(input=None, enable=True))


def test_switch_on_without_input_says_why():
    """ON + no signal is a misconfigured graph, not muting — blocking it mutely
    leaves the user with a dead branch and nothing to go on."""
    result = FiLSignalSwitch.execute(input=None, enable=True)
    message = result.args[0].message
    assert message and "input" in message


def test_switch_off_without_input_is_still_just_none():
    """OFF is deliberate: an input it was never going to read is not a problem."""
    assert FiLSignalSwitch.execute(input=None, enable=False).args == (None,)


def test_switch_passes_falsy_values_through():
    """0 / "" / False are real signals — only a missing input blocks."""
    for value in (0, "", False, []):
        result = FiLSignalSwitch.execute(input=value, enable=True)
        assert result.args == (value,), value
