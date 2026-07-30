"""The name-based guess at vision capability.

Replaces `test_vision_smoke.py`, which mostly exercised a cached probe file that
no user ever received — it was listed in `.gitignore` and `.comfyignore` both,
so the fallback tested at the bottom of that file was always the real code path.
What remains here is that path.
"""

from FiL_Design_ImageMind.common.vision_heuristics import is_vision_capable


def test_google_is_always_vision():
    # Gemini chat models are multimodal across the board.
    assert is_vision_capable("google", "some-random-model") is True


def test_local_model_names_that_mean_vision():
    assert is_vision_capable("ollama", "llama3.2-vision:latest") is True
    assert is_vision_capable("ollama", "llava:13b") is True
    assert is_vision_capable("ollama", "gemma-4-26b-it") is True


def test_local_model_names_that_do_not():
    assert is_vision_capable("ollama", "llama3.2:latest") is False
    assert is_vision_capable("ollama", "deepseek-r1:8b") is False


def test_openrouter_hints():
    assert is_vision_capable("openrouter", "google/gemma-4-26b-a4b-it:free") is True
    assert is_vision_capable("openrouter", "meta-llama/llama-4-scout-17b-16e-instruct") is True
    assert is_vision_capable("openrouter", "nvidia/nemotron-nano-12b-v2-vl:free") is True


def test_openrouter_excluded_ids_win_over_the_hints():
    """`gemma-3n` matches the `gemma-3` hint but takes text only. This was the
    one verdict the dropped probe cache actually changed, so it has to survive
    the cache being gone — otherwise removing a stale file loses a real fact.
    """
    assert is_vision_capable("openrouter", "google/gemma-3n-e2b-it:free") is False
    assert is_vision_capable("openrouter", "google/gemma-3n-e4b-it:free") is False
    # The plain gemma-3 entries the list already carried stay rejected too.
    assert is_vision_capable("openrouter", "google/gemma-3-27b-it:free") is False
    # And a gemma-3 variant that is not excluded still reads as vision.
    assert is_vision_capable("openrouter", "google/gemma-3-11b-it") is True


def test_openrouter_excluded_patterns():
    assert is_vision_capable("openrouter", "google/lyria-002") is False
    assert is_vision_capable("openrouter", "openai/whisper-large-v3") is False


def test_the_openrouter_free_alias_is_treated_as_vision():
    assert is_vision_capable("openrouter", "openrouter/free") is True
