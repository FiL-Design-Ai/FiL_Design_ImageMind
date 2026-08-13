"""FiL Model Cycler — automatic diffusion model and checkpoint switcher.

Cycles through installed checkpoints or UNet/diffusion models on every generation run.
Outputs loaded MODEL, CLIP, VAE, and formatted string labels for watermark / text overlays on images.
"""

from __future__ import annotations

import fnmatch
import gc
import logging
import time
from dataclasses import dataclass
from typing import Any

from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_TOOLS
from ..common.localization import t
from ..common.model_folders import ensure_extra_model_paths

logger = logging.getLogger(f"{BRAND}.ModelCycler")

_SOURCE_MODES = ["Diffusion Models", "Checkpoints"]
_CYCLE_MODES = [
    "Sequential (Loop)",
    "Sequential (Stop)",
    "Ping-Pong",
    "Random",
    "Fixed Index",
]
_WEIGHT_DTYPES = ["default", "fp16", "bf16", "fp8_e4m3fn", "fp8_e5m2"]


def _ensure_gguf_support() -> None:
    try:
        import folder_paths

        for category in ("diffusion_models", "unet"):
            if category in folder_paths.folder_names_and_paths:
                exts = folder_paths.folder_names_and_paths[category][1]
                if isinstance(exts, set):
                    exts.add(".gguf")
    except Exception:
        pass


def _get_checkpoint_names() -> list[str]:
    try:
        import folder_paths

        ensure_extra_model_paths()
        # No cache eviction here: the host re-scans a folder whose mtime moved,
        # so emptying it only forced a full recursive walk of every checkpoint
        # directory per panel open.
        names = folder_paths.get_filename_list("checkpoints")
        return list(names) if names else []
    except (ImportError, AttributeError, KeyError):
        return []


def _get_diffusion_model_names() -> list[str]:
    try:
        import folder_paths

        ensure_extra_model_paths()
        _ensure_gguf_support()
        names = folder_paths.get_filename_list("diffusion_models")
        if not names:
            names = folder_paths.get_filename_list("unet")
        return list(names) if names else []
    except (ImportError, AttributeError, KeyError):
        return []


def _filter_models(models: list[str], pattern: str) -> list[str]:
    if not pattern or not pattern.strip():
        return models
    pat = pattern.strip().lower()
    if not any(char in pat for char in ("*", "?", "[")):
        pat = f"*{pat}*"
    return [m for m in models if fnmatch.fnmatch(m.lower(), pat)]


def _clean_model_name(name: str) -> str:
    # Strip path directory prefixes if any
    base = name.replace("\\", "/").split("/")[-1]
    # Strip common model extensions
    for ext in (".safetensors", ".ckpt", ".bin", ".pt", ".pth", ".onnx", ".gguf"):
        if base.lower().endswith(ext):
            return base[:-len(ext)]
    return base


def _unload_all_models() -> None:
    try:
        import comfy.model_management as mm

        if hasattr(mm, "unload_all_models"):
            mm.unload_all_models()
        elif hasattr(mm, "free_memory"):
            mm.free_memory(1e30, mm.get_torch_device(), keep_loaded=[])
    except (ImportError, RuntimeError, AttributeError) as err:
        logger.warning("Model unloading failed: %s", err)


def _clear_vram_cache() -> None:
    try:
        gc.collect()
        import comfy.model_management as mm

        if hasattr(mm, "soft_empty_cache"):
            mm.soft_empty_cache()
    except (ImportError, RuntimeError, AttributeError) as err:
        logger.warning("VRAM cache clearing failed: %s", err)


def _load_checkpoint(ckpt_name: str) -> tuple[Any, Any, Any]:
    import nodes

    loader = nodes.CheckpointLoaderSimple()
    res = loader.load_checkpoint(ckpt_name)
    # res is (model, clip, vae)
    return res[0], res[1], res[2]


def _get_gguf_loader_class() -> type | None:
    import sys

    for mod_name, mod in sys.modules.items():
        if "ComfyUI-GGUF" in mod_name and hasattr(mod, "UnetLoaderGGUF"):
            return getattr(mod, "UnetLoaderGGUF")
    try:
        import importlib

        mod = importlib.import_module("custom_nodes.ComfyUI-GGUF.nodes")
        return getattr(mod, "UnetLoaderGGUF", None)
    except Exception:
        return None


