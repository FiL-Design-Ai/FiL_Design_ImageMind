from __future__ import annotations

import math
from typing import Any

import torch
from comfy_api.latest import io

from ..common.brand import CATEGORY_IMAGE
from ..common.localization import t as _t

_UPSCALE_METHODS = ["bislerp", "nearest-exact", "area", "bilinear", "bicubic"]
_MODES = ["By Factor", "Target Size", "Longest Edge"]
_SNAP_MODES = [
    "64 px (U-Net & DiT Safe)",
    "32 px (DiT Safe 4x4)",
    "16 px (DiT Patch 2x2)",
    "8 px (1 Latent Pixel)",
    "Disabled (Exact)",
]
_ROUND_MODES = ["nearest", "up", "down"]

_SNAP_STEP_MAP = {
    "64 px (U-Net & DiT Safe)": 64,
    "32 px (DiT Safe 4x4)": 32,
    "16 px (DiT Patch 2x2)": 16,
    "8 px (1 Latent Pixel)": 8,
    "Disabled (Exact)": 8,
}


def _snap_dimension(val: float, step: int, round_mode: str) -> int:
    """Snap a dimension value to a multiple of step according to round_mode."""
    if step <= 1:
        return max(8, int(math.floor(val + 0.5)))
    if round_mode == "up":
        snapped = int(math.ceil(val / step)) * step
    elif round_mode == "down":
        snapped = int(math.floor(val / step)) * step
    else:  # nearest (arithmetic rounding)
        snapped = int(math.floor(val / step + 0.5)) * step
    return max(step, snapped)


