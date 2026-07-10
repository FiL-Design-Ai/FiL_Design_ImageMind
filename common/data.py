import re
from typing import Any, Dict, List, Optional, Tuple

from .localization import get_localization_manager
from .styles.art import ART_STYLES
from .styles.nsfw_art import NSFW_ART_STYLES
from .styles.nsfw_photo import NSFW_PHOTO_STYLES
from .styles.photo import PHOTO_STYLES

LANGUAGES = ["en", "ru"]

# Detail level -> [min_words, max_words]. The max bound drives post-conversion
# word truncation in convert_to_dit_format. Order is the UI dropdown order.
DETAIL_LEVELS: Dict[str, Dict[str, Any]] = {
    "tiny": {"description": "Minimal one-line caption.", "words": [20, 50]},
    "short": {"description": "Short focused caption.", "words": [40, 80]},
    "normal": {"description": "Balanced description.", "words": [100, 250]},
    "detailed": {"description": "Rich detailed description.", "words": [250, 500]},
    "ultra": {"description": "Exhaustive ultra-detailed description.", "words": [500, 1200]},
}

NONE_AGENT_KEY = "None"
NONE_AGENT_TEMPLATE = "You are a neutral visual describer. Describe the image accurately without specific persona or stylistic bias."

STYLE_WIDGET_KEYS = ("photo_style", "art_style", "nsfw_photo_style", "nsfw_art_style")

NSFW_STYLE_OVERLAY = (
    "Adult photography NSFW overlay: allow mature adult sensual framing and adult-only styling "
    "only when it fits the selected photo or art preset."
)

PROMPT_MODE_OPTIONS = ["Auto", "Hybrid", "Two-Stage"]

MODEL_TYPE_OPTIONS = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4"]

