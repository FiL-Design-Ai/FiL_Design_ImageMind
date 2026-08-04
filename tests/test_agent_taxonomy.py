"""The agent dropdown is three axes now, not one.

`agent` answers "what is in the frame", `agent_focus` answers "which craft
layer to weigh heavier", and `response_format` answers "what shape to answer
in". They used to be one list, where picking 📐 Composition meant giving up
🍽 Food. These tests pin the split down, including the migration path for
workflows saved against the old single list.
"""
from __future__ import annotations

import pytest

from FiL_Design_ImageMind.common.data import (
    AGENT_EMOJIS,
    AGENT_FOCUSES,
    AGENTS,
    FOCUS_EMOJIS,
    LEGACY_AGENT_MIGRATION,
    get_visible_agent_keys,
    get_visible_focus_keys,
    migrate_legacy_agent,
    resolve_focus_key,
)
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

# The scanner reports per-image progress through `cls.hidden.unique_id`,
# which only the clone the executor prepares carries — calling
# `FiLOpticScanner.execute()` straight from a test does not have it.
# See tests/executor_harness.py.
_execute = as_the_executor_calls_it(FiLOpticScanner)


def _run(stub_scanner_generate, calls, **kwargs):
    stub_scanner_generate(lambda **kw: (calls.append(kw), "a generated prompt long enough")[1])
    return _execute(
        config={"provider": "ollama", "model": "llama3.2-vision"},
        prompt="a scene",
        **kwargs,
    )


# ── The two dropdowns themselves ───────────────────────────────────────────

def test_every_agent_and_focus_has_an_emoji():
    """A missing emoji renders as a stray leading space in the dropdown."""
    assert set(AGENTS) == set(AGENT_EMOJIS)
    assert set(AGENT_FOCUSES) == set(FOCUS_EMOJIS)
    assert all(key.strip() for key in get_visible_agent_keys() + get_visible_focus_keys())


def test_agents_are_subject_domains_only():
    """Craft layers and output shapes belong to the other two axes."""
    retired = {
        "Universal", "Cinematic Master", "Composition Agent", "Lighting & Color Agent",
        "Ultra Detailed Expert", "Professional Tagger", "Character Performance Agent",
        "Gadgets", "18+",
    }
    assert retired.isdisjoint(AGENTS)
    assert retired == set(LEGACY_AGENT_MIGRATION)


def test_focus_none_is_inert():
    assert AGENT_FOCUSES["None"] == ""
    assert resolve_focus_key("⚪ None") == "None"
    assert resolve_focus_key("💡 Lighting & Color") == "Lighting & Color"
    assert resolve_focus_key("nonsense") == "None"


# ── Migration of workflows saved against the old list ──────────────────────

@pytest.mark.parametrize(
    ("legacy", "expected"),
    [
        ("🌐 Universal", ("None", None, None)),
        ("🎭 Character Performance Agent", ("Portrait", None, None)),
        ("📱 Gadgets", ("Products", None, None)),
        ("🔞 18+", ("None", None, None)),
        ("📐 Composition Agent", (None, "Composition", None)),
        ("💡 Lighting & Color Agent", (None, "Lighting & Color", None)),
        ("🔬 Ultra Detailed Expert", (None, "Ultra Detail", None)),
        ("🎬 Cinematic Master", (None, "Cinematic", None)),
        ("🏷 Professional Tagger", (None, None, "tags")),
    ],
)
def test_legacy_agents_map_onto_the_new_axes(legacy, expected):
    assert migrate_legacy_agent(legacy) == expected


def test_current_agents_are_left_alone():
    """Anything still in the dropdown must not be rewritten."""
    for key in get_visible_agent_keys():
        assert migrate_legacy_agent(key) == (None, None, None)


def test_legacy_focus_reaches_the_system_prompt(stub_scanner_generate):
    calls = []
    _run(stub_scanner_generate, calls, agent="🎬 Cinematic Master")
    assert "FOCUS OVERLAY — Cinematic" in calls[-1]["system_prompt"]


def test_legacy_tagger_still_asks_for_tags(stub_scanner_generate):
    calls = []
    _, _, meta = _run(stub_scanner_generate, calls, agent="🏷 Professional Tagger")
    assert "OUTPUT MODE OVERRIDE" in calls[-1]["system_prompt"]
    assert meta["response_format"] == "tags"


def test_an_explicit_focus_wins_over_a_legacy_one(stub_scanner_generate):
    """The user's own pick is never overwritten by the migration."""
    calls = []
    _run(stub_scanner_generate, calls, agent="🎬 Cinematic Master", agent_focus="📐 Composition")
    assert "FOCUS OVERLAY — Composition" in calls[-1]["system_prompt"]
    assert "FOCUS OVERLAY — Cinematic" not in calls[-1]["system_prompt"]


# ── Composition of the axes ────────────────────────────────────────────────

def test_focus_layers_on_top_of_the_agent(stub_scanner_generate):
    calls = []
    _run(stub_scanner_generate, calls, agent="🏛 Architecture", agent_focus="🔬 Ultra Detail")
    system = calls[-1]["system_prompt"]
    assert "Architecture Agent" in system
    assert "FOCUS OVERLAY — Ultra Detail" in system


def test_emotion_and_motion_rides_on_a_non_human_agent(stub_scanner_generate):
    """The reason it is a focus and not a fourteenth agent.

    Portrait already carries body language; nothing else did. A car mid-corner
    and a crowd flowing one way are the same question asked of a different
    subject, so the layer has to compose with the agent rather than replace it.
    """
    calls = []
    _run(stub_scanner_generate, calls, agent="🚗 Transport", agent_focus="🎭 Emotion & Motion")
    system = calls[-1]["system_prompt"]
    assert "Transport Agent" in system
    assert "FOCUS OVERLAY — Emotion & Motion" in system
    assert "suspension compression" in system


def test_emotion_and_motion_still_forbids_emotion_labels(stub_scanner_generate):
    """The pack describes markers, never conclusions — this layer most of all."""
    calls = []
    _run(stub_scanner_generate, calls, agent="👤 Portrait", agent_focus="🎭 Emotion & Motion")
    system = calls[-1]["system_prompt"]
    assert "IGNORE: emotion labels" in system
    assert "not \"happy\"" in system


def test_no_focus_adds_nothing(stub_scanner_generate):
    calls = []
    _run(stub_scanner_generate, calls, agent="🏛 Architecture")
    assert "FOCUS OVERLAY" not in calls[-1]["system_prompt"]


def test_focus_is_recorded_in_metadata(stub_scanner_generate):
    calls = []
    _, _, meta = _run(stub_scanner_generate, calls, agent="🍽 Food", agent_focus="📐 Composition")
    assert meta["agent"] == "Food"
    assert meta["agent_focus"] == "Composition"


# ── Text-only mode ─────────────────────────────────────────────────────────

def test_text_only_run_says_there_is_no_image(stub_scanner_generate):
    """Without an image the agent must expand an idea, not report on a picture."""
    calls = []
    _run(stub_scanner_generate, calls, agent="👤 Portrait")
    assert "NO IMAGE IS ATTACHED" in calls[-1]["system_prompt"]


def test_image_run_keeps_the_analysis_framing(stub_scanner_generate):
    import torch

    calls = []
    _run(stub_scanner_generate, calls, agent="👤 Portrait", image=torch.zeros(1, 8, 8, 3))
    assert "NO IMAGE IS ATTACHED" not in calls[-1]["system_prompt"]
