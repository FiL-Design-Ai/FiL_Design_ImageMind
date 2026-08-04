"""FiL Cinema Rig node for ImageMind (V3 API).

Assembles a cinematic shot prompt from five camera-department axes — body,
lens, focal length, aperture, color grade — wrapped in film or digital medium
language, with an optional LLM polish pass.
"""

from __future__ import annotations

import logging
from typing import Any, Optional

from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_ROOT
from ..common.cinema_rig import (
    MODE_ORIGINAL,
    POLISH_DETERMINISTIC,
    POLISH_LLM,
    POLISH_MODES,
    RIG_DEFAULTS,
    RIG_MODES,
    aperture_options,
    assemble_rig,
    camera_options,
    focal_length_options,
    grading_options,
    lens_options,
)
from ..common.io_types import FilProviderConfig
from ..common.models import ModelClient
from ..common.processing import is_valid_model_name, normalize_model_name
from ..common.provider_runtime import safe_provider_error

logger = logging.getLogger(f"{BRAND}.CinemaRig")
_model_client = ModelClient()

_POLISH_SYSTEM_PROMPT = (
    "You are an expert cinematographer and prompt engineer for modern diffusion models "
    "(FLUX, Z-Image, Qwen, SDXL).\n"
    "Rewrite the camera-rig shot breakdown you are given into one fluent, vivid shot description.\n"
    "Rules:\n"
    "- Preserve every rig fact: camera body, lens, focal length, aperture, color grade, and the film or digital medium.\n"
    "- Preserve every scene detail; do not invent new subjects, actions, props or locations.\n"
    "- Output ONLY the final raw prompt text. Zero conversational introduction or meta commentary."
)


class FiLCinemaRig(io.ComfyNode):
    """Assembles a cinematic shot prompt from camera, lens, focal length, aperture and color grade axes."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLCinemaRig",
            display_name="🎬 Cinema Rig",
            category=f"{CATEGORY_ROOT}/Styling",
            description=(
                "Assembles a cinematic shot prompt from camera-rig axes: body, lens, focal length, aperture "
                "and color grade, wrapped in film or digital medium language, with an optional LLM polish."
            ),
            inputs=[
                FilProviderConfig.Input(
                    "config",
                    optional=True,
                    tooltip="Provider config from Provider Loader. Only needed for LLM Polish.",
                ),
                io.String.Input(
                    "scene_prompt",
                    default="",
                    multiline=True,
                    tooltip=(
                        "What is happening in the frame. The rig wraps this scene without touching it. "
                        "In Reshoot mode the scene is ignored — the reference image carries it."
                    ),
                ),
                io.Combo.Input(
                    "mode",
                    options=RIG_MODES,
                    default=MODE_ORIGINAL,
                    tooltip=(
                        "Original Shot builds a new frame around the scene. Reshoot locks subject identity, "
                        "pose, props and background of a reference image and only changes the camera treatment."
                    ),
                ),
                io.Combo.Input(
                    "camera",
                    options=camera_options(),
                    default=RIG_DEFAULTS["camera"],
                    tooltip="Camera body. Film bodies wrap the prompt in analog stock language, digital in sensor language.",
                ),
                io.Combo.Input(
                    "lens",
                    options=lens_options(),
                    default=RIG_DEFAULTS["lens"],
                    tooltip="Lens glass: spherical or anamorphic optical character.",
                ),
                io.Combo.Input(
                    "focal_length",
                    options=focal_length_options(),
                    default=RIG_DEFAULTS["focal_length"],
                    tooltip="Focal length: from ultra-wide environmental pressure to telephoto compression.",
                ),
                io.Combo.Input(
                    "aperture",
                    options=aperture_options(),
                    default=RIG_DEFAULTS["aperture"],
                    tooltip="Aperture stop: how much of the frame holds focus.",
                ),
                io.Combo.Input(
                    "color_grading",
                    options=grading_options(),
                    default=RIG_DEFAULTS["color_grading"],
                    tooltip="Color grade / finish applied over the frame. Disable with the Grade toggle.",
                ),
                io.Boolean.Input(
                    "enable_grading",
                    default=True,
                    tooltip="Apply the selected color grade. Off keeps the rig to hardware and medium only.",
                ),
                io.Combo.Input(
                    "polish_mode",
                    options=POLISH_MODES,
                    default=POLISH_DETERMINISTIC,
                    tooltip=(
                        "Deterministic is pure string assembly — no API call. LLM Polish rewrites the assembled "
                        "rig into fluent prose through the provider model."
                    ),
                ),
            ],
            outputs=[
                io.String.Output(id="rigged_prompt", display_name="rigged_prompt"),
                io.String.Output(id="rig_overlay", display_name="rig_overlay"),
            ],
            search_aliases=[
                "cinema", "cinematic", "film", "camera rig", "director", "shot builder",
                "lens", "aperture", "focal length", "color grading", "hollywood", "anamorphic",
            ],
        )

    @classmethod
    def _polish(cls, config: Optional[dict[str, Any]], rigged_prompt: str) -> str:
        """LLM rewrite of the assembled rig. Empty string on any failure.

        A failed polish falls back to the deterministic text — unlike a failed
        reference-image analysis nothing is lost, the rig is already complete —
        so failures log and return empty instead of poisoning the output.
        """
        if not rigged_prompt:
            return ""
        config_is_dict = isinstance(config, dict) and bool(config.get("provider"))
        model = normalize_model_name(str(config.get("model", ""))) if config_is_dict else ""
        if not config_is_dict or not is_valid_model_name(model):
            logger.warning("[CinemaRig] LLM Polish requested without a valid provider config — using the deterministic rig")
            return ""
        try:
            return _model_client.generate(
                provider=str(config.get("provider")),
                model=model,
                system_prompt=_POLISH_SYSTEM_PROMPT,
                user_prompt=rigged_prompt,
                temperature=float(config.get("temperature", 0.7)),
                rate_limit_ms=int(config.get("rate_limit_ms", 100)),
            ).strip()
        except Exception as exc:
            logger.error("[CinemaRig] LLM Polish failed (%s) — using the deterministic rig", safe_provider_error(exc))
            return ""

    @classmethod
    def execute(
        cls,
        scene_prompt: str = "",
        mode: str = MODE_ORIGINAL,
        camera: str = RIG_DEFAULTS["camera"],
        lens: str = RIG_DEFAULTS["lens"],
        focal_length: str = RIG_DEFAULTS["focal_length"],
        aperture: str = RIG_DEFAULTS["aperture"],
        color_grading: str = RIG_DEFAULTS["color_grading"],
        enable_grading: bool = True,
        polish_mode: str = POLISH_DETERMINISTIC,
        config: Optional[dict[str, Any]] = None,
        **_kwargs,
    ) -> io.NodeOutput:
        rigged_prompt, rig_overlay = assemble_rig(
            scene_prompt=scene_prompt,
            camera=camera,
            lens=lens,
            focal_length=focal_length,
            aperture=aperture,
            color_grading=color_grading,
            enable_grading=bool(enable_grading),
            mode=mode,
        )

        if polish_mode == POLISH_LLM:
            polished = cls._polish(config, rigged_prompt)
            if polished:
                rigged_prompt = polished

        return io.NodeOutput(rigged_prompt, rig_overlay)
