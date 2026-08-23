"""Per-reference roles for the Edit Encoder — a job per picture.

Lives in `common/` rather than beside the node because the frontend contract
layer needs the same vocabulary, and that layer may not import from `nodes`:
the package shares its name with ComfyUI's own top-level `nodes.py`, so an
absolute import there resolves to whichever is on `sys.path` first, and
`tests/test_contract_generation.py` fails the build over it. Nothing in this
module imports anything but `json`, which is what makes both callers safe.

The node used to say what to do with the references *once*, for all of them:
one treatment, one ready-made opening prepended to the prompt. That is the
wrong shape for the thing people actually want, which is "this picture for its
subject, that one for its palette". Saying it needed two fields typed in slot
order (`treatment_per_reference`) plus a prompt written by hand, and the two
could disagree without anything noticing.

A role is one answer to "what do I take from this picture", and it carries
everything that answer implies:

  * the treatment applied before the text encoder looks at it — the mechanism
    that makes "style, not subject" true rather than merely asked for
    (`nodes/_edit_reference_prep`),
  * the line that tells the encoder the same thing in words.

Both halves matter and neither is sufficient. `node_edit_encoder` has the
measurement written up at length: a prompt asking for style only and no
treatment reproduced the reference's subject in full, and the preset promising
it was cut for lying. Treatment without words works but leaves the model to
guess why it was handed a colour field.

Two channels, because there are two kinds of encoder
----------------------------------------------------
`system_lines` builds the block for a vision-language encoder's system
template — Qwen3-VL and friends, which read a role before they look at the
pictures. `inline_prefix` says the same thing as plain text at the front of the
instruction, for encoders that have no such channel (FLUX.2's Mistral3, which
would read a Qwen chat template literally — see `_speaks_vision`).

Exactly one of them is sent per run. Both would say it twice.

Provenance of the defaults
--------------------------
Rendered 2026-08-22 on Krea 2 (`cielbleu_krea2_v1_int8`, `qwen3vl_4b_int8_convrot`,
euler/simple, 8 steps, cfg 1), one seed, one reference — a portrait with
cybernetic implants — against the scene instruction "standing on a rainy Tokyo
street at night" in `vision` mode at 0.15 MP. The instruction is about a scene
on purpose: whatever of the reference survives is the role's doing.

  as is, subject     the reference's subject arrives in full, face and hardware
  material           soft blur barely lets go of the subject either
  lighting           the subject is replaced, and the reference's orange/blue
                     light signature comes through — the role works
  style, palette     palette wash removes the subject completely. Nothing is
                     left to hold on to, so the model invents a scene of its
                     own; broad colour is all that carries
  composition        grayscale kept the layout AND came out monochrome
  shape only         shape wash, the same, with the detail gone too

The last two were a real defect, not a wording problem: the encoder studies the
treated picture, so a grey picture makes a grey result. `krea-reference` hit the
same wall and answered it with per-layer conditioning weights (structure taps
separately from appearance taps), which this node has no equivalent of. Measured
answer without that machinery: a strong blur keeps the layout, changes the
subject, and leaves the colour alone. Both roles now use it, and `grayscale` and
`shape wash` remain as manual treatments for anyone who wants the drain.

What the same renders said about the role *list* is why it is now four entries
and not eight. The mechanism separates three behaviours plus the plain frame:

  as is (untreated)   the reference arrives whole
  soft blur           its subject loosens but stays
  strong blur         its light and layout stay, its subject is replaced
  palette wash        its colours stay, everything else goes

Every role that shared a treatment with another rendered the same picture, so
the extras were cut rather than kept as vocabulary: an option that changes
nothing you can see is an option that costs a decision and returns nothing. The
cut names live on in `MERGED_ROLES` so saved workflows keep their meaning.

The four that remain are what this node can currently prove. Splitting `light`
from `layout`, or `style` from `palette`, would need a mechanism that reaches
the encoder at more than one depth, and the obvious candidate has been tried
and rejected: `nodes/_edit_clip_hooks.scaled_images` carries the renders. In
short, `krea-reference`'s "per-layer weights" do not describe this
architecture, and the real depth seam it does have — the base image embedding
against the `deepstack` injections — turned out to carry the identity entirely
in the base half, with the injections too weak to steer. Bringing any of the
cut roles back means bringing a render where it differs, not an argument.
"""

