"""FiL Krea 2 Tiled Diffusion — V3 ComfyNode.

Performs high-fidelity one-click AI upscale and texture enhancement:
- Crisp pixel super-resolution via AI models (DAT-2 / ESRGAN) or Lanczos.
- Faithful diffusion micro-detail refinement without facial distortion or hallucinations.
- Smart full-frame or seamless tiled latent sampling.
"""
from __future__ import annotations

import logging
from comfy_api.latest import io

from ..common.brand import CATEGORY_IMAGE
from ..common.localization import t as _t
from ..common.krea2_engine import run_krea2_upscale_pipeline

logger = logging.getLogger(__name__)


class FiLKrea2TiledDiffusion(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLKrea2TiledDiffusion",
            display_name="💎 Krea 2 Tiled Diffusion",
            category=CATEGORY_IMAGE,
            description="💎 FiL Krea 2 Tiled Diffusion — high-fidelity one-click AI upscale and detail enhancement with strict original preservation.",
            inputs=[
                io.Image.Input("image", optional=True,
                               tooltip=_t("krea2_image", "Input image to upscale and enhance.")),
                io.Model.Input("model", optional=True,
                               tooltip=_t("krea2_model", "Optional diffusion model for micro-detail enhancement.")),
                io.Vae.Input("vae", optional=True,
                               tooltip=_t("krea2_vae", "Optional VAE for latent encode/decode.")),
                io.UpscaleModel.Input("upscale_model", optional=True,
                                      tooltip=_t("krea2_upscale_model", "Optional AI upscale model (e.g. DAT-2, ESRGAN) to produce crisp geometry prior to diffusion.")),
                io.Clip.Input("clip", optional=True,
                               tooltip=_t("krea2_clip", "Optional CLIP/text encoder for prompt conditioning.")),
                io.Latent.Input("latent", optional=True,
                                tooltip=_t("krea2_latent", "Optional direct latent input.")),
                io.Float.Input("upscale_factor", default=2.0, min=1.0, max=8.0, step=0.1, display_mode=io.NumberDisplay.slider,
                               tooltip=_t("krea2_upscale_factor", "Target upscale multiplier (e.g. 2.0x).")),
                io.Float.Input("denoise", default=0.20, min=0.0, max=1.0, step=0.01, display_mode=io.NumberDisplay.slider,
                               tooltip=_t("krea2_denoise", "Denoising strength (Creativity). 0.15-0.25 strictly preserves original identity while adding crisp micro-details.")),
                io.String.Input("prompt", multiline=True, default="crisp textures, sharp focus, authentic skin pores, fine fabrics, realistic micro-details",
                                tooltip=_t("krea2_prompt", "Positive prompt describing desired texture and detail.")),
                io.Int.Input("seed", default=0, min=0, max=0xFFFFFFFFFFFFFFFF, control_after_generate=True,
                             tooltip=_t("krea2_seed", "Random seed for diffusion noise.")),
                io.Int.Input("steps", default=20, min=1, max=100,
                             tooltip=_t("krea2_steps", "Sampling steps (20 steps recommended for high quality).")),
                io.Combo.Input("tile_overlap", options=["auto (256px)", "128px (fast)", "256px (optimal)", "384px (ultra-smooth)"],
                               default="auto (256px)",
                               tooltip=_t("krea2_tile_overlap", "Overlap between tiles. 256px is optimal; 384px is ultra-seamless for delicate portraits.")),
                io.Float.Input("texture_injection", default=0.20, min=0.0, max=1.0, step=0.05, display_mode=io.NumberDisplay.slider,
                               tooltip=_t("krea2_texture_injection", "Injects genuine high-frequency microtexture from input image to eliminate plastic skin. 0.0: off, 0.20: natural skin pores.")),
                io.Combo.Input("color_match", options=["none", "luminance", "wavelet"], default="none",
                               tooltip=_t("krea2_color_match", "Locks white balance and skin tones to original image. 'luminance': Photoshop color mode. 'wavelet': smooth frequency split.")),
            ],
            outputs=[
                io.Image.Output(display_name="image", tooltip="Final upscaled image with preserved identity and enhanced details."),
                io.Latent.Output(display_name="latent", tooltip="Final denoised latent representation."),
            ],
            search_aliases=["krea2", "tiled", "diffusion", "upscale", "super resolution", "enhance"],
        )

    @classmethod
    def execute(cls, image=None, model=None, vae=None, upscale_model=None, clip=None, latent=None,
                upscale_factor: float = 2.0, denoise: float = 0.20,
                prompt: str = "crisp textures, sharp focus, authentic skin pores, fine fabrics, realistic micro-details",
                seed: int = 0, steps: int = 20,
                tile_overlap: str = "auto (256px)",
                texture_injection: float = 0.20,
                color_match: str = "none",
                **kwargs):
        """Executes one-click faithful upscale and detail refinement."""
        # kwargs absorber ensures backward compatibility with older workflows
        return run_krea2_upscale_pipeline(
            model=model,
            clip=clip,
            vae=vae,
            image=image,
            upscale_model=upscale_model,
            latent=latent,
            prompt=prompt,
            seed=seed,
            steps=steps,
            denoise=denoise,
            upscale_factor=upscale_factor,
            tile_overlap=tile_overlap,
            texture_injection=texture_injection,
            color_match=color_match,
        )
