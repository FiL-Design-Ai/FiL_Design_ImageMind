"""
FiL_Design_ImageMind API Routes — минимальные REST-эндпоинты для управления.
"""

import logging
import shutil
from pathlib import Path
from aiohttp import web

from .common.brand import OUTPUT_SUBFOLDER, ROUTE_SLUG, BRAND
from .common.provider_runtime import fetch_models_with_status, invalidate_model_cache, probe_provider
from .common.provider_accounts import (
    delete_provider_credentials,
    get_safe_provider_accounts,
    save_provider_credentials,
)
from .common.config import PROVIDERS
from .common.contracts import public_node_contracts_v2
from .common.localization import get_localization_manager

PROVIDER_DISPLAY_NAMES = {k: v.display_name for k, v in PROVIDERS.items()}

logger = logging.getLogger(f"{BRAND}.API")

_ROUTES_REGISTERED = False


def save_compare_image(descriptor, *, temp_dir=None, output_dir=None):
    if not isinstance(descriptor, dict) or descriptor.get("type") != "temp":
        raise ValueError("invalid image descriptor")
    filename = str(descriptor.get("filename", ""))
    subfolder = str(descriptor.get("subfolder", ""))
    if not filename or Path(filename).name != filename:
        raise ValueError("invalid filename")
    if Path(subfolder).is_absolute() or ".." in Path(subfolder).parts:
        raise ValueError("invalid subfolder")
    if Path(filename).suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"}:
        raise ValueError("unsupported image type")

    if temp_dir is None or output_dir is None:
        import folder_paths
        temp_dir = folder_paths.get_temp_directory()
        output_dir = folder_paths.get_output_directory()
    temp_root = Path(temp_dir).resolve()
    source = (temp_root / subfolder / filename).resolve()
    try:
        source.relative_to(temp_root)
    except ValueError as exc:
        raise ValueError("image path escapes temp directory") from exc
    if not source.is_file():
        raise FileNotFoundError("temporary image not found")

    target_root = (Path(output_dir).resolve() / OUTPUT_SUBFOLDER / "compare")
    target_root.mkdir(parents=True, exist_ok=True)
    stem, suffix = source.stem, source.suffix.lower()
    target = target_root / f"{stem}{suffix}"
    counter = 1
    while target.exists():
        target = target_root / f"{stem}_{counter:03d}{suffix}"
        counter += 1
    shutil.copy2(source, target)
    return {"filename": target.name, "subfolder": f"{OUTPUT_SUBFOLDER}/compare", "type": "output"}


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
        save_provider_credentials(provider, key=key, account_id=account_id, base_url=base_url)
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

    @server.routes.get(f"/{ROUTE_SLUG}/health")
    async def health(request):
        return web.json_response({"status": "ok", "version": "2.0.0"})

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
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        payload, status = apply_auth_payload(data)
        return web.json_response(payload, status=status)

    @server.routes.post(f"/{ROUTE_SLUG}/provider_probe")
    async def provider_probe(request):
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        provider = str(data.get("provider", "")).strip().lower()
        model = str(data.get("model", "")).strip()
        if provider not in PROVIDERS:
            return web.json_response({"error": "unknown provider"}, status=404)
        return web.json_response(probe_provider(provider, model))

    @server.routes.post(f"/{ROUTE_SLUG}/compare/save")
    async def compare_save(request):
        try:
            data = await request.json()
            saved = save_compare_image(data.get("image"))
            return web.json_response({"status": "saved", "image": saved})
        except (ValueError, FileNotFoundError):
            return web.json_response({"error": "invalid image descriptor"}, status=400)
        except Exception:
            logger.warning("Compare output save failed")
            return web.json_response({"error": "save failed"}, status=500)

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
