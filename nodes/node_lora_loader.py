"""FiL LoRA Loader — dynamic LoRA stack loader with per-item weight sliders & toggles.

Allows adding, reordering, enabling/disabling, and applying dynamic stacks of LoRA
adapters onto input MODEL and CLIP signals with individual strength controls,
sidecar trigger-word aggregation, and formatted watermark text labels.
"""

from __future__ import annotations

import fnmatch
import json
import logging
import os
from dataclasses import dataclass
from typing import Any

from comfy_api.latest import io
from comfy_execution.graph_utils import ExecutionBlocker

from ..common.brand import BRAND, CATEGORY_TOOLS
from ..common.localization import t

logger = logging.getLogger(f"{BRAND}.LoraLoader")


def _get_lora_names() -> list[str]:
    """Return list of installed LoRA filenames."""
    try:
        import folder_paths

        if isinstance(getattr(folder_paths, "filename_list_cache", None), dict):
            folder_paths.filename_list_cache.pop("loras", None)

        names = folder_paths.get_filename_list("loras")
        return list(names) if names else []
    except (ImportError, AttributeError, KeyError):
        return []


def _clean_lora_name(name: str) -> str:
    """Return filename without leading directory path or model extension."""
    if not name:
        return ""
    base = name.replace("\\", "/").split("/")[-1]
    for ext in (".safetensors", ".ckpt", ".bin", ".pt", ".pth", ".onnx", ".gguf"):
        if base.lower().endswith(ext):
            return base[: -len(ext)]
    return base


def _filter_loras(loras: list[str], pattern: str) -> list[str]:
    """Wildcard-filter *loras* by *pattern*; substring match when no glob chars."""
    if not pattern or not pattern.strip():
        return loras
    pat = pattern.strip().lower()
    if not any(c in pat for c in ("*", "?", "[")):
        pat = f"*{pat}*"
    return [m for m in loras if fnmatch.fnmatch(m.lower(), pat)]


@dataclass
class _LoraItemSpec:
    filename: str
    enabled: bool
    strength_model: float
    strength_clip: float


def _parse_lora_line(
    line: str,
    default_sm: float,
    default_sc: float,
) -> _LoraItemSpec | None:
    """Parse one line from lora_list.

    Formats supported:
    - 'my_lora.safetensors'
    - 'my_lora.safetensors:0.8:0.5'
    - '# my_lora.safetensors:0.8:0.5' (disabled)
    - '<lora:my_lora.safetensors:0.8:0.5>'
    """
    raw = line.strip()
    if not raw:
        return None

    enabled = True
    if raw.startswith("#"):
        enabled = False
        raw = raw[1:].strip()

    if not raw:
        return None

    if raw.startswith("<lora:") and raw.endswith(">"):
        raw = raw[6:-1].strip()

    parts = [p.strip() for p in raw.split(":") if p.strip()]
    if not parts:
        return None

    filename = parts[0]
    sm = default_sm
    sc = default_sc

    if len(parts) >= 2:
        try:
            sm = float(parts[1])
            sc = sm
        except ValueError:
            pass

    if len(parts) >= 3:
        try:
            sc = float(parts[2])
        except ValueError:
            pass

    return _LoraItemSpec(
        filename=filename,
        enabled=enabled,
        strength_model=sm,
        strength_clip=sc,
    )


def _extract_trigger_words(lora_filename: str) -> str:
    """Read trigger words from a sidecar .txt, .civitai.info, or .json file."""
    if not lora_filename:
        return ""

    try:
        import folder_paths

        full_path = folder_paths.get_full_path("loras", lora_filename)
        if not full_path or not os.path.isfile(full_path):
            return ""

        base = os.path.splitext(full_path)[0]

        # 1. Plain text sidecar
        txt_path = base + ".txt"
        if os.path.isfile(txt_path):
            try:
                content = open(txt_path, encoding="utf-8", errors="ignore").read().strip()
                if content:
                    return content
            except OSError:
                pass

        # 2. Civitai / JSON metadata
        for info_ext in (".civitai.info", ".json"):
            info_path = base + info_ext
            if not os.path.isfile(info_path):
                continue
            try:
                with open(info_path, encoding="utf-8", errors="ignore") as f:
                    data = json.load(f)
                if not isinstance(data, dict):
                    continue
                trained = data.get("trainedWords")
                if isinstance(trained, list) and trained:
                    return ", ".join(str(w) for w in trained if w)
                tags = data.get("tags")
                if isinstance(tags, list) and tags:
                    return ", ".join(str(tag) for tag in tags if tag)
            except (OSError, json.JSONDecodeError):
                pass
    except Exception as err:
        logger.debug("Trigger-word extraction failed for %s: %s", lora_filename, err)

    return ""


def _apply_single_lora(
    model: Any,
    clip: Any,
    lora_name: str,
    strength_model: float,
    strength_clip: float,
) -> tuple[Any, Any]:
    """Apply single LoRA via ComfyUI built-in LoraLoader."""
    if not lora_name:
        return model, clip

    import nodes

    loader = nodes.LoraLoader()
    result = loader.load_lora(model, clip, lora_name, strength_model, strength_clip)
    return result[0], result[1]


