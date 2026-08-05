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

TAGS_RESPONSE_FORMAT = "tags"

TAGS_OUTPUT_INSTRUCTION = (
    "OUTPUT MODE OVERRIDE: answer with flat comma-separated visual tags ordered by visual weight, "
    "suitable for SDXL-style prompting — no prose, no sentences, no field labels, no markdown. "
    "Example shape: \"cyberpunk street, neon signs, wet asphalt, holographic advertisement, rain, purple and blue lighting\"."
)

NONE_AGENT_KEY = "None"
NONE_AGENT_TEMPLATE = (
    "PURPOSE: Neutral Visual Describer — clean objective description without agent-specific bias.\n"
    "FOCUS: main subject, action/state, composition, environment, lighting, visible materials, colors.\n"
    "CONCRETE: describe what is physically visible — no interpretation, no narrative.\n"
    "IGNORE: emotional interpretation, storytelling, artistic judgment.\n"
    "OUTPUT MODE: prose paragraph, no labels, no markdown."
)

STYLE_WIDGET_KEYS = ("photo_style", "art_style", "nsfw_photo_style", "nsfw_art_style")

NSFW_STYLE_OVERLAY = (
    "Adult photography NSFW overlay: allow mature adult sensual framing and adult-only styling "
    "only when it fits the selected photo or art preset."
)

PROMPT_MODE_OPTIONS = ["Auto", "Hybrid", "Two-Stage"]

MODEL_TYPE_OPTIONS = ["Auto/None", "Z-Image Turbo", "FLUX", "SDXL", "QWEN", "Krea 2", "Ideogram 4", "Video", "MiniMax H3"]

# ── Video shot parameters ──────────────────────────────────────────────────
# 📤 Output widgets shown only when model_type is one of VIDEO_MODEL_TYPES.
# Every widget defaults to Auto, which injects nothing — all-Auto runs stay
# byte-identical to the pre-widget output, so saved workflows never change
# behavior just because these inputs now exist.
VIDEO_MODEL_TYPES = ("Video", "MiniMax H3")
VIDEO_ASPECT_OPTIONS = ["Auto", "16:9", "9:16", "1:1", "21:9"]
VIDEO_SOUND_OPTIONS = ["Auto", "Off", "Layered"]
VIDEO_CAMERA_OPTIONS = [
    "Auto", "Locked-off", "Dolly in", "Dolly out", "Orbit", "Pan",
    "Handheld follow", "Crane up", "FPV push", "Rack focus",
]
# Per-profile duration ranges in whole seconds. H3's is the API's hard limit
# (platform.minimax.io, verified 2026-08-05); Video's covers the class
# (Veo ~8s, Kling 5-10s, Wan-family clips up to ~20s).
VIDEO_DURATION_RANGES: Dict[str, Tuple[int, int]] = {
    "Video": (2, 20),
    "MiniMax H3": (4, 15),
}
# Widest upper bound — the widget's hard ceiling.
VIDEO_DURATION_MAX = max(high for _low, high in VIDEO_DURATION_RANGES.values())


def is_video_model_type(model_type: Any) -> bool:
    return str(model_type or "") in VIDEO_MODEL_TYPES


def get_video_duration_range(model_type: str) -> Tuple[int, int]:
    return VIDEO_DURATION_RANGES.get(str(model_type or ""), VIDEO_DURATION_RANGES["Video"])


