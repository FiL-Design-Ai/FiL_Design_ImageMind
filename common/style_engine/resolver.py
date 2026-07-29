"""Category and policy resolution for FiL_Design_ImageMind style enforcement."""

from __future__ import annotations

import re
from typing import Any, Callable, Dict

from .rules import (
    CAMERA_OVERRIDE_PROFILES,
    CATEGORY_DETECTION_PRIORITY,
    CATEGORY_FORBIDDEN,
    CATEGORY_PATTERNS,
)
from .text import _keyword_in_text

# Categories whose own rules forbid the word "photograph" — `comic` rewrites it
# to "illustration" and demands "sequential/comic graphic language", `art` turns
# it into a painting. Derived from the rules rather than listed by hand, so a
# new category with the same posture is covered the day it is added.
_ANTI_PHOTOGRAPHIC = frozenset(
    category
    for category, forbidden in CATEGORY_FORBIDDEN.items()
    for word in forbidden
    if word in ("photo", "photograph", "photorealistic", "camera")
)


def _photo_library_texts() -> frozenset[str]:
    """Every style string the photo libraries ship, lowercased.

    Detection reads free text and cannot see which library a style came from.
    That is how ten entries of the photo library ended up in categories that
    strip photography out of the prompt: `Cybernetic Arm Close-Up` resolved to
    `oil_painting`, `Electron Micro` and `Thermal Imager` to `comic`. The
    library itself is the missing evidence, so it is consulted here.
    """
    from ..styles.nsfw_photo import NSFW_PHOTO_STYLES
    from ..styles.photo import PHOTO_STYLES

    return frozenset(
        text.strip().lower()
        for library in (PHOTO_STYLES, NSFW_PHOTO_STYLES)
        for text in library.values()
        if text
    )


_photo_texts_cache: frozenset[str] | None = None


def _is_photo_library_style(style_lower: str) -> bool:
    global _photo_texts_cache
    if _photo_texts_cache is None:
        try:
            _photo_texts_cache = _photo_library_texts()
        except Exception:
            # A broken import must not take category detection down with it —
            # the guard is a correction, not a prerequisite.
            _photo_texts_cache = frozenset()
    return style_lower.strip() in _photo_texts_cache


def detect_style_category(style_text: str, category_cache: Dict[str, str] | None = None) -> str:
    """Detect which style category the style text belongs to."""
    if not style_text:
        return "general"

    cache = category_cache if category_cache is not None else {}
    style_lower = style_text.lower()
    normalized_style = re.sub(r"[\W_]+", " ", style_lower).strip()

    if style_lower in cache:
        return cache[style_lower]

    has_nsfw_marker = re.search(r"(?<![\w])(adult|explicit|nsfw)(?![\w])", normalized_style)
    if has_nsfw_marker:
        lead_clause = re.sub(r"[\W_]+", " ", style_lower.split(",", 1)[0]).strip()
        photo_medium = r"(?<![\w])(photo|photograph|photography|capture)(?![\w])"
        art_medium = r"(?<![\w])(illustration|painting|render|art|artwork|anime|manga|cgi|3d)(?![\w])"
        if re.search(photo_medium, lead_clause):
            cache[style_lower] = "nsfw_photo"
            return "nsfw_photo"
        if re.search(art_medium, lead_clause):
            cache[style_lower] = "nsfw_art"
            return "nsfw_art"
        if re.search(photo_medium, normalized_style):
            cache[style_lower] = "nsfw_photo"
            return "nsfw_photo"
        if re.search(art_medium, normalized_style):
            cache[style_lower] = "nsfw_art"
            return "nsfw_art"

    ordered_categories = [category for category in CATEGORY_DETECTION_PRIORITY if category in CATEGORY_PATTERNS]
    ordered_categories.extend(category for category in CATEGORY_PATTERNS.keys() if category not in ordered_categories)

    for category in ordered_categories:
        if category in {"nsfw_photo", "nsfw_art"} and not has_nsfw_marker:
            continue
        keywords = CATEGORY_PATTERNS.get(category, [])
        if any(_keyword_in_text(style_lower, kw) for kw in keywords):
            # A style out of the photo library must never land somewhere that
            # rewrites "photograph" into "illustration". The keyword match is a
            # guess over free text; library membership is a fact, so it wins.
            if category in _ANTI_PHOTOGRAPHIC and _is_photo_library_style(style_lower):
                cache[style_lower] = "photo"
                return "photo"
            cache[style_lower] = category
            return category

    cache[style_lower] = "general"
    return "general"


def resolve_style_policy(
    style_text: str,
    policy_cache: Dict[str, Dict[str, Any]] | None,
    detect_category: Callable[[str], str],
) -> Dict[str, Any]:
    """Return runtime style policy for prompt assembly and logging."""
    if not style_text:
        return {
            "category": "general",
            "camera_override_allowed": False,
            "camera_override_profile": None,
            "camera_override_contract": "",
        }

    cache = policy_cache if policy_cache is not None else {}
    style_lower = style_text.lower()
    if style_lower in cache:
        return cache[style_lower]

    category = detect_category(style_text)
    profile_name = None
    contract = ""
    for candidate, profile in CAMERA_OVERRIDE_PROFILES.items():
        if any(keyword in style_lower for keyword in profile["keywords"]):
            profile_name = candidate
            contract = profile["contract"]
            break

    policy = {
        "category": category,
        "camera_override_allowed": bool(profile_name),
        "camera_override_profile": profile_name,
        "camera_override_contract": contract,
    }
    cache[style_lower] = policy
    return policy
