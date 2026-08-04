"""Model-aware prompt post-conversion adapters.

Pure functions that transform raw LLM output into the format a target image
generation model expects. Every converter returns a ``(text, meta)`` tuple
where ``meta`` is a plain dict describing what conversion was applied — this
replaces the backup's side-channel ``get_last_convert_meta()`` pattern.

Pipeline layering (clean separation):

* ``adapt_ideogram4_caption`` — validates / repairs an Ideogram 4 JSON caption.
* ``format_for_flux_json`` — extracts a 7-field FLUX JSON schema from prose.
* ``convert_to_dit_format`` — the text-mode DIT restructure + word truncation.
* ``build_response_format_instruction`` — appends JSON-shape guidance to the
  user prompt so the LLM emits the right structure in the first place.
* ``post_convert_prompt`` — the single entry point the node calls; dispatches
  to the right adapter based on ``model_type`` and ``response_format``.
"""

from __future__ import annotations

import json
import logging
import re
from typing import Any, Dict, List, Optional, Tuple

from .data import (
    get_detail_info,
    get_effective_response_format,
    get_model_prompt_rule,
    model_uses_flux_json_schema,
    model_uses_ideogram_json_schema,
)

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.PromptAdapters")

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

# Canonical top-level key order enforced on Ideogram 4 captions.
IDEOGRAM_TOP_LEVEL_KEYS: Tuple[str, ...] = (
    "high_level_description",
    "style_description",
    "compositional_deconstruction",
)

_FENCED_JSON_RE = re.compile(r"^\s*```(?:json)?\s*(.*?)\s*```\s*$", re.DOTALL)
_HEX_COLOR_RE = re.compile(r"^#[0-9A-Fa-f]{6}$")
# Double- or single-quoted literal spans in user/source text.
_QUOTED_TEXT_RE = re.compile(r'"((?:\\.|[^"\\\r\n])+)"|\'((?:\\.|[^\'\\\r\n])+)\'')

# Restructure detection patterns.
_MD_BOLD_RE = re.compile(r"\*\*[^*]+\*\*")
_BULLET_RE = re.compile(r"(?mi)^\s*[-*]\s+")
_NUMBERED_RE = re.compile(r"(?mi)^\s*\d+\.\s+")
_FIELD_LABEL_RE = re.compile(
    r"(?i)\b(subject|pose|anatomy|lighting|materials|expression|context|"
    r"sensory grounding|main subject|composition|environment|style)\s*:"
)
_BLANK_LINE_RE = re.compile(r"\n\s*\n")
_SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")
_META_PHRASES_RE = re.compile(r"(?i)\bthis image\b|\bthe scene\b|\bthe composition\b")

_FLUX_CAMERA_PATTERNS = [
    (re.compile(r"(\d+)\s*mm"), "mm"),
    (re.compile(r"f/(\d+\.?\d*)"), "f/"),
    (re.compile(r"(eye level|low angle|high angle|bird's-eye|overhead)", re.IGNORECASE), "angle"),
]
_FLUX_COLOR_HEX_RE = re.compile(r"#([0-9A-Fa-f]{6})")
_FLUX_COLOR_WORDS_RE = re.compile(
    r"\b(red|blue|green|yellow|orange|purple|pink|black|white|gray|silver|gold)\b",
    re.IGNORECASE,
)
_FLUX_LIGHTING_HINTS = ("light", "lighting", "illumin", "shadow", "sun", "led", "lamp")
_FLUX_MOOD_HINTS = ("mood", "atmosphere", "tone", "feeling", "emotion", "vibe")
_FLUX_STYLE_HINTS = ("style", "aesthetic", "genre", "photography", "cinematic")


# ---------------------------------------------------------------------------
# Small text helpers
# ---------------------------------------------------------------------------


def _clean_text(value: Any) -> str:
    return str(value or "").strip()


def _truncate_words(text: str, max_words: Optional[int]) -> str:
    text = _clean_text(text)
    if not max_words or max_words <= 0:
        return text
    words = text.split()
    if len(words) <= max_words:
        return text
    truncated = " ".join(words[:max_words])
    return truncated.rstrip(" ,.;:") + ("..." if truncated and truncated[-1] not in ".!?" else "")


