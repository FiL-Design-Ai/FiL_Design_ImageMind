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
    default_detail_level,
    first_or_default,
    get_agent_output_mode,
    get_default_agent_key,
    get_visible_agent_keys,
    get_visible_style_keys,
    model_needs_prompt_post_conversion,
    resolve_agent_key,
)
from ..common.io_types import FilDict, FilProviderConfig
from ..common.localization import t
from ..common.logic import PromptGenerator, StyleManager
from ..common.data import get_effective_response_format
from ..common.model_prompt_adapters import append_response_format_instruction, post_convert_prompt
from ..common.models import ModelClient
from ..common.processing import ImageProcessor, is_valid_model_name, normalize_model_name
from ..common.provider_resilience import is_timeout_error, sanitize_sensitive_data
from ..common.provider_runtime import safe_provider_error
from ..common.style_enforcer import StyleEnforcer

_processor = ImageProcessor()
_style_manager = StyleManager()
_prompt_gen = PromptGenerator()
_model_client = ModelClient()
_style_enforcer = StyleEnforcer()
_AGENT_KEYS = get_visible_agent_keys()


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
                               tooltip=t("tt_agent", "Analysis focus mode.")),
                io.Image.Input("image", optional=True, tooltip=t("tt_image", "Image(s) to analyze. If connected, sent to vision LLM. Otherwise the prompt text below is sent as standalone text input.")),
                io.String.Input("prompt", default="", multiline=True, optional=True, tooltip=t("tt_prompt", "User instruction or standalone text prompt. If image is connected, this becomes the instruction; without image, it is the full text input.")),
                io.String.Input("negative_prompt", default="", multiline=True, optional=True, tooltip=t("tt_neg_prompt", "What to avoid in the generated prompt."), advanced=True),
                io.Combo.Input("detail_level", options=list(DETAIL_LEVELS), default=default_detail_level(DETAIL_LEVELS), advanced=True,
                               tooltip=t("tt_detail", "How much detail to include in the generated description.")),
                io.Combo.Input("language", options=LANGUAGES, default=first_or_default(LANGUAGES, "ru"), advanced=True,
                               tooltip=t("tt_lang", "Language of the generated prompt/description.")),
                io.Combo.Input("model_type", options=list(MODEL_TYPE_OPTIONS), default="Auto/None", advanced=True,
                               tooltip=t("tt_model_type", "Target image-generation model — adjusts prompt syntax, length, and format.")),
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
                io.Combo.Input("response_format", options=["text", "json"], default="text", advanced=True,
                               tooltip=t("tt_response_format", "Ask the model to respond as plain text or as a JSON object.")),
                io.Int.Input("width", default=0, min=0, max=16384, step=8, optional=True, advanced=True,
                             tooltip=t("tt_width", "Target image width in pixels. Helps tailor prompt composition to aspect ratio if > 0.")),
                io.Int.Input("height", default=0, min=0, max=16384, step=8, optional=True, advanced=True,
                             tooltip=t("tt_height", "Target image height in pixels. Helps tailor prompt composition to aspect ratio if > 0.")),
            ],
            outputs=[
                io.String.Output(display_name="prompt", tooltip="Generated prompt text."),
                io.String.Output(display_name="metadata_json", tooltip="JSON metadata string."),
                FilDict.Output(display_name="metadata_dict", tooltip="Parsed metadata dict."),
            ],
            search_aliases=["scanner", "vision", "image analysis", "prompt generator", "describe"],
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
    def fingerprint_inputs(cls, config=None, agent="None", image=None, prompt="", negative_prompt="",
                           detail_level="normal", language="ru", model_type="Auto/None",
                           prompt_mode="Auto", photo_style="None", nsfw_photo_style="None",
                           art_style="None", nsfw_art_style="None", custom_style="", seed=-1,
                           response_format="text", width=0, height=0,
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
                digest = hashlib.md5()
                for frame in range(image.shape[0]):
                    digest.update(image[frame].flatten()[:256].cpu().numpy().tobytes())
                image_key = (tuple(image.shape), digest.hexdigest())
            except Exception:
                image_key = id(image)
        return hash((
            # `temperature`/`max_tokens`/`rate_limit_ms` are sourced from `config`
            # at execute() time (see below) rather than being real widget inputs —
            # `str(config)` already covers their contribution to the fingerprint.
            str(config), agent, prompt, negative_prompt, detail_level, language,
            model_type, prompt_mode, photo_style, nsfw_photo_style, art_style, nsfw_art_style, custom_style,
            seed, response_format, width, height,
            image_key,
        ))

    @classmethod
    def _run_one_pass(cls, provider, model, system_prompt, style_block, custom_style,
                      nsfw_active, style_kwargs, style_key, user_message, images_b64,
                      temperature, seed, max_tokens, response_format,
                      model_type, prompt, effective_mode, hybrid_timeout,
                      two_stage_timeout, agent_key="None", detail_level="normal",
                      language="ru", rate_limit_ms=100, contract=None, enforcement="",
                      width=0, height=0):
        fb = None
        if effective_mode == "Two-Stage" and style_block.strip():
            bundle = _prompt_gen.build_system_prompt_two_stage_bundle(
                agent_key=agent_key,
                detail_level=detail_level,
                language=language,
                model_type=model_type,
                width=width,
                height=height,
                **style_kwargs,
            )
            stage1_sys = bundle["stage1"]["prompt"]
            stage2_sys = bundle["stage2"]["prompt"]
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

            second_seed = seed + 1 if seed > 0 else -1
            stage2_user = _prompt_gen.build_stage2_user_prompt(
                description, prompt, detail_level=detail_level,
                model_type=model_type,
            )
            stage2_user = append_response_format_instruction(stage2_user, model_type, response_format)
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
    def execute(cls, config, agent="None", image=None, prompt="", negative_prompt="",
                detail_level="normal", language="ru", model_type="Auto/None",
                prompt_mode="Auto", photo_style="None", nsfw_photo_style="None",
                art_style="None", nsfw_art_style="None", custom_style="", seed=-1,
                response_format="text", width=0, height=0,
                **kwargs) -> io.NodeOutput:
        t0 = datetime.now(timezone.utc)
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

        unique_id = kwargs.get("unique_id")

        vision = is_model_vision_capable(provider, model)
        if has_image and not vision:
            err = VisionNotAvailableError(model)
            message = f"модель '{model}' не поддерживает анализ изображений."
            err_meta = {"error_code": err.code, "message": message, "model": model}
            return io.NodeOutput(f"Ошибка: {message}", json.dumps(err_meta, ensure_ascii=False), err_meta)

        agent_key = resolve_agent_key(agent)
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

        system_prompt, base_prompt, style_block = _prompt_gen.build_system_prompt_bundle(
            agent_key=agent_key,
            detail_level=detail_level,
            language=language,
            model_type=model_type,
            width=width,
            height=height,
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
            _processor.max_side = config.get("max_image_side", 1024)
            try:
                images_b64, w, h = _processor.process_batch(image)
                sample = image[0].cpu().numpy().tobytes()[:1024]
                image_hash = hashlib.md5(sample).hexdigest()
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
                for i, b64 in enumerate(images_b64):
                    if unique_id is not None:
                        io.execution.set_progress(unique_id, i, total)
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
                agent_output_mode=get_agent_output_mode(agent_key),
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
            "detail": detail_level,
            "model_type": model_type,
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
