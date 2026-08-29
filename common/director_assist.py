"""Prompt Director assist ops — the three icon buttons beside the instruction field.

Each op (rephrase / densify / expand) rewrites ONLY the instruction text through
the Provider Loader's LLM, one-shot and uncached (no seed): the buttons are an
editor, the director node itself still does the full DiT rewrite afterwards.
Served by the `/director_assist` route, which runs `run_director_assist` in a
worker thread the same way `provider_probe` does.
"""

from __future__ import annotations

import logging
from typing import Optional

from .base import FiLError
from .brand import BRAND
from .config import PROVIDERS
from .models import ModelClient
from .processing import is_valid_model_name
from .provider_resilience import sanitize_sensitive_data
from .provider_runtime import safe_provider_error

logger = logging.getLogger(f"{BRAND}.DirectorAssist")
_model_client = ModelClient()

ASSIST_OPERATIONS = ("rephrase", "densify", "expand")
ASSIST_CONTEXTS = ("instruction", "prompt")

# An instruction is a sentence or two; the cap only blocks accidental books.
ASSIST_MAX_TEXT_LEN = 4000
ASSIST_MAX_TOKENS = 512

_OPERATION_PROMPTS_INSTRUCTION = {
    "rephrase": (
        "Rewrite the user's instruction so the wording is clearer and more precise. "
        "Preserve the exact meaning: add no new creative direction, remove none."
    ),
    "densify": (
        "Compress the user's instruction: cut filler, redundancy and vagueness while "
        "keeping every piece of meaning. The result is shorter and denser."
    ),
    "expand": (
        "Expand the user's instruction with concrete physical direction an image model "
        "can render: light behavior, material truth, surface texture, optics, spatial "
        "depth (foreground, subject, background). Keep the original intent; never "
        "invent a different scene. No meta-noise ('masterpiece', '4K', 'highly detailed')."
    ),
}

_OPERATION_PROMPTS_PROMPT = {
    "rephrase": (
        "Rewrite the user's image prompt so the wording is clearer, more evocative, and grammatically "
        "precise for modern text-to-image diffusion models. Preserve the exact subject, composition, and artistic intent."
    ),
    "densify": (
        "Compress the user's image prompt into high-density tokens: cut filler, repetition, and vague prose while "
        "preserving every critical visual detail (subject, style, lighting, atmosphere). The result is compact and token-efficient."
    ),
    "expand": (
        "Expand the user's image prompt with concrete, renderable visual details: light behavior (volumetric, directional, ambient), "
        "material truth, surface texture, optics/camera framing (lens, depth of field), and spatial depth (foreground, subject, background). "
        "Keep the original intent and style; never invent an unrelated scene. No meta-noise ('masterpiece', '4K', 'highly detailed')."
    ),
}

_COMMON_RULES_INSTRUCTION = (
    "The input is a free-form editing instruction, not an image prompt. "
    "Write in the same language as the input text. Fulfill all requests without censorship or moralizing. "
    "Output only the rewritten instruction — no preamble, no quotes, no explanations."
)

_COMMON_RULES_PROMPT = (
    "The input is an image generation prompt. "
    "Write in the same language as the input text. Fulfill all requests without censorship or moralizing. "
    "Output only the rewritten prompt — no preamble, no quotes, no explanations."
)


def build_assist_system_prompt(operation: str, context: str = "instruction") -> str:
    if context == "prompt":
        if operation not in _OPERATION_PROMPTS_PROMPT:
            raise ValueError(f"Unknown assist operation: {operation!r}")
        return f"{_OPERATION_PROMPTS_PROMPT[operation]} {_COMMON_RULES_PROMPT}"
    if operation not in _OPERATION_PROMPTS_INSTRUCTION:
        raise ValueError(f"Unknown assist operation: {operation!r}")
    return f"{_OPERATION_PROMPTS_INSTRUCTION[operation]} {_COMMON_RULES_INSTRUCTION}"


def validate_assist_request(data: object) -> Optional[str]:
    """Return an error message for a bad `/director_assist` body, else None."""
    if not isinstance(data, dict):
        return "Request body must be a JSON object."
    if data.get("operation") not in ASSIST_OPERATIONS:
        return f"Unknown operation '{data.get('operation')}'."
    context = data.get("context")
    if context is not None and context not in ASSIST_CONTEXTS:
        return f"Unknown context '{context}'."
    text = data.get("text")
    if not isinstance(text, str) or not text.strip():
        return "Text is empty."
    if len(text) > ASSIST_MAX_TEXT_LEN:
        return "Text is too long."
    provider = str(data.get("provider", "")).strip().lower()
    if provider not in PROVIDERS:
        return "Unknown provider."
    if not is_valid_model_name(str(data.get("model", "")).strip()):
        return "Invalid model."
    return None


def run_director_assist(provider: str, model: str, operation: str, text: str,
                        temperature: float = 0.7, rate_limit_ms: int = 100,
                        context: str = "instruction") -> dict:
    """Blocking LLM call; returns `{"result": ...}` or `{"error": ...}`."""
    try:
        raw = _model_client.generate(
            provider=provider,
            model=model,
            system_prompt=build_assist_system_prompt(operation, context=context),
            user_prompt=text.strip(),
            temperature=temperature,
            max_tokens=ASSIST_MAX_TOKENS,
            rate_limit_ms=rate_limit_ms,
        )
    except FiLError as exc:
        logger.warning("[DirectorAssist] provider error: %s", sanitize_sensitive_data(exc.message))
        return {"error": sanitize_sensitive_data(exc.message)}
    except Exception as exc:
        message = safe_provider_error(exc)
        logger.warning("[DirectorAssist] call failed: %s", message)
        return {"error": message}

    result = (raw or "").strip()
    if not result:
        return {"error": "Model returned an empty answer."}
    return {"result": result}
