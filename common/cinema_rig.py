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

POLISH_DETERMINISTIC = "Deterministic (Fast)"
POLISH_LLM = "LLM Polish (Gen-Rig)"
POLISH_MODES: List[str] = [POLISH_DETERMINISTIC, POLISH_LLM]

# ── Camera bodies ──────────────────────────────────────────────────────────
# `type` picks the medium wrapper pair in `wrapper_for_camera`.

CINEMA_CAMERAS: Dict[str, Dict[str, str]] = {
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

RIG_DEFAULTS: Dict[str, str] = {
    "camera": "RED V-RAPTOR XL",
    "lens": "Helios 44-2 (Vintage)",
    "focal_length": "50mm (Human Eye)",
    "aperture": "f/11 (Deep Focus)",
    "color_grading": "Teal & Orange (Blockbuster)",
}


def camera_options() -> List[str]:
    return list(CINEMA_CAMERAS)


def lens_options() -> List[str]:
    return list(CINEMA_LENSES)


def focal_length_options() -> List[str]:
    return list(CINEMA_FOCAL_LENGTHS)


def aperture_options() -> List[str]:
    return list(CINEMA_APERTURES)


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
    color_grading: str = "",
    enable_grading: bool = True,
    mode: str = MODE_ORIGINAL,
) -> Tuple[str, str]:
    """Assemble the rig. Returns ``(rigged_prompt, rig_overlay)``.

    * ``rig_overlay`` is the camera department alone — wrapper, four hardware
      axes, grade and finish — ready to stack under any prompt elsewhere.
    * ``rigged_prompt`` is the full shot. In Original Shot the medium anchor
      leads, the scene follows inside the CLIP-visible window, and the
      hardware plus finish close — a hardware-first sandwich buried the
      subject past CLIP-L's ~77-token truncation and a live SDXL render came
      back an empty street. In Reshoot the scene is replaced by the
      identity-lock sentence, because the reference image carries it.
    """
    prefix, suffix = wrapper_for_camera(camera)
    head = [
        part
        for part in (
            _axis_prompt(CINEMA_CAMERAS, camera),
            _axis_prompt(CINEMA_LENSES, lens),
            _axis_prompt(CINEMA_FOCAL_LENGTHS, focal_length),
            _axis_prompt(CINEMA_APERTURES, aperture),
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
