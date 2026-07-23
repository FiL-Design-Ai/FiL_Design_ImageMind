import logging
from typing import Any, Dict, List, Optional, Tuple

from .data import (
    AGENTS,
    NONE_AGENT_KEY,
    NONE_AGENT_TEMPLATE,
    _STYLE_SOURCES,
    model_uses_positive_constraints,
    resolve_agent_key,
)

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.Logic")

# Per model_type extra system-prompt guidance. Appended after the agent/lang/
# detail sections so the LLM knows what output shape the target generator
# expects. This is the "configure prompting per chosen generation model" layer.
MODEL_TYPE_GUIDANCE: Dict[str, str] = {
    "Z-Image Turbo": (
        "Target generator: Z-Image Turbo (DiT, S3-DiT architecture). Write a clear, "
        "structured NATURAL-LANGUAGE description, not a comma-separated tag list — "
        "this model responds strongly to camera and lighting language and to a "
        "recognizable sentence structure, not tag salad. Cover, in order: subject, "
        "action/state, composition, environment, lighting, mood, style. If any text "
        "must appear rendered in the image, put it in quotes. No markdown, no field "
        "labels, no commentary. Aim for 80-250 words — long and precise beats short "
        "and vague, but avoid poetic/novelistic language."
    ),
    "FLUX": (
        "Target generator: FLUX.1 / FLUX.2 (Black Forest Labs). Write natural language, "
        "as if describing the image to another person. Loose template (not a strict "
        "formula, skip slots that don't apply): subject, location/context, style, "
        "camera settings, lighting, colors, effects, additional elements. Be specific "
        "rather than vague. No markdown, no field labels. Express all constraints "
        "positively (describe what IS present, never what is absent) — FLUX has no "
        "negative-prompt mechanism. Put any exact on-image text in quotes."
    ),
    "QWEN": (
        "Target generator: Qwen-Image. Prioritize structure over narrative but keep it "
        "BRIEF — 1 to 3 sentences total, not a long labeled breakdown. Lead with the "
        "main subject, then style, then lighting/mood, then composition, in plain "
        "language. Always wrap any literal text that must render in the image in "
        "double quotes — this measurably improves text-rendering accuracy."
    ),
    "SDXL": (
        "Target generator: SDXL. Write a comma-separated tag-style prompt suitable "
        "for SDXL. Include quality cues if relevant."
    ),
    "Krea 2": (
        "Target generator: Krea 2. Write natural-language prose following: subject, "
        "scene, composition, lighting, mood, medium/style, technical detail. Krea 2 "
        "does not need a giant prompt — do not stack many style adjectives, it can "
        "muddy the output, especially if a style/moodboard reference is also in play. "
        "No negatives — express all constraints positively. No markdown."
    ),
    "Ideogram 4": (
        "Target generator: Ideogram 4.0. Write a plain natural-language descriptive "
        "prompt — normal sentences, no JSON, no field labels, no markdown. Ideogram's "
        "own Magic Prompt feature (server-side) handles further enhancement on its "
        "end; do not try to build a structured caption object yourself. Put any exact "
        "on-image text in quotes."
    ),
    "Auto/None": "",
}


def build_model_type_guidance(model_type: str) -> str:
    return MODEL_TYPE_GUIDANCE.get(model_type, "")


def negative_to_positive_clause(negative_prompt: str, model_type: str) -> str:
    """Build the negative-prompt clause appropriate for ``model_type``.

    Positive-constraint models (FLUX, Z-Image, Ideogram 4, Krea 2) are told to
    avoid the listed elements by describing what IS present instead. Standard
    models get a plain 'Avoid:' clause.
    """
    neg = (negative_prompt or "").strip()
    if not neg:
        return ""
    if model_uses_positive_constraints(model_type):
        return (
            f"Constraints (do not include these — express the scene positively "
            f"without them): {neg}"
        )
    return f"Avoid: {neg}"


class StyleManager:
    def resolve_style_selection(self, style_widget: str, style_value: str) -> Tuple[str, str]:
        if not style_value or style_value in ("None", "none", ""):
            return "", ""
        source = _STYLE_SOURCES.get(style_widget, {})
        prompt = source.get(style_value, "")
        if prompt:
            return style_value, prompt
        return "", ""

    def get_style_hint(self, widget_name: str) -> str:
        hints = {
            "photo_style": "Photo style overlay",
            "art_style": "Art style overlay",
            "nsfw_photo_style": "NSFW photo style overlay",
            "nsfw_art_style": "NSFW art style overlay",
        }
        return hints.get(widget_name, "")

    def get_active_styles(self, **style_kwargs) -> Dict[str, str]:
        result = {}
        for key in ("photo_style", "art_style", "nsfw_photo_style", "nsfw_art_style"):
            val = style_kwargs.get(key, "None")
            style_key, style_prompt = self.resolve_style_selection(key, val)
            if style_key:
                result[key] = style_prompt
        return result

    def build_style_block(self, **style_kwargs) -> str:
        active = self.get_active_styles(**style_kwargs)
        if not active:
            return ""
        parts = []
        for key, prompt in active.items():
            hint = self.get_style_hint(key)
            parts.append(f"[{hint}]\n{prompt}")
        return "\n\n".join(parts)


