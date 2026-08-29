"""FiL Show Any — universal data inspector & pass-through monitor (V3 API).

Accepts any data type (STRING, IMAGE, LATENT, MODEL, JSON, INT, FLOAT, etc.),
displays a human-readable/formatted view with live word/char counters and
instant Copy button, and passes the original object through downstream unchanged.
"""

from __future__ import annotations

import json
from typing import Any

from comfy_api.latest import io
import torch

from ..common.brand import CATEGORY_TOOLS
from ..common.localization import t


def inspect_data(source: Any, fallback_text: str = "") -> tuple[Any, str, str, int, int]:
    """Inspect any ComfyUI object, returning (passthrough_obj, formatted_text, data_type, words, chars)."""
    if source is None:
        text = fallback_text or ""
        words = len(text.split()) if text.strip() else 0
        return text, text, "STANDALONE", words, len(text)

    # 1. Plain String
    if isinstance(source, str):
        words = len(source.split()) if source.strip() else 0
        return source, source, "STRING", words, len(source)

    # 2. Primitives: Numbers & Booleans
    if isinstance(source, bool):
        text = str(source)
        return source, text, "BOOLEAN", 1, len(text)
    if isinstance(source, int):
        text = str(source)
        return source, text, "INT", 1, len(text)
    if isinstance(source, float):
        text = f"{source:.6f}".rstrip("0").rstrip(".") if "." in f"{source:.6f}" else str(source)
        return source, text, "FLOAT", 1, len(text)

    # 3. Latent Dictionary
    if isinstance(source, dict) and "samples" in source and torch.is_tensor(source["samples"]):
        samples = source["samples"]
        shape = list(samples.shape)
        if len(shape) == 4:
            b, c, h, w = shape
            has_mask = "noise_mask" in source
            text = (
                f"🌀 LATENT [B={b}, C={c}, H={h}, W={w}]\n"
                f"Pixel Equivalent: {w * 8} × {h * 8} px (8x)\n"
                f"Channels: {c} | Noise Mask: {'Present' if has_mask else 'None'}\n"
                f"Dtype: {samples.dtype} | Device: {samples.device}"
            )
        else:
            text = f"🌀 LATENT shape={shape} dtype={samples.dtype} device={samples.device}"
        words = len(text.split())
        return source, text, "LATENT", words, len(text)

    # 4. Torch Tensor (Image, Mask, Weights)
    if torch.is_tensor(source):
        shape = list(source.shape)
        if len(shape) == 4:
            b, h, w, c = shape
            min_v = float(source.min().item()) if source.numel() > 0 else 0.0
            max_v = float(source.max().item()) if source.numel() > 0 else 0.0
            c_name = "RGB" if c == 3 else "RGBA" if c == 4 else "Grayscale" if c == 1 else f"{c}-channel"
            text = (
                f"🖼️ IMAGE TENSOR [B={b}, H={h}, W={w}, C={c}]\n"
                f"Resolution: {w} × {h} px ({c_name})\n"
                f"Value Range: [{min_v:.3f} .. {max_v:.3f}]\n"
                f"Dtype: {source.dtype} | Device: {source.device}"
            )
            data_type = "IMAGE"
        elif len(shape) == 3:
            b, h, w = shape
            text = f"🎭 MASK TENSOR [B={b}, H={h}, W={w}]\nResolution: {w} × {h} px\nDtype: {source.dtype} | Device: {source.device}"
            data_type = "MASK"
        else:
            text = f"📊 TENSOR shape={shape}\nDtype: {source.dtype} | Device: {source.device}"
            data_type = "TENSOR"
        words = len(text.split())
        return source, text, data_type, words, len(text)

    # 5. Dict / List / JSON
    if isinstance(source, (dict, list, tuple)):
        # Check for conditioning
        if isinstance(source, list) and len(source) > 0 and isinstance(source[0], (list, tuple)) and len(source[0]) >= 2:
            first = source[0]
            if torch.is_tensor(first[0]):
                text = (
                    f"🎯 CONDITIONING [Chunks: {len(source)}]\n"
                    f"Vector Shape: {list(first[0].shape)}\n"
                    f"Keys: {list(first[1].keys()) if isinstance(first[1], dict) else 'None'}"
                )
                return source, text, "CONDITIONING", len(text.split()), len(text)

        try:
            text = json.dumps(source, indent=2, ensure_ascii=False, default=str)
            item_count = len(source)
            return source, text, "JSON", item_count, len(text)
        except Exception:
            text = str(source)
            return source, text, "JSON", len(source), len(text)

    # 6. ComfyUI Objects (Model, CLIP, VAE, etc.)
    cls_name = source.__class__.__name__
    mod_name = source.__class__.__module__
    text = f"📦 {cls_name} ({mod_name})\n{repr(source)[:500]}"
    words = len(text.split())
    return source, text, cls_name.upper(), words, len(text)


class FiLShowAny(io.ComfyNode):
    """Universal data inspector & pass-through monitor."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLShowAny",
            display_name="👁️ Show Any",
            category=CATEGORY_TOOLS,
            description=(
                "👁️ Show Any — universal data inspector & pass-through monitor. "
                "Accepts any data signal (Text, Image, Latent, JSON, Model, Numbers), "
                "displays a formatted view with live word/char counters and 1-click Copy, "
                "and passes the original object through downstream unchanged."
            ),
            inputs=[
                io.AnyType.Input(
                    "source",
                    optional=True,
                    tooltip=t("tt_show_any_source", "Any incoming data signal to inspect and pass through."),
                ),
                io.String.Input(
                    "text",
                    default="",
                    multiline=True,
                    optional=True,
                    tooltip=t("tt_show_any_text", "Manual text fallback used when no source link is connected."),
                ),
            ],
            outputs=[
                io.AnyType.Output(
                    display_name="*",
                    tooltip="The incoming source passed through untouched.",
                ),
            ],
            search_aliases=[
                "show any",
                "show text",
                "display",
                "inspect",
                "monitor",
                "view",
                "print",
                "debug",
                "passthrough",
            ],
        )

    @classmethod
    def execute(cls, source: Any = None, text: str = "", **_kwargs) -> io.NodeOutput:
        passthrough_obj, formatted_text, data_type, words, chars = inspect_data(source, text)
        ui_data = {
            "text": [formatted_text],
            "data_type": [data_type],
            "words": [words],
            "chars": [chars],
        }
        return io.NodeOutput(
            passthrough_obj,
            ui=ui_data,
        )
