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


def _prepare_noise(latent_image, seed: int, rng_source: str = "cpu", batch_inds=None):
    """Generate a noise tensor for ``latent_image``/``seed``.

    ``"cpu"`` delegates to ``comfy.sample.prepare_noise`` (ComfyUI's stock
    behaviour). ``"gpu"`` draws from a CUDA/MPS generator on the model's
    execution device instead — a different (and, for some samplers, more
    A1111-consistent) noise pattern for the same seed. Only ever reads the
    public ``comfy.sample``/``comfy.model_management`` API — no monkeypatching
    of comfy internals.

    ``batch_inds`` is the latent's ``batch_index`` list, as stock
    ``common_ksampler`` passes it (nodes.py: ``prepare_noise(x, seed,
    batch_inds)``). Dropping it made a latent coming out of LatentFromBatch /
    RepeatLatentBatch receive different noise than the stock KSampler would
    give it for the same seed.
    """
    import comfy.sample

    if rng_source != "gpu":
        return comfy.sample.prepare_noise(latent_image, seed, batch_inds)

    import torch
    import comfy.model_management

    device = comfy.model_management.get_torch_device()
    generator = torch.Generator(device=device).manual_seed(seed)
    noise = torch.randn(
        latent_image.size(), dtype=torch.float32, layout=latent_image.layout,
        generator=generator, device=device,
    )
    return noise.to(dtype=latent_image.dtype, device="cpu")


def _blend_noise(base_noise, variation_noise, weight: float):
    """Blend two independent unit-variance noise tensors.

    Uses a sin/cos rotation (``weight`` maps 0..1 to a 0..90° blend angle)
    rather than a linear mix so the result stays unit-variance regardless of
    ``weight`` — a plain ``lerp`` would shrink the noise magnitude in the
    middle of the range and change the effective denoise strength.
    """
    import math

    theta = max(0.0, min(1.0, weight)) * (math.pi / 2)
    return base_noise * math.cos(theta) + variation_noise * math.sin(theta)


# Samplers that accept an ``eta`` kwarg (noise multiplier).
# Ancestral / SDE samplers apply stochastic noise at each step — eta scales it.
# Deterministic samplers (euler, heun, dpm_2, lms …) do NOT use eta at all;
# passing it would raise TypeError inside k_diffusion.
#
# Membership rule: the registered sampler function itself must take ``eta``.
# KSAMPLER.sample() unpacks extra_options as ``**kwargs`` into it, so a name
# listed here whose function has no ``eta`` parameter crashes every generation
# with TypeError. Two traps already hit while building this list:
#   - ``er_sde`` / ``sa_solver`` / ``sa_solver_pece`` ARE stochastic but take
#     ``s_noise``/``tau_func`` instead of ``eta`` — they must stay OUT.
#   - ``dpm_fast``: its k_diffusion function has ``eta``, but the wrapper
#     closure comfy.samplers registers for it drops extra_options entirely
#     (no ``**kwargs``) — it must stay OUT too.
# tests/test_sample_unified.py drift-checks this set against the installed
# ComfyUI's real signatures on every run.
_ETA_SAMPLERS: frozenset[str] = frozenset({
    "euler_ancestral",
    "euler_ancestral_cfg_pp",
    "dpm_2_ancestral",
    "dpmpp_2s_ancestral",
    "dpmpp_2s_ancestral_cfg_pp",
    "dpmpp_sde",
    "dpmpp_sde_gpu",
    "dpmpp_2m_sde",
    "dpmpp_2m_sde_gpu",
    "dpmpp_2m_sde_heun",
    "dpmpp_2m_sde_heun_gpu",
    "dpmpp_3m_sde",
    "dpmpp_3m_sde_gpu",
    "exp_heun_2_x0_sde",
    "dpm_adaptive",
    "res_multistep_ancestral",
    "res_multistep_ancestral_cfg_pp",
    "seeds_2",
    "seeds_3",
})


# Cache for unknown/custom sampler names checked via inspect.signature.
_ETA_CACHE: dict[str, bool] = {}


def _sampler_accepts_eta(sampler_name: str) -> bool:
    """Return True if ``sampler_name`` reads ``eta`` from ``extra_options``.

    Two-level strategy (mirrors ``_sampler_accepts_bongmath``):
    1. Fast allowlist for the stock samplers — pinned by the drift tests in
       tests/test_sample_unified.py against the installed ComfyUI.
    2. ``inspect.signature`` fallback for custom samplers (RES4LYF's SDE ones
       accept eta but never appear in the stock allowlist). Introspecting the
       REGISTERED function is crash-safe by construction: that is exactly the
       function KSAMPLER.sample() unpacks extra_options into, so a fixed-
       signature wrapper without an eta parameter correctly reports False.
       Only a NAMED eta parameter counts — a bare ``**kwargs`` is too weak
       evidence that the sampler actually reads it.
    """
    if sampler_name in _ETA_SAMPLERS:
        return True
    if sampler_name in _ETA_CACHE:
        return _ETA_CACHE[sampler_name]
    try:
        import inspect

        import comfy.samplers as _s

        result = "eta" in inspect.signature(_s.ksampler(sampler_name).sampler_function).parameters
    except Exception:
        result = False
    _ETA_CACHE[sampler_name] = result
    return result


