"""FiL Color Wizard — automatic color correction node (V3 API)."""

from __future__ import annotations

import numpy as np
import torch

from comfy_api.latest import io
from ..common.brand import CATEGORY_ROOT
from ..common.color_correction import (
    METHODS,
    METHOD_KEYS,
    preserve_skin_blend,
    temperature_tint,
    match_to_reference,
    white_balance_from_mask,
)
from ..common.localization import t as _t
from ..common.processing import comfy_image_to_rgb_uint8


def _tensor_from_np(arr: np.ndarray) -> torch.Tensor:
    t = torch.from_numpy(arr.astype(np.float32) / 255.0)
    return t.unsqueeze(0)


class FiLColorWizard(io.ComfyNode):
    """Automatically corrects image colours — white balance, contrast, saturation,
    with optional skin preservation, reference colour matching, and WB picker mask."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLColorWizard",
            display_name="🎨 Color Wizard",
            category=f"{CATEGORY_ROOT}/Image",
            description="Automatically corrects image colours using white balance, LAB contrast enhancement, channel stretching, reference colour matching, and WB picker.",
            inputs=[
                io.Image.Input("image", tooltip=_t("tt_image", "Input image to colour-correct.")),
                io.Combo.Input("method", options=METHOD_KEYS, default="Full Auto", tooltip=_t("tt_cw_method", "Correction algorithm.")),
                io.Float.Input("strength", default=0.8, min=0.0, max=1.0, step=0.05, tooltip=_t("tt_cw_strength", "Correction strength (0 = no change).")),
                io.Float.Input("saturate", default=0.5, min=0.0, max=5.0, step=0.1, tooltip=_t("tt_cw_saturate", "Percentile saturation for Channel Stretch.")),
                io.Float.Input("temperature", default=0.0, min=-1.0, max=1.0, step=0.05, tooltip=_t("tt_cw_temperature", "Colour temperature.")),
                io.Float.Input("tint", default=0.0, min=-1.0, max=1.0, step=0.05, tooltip=_t("tt_cw_tint", "Colour tint.")),
                io.Boolean.Input("preserve_skin", default=False, tooltip=_t("tt_cw_preserve_skin", "Preserve skin tones.")),
                io.Image.Input("reference", optional=True, tooltip=_t("tt_cw_reference", "Reference image whose colour distribution to match.")),
                io.Mask.Input("wb_mask", optional=True, tooltip=_t("tt_cw_wb_mask", "Mask of a neutral-grey area to sample for white balance.")),
            ],
            outputs=[
                io.Image.Output(id="image", display_name="image"),
            ],
        )

    @classmethod
    def execute(
        cls,
        image: torch.Tensor,
        method: str = "Full Auto",
        strength: float = 0.8,
        saturate: float = 0.5,
        temperature: float = 0.0,
        tint: float = 0.0,
        preserve_skin: bool = False,
        reference: torch.Tensor | None = None,
        wb_mask: torch.Tensor | None = None,
    ) -> io.NodeOutput:
        fn = METHODS.get(method, METHODS["Full Auto"])
        batch = []

        # Pre-process reference once
        ref_np: np.ndarray | None = None
        if reference is not None:
            ref_np = comfy_image_to_rgb_uint8(reference)

        for i in range(image.shape[0]):
            original = comfy_image_to_rgb_uint8(image[i : i + 1])

            # Step 1: selected method
            kwargs: dict = {"strength": strength}
            if method == "Channel Stretch":
                kwargs["saturate"] = saturate
            if method == "White Patch":
                kwargs["percentile"] = 99.0

            corrected = fn(original, **kwargs)

            # Step 2: WB picker mask overrides the method's WB
            if wb_mask is not None:
                # Mask shape: [H,W] or [B,H,W]. A single mask is commonly wired
                # to a multi-image batch, so clamp instead of indexing by frame.
                m = wb_mask[min(i, wb_mask.shape[0] - 1)] if wb_mask.ndim == 3 else wb_mask
                m_np = m.cpu().numpy().astype(np.float32)
                corrected = white_balance_from_mask(corrected, m_np, strength=strength)

            # Step 3: match to reference
            if ref_np is not None:
                corrected = match_to_reference(corrected, ref_np, strength=strength)

            # Step 4: temperature / tint
            if temperature != 0.0 or tint != 0.0:
                corrected = temperature_tint(corrected, temperature, tint)

            # Step 5: skin preservation
            if preserve_skin:
                corrected = preserve_skin_blend(original, corrected)

            batch.append(_tensor_from_np(corrected))

        return io.NodeOutput(torch.cat(batch, dim=0))