# Per model_type generation contract. Consumed by the prompt pipeline
# (system-prompt assembly, response-format instructions, negative-prompt
# strategy) and by the post-conversion adapters. Mirrors the backup's
# MODEL_PROMPT_RULES schema, kept here as the single source of truth.
MODEL_PROMPT_RULES: Dict[str, Dict[str, Any]] = {
    "Auto/None": {
        "label": "Auto/None",
        "uses_dit_prompting": False,
        "post_convert_text": False,
        "supports_negative_prompt": True,
        "negative_strategy": "standard",
        "max_words": None,
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "project_fallback",
    },
    "Z-Image Turbo": {
        "label": "Z-Image Turbo",
        "uses_dit_prompting": True,
        "post_convert_text": True,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": 250,
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
    "FLUX": {
        "label": "FLUX",
        "uses_dit_prompting": True,
        "post_convert_text": True,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": 160,
        "json_schema": "flux",
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
    "SDXL": {
        "label": "SDXL",
        "uses_dit_prompting": False,
        "post_convert_text": True,
        "supports_negative_prompt": True,
        "negative_strategy": "standard",
        "max_words": None,
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
    "QWEN": {
        "label": "QWEN",
        "uses_dit_prompting": True,
        "post_convert_text": True,
        "supports_negative_prompt": True,
        "negative_strategy": "standard",
        "max_words": None,
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "partially_verified",
    },
    "Krea 2": {
        "label": "Krea 2",
        "uses_dit_prompting": False,
        "post_convert_text": False,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": None,
        "json_schema": None,
        "target_prompt_format": "krea2_natural_language",
        "force_response_format": None,
        "source_status": "verified",
    },
    "Ideogram 4": {
        "label": "Ideogram 4",
        "uses_dit_prompting": False,
        "post_convert_text": True,
        "supports_negative_prompt": True,
        "negative_strategy": "standard",
        "max_words": None,
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
}


def get_model_prompt_rule(model_type: str) -> Dict[str, Any]:
    return MODEL_PROMPT_RULES.get(model_type, MODEL_PROMPT_RULES["Auto/None"])


def get_effective_response_format(model_type: str, response_format: str = "text") -> str:
    forced = get_model_prompt_rule(model_type).get("force_response_format")
    return str(forced or response_format or "text")


def get_target_prompt_format(model_type: str, response_format: str = "text") -> str:
    rule = get_model_prompt_rule(model_type)
    explicit = rule.get("target_prompt_format")
    if explicit:
        return str(explicit)
    effective = get_effective_response_format(model_type, response_format)
    return f"{str(model_type or 'Auto/None').lower().replace(' ', '_')}_{effective}"


def get_model_prompt_max_words(model_type: str) -> Optional[int]:
    value = get_model_prompt_rule(model_type).get("max_words")
    return int(value) if isinstance(value, int) and value > 0 else None


def model_uses_dit_prompting(model_type: str) -> bool:
    return bool(get_model_prompt_rule(model_type).get("uses_dit_prompting", False))


def model_uses_positive_constraints(model_type: str) -> bool:
    return get_model_prompt_rule(model_type).get("negative_strategy") == "positive_constraints"


def model_uses_ideogram_json_schema(model_type: str) -> bool:
    return get_model_prompt_rule(model_type).get("json_schema") == "ideogram4"


def model_uses_flux_json_schema(model_type: str, response_format: str = "text") -> bool:
    if response_format != "json":
        return False
    return get_model_prompt_rule(model_type).get("json_schema") == "flux"


def model_needs_prompt_post_conversion(
    model_type: str, response_format: str = "text"
) -> bool:
    effective = get_effective_response_format(model_type, response_format)
    if effective == "json":
        return True
    if response_format != "text":
        return False
    return bool(get_model_prompt_rule(model_type).get("post_convert_text", False))


def model_supports_negative_prompt(model_type: str) -> bool:
    return bool(get_model_prompt_rule(model_type).get("supports_negative_prompt", True))


def get_detail_info(detail_level: str) -> Dict[str, Any]:
    key = str(detail_level or "").strip().lower()
    if key in DETAIL_LEVELS:
        return DETAIL_LEVELS[key]
    # tolerate emoji/label-prefixed keys like "🌳 normal"
    for level_key, info in DETAIL_LEVELS.items():
        if key.endswith(level_key) or level_key in key:
            return info
    return {"description": "Balanced description.", "words": [100, 250]}


def normalize_prompt_mode(value: Any, default: str = "auto") -> str:
    if isinstance(value, bool):
        return "two_stage" if value else "hybrid"
    raw = str(value or "").strip().lower()
    if not raw:
        return default
    compact = re.sub(r"[^a-z0-9]+", "_", raw).strip("_")
    aliases = {
        "auto": "auto", "hybrid": "hybrid", "two_stage": "two_stage",
        "single": "hybrid", "singlepass": "hybrid",
        "true": "two_stage", "false": "hybrid", "1": "two_stage", "0": "hybrid",
    }
    return aliases.get(compact, default)


def resolve_runtime_prompt_mode(requested_prompt_mode: Any, style_applied: bool = False) -> Tuple[str, str]:
    requested = normalize_prompt_mode(requested_prompt_mode)
    if requested == "two_stage":
        return "two_stage", ""
    if style_applied:
        return "two_stage", "auto_style_requires_source_prompt_tracking"
    return "hybrid", "auto_no_style_single_pass"


lm = get_localization_manager()

AGENTS: Dict[str, str] = {
    NONE_AGENT_KEY: NONE_AGENT_TEMPLATE,
    "Universal": (
        "PURPOSE: Universal Agent — default mode for general image analysis. "
        "FOCUS: scene meaning, main subject, action/state, composition, "
        "focal anchor, environment, lighting, and style in canonical order."
    ),
    "Portrait": (
        "PURPOSE: Portrait Agent — optimized for people photography. "
        "FOCUS: face shape, hair style/texture/color, facial expression, gaze direction, "
        "pose, body language, clothing details, accessories, skin tone, mood."
    ),
    "Products": (
        "PURPOSE: Products Agent — optimized for product and commercial photography. "
        "FOCUS: object shape, material, texture, color, branding, packaging, "
        "lighting setup, reflections, shadows, background, composition for catalog presentation."
    ),
    "Nature & Landscape": (
        "PURPOSE: Nature Agent — optimized for outdoor scenes and landscapes. "
        "FOCUS: terrain, vegetation, water, sky, weather, time of day, season, "
        "natural lighting, atmospheric effects, depth layers (foreground, midground, background)."
    ),
    "Art & Illustration": (
        "PURPOSE: Art Agent — optimized for paintings, drawings, and digital art. "
        "FOCUS: medium, technique, brushwork, color palette, style (realism, impressionism, etc.), "
        "composition, subject, mood, artistic influences."
    ),
    "Ultra Detailed Expert": (
        "PURPOSE: Ultra Detailed Expert — extreme close attention to fine grain and texture. "
        "FOCUS: micro details, surface texture, material response, "
        "lighting interaction at pixel level, imperfection, wear, reflectance, translucency."
    ),
    "Cinematic Master": (
        "PURPOSE: Cinematic Master — film-oriented analysis for storytelling frames. "
        "FOCUS: camera angle (low, high, dutch), lens type (wide, tele, macro), "
        "depth of field, contrast (high/low key), color grading, atmosphere, frame composition."
    ),
    "18+": (
        "PURPOSE: 18+ Agent — anatomical, pose, and sensual-scene precision without drift. "
        "FOCUS: adult subject identity, anatomy, pose, clothing/coverage, lighting, expression, and context."
    ),
    "Fashion": (
        "PURPOSE: Fashion Agent — wardrobe, fabric, fit, and styling analysis. "
        "FOCUS: garments, fabrics, colors, accessories, silhouette, and brand cues when visible."
    ),
    "Animals": (
        "PURPOSE: Animals Agent — species, coloring, behavior, and context fidelity. "
        "FOCUS: species, breed/variety cues, markings, build, features, expression/state, and environment."
    ),
    "Character Performance Agent": (
        "PURPOSE: Character Performance Agent — merge emotion, action impulse, and alive presence for character subjects. "
        "FOCUS: micro-expression, gaze direction, mouth/eyebrow tension, shoulder/hand pressure, action vector, "
        "limb tension, weight shift, pose energy, camera interaction, and environment contact when supported."
    ),
    "Architecture": (
        "PURPOSE: Architecture Agent — structural truth and spatial clarity. "
        "FOCUS: building type, structural logic, materials, facade/interior elements, context, and scale."
    ),
    "Interior": (
        "PURPOSE: Interior Agent — room layout, furniture, decor, and material logic. "
        "FOCUS: room type, furniture arrangement, materials, colors, lighting, decor, and style cues."
    ),
    "City": (
        "PURPOSE: City Agent — urban scene reading with infrastructure and streetscape priority. "
        "FOCUS: location type, buildings, street elements, infrastructure, vegetation, density, and atmosphere."
    ),
    "Transport": (
        "PURPOSE: Transport Agent — vehicle-focused accuracy for form, condition, and context. "
        "FOCUS: vehicle type, make/model hints, body style, color, condition, wheels, and environment."
    ),
    "Food": (
        "PURPOSE: Food Agent — culinary presentation and ingredient visibility. "
        "FOCUS: dish type, visible ingredients, plating, textures, colors, freshness cues, and ambiance."
    ),
    "Gadgets": (
        "PURPOSE: Gadgets Agent — electronics and device description with screen/context logic. "
        "FOCUS: device type, brand/model hints, visible interface, materials, condition, and usage context."
    ),
    "Games": (
        "PURPOSE: Games Agent — game scene, UI, and graphics-style interpretation. "
        "FOCUS: game type, graphics style, HUD/UI, characters, environment, gameplay state, and platform cues."
    ),
    "Composition Agent": (
        "PURPOSE: Composition Agent — focus on composition, camera, framing, and space. "
        "FOCUS: shot type, angle, crop/framing, subject placement, depth of field, perspective, and lens hints when useful."
    ),
    "Lighting & Color Agent": (
        "PURPOSE: Lighting & Color Agent — prioritize light source, direction, contrast, palette, and atmosphere. "
        "FOCUS: source, direction, contrast, palette, reflections, haze, glow, and bloom only when justified."
    ),
    "Professional Tagger": (
        "PURPOSE: Professional Tagger — convert the image into clean strongest-first visual tags. "
        "FOCUS: subject, action, composition, details, environment, lighting, style, and useful quality tags when warranted. "
        "OUTPUT MODE: flat comma-separated tokens ordered by visual weight, suitable for SDXL-style prompting."
    ),
}

_STYLE_SOURCES: Dict[str, Dict[str, str]] = {
    "photo_style": PHOTO_STYLES,
    "art_style": ART_STYLES,
    "nsfw_photo_style": NSFW_PHOTO_STYLES,
    "nsfw_art_style": NSFW_ART_STYLES,
}


def get_visible_style_keys(widget_name: str) -> List[str]:
    source = _STYLE_SOURCES.get(widget_name, {})
    # "None" is a no-op placeholder (empty value); the node UI prepends "None" itself,
    # so exclude it here to avoid a duplicate entry in the style dropdown.
    return [key for key in source.keys() if key and key != "None"]


def get_visible_agent_keys() -> List[str]:
    return list(AGENTS.keys())


def get_default_agent_key() -> str:
    """Return the recommended default agent for new scanner runs.

    "Universal" gives a useful general-purpose analysis rather than the neutral
    None template, which is better as an explicit override than a default.
    """
    return "Universal" if "Universal" in AGENTS else NONE_AGENT_KEY


def first_or_default(values: List[str], default: str) -> str:
    """Return the first element, or *default* when the sequence is empty."""
    return values[0] if values else default


def default_detail_level(levels) -> str:
    """Pick "normal" if present, otherwise the first available level."""
    keys = list(levels.keys()) if isinstance(levels, dict) else list(levels)
    return next((level for level in keys if "normal" in level.lower()), first_or_default(keys, "normal"))


def resolve_agent_key(value: Any) -> str:
    if not value or str(value).strip().lower() in ("none", "", "null"):
        return NONE_AGENT_KEY
    key = str(value).strip()
    if key in AGENTS:
        return key
    for k in AGENTS:
        if k.lower() == key.lower():
            return k
    return NONE_AGENT_KEY


AGENT_OUTPUT_MODE_PROSE = "prose"
AGENT_OUTPUT_MODE_TAGS = "tags"


def get_agent_output_mode(agent_key: str) -> str:
    return AGENT_OUTPUT_MODE_PROSE