def _load_unet(unet_name: str, weight_dtype: str = "default") -> Any:
    import nodes

    if unet_name.lower().endswith(".gguf"):
        gguf_cls = _get_gguf_loader_class()
        if gguf_cls is not None:
            loader = gguf_cls()
            res = loader.load_unet(unet_name)
            return res[0]

    loader = nodes.UNETLoader()
    res = loader.load_unet(unet_name, weight_dtype)
    # res is (model,)
    return res[0]


@dataclass
class _CycleState:
    """Where one cycler node stands, between prompts."""

    position: int
    """Index the next run starts from."""

    direction: int
    """Ping-Pong's travel: 1 forwards, -1 back."""

    signature: tuple[str, ...]
    """The list being walked. A different list is a different cycle."""

    start_index: int
    """The `index` widget as it read when the cycle began — changing it restarts."""


_CYCLE_STATE: dict[str, _CycleState] = {}
"""Cycle position per node, keyed by the node's own id.

Nothing in a prompt carries the position, so it lives in the process between
runs. It was keyed by `f"{source_mode}_{len(candidates)}"` before, which is not
an identity: two cyclers over checkpoint lists of the same length — the ordinary
shape of an A/B comparison — advanced one shared counter and each saw every
other model. The id comes from `cls.hidden.unique_id`, so a second cycler, a
second workflow tab and a copy-pasted node all count separately.
"""

_UNKEYED = "-"
"""Stands in when no node id is available (a direct call, no executor)."""


