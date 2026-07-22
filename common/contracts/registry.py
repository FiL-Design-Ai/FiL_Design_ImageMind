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


def _samplers() -> list[str]:
    try:
        import comfy.samplers

        return list(comfy.samplers.KSampler.SAMPLERS)
    except Exception:
        return ["euler"]


def _schedulers() -> list[str]:
    try:
        import comfy.samplers

        return list(comfy.samplers.KSampler.SCHEDULERS)
    except Exception:
        return ["normal"]


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
    category=f"{CATEGORY_ROOT}/LLM",
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
    category=f"{CATEGORY_ROOT}/LLM",
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
    category=f"{CATEGORY_ROOT}/Tools",
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
    category=f"{CATEGORY_ROOT}/Image",
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
    title="🔍 Upscaler Advanced",
    category=f"{CATEGORY_ROOT}/Image",
    description="Computes optimal tile grid layout for upscaling.",
    min_size=(320, 320),
    family="image",
    inputs=NodeInputs(
        required=[
            _slider("upscale_factor", default=2.0, minv=0.1, maxv=8.0, step=0.25, label="Upscale factor"),
            _int("tile_size", default=1024, minv=64, maxv=2048, step=64, label="Tile size"),
            _int("tile_overlap", default=64, minv=0, maxv=512, step=8, label="Tile overlap"),
        ],
        optional=[
            _bool("auto_overlap", default=False, label="Auto overlap", section="advanced"),
            _bool("auto_mode", default=False, label="Full auto", section="advanced"),
            _segmented(
                "auto_profile",
                options=["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"],
                default="Balanced",
                section="advanced",
            ),
            _int("manual_tile_cols", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _int("manual_tile_rows", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _bool("non_square_tiles", default=False, section="advanced"),
            _bool("auto_fix_thin_edges", default=False, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
        NodeOutput(name="tiles", type="IMAGE"),
        NodeOutput(name="upscale_by", type="FLOAT"),
        NodeOutput(name="denoise", type="FLOAT"),
        NodeOutput(name="tile_width", type="INT"),
        NodeOutput(name="tile_height", type="INT"),
        NodeOutput(name="mask_blur", type="INT"),
        NodeOutput(name="tile_padding", type="INT"),
        NodeOutput(name="overlap", type="FLOAT"),
        NodeOutput(name="width", type="INT"),
        NodeOutput(name="height", type="INT"),
        NodeOutput(name="tile_cols", type="INT"),
        NodeOutput(name="tile_rows", type="INT"),
        NodeOutput(name="tile_count", type="INT"),
        NodeOutput(name="latent_w", type="INT"),
        NodeOutput(name="latent_h", type="INT"),
        NodeOutput(name="info", type="STRING"),
        NodeOutput(name="warnings", type="STRING"),
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="latent_tiles", type="LATENT"),
        NodeOutput(name="layout", type="DICT"),
    ],
)

_UPSCALE_SIMPLE = NodeContract(
    id="FiLUpscaleSimple",
    title="🔍 Upscaler Simple",
    category=f"{CATEGORY_ROOT}/Image",
    description="Upscale + tile an image through a required model — same tiling controls as Advanced.",
    min_size=(320, 320),
    family="image",
    inputs=NodeInputs(
        required=[
            _slider("upscale_factor", default=2.0, minv=0.1, maxv=8.0, step=0.25, label="Upscale factor"),
            _int("tile_size", default=1024, minv=64, maxv=2048, step=64, label="Tile size"),
            _int("tile_overlap", default=64, minv=0, maxv=512, step=8, label="Tile overlap"),
        ],
        optional=[
            _bool("auto_overlap", default=False, label="Auto overlap", section="advanced"),
            _bool("auto_mode", default=False, label="Full auto", section="advanced"),
            _segmented(
                "auto_profile",
                options=["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"],
                default="Balanced",
                section="advanced",
            ),
            _int("manual_tile_cols", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _int("manual_tile_rows", default=0, minv=0, maxv=64, step=1, section="advanced"),
            _bool("non_square_tiles", default=False, section="advanced"),
            _bool("auto_fix_thin_edges", default=False, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
        NodeOutput(name="tiles", type="IMAGE"),
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="latent_tiles", type="LATENT"),
        NodeOutput(name="layout", type="DICT"),
    ],
)

_TILE_ASSEMBLY = NodeContract(
    id="FiLTileAssembly",
    title="🧩 Tile Assembly",
    category=f"{CATEGORY_ROOT}/Image",
    description="Recombines processed tiles back into one image, feathered across the real overlap zones.",
    min_size=(270, 200),
    family="image",
    inputs=NodeInputs(required=[]),
    outputs=[NodeOutput(name="image", type="IMAGE")],
)

_KSAMPLER = NodeContract(
    id="FiLKSampler",
    title="⚡ KSampler",
    category=f"{CATEGORY_ROOT}/Sampling",
    description="Full-featured sampler with every sampler and scheduler.",
    min_size=(270, 260),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
            _int("steps", default=20, minv=1, maxv=10000, step=1, label="Steps"),
            _slider("cfg", default=7.0, minv=0.0, maxv=100.0, step=0.1, label="CFG"),
            _combo("sampler_name", values=_samplers(), default=_samplers()[0], label="Sampler"),
            _combo("scheduler", values=_schedulers(), default=_schedulers()[0], label="Scheduler"),
            _slider("denoise", default=1.0, minv=0.0, maxv=1.0, step=0.01, label="Denoise"),
        ],
        optional=[
            _combo("preview_method",
                   values=["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"],
                   default="auto", label="Preview", section="advanced"),
            _combo("vae_decode", values=["true", "true (tiled)", "false"], default="true",
                   label="VAE decode", section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="model", type="ANY"),
        NodeOutput(name="positive", type="ANY"),
        NodeOutput(name="negative", type="ANY"),
        NodeOutput(name="latent", type="LATENT"),
        NodeOutput(name="vae", type="ANY"),
        NodeOutput(name="image", type="IMAGE"),
    ],
)

_HIRESFIX = NodeContract(
    id="FiLHighResFix",
    title="🔬 HighRes Fix",
    category=f"{CATEGORY_ROOT}/Sampling",
    description="Packs latent/pixel upscale + re-sample settings into a script.",
    min_size=(320, 300),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _segmented("upscale_type", options=["latent", "pixel", "both"], default="latent", label="Upscale type"),
            _combo("hires_ckpt_name", values=["(use same)"],
                   default="(use same)", label="Hires checkpoint"),
            _combo("latent_upscaler",
                   values=["nearest-exact", "bilinear", "area", "bicubic", "bislerp"],
                   default="nearest-exact", label="Latent upscaler",
                   visible_when="upscale_type", visible_when_value="latent"),
            _combo("pixel_upscaler", values=["(none)"],
                   default="(none)", label="Pixel upscaler",
                   visible_when="upscale_type", visible_when_value=["pixel", "both"]),
            _slider("upscale_by", default=1.25, minv=0.01, maxv=8.0, step=0.05, label="Upscale by"),
            _bool("use_same_seed", default=True, label="Use same seed"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Seed"),
            _int("hires_steps", default=12, minv=1, maxv=10000, step=1, label="Hires steps"),
            _slider("denoise", default=0.56, minv=0.0, maxv=1.0, step=0.01, label="Denoise"),
            _int("iterations", default=1, minv=0, maxv=5, step=1, label="Iterations"),
        ],
        optional=[
            _bool("use_controlnet", default=False, label="Use ControlNet", section="controlnet"),
            _combo("control_net_name", values=["(none)"],
                   default="(none)", label="ControlNet", section="controlnet",
                   visible_when="use_controlnet", visible_when_value=True),
            _slider("strength", default=1.0, minv=0.0, maxv=10.0, step=0.01, label="Strength",
                    section="controlnet", visible_when="use_controlnet", visible_when_value=True),
            _combo("preprocessor", values=["none", "canny"],
                   default="none", label="Preprocessor", section="controlnet",
                   visible_when="use_controlnet", visible_when_value=True),
        ],
    ),
    outputs=[NodeOutput(name="script", type="DICT")],
)

_NOISE_CONTROL = NodeContract(
    id="FiLNoiseControl",
    title="🎛️ Noise Control",
    category=f"{CATEGORY_ROOT}/Sampling",
    description="RNG source + seed-variation script for FiLKSampler.",
    min_size=(270, 220),
    family="sampling",
    inputs=NodeInputs(
        required=[
            _combo("rng_source", values=["cpu", "gpu"], default="cpu", label="RNG source"),
            _bool("add_seed_noise", default=False, label="Seed variation"),
            _int("seed", default=0, minv=0, maxv=0xFFFFFFFFFFFFFFFF, step=1, label="Variation seed"),
            _slider("weight", default=0.5, minv=0.0, maxv=1.0, step=0.01, label="Weight"),
        ],
    ),
    outputs=[NodeOutput(name="script", type="DICT")],
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
        _UPSCALE_SIMPLE,
        _TILE_ASSEMBLY,
        _KSAMPLER,
        _HIRESFIX,
        _NOISE_CONTROL,
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
    "FiLUpscaleSimple",
    "FiLTileAssembly",
    "FiLKSampler",
    "FiLHighResFix",
    "FiLNoiseControl",
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