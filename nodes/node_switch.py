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
                "when ON, or outputs nothing (`None`) when OFF."
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
                    tooltip=t(
                        "tt_switch_enable",
                        "ON (True) passes the input signal through. OFF (False) sends `None` downstream, "
                        "and the rest of the graph keeps running.",
                    ),
                ),
            ],
            outputs=[
                io.AnyType.Output(
                    display_name="output",
                    tooltip="The passed-through signal when ON. When OFF, `None` goes out instead.",
                ),
            ],
            search_aliases=["switch", "bypass", "toggle", "gate", "pass-through", "enable", "filter"],
        )

    @classmethod
    def execute(cls, input=None, enable: bool = True, **_kwargs) -> io.NodeOutput:
        # OFF hands ``None`` down the wire rather than ``ExecutionBlocker``. The
        # blocker skips the *whole* branch, which also takes out consumers that
        # only wanted this signal on an optional input — they should still run,
        # just without it. Price of the choice: a node that needs a real
        # LATENT/IMAGE will now raise inside itself, naming itself rather than
        # the switch that was turned off.
        if not enable:
            return io.NodeOutput(None)
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
