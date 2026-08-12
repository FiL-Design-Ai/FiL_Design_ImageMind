"""FiL KSampler — a lean V3 port of efficiency-nodes' KSampler (Efficient).

Samples a latent with the full set of ComfyUI samplers and schedulers, echoes
the model/conditioning/vae through, optionally VAE-decodes a preview, and can
run a HighRes-fix pass when a ``FiLHighResFix`` script is connected.
"""

import logging

from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_SAMPLING
from ..common.io_types import FilHiresScript
from ..common.localization import t

logger = logging.getLogger(f"{BRAND}.KSampler")

# Sampler/scheduler lists are read lazily in define_schema() (not at import
# time) so that custom nodes which extend KSampler.SAMPLERS/SCHEDULERS after
# this module loads — e.g. RES4LYF, Efficiency Nodes — are included.
_PREVIEW_METHODS = ["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"]
_VAE_DECODE = ["true", "true (tiled)", "false"]

try:
    from nodes import PreviewImage as _PreviewImageV1

    _preview_saver = _PreviewImageV1()
except Exception:  # pragma: no cover
    _preview_saver = None


class FiLKSampler(io.ComfyNode):
    @classmethod
    def _sampler_list(cls):
        try:
            import comfy.samplers as _samplers
            return list(_samplers.KSampler.SAMPLERS), list(_samplers.KSampler.SCHEDULERS)
        except Exception:
            return ["euler"], ["normal"]

    @classmethod
    def define_schema(cls):
        samplers, schedulers = cls._sampler_list()
        return io.Schema(
            node_id="FiLKSampler",
            display_name="⚡ KSampler",
            category=CATEGORY_SAMPLING,
            description="⚡ FiL KSampler — full-featured sampler with every ComfyUI sampler and scheduler, passthrough outputs, built-in preview, and optional HighRes-fix script.",
            inputs=[
                io.Model.Input("model", tooltip=t("ks_model", "Diffusion model to sample with.")),
                io.Int.Input("seed", default=0, min=0, max=0xFFFFFFFFFFFFFFFF, control_after_generate=True,
                             tooltip=t("ks_seed", "Noise seed.")),
                io.Int.Input("steps", default=20, min=1, max=10000,
                             tooltip=t("ks_steps", "Number of denoising steps.")),
                io.Float.Input("cfg", default=7.0, min=0.0, max=100.0, step=0.1,
                               tooltip=t("ks_cfg", "Classifier-free guidance scale.")),
                io.Combo.Input("sampler_name", options=samplers, default=samplers[0],
                               tooltip=t("ks_sampler", "Sampling algorithm.")),
                io.Combo.Input("scheduler", options=schedulers, default=schedulers[0],
                               tooltip=t("ks_scheduler", "Noise schedule.")),
                io.Conditioning.Input("positive", tooltip=t("ks_positive", "Positive conditioning.")),
                io.Conditioning.Input("negative", tooltip=t("ks_negative", "Negative conditioning.")),
                io.Latent.Input("latent", tooltip=t("ks_latent", "Latent to denoise.")),
                io.Float.Input("denoise", default=1.0, min=0.0, max=1.0, step=0.01,
                               tooltip=t("ks_denoise", "Denoise strength (1.0 = full).")),
                io.Float.Input("eta", default=1.0, min=0.0, max=100.0, step=0.01,
                               tooltip=t("ks_eta", "Noise multiplier for ancestral/SDE samplers (1.0 = standard, 0.0 = deterministic).")),
                io.Boolean.Input("bongmath", default=True, label_on="ON", label_off="OFF", advanced=True,
                                 tooltip=t("ks_bongmath", "Enable bongmath implicit correction for RES4LYF samplers (ignored by standard samplers).")),
                io.Combo.Input("preview_method", options=_PREVIEW_METHODS, default="auto",
                               tooltip=t("ks_preview", "How the live sampling preview is rendered.")),
                io.Combo.Input("vae_decode", options=_VAE_DECODE, default="true",
                               tooltip=t("ks_vae_decode", "Decode the result to an IMAGE preview/output. Needs a VAE.")),
                io.Vae.Input("vae", optional=True,
                             tooltip=t("ks_vae", "VAE for decoding the preview/output image.")),
                FilHiresScript.Input("script", optional=True,
                                     tooltip=t("ks_script", "Optional FiL HighRes-fix script to run after sampling.")),
            ],
            outputs=[
                io.Model.Output("model", display_name="model", tooltip="Passthrough model."),
                io.Conditioning.Output("positive", display_name="positive", tooltip="Passthrough positive conditioning."),
                io.Conditioning.Output("negative", display_name="negative", tooltip="Passthrough negative conditioning."),
                io.Latent.Output("latent", display_name="latent", tooltip="Sampled latent."),
                io.Vae.Output("vae", display_name="vae", tooltip="Passthrough VAE."),
                io.Image.Output("image", display_name="image", tooltip="Decoded image (empty if VAE decode is off)."),
            ],
            search_aliases=["ksampler", "sampler", "efficient", "sample", "generate", "denoise"],
            hidden=[io.Hidden.prompt, io.Hidden.extra_pnginfo, io.Hidden.unique_id],
            # The node doubles as a preview node; keep it alive even when the
            # IMAGE output is left unconnected so execute() still runs.
            is_output_node=True,
        )

    @classmethod
    def _reject_unknown_choices(cls, sampler_name, scheduler):
        """Fail loudly when a linked sampler/scheduler name is not installed.

        Both widgets expose an input socket (KSAMPLER_SOCKET_INPUTS in
        nodes2/nodes/ksampler.ts), so these two can arrive as an arbitrary
        string from upstream instead of being picked from the combo. ComfyUI
        validates combo *widget* values against the schema, but a linked input
        is only type-checked — the string goes straight through to
        comfy.samplers, which indexes its tables by it and raises a bare
        KeyError several frames deep. Say what was wrong and what is available.

        Deliberately re-reads the lists here rather than calling
        `_sampler_list()`: that helper answers `["euler"], ["normal"]` when the
        import fails, and validating against a two-item fallback would reject
        every real name. No lists means no check.
        """
        try:
            import comfy.samplers as _samplers

            allowed = {
                "sampler_name": list(_samplers.KSampler.SAMPLERS),
                "scheduler": list(_samplers.KSampler.SCHEDULERS),
            }
        except Exception:  # pragma: no cover — sampling will fail on its own terms
            return
        for name, value in (("sampler_name", sampler_name), ("scheduler", scheduler)):
            if value not in allowed[name]:
                raise ValueError(
                    f"⚡ KSampler: {name} = {value!r} is not installed. "
                    f"Available: {', '.join(allowed[name])}"
                )

    @staticmethod
    def _empty_image():
        import torch

        return torch.zeros((1, 1, 1, 3), dtype=torch.float32)

    @staticmethod
    def _set_preview_method(override):
        """Override (override=str) or restore (override=None) comfy's global
        live-preview method. Best-effort — never fails sampling."""
        try:
            import latent_preview

            latent_preview.set_preview_method(override)
        except Exception:
            pass

    @classmethod
    def execute(cls, model, seed, steps, cfg, sampler_name, scheduler, positive, negative,
                latent=None, denoise=1.0, eta=1.0, bongmath=True, preview_method="auto", vae_decode="true",
                vae=None, script=None, **kwargs) -> io.NodeOutput:
        from ..common.sampling import sample_unified

        # `latent_image`/`optional_vae` were renamed to match the outputs they
        # pair with. Workflows saved against the old names address inputs by
        # name in the API format, so keep accepting them.
        if latent is None:
            latent = kwargs.get("latent_image")
        if vae is None:
            vae = kwargs.get("optional_vae")

        cls._reject_unknown_choices(sampler_name, scheduler)

        if vae is None:
            vae_decode = "false"
        # Tiled VAE is an OOM guard for big upscales; it applies to the hires
        # pass's internal decodes/encodes too, not just the final preview.
        # With vae_decode == "false" the hires pass still decodes when it
        # must — just non-tiled (the flag comes only from "true (tiled)").
        tiled = vae_decode == "true (tiled)"

        # Honour the preview_method widget by overriding ComfyUI's global live
        # previewer for the duration of sampling, then restoring it.
        # "vae_decoded_only" has no live-preview equivalent (the final decoded
        # image below is what it wants), so map it to no intermediate preview.
        cls._set_preview_method("none" if preview_method == "vae_decoded_only" else preview_method)
        noise_control = script.get("noise_control") if isinstance(script, dict) else None
        try:
            # 1) Base sampling.
            latent = sample_unified(
                model, seed=seed, steps=steps, cfg=cfg,
                sampler_name=sampler_name, scheduler=scheduler,
                positive=positive, negative=negative, latent=latent,
                denoise=denoise, noise_control=noise_control, eta=eta,
                bongmath=bongmath,
            )

            # 2) Optional HighRes-fix pass.
            hires_warnings: list[str] = []
            if isinstance(script, dict) and "hiresfix" in script:
                from ..common.sampling import apply_hiresfix

                latent, hires_warnings = apply_hiresfix(
                    script["hiresfix"],
                    model=model, positive=positive, negative=negative, vae=vae,
                    latent=latent, base_seed=seed, cfg=cfg,
                    sampler_name=sampler_name, scheduler=scheduler, tiled=tiled,
                    noise_control=noise_control, eta=eta,
                    bongmath=bongmath,
                )
        finally:
            cls._set_preview_method(None)
        for msg in hires_warnings:
            # Through the logger, not print: these obey the pack's log level
            # (common/base.py, the /log_level route), which a bare print did not.
            logger.warning("%s", msg)

        # 3) Optional VAE decode + preview.
        ui_data: dict = {"images": []}
        if vae_decode != "false":
            from ..common.sampling import _decode

            image = _decode(vae, latent, tiled=tiled)
            if _preview_saver is not None:
                try:
                    # Through `cls.hidden`, not parameters: the V3 executor
                    # never passes a hidden value as an argument, so `prompt`
                    # and `extra_pnginfo` were always None here and the saved
                    # preview carried no workflow.
                    saved = _preview_saver.save_images(
                        image, "fil.ksampler", cls.hidden.prompt, cls.hidden.extra_pnginfo,
                    )
                    ui_data["images"] = saved["ui"]["images"]
                except Exception as exc:
                    # Still best-effort — a preview is not worth failing a
                    # finished sample over — but no longer silent. This branch
                    # swallowed an AttributeError for as long as `cls.hidden`
                    # was read wrongly, and the only visible symptom was a
                    # preview that stopped appearing.
                    logger.warning("Preview could not be saved (%s); the sample itself is fine.", exc)
        else:
            image = cls._empty_image()

        return io.NodeOutput(model, positive, negative, latent, vae, image, ui=ui_data)
