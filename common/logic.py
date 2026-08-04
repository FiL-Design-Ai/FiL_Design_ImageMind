import logging
from typing import Any, Dict, Tuple

from .data import (
    AGENTS,
    NONE_AGENT_KEY,
    NONE_FOCUS_KEY,
    NONE_AGENT_TEMPLATE,
    TAGS_OUTPUT_INSTRUCTION,
    TAGS_RESPONSE_FORMAT,
    _STYLE_SOURCES,
    get_focus_template,
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
        "Target generator: SDXL. Write a full natural-language descriptive prompt "
        "in connected prose — not comma-separated tags. Start with the main subject "
        "and action, describe the scene and environment, then lighting and mood. "
        "Include style and quality details. SDXL generates best from coherent "
        "sentences, not tag lists."
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
    "Video": (
        "Target generators: video generation models — MiniMax H2/H3, Wan 2.x, "
        "HunyuanVideo, LTX Video, Kling, Veo/Sora-class DiT video models. Write ONE "
        "continuous natural-language shot description in the present tense, as if "
        "narrating the clip to another person. Cover in order: the subject and its "
        "action, the scene/environment, camera framing and movement, lighting, mood, "
        "style. MOTION is the point of a video prompt — name what moves, how and in "
        "which direction, and how the camera behaves (locked, slow pan, tilt, dolly "
        "in/out, orbit, handheld, zoom); if the shot is static, say 'locked-off "
        "static shot' outright — unstated, video models default to a slow push-in. "
        "Add one clause of sound design (ambience, foley, music mood): models with "
        "native audio invent a random ambience when sound goes undescribed. When an "
        "image is wired, say what each reference controls ('the image sets the scene "
        "and lighting; the subject keeps its identity'). Keep it to one smooth "
        "paragraph of 2-4 sentences, roughly 40-150 words: video models follow short "
        "concrete shots better than dense walls of text. No shot lists, no "
        "timestamps, no markdown, no field labels, no commentary. Express all "
        "constraints positively — most video models have no negative-prompt "
        "mechanism. Put any text that must appear on screen in quotes and state "
        "that only that text appears — no other lettering, no subtitles."
    ),
    "Auto/None": "",
}


def build_model_type_guidance(model_type: str) -> str:
    return MODEL_TYPE_GUIDANCE.get(model_type, "")


