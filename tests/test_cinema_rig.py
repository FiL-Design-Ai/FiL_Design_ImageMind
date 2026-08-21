"""The cinema rig must stay a camera department, never a scene rewrite.

The rig's five axes describe *how the frame was taken* — body, lens, focal
length, aperture, grade — and the scene arrives separately through
`scene_prompt`. The same two rules that guard the photo library apply here
(see `tests/test_photo_style_library.py`): every hardware preset names a
capture, and no preset asks for something other than a photograph or orders
the frame emptied.

One structural guarantee goes beyond the flat libraries: the camera axis
always picks a medium wrapper, so no matter how the other axes are set the
assembled prompt names film or digital capture. That is what keeps the rig's
output on the photograph side of the line even when a workflow arrives with
a camera name the pack no longer knows.
"""

from __future__ import annotations

import re
from unittest.mock import patch

import pytest

from FiL_Design_ImageMind.common.cinema_rig import (
    CAMERA_TYPE_DIGITAL,
    CAMERA_TYPE_FILM,
    CINEMA_ANGLES,
    CINEMA_APERTURES,
    CINEMA_CAMERAS,
    CINEMA_DIRECTOR_PRESETS,
    CINEMA_FOCAL_LENGTHS,
    CINEMA_FRAMINGS,
    CINEMA_GRADINGS,
    CINEMA_LENSES,
    CINEMA_LIGHTING,
    CINEMA_MOVEMENTS,
    CINEMA_OPTICS,
    DIGITAL_PREFIX,
    DIGITAL_SUFFIX,
    FILM_PREFIX,
    FILM_SUFFIX,
    MODE_ORIGINAL,
    MODE_RESHOOT,
    POLISH_DETERMINISTIC,
    POLISH_LLM,
    RESHOOT_LOCK,
    RIG_DEFAULTS,
    SETUP_CUSTOM,
    SETUP_PRESET,
    aperture_options,
    assemble_rig,
    camera_angle_options,
    camera_movement_options,
    camera_options,
    director_preset_options,
    focal_length_options,
    grading_options,
    lens_options,
    lighting_setup_options,
    optics_filter_options,
    shot_framing_options,
    wrapper_for_camera,
)

# Same anchors as the photo library: a preset names a camera, a lens, a film
# stock, an exposure — something that commits the output to a capture.
PHOTOGRAPHIC_ANCHORS = re.compile(
    r"""
    photo|photograph|photographic|photojournalis
    |camera|lens|shot\ on|shutter|aperture|exposure|iso\b
    |film|footage|negative|emulsion|tintype|plate|print
    |bokeh|grain|flash|dslr|medium-format|large-format
    |\d+mm|f/\d|1/\d+s
    """,
    re.IGNORECASE | re.VERBOSE,
)

NON_PHOTOGRAPHIC = re.compile(
    r"\b(render|rendered|rendering|cgi|illustration|illustrated|painting|painted"
    r"|drawing|artwork|concept\s+art|stylized|stylised|anime|manga|cartoon)\b",
    re.IGNORECASE,
)

ERASES_THE_SUBJECT = re.compile(
    r"nothing else in frame|no visible background elements|empty frame"
    r"|no subject|nothing else visible",
    re.IGNORECASE,
)


def _hardware_entries() -> list[tuple[str, str]]:
    """name -> prompt for the hardware, optics, angle, framing, movement, lighting axes."""
    entries: list[tuple[str, str]] = []
    for source in (
        CINEMA_CAMERAS,
        CINEMA_LENSES,
        CINEMA_FOCAL_LENGTHS,
        CINEMA_APERTURES,
        CINEMA_ANGLES,
        CINEMA_FRAMINGS,
        CINEMA_MOVEMENTS,
        CINEMA_LIGHTING,
        CINEMA_OPTICS,
    ):
        for name, info in source.items():
            prompt = str(info.get("prompt", "")) if isinstance(info, dict) else str(info)
            if prompt:
                entries.append((name, prompt))
    return entries


def _all_entries() -> list[tuple[str, str]]:
    directors = [(name, info["prompt"]) for name, info in CINEMA_DIRECTOR_PRESETS.items() if info["prompt"]]
    return _hardware_entries() + [(k, v) for k, v in CINEMA_GRADINGS.items() if v] + directors


# ── Preset quality ─────────────────────────────────────────────────────────


