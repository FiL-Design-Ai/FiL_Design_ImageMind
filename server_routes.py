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
from .common.director_assist import run_director_assist, validate_assist_request
from .common.localization import get_localization_manager
from .common.model_folders import (
    ensure_extra_model_paths as _ensure_extra_model_paths,
    inside_model_roots as _inside_model_roots,
)

PROVIDER_DISPLAY_NAMES = {k: v.display_name for k, v in PROVIDERS.items()}

logger = logging.getLogger(f"{BRAND}.API")

_ROUTES_REGISTERED = False


def _fetch_civitai_metadata_and_preview(full_path: str) -> str:
    """Fetch metadata and a preview from Civitai when they are not already here.

    Returns what happened, because the panel has to be able to tell the user:
    `cached` (both were already beside the model), `fetched`, `not_found` (the
    file is not on Civitai), `offline` (the site could not be reached),
    `unreadable`/`too_small`/`no_file` (nothing to hash).
    """
    import hashlib
    import json
    import os
    import urllib.request

    if not full_path or not os.path.isfile(full_path):
        return "no_file"

    base_no_ext, _ = os.path.splitext(full_path)
    preview_exists = any(os.path.isfile(base_no_ext + ext) for ext in PREVIEW_EXTENSIONS)
    meta_json_path = base_no_ext + ".metadata.json"
    meta_exists = os.path.isfile(meta_json_path)

    if preview_exists and meta_exists:
        return "cached"

    # AutoV1: the SHA256 of 64 KB starting one megabyte in, cut to eight
    # characters. That is one of the hash forms Civitai indexes, and it is the
    # cheap one — the others are over the whole file, which is minutes of disk
    # for a 24 GB checkpoint.
    #
    # What stood here hashed the first 64 MB and called it fast. No index holds
    # that number, so every lookup 404'd and this function had never once
    # brought back a preview or a line of metadata. Everything that looked like
    # it worked came from sidecar files other tools had already written.
    # Measured against a model with a Civitai record beside it: the 64 MB
    # digest was 52107A83..., the file's real SHA256 A09D5578..., and the
    # AutoV1 below 265E0CE2 — which is exactly what Civitai has on file for it.
    try:
        with open(full_path, "rb") as f:
            f.seek(0x100000)
            chunk = f.read(0x10000)
    except Exception:
        return "unreadable"
    if not chunk:
        return "too_small"
    file_hash = hashlib.sha256(chunk).hexdigest()[:8].upper()

    url = f"https://civitai.com/api/v1/model-versions/by-hash/{file_hash}"
    try:
        req = urllib.request.Request(
            url, headers={"User-Agent": "FiL_Design_ImageMind/1.1", "Accept": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=4) as resp:
            if resp.status != 200:
                return "not_found"
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

        return "fetched"
    except urllib.error.HTTPError as err:
        # 404 is the ordinary answer for a model nobody uploaded, and it is not
        # the same news as "the site is down".
        return "not_found" if err.code == 404 else "offline"
    except Exception:
        return "offline"


#: Picture files that can sit beside a model, best first.
PREVIEW_EXTENSIONS = (
    ".preview.png", ".preview.jpeg", ".preview.jpg", ".preview.webp",
    ".png", ".jpg", ".jpeg", ".webp",
)

#: What to call each of them on the way out. `mimetypes` on a stock Windows
#: Python does not know `.webp`, so `FileResponse` labelled those
#: `application/octet-stream` — browsers sniff an `<img>` and render it anyway,
#: but nothing else that reads the header can.
PREVIEW_CONTENT_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
}


