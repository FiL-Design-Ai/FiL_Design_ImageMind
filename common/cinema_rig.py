"""Cinematic rig presets and deterministic prompt assembly for 🎬 Cinema Rig.

The rig is a virtual camera department: five orthogonal axes — body, lens,
focal length, aperture, color grade — that combine into a shot description.
A camera department describes *how the frame was taken*, never what is in it:
the scene arrives through `scene_prompt`, so the rig stacks under any user
scene the way a style overlay does. All presets are original to this pack.

The camera axis drives the medium wrapper: film bodies bookend the prompt
with analog stock language, digital bodies with sensor language — the medium
is named no matter how the other axes are set, which is what keeps the output
on the photograph side of the line (see `tests/test_cinema_rig.py`).
"""

from __future__ import annotations

from typing import Dict, List, Tuple

CAMERA_TYPE_FILM = "film"
CAMERA_TYPE_DIGITAL = "digital"

MODE_ORIGINAL = "Original Shot"
MODE_RESHOOT = "Reshoot"
RIG_MODES: List[str] = [MODE_ORIGINAL, MODE_RESHOOT]

SETUP_PRESET = "Director Preset"
SETUP_CUSTOM = "Custom Hardware"
SETUP_MODES: List[str] = [SETUP_PRESET, SETUP_CUSTOM]

POLISH_DETERMINISTIC = "Deterministic (Fast)"
POLISH_LLM = "LLM Polish (Gen-Rig)"
POLISH_MODES: List[str] = [POLISH_DETERMINISTIC, POLISH_LLM]

# ── Camera bodies ──────────────────────────────────────────────────────────
# `type` picks the medium wrapper pair in `wrapper_for_camera`.

CINEMA_CAMERAS: Dict[str, Dict[str, str]] = {
    "Auto / Neutral": {
        "type": CAMERA_TYPE_DIGITAL,
        "prompt": "",
    },
    "ARRI Alexa 65 (Large Format)": {
        "type": CAMERA_TYPE_DIGITAL,
        "prompt": (
            "ARRI Alexa 65 large format capture, 6.5K sensor readout, extremely soft highlight rolloff, "
            "ultra-clean deep shadow floor, micro-texture preserved across every surface, epic-scale image clarity, "
            "the flagship body the large-format theatrical productions reach for."
        ),
    },
    "RED V-RAPTOR XL": {
        "type": CAMERA_TYPE_DIGITAL,
        "prompt": (
            "RED V-RAPTOR XL 8K Vista Vision camera, razor modern sharpness, high-contrast deep blacks, "
            "clinical edge detail, disciplined saturation, high frame rate smoothness, "
            "clinical enough for streaming thrillers that live and die on edge detail."
        ),
    },
    "IMAX MSM 9802 70mm": {
        "type": CAMERA_TYPE_FILM,
        "prompt": (
            "IMAX MSM 9802 70mm film capture, analog grain the size of the frame itself, vivid analog color, "
            "massive dynamic range, tactile emulsion presence, "
            "the presentation format the theatrical event pictures are still printed for."
        ),
    },
    "Kodak Vision3 500T (35mm)": {
        "type": CAMERA_TYPE_FILM,
        "prompt": (
            "Kodak Vision3 500T 5219 tungsten negative, prominent living grain, warm halation blooming around practical lights, "
            "rich dense shadows, teal-shifted darks against warm highlights, "
            "the tungsten stock prestige television trusts when grain has to carry the mood."
        ),
    },
    "Sony Venice 2": {
        "type": CAMERA_TYPE_DIGITAL,
        "prompt": (
            "Sony Venice 2 full-frame capture, dual base ISO riding the low-light floor, clean shadows held in near-darkness, "
            "gentle filmic curve over a modern sensor, natural skin under practical sources, "
            "the low-light workhorse night-exterior schedules are built around."
        ),
    },
    "Arriflex 416 (16mm)": {
        "type": CAMERA_TYPE_FILM,
        "prompt": (
            "Arriflex 416 16mm capture, heavy organic grain, soft vintage resolution, light leaks bleeding at the frame edges, "
            "faded desaturated color, handheld indie character, "
            "the format arthouse pictures borrow when the frame has to feel handled."
        ),
    },
}

# ── Lenses ─────────────────────────────────────────────────────────────────