from __future__ import annotations

import json

# The default: the picture is handed over as it is, and nothing is said about
# it. This is what every reference did before roles existed, so it has to stay
# the value a card falls back to — a saved workflow must not start editing
# differently because a new field appeared.
DEFAULT_ROLE = "as is"

# How hard one reference pulls, and which way. 1.0 is the plain encode; 0
# drops that reference without dropping the picture from the prompt template
# (the token count has to stay put); below zero pushes away from it.
STRENGTH_MIN = -1.0
STRENGTH_MAX = 2.0


class _Role:
    """One job a reference can be given.

    `treatment` is `None` for the default role only, which is what lets the
    node's own `reference_treatment` widget keep meaning something: it applies
    to the slots that were not given a job of their own.
    """

    __slots__ = ("treatment", "system", "inline")

    def __init__(self, treatment, system, inline):
        self.treatment = treatment
        self.system = system
        self.inline = inline


ROLES: dict[str, _Role] = {
    DEFAULT_ROLE: _Role(None, "", ""),
    "material": _Role(
        "soft blur",
        "take its surface: texture, finish, and the way the material catches "
        "light. Its subject may loosen but will not leave",
        "use its surface and texture",
    ),
    "lighting": _Role(
        "strong blur",
        "take its light and its layout: direction, contrast, mood, colour cast, "
        "and where things sit in frame. Not its subject",
        "use its light and layout, not its subject",
    ),
    "palette": _Role(
        "palette wash",
        "take only its colours and the relationships between them. Nothing of "
        "its subject, its shapes or its light",
        "use its colours only",
    ),
}

# Roles that were offered and could not be told apart from the one they map to.
#
# Cut on the renders described above, not on taste: `subject` matched the plain
# `as is` frame for frame, `style` matched `palette`, and `composition` and
# `shape only` matched `lighting`. Each pair shares a treatment, and on this
# architecture the treatment is what does the work — the differing system-prompt
# wording moved nothing that could be seen.
#
# They are kept as aliases rather than deleted because saved workflows carry
# them, and a card silently falling back to the default role would change what a
# graph does without saying so. Naming one here is also the honest record of
# what was tried: re-adding any of them means showing a render where it differs.
MERGED_ROLES = {
    "subject": DEFAULT_ROLE,
    "style": "palette",
    "composition": "lighting",
    "shape only": "lighting",
}


def resolve_role(name: str) -> str:
    """The role this name means today — itself, its survivor, or the default."""
    if name in ROLES:
        return name
    return MERGED_ROLES.get(name, DEFAULT_ROLE)


ROLE_NAMES = list(ROLES)


# What `prompt_preset` used to mean, kept as a migration and nothing more.
#
# The field was a combo at a fixed position in every saved workflow's widget
# values, and `reference_cards` now occupies that position deliberately: an old
# workflow hands its preset name to the card parser instead of shifting every
# widget after it by one. The parser recognises these four strings and turns
# them into the role that replaced them.
#
# 'edit this image' maps to nothing on purpose. `node_edit_encoder` measured it
# as indistinguishable from saying nothing — in `vision` mode the encoder is
# looking at the reference whatever the words say.
_LEGACY_PRESETS = {
    "none": None,
    "edit this image": None,
    "keep subject, change scene": "subject",
    "use as style reference": "style",
}


