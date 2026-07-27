"""Caption generation for LoRA datasets.

The rule the prompts encode: **caption what varies, not what the trigger word
should own**. Anything consistent across the set that goes uncaptioned gets
absorbed into the concept — that is how a photo-only dataset ends up refusing
to render as illustration. So pose, clothing, background, framing, lighting and
camera angle are always described, while the invariants named in
`dont_caption` are explicitly forbidden.
"""

from __future__ import annotations

import re
from typing import Any, Callable

from ..clean_output import clean_output

CAPTION_MODES: tuple[str, ...] = ("natural", "tags", "hybrid", "none")

# Scanner joins a multi-image run with this; manual caption blocks use it too.
CAPTION_SEPARATOR = "---"

# Preambles `clean_output()` does not cover ("This image shows …", "a photo of
# …"). They are dead weight in every caption of the set, and — worse — "a photo
# of" silently teaches the medium as part of the concept.
_PREAMBLE_RE = re.compile(
    r"^(?:"
    r"(?:the|this)\s+(?:image|photo|photograph|picture|artwork|illustration|render)\s+"
    r"(?:shows|depicts|features|captures|presents|is\s+of)"
    r"|(?:an?\s+)?(?:photo|photograph|image|picture|close[- ]?up|render|illustration)\s+of"
    r")\s+",
    re.IGNORECASE,
)

_MODE_INSTRUCTIONS: dict[str, str] = {
    "natural": (
        "Write one flowing natural-language caption. Plain declarative prose, present tense, "
        "no bullet points, no line breaks."
    ),
    "tags": (
        "Write a comma-separated list of short lowercase tags (1-3 words each). "
        "No sentences, no articles, no trailing period."
    ),
    "hybrid": (
        "Write a comma-separated list of short descriptive phrases, ordered from the main "
        "subject outward to the background. One line, no sentences longer than a clause."
    ),
}


def build_caption_system_prompt(
    mode: str = "natural",
    language: str = "en",
    max_words: int = 60,
    class_token: str = "",
    dont_caption: str = "",
) -> str:
    """System prompt for a single dataset caption."""
    instruction = _MODE_INSTRUCTIONS.get(mode, _MODE_INSTRUCTIONS["natural"])
    subject = class_token.strip() or "the main subject"

    parts = [
        "You are captioning images for a LoRA training dataset.",
        instruction,
        f"Language: {language}. Hard limit: {max(4, int(max_words))} words.",
        "Describe only what VARIES between images of this set: "
        f"the pose and framing of {subject}, clothing and accessories, background and setting, "
        "lighting, camera angle and shot type, colour palette, and the medium "
        "(photograph, 3d render, illustration, painting).",
        "Do NOT describe the identity, permanent facial features or unchanging traits of "
        f"{subject} — those belong to the trigger word and must stay uncaptioned.",
        "Do not speculate about names, emotions, intent or story. State what is visible.",
        "Do not start with 'a photo of', 'this image shows' or any similar preamble.",
        "Output the caption only — no quotes, no markdown, no explanation.",
    ]
    if dont_caption.strip():
        parts.insert(
            5,
            "Never mention any of the following, they are the invariant concept: "
            f"{dont_caption.strip()}.",
        )
    return "\n".join(parts)


def build_caption_user_prompt(extra_instruction: str = "") -> str:
    base = "Caption this image for the training set."
    extra = extra_instruction.strip()
    return f"{base}\n\n{extra}" if extra else base


def normalize_caption(text: str, max_words: int = 0) -> str:
    """Collapse an LLM answer into one clean single-line caption."""
    cleaned = clean_output(text or "")
    cleaned = re.sub(r"\s*\n+\s*", " ", cleaned)
    cleaned = re.sub(r"\s{2,}", " ", cleaned).strip()
    cleaned = _PREAMBLE_RE.sub("", cleaned, count=1)
    cleaned = cleaned.strip(" ,;:-")
    if max_words and max_words > 0:
        words = cleaned.split(" ")
        if len(words) > max_words:
            cleaned = " ".join(words[:max_words]).rstrip(" ,;:-")
    return cleaned


def apply_trigger(caption: str, trigger_word: str = "", class_token: str = "") -> str:
    """Prefix the caption with ``<trigger> <class>``.

    Front position on purpose: kohya's `keep_tokens` protects leading tokens
    from caption shuffling, so the trigger stays attached to the concept.
    """
    prefix = " ".join(part for part in (trigger_word.strip(), class_token.strip()) if part)
    caption = caption.strip()
    if not prefix:
        return caption
    if not caption:
        return prefix
    return f"{prefix}, {caption}"


def split_manual_captions(text: str, count: int) -> list[str]:
    """Split a manual/Scanner caption block into exactly `count` captions.

    Accepts the `\\n\\n---\\n\\n` separator Optic Scanner emits for a batch.
    One caption for many images is broadcast to all of them; a short block is
    padded with empty strings rather than shifting captions onto wrong frames.
    """
    if not text or not text.strip():
        return [""] * count
    parts = [
        part.strip()
        for part in re.split(rf"^\s*{re.escape(CAPTION_SEPARATOR)}+\s*$", text.strip(), flags=re.MULTILINE)
    ]
    parts = [part for part in parts if part]
    if not parts:
        return [""] * count
    if len(parts) == 1 and count > 1:
        return parts * count
    if len(parts) < count:
        return parts + [""] * (count - len(parts))
    return parts[:count]


def caption_image(
    client: Any,
    *,
    provider: str,
    model: str,
    image_b64: str,
    mode: str = "natural",
    language: str = "en",
    max_words: int = 60,
    class_token: str = "",
    dont_caption: str = "",
    extra_instruction: str = "",
    temperature: float = 0.4,
    seed: int = -1,
    max_tokens: int | None = None,
    rate_limit_ms: int = 100,
    timeout: int | None = None,
) -> str:
    """One vision call → one normalized caption (no trigger word yet)."""
    raw = client.generate(
        provider=provider,
        model=model,
        system_prompt=build_caption_system_prompt(mode, language, max_words, class_token, dont_caption),
        user_prompt=build_caption_user_prompt(extra_instruction),
        images=[image_b64],
        temperature=temperature,
        seed=seed,
        max_tokens=max_tokens,
        response_format="text",
        timeout=timeout,
        rate_limit_ms=rate_limit_ms,
    )
    return normalize_caption(raw, max_words)


def caption_batch(
    client: Any,
    images_b64: list[str],
    *,
    provider: str,
    model: str,
    on_progress: Callable[[int, int], None] | None = None,
    **kwargs: Any,
) -> list[str]:
    """`caption_image` over a batch, with a seed bumped per frame.

    A shared seed makes `ModelClient`'s prompt cache return frame 1's caption
    for every identical-prompt frame, so each frame gets its own.
    """
    seed = int(kwargs.pop("seed", -1))
    captions: list[str] = []
    total = len(images_b64)
    for index, image_b64 in enumerate(images_b64):
        if on_progress is not None:
            on_progress(index, total)
        captions.append(
            caption_image(
                client,
                provider=provider,
                model=model,
                image_b64=image_b64,
                seed=seed + index if seed >= 0 else -1,
                **kwargs,
            )
        )
    return captions
