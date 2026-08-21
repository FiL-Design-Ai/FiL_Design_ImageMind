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
    clamp_video_duration,
    get_focus_template,
    is_video_model_type,
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
    # Rewritten 2026-08-21 against Krea's own guidance and prompt-expansion
    # system prompt (github.com/krea-ai/krea-2, docs/), which supersedes the
    # shorter word budgets of the fal.ai community guide this profile used to
    # follow: long detailed prompts yield the best results. Four rules carry
    # most of the quality here and each fixes a measured failure: the medium
    # named in the opening words (a cartoon request comes back photoreal
    # otherwise), the absence ban (an image model cannot subtract), the
    # single-copy text rule (a mirrored second copy renders as scrambled
    # letters), and the concrete closing object (it gives the model somewhere
    # better to put the sentence it otherwise fills with emptiness).
    "Krea 2": (
        "Target generator: Krea 2. Write ONE flowing natural-language paragraph in "
        "ordinary sentences — plain prose, free of markdown, field labels, tag "
        "lists, weight syntax and any trailing dump of keywords. Your first words "
        "name the medium the idea asks for (a photograph, a 3D render, an oil "
        "painting, a watercolour, a pencil sketch, an illustration); when the idea "
        "names none, write it as a photograph. When the thing is meant to look "
        "unreal, say so in those same opening words (a stylised 3D cartoon "
        "character, a children's book illustration, an anime frame, a comic panel, "
        "a claymation figure) and give the proportions that carry the look — head "
        "size against the body, eye size and whether the eyes carry glossy "
        "highlights, features rounded and simplified rather than anatomical: left "
        "unstated, a cartoon request comes back photoreal. Then cover subject, "
        "scene, composition and mood, spending the room on what the light is DOING "
        "and what the surfaces are made of, in words that suit THIS idea — "
        "describe the light rather than giving it a proper name, and skip empty "
        "praise words like beautiful, premium, masterpiece or 8k. Keep faith with "
        "the idea: every subject, action, colour and spatial relationship in it "
        "survives, a requested colour mood shows in the words chosen for the light "
        "and the surfaces, and nothing extra is invented — a boat stays a boat "
        "rather than gaining broken oars and a torn sail. Krea 2 responds to "
        "detail, so aim for 120-200 words where the detail level leaves room, but "
        "spend them on light, texture, materials and the arrangement of things in "
        "the frame: stacked style adjectives muddy the output, especially if a "
        "style/moodboard reference is also in play. The official docs name "
        "subject, setting, lighting and mood as the details that sharpen results "
        "most. Put any text that must appear in the image in double quotes, and "
        "ask for it ONCE — a second copy sent to a reflection, a mirror, water or "
        "a second sign comes back as scrambled letters, so when the idea carries "
        "text, close on a surface that carries none. End the paragraph on one "
        "concrete thing physically in the picture, close enough to see its surface. "
        "Downstream, the krea-2 API's creativity parameter controls server-side "
        "prompt expansion — raw passes this text through unchanged, the default "
        "expander rewrites short prompts."
    ),
    "Ideogram 4": (
        "Target generator: Ideogram 4.0. Write a plain natural-language descriptive "
        "prompt — normal sentences, no JSON, no field labels, no markdown. Ideogram's "
        "own Magic Prompt feature (server-side) handles further enhancement on its "
        "end; do not try to build a structured caption object yourself. Keep it to "
        "about 150-160 words with the most important subject first — longer prompts "
        "lose accuracy. Put any exact on-image text in quotes, and express exclusions "
        "as their positive visual opposite: the v4 API has no negative-prompt input."
    ),
    # Rewritten 2026-08-05 after a re-read of MiniMax's official prompt guide
    # (platform.minimax.io/docs/guides/video-prompt): duration + aspect first,
    # explicit reference roles ("Image 1: ..."), concrete motion verbs, Sound:
    # clause in prose, edit rhythm named in words. The universal profile stays
    # timestamp-free because every non-MiniMax parser in this class reads free
    # text only. The four failure modes this rewrite targets: still-frame
    # prompts (motion must be the spine), collapsed structure (one paragraph,
    # no markup), generic sound (layered clause tied to what is on screen),
    # vague camera (shot size + angle + exactly one named move).
    "Video": (
        "Target generators: video generation models — MiniMax H2/H3, Wan 2.x, "
        "HunyuanVideo, LTX Video, Kling, Veo/Sora-class DiT video models. A video "
        "prompt is not a picture description — it is a shot unfolding in time, so "
        "MOTION is the spine of every sentence: name what moves, how fast, and in "
        "which direction, and what is different between the first and the last "
        "frame. When an image is wired, treat it as one frozen instant of the shot: "
        "read the physical evidence of motion in it (mid-step pose, fabric or hair "
        "in the air, blur, spray, settling dust, light direction) and describe the "
        "seconds around it — what is still happening and what happens next. Never "
        "report a still frame. Write ONE continuous natural-language paragraph in "
        "the present tense, 2-5 sentences, roughly 60-150 words, covering in order: "
        "(1) the subject and its motion, plus secondary motion — hair, fabric, "
        "dust, water, background parallax; (2) the scene and how the light changes "
        "during the shot (sun lowering, neon flickering, headlights sweeping past, "
        "fog drifting); (3) the camera — one shot size and angle (extreme close-up, "
        "close-up, medium, wide, establishing; eye level, low, high, Dutch, POV, "
        "aerial) plus exactly ONE camera move with character (slow dolly in, orbit, "
        "handheld follow, crane up, FPV push, rack focus): one move per shot is the "
        "rule, compound camera moves confuse every video model; if the shot is "
        "static, say 'locked-off static shot' outright — unstated, video models "
        "default to a slow push-in; (4) one style/treatment anchor ('35mm film "
        "grain, warm palette', 'clean digital commercial', 'handheld documentary', "
        "'cel animation'). If the idea unfolds in stages (a transformation, a story "
        "arc), keep the arc: describe the stages in order with first / then / "
        "finally, name what changes between them, and give each stage its own "
        "camera behavior — never flatten a sequence into one static portrait. State "
        "the requested duration ('over 10 seconds'). Add one concrete sound design "
        "clause tied to what is on screen — an ambience bed, one or two foley "
        "sounds from the visible action, and the music mood ('distant traffic and "
        "rain on glass, cloth rustling, low warm synth pad'): models with native "
        "audio invent a random ambience when sound goes undescribed. When images "
        "are wired, say what each reference controls ('Image 1 sets the scene and "
        "lighting; Image 2 carries the character's identity'). No timestamps, no "
        "shot lists, no [bracket] tags, no markdown, no field labels, no "
        "commentary — other vendors' parsers read free text only and may render "
        "stray markup on screen. Express all constraints positively — most video "
        "models have no negative-prompt mechanism. Put any text that must appear "
        "on screen in quotes and state that only that text appears, that this "
        "is the only lettering in the shot and that the frame stays clear of "
        "burned-in subtitles."
    ),
    # H3-specific facts re-verified 2026-08-05 (platform.minimax.io/docs/guides/
    # video-generation): the API accepts 4-15 whole-second durations, T2V needs
    # an explicit aspect (no 'adaptive'), camera instructions can be inline tags
    # ([pan], [zoom], [static]) after key descriptions, and reference media get
    # explicit roles (first_frame / last_frame / reference_image /
    # reference_video / reference_audio). The beat structure itself mirrors the
    # H3-Context-IR enrichment shape this pack verified 2026-08-04.
    "MiniMax H3": (
        "Target generator: MiniMax H3 — multimodal DiT with native stereo audio. "
        "Write a timeline shot-block prompt. The first line states duration and "
        "framing — '10s, 16:9.'; duration is a whole number of seconds from 4 to "
        "15 (the API range), use '9:16 vertical' for portrait scenes. If images "
        "are wired, give each a job on that first line ('Image 1: the character's "
        "identity; Image 2: the location'). Then 2-4 time-coded beats like [0-3s], "
        "[3-7s], [7-10s] that cover the whole duration in order — no gaps, no "
        "overlap. Every beat names one thing that changes or moves, with concrete "
        "motion detail (speed, direction, secondary motion: fabric, hair, sparks, "
        "spray) — H3 loops motion when a beat runs out of instructions, so a beat "
        "never says 'continues' or 'same as before'; if truly nothing changes, "
        "describe what holds the frame alive (breathing, flicker, drifting smoke) "
        "or merge the beat — plus the camera behavior for that beat (slow dolly "
        "in, 180° orbit, handheld follow, pull back, locked-off): one camera move "
        "per beat, optionally followed by H3's own inline tags [pan], [zoom], "
        "[static]. Name the subject with the same words in every beat so its "
        "identity holds across cuts. One short style/tone anchor is welcome "
        "('premium commercial look', 'ReelShort drama feel', '3A-game "
        "photorealism'). If the idea is one unbroken moment, a single beat "
        "covering the full duration is right — do not pad beats. End with one "
        "'Sound:' clause layered from what is on screen — ambience bed, foley from "
        "the visible actions, music mood; let the sound evolve with the beats. H3 "
        "generates native stereo audio and invents a random ambience when sound "
        "goes undescribed. Put on-screen text in quotes and say only that text "
        "appears. Express constraints positively — the API has no negative-prompt "
        "input. No markdown headers, no bullets, no commentary."
    ),
    "Auto/None": "",
}


