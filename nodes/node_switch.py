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
        if not enable:
            return io.NodeOutput(ExecutionBlocker(None))
        # ON with nothing on `input` is not muting — it is a misconfigured
        # graph, and blocking it silently is undiagnosable: the branch below
        # simply never runs and nothing anywhere says why. The message turns it
        # into a named "Execution Blocked" notice on the node (see
        # ``execution_block_cb``, execution.py:520) while the rest of the graph
        # still runs. `input` also arrives as None when the upstream output
        # never reached the cache (``get_input_data`` → ``mark_missing()``), so
        # this is the one place that can report a link that didn't deliver.
        if input is None:
            return io.NodeOutput(ExecutionBlocker(t(
                "err_switch_no_input",
                "🔀 Cyber Switch is ON but nothing arrived on `input` — connect a signal to it. "
                "Everything downstream was skipped.",
            )))
        return io.NodeOutput(input)