@pytest.mark.parametrize("name,text", _hardware_entries(), ids=lambda v: v if isinstance(v, str) else "")
def test_every_hardware_preset_names_a_capture(name: str, text: str) -> None:
    assert PHOTOGRAPHIC_ANCHORS.search(text), (
        f"rig preset {name!r} describes optics but never names a capture — "
        "name a camera, lens, film stock or exposure"
    )


@pytest.mark.parametrize("name,text", _all_entries(), ids=lambda v: v if isinstance(v, str) else "")
def test_no_rig_preset_asks_for_something_other_than_a_photograph(name: str, text: str) -> None:
    assert not NON_PHOTOGRAPHIC.findall(text), f"rig preset {name!r} drifts off the photograph"


@pytest.mark.parametrize("name,text", _all_entries(), ids=lambda v: v if isinstance(v, str) else "")
def test_no_rig_preset_demands_an_empty_frame(name: str, text: str) -> None:
    assert not ERASES_THE_SUBJECT.search(text), (
        f"rig preset {name!r} orders the frame emptied — it stacks under the user's scene"
    )


def test_no_rig_preset_resolves_to_an_anti_photographic_category() -> None:
    """The resolver reads text, not provenance — check every axis directly."""
    from FiL_Design_ImageMind.common.style_engine.resolver import (
        _ANTI_PHOTOGRAPHIC,
        detect_style_category,
    )

    offenders = {
        name: detect_style_category(text, {})
        for name, text in _all_entries()
        if detect_style_category(text, {}) in _ANTI_PHOTOGRAPHIC
    }
    assert not offenders, f"rig presets routed into anti-photographic categories: {offenders}"


def test_rig_preset_endings_are_not_interchangeable() -> None:
    """The closing beat says who reaches for this gear — it cannot be shared."""
    from collections import Counter

    endings = Counter(
        text.strip().rstrip(".").rpartition(",")[2].strip().lower()
        for _name, text in _all_entries()
    )
    repeated = {ending: count for ending, count in endings.items() if count > 1}
    assert not repeated, f"rig preset endings reused: {repeated}"


# ── Assembly ───────────────────────────────────────────────────────────────


def test_the_default_rig_names_the_medium_once_and_carry_every_axis() -> None:
    prompt, overlay = assemble_rig(scene_prompt="a ferry leaving the harbor at dawn", **RIG_DEFAULTS)
    assert DIGITAL_PREFIX.strip().rstrip(".") in prompt
    assert DIGITAL_SUFFIX.strip().rstrip(".") in prompt
    for axis_default in RIG_DEFAULTS.values():
        if not axis_default or axis_default.startswith("Auto") or axis_default.startswith("None") or axis_default in ("Custom Rig", SETUP_PRESET, SETUP_CUSTOM):
            continue
        # each selected preset's opening phrase reaches the output
        assert axis_default.split(" (")[0].lower() in prompt.lower() or _first_phrase(axis_default) in prompt
    assert "a ferry leaving the harbor at dawn" in prompt


def _first_phrase(name: str) -> str:
    """First words of a preset's prompt, for presence checks by axis name."""
    from FiL_Design_ImageMind.common.cinema_rig import (
        CINEMA_ANGLES as Ang,
        CINEMA_APERTURES as A,
        CINEMA_CAMERAS as C,
        CINEMA_DIRECTOR_PRESETS as D,
        CINEMA_FOCAL_LENGTHS as F,
        CINEMA_FRAMINGS as Fr,
        CINEMA_GRADINGS as G,
        CINEMA_LENSES as L,
        CINEMA_LIGHTING as Li,
        CINEMA_MOVEMENTS as M,
        CINEMA_OPTICS as O,
    )

    for source in (C, L, F, A, Ang, Fr, M, Li, O, G, D):
        entry = source.get(name)
        if isinstance(entry, dict):
            return str(entry.get("prompt", "")).split(",")[0]
        if isinstance(entry, str):
            return entry.split(",")[0]
    return name


@pytest.mark.parametrize(
    ("camera", "prefix", "suffix"),
    [
        ("IMAX MSM 9802 70mm", FILM_PREFIX, FILM_SUFFIX),
        ("Kodak Vision3 500T (35mm)", FILM_PREFIX, FILM_SUFFIX),
        ("Arriflex 416 (16mm)", FILM_PREFIX, FILM_SUFFIX),
        ("ARRI Alexa 65 (Large Format)", DIGITAL_PREFIX, DIGITAL_SUFFIX),
        ("Sony Venice 2", DIGITAL_PREFIX, DIGITAL_SUFFIX),
    ],
)
def test_the_camera_type_picks_the_wrapper_pair(camera: str, prefix: str, suffix: str) -> None:
    chosen_prefix, chosen_suffix = wrapper_for_camera(camera)
    assert chosen_prefix == prefix
    assert chosen_suffix == suffix
    prompt, _overlay = assemble_rig(scene_prompt="a quiet kitchen", camera=camera)
    assert prefix.strip().rstrip(".") in prompt
    assert suffix.strip().rstrip(".") in prompt