# The absence ban, shared by every profile whose target generator has no
# negative-prompt field. "Express constraints positively" leaves the model free
# to write "the street holds no cars", and an image model cannot subtract: a
# sentence about what is gone only adds the thing it names. Banning the three
# words outright is what stopped it (measured while building the Krea 2
# formula; banning phrasings by example only produced new phrasings), and the
# closing-object rule in the Krea 2 profile is its other half — it gives the
# model a better use for the slot it kept filling with emptiness.
_NO_ABSENCE_CLAUSE = (
    "NEVER NAME WHAT IS ABSENT: inside the prompt itself the words 'no', 'not' "
    "and 'without' must never appear, and nothing may be called missing, absent, "
    "empty or unseen — an image model cannot subtract, so naming an absent thing "
    "tends to add it. Show emptiness through the bare things that ARE there: the "
    "wide stretch of wet asphalt, the shuttered windows, the still air, the "
    "single lit window far down the street."
)

# Appended here rather than written into each string above so the rule has one
# source of truth and cannot drift between profiles as they are edited.
for _model_type, _guidance in MODEL_TYPE_GUIDANCE.items():
    if _guidance and model_uses_positive_constraints(_model_type):
        MODEL_TYPE_GUIDANCE[_model_type] = f"{_guidance} {_NO_ABSENCE_CLAUSE}"


