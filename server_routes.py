"""
FiL_Design_ImageMind API Routes — минимальные REST-эндпоинты для управления.
"""

import asyncio
import logging

from aiohttp import web

from .common.brand import ROUTE_SLUG, BRAND, VERSION
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


def _inspect_model_file(mode: str, rel_path: str) -> dict:
    import datetime
    import json
    import os
    import struct
    try:
        import folder_paths

        folder_type = "diffusion_models" if mode == "diffusion_models" else "checkpoints"
        full_path = folder_paths.get_full_path(folder_type, rel_path)
        if not full_path or not os.path.isfile(full_path):
            if folder_type == "diffusion_models":
                full_path = folder_paths.get_full_path("unet", rel_path)
    except (ImportError, AttributeError, KeyError):
        full_path = None

    if not full_path or not os.path.isfile(full_path):
        return {"error": "file_not_found", "path": rel_path}

    size_bytes = os.path.getsize(full_path)
    mtime = os.path.getmtime(full_path)

    if size_bytes >= 1024**3:
        size_str = f"{size_bytes / (1024**3):.2f} GB"
    else:
        size_str = f"{size_bytes / (1024**2):.1f} MB"

    mtime_str = datetime.datetime.fromtimestamp(mtime).strftime("%Y-%m-%d %H:%M")

    base_no_ext, _ = os.path.splitext(full_path)
    preview_path = None
    for ext in [".png", ".preview.png", ".jpg", ".jpeg", ".webp"]:
        candidate = base_no_ext + ext
        if os.path.isfile(candidate):
            preview_path = candidate
            break

    meta_json_data: dict = {}
    meta_json_path = None
    for cand in [base_no_ext + ".metadata.json", base_no_ext + ".json", full_path + ".json"]:
        if os.path.isfile(cand):
            try:
                with open(cand, "r", encoding="utf-8", errors="ignore") as jf:
                    parsed = json.load(jf)
                    if isinstance(parsed, dict):
                        meta_json_data = parsed
                        meta_json_path = cand
                        break
            except Exception as err:
                logger.debug("Failed to parse metadata json %s: %s", cand, err)

    model_title = meta_json_data.get("model_name") or meta_json_data.get("civitai", {}).get("model", {}).get("name") or ""
    base_model = meta_json_data.get("base_model") or meta_json_data.get("civitai", {}).get("baseModel") or ""
    creator = meta_json_data.get("civitai", {}).get("creator", {}).get("username") or ""
    download_count = meta_json_data.get("civitai", {}).get("stats", {}).get("downloadCount") or 0
    thumbs_up = meta_json_data.get("civitai", {}).get("stats", {}).get("thumbsUpCount") or 0
    trained_words = meta_json_data.get("trainedWords") or meta_json_data.get("civitai", {}).get("trainedWords") or []

    sample_prompts: list[str] = []
    civitai_imgs = meta_json_data.get("civitai", {}).get("images", [])
    if isinstance(civitai_imgs, list):
        for img in civitai_imgs:
            if isinstance(img, dict):
                pmt = img.get("meta", {}).get("prompt")
                if pmt and isinstance(pmt, str) and pmt.strip() and pmt.strip() not in sample_prompts:
                    sample_prompts.append(pmt.strip())
                if len(sample_prompts) >= 3:
                    break

    if not preview_path and meta_json_data.get("preview_url"):
        purl = str(meta_json_data.get("preview_url"))
        if os.path.isfile(purl):
            preview_path = purl

    arch = base_model or "Unknown"
    precision = "Unknown"
    metadata_tags: dict[str, str] = {}

    if full_path.lower().endswith(".safetensors"):
        try:
            with open(full_path, "rb") as f:
                header_len_bytes = f.read(8)
                if len(header_len_bytes) == 8:
                    header_len = struct.unpack("<Q", header_len_bytes)[0]
                    if 0 < header_len < 100 * 1024 * 1024:
                        header_json_bytes = f.read(header_len)
                        header = json.loads(header_json_bytes.decode("utf-8", errors="ignore"))

                        meta = header.get("__metadata__", {})
                        if isinstance(meta, dict):
                            metadata_tags = {
                                str(k): str(v)
                                for k, v in meta.items()
                                if isinstance(v, (str, int, float, bool)) and len(str(v)) < 300
                            }
                            if "modelspec.architecture" in meta:
                                arch = meta["modelspec.architecture"]
                            elif "ss_sd_model_name" in meta and not base_model:
                                arch = meta["ss_sd_model_name"]

                        for k, v in header.items():
                            if k == "__metadata__":
                                continue
                            if isinstance(v, dict):
                                dtype = v.get("dtype", "")
                                if dtype:
                                    precision = str(dtype).upper()
                                if arch == "Unknown":
                                    if "double_blocks" in k or "single_blocks" in k:
                                        arch = "FLUX.1"
                                    elif "model.diffusion_model.input_blocks" in k:
                                        if "label_emb" in k or "emb_layers" in k:
                                            arch = "SDXL"
                                        else:
                                            arch = "SD 1.5 / 2.1"
                                    elif "joint_blocks" in k:
                                        arch = "SD3 / MMDiT"
                                    elif "transformer_blocks" in k:
                                        arch = "DiT / Z-Image"
        except Exception as err:
            logger.debug("Could not parse safetensors header for %s: %s", rel_path, err)

    return {
        "path": rel_path,
        "full_path": full_path,
        "size_bytes": size_bytes,
        "size_str": size_str,
        "mtime_str": mtime_str,
        "arch": arch,
        "precision": precision,
        "has_preview": preview_path is not None,
        "preview_path": preview_path,
        "model_title": model_title,
        "base_model": base_model,
        "creator": creator,
        "download_count": download_count,
        "thumbs_up": thumbs_up,
        "trained_words": trained_words,
        "sample_prompts": sample_prompts,
        "has_meta_json": meta_json_path is not None,
        "metadata": metadata_tags,
    }




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
        # `fetch_models_with_status` is a blocking network call (up to its 15 s
        # timeout). Running it inline froze the ComfyUI event loop — progress
        # WebSocket, queue and every other route — for the whole request, so it
        # goes to a worker thread.
        payload, status = await asyncio.to_thread(build_models_response, provider, force)
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
        # Writes auth.json and re-reads the provider accounts — disk I/O that
        # should not hold the event loop.
        payload, status = await asyncio.to_thread(apply_auth_payload, data)
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
        # The probe lists the models and then runs a real generation — up to the
        # provider's full timeout. Inline it stalled the whole ComfyUI server
        # (event loop) for the entire probe, so it runs in a worker thread.
        result = await asyncio.to_thread(probe_provider, provider, model)
        return web.json_response(result)


    @server.routes.get(f"/{ROUTE_SLUG}/sampler_options")
    async def sampler_options(request):
        # Which installed samplers read eta / BONGMATH — the KSampler panel
        # grays the widgets out for samplers that would ignore them. Cheap
        # pure-Python introspection (cached after the first pass), no thread.
        from .common.sampling import sampler_option_support

        return web.json_response(sampler_option_support())

    @server.routes.get(f"/{ROUTE_SLUG}/locale/{{lang}}")
    async def get_locale(request):
        lang = request.match_info.get("lang", "en")
        translations = get_localization_manager().get_all(lang)
        return web.json_response(translations)

    @server.routes.get(f"/{ROUTE_SLUG}/models_list/{{mode}}")
    async def models_list(request):
        mode = request.match_info.get("mode", "checkpoints")
        from .nodes.node_model_cycler import _get_checkpoint_names, _get_diffusion_model_names
        if mode == "diffusion_models":
            names = await asyncio.to_thread(_get_diffusion_model_names)
        else:
            names = await asyncio.to_thread(_get_checkpoint_names)
        return web.json_response({"models": names})

    @server.routes.get(f"/{ROUTE_SLUG}/model_info/{{mode}}")
    async def model_info(request):
        mode = request.match_info.get("mode", "checkpoints")
        rel_path = request.query.get("path", "")
        if not rel_path:
            return web.json_response({"error": "missing path parameter"}, status=400)
        info = await asyncio.to_thread(_inspect_model_file, mode, rel_path)
        return web.json_response(info)

    @server.routes.get(f"/{ROUTE_SLUG}/model_preview/{{mode}}")
    async def model_preview(request):
        import os
        mode = request.match_info.get("mode", "checkpoints")
        rel_path = request.query.get("path", "")
        if not rel_path:
            return web.Response(status=404)
        info = await asyncio.to_thread(_inspect_model_file, mode, rel_path)
        preview_file = info.get("preview_path")
        if not preview_file or not os.path.isfile(preview_file):
            return web.Response(status=404)
        return web.FileResponse(preview_file)

    @server.routes.get(f"/{ROUTE_SLUG}/node_contracts")
    async def node_contracts(request):
        # `node_ids` and `settings_prefix` are preserved for the legacy
        # frontend; `schemas` (Pydantic JSON Schemas per node) is consumed
        # by the new Vue 3 + TS frontend and by scripts/gen_contracts.
        return web.json_response(public_node_contracts_v2())

    _ROUTES_REGISTERED = True
    logger.info(f"[{BRAND}] API routes registered: /{ROUTE_SLUG}/*")
