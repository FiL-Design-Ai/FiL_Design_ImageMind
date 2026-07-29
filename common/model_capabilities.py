"""What a model can actually do — asked of the provider, not guessed.

Every vision badge in the pack used to come from substring matching over the
model id (``VISION_MODEL_HINTS``). A live audit of all five cloud providers on
2026-07-29 showed what that costs:

* OpenAI — 0 of 119 models were badged, ``gpt-4o`` and the whole ``gpt-5.x``
  line included, because no hint token matched them.
* Groq — ``gpt-oss-120b/20b/safeguard-20b`` were badged (token ``gpt-oss``)
  while Groq declares them ``input_modalities: ["text"]``; meanwhile the one
  model Groq *does* declare image-capable, ``qwen/qwen3.6-27b``, was badged
  text.
* OpenRouter — 190 of the 211 models it declares image-capable were badged
  text, the entire Anthropic and Gemini lines among them.

Three of the five providers publish the answer in their own ``/models``
response: OpenRouter as ``architecture.input_modalities``, Groq as
``input_modalities``, Cloudflare as ``properties.vision``. This module reads
that instead of guessing, and keeps guessing only where nobody publishes
anything — OpenAI (whose ``/models`` returns id/created/owned_by and nothing
else) and the two local providers.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional

# ---------------------------------------------------------------------------
# OpenAI — the one cloud provider that declares nothing
# ---------------------------------------------------------------------------

# Taken from OpenRouter's declarations for the same upstream models, which is
# the closest thing to a first-party statement available without an OpenAI
# billing account. Order matters: the text-only rules run first, because
# `o3-mini` starts with `o3` and `gpt-oss` is served under the openai/ vendor.
OPENAI_TEXT_ONLY_PREFIXES = (
    "gpt-3.5",
    "gpt-audio",
    "o3-mini",
    "babbage-",
    "davinci-",
)
OPENAI_VISION_PREFIXES = (
    "gpt-4-turbo",
    "gpt-4o",
    "gpt-4.1",
    "gpt-5",
    "chatgpt-",
    "gpt-chat-",
    "o1",
    "o3",
    "o4-mini",
)

# ---------------------------------------------------------------------------
# Models that are not chat models at all
# ---------------------------------------------------------------------------

# A provider's /models list is a catalogue of everything the account can call,
# not a list of things this pack can talk to. Left unfiltered, the Provider
# Loader dropdown offers `whisper-1`, `tts-1`, `text-embedding-3-large` and
# `lyria-3-pro-preview` as if they were chat models.
NON_CHAT_MARKERS: Dict[str, tuple[str, ...]] = {
    "openai": (
        "whisper",
        "tts-1",
        "-tts",
        "-transcribe",
        "text-embedding-",
        "omni-moderation",
        "sora-",
        "gpt-image-",
        "chatgpt-image",
        "-realtime",
        "live-transcribe",
        "babbage-",
        "davinci-",
        "gpt-3.5-turbo-instruct",
    ),
    # Google's generateContent covers music (Lyria) and image generation
    # (Nano Banana, the *-image variants), so the method alone proves nothing.
    "google": (
        "-tts",
        "lyria-",
        "nano-banana",
        "imagen",
        "veo-",
        "-image",
        # Agentic products behind the same `generateContent` method: both
        # answered 400 to an ordinary chat call on 2026-07-29. `robotics-er` is
        # deliberately absent — 1.5 is withdrawn (404) but 1.6 writes prompts
        # fine, so the family is not the problem.
        "deep-research",
        "antigravity",
    ),
    "groq": (
        "whisper",
        "orpheus",
        "prompt-guard",
        "llama-guard",
    ),
    # Cloudflare's catalogue is already narrowed to Text Generation, so only
    # the safety classifiers slip through: `llama-guard-3-8b` replies with a
    # safe/unsafe verdict, which the Provider Loader offered as a prompt
    # writer. `safeguard` is deliberately not here — Groq's
    # `gpt-oss-safeguard-20b` does write prompts.
    "cloudflare": ("llama-guard",),
}


def is_chat_capable(provider: str, model: str, entry: Optional[Dict[str, Any]] = None) -> bool:
    """Can this model be used as a chat model at all?

    ``entry`` is the raw item from the provider's ``/models`` response when we
    have it: a declared input modality without ``text`` (Whisper takes audio,
    not text) settles the question without any name matching.
    """
    clean = (model or "").strip().lower()
    if not clean:
        return False

    if entry:
        declared_inputs = _declared_input_modalities(entry)
        if declared_inputs is not None and "text" not in declared_inputs:
            return False

    markers = NON_CHAT_MARKERS.get(str(provider or "").strip().lower(), ())
    return not any(marker in clean for marker in markers)


# ---------------------------------------------------------------------------
# Vision, straight from the provider
# ---------------------------------------------------------------------------


def _declared_input_modalities(entry: Dict[str, Any]) -> Optional[List[str]]:
    """Input modalities as the provider states them, or None if it doesn't."""
    architecture = entry.get("architecture")
    if isinstance(architecture, dict):
        modalities = architecture.get("input_modalities")
        if isinstance(modalities, list):
            return [str(m).lower() for m in modalities]
    modalities = entry.get("input_modalities")
    if isinstance(modalities, list):
        return [str(m).lower() for m in modalities]
    return None


