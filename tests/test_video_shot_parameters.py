"""Video shot parameter tests (duration / aspect / sound / camera widgets).

The four Output widgets shown for video model types inject a SHOT PARAMETERS
block into the system prompt. Contracts this suite locks in:

* all-Auto runs stay byte-identical to the pre-widget output, so existing
  workflows never change behavior just because the inputs now exist;
* non-video targets never see the block even when the widgets hold values
  (hidden values persist in the workflow after a model switch);
* duration is clamped into the active profile's range at injection time
  (MiniMax H3: 4-15 whole seconds — the API hard limit).
"""

from __future__ import annotations

from FiL_Design_ImageMind.common.data import (
    clamp_video_duration,
    get_video_duration_range,
    is_video_model_type,
)
from FiL_Design_ImageMind.common.logic import (
    PromptGenerator,
    build_shot_parameters_block,
)
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

pg = PromptGenerator()
_execute = as_the_executor_calls_it(FiLOpticScanner)


# ---------------------------------------------------------------------------
# helpers: ranges and clamping
# ---------------------------------------------------------------------------


def test_is_video_model_type():
    assert is_video_model_type("Video") is True
    assert is_video_model_type("MiniMax H3") is True
    assert is_video_model_type("FLUX") is False
    assert is_video_model_type("Auto/None") is False
    assert is_video_model_type(None) is False


def test_duration_ranges_follow_the_profile():
    assert get_video_duration_range("Video") == (2, 20)
    # H3's range is the API's hard limit (platform.minimax.io, 2026-08-05).
    assert get_video_duration_range("MiniMax H3") == (4, 15)


def test_clamp_h3_into_api_range():
    assert clamp_video_duration("MiniMax H3", 18) == 15
    assert clamp_video_duration("MiniMax H3", 2) == 4
    assert clamp_video_duration("MiniMax H3", 10) == 10


def test_clamp_video_into_class_range():
    assert clamp_video_duration("Video", 1) == 2
    assert clamp_video_duration("Video", 45) == 20
    assert clamp_video_duration("Video", 12) == 12


def test_clamp_zero_and_garbage_stay_auto():
    assert clamp_video_duration("Video", 0) == 0
    assert clamp_video_duration("Video", None) == 0
    assert clamp_video_duration("Video", "ten") == 0


# ---------------------------------------------------------------------------
# block assembly
# ---------------------------------------------------------------------------


def test_block_empty_when_all_auto():
    assert build_shot_parameters_block("MiniMax H3") == ""
    assert build_shot_parameters_block("Video", 0, "Auto", "Auto", "Auto") == ""


def test_block_empty_for_non_video_targets():
    # Hidden values from a previous video run must never leak into an image
    # prompt after the model switches.
    assert build_shot_parameters_block("FLUX", 10, "16:9", "Layered", "Orbit") == ""
    assert build_shot_parameters_block("Auto/None", 10, "16:9", "Off", "Pan") == ""


def test_block_h3_full_set():
    block = build_shot_parameters_block("MiniMax H3", 10, "16:9", "Layered", "Orbit")
    assert block.startswith("SHOT PARAMETERS")
    assert "exactly 10 seconds" in block
    assert "'10s'" in block
    assert "16:9" in block and "framing header" in block
    assert "ambience bed" in block and "foley" in block
    assert "orbit" in block and "preferred move" in block


def test_block_h3_clamps_duration_into_api_range():
    assert "exactly 15 seconds" in build_shot_parameters_block("MiniMax H3", 18)
    assert "exactly 4 seconds" in build_shot_parameters_block("MiniMax H3", 1)


def test_block_video_profile_wording():
    block = build_shot_parameters_block("Video", 10, "9:16", "Off", "Locked-off")
    assert "over 10 seconds" in block
    assert "frame the shot in 9:16" in block
    assert "silent clip" in block
    assert "locked-off static shot" in block


def test_block_sound_off_overrides_the_sound_default():
    block = build_shot_parameters_block("MiniMax H3", 0, "Auto", "Off", "Auto")
    assert "do not write any sound design clause" in block


