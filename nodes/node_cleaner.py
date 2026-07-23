import gc
import time
from typing import Any

from comfy_api.latest import io as _io

from ..common.brand import CATEGORY_ROOT
from ..common.localization import t as _t

CLEAN_MODE_OPTIONS = [
    "Flush VRAM (All)",
    "Unload Diffusion Only",
    "Soft Cache Only",
    "Off",
]


class FiLNeuroCleaner(_io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return _io.Schema(
            node_id="FiLNeuroCleaner",
            display_name="🧹 Cleaner",
            category=f"{CATEGORY_ROOT}/Tools",
            description="🧹 FiL Neuro Cleaner — flushes GPU VRAM and offloads loaded models to prevent Out-Of-Memory errors.",
            inputs=[
                _io.Combo.Input(
                    "clean_mode",
                    options=CLEAN_MODE_OPTIONS,
                    default="Flush VRAM (All)",
                    tooltip=_t("nc_clean_mode", "Select VRAM & GPU memory cleanup strategy."),
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
        mode = kwargs.get("clean_mode", "Flush VRAM (All)")
        if mode != "Off":
            return time.time()
        return 0.0

    @classmethod
    def execute(cls, clean_mode="Flush VRAM (All)", anything=None,
                unique_id=None, extra_pnginfo=None, **kwargs) -> _io.NodeOutput:
        if clean_mode == "Off":
            return _io.NodeOutput(anything)

        if clean_mode == "Flush VRAM (All)":
            _unload_models({"diffusion", "clip", "vae", "control", "lora", "other"})
            _clear_vram()
        elif clean_mode == "Unload Diffusion Only":
            _unload_models({"diffusion"})
            _clear_vram()
        elif clean_mode == "Soft Cache Only":
            _clear_vram()

        return _io.NodeOutput(anything)


def _get_model_management():
    try:
        import comfy.model_management
        return comfy.model_management
    except Exception:
        return None


def _get_prompt_server():
    try:
        from server import PromptServer
        return PromptServer
    except Exception:
        return None


def _model_class_names(loaded_model):
    names = []
    candidates = [loaded_model, getattr(loaded_model, "model", None)]
    model = getattr(loaded_model, "model", None)
    candidates.extend([
        getattr(model, "model", None), getattr(model, "diffusion_model", None),
        getattr(model, "first_stage_model", None), getattr(model, "cond_stage_model", None),
    ])
    try:
        candidates.append(loaded_model.real_model())
    except Exception:
        pass
    for c in candidates:
        if c is None:
            continue
        try:
            names.append(c.__class__.__name__)
        except Exception:
            pass
    return names


def _classify_loaded_model(loaded_model):
    text = " ".join(_model_class_names(loaded_model)).lower()
    if any(t in text for t in ("lora", "loha", "lokr", "lowrank")):
        return "lora"
    if any(t in text for t in ("controlnet", "control", "adapter", "ipadapter")):
        return "control"
    if any(t in text for t in ("vae", "autoencoder", "firststage")):
        return "vae"
    if any(t in text for t in ("clip", "text", "t5", "bert", "llama", "encoder")):
        return "clip"
    if any(t in text for t in ("unet", "diffusion", "dit", "flux", "modelpatcher")):
        return "diffusion"
    return "other"


def _unload_models(selected):
    mm = _get_model_management()
    if mm is None:
        return
    loaded = list(getattr(mm, "current_loaded_models", []) or [])
    if not loaded:
        return
    keep = []
    for m in loaded:
        category = _classify_loaded_model(m)
        if category in selected:
            continue
        keep.append(m)
    if keep != loaded:
        device = mm.get_torch_device()
        mm.free_memory(1e30, device, keep_loaded=keep)


def _clear_vram():
    mm = _get_model_management()
    if mm:
        gc.collect()
        mm.soft_empty_cache()
    ps = _get_prompt_server()
    if ps:
        try:
            ps.instance.prompt_queue.set_flag("free_memory", True)
        except Exception:
            pass

