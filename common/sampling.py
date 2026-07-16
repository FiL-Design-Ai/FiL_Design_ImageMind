"""Shared sampling helpers for the FiL sampler nodes.

Currently hosts the HighRes-fix post-processing pass consumed by
``FiLKSampler`` when a ``FiLHighResFix`` script is wired into its ``script``
input. This is a lean re-implementation of the consumer half of
efficiency-nodes' ``TSC_KSampler`` (latent/pixel/both upscale + re-sample),
without the result caching, city96/ttl upscalers, or AIO preprocessor of the
original.

All ComfyUI imports are deferred to call time so importing this module at
schema-registration time stays safe.
"""

from __future__ import annotations

from typing import Any


def sample_unified(
    model,
    *,
    seed: int,
    steps: int,
    cfg: float,
    sampler_name: str,
    scheduler: str,
    positive,
    negative,
    latent,
    denoise: float = 1.0,
):
    """Sample a latent via ComfyUI's stock ``common_ksampler``.

    Returns a latent dict (``{"samples": ...}``).
    """
    from nodes import common_ksampler

    return common_ksampler(
        model, seed, steps, cfg, sampler_name, scheduler,
        positive, negative, latent, denoise=denoise,
    )[0]


def _decode(vae, latent, tiled: bool = False):
    from nodes import VAEDecode, VAEDecodeTiled

    if tiled:
        return VAEDecodeTiled().decode(vae, latent, 512)[0]
    return VAEDecode().decode(vae, latent)[0]


def _encode(vae, image):
    from nodes import VAEEncode

    return VAEEncode().encode(vae, image)[0]


def _latent_dims(latent) -> tuple[int, int]:
    samples = latent["samples"]
    return int(samples.shape[-1]), int(samples.shape[-2])  # (w, h) in latent space


def _pixel_upscale(image, pixel_upscaler: str, target_scale: float):
    """Run an ESRGAN-style model then rescale to the requested net factor."""
    from comfy_extras.nodes_upscale_model import ImageUpscaleWithModel, UpscaleModelLoader
    from nodes import ImageScaleBy

    src_h = int(image.shape[1])
    up_model = UpscaleModelLoader.execute(pixel_upscaler)[0]
    upscaled = ImageUpscaleWithModel.execute(up_model, image)[0]
    model_scale = int(upscaled.shape[1]) / max(1, src_h)
    # Correct the fixed model scale down/up to the user-requested factor.
    correction = target_scale / model_scale if model_scale > 0 else 1.0
    if abs(correction - 1.0) > 1e-3:
        upscaled = ImageScaleBy().upscale(upscaled, "lanczos", correction)[0]
    return upscaled


def apply_hiresfix(
    hiresfix: dict[str, Any],
    *,
    model,
    positive,
    negative,
    vae,
    latent,
    base_seed: int,
    cfg: float,
    sampler_name: str,
    scheduler: str,
) -> tuple[Any, list[str]]:
    """Run the HighRes-fix upscale + re-sample pass.

    Returns ``(latent, warnings)``. On any recoverable problem the original
    latent is returned with a warning message rather than raising.
    """
    from nodes import ControlNetApply, LatentUpscaleBy

    warnings: list[str] = []

    upscale_type = hiresfix.get("upscale_type", "latent")
    latent_upscaler = hiresfix.get("latent_upscaler", "nearest-exact")
    pixel_upscaler = hiresfix.get("pixel_upscaler")
    upscale_by = float(hiresfix.get("upscale_by", 1.25))
    use_same_seed = bool(hiresfix.get("use_same_seed", True))
    hires_seed = int(hiresfix.get("seed", 0))
    hires_steps = int(hiresfix.get("hires_steps", 12))
    denoise = float(hiresfix.get("denoise", 0.56))
    iterations = int(hiresfix.get("iterations", 1))
    control_net = hiresfix.get("control_net")
    strength = float(hiresfix.get("strength", 1.0))

    if iterations <= 0 or upscale_by <= 0:
        return latent, warnings

    needs_pixels = upscale_type in ("pixel", "both")
    if needs_pixels and vae is None:
        warnings.append("HighRes-fix: pixel upscale needs a VAE — skipped.")
        return latent, warnings
    if needs_pixels and not pixel_upscaler:
        warnings.append("HighRes-fix: no pixel upscale model selected — skipped.")
        return latent, warnings

    for i in range(iterations):
        seed = base_seed if use_same_seed else hires_seed + i

        # 1) Upscale.
        if upscale_type == "latent":
            latent = LatentUpscaleBy().upscale(latent, latent_upscaler, upscale_by)[0]
        else:  # "pixel" or "both"
            image = _decode(vae, latent)
            try:
                image = _pixel_upscale(image, pixel_upscaler, upscale_by)
            except Exception as exc:  # pragma: no cover - depends on installed models
                warnings.append(f"HighRes-fix: pixel upscale failed ({exc}).")
                return latent, warnings
            latent = _encode(vae, image)

        # 2) Optional ControlNet conditioning off the upscaled image.
        pass_positive = positive
        if control_net is not None:
            try:
                hint = _decode(vae, latent) if vae is not None else None
                if hint is not None:
                    pass_positive = ControlNetApply().apply_controlnet(positive, control_net, hint, strength)[0]
                else:
                    warnings.append("HighRes-fix: ControlNet needs a VAE — skipped.")
            except Exception as exc:  # pragma: no cover
                warnings.append(f"HighRes-fix: ControlNet apply failed ({exc}).")

        # 3) Re-sample at the hires settings.
        latent = sample_unified(
            model, seed=seed, steps=hires_steps, cfg=cfg,
            sampler_name=sampler_name, scheduler=scheduler,
            positive=pass_positive, negative=negative, latent=latent,
            denoise=denoise,
        )

    return latent, warnings
