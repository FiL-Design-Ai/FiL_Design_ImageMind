"""FiL_Design_ImageMind node-contract registry.

Hand-curated contracts for every canonical node id. The contracts describe the
*frontend-visible* widget layer; the Python node classes still own their own
`define_schema()` for ComfyUI core. Every node class must have an entry here —
`tests/test_node_contracts.py` enforces that parity.

When `pyproject.toml` and the per-node files are moved to `backend/` (Stage
of the larger migration), this registry will be derived directly from the
node classes — at that point this file becomes the single source of truth.
For now it is the typed frontend contract that scripts/gen_contracts.mjs
consumes.
"""

from __future__ import annotations

from typing import Any

from ..brand import CATEGORY_ROOT, SETTINGS_PREFIX
from ..color_correction import METHOD_KEYS as COLOR_METHOD_KEYS
from ..config import PROVIDERS
from ..dataset.bucketing import BASE_RESOLUTIONS as DATASET_BASE_RESOLUTIONS
from ..dataset.bucketing import CROP_MODES as DATASET_CROP_MODES
from ..dataset.captioning import CAPTION_MODES as DATASET_CAPTION_MODES
from ..dataset.writer import CAPTION_EXTENSIONS as DATASET_CAPTION_EXTENSIONS
from ..dataset.writer import IMAGE_FORMATS as DATASET_IMAGE_FORMATS
from ..dataset.writer import LAYOUTS as DATASET_LAYOUTS
from ..dataset.writer import WRITE_MODES as DATASET_WRITE_MODES
from ..data import (
    DETAIL_LEVELS,
    LANGUAGES,
    MODEL_TYPE_OPTIONS,
    PROMPT_MODE_OPTIONS,
    default_detail_level,
    first_or_default,
    get_default_agent_key,
    get_default_focus_key,
    get_visible_agent_keys,
    get_visible_focus_keys,
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
    description="Fixed or randomized seed with reuse buttons.",
    min_size=(240, 90),
    family="value",
    inputs=NodeInputs(
        required=[
            # `mode` and the two action buttons are frontend-only controls that
            # Seed.vue renders by hand — the node's own schema has just `seed`.
            # Listed in UI_ONLY_WIDGETS below so the contract/schema parity test
            # accepts them.
            _segmented("mode", options=["random", "fixed"], default="random", label="Mode"),
            _int("seed", default=0, minv=0, maxv=999999999999, step=1, label="Seed"),
        ],
        optional=[
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
    min_size=(280, 250),
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
    min_size=(380, 300),
    family="llm",
    inputs=NodeInputs(
        required=[
            _string("prompt", section="prompt"),
            _string("negative_prompt", section="prompt"),
            _string("custom_style", section="prompt"),
            _segmented(
                "response_format",
                options=["text", "tags", "json"],
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
            # Second axis: the craft layer to weigh heavier, composable with
            # any subject agent above (see AGENT_FOCUSES in common/data.py).
            # Own section, not `agent`: the panel draws one header per section,
            # so sharing it stacked both grids under "AGENT" with no divider —
            # two chips reading "⚪ None" and nothing saying they are different
            # axes.
            _chip_grid(
                "agent_focus",
                values=get_visible_focus_keys(),
                default=get_default_focus_key(),
                columns=3,
                section="focus",
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
        # `width`/`height` are deliberately absent: they are socket-only inputs
        # (`force_input` in node_scanner.py), so there is no widget for the panel
        # to render — the target resolution is wired in from the graph.
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
    description="GPU VRAM and loaded model memory cleanup.",
    min_size=(240, 82),
    family="tool",
    inputs=NodeInputs(
        required=[
            _bool("clean_vram", default=True, label="Flush GPU Cache"),
            _bool("unload_models", default=True, label="Unload Models"),
        ],
    ),
    outputs=[NodeOutput(name="output", type="ANY")],
)

_UPSCALE = NodeContract(
    id="FiLUpscaleTileCalc",
    title="🔍 Upscaler Advanced",
    category=f"{CATEGORY_ROOT}/Image",
    description="Computes optimal tile grid layout for upscaling.",
    min_size=(340, 300),
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
    min_size=(340, 300),
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
            _slider("eta", default=1.0, minv=0.0, maxv=100.0, step=0.01, label="Eta (η)"),
            _bool("bongmath", default=True, label="Bongmath", section="advanced"),
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
    # 380, not 320: the own-seed row is a readout plus three pills, and the
    # Russian captions need ~370px before FilSeedRow starts truncating them.
    # Height dropped from 300 with the ADVANCED section: six rows show by
    # default instead of nine.
    # Keep in step with nodes2/nodes/hiresfix.ts — test_ui_presentation guards it.
    min_size=(380, 230),
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

_DECOMPOSER = NodeContract(
    id="FiLImageDecomposer",
    title="👁️‍🗨️ Image Decomposer",
    category=f"{CATEGORY_ROOT}/Analysis",
    description="Decomposes image or prompt into Subject, Lighting, Composition, Style, and Full Prompt outputs.",
    family="llm",
    min_size=(300, 240),
    inputs=NodeInputs(
        required=[
            _string("prompt", default="", multiline=True, label="Description"),
        ],
        optional=[
            _combo("language", values=LANGUAGES, default="English", label="Language"),
        ],
    ),
    outputs=[
        NodeOutput(name="subject", type="STRING"),
        NodeOutput(name="lighting", type="STRING"),
        NodeOutput(name="composition", type="STRING"),
        NodeOutput(name="style", type="STRING"),
        NodeOutput(name="full_prompt", type="STRING"),
    ],
)

_STYLE_MIXER = NodeContract(
    id="FiLStyleMixer",
    title="🎛️ Style Mixer",
    category=f"{CATEGORY_ROOT}/Styling",
    description="Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
    family="base",
    min_size=(380, 320),
    inputs=NodeInputs(
        required=[
            _string("base_prompt", default="", multiline=True, label="Base Prompt"),
            _chip_list("style_1", values=["(None)"] + get_visible_style_keys("photo_style") + get_visible_style_keys("art_style"), default="(None)", label="Style 1"),
            _slider("weight_1", default=1.0, minv=0.0, maxv=1.0, step=0.05, label="Weight 1"),
        ],
        optional=[
            _combo("fusion_mode", values=["Weighted Stack (Fast)", "Smart LLM Fusion (Gen-Mix)"], default="Weighted Stack (Fast)", label="Fusion Mode"),
            _combo("img_focus_1", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 1 Focus"),
            _slider("img_weight_1", default=0.8, minv=0.0, maxv=1.0, step=0.05, label="Image 1 Weight"),
            _combo("img_focus_2", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 2 Focus"),
            _slider("img_weight_2", default=0.6, minv=0.0, maxv=1.0, step=0.05, label="Image 2 Weight"),
            _combo("img_focus_3", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 3 Focus"),
            _slider("img_weight_3", default=0.4, minv=0.0, maxv=1.0, step=0.05, label="Image 3 Weight"),
            _combo("img_focus_4", values=["Auto / General", "Style & Texture", "Color & Lighting", "Subject & Composition", "Mood & Atmosphere"], default="Auto / General", label="Image 4 Focus"),
            _slider("img_weight_4", default=0.2, minv=0.0, maxv=1.0, step=0.05, label="Image 4 Weight"),
            _chip_list("style_2", values=["(None)"] + get_visible_style_keys("photo_style") + get_visible_style_keys("art_style"), default="(None)", label="Style 2"),
            _slider("weight_2", default=0.5, minv=0.0, maxv=1.0, step=0.05, label="Weight 2"),
            _chip_list("style_3", values=["(None)"] + get_visible_style_keys("photo_style") + get_visible_style_keys("art_style"), default="(None)", label="Style 3"),
            _slider("weight_3", default=0.3, minv=0.0, maxv=1.0, step=0.05, label="Weight 3"),
        ],
    ),
    outputs=[
        NodeOutput(name="styled_prompt", type="STRING"),
        NodeOutput(name="style_overlay", type="STRING"),
    ],
)

_COLOR_WIZARD = NodeContract(
    id="FiLColorWizard",
    title="🎨 Color Wizard",
    category=f"{CATEGORY_ROOT}/Image",
    description="Automatically corrects image colours using white balance, LAB contrast enhancement, channel stretching, reference colour matching, and WB picker.",
    family="image",
    min_size=(320, 310),
    inputs=NodeInputs(
        required=[
            _combo("method", values=COLOR_METHOD_KEYS, default="Full Auto", label="Method"),
            _slider("strength", default=0.8, minv=0.0, maxv=1.0, step=0.05, label="Strength"),
        ],
        optional=[
            _float("saturate", default=0.5, minv=0.0, maxv=5.0, step=0.1, label="Saturate", section="advanced"),
            _slider("temperature", default=0.0, minv=-1.0, maxv=1.0, step=0.05, label="Temperature", section="advanced"),
            _slider("tint", default=0.0, minv=-1.0, maxv=1.0, step=0.05, label="Tint", section="advanced"),
            _bool("preserve_skin", default=False, label="Preserve skin", section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="image", type="IMAGE"),
    ],
)

_SWITCH = NodeContract(
    id="FiLSignalSwitch",
    title="🔀 Cyber Switch",
    category=f"{CATEGORY_ROOT}/Tools",
    description="Universal signal pass-through toggle.",
    inputs=NodeInputs(
        required=[
            _bool("enable", default=True, label="Enable", section="settings", tooltip="Toggle signal pass-through ON or OFF."),
        ]
    ),
    outputs=[
        NodeOutput(name="output", type="ANY"),
    ],
)

_DATASET_FORGE = NodeContract(
    id="FiLDatasetForge",
    title="📚 LoRA Dataset Forge",
    category=f"{CATEGORY_ROOT}/Dataset",
    description="Batch → aspect-bucketed images + LLM captions written as a kohya/flat LoRA dataset.",
    min_size=(360, 460),
    family="llm",
    inputs=NodeInputs(
        required=[
            _string("dataset_name", default="my_lora", label="Dataset name", section="settings"),
            _string("trigger_word", default="", label="Trigger word", section="settings"),
            _string("class_token", default="", label="Class token", section="settings"),
            _combo("base_resolution", [str(r) for r in DATASET_BASE_RESOLUTIONS], "1024", label="Resolution", section="settings"),
            _segmented("layout", options=list(DATASET_LAYOUTS), default="kohya", label="Layout", section="settings"),
            _int("repeats", default=10, minv=1, maxv=1000, step=1, label="Repeats", section="settings"),
            _combo("caption_mode", list(DATASET_CAPTION_MODES), "natural", label="Caption mode", section="settings"),
            _segmented("crop_mode", options=list(DATASET_CROP_MODES), default="center", label="Crop", section="settings"),
            _bool("dry_run", default=False, label="Dry run", section="settings"),
        ],
        optional=[
            _string("captions", default="", multiline=True, label="Manual captions"),
            _segmented("write_mode", options=list(DATASET_WRITE_MODES), default="append", section="advanced"),
            _int("caption_max_words", default=60, minv=4, maxv=400, step=1, section="advanced"),
            _combo("caption_language", LANGUAGES, first_or_default(LANGUAGES, "en"), section="advanced"),
            _string("dont_caption", default="", multiline=True, label="Never caption", section="advanced"),
            _string("caption_instruction", default="", multiline=True, section="advanced"),
            _int("bucket_step", default=64, minv=8, maxv=256, step=8, section="advanced"),
            _combo("caption_extension", list(DATASET_CAPTION_EXTENSIONS), ".txt", section="advanced"),
            _combo("image_format", list(DATASET_IMAGE_FORMATS), "png", section="advanced"),
            _int("jpg_quality", default=95, minv=50, maxv=100, step=1, section="advanced"),
            _int("seed", default=-1, minv=-1, maxv=999999999999, step=1, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="preview", type="IMAGE"),
        NodeOutput(name="report", type="STRING"),
        NodeOutput(name="dataset_path", type="STRING"),
        NodeOutput(name="manifest", type="DICT"),
    ],
)

NODE_SCHEMAS: dict[str, NodeContract] = {
    contract.id: contract
    for contract in (
        _SEED,
        _PROVIDER,
        _SCANNER,
        _CLEANER,
        _UPSCALE,
        _UPSCALE_SIMPLE,
        _TILE_ASSEMBLY,
        _KSAMPLER,
        _HIRESFIX,
        _NOISE_CONTROL,
        _DECOMPOSER,
        _STYLE_MIXER,
        _COLOR_WIZARD,
        _SWITCH,
        _DATASET_FORGE,
    )
}

CANONICAL_IDS: tuple[str, ...] = tuple(NODE_SCHEMAS)

# Contract widgets that deliberately have no matching input in the node's
# `define_schema()` — purely frontend controls rendered by the Vue panel.
# Anything not listed here must exist in the schema; tests/test_node_contracts.py
# enforces that, which is what caught a stale `seed` widget left on
# FiLProviderLoader after the input was removed from the node.
UI_ONLY_WIDGETS: dict[str, set[str]] = {
    "FiLSeed": {"mode", "use_last_seed", "new_fixed"},
}

# NOTE: no hand-written id list guards this module any more. A duplicated list
# here only ever compared two copies of the same file's content, which is how
# FiLColorWizard shipped registered-but-contract-less. Parity against the actual
# node classes is enforced by tests/test_node_contracts.py.


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