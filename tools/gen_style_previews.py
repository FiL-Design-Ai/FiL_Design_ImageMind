"""Generate the style-preview thumbnails shown on the style picker tiles.

Replaces `_gen_style_previews.py`, which was lost — the map it produced
(`frontend/src/generated/stylePreviews.ts`) survived, so this rebuilds the same
convention rather than inventing a new one.

    python_embeded\\python.exe tools/gen_style_previews.py --report
    python_embeded\\python.exe tools/gen_style_previews.py --library photo --missing
    python_embeded\\python.exe tools/gen_style_previews.py --library photo --missing --write-map

Talks to a running ComfyUI over its HTTP API rather than driving the canvas, so
it cannot disturb an open workflow — a graph in the browser may live only in
localStorage, and adding nodes to it overwrites that draft.

Two things it must get right, both learned the hard way:

* **A preview is only readable if everything except the style is identical.**
  Same base prompt, same seed, same model, sampler, steps, CFG and size. A
  thumbnail that differs in subject as well as style tells the viewer nothing
  about the style.
* **The file name is `md5(style_key)[:12].webp`, but the key is not the only
  source of truth.** `🧪 ЭФФЕКТЫ/🔬 Electron Micro` was renamed after its
  preview was made, so its committed file no longer matches its key. Recomputing
  names from current keys would orphan that image. Existing entries in the map
  are therefore kept as they are; only missing ones get a fresh name.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import uuid
from pathlib import Path
from typing import Dict, List, Tuple

sys.stdout.reconfigure(encoding="utf-8")  # Russian style keys vs a cp1251 console

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT.parents[0]))          # ComfyUI/custom_nodes — for the pack import
sys.path.insert(0, str(ROOT.parents[1]))          # ComfyUI itself

PREVIEW_DIR = ROOT / "frontend" / "public" / "style-previews"
DIST_DIR = ROOT / "frontend" / "dist" / "style-previews"
MAP_FILE = ROOT / "frontend" / "src" / "generated" / "stylePreviews.ts"
URL_BASE = "/extensions/FiL_Design_ImageMind/style-previews"

THUMB_PX = 256          # what the committed previews are, and what a tile shows
RENDER_PX = 1024        # krea-2 native, per its modelspec

HOST = "http://127.0.0.1:8188"
UNET = "krea2TurboInt8Row_v10.safetensors"
CLIP = "Krea2\\qwen3vl_4b_fp8_scaled.safetensors"
VAE = "krea2RealVae_v10.safetensors"
SEED = 777001
STEPS = 8               # turbo distillation; more steps buys nothing here
CFG = 1.0

# ---------------------------------------------------------------------------
# Subjects
# ---------------------------------------------------------------------------
#
# One subject for every style, because that is what the 157 committed previews
# already do and consistency across the grid matters more than any per-category
# cleverness. Read them before changing this: the same smiling woman, framed
# head-and-shoulders, appears under every style — including the ones that
# describe a place ("🏙️ СРЕДА/☔ Rain Monsoon Puddle" puts rain-dimpled puddles
# behind the same face). The style paints the whole world around her.
#
# That convention is also better than it first looks:
#
# * A face filling the frame is the one thing still legible at 256px, which is
#   all a tile ever shows. Fine grain and subtle colour shifts do not survive
#   the downscale; skin tone, contrast and overall palette do.
# * Saying nothing about light leaves the lighting styles somewhere to go. An
#   earlier attempt here put "one bare lamp visible in frame, beside a window"
#   in the base prompt and the two styles that are ENTIRELY about lighting —
#   Direct Flash Night and Rembrandt Key Light — came back looking like every
#   other frame, because the subject had already decided where the light was.
#
# So: subject, framing, gaze. Nothing about medium, lens, light or colour — the
# style brings all four, and saying it twice makes them argue.

SUBJECT = (
    "a smiling young woman with long dark hair, head and shoulders, "
    "facing the camera, looking into the lens"
)


def subject_for(style_key: str) -> str:
    return SUBJECT


# ---------------------------------------------------------------------------
# The map that already exists
# ---------------------------------------------------------------------------


def read_map() -> Dict[str, str]:
    """Existing key -> file name. Authoritative for anything already in it."""
    if not MAP_FILE.exists():
        return {}
    text = MAP_FILE.read_text(encoding="utf-8")
    return {
        key: Path(urllib.parse.urlparse(url).path).name
        for key, url in re.findall(r'^\s+"([^"]+)": "([^"]+)"', text, re.M)
    }


def file_name_for(style_key: str, existing: Dict[str, str]) -> str:
    """Keep what the map already says; only invent a name when there is none.

    See the module docstring: one key was renamed after its image was made, so
    `md5(key)` does not reproduce every committed file name.
    """
    if style_key in existing:
        return existing[style_key]
    return hashlib.md5(style_key.encode("utf-8"), usedforsecurity=False).hexdigest()[:12] + ".webp"


def load_library(name: str) -> Dict[str, str]:
    from FiL_Design_ImageMind.common.styles.art import ART_STYLES
    from FiL_Design_ImageMind.common.styles.nsfw_art import NSFW_ART_STYLES
    from FiL_Design_ImageMind.common.styles.nsfw_photo import NSFW_PHOTO_STYLES
    from FiL_Design_ImageMind.common.styles.photo import PHOTO_STYLES

    libs = {"photo": PHOTO_STYLES, "art": ART_STYLES,
            "nsfw_photo": NSFW_PHOTO_STYLES, "nsfw_art": NSFW_ART_STYLES}
    return {k: v for k, v in libs[name].items() if k != "None" and v}


# ---------------------------------------------------------------------------
# ComfyUI
# ---------------------------------------------------------------------------


def build_graph(prompt: str) -> dict:
    return {
        "1": {"class_type": "UNETLoader", "inputs": {"unet_name": UNET, "weight_dtype": "default"}},
        "2": {"class_type": "CLIPLoader", "inputs": {"clip_name": CLIP, "type": "krea2"}},
        "3": {"class_type": "VAELoader", "inputs": {"vae_name": VAE}},
        "4": {"class_type": "TextEncodeKrea2", "inputs": {"clip": ["2", 0], "prompt": prompt}},
        "5": {"class_type": "TextEncodeKrea2", "inputs": {"clip": ["2", 0], "prompt": ""}},
        "6": {"class_type": "EmptySD3LatentImage",
              "inputs": {"width": RENDER_PX, "height": RENDER_PX, "batch_size": 1}},
        "7": {"class_type": "KSampler", "inputs": {
            "model": ["1", 0], "positive": ["4", 0], "negative": ["5", 0], "latent_image": ["6", 0],
            "seed": SEED, "steps": STEPS, "cfg": CFG,
            "sampler_name": "euler", "scheduler": "simple", "denoise": 1.0}},
        "8": {"class_type": "VAEDecode", "inputs": {"samples": ["7", 0], "vae": ["3", 0]}},
        "9": {"class_type": "SaveImage",
              "inputs": {"images": ["8", 0], "filename_prefix": "fil_style_previews/p"}},
    }


def render(prompt: str, timeout: int = 600) -> bytes:
    body = json.dumps({"prompt": build_graph(prompt), "client_id": str(uuid.uuid4())}).encode()
    req = urllib.request.Request(f"{HOST}/prompt", body, {"Content-Type": "application/json"})
    pid = json.load(urllib.request.urlopen(req, timeout=60))["prompt_id"]

    started = time.time()
    while time.time() - started < timeout:
        history = json.load(urllib.request.urlopen(f"{HOST}/history/{pid}", timeout=30))
        entry = history.get(pid)
        if entry:
            status = entry.get("status", {})
            if status.get("completed"):
                images = [i for out in entry["outputs"].values() for i in out.get("images", [])]
                if not images:
                    raise RuntimeError("ComfyUI reported success but returned no image")
                query = urllib.parse.urlencode(images[0])
                return urllib.request.urlopen(f"{HOST}/view?{query}", timeout=120).read()
            if status.get("status_str") == "error":
                raise RuntimeError(json.dumps(status.get("messages"), ensure_ascii=False)[:400])
        time.sleep(2)
    raise TimeoutError(f"no result after {timeout}s")


def to_thumbnail(png: bytes) -> bytes:
    from PIL import Image

    image = Image.open(io.BytesIO(png)).convert("RGB")
    image = image.resize((THUMB_PX, THUMB_PX), Image.LANCZOS)
    buffer = io.BytesIO()
    image.save(buffer, "WEBP", quality=82, method=6)
    return buffer.getvalue()


# ---------------------------------------------------------------------------
# The map file
# ---------------------------------------------------------------------------

EXPORTS = (("photo", "PHOTO_STYLE_PREVIEWS"), ("art", "ART_STYLE_PREVIEWS"),
           ("nsfw_photo", "NSFW_PHOTO_STYLE_PREVIEWS"), ("nsfw_art", "NSFW_ART_STYLE_PREVIEWS"))


def write_map(existing: Dict[str, str]) -> None:
    """Rewrite stylePreviews.ts from what is actually on disk."""
    header = (
        "/**\n"
        " * AUTO-GENERATED by tools/gen_style_previews.py — do not edit by hand.\n"
        " * Maps style preset keys (as used in common/styles/*.py) to their preview\n"
        " * thumbnail URL under ComfyUI's /extensions/FiL_Design_ImageMind/ static root.\n"
        " *\n"
        " * A key with no entry here is not a bug: FilStylePicker falls back to an\n"
        " * emoji + name tile, so a style ships perfectly well without a thumbnail.\n"
        " *\n"
        " * File names are md5(style_key)[:12].webp, EXCEPT where an entry already\n"
        " * existed — one style was renamed after its image was made, so recomputing\n"
        " * every name from the current keys would orphan a committed file. The\n"
        " * generator keeps what is already here and only names new ones.\n"
        " */\n"
    )
    chunks: List[str] = [header]
    covered: set[str] = set()
    for lib_name, export in EXPORTS:
        try:
            library = load_library(lib_name)
        except Exception:
            continue
        rows = []
        for key in library:
            name = existing.get(key)
            if name and (PREVIEW_DIR / name).exists():
                rows.append(f'  {json.dumps(key, ensure_ascii=False)}: "{URL_BASE}/{name}",')
                covered.add(key)
        chunks.append(f"\nexport const {export}: Record<string, string> = {{\n"
                      + "\n".join(rows) + "\n};\n")
    chunks.append("\nexport const STYLE_PREVIEWS: Record<string, string> = {\n"
                  + "".join(f"  ...{export},\n" for _, export in EXPORTS) + "};\n")
    MAP_FILE.write_text("".join(chunks), encoding="utf-8", newline="\n")


# ---------------------------------------------------------------------------


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--library", default="photo", choices=[n for n, _ in EXPORTS])
    ap.add_argument("--missing", action="store_true", help="render only styles that have no preview")
    ap.add_argument("--only", action="append", default=[], help="substring of a style key; repeatable")
    ap.add_argument("--report", action="store_true", help="count coverage and exit")
    ap.add_argument("--write-map", action="store_true", help="rewrite stylePreviews.ts afterwards")
    args = ap.parse_args()

    existing = read_map()

    if args.report:
        for lib_name, _ in EXPORTS:
            try:
                library = load_library(lib_name)
            except Exception as exc:
                print(f"{lib_name}: не удалось загрузить ({exc})")
                continue
            have = sum(1 for k in library
                       if k in existing and (PREVIEW_DIR / existing[k]).exists())
            print(f"{lib_name:11} всего {len(library):4}  с превью {have:4}  без {len(library) - have:4}")
        orphans = [k for k in existing if not (PREVIEW_DIR / existing[k]).exists()]
        print(f"записей без файла на диске: {len(orphans)}")
        return 0

    library = load_library(args.library)
    targets: List[Tuple[str, str]] = []
    for key, style_text in library.items():
        if args.only and not any(frag.lower() in key.lower() for frag in args.only):
            continue
        if args.missing:
            name = existing.get(key)
            if name and (PREVIEW_DIR / name).exists():
                continue
        targets.append((key, style_text))

    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    if targets:
        print(f"к генерации: {len(targets)}")
    else:
        # Not an error, and not a reason to skip --write-map: rebuilding the map
        # from what is on disk is useful on its own.
        print("генерировать нечего — все превью на месте")
    failures = 0
    for index, (key, style_text) in enumerate(targets, 1):
        name = file_name_for(key, existing)
        prompt = f"{subject_for(key)}, {style_text}"
        started = time.time()
        try:
            data = to_thumbnail(render(prompt))
        except Exception as exc:
            failures += 1
            print(f"[{index}/{len(targets)}] ОШИБКА {key}: {str(exc)[:160]}")
            continue
        (PREVIEW_DIR / name).write_bytes(data)
        if DIST_DIR.exists():
            (DIST_DIR / name).write_bytes(data)
        existing[key] = name
        print(f"[{index}/{len(targets)}] {key}  ->  {name}  "
              f"({len(data) / 1024:.0f} КБ, {time.time() - started:.0f}s)")

    if args.write_map:
        write_map(existing)
        print(f"карта переписана: {MAP_FILE.relative_to(ROOT)}")
        print("не забудь: cd frontend && npm run build")

    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