CINEMA_LENSES: Dict[str, str] = {
    "Auto / Neutral": "",
    "Panavision C-Series Anamorphic": (
        "Panavision C-Series anamorphic lens, horizontal blue flares streaking through highlights, oval bokeh, "
        "barrel stretch softening the frame corners, widescreen squeeze character, "
        "the vintage anamorphics the classic science-fiction sagas were photographed through."
    ),
    "Cooke S4/i Primes": (
        "Cooke S4/i spherical prime lenses, warm creamy Cooke look, smooth focus falloff off the focus plane, "
        "flattering skin treatment, gentle romantic glow toward the edges, "
        "the workhorse primes studio dramas trust with faces."
    ),
    "ARRI Signature Primes": (
        "ARRI Signature Prime lenses, near-zero distortion, magnetic skin tones, creamy out-of-focus roll, "
        "crisp but organic microcontrast, "
        "the master primes commercial cinematographers rent when the frame has to look expensive."
    ),
    "Helios 44-2 (Vintage)": (
        "Helios 44-2 vintage lens, swirling soap-bubble bokeh, dreamy soft corners, low-contrast flare-prone optics, "
        "optical flaws kept in on purpose, "
        "the Soviet-era prime indie shooters hunt down for the swirl."
    ),
    "Atlas Orion Anamorphic": (
        "Atlas Orion anamorphic lens, controlled silver-blue flares, rich textured bokeh fields, clean modern squeeze, "
        "sharp subject separation, "
        "the budget anamorphics the sci-fi indie features are framed on."
    ),
    "Canon K-35 (1970s)": (
        "Canon K-35 1970s prime lenses, glowing lifted highlights, soft pastel color, low-contrast dreamy haze, "
        "period-authentic flare character, "
        "the vintage set period pictures use to make digital sensors behave like film."
    ),
}

# ── Focal lengths ──────────────────────────────────────────────────────────

CINEMA_FOCAL_LENGTHS: Dict[str, str] = {
    "Auto / Neutral": "",
    "14mm (Ultra Wide)": (
        "14mm ultra-wide rectilinear perspective, environment pressing into the frame, exaggerated depth between near and far, "
        "architecture standing at monumental scale, the establishing language location scouts frame with."
    ),
    "24mm (Wide)": (
        "24mm wide cinema perspective, environment carried together with the subject, dynamic converging lines, "
        "close-to-the-action documentary proximity, the focal length run-and-gun crews reach for first."
    ),
    "35mm (Classic)": (
        "35mm classic storytelling focal length, subject and background held in honest proportion, "
        "natural documentary distance, the perspective character dramas are framed at."
    ),
    "50mm (Human Eye)": (
        "50mm normal perspective matching the human eye, zero geometric distortion, neutral field of view, "
        "composition carried by placement rather than optics, the focal length quiet observational scenes are shot at."
    ),
    "85mm (Portrait)": (
        "85mm portrait telephoto compression, flattering facial proportion, subject lifted cleanly off the background, "
        "intimate emotional distance, the head-and-shoulders length dialogue coverage is shot on."
    ),
    "200mm (Telephoto)": (
        "200mm long telephoto compression, background stacked flat against the subject, standoff distance, "
        "paper-thin focus plane, abstracted backdrop, the reach surveillance-style framings borrow."
    ),
}

# ── Apertures ──────────────────────────────────────────────────────────────

CINEMA_APERTURES: Dict[str, str] = {
    "Auto / Neutral": "",
    "f/0.95 (Dreamlike)": (
        "aperture wide open at f/0.95, razor-thin focus plane, eyelashes sharp against a frame melting into abstract color washes, "
        "dream-logic separation, the opening sleep and memory scenes are shot at."
    ),
    "f/1.4 (Cinematic Shallow)": (
        "aperture at f/1.4, very shallow focus plane, subject carved clean off the background, soft creamy bokeh fields, "
        "low-light headroom, the working stop night interiors are exposed at."
    ),
    "f/2.8 (Standard)": (
        "cinema-standard f/2.8 aperture, subject held sharp with the background pleasantly soft, "
        "balanced professional focus behavior, the default stop coverage is trusted to."
    ),
    "f/5.6 (Contextual)": (
        "f/5.6 stopped down, medium depth carrying subject and setting together, location readable behind the action, "
        "the aperture geography-matters scenes are framed at."
    ),
    "f/11 (Deep Focus)": (
        "f/11 deep focus, every plane from foreground to backdrop held crisp, staged geometry readable across the whole frame, "
        "the aperture ensemble blocking is covered at."
    ),
}

# ── Color grades ───────────────────────────────────────────────────────────

