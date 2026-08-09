"""FiL Decomposer node for ImageMind (V3 API).

Analyzes input image or prompt and decomposes it into distinct structured
components: Subject, Lighting, Composition, Style, and Full Prompt.
"""

from __future__ import annotations

import hashlib
import json
import logging
import re
from typing import Any, Dict

from comfy_api.latest import io
from ..common.brand import BRAND, CATEGORY_ROOT
from ..common.config import is_model_vision_capable
from ..common.data import LANGUAGES
from ..common.io_types import FilProviderConfig
from ..common.models import ModelClient
from ..common.processing import ImageProcessor, is_valid_model_name, normalize_model_name
from ..common.provider_runtime import safe_provider_error, unload_local_model

logger = logging.getLogger(f"{BRAND}.Decomposer")

_model_client = ModelClient()
_processor = ImageProcessor()

DECOMPOSITION_SYSTEM_PROMPT = (
    "You are an expert visual prompt engineer and computer vision analyst.\n"
    "Your task is to analyze the input (image or text description) and break it down into 4 distinct, highly-detailed prompt components:\n"
    "1. SUBJECT: The core entity, character, main object, or focal point.\n"
    "2. LIGHTING: The lighting style, illumination source, color palette, mood, and shadows.\n"
    "3. COMPOSITION: Camera angle, lens type, framing, depth of field, perspective, and shot type.\n"
    "4. STYLE: Artistic medium, texture, material finish, rendering style, rendering engine or photo quality.\n\n"
    "Respond ONLY with a valid JSON object matching this exact schema:\n"
    "{\n"
    '  "subject": "detailed description of subject",\n'
    '  "lighting": "detailed description of lighting & color",\n'
    '  "composition": "detailed description of composition & framing",\n'
    '  "style": "detailed description of art style & rendering",\n'
    '  "full_prompt": "seamless combination of subject, style, lighting, composition into a high-density prompt"\n'
    "}"
)


def _parse_decomposition_json(text: str) -> dict | None:
    cleaned = text.strip()
    if cleaned.startswith("```"):
        lines = cleaned.splitlines()
        if lines[0].startswith("```"):
            lines = lines[1:]
        if lines and lines[-1].startswith("```"):
            lines = lines[:-1]
        cleaned = "\n".join(lines).strip()

    try:
        data = json.loads(cleaned)
        if isinstance(data, dict):
            return data
    except Exception:
        pass

    match = re.search(r"\{.*\}", cleaned, re.DOTALL)
    if match:
        try:
            data = json.loads(match.group(0))
            if isinstance(data, dict):
                return data
        except Exception:
            pass
    return None


