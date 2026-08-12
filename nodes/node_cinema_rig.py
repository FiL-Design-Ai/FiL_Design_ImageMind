"""FiL Cinema Rig node for ImageMind (V3 API).

Assembles a cinematic shot prompt from five camera-department axes — body,
lens, focal length, aperture, color grade — wrapped in film or digital medium
language, with an optional LLM polish pass.
"""

from __future__ import annotations

import logging
from typing import Any, Optional

from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_STYLING
from ..common.cinema_rig import (
    MODE_ORIGINAL,
    POLISH_DETERMINISTIC,
    POLISH_LLM,
    POLISH_MODES,
    RIG_DEFAULTS,
    RIG_MODES,
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
    setup_mode_options,
    shot_framing_options,
)
from ..common.io_types import FilProviderConfig
from ..common.models import ModelClient
from ..common.processing import is_valid_model_name, normalize_model_name
from ..common.provider_runtime import safe_provider_error, unload_local_model

logger = logging.getLogger(f"{BRAND}.CinemaRig")
_model_client = ModelClient()

_POLISH_SYSTEM_PROMPT = (
    "You are an elite cinematographer and prompt engineer specializing in modern generative models "
    "(Krea 2, FLUX.1, Z-Image, Qwen-Image, SDXL).\n"
    "Your task is to rewrite the given camera-rig breakdown and scene description into one dense, cohesive, "
    "highly vivid motion-picture shot prompt.\n\n"
    "Optimization Rules for Krea 2 & Modern DiT Architecture:\n"
    "1. PRESERVE ALL RIG FACTS: Keep camera body, lens model, focal length, aperture, camera angle, shot framing, "
    "camera movement, lighting setup, optics filter, director style, color grade, and medium texture.\n"
    "2. TACTILE PHYSICAL TRUTH: Focus on material weight, surface reflections, optical falloff, and Z-index spatial depth.\n"
    "3. ZERO META-NOISE: Never use buzzwords like 'highly detailed', 'appears to be', '4K', 'masterpiece', or meta-descriptions.\n"
    "4. SPATIAL STACKING: Describe foreground, midground subject, and background depth cleanly.\n"
    "5. Output ONLY the final raw prompt text. Zero conversational filler or intro."
)



class FiLCinemaRig(io.ComfyNode):
    """Assembles a cinematic shot prompt from camera, lens, focal length, aperture, angle, framing, movement, lighting, filter, director style and color grade axes."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLCinemaRig",
            display_name="🎬 Cinema Rig",
            category=CATEGORY_STYLING,
            description=(
                "Assembles a cinematic shot prompt from 11 camera-rig axes: body, lens, focal length, aperture, "
                "angle, framing, movement, lighting, optics filter, director style and color grade, wrapped in film or digital medium language, with an optional LLM polish."
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
                    "setup_mode",
                    options=setup_mode_options(),
                    default=RIG_DEFAULTS["setup_mode"],
                    tooltip=(
                        "Director Preset mode uses signature director visual styles and neutralizes manual hardware controls. "
                        "Custom Hardware mode enables full manual control of all camera, lens, focal, aperture, and optics controls."
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
                    "camera_angle",
                    options=camera_angle_options(),
                    default=RIG_DEFAULTS["camera_angle"],
                    tooltip="Camera angle and elevation relative to the subject.",
                ),
                io.Combo.Input(
                    "shot_framing",
                    options=shot_framing_options(),
                    default=RIG_DEFAULTS["shot_framing"],
                    tooltip="Shot distance and framing scale.",
                ),
                io.Combo.Input(
                    "camera_movement",
                    options=camera_movement_options(),
                    default=RIG_DEFAULTS["camera_movement"],
                    tooltip="Camera movement and rig dynamics.",
                ),
                io.Combo.Input(
                    "lighting_setup",
                    options=lighting_setup_options(),
                    default=RIG_DEFAULTS["lighting_setup"],
                    tooltip="Lighting architecture and atmospheric condition.",
                ),
                io.Combo.Input(
                    "optics_filter",
                    options=optics_filter_options(),
                    default=RIG_DEFAULTS["optics_filter"],
                    tooltip="Lens filter, flares, or film grain texture.",
                ),
                io.Combo.Input(
                    "director_preset",
                    options=director_preset_options(),
                    default=RIG_DEFAULTS["director_preset"],
                    tooltip="Signature director / cinematographer visual style.",
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
                "angle", "framing", "movement", "lighting", "filter", "krea", "krea 2",
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
        provider = str(config.get("provider"))
        try:
            polished = _model_client.generate(
                provider=provider,
                model=model,
                system_prompt=_POLISH_SYSTEM_PROMPT,
                user_prompt=rigged_prompt,
                temperature=float(config.get("temperature", 0.7)),
                rate_limit_ms=int(config.get("rate_limit_ms", 100)),
            ).strip()
        except Exception as exc:
            logger.error("[CinemaRig] LLM Polish failed (%s) — using the deterministic rig", safe_provider_error(exc))
            return ""
        # Provider Loader's unload switch: the polish is this node's only LLM
        # call, so a local model may leave memory as soon as it has answered.
        if bool(config.get("unload_llm", False)):
            unload_local_model(provider, model)
        return polished

    @classmethod
    def execute(
        cls,
        scene_prompt: str = "",
        mode: str = MODE_ORIGINAL,
        setup_mode: str = RIG_DEFAULTS["setup_mode"],
        camera: str = RIG_DEFAULTS["camera"],
        lens: str = RIG_DEFAULTS["lens"],
        focal_length: str = RIG_DEFAULTS["focal_length"],
        aperture: str = RIG_DEFAULTS["aperture"],
        camera_angle: str = RIG_DEFAULTS["camera_angle"],
        shot_framing: str = RIG_DEFAULTS["shot_framing"],
        camera_movement: str = RIG_DEFAULTS["camera_movement"],
        lighting_setup: str = RIG_DEFAULTS["lighting_setup"],
        optics_filter: str = RIG_DEFAULTS["optics_filter"],
        director_preset: str = RIG_DEFAULTS["director_preset"],
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
            camera_angle=camera_angle,
            shot_framing=shot_framing,
            camera_movement=camera_movement,
            lighting_setup=lighting_setup,
            optics_filter=optics_filter,
            director_preset=director_preset,
            color_grading=color_grading,
            enable_grading=bool(enable_grading),
            mode=mode,
            setup_mode=setup_mode,
        )

        if polish_mode == POLISH_LLM:
            polished = cls._polish(config, rigged_prompt)
            if polished:
                rigged_prompt = polished

        return io.NodeOutput(rigged_prompt, rig_overlay)

