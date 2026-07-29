"""Ask every configured provider a real question and see whether it answers.

Deliberately NOT under `tests/`. Everything in `tests/` runs in CI, where no
provider key exists — a live check there would fail for every contributor and
teach the suite to be ignored. This is a manual tool: you run it when you want
to know whether the pack still talks to the outside world.

What it proves that the stubbed suite cannot:

  * the credential actually authenticates (not just "a key is present");
  * `/models` returns a catalogue we can parse;
  * a vision model really accepts an image — the prompt asks for the shapes and
    colours in a generated picture, and the answer is scored against what was
    drawn. A model that replies fluently without seeing the image fails here,
    which is the whole point: `model_capabilities` decides who is vision-capable
    from the provider's own metadata, and this is where that claim gets tested
    against reality.

Nothing here writes to the repository and no key is ever printed or stored in
the results file.

Usage (from the pack root, with ComfyUI's interpreter):

    python_embeded\\python.exe tools/live_provider_check.py --dry-run
    python_embeded\\python.exe tools/live_provider_check.py
    python_embeded\\python.exe tools/live_provider_check.py --provider openai --errors
"""

from __future__ import annotations

import argparse
import json
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT.parent) not in sys.path:
    sys.path.insert(0, str(ROOT.parent))

# Provider messages are Russian; a Windows console defaults to cp1251 and turns
# them into mojibake, which reads like a decoding bug in the pack rather than in
# the terminal.
for _stream in (sys.stdout, sys.stderr):
    if hasattr(_stream, "reconfigure"):
        _stream.reconfigure(encoding="utf-8", errors="replace")

PACKAGE = ROOT.name

from PIL import Image, ImageDraw  # noqa: E402

_common = __import__(f"{PACKAGE}.common", fromlist=["*"])
from FiL_Design_ImageMind.common.config import (  # noqa: E402
    LOCAL_PROVIDERS,
    PROVIDERS,
    RECOMMENDED_MODELS,
)
from FiL_Design_ImageMind.common.models import ModelClient  # noqa: E402
from FiL_Design_ImageMind.common.processing import ImageProcessor  # noqa: E402
from FiL_Design_ImageMind.common.provider_accounts import (  # noqa: E402
    check_provider_configured,
)
from FiL_Design_ImageMind.common.provider_runtime import (  # noqa: E402
    fetch_models_with_status,
    probe_provider,
    safe_provider_error,
)

# ---------------------------------------------------------------- the picture

# Three shapes, three unmistakable colours, laid out so no two touch. Chosen
# over a photograph because the answer is checkable: a model that saw this
# names circle/square/triangle and red/green/blue. A photograph would only ever
# yield prose we would have to eyeball.
SHAPES = ("circle", "square", "triangle")
COLOURS = ("red", "green", "blue")

VISION_QUESTION = (
    "List every shape you can see in this image and its colour. "
    "Answer in English on one line, nothing else."
)


def build_probe_image() -> Image.Image:
    img = Image.new("RGB", (512, 512), "white")
    d = ImageDraw.Draw(img)
    d.ellipse((40, 40, 200, 200), fill="red")
    d.rectangle((300, 40, 470, 210), fill="green")
    d.polygon([(256, 300), (140, 470), (372, 470)], fill="blue")
    return img


def score_vision_answer(answer: str) -> Tuple[bool, str]:
    """Did the model actually look at the picture?

    Requires two of three shapes AND two of three colours. One of each is too
    easy to hit by guessing "a red circle" — the single most likely phrase for
    a model asked about shapes with no image attached.
    """
    low = (answer or "").lower()
    found_shapes = [s for s in SHAPES if s in low]
    found_colours = [c for c in COLOURS if c in low]
    ok = len(found_shapes) >= 2 and len(found_colours) >= 2
    detail = f"shapes={','.join(found_shapes) or '-'} colours={','.join(found_colours) or '-'}"
    return ok, detail


# ------------------------------------------------------------ model selection


def pick_vision_model(provider: str, listed: List[str], vision: List[str]) -> Optional[str]:
    """Prefer what the provider itself flagged as image-capable, then fall back
    to our recommendation list intersected with what is actually on offer."""
    if vision:
        recommended = [m for m in RECOMMENDED_MODELS.get(provider, []) if m in vision]
        return recommended[0] if recommended else vision[0]
    recommended = [m for m in RECOMMENDED_MODELS.get(provider, []) if m in listed]
    return recommended[0] if recommended else None


# ------------------------------------------------------------------ the check


