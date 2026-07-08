"""Category and policy resolution for FiL_LLM style enforcement."""

from __future__ import annotations

import re
from typing import Any, Callable, Dict

from .rules import CAMERA_OVERRIDE_PROFILES, CATEGORY_DETECTION_PRIORITY, CATEGORY_PATTERNS
from .text import _keyword_in_text


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