# Samplers that directly accept a ``BONGMATH`` kwarg via ``**extra_options``.
#
# Architecture note for RES4LYF:
#   - ``rk_beta``   → sample_rk_beta() has explicit ``BONGMATH: bool = True``
#                      parameter. Passing BONGMATH via extra_options works. ✓
#   - ``res_2m/3m/2s/3s/5s/6s``, ``deis_2m/3m`` etc.
#                  → thin wrapper functions with a FIXED signature.
#                      No **kwargs. ComfyUI's KSAMPLER does
#                      ``sampler_fn(..., **extra_options)`` — so passing
#                      BONGMATH to them raises TypeError. ✗
#                      These wrappers call sample_rk_beta with BONGMATH
#                      left at its default (True), so they always use bongmath
#                      and the widget has no effect on them.
_BONGMATH_KNOWN: frozenset[str] = frozenset({
    # The only RES4LYF sampler whose top-level function directly exposes BONGMATH.
    "rk_beta",
})

# Cache for unknown sampler names checked via inspect.signature.
_BONGMATH_CACHE: dict[str, bool] = {}


def _sampler_accepts_bongmath(sampler_name: str) -> bool:
    """Return True if this sampler reads ``BONGMATH`` from ``extra_options``.

    Uses a two-level strategy:
    1. Fast allowlist for known RES4LYF samplers (immune to importlib.reload
       bugs that temporarily remove the functions from k_diffusion_sampling).
    2. ``inspect.signature`` fallback for unknown custom samplers — valid
       because custom samplers are registered directly by name and their
       top-level function signature is authoritative.
    """
    if sampler_name in _BONGMATH_KNOWN:
        return True
    if sampler_name in _BONGMATH_CACHE:
        return _BONGMATH_CACHE[sampler_name]
    # Fallback: introspect the registered sampler function.
    try:
        import inspect
        import comfy.samplers as _s
        ks = _s.ksampler(sampler_name)
        sig = inspect.signature(ks.sampler_function)
        result = "BONGMATH" in sig.parameters
    except Exception:
        result = False
    _BONGMATH_CACHE[sampler_name] = result
    return result


def sampler_option_support() -> dict[str, list[str]]:
    """Installed sampler names that read ``eta`` / ``BONGMATH`` from
    ``extra_options``, for the frontend to gray out widgets the currently
    selected sampler would ignore (see server_routes.py).

    Computed lazily at request time — by then every sampler pack (RES4LYF
    etc.) has finished registering, so the lists reflect the real install.
    """
    import comfy.samplers

    names = list(comfy.samplers.KSampler.SAMPLERS)
    return {
        "eta": [n for n in names if _sampler_accepts_eta(n)],
        "bongmath": [n for n in names if _sampler_accepts_bongmath(n)],
    }


def _build_sampler_instance(sampler_name: str, extra_opts: dict[str, Any]):
    """Dispatch a sampler name the way the stock KSampler does.

    ``comfy.samplers.ksampler()`` is a raw lookup into
    ``comfy.k_diffusion.sampling`` and raises AttributeError for the
    non-k_diffusion names the stock node accepts — ``sampler_object()`` maps
    ``ddim`` to euler-with-random-inpaint and ``uni_pc``/``uni_pc_bh2`` to
    ``comfy.uni_pc``. eta/BONGMATH never apply to those names
    (``_sampler_accepts_eta``/``_sampler_accepts_bongmath`` fail their lookup
    and answer False), so only the option-less branch can see them.
    """
    import comfy.samplers

    if extra_opts:
        return comfy.samplers.ksampler(sampler_name, extra_options=extra_opts, inpaint_options={})
    return comfy.samplers.sampler_object(sampler_name)


