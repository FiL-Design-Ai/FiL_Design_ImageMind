"""Frontend contract for `FiLCinemaRig`."""

from __future__ import annotations

from ..widgets import _bool, _chip_list, _segmented, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_STYLING
from ...cinema_rig import (
    MODE_ORIGINAL,
    POLISH_DETERMINISTIC,
    POLISH_MODES,
    RIG_DEFAULTS,
    RIG_MODES,
    SETUP_MODES,
    SETUP_PRESET,
    aperture_options,
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
)

CONTRACT = NodeContract(
    id="FiLCinemaRig",
    title="🎬 Cinema Rig",
    category=CATEGORY_STYLING,
    description=(
        "Assembles a cinematic shot prompt from 11 camera-rig axes: body, lens, focal length, aperture, "
        "angle, framing, movement, lighting, optics filter, director style and color grade, wrapped in film or digital medium language, with an optional LLM polish."
    ),
    family="base",
    min_size=(300, 380),
    inputs=NodeInputs(
        required=[
            _string("scene_prompt", default="", multiline=True, label="Scene"),
            _segmented("mode", options=RIG_MODES, default=MODE_ORIGINAL, label="Mode"),
            _segmented("setup_mode", options=SETUP_MODES, default=SETUP_PRESET, label="Setup mode"),
        ],
        optional=[
            _chip_list("camera", values=camera_options(), default=RIG_DEFAULTS["camera"], label="Camera"),
            _chip_list("lens", values=lens_options(), default=RIG_DEFAULTS["lens"], label="Lens"),
            _chip_list("focal_length", values=focal_length_options(), default=RIG_DEFAULTS["focal_length"], label="Focal length"),
            _chip_list("aperture", values=aperture_options(), default=RIG_DEFAULTS["aperture"], label="Aperture"),
            _chip_list("camera_angle", values=camera_angle_options(), default=RIG_DEFAULTS["camera_angle"], label="Camera angle"),
            _chip_list("shot_framing", values=shot_framing_options(), default=RIG_DEFAULTS["shot_framing"], label="Shot framing"),
            _chip_list("camera_movement", values=camera_movement_options(), default=RIG_DEFAULTS["camera_movement"], label="Camera movement"),
            _chip_list("lighting_setup", values=lighting_setup_options(), default=RIG_DEFAULTS["lighting_setup"], label="Lighting setup"),
            _chip_list("optics_filter", values=optics_filter_options(), default=RIG_DEFAULTS["optics_filter"], label="Optics filter"),
            _chip_list("director_preset", values=director_preset_options(), default=RIG_DEFAULTS["director_preset"], label="Director preset"),
            _bool("enable_grading", default=True, label="Color grade on"),
            _chip_list("color_grading", values=grading_options(), default=RIG_DEFAULTS["color_grading"], label="Color grade"),
            _segmented("polish_mode", options=POLISH_MODES, default=POLISH_DETERMINISTIC, label="Polish"),
        ],
    ),
    outputs=[
        NodeOutput(name="rigged_prompt", type="STRING"),
        NodeOutput(name="rig_overlay", type="STRING"),
    ],
)