class FiLImageDecomposer(io.ComfyNode):
    """Decomposes an image or prompt into layered visual components (Subject, Lighting, Composition, Style)."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLImageDecomposer",
            display_name="👁️‍🗨️ Image Decomposer",
            category=f"{CATEGORY_ROOT}/Analysis",
            description="Decomposes image or prompt into Subject, Lighting, Composition, Style, and Full Prompt outputs.",
            inputs=[
                FilProviderConfig.Input("config", tooltip="Provider Loader config connection."),
                io.Image.Input("image", optional=True, tooltip="Optional input image for visual decomposition."),
                io.String.Input("prompt", default="", multiline=True, optional=True, tooltip="Optional text description."),
                # `default` has to be one of `options`. It was "English", which
                # is not in LANGUAGES (["en", "ru"]) — so the widget fell back
                # to the first entry while `execute()`'s own default stayed
                # "English", and the two disagreed about what an untouched node
                # sends. Both now name the same value.
                io.Combo.Input("language", options=LANGUAGES, default=LANGUAGES[0], optional=True, tooltip="Language for decomposed component outputs."),
            ],
            outputs=[
                io.String.Output(id="subject", display_name="subject"),
                io.String.Output(id="lighting", display_name="lighting"),
                io.String.Output(id="composition", display_name="composition"),
                io.String.Output(id="style", display_name="style"),
                io.String.Output(id="full_prompt", display_name="full_prompt"),
            ],
            search_aliases=["decomposer", "breakdown", "analysis", "prompt split", "layers"],
        )

    @classmethod
    def fingerprint_inputs(
        cls,
        config=None,
        image=None,
        prompt="",
        language=LANGUAGES[0],
        **_kwargs,
    ) -> Any:
        image_key: Any = None
        if image is not None:
            try:
                # Every frame contributes, not just image[0]: hashing only the
                # first frame returned a stale result whenever frames 2..N
                # changed but frame 1 stayed the same (same fix as the scanner).
                digest = hashlib.md5(usedforsecurity=False)
                for frame in range(image.shape[0]):
                    digest.update(image[frame].flatten()[:256].cpu().numpy().tobytes())
                image_key = (tuple(image.shape), digest.hexdigest())
            except Exception:
                image_key = id(image)
        return hash((str(config), str(prompt or ""), str(language or ""), image_key))

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
    def execute(
        cls,
        config: Dict[str, Any],
        image: Any | None = None,
        prompt: str = "",
        language: str = LANGUAGES[0],
    ) -> io.NodeOutput:
        if not config or not isinstance(config, dict):
            return io.NodeOutput("⚠️ Ошибка: подключи Provider Loader.", "", "", "", "")

        provider = config.get("provider", "ollama")
        model = normalize_model_name(config.get("model", ""))

        if not model or not is_valid_model_name(model):
            return io.NodeOutput("⚠️ Ошибка: в Provider Loader не выбрана действующая модель.", "", "", "", "")

        has_image = image is not None
        prompt_str = str(prompt or "").strip()

        img_b64 = None
        if has_image:
            if not is_model_vision_capable(provider, model):
                # The message is shown on the first output, but it must not also
                # come out of `full_prompt` — a downstream node would then
                # consume the error text as a prompt. The other error paths all
                # leave the remaining outputs empty; this one does the same.
                err_msg = f"⚠️ Ошибка: модель '{model}' не поддерживает анализ изображений. Выберите vision-модель (например, Qwen-VL, Gemini, GPT-4o) или отключите изображение."
                return io.NodeOutput(err_msg, "", "", "", "")
            try:
                img_b64 = _processor.tensor_to_base64(image)
            except Exception as exc:
                # Deliberate graceful fallback: the node still answers from the
                # text prompt alone (see test_decomposer_image_tensor_conversion
                # _error_graceful). Log it so the drop isn't completely silent —
                # previously nothing recorded that the image had been ignored.
                logger.warning("image processing failed, continuing without it: %s", exc)
                img_b64 = None

        user_prompt = f"Decompose the input into 4 visual layers. Target Language: {language}.\n"
        if prompt_str:
            user_prompt += f"Input Description: {prompt_str}\n"

        try:
            result_raw = _model_client.generate(
                provider=provider,
                model=model,
                system_prompt=DECOMPOSITION_SYSTEM_PROMPT,
                user_prompt=user_prompt,
                images=[img_b64] if img_b64 else None,
                temperature=config.get("temperature", 0.7),
                seed=0,  # Enable prompt caching for identical inputs
                max_tokens=config.get("max_tokens", 0) or None,
                rate_limit_ms=config.get("rate_limit_ms", 100),
                response_format="json",
            )
        except Exception as exc:
            err = safe_provider_error(exc)
            return io.NodeOutput(f"⚠️ Ошибка генерации ({provider}/{model}): {err}", "", "", "", "")

        # Provider Loader's unload switch — the generation above is the only
        # LLM call this node makes, so the local model can leave memory
        # before the image generation stage starts.
        if bool(config.get("unload_llm", False)):
            unload_local_model(provider, model)

        parsed = _parse_decomposition_json(result_raw)
        if parsed:
            subject = str(parsed.get("subject") or "").strip()
            lighting = str(parsed.get("lighting") or "").strip()
            composition = str(parsed.get("composition") or "").strip()
            style = str(parsed.get("style") or "").strip()
            full_prompt = str(parsed.get("full_prompt") or "").strip()

            if not full_prompt:
                full_prompt = ", ".join(filter(None, [subject, style, lighting, composition]))

            return io.NodeOutput(subject, lighting, composition, style, full_prompt)
        else:
            # Fallback if JSON format was not strictly respected by the model
            return io.NodeOutput(result_raw, "", "", "", result_raw)