def _extract_json_object(value: str) -> Optional[Dict[str, Any]]:
    """Pull the first JSON object out of a possibly fenced / prose-wrapped string."""
    text = _clean_text(value)
    if not text:
        return None
    fenced = _FENCED_JSON_RE.match(text)
    if fenced:
        text = fenced.group(1)
    start = text.find("{")
    if start == -1:
        return None
    try:
        parsed, _end = json.JSONDecoder().raw_decode(text[start:])
    except json.JSONDecodeError:
        return None
    if not isinstance(parsed, dict):
        return None
    return parsed


# ---------------------------------------------------------------------------
# Ideogram 4 caption normalization
# ---------------------------------------------------------------------------


def _normalize_bbox(value: Any) -> Optional[List[int]]:
    """Normalize an element bbox to ``[y1, x1, y2, x2]`` ints in [0, 1000].

    Format: [y1, x1, y2, x2] where:
    - All values must be integers in [0, 1000]
    - y1 < y2 (top < bottom)
    - x1 < x2 (left < right)
    - Minimum size is 1x1 pixel
    """
    if not isinstance(value, (list, tuple)) or len(value) != 4:
        return None
    try:
        y1, x1, y2, x2 = (int(round(float(item))) for item in value)
    except (TypeError, ValueError):
        return None
    # Range check: all values must be in [0, 1000]
    if any(v < 0 or v > 1000 for v in (y1, x1, y2, x2)):
        return None
    # Validity check: y1 < y2 and x1 < x2 (at least 1x1 for single-pixel regions)
    if y1 >= y2 or x1 >= x2:
        return None
    return [y1, x1, y2, x2]


def _normalize_palette(value: Any, limit: int) -> List[str]:
    """Normalize a palette to a deduped list of uppercase ``#RRGGBB`` colors."""
    if not isinstance(value, list):
        return []
    seen: set = set()
    result: List[str] = []
    for item in value:
        candidate = str(item or "").strip().upper()
        if not _HEX_COLOR_RE.match(candidate):
            continue
        key = candidate.lower()
        if key in seen:
            continue
        seen.add(key)
        result.append(candidate)
        if len(result) >= limit:
            break
    return result


def _normalize_element(value: Any) -> Optional[Dict[str, Any]]:
    """Normalize a single compositional element."""
    if not isinstance(value, dict):
        return None
    element_type = str(value.get("type", "")).strip().lower()
    if element_type not in ("obj", "text"):
        return None
    desc = _truncate_words(value.get("desc") or value.get("description"), 60)
    text_value = ""
    if element_type == "text":
        text_value = _clean_text(value.get("text"))
        if not text_value:
            return None
        if not desc:
            desc = "Visible text element."
    elif not desc:
        desc = "Primary visible subject or object."
    element: Dict[str, Any] = {"type": element_type}
    bbox = _normalize_bbox(value.get("bbox"))
    if bbox:
        element["bbox"] = bbox
    if element_type == "text":
        element["text"] = text_value
    element["desc"] = desc
    palette = _normalize_palette(value.get("color_palette"), 5)
    if palette:
        element["color_palette"] = palette
    return element


def _quoted_literals(source_text: str) -> List[str]:
    """Extract double/single-quoted literal spans from user source text."""
    literals: List[str] = []
    seen: set = set()
    for match in _QUOTED_TEXT_RE.finditer(source_text or ""):
        double_quoted, single_quoted = match.group(1), match.group(2)
        raw = double_quoted if double_quoted is not None else single_quoted
        if raw is None:
            continue
        if double_quoted is not None:
            try:
                literal = json.loads(f'"{double_quoted}"')
            except json.JSONDecodeError:
                literal = double_quoted
        else:
            literal = single_quoted.replace("\\'", "'").replace("\\\\", "\\")
        literal = _clean_text(literal)
        if not literal or literal.lower() in seen:
            continue
        seen.add(literal.lower())
        literals.append(literal)
    return literals