CINEMA_GRADINGS: Dict[str, str] = {
    "Auto / Neutral": "",
    "Teal & Orange (Blockbuster)": (
        "teal and orange blockbuster grade, cyan pushed into the shadows, warm skin carried in the highlights, "
        "punchy complementary separation, saturated contrast, the finish summer event pictures are delivered in."
    ),
    "Bleach Bypass (Gritty)": (
        "bleach bypass finish, crushed blacks, silver-retained stark contrast, drained desaturated color, "
        "harsh gritty texture, metallic highlight edges, the process war pictures run when the frame has to hurt."
    ),
    "Fincher Green (Thriller)": (
        "clinical green-yellow midtone tint, chilled color temperature, low-key controlled exposure, "
        "desaturated reds, institutional unease, the palette psychological thrillers are graded into."
    ),
    "Kodachrome (Vintage)": (
        "Kodachrome-era color response, dense blacks, rich reds and yellows, high-contrast warm vintage bias, "
        "the editorial palette archive stories are matched to."
    ),
    "Technicolor (1950s)": (
        "three-strip Technicolor response, hyper-saturated primary red green and blue, glamorous high-key even light, "
        "vivid stage-set color density, the process golden-age musicals were printed in."
    ),
    "Neon Noir (Cyberpunk)": (
        "neon noir grade, magenta and cyan bichromatic light, crushed deep blacks, wet surfaces carrying reflections, "
        "glowing night highlights, the look rain-soaked megacity stories are graded into."
    ),
    "Pastel Symmetry (Whimsical)": (
        "pastel palette grade, soft pinks and mint greens, flat high-key light, low gentle contrast, "
        "storybook color control, the palette whimsical ensemble comedies are dressed in."
    ),
    "Film Noir (Monochrome)": (
        "film noir black and white, orthochromatic response, chiaroscuro hard light, deep dramatic shadows, "
        "silvery specular highlights, the monochrome crime classics are remembered in."
    ),
    "Golden Hour (Dreamy)": (
        "golden hour grade, warm honeyed color temperature, soft backlight halation, gently lifted shadows, "
        "romantic earth-tone bias, the light dusk exteriors are chased for."
    ),
    "Matrix Green (Dystopia)": (
        "dominant green tint through shadows and midtones, sickly digital atmosphere, hard metallic contrast, "
        "the wash dystopian simulation stories are graded into."
    ),
    "Violet Haze (Teen Night)": (
        "violet and deep blue ambient wash, heavy Ektachrome-style grain, glittering specular highlights, "
        "mixed clashing color temperatures, the mood late-night scenes are soaked in."
    ),
    "Day for Night (Blue)": (
        "day for night grade, deep blue cast over underexposed midtones, artificial moonlight color, cool clipped whites, "
        "the technique schedule-tight night exteriors are faked with."
    ),
    "Cross Process (Fashion)": (
        "cross-processed color shift, unpredictable green-yellow highlights, deep blue-shifted shadows, "
        "harsh chemical contrast, the accident fashion editorials stage on purpose."
    ),
    "Bleached Apocalypse": (
        "post-apocalyptic desaturation, near-monochrome with a sepia undertone, washed-out drained palette, "
        "bleak flat atmosphere, the grade end-of-the-road stories are finished in."
    ),
}

# ── Medium wrappers ────────────────────────────────────────────────────────
# The camera axis picks the pair; the assembled prompt always names a medium.

FILM_PREFIX = (
    "A high-fidelity still pulled from a motion picture film, authentic celluloid texture, "
    "captured on photochemical stock. "
)
DIGITAL_PREFIX = (
    "A raw 8K still frame from a modern high-end digital cinema camera, pristine noiseless image quality. "
)
FILM_SUFFIX = (
    "photochemical development character, uneven heavy grain structure, halation blooming around strong lights, "
    "rich analog color depth, muddy shadow floor, color graded by a professional finishing colorist."
)
DIGITAL_SUFFIX = (
    "high-end digital cinema sensor behavior, professional color grade, soft highlight rolloff, wide dynamic range, "
    "natural skin texture, clean shadow floor with minimal sensor noise, organic neutral color response."
)

# Reshoot treats the reference image as the scene: identity and staging are
# locked, only the camera treatment changes. The scene text is dropped in
# this mode on purpose — the reference carries it.
RESHOOT_LOCK = (
    "Reshoot the reference scene with full fidelity: lock subject identity, pose, props and background details exactly, "
    "only the camera treatment changes. For aspect ratio changes, outpaint the edges to fit. "
)