def _sample_core(
    model, *, seed, steps, cfg, sampler_name, scheduler, positive, negative,
    latent, denoise, noise_control: dict[str, Any] | None = None,
    eta: float | None = None, bongmath: bool | None = None,
):
    """``common_ksampler`` re-assembled from public ``comfy.sample`` calls so a
    custom-generated noise tensor (RNG source / seed variation) can be
    substituted for the stock CPU noise, and/or ``eta``/``bongmath`` can be
    passed via ``extra_options`` to custom samplers (RES4LYF, etc.)."""
    import comfy.sample
    import comfy.samplers
    import comfy.utils
    import latent_preview

    rng_source = "cpu"
    add_seed_noise = False
    variation_seed = 0
    weight = 0.0
    if noise_control is not None:
        rng_source = noise_control.get("rng_source", "cpu")
        add_seed_noise = bool(noise_control.get("add_seed_noise", False))
        variation_seed = int(noise_control.get("seed", 0))
        weight = float(noise_control.get("weight", 0.0))

    latent_image = latent["samples"]
    latent_image = comfy.sample.fix_empty_latent_channels(
        model, latent_image, latent.get("downscale_ratio_spacial"), latent.get("downscale_ratio_temporal"),
    )

    batch_inds = latent.get("batch_index")
    noise = _prepare_noise(latent_image, seed, rng_source, batch_inds)
    if add_seed_noise and weight > 0:
        variation = _prepare_noise(latent_image, variation_seed, rng_source, batch_inds)
        noise = _blend_noise(noise, variation, weight)

    # Build a KSampler to reuse its sigma calculation (same as common_ksampler).
    k_sampler = comfy.samplers.KSampler(
        model, steps=steps, device=model.load_device,
        sampler=sampler_name, scheduler=scheduler,
        denoise=denoise, model_options=model.model_options,
    )
    sigmas = k_sampler.sigmas

    # Create a KSAMPLER with optional eta/bongmath in extra_options.
    extra_opts: dict[str, Any] = {}
    if eta is not None and _sampler_accepts_eta(sampler_name):
        extra_opts["eta"] = eta
    if bongmath is not None and _sampler_accepts_bongmath(sampler_name):
        extra_opts["BONGMATH"] = bongmath
    sampler_instance = _build_sampler_instance(sampler_name, extra_opts)

    callback = latent_preview.prepare_callback(model, steps)
    samples = comfy.samplers.sample(
        model, noise, positive, negative, cfg, model.load_device,
        sampler_instance, sigmas, model_options=model.model_options,
        latent_image=latent_image, denoise_mask=latent.get("noise_mask"),
        callback=callback, disable_pbar=not comfy.utils.PROGRESS_BAR_ENABLED,
        seed=seed,
    )
    # Stock common_ksampler goes through comfy.sample.sample, which moves the
    # result to the intermediate device/dtype after sampling; the direct
    # comfy.samplers.sample call above skips that. Keep parity or the output
    # latent sits on the GPU (VRAM) — and stays in the model's compute dtype
    # on fp16/bf16 setups — where the stock KSampler would hand it downstream
    # on CPU as fp32.
    import comfy.model_management

    samples = samples.to(
        device=comfy.model_management.intermediate_device(),
        dtype=comfy.model_management.intermediate_dtype(),
    )
    out = latent.copy()
    out.pop("downscale_ratio_spacial", None)
    out.pop("downscale_ratio_temporal", None)
    out["samples"] = samples
    return out


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
    noise_control: dict[str, Any] | None = None,
    eta: float | None = None,
    bongmath: bool | None = None,
):
    """Sample a latent via ComfyUI's stock ``common_ksampler`` — or, when
    ``noise_control``, ``eta``, or ``bongmath`` is provided, an equivalent that
    substitutes a custom-generated noise tensor and/or passes options via
    ``extra_options`` to custom samplers (see ``_sample_core``).

    Returns a latent dict (``{"samples": ...}``).
    """
    if noise_control is not None or eta is not None or bongmath is not None:
        return _sample_core(
            model, seed=seed, steps=steps, cfg=cfg, sampler_name=sampler_name,
            scheduler=scheduler, positive=positive, negative=negative,
            latent=latent, denoise=denoise, noise_control=noise_control,
            eta=eta, bongmath=bongmath,
        )

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


def _encode(vae, image, tiled: bool = False):
    from nodes import VAEEncode, VAEEncodeTiled

    if tiled:
        return VAEEncodeTiled().encode(vae, image, tile_size=512, overlap=64)[0]
    return VAEEncode().encode(vae, image)[0]


# At most one entry, keyed by checkpoint name. CheckpointLoaderSimple goes
# through comfy.sd.load_checkpoint_guess_config, which registers the model
# with comfy's model management — VRAM offloading between the base and hires
# models is core's job; this cache only pins system RAM for one extra
# checkpoint so switching hires settings doesn't re-read GBs from disk on
# every queue (the original efficiency-nodes kept its own cache=1 for the
# same reason).
_HIRES_CKPT_CACHE: dict[str, Any] = {}


def _load_checkpoint_raw(ckpt_name: str):
    from nodes import CheckpointLoaderSimple

    return CheckpointLoaderSimple().load_checkpoint(ckpt_name)[0]