def _normalize_elements(
    values: Any, *, source_text: str, fallback_desc: str
) -> List[Dict[str, Any]]:
    """Normalize a list of elements, injecting any user quoted literals."""
    normalized: List[Dict[str, Any]] = []
    if isinstance(values, list):
        for value in values:
            element = _normalize_element(value)
            if element:
                normalized.append(element)
    existing_text = {item.get("text", "").lower() for item in normalized if item.get("type") == "text"}
    for literal in _quoted_literals(source_text):
        if literal.lower() in existing_text:
            continue
        normalized.append(
            {
                "type": "text",
                "text": literal,
                "desc": "User-specified literal text, preserved verbatim in the composition.",
            }
        )
    if not normalized:
        normalized.append(
            {"type": "obj", "desc": _truncate_words(fallback_desc, 60) or "Primary visible subject."}
        )
    return normalized


def _is_photo_style(style_type: str) -> bool:
    return str(style_type or "").strip().lower() in ("photo", "photo_style")


def _normalize_style(
    value: Any, *, style_text: str, style_type: str
) -> Dict[str, Any]:
    style = value if isinstance(value, dict) else {}
    is_photo = _is_photo_style(style_type)
    aesthetics = style.get("aesthetics") or style_text or "coherent, intentional"
    lighting = style.get("lighting") or "scene-appropriate lighting"
    result: Dict[str, Any] = {"aesthetics": aesthetics, "lighting": lighting}
    if is_photo:
        result["photo"] = style.get("photo") or "natural perspective, realistic optics"
        result["medium"] = "photograph"
    else:
        result["medium"] = style.get("medium") or "illustration"
        result["art_style"] = style_text or "coherent visual style"
    palette = _normalize_palette(style.get("color_palette"), 16)
    if palette:
        result["color_palette"] = palette
    return result


def _caption_is_canonical(parsed: Dict[str, Any]) -> bool:
    """Return True only if ``parsed`` already matches the canonical schema exactly."""
    if tuple(parsed.keys()) != IDEOGRAM_TOP_LEVEL_KEYS:
        return False
    high = parsed.get("high_level_description")
    if not isinstance(high, str) or not high.strip():
        return False
    style = parsed.get("style_description")
    if not isinstance(style, dict):
        return False
    composition = parsed.get("compositional_deconstruction")
    if not isinstance(composition, dict):
        return False
    if tuple(composition.keys()) != ("background", "elements"):
        return False
    if not isinstance(composition.get("background"), str):
        return False
    if not isinstance(composition.get("elements"), list):
        return False
    if not all(isinstance(item, dict) and _normalize_element(item) == item for item in composition["elements"]):
        return False
    photo_keys = {"aesthetics", "lighting", "photo", "medium"}
    art_keys = {"aesthetics", "lighting", "medium", "art_style"}
    style_keys = set(style.keys())
    valid = (
        style_keys == photo_keys
        or style_keys == photo_keys | {"color_palette"}
        or style_keys == art_keys
        or style_keys == art_keys | {"color_palette"}
    )
    return valid