def build_model_type_guidance(model_type: str) -> str:
    return MODEL_TYPE_GUIDANCE.get(model_type, "")


# Every profile above is a writing template with slots — camera, lens, lighting,
# style, mood — and a template asks to be filled. With `Auto/None` the model is
# only asked to describe what it sees, so it stays on the frame; the moment a
# target generator is picked, slots the image cannot answer ("shot on a 85mm at
# f/1.4", "golden hour") get plausible values invented for them, and the word
# caps then push out the details that were actually observed. This block is what
# says the frame outranks the template. It is added only when an image is wired:
# without one there is nothing to be faithful to, and text-only runs are meant
# to invent the whole scene.
OBSERVED_ONLY_CLAUSE = (
    "GROUNDING: the source in front of you — the attached image, or the description "
    "you were handed to rewrite — is the only source of facts, and it outranks the "
    "template above. Fill a slot of that template only when the source actually "
    "answers it: name the camera, lens, lighting setup, materials, time of day, "
    "location or mood only where they can be read from the source, and skip the slot "
    "rather than invent a plausible value for it. Add no object, person, action or "
    "on-image text that is not there, and do not upgrade what is there into "
    "something more photogenic."
)

# Video profiles ask for the seconds around the frame on purpose — a shot, not a
# still — so a blanket "describe only what is in the frame" would contradict
# their own contract. Here the rule binds WHAT is in the shot; motion, camera and
# sound stay extendable, but along visible evidence rather than free invention.
OBSERVED_ONLY_CLAUSE_VIDEO = (
    "GROUNDING: the source in front of you — the attached image, or the description "
    "you were handed to rewrite — is the only source of facts about WHAT is in the "
    "shot: subject, wardrobe, objects, materials, setting and on-screen text all come "
    "from it, and nothing may be added to them. Motion, camera and sound are the one "
    "extension allowed, and only along physical evidence actually visible in the "
    "source (a mid-step pose, fabric or hair in the air, blur, spray, drifting smoke, "
    "the direction of the light). Do not invent a location, a character, a prop or a "
    "story beat the source does not show."
)