class FiLLatentUpscalePro(io.ComfyNode):
    """Latent Upscaler Pro — smart latent scaling with artifact-free grid snapping.

    Prevents border seams, artifacts, and blur caused by non-divisible latent
    sizes in U-Net (SD1.5/SDXL) and DiT (Flux/SD3) architectures.
    """

    @classmethod
    def define_schema(cls) -> io.Schema:
        return io.Schema(
            node_id="FiLLatentUpscalePro",
            display_name="📐 Latent Upscaler Pro",
            category=CATEGORY_IMAGE,
            description="📐 FiL Latent Upscaler Pro — smart latent scaler with artifact-free grid snapping (64/16/8 px), aspect ratio preservation, and pixel dimension outputs.",
            inputs=[
                io.Latent.Input(
                    "samples",
                    tooltip=_t("lup_samples", "Input latent to upscale."),
                ),
                io.Combo.Input(
                    "mode",
                    options=_MODES,
                    default="By Factor",
                    tooltip=_t(
                        "lup_mode",
                        "Scaling mode: 'By Factor' uses multiplier, 'Target Size' scales to exact dimensions, 'Longest Edge' scales preserving aspect ratio.",
                    ),
                ),
                io.Float.Input(
                    "scale_by",
                    default=1.5,
                    min=0.05,
                    max=8.0,
                    step=0.05,
                    display_mode=io.NumberDisplay.slider,
                    tooltip=_t("lup_scale_by", "Upscale factor used when mode is 'By Factor'."),
                ),
                io.Int.Input(
                    "target_width",
                    default=1024,
                    min=64,
                    max=8192,
                    step=64,
                    tooltip=_t("lup_target_width", "Target width in pixels (used in 'Target Size' mode)."),
                ),
                io.Int.Input(
                    "target_height",
                    default=1024,
                    min=64,
                    max=8192,
                    step=64,
                    tooltip=_t("lup_target_height", "Target height in pixels (used in 'Target Size' mode)."),
                ),
                io.Int.Input(
                    "longest_edge",
                    default=1536,
                    min=128,
                    max=8192,
                    step=64,
                    tooltip=_t("lup_longest_edge", "Longest edge in pixels (used in 'Longest Edge' mode)."),
                ),
                io.Combo.Input(
                    "upscale_method",
                    options=_UPSCALE_METHODS,
                    default="bislerp",
                    tooltip=_t(
                        "lup_upscale_method",
                        "Interpolation method for latent tensors. 'bislerp' is standard for diffusion latents.",
                    ),
                ),
                io.Combo.Input(
                    "snap_to",
                    options=_SNAP_MODES,
                    default="64 px (U-Net & DiT Safe)",
                    tooltip=_t(
                        "lup_snap_to",
                        "Grid snapping rule. 64 px eliminates border artifacts on SD1.5/SDXL and DiT; 16 px guarantees even latents for Flux.",
                    ),
                ),
                io.Combo.Input(
                    "round_mode",
                    options=_ROUND_MODES,
                    default="nearest",
                    tooltip=_t("lup_round_mode", "Rounding direction when snapping to the grid."),
                ),
            ],
            outputs=[
                io.Latent.Output(
                    display_name="latent",
                    tooltip="Resized latent tensor with clean boundary alignment.",
                ),
                io.Int.Output(
                    display_name="width",
                    tooltip="Resulting image width in pixels (divisible by chosen snap).",
                ),
                io.Int.Output(
                    display_name="height",
                    tooltip="Resulting image height in pixels (divisible by chosen snap).",
                ),
            ],
            search_aliases=["latent upscale", "upscale latent by", "latent resizer", "snap", "hires latent"],
        )

    @classmethod
    def execute(
        cls,
        samples: dict[str, Any],
        mode: str = "By Factor",
        scale_by: float = 1.5,
        target_width: int = 1024,
        target_height: int = 1024,
        longest_edge: int = 1536,
        upscale_method: str = "bislerp",
        snap_to: str = "64 px (U-Net & DiT Safe)",
        round_mode: str = "nearest",
    ) -> io.NodeOutput:
        if not isinstance(samples, dict) or "samples" not in samples:
            raise ValueError("Input 'samples' must be a valid LATENT dictionary containing 'samples' tensor.")

        latent_tensor: torch.Tensor = samples["samples"]
        if not isinstance(latent_tensor, torch.Tensor):
            raise ValueError("Expected 'samples' in LATENT to be a torch.Tensor")

        is_5d = latent_tensor.ndim == 5
        if is_5d:
            b, c, f, cur_lh, cur_lw = latent_tensor.shape
            # Reshape [B, C, F, H, W] -> [B * F, C, H, W] for 2D spatial upscale
            input_tensor = latent_tensor.permute(0, 2, 1, 3, 4).reshape(b * f, c, cur_lh, cur_lw)
        elif latent_tensor.ndim == 4:
            cur_lh = int(latent_tensor.shape[-2])
            cur_lw = int(latent_tensor.shape[-1])
            input_tensor = latent_tensor
        else:
            raise ValueError(f"Expected 4D or 5D latent tensor [B, C, H, W] or [B, C, F, H, W], got shape {tuple(latent_tensor.shape)}")

        cur_px_w = cur_lw * 8
        cur_px_h = cur_lh * 8

        # 1. Compute raw target pixel dimensions based on mode
        if mode == "Target Size":
            raw_w = float(target_width)
            raw_h = float(target_height)
        elif mode == "Longest Edge":
            longest = float(max(64, longest_edge))
            if cur_px_w >= cur_px_h:
                raw_w = longest
                raw_h = longest * (cur_px_h / max(1, cur_px_w))
            else:
                raw_h = longest
                raw_w = longest * (cur_px_w / max(1, cur_px_h))
        else:  # "By Factor"
            factor = max(0.01, float(scale_by))
            raw_w = cur_px_w * factor
            raw_h = cur_px_h * factor

        # 2. Apply snap-to-grid rule
        step_px = _SNAP_STEP_MAP.get(snap_to, 64)
        target_px_w = _snap_dimension(raw_w, step_px, round_mode)
        target_px_h = _snap_dimension(raw_h, step_px, round_mode)

        # 3. Latent pixel dimensions (1 latent pixel = 8 image pixels)
        target_lw = max(1, target_px_w // 8)
        target_lh = max(1, target_px_h // 8)

        # 4. Upscale latent tensor using ComfyUI's common_upscale
        import comfy.utils

        rescaled_tensor = comfy.utils.common_upscale(
            input_tensor,
            target_lw,
            target_lh,
            upscale_method,
            "disabled",
        )

        if is_5d:
            # Restore [B * F, C, H, W] -> [B, C, F, H, W]
            rescaled_tensor = rescaled_tensor.view(b, f, c, target_lh, target_lw).permute(0, 2, 1, 3, 4).contiguous()

        out = samples.copy()
        out["samples"] = rescaled_tensor

        # 5. Handle noise_mask if present
        if "noise_mask" in samples and isinstance(samples["noise_mask"], torch.Tensor):
            mask = samples["noise_mask"]
            if is_5d and mask.ndim == 5:
                mb, mc, mf, mh, mw = mask.shape
                m_reshaped = mask.permute(0, 2, 1, 3, 4).reshape(mb * mf, mc, mh, mw)
                res_m = comfy.utils.common_upscale(m_reshaped, target_lw, target_lh, "bilinear", "disabled")
                out["noise_mask"] = res_m.view(mb, mf, mc, target_lh, target_lw).permute(0, 2, 1, 3, 4).contiguous()
            elif mask.ndim == 4:
                # [B, C, H, W]
                out["noise_mask"] = comfy.utils.common_upscale(
                    mask,
                    target_lw,
                    target_lh,
                    "bilinear",
                    "disabled",
                )
            elif mask.ndim == 3:
                # [B, H, W] -> unsqueeze channel, upscale, squeeze back
                m_4d = mask.unsqueeze(1)
                res_m = comfy.utils.common_upscale(
                    m_4d,
                    target_lw,
                    target_lh,
                    "bilinear",
                    "disabled",
                )
                out["noise_mask"] = res_m.squeeze(1)

        return io.NodeOutput(
            out,
            int(target_px_w),
            int(target_px_h),
        )
