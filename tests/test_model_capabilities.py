"""Vision badges and chat filtering, against the real /models response shapes.

Every payload below is trimmed from an actual provider response captured on
2026-07-29 — the run that found the pack badging `gpt-oss` as vision, missing
`qwen3.6-27b`, and offering `whisper-1` as a chat model.
"""

from __future__ import annotations

import pytest

from FiL_Design_ImageMind.common import model_capabilities as caps


@pytest.fixture(autouse=True)
def _clean_declarations():
    caps.forget_declared()
    yield
    caps.forget_declared()


# --- what the provider says, we repeat -------------------------------------


def test_groq_modalities_are_taken_from_the_response_not_the_name():
    gpt_oss = {"id": "openai/gpt-oss-20b", "input_modalities": ["text"], "output_modalities": ["text"]}
    qwen = {"id": "qwen/qwen3.6-27b", "input_modalities": ["text", "image"], "output_modalities": ["text"]}

    # The name says "gpt-oss", which the old hint list read as vision.
    assert caps.declared_vision("groq", gpt_oss) is False
    # And this one carries no vision-ish token at all, yet Groq declares it.
    assert caps.declared_vision("groq", qwen) is True


def test_openrouter_architecture_block_is_read():
    claude = {"id": "anthropic/claude-sonnet-5", "architecture": {"input_modalities": ["text", "image"]}}
    ling = {"id": "inclusionai/ling-3.0-flash:free", "architecture": {"input_modalities": ["text"]}}
    assert caps.declared_vision("openrouter", claude) is True
    assert caps.declared_vision("openrouter", ling) is False


def test_cloudflare_vision_property_is_read_and_its_absence_means_text():
    scout = {
        "name": "@cf/meta/llama-4-scout-17b-16e-instruct",
        "properties": [{"property_id": "vision", "value": "true"}, {"property_id": "context_window", "value": "131000"}],
    }
    glm = {
        "name": "@cf/zai-org/glm-5.2",
        "properties": [{"property_id": "context_window", "value": "262144"}],
    }
    assert caps.declared_vision("cloudflare", scout) is True
    assert caps.declared_vision("cloudflare", glm) is False


def test_a_provider_that_says_nothing_returns_none_not_false():
    """OpenAI's /models carries id/created/owned_by and nothing else.

    Reading that silence as "no" is what left all 119 OpenAI models unbadged.
    """
    assert caps.declared_vision("openai", {"id": "gpt-4o", "object": "model", "owned_by": "system"}) is None


# --- OpenAI, the one provider we still have to know about ------------------


@pytest.mark.parametrize(
    "model,expected",
    [
        ("gpt-4o", True),
        ("gpt-4o-mini", True),
        ("gpt-4.1-mini", True),
        ("gpt-5.6-sol", True),
        ("gpt-5.5", True),
        ("o3", True),
        ("o4-mini", True),
        # The exceptions inside those same prefixes.
        ("o3-mini", False),
        ("gpt-3.5-turbo", False),
        ("gpt-audio", False),
    ],
)
def test_openai_table(model, expected):
    assert caps.resolve_vision("openai", model) is expected


def test_a_declaration_outranks_the_openai_table():
    caps.remember_declared("openai", "gpt-4o", False)
    assert caps.resolve_vision("openai", "gpt-4o") is False


# --- non-chat models never reach the dropdown ------------------------------


@pytest.mark.parametrize(
    "provider,model",
    [
        ("openai", "whisper-1"),
        ("openai", "tts-1-hd"),
        ("openai", "text-embedding-3-large"),
        ("openai", "omni-moderation-latest"),
        ("openai", "sora-2"),
        ("openai", "gpt-image-2"),
        ("openai", "gpt-realtime-mini"),
        ("openai", "gpt-4o-mini-transcribe"),
        ("google", "gemini-2.5-flash-preview-tts"),
        ("google", "lyria-3-pro-preview"),
        ("google", "nano-banana-pro-preview"),
        ("google", "gemini-2.5-flash-image"),
        ("groq", "whisper-large-v3"),
        ("groq", "meta-llama/llama-prompt-guard-2-86m"),
        ("cloudflare", "@cf/meta/llama-guard-3-8b"),
        # OpenRouter had no entry in NON_CHAT_MARKERS at all until a live
        # listing on 2026-08-02 found these five in the dropdown. None is
        # catchable by declared modality: the audio pair lists `text`
        # alongside `audio`, and both classifiers answer in plain `text` —
        # `nemotron-3.5-content-safety:free` answered "User Safety: safe" to
        # an image-prompt request instead of writing one.
        ("openrouter", "meta-llama/llama-guard-4-12b"),
        ("openrouter", "nvidia/nemotron-3.5-content-safety:free"),
        ("openrouter", "openai/gpt-audio"),
        ("openrouter", "openai/gpt-audio-mini"),
        ("openrouter", "openai/gpt-oss-safeguard-20b"),
    ],
)
def test_non_chat_models_are_rejected(provider, model):
    assert caps.is_chat_capable(provider, model) is False


@pytest.mark.parametrize(
    "provider,model",
    [
        ("openai", "gpt-4o"),
        ("openai", "gpt-5.6-sol"),
        ("google", "gemini-3.6-flash"),
        ("google", "gemini-2.5-pro"),
        ("groq", "qwen/qwen3.6-27b"),
        ("openrouter", "anthropic/claude-sonnet-5"),
        ("cloudflare", "@cf/meta/llama-4-scout-17b-16e-instruct"),
    ],
)
def test_chat_models_survive(provider, model):
    assert caps.is_chat_capable(provider, model) is True


def test_openrouter_non_chat_markers_stay_in_step_with_the_vision_candidate_list():
    """One list feeds two purposes; a silent divergence would go unnoticed.

    `OPENROUTER_EXCLUDED_MODEL_PATTERNS` already curated the base patterns for
    the vision-fallback candidate chain (provider_resilience.py) before the
    dropdown filter existed at all — this keeps the dropdown from drifting
    behind edits made for that other purpose.
    """
    from FiL_Design_ImageMind.common.config import OPENROUTER_EXCLUDED_MODEL_PATTERNS

    assert set(OPENROUTER_EXCLUDED_MODEL_PATTERNS) <= set(caps.NON_CHAT_MARKERS["openrouter"])


def test_a_declared_non_text_input_is_enough_to_reject():
    """Groq's whisper entries declare audio input — no name matching needed."""
    entry = {"id": "some-private-asr-build", "input_modalities": ["audio"], "output_modalities": ["text"]}
    assert caps.is_chat_capable("groq", "some-private-asr-build", entry) is False


# --- google ----------------------------------------------------------------


def test_google_chat_models_are_vision_but_its_media_models_are_not():
    assert caps.resolve_vision("google", "gemini-3.6-flash") is True
    # Unconditional `True` for google used to badge these too.
    assert caps.resolve_vision("google", "lyria-3-pro-preview") is False
    assert caps.resolve_vision("google", "gemini-2.5-flash-preview-tts") is False
