import json
import logging
from pathlib import Path
from typing import Any, Dict, Optional, Tuple

from .config import LOCAL_PROVIDERS, PROVIDERS, get_config

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.ProviderAccounts")

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
AUTH_JSON_PATH = DATA_DIR / "auth.json"


def _load_auth_json() -> Dict[str, Any]:
    if not AUTH_JSON_PATH.exists():
        return {}
    try:
        with open(AUTH_JSON_PATH, "r", encoding="utf-8") as f:
            return json.load(f) or {}
    except Exception as e:
        logger.warning("Failed to load auth.json: %s", e)
        return {}


def _save_auth_json(data: Dict[str, Any]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(AUTH_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def get_api_key(provider: str) -> Optional[str]:
    config_inst = get_config()
    prov_cfg = config_inst.get_provider_config(provider) if hasattr(config_inst, 'get_provider_config') else None
    if prov_cfg and prov_cfg.get("api_key"):
        return prov_cfg["api_key"]

    auth = _load_auth_json()
    provider_data = auth.get(provider, {})
    api_section = provider_data.get("api", {})
    key = api_section.get("key") or provider_data.get("key")
    if key:
        return key

    env_var_map = {
        "openai": "OPENAI_API_KEY", "google": "GOOGLE_API_KEY", "groq": "GROQ_API_KEY",
        "openrouter": "OPENROUTER_API_KEY", "cloudflare": "CLOUDFLARE_API_TOKEN",
    }
    env_key = env_var_map.get(provider)
    if env_key:
        import os
        return os.environ.get(env_key) or config_inst.get(env_key)

    return None


def set_api_key(provider: str, key: str) -> None:
    auth = _load_auth_json()
    if provider not in auth:
        auth[provider] = {}
    if "api" not in auth[provider]:
        auth[provider]["api"] = {}
    auth[provider]["api"]["key"] = key
    _save_auth_json(auth)


def delete_api_key(provider: str) -> None:
    auth = _load_auth_json()
    if provider in auth:
        if "api" in auth[provider]:
            auth[provider]["api"].pop("key", None)
        auth[provider].pop("key", None)
        _save_auth_json(auth)


def save_provider_credentials(
    provider: str,
    *,
    key: Optional[str] = None,
    account_id: Optional[str] = None,
    base_url: Optional[str] = None,
) -> None:
    if provider not in PROVIDERS:
        raise ValueError("unknown provider")
    auth = _load_auth_json()
    record = auth.setdefault(provider, {})
    api = record.setdefault("api", {})
    if key is not None and key.strip():
        api["key"] = key.strip()
    if account_id is not None:
        clean_account = account_id.strip()
        if clean_account:
            api["account_id"] = clean_account
        else:
            api.pop("account_id", None)
    if base_url is not None:
        clean_url = base_url.strip().rstrip("/")
        if clean_url:
            api["base_url"] = clean_url
        else:
            api.pop("base_url", None)
    _save_auth_json(auth)


def delete_provider_credentials(provider: str) -> None:
    if provider not in PROVIDERS:
        raise ValueError("unknown provider")
    auth = _load_auth_json()
    if provider in auth:
        auth[provider].pop("api", None)
        if not auth[provider]:
            auth.pop(provider, None)
        _save_auth_json(auth)


def get_provider_base_url(provider: str) -> str:
    record = _load_auth_json().get(provider, {}).get("api", {})
    custom_url = str(record.get("base_url", "")).strip().rstrip("/")
    if custom_url:
        return custom_url
    if provider == "cloudflare":
        account_id = str(record.get("account_id", "")).strip()
        if not account_id:
            account_id = str(get_config().get("CLOUDFLARE_ACCOUNT_ID", "")).strip()
        if account_id:
            return f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1"
        return ""
    return get_config().get_server_url(provider)


def get_safe_provider_accounts() -> Dict[str, Dict[str, Any]]:
    stored = _load_auth_json()
    result: Dict[str, Dict[str, Any]] = {}
    for provider, definition in PROVIDERS.items():
        api = stored.get(provider, {}).get("api", {})
        local = provider in LOCAL_PROVIDERS
        result[provider] = {
            "display_name": definition.display_name,
            "local": local,
            "configured": local or bool(get_api_key(provider)),
            "account_id": str(api.get("account_id", "")) if provider == "cloudflare" else "",
            "base_url": get_provider_base_url(provider) if local else str(api.get("base_url", "")),
        }
    return result


def get_all_provider_accounts() -> Dict[str, Any]:
    return _load_auth_json()


def read_auth() -> Dict[str, Any]:
    """Return the local provider account document."""
    return _load_auth_json()


def write_auth(data: Dict[str, Any]) -> None:
    """Persist a validated provider account document."""
    if not isinstance(data, dict):
        raise TypeError("provider account data must be a dictionary")
    _save_auth_json(data)


def get_provider_account_info(provider: str) -> Dict[str, Any]:
    auth = _load_auth_json()
    return auth.get(provider, {})


def check_provider_configured(provider: str) -> Tuple[bool, str]:
    if provider in LOCAL_PROVIDERS:
        return True, "configured"
    key = get_api_key(provider)
    if not key:
        return False, "missing_api_key"
    return True, "configured"
