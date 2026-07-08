"""Prompt contract facade for the clean-build architecture."""

from __future__ import annotations

from .data import (
    MODEL_PROMPT_RULES,
    MODEL_TYPE_OPTIONS,
    get_effective_response_format,
    get_model_prompt_rule,
    get_target_prompt_format,
    resolve_runtime_prompt_mode,
)
from .model_prompt_adapters import adapt_ideogram4_caption
from .logic import PromptGenerator

PROMPT_CONTRACT_VERSION = "v3"

__all__ = [
    "MODEL_PROMPT_RULES",
    "MODEL_TYPE_OPTIONS",
    "PROMPT_CONTRACT_VERSION",
    "PromptGenerator",
    "adapt_ideogram4_caption",
    "get_effective_response_format",
    "get_model_prompt_rule",
    "get_target_prompt_format",
    "resolve_runtime_prompt_mode",
]