class PromptGenerator:
    def __init__(self):
        self.style_manager = StyleManager()

    def build_system_prompt_bundle(
        self,
        agent_key: str = NONE_AGENT_KEY,
        detail_level: str = "normal",
        language: str = "ru",
        model_type: str = "Auto/None",
        **style_kwargs,
    ) -> Tuple[str, str, str]:
        resolved_agent = resolve_agent_key(agent_key)
        agent_template = AGENTS.get(resolved_agent, NONE_AGENT_TEMPLATE)
        style_block = self.style_manager.build_style_block(**style_kwargs)
        language_hint = "Answer in Russian." if language == "ru" else "Answer in English."
        detail_hints = {
            "tiny": "Be extremely brief — 1-2 sentences.",
            "short": "Keep description short — 2-4 sentences.",
            "normal": "Write a balanced description.",
            "detailed": "Write a detailed description with specific observations.",
            "ultra": "Write an ultra-detailed technical description covering every visible element.",
        }
        detail_hint = detail_hints.get(detail_level, "Write a balanced description.")
        model_guidance = build_model_type_guidance(model_type)

        system_parts = [agent_template, language_hint, detail_hint]
        if model_guidance:
            system_parts.append(model_guidance)
        if style_block:
            system_parts.append(f"Style overlay:\n{style_block}")

        system_prompt = "\n\n".join(system_parts)
        return system_prompt, agent_template, style_block

    def _build_base_sections(
        self,
        agent_key: str,
        detail_level: str,
        language: str,
        model_type: str,
    ) -> Tuple[str, str, str, str]:
        """Return (agent_template, language_hint, detail_hint, model_guidance)."""
        resolved_agent = resolve_agent_key(agent_key)
        agent_template = AGENTS.get(resolved_agent, NONE_AGENT_TEMPLATE)
        language_hint = "Answer in Russian." if language == "ru" else "Answer in English."
        detail_hints = {
            "tiny": "Be extremely brief — 1-2 sentences.",
            "short": "Keep description short — 2-4 sentences.",
            "normal": "Write a balanced description.",
            "detailed": "Write a detailed description with specific observations.",
            "ultra": "Write an ultra-detailed technical description covering every visible element.",
        }
        detail_hint = detail_hints.get(detail_level, "Write a balanced description.")
        return agent_template, language_hint, detail_hint, build_model_type_guidance(model_type)

    def build_system_prompt_two_stage_bundle(
        self,
        agent_key: str = NONE_AGENT_KEY,
        detail_level: str = "normal",
        language: str = "ru",
        model_type: str = "Auto/None",
        **style_kwargs,
    ) -> Dict[str, Dict[str, str]]:
        """Stage 1 = raw description (no style). Stage 2 = styled reformat.

        Stage 2 consumes the locked stage-1 result as source truth, so it does
        NOT re-process the image — it only restyles the stage-1 description.
        """
        agent_template, language_hint, detail_hint, model_guidance = self._build_base_sections(
            agent_key, detail_level, language, model_type
        )
        style_block = self.style_manager.build_style_block(**style_kwargs)

        stage1_parts = [agent_template, language_hint, detail_hint]
        if model_guidance:
            stage1_parts.append(model_guidance)
        stage1_prompt = "\n\n".join(stage1_parts)

        stage2_parts = [agent_template, language_hint, detail_hint]
        if model_guidance:
            stage2_parts.append(model_guidance)
        if style_block:
            stage2_parts.append(f"Style overlay:\n{style_block}")
        stage2_prompt = "\n\n".join(stage2_parts)

        return {
            "stage1": {"prompt": stage1_prompt},
            "stage2": {"prompt": stage2_prompt},
            "style_block": style_block,
        }

    def build_stage1_user_prompt(self, user_prompt: str, has_image: bool) -> str:
        if has_image:
            user_request = user_prompt.strip() or "Describe this image in detail."
            return (
                "The image is the source of truth. Preserve its main subject, subject count, "
                "action, pose, composition, focal anchor, object relationships, and age readability. "
                "Treat the following text only as a requested emphasis or presentation change:\n"
                f"{user_request}"
            )
        return user_prompt

    def build_stage2_user_prompt(
        self,
        stage1_response: str,
        user_prompt: str,
        detail_level: str = "normal",
        model_type: str = "Auto/None",
    ) -> str:
        extra = user_prompt.strip()
        instruction = (
            "Reformat the source description as a generation prompt for the target model, "
            "applying the style overlay. Keep the source facts locked — do not invent new subjects."
        )
        parts = [
            f"[SOURCE DESCRIPTION]\n{stage1_response}",
            instruction,
        ]
        if extra:
            parts.append(f"Additional request: {extra}")
        return "\n\n".join(parts)