# ── Camera angles ──────────────────────────────────────────────────────────

# ── Camera angles ──────────────────────────────────────────────────────────

CINEMA_ANGLES: Dict[str, str] = {
    "Auto / Neutral": "",
    "Eye Level (Neutral)": (
        "eye-level camera angle, neutral human horizon, direct eye-to-eye engagement with the subject"
    ),
    "Low Angle (Heroic)": (
        "low camera angle looking upward, imposing subject presence, heroic dominant perspective, grounded camera height"
    ),
    "High Angle (Vulnerable)": (
        "high camera angle looking downward, subject framed smaller against the ground, vulnerable observational perspective"
    ),
    "Dutch Angle (Dynamic Tilt)": (
        "dutch angle tilted horizon, uneasy diagonal composition, psychological tension, camera roll tilt"
    ),
    "Bird's Eye View (Top-Down)": (
        "bird's eye view overhead camera angle, strict top-down vertical perspective, aerial spatial layout"
    ),
    "Worm's Eye View (Ground Up)": (
        "worm's eye view extreme low camera angle from ground level, dramatic vertical convergence, monumental presence"
    ),
    "Over-The-Shoulder (OTS)": (
        "over-the-shoulder camera shot framing, foreground shoulder framing the subject, conversational depth layer"
    ),
}

# ── Shot framings ──────────────────────────────────────────────────────────

CINEMA_FRAMINGS: Dict[str, str] = {
    "Auto / Neutral": "",
    "Extreme Close-up (ECU)": (
        "extreme close-up macro camera shot framing, tight focus on singular facial feature detail, micro optical contrast"
    ),
    "Close-up (CU)": (
        "close-up camera shot tight on face and shoulders, expressive emotional focus, background soft blur"
    ),
    "Medium Close-up (MCU)": (
        "medium close-up camera shot framing chest to head, natural interview distance, balanced subject isolation"
    ),
    "Medium Shot (MS)": (
        "medium camera shot waist-up framing, subject interaction and waist-level action carried with immediate setting"
    ),
    "Cowboy Shot (American)": (
        "cowboy camera shot framed from mid-thigh up, heroic posture, action-ready stance carrying hip details"
    ),
    "Wide Shot (WS)": (
        "wide camera shot full-body framing, subject placed fully within environment, clear spatial context"
    ),
    "Extreme Wide Shot (EWS)": (
        "extreme wide master camera shot, subject small within vast landscape architecture, epic environmental scale"
    ),
}

# ── Camera movements ───────────────────────────────────────────────────────

CINEMA_MOVEMENTS: Dict[str, str] = {
    "Auto / Neutral": "",
    "Static (Tripod Locked)": (
        "static locked tripod camera framing, pristine compositional stillness, zero camera shake"
    ),
    "Handheld (Raw & Shaky)": (
        "handheld camera movement, subtle organic operator shake, immediate documentary realism, urgent tactile energy"
    ),
    "Steadicam (Smooth Tracking)": (
        "steadicam fluid tracking camera shot, weightless floating camera motion, seamless subject movement following"
    ),
    "Dolly Zoom (Vertigo Effect)": (
        "dolly zoom vertigo camera effect, background warping while subject size remains fixed, disorienting spatial compression"
    ),
    "Crane / Drone Shot (Flyby)": (
        "crane jib camera movement, sweeping aerial elevation, high-angle cinematic flyby shot"
    ),
    "Orbit / Arc Shot (Circle)": (
        "360 degree arc camera orbit, fluid circular movement around subject, dynamic parallax backdrop sweep"
    ),
}

# ── Lighting setups ────────────────────────────────────────────────────────

CINEMA_LIGHTING: Dict[str, str] = {
    "Auto / Natural": "",
    "Volumetric Haze (Rays)": (
        "volumetric haze atmosphere, visible light rays piercing through atmospheric mist, cinematic god rays camera lighting"
    ),
    "Chiaroscuro (Hard Contrast)": (
        "chiaroscuro high-contrast camera lighting, harsh deep shadows, single key light source, dramatic chiaroscuro light"
    ),
    "Rembrandt (Soft Portrait)": (
        "Rembrandt camera lighting setup, soft triangular highlight on cheek, flattering gentle shadows, warm directional key light"
    ),
    "Rim / Backlight (Halo)": (
        "strong rim backlight camera lighting, brilliant silhouette halo around subject edges, high subject separation off dark backdrop"
    ),
    "Practical Neon (Motivated)": (
        "practical neon light sources, vibrant motivated colored light spill, glowing practical camera light in frame"
    ),
    "Golden Hour (Warm Glow)": (
        "golden hour camera sunlight, low sun angle, warm honeyed light, soft backlight halation, gentle long shadows"
    ),
    "Day for Night (Cool Blue)": (
        "day for night camera lighting, deep cool blue ambient cast, clipped moonlight highlights, underexposed midtones"
    ),
}

