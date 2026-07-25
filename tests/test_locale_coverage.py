"""Locale coverage: every key the code asks for must exist in every locale.

`t(key, fallback)` and the Python `_t(key, fallback)` both fall back to the
English literal silently, so a missing key looks like a working translation until
someone switches the UI to Russian. That is how 18 keys — all 13 HiResFix field
labels among them — shipped untranslated while the node looked fully localised.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
LOCALES = ROOT / "data" / "locales"
FRONTEND_SRC = ROOT / "frontend" / "src"

# `t('key', 'fallback')` / `t("key", "fallback")` in .vue and .ts sources.
TS_KEY_RE = re.compile(r"""\bt\(\s*['"]([A-Za-z_][A-Za-z_0-9]*)['"]""")
# `_t("key", "fallback")` in the Python node schemas.
PY_KEY_RE = re.compile(r"""\b_t\(\s*['"]([A-Za-z_][A-Za-z_0-9]*)['"]""")


def _locale(name: str) -> dict[str, str]:
    return json.loads((LOCALES / name).read_text(encoding="utf-8"))


def _frontend_keys() -> dict[str, set[str]]:
    """key -> set of files referencing it."""
    found: dict[str, set[str]] = {}
    for path in list(FRONTEND_SRC.rglob("*.vue")) + list(FRONTEND_SRC.rglob("*.ts")):
        for key in TS_KEY_RE.findall(path.read_text(encoding="utf-8")):
            found.setdefault(key, set()).add(path.relative_to(ROOT).as_posix())
    return found


def _python_keys() -> dict[str, set[str]]:
    found: dict[str, set[str]] = {}
    for folder in ("nodes", "common"):
        for path in (ROOT / folder).rglob("*.py"):
            for key in PY_KEY_RE.findall(path.read_text(encoding="utf-8")):
                found.setdefault(key, set()).add(path.relative_to(ROOT).as_posix())
    return found


@pytest.mark.parametrize("locale_name", ["en.json", "ru.json"])
def test_every_frontend_key_exists_in_the_locale(locale_name: str):
    locale = _locale(locale_name)
    missing = {k: sorted(v) for k, v in _frontend_keys().items() if k not in locale}
    assert not missing, (
        f"{locale_name} is missing keys the frontend calls t() with: "
        f"{json.dumps(missing, ensure_ascii=False, indent=2)}"
    )


@pytest.mark.parametrize("locale_name", ["en.json", "ru.json"])
def test_every_python_key_exists_in_the_locale(locale_name: str):
    locale = _locale(locale_name)
    missing = {k: sorted(v) for k, v in _python_keys().items() if k not in locale}
    assert not missing, (
        f"{locale_name} is missing keys the nodes call _t() with: "
        f"{json.dumps(missing, ensure_ascii=False, indent=2)}"
    )


def test_locales_hold_the_same_key_set():
    en, ru = _locale("en.json"), _locale("ru.json")
    assert set(en) == set(ru), (
        f"only in en: {sorted(set(en) - set(ru))}; only in ru: {sorted(set(ru) - set(en))}"
    )


@pytest.mark.parametrize("locale_name", ["en.json", "ru.json"])
def test_pluralized_keys_have_all_three_ru_forms(locale_name: str):
    """`tPlural(base, ...)` in useI18n.ts reads `{base}_one/_few/_many`.

    Russian needs all three (1 модель / 2 модели / 5 моделей); a flat
    `t('prov_models', 'models')` previously read "1 моделей" for a single
    model, which is grammatically wrong regardless of the fallback text.
    """
    locale = _locale(locale_name)
    for base in ("prov_models",):
        for suffix in ("_one", "_few", "_many"):
            assert f"{base}{suffix}" in locale, f"{locale_name} missing {base}{suffix}"


def test_russian_locale_is_actually_translated():
    """A ru value identical to its en value usually means it was never translated.

    Some values legitimately match (proper nouns, "Denoise", symbols), so this
    only guards against a wholesale copy of the English file.
    """
    en, ru = _locale("en.json"), _locale("ru.json")
    identical = [k for k in en if en[k] == ru.get(k)]
    assert len(identical) < len(en) * 0.2, (
        f"{len(identical)} of {len(en)} ru values are byte-identical to en — "
        f"looks like an untranslated copy: {identical[:15]}"
    )
