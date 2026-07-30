"""Last-resort guess at whether a model accepts images, from its name.

This is the bottom of the ladder in `model_capabilities.is_vision_capable`: by
the time anything gets here, the provider itself has said nothing useful. Every
cloud provider is answered from its own `/models` response long before this.

There used to be a cached file of recorded probe results consulted ahead of
these hints (`data/provider_vision_smoke.json`). It was dropped in the
2026-07-29 audit: the data was from 2026-05-01 and carried the pack's old name,
the script that produced it was not in the repository, and the file was listed
in both `.gitignore` and `.comfyignore` — so no user ever received it and this
guess was already what everyone actually ran. Of its 24 entries, 18 recorded a
probe that had failed on a rate limit rather than any capability, and only two
changed a verdict; that one real finding — that the `gemma-3n` variants do not
take images despite matching the `gemma-3` hint — now lives in
`OPENROUTER_EXCLUDED_MODEL_IDS` where it can be read and edited.
"""

from __future__ import annotations

from .config import (
    OPENROUTER_EXCLUDED_MODEL_IDS,
    OPENROUTER_EXCLUDED_MODEL_PATTERNS,
    OPENROUTER_PREFERRED_VISION_MODELS,
    is_known_vision_model_name,
)
from .processing import normalize_model_name

OPENROUTER_STRICT_VISION_HINTS = (
    "vision",
    "-vl",
    "/vl",
    "_vl",
    "vl:",
    "omni",
    "ocr",
    "gemma-3",
    "gemma-4",
    "llama-4-scout",
    "llama-4-maverick",
    "llama-3.2-11b",
)


def is_vision_capable(provider: str, model: str) -> bool:
    prov = str(provider or "").strip().lower()
    if prov == "google":
        return True

    clean_model = normalize_model_name(model).lower()
    if prov == "openrouter":
        if clean_model in OPENROUTER_EXCLUDED_MODEL_IDS:
            return False
        if any(pattern in clean_model for pattern in OPENROUTER_EXCLUDED_MODEL_PATTERNS):
            return False
        if clean_model == "openrouter/free":
            return True
        if clean_model in set(OPENROUTER_PREFERRED_VISION_MODELS):
            return True
        return any(token in clean_model for token in OPENROUTER_STRICT_VISION_HINTS)

    return is_known_vision_model_name(model)