def adapt_ideogram4_caption(
    value: Any,
    *,
    style_text: str = "",
    style_type: str = "",
    source_text: str = "",
) -> Tuple[str, Dict[str, Any]]:
    """Validate / repair an Ideogram 4 JSON caption.

    Always returns a minified JSON string in canonical key order plus a
    metadata dict describing whether the input was already canonical or had
    to be repaired.
    """
    raw_text = _clean_text(value)
    parsed = _extract_json_object(raw_text)
    original_valid = _caption_is_canonical(parsed) if parsed else False
    source = parsed or {}

    # Repair source: pick the most informative available description.
    composition = source.get("compositional_deconstruction")
    composition = composition if isinstance(composition, dict) else {}
    repair_source = (
        source.get("high_level_description")
        or source.get("prompt")
        or source_text
        or composition.get("background")
        or source.get("background")
    )
    if not repair_source and isinstance(source.get("elements"), list):
        for element in source["elements"]:
            if isinstance(element, dict):
                repair_source = element.get("desc") or element.get("description")
                if repair_source:
                    break
    if not repair_source:
        repair_source = raw_text if parsed is None else ""
    high_level = _truncate_words(_clean_text(repair_source), 50)
    if not high_level:
        # Last-resort: a placeholder keeps the caption valid rather than raising.
        high_level = "A detailed scene as described by the source prompt."

    style_description = _normalize_style(
        source.get("style_description"), style_text=style_text, style_type=style_type
    )
    background = _clean_text(composition.get("background")) or (
        "Environment and spatial context consistent with the high-level description."
    )
    # For quoted-literal extraction: prefer source_text (LLM output), skip raw JSON.
    elements_source = source_text or ("" if raw_text.strip().startswith(("{", "[")) else raw_text)
    elements = _normalize_elements(
        composition.get("elements"), source_text=elements_source, fallback_desc=high_level
    )

    caption = {
        "high_level_description": high_level,
        "style_description": style_description,
        "compositional_deconstruction": {"background": background, "elements": elements},
    }
    repaired = (not original_valid) or (parsed != caption)
    output = json.dumps(caption, ensure_ascii=False, separators=(",", ":"))
    meta = {
        "target_prompt_format": "ideogram4_json",
        "effective_response_format": "json",
        "schema_valid": original_valid,
        "schema_repaired": repaired,
        "element_count": len(elements),
        "text_element_count": sum(1 for item in elements if item.get("type") == "text"),
    }
    return output, meta


# ---------------------------------------------------------------------------
# FLUX JSON schema
# ---------------------------------------------------------------------------


def format_for_flux_json(description: str) -> Dict[str, Any]:
    """Extract a 7-field FLUX JSON schema from prose.

    Improvement over the backup: ``color_palette`` preserves insertion order
    via ``dict.fromkeys`` (the backup used a ``set`` which was non-deterministic)
    and hex colors keep their leading ``#`` for readability.
    """
    result: Dict[str, Any] = {
        "scene": "",
        "subjects": [],
        "style": "",
        "color_palette": [],
        "lighting": "",
        "mood": "",
        "camera": {"angle": "", "lens": "", "f_number": ""},
    }
    text = _clean_text(description)
    if not text:
        return result
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not lines:
        return result

    result["scene"] = lines[0][:200]

    for line in lines:
        for pattern, kind in _FLUX_CAMERA_PATTERNS:
            if result["camera"]["angle"] and result["camera"]["lens"] and result["camera"]["f_number"]:
                break
            match = pattern.search(line)
            if not match:
                continue
            if kind == "mm" and not result["camera"]["lens"]:
                result["camera"]["lens"] = match.group(0)
            elif kind == "f/" and not result["camera"]["f_number"]:
                result["camera"]["f_number"] = match.group(0)
            elif kind == "angle" and not result["camera"]["angle"]:
                result["camera"]["angle"] = match.group(1)

        # Camera cues may come from any line — a lens mention lives inside the
        # scene sentence. The scene line itself must not be copied wholesale
        # into the other fields: for single-paragraph prose it is every line,
        # and the schema would fill with truncated repeats of the same text.
        if line == lines[0]:
            continue
        lower = line.lower()
        if not result["lighting"] and any(hint in lower for hint in _FLUX_LIGHTING_HINTS):
            result["lighting"] = line[:150]
        if not result["mood"] and any(hint in lower for hint in _FLUX_MOOD_HINTS):
            result["mood"] = line[:100]
        if not result["style"] and any(hint in lower for hint in _FLUX_STYLE_HINTS):
            result["style"] = line[:200]

    # color_palette: deterministic order, deduped, hex keeps leading '#'.
    palette: List[str] = []
    seen: set = set()
    for match in _FLUX_COLOR_HEX_RE.finditer(text):
        hex_value = f"#{match.group(1).upper()}"
        if hex_value.lower() not in seen:
            seen.add(hex_value.lower())
            palette.append(hex_value)
    for match in _FLUX_COLOR_WORDS_RE.finditer(text):
        word = match.group(1).lower()
        if word not in seen:
            seen.add(word)
            palette.append(word)
    result["color_palette"] = palette[:5]
    return result