def test_film_and_digital_cameras_are_both_represented() -> None:
    types = {info["type"] for info in CINEMA_CAMERAS.values()}
    assert types == {CAMERA_TYPE_FILM, CAMERA_TYPE_DIGITAL}


def test_the_scene_follows_the_medium_anchor_and_precedes_the_hardware() -> None:
    """CLIP-L only sees ~77 tokens, so the scene must sit inside that window.

    The medium anchor leads, the scene follows, and the hardware + finish
    close. A hardware-first sandwich pushed the subject past the truncation
    point and a live SDXL render came back an empty street.
    """
    prompt, _overlay = assemble_rig(scene_prompt="SCENE_TEXT", **RIG_DEFAULTS)
    scene_at = prompt.index("SCENE_TEXT")
    # default camera is digital, so the digital prefix is the medium anchor
    assert prompt.index(DIGITAL_PREFIX.split(",")[0]) < scene_at
    assert prompt.index(CINEMA_CAMERAS[RIG_DEFAULTS["camera"]]["prompt"].split(",")[0]) > scene_at
    assert prompt.index(CINEMA_GRADINGS[RIG_DEFAULTS["color_grading"]].split(",")[0]) > scene_at


def test_without_a_scene_the_rig_collapses_to_the_overlay() -> None:
    prompt, overlay = assemble_rig(scene_prompt="", **RIG_DEFAULTS)
    assert prompt == overlay


def test_disabling_the_grade_drops_it_everywhere() -> None:
    _prompt, overlay = assemble_rig(enable_grading=False, **RIG_DEFAULTS)
    grade_text = CINEMA_GRADINGS[RIG_DEFAULTS["color_grading"]]
    assert grade_text.split(",")[0] not in overlay
    assert CINEMA_CAMERAS[RIG_DEFAULTS["camera"]]["prompt"].split(",")[0] in overlay


def test_reshoot_locks_the_reference_and_drops_the_scene() -> None:
    prompt, overlay = assemble_rig(
        scene_prompt="a scene that must not appear", mode=MODE_RESHOOT, **RIG_DEFAULTS
    )
    assert prompt.startswith(RESHOOT_LOCK)
    assert "a scene that must not appear" not in prompt
    assert overlay in prompt
    # the identity lock never leaks into the overlay itself
    assert RESHOOT_LOCK.split(":")[0] not in overlay


def test_a_scene_alone_passes_through_untouched() -> None:
    prompt, overlay = assemble_rig(
        scene_prompt="just a scene",
        camera="", lens="", focal_length="", aperture="",
        camera_angle="", shot_framing="", camera_movement="",
        lighting_setup="", optics_filter="", director_preset="", color_grading=""
    )
    assert prompt == "just a scene"
    assert overlay == ""


def test_unknown_axis_names_fall_through_as_literal_wording() -> None:
    """A preset renamed after a workflow was saved still produces a real rig."""
    prompt, overlay = assemble_rig(
        scene_prompt="a night market",
        camera="Some Retired Camera",
        lens="Some Retired Lens",
    )
    assert "Some Retired Camera" in overlay
    assert "Some Retired Lens" in overlay
    # an unknown camera loses the wrapper, not the prompt
    assert prompt and not prompt.startswith(DIGITAL_PREFIX)


def test_every_default_selection_is_a_real_option() -> None:

    assert RIG_DEFAULTS["camera"] in camera_options()
    assert RIG_DEFAULTS["lens"] in lens_options()
    assert RIG_DEFAULTS["focal_length"] in focal_length_options()
    assert RIG_DEFAULTS["aperture"] in aperture_options()
    assert RIG_DEFAULTS["camera_angle"] in camera_angle_options()
    assert RIG_DEFAULTS["shot_framing"] in shot_framing_options()
    assert RIG_DEFAULTS["camera_movement"] in camera_movement_options()
    assert RIG_DEFAULTS["lighting_setup"] in lighting_setup_options()
    assert RIG_DEFAULTS["optics_filter"] in optics_filter_options()
    assert RIG_DEFAULTS["director_preset"] in director_preset_options()
    assert RIG_DEFAULTS["color_grading"] in grading_options()