def declared_vision(provider: str, entry: Dict[str, Any]) -> Optional[bool]:
    """The provider's own answer about images, or None if it gives none.

    None is not "no" — it means ask someone else. Collapsing the two is how
    every OpenAI model ended up without a badge.
    """
    if not isinstance(entry, dict):
        return None

    modalities = _declared_input_modalities(entry)
    if modalities is not None:
        return "image" in modalities

    # Cloudflare ships capabilities as a properties array, not modalities.
    properties = entry.get("properties")
    if isinstance(properties, list):
        for prop in properties:
            if isinstance(prop, dict) and prop.get("property_id") == "vision":
                return str(prop.get("value", "")).strip().lower() == "true"
        # A Cloudflare catalogue entry that lists properties but no `vision`
        # flag is a text model — there the absence really is an answer.
        return False
    if isinstance(properties, dict) and "vision" in properties:
        return str(properties.get("vision", "")).strip().lower() == "true"

    return None


# Provider answers seen during the last listing, so the name-only callers
# (`node_scanner`, `node_decomposer`, `node_dataset`) get the same verdict as
# the dropdown instead of falling back to hints.
_DECLARED: Dict[str, bool] = {}


def _key(provider: str, model: str) -> str:
    return f"{str(provider or '').strip().lower()}::{str(model or '').strip().lower()}"


def remember_declared(provider: str, model: str, vision: bool) -> None:
    _DECLARED[_key(provider, model)] = bool(vision)


def forget_declared(provider: Optional[str] = None) -> None:
    if provider is None:
        _DECLARED.clear()
        return
    prefix = f"{str(provider).strip().lower()}::"
    for key in [k for k in _DECLARED if k.startswith(prefix)]:
        del _DECLARED[key]


def known_declaration(provider: str, model: str) -> Optional[bool]:
    return _DECLARED.get(_key(provider, model))


def resolve_vision(provider: str, model: str) -> bool:
    """Final verdict, best source first.

    1. what the provider said when we last listed its models
    2. the OpenAI table, for the provider that says nothing
    3. Google, whose Gemini chat models are multimodal across the board
    4. a recorded vision smoke result
    5. name hints — local models only, by the time we get here
    """
    prov = str(provider or "").strip().lower()
    clean = (model or "").strip().lower()
    if not clean:
        return False

    declared = known_declaration(prov, clean)
    if declared is not None:
        return declared

    if prov == "openai":
        if any(clean.startswith(p) for p in OPENAI_TEXT_ONLY_PREFIXES) or "gpt-oss" in clean:
            return False
        return any(clean.startswith(p) for p in OPENAI_VISION_PREFIXES)

    if prov == "google":
        # Gemini chat models all take images; the non-chat entries in Google's
        # list (TTS, Lyria, image generation) are filtered before this point.
        return is_chat_capable("google", clean)

    try:
        from .vision_smoke import is_vision_capable as _smoke_check

        return _smoke_check(provider, model)
    except ImportError:
        from .config import is_known_vision_model_name

        return is_known_vision_model_name(model)