def parse_cards(text: str, count: int) -> list[dict]:
    """One card per reference, in slot order, however the field was filled in.

    The field is JSON — `[{"role": "lighting"}, {"role": "palette"}]` — because the
    panel writes it and a hand-built API prompt has to be able to as well. It is
    parsed leniently on purpose: this is a field that can be typed into, and a
    misplaced bracket should not fail a run that would otherwise work. Anything
    unreadable yields default cards, and the summary says which roles were
    actually used.

    Missing entries pad with the default role rather than repeating the last
    one, which is where this deliberately differs from `_treatments_for`. A
    treatment is a setting and repeating it reads as "the same for all of
    them"; a role is a job given to one picture, and handing reference 3 the job
    that was written for reference 2 is a guess this node has no business
    making.
    """
    cards = [
        {"role": DEFAULT_ROLE, "treatment": "", "strength": 1.0, "window": DEFAULT_WINDOW}
        for _ in range(count)
    ]
    text = (text or "").strip()
    if not text:
        return cards

    legacy = _LEGACY_PRESETS.get(text, "")
    if legacy != "":
        # A saved workflow's `prompt_preset` value arriving in this slot. The
        # preset applied to the whole prompt, so it lands on the first
        # reference — the one it was always written about.
        if legacy and cards:
            # Through `resolve_role` rather than straight in: the table records
            # what the preset meant, and what it meant may since have been
            # merged into another role.
            cards[0]["role"] = resolve_role(legacy)
        return cards

    try:
        parsed = json.loads(text)
    except (ValueError, TypeError):
        return cards
    if not isinstance(parsed, list):
        return cards

    for slot, entry in enumerate(parsed):
        if slot >= count:
            break
        if not isinstance(entry, dict):
            continue
        cards[slot]["role"] = resolve_role(str(entry.get("role") or DEFAULT_ROLE))
        cards[slot]["treatment"] = str(entry.get("treatment") or "")
        cards[slot]["strength"] = _strength(entry.get("strength"))
        cards[slot]["window"] = _window(entry.get("window"))
    return cards


# When during sampling a reference is allowed to speak.
#
# Rendered on Krea 2 2026-08-23, 24 steps, one reference, one seed, the scene
# instruction "standing on a rainy Tokyo street at night", with the windows
# built by hand out of core's `ConditioningSetTimestepRange` and
# `ConditioningCombine` so the answer did not depend on this node being right:
#
#   reference only in the first 15%   the reference is gone — an ordinary
#                                     woman in a hoodie — but the framing is
#                                     the reference's: a portrait, head on
#   reference only in the first 40%   subject and armour arrive, the fine face
#                                     markings do not
#   reference only after 40%          a full-length figure with an umbrella,
#                                     wearing the reference's armour: the
#                                     instruction decided the frame, the
#                                     reference decided the surface
#   reference only after 15%          near enough the plain encode
#
# So the early steps carry layout and the later ones carry look, and the
# boundary is not where a round number would put it: at 0.15 the reference
# still dictates the composition, at 0.4 it no longer does.
#
# What this node builds out of those numbers was then rendered against the
# hand-built version and came back pixel-identical — mean absolute difference
# 0.00/255, maximum 0, for both windows — while differing from a windowless
# render by 52/255 and 35/255. So the segmenting and the concatenation do
# exactly what assembling it by hand does, and they are not quietly doing
# nothing.
#
# The same test at 8 steps says none of this — it reads as a plain on/off
# switch, because 15% of eight steps is one step. Anyone re-measuring this
# needs a realistic step count or they will conclude the feature does nothing.
WINDOWS = {
    "whole run": (0.0, 1.0),
    "layout": (0.0, 0.15),
    "look": (0.4, 1.0),
}
DEFAULT_WINDOW = "whole run"

# Every boundary any window can start or end on, which is where the sampling
# run has to be cut into segments.
WINDOW_EDGES = sorted({edge for window in WINDOWS.values() for edge in window})


def _window(value) -> str:
    """One card's window, defaulting to the whole run for anything unreadable."""
    name = str(value or DEFAULT_WINDOW)
    return name if name in WINDOWS else DEFAULT_WINDOW


def windows_for(cards: list[dict]) -> list[str]:
    """Each card's window in slot order."""
    return [str(card.get("window", DEFAULT_WINDOW)) for card in cards]


def active_at(window: str, start: float, end: float) -> bool:
    """True when a card with this window speaks over the whole `[start, end)`.

    Asked per segment rather than per step: segments are cut on the window
    edges, so a segment is always wholly inside a window or wholly outside it.
    """
    low, high = WINDOWS.get(window, WINDOWS[DEFAULT_WINDOW])
    return low <= start and end <= high