# ── The node ───────────────────────────────────────────────────────────────


def _as_tuple(output):
    return output.args if hasattr(output, "args") else output


def test_schema_declares_the_five_axes_with_the_pack_defaults() -> None:
    from FiL_Design_ImageMind.nodes.node_cinema_rig import FiLCinemaRig

    schema = FiLCinemaRig.define_schema()
    assert schema.node_id == "FiLCinemaRig"
    inputs = {i.id: i for i in schema.inputs}
    for axis in (
        "camera", "lens", "focal_length", "aperture",
        "camera_angle", "shot_framing", "camera_movement",
        "lighting_setup", "optics_filter", "director_preset", "color_grading"
    ):
        assert axis in inputs, f"missing rig axis {axis}"
        assert inputs[axis].default == RIG_DEFAULTS[axis]
    assert inputs["mode"].default == MODE_ORIGINAL
    assert inputs["polish_mode"].default == POLISH_DETERMINISTIC



def test_execute_is_deterministic_and_matches_assemble() -> None:
    from FiL_Design_ImageMind.nodes.node_cinema_rig import FiLCinemaRig

    expected_prompt, expected_overlay = assemble_rig(
        scene_prompt="a boxer in a smoky gym", **RIG_DEFAULTS
    )
    rigged, overlay = _as_tuple(FiLCinemaRig.execute(scene_prompt="a boxer in a smoky gym", **RIG_DEFAULTS))
    assert rigged == expected_prompt
    assert overlay == expected_overlay


def test_llm_polish_rewrites_the_rig() -> None:
    from FiL_Design_ImageMind.nodes import node_cinema_rig

    config = {"provider": "openai", "model": "gpt-4o", "temperature": 0.7, "rate_limit_ms": 50}
    polished = "A single fluent cinematic sentence."
    with patch.object(node_cinema_rig._model_client, "generate", return_value=polished) as gen:
        rigged, overlay = _as_tuple(
            node_cinema_rig.FiLCinemaRig.execute(
                scene_prompt="a boxer in a smoky gym",
                polish_mode=POLISH_LLM,
                config=config,
                **RIG_DEFAULTS,
            )
        )
    assert rigged == polished
    # the overlay is the deterministic rig no matter who polished the prompt
    _, expected_overlay = assemble_rig(scene_prompt="a boxer in a smoky gym", **RIG_DEFAULTS)
    assert overlay == expected_overlay
    payload = gen.call_args.kwargs
    assert "a boxer in a smoky gym" in payload["user_prompt"]
    assert "ONLY the final raw prompt" in payload["system_prompt"]


def test_llm_polish_failure_falls_back_to_the_deterministic_rig() -> None:
    from FiL_Design_ImageMind.nodes import node_cinema_rig

    config = {"provider": "openai", "model": "gpt-4o"}
    with patch.object(node_cinema_rig._model_client, "generate", side_effect=RuntimeError("boom")):
        rigged, _overlay = _as_tuple(
            node_cinema_rig.FiLCinemaRig.execute(
                scene_prompt="a boxer in a smoky gym",
                polish_mode=POLISH_LLM,
                config=config,
                **RIG_DEFAULTS,
            )
        )
    expected, _ = assemble_rig(scene_prompt="a boxer in a smoky gym", **RIG_DEFAULTS)
    assert rigged == expected


def test_llm_polish_without_a_valid_config_falls_back_silently() -> None:
    from FiL_Design_ImageMind.nodes import node_cinema_rig

    for bad_config in (None, {}, {"provider": "openai", "model": ""}):
        rigged, _overlay = _as_tuple(
            node_cinema_rig.FiLCinemaRig.execute(
                scene_prompt="a boxer in a smoky gym",
                polish_mode=POLISH_LLM,
                config=bad_config,
                **RIG_DEFAULTS,
            )
        )
        expected, _ = assemble_rig(scene_prompt="a boxer in a smoky gym", **RIG_DEFAULTS)
        assert rigged == expected, f"config {bad_config!r} must fall back to the deterministic rig"


def test_reshoot_mode_through_the_node() -> None:
    from FiL_Design_ImageMind.nodes.node_cinema_rig import FiLCinemaRig

    rigged, _overlay = _as_tuple(
        FiLCinemaRig.execute(
            scene_prompt="never appears", mode=MODE_RESHOOT, **RIG_DEFAULTS
        )
    )
    assert rigged.startswith(RESHOOT_LOCK)
    assert "never appears" not in rigged
