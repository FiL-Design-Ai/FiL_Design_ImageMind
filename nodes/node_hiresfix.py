"""FiL HighRes Fix — a lean V3 port of efficiency-nodes' HighRes-Fix Script.

This node does not sample. It packs upscale/re-sample parameters into a
``script`` dict that a downstream ``FiLKSampler`` consumes to run a HighRes-fix
pass. Latent upscaling uses ComfyUI's built-in ``LatentUpscaleBy`` methods;
pixel upscaling uses models from the ``upscale_models`` folder. The city96/ttl
latent upscalers and the AIO ControlNet preprocessor of the original are
intentionally omitted.
"""

import logging

from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_ROOT
from ..common.io_types import FilHiresScript
from ..common.localization import t

logger = logging.getLogger(f"{BRAND}.HighResFix")

_LATENT_METHODS = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"]


def _checkpoints() -> list[str]:
    try:
        import folder_paths

        return ["(use same)"] + folder_paths.get_filename_list("checkpoints")
    except Exception:  # pragma: no cover
        return ["(use same)"]


def _pixel_upscalers() -> list[str]:
    try:
        import folder_paths

        names = folder_paths.get_filename_list("upscale_models")
        return list(names) if names else ["(none)"]
    except Exception:  # pragma: no cover
        return ["(none)"]


def _controlnets() -> list[str]:
    try:
        import folder_paths

        names = folder_paths.get_filename_list("controlnet")
        return list(names) if names else ["(none)"]
    except Exception:  # pragma: no cover
        return ["(none)"]


class FiLHighResFix(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLHighResFix",
            display_name="🔬 HighRes Fix",
            category=f"{CATEGORY_ROOT}/Sampling",
            description="🔬 FiL HighRes Fix — packs latent/pixel upscale + re-sample settings into a script for FiLKSampler.",
            inputs=[
                io.Combo.Input("upscale_type", options=["latent", "pixel", "both"], default="latent",
                               tooltip=t("hrf_upscale_type", "Upscale in latent space, pixel space, or both.")),
                io.Combo.Input("hires_ckpt_name", options=_checkpoints(), default="(use same)",
                               tooltip=t("hrf_ckpt", "Checkpoint for the hires pass. '(use same)' reuses the base model.")),
                io.Combo.Input("latent_upscaler", options=_LATENT_METHODS, default="nearest-exact",
                               tooltip=t("hrf_latent_up", "Latent upscale method.")),
                io.Combo.Input("pixel_upscaler", options=_pixel_upscalers(),
                               tooltip=t("hrf_pixel_up", "Pixel upscale model (from upscale_models).")),
                io.Float.Input("upscale_by", default=1.25, min=0.01, max=8.0, step=0.05,
                               tooltip=t("hrf_upscale_by", "Upscale multiplier.")),
                io.Boolean.Input("use_same_seed", default=True, label_on="Same seed", label_off="Own seed",
                                 tooltip=t("hrf_same_seed", "Reuse the sampler's seed for the hires pass.")),
                io.Int.Input("seed", default=0, min=0, max=0xFFFFFFFFFFFFFFFF, control_after_generate=True,
                             tooltip=t("hrf_seed", "Hires-pass seed (used when 'Own seed').")),
                io.Int.Input("hires_steps", default=12, min=1, max=10000,
                             tooltip=t("hrf_steps", "Steps for the hires re-sample.")),
                io.Float.Input("denoise", default=0.56, min=0.0, max=1.0, step=0.01,
                               tooltip=t("hrf_denoise", "Denoise strength for the hires re-sample.")),
                io.Int.Input("iterations", default=1, min=0, max=5, step=1,
                             tooltip=t("hrf_iterations", "How many upscale+resample passes to run.")),
                io.Boolean.Input("use_controlnet", default=False, label_on="ControlNet ON", label_off="ControlNet OFF",
                                 advanced=True, tooltip=t("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor.")),
                io.Combo.Input("control_net_name", options=_controlnets(), advanced=True,
                               tooltip=t("hrf_cn_name", "ControlNet model to apply.")),
                io.Float.Input("strength", default=1.0, min=0.0, max=10.0, step=0.01, advanced=True,
                               tooltip=t("hrf_cn_strength", "ControlNet strength.")),
                io.Combo.Input("preprocessor", options=["none", "canny"], default="none", advanced=True,
                               tooltip=t("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets).")),
                FilHiresScript.Input("script", optional=True,
                                     tooltip=t("hrf_script", "Optional upstream FiL script to extend.")),
            ],
            outputs=[
                FilHiresScript.Output("script", display_name="script", tooltip="FiL HighRes-fix script for FiLKSampler."),
            ],
            search_aliases=["hires", "highres", "hires fix", "upscale", "script", "refine"],
        )

    @classmethod
    def execute(cls, upscale_type, hires_ckpt_name, latent_upscaler, pixel_upscaler,
                use_same_seed, seed, hires_steps, upscale_by=1.25, denoise=0.56, iterations=1,
                use_controlnet=False, control_net_name=None, strength=1.0,
                preprocessor="none", script=None) -> io.NodeOutput:
        control_net = None
        if use_controlnet and control_net_name and control_net_name != "(none)":
            try:
                from nodes import ControlNetLoader

                control_net = ControlNetLoader().load_controlnet(control_net_name)[0]
            except Exception as exc:  # pragma: no cover - depends on installed models
                # Through the logger, not print: the pack exposes a log level
                # (common/base.py, the /log_level route) and a bare print
                # ignores it, so this warning could not be turned down.
                logger.warning("ControlNet load failed (%s); continuing without it.", exc)

        new_script = dict(script) if isinstance(script, dict) else {}
        new_script["hiresfix"] = {
            "upscale_type": upscale_type,
            "hires_ckpt_name": hires_ckpt_name,
            "latent_upscaler": latent_upscaler,
            "pixel_upscaler": None if pixel_upscaler in (None, "(none)") else pixel_upscaler,
            "upscale_by": float(upscale_by),
            "use_same_seed": bool(use_same_seed),
            # In "same seed" mode this value is never read by apply_hiresfix
            # (it reuses base_seed instead) — but the "seed" widget's own
            # control_after_generate defaults to "randomize" and changes on
            # every queue regardless. Packing that live value here would
            # change this node's output dict every run even with nothing
            # else changed, busting ComfyUI's input-hash cache for the
            # downstream FiLKSampler and forcing a full re-sample (base +
            # hires) each time — even with a fixed base seed. Pin it to a
            # constant so "same seed" mode actually benefits from caching;
            # "own seed" mode still wants the live value to bust the cache
            # on purpose (a new own-seed is a new result).
            "seed": int(seed) if not use_same_seed else 0,
            "hires_steps": int(hires_steps),
            "denoise": float(denoise),
            "iterations": int(iterations),
            "control_net": control_net,
            "strength": float(strength),
            "preprocessor": str(preprocessor),
        }
        return io.NodeOutput(new_script)
