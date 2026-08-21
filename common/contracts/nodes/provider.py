"""Frontend contract for `FiLProviderLoader`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _slider
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_LLM
from ...config import PROVIDERS

CONTRACT = NodeContract(
    id="FiLProviderLoader",
    title="🔌 Provider Loader",
    category=CATEGORY_LLM,
    description="Provider and model runtime configuration.",
    min_size=(300, 250),
    family="llm",
    inputs=NodeInputs(
        required=[
            _combo(
                "provider",
                values=list(PROVIDERS.keys()),
                default="ollama",
                label="Provider",
            ),
            _combo("model", values=["(loading...)"], default="(loading...)", label="Model"),
            _bool("refresh_models", default=False, label="Refresh models", section="actions"),
        ],
        optional=[
            _bool("unload_llm", default=False, label="Unload LLM after prompt"),
            _slider("temperature", default=0.7, minv=0.0, maxv=2.0, step=0.05, label="Temperature"),
            _int("max_tokens", default=0, minv=0, maxv=65536, step=1, label="Max tokens"),
            _int("rate_limit_ms", default=100, minv=0, maxv=5000, step=10, label="Rate limit (ms)"),
            _int("max_image_side", default=1024, minv=128, maxv=4096, step=64, label="Max image side"),
        ],
    ),
    outputs=[
        NodeOutput(name="config", type="DICT"),
        NodeOutput(name="model", type="STRING"),
    ],
)
