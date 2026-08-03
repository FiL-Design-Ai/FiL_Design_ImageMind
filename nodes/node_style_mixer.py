"""FiL Style Mixer node for ImageMind (V3 API).

Blends multiple visual styles and optional reference images with weighted influence sliders.
"""

from __future__ import annotations

import logging
from typing import Any, Optional

from comfy_api.latest import io
from ..common.brand import BRAND, CATEGORY_ROOT
from ..common.config import is_model_vision_capable
from ..common.data import get_all_style_keys, get_style_prompt
from ..common.io_types import FilProviderConfig
from ..common.models import ModelClient
from ..common.processing import ImageProcessor, is_valid_model_name, normalize_model_name
from ..common.provider_runtime import safe_provider_error

logger = logging.getLogger(f"{BRAND}.StyleMixer")
_processor = ImageProcessor()
_model_client = ModelClient()

FOCUS_OPTIONS = [
    "Auto / General",
    "Style & Texture",
    "Color & Lighting",
    "Subject & Composition",
    "Mood & Atmosphere",
]

FUSION_MODES = [
    "Weighted Stack (Fast)",
    "Smart LLM Fusion (Gen-Mix)",
]


class FiLStyleMixer(io.ComfyNode):
    """Blends multiple visual styles and reference images with weighted influence sliders."""

    @classmethod
    def define_schema(cls):
        style_options = ["(None)"] + get_all_style_keys()
        return io.Schema(
            node_id="FiLStyleMixer",
            display_name="🎛️ Style Mixer",
            category=f"{CATEGORY_ROOT}/Styling",
            description="Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
            inputs=[
                FilProviderConfig.Input(
                    "config",
                    optional=True,
                    tooltip="Provider config from Provider Loader for Vision LLM fusion.",
                ),
                io.Combo.Input(
                    "fusion_mode",
                    options=FUSION_MODES,
                    default="Weighted Stack (Fast)",
                    tooltip="How reference images and text styles are combined.",
                ),
                io.String.Input(
                    "base_prompt",
                    default="",
                    multiline=True,
                    tooltip="Base prompt to apply style mixing onto.",
                ),
                # Image 1 (Always visible by default)
                io.Image.Input(
                    "image_1",
                    optional=True,
                    tooltip="Primary visual reference image.",
                ),
                io.Float.Input(
                    "img_weight_1",
                    default=0.8,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence weight of image 1.",
                ),
                io.Combo.Input(
                    "img_focus_1",
                    options=FOCUS_OPTIONS,
                    default="Auto / General",
                    optional=True,
                    tooltip="Focus aspect for image 1 analysis.",
                ),
                # Image 2 (Standby slot)
                io.Image.Input(
                    "image_2",
                    optional=True,
                    tooltip="Secondary visual reference image.",
                ),
                io.Float.Input(
                    "img_weight_2",
                    default=0.6,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence weight of image 2.",
                ),
                io.Combo.Input(
                    "img_focus_2",
                    options=FOCUS_OPTIONS,
                    default="Auto / General",
                    optional=True,
                    tooltip="Focus aspect for image 2 analysis.",
                ),
                # Image 3 (Standby slot)
                io.Image.Input(
                    "image_3",
                    optional=True,
                    tooltip="Tertiary visual reference image.",
                ),
                io.Float.Input(
                    "img_weight_3",
                    default=0.4,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence weight of image 3.",
                ),
                io.Combo.Input(
                    "img_focus_3",
                    options=FOCUS_OPTIONS,
                    default="Auto / General",
                    optional=True,
                    tooltip="Focus aspect for image 3 analysis.",
                ),
                # Image 4 (Standby slot)
                io.Image.Input(
                    "image_4",
                    optional=True,
                    tooltip="Quaternary visual reference image.",
                ),
                io.Float.Input(
                    "img_weight_4",
                    default=0.2,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence weight of image 4.",
                ),
                io.Combo.Input(
                    "img_focus_4",
                    options=FOCUS_OPTIONS,
                    default="Auto / General",
                    optional=True,
                    tooltip="Focus aspect for image 4 analysis.",
                ),
                # Text styles
                io.Combo.Input(
                    "style_1",
                    options=style_options,
                    default="(None)",
                    optional=True,
                    tooltip="Primary visual text style.",
                ),
                io.Float.Input(
                    "weight_1",
                    default=1.0,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence of text style 1.",
                ),
                io.Combo.Input(
                    "style_2",
                    options=style_options,
                    default="(None)",
                    optional=True,
                    tooltip="Secondary visual text style.",
                ),
                io.Float.Input(
                    "weight_2",
                    default=0.5,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence of text style 2.",
                ),
                io.Combo.Input(
                    "style_3",
                    options=style_options,
                    default="(None)",
                    optional=True,
                    tooltip="Tertiary visual text style.",
                ),
                io.Float.Input(
                    "weight_3",
                    default=0.3,
                    min=0.0,
                    max=1.0,
                    step=0.05,
                    optional=True,
                    tooltip="Influence of text style 3.",
                ),
            ],
            outputs=[
                io.String.Output(id="styled_prompt", display_name="styled_prompt"),
                io.String.Output(id="style_overlay", display_name="style_overlay"),
            ],
            search_aliases=["mixer", "blend", "style blend", "styles", "weighted style", "vision mixer", "multi image"],
        )

    @classmethod
    def execute(
        cls,
        base_prompt: str = "",
        style_1: str = "(None)",
        weight_1: float = 1.0,
        style_2: str = "(None)",
        weight_2: float = 0.5,
        style_3: str = "(None)",
        weight_3: float = 0.3,
        config: Optional[dict[str, Any]] = None,
        fusion_mode: str = "Weighted Stack (Fast)",
        image_1: Any = None,
        img_weight_1: float = 0.8,
        img_focus_1: str = "Auto / General",
        image_2: Any = None,
        img_weight_2: float = 0.6,
        img_focus_2: str = "Auto / General",
        image_3: Any = None,
        img_weight_3: float = 0.4,
        img_focus_3: str = "Auto / General",
        image_4: Any = None,
        img_weight_4: float = 0.2,
        img_focus_4: str = "Auto / General",
        **_kwargs,
    ) -> io.NodeOutput:
        # Collect text style parts
        text_style_parts: list[str] = []
        for st_name, weight in [(style_1, weight_1), (style_2, weight_2), (style_3, weight_3)]:
            w = float(weight) if weight is not None else 0.0
            if st_name and st_name != "(None)" and w > 0.01:
                prompt_text = get_style_prompt(st_name)
                if not prompt_text:
                    continue

                if w >= 0.95:
                    text_style_parts.append(prompt_text)
                else:
                    text_style_parts.append(f"({prompt_text}:{w:.2f})")

        # Collect image references
        # Anything that stopped a wired reference image from actually being
        # analysed. Previously each failure only reached the log and the node
        # substituted a placeholder like "(image 2 visual style:0.60)", so a dead
        # provider or a missing API key still produced a "successful" prompt.
        failures: list[str] = []

        active_images: list[tuple[int, Any, float, str, str]] = []
        for idx, (img, weight, focus) in enumerate(
            [
                (image_1, img_weight_1, img_focus_1),
                (image_2, img_weight_2, img_focus_2),
                (image_3, img_weight_3, img_focus_3),
                (image_4, img_weight_4, img_focus_4),
            ],
            start=1,
        ):
            w = float(weight) if weight is not None else 0.0
            if img is not None and w > 0.01:
                try:
                    b64 = _processor.tensor_to_base64(img)
                    if b64:
                        active_images.append((idx, img, w, focus or "Auto / General", b64))
                except Exception as err:
                    logger.warning("[StyleMixer] Failed to process image_%d: %s", idx, err)
                    failures.append(f"image_{idx}: не удалось обработать изображение ({err})")

        image_style_parts: list[str] = []
        smart_fusion_prompt: str = ""

        # Resolve the provider config up front. Analysing a reference image is a
        # vision task, so a wired config whose model is a placeholder — or that
        # cannot see images — is a misconfiguration to report, not a reason to
        # silently fall back to the no-LLM placeholders. Mirrors the preflight
        # the scanner / decomposer already run.
        config_is_dict = isinstance(config, dict) and bool(config.get("provider"))
        provider = str(config.get("provider")) if config_is_dict else ""
        model = normalize_model_name(str(config.get("model", ""))) if config_is_dict else ""
        has_config = config_is_dict and is_valid_model_name(model)

        if active_images:
            can_analyze = False
            if has_config:
                if is_model_vision_capable(provider, model):
                    can_analyze = True
                else:
                    failures.append(
                        f"модель '{model}' не поддерживает анализ изображений — "
                        "выбери vision-модель (Qwen-VL, Gemini, GPT-4o) или отключи эталоны"
                    )
            elif config_is_dict:
                # Config wired, but the model slot is empty or a placeholder.
                failures.append("в Provider Loader не выбрана действующая модель")

            if can_analyze:
                temperature = float(config.get("temperature", 0.7))
                rate_limit = int(config.get("rate_limit_ms", 100))

                if fusion_mode == "Smart LLM Fusion (Gen-Mix)":
                    sys_prompt = (
                        "You are an expert prompt engineer specializing in multi-image visual style fusion "
                        "for modern diffusion models (FLUX, Z-Image, Qwen, SDXL).\n"
                        "Synthesize the visual DNA from the provided reference images into a single cohesive, "
                        "highly detailed descriptive prompt.\n"
                        "Rules:\n"
                        "- Combine user base prompt, text styles, and image visual references seamlessly.\n"
                        "- Pay close attention to each image's requested focus (e.g. Color & Lighting, Style & Texture, Subject).\n"
                        "- Output ONLY the final raw prompt text. Zero conversational introduction or meta commentary."
                    )

                    img_descriptions = []
                    for idx, _img, w, focus, _b64 in active_images:
                        img_descriptions.append(f"- Image {idx}: weight={w:.2f}, focus={focus}")

                    user_msg = (
                        f"Base Prompt: {base_prompt.strip() if base_prompt else 'None'}\n"
                        f"Text Styles: {', '.join(text_style_parts) if text_style_parts else 'None'}\n"
                        f"Image Inputs:\n" + "\n".join(img_descriptions) + "\n\n"
                        "Synthesize a unified, vivid visual prompt in English."
                    )

                    b64_list = [b64 for _, _, _, _, b64 in active_images]
                    try:
                        smart_fusion_prompt = _model_client.generate(
                            provider=provider,
                            model=model,
                            system_prompt=sys_prompt,
                            user_prompt=user_msg,
                            images=b64_list,
                            temperature=temperature,
                            rate_limit_ms=rate_limit,
                        ).strip()
                    except Exception as exc:
                        logger.error("[StyleMixer] Vision LLM Fusion failed: %s", exc)
                        smart_fusion_prompt = ""

                if not smart_fusion_prompt or fusion_mode == "Weighted Stack (Fast)":
                    # Weighted Stack mode (or fallback if smart fusion failed)
                    for idx, _img, w, focus, b64 in active_images:
                        sys_prompt = (
                            f"Describe the visual details of this image with specific focus on: {focus}.\n"
                            "Be concise (15-25 words), precise, and describe materials, lighting, or style directly for an AI image generator prompt.\n"
                            "Output ONLY the description string."
                        )
                        try:
                            desc = _model_client.generate(
                                provider=provider,
                                model=model,
                                system_prompt=sys_prompt,
                                user_prompt="Extract visual style features.",
                                images=[b64],
                                temperature=temperature,
                                rate_limit_ms=rate_limit,
                            ).strip()
                            if desc:
                                if w >= 0.95:
                                    image_style_parts.append(desc)
                                else:
                                    image_style_parts.append(f"({desc}:{w:.2f})")
                        except Exception as exc:
                            logger.error("[StyleMixer] Failed to analyze image_%d: %s", idx, exc)
                            failures.append(f"image_{idx}: {safe_provider_error(exc)}")
            elif not config_is_dict:
                # No config wired at all — deterministic placeholders, no LLM.
                for idx, _img, w, focus, _b64 in active_images:
                    image_style_parts.append(f"(image {idx} visual style [{focus}]:{w:.2f})")

        # Assemble final output
        if smart_fusion_prompt:
            styled_prompt = smart_fusion_prompt
            style_overlay = ", ".join(text_style_parts + image_style_parts) if (text_style_parts or image_style_parts) else smart_fusion_prompt
        else:
            all_styles = text_style_parts + image_style_parts
            style_overlay = ", ".join(all_styles)
            base_str = str(base_prompt or "").strip()

            if base_str and style_overlay:
                styled_prompt = f"{base_str}, {style_overlay}"
            elif base_str:
                styled_prompt = base_str
            else:
                styled_prompt = style_overlay

        # A reference image that never got analysed must not pass as success —
        # the styled prompt would silently be missing that image's influence.
        if failures:
            err_msg = "⚠️ Ошибка: не удалось проанализировать эталонные изображения — " + "; ".join(
                failures
            )
            return io.NodeOutput(err_msg, err_msg)

        return io.NodeOutput(styled_prompt, style_overlay)

