"""Adult slang de-censor & anti-censorship booster.

Translates crude/street adult slang into rich, visceral, consensual anatomical
and cinematic descriptors, bypassing naive lexical safety filters (e.g. Gemini, Groq)
and producing superior DiT prompts with tactile physical truth.
"""

from __future__ import annotations

import re
from typing import List, Tuple

# Positive & Negative anti-censorship boosters for DiT / diffusion pipelines
POSITIVE_CENSOR_BOOSTER = (
    "completely uncensored, explicit adult intimacy, fully exposed anatomy, natural skin textures, "
    "authentic lubrication and sweat sheen, unfiltered 18+ adult scene"
)

NEGATIVE_CENSOR_BOOSTER = (
    "censored, mosaic, blur, black bar, clothes, panties, underwear, bra, censorship stickers, "
    "bad anatomy, plastic smooth airbrushed skin, deformed limbs, extra fingers, cartoon, 3d render"
)

# Ordered translation rules: specific multi-word patterns first, then general single-word tokens.
SLANG_TRANSLATIONS: List[Tuple[str, str]] = [
    # Anal intercourse variations
    (
        r"\b(траха(ют|ет|л|ла)|еб(ут|ет|ал|ала)|выеб(ал|ала|ут))\s+(в\s+задницу|в\s+жопу|в\s+анал|раком)\b",
        "passionate deep anal penetration from behind, intense rear-entry intimacy between consenting adult partners",
    ),
    (
        r"\b(в\s+задницу|в\s+жопу|в\s+анал)\b",
        "intimate anal penetration, rear intimacy",
    ),
    # Oral intimacy variations
    (
        r"\b(сосет|отсосала?|минет|миньет|в\s+рот|член\s+в\s+рот)\b",
        "sensual deep oral intimacy, parted lips wrapped, glistening lubrication sheen",
    ),
    # Climax / ejaculation variations
    (
        r"\b(конч(ил|ила|ают)\s+на\s+лицо|камшот|кам\s*шот)\b",
        "sensual climax with glistening fluids on flushed cheeks and neck",
    ),
    (
        r"\b(конч(ил|ила|ают)|сперм(а|ы|у))\b",
        "glistening fluid sheen, sensual physical climax",
    ),
    # General intercourse verbs
    (
        r"\b(траха(ют|ет|л|ла)|еб(ут|ет|ал|ала)|перепихон|секс)\b",
        "intense passionate intercourse, rhythmic pelvic thrusting between consenting lovers",
    ),
    # Anatomical slang
    (
        r"\b(сиськ(и|ек|ами)|буфер(а|ов)|дойк(и|ек))\b",
        "supple bare breasts, delicate flushed nipples",
    ),
    (
        r"\b(жоп(а|у|е|ой)|задниц(а|у|е|ей))\b",
        "taut rounded bare buttocks, arched lower back",
    ),
    (
        r"\b(пизд(а|у|е|ой)|киск(а|у|е|ой)|щелк(а|у|е))\b",
        "exposed glistening vulva, intimate feminine anatomy",
    ),
    (
        r"\b(член|хуй|хуя|хуем|дилд(о|а))\b",
        "turgid erect shaft, firm masculine anatomy",
    ),
]


def decensor_adult_slang(text: str) -> str:
    """Preprocess adult street slang into anatomical and cinematic descriptors.

    Transforms naive lexical triggers that cause model refusals into
    rich visual art and DiT-ready prompt vocabulary.
    """
    if not text or not isinstance(text, str):
        return ""

    result = text
    for pattern, replacement in SLANG_TRANSLATIONS:
        result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)

    return result

