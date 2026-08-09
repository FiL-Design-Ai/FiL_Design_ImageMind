import hashlib
import json
from datetime import datetime, timezone
from typing import Any

from comfy_api.latest import io

from ..common.base import FiLError, VisionNotAvailableError
from ..common.brand import CATEGORY_ROOT
from ..common.clean_output import clean_output
from ..common.config import get_config, is_model_vision_capable
from ..common.data import (
    DETAIL_LEVELS,
    LANGUAGES,
    MODEL_TYPE_OPTIONS,
    NSFW_STYLE_OVERLAY,
    PROMPT_MODE_OPTIONS,
    VIDEO_ASPECT_OPTIONS,
    VIDEO_CAMERA_OPTIONS,
    VIDEO_DURATION_MAX,
    VIDEO_SOUND_OPTIONS,
    clamp_video_duration,
    default_detail_level,
    first_or_default,
    get_agent_output_mode,
    get_default_agent_key,
    get_default_focus_key,
    get_visible_agent_keys,
    get_visible_focus_keys,
    get_visible_style_keys,
    is_video_model_type,
    migrate_legacy_agent,
    model_needs_prompt_post_conversion,
    resolve_agent_key,
    resolve_focus_key,
)
from ..common.io_types import FilDict, FilProviderConfig
from ..common.localization import t
from ..common.logic import PromptGenerator, StyleManager
from ..common.data import get_effective_response_format
from ..common.model_prompt_adapters import append_response_format_instruction, post_convert_prompt
from ..common.models import ModelClient
from ..common.processing import ImageProcessor, is_valid_model_name, normalize_model_name
from ..common.progress import FilProgress
from ..common.provider_resilience import is_timeout_error, sanitize_sensitive_data
from ..common.provider_runtime import safe_provider_error, unload_local_model
from ..common.style_enforcer import StyleEnforcer

_processor = ImageProcessor()
_style_manager = StyleManager()
_prompt_gen = PromptGenerator()
_model_client = ModelClient()
_style_enforcer = StyleEnforcer()
_AGENT_KEYS = get_visible_agent_keys()
_FOCUS_KEYS = get_visible_focus_keys()


def _coerce_dimension(value: Any) -> int:
    """Sanitize a linked width/height into a plain, non-negative int.

    `width`/`height` are socket-only inputs, so their value is whatever the
    upstream node produced: `None` when that node passed nothing through, or a
    float from anything doing resolution math. `compute_aspect_ratio_info()`
    compares against 0 and would raise on `None`.
    """
    try:
        number = int(value)
    except (TypeError, ValueError):
        return 0
    return number if number > 0 else 0