def clamp_video_duration(model_type: str, seconds: Any) -> int:
    """Clamp a user-set duration into the profile's range; 0 stays 0 (= Auto)."""
    try:
        value = int(seconds)
    except (TypeError, ValueError):
        return 0
    if value <= 0:
        return 0
    low, high = get_video_duration_range(model_type)
    return max(low, min(high, value))

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
        # Verified 2026-08-04 (github.com/Tongyi-MAI/Z-Image, HF model card,
        # tongyi-mai.github.io — Alibaba Tongyi MAI): natural-language S3-DiT.
        # Turbo REQUIRES guidance_scale=0, so CFG — and with it any negative
        # prompt — is functionally off (the base Z-Image does support
        # negatives). The 250-word cap is a project heuristic: the vendor
        # publishes no length guidance.
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
        # Verified 2026-08-04 (docs.bfl.ai, api.bfl.ai/openapi.json): DiT that
        # prefers descriptive natural language — tags are tolerated ("there is
        # no single correct format"), descriptions recommended. No endpoint
        # exposes a negative-prompt parameter, and BFL's "Working Without
        # Negative Prompts" guide prescribes the same positive-replacement
        # strategy this profile uses. The 160-word cap is a project heuristic
        # (BFL publishes no limit; T5-XXL context is 512 tokens). The "flux"
        # json_schema is our own caption shape: BFL's official JSON prompting
        # documents a different schema, and only for FLUX.2.
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
        # Verified 2026-08-04 (HF stabilityai/stable-diffusion-xl-base-1.0,
        # arXiv:2307.01952, stability-ai/api-interfaces): dual-CLIP UNet that
        # works from short prompts; over-long prompts truncate at the CLIP
        # token ceiling (the "77 tokens" figure comes from diffusers'
        # truncation warning, not Stability prose). Negative prompts stay on:
        # the v1 API expressed them as negative prompt weights and the
        # ecosystem (ComfyUI/A1111) applies them via CFG — but Stability's own
        # SDXL demo marks negative_prompt unused, so expect a weaker effect
        # than on SD 1.x.
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
        # Verified 2026-08-04 (alibabacloud.com Model Studio, qwen-image API):
        # MMDiT natural-language model; negative_prompt supported (500 chars);
        # positive prompt capped at 800 tokens (1300 for the 2.0 series).
        # prompt_extend=true rewrites the positive prompt server-side by
        # default — downstream users wanting our exact text should disable it.
        "json_schema": None,
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
    "Krea 2": {
        "label": "Krea 2",
        "uses_dit_prompting": False,
        "post_convert_text": False,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": None,
        # Verified 2026-08-04 (krea.ai/docs): the krea-2 API schema is strict
        # (additionalProperties: false) with no negative-prompt field, and the
        # docs recommend descriptive natural language (the technical report
        # says tags/JSON are handled too). `creativity` controls server-side
        # prompt expansion; `raw` disables it.
        "json_schema": None,
        "target_prompt_format": "krea2_natural_language",
        "force_response_format": None,
        "source_status": "verified",
    },
    "Ideogram 4": {
        "label": "Ideogram 4",
        "uses_dit_prompting": False,
        "post_convert_text": True,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": None,
        # Ideogram 4's own API takes a plain-text prompt (docs.ideogram.ai), so
        # text mode stays plain natural language — but when the user explicitly
        # asks for `response_format="json"`, route through the canonical
        # high_level_description/style_description/compositional_deconstruction
        # caption schema (adapt_ideogram4_caption) instead of generic JSON
        # passthrough, so structured captions stay well-formed.
        # Verified 2026-08-04 (developer.ideogram.ai, docs.ideogram.ai): the v4
        # generate endpoint exposes NO negative_prompt field (only v3 had one),
        # and the official prompting guide says to describe the positive visual
        # opposite of anything excluded — so negatives flip positive, same as
        # FLUX/Z-Image/Krea 2/Video. Magic Prompt auto-engages on text_prompt;
        # ~150-160 words, most important first, is the documented sweet spot.
        "json_schema": "ideogram4",
        "target_prompt_format": None,
        "force_response_format": None,
        "source_status": "verified",
    },
    # Universal video-generation profile: covers MiniMax H2/H3, Wan 2.x,
    # HunyuanVideo, LTX Video, Kling and Veo/Sora-class DiT video models.
    # They all read one continuous natural-language shot description and
    # have no negative-prompt input, so constraints are flipped positive.
    # Checked against platform.minimax.io (H3 API reference + prompt guide,
    # 2026-08-04; prompt guide re-read 2026-08-05): free text is the only
    # documented user prompt shape, the v2 API has no negative-prompt
    # parameter, sound and per-reference roles ("Image 1: mood, setting...")
    # are first-class, and the [Shot N]/timeline structure is what the
    # separate H3-Context-IR enrichment call returns — users never hand-write
    # timestamps. The 150-word cap is the contract ceiling enforced by
    # convert_to_dit_format: video models follow short concrete shots better
    # than dense walls of text (guidance targets ~60-150 words). Stays
    # partially_verified because H3 is the one member checked against vendor
    # docs; the rest ride on the class-wide practice above.
    "Video": {
        "label": "Video",
        "uses_dit_prompting": True,
        "post_convert_text": True,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": 150,
        "json_schema": None,
        "target_prompt_format": "video_natural_language",
        "force_response_format": None,
        "source_status": "partially_verified",
    },
    "MiniMax H3": {
        "label": "MiniMax H3",
        "uses_dit_prompting": True,
        "post_convert_text": True,
        "supports_negative_prompt": False,
        "negative_strategy": "positive_constraints",
        "max_words": 250,
        # Verified 2026-08-04 (platform.minimax.io): H3's own enrichment
        # pipeline (H3-Context-IR) emits shot blocks with [Shot N] headers,
        # timestamps and an overall_soundscape — the model's native rich
        # format, used by the official Full-2K workflow. This dedicated
        # profile lets the LLM write that shape directly; the universal Video
        # profile stays timestamp-free because other vendors' parsers read
        # free text only and may render stray timestamps on screen.
        # Re-verified 2026-08-05 (platform.minimax.io/docs/guides/
        # video-generation + /video-prompt): durations are whole seconds
        # 4-15, T2V needs an explicit aspect (no 'adaptive'), inline camera
        # tags ([pan], [zoom], [static]) are documented in-prompt camera
        # control, reference media take explicit roles (first_frame,
        # reference_image/video/audio), and the official prompt guide leads
        # every example with duration + aspect ("15s, 16:9."). The 250-word
        # cap is the contract ceiling enforced by convert_to_dit_format.
        "json_schema": None,
        "target_prompt_format": "video_timeline_blocks",
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
    # "tags" is a text-shaped format, so it goes through the same gate as
    # "text": convert_to_dit_format() short-circuits to the tag branch and
    # normalizes/truncates, instead of the whole conversion being skipped and
    # the raw model answer shipped unchecked.
    if response_format not in ("text", TAGS_RESPONSE_FORMAT):
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
    "Portrait": (
        "PURPOSE: Portrait Agent — people, portrait photography, and how the subject carries themselves.\n"
        "FOCUS: hair (style, color, texture, condition), face (expression asymmetry, brow tension, nasolabial folds), gaze (direction, focus stability, eyelid coverage), pose (weight distribution, shoulder line, hip/shoulder relationship), body language (hand and shoulder tension, action vector, momentum cues, static vs transitional energy), clothing (fit, fabric, drape, folds), skin (tone, texture, subdermal color, sheen, imperfections).\n"
        "CONCRETE: describe physical markers, not emotion labels — \"left brow lower than right, shoulders rolled forward, knuckle tension, weight on back foot\" not \"nervous\".\n"
        "IGNORE: personality traits, emotional backstory, narrative intent, psychological diagnosis.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: hair → face → gaze → pose → body language → clothing → skin."
    ),
    "Products": (
        "PURPOSE: Products Agent — product, commercial, and device photography.\n"
        "FOCUS: object (shape, silhouette, proportion), material (surface, grain, finish, reflectivity), color (hue, saturation, evenness), branding (logo, text, typography, signature hardware), lighting (source count, direction, diffusion, highlights), reflections (specular, environmental wrap), background (surface, depth, isolation).\n"
        "FOR DEVICES: form factor, port and button layout, screen state and visible on-screen interface, chassis finish, wear at contact points, usage context (hand, desk, mount).\n"
        "CONCRETE: describe physical properties as seen — \"brushed aluminum with visible linear grain\", \"anodized unibody, MagSafe and two USB-C on the left edge, lid closed\" not \"premium quality\".\n"
        "IGNORE: value judgments (\"beautiful\", \"premium\", \"high-quality\"), performance specs, usage scenarios, brand reputation.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: object → material → color → lighting → reflections → interface (if any) → background."
    ),
    "Nature & Landscape": (
        "PURPOSE: Nature & Landscape Agent — optimized for outdoor scenes and landscapes.\n"
        "FOCUS: terrain (type, slope, coverage), vegetation (species cues, density, color, condition), water (type, surface state, clarity, reflectivity), sky (cloud type, coverage, color temperature), weather (precipitation, fog, haze, wind cues), time of day (sun position, shadow length), season (leaf state, snow, bloom, dryness), depth layers (foreground, midground, background separation).\n"
        "CONCRETE: describe observable environmental state — \"cumulus congestus, 40% coverage, shadows at 2:1 ratio\" not \"dramatic skies\".\n"
        "IGNORE: emotional atmosphere (\"peaceful\", \"majestic\"), subjective aesthetics.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: terrain → vegetation → water → sky → weather → lighting → depth layers."
    ),
    "Art & Illustration": (
        "PURPOSE: Art & Illustration Agent — optimized for paintings, drawings, and digital art.\n"
        "FOCUS: medium (oil, watercolor, digital, pencil), technique (brushwork, layering, blending, hatching), palette (dominant hues, saturation range, contrast), style (realism, impressionism, surrealism, etc.), composition (layout, negative space, focal points), subject, surface texture (canvas grain, paper tooth, impasto).\n"
        "CONCRETE: describe visual art qualities — \"thick impasto with visible palette knife strokes, warm sienna underpainting peeking through\" not \"beautiful painting\".\n"
        "IGNORE: subjective taste (\"masterpiece\"), supposed artistic intent, narrative speculation.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: medium → style → composition → subject → palette → technique → surface."
    ),
    "Fashion": (
        "PURPOSE: Fashion Agent — wardrobe, fabric, fit, and styling analysis.\n"
        "FOCUS: garments (type, silhouette, cut, layering), fabric (material, texture, weight, drape, sheen), colors (hue, pattern, print, color blocking), accessories (jewelry, bags, belts, shoes), silhouette (fit, tailoring, volume, hemline), brand cues (logo, monogram, signature hardware).\n"
        "CONCRETE: describe clothing as physical garments — \"double-breasted wool-blend blazer, notch lapel, padded shoulders, center vent, matte black horn buttons\" not \"stylish jacket\".\n"
        "IGNORE: trend labels, fashion opinions (\"chic\", \"outdated\"), personal suitability.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: silhouette → garments → fabric → color → accessories → brand cues."
    ),
    "Animals": (
        "PURPOSE: Animals Agent — species, coloring, behavior, and context fidelity.\n"
        "FOCUS: species (type, breed cues, size cues), markings (coat color, pattern, texture, moult state), build (proportion, muscle tone, weight cues, posture), head/face (ear set, muzzle shape, eye color, whiskers), expression/state (alertness, mouth state, tongue, eye focus), environment (habitat cues, surface, lighting).\n"
        "CONCRETE: describe zoological/physical traits — \"tricolor rough-coated collie, prick ears 45° forward, tongue lolling left, visible rib definition, standing on dew-wet grass\" not \"cute dog\".\n"
        "IGNORE: anthropomorphic emotion (\"sad eyes\", \"happy tail\"), human-like narrative.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: species → build → coat → head → expression → environment."
    ),
    "Architecture": (
        "PURPOSE: Architecture Agent — structural truth and spatial clarity.\n"
        "FOCUS: building type (residential, commercial, industrial, religious), structural logic (load-bearing cues, frame vs masonry, span), materials (facade cladding, roofing, glazing, joinery), facade elements (windows, doors, columns, arches, ornament), interior context (plan hints, ceiling height, circulation), scale (human proportion cues, floor count, massing), context (street, landscape, density).\n"
        "CONCRETE: describe structural and material facts — \"steel-frame curtain wall, unitized glazing with horizontal mullions at 1.5m spacing, recessed entry, cantilevered canopy\" not \"modern building\".\n"
        "IGNORE: architectural style labels without visible evidence (\"brutalist\", \"gothic\" unless clear), subjective aesthetics.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: type → scale → structural logic → materials → facade → context."
    ),
    "Interior": (
        "PURPOSE: Interior Agent — room layout, furniture, decor, and material logic.\n"
        "FOCUS: room type (living, bedroom, kitchen, office), furniture (type, placement, style, material, color), layout (traffic flow, zoning, focal point), materials (flooring, wall finish, countertop, textiles), colors (palette, accent, contrast), lighting (fixtures, source type, temperature, shadows), decor (art, plants, objects, styling).\n"
        "CONCRETE: describe interior as physical spatial arrangement — \"L-shaped modular sofa in charcoal bouclé, centered on a rectangular oak coffee table, sheepskin throw draped asymmetrically over left arm, warm 2700K track lighting\" not \"cozy living room\".\n"
        "IGNORE: lifestyle quality (\"cozy\", \"luxurious\"), inhabitant personality speculation.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: room → layout → furniture → materials → colors → lighting → decor."
    ),
    "City": (
        "PURPOSE: City Agent — urban scene reading with infrastructure and streetscape priority.\n"
        "FOCUS: location type (downtown, residential, industrial, waterfront), buildings (height, density, architectural period, facade materials, roofscape), street elements (pavement, signage, lighting, furniture, markings), infrastructure (roads, bridges, transit cues, utility poles), vegetation (street trees, planters, public green), density (crowding, traffic, pedestrian level), atmosphere (time of day, weather, light quality, noise cues).\n"
        "CONCRETE: describe urban environment as physical infrastructure — \"four-lane divided avenue with median, Art Deco mid-rises with limestone cladding, cast-iron street lamps, deciduous trees in full canopy, heavy pedestrian flow on 2m sidewalks\" not \"busy city street\".\n"
        "IGNORE: socioeconomic commentary, neighborhood quality judgment (\"dangerous\", \"upscale\").\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: location → density → buildings → street elements → vegetation → atmosphere."
    ),
    "Transport": (
        "PURPOSE: Transport Agent — vehicle-focused accuracy for form, condition, and context.\n"
        "FOCUS: vehicle type (car, truck, motorcycle, aircraft, boat), make/model cues (badge, grille, silhouette, lighting signature), body style (coupe, SUV, sedan, convertible), color and finish (paint, gloss, wrap), condition (clean, dirty, damaged, modified, patina), wheels (type, size, spokes, brake cues), environment (road, track, studio, natural setting).\n"
        "CONCRETE: describe vehicle as physical object — \"3rd-gen black Porsche 911 (991), side profile, center-lock wheels, carbon-ceramic brakes visible, sun striking the rear quarter panel, paint in showroom condition\" not \"nice car\".\n"
        "IGNORE: performance speculation, owner identity, subjective speed/status cues.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: type → make/model → body → color → condition → wheels → environment."
    ),
    "Food": (
        "PURPOSE: Food Agent — culinary presentation and ingredient visibility.\n"
        "FOCUS: dish type (course, cuisine cues), visible ingredients (protein, vegetable, grain, sauce), plating (arrangement, height, garnish, vessel), textures (crispy, creamy, layered, glistening), colors (natural vs cooked, contrast, browning), freshness cues (steam, condensation, wilt, sear), ambiance (table setting, lighting, backdrop, props).\n"
        "CONCRETE: describe food as physical composition — \"seared ribeye with crosshatch grill marks, medium-rare interior visible at cut edge, resting on wooden board with rosemary sprig and flake salt, steam rising, 25% fat cap rendered\" not \"delicious steak\".\n"
        "IGNORE: taste, quality rating, dietary categories, chef intent.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: dish → ingredients → plating → textures → colors → freshness → ambiance."
    ),
    "Games": (
        "PURPOSE: Games Agent — game scene, UI, and graphics-style interpretation.\n"
        "FOCUS: game type (FPS, RPG, racing, platformer, strategy), graphics style (realistic, stylized, pixel art, cel-shaded, low-poly), HUD/UI (health bar, minimap, ammo, score, menu), characters (model quality, rigging, costume, team colors), environment (level design, texture quality, lighting, draw distance), gameplay state (idle, action, menu, cutscene), platform cues (controller hints, touch controls, button prompts).\n"
        "CONCRETE: describe game as rendered interactive scene — \"third-person over-the-shoulder view, photorealistic UE5 forest level, SSAO visible, HUD shows health bar upper left, compass upper center, ammo counter lower right, character in tactical gear with visible weapon holster\" not \"cool game\".\n"
        "IGNORE: genre quality, review opinion, mental narrative of game story.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: type → graphics → environment → characters → UI → gameplay state."
    ),
}