# ── Optics & filters ───────────────────────────────────────────────────────

CINEMA_OPTICS: Dict[str, str] = {
    "None / Pure Optic": "",
    "Black Pro-Mist (Soft Bloom)": (
        "black pro-mist lens filter, soft halo blooming around practical lights, gentle skin texture softening, filmic contrast reduction"
    ),
    "Anamorphic Blue Flares": (
        "horizontal streak blue anamorphic lens flares, optical light streaks across highlights, classic sci-fi glass artifact"
    ),
    "Anamorphic Gold Flares": (
        "warm gold horizontal lens flares, golden optical streak flares across specular highlights"
    ),
    "Heavy Film Grain (ISO 800)": (
        "heavy ISO 800 organic film grain, pronounced analog texture across shadows and midtones"
    ),
    "Subtle Film Grain (ISO 200)": (
        "fine subtle ISO 200 film grain, clean organic texture finish"
    ),
}

# ── Director presets ───────────────────────────────────────────────────────

CINEMA_DIRECTOR_PRESETS: Dict[str, Dict[str, str]] = {
    "Custom Rig": {
        "prompt": "",
    },
    "Roger Deakins (Volumetric ARRI)": {
        "prompt": (
            "cinematography styled after Roger Deakins, masterfully controlled single-source volumetric light, pristine camera composition, naturalistic color"
        ),
    },
    "Christopher Nolan (IMAX 70mm)": {
        "prompt": (
            "cinematography styled after Christopher Nolan, epic practical IMAX camera scale, tactile analog depth, intense dramatic realism"
        ),
    },
    "Wong Kar-wai (Neon & Motion)": {
        "prompt": (
            "cinematography styled after Wong Kar-wai, step-printed motion blur, drenched neon camera shot, intimate nostalgic atmosphere"
        ),
    },
    "Denis Villeneuve (Monolithic Sci-Fi)": {
        "prompt": (
            "cinematography styled after Denis Villeneuve, brutalist monolithic architecture, fog haze atmosphere, camera framed in austere color palette"
        ),
    },
    "Quentin Tarantino (Punchy 35mm)": {
        "prompt": (
            "cinematography styled after Quentin Tarantino, low-angle trunk camera shot framing, vibrant 35mm Technicolor saturation, sharp practical details"
        ),
    },
}

RIG_DEFAULTS: Dict[str, str] = {
    "setup_mode": SETUP_PRESET,
    "camera": "RED V-RAPTOR XL",
    "lens": "Helios 44-2 (Vintage)",
    "focal_length": "50mm (Human Eye)",
    "aperture": "f/11 (Deep Focus)",
    "camera_angle": "Auto / Neutral",
    "shot_framing": "Auto / Neutral",
    "camera_movement": "Static (Tripod Locked)",
    "lighting_setup": "Auto / Natural",
    "optics_filter": "None / Pure Optic",
    "director_preset": "Custom Rig",
    "color_grading": "Teal & Orange (Blockbuster)",
}


def setup_mode_options() -> List[str]:
    return list(SETUP_MODES)


def camera_options() -> List[str]:
    return list(CINEMA_CAMERAS)


def lens_options() -> List[str]:
    return list(CINEMA_LENSES)


def focal_length_options() -> List[str]:
    return list(CINEMA_FOCAL_LENGTHS)


def aperture_options() -> List[str]:
    return list(CINEMA_APERTURES)


def camera_angle_options() -> List[str]:
    return list(CINEMA_ANGLES)


def shot_framing_options() -> List[str]:
    return list(CINEMA_FRAMINGS)


def camera_movement_options() -> List[str]:
    return list(CINEMA_MOVEMENTS)


def lighting_setup_options() -> List[str]:
    return list(CINEMA_LIGHTING)


def optics_filter_options() -> List[str]:
    return list(CINEMA_OPTICS)


def director_preset_options() -> List[str]:
    return list(CINEMA_DIRECTOR_PRESETS)


def grading_options() -> List[str]:
    return list(CINEMA_GRADINGS)


