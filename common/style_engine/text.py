"""Text helpers for FiL_LLM style enforcement."""

from __future__ import annotations

import re
from typing import Dict, List


def _keyword_in_text(text: str, keyword: str) -> bool:
    """Match style keywords on token boundaries to avoid false positives like chrome->monochrome."""
    return re.search(rf"(?<![\w]){re.escape(keyword.lower())}(?![\w])", text) is not None


_SUPPORT_SIGNAL_STOPWORDS = {
    "a",
    "an",
    "and",
    "as",
    "at",
    "by",
    "for",
    "from",
    "in",
    "into",
    "like",
    "near",
    "of",
    "on",
    "only",
    "or",
    "the",
    "to",
    "with",
}


def _normalize_support_text(text: str) -> str:
    return re.sub(r"[\W_]+", " ", (text or "").lower()).strip()


def _support_signal_hit(text: str, signal: str) -> bool:
    normalized = _normalize_support_text(text)
    if not normalized:
        return False
    tokens = [
        token
        for token in re.findall(r"[a-z0-9]+", (signal or "").lower())
        if token and token not in _SUPPORT_SIGNAL_STOPWORDS
    ]
    if not tokens:
        return False
    return all(re.search(rf"(?<![\w]){re.escape(token)}(?![\w])", normalized) for token in tokens)


_REQUIRED_CUE_EVAL_ALIASES: Dict[str, List[str]] = {
    "at least one visible facial/head/neck augmentation cue": [
        "visible implants",
        "ocular implant",
        "ocular implants",
        "ocular hardware",
        "facial seam",
        "facial seams",
        "facial plating",
        "neck service ports",
        "neck port",
        "neck ports",
        "service port",
        "service ports",
        "mandibular panel seams",
        "cervical port",
        "cervical ports",
    ],
    "at least one visible limb or torso integration cue": [
        "clavicle plating",
        "wrist actuator",
        "wrist actuators",
        "precision wrist actuators",
        "prosthetic limb",
        "prosthetic limbs",
        "arm augmentation",
        "torso integration",
        "servo joints",
        "shoulder hardware",
        "limb augmentation",
    ],
    "body-tech seam logic, ports, or socket architecture": [
        "integration seams",
        "implant seam",
        "implant seams",
        "socket lines",
        "socket line",
        "service port",
        "service ports",
        "subdermal data conduits",
        "data conduits",
        "neck service ports",
        "facial seams",
    ],
    "synthetic material boundary between flesh and machine": [
        "synthetic dermis",
        "synthetic skin",
        "polymer shell",
        "synthetic material boundary",
        "flesh and machine",
        "human machine boundary",
        "machine boundary",
    ],
}


def _get_required_cue_eval_aliases(cue_text: str) -> List[str]:
    cue_key = str(cue_text or "").strip().lower()
    return list(dict.fromkeys(_REQUIRED_CUE_EVAL_ALIASES.get(cue_key, [])))