AGENT_EMOJIS: Dict[str, str] = {
    NONE_AGENT_KEY: "⚪",
    "Portrait": "👤",
    "Products": "📦",
    "Nature & Landscape": "🌿",
    "Art & Illustration": "🎨",
    "Fashion": "👗",
    "Animals": "🐾",
    "Architecture": "🏛",
    "Interior": "🪑",
    "City": "🌆",
    "Transport": "🚗",
    "Food": "🍽",
    "Games": "🎮",
}

# ── Focus axis ─────────────────────────────────────────────────────────────
# An agent answers "what is in the frame"; a focus answers "which craft layer
# to weigh heavier while describing it". They used to share one dropdown, where
# picking 📐 Composition meant giving up 🍽 Food — even though the two describe
# different things and compose fine. A focus block is appended after the agent
# template and never replaces it.
NONE_FOCUS_KEY = "None"

AGENT_FOCUSES: Dict[str, str] = {
    NONE_FOCUS_KEY: "",
    "Composition": (
        "FOCUS OVERLAY — Composition: weigh framing and space above other layers.\n"
        "COVER: shot type (wide, medium, close-up, macro), camera angle (high, low, Dutch, aerial, POV), "
        "crop (tight, loose, headroom, lead room), subject placement (thirds, center, symmetry, negative space), "
        "depth of field (shallow, deep, focus plane, bokeh), perspective (linear, atmospheric, forced, isometric), "
        "lens cues (focal length feel, distortion, compression).\n"
        "CONCRETE: \"low-angle medium-wide, subject on the left third, leading line from the lower right corner, deep focus\" not \"nice composition\"."
    ),
    "Lighting & Color": (
        "FOCUS OVERLAY — Lighting & Color: weigh light and palette above other layers.\n"
        "COVER: source (natural, artificial, mixed, practical, key/fill/rim count), direction (front, side, back, top, Rembrandt, split), "
        "contrast (ratio, hard vs soft, highlight rolloff, shadow density), palette (dominant hue, accent, temperature), "
        "reflections (specular highlights, caustics, bounce, fresnel), atmosphere (haze, volumetric, bloom, flare).\n"
        "CONCRETE: \"single hard key at 45° camera-left, triangular nose shadow, no fill, 3200K tungsten, thin rim from back-right\" not \"dramatic lighting\"."
    ),
    "Ultra Detail": (
        "FOCUS OVERLAY — Ultra Detail: describe surfaces at the finest observable grain.\n"
        "COVER: micro details (pores, fibers, grain, cracks), texture (roughness, pattern regularity), "
        "material wear (scratches, patina, oxidation, fraying, pilling), reflectance (specular vs diffuse, gloss level), "
        "translucency (subsurface scatter, edge light), fine materials (fabric weave, wood grain, stone veining).\n"
        "CONCRETE: \"worn denim with visible white weft threads, fading at knee creases, uneven indigo loss at seams\" not \"old jeans\".\n"
        "This sharpens the agent's own subjects — it does not replace them, and it never overrides the style overlay or the target-format guidance."
    ),
    "Cinematic": (
        "FOCUS OVERLAY — Cinematic: read the frame as a film still.\n"
        "COVER: camera angle, lens character (wide, tele, macro, anamorphic hints), depth of field, "
        "lighting ratio (high/low key), color grading (palette, LUT cues, split toning), "
        "atmosphere (haze, fog, bloom, grain), frame geometry (thirds, leading lines, symmetry).\n"
        "CONCRETE: \"shallow DoF with bokeh highlights, teal/orange grade, backlit haze, lines converging at the upper third\" not \"looks like a movie\".\n"
        "IGNORE: plot, character motivation, genre labels."
    ),
    # The other four are craft layers — how the picture was made. This one is
    # about what is going on inside it, the axis every other layer skips: the
    # four above can describe a frame completely without ever saying that the
    # subject is mid-step or that the jaw is set. Portrait already carries body
    # language, but only Portrait does, and a moving car or a crowd needs the
    # same reading. Hence a focus rather than a fourteenth agent.
    #
    # It keeps the discipline the whole pack runs on: physical markers, never
    # the label. "Nervous" is a conclusion the model cannot see; a lowered brow
    # and rolled shoulders are in the pixels.
    "Emotion & Motion": (
        "FOCUS OVERLAY — Emotion & Motion: weigh the subject's state and the stage of the action above other layers.\n"
        "COVER: facial state (brow and lid position, mouth-corner tension, jaw set, asymmetry between the two halves of the face), "
        "gaze (direction, focused or unfocused, eyelid coverage, blink stage), "
        "body tension (shoulder line, hand and finger tension, weight distribution, spine load, contact pressure), "
        "motion stage (what has just happened and what is about to — mid-step, mid-turn, mid-gesture, settling, recoiling, holding still under load), "
        "momentum (direction of travel, lean into or against it, what would happen next if the shutter stayed open), "
        "physical evidence of movement (displaced hair and fabric, blur, dust, spray, deformation at contact points, wake).\n"
        "FOR NON-HUMAN SUBJECTS: the same reading — animals (ear and tail position, gait phase, muscle load), "
        "vehicles (body attitude, suspension compression, wheel rotation, spray), crowds (density, flow direction, whether the group moves as one).\n"
        "CONCRETE: \"weight already shifted onto the front foot, trailing heel off the ground, coat still swinging behind\" not \"walking energetically\"; "
        "\"outer brow raised, lower lid tight, mouth corner pulled back on one side only\" not \"happy\".\n"
        "IGNORE: emotion labels, mood words, motive, backstory, what the subject feels or intends — describe the body, not the story.\n"
        "If the frame is genuinely still, say what holds it still (weight settled, hands at rest) rather than inventing motion."
    ),
}