# ---------------------------------------------------------------------------
# DIT text restructure (Z-Image Turbo, FLUX text-mode, QWEN, SDXL)
# ---------------------------------------------------------------------------


def _normalize_prompt_ready_text(text: str, max_words: Optional[int]) -> str:
    text = _clean_text(text)
    if not text:
        return text
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"__([^_]+)__", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    return _truncate_words(text, max_words)


def text_needs_dit_restructure(text: str, model_type: str, max_words: Optional[int]) -> bool:
    """Detect whether ``text`` needs restructuring into model-specific prose."""
    if not _clean_text(text):
        return False
    if max_words and max_words > 0:
        if len(text.split()) > max_words:
            return True
    if _MD_BOLD_RE.search(text) or _BULLET_RE.search(text) or _NUMBERED_RE.search(text):
        return True
    if _FIELD_LABEL_RE.search(text):
        return True
    if _BLANK_LINE_RE.search(text):
        return True
    sentences = [s for s in _SENTENCE_SPLIT_RE.split(text) if s.strip()]
    if len(sentences) > 6:
        return True
    if any(len(s.split()) > 45 for s in sentences):
        return True
    if _META_PHRASES_RE.search(text):
        return True
    if model_type == "SDXL" and text.count(",") < 5:
        return True
    return False


def _extract_prompt_components(text: str) -> Dict[str, str]:
    """Bucket keywords from text into scene/subject/action/etc. slots."""
    buckets: Dict[str, List[str]] = {
        "scene": [],
        "subject": [],
        "action": [],
        "composition": [],
        "details": [],
        "focal": [],
        "environment": [],
        "lighting": [],
        "style": [],
        "quality": [],
        "mood": [],
    }
    keywords = {
        "scene": ("scene", "setting", "location", "backdrop"),
        "subject": ("subject", "woman", "man", "person", "figure", "character", "girl", "boy"),
        "action": ("action", "posing", "standing", "sitting", "walking", "running", "holding"),
        "composition": ("composition", "framed", "centered", "angle", "symmetry", "depth"),
        "details": ("detail", "texture", "material", "fabric", "intricate"),
        "focal": ("focal", "anchor", "center", "focus point"),
        "environment": ("environment", "background", "surroundings", "atmosphere"),
        "lighting": ("lighting", "light", "shadow", "illuminated", "backlit"),
        "style": ("style", "cinematic", "photographic", "aesthetic", "genre"),
        "quality": ("quality", "8k", "4k", "highly detailed", "sharp focus", "masterpiece"),
        "mood": ("mood", "emotion", "feeling", "tone", "vibe"),
    }
    # Split into comma segments and bucket each.
    for segment in re.split(r"[,\n]+", text):
        seg = segment.strip()
        if not seg:
            continue
        seg_lower = seg.lower()
        placed = False
        for bucket, hints in keywords.items():
            if any(hint in seg_lower for hint in hints):
                buckets[bucket].append(seg)
                placed = True
                break
        if not placed:
            buckets["details"].append(seg)
    # Dedup preserving order.
    return {key: list(dict.fromkeys(values)) for key, values in buckets.items() if values}


