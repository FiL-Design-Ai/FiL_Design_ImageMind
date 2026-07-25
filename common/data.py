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
        # Ideogram 4's own API takes a plain-text prompt (docs.ideogram.ai), so
        # text mode stays plain natural language — but when the user explicitly
        # asks for `response_format="json"`, route through the canonical
        # high_level_description/style_description/compositional_deconstruction
        # caption schema (adapt_ideogram4_caption) instead of generic JSON
        # passthrough, so structured captions stay well-formed.
        "json_schema": "ideogram4",
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
        "PURPOSE: Universal Agent — default mode for general image analysis.\n"
        "FOCUS: main subject, action/state, composition, environment, lighting, style, mood.\n"
        "CONCRETE: ground descriptions in observable physical traits.\n"
        "IGNORE: unsupported backstory, intent, emotional narrative beyond visible expression.\n"
        "OUTPUT MODE: prose paragraph, no labels, no markdown.\n"
        "Order: subject → action → composition → environment → lighting → style → mood."
    ),
    "Portrait": (
        "PURPOSE: Portrait Agent — optimized for people and portrait photography.\n"
        "FOCUS: hair (style, color, texture, condition), face (expression asymmetry, brow tension, nasolabial folds), gaze (direction, focus, eyelid coverage), pose (weight distribution, shoulder line), clothing (fit, fabric, drape, folds), skin (tone, texture, subdermal color, sheen, imperfections).\n"
        "CONCRETE: describe physical facial markers — not emotion labels. \"subtle asymmetrical smile with nasolabial fold\" not \"happy\".\n"
        "IGNORE: personality traits, emotional backstory, narrative intent.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: hair → face → gaze → pose → clothing → skin."
    ),
    "Products": (
        "PURPOSE: Products Agent — optimized for product and commercial photography.\n"
        "FOCUS: object (shape, silhouette, proportion), material (surface, grain, finish, reflectivity), color (hue, saturation, evenness), branding (logo, text, typography), lighting (source count, direction, diffusion, highlights), reflections (specular, environmental wrap), background (surface, depth, isolation).\n"
        "CONCRETE: describe physical properties as seen — \"brushed aluminum with visible linear grain\" not \"premium quality\".\n"
        "IGNORE: value judgments (\"beautiful\", \"premium\", \"high-quality\"), usage scenarios, brand reputation.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: object → material → color → lighting → reflections → background."
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
    "Ultra Detailed Expert": (
        "PURPOSE: Ultra Detailed Expert — extreme close attention to fine grain, texture, and surface realism.\n"
        "FOCUS: micro details (pores, fibers, grain, cracks), surface texture (roughness, smoothness, pattern regularity), material wear (scratches, patina, oxidation, fraying, pilling), reflectance (specular vs diffuse, gloss level), translucency (subsurface scatter, edge light), fine materials (fabric weave, wood grain, stone veining, metal brushing).\n"
        "CONCRETE: describe at the finest observable grain — \"worn denim with visible white weft threads, fading at knee creases, surface pilling, uneven indigo loss at seams\" not \"old jeans\".\n"
        "IGNORE: general category labels, style, mood, composition overview.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: surface → texture → micro details → wear → reflectance → translucency."
    ),
    "Cinematic Master": (
        "PURPOSE: Cinematic Master — film-oriented analysis for storytelling frames.\n"
        "FOCUS: camera angle (low, high, Dutch, eye-level), lens type (wide, tele, macro, anamorphic hints), depth of field (shallow, deep, rack focus), contrast (high/low key, lighting ratio), color grading (palette, LUT cues, split toning), atmosphere (haze, fog, bloom, grain), frame composition (rule of thirds, leading lines, negative space, symmetry).\n"
        "CONCRETE: describe cinematographic techniques observable in the frame — \"shallow DoF with bokeh highlights, teal/orange grade, backlit haze, leading lines converging at upper third\" not \"looks like a movie\".\n"
        "IGNORE: plot, character motivation, genre labels.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: angle → lens → DoF → composition → grading → atmosphere → contrast."
    ),
    "18+": (
        "PURPOSE: 18+ Agent — anatomical and sensual-scene precision without drift.\n"
        "FOCUS: subject identity (age cues, body type, visible anatomy), pose (limb placement, weight distribution, contact points), clothing/coverage (type, fit, removal state, fabric tension), expression (gaze, mouth state, micro-tension), lighting (volume, shadow on body contours), context (setting, props, surface).\n"
        "CONCRETE: describe anatomy and pose with clinical precision — \"trapezius engaged, arm raised above head, hip rotated 30° to camera, fabric pulled taut across ribs\" not \"sexy pose\".\n"
        "IGNORE: subjective arousal language, narrative, value judgment.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: subject → pose → clothing → expression → lighting → context."
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
    "Character Performance Agent": (
        "PURPOSE: Character Performance Agent — emotion, action impulse, and alive presence for character subjects.\n"
        "FOCUS: micro-expression (brow asymmetry, lip corner tension, orbicularis engagement), gaze (direction, focus stability, blink state), mouth/eyebrow tension (neutral vs engaged vs strained), shoulder/hand pressure (relaxed vs flexed vs posed), action vector (movement direction, momentum cues, limb position), weight shift (center of gravity, hip/shoulder relationship), pose energy (dynamic vs static vs transitional), camera interaction (direct eye contact, fourth-wall awareness).\n"
        "CONCRETE: describe body language as physical signals — \"left eyebrow slightly lower than right, shoulders rolled forward, hands interlaced with visible knuckle tension, weight on back foot\" not \"nervous\".\n"
        "IGNORE: psychological diagnosis, character backstory, narrative emotion labels (\"fear\", \"joy\").\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: expression → gaze → tension → pose → action vector → weight shift → energy."
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
    "Gadgets": (
        "PURPOSE: Gadgets Agent — electronics and device description with screen/context logic.\n"
        "FOCUS: device type (phone, laptop, tablet, wearable, peripheral), brand/model cues (logo, form factor, port layout), visible interface (screen content, UI elements, button state), materials (chassis, finish, texture, glass type), condition (scratches, wear, screen state, cable management), usage context (hands, desk, mount, studio, lifestyle).\n"
        "CONCRETE: describe device as industrial object — \"silver MacBook Pro (M-series, 14\"), closed lid, MagSafe and two USB-C visible on left edge, anodized aluminum unibody with fine micro-abrasions at palm rest, sitting on white marble desktop with ambient LED strip behind\" not \"modern laptop\".\n"
        "IGNORE: performance specs, brand loyalty, price/value judgment.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: type → brand/model → materials → interface → condition → context."
    ),
    "Games": (
        "PURPOSE: Games Agent — game scene, UI, and graphics-style interpretation.\n"
        "FOCUS: game type (FPS, RPG, racing, platformer, strategy), graphics style (realistic, stylized, pixel art, cel-shaded, low-poly), HUD/UI (health bar, minimap, ammo, score, menu), characters (model quality, rigging, costume, team colors), environment (level design, texture quality, lighting, draw distance), gameplay state (idle, action, menu, cutscene), platform cues (controller hints, touch controls, button prompts).\n"
        "CONCRETE: describe game as rendered interactive scene — \"third-person over-the-shoulder view, photorealistic UE5 forest level, SSAO visible, HUD shows health bar upper left, compass upper center, ammo counter lower right, character in tactical gear with visible weapon holster\" not \"cool game\".\n"
        "IGNORE: genre quality, review opinion, mental narrative of game story.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: type → graphics → environment → characters → UI → gameplay state."
    ),
    "Composition Agent": (
        "PURPOSE: Composition Agent — focus on composition, camera, framing, and space.\n"
        "FOCUS: shot type (wide, medium, close-up, extreme close-up, macro), camera angle (high, low, Dutch, aerial, POV), crop/framing (tight, loose, headroom, noseroom, lead room), subject placement (center, rule of thirds, off-center, symmetry, negative space), depth of field (shallow, deep, focus plane, bokeh quality), perspective (linear, atmospheric, forced, isometric), lens cues (focal length feel, distortion, compression, anamorphic flare).\n"
        "CONCRETE: describe photographic/cinematic framing decisions — \"low-angle medium-wide, subject placed on left third, strong leading line from lower right corner, deep focus with atmospheric perspective haze at horizon\" not \"nice composition\".\n"
        "IGNORE: subject identity, narrative meaning, lighting unless it affects framing.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: shot type → angle → framing → subject placement → DoF → perspective → lens cues."
    ),
    "Lighting & Color Agent": (
        "PURPOSE: Lighting & Color Agent — prioritize light source, direction, contrast, palette, and atmosphere.\n"
        "FOCUS: source (natural, artificial, mixed, practical, key/fill/rim count), direction (front, side, backlight, top, bottom, Rembrandt, split), contrast (ratio, hard vs soft, highlight rolloff, shadow density), palette (dominant hue, accent, complementary, monochrome, temperature), reflections (specular highlights, caustics, bounce light, fresnel), atmospheric effects (haze, fog, volumetric, bloom, lens flare, god rays).\n"
        "CONCRETE: describe light as physical phenomenon — \"single hard key light at 45° camera-left, producing a defined triangular nose shadow (Rembrandt pattern), deep shadows with no fill, warm 3200K tungsten, thin rim light on hair from back-right\" not \"dramatic lighting\".\n"
        "IGNORE: subject identity, compositional analysis, style/mood labels.\n"
        "OUTPUT MODE: prose paragraph, no markdown.\n"
        "Order: source → direction → contrast → palette → reflections → atmospheric effects."
    ),
    "Professional Tagger": (
        "PURPOSE: Professional Tagger — convert the image into clean strongest-first visual tags.\n"
        "FOCUS: subject, action, composition, details, environment, lighting, style, useful quality tags.\n"
        "CONCRETE: output raw visual tokens with no prose — \"cyberpunk street, neon signs, wet asphalt, holographic advertisement, rain, purple and blue lighting, detailed, highly detailed\" not a sentence.\n"
        "IGNORE: any prose, full sentences, field labels, markdown, commentary.\n"
        "OUTPUT MODE: flat comma-separated tokens ordered by visual weight, suitable for SDXL-style prompting."
    ),
}

AGENT_EMOJIS: Dict[str, str] = {
    NONE_AGENT_KEY: "⚪",
    "Universal": "🌐",
    "Portrait": "👤",
    "Products": "📦",
    "Nature & Landscape": "🌿",
    "Art & Illustration": "🎨",
    "Ultra Detailed Expert": "🔬",
    "Cinematic Master": "🎬",
    "18+": "🔞",
    "Fashion": "👗",
    "Animals": "🐾",
    "Character Performance Agent": "🎭",
    "Architecture": "🏛",
    "Interior": "🪑",
    "City": "🌆",
    "Transport": "🚗",
    "Food": "🍽",
    "Gadgets": "📱",
    "Games": "🎮",
    "Composition Agent": "📐",
    "Lighting & Color Agent": "💡",
    "Professional Tagger": "🏷",
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


def get_default_agent_key() -> str:
    """Return the recommended default agent for new scanner runs.

    "Universal" gives a useful general-purpose analysis rather than the neutral
    None template, which is better as an explicit override than a default.
    Includes emoji prefix to match get_visible_agent_keys() format.
    """
    key = "Universal" if "Universal" in AGENTS else NONE_AGENT_KEY
    emoji = AGENT_EMOJIS.get(key, "")
    return f"{emoji} {key}" if emoji else key


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


def get_agent_output_mode(agent_key: str) -> str:
    """Return whether ``agent_key`` produces prose or a comma-tag list.

    Only "Professional Tagger" asks for flat comma-separated tags — its
    output must not be rewritten into sentences by the per-model_type DiT
    restructuring step (convert_to_dit_format), which would otherwise
    silently discard the tag format the user explicitly picked.
    """
    return AGENT_OUTPUT_MODE_TAGS if agent_key == "Professional Tagger" else AGENT_OUTPUT_MODE_PROSE
