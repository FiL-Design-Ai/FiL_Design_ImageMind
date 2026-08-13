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


def _ensure_extra_model_paths() -> None:
    """Scan and load any extra_model_paths.yaml files into ComfyUI's folder_paths."""
    try:
        import sys
        import os
        import folder_paths
        import utils.extra_config

        base = getattr(folder_paths, "base_path", None) or os.getcwd()
        if os.path.isdir(base):
            for fname in os.listdir(base):
                if (fname.startswith("extra_") or "model_paths" in fname) and fname.endswith((".yaml", ".yml")):
                    full_p = os.path.join(base, fname)
                    if os.path.isfile(full_p):
                        utils.extra_config.load_extra_path_config(full_p)

        for i, arg in enumerate(sys.argv):
            if arg == "--extra-model-paths-config" and i + 1 < len(sys.argv):
                cfg_path = sys.argv[i + 1]
                if os.path.isfile(cfg_path):
                    utils.extra_config.load_extra_path_config(cfg_path)
    except Exception:
        pass


def _fetch_civitai_metadata_and_preview(full_path: str) -> bool:
    """Auto-fetch metadata & thumbnail preview from Civitai API if not present locally."""
    import hashlib
    import json
    import os
    import urllib.request

    if not full_path or not os.path.isfile(full_path):
        return False

    base_no_ext, _ = os.path.splitext(full_path)
    preview_exists = any(
        os.path.isfile(base_no_ext + ext)
        for ext in [".png", ".preview.png", ".jpg", ".jpeg", ".webp"]
    )
    meta_json_path = base_no_ext + ".metadata.json"
    meta_exists = os.path.isfile(meta_json_path)

    if preview_exists and meta_exists:
        return True

    # Fast hashing: calculate SHA256 of the first 64MB of the file
    sha256 = hashlib.sha256()
    try:
        with open(full_path, "rb") as f:
            chunk = f.read(64 * 1024 * 1024)
            sha256.update(chunk)
        file_hash = sha256.hexdigest().upper()
    except Exception:
        return False

    url = f"https://civitai.com/api/v1/model-versions/by-hash/{file_hash}"
    try:
        req = urllib.request.Request(
            url, headers={"User-Agent": "FiL_Design_ImageMind/1.1", "Accept": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=4) as resp:
            if resp.status != 200:
                return False
            data = json.loads(resp.read().decode("utf-8"))

        if not meta_exists and isinstance(data, dict):
            with open(meta_json_path, "w", encoding="utf-8") as f:
                json.dump({"civitai": data}, f, ensure_ascii=False, indent=2)

        if not preview_exists and isinstance(data, dict):
            images = data.get("images", [])
            if isinstance(images, list) and len(images) > 0:
                img_url = images[0].get("url")
                if img_url:
                    img_req = urllib.request.Request(
                        img_url,
                        headers={"User-Agent": "FiL_Design_ImageMind/1.1"},
                    )
                    with urllib.request.urlopen(img_req, timeout=5) as img_resp:
                        if img_resp.status == 200:
                            save_img_path = base_no_ext + ".png"
                            with open(save_img_path, "wb") as img_f:
                                img_f.write(img_resp.read())

        return True
    except Exception:
        return False


def _inspect_model_file(mode: str, rel_path: str) -> dict:
    import datetime
    import json
    import os
    import struct
    try:
        import folder_paths

        _ensure_extra_model_paths()

        clean_mode = str(mode or "").strip().lower().replace(" ", "_")
        if "diffusion" in clean_mode or "unet" in clean_mode:
            folder_type = "diffusion_models"
        elif "lora" in clean_mode:
            folder_type = "loras"
        else:
            folder_type = "checkpoints"

        rel_clean = rel_path.replace("\\", "/").strip()
        rel_win = rel_path.replace("/", "\\").strip()

        full_path = (
            folder_paths.get_full_path(folder_type, rel_clean)
            or folder_paths.get_full_path(folder_type, rel_win)
            or folder_paths.get_full_path(folder_type, rel_path)
        )
        if not full_path or not os.path.isfile(full_path):
            if folder_type == "diffusion_models":
                full_path = (
                    folder_paths.get_full_path("unet", rel_clean)
                    or folder_paths.get_full_path("unet", rel_win)
                    or folder_paths.get_full_path("unet", rel_path)
                )

        if not full_path or not os.path.isfile(full_path):
            dirs = folder_paths.get_folder_paths(folder_type) or []
            if folder_type == "diffusion_models":
                dirs = dirs + (folder_paths.get_folder_paths("unet") or [])
            for d in dirs:
                cands = [
                    os.path.join(d, rel_clean.replace("/", os.sep)),
                    os.path.join(d, rel_win.replace("\\", os.sep)),
                    os.path.join(d, rel_path),
                ]
                for cand in cands:
                    if os.path.isfile(cand):
                        full_path = cand
                        break
                if full_path and os.path.isfile(full_path):
                    break

        if not full_path or not os.path.isfile(full_path):
            # Global fallback: search across ALL model directories registered in folder_paths
            all_types = ["diffusion_models", "unet", "checkpoints", "loras"]
            target_base = os.path.basename(rel_clean)
            for ftype in all_types:
                for d in (folder_paths.get_folder_paths(ftype) or []):
                    if not d or not os.path.isdir(d):
                        continue
                    cand1 = os.path.join(d, rel_clean.replace("/", os.sep))
                    if os.path.isfile(cand1):
                        full_path = cand1
                        break
                    for root, _, files in os.walk(d):
                        if target_base in files:
                            full_path = os.path.join(root, target_base)
                            break
                    if full_path and os.path.isfile(full_path):
                        break
                if full_path and os.path.isfile(full_path):
                    break
    except Exception as err:
        logger.warning("Error resolving model file %s: %s", rel_path, err)
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

    # Auto-fetch metadata and preview from Civitai API if not available locally
    try:
        _fetch_civitai_metadata_and_preview(full_path)
    except Exception:
        pass

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
        from .nodes.node_lora_loader import _get_lora_names
        if mode == "diffusion_models":
            names = await asyncio.to_thread(_get_diffusion_model_names)
        elif mode in ("loras", "lora"):
            names = await asyncio.to_thread(_get_lora_names)
        else:
            names = await asyncio.to_thread(_get_checkpoint_names)
        return web.json_response({"models": names})

    @server.routes.get(f"/{ROUTE_SLUG}/model_info")
    @server.routes.get(f"/{ROUTE_SLUG}/model_info/{{mode}}")
    async def model_info(request):
        mode = request.match_info.get("mode") or request.query.get("mode", "checkpoints")
        rel_path = request.query.get("path", "")
        if not rel_path:
            return web.json_response({"error": "missing path parameter"}, status=400)
        info = await asyncio.to_thread(_inspect_model_file, mode, rel_path)
        return web.json_response(info)

    @server.routes.get(f"/{ROUTE_SLUG}/model_preview")
    @server.routes.get(f"/{ROUTE_SLUG}/model_preview/{{mode}}")
    async def model_preview(request):
        import os
        mode = request.match_info.get("mode") or request.query.get("mode", "checkpoints")
        rel_path = request.query.get("path", "")
        if not rel_path:
            return web.Response(status=404)
        info = await asyncio.to_thread(_inspect_model_file, mode, rel_path)
        preview_file = info.get("preview_path")
        if not preview_file or not os.path.isfile(preview_file):
            return web.Response(status=404)
        return web.FileResponse(preview_file)

    @server.routes.get(f"/{ROUTE_SLUG}/cycler_presets")
    async def get_cycler_presets(request):
        import json
        import os
        preset_file = os.path.join(os.path.dirname(__file__), "common", "data", "cycler_presets.json")
        if not os.path.isfile(preset_file):
            return web.json_response({"presets": []})
        try:
            with open(preset_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                return web.json_response({"presets": data.get("presets", [])})
        except Exception:
            return web.json_response({"presets": []})

    @server.routes.post(f"/{ROUTE_SLUG}/cycler_presets")
    async def save_cycler_preset(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)

        name = str(data.get("name", "")).strip()
        models = data.get("models", [])
        source_mode = str(data.get("source_mode", "Checkpoints")).strip()
        if not name or not isinstance(models, list):
            return web.json_response({"error": "name and models array are required"}, status=400)

        import json
        import os
        data_dir = os.path.join(os.path.dirname(__file__), "common", "data")
        os.makedirs(data_dir, exist_ok=True)
        preset_file = os.path.join(data_dir, "cycler_presets.json")

        presets = []
        if os.path.isfile(preset_file):
            try:
                with open(preset_file, "r", encoding="utf-8") as f:
                    presets = json.load(f).get("presets", [])
            except Exception:
                presets = []

        presets = [p for p in presets if p.get("name") != name]
        presets.append({
            "name": name,
            "source_mode": source_mode,
            "models": models,
        })

        with open(preset_file, "w", encoding="utf-8") as f:
            json.dump({"presets": presets}, f, ensure_ascii=False, indent=2)

        return web.json_response({"status": "success", "presets": presets})

    @server.routes.delete(f"/{ROUTE_SLUG}/cycler_presets/{{name}}")
    async def delete_cycler_preset(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        name = request.match_info.get("name", "").strip()
        if not name:
            return web.json_response({"error": "missing preset name"}, status=400)

        import json
        import os
        preset_file = os.path.join(os.path.dirname(__file__), "common", "data", "cycler_presets.json")
        if not os.path.isfile(preset_file):
            return web.json_response({"status": "success", "presets": []})

        try:
            with open(preset_file, "r", encoding="utf-8") as f:
                presets = json.load(f).get("presets", [])
        except Exception:
            presets = []

        presets = [p for p in presets if p.get("name") != name]
        with open(preset_file, "w", encoding="utf-8") as f:
            json.dump({"presets": presets}, f, ensure_ascii=False, indent=2)

        return web.json_response({"status": "success", "presets": presets})

    @server.routes.post(f"/{ROUTE_SLUG}/sort_models")
    async def sort_models(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)

        mode = str(data.get("mode", "checkpoints")).strip()
        models = data.get("models", [])
        sort_by = str(data.get("sort_by", "name_asc")).strip().lower()
        if not isinstance(models, list):
            return web.json_response({"error": "models array required"}, status=400)

        def _get_meta(raw_item: str):
            clean = re.sub(r"^#\s*", "", raw_item).strip()
            norm_clean = clean.replace("\\", "/")
            full_p = None
            try:
                import folder_paths
                folder_type = "diffusion_models" if mode == "diffusion_models" else "checkpoints"
                full_p = folder_paths.get_full_path(folder_type, norm_clean) or folder_paths.get_full_path(folder_type, clean)
                if not full_p or not os.path.isfile(full_p):
                    dirs = folder_paths.get_folder_paths(folder_type) or []
                    for d in dirs:
                        cand = os.path.join(d, norm_clean.replace("/", os.sep))
                        if os.path.isfile(cand):
                            full_p = cand
                            break
            except Exception:
                pass

            mtime = 0
            size = 0
            if full_p and os.path.isfile(full_p):
                try:
                    stat = os.stat(full_p)
                    mtime = stat.st_mtime
                    size = stat.st_size
                except Exception:
                    pass
            return {
                "raw": raw_item,
                "clean": clean,
                "mtime": mtime,
                "size": size,
                "enabled": not raw_item.startswith("#"),
            }

        meta_list = await asyncio.to_thread(lambda: [_get_meta(m) for m in models])

        if sort_by == "name_asc":
            meta_list.sort(key=lambda x: x["clean"].lower())
        elif sort_by == "name_desc":
            meta_list.sort(key=lambda x: x["clean"].lower(), reverse=True)
        elif sort_by == "date_desc":
            meta_list.sort(key=lambda x: x["mtime"], reverse=True)
        elif sort_by == "date_asc":
            meta_list.sort(key=lambda x: x["mtime"])
        elif sort_by == "size_desc":
            meta_list.sort(key=lambda x: x["size"], reverse=True)
        elif sort_by == "size_asc":
            meta_list.sort(key=lambda x: x["size"])
        elif sort_by == "enabled_first":
            meta_list.sort(key=lambda x: 0 if x["enabled"] else 1)

        sorted_raw = [x["raw"] for x in meta_list]
        return web.json_response({"sorted_models": sorted_raw})

    @server.routes.get(f"/{ROUTE_SLUG}/lora_cycler_presets")
    async def get_lora_cycler_presets(request):
        import json
        import os
        preset_file = os.path.join(os.path.dirname(__file__), "common", "data", "lora_cycler_presets.json")
        if not os.path.isfile(preset_file):
            return web.json_response({"presets": []})
        try:
            with open(preset_file, "r", encoding="utf-8") as f:
                return web.json_response({"presets": json.load(f).get("presets", [])})
        except Exception as err:
            logger.warning("Failed to read lora cycler presets: %s", err)
            return web.json_response({"presets": []})

    @server.routes.post(f"/{ROUTE_SLUG}/lora_cycler_presets")
    async def save_lora_cycler_preset(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        name = str(data.get("name", "")).strip()
        loras = data.get("loras", [])
        if not name or not isinstance(loras, list):
            return web.json_response({"error": "invalid preset"}, status=400)
        import json
        import os
        data_dir = os.path.join(os.path.dirname(__file__), "common", "data")
        os.makedirs(data_dir, exist_ok=True)
        preset_file = os.path.join(data_dir, "lora_cycler_presets.json")
        presets = []
        if os.path.isfile(preset_file):
            try:
                with open(preset_file, "r", encoding="utf-8") as f:
                    presets = json.load(f).get("presets", [])
            except Exception:
                presets = []
        presets = [p for p in presets if p.get("name") != name]
        presets.append({"name": name, "loras": loras})
        with open(preset_file, "w", encoding="utf-8") as f:
            json.dump({"presets": presets}, f, ensure_ascii=False, indent=2)
        return web.json_response({"status": "success", "presets": presets})

    @server.routes.delete(f"/{ROUTE_SLUG}/lora_cycler_presets/{{name}}")
    async def delete_lora_cycler_preset(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        name = request.match_info.get("name", "").strip()
        if not name:
            return web.json_response({"error": "missing preset name"}, status=400)
        import json
        import os
        preset_file = os.path.join(os.path.dirname(__file__), "common", "data", "lora_cycler_presets.json")
        if not os.path.isfile(preset_file):
            return web.json_response({"status": "success", "presets": []})
        try:
            with open(preset_file, "r", encoding="utf-8") as f:
                presets = json.load(f).get("presets", [])
        except Exception:
            presets = []
        presets = [p for p in presets if p.get("name") != name]
        with open(preset_file, "w", encoding="utf-8") as f:
            json.dump({"presets": presets}, f, ensure_ascii=False, indent=2)
        return web.json_response({"status": "success", "presets": presets})

    @server.routes.get(f"/{ROUTE_SLUG}/model_preview")
    async def get_model_preview(request):
        mode = request.query.get("mode", "checkpoints")
        path = request.query.get("path", "")
        if not path:
            return web.Response(status=400, text="missing path")
        info = await asyncio.to_thread(_inspect_model_file, mode, path)
        preview_path = info.get("preview_url")
        if preview_path and os.path.isfile(preview_path):
            return web.FileResponse(preview_path)
        return web.Response(status=404, text="preview not found")

    @server.routes.get(f"/{ROUTE_SLUG}/node_contracts")
    async def node_contracts(request):
        # `node_ids` and `settings_prefix` are preserved for the legacy
        # frontend; `schemas` (Pydantic JSON Schemas per node) is consumed
        # by the new Vue 3 + TS frontend and by scripts/gen_contracts.
        return web.json_response(public_node_contracts_v2())

    _ROUTES_REGISTERED = True
    logger.info(f"[{BRAND}] API routes registered: /{ROUTE_SLUG}/*")