def _render_prompt_components(components: Dict[str, List[str]], model_type: str) -> str:
    """Render bucketed components into model-specific joined prose."""
    scene_mood = ". ".join((components.get("scene", []) + components.get("mood", []))) or ""
    subject_action = ", ".join((components.get("subject", []) + components.get("action", []))) or ""
    composition = ", ".join(components.get("composition", [])) or ""
    details = ", ".join(components.get("details", [])) or ""
    focal = ", ".join(components.get("focal", [])) or ""
    environment = ", ".join(components.get("environment", [])) or ""
    lighting = ", ".join(components.get("lighting", [])) or ""
    style = ", ".join(components.get("style", [])) or ""
    quality = ", ".join(components.get("quality", [])) or ""

    if model_type == "FLUX":
        parts = [p for p in (scene_mood, subject_action, composition, details, focal, environment) if p]
        styled = ". ".join(filter(None, (". ".join(parts), " ".join(filter(None, (style, quality))))))
        return styled.strip()
    if model_type == "QWEN":
        labeled = []
        if scene_mood:
            labeled.append(f"Scene type: {scene_mood}")
        if subject_action:
            labeled.append(f"Main subject: {subject_action}")
        if composition:
            labeled.append(f"Geometry / Composition: {composition}")
        if details:
            labeled.append(f"Details: {details}")
        if focal:
            labeled.append(f"Focal element: {focal}")
        if environment:
            labeled.append(f"Environment: {environment}")
        if lighting:
            labeled.append(f"Lighting and color: {lighting}")
        if style:
            labeled.append(f"Style: {style}")
        return ". ".join(labeled)
    if model_type in ("SDXL", "Ideogram 4"):
        # SDXL (unlike SD1.5) reads best as full natural-language sentences,
        # not comma-separated label:value tags — official guidance is explicit
        # that tag-style prompts underperform on SDXL. Ideogram 4 also expects
        # natural-language prose without comma-lists or field labels.
        lead = ", ".join(filter(None, (subject_action, composition, details, focal)))
        if scene_mood:
            lead = f"{lead} in {scene_mood}" if lead else scene_mood
        sentences = [s for s in (lead, environment, lighting) if s]
        prose = ". ".join(sentences)
        tail = ", ".join(filter(None, (style, quality)))
        if tail:
            prose = f"{prose}, {tail}" if prose else tail
        return prose.strip()
    # Z-Image Turbo, Krea 2, default: comma-joined.
    parts = [
        p for p in (scene_mood, subject_action, composition, details, focal, environment, lighting, style)
    ]
    return ", ".join(parts)


def _style_cue_guard(
    candidate: str, source_text: str, *, style_text: str, style_key: str, style_enforcer: Any
) -> Tuple[bool, Dict[str, Any]]:
    """Return (survived, meta). If no guard active, survived is True."""
    meta: Dict[str, Any] = {"style_cue_guard": False, "style_cue_survival": "n/a"}
    if style_enforcer is None:
        return True, meta
    try:
        contract = style_enforcer.resolve_style_contract(style_text, style_key)
        required_cues = list(contract.get("required_cues", []) or [])
    except Exception:
        return True, meta
    if not required_cues:
        return True, meta
    source_lower = (source_text or "").lower()
    source_hits = sum(1 for cue in required_cues if cue.lower() in source_lower)
    if source_hits <= 0:
        return True, meta
    candidate_lower = (candidate or "").lower()
    candidate_hits = sum(1 for cue in required_cues if cue.lower() in candidate_lower)
    survived = candidate_hits > 0
    meta = {
        "style_cue_guard": True,
        "style_cue_survival": "passed" if survived else "failed",
        "required_cues": required_cues[:4],
        "source_hits": source_hits,
        "candidate_hits": candidate_hits,
    }
    return survived, meta


