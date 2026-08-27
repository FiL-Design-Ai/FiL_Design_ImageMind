"""FiL Prompter node for ImageMind (V3 API).

A smart text node: the prompt widget passes through to the output untouched
at queue time (zero LLM cost), while the three assist buttons beside the
field (rephrase / densify / expand, served by the `/director_assist` route)
edit the text live in the panel. The Provider Loader powers the buttons;
the run itself never calls one, so the node works as a plain text node even
with `config` unwired.
"""

from __future__ import annotations

from comfy_api.latest import io

from ..common.brand import CATEGORY_LLM
from ..common.io_types import FilProviderConfig
from ..common.localization import t
from ..common.processing import is_valid_model_name


class FiLPrompter(io.ComfyNode):
    """Holds a prompt the assist buttons edit; passes it through on execute."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLPrompter",
            display_name="📝 Prompter",
            category=CATEGORY_LLM,
            description=(
                "📝 FiL Prompter — a text node whose prompt the three assist buttons "
                "(rephrase / densify / expand) rewrite live through the Provider Loader's "
                "LLM. At queue time the text passes through untouched."
            ),
            inputs=[
                FilProviderConfig.Input(
                    "config",
                    optional=True,
                    tooltip=t("pr_config", "Config from Provider Loader — powers the assist buttons."),
                ),
                io.String.Input(
                    "prompt",
                    default="",
                    multiline=True,
                    tooltip=t(
                        "pr_prompt",
                        "The prompt the assist buttons edit. Type it in or connect a STRING link — a link overrides the widget.",
                    ),
                ),
            ],
            outputs=[
                io.String.Output(
                    display_name="prompt",
                    tooltip="The prompt as written — wire it into your generation pipeline.",
                ),
            ],
            search_aliases=[
                "prompt editor",
                "edit prompt",
                "improve prompt",
                "редактор промпта",
                "улучшить промпт",
                "промптер",
            ],
        )

    @classmethod
    def validate_inputs(cls, config=None, prompt: str = ""):
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
    def execute(cls, config=None, prompt: str = "") -> io.NodeOutput:
        return io.NodeOutput(prompt)