def negative_to_positive_clause(negative_prompt: str, model_type: str) -> str:
    """Build the negative-prompt clause appropriate for ``model_type``.

    Positive-constraint models (FLUX, Z-Image Turbo, Krea 2) are told to avoid
    the listed elements by describing what IS present instead. Standard models
    — including Ideogram 4, which has a real negative_prompt field — get a
    plain 'Avoid:' clause.
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
        # Split by | or comma in case multiple styles were selected
        raw_keys = [k.strip() for k in style_value.split("|") if k.strip() and k.strip().lower() not in ("none", "")]
        if not raw_keys:
            return "", ""
        matched_keys = []
        matched_prompts = []
        for k in raw_keys:
            prompt = source.get(k, "")
            if not prompt:
                for src in _STYLE_SOURCES.values():
                    if k in src:
                        prompt = src[k]
                        break
            if prompt:
                matched_keys.append(k)
                matched_prompts.append(prompt)
        if matched_prompts:
            return " | ".join(matched_keys), "\n\n".join(matched_prompts)
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


def compute_aspect_ratio_info(width: int, height: int) -> Dict[str, Any]:
    """Calculate aspect ratio, orientation, and prompt guidance based on width and height."""
    if width <= 0 or height <= 0:
        return {"active": False, "ratio_str": "", "orientation": "", "guidance": ""}

    ratio = width / height

    ratios = [
        (1.0, "1:1"),
        (16 / 9, "16:9"),
        (9 / 16, "9:16"),
        (4 / 5, "4:5"),
        (5 / 4, "5:4"),
        (3 / 4, "3:4"),
        (4 / 3, "4:3"),
        (2 / 3, "2:3"),
        (3 / 2, "3:2"),
        (21 / 9, "21:9"),
        (9 / 21, "9:21"),
    ]
    best_match = min(ratios, key=lambda r: abs(r[0] - ratio))
    if abs(best_match[0] - ratio) < 0.08:
        ratio_str = best_match[1]
    else:
        import math
        gcd = math.gcd(width, height)
        simplified_w = width // gcd
        simplified_h = height // gcd
        if simplified_w < 100 and simplified_h < 100:
            ratio_str = f"{simplified_w}:{simplified_h}"
        else:
            ratio_str = f"{ratio:.2f}:1"

    if ratio >= 2.0:
        orientation = "Ultra-Wide"
        guidance = (
            f"Target image dimensions: {width}x{height} (Aspect Ratio ~{ratio_str}, Ultra-Wide horizontal). "
            f"Emphasize a sweeping panoramic composition, broad horizontal spatial scope, expansive background environments, and balanced lateral details."
        )
    elif ratio > 1.08:
        orientation = "Landscape"
        guidance = (
            f"Target image dimensions: {width}x{height} (Aspect Ratio ~{ratio_str}, Landscape horizontal). "
            f"Emphasize wide cinematic framing, horizontal depth, side environmental context, and balanced widescreen elements."
        )
    elif ratio <= 0.5:
        orientation = "Ultra-Tall"
        guidance = (
            f"Target image dimensions: {width}x{height} (Aspect Ratio ~{ratio_str}, Ultra-Tall vertical). "
            f"Emphasize extreme vertical framing, tall architectural or natural structures, stacked vertical perspective, and high-to-low axis composition."
        )
    elif ratio < 0.92:
        orientation = "Portrait"
        guidance = (
            f"Target image dimensions: {width}x{height} (Aspect Ratio ~{ratio_str}, Portrait vertical). "
            f"Emphasize vertical composition, portrait or full-length subject framing, vertical lines, and focal depth along the vertical axis."
        )
    else:
        orientation = "Square"
        guidance = (
            f"Target image dimensions: {width}x{height} (Aspect Ratio ~{ratio_str}, Square). "
            f"Emphasize centered focal points, balanced framing, symmetrical elements, and compact spatial composition."
        )

    return {
        "active": True,
        "width": width,
        "height": height,
        "ratio": round(ratio, 3),
        "ratio_str": ratio_str,
        "orientation": orientation,
        "guidance": guidance,
    }


TEXT_ONLY_INSTRUCTION = (
    "NO IMAGE IS ATTACHED. The user text below is an idea to realize, not a picture to report on. "
    "Expand it into a generation prompt: keep every element the user named, and fill in only the "
    "concrete visual detail the idea implies — subject, setting, materials, light, framing. "
    "Never refer to \"the image\" or phrase anything as observed."
)

_DETAIL_HINTS = {
    "tiny": "Be extremely brief — 1-2 sentences.",
    "short": "Keep description short — 2-4 sentences.",
    "normal": "Write a balanced description.",
    "detailed": "Write a detailed description with specific observations.",
    "ultra": "Write an ultra-detailed technical description covering every visible element.",
}


def _language_hint(language: str) -> str:
    """The language rule, stated so a small model cannot read past it.

    "Answer in Russian." sat third among eight blocks of English prose, and on
    2026-07-29 a run over 132 models found 38 of them (29%) answering in
    English anyway — the smaller ones simply mirror the language they are
    written to in. Naming the script and covering the tag form closes the two
    ways the old wording was read as optional.
    """
    if language == "ru":
        return (
            "LANGUAGE: write the entire response in Russian, in Cyrillic script. "
            "This applies to every word, including comma-separated tags. "
            "Do not answer in English even though these instructions are in English."
        )
    return "LANGUAGE: write the entire response in English."


def _detail_hint(detail_level: str) -> str:
    return _DETAIL_HINTS.get(detail_level, _DETAIL_HINTS["normal"])


def _wants_tags(response_format: str) -> bool:
    return str(response_format or "").strip().lower() == TAGS_RESPONSE_FORMAT


class PromptGenerator:
    def __init__(self):
        self.style_manager = StyleManager()

    def build_system_prompt_bundle(
        self,
        agent_key: str = NONE_AGENT_KEY,
        detail_level: str = "normal",
        language: str = "ru",
        model_type: str = "Auto/None",
        width: int = 0,
        height: int = 0,
        focus_key: str = NONE_FOCUS_KEY,
        has_image: bool = True,
        response_format: str = "text",
        **style_kwargs,
    ) -> Tuple[str, str, str]:
        resolved_agent = resolve_agent_key(agent_key)
        agent_template = AGENTS.get(resolved_agent, NONE_AGENT_TEMPLATE)
        style_block = self.style_manager.build_style_block(**style_kwargs)
        language_hint = _language_hint(language)
        detail_hint = _detail_hint(detail_level)
        model_guidance = build_model_type_guidance(model_type)

        system_parts = [agent_template]
        if not has_image:
            system_parts.append(TEXT_ONLY_INSTRUCTION)
        system_parts.append(detail_hint)
        if model_guidance:
            system_parts.append(model_guidance)

        focus_block = get_focus_template(focus_key)
        if focus_block:
            system_parts.append(focus_block)

        aspect_info = compute_aspect_ratio_info(width, height)
        if aspect_info["active"]:
            system_parts.append(aspect_info["guidance"])

        if style_block:
            system_parts.append(f"Style overlay:\n{style_block}")

        # Last on purpose: the output shape has to win over any prose-shaped
        # wording carried by the agent template or the style overlay.
        if _wants_tags(response_format):
            system_parts.append(TAGS_OUTPUT_INSTRUCTION)

        # After the shape, because they answer different questions and the
        # language rule is the one models drop first. Third of eight blocks it
        # was ignored by 29% of them.
        system_parts.append(language_hint)

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
        language_hint = _language_hint(language)
        return agent_template, language_hint, _detail_hint(detail_level), build_model_type_guidance(model_type)

    def build_system_prompt_two_stage_bundle(
        self,
        agent_key: str = NONE_AGENT_KEY,
        detail_level: str = "normal",
        language: str = "ru",
        model_type: str = "Auto/None",
        width: int = 0,
        height: int = 0,
        focus_key: str = NONE_FOCUS_KEY,
        has_image: bool = True,
        response_format: str = "text",
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

        aspect_info = compute_aspect_ratio_info(width, height)
        focus_block = get_focus_template(focus_key)

        def _stage_parts() -> list:
            parts = [agent_template]
            # Stage 2 never sees the image either way — it restyles stage 1's
            # text — so the "no image attached" framing belongs to stage 1 only.
            parts.append(detail_hint)
            if model_guidance:
                parts.append(model_guidance)
            if focus_block:
                parts.append(focus_block)
            if aspect_info["active"]:
                parts.append(aspect_info["guidance"])
            return parts

        stage1_parts = _stage_parts()
        if not has_image:
            stage1_parts.insert(1, TEXT_ONLY_INSTRUCTION)
        # Both stages end on the language rule, for the same reason the
        # single-stage builder does: it is the instruction models drop first,
        # and stage 2 works from stage 1's text — English there spreads.
        stage1_parts.append(language_hint)
        stage1_prompt = "\n\n".join(stage1_parts)

        stage2_parts = _stage_parts()
        if style_block:
            stage2_parts.append(f"Style overlay:\n{style_block}")
        # Only stage 2 produces the answer the user keeps, so the tag-shape
        # override goes here — stage 1 stays prose for stage 2 to work from.
        if _wants_tags(response_format):
            stage2_parts.append(TAGS_OUTPUT_INSTRUCTION)
        stage2_parts.append(language_hint)
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