def build_observed_only_clause(model_type: str, has_image: bool = True) -> str:
    """The "frame beats template" rule, or "" when it does not apply."""
    if not has_image or not build_model_type_guidance(model_type):
        return ""
    return OBSERVED_ONLY_CLAUSE_VIDEO if is_video_model_type(model_type) else OBSERVED_ONLY_CLAUSE


def build_shot_parameters_block(
    model_type: str,
    video_duration: Any = 0,
    video_aspect: str = "Auto",
    video_sound: str = "Auto",
    video_camera: str = "Auto",
) -> str:
    """User-fixed shot facts from the video Output widgets.

    Appended right after the model guidance so it reads later than — and
    therefore overrides — the guidance's defaults. Returns "" when the target
    is not a video profile or every parameter is Auto: an all-Auto system
    prompt must stay byte-identical to the pre-widget output.
    """
    if not is_video_model_type(model_type):
        return ""
    is_h3 = model_type == "MiniMax H3"
    lines: list = []

    duration = clamp_video_duration(model_type, video_duration)
    if duration > 0:
        if is_h3:
            lines.append(
                f"- Duration: exactly {duration} seconds — the first line states "
                f"'{duration}s' and the time-coded beats total this duration."
            )
        else:
            lines.append(
                f"- Duration: state the requested duration explicitly — over {duration} seconds."
            )

    aspect = str(video_aspect or "Auto").strip()
    if aspect and aspect.lower() != "auto":
        if is_h3:
            lines.append(f"- Aspect ratio: {aspect} — state it in the framing header line.")
        else:
            lines.append(f"- Aspect ratio: frame the shot in {aspect}.")

    sound = str(video_sound or "Auto").strip().lower()
    if sound == "off":
        lines.append("- Sound: silent clip — do not write any sound design clause.")
    elif sound == "layered":
        lines.append(
            "- Sound: layered sound design is mandatory — the sound clause must carry "
            "an ambience bed, foley from the visible actions, and the music mood."
        )

    camera = str(video_camera or "Auto").strip()
    if camera and camera.lower() != "auto":
        if camera.lower() == "locked-off":
            lines.append(
                "- Camera: the user wants a locked-off static shot — keep the camera still."
            )
        else:
            lines.append(
                f"- Camera: {camera.lower()} is the user's preferred move — build the shot "
                f"around it, adapting per story stage only if the arc needs it."
            )

    if not lines:
        return ""
    return "SHOT PARAMETERS (fixed by the user — these override your defaults):\n" + "\n".join(lines)