def _strength(value) -> float:
    """One card's pull, clamped to the range the node can actually deliver.

    Signed, because "how hard" and "which way" are one decision and reading
    them from two fields lets them disagree. Above zero the reference is
    weighed where the encoder looks at it; below zero it is pushed away, which
    costs an extra encoder pass and is the reason the floor is -1: that is the
    reference removed and pushed once as far again, and nothing measured says
    what lies past it.

    Measured on the same setup as the role table above, role `as is`, one
    reference, one seed:

      1.0    the reference holds — the baseline
      0.5    it still holds. The picture moves, the hardware is rearranged, but
             the subject is the same subject
      0.0    gone: an empty street and a stranger, nothing of the reference
      -0.5   not "gone" but inverted — the portrait framing comes back with the
             reference's traits turned over (a man in a suit where the
             reference had a woman in cybernetic armour)

    So the dial is not linear and the tooltips must not imply that it is. Nearly
    all of the loosening happens close to zero, and below zero is a different
    thing rather than less of the same. `prompt_strength` is the opposite —
    even the whole way across — which is why the two are described apart.

    Unreadable values become 1.0 — the same "a typo must not cost a render"
    rule the card parser follows.
    """
    if value is None:
        return 1.0
    try:
        number = float(value)
    except (TypeError, ValueError):
        return 1.0
    if number != number:  # NaN, which compares false against every bound
        return 1.0
    return max(STRENGTH_MIN, min(STRENGTH_MAX, number))


def strengths_for(cards: list[dict]) -> list[float]:
    """Each card's pull in slot order, defaulting to the plain encode."""
    return [float(card.get("strength", 1.0)) for card in cards]


def treatments_for(cards: list[dict], fallback: list[str]) -> list[str]:
    """The treatment each reference actually gets, and why.

    Precedence, highest first: the card's own override, the role's default, the
    node-wide treatment. The role beating the widget is the point — a role that
    did not bring its treatment would be a promise the node cannot keep, and
    "style" with the treatment left on `normal` is exactly the failure that got
    a prompt preset cut. The node-wide widget still decides every slot whose
    role is the default one, which is every slot in a workflow saved before
    roles existed.

    Returns `(name, source)` pairs so the summary can say where each came from
    rather than leaving a treatment nobody chose looking like a bug.
    """
    resolved = []
    for slot, card in enumerate(cards):
        override = (card.get("treatment") or "").strip()
        if override:
            resolved.append((override, "card"))
            continue
        role = ROLES.get(card.get("role", DEFAULT_ROLE))
        if role is not None and role.treatment:
            resolved.append((role.treatment, "role"))
            continue
        resolved.append((fallback[slot] if slot < len(fallback) else "normal", "widget"))
    return resolved


def _named(cards: list[dict]) -> list[tuple[int, _Role]]:
    """Slot number (1-based) and role for every card that was given a job."""
    out = []
    for slot, card in enumerate(cards, start=1):
        role = ROLES.get(card.get("role", DEFAULT_ROLE))
        if role is not None and role.system:
            out.append((slot, role))
    return out


def system_lines(cards: list[dict]) -> list[str]:
    """Role lines for a vision-language encoder's system block, in slot order.

    Numbered to match the `Picture N:` vision blocks the node writes, so "Input
    2" and the second picture are the same picture. Empty when no reference was
    given a job, which leaves the encoder's role exactly as it was.
    """
    return [f"Input {slot}: {role.system}." for slot, role in _named(cards)]


def inline_prefix(cards: list[dict]) -> str:
    """The same roles as plain text, for an encoder with no system channel.

    Prepended to the instruction, so it has to read as part of one sentence
    someone might have written: short, imperative, and ending with the
    separator the prompt continues after.
    """
    named = _named(cards)
    if not named:
        return ""
    return " ".join(f"Reference {slot}: {role.inline}." for slot, role in named) + " "
