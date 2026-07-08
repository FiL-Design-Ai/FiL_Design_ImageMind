from __future__ import annotations

import re
from dataclasses import dataclass
from typing import List, Optional, Tuple


CLEANUP_PATTERNS: List[Tuple[str, str]] = [
    (r"^(Here is|Here's|This is|The image shows|I see|Looking at|Certainly|Sure|Okay|Alright|I understand)[^.:]*[.:]?\s*", ""),
    (r"^(Based on the image|In this image|The picture shows)[^.:]*[.:]?\s*", ""),
    (r"^(The scene|This scene|The frame|This frame|The shot|The photo|The photograph|The artwork|This artwork)\s+(shows|depicts|captures|presents|features)\s*", ""),
    (r"^(I can see|It looks like|It appears that|What I notice)[^.:]*[.:]?\s*", ""),
    (r"^(Let me|Allow me|I'll|I will)[^.:]*[.:]?\s*", ""),
    (r"(^|\n)(In summary|Overall|To conclude|Final thoughts):?\s*.*$", ""),
    (r"""^\s*["'«»„"]|["'«»„"]\s*$""", ""),
    (r"\b(hints at|as if|seems to|appears to|suggests|implies|gives the impression|possibly|perhaps|might be|could be|probably|likely|somewhat|almost)\b", ""),
    (r"\b(there is a sense of|creates a sense of|conveys a sense of)\b", ""),
    (r"\b(seems|appears)\b\s+(heavy|light|made|constructed|composed|formed|like|that|to)", ""),
    (r"\b(beautiful|stunning|gorgeous|breathtaking|magnificent|exquisite)\b", ""),
    (r"```[\w-]*\n?", ""),
    (r"^(assistant|role|response|output|result|description|analysis|step \d+):\s*", ""),
    (r"\b(kinetic apex|motion vector|energy vector|maximum tension|soul[- ]?crushing beauty|pure cinematic energy)\b", ""),
    (r"<analysis_scratchpad>.*?</analysis_scratchpad>", ""),
    (r"</?analysis_scratchpad[^>]*>", ""),
]


@dataclass
class OutputCleanConfig:
    strip_think: bool = True
    strip_code_fences: bool = True
    strip_role_prefixes: bool = True


def clean_output(text: str, config: Optional[OutputCleanConfig] = None) -> str:
    if not text:
        return ""
    cfg = config or OutputCleanConfig()
    cleaned = text.strip()

    for pattern, replacement in CLEANUP_PATTERNS:
        cleaned = re.sub(pattern, replacement, cleaned, flags=re.IGNORECASE | re.MULTILINE)

    cleaned = re.sub(r"<(think|analysis_scratchpad)[^>]*>.*?</\1>", "", cleaned, flags=re.DOTALL | re.IGNORECASE)
    cleaned = re.sub(r"</?(think|analysis_scratchpad)[^>]*>", "", cleaned, flags=re.IGNORECASE)

    if cfg.strip_code_fences:
        cleaned = cleaned.replace("```", "")

    if cfg.strip_role_prefixes:
        cleaned = re.sub(r"^[A-Z\s]{5,25}:\s*", "", cleaned, flags=re.MULTILINE)

    cleaned = cleaned.replace("**", "").replace("__", "").replace("#", "").replace("* ", "")
    cleaned = re.sub(r"[^\x00-\x7F\u0400-\u04FF\s.,!?;:\"\'()-]+", "", cleaned)
    cleaned = re.sub(r"\s{2,}", " ", cleaned)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    cleaned = re.sub(r"\s+([.,!?;:])", r"\1", cleaned)

    return cleaned.strip()