class FiLLoraLoader(io.ComfyNode):
    """🧬 LoRA Loader — dynamic LoRA stack loader."""

    @classmethod
    def define_schema(cls) -> io.Schema:
        return io.Schema(
            node_id="FiLLoraLoader",
            display_name="🧬 LoRA Loader",
            category=CATEGORY_TOOLS,
            description=(
                "🧬 FiL LoRA Loader — dynamic stack loader. Combine multiple LoRA adapters "
                "with per-item weight sliders, toggles, sidecar trigger-word aggregation, "
                "and formatted watermark text labels."
            ),
            inputs=[
                io.Model.Input(
                    "model",
                    optional=True,
                    tooltip=t("tt_lora_loader_model", "Input diffusion MODEL signal."),
                ),
                io.Clip.Input(
                    "clip",
                    optional=True,
                    tooltip=t("tt_lora_loader_clip", "Input CLIP encoder signal."),
                ),
                io.String.Input(
                    "lora_list",
                    default="",
                    multiline=True,
                    tooltip=t(
                        "tt_lora_loader_lora_list",
                        "Dynamic stack list of LoRAs (one per line). Format: 'name.safetensors:0.8:0.5'.",
                    ),
                ),
                io.String.Input(
                    "filter_pattern",
                    default="",
                    tooltip=t(
                        "tt_lora_loader_filter_pattern",
                        "Wildcard filter pattern (e.g. '*cyberpunk*') to filter auto-populated list.",
                    ),
                ),
                io.Float.Input(
                    "strength_model",
                    default=1.0,
                    min=-10.0,
                    max=10.0,
                    step=0.05,
                    tooltip=t("tt_lora_loader_strength_model", "Default MODEL strength weight."),
                ),
                io.Float.Input(
                    "strength_clip",
                    default=1.0,
                    min=-10.0,
                    max=10.0,
                    step=0.05,
                    tooltip=t("tt_lora_loader_strength_clip", "Default CLIP strength weight."),
                ),
                io.Boolean.Input(
                    "skip_on_error",
                    default=True,
                    label_on="Skip Bad",
                    label_off="Crash",
                    tooltip=t("tt_lora_loader_skip_on_error", "Log warning and skip bad files."),
                ),
            ],
            outputs=[
                io.Model.Output(
                    display_name="MODEL",
                    tooltip="MODEL signal with all active stacked LoRAs applied.",
                ),
                io.Clip.Output(
                    display_name="CLIP",
                    tooltip="CLIP signal with all active stacked LoRAs applied.",
                ),
                io.String.Output(
                    display_name="TRIGGER_WORDS",
                    tooltip="Aggregated trigger words from all active LoRA adapters.",
                ),
                io.String.Output(
                    display_name="LABEL",
                    tooltip="Formatted watermark label summarizing applied LoRA stack.",
                ),
            ],
            search_aliases=[
                "lora loader",
                "lora stack",
                "multi lora",
                "combine loras",
                "lora manager",
            ],
        )

    @classmethod
    def execute(
        cls,
        model: Any = None,
        clip: Any = None,
        lora_list: str = "",
        filter_pattern: str = "",
        strength_model: float = 1.0,
        strength_clip: float = 1.0,
        skip_on_error: bool = True,
        **_kwargs: Any,
    ) -> io.NodeOutput:
        raw_lines = [line.strip() for line in (lora_list or "").splitlines() if line.strip()]

        specs: list[_LoraItemSpec] = []
        for line in raw_lines:
            spec = _parse_lora_line(line, strength_model, strength_clip)
            if spec:
                specs.append(spec)

        if filter_pattern and filter_pattern.strip():
            matched_names = set(_filter_loras([s.filename for s in specs], filter_pattern))
            specs = [s for s in specs if s.filename in matched_names]

        current_model = model
        current_clip = clip
        applied_summary: list[str] = []
        all_trigger_words: list[str] = []

        for spec in specs:
            if not spec.enabled or not spec.filename:
                continue

            clean_name = _clean_lora_name(spec.filename)
            if not clean_name:
                continue

            try:
                if current_model is not None or current_clip is not None:
                    current_model, current_clip = _apply_single_lora(
                        current_model,
                        current_clip,
                        spec.filename,
                        spec.strength_model,
                        spec.strength_clip,
                    )

                applied_summary.append(
                    f"{clean_name} (M:{spec.strength_model:.2f}, C:{spec.strength_clip:.2f})"
                )

                triggers = _extract_trigger_words(spec.filename)
                if triggers:
                    all_trigger_words.append(triggers)

            except (RuntimeError, ValueError, OSError, AttributeError) as err:
                logger.warning("LoRA Loader failed on '%s': %s", spec.filename, err)
                if not skip_on_error:
                    raise

        combined_triggers = ", ".join(all_trigger_words) if all_trigger_words else ""

        if applied_summary:
            label = f"LoRA Stack [{len(applied_summary)}]: " + ", ".join(applied_summary)
        else:
            label = "LoRA Stack: Bypass (None)"

        return io.NodeOutput(
            current_model,
            current_clip,
            combined_triggers,
            label,
        )