class FiLModelCycler(io.ComfyNode):

    @classmethod
    def define_schema(cls) -> io.Schema:
        return io.Schema(
            node_id="FiLModelCycler",
            display_name="🔄 Model Cycler",
            category=CATEGORY_TOOLS,
            description=(
                "🔄 FiL Model Cycler — automatically cycles through diffusion models or checkpoints on each generation. "
                "Supports Checkpoints or Diffusion Models (UNet) with auto-advance, "
                "filter patterns, VRAM memory flushing, and formatted image watermark labels."
            ),
            inputs=[
                io.Combo.Input(
                    "source_mode",
                    options=_SOURCE_MODES,
                    default="Diffusion Models",
                    tooltip=t(
                        "tt_cycler_source_mode",
                        "Source of models: Checkpoints or Diffusion Models (UNet).",
                    ),
                ),
                io.String.Input(
                    "model_list",
                    default="",
                    multiline=True,
                    tooltip=t(
                        "tt_cycler_model_list",
                        "List of model names to cycle through (one per line). Lines starting with # are skipped.",
                    ),
                ),
                io.String.Input(
                    "filter_pattern",
                    default="",
                    tooltip=t(
                        "tt_cycler_filter_pattern",
                        "Wildcard filter pattern (e.g. '*flux*', 'sdxl*') to select matching models.",
                    ),
                ),
                io.Combo.Input(
                    "cycle_mode",
                    options=_CYCLE_MODES,
                    default="Sequential (Loop)",
                    tooltip=t(
                        "tt_cycler_cycle_mode",
                        "Order of iteration: Sequential (Loop), Sequential (Stop), Ping-Pong, Random, or Fixed Index.",
                    ),
                ),
                io.Int.Input(
                    "index",
                    default=0,
                    min=0,
                    max=99999,
                    step=1,
                    tooltip=t(
                        "tt_cycler_index",
                        "Base 0-indexed starting position (auto-advances per generation run when Auto-Advance is ON).",
                    ),
                ),
                io.Boolean.Input(
                    "auto_advance",
                    default=True,
                    label_on="Auto Next",
                    label_off="Fixed",
                    tooltip=t(
                        "tt_cycler_auto_advance",
                        "ON: Automatically advances to the next model in the list after each generation run.",
                    ),
                ),
                io.Boolean.Input(
                    "unload_previous",
                    default=True,
                    label_on="Unload GPU",
                    label_off="Keep Loaded",
                    tooltip=t(
                        "tt_cycler_unload_previous",
                        "Unload previous model from GPU memory before loading next model to prevent OOM errors.",
                    ),
                ),
                io.Boolean.Input(
                    "free_vram",
                    default=True,
                    label_on="Flush VRAM",
                    label_off="Keep Cache",
                    tooltip=t(
                        "tt_cycler_free_vram",
                        "Flush PyTorch CUDA memory cache between model switches.",
                    ),
                ),
                io.Boolean.Input(
                    "skip_on_error",
                    default=True,
                    label_on="Skip Bad",
                    label_off="Crash",
                    tooltip=t(
                        "tt_cycler_skip_on_error",
                        "If a model fails to load, log warning and skip to next model instead of crashing queue.",
                    ),
                ),
                io.Combo.Input(
                    "weight_dtype",
                    options=_WEIGHT_DTYPES,
                    default="default",
                    optional=True,
                    tooltip=t(
                        "tt_cycler_weight_dtype",
                        "Weight precision for UNet/Diffusion models (default, fp16, bf16, fp8_e4m3fn).",
                    ),
                ),
                io.Clip.Input(
                    "clip_in",
                    optional=True,
                    tooltip=t(
                        "tt_cycler_clip_in",
                        "Optional fallback CLIP for UNet models or signal passthrough.",
                    ),
                ),
                io.Vae.Input(
                    "vae_in",
                    optional=True,
                    tooltip=t(
                        "tt_cycler_vae_in",
                        "Optional fallback VAE for UNet models or signal passthrough.",
                    ),
                ),
            ],
            outputs=[
                io.Model.Output(
                    display_name="MODEL",
                    tooltip="Active loaded or selected diffusion MODEL.",
                ),
                io.Clip.Output(
                    display_name="CLIP",
                    tooltip="Active CLIP (from checkpoint or fallback clip_in).",
                ),
                io.Vae.Output(
                    display_name="VAE",
                    tooltip="Active VAE (from checkpoint or fallback vae_in).",
                ),
                io.String.Output(
                    display_name="MODEL_NAME",
                    tooltip="Full filename of active model (e.g. flux1-dev.safetensors).",
                ),
                io.String.Output(
                    display_name="CLEAN_NAME",
                    tooltip="Model name without directory or extension (e.g. flux1-dev).",
                ),
            ],
            # The cycle position is kept per node, and this is the only thing
            # that says which node is asking. A hidden value reaches a V3 node
            # through `cls.hidden` alone — as a parameter it would stay None.
            hidden=[io.Hidden.unique_id],
            search_aliases=[
                "model cycler",
                "checkpoint cycler",
                "switch model",
                "test models",
                "compare models",
                "auto switch",
                "benchmark",
            ],
        )

    @classmethod
    def fingerprint_inputs(
        cls,
        source_mode: str = "Checkpoints",
        index: int = 0,
        auto_advance: bool = True,
        **_kwargs: Any,
    ) -> float | str:
        if auto_advance:
            # Force ComfyUI re-evaluation on every prompt queue submission
            return f"{source_mode}_{index}_{time.time()}"
        return f"{source_mode}_{index}"

    @classmethod
    def _state_key(cls) -> str:
        """This node's id, as the executor handed it over.

        `cls.hidden` exists only on the clone the executor prepares; a test or
        a caller that reaches for `execute` directly has no such attribute, and
        every one of them shares `_UNKEYED`.
        """
        try:
            node_id = cls.hidden.unique_id
        except AttributeError:
            return _UNKEYED
        return str(node_id) if node_id is not None else _UNKEYED

    @classmethod
    def _blocked(cls, message: str) -> io.NodeOutput:
        """Stop the run on every output, not just the first.

        Putting an `ExecutionBlocker` into slot 0 by hand blocks whoever is
        wired to MODEL and nobody else: CLIP, VAE and the two names carried on
        as `None` and `""`, so a CLIP Text Encode downstream ran on nothing and
        died with an error naming neither this node nor the reason. The host
        broadcasts a blocker to all outputs when `block_execution` is set — but
        only for a `NodeOutput` that also carries positional values, since it
        skips any output whose `result` is `None` (`execution.py`, the
        `elif r.result is not None` branch). Hence both, together.
        """
        return io.NodeOutput(None, None, None, "", "", block_execution=message)

    @classmethod
    def _cycle_state(
        cls, node_key: str, signature: tuple[str, ...], index: int
    ) -> _CycleState:
        """This node's place in the cycle, restarted when the cycle changed.

        Editing the list or typing a new starting `index` means the user is
        asking for a different walk; carrying the old position into it lands on
        an unrelated model and looks like the node ignoring the change.
        """
        state = _CYCLE_STATE.get(node_key)
        if (
            state is None
            or state.signature != signature
            or state.start_index != index
        ):
            state = _CycleState(
                position=index,
                direction=1,
                signature=signature,
                start_index=index,
            )
            _CYCLE_STATE[node_key] = state
        return state

    @staticmethod
    def _advance(
        state: _CycleState, cycle_mode: str, current_idx: int, total_models: int
    ) -> None:
        """Move the node on to where the next run starts."""
        if cycle_mode == "Ping-Pong":
            next_idx = current_idx + state.direction
            if next_idx >= total_models:
                next_idx = total_models - 2 if total_models > 1 else 0
                state.direction = -1
            elif next_idx < 0:
                next_idx = 1 if total_models > 1 else 0
                state.direction = 1
            state.position = max(0, next_idx)
        elif cycle_mode == "Sequential (Stop)":
            # Past the end on purpose — that is what stops the next run.
            state.position = current_idx + 1
        elif cycle_mode in ("Sequential (Loop)", "Random"):
            state.position = (current_idx + 1) % total_models

    @classmethod
    def execute(
        cls,
        source_mode: str = "Checkpoints",
        model_list: str = "",
        filter_pattern: str = "",
        cycle_mode: str = "Sequential (Loop)",
        index: int = 0,
        auto_advance: bool = True,
        unload_previous: bool = True,
        free_vram: bool = True,
        skip_on_error: bool = True,
        weight_dtype: str = "default",
        clip_in: Any = None,
        vae_in: Any = None,
        **_kwargs: Any,
    ) -> io.NodeOutput:
        # Check multiline user list first
        raw_lines = [
            line.strip()
            for line in (model_list or "").splitlines()
            if line.strip() and not line.strip().startswith("#")
        ]

        if raw_lines:
            candidates = raw_lines
        else:
            # Auto-scan folder if list is empty
            if source_mode == "Checkpoints":
                candidates = _get_checkpoint_names()
            else:
                candidates = _get_diffusion_model_names()

        # Apply wildcard filter if pattern is provided
        if filter_pattern and filter_pattern.strip():
            candidates = _filter_models(candidates, filter_pattern)

        total_models = len(candidates)
        if total_models == 0:
            return cls._blocked(
                t(
                    "err_cycler_no_models",
                    f"🔄 Model Cycler: No models found for mode '{source_mode}' with filter '{filter_pattern}'.",
                )
            )

        # Resolve model index from this node's own place in the cycle
        node_key = cls._state_key()
        state = cls._cycle_state(node_key, tuple(candidates), index)

        if cycle_mode == "Fixed Index":
            current_idx = index % total_models
        elif cycle_mode == "Random":
            import random

            current_idx = random.randint(0, total_models - 1)
        elif cycle_mode == "Sequential (Stop)":
            if state.position >= total_models:
                return cls._blocked(
                    t(
                        "err_cycler_finished",
                        f"🔄 Model Cycler: Reached end of model list ({total_models}/{total_models}). Cycle stopped.",
                    )
                )
            current_idx = state.position
        else:
            current_idx = state.position % total_models

        # Advance state for next execution run if auto_advance is True
        if auto_advance:
            cls._advance(state, cycle_mode, current_idx, total_models)

        # Free VRAM / Unload previous models if requested
        if unload_previous:
            _unload_all_models()
        if free_vram:
            _clear_vram_cache()

        # Load selected model with retry on error if skip_on_error is True
        attempts = 0
        max_attempts = total_models if skip_on_error else 1

        selected_model: Any = None
        selected_clip: Any = clip_in
        selected_vae: Any = vae_in
        selected_name = ""

        while attempts < max_attempts:
            target_name = candidates[current_idx]
            selected_name = target_name

            try:
                if source_mode == "Checkpoints":
                    selected_model, selected_clip, selected_vae = (
                        _load_checkpoint(target_name)
                    )
                else:  # Diffusion Models
                    selected_model = _load_unet(target_name, weight_dtype)

                break  # Successfully loaded!
            except (RuntimeError, ValueError, OSError, AttributeError) as err:
                logger.warning(
                    "Model Cycler failed to load '%s': %s", target_name, err
                )
                if not skip_on_error:
                    raise
                attempts += 1
                current_idx = (current_idx + 1) % total_models
                if auto_advance:
                    state.position = (current_idx + 1) % total_models

        if selected_model is None:
            return cls._blocked(
                t(
                    "err_cycler_load_failed",
                    f"🔄 Model Cycler: Failed to load any model from list (attempts: {attempts}).",
                )
            )

        clean_name = _clean_model_name(selected_name)

        return io.NodeOutput(
            selected_model,
            selected_clip,
            selected_vae,
            selected_name,
            clean_name,
            # Where the cycle actually stands, for the panel to show. The
            # `index` widget cannot say it: it is the starting point the user
            # typed, and the position moves on the server between runs.
            # `execution.py` sends an `executed` message for any node that
            # returns a `ui` payload — being an output node is not required.
            ui={
                "text": [f"{current_idx + 1}/{total_models}"],
                "fil_cycler": [
                    {
                        "position": current_idx + 1,
                        "total": total_models,
                        "model_name": selected_name,
                        "clean_name": clean_name,
                    }
                ],
            },
        )