def convert_to_dit_format(
    text: str,
    model_type: str,
    response_format: str = "text",
    style_text: str = "",
    style_key: str = "",
    detail_level: str = "normal",
    style_type: str = "",
    source_text: str = "",
    *,
    style_enforcer: Any = None,
    agent_output_mode: str = "prose",
) -> Tuple[str, Dict[str, Any]]:
    """Convert raw LLM text into the model-specific target format.

    Returns ``(text, meta)``. ``meta`` carries the conversion mode and any
    schema/guard diagnostics so the node can surface them in metadata_dict.
    """
    raw = _clean_text(text)
    detail_info = get_detail_info(detail_level)
    max_words = detail_info["words"][1]

    base_meta: Dict[str, Any] = {"mode": "skipped", "model_type": model_type, "response_format": response_format}
    if not raw:
        return raw, base_meta

    # Tag output (response_format="tags", formerly the Professional Tagger
    # agent) is a deliberate output shape, so it is decided before any
    # model_type/json branch. It used to be checked further down, past the
    # FLUX/Ideogram/generic json branches — which meant asking for tags on a
    # json-shaped target silently wrapped them into a schema and threw the
    # requested format away, despite the comment there claiming otherwise.
    if agent_output_mode == "tags":
        return _normalize_prompt_ready_text(raw, max_words), {**base_meta, "mode": "tags_as_is"}

    # FLUX + json — 7-field schema.
    if model_uses_flux_json_schema(model_type, response_format):
        flux = format_for_flux_json(text)
        return json.dumps(flux, ensure_ascii=False, indent=2), {
            "mode": "flux_json",
            "model_type": model_type,
            "response_format": "json",
        }

    # Ideogram 4 + json — canonical caption schema (validate/repair, don't
    # just passthrough/wrap the raw LLM JSON like the generic path below).
    if response_format == "json" and model_uses_ideogram_json_schema(model_type):
        return adapt_ideogram4_caption(
            text, style_text=style_text, style_type=style_type, source_text=source_text,
        )

    # Generic json mode.
    if response_format == "json":
        try:
            parsed = json.loads(text)
            return json.dumps(parsed, ensure_ascii=False, indent=2), {
                "mode": "json_passthrough",
                "model_type": model_type,
                "response_format": "json",
            }
        except json.JSONDecodeError:
            normalized = _normalize_prompt_ready_text(text, max_words)
            return json.dumps({"prompt": normalized}, ensure_ascii=False, indent=2), {
                "mode": "generic_json_wrap",
                "model_type": model_type,
                "response_format": "json",
            }

    # Auto — pass through with truncation if needed.
    if model_type in ("Auto/None", "Auto", ""):
        return _truncate_words(raw, max_words), base_meta

    rule = get_model_prompt_rule(model_type)

    # Natural-language targets (Krea 2, Video) — normalize only, never
    # restructure: bucketing into comma-joined components would undo the
    # flowing prose their contracts ask the LLM for. MiniMax H3's timeline
    # shot-blocks get the same protection: restructuring would shred the
    # time-coded beats. Checked before the post_convert_text gate because
    # Krea 2 has that flag False.
    if rule.get("target_prompt_format") in (
        "krea2_natural_language",
        "video_natural_language",
        "video_timeline_blocks",
    ):
        return _normalize_prompt_ready_text(text, max_words), {
            **base_meta,
            "mode": str(rule["target_prompt_format"]),
        }

    # Text-mode: only convert if the rule says so.
    if not rule.get("post_convert_text") and response_format != "json":
        return raw, {**base_meta, "mode": "passthrough"}

    # Z-Image Turbo: only normalize, never restructure (per contract).
    if model_type == "Z-Image Turbo":
        return _normalize_prompt_ready_text(raw, max_words), {**base_meta, "mode": "normalize_only"}

    # SDXL's bucket-and-rejoin prose beats raw LLM output even when that output
    # is clean. QWEN only gets restructured when the LLM produced messy markup
    # (text_needs_dit_restructure): Qwen-Image's own examples are dense prose and
    # the QWEN guidance likewise asks for brief prose, so a forced labeled
    # breakdown would undo a good answer.
    force_restructure = model_type == "SDXL"
    needs_restructure = force_restructure or text_needs_dit_restructure(raw, model_type, max_words)

    if not needs_restructure:
        mode = "normalize_style_preserve" if style_text.strip() else "normalize_only"
        return _normalize_prompt_ready_text(raw, max_words), {**base_meta, "mode": mode}

    normalized_fallback = _normalize_prompt_ready_text(raw, max_words)
    candidate = _render_prompt_components(_extract_prompt_components(raw), model_type)
    candidate = re.sub(r"\s+", " ", candidate).strip().strip(" ,.;")
    if model_type in ("FLUX", "QWEN") and candidate and candidate[-1] not in ".!?":
        candidate += "."
    candidate = _truncate_words(candidate, max_words)

    survived, guard_meta = _style_cue_guard(
        candidate, source_text or raw, style_text=style_text, style_key=style_key, style_enforcer=style_enforcer
    )
    if not survived:
        return normalized_fallback, {**base_meta, **guard_meta, "mode": "normalize_guard_fallback"}
    return candidate, {**base_meta, **guard_meta, "mode": "restructured"}