# ---------------------------------------------------------------------------
# bundle integration
# ---------------------------------------------------------------------------


def test_bundle_all_auto_is_byte_identical():
    base, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Video"
    )
    with_widgets, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en", model_type="Video",
        video_duration=0, video_aspect="Auto", video_sound="Auto", video_camera="Auto",
    )
    assert base == with_widgets


def test_bundle_carries_shot_parameters_after_the_guidance():
    system_prompt, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="MiniMax H3", video_duration=10, video_camera="Orbit",
    )
    assert "SHOT PARAMETERS" in system_prompt
    # User-fixed facts must read later than the guidance they override.
    assert system_prompt.index("SHOT PARAMETERS") > system_prompt.index("Target generator: MiniMax H3")


def test_bundle_ignores_video_values_for_image_targets():
    system_prompt, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="FLUX", video_duration=10, video_camera="Orbit",
    )
    assert "SHOT PARAMETERS" not in system_prompt


def test_locked_video_aspect_outranks_wired_dimensions():
    # An explicit aspect choice is the user's framing call; the ratio derived
    # from wired width/height sockets must not contradict it (1024x768 is 4:3).
    locked, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="Video", video_aspect="16:9", width=1024, height=768,
    )
    assert "Target image dimensions" not in locked
    assert "frame the shot in 16:9" in locked

    # With the widget on Auto the sockets still apply, as before.
    auto, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="Video", video_aspect="Auto", width=1024, height=768,
    )
    assert "Target image dimensions: 1024x768" in auto

    # Image targets always keep the socket-derived guidance.
    flux, _, _, _ = pg.build_system_prompt_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="FLUX", video_aspect="16:9", width=1024, height=768,
    )
    assert "Target image dimensions: 1024x768" in flux


def test_two_stage_both_stages_carry_shot_parameters():
    bundle = pg.build_system_prompt_two_stage_bundle(
        agent_key="Universal", detail_level="normal", language="en",
        model_type="MiniMax H3", video_duration=10, video_aspect="16:9",
    )
    assert "SHOT PARAMETERS" in bundle["stage1"]["prompt"]
    assert "SHOT PARAMETERS" in bundle["stage2"]["prompt"]


# ---------------------------------------------------------------------------
# node level: metadata + gating
# ---------------------------------------------------------------------------


def _basic_config():
    return {"provider": "ollama", "model": "llama3.2-vision"}


def test_execute_reports_video_params_metadata(stub_scanner_generate):
    stub_scanner_generate(lambda **kwargs: "10s, 16:9. [0-10s] A lion runs. Sound: wind.")
    _result, _meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a running lion",
        model_type="MiniMax H3",
        video_duration=10,
        video_aspect="16:9",
        video_sound="Layered",
        video_camera="Orbit",
    )
    params = meta_dict.get("video_params")
    assert params == {
        "duration": 10,
        "duration_clamped": False,
        "aspect": "16:9",
        "sound": "Layered",
        "camera": "Orbit",
    }


def test_execute_clamps_out_of_range_h3_duration(stub_scanner_generate):
    stub_scanner_generate(lambda **kwargs: "15s, 16:9. [0-15s] A lion runs. Sound: wind.")
    _result, _meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="a running lion",
        model_type="MiniMax H3",
        video_duration=18,
    )
    params = meta_dict.get("video_params")
    assert params["duration"] == 15
    assert params["duration_clamped"] is True


def test_execute_hides_video_params_for_image_targets(stub_scanner_generate):
    # Widgets can still hold values after a model switch — they must not
    # surface in the metadata or the prompt of an image run.
    captured = {}

    def fake_generate(**kwargs):
        captured.update(kwargs)
        return "a chrome android in neon light"

    stub_scanner_generate(fake_generate)
    _result, _meta_json, meta_dict = _execute(
        config=_basic_config(),
        agent="None",
        image=None,
        prompt="an android",
        model_type="FLUX",
        video_duration=10,
        video_aspect="16:9",
        video_sound="Layered",
        video_camera="Orbit",
    )
    assert meta_dict.get("video_params") is None
    assert "SHOT PARAMETERS" not in captured.get("system_prompt", "")