def load_hires_checkpoint(ckpt_name: str):
    """Return the MODEL for ``ckpt_name``, cached (single entry). Raises on failure."""
    if ckpt_name in _HIRES_CKPT_CACHE:
        return _HIRES_CKPT_CACHE[ckpt_name]
    model = _load_checkpoint_raw(ckpt_name)
    _HIRES_CKPT_CACHE.clear()  # drop the previous checkpoint ref so it can be freed
    _HIRES_CKPT_CACHE[ckpt_name] = model
    return model


def _preprocess_hint(image, preprocessor: str):
    """Run the selected hint preprocessor. Only comfy-built-ins — no extra deps."""
    if preprocessor == "canny":
        from comfy_extras.nodes_canny import Canny

        return Canny.execute(image, 0.4, 0.8)[0]
    return image


def _apply_controlnet(positive, control_net, hint, strength: float):
    from nodes import ControlNetApply

    return ControlNetApply().apply_controlnet(positive, control_net, hint, strength)[0]


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
    tiled: bool = False,
    noise_control: dict[str, Any] | None = None,
    eta: float | None = None,
    bongmath: bool | None = None,
) -> tuple[Any, list[str]]:
    """Run the HighRes-fix upscale + re-sample pass.

    Returns ``(latent, warnings)``. On any recoverable problem the original
    latent is returned with a warning message rather than raising.
    """
    from nodes import LatentUpscaleBy

    warnings: list[str] = []

    upscale_type = hiresfix.get("upscale_type", "latent")
    hires_ckpt_name = str(hiresfix.get("hires_ckpt_name") or "(use same)")
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
    preprocessor = str(hiresfix.get("preprocessor", "none"))

    if iterations <= 0 or upscale_by <= 0:
        return latent, warnings

    needs_pixels = upscale_type in ("pixel", "both")
    if needs_pixels and vae is None:
        warnings.append("HighRes-fix: pixel upscale needs a VAE — skipped.")
        return latent, warnings
    if needs_pixels and not pixel_upscaler:
        warnings.append("HighRes-fix: no pixel upscale model selected — skipped.")
        return latent, warnings

    if upscale_type == "pixel":
        # Pure pixel upscale, single shot — no re-sample, matching
        # efficiency-nodes' HiRes-Fix Script (which never resamples here).
        if hires_ckpt_name != "(use same)":
            warnings.append("HighRes-fix: hires checkpoint is ignored in pixel mode (no re-sample).")
        image = _decode(vae, latent, tiled=tiled)
        try:
            image = _pixel_upscale(image, pixel_upscaler, upscale_by)
        except Exception as exc:  # pragma: no cover - depends on installed models
            warnings.append(f"HighRes-fix: pixel upscale failed ({exc}).")
            return latent, warnings
        return _encode(vae, image, tiled=tiled), warnings

    # Resample paths ("latent"/"both") honour the hires checkpoint choice.
    pass_model = model
    if hires_ckpt_name != "(use same)":
        try:
            pass_model = load_hires_checkpoint(hires_ckpt_name)
        except Exception as exc:  # pragma: no cover - depends on installed models
            warnings.append(
                f"HighRes-fix: checkpoint '{hires_ckpt_name}' failed to load ({exc}) — using base model."
            )

    for i in range(iterations):
        seed = base_seed if use_same_seed else hires_seed + i

        # 1) Upscale.
        if upscale_type == "latent":
            latent = LatentUpscaleBy().upscale(latent, latent_upscaler, upscale_by)[0]
        else:  # "both"
            image = _decode(vae, latent, tiled=tiled)
            try:
                image = _pixel_upscale(image, pixel_upscaler, upscale_by)
            except Exception as exc:  # pragma: no cover - depends on installed models
                warnings.append(f"HighRes-fix: pixel upscale failed ({exc}).")
                return latent, warnings
            latent = _encode(vae, image, tiled=tiled)

        # 2) Optional ControlNet conditioning off the upscaled image.
        pass_positive = positive
        if control_net is not None:
            try:
                hint = _decode(vae, latent, tiled=tiled) if vae is not None else None
                if hint is not None:
                    hint = _preprocess_hint(hint, preprocessor)
                    pass_positive = _apply_controlnet(positive, control_net, hint, strength)
                else:
                    warnings.append("HighRes-fix: ControlNet needs a VAE — skipped.")
            except Exception as exc:  # pragma: no cover
                warnings.append(f"HighRes-fix: ControlNet apply failed ({exc}).")

        # 3) Re-sample at the hires settings.
        latent = sample_unified(
            pass_model, seed=seed, steps=hires_steps, cfg=cfg,
            sampler_name=sampler_name, scheduler=scheduler,
            positive=pass_positive, negative=negative, latent=latent,
            denoise=denoise, noise_control=noise_control, eta=eta,
            bongmath=bongmath,
        )

    return latent, warnings