# ---------------------------------------------------------------------------
# Response-format instruction (model-aware JSON guidance)
# ---------------------------------------------------------------------------


def build_response_format_instruction(
    model_type: str, response_format: str, response_schema: str = ""
) -> str:
    """Return the JSON-shape instruction to append to the user prompt.

    Empty string when not in JSON mode (no instruction appended). Pure
    function — the node calls it and decides whether to append.
    """
    if response_format != "json":
        return ""
    if response_schema == "ideogram4_chat":
        return (
            "OUTPUT: IDEOGRAM 4 CHAT JSON\n"
            "Return one JSON object with exactly two keys: updated_prompt and assistant. "
            "updated_prompt must be the canonical Ideogram 4 caption object with "
            "high_level_description, style_description, compositional_deconstruction. "
            "assistant must be a short plain-language explanation."
        )
    if model_uses_ideogram_json_schema(model_type):
        return (
            "OUTPUT: IDEOGRAM 4 CANONICAL JSON\n"
            "Return minified JSON only. Structure:\n"
            "{\n"
            '  "high_level_description": "50-word max scene summary",\n'
            '  "style_description": {\n'
            '    "aesthetics": "mood/style terms",\n'
            '    "lighting": "lighting description",\n'
            '    "photo": "photography style" (if photo_style),\n'
            '    "medium": "photograph|illustration",\n'
            '    "color_palette": ["#RRGGBB", ...] (max 16 colors)\n'
            "  },\n"
            '  "compositional_deconstruction": {\n'
            '    "background": "environmental context",\n'
            '    "elements": [\n'
            '      {\n'
            '        "type": "obj|text",\n'
            '        "desc": "element description (60 words max)",\n'
            '        "text": "visible text (if type=text)",\n'
            '        "bbox": [y1, x1, y2, x2] (0-1000 range, optional),\n'
            '        "color_palette": ["#RRGGBB", ...] (max 5 colors, optional)\n'
            "      }\n"
            "    ]\n"
            "  }\n"
            "}\n"
            "Constraints: All hex colors must be uppercase #RRGGBB format. "
            "bbox coordinates must be integers [y1, x1, y2, x2] where 0<=all<=1000 and y1<y2, x1<x2. "
            "No markdown, commentary, or extra fields."
        )
    if model_uses_flux_json_schema(model_type, response_format):
        return (
            "OUTPUT: JSON\nUse FLUX JSON schema: scene, subjects, style, color_palette, "
            "lighting, mood, camera"
        )
    return "OUTPUT: JSON\nReturn valid JSON only."


def append_response_format_instruction(user_text: str, model_type: str, response_format: str) -> str:
    """Append the JSON-shape instruction to ``user_text`` (idempotent)."""
    instruction = build_response_format_instruction(model_type, response_format)
    if not instruction:
        return user_text
    if "OUTPUT: JSON" in user_text or "OUTPUT: IDEOGRAM 4" in user_text:
        return user_text
    return f"{user_text}\n\n{instruction}".strip()


# ---------------------------------------------------------------------------
# Single public entry point
# ---------------------------------------------------------------------------


def post_convert_prompt(
    text: str,
    model_type: str,
    response_format: str = "text",
    *,
    style_text: str = "",
    style_key: str = "",
    detail_level: str = "normal",
    style_type: str = "",
    source_text: str = "",
    style_enforcer: Any = None,
    agent_output_mode: str = "prose",
) -> Tuple[str, Dict[str, Any]]:
    """Node-facing entry point. Delegates to convert_to_dit_format.

    Returns ``(converted_text, meta)``. The node merges ``meta`` into its
    metadata_dict so the UI can show what conversion was applied.
    """
    effective_format = get_effective_response_format(model_type, response_format)
    return convert_to_dit_format(
        text,
        model_type=model_type,
        response_format=effective_format,
        style_text=style_text,
        style_key=style_key,
        detail_level=detail_level,
        style_type=style_type,
        source_text=source_text,
        style_enforcer=style_enforcer,
        agent_output_mode=agent_output_mode,
    )