FOCUS_EMOJIS: Dict[str, str] = {
    NONE_FOCUS_KEY: "⚪",
    "Composition": "📐",
    "Lighting & Color": "💡",
    "Ultra Detail": "🔬",
    "Cinematic": "🎬",
    # Free again: the retired Character Performance Agent used to wear it, and
    # this is where that agent's job actually belongs.
    "Emotion & Motion": "🎭",
}

# ── Legacy agent migration ─────────────────────────────────────────────────
# Agents that existed when a workflow was saved but are gone from the dropdown.
# Each maps to (agent, focus, response_format) — `None` for a field means "leave
# whatever the workflow already has". Without this table the old value silently
# resolved to the neutral agent, quietly changing what a saved workflow produces.
LEGACY_AGENT_MIGRATION: Dict[str, Tuple[Optional[str], Optional[str], Optional[str]]] = {
    # Near-duplicate of the neutral describer.
    "Universal": (NONE_AGENT_KEY, None, None),
    # Folded into Portrait, which now carries the body-language cues.
    "Character Performance Agent": ("Portrait", None, None),
    # Folded into Products, which now covers screens and interfaces.
    "Gadgets": ("Products", None, None),
    # Adult framing is what the NSFW style presets are for.
    "18+": (NONE_AGENT_KEY, None, None),
    # Craft layers — now focuses, so they compose with any subject agent.
    "Composition Agent": (None, "Composition", None),
    "Lighting & Color Agent": (None, "Lighting & Color", None),
    "Ultra Detailed Expert": (None, "Ultra Detail", None),
    "Cinematic Master": (None, "Cinematic", None),
    # An output shape, not a way of looking — now a response_format.
    "Professional Tagger": (None, None, "tags"),
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


def get_all_style_keys() -> List[str]:
    """Every style the pack knows, across all four libraries, deduplicated.

    Lives here rather than beside its caller because two places need the same
    answer and they gave different ones: 🎛️ Style Mixer built the list from all
    four libraries while its frontend contract built it from photo + art only,
    so 112 NSFW styles were accepted by the node and unreachable in its panel.
    One list, one source.
    """
    keys: List[str] = []
    for widget in ("photo_style", "nsfw_photo_style", "art_style", "nsfw_art_style"):
        keys.extend(get_visible_style_keys(widget))
    seen: set = set()
    return [k for k in keys if not (k in seen or seen.add(k))]


def get_style_prompt(style_key: str) -> str:
    """Resolve a style display key to its underlying prompt string across all style libraries."""
    if not style_key or style_key == "(None)":
        return ""
    for source in _STYLE_SOURCES.values():
        if style_key in source:
            return source[style_key]
    return style_key


def get_visible_agent_keys() -> List[str]:
    return [f"{AGENT_EMOJIS.get(k, '')} {k}" for k in AGENTS.keys()]


def get_visible_focus_keys() -> List[str]:
    return [f"{FOCUS_EMOJIS.get(k, '')} {k}" for k in AGENT_FOCUSES.keys()]


def get_default_focus_key() -> str:
    return f"{FOCUS_EMOJIS.get(NONE_FOCUS_KEY, '')} {NONE_FOCUS_KEY}".strip()


def resolve_focus_key(value: Any) -> str:
    """Strip the emoji prefix off a focus dropdown value, defaulting to None."""
    if not value or str(value).strip().lower() in ("none", "", "null"):
        return NONE_FOCUS_KEY
    raw = str(value).strip()
    for key in AGENT_FOCUSES:
        if raw == key or raw.endswith(f" {key}"):
            return key
    for key in AGENT_FOCUSES:
        if raw.lower() == key.lower() or raw.lower().endswith(f" {key.lower()}"):
            return key
    return NONE_FOCUS_KEY


def get_focus_template(focus_key: str) -> str:
    return AGENT_FOCUSES.get(resolve_focus_key(focus_key), "")


def migrate_legacy_agent(value: Any) -> Tuple[Optional[str], Optional[str], Optional[str]]:
    """Map a retired agent name onto the (agent, focus, response_format) axes.

    Returns ``(None, None, None)`` for anything still in the dropdown, so the
    caller can leave the workflow's own values untouched. See
    LEGACY_AGENT_MIGRATION for why a silent fallback is not good enough.
    """
    if not value:
        return (None, None, None)
    raw = str(value).strip()
    for legacy, mapped in LEGACY_AGENT_MIGRATION.items():
        if raw == legacy or raw.endswith(f" {legacy}") or raw.lower().endswith(f" {legacy.lower()}"):
            return mapped
    return (None, None, None)


def get_default_agent_key() -> str:
    """Return the default agent for new scanner runs.

    The neutral describer: it makes no assumption about what the image holds,
    which is the right starting point now that every other agent is a specific
    subject domain. (It also absorbed the old "Universal" agent, which said
    almost the same thing in slightly different words.)
    Includes the emoji prefix to match get_visible_agent_keys() format.
    """
    emoji = AGENT_EMOJIS.get(NONE_AGENT_KEY, "")
    return f"{emoji} {NONE_AGENT_KEY}" if emoji else NONE_AGENT_KEY


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
    raw = str(value).strip()
    for k in AGENTS:
        if raw == k or raw.endswith(f" {k}"):
            return k
    for k in AGENTS:
        if raw.lower() == k.lower() or raw.lower().endswith(f" {k.lower()}"):
            return k
    return NONE_AGENT_KEY


AGENT_OUTPUT_MODE_PROSE = "prose"
AGENT_OUTPUT_MODE_TAGS = "tags"


def get_agent_output_mode(response_format: str = "text", agent_key: str = "") -> str:
    """Return whether the run produces prose or a flat comma-tag list.

    Tag output is a `response_format` now ("text" / "tags" / "json") rather
    than a dedicated agent, so it composes with any subject agent instead of
    replacing it. `agent_key` stays accepted for the retired "Professional
    Tagger" value, which a saved workflow can still carry.
    """
    if str(response_format).strip().lower() == TAGS_RESPONSE_FORMAT:
        return AGENT_OUTPUT_MODE_TAGS
    if agent_key and str(agent_key).strip().endswith("Professional Tagger"):
        return AGENT_OUTPUT_MODE_TAGS
    return AGENT_OUTPUT_MODE_PROSE
