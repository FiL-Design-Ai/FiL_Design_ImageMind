"""
FiL_Design_ImageMind API Routes — минимальные REST-эндпоинты для управления.
"""

import logging
import shutil
from pathlib import Path
from aiohttp import web

from .common.brand import OUTPUT_SUBFOLDER, ROUTE_SLUG, BRAND, VERSION
from .common.provider_runtime import fetch_models_with_status, invalidate_model_cache, probe_provider
from .common.provider_accounts import (
    delete_provider_credentials,
    get_safe_provider_accounts,
    save_provider_credentials,
)
from .common.base import set_log_level
from .common.config import PROVIDERS, get_config
from .common.contracts import public_node_contracts_v2
from .common.localization import get_localization_manager

PROVIDER_DISPLAY_NAMES = {k: v.display_name for k, v in PROVIDERS.items()}

logger = logging.getLogger(f"{BRAND}.API")

_ROUTES_REGISTERED = False




def is_cross_site_request(origin: str, host: str) -> bool:
    """True when a browser sent this request from a different site.

    Only a mismatching `Origin` counts. A missing `Origin` (curl, scripts, most
    same-origin GETs) is allowed through, so this blocks the browser attack —
    a page on another site POSTing a hostile `base_url` and having the stored
    API key delivered to it — without breaking non-browser callers.
    """
    if not origin or not host:
        return False
    from urllib.parse import urlparse

    origin_host = (urlparse(origin).netloc or "").lower()
    return bool(origin_host) and origin_host != host.lower()


def _reject_cross_site(request) -> bool:
    """Guard for mutating routes. Set FIL_ALLOW_CROSS_SITE=1 to disable."""
    import os

    if os.environ.get("FIL_ALLOW_CROSS_SITE", "").strip().lower() in ("1", "true", "yes", "on"):
        return False
    origin = request.headers.get("Origin", "")
    host = request.headers.get("Host", "")
    if is_cross_site_request(origin, host):
        logger.warning("blocked cross-site request from origin %r to host %r", origin, host)
        return True
    return False


def build_models_response(provider, force=False):
    provider = str(provider or "").strip().lower()
    if provider not in PROVIDERS:
        return {"error": "unknown provider"}, 404
    if force:
        invalidate_model_cache(provider)
    return fetch_models_with_status(provider), 200


def apply_auth_payload(data):
    accounts = data.get("accounts", {}) if isinstance(data, dict) else None
    if not isinstance(accounts, dict):
        return {"error": "accounts must be an object"}, 400
    for provider, creds in accounts.items():
        if provider not in PROVIDERS or not isinstance(creds, dict):
            return {"error": "invalid provider account"}, 400
        if creds.get("delete") is True:
            delete_provider_credentials(provider)
            invalidate_model_cache(provider)
            continue
        key = creds.get("key")
        account_id = creds.get("account_id")
        base_url = creds.get("base_url")
        if key is not None and not isinstance(key, str):
            return {"error": "invalid key"}, 400
        if account_id is not None and not isinstance(account_id, str):
            return {"error": "invalid account_id"}, 400
        if base_url is not None and not isinstance(base_url, str):
            return {"error": "invalid base_url"}, 400
        try:
            save_provider_credentials(provider, key=key, account_id=account_id, base_url=base_url)
        except ValueError as exc:
            # Reason goes to the log only — responses never echo exception text.
            logger.warning("rejected credentials for %s: %s", provider, exc)
            return {"error": "invalid base_url"}, 400
        invalidate_model_cache(provider)
    return {"status": "saved", "accounts": get_safe_provider_accounts()}, 200


def register_routes():
    global _ROUTES_REGISTERED
    if _ROUTES_REGISTERED:
        return
    try:
        from server import PromptServer
    except ImportError:
        return
    if not hasattr(PromptServer, "instance") or PromptServer.instance is None:
        return
    server = PromptServer.instance

    set_log_level(get_config().get("logging.console.level", "WARNING"))

    @server.routes.get(f"/{ROUTE_SLUG}/health")
    async def health(request):
        return web.json_response({"status": "ok", "version": VERSION})

    @server.routes.post(f"/{ROUTE_SLUG}/log_level")
    async def set_log_level_route(request):
        try:
            data = await request.json()
        except Exception:
            data = {}
        level = str(data.get("level", "WARNING"))
        set_log_level(level)
        return web.json_response({"ok": True, "level": level})

    @server.routes.get(f"/{ROUTE_SLUG}/models/{{provider}}")
    async def get_models(request):
        provider = request.match_info.get("provider", "")
        force = request.query.get("force", "0") == "1"
        payload, status = build_models_response(provider, force=force)
        return web.json_response(payload, status=status)

    @server.routes.get(f"/{ROUTE_SLUG}/providers")
    async def list_providers(request):
        return web.json_response({"providers": PROVIDER_DISPLAY_NAMES})

    @server.routes.get(f"/{ROUTE_SLUG}/auth")
    async def get_auth(request):
        return web.json_response({"accounts": get_safe_provider_accounts()})

    @server.routes.post(f"/{ROUTE_SLUG}/auth")
    async def save_auth(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        payload, status = apply_auth_payload(data)
        return web.json_response(payload, status=status)

    @server.routes.post(f"/{ROUTE_SLUG}/provider_probe")
    async def provider_probe(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        provider = str(data.get("provider", "")).strip().lower()
        model = str(data.get("model", "")).strip()
        if provider not in PROVIDERS:
            return web.json_response({"error": "unknown provider"}, status=404)
        return web.json_response(probe_provider(provider, model))


    @server.routes.get(f"/{ROUTE_SLUG}/locale/{{lang}}")
    async def get_locale(request):
        lang = request.match_info.get("lang", "en")
        translations = get_localization_manager().get_all(lang)
        return web.json_response(translations)

    @server.routes.get(f"/{ROUTE_SLUG}/node_contracts")
    async def node_contracts(request):
        # `node_ids` and `settings_prefix` are preserved for the legacy
        # frontend; `schemas` (Pydantic JSON Schemas per node) is consumed
        # by the new Vue 3 + TS frontend and by scripts/gen_contracts.
        return web.json_response(public_node_contracts_v2())

    _ROUTES_REGISTERED = True
    logger.info(f"[{BRAND}] API routes registered: /{ROUTE_SLUG}/*")