def negative_to_positive_clause(negative_prompt: str, model_type: str) -> str:
    """Build the negative-prompt clause appropriate for ``model_type``.

    Positive-constraint models (FLUX, Z-Image Turbo, Krea 2, Ideogram 4,
    Video) are told to avoid the listed elements by describing what IS present
    instead — Ideogram 4's v4 API exposes no negative_prompt field (v3 had
    one), and its prompting guide recommends positive opposites. Standard
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
        video_duration: Any = 0,
        video_aspect: str = "Auto",
        video_sound: str = "Auto",
        video_camera: str = "Auto",
        **style_kwargs,
    ) -> Tuple[str, str, str, str]:
        resolved_agent = resolve_agent_key(agent_key)
        agent_template = AGENTS.get(resolved_agent, NONE_AGENT_TEMPLATE)
        style_block = self.style_manager.build_style_block(**style_kwargs)
        language_hint = _language_hint(language)
        detail_hint = _detail_hint(detail_level)
        model_guidance = build_model_type_guidance(model_type)
        shot_parameters = build_shot_parameters_block(
            model_type, video_duration, video_aspect, video_sound, video_camera
        )

        system_parts = [agent_template]
        if not has_image:
            system_parts.append(TEXT_ONLY_INSTRUCTION)
        system_parts.append(detail_hint)
        if model_guidance:
            system_parts.append(model_guidance)
            # Right after the template it constrains, and before the user-fixed
            # shot facts below — those are the user's own call and still win.
            observed_only = build_observed_only_clause(model_type, has_image)
            if observed_only:
                system_parts.append(observed_only)
        # After the guidance on purpose: user-fixed shot facts override the
        # guidance's defaults, so they must read later than them.
        if shot_parameters:
            system_parts.append(shot_parameters)

        focus_block = get_focus_template(focus_key)
        if focus_block:
            system_parts.append(focus_block)

        # A locked video aspect widget is the user's explicit framing call —
        # it wins over whatever ratio the wired width/height sockets derive.
        # The sockets still apply when the widget is Auto (or the target is an
        # image model), so nothing changes for existing image workflows.
        video_aspect_locked = (
            is_video_model_type(model_type)
            and str(video_aspect or "Auto").strip().lower() != "auto"
        )
        aspect_info = compute_aspect_ratio_info(width, height)
        if aspect_info["active"] and not video_aspect_locked:
            system_parts.append(aspect_info["guidance"])

        if style_block:
            system_parts.append(f"Style overlay:\n{style_block}")

        # Last on purpose: the output shape has to win over any prose-shaped
        # wording carried by the agent template or the style overlay.
        if _wants_tags(response_format):
            system_parts.append(TAGS_OUTPUT_INSTRUCTION)

        # The language rule is deliberately NOT appended here. The node stacks
        # style overlays (enforcement / NSFW / custom style) on top of this
        # bundle, and the language rule must be the very last block the model
        # reads — it is the instruction models drop first (third of eight
        # blocks it was ignored by 29% of them). Callers append the returned
        # `language_hint` after their own overlays.
        system_prompt = "\n\n".join(system_parts)
        return system_prompt, agent_template, style_block, language_hint

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
        video_duration: Any = 0,
        video_aspect: str = "Auto",
        video_sound: str = "Auto",
        video_camera: str = "Auto",
        **style_kwargs,
    ) -> Dict[str, Any]:
        """Stage 1 = raw description (no style). Stage 2 = styled reformat.

        Stage 2 consumes the locked stage-1 result as source truth, so it does
        NOT re-process the image — it only restyles the stage-1 description.
        """
        agent_template, language_hint, detail_hint, model_guidance = self._build_base_sections(
            agent_key, detail_level, language, model_type
        )
        style_block = self.style_manager.build_style_block(**style_kwargs)
        observed_only = build_observed_only_clause(model_type, has_image)
        shot_parameters = build_shot_parameters_block(
            model_type, video_duration, video_aspect, video_sound, video_camera
        )

        aspect_info = compute_aspect_ratio_info(width, height)
        focus_block = get_focus_template(focus_key)
        # Same priority as the single-stage builder: a locked video aspect
        # widget outranks the ratio derived from wired width/height sockets.
        video_aspect_locked = (
            is_video_model_type(model_type)
            and str(video_aspect or "Auto").strip().lower() != "auto"
        )

        def _stage_parts() -> list:
            parts = [agent_template]
            # Stage 2 never sees the image either way — it restyles stage 1's
            # text — so the "no image attached" framing belongs to stage 1 only.
            parts.append(detail_hint)
            if model_guidance:
                parts.append(model_guidance)
                # Both stages carry it: stage 2 never sees the image, but it
                # rewrites stage 1's text under the same template and could
                # invent the camera/lighting slots there just as easily.
                if observed_only:
                    parts.append(observed_only)
            # Same override order as the single-stage builder: user-fixed shot
            # facts read after the guidance defaults in both stages.
            if shot_parameters:
                parts.append(shot_parameters)
            if focus_block:
                parts.append(focus_block)
            if aspect_info["active"] and not video_aspect_locked:
                parts.append(aspect_info["guidance"])
            return parts

        stage1_parts = _stage_parts()
        if not has_image:
            stage1_parts.insert(1, TEXT_ONLY_INSTRUCTION)
        stage1_prompt = "\n\n".join(stage1_parts)

        stage2_parts = _stage_parts()
        if style_block:
            stage2_parts.append(f"Style overlay:\n{style_block}")
        # Only stage 2 produces the answer the user keeps, so the tag-shape
        # override goes here — stage 1 stays prose for stage 2 to work from.
        if _wants_tags(response_format):
            stage2_parts.append(TAGS_OUTPUT_INSTRUCTION)
        stage2_prompt = "\n\n".join(stage2_parts)

        # The language rule is returned, not embedded: the node stacks style
        # overlays on top of stage 2 and must append the rule after them — it
        # is the instruction models drop first, and stage 2 works from stage
        # 1's text, so English left in stage 2 spreads into the final answer.
        return {
            "stage1": {"prompt": stage1_prompt},
            "stage2": {"prompt": stage2_prompt},
            "style_block": style_block,
            "language_hint": language_hint,
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
