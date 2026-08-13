<p align="center">
  <img src="docs/images/hero.png" alt="FiL Design ImageMind" width="100%">
</p>

<h1 align="center">FiL Design ImageMind</h1>

<p align="center">
  AI-powered ComfyUI node pack for image analysis, prompt engineering, tiled upscaling, sampling, model cycling and colour work in one coherent, themed UI.
</p>

<p align="center">
  <a href="https://github.com/FiL-Design-Ai/FiL_Design_ImageMind/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/FiL-Design-Ai/FiL_Design_ImageMind/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://www.python.org/"><img alt="Python 3.10+" src="https://img.shields.io/badge/Python-3.10%2B-3776ab?style=flat-square&logo=python"></a>
  <a href="https://github.com/comfyanonymous/ComfyUI"><img alt="ComfyUI 0.3.60+" src="https://img.shields.io/badge/ComfyUI-0.3.60%2B-111111?style=flat-square"></a>
  <a href="https://docs.comfy.org/custom-nodes/backend/lifecycle"><img alt="ComfyUI API V3" src="https://img.shields.io/badge/ComfyUI_API-V3-7c5cff?style=flat-square"></a>
  <a href="#node-reference"><img alt="Nodes" src="https://img.shields.io/badge/Nodes-19-f08a45?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square"></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> -
  <a href="#quick-start">Quick start</a> -
  <a href="#node-reference">Nodes</a> -
  <a href="#provider-setup">Providers</a> -
  <a href="#screenshots">Screenshots</a>
</p>

<p align="center">
  <a href="#english">English</a> / <a href="#русский">Русский</a>
</p>

---

## English

