"""FiL_Design_ImageMind node-contract registry.

Hand-curated contracts for every canonical node id. The list is small (7
nodes) and the contracts describe the *frontend-visible* widget layer; the
Python node classes still own `INPUT_TYPES()` for ComfyUI core.

When `pyproject.toml` and the per-node files are moved to `backend/` (Stage
of the larger migration), this registry will be derived directly from the
node classes — at that point this file becomes the single source of truth.
For now it is the typed frontend contract that scripts/gen_contracts.mjs
consumes.
"""

from __future__ import annotations

from typing import Any

from ..brand import CATEGORY_ROOT, SETTINGS_PREFIX
from ..config import PROVIDERS
from ..data import (
    DETAIL_LEVELS,
    LANGUAGES,
    MODEL_TYPE_OPTIONS,
    PROMPT_MODE_OPTIONS,
    default_detail_level,
    first_or_default,
    get_default_agent_key,
    get_visible_agent_keys,
    get_visible_style_keys,
)
from .schema import NodeContract, NodeInputs, NodeOutput, WidgetKind, WidgetSpec


def _combo(name: str, values: list[str], default: str, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.COMBO, values=values, default=default, **kw)


def _chip_grid(name: str, values: list[str], default: str, columns: int, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.CHIP_GRID, values=values, default=default, columns=columns, **kw
    )


def _chip_list(name: str, values: list[str], default: str | None = None, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.CHIP_LIST, values=values, default=default, searchable=True, **kw
    )


def _segmented(name: str, options: list[str], default: str, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.SEGMENTED, options=options, default=default, **kw)


def _number(name: str, default: int | float, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.NUMBER, default=default, **kw)


