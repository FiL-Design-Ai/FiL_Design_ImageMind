from datetime import datetime, timezone

from comfy_api.latest import io

from ..common.brand import CATEGORY_ROOT
from ..common.config import PROVIDERS, get_provider_key
from ..common.io_types import FilProviderConfig
from ..common.localization import t
from ..common.processing import normalize_model_name
from ..common.provider_runtime import fetch_models_from_provider


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
                io.Float.Input("temperature", default=0.7, min=0.0, max=2.0, step=0.05, display_mode=io.NumberDisplay.slider, advanced=True,
                               tooltip=t("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic.")),
                io.Int.Input("max_tokens", default=0, min=0, max=65536, step=1, advanced=True,
                             tooltip=t("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit).")),
                io.Int.Input("rate_limit_ms", default=100, min=0, max=5000, step=10, advanced=True,
                             tooltip=t("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting.")),
                io.Int.Input("seed", default=-1, min=-1, max=999999999999, advanced=True,
                             tooltip=t("tt_provider_seed", "Provider-side generation seed, if supported. -1 lets the provider pick one.")),
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
        if not model or not str(model).strip():
            return "Model must be selected in Provider Loader."
        return True

    @classmethod
    def execute(cls, provider: str, model: str = "", refresh_models: bool = False,
                temperature: float = 0.7, max_tokens: int = 0, rate_limit_ms: int = 100, seed: int = -1,
                max_image_side: int = 1024) -> io.NodeOutput:
        p_key = get_provider_key(provider)
        model_name = normalize_model_name(model)

        if refresh_models:
            try:
                fetch_models_from_provider(p_key)
            except Exception:
                pass

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
            "seed": seed,
            "max_image_side": max_image_side,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

        return io.NodeOutput(config, model_name)
