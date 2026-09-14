"""Backend tests for FiLChannel — a wireless transmitter marker node.

Channel carries no processing logic: whatever is plugged into a `value*` input
becomes a named channel, and the frontend rewrites the graph before the prompt
is built so subscribers receive from the source directly. These tests pin down
the structural invariants that make that model work — most importantly that the
node declares NO outputs, which is what keeps ComfyUI from ever scheduling it
(and from evaluating its source twice).
"""

from FiL_Design_ImageMind.nodes.node_channel import MAX_CHANNELS, FiLChannel


def test_channel_schema_identity():
    schema = FiLChannel.GET_SCHEMA()
    assert schema.node_id == "FiLChannel"
    assert schema.display_name == "📡 Channel"
    assert "Tools" in schema.category


def test_channel_declares_no_outputs():
    """No outputs → nothing depends on it → ComfyUI never schedules it, and the
    wired source is evaluated exactly once. This is load-bearing, not cosmetic."""
    schema = FiLChannel.GET_SCHEMA()
    assert schema.outputs == []


def test_channel_input_is_a_single_optional_autogrow():
    """One autogrowing `value*` input lets one node broadcast several channels
    (model + VAE + CLIP) instead of needing one node per type."""
    schema = FiLChannel.GET_SCHEMA()
    assert len(schema.inputs) == 1

    inp = schema.inputs[0]
    assert inp.optional is True

    template = inp.template
    assert template.prefix == "value"
    assert template.min == 1
    assert template.max == MAX_CHANNELS


def test_channel_max_channels_is_the_sanity_cap():
    # Core caps a template at 100 names; the pack chose a tighter, readable bound.
    assert MAX_CHANNELS == 32


def test_channel_execute_is_a_harmless_noop():
    """`execute` is only present so the class is a node; it must never raise and
    must not emit data (there are no outputs to emit into)."""
    result = FiLChannel.execute()
    assert result.args == ()

    # It should tolerate being called the way the executor would, with wired
    # values, even though in practice it is never scheduled.
    result_with_values = FiLChannel.execute(value0="model", value1={"vae": True})
    assert result_with_values.args == ()


def test_resolve_wireless_prompt():
    from FiL_Design_ImageMind.common.wireless_resolver import resolve_wireless_prompt

    raw_prompt = {
        "1": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": "v1.safetensors"}},
        "2": {"class_type": "FiLChannel", "inputs": {"value0": ["1", 0], "value1": ["1", 2]}},
        "3": {"class_type": "KSampler", "inputs": {"model": ["2", 0]}},
    }

    resolved = resolve_wireless_prompt(raw_prompt)
    assert resolved["3"]["inputs"]["model"] == ["1", 0]


def test_resolve_wireless_prompt_cycle_detection():
    """Ensure circular references between FiLChannel nodes do not cause infinite recursion."""
    from FiL_Design_ImageMind.common.wireless_resolver import resolve_wireless_prompt

    cyclic_prompt = {
        "1": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": "v1.safetensors"}},
        "2": {"class_type": "FiLChannel", "inputs": {"value0": ["3", 0]}},
        "3": {"class_type": "FiLChannel", "inputs": {"value0": ["2", 0]}},
        "4": {"class_type": "KSampler", "inputs": {"model": ["2", 0]}},
    }

    # Should not raise RecursionError and gracefully break the loop
    resolved = resolve_wireless_prompt(cyclic_prompt)
    assert "4" in resolved
    assert resolved["4"]["inputs"]["model"] in (["2", 0], ["3", 0])


