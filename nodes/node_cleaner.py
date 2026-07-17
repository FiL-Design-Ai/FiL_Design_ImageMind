import ctypes
import gc
import platform
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
            description="🧹 FiL Neuro Cleaner — flushes GPU VRAM, offloads model types, and optionally cleans system RAM/file cache on Windows.",
            inputs=[
                _io.Boolean.Input("clean_vram", default=True, label_on="VRAM ON", label_off="VRAM OFF", tooltip=_t("nc_clean_vram", "Clean VRAM.")),
                _io.Boolean.Input("offload_model", default=True, label_on="Unload Models", label_off="Keep Models", tooltip=_t("nc_offload_model", "Unload selected model types.")),
                _io.Boolean.Input("offload_cache", default=True, label_on="Flush GPU Cache", label_off="Keep GPU Cache", tooltip=_t("nc_offload_cache", "Flush GPU cache.")),
                _io.Boolean.Input("unload_diffusion", default=True, label_on="Diffusion", label_off="Keep", tooltip=_t("nc_unload_diffusion", "Unload diffusion models.")),
                _io.Boolean.Input("unload_clip", default=True, label_on="CLIP", label_off="Keep", tooltip=_t("nc_unload_clip", "Unload CLIP models.")),
                _io.Boolean.Input("unload_vae", default=True, label_on="VAE", label_off="Keep", tooltip=_t("nc_unload_vae", "Unload VAE models.")),
                _io.Boolean.Input("unload_control", default=True, label_on="Control", label_off="Keep", tooltip=_t("nc_unload_control", "Unload ControlNet models.")),
                _io.Boolean.Input("unload_lora", default=True, label_on="LoRA", label_off="Keep", tooltip=_t("nc_unload_lora", "Unload LoRA models.")),
                _io.Boolean.Input("clean_ram", default=False, label_on="RAM ON", label_off="RAM OFF", tooltip=_t("nc_clean_ram", "Clean RAM."), advanced=True),
                _io.Boolean.Input("clean_file_cache", default=True, label_on="File Cache", label_off="File Cache Off", tooltip=_t("nc_clean_file_cache", "Clean file system cache (Windows)."), advanced=True),
                _io.Boolean.Input("clean_processes", default=False, label_on="Trim Process", label_off="Trim Off", tooltip=_t("nc_clean_processes", "Trim current process working set."), advanced=True),
                _io.Boolean.Input("clean_dlls", default=False, label_on="DLL Trim", label_off="DLL Trim Off", tooltip=_t("nc_clean_dlls", "Empty DLL working set."), advanced=True),
                _io.Int.Input("retry_times", default=1, min=1, max=10, step=1, tooltip=_t("nc_retry_times", "Retry count for RAM cleanup."), advanced=True),
                _io.Boolean.Input("advanced_controls", default=False, label_on="Advanced", label_off="Simple", tooltip=_t("nc_advanced_controls", "Show advanced RAM options."), advanced=True),
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
        if kwargs.get("clean_vram") or kwargs.get("clean_ram"):
            return time.time()
        return 0.0

    @classmethod
    def execute(cls, clean_vram=True, offload_model=True, offload_cache=True,
                unload_diffusion=True, unload_clip=True, unload_vae=True,
                unload_control=True, unload_lora=True, clean_ram=False,
                clean_file_cache=True, clean_processes=False, clean_dlls=False,
                retry_times=1, advanced_controls=False, anything=None,
                unique_id=None, extra_pnginfo=None, **kwargs) -> _io.NodeOutput:
        if not clean_vram and not clean_ram:
            return _io.NodeOutput(anything)

        if clean_vram:
            selected = set()
            if offload_model:
                if unload_diffusion:
                    selected.add("diffusion")
                if unload_clip:
                    selected.add("clip")
                if unload_vae:
                    selected.add("vae")
                if unload_control:
                    selected.add("control")
                if unload_lora:
                    selected.add("lora")
                if selected:
                    _unload_models(selected)
            if offload_cache:
                _clear_vram()

        if clean_ram:
            _clear_ram(clean_file_cache, clean_processes, clean_dlls, retry_times)

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


def _clear_ram(clean_file_cache, clean_processes, clean_dlls, retry_times=1):
    system = platform.system()
    for _ in range(max(1, min(int(retry_times or 1), 10))):
        if clean_file_cache and system == "Windows":
            try:
                ctypes.windll.kernel32.SetSystemFileCacheSize(-1, -1, 0)
            except Exception:
                pass
        if clean_processes and system == "Windows":
            try:
                ctypes.windll.kernel32.SetProcessWorkingSetSize(-1, -1, -1)
            except Exception:
                pass
        if clean_dlls and system == "Windows":
            try:
                cp = ctypes.windll.kernel32.GetCurrentProcess()
                ctypes.windll.psapi.EmptyWorkingSet(cp)
            except Exception:
                pass
