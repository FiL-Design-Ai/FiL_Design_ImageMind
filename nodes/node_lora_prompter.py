"""FiL LoRA Prompter node for ImageMind (V3 API).

Smart prompt composer that connects to FiLLoraLoader's triggers output (or any trigger string),
exposes interactive trigger-word chips in the panel for 1-click toggling,
and outputs the final combined prompt string.
"""

from __future__ import annotations

from comfy_api.latest import io

from ..common.brand import CATEGORY_TOOLS
from ..common.localization import t


class FiLLoraPrompter(io.ComfyNode):
    """Dynamic LoRA prompt composer with interactive trigger chips."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLLoraPrompter",
            display_name="🧬 LoRA Prompter",
            category=CATEGORY_TOOLS,
            description=(
                "🧬 FiL LoRA Prompter — dynamic prompt composer with interactive LoRA trigger chips. "
                "Connect `triggers` from 🧬 LoRA Loader to display available trigger words, "
                "toggle them into the prompt with a single click, and pass the assembled text downstream."
            ),
            inputs=[
                io.String.Input(
                    "prompt",
                    default="",
                    multiline=True,
                    optional=True,
                    tooltip=t("lp_prompt", "The base prompt text. Trigger chips will be toggled into this text."),
                ),
                io.String.Input(
                    "triggers",
                    default="",
                    multiline=True,
                    optional=True,
                    tooltip=t(
                        "lp_triggers",
                        "Trigger words from 🧬 LoRA Loader (triggers output) or any comma-separated list.",
                    ),
                ),
            ],
            outputs=[
                io.String.Output(
                    display_name="prompt",
                    tooltip="The final prompt string containing selected trigger words.",
                ),
            ],
            search_aliases=[
                "lora prompter",
                "trigger words",
                "lora prompt",
                "лора промптер",
                "триггеры",
            ],
        )

    @classmethod
    def execute(cls, prompt: str = "", triggers: str = "") -> io.NodeOutput:
        return io.NodeOutput(prompt)
