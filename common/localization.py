import json
import logging
from pathlib import Path
from threading import Lock
from typing import Dict, Optional

from .brand import SETTINGS_PREFIX

logger = logging.getLogger(__name__)

_LOCALE_DIR = Path(__file__).resolve().parent.parent / "data" / "locales"
_DEFAULT_LANG = "en"
_SETTING_KEY = f"{SETTINGS_PREFIX}Language"


def _settings_file_path() -> Optional[Path]:
    try:
        import folder_paths

        return Path(folder_paths.get_user_directory()) / "default" / "comfy.settings.json"
    except Exception:
        return None


def _read_comfy_language_setting(cache: Dict[str, object]) -> Optional[str]:
    """Best-effort read of the ComfyUI-managed language setting (see `_SETTING_KEY`).

    Reads the default (single-user) profile's settings file directly rather
    than going through the server's per-request user manager, since this is
    called from schema-building code with no request context. Returns None
    on any failure (missing module, missing file, bad JSON, multi-user setups
    with a non-default active user) so callers can fall back to the default.

    ``cache`` (keyed by ``mtime``/``lang``) avoids re-reading the file when it
    hasn't changed since the last call.
    """
    settings_path = _settings_file_path()
    if not settings_path or not settings_path.is_file():
        return None
    try:
        mtime = settings_path.stat().st_mtime
        if cache.get("mtime") == mtime:
            return cache.get("lang")  # type: ignore[return-value]
        with open(settings_path, "r", encoding="utf-8") as fh:
            settings = json.load(fh)
        raw_lang = settings.get(_SETTING_KEY)
        lang = str(raw_lang).strip().lower()[:2] if raw_lang else None
        cache["mtime"] = mtime
        cache["lang"] = lang
        return lang
    except Exception:
        return None


class LocalizationManager:
    _instance: Optional["LocalizationManager"] = None
    _lock = Lock()

    def __new__(cls) -> "LocalizationManager":
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if hasattr(self, "_initialized"):
            return
        self._initialized = True
        self.current_lang = _DEFAULT_LANG
        self._translations: Dict[str, Dict[str, str]] = {}
        self._settings_cache: Dict[str, object] = {}
        self._load_all()

    def set_language(self, lang: str) -> None:
        lang = lang.strip().lower()[:2]
        if lang in self._translations:
            self.current_lang = lang
        else:
            logger.warning("Language '%s' not loaded, keeping '%s'", lang, self.current_lang)

    def sync_language_from_settings(self) -> None:
        """Refresh ``current_lang`` from the ComfyUI settings file, if set.

        Called automatically on every ``get()``/``t()`` lookup — an mtime
        cache keeps repeated calls within one schema build cheap (V3
        ``define_schema()`` is re-invoked per ``/object_info`` request, and
        each build calls ``t()`` many times).
        """
        lang = _read_comfy_language_setting(self._settings_cache)
        if lang and lang in self._translations and lang != self.current_lang:
            self.current_lang = lang

    def _load_all(self) -> None:
        if not _LOCALE_DIR.exists():
            return
        for f in _LOCALE_DIR.glob("*.json"):
            lang = f.stem[:2]
            try:
                with open(f, "r", encoding="utf-8") as fh:
                    self._translations[lang] = json.load(fh)
            except Exception as e:
                logger.warning("Failed to load locale %s: %s", f, e)

    def reload(self) -> None:
        self._translations.clear()
        self._load_all()

    def get(self, key: str, default: Optional[str] = None) -> str:
        self.sync_language_from_settings()
        lang_dict = self._translations.get(self.current_lang, {})
        if key in lang_dict:
            return lang_dict[key]
        fallback = self._translations.get("en", {}).get(key) or self._translations.get("ru", {}).get(key)
        return fallback or default or key

    def __call__(self, key: str, default: Optional[str] = None) -> str:
        return self.get(key, default)

    def get_all(self, lang: str) -> Dict[str, str]:
        """Return the full translation dict for *lang*, falling back to English."""
        lang = (lang or "").strip().lower()[:2]
        return self._translations.get(lang) or self._translations.get("en", {})


_manager = LocalizationManager()


def get_localization_manager() -> LocalizationManager:
    return _manager


def t(key: str, default: Optional[str] = None) -> str:
    return _manager.get(key, default)


def lm() -> LocalizationManager:
    return _manager
