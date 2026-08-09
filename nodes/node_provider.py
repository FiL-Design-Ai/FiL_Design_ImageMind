import logging


from comfy_api.latest import io

from ..common.brand import BRAND, CATEGORY_ROOT
from ..common.config import PROVIDERS, get_provider_key
from ..common.io_types import FilProviderConfig
from ..common.localization import t
from ..common.processing import is_valid_model_name, normalize_model_name
from ..common.provider_runtime import fetch_models_from_provider, invalidate_model_cache

logger = logging.getLogger(f"{BRAND}.ProviderLoader")


class FiLProviderLoader(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        provider_options = list(PROVIDERS.keys())
        return io.Schema(
            node_id="FiLProviderLoader",
            display_name="🔌 Provider Loader",
            category=f"{CATEGORY_ROOT}/LLM",
            description="🔌 FiL Provider Loader — selects an LLM provider, model, and generation parameters. Outputs a `config` dict for downstream FiL nodes.",
            inputs=[
                io.Combo.Input("provider", options=provider_options, default="ollama",
                               tooltip=t("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud.")),
                io.Combo.Input("model", options=["(loading...)"], default="(loading...)",
                               tooltip=t("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account.")),
                io.Boolean.Input("refresh_models", default=False, label_on="Refresh", label_off="Cached",
                                 tooltip=t("tt_refresh", "Reload the model list. Use after adding a new model or API key.")),
                io.Boolean.Input("unload_llm", default=False, label_on="Unload", label_off="Keep",
                                 tooltip=t("tt_unload_llm", "Local servers only (Ollama, LM Studio): unload the model from memory right after the prompt is generated, freeing VRAM for the image generation.")),
                io.Float.Input("temperature", default=0.7, min=0.0, max=2.0, step=0.05, display_mode=io.NumberDisplay.slider, advanced=True,
                               tooltip=t("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic.")),
                io.Int.Input("max_tokens", default=0, min=0, max=65536, step=1, advanced=True,
                             tooltip=t("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit).")),
                io.Int.Input("rate_limit_ms", default=100, min=0, max=5000, step=10, advanced=True,
                             tooltip=t("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting.")),
                io.Int.Input("max_image_side", default=1024, min=128, max=4096, step=64, advanced=True,
                             tooltip=t("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value.")),
            ],
            outputs=[
                FilProviderConfig.Output(display_name="config", tooltip="Provider configuration dict for FiL nodes."),
                io.String.Output(display_name="model", tooltip="Normalised model name string."),
            ],
            search_aliases=["provider", "model loader", "LLM config", "API key"],
        )

    @classmethod
    def validate_inputs(cls, model: str = ""):
        # `model`'s schema declares a static ["(loading...)"] placeholder list
        # (the real list is loaded dynamically from the frontend via
        # /<route_slug>/models/{provider} and can't be known at schema-registration
        # time). Naming `model` here opts it out of ComfyUI's built-in
        # COMBO "value not in list" check (execution.py validate_inputs),
        # which would otherwise reject every real model name for every
        # provider. Actual availability is still checked at execution time
        # by the provider runtime.
        if not is_valid_model_name(model):
            return f"Model must be selected in Provider Loader (got '{model}')."
        return True

    @classmethod
    def execute(cls, provider: str, model: str = "", refresh_models: bool = False,
                unload_llm: bool = False,
                temperature: float = 0.7, max_tokens: int = 0, rate_limit_ms: int = 100,
                max_image_side: int = 1024) -> io.NodeOutput:
        p_key = get_provider_key(provider)
        model_name = normalize_model_name(model)

        if refresh_models:
            try:
                invalidate_model_cache(p_key)
                fetch_models_from_provider(p_key)
            except Exception:
                logger.warning("Model refresh failed for provider '%s'", p_key, exc_info=True)

        config = {
            "provider": p_key,
            "model": model_name,
            "agent_key": "None",
            "agent_template": "",
            "language": "ru",
            "model_type": "Auto/None",
            "detail_level": "normal",
            "prompt_mode": "Auto",
            "photo_style": "None",
            "art_style": "None",
            "temperature": temperature,
            "max_tokens": max_tokens,
            "rate_limit_ms": rate_limit_ms,
            "max_image_side": max_image_side,
            "unload_llm": bool(unload_llm),
        }

        return io.NodeOutput(config, model_name)