- [What is this](#what-is-this)
- [Why ImageMind](#why-imagemind)
- [Start here](#start-here)
- [Interface preview](#interface-preview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Provider setup](#provider-setup)
- [Quick start](#quick-start)
- [Examples](#examples)
- [Node reference](#node-reference)
- [Tiled upscale pipeline](#tiled-upscale-pipeline)
- [Prompting system](#prompting-system)
- [Settings](#settings)
- [Themes and localization](#themes-and-localization)
- [HTTP API](#http-api)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Project layout](#project-layout)
- [Privacy & security](#privacy--security)

### What is this

A custom node pack for **ComfyUI**, written against the **V3 node API** (`io.ComfyNode`,
declarative `define_schema()`, async `execute()`), with a Vue 3 + TypeScript frontend bundled
into `frontend/dist`. It covers four main areas across 19 specialized nodes:

| Area | What you get |
|---|---|
| 🧠 **LLM & vision** | Seven providers (local and cloud), 12 subject agents plus a neutral describer — each composable with 5 craft focuses — model-specific prompt profiles for Z-Image, FLUX, SDXL, QWEN, Krea 2, Ideogram 4 and a universal Video profile for video models |
| 🖼️ **Image pipeline** | Tile-grid planning with real overlap maths, model upscaling, per-tile crops in pixel *and* latent space, feathered re-assembly, automatic colour correction, LoRA Dataset Forge |
| 🎛️ **Sampling & Cycling** | A full KSampler with every sampler/scheduler, passthrough sockets, built-in preview, HighRes-fix, Noise-Control scripts, plus automated Model Cycler with VRAM flushing and watermark label outputs |
| 🎨 **UI Engine** | Every node draws a real Vue panel — twelve HUD themes (Cyberpunk Neon, Pip-Boy Green, Vault-Tec Amber, etc.), full ru/en localization, Graph Undo Guard, Takeover Wire Replacement with Undo toasts, compact toggles, numeric steppers, contract-driven option lists |

**Design rules the pack follows:** node files stay thin (schema + orchestration) while the logic
lives in `common/`; the widget contract in `common/contracts/` is the single source of truth and is
generated into the frontend, so a panel can never offer a value the backend rejects; every node in
this release went through a hardening checklist (audit → UX → functional fixes → UI → tests →
contract → live smoke on a running ComfyUI), recorded in
[`docs/release/HARDENING_LEDGER.md`](docs/release/HARDENING_LEDGER.md).

### Why ImageMind

ImageMind is for ComfyUI builders who want image understanding, prompt craft and upscale utilities
inside the same graph instead of jumping between separate tools. Use it when you need to inspect an
image with a vision model, turn that analysis into a model-specific prompt, build a repeatable
image pipeline with themed controls, cycle model checkpoints automatically, or generate training datasets.

### Start here

| If you want to... | Start with |
|---|---|
| Describe an image or make a prompt from it | 🕵️ Optic Scanner + 🔌 Provider Loader |
| Convert analysis into model-ready text | 🎛️ Style Mixer and the model prompt profiles |
| Upscale large images in a controlled way | 🔍 Upscaler Advanced → 🧩 Tile Assembly |
| Automatically cycle through checkpoints | 🔄 Model Cycler |
| Automatically cycle through LoRA adapters | 🧬 LoRA Loader |
| Prepare a LoRA dataset with aspect-bucketing | 📚 LoRA Dataset Forge |
| Try the pack without cloud keys | Ollama or LM Studio as the provider |

### Interface preview

| Optic Scanner | Style Mixer | Tile Assembly |
|---|---|---|
| ![FiL Optic Scanner node](docs/images/optic-scanner.png) | ![FiL Style Mixer node](docs/images/style-mixer.png) | ![FiL Tile Assembly node](docs/images/tile-assembly.png) |

The full gallery, grouped by category, is under [Screenshots](#screenshots).

### Requirements

| | |
|---|---|
| ComfyUI | **0.3.60+** (V3 node API) |
| Python | **3.10 / 3.11 / 3.12** |
| Python deps | `requests>=2.31`, `aiohttp>=3.9`, `PyYAML>=6.0.1`, `Pillow>=10`, `numpy>=1.26` |
| GPU | Not required by the pack itself — the sampling/upscale nodes use whatever ComfyUI already uses |
| LLM | Optional. Local (Ollama / LM Studio) works with no key and no account |

The frontend is shipped pre-built (`frontend/dist` is committed), so Node.js is **not** needed to
run the pack — only to develop it.

### Installation

**ComfyUI Manager** — search for `FiL_Design_ImageMind` and install.

**Manual:**

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/FiL-Design-Ai/FiL_Design_ImageMind.git
pip install -r FiL_Design_ImageMind/requirements.txt
```

On a portable/embedded ComfyUI install, use its interpreter for the requirements:

```bash
python_embeded\python.exe -m pip install -r ComfyUI\custom_nodes\FiL_Design_ImageMind\requirements.txt
```

On Windows, `install_requirements.bat` in the pack folder does that step for you:
it finds ComfyUI's own Python (`python_embeded`, `venv` or `.venv`), installs the
requirements into it and verifies the imports.

Restart ComfyUI. The nodes appear under **🎨 FiL Design/** in the node browser
(`LLM`, `Analysis`, `Styling`, `Sampling`, `Image`, `Values`, `Tools`).

### Provider setup

Seven providers ship in `common/config.py`. Local ones need nothing but a running server; cloud ones
need a key.

| Provider | Type | Endpoint | Key |
|---|---|---|---|
| 🦙 **Ollama** | Local | `http://127.0.0.1:11434` | none |
| 🤖 **LM Studio** | Local | `http://127.0.0.1:1234` | none |
| 🧠 **OpenAI** | Cloud | `api.openai.com/v1` | `OPENAI_API_KEY` |
| 🔵 **Google AI (Gemini)** | Cloud | `generativelanguage.googleapis.com` | `GOOGLE_API_KEY` |
| ⚡ **Groq** | Cloud | `api.groq.com/openai/v1` | `GROQ_API_KEY` |
| 🌐 **OpenRouter** | Cloud | `openrouter.ai/api/v1` | `OPENROUTER_API_KEY` |
| ☁️ **Cloudflare Workers AI** | Cloud | per-account endpoint | `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` |

**Where keys are read from, in order:**

1. `data/auth.json` — written by **Settings → FiL_Design_ImageMind → Providers** (git-ignored).
2. A real OS environment variable.
3. `API.env` in the pack root — `KEY=value` lines, git-ignored.

`config.yaml` holds non-secret defaults (timeouts, rate limits, local server URLs). `OLLAMA_URL`
and `LMSTUDIO_URL` can be overridden from the environment. The pack ships
`config.example.yaml`, not `config.yaml` — copy it under the shorter name and edit the copy, and
updating the pack can never overwrite your settings. Every value in it is already the built-in
default, so an untouched copy changes nothing.

**Verify a provider** without running a graph: the Provider Loader panel shows a live status badge
(the pack probes configured providers in the background and surfaces the error text when one fails),
and `GET /fil_design_imagemind/models/<provider>` lists the models it can actually see.

OpenRouter has a built-in **free-model vision fallback**: if the selected model can't do vision or
is rate-limited, the request is retried down a curated chain of free vision models
(`common/config.py`, `common/provider_resilience.py`).

### Quick start

Two ready workflows ship in [`example_workflows/`](example_workflows) — drag the `.json` onto the canvas, or pick them in Workflows → Browse Templates:

| Workflow | What it does |
|---|---|
| `fil-image-to-prompt.json` | Load image → Provider Loader → Optic Scanner → prompt out |
| `fil-text-prompt-studio.json` | Text idea → prompt expansion with styles and model profile |

Building it by hand takes three nodes:

1. **🔌 Provider Loader** — pick provider + model (hit *refresh* to pull the live model list).
2. **🕵️ Optic Scanner** — wire `config` in, connect an `image` (or type into `prompt`), choose an
   agent and a `model_type`, and wire your target `width`/`height` in (they are sockets, not fields).
3. Wire `prompt` into your CLIP Text Encode and queue.

### Examples

Five core workflows the pack simplifies into compact node chains:

- **Batch a LoRA dataset.** `LoadImage` (a folder batch) → **📚 LoRA Dataset Forge** — one caption
  per frame, aspect-bucketed, written straight into a `kohya_ss`-ready folder. `config` is optional;
  skip it and pass your own `captions` instead.
- **Cycle checkpoints per generation.** **🔄 Model Cycler** → wire model into `KSampler Pro` → automatically steps through model list on each run with VRAM cleanup and watermark text labels.
- **Blend a reference photo with a style preset.** `LoadImage` → **🎛️ Style Mixer** (`image_1` +
  `style_1`, each with its own `weight`) → `styled_prompt` into your CLIP Text Encode. `Weighted
  Stack` needs no LLM call.
- **Vary one detail, hold the rest fixed.** `LoadImage` → **👁️‍🗨️ Image Decomposer** → keep `subject`,
  `composition` and `style` as they came out, rewrite only `lighting` before recombining.
- **Match a batch's colour to one reference frame.** `LoadImage` → **🎨 Color Wizard** with
  `reference` wired to your target look; turn on `preserve_skin` for portraits.

### Node reference

All 18 nodes, grouped by category. Ranges below are the real schema limits.

#### 🎨 FiL Design/🧠 LLM

<details>
<summary><b>🔌 Provider Loader</b> — <code>FiLProviderLoader</code> — selects provider, model and generation parameters</summary>

Outputs a `config` object that every LLM-aware node in the pack consumes, plus the resolved model
name as a string.

| Input | Type | Default | Range / options |
|---|---|---|---|
| `provider` | COMBO | `ollama` | ollama, lmstudio, openai, google, groq, openrouter, cloudflare |
| `model` | COMBO | live list | fetched from the provider |
| `refresh_models` | BOOLEAN | `false` | re-fetches the model list |
| `temperature` | FLOAT | `0.7` | 0.0 – 2.0, step 0.05 |
| `max_tokens` | INT | `0` | 0 – 65536 (0 = provider default) |
| `rate_limit_ms` | INT | `100` | 0 – 5000 — minimum gap between requests |
| `max_image_side` | INT | `1024` | 128 – 4096, step 64 — images are downscaled before upload |

**Outputs:** `config` (FilProviderConfig), `model` (STRING)

</details>

<details>
<summary><b>🕵️ Optic Scanner</b> — <code>FiLOpticScanner</code> — vision analysis and prompt generation</summary>

The centrepiece: analyses an image (or expands a text idea) and writes a prompt tuned for the
target diffusion model. Prompt fields are resizable and also work as input sockets.

| Input | Type | Default | Range / options |
|---|---|---|---|
| `config` | FilProviderConfig | — | from Provider Loader |
| `agent` | COMBO | `⚪ None` | subject domain, 13 options — Portrait, Products, Nature & Landscape, Art & Illustration, Fashion, Animals, Architecture, Interior, City, Transport, Food, Games |
| `agent_focus` | COMBO | `⚪ None` | craft layer laid over the agent — 📐 Composition, 💡 Lighting & Color, 🔬 Ultra Detail, 🎬 Cinematic, 🎭 Emotion & Motion |
| `image` | IMAGE (optional) | — | leave empty for text-only mode |
| `width` / `height` | INT socket (optional) | `0` | connection-only — wire the target resolution in from Empty Latent Image or a resolution picker; > 0 tailors the prompt to that aspect ratio |
| `prompt` | STRING (optional) | `""` | your idea / seed text |
| `negative_prompt` | STRING (optional) | `""` | passed through to the metadata |
| `detail_level` | COMBO | `normal` | tiny, short, normal, detailed, ultra |
| `language` | COMBO | `en` | en, ru |
| `model_type` | COMBO | `Auto/None` | Z-Image Turbo, FLUX, SDXL, QWEN, Krea 2, Ideogram 4, Video (universal video profile), MiniMax H3 (timeline shot-blocks) |
| `video_duration` | INT | `0` | visible for video model types only. Requested clip length in seconds; 0 = Auto. Range follows the profile: Video 2-20, MiniMax H3 4-15 (API limit, clamped at injection) |
| `video_aspect` | COMBO | `Auto` | visible for video model types only. Auto, 16:9, 9:16, 1:1, 21:9 — written into the shot framing (H3 timeline header) |
| `video_sound` | COMBO | `Auto` | visible for video model types only. Auto / Off (silent clip) / Layered (mandatory ambience + foley + music clause) |
| `video_camera` | COMBO | `Auto` | visible for video model types only. Preferred camera move — Locked-off, Dolly in/out, Orbit, Pan, Handheld follow, Crane up, FPV push, Rack focus |
| `prompt_mode` | COMBO | `Auto` | Auto, Hybrid, Two-Stage |
| `photo_style` / `art_style` | COMBO | `None` | 171 photo + 129 art presets, grouped by category |
| `nsfw_photo_style` / `nsfw_art_style` | COMBO | `None` | separate 18+ catalogs |
| `custom_style` | STRING (optional) | `""` | free-form style text, merged with the picks |
| `seed` | INT | `-1` | -1 – 999999999999 (-1 = random) |
| `response_format` | COMBO | `text` | text, tags (flat comma list), json (enables the Ideogram 4 / FLUX JSON schema) |

**Outputs:** `prompt` (STRING), `metadata_json` (STRING), `metadata_dict` (FilDict)

`metadata_dict` carries `sent_prompt` — the exact system/user text of the LLM call that produced
the result, which is what you want when debugging a bad generation.

</details>

<details>
<summary><b>🧹 LLM Unloader</b> — <code>FiLLLMUnloader</code> — flushes VRAM and unloads models</summary>

| Input | Type | Default | Options |
|---|---|---|---|
| `clean_vram` | BOOLEAN | `true` | flush CUDA memory cache |
| `unload_models` | BOOLEAN | `true` | unload all models from GPU VRAM |
| `anything` | ANY (optional) | — | passthrough socket |

**Output:** `output` (ANY)

</details>

#### 🎨 FiL Design/🔍 Analysis

<details>
<summary><b>👁️‍🗨️ Image Decomposer</b> — <code>FiLImageDecomposer</code> — splits an image or prompt into layers</summary>

| Input | Type | Default | Options |
|---|---|---|---|
| `config` | FilProviderConfig | — | from Provider Loader |
| `image` | IMAGE (optional) | — | visual decomposition |
| `prompt` | STRING (optional) | `""` | text decomposition |
| `language` | COMBO (optional) | `English` | en, ru |

**Outputs:** `subject`, `lighting`, `composition`, `style`, `full_prompt` (all STRING)

Wire the individual layers into separate conditioning branches when you want to vary one aspect
(lighting, say) while holding the rest fixed.

</details>

#### 🎨 FiL Design/🎨 Styling

<details>
<summary><b>🎛️ Style Mixer</b> — <code>FiLStyleMixer</code> — weighted blend of styles and reference images</summary>

| Input | Type | Default | Notes |
|---|---|---|---|
| `config` | FilProviderConfig (optional) | — | only needed for LLM fusion |
| `fusion_mode` | COMBO | `Weighted Stack (Fast)` | or `Smart LLM Fusion (Gen-Mix)` |
| `base_prompt` | STRING | `""` | the prompt the styles are applied to |
| `image_1..4` | IMAGE (optional) | — | reference images |
| `img_weight_1..4` | FLOAT (optional) | 0.8 / 0.6 / 0.4 / 0.2 | influence per reference |
| `img_focus_1..4` | COMBO (optional) | `Auto / General` | Style & Texture, Color & Lighting, Subject & Composition, Mood & Atmosphere |
| `style_1..3` | COMBO (optional) | `(None)` | from the full 409-preset catalog (photo, art and both NSFW libraries) |
| `weight_1..3` | FLOAT (optional) | 1.0 / 0.5 / 0.3 | influence per style |

**Outputs:** `styled_prompt` (STRING), `style_overlay` (STRING)

`Weighted Stack` is deterministic string composition (no API call). `Smart LLM Fusion` sends the
stack to the vision model for a coherent rewrite and needs `config`.

</details>

<details>
<summary><b>🎬 Cinema Rig</b> — <code>FiLCinemaRig</code> — camera-department shot builder</summary>

| Input | Type | Default | Notes |
|---|---|---|---|
| `config` | FilProviderConfig (optional) | — | only needed for LLM Polish |
| `scene_prompt` | STRING | `""` | what is happening in the frame; the rig wraps it without touching it |
| `mode` | COMBO | `Original Shot` | or `Reshoot` (lock a reference image, change only the camera treatment) |
| `camera` | COMBO | `RED V-RAPTOR XL` | film bodies wrap the shot in analog stock language, digital in sensor language |
| `lens` | COMBO | `Helios 44-2 (Vintage)` | spherical or anamorphic optical character |
| `focal_length` | COMBO | `50mm (Human Eye)` | ultra-wide pressure → telephoto compression |
| `aperture` | COMBO | `f/11 (Deep Focus)` | how much of the frame holds focus |
| `color_grading` | COMBO | `Teal & Orange (Blockbuster)` | finish applied over the frame |
| `enable_grading` | BOOLEAN | `true` | off keeps the rig to hardware and medium only |
| `polish_mode` | COMBO | `Deterministic (Fast)` | or `LLM Polish (Gen-Rig)` |

**Outputs:** `rigged_prompt` (STRING), `rig_overlay` (STRING)

The five axes are the camera department; the scene rides through them untouched. `Deterministic`
is pure string assembly (no API call). `LLM Polish` rewrites the assembled rig into fluent prose
through the provider model and needs `config`; on any failure it falls back to the deterministic rig.
`rig_overlay` is the camera treatment alone, ready to stack under any prompt elsewhere.

</details>

#### 🎨 FiL Design/⚡ Sampling

<details>
<summary><b>⚡ KSampler</b> — <code>FiLKSampler</code> — full sampler with passthrough and scripts</summary>

| Input | Type | Default | Range / options |
|---|---|---|---|
| `model` | MODEL | — | |
| `seed` | INT | `0` | |
| `steps` | INT | `20` | |
| `cfg` | FLOAT | `7.0` | |
| `sampler_name` | COMBO | `euler` | every sampler ComfyUI exposes (loaded lazily at schema time) |
| `scheduler` | COMBO | `simple` | simple, sgm_uniform, karras, exponential, ddim_uniform, beta, … |
| `positive` / `negative` | CONDITIONING | — | |
| `latent` | LATENT | — | |
| `denoise` | FLOAT | `1.0` | |
| `eta` (η) | FLOAT | `1.0` | ancestral/SDE samplers only — see [`docs/ETA_GUIDE.md`](docs/ETA_GUIDE.md) |
| `bongmath` | BOOLEAN | `true` | |
| `preview_method` | COMBO | `auto` | auto, latent2rgb, taesd, vae_decoded_only, none |
| `vae_decode` | COMBO | `true` | true, true (tiled), false |
| `vae` | VAE (optional) | — | connection-only |
| `script` | FilHiresScript (optional) | — | HighRes Fix and/or Noise Control |

**Outputs:** `model`, `positive`, `negative`, `latent`, `vae`, `image` — the five passthroughs let
you chain samplers without re-dragging every wire.

</details>

<details>
<summary><b>🔬 HighRes Fix</b> — <code>FiLHighResFix</code> — upscale + re-sample script for KSampler</summary>

Producing a `script` object; it does not sample on its own. Wire its output into the KSampler's
`script` input.

| Input | Type | Default | Range / options |
|---|---|---|---|
| `upscale_type` | COMBO | `latent` | latent, pixel, both |
| `hires_ckpt_name` | COMBO | `(use same)` | optionally re-sample with a different checkpoint |
| `latent_upscaler` | COMBO | `nearest-exact` | nearest-exact, bilinear, area, bicubic, bislerp |
| `pixel_upscaler` | COMBO | first model found | your `models/upscale_models` folder |
| `upscale_by` | FLOAT | `1.25` | |
| `use_same_seed` / `seed` | BOOLEAN / INT | `true` / `0` | |
| `hires_steps` | INT | `12` | |
| `denoise` | FLOAT | `0.56` | |
| `iterations` | INT | `1` | repeat the hires pass |
| `use_controlnet` | BOOLEAN | `false` | |
| `control_net_name` | COMBO | first found | tile ControlNets live here |
| `strength` | FLOAT | `1.0` | ControlNet strength |
| `preprocessor` | COMBO | `none` | none, canny |
| `script` | FilHiresScript (optional) | — | chain another script (e.g. Noise Control) |

**Output:** `script`

</details>

<details>
<summary><b>🎛️ Noise Control</b> — <code>FiLNoiseControl</code> — RNG source and seed variation script</summary>

| Input | Type | Default | Options |
|---|---|---|---|
| `rng_source` | COMBO | `cpu` | cpu, gpu |
| `add_seed_noise` | BOOLEAN | `false` | enables the variation blend |
| `seed` | INT | `0` | variation seed |
| `weight` | FLOAT | `0.5` | blend strength |
| `script` | FilHiresScript (optional) | — | chain with HighRes Fix |

**Output:** `script`

The variation blend uses a sin/cos rotation rather than a linear lerp, so noise keeps unit variance
at every `weight` — a linear blend would quietly weaken the effective denoise in the middle of the
range.

</details>

#### 🎨 FiL Design/🖼️ Image

<details>
<summary><b>🔍 Upscaler Advanced</b> — <code>FiLUpscaleTileCalc</code> — tile-grid planner + model upscaler</summary>

| Input | Type | Default | Range / options |
|---|---|---|---|
| `image` | IMAGE (optional) | — | omit for latent-only mode |
| `upscale_model` | UPSCALE_MODEL (optional) | — | connect one to actually upscale pixels |
| `latent` | LATENT (optional) | — | resized with bislerp and tiled 1:1 with the image grid |
| `upscale_factor` | FLOAT | `2.0` | 0.1 – 8.0, step 0.25 |
| `tile_size` | INT | `1024` | 64 – 2048, step 64 |
| `tile_overlap` | INT | `64` | 0 – 512, step 8 — clamped at half the tile |
| `auto_overlap` | BOOLEAN | `false` | derives overlap from tile size (~12.5%) |
| `auto_mode` | BOOLEAN | `false` | full auto — profile picks tile size and overlap |
| `auto_profile` | COMBO | `Balanced` | Low VRAM, Balanced, High VRAM, Max Quality, Ultra Quality |
| `manual_tile_cols` / `manual_tile_rows` | INT | `0` | 0 – 64 — pin an exact grid (0 = derive it) |
| `non_square_tiles` | BOOLEAN | `false` | rectangular tiles, aspect clamped at 1.5:1 |
| `auto_fix_thin_edges` | BOOLEAN | `false` | shrinks the tile to the next standard size to avoid a thin edge strip (no-op at 512 — the floor) |

**Outputs (21):** `image`, `tiles`, `upscale_by`, `denoise`, `tile_width`, `tile_height`,
`mask_blur`, `tile_padding`, `overlap`, `width`, `height`, `tile_cols`, `tile_rows`, `tile_count`,
`latent_w`, `latent_h`, `info`, `warnings`, `latent`, `latent_tiles`, `layout`

</details>

<details>
<summary><b>🔍 Upscaler Simple</b> — <code>FiLUpscaleSimple</code> — same tiling panel, four outputs</summary>

Identical widget panel to Advanced and 100% delegation to it (one source of truth for the geometry),
trimmed to the outputs most graphs actually use.

**Outputs:** `image`, `tiles`, `latent`, `latent_tiles`, `layout`

</details>

<details>
<summary><b>🧩 Tile Assembly</b> — <code>FiLTileAssembly</code> — stitches processed tiles back together</summary>

| Input | Type | Notes |
|---|---|---|
| `tiles` | IMAGE | the processed tile batch, same order as it came out |
| `layout` | FilTileLayout | from either Upscaler |

**Output:** `image` — tiles are feathered across the real overlap zones, so seams don't show.

</details>

<details>
<summary><b>🎨 Color Wizard</b> — <code>FiLColorWizard</code> — automatic colour correction</summary>

| Input | Type | Default | Range / options |
|---|---|---|---|
| `image` | IMAGE | — | |
| `method` | COMBO | `Full Auto` | Full Auto, Gray World, White Patch, Channel Stretch, LAB Enhance |
| `strength` | FLOAT | `0.8` | 0.0 – 1.0 (0 = no change) |
| `saturate` | FLOAT | `0.5` | 0.0 – 5.0 — percentile saturation for Channel Stretch |
| `temperature` | FLOAT | `0.0` | -1.0 – 1.0 |
| `tint` | FLOAT | `0.0` | -1.0 – 1.0 |
| `preserve_skin` | BOOLEAN | `false` | protects skin tones from the correction |
| `reference` | IMAGE (optional) | — | match the palette of another image |
| `wb_mask` | MASK (optional) | — | white-balance picker: mask the area that should be neutral |

**Output:** `image`

</details>

#### 🎨 FiL Design/📁 Dataset

<details>
<summary><b>📚 LoRA Dataset Forge</b> — <code>FiLDatasetForge</code> — batch → training-ready LoRA dataset on disk</summary>

One pass: aspect-ratio buckets at the target resolution, one LLM caption per frame, files written
where kohya_ss / sd-scripts can read them.

| Input | Type | Default | Notes |
|---|---|---|---|
| `image` | IMAGE | — | the whole batch; one file per frame |
| `config` | FilProviderConfig (optional) | — | from 🔌 Provider Loader; only needed for LLM captions |
| `captions` | STRING (optional) | — | manual captions split on a `---` line |
| `dataset_name` | STRING | `my_lora` | folder under `ComfyUI/output/datasets`, sanitized |
| `trigger_word` | STRING | — | token that activates the LoRA |
| `class_token` | STRING | — | `woman`, `car`, … |
| `base_resolution` | COMBO | `1024` | 512 – 1536 |
| `layout` | COMBO | `kohya` | `kohya` → `img/<repeats>_<trigger> <class>/` + `dataset.toml` |
| `repeats` | INT | `10` | repeats per image per epoch |
| `caption_mode` | COMBO | `natural` | `natural` (Flux/SDXL) · `tags` (SD 1.5/Pony) · `hybrid` · `none` |
| `crop_mode` | COMBO | `center` | `entropy` crops toward detailed regions |

**Outputs:** `preview`, `report`, `dataset_path`, `manifest`.

</details>

#### 🎨 FiL Design/🔢 Values · 🧰 Tools

<details>
<summary><b>🔄 Model Cycler</b> — <code>FiLModelCycler</code> — automated model cycler with VRAM cleanup</summary>

Cycles through checkpoints, UNet/diffusion models, or connected MODEL signals on each generation run.

| Input | Type | Default | Notes |
|---|---|---|---|
| `model_list` | STRING | `""` | newline-separated list of model names / paths |
| `model_1..4` | MODEL (optional) | — | optional direct model input wires |
| `cycle_mode` | COMBO | `sequential` | sequential, random, shuffle |
| `unload_previous` | BOOLEAN | `true` | flush VRAM before loading the next checkpoint |
| `watermark_format` | STRING | `{model_name}` | format string for image overlay labels |

**Outputs:** `model` (MODEL), `model_name` (STRING), `clean_name` (STRING), `formatted_label` (STRING)

</details>

<details>
<summary><b>🧬 LoRA Loader</b> — <code>FiLLoraLoader</code> — automatic LoRA adapter cycler with inline weight parsing</summary>

Cycles through LoRA adapters on each generation run with automatic trigger-word extraction and bypass slot for clean vs. LoRA A/B testing.

| Input | Type | Default | Notes |
|---|---|---|---|
| `model` | MODEL (optional) | — | input diffusion model |
| `clip` | CLIP (optional) | — | input CLIP text encoder |
| `lora_list` | STRING | `""` | newline-separated list of LoRAs; inline weight support `lora.safetensors:0.8:0.5` |
| `filter_pattern` | STRING | `""` | wildcard filter when scanning auto-list (e.g. `*cyber*`) |
| `cycle_mode` | COMBO | `Sequential (Loop)` | Sequential (Loop), Sequential (Stop), Ping-Pong, Random, Fixed Index |
| `index` | INT | `0` | 0-based starting index |
| `strength_model` | FLOAT | `1.0` | default MODEL strength (-10.0 to 10.0) |
| `strength_clip` | FLOAT | `1.0` | default CLIP strength (-10.0 to 10.0) |
| `include_bypass` | BOOLEAN | `false` | ON inserts a `[Bypass / None]` slot at index 0 for A/B comparison |
| `auto_advance` | BOOLEAN | `true` | ON advances to next LoRA on each queue run |
| `skip_on_error` | BOOLEAN | `true` | ON logs warning and skips corrupt files instead of crashing |

**Outputs:** `MODEL`, `CLIP`, `LORA_NAME` (STRING), `CLEAN_NAME` (STRING), `TRIGGER_WORDS` (STRING), `LABEL` (STRING)

</details>

<details>
<summary><b>♻️ Seed</b> — <code>FiLSeed</code> · <b>🧹 Cleaner</b> — <code>FiLNeuroCleaner</code> · <b>🔀 Cyber Switch</b> — <code>FiLSignalSwitch</code> · <b>📡 Channel</b> — <code>FiLChannel</code></summary>

**♻️ Seed** — `seed` INT (0 – 2⁶⁴-1) → `SEED` INT. Panel is one row: the value plus 🔀 randomize,
♻️ reuse last, 🎲 new fixed random.

**🧹 Cleaner** — `clean_vram` BOOLEAN + `unload_models` BOOLEAN → `output` (ANY).

**🔀 Cyber Switch** — `input` (ANY, optional) + `enable` BOOLEAN → `output` (ANY). ON forwards the
value untouched; OFF passes `None` on the wire without blocking optional downstream nodes.

**📡 Channel** — Wireless signal broadcasting across the graph without visible wires.

</details>

---

## Русский

- [Что это](#что-это-1)
- [Зачем ImageMind](#зачем-imagemind-1)
- [С чего начать](#с-чего-начать-1)
- [Превью интерфейса](#превью-интерфейса-1)
- [Требования](#требования-1)
- [Установка](#установка-1)
- [Настройка провайдеров](#настройка-провайдеров-1)
- [Быстрый старт](#быстрый-старт-1)
- [Примеры](#примеры-1)
- [Справочник по узлам](#справочник-по-узлам-1)
- [Конвейер тайлового апскейла](#конвейер-тайлового-апскейла-1)
- [Система промптинга](#система-промптинга-1)
- [Настройки](#настройки-1)
- [Темы и локализация](#темы-и-локализация-1)

### Что это

Набор кастомных узлов для **ComfyUI** на **V3 API** (`io.ComfyNode`, декларативный
`define_schema()`, асинхронный `execute()`) с фронтендом на Vue 3 + TypeScript, собранным в
`frontend/dist`. Четыре основных направления (19 узлов):

| Направление | Что даёт |
|---|---|
| 🧠 **LLM и зрение** | Семь провайдеров (локальные и облачные), 12 предметных агентов плюс нейтральный описатель — каждый сочетается с 5 фокус-оверлеями, профили промптов под Z-Image, FLUX, SDXL, QWEN, Krea 2, Ideogram 4 и универсальный Video-профиль для видео-моделей |
| 🖼️ **Работа с изображением** | Планирование сетки тайлов с честной математикой нахлёста, апскейл моделью, кропы тайлов в пиксельном *и* латентном пространстве, сборка с растушёвкой, авто-цветокоррекция, LoRA Dataset Forge |
| 🎛️ **Сэмплинг и Циклер** | Полноценный KSampler со всеми сэмплерами/планировщиками, passthrough-сокетами и встроенным превью, скрипты HighRes Fix, Noise Control, плюс авто-переключатель моделей `Model Cycler` и LoRA-адаптеров `LoRA Loader` с очисткой VRAM и водяными знаками |
| 🎨 **Интерфейс и UX** | У каждого узла настоящая Vue-панель — 12 HUD-тем (Cyberpunk Neon, Pip-Boy Green, Vault-Tec Amber), полная ru/en локализация, Graph Undo Guard (защита от срыва графа при Ctrl+Z), Takeover Wire Replacement с тоастом отмены, компактные тумблеры, степперы |

---

### Быстрый старт

Два готовых шаблона воркфлоу поставляются в папке [`example_workflows/`](example_workflows) — перетащите `.json` файл на холст ComfyUI:

| Воркфлоу | Что делает |
|---|---|
| `fil-image-to-prompt.json` | Загрузка картинки → Provider Loader → Optic Scanner → промпт |
| `fil-text-prompt-studio.json` | Текстовая идея → расширение промпта со стилями и профилем модели |

---

### Справочник по узлам

Все 19 узлов по категориям:

#### 🎨 FiL Design/LLM
- 🔌 **Provider Loader** (`FiLProviderLoader`) — выбор провайдера, модели и параметров запроса.
- 🕵️ **Optic Scanner** (`FiLOpticScanner`) — зрение, анализ кадра и генерация промптов под DiT-архитектуры.
- 🧹 **LLM Unloader** (`FiLLLMUnloader`) — мгновенный сброс VRAM и выгрузка моделей.

#### 🎨 FiL Design/Analysis
- 👁️‍🗨️ **Image Decomposer** (`FiLImageDecomposer`) — разбор изображения или текста на слои (subject, lighting, composition, style).

#### 🎨 FiL Design/Styling
- 🎛️ **Style Mixer** (`FiLStyleMixer`) — смешивание стилей и референсных изображений.
- 🎬 **Cinema Rig** (`FiLCinemaRig`) — операторский конструктор кадра и фирменная сигнатура режиссера.

#### 🎨 FiL Design/Sampling
- ⚡ **KSampler** (`FiLKSampler`) — сэмплер с passthrough и скриптами.
- 🔬 **HighRes Fix** (`FiLHighResFix`) — скрипт двухстадийного апскейла и повторного сэмплинга.
- 🎛️ **Noise Control** (`FiLNoiseControl`) — управление RNG и вариативный шум.

#### 🎨 FiL Design/Image
- 🔍 **Upscaler Advanced** (`FiLUpscaleTileCalc`) — планировщик тайловой сетки и апскейлер.
- 🔍 **Upscaler Simple** (`FiLUpscaleSimple`) — упрощенный тайловый планировщик.
- 🧩 **Tile Assembly** (`FiLTileAssembly`) — бесшовная сборка тайлов с растушевкой.
- 🎨 **Color Wizard** (`FiLColorWizard`) — авто-цветокоррекция, баланс белого и подгонка палитры.

#### 🎨 FiL Design/Dataset
- 📚 **LoRA Dataset Forge** (`FiLDatasetForge`) — пакетирование, подпись и генерация LoRA датасетов под kohya_ss.

#### 🎨 FiL Design/Values & Tools
- 🔄 **Model Cycler** (`FiLModelCycler`) — авто-переключатель моделей на каждом шаге с очисткой VRAM и водяными знаками.
- 🧬 **LoRA Loader** (`FiLLoraLoader`) — авто-переключатель и парсер LoRA с автоизвлечением триггер-слов, режимом bypass и плашками подписей.
- ♻️ **Seed Generator** (`FiLSeed`) — управление генератором случайных чисел (до MAX_SAFE_INTEGER).
- 🔀 **Cyber Switch** (`FiLSignalSwitch`) — универсальный переключатель сигналов с пробросом `None`.
- 📡 **Channel** (`FiLChannel`) — беспроводная трансляция сигналов по всему графу.

---

### Темы и локализация

В настройках **Settings → FiL_Design_ImageMind**:
- **Языки интерфейса**: Полная поддержка Русский (RU) / English (EN).
- **Стили интерфейса**: Cyberpunk Neon, Fallout Pip-Boy Green, Vault-Tec Amber и классический HUD.

---
*FiL Design ImageMind — Built for speed, style, and perfection in ComfyUI.*
