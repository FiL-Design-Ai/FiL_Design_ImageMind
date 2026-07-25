from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict

from .config import (
    OPENROUTER_EXCLUDED_MODEL_IDS,
    OPENROUTER_EXCLUDED_MODEL_PATTERNS,
    OPENROUTER_PREFERRED_VISION_MODELS,
    is_known_vision_model_name,
)
from .processing import normalize_model_name

ROOT_DIR = Path(__file__).resolve().parents[1]
VISION_SMOKE_RESULTS_PATH = ROOT_DIR / "data" / "provider_vision_smoke.json"

VISION_AUTO_REJECT_STATUSES = {
    "vision_rejected",
    "vision_skipped_text_only",
}

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


def result_key(provider: str, model: str) -> str:
    return f"{str(provider).strip().lower()}::{normalize_model_name(model).lower()}"


def load_vision_smoke_results(path: Path = VISION_SMOKE_RESULTS_PATH) -> Dict[str, Any]:
    if not path.exists():
        return {"status": "missing", "results": {}}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {"status": "read_error", "results": {}}
    if not isinstance(data, dict):
        return {"status": "bad_shape", "results": {}}
    results = data.get("results")
    if not isinstance(results, dict):
        data["results"] = {}
    data.setdefault("status", "success")
    return data


def vision_smoke_status_for_model(provider: str, model: str, path: Path = VISION_SMOKE_RESULTS_PATH) -> Dict[str, Any]:
    data = load_vision_smoke_results(path)
    item = data.get("results", {}).get(result_key(provider, model))
    if isinstance(item, dict):
        return {
            "vision_probe_status": item.get("vision_probe_status") or "not_tested",
            "vision_probe_at": item.get("checked_at"),
            "vision_smoke_candidate": bool(item.get("vision_candidate")),
        }
    return {
        "vision_probe_status": "not_tested",
        "vision_probe_at": None,
        "vision_smoke_candidate": False,
    }


def _is_vision_candidate(provider: str, model: str) -> bool:
    clean_provider = str(provider or "").strip().lower()
    clean_model = normalize_model_name(model).lower()
    if clean_provider == "openrouter":
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


def is_vision_capable(provider: str, model: str, path: Path = VISION_SMOKE_RESULTS_PATH) -> bool:
    prov = str(provider or "").strip().lower()
    if prov == "google":
        return True
    status = vision_smoke_status_for_model(provider, model, path)
    probe_status = status.get("vision_probe_status", "not_tested")
    if probe_status == "vision_tested_ok":
        return True
    if probe_status in VISION_AUTO_REJECT_STATUSES:
        return False
    return _is_vision_candidate(provider, model)
