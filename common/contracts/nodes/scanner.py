"""Frontend contract for `FiLOpticScanner`."""

from __future__ import annotations

from ..widgets import _chip_grid, _chip_list, _combo, _segmented, _slider, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_LLM
from ...data import (
    DETAIL_LEVELS,
    LANGUAGES,
    MODEL_TYPE_OPTIONS,
    PROMPT_MODE_OPTIONS,
    VIDEO_ASPECT_OPTIONS,
    VIDEO_CAMERA_OPTIONS,
    VIDEO_DURATION_MAX,
    VIDEO_MODEL_TYPES,
    VIDEO_SOUND_OPTIONS,
    default_detail_level,
    first_or_default,
    get_default_agent_key,
    get_default_focus_key,
    get_visible_agent_keys,
    get_visible_focus_keys,
    get_visible_style_keys,
)

CONTRACT = NodeContract(
    id="FiLOpticScanner",
    title="🕵️ Optic Scanner",
    category=CATEGORY_LLM,
    description="Image analysis or text-idea expansion into a generation prompt.",
    min_size=(380, 300),
    family="llm",
    inputs=NodeInputs(
        required=[
            _string("prompt", section="prompt"),
            _string("negative_prompt", section="prompt"),
            _string("custom_style", section="prompt"),
            _segmented(
                "response_format",
                options=["text", "tags", "json"],
                default="text",
                section="prompt",
            ),
            _chip_grid(
                "agent",
                values=get_visible_agent_keys(),
                default=get_default_agent_key(),
                columns=3,
                section="agent",
            ),
            # Second axis: the craft layer to weigh heavier, composable with
            # any subject agent above (see AGENT_FOCUSES in common/data.py).
            # Own section, not `agent`: the panel draws one header per section,
            # so sharing it stacked both grids under "AGENT" with no divider —
            # two chips reading "⚪ None" and nothing saying they are different
            # axes.
            _chip_grid(
                "agent_focus",
                values=get_visible_focus_keys(),
                default=get_default_focus_key(),
                columns=3,
                section="focus",
            ),
            _chip_grid(
                "model_type",
                values=list(MODEL_TYPE_OPTIONS),
                default="Auto/None",
                columns=3,
                section="model",
            ),
            _chip_grid(
                "detail_level",
                values=list(DETAIL_LEVELS.keys()),
                default=default_detail_level(DETAIL_LEVELS),
                columns=5,
                section="output",
            ),
            _combo(
                "language",
                values=list(LANGUAGES),
                default=first_or_default(LANGUAGES, "ru"),
                section="output",
            ),
            _segmented(
                "prompt_mode",
                options=list(PROMPT_MODE_OPTIONS),
                default="Auto",
                section="output",
            ),
            # Video shot parameters — the panel shows these four only when
            # model_type is a video profile (visible_when mirrors the gate the
            # backend applies before injecting anything). All default to Auto,
            # which injects nothing: all-Auto runs stay byte-identical. The
            # slider's static max is the widest profile range; OpticScanner.vue
            # narrows it live for MiniMax H3 (4-15, the API hard limit) — the
            # ranges live in common/data.py (VIDEO_DURATION_RANGES).
            _slider(
                "video_duration",
                default=0,
                minv=0,
                maxv=VIDEO_DURATION_MAX,
                step=1,
                units="s",
                section="output",
                visible_when="model_type",
                visible_when_value=list(VIDEO_MODEL_TYPES),
            ),
            _combo(
                "video_aspect",
                values=list(VIDEO_ASPECT_OPTIONS),
                default="Auto",
                columns=5,
                section="output",
                visible_when="model_type",
                visible_when_value=list(VIDEO_MODEL_TYPES),
            ),
            _segmented(
                "video_sound",
                options=list(VIDEO_SOUND_OPTIONS),
                default="Auto",
                section="output",
                visible_when="model_type",
                visible_when_value=list(VIDEO_MODEL_TYPES),
            ),
            _combo(
                "video_camera",
                values=list(VIDEO_CAMERA_OPTIONS),
                default="Auto",
                section="output",
                visible_when="model_type",
                visible_when_value=list(VIDEO_MODEL_TYPES),
            ),
            _chip_list(
                "photo_style",
                values=["None"] + get_visible_style_keys("photo_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "nsfw_photo_style",
                values=["None"] + get_visible_style_keys("nsfw_photo_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "art_style",
                values=["None"] + get_visible_style_keys("art_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "nsfw_art_style",
                values=["None"] + get_visible_style_keys("nsfw_art_style"),
                default="None",
                section="styles",
            ),
        ],
        # `width`/`height` are deliberately absent: they are socket-only inputs
        # (`force_input` in node_scanner.py), so there is no widget for the panel
        # to render — the target resolution is wired in from the graph.
    ),
    outputs=[
        NodeOutput(name="prompt", type="STRING"),
        NodeOutput(name="metadata_json", type="STRING"),
        NodeOutput(name="metadata_dict", type="DICT"),
    ],
)
