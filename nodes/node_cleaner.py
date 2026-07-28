import gc
import time
from typing import Any

from comfy_api.latest import io as _io

from ..common.brand import CATEGORY_ROOT
from ..common.localization import t as _t




class FiLNeuroCleaner(_io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return _io.Schema(
            node_id="FiLNeuroCleaner",
            display_name="🧹 Cleaner",
            category=f"{CATEGORY_ROOT}/Tools",
            description="🧹 FiL Neuro Cleaner — flushes GPU VRAM and offloads loaded models to prevent Out-Of-Memory errors.",
            inputs=[
                # The switch labels go through _t() unlike everywhere else in the
                # pack: this node's panel used to be a localized Vue component,
                # and dropping to native widgets must not quietly turn it
                # English-only.
                _io.Boolean.Input(
                    "clean_vram", default=True,
                    label_on=_t("nc_clean_vram_on", "Flush cache"),
                    label_off=_t("nc_clean_vram_off", "Keep cache"),
                    tooltip=_t("nc_clean_vram", "Flush GPU CUDA cache."),
                ),
                _io.Boolean.Input(
                    "unload_models", default=True,
                    label_on=_t("nc_unload_models_on", "Unload models"),
                    label_off=_t("nc_unload_models_off", "Keep models"),
                    tooltip=_t("nc_unload_models", "Unload every model ComfyUI currently holds in memory."),
                ),
                _io.AnyType.Input("anything", optional=True),
            ],
            outputs=[
                _io.AnyType.Output(display_name="output", tooltip="Passthrough output (same as input)."),
            ],
            is_output_node=True,
            search_aliases=["cleaner", "VRAM", "memory", "unload", "cache", "flush"],
            hidden=[_io.Hidden.unique_id, _io.Hidden.extra_pnginfo],
        )

    @classmethod
    def fingerprint_inputs(cls, **kwargs) -> Any:
        if kwargs.get("clean_vram") or _resolve_unload(kwargs.get("unload_models", True), kwargs):
            return time.time()
        return 0.0

    @classmethod
    def execute(cls, clean_vram=True, unload_models=True, anything=None,
                unique_id=None, extra_pnginfo=None, **kwargs) -> _io.NodeOutput:
        if _resolve_unload(unload_models, kwargs):
            _unload_all_models()
        if clean_vram:
            _clear_vram()

        return _io.NodeOutput(anything)


# Workflows saved before the four per-category switches collapsed into one still
# send them by name through the API format. They never selected as precisely as
# they promised, so any of them set means "unload".
_LEGACY_UNLOAD_INPUTS = ("unload_diffusion", "unload_clip", "unload_vae", "unload_control")


def _resolve_unload(unload_models, kwargs) -> bool:
    legacy = [k for k in _LEGACY_UNLOAD_INPUTS if k in kwargs]
    if legacy:
        return any(bool(kwargs[k]) for k in legacy)
    return bool(unload_models)


def _get_model_management():
    try:
        import comfy.model_management
        return comfy.model_management
    except Exception:
        return None


def _unload_all_models():
    """Drop everything ComfyUI holds loaded.

    This used to sort the loaded models into diffusion / clip / vae / control by
    matching class names, and unload only the chosen kinds. The sorting could not
    be trusted: the names of a model and of its nested submodules were matched as
    one string, and `modelpatcher` — the wrapper around *every* model in ComfyUI —
    counted as a diffusion marker, so anything unrecognised was unloaded as
    diffusion regardless of the other switches.
    """
    mm = _get_model_management()
    if mm is None:
        return
    if not list(getattr(mm, "current_loaded_models", []) or []):
        return
    try:
        mm.unload_all_models()
    except Exception:
        mm.free_memory(1e30, mm.get_torch_device(), keep_loaded=[])


def _clear_vram():
    """Return cached allocator blocks to the driver, keeping models loaded.

    This also used to raise the prompt queue's `free_memory` flag, which ComfyUI
    answers with `unload_all_models()` plus a reset of the execution cache (see
    main.py). That made the cache switch unload models too, so the two switches
    on the panel did the same thing by different routes.
    """
    mm = _get_model_management()
    if mm is None:
        return
    gc.collect()
    mm.soft_empty_cache()

