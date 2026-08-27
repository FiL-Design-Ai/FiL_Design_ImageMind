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
    # The Russian half. Everything above only ever matched English, so a model
    # answering in the language the system prompt asks for kept its preamble:
    # `qwq-32b` opened with "Хорошо, мне нужно обработать запрос пользователя"
    # — reasoning out loud without the <think> tags that would have hidden it.
    (r"^\s*(Хорошо|Ладно|Итак|Окей|Конечно|Отлично)[,!.]?\s+(мне\s+нужно|нужно|я\s|сначала|давайте|пользовател)[^\n]*\n+", ""),
    # "Вот несколько вариантов промптов:" — a wrapper around the answer, not
    # the answer. Narrowed to the meta nouns so a real line that starts with
    # "Вот" survives.
    (r"^\s*(Вот|Ниже)\s+(?:несколько\s+|мой\s+|краткое\s+)?(вариант|промпт|описани|запрос)[^\n]*:\s*", ""),
    (r"^(Описание|Промпт|Запрос|Описание изображения|Финальный промпт)\s*:\s*", ""),
]


@dataclass
class OutputCleanConfig:
    strip_think: bool = True
    strip_code_fences: bool = True
    strip_role_prefixes: bool = True
    # The final pass keeps only ASCII + Cyrillic; CJK output (Prompt Director's
    # zh language mode) must opt out or every ideograph gets deleted.
    strip_non_latin: bool = True


def clean_output(text: str, config: Optional[OutputCleanConfig] = None) -> str:
    if not text:
        return ""
    cfg = config or OutputCleanConfig()
    cleaned = text.strip()

    for pattern, replacement in CLEANUP_PATTERNS:
        cleaned = re.sub(pattern, replacement, cleaned, flags=re.IGNORECASE | re.MULTILINE)

    if cfg.strip_think:
        cleaned = re.sub(r"<(think|analysis_scratchpad)[^>]*>.*?</\1>", "", cleaned, flags=re.DOTALL | re.IGNORECASE)
        cleaned = re.sub(r"</?(think|analysis_scratchpad)[^>]*>", "", cleaned, flags=re.IGNORECASE)

    if cfg.strip_code_fences:
        cleaned = cleaned.replace("```", "")

    if cfg.strip_role_prefixes:
        cleaned = re.sub(r"^[A-Z\s]{5,25}:\s*", "", cleaned, flags=re.MULTILINE)

    cleaned = cleaned.replace("**", "").replace("__", "").replace("#", "").replace("* ", "")
    if cfg.strip_non_latin:
        cleaned = re.sub(r"[^\x00-\x7F\u0400-\u04FF\s.,!?;:\"\'()-]+", "", cleaned)
    cleaned = re.sub(r"\s{2,}", " ", cleaned)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    cleaned = re.sub(r"\s+([.,!?;:])", r"\1", cleaned)

    return cleaned.strip()