def wrapper_for_camera(camera: str) -> Tuple[str, str]:
    """Medium prefix/suffix for a camera body; neutral pair for unknown names.

    A renamed preset surviving in a saved workflow still produces a real
    prompt — the camera text falls through as literal wording (see
    `assemble_rig`), it just loses the wrapper pair.
    """
    info = CINEMA_CAMERAS.get(camera)
    if not info:
        return "", ""
    if info.get("type") == CAMERA_TYPE_FILM:
        return FILM_PREFIX, FILM_SUFFIX
    return DIGITAL_PREFIX, DIGITAL_SUFFIX


def _axis_prompt(source: Dict[str, object], name: str) -> str:
    """Resolve an axis selection to its prompt text.

    Unknown names (a preset renamed after a workflow was saved) fall through
    as their own literal text, the way `get_style_prompt` treats unknown
    styles — dropping them would silently shorten a saved rig.
    """
    if not name:
        return ""
    entry = source.get(name)
    if isinstance(entry, dict):
        return str(entry.get("prompt", ""))
    if isinstance(entry, str):
        return entry
    return str(name)


def assemble_rig(
    scene_prompt: str = "",
    camera: str = "",
    lens: str = "",
    focal_length: str = "",
    aperture: str = "",
    camera_angle: str = "",
    shot_framing: str = "",
    camera_movement: str = "",
    lighting_setup: str = "",
    optics_filter: str = "",
    director_preset: str = "",
    color_grading: str = "",
    enable_grading: bool = True,
    mode: str = MODE_ORIGINAL,
    setup_mode: str = SETUP_PRESET,
) -> Tuple[str, str]:
    """Assemble the rig. Returns ``(rigged_prompt, rig_overlay)``.

    * ``rig_overlay`` is the camera department alone — wrapper, hardware, optics,
      movement, lighting, director style and color grade finish — ready to stack.
    * ``rigged_prompt`` is the full shot. In Original Shot the medium anchor
      leads, the scene follows inside the CLIP-visible window, and the
      hardware plus finish close. In Reshoot the scene is replaced by the
      identity-lock sentence, because the reference image carries it.
    """
    if setup_mode == SETUP_PRESET and director_preset and director_preset != "Custom Rig":
        if camera == RIG_DEFAULTS.get("camera"):
            camera = "Auto / Neutral"
        if lens == RIG_DEFAULTS.get("lens"):
            lens = "Auto / Neutral"
        if focal_length == RIG_DEFAULTS.get("focal_length"):
            focal_length = "Auto / Neutral"
        if aperture == RIG_DEFAULTS.get("aperture"):
            aperture = "Auto / Neutral"
        if camera_movement == RIG_DEFAULTS.get("camera_movement"):
            camera_movement = "Auto / Neutral"
        if color_grading == RIG_DEFAULTS.get("color_grading"):
            color_grading = "Auto / Neutral"

    prefix, suffix = wrapper_for_camera(camera)
    head = [
        part
        for part in (
            _axis_prompt(CINEMA_FRAMINGS, shot_framing),
            _axis_prompt(CINEMA_ANGLES, camera_angle),
            _axis_prompt(CINEMA_FOCAL_LENGTHS, focal_length),
            _axis_prompt(CINEMA_DIRECTOR_PRESETS, director_preset),
            _axis_prompt(CINEMA_CAMERAS, camera),
            _axis_prompt(CINEMA_LENSES, lens),
            _axis_prompt(CINEMA_APERTURES, aperture),
            _axis_prompt(CINEMA_MOVEMENTS, camera_movement),
            _axis_prompt(CINEMA_LIGHTING, lighting_setup),
            _axis_prompt(CINEMA_OPTICS, optics_filter),
        )
        if part
    ]
    grade = _axis_prompt(CINEMA_GRADINGS, color_grading) if enable_grading else ""

    def _chain(parts: List[str]) -> str:
        return ", ".join(p.strip().rstrip(".") for p in parts if p and p.strip())

    closing = _chain(head + ([grade] if grade else []) + ([suffix] if suffix else []))
    rig_overlay = _chain(([prefix] if prefix else []) + [closing])

    if mode == MODE_RESHOOT:
        return (RESHOOT_LOCK + rig_overlay).strip(), rig_overlay

    scene = str(scene_prompt or "").strip()
    if scene and prefix:
        rigged_prompt = f"{prefix.strip()}\n\n{scene}\n\n{closing}"
    elif scene:
        rigged_prompt = f"{scene}\n\n{closing}"
    else:
        rigged_prompt = rig_overlay
    return rigged_prompt.strip(), rig_overlay

