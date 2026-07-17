from comfy_api.latest import io

from ..common.brand import CATEGORY_ROOT

SEED_MAX = 0xFFFFFFFFFFFFFFFF


class FiLSeed(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLSeed",
            display_name="♻️ Seed",
            category=f"{CATEGORY_ROOT}/Values",
            description="🔢 FiL Seed — deterministic or random seed generator. Returns an integer for use as a random seed elsewhere in the graph.",
            inputs=[
                io.Int.Input("seed", default=0, min=0, max=SEED_MAX,
                             tooltip="Resolved seed value (managed by the UI)."),
            ],
            outputs=[io.Int.Output(id="SEED", display_name="SEED", tooltip="Deterministic or random integer seed.")],
            search_aliases=["random", "randomizer", "entropy", "RNG"],
        )

    @classmethod
    def fingerprint_inputs(cls, seed=0):
        return seed

    @classmethod
    def execute(cls, seed: int) -> io.NodeOutput:
        return io.NodeOutput(seed)