class FiLOpticScanner(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLOpticScanner",
            display_name="🕵️ Optic Scanner",
            category=f"{CATEGORY_ROOT}/LLM",
description=(
            "👁️ Optic Scanner — analyzes images with LLM vision models and generates "
            "optimized prompts for Z-Image, FLUX, SDXL, QWEN, Krea 2, and Ideogram 4."
        ),
            inputs=[
                FilProviderConfig.Input("config", tooltip=t("tt_config", "Config from Provider Loader node.")),
                io.Combo.Input("agent", options=_AGENT_KEYS, default=get_default_agent_key(),
                               tooltip=t("tt_agent", "Subject domain — what is in the frame.")),
                io.Combo.Input("agent_focus", options=_FOCUS_KEYS, default=get_default_focus_key(), advanced=True,
                               tooltip=t("tt_agent_focus", "Craft layer to weigh heavier on top of the agent: composition, light, fine detail, or cinematic read.")),
                io.Image.Input("image", optional=True, tooltip=t("tt_image", "Image(s) to analyze. If connected, sent to vision LLM. Otherwise the prompt text below is sent as standalone text input.")),
                # `force_input`: sockets only, no widget behind them, so the target
                # resolution comes from whatever already knows it in the graph
                # (Empty Latent Image's width/height, a resolution picker, …)
                # instead of being retyped in the panel. Declared here so they sit
                # with `config`/`image` at the top of the node.
                io.Int.Input("width", default=0, min=0, max=16384, step=8, optional=True, force_input=True,
                             tooltip=t("tt_width", "Target image width in pixels. Helps tailor prompt composition to aspect ratio if > 0.")),
                io.Int.Input("height", default=0, min=0, max=16384, step=8, optional=True, force_input=True,
                             tooltip=t("tt_height", "Target image height in pixels. Helps tailor prompt composition to aspect ratio if > 0.")),
                io.String.Input("prompt", default="", multiline=True, optional=True, tooltip=t("tt_prompt", "Without an image — the idea itself, expanded into a finished prompt. With an image — what to focus on and what the text is for; subject, pose and object count come from the image and cannot be changed here. Details: docs/scanner-prompts.md")),
                io.String.Input("negative_prompt", default="", multiline=True, optional=True, tooltip=t("tt_neg_prompt", "Removes words from the generated text, not objects from the image. Short nouns, comma-separated. Under FLUX / Z-Image Turbo / Krea 2 / Ideogram 4 / Video the list is flipped into positive wording. Details: docs/scanner-prompts.md"), advanced=True),
                io.Combo.Input("detail_level", options=list(DETAIL_LEVELS), default=default_detail_level(DETAIL_LEVELS), advanced=True,
                               tooltip=t("tt_detail", "How much detail to include in the generated description.")),
                io.Combo.Input("language", options=LANGUAGES, default=first_or_default(LANGUAGES, "ru"), advanced=True,
                               tooltip=t("tt_lang", "Language of the generated prompt/description.")),
                io.Combo.Input("model_type", options=list(MODEL_TYPE_OPTIONS), default="Auto/None", advanced=True,
                               tooltip=t("tt_model_type", "Target generation model — adjusts prompt syntax, length, and format. Video is a universal profile for video models.")),
                # Video shot parameters — the panel shows these four only when
                # model_type is a video profile. All default to Auto, which
                # injects nothing, so non-video runs are byte-identical.
                io.Int.Input("video_duration", default=0, min=0, max=VIDEO_DURATION_MAX, step=1, advanced=True,
                             tooltip=t("tt_video_duration", "Requested clip length in seconds. 0 = Auto (the LLM decides). Range narrows to the model's API limits — MiniMax H3 accepts 4-15 whole seconds.")),
                io.Combo.Input("video_aspect", options=list(VIDEO_ASPECT_OPTIONS), default="Auto", advanced=True,
                               tooltip=t("tt_video_aspect", "Aspect ratio written into the shot framing (for MiniMax H3 — into the timeline header line). Auto leaves it to the LLM.")),
                io.Combo.Input("video_sound", options=list(VIDEO_SOUND_OPTIONS), default="Auto", advanced=True,
                               tooltip=t("tt_video_sound", "Sound design mode. Off = silent clip (no sound clause); Layered = mandatory ambience + foley + music clause for audio-capable models.")),
                io.Combo.Input("video_camera", options=list(VIDEO_CAMERA_OPTIONS), default="Auto", advanced=True,
                               tooltip=t("tt_video_camera", "Preferred camera move. The LLM builds the shot around it and may adapt per story stage — it is a preference, not a hard lock.")),
                io.Combo.Input("prompt_mode", options=PROMPT_MODE_OPTIONS, default="Auto", advanced=True,
                               tooltip=t("tt_prompt_mode", "Auto picks Hybrid or Two-Stage depending on whether a style is selected.")),
                io.Combo.Input("photo_style", options=["None"] + get_visible_style_keys("photo_style"), default="None", advanced=True,
                               tooltip=t("tt_photo_style", "Photographic style overlay applied on top of the base description.")),
                io.Combo.Input("nsfw_photo_style", options=["None"] + get_visible_style_keys("nsfw_photo_style"), default="None", advanced=True,
                               tooltip=t("tt_nsfw_photo_style", "Adult-only photographic style overlay (alternative to Photo style).")),
                io.Combo.Input("art_style", options=["None"] + get_visible_style_keys("art_style"), default="None", advanced=True,
                               tooltip=t("tt_art_style", "Art style overlay applied on top of the base description.")),
                io.Combo.Input("nsfw_art_style", options=["None"] + get_visible_style_keys("nsfw_art_style"), default="None", advanced=True,
                               tooltip=t("tt_nsfw_art_style", "Adult-only art style overlay (alternative to Art style).")),
                io.String.Input("custom_style", default="", multiline=True, optional=True, advanced=True,
                                tooltip=t("tt_custom_style", "Free-form style text appended after the preset style overlay, if any.")),
                io.Int.Input("seed", default=-1, min=-1, max=999999999999, advanced=True,
                             tooltip=t("tt_provider_seed", "Provider-side generation seed, if supported. -1 lets the provider pick one.")),
                io.Combo.Input("response_format", options=["text", "tags", "json"], default="text", advanced=True,
                               tooltip=t("tt_response_format", "Output shape: prose text, flat comma-separated tags, or a JSON object.")),
            ],
            outputs=[
                io.String.Output(display_name="prompt", tooltip="Generated prompt text."),
                io.String.Output(display_name="metadata_json", tooltip="JSON metadata string."),
                FilDict.Output(display_name="metadata_dict", tooltip="Parsed metadata dict."),
            ],
            search_aliases=["scanner", "vision", "image analysis", "prompt generator", "describe"],
            # A batch is scanned one image at a time and reports progress per
            # image, which needs the node's own id.
            hidden=[io.Hidden.unique_id],
        )

    @classmethod
    def validate_inputs(cls, config=None, **_kwargs):
        if config is None:
            return True
        if not isinstance(config, dict):
            return "Config must be a dict from Provider Loader."
        if "provider" not in config or "model" not in config:
            return "Config is missing 'provider' or 'model'. Connect a Provider Loader."
        provider = config.get("provider", "")
        model = config.get("model", "")
        if not provider or not isinstance(provider, str):
            return "Invalid provider in config."
        if not is_valid_model_name(model):
            return f"Invalid or placeholder model ('{model}') in config. Please select a valid model in Provider Loader."
        return True

    @classmethod
    def fingerprint_inputs(cls, config=None, agent="None", agent_focus="None", image=None, prompt="", negative_prompt="",
                           detail_level="normal", language="ru", model_type="Auto/None",
                           prompt_mode="Auto", photo_style="None", nsfw_photo_style="None",
                           art_style="None", nsfw_art_style="None", custom_style="", seed=-1,
                           response_format="text", width=0, height=0,
                           video_duration=0, video_aspect="Auto", video_sound="Auto", video_camera="Auto",
                           **kwargs) -> Any:
        image_key: Any = None
        if image is not None:
            try:
                # `id(image)` changes whenever an upstream node hands back a
                # freshly-allocated tensor with identical pixel content (common
                # on re-execution), which spuriously invalidated the cache and
                # made "Fixed" seed mode still re-call the LLM. Slice/flatten
                # before `.cpu()` so this stays cheap even on large batches.
                # Every frame contributes, not just image[0]: execute() processes
                # the whole batch, so hashing only the first frame returned a
                # stale cached prompt whenever frames 2..N changed but frame 1
                # stayed the same.
                digest = hashlib.md5(usedforsecurity=False)
                for frame in range(image.shape[0]):
                    digest.update(image[frame].flatten()[:256].cpu().numpy().tobytes())
                image_key = (tuple(image.shape), digest.hexdigest())
            except Exception:
                image_key = id(image)
        return hash((
            # `temperature`/`max_tokens`/`rate_limit_ms` are sourced from `config`
            # at execute() time (see below) rather than being real widget inputs —
            # `str(config)` already covers their contribution to the fingerprint.
            str(config), agent, agent_focus, prompt, negative_prompt, detail_level, language,
            model_type, prompt_mode, photo_style, nsfw_photo_style, art_style, nsfw_art_style, custom_style,
            seed, response_format, width, height,
            video_duration, video_aspect, video_sound, video_camera,
            image_key,
        ))

    @classmethod
    def _run_one_pass(cls, provider, model, system_prompt, style_block, custom_style,
                      nsfw_active, style_kwargs, style_key, user_message, images_b64,
                      temperature, seed, max_tokens, response_format,
                      model_type, prompt, effective_mode, hybrid_timeout,
                      two_stage_timeout, agent_key="None", detail_level="normal",
                      language="ru", rate_limit_ms=100, contract=None, enforcement="",
                      width=0, height=0, focus_key="None", has_image=True,
                      neg_clause="", video_duration=0, video_aspect="Auto",
                      video_sound="Auto", video_camera="Auto"):
        fb = None
        if effective_mode == "Two-Stage" and style_block.strip():
            bundle = _prompt_gen.build_system_prompt_two_stage_bundle(
                agent_key=agent_key,
                detail_level=detail_level,
                language=language,
                model_type=model_type,
                width=width,
                height=height,
                focus_key=focus_key,
                has_image=has_image,
                response_format=response_format,
                video_duration=video_duration,
                video_aspect=video_aspect,
                video_sound=video_sound,
                video_camera=video_camera,
                **style_kwargs,
            )
            stage1_sys = bundle["stage1"]["prompt"]
            stage2_sys = bundle["stage2"]["prompt"]
            # The bundle returns the language rule separately: stage 1 gets it
            # right away (no overlays land on stage 1), stage 2 receives it
            # only after its overlays below.
            language_hint = bundle["language_hint"]
            stage1_sys = f"{stage1_sys}\n\n{language_hint}"
            if nsfw_active and style_block.strip():
                stage2_sys = f"{stage2_sys}\n\n{NSFW_STYLE_OVERLAY}"
            if custom_style and custom_style.strip():
                stage2_sys = f"{stage2_sys}\n\nCustom style override:\n{custom_style.strip()}"

            try:
                description = _model_client.generate(
                    provider=provider, model=model,
                    system_prompt=stage1_sys,
                    user_prompt=user_message,
                    images=images_b64,
                    temperature=temperature, seed=seed,
                    max_tokens=max_tokens,
                    response_format=response_format,
                    timeout=two_stage_timeout,
                    rate_limit_ms=rate_limit_ms,
                )
            except Exception as stage1_exc:
                if is_timeout_error(stage1_exc):
                    fb = "two_stage_stage1_timeout"
                    return cls._hybrid_call(provider, model, system_prompt, user_message, images_b64,
                                            temperature, seed, max_tokens, response_format,
                                            hybrid_timeout, rate_limit_ms), fb, contract, {
                        "system": system_prompt, "user": user_message,
                    }
                raise

            # Now that stage 1's raw (unstyled) description exists, resolve the
            # REAL preset-support contract against it — the earlier `contract`
            # (computed in execute() before any generation ran) always analyzed
            # an empty support_text and was architecturally inert. This is the
            # only point in the pipeline where a "does the source actually
            # support this style?" check is possible.
            resolved_contract = contract
            if style_block.strip():
                resolved_contract = _style_enforcer.resolve_style_contract(
                    style_block, style_key=style_key, support_text=description,
                )
                if enforcement:
                    stage2_sys = f"{stage2_sys}\n\n{enforcement}"
                support_block = _style_enforcer.build_preset_support_block(
                    style_block, style_key=style_key, support_text=description,
                    support_mode=resolved_contract.get("support_mode") or "",
                )
                if support_block:
                    stage2_sys = f"{stage2_sys}\n\n{support_block}"
            # Language rule closes stage 2 as well — after every overlay — or
            # the English style text stacked above it pulls the rewrite into
            # English (stage 2 is what writes the answer the user keeps).
            stage2_sys = f"{stage2_sys}\n\n{language_hint}"

            # `seed >= 0`, not `seed > 0`: 0 is a valid fixed seed — the widget
            # allows it (min=-1), stage 1 passes it through and ModelClient caches
            # on `seed >= 0`. Using `> 0` sent stage 2 a random seed when the user
            # fixed seed=0, silently breaking two-stage reproducibility.
            second_seed = seed + 1 if seed >= 0 else -1
            stage2_user = _prompt_gen.build_stage2_user_prompt(
                description, prompt, detail_level=detail_level,
                model_type=model_type,
            )
            stage2_user = append_response_format_instruction(stage2_user, model_type, response_format)
            # Stage 2 is where the text the user actually receives gets written,
            # so the negative clause has to be repeated here: carrying it only in
            # stage 1 let the rewrite reintroduce whatever was banned.
            if neg_clause:
                stage2_user = f"{stage2_user}\n\n{neg_clause}"
            try:
                stage2_result = _model_client.generate(
                    provider=provider, model=model,
                    system_prompt=stage2_sys,
                    user_prompt=stage2_user,
                    images=[],
                    temperature=temperature, seed=second_seed,
                    max_tokens=max_tokens,
                    response_format=response_format,
                    timeout=two_stage_timeout,
                    rate_limit_ms=rate_limit_ms,
                )
            except Exception as stage2_exc:
                if is_timeout_error(stage2_exc):
                    fb = "two_stage_stage2_timeout"
                    return cls._hybrid_call(provider, model, system_prompt, user_message, images_b64,
                                            temperature, seed, max_tokens, response_format,
                                            hybrid_timeout, rate_limit_ms), fb, resolved_contract, {
                        "system": system_prompt, "user": user_message,
                    }
                raise
            if not stage2_result or len(stage2_result.strip()) < 10:
                fb = "stage2_empty_using_stage1"
                return description, fb, resolved_contract, {"system": stage1_sys, "user": user_message}
            return stage2_result, fb, resolved_contract, {"system": stage2_sys, "user": stage2_user}
        return cls._hybrid_call(provider, model, system_prompt, user_message, images_b64,
                                temperature, seed, max_tokens, response_format,
                                hybrid_timeout, rate_limit_ms), None, contract, {
            "system": system_prompt, "user": user_message,
        }

    @classmethod
    def _hybrid_call(cls, provider, model, system_prompt, user_message, images_b64,
                     temperature, seed, max_tokens, response_format, timeout, rate_limit_ms=100):
        return _model_client.generate(
            provider=provider, model=model,
            system_prompt=system_prompt,
            user_prompt=user_message,
            images=images_b64,
            temperature=temperature, seed=seed,
            max_tokens=max_tokens,
            response_format=response_format,
            timeout=timeout,
            rate_limit_ms=rate_limit_ms,
        )

    @classmethod
    def execute(cls, config, agent="None", agent_focus="None", image=None, prompt="", negative_prompt="",
                detail_level="normal", language="ru", model_type="Auto/None",
                prompt_mode="Auto", photo_style="None", nsfw_photo_style="None",
                art_style="None", nsfw_art_style="None", custom_style="", seed=-1,
                response_format="text", width=0, height=0,
                video_duration=0, video_aspect="Auto", video_sound="Auto", video_camera="Auto",
                **kwargs) -> io.NodeOutput:
        t0 = datetime.now(timezone.utc)
        width, height = _coerce_dimension(width), _coerce_dimension(height)
        # Hidden video values persist in the workflow after a model switch, so
        # gate them on the CURRENT model_type: switching back to an image model
        # must produce exactly the pre-widget prompt. Duration is clamped into
        # the active profile's range (H3: 4-15, the API hard limit).
        if is_video_model_type(model_type):
            eff_video_duration = clamp_video_duration(model_type, video_duration)
            eff_video_aspect = str(video_aspect or "Auto")
            eff_video_sound = str(video_sound or "Auto")
            eff_video_camera = str(video_camera or "Auto")
        else:
            eff_video_duration, eff_video_aspect, eff_video_sound, eff_video_camera = 0, "Auto", "Auto", "Auto"
        try:
            raw_video_duration = int(video_duration)
        except (TypeError, ValueError):
            raw_video_duration = 0
        video_duration_clamped = (
            is_video_model_type(model_type)
            and raw_video_duration > 0
            and raw_video_duration != eff_video_duration
        )
        provider = config.get("provider", "ollama")
        model = normalize_model_name(config.get("model", ""))
        # Provider Loader owns temperature/max_tokens/rate_limit_ms — Scanner has
        # no widgets of its own for them, so they must come from `config`, not
        # from a hardcoded default (previously always 0.7/1024, config ignored).
        temperature = config.get("temperature", 0.7)
        raw_max_tokens = config.get("max_tokens")
        if raw_max_tokens is None:
            max_tokens = 1024
        elif raw_max_tokens == 0:
            max_tokens = None
        else:
            max_tokens = raw_max_tokens
        rate_limit_ms = config.get("rate_limit_ms", 100)

        if not model:
            return io.NodeOutput("Ошибка: модель не выбрана в Provider Loader.", "{}", {})
        if not is_valid_model_name(model):
            return io.NodeOutput("Ошибка: в Provider Loader не выбрана действующая модель.", "{}", {})

        has_image = image is not None
        has_text = bool(prompt.strip())

        if not has_image and not has_text:
            return io.NodeOutput("Ошибка: подключи изображение или введи текст.", "{}", {})

        # Not from kwargs: a hidden value reaches a V3 node through `cls.hidden`
        # and nowhere else, so this was always None and the per-image progress
        # below never ran — which is also why the broken call inside it went
        # unnoticed.
        unique_id = cls.hidden.unique_id

        vision = is_model_vision_capable(provider, model)
        if has_image and not vision:
            err = VisionNotAvailableError(model)
            message = f"модель '{model}' не поддерживает анализ изображений."
            err_meta = {"error_code": err.code, "message": message, "model": model}
            return io.NodeOutput(f"Ошибка: {message}", json.dumps(err_meta, ensure_ascii=False), err_meta)

        # A workflow saved before the agent list was split into
        # agent + focus + response_format can still carry a retired agent name.
        # Map it onto the new axes instead of letting it fall back to the
        # neutral agent, which would quietly change what that workflow produces.
        legacy_agent, legacy_focus, legacy_format = migrate_legacy_agent(agent)
        if legacy_agent is not None:
            agent = legacy_agent
        if legacy_focus is not None and resolve_focus_key(agent_focus) == "None":
            agent_focus = legacy_focus
        if legacy_format is not None and response_format == "text":
            response_format = legacy_format

        agent_key = resolve_agent_key(agent)
        focus_key = resolve_focus_key(agent_focus)
        style_kwargs = dict(
            photo_style=photo_style, nsfw_photo_style=nsfw_photo_style,
            art_style=art_style, nsfw_art_style=nsfw_art_style,
        )
        active_keys = [v for v in (photo_style, nsfw_photo_style, art_style, nsfw_art_style) if v and v != "None"]
        style_key = " | ".join(active_keys) if active_keys else ""
        nsfw_active = bool(
            (nsfw_photo_style and nsfw_photo_style != "None")
            or (nsfw_art_style and nsfw_art_style != "None")
        )

        system_prompt, base_prompt, style_block, language_hint = _prompt_gen.build_system_prompt_bundle(
            agent_key=agent_key,
            detail_level=detail_level,
            language=language,
            model_type=model_type,
            width=width,
            height=height,
            focus_key=focus_key,
            has_image=has_image,
            response_format=response_format,
            video_duration=eff_video_duration,
            video_aspect=eff_video_aspect,
            video_sound=eff_video_sound,
            video_camera=eff_video_camera,
            **style_kwargs,
        )

        contract = None
        enforcement = ""
        if style_block.strip():
            contract = _style_enforcer.resolve_style_contract(style_block, style_key=style_key)
            enforcement = _style_enforcer.build_enforcement_block(style_block, style_key=style_key)
            if enforcement:
                system_prompt = f"{system_prompt}\n\n{enforcement}"

        if nsfw_active and style_block.strip():
            system_prompt = f"{system_prompt}\n\n{NSFW_STYLE_OVERLAY}"

        if custom_style and custom_style.strip():
            system_prompt = f"{system_prompt}\n\nCustom style override:\n{custom_style.strip()}"

        # The language rule closes the system prompt — after every style
        # overlay — because it is the instruction models drop first; the
        # bundle returns it separately for exactly this.
        system_prompt = f"{system_prompt}\n\n{language_hint}"

        user_message = _prompt_gen.build_stage1_user_prompt(prompt, has_image)
        effective_format = get_effective_response_format(model_type, response_format)
        user_message = append_response_format_instruction(user_message, model_type, effective_format)

        neg_clause = None
        try:
            from ..common.logic import negative_to_positive_clause
            neg_clause = negative_to_positive_clause(negative_prompt, model_type)
        except Exception:
            neg_clause = None
        if neg_clause:
            user_message = f"{user_message}\n\n{neg_clause}"

        images_b64 = []
        image_hash = None
        if has_image:
            with _processor.with_max_side(config.get("max_image_side", 1024)) as processor:
                try:
                    images_b64, w, h = processor.process_batch(image)
                    sample = image[0].cpu().numpy().tobytes()[:1024]
                    image_hash = hashlib.md5(sample, usedforsecurity=False).hexdigest()
                except Exception as exc:
                    err_meta = {"status": "error", "message": str(exc), "error_code": "IMAGE_PROCESSING_ERROR"}
                    return io.NodeOutput(f"Ошибка: {exc}", json.dumps(err_meta, ensure_ascii=False), err_meta)

        effective_mode = prompt_mode
        if effective_mode == "Auto":
            effective_mode = "Two-Stage" if style_block.strip() else "Hybrid"

        fallback_reason = None
        cfg = get_config()
        hybrid_timeout = cfg.get_timeout(provider, "hybrid")
        two_stage_timeout = cfg.get_timeout(provider, "two_stage")

        image_runs = []
        try:
            if has_image and len(images_b64) > 1:
                per_image_results = []
                total = len(images_b64)
                # The V3 backend (common.progress) sends the frame currently
                # being analysed to the UI alongside the bar; on hosts old
                # enough to only have the legacy ProgressBar the preview is
                # dropped.
                progress = FilProgress(total, unique_id)
                for i, b64 in enumerate(images_b64):
                    progress.update(i, preview=image[i])
                    t_image_start = datetime.now(timezone.utc)
                    single_result, single_fb, contract, sent_prompt = cls._run_one_pass(
                        provider=provider, model=model,
                        system_prompt=system_prompt,
                        style_block=style_block, custom_style=custom_style,
                        nsfw_active=nsfw_active, style_kwargs=style_kwargs,
                        style_key=style_key, user_message=user_message,
                        images_b64=[b64], temperature=temperature, seed=seed,
                        max_tokens=max_tokens, response_format=effective_format,
                        model_type=model_type, prompt=prompt,
                        effective_mode=effective_mode,
                        hybrid_timeout=hybrid_timeout,
                        two_stage_timeout=two_stage_timeout,
                        agent_key=agent_key, detail_level=detail_level,
                        language=language, rate_limit_ms=rate_limit_ms,
                        contract=contract, enforcement=enforcement,
                        width=width, height=height,
                        focus_key=focus_key, has_image=has_image,
                        neg_clause=neg_clause or "",
                        video_duration=eff_video_duration,
                        video_aspect=eff_video_aspect,
                        video_sound=eff_video_sound,
                        video_camera=eff_video_camera,
                    )
                    per_image_results.append(single_result)
                    image_runs.append({
                        "index": i,
                        "elapsed_seconds": (datetime.now(timezone.utc) - t_image_start).total_seconds(),
                        "fallback_reason": single_fb,
                    })
                result = "\n\n---\n\n".join(per_image_results)
            else:
                result, fallback_reason, contract, sent_prompt = cls._run_one_pass(
                    provider=provider, model=model,
                    system_prompt=system_prompt,
                    style_block=style_block, custom_style=custom_style,
                    nsfw_active=nsfw_active, style_kwargs=style_kwargs,
                    style_key=style_key, user_message=user_message,
                    images_b64=images_b64, temperature=temperature, seed=seed,
                    max_tokens=max_tokens, response_format=effective_format,
                    model_type=model_type, prompt=prompt,
                    effective_mode=effective_mode,
                    hybrid_timeout=hybrid_timeout,
                    two_stage_timeout=two_stage_timeout,
                    agent_key=agent_key, detail_level=detail_level,
                    language=language, rate_limit_ms=rate_limit_ms,
                    contract=contract, enforcement=enforcement,
                    width=width, height=height,
                    focus_key=focus_key, has_image=has_image,
                    neg_clause=neg_clause or "",
                    video_duration=eff_video_duration,
                    video_aspect=eff_video_aspect,
                    video_sound=eff_video_sound,
                    video_camera=eff_video_camera,
                )
        except FiLError as exc:
            clean_msg = sanitize_sensitive_data(exc.message)
            err_meta = {"status": "error", "message": clean_msg, "error_code": exc.code,
                        "provider": provider, "model": model, "details": exc.details}
            return io.NodeOutput(f"Ошибка: {clean_msg}", json.dumps(err_meta, ensure_ascii=False), err_meta)
        except Exception as exc:
            message = safe_provider_error(exc)
            error_meta = {"status": "error", "message": message, "error_code": "UNKNOWN_ERROR",
                          "provider": provider, "model": model}
            return io.NodeOutput(f"Ошибка: {message}", json.dumps(error_meta, ensure_ascii=False), error_meta)

        # The Provider Loader's unload switch: every generation path above has
        # answered, so the local model's job is done — drop it before the
        # image generation downstream claims the VRAM. Cloud providers and
        # failures inside the helper sort themselves out in there.
        if bool(config.get("unload_llm", False)):
            unload_local_model(provider, model)

        if model_needs_prompt_post_conversion(model_type, response_format):
            result, convert_meta = post_convert_prompt(
                result,
                model_type,
                response_format,
                style_text=style_block + custom_style,
                style_key=style_key,
                detail_level=detail_level,
                source_text=user_message,
                style_enforcer=_style_enforcer,
                agent_output_mode=get_agent_output_mode(response_format, agent_key),
            )
        else:
            convert_meta = {}

        result = clean_output(result)
        style_applied = bool(style_block.strip()) or bool(custom_style.strip())

        response_outcome = None
        if contract and contract.get("style_applied"):
            cues = contract.get("required_cues", [])
            drift_terms = contract.get("forbidden_drift", [])
            result_lower = result.lower() if result else ""
            cue_hits = _style_enforcer.count_required_cue_hits(result, cues) if cues else 0
            drift_hits = [term for term in drift_terms if term.lower() in result_lower]
            response_outcome = {
                "response_empty": not bool(result.strip()),
                "response_truncated": result.rstrip().endswith(("...", "[truncated]")) if result else False,
                "required_cue_hits": cue_hits,
                "required_cue_total": len(cues),
                "survived_required_cues": cue_hits > 0,
                "forbidden_drift_hits": drift_hits,
                "style_drift_detected": bool(drift_hits) or cue_hits == 0,
            }

        decision_trace = {
            "pipeline_selected": effective_mode,
            "requested_prompt_mode": prompt_mode,
            "input_mode": "image" if has_image else "text",
            "style_selected": style_applied,
            "style_key": style_key if style_applied else "",
            "style_category": contract.get("category") if contract else "general",
            "camera_override_allowed": bool(contract.get("camera_override_allowed")) if contract else False,
            "camera_override_profile": contract.get("camera_override_profile") if contract else None,
            "post_convert_mode": convert_meta.get("mode") if convert_meta else None,
        }

        t1 = datetime.now(timezone.utc)
        from ..common.logic import compute_aspect_ratio_info
        aspect_info = compute_aspect_ratio_info(width, height)

        meta_dict = {
            "provider": provider,
            "model": model,
            "agent": agent_key,
            "agent_focus": focus_key,
            "detail": detail_level,
            "model_type": model_type,
            # User-fixed shot facts for video profiles (None = Auto/unset).
            # Absent for image targets — hidden values never leak into a run
            # the moment the model switches away from Video/MiniMax H3.
            "video_params": {
                "duration": eff_video_duration or None,
                "duration_clamped": video_duration_clamped,
                "aspect": None if eff_video_aspect == "Auto" else eff_video_aspect,
                "sound": None if eff_video_sound == "Auto" else eff_video_sound,
                "camera": None if eff_video_camera == "Auto" else eff_video_camera,
            } if is_video_model_type(model_type) else None,
            "prompt_mode": effective_mode,
            "response_format": response_format,
            "style_applied": style_applied,
            "image_hash": image_hash,
            "target_dimensions": {
                "width": width,
                "height": height,
                "aspect_ratio": aspect_info["ratio_str"],
                "orientation": aspect_info["orientation"],
            } if aspect_info["active"] else None,
            "elapsed_seconds": (t1 - t0).total_seconds(),
            "timestamp": t0.isoformat(),
            "style_category": contract.get("category") if contract else "general",
            "style_required_cues": contract.get("required_cues") if contract else [],
            "forbidden_drift": contract.get("forbidden_drift") if contract else [],
            "camera_override": contract.get("camera_override_profile") if contract else None,
            "preset_support_mode": contract.get("support_mode") if contract else None,
            "preset_support_summary": contract.get("support_summary") if contract else "",
            "response_outcome": response_outcome,
            "decision_trace": decision_trace,
            # Exact system/user prompt of the last real LLM call that produced
            # `result` — debug/audit visibility into what was actually sent.
            # Multi-image batches only keep the last image's pair (same
            # convention as `fallback_reason`/`contract` above).
            "sent_prompt": sent_prompt,
        }
        if fallback_reason:
            meta_dict["fallback_reason"] = fallback_reason
        if image_runs:
            meta_dict["image_runs"] = image_runs
        meta_json = json.dumps(meta_dict, ensure_ascii=False)

        # A provider can answer 200 OK with nothing usable in it. That used to
        # leave the node reporting success with an empty prompt, the only trace
        # being `response_outcome.response_empty` — which itself is only filled
        # in when a style contract was applied.
        if not result.strip():
            err_meta = dict(meta_dict)
            err_meta.update({
                "status": "error",
                "message": "Модель вернула пустой ответ.",
                "error_code": "EMPTY_RESPONSE",
            })
            err_msg = "⚠️ Ошибка: модель вернула пустой ответ. Попробуйте другую модель или измените промпт."
            return io.NodeOutput(err_msg, json.dumps(err_meta, ensure_ascii=False), err_meta)

        return io.NodeOutput(result.strip(), meta_json, meta_dict)
