import json
import tempfile
from pathlib import Path

import pytest

from FiL_Design_ImageMind.common.vision_smoke import (
    is_vision_capable,
    load_vision_smoke_results,
    result_key,
    vision_smoke_status_for_model,
    VISION_AUTO_REJECT_STATUSES,
)


SAMPLE_RESULTS = {
    "results": {
        "google::gemini-2.5-flash": {
            "provider": "google",
            "model": "gemini-2.5-flash",
            "vision_candidate": True,
            "vision_probe_status": "vision_tested_ok",
            "checked_at": "2026-05-01T08:07:40",
        },
        "openrouter::nvidia/nemotron-nano-12b-v2-vl:free": {
            "provider": "openrouter",
            "model": "nvidia/nemotron-nano-12b-v2-vl:free",
            "vision_candidate": True,
            "vision_probe_status": "vision_rate_limited",
            "checked_at": "2026-05-01T08:06:07",
        },
        "groq::llama-3.3-70b-versatile": {
            "provider": "groq",
            "model": "llama-3.3-70b-versatile",
            "vision_candidate": False,
            "vision_probe_status": "vision_skipped_text_only",
            "checked_at": "2026-05-01T08:06:07",
        },
        "openrouter::qwen-qwen2.5-vl-7b-instruct:free": {
            "provider": "openrouter",
            "model": "qwen-qwen2.5-vl-7b-instruct:free",
            "vision_candidate": True,
            "vision_probe_status": "vision_rejected",
            "checked_at": "2026-05-01T08:07:40",
        },
    },
}


def test_result_key():
    assert result_key("Google", "Gemini-2.5-Flash") == "google::gemini-2.5-flash"
    assert result_key("OPENROUTER", "  Model:Free ") == "openrouter::model:free"


def test_load_vision_smoke_results_missing():
    with tempfile.TemporaryDirectory() as tmp:
        path = Path(tmp) / "nonexistent.json"
        result = load_vision_smoke_results(path)
        assert result["status"] == "missing"
        assert result["results"] == {}


def test_load_vision_smoke_results_valid(tmp_path):
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    result = load_vision_smoke_results(path)
    assert result["status"] == "success"
    assert len(result["results"]) == 4


def test_vision_smoke_status_for_model_tested_ok(tmp_path):
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    status = vision_smoke_status_for_model("google", "gemini-2.5-flash", path=path)
    assert status["vision_probe_status"] == "vision_tested_ok"
    assert status["vision_smoke_candidate"] is True


def test_vision_smoke_status_for_model_not_tested(tmp_path):
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    status = vision_smoke_status_for_model("ollama", "llama3.2-vision:latest", path=path)
    assert status["vision_probe_status"] == "not_tested"
    assert status["vision_smoke_candidate"] is False


def test_is_vision_capable_cached_tested_ok(tmp_path):
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    assert is_vision_capable("google", "gemini-2.5-flash", path=path) is True


def test_is_vision_capable_cached_rate_limited_falls_back(tmp_path):
    """Rate-limited models should fall back to name heuristic, not auto-reject."""
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    # "nemotron...vl" contains "-vl" hint → should be detected as vision
    assert is_vision_capable("openrouter", "nvidia/nemotron-nano-12b-v2-vl:free", path=path) is True


def test_is_vision_capable_cached_rejected(tmp_path):
    """Explicitly rejected models should still be rejected."""
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    assert is_vision_capable("openrouter", "qwen-qwen2.5-vl-7b-instruct:free", path=path) is False


def test_is_vision_capable_cached_text_only_skipped(tmp_path):
    """Text-only skipped models should be rejected."""
    path = tmp_path / "smoke.json"
    path.write_text(json.dumps(SAMPLE_RESULTS))
    assert is_vision_capable("groq", "llama-3.3-70b-versatile", path=path) is False


def test_is_vision_capable_google_always_true():
    assert is_vision_capable("google", "some-random-model") is True


def test_is_vision_capable_name_heuristic_ollama():
    assert is_vision_capable("ollama", "llama3.2-vision:latest") is True
    assert is_vision_capable("ollama", "llava:13b") is True
    assert is_vision_capable("ollama", "gemma-4-26b-it") is True


def test_is_vision_capable_name_heuristic_ollama_text():
    assert is_vision_capable("ollama", "llama3.2:latest") is False
    assert is_vision_capable("ollama", "deepseek-r1:8b") is False


def test_is_vision_capable_openrouter_name_heuristic():
    assert is_vision_capable("openrouter", "google/gemma-4-26b-a4b-it:free") is True
    assert is_vision_capable("openrouter", "meta-llama/llama-4-scout-17b-16e-instruct") is True
