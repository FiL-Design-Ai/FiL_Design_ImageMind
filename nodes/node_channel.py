from comfy_api.latest import io

from ..common.brand import CATEGORY_TOOLS
from ..common.localization import t

# Sanity limit, not a design one: core caps a template at 100 names, and every
# name is declared in the schema whether or not it is used. 32 channels from one
# node is already far past what a readable graph does.
MAX_CHANNELS = 32


class FiLChannel(io.ComfyNode):
    """Wireless channel transmitter — a marker node, not a processing one.

    It carries no logic at all. Whatever is plugged into a `value*` input becomes
    a named channel, and the frontend rewrites the graph just before the prompt
    is built so that every subscribed (or auto-matched) input receives from that
    same source directly. By the time the backend sees the prompt, the channels
    are ordinary links; this class exists so the node can be placed and saved.

    Inputs grow as they are used (`io.Autogrow`), so one node can broadcast a
    model, a VAE and a CLIP at once instead of needing three nodes.

    A channel is named after its data type (`MODEL`, `VAE`). To name it
    yourself, rename the slot — LiteGraph's own "Rename Slot" writes the label,
    and the label is what the frontend reads. There is deliberately no name
    widget: with many inputs on one node, a single widget could only ever name
    one of them.

    It declares no outputs on purpose: nothing downstream depends on it, so
    ComfyUI never schedules it and the source is not evaluated twice.

    The model, and why it is not cg-use-everywhere's, is in ``wireless.md``.
    """

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLChannel",
            display_name="📡 Channel",
            category=CATEGORY_TOOLS,
            description=(
                "📡 FiL Channel — send data across the graph without wires. Plug anything in, and "
                "free inputs of the same type pick it up. Inputs grow as you use them, so one node "
                "can carry several channels. A channel is named after its data type; rename the "
                "slot to name it yourself."
            ),
            inputs=[
                io.Autogrow.Input(
                    "value",
                    template=io.Autogrow.TemplatePrefix(
                        io.AnyType.Input(
                            "value",
                            optional=True,
                            tooltip=t(
                                "tt_channel_value",
                                "Anything to broadcast: Model, VAE, Image, Latent, String, Int...",
                            ),
                        ),
                        prefix="value",
                        min=1,
                        max=MAX_CHANNELS,
                    ),
                    optional=True,
                ),
            ],
            outputs=[],
            search_aliases=["channel", "wireless", "broadcast", "send", "anywhere", "everywhere", "bus"],
        )

    @classmethod
    def execute(cls, **kwargs) -> io.NodeOutput:
        # Never reached in practice — with no outputs, nothing depends on this
        # node and ComfyUI does not schedule it. Kept because a node class
        # without `execute` is not a node.
        return io.NodeOutput()