def _inspect_model_file(mode: str, rel_path: str, fetch_remote: bool = False) -> dict:
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
            # Same relative name, tried against the other kinds of model folder.
            # A LoRA asked about under `mode=checkpoints` is a routing slip, not
            # a missing file.
            for other_type in ("diffusion_models", "unet", "checkpoints", "loras"):
                if other_type == folder_type:
                    continue
                for directory in folder_paths.get_folder_paths(other_type) or []:
                    if not directory:
                        continue
                    candidate = os.path.join(directory, rel_clean.replace("/", os.sep))
                    if os.path.isfile(candidate):
                        full_path = candidate
                        break
                if full_path and os.path.isfile(full_path):
                    break
            # Deliberately no walk over every model directory looking for any
            # file with the same basename. It answered about whichever copy it
            # met first — `sdxl/style.safetensors` and `flux/style.safetensors`
            # are different models — and it re-read the whole models tree on
            # every miss. What the panels send comes from `get_filename_list`,
            # so a name the joins above cannot resolve is genuinely not there.
    except Exception as err:
        logger.warning("Error resolving model file %s: %s", rel_path, err)
        full_path = None

    if full_path and not _inside_model_roots(full_path):
        logger.warning("refused a path outside the model folders: %r", rel_path)
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

    # Civitai is asked only when the caller says so. Every panel used to trigger
    # this on open, once per listed model: a 64 MB read plus a network call per
    # item, and two new files written into the user's model folder without them
    # asking. The info dialog passes `fetch=1`; background lookups do not.
    civitai_status = None
    if fetch_remote:
        try:
            civitai_status = _fetch_civitai_metadata_and_preview(full_path)
        except Exception:
            civitai_status = "offline"

    # `.preview.*` first, and all four of them. A picture a downloader wrote
    # beside the model is named `model.preview.jpeg` as often as `model.png` —
    # ComfyUI Manager and the Civitai helpers both use that form — and the list
    # here knew only `.preview.png`, so a model whose preview was a `.jpeg` or a
    # `.webp` in that form showed an empty box. Pixaroma's LoRA loader carries
    # exactly these eight (`nodes/_lora_helpers.py`, `_PREVIEW_EXTS`), and the
    # order matters as much as the list: a `.preview.*` file is the one somebody
    # chose, while a bare `.png` beside a model is as likely to be a sample the
    # user dropped there.
    preview_path = None
    for ext in PREVIEW_EXTENSIONS:
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

    # `d.get("k", {})` hands back the stored `None` when the key is present and
    # null, and the next `.get` on it raises — a 500 for the whole dialog. Real
    # Civitai records carry `"meta": null` on any image uploaded without
    # generation data, which is most of them; found on an installed LoRA whose
    # info dialog answered nothing but "Server got itself in trouble".
    def sub(source: object, key: str) -> dict:
        value = source.get(key) if isinstance(source, dict) else None
        return value if isinstance(value, dict) else {}

    civitai = sub(meta_json_data, "civitai")

    model_title = meta_json_data.get("model_name") or sub(civitai, "model").get("name") or ""
    base_model = meta_json_data.get("base_model") or civitai.get("baseModel") or ""
    creator = sub(civitai, "creator").get("username") or ""
    download_count = sub(civitai, "stats").get("downloadCount") or 0
    thumbs_up = sub(civitai, "stats").get("thumbsUpCount") or 0
    trained_words = meta_json_data.get("trainedWords") or civitai.get("trainedWords") or []
    if not isinstance(trained_words, list):
        trained_words = []

    sample_prompts: list[str] = []
    civitai_imgs = civitai.get("images", [])
    if isinstance(civitai_imgs, list):
        for img in civitai_imgs:
            pmt = sub(img, "meta").get("prompt")
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

    # The panels show trigger words per item, and the LoRA node reads plain
    # `.txt` sidecars as well as the Civitai json — so the same reader answers
    # both, and the panel cannot show one thing while the run applies another.
    trigger_words = ", ".join(str(w) for w in trained_words if w) if trained_words else ""
    if folder_type == "loras":
        try:
            from .nodes.node_lora_loader import trigger_words_from_path

            sidecar = trigger_words_from_path(full_path)
            if sidecar:
                trigger_words = sidecar
        except Exception as err:
            logger.debug("Trigger-word lookup failed for %s: %s", rel_path, err)

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
        "trigger_words": trigger_words,
        "sample_prompts": sample_prompts,
        "has_meta_json": meta_json_path is not None,
        # What the Civitai lookup did, when one was asked for. The dialog says
        # it out loud: a model with no record on the site used to read exactly
        # like one whose lookup silently failed.
        "civitai_status": civitai_status,
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


    @server.routes.post(f"/{ROUTE_SLUG}/director_assist")
    async def director_assist(request):
        if _reject_cross_site(request):
            return web.json_response({"error": "cross-site request blocked"}, status=403)
        try:
            data = await request.json()
        except Exception:
            return web.json_response({"error": "invalid JSON"}, status=400)
        error = validate_assist_request(data)
        if error:
            return web.json_response({"error": error}, status=400)
        # The panel forwards the Provider Loader's own dials; clamp so a broken
        # widget cannot send nonsense into the provider call.
        try:
            temperature = min(max(float(data.get("temperature", 0.7)), 0.0), 2.0)
        except (TypeError, ValueError):
            temperature = 0.7
        try:
            rate_limit_ms = min(max(int(data.get("rate_limit_ms", 100)), 0), 5000)
        except (TypeError, ValueError):
            rate_limit_ms = 100
        result = await asyncio.to_thread(
            run_director_assist,
            str(data.get("provider", "")).strip().lower(),
            str(data.get("model", "")).strip(),
            str(data.get("operation", "")),
            str(data.get("text", "")),
            temperature,
            rate_limit_ms,
        )
        if "error" in result:
            return web.json_response(result, status=502)
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
        fetch_remote = request.query.get("fetch", "0") == "1"
        info = await asyncio.to_thread(_inspect_model_file, mode, rel_path, fetch_remote)
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
        suffix = os.path.splitext(preview_file)[1].lower()
        content_type = PREVIEW_CONTENT_TYPES.get(suffix)
        headers = {"Content-Type": content_type} if content_type else None
        return web.FileResponse(preview_file, headers=headers)

    @server.routes.post(f"/{ROUTE_SLUG}/sort_models")
    async def sort_models(request):
        # Both are used by `_get_meta` below and neither was imported, in a file
        # where every other route imports `os` for itself. `re.sub` is the first
        # statement of `_get_meta`, so any request carrying a non-empty `models`
        # array raised `NameError` and came back 500 — the Model Cycler's sort
        # button (useModelQueue.ts) has never worked. `ruff` reported it as seven
        # F821s the whole time; the job that runs ruff was failing on unrelated
        # noise, so nobody read its output.
        import os
        import re

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

            if full_p and not _inside_model_roots(full_p):
                full_p = None

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

    @server.routes.get(f"/{ROUTE_SLUG}/node_contracts")
    async def node_contracts(request):
        # `node_ids` and `settings_prefix` are preserved for the legacy
        # frontend; `schemas` (Pydantic JSON Schemas per node) is consumed
        # by the new Vue 3 + TS frontend and by scripts/gen_contracts.
        return web.json_response(public_node_contracts_v2())

    _ROUTES_REGISTERED = True
    logger.info(f"[{BRAND}] API routes registered: /{ROUTE_SLUG}/*")
