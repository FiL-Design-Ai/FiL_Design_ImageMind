"""The photo library must ask for photographs.

A diffusion model decides the medium from the words it is given. A style that
only describes a scene — "bohemian interior design, layered textiles, macrame
decor" — names no medium at all, and the model is free to answer with an
illustration, a 3D render or concept art. 69 of the 157 entries were in exactly
that state, which is why the "photo" styles kept coming back looking painted.

Two rules, both mechanical:

1. every style names a capture — a camera, a lens, a film stock, an exposure,
   or at minimum the word photograph;
2. no style contains a word that asks for something other than a photograph.

Rule 2 matters as much as rule 1: `photo-real render look` was in the library,
and "render" is the one thing the whole category is trying not to be.
"""

from __future__ import annotations

import re

import pytest

from FiL_Design_ImageMind.common.styles.photo import PHOTO_STYLES

# Words that commit the prompt to a photographic capture. `\d+mm` covers lens
# choices, `f/` apertures, `1/\d+s` shutter speeds.
PHOTOGRAPHIC_ANCHORS = re.compile(
    r"""
    photo|photograph|photographic|photojournalis
    |camera|lens|shot\ on|shutter|aperture|exposure|iso\b
    |film|footage|negative|emulsion|tintype|plate|print
    |bokeh|grain|flash|dslr|medium-format|large-format
    |\d+mm|f/\d|1/\d+s
    |radiograph|micrograph|microscope
    """,
    re.IGNORECASE | re.VERBOSE,
)

# Words that pull the result away from a photograph. `rendering` is listed as a
# whole word so "optical rendering" is caught but "surrendering" would not be.
NON_PHOTOGRAPHIC = re.compile(
    r"\b(render|rendered|rendering|cgi|illustration|illustrated|painting|painted"
    r"|drawing|artwork|concept\s+art|stylized|stylised|anime|manga|cartoon)\b",
    re.IGNORECASE,
)

# "light painting" and "light drawing" are the names of a real long-exposure
# technique, and a phrase like "without cartoon gore" is a constraint pushing
# the same way this rule does. Neither is the library asking for a picture.
ALLOWED_IN_CONTEXT = re.compile(
    r"light\s+(painting|drawing)|without\s+\w*\s*(cartoon|painted|illustration)",
    re.IGNORECASE,
)


def _offending_words(text: str) -> list[str]:
    cleaned = ALLOWED_IN_CONTEXT.sub(" ", text)
    return NON_PHOTOGRAPHIC.findall(cleaned)


def _entries() -> list[tuple[str, str]]:
    return [(name, text) for name, text in PHOTO_STYLES.items() if text]


@pytest.mark.parametrize("name,text", _entries(), ids=lambda v: v if isinstance(v, str) else "")
def test_every_photo_style_names_a_capture(name: str, text: str) -> None:
    assert PHOTOGRAPHIC_ANCHORS.search(text), (
        f"{name!r} describes a scene but never says it is a photograph — "
        "name a camera, lens, film stock or exposure"
    )


@pytest.mark.parametrize("name,text", _entries(), ids=lambda v: v if isinstance(v, str) else "")
def test_no_photo_style_asks_for_something_other_than_a_photograph(name: str, text: str) -> None:
    found = _offending_words(text)
    assert not found, f"{name!r} asks for {found} — this library is photographs only"


def test_the_library_is_not_accidentally_empty() -> None:
    """Guards the two tests above: parametrising over an empty list passes."""
    assert len(_entries()) > 100


def test_no_photo_style_resolves_to_a_category_that_forbids_photographs() -> None:
    """The deepest cause, and the one no amount of good wording could fix.

    Category detection reads the style text and cannot see which library it
    came from. Ten entries therefore resolved into categories whose own rules
    strip photography back out: `comic` replaces "photograph" with
    "illustration" and demands "sequential/comic graphic language";
    `Cybernetic Arm Close-Up` resolved to `oil_painting`. The style asked for a
    photo and the engine then forbade the word.
    """
    from FiL_Design_ImageMind.common.style_engine.resolver import (
        _ANTI_PHOTOGRAPHIC,
        detect_style_category,
    )

    assert _ANTI_PHOTOGRAPHIC, "the hostile-category set must not be empty"
    offenders = {
        name: detect_style_category(text, {})
        for name, text in _entries()
        if detect_style_category(text, {}) in _ANTI_PHOTOGRAPHIC
    }
    assert not offenders, f"photo styles routed into anti-photographic categories: {offenders}"


def test_the_guard_leaves_the_art_library_alone() -> None:
    """The guard keys off photo-library membership, not off wording.

    An art style is allowed — required, even — to resolve to `comic` or
    `oil_painting`; only the photo library is pulled back.
    """
    from FiL_Design_ImageMind.common.style_engine.resolver import detect_style_category
    from FiL_Design_ImageMind.common.styles.art import ART_STYLES

    categories = {detect_style_category(text, {}) for text in ART_STYLES.values() if text}
    assert "comic" in categories, "art styles must still be free to resolve to comic"
    assert "photo" not in categories, "no art style should be reclassified as a photograph"
