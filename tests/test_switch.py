import pytest
from FiL_Design_ImageMind.nodes.node_switch import FiLSignalSwitch


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


def test_switch_block_off():
    dummy_image = {"type": "fake_image_tensor", "data": [1, 2, 3]}
    res = FiLSignalSwitch.execute(input=dummy_image, enable=False)
    assert res.args == (None,)

    res_none = FiLSignalSwitch.execute(input=None, enable=False)
    assert res_none.args == (None,)
