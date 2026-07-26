from comfy_api.latest import io
from comfy_execution.graph_utils import ExecutionBlocker

from ..common.brand import CATEGORY_ROOT
from ..common.localization import t


class FiLSignalSwitch(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLSignalSwitch",
            display_name="🔀 Cyber Switch",
            category=f"{CATEGORY_ROOT}/Tools",
            description=(
                "🔀 Cyber Switch — universal signal pass-through toggle. Accepts any data type "
                "(Image, Latent, Model, Clip, String, Int, Float, etc.) and passes it through "
                "when ON, or blocks transmission when OFF."
            ),
            inputs=[
                io.AnyType.Input(
                    "input",
                    optional=True,
                    tooltip=t("tt_switch_input", "Any incoming data signal (Image, Latent, Model, String, etc.)."),
                ),
                io.Boolean.Input(
                    "enable",
                    default=True,
                    tooltip=t("tt_switch_enable", "ON (True) passes the input signal through. OFF (False) blocks the signal."),
                ),
            ],
            outputs=[
                io.AnyType.Output(
                    display_name="output",
                    tooltip="The passed-through signal when ON. When OFF, everything downstream is skipped.",
                ),
            ],
            search_aliases=["switch", "bypass", "toggle", "gate", "pass-through", "enable", "filter"],
        )

    @classmethod
    def execute(cls, input=None, enable: bool = True, **_kwargs) -> io.NodeOutput:
        # Muting a branch means the nodes below must not run. Emitting ``None``
        # would let them run and fail inside themselves ("NoneType has no
        # attribute ...") — the error would name an unrelated node instead of
        # the switch that was turned off. ``ExecutionBlocker(None)`` is
        # ComfyUI's own mechanism for this: every consumer is skipped, silently
        # (a message would surface as an execution error instead), and the rest
        # of the graph still runs.
        if not enable or input is None:
            return io.NodeOutput(ExecutionBlocker(None))
        return io.NodeOutput(input)