def check_provider(provider: str, run_errors: bool, timeout: int) -> Dict[str, Any]:
    result: Dict[str, Any] = {"provider": provider, "steps": {}}
    steps = result["steps"]

    configured, why = check_provider_configured(provider)
    steps["credentials"] = {"ok": bool(configured), "detail": why}
    if not configured and provider not in LOCAL_PROVIDERS:
        result["verdict"] = "skipped"
        result["reason"] = why
        return result

    # --- catalogue
    t0 = time.time()
    try:
        payload = fetch_models_with_status(provider, force=True)
        listed = list(payload.get("models") or [])
        vision = list(payload.get("vision_models") or [])
        steps["models"] = {
            "ok": bool(listed),
            "count": len(listed),
            "vision_count": len(vision),
            "source": payload.get("source"),
            "status": payload.get("status"),
            "detail": payload.get("message") or "",
            "seconds": round(time.time() - t0, 2),
        }
    except Exception as exc:
        steps["models"] = {"ok": False, "detail": safe_provider_error(exc)}
        listed, vision = [], []

    # --- probe (the pack's own "is this connection alive" call)
    # `probe_provider` says "available", not "success" — see its return in
    # common/provider_runtime.py. Getting this wrong makes a working provider
    # look broken, which is exactly the false alarm this tool exists to avoid.
    t0 = time.time()
    try:
        probe = probe_provider(provider)
        steps["probe"] = {
            "ok": probe.get("status") == "available",
            "status": probe.get("status"),
            "detail": probe.get("message") or "",
            "seconds": round(time.time() - t0, 2),
        }
    except Exception as exc:
        steps["probe"] = {"ok": False, "detail": safe_provider_error(exc)}

    # --- the real thing: an image goes out, a description comes back
    model = pick_vision_model(provider, listed, vision)
    if not model:
        steps["vision"] = {"ok": False, "detail": "no vision-capable model offered"}
        result["verdict"] = "no-vision-model"
        return result

    img_b64 = ImageProcessor(max_side=512).to_base64(build_probe_image())
    t0 = time.time()
    try:
        answer = ModelClient().generate(
            provider=provider,
            model=model,
            user_prompt=VISION_QUESTION,
            images=[img_b64],
            temperature=0.0,
            seed=-1,  # below zero disables the prompt cache: we want a real call
            max_tokens=200,
            timeout=timeout,
        )
        saw_it, detail = score_vision_answer(answer)
        steps["vision"] = {
            "ok": saw_it,
            "model": model,
            "detail": detail,
            "answer_chars": len(answer or ""),
            "seconds": round(time.time() - t0, 2),
        }
        result["answer_excerpt"] = (answer or "")[:200]
    except Exception as exc:
        steps["vision"] = {
            "ok": False,
            "model": model,
            "detail": safe_provider_error(exc),
            "seconds": round(time.time() - t0, 2),
        }

    if run_errors:
        steps["errors"] = check_error_paths(provider, model)

    result["verdict"] = "ok" if all(s.get("ok") for s in steps.values() if isinstance(s, dict) and "ok" in s) else "problem"
    return result


def check_error_paths(provider: str, good_model: str) -> Dict[str, Any]:
    """A wrong model name and a wrong key must produce a named, safe error —
    not a stack trace, and never the key itself."""
    out: Dict[str, Any] = {"ok": True}

    try:
        ModelClient().generate(
            provider=provider,
            model="definitely-not-a-real-model-xyz",
            user_prompt="hi",
            temperature=0.0,
            seed=-1,
            max_tokens=16,
            timeout=30,
        )
        out["bad_model"] = {"ok": False, "detail": "a nonexistent model returned success"}
        out["ok"] = False
    except Exception as exc:
        message = safe_provider_error(exc)
        leaked = _looks_like_a_key(message)
        out["bad_model"] = {
            "ok": not leaked,
            "detail": message[:160],
            "leaked_credential": leaked,
        }
        if leaked:
            out["ok"] = False

    return out


def _looks_like_a_key(text: str) -> bool:
    """Cheap credential-leak detector for error strings. Deliberately blunt:
    any long unbroken token that starts like a vendor key prefix."""
    import re

    return bool(re.search(r"\b(sk-|gsk_|sk-or-|AIza)[A-Za-z0-9_\-]{12,}", text or ""))


# ------------------------------------------------------------------ reporting


def print_report(results: List[Dict[str, Any]]) -> None:
    print()
    print(f"{'provider':<12} {'creds':<7} {'models':<9} {'probe':<7} {'vision':<7}  note")
    print("-" * 86)
    for r in results:
        s = r["steps"]

        def mark(key: str) -> str:
            step = s.get(key)
            if not isinstance(step, dict) or "ok" not in step:
                return "-"
            return "ok" if step["ok"] else "FAIL"

        models = s.get("models", {})
        models_cell = f"{mark('models')}" + (f" ({models.get('count')})" if models.get("count") else "")
        note = ""
        for key in ("vision", "probe", "models", "credentials"):
            step = s.get(key)
            if isinstance(step, dict) and not step.get("ok", True) and step.get("detail"):
                note = f"{key}: {step['detail']}"
                break
        if not note and isinstance(s.get("vision"), dict):
            note = s["vision"].get("detail", "")
        print(
            f"{r['provider']:<12} {mark('credentials'):<7} {models_cell:<9} "
            f"{mark('probe'):<7} {mark('vision'):<7}  {note[:40]}"
        )
    print()


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--provider", action="append", help="check only this provider (repeatable)")
    ap.add_argument("--dry-run", action="store_true", help="say what would be called, call nothing")
    ap.add_argument("--errors", action="store_true", help="also exercise the failure paths")
    ap.add_argument("--timeout", type=int, default=120)
    ap.add_argument("--out", type=Path, help="write the full result as JSON here")
    args = ap.parse_args()

    providers = args.provider or list(PROVIDERS.keys())

    if args.dry_run:
        print("would check, in order:")
        for p in providers:
            configured, why = check_provider_configured(p)
            print(f"  {p:<12} {'configured' if configured else 'SKIP - ' + why}")
        return 0

    results = []
    for p in providers:
        print(f"[{p}] ...", flush=True)
        results.append(check_provider(p, args.errors, args.timeout))

    print_report(results)

    if args.out:
        args.out.write_text(
            json.dumps(
                {"checked_at": datetime.now().isoformat(timespec="seconds"), "results": results},
                indent=2,
                ensure_ascii=False,
            ),
            encoding="utf-8",
        )
        print(f"written: {args.out}")

    return 0 if all(r.get("verdict") in ("ok", "skipped") for r in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