def _int(name: str, default: int, minv: int | None = None, maxv: int | None = None, step: int = 1, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.NUMBER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _float(name: str, default: float, minv: float | None = None, maxv: float | None = None, step: float = 0.05, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.NUMBER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _slider(name: str, default: float, minv: float, maxv: float, step: float = 0.05, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.SLIDER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _bool(name: str, default: bool, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.BOOLEAN, default=default, **kw)


def _string(name: str, default: str = "", **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.STRING, default=default, **kw)


# ── Node contracts ─────────────────────────────────────────────────────────

_SEED = NodeContract(
    id="FiLSeed",
    title="♻️ Seed",
    category=f"{CATEGORY_ROOT}/Values",
    description="Fixed or randomized seed with copy and reuse buttons.",
    min_size=(220, 180),
    family="value",
    inputs=NodeInputs(
        required=[
            _segmented("mode", options=["random", "fixed"], default="random", label="Mode"),
            _int("seed", default=0, minv=0, maxv=999999999999, step=1, label="Seed"),
        ],
        optional=[
            _bool("copy_to_clipboard", default=False, label="Copy seed", section="actions"),
            _bool("use_last_seed", default=False, label="Use last seed", section="actions"),
            _bool("new_fixed", default=False, label="New fixed random", section="actions"),
        ],
    ),
    outputs=[NodeOutput(name="seed", type="INT")],
)

_PROVIDER = NodeContract(
    id="FiLProviderLoader",
    title="🔌 Provider Loader",
    category=f"{CATEGORY_ROOT}/LLM/Provider",
    description="Provider and model runtime configuration.",
    min_size=(300, 320),
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
            _slider("temperature", default=0.7, minv=0.0, maxv=2.0, step=0.05, label="Temperature"),
            _int("max_tokens", default=0, minv=0, maxv=65536, step=1, label="Max tokens"),
            _int("rate_limit_ms", default=100, minv=0, maxv=5000, step=10, label="Rate limit (ms)"),
            _int("seed", default=-1, minv=-1, maxv=999999999999, label="Seed"),
            _int("max_image_side", default=1024, minv=128, maxv=4096, step=64, label="Max image side"),
        ],
    ),
    outputs=[
        NodeOutput(name="config", type="DICT"),
        NodeOutput(name="model", type="STRING"),
    ],
)

_SCANNER = NodeContract(
    id="FiLOpticScanner",
    title="🕵️ Optic Scanner",
    category=f"{CATEGORY_ROOT}/LLM/Scanner",
    description="Image analysis or text-idea expansion into a generation prompt.",
    min_size=(400, 600),
    family="llm",
    inputs=NodeInputs(
        required=[
            _string("prompt", section="prompt"),
            _string("negative_prompt", section="prompt"),
            _string("custom_style", section="prompt"),
            _segmented(
                "response_format",
                options=["text", "json"],
                default="text",
                section="prompt",
            ),
            _chip_grid(
                "agent",
                values=get_visible_agent_keys(),
                default=get_default_agent_key(),
                columns=3,
                section="agent",
            ),
            _chip_grid(
                "model_type",
                values=list(MODEL_TYPE_OPTIONS),
                default="Auto/None",
                columns=3,
                section="model",
            ),
            _chip_grid(
                "detail_level",
                values=list(DETAIL_LEVELS.keys()),
                default=default_detail_level(DETAIL_LEVELS),
                columns=5,
                section="output",
            ),
            _combo(
                "language",
                values=list(LANGUAGES),
                default=first_or_default(LANGUAGES, "ru"),
                section="output",
            ),
            _segmented(
                "prompt_mode",
                options=list(PROMPT_MODE_OPTIONS),
                default="Auto",
                section="output",
            ),
            _int("max_image_side", default=1024, minv=128, maxv=4096, step=64, label="Max image side", section="output"),
            _chip_list(
                "photo_style",
                values=["None"] + get_visible_style_keys("photo_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "nsfw_photo_style",
                values=["None"] + get_visible_style_keys("nsfw_photo_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "art_style",
                values=["None"] + get_visible_style_keys("art_style"),
                default="None",
                section="styles",
            ),
            _chip_list(
                "nsfw_art_style",
                values=["None"] + get_visible_style_keys("nsfw_art_style"),
                default="None",
                section="styles",
            ),
        ],
    ),
    outputs=[
        NodeOutput(name="prompt", type="STRING"),
        NodeOutput(name="metadata_json", type="STRING"),
        NodeOutput(name="metadata_dict", type="DICT"),
    ],
)

_CLEANER = NodeContract(
    id="FiLNeuroCleaner",
    title="🧹 Cleaner",
    category=f"{CATEGORY_ROOT}/Tools/Cleaner",
    description="Selective model, VRAM, RAM, and cache cleanup.",
    min_size=(300, 560),
    family="tool",
    inputs=NodeInputs(
        required=[
            _bool("clean_vram", default=True, label="Clear VRAM cache", section="vram"),
            _bool("offload_model", default=True, label="Unload selected model types", section="vram"),
            _bool("offload_cache", default=True, label="Flush GPU cache", section="vram"),
            _bool("unload_diffusion", default=True, label="Diffusion models", section="vram"),
            _bool("unload_clip", default=True, label="CLIP models", section="vram"),
            _bool("unload_vae", default=True, label="VAE models", section="vram"),
            _bool("unload_control", default=True, label="ControlNet models", section="vram"),
            _bool("unload_lora", default=True, label="LoRA models", section="vram"),
            _bool("clean_ram", default=False, label="Clean system RAM", section="ram"),
            _bool("clean_file_cache", default=True, label="Clean file cache (Windows)", section="ram"),
            _bool("clean_processes", default=False, label="Trim process working set", section="ram"),
            _bool("clean_dlls", default=False, label="Empty DLL working set", section="ram"),
            _bool("advanced_controls", default=False, label="Show advanced RAM options", section="ram"),
        ],
    ),
    outputs=[NodeOutput(name="output", type="ANY")],
)

_COMPARE = NodeContract(
    id="FiLBeforeAfterCompare",
    title="🔄 Compare",
    category=f"{CATEGORY_ROOT}/Image/Compare",
    description="Before/after preview with optional output resizing.",
    min_size=(320, 420),
    family="image",
    inputs=NodeInputs(
        optional=[
            _segmented("swap", options=["ON", "OFF"], default="OFF", label="Swap before/after"),
            _segmented(
                "resize_mode",
                options=["Off", "Preview only", "Preview + output"],
                default="Off",
                label="Resize mode",
            ),
            _slider("max_resolution", default=4096, minv=256, maxv=8192, step=64, label="Max resolution"),
        ],
    ),
    outputs=[
        NodeOutput(name="before", type="IMAGE"),
        NodeOutput(name="after", type="IMAGE"),
    ],
)

_UPSCALE = NodeContract(
    id="FiLUpscaleTileCalc",
    title="🔍 Upscaler",
    category=f"{CATEGORY_ROOT}/Image/Upscale",
    description="Computes optimal tile grid layout for upscaling.",
    min_size=(320, 320),
    family="image",
    inputs=NodeInputs(
        required=[
            _slider("upscale_factor", default=2.0, minv=0.1, maxv=8.0, step=0.25, label="Upscale factor"),
            _int("tile_size", default=512, minv=64, maxv=2048, step=64, label="Tile size"),
            _int("tile_overlap", default=64, minv=0, maxv=512, step=8, label="Tile overlap"),
        ],
        optional=[
            _bool("auto_mode", default=False, label="Full auto", section="advanced"),
            _segmented(
                "auto_profile",
                options=["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"],
                default="Balanced",
                section="advanced",
            ),
            _int("manual_tile_cols", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _int("manual_tile_rows", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _slider("max_megapixels", default=0.0, minv=0.0, maxv=64.0, step=0.5, section="advanced"),
            _bool("non_square_tiles", default=False, section="advanced"),
            _bool("show_grid_preview", default=True, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
        NodeOutput(name="tile_grid_preview", type="IMAGE"),
        NodeOutput(name="upscale_by", type="FLOAT"),
        NodeOutput(name="denoise", type="FLOAT"),
        NodeOutput(name="tile_width", type="INT"),
        NodeOutput(name="tile_height", type="INT"),
        NodeOutput(name="mask_blur", type="INT"),
        NodeOutput(name="tile_padding", type="INT"),
        NodeOutput(name="overlap", type="INT"),
        NodeOutput(name="width", type="INT"),
        NodeOutput(name="height", type="INT"),
        NodeOutput(name="tile_cols", type="INT"),
        NodeOutput(name="tile_rows", type="INT"),
        NodeOutput(name="tile_count", type="INT"),
        NodeOutput(name="latent_w", type="INT"),
        NodeOutput(name="latent_h", type="INT"),
        NodeOutput(name="info", type="STRING"),
        NodeOutput(name="warnings", type="STRING"),
    ],
)

NODE_SCHEMAS: dict[str, NodeContract] = {
    contract.id: contract
    for contract in (
        _SEED,
        _PROVIDER,
        _SCANNER,
        _CLEANER,
        _COMPARE,
        _UPSCALE,
    )
}

CANONICAL_IDS: tuple[str, ...] = tuple(NODE_SCHEMAS)

assert set(CANONICAL_IDS) == {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLBeforeAfterCompare",
    "FiLUpscaleTileCalc",
}, f"{CATEGORY_ROOT} contracts drift: node ids differ from common/node_registry.py"


def get_node_contract(node_id: str) -> NodeContract:
    if node_id not in NODE_SCHEMAS:
        raise KeyError(f"Unknown {CATEGORY_ROOT} node contract: {node_id!r}")
    return NODE_SCHEMAS[node_id]


def get_node_schemas() -> dict[str, dict[str, object]]:
    """Return `{node_id: NodeContract.model_json_schema()}` for the API endpoint."""
    return {node_id: contract.model_json_schema() for node_id, contract in NODE_SCHEMAS.items()}


def public_node_contracts_v2() -> dict[str, object]:
    """Top-level payload returned by `GET /fil_design_imagemind/node_contracts`.

    - `node_ids` — Mapping of node ID to {title, category} (quick lookup for UI).
    - `schemas` — Pydantic JSON Schema per node (used by the Vue 3 + TS
      frontend to type widgets at compile time without a server round-trip).
    - `data` — per-node `NodeContract.model_dump()` (the actual widget
      values, consumed by `scripts/gen_contracts.mjs` to render the typed
      frontend catalog).
    - `settings_prefix` — e.g. `FiL_Design_ImageMind.` (used by ComfyUI settings keys).
    """
    return {
        "node_ids": {node_id: {"title": c.title, "category": c.category} for node_id, c in NODE_SCHEMAS.items()},
        "schemas": get_node_schemas(),
        "data": {node_id: c.model_dump(mode="json") for node_id, c in NODE_SCHEMAS.items()},
        "settings_prefix": SETTINGS_PREFIX,
    }