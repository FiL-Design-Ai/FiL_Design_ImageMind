# FiL_Design_ImageMind v3 Architecture

## Runtime

`__init__.py` is a thin ComfyUI bootstrap. It imports each node module, filters the list through `common/release_gate.py` (staged 1.0.0 hardening rollout), publishes `WEB_DIRECTORY = "./frontend/dist"`, and registers `server_routes.py`.

Canonical node ids:

- `FiLProviderLoader`, `FiLOpticScanner` — LLM
- `FiLImageDecomposer` — Analysis
- `FiLStyleMixer`, `FiLCinemaRig` — Styling
- `FiLKSampler`, `FiLHighResFix`, `FiLNoiseControl` — Sampling
- `FiLUpscaleTileCalc`, `FiLUpscaleSimple`, `FiLTileAssembly`, `FiLColorWizard` — Image
- `FiLDatasetForge` — Dataset
- `FiLSeed` — Values
- `FiLNeuroCleaner`, `FiLSignalSwitch`, `FiLChannel` — Tools

`FiLBeforeAfterCompare` was removed in 1.0.0 along with its `/compare/save` route and output folder.

Node documentation lives in this repository, not in the canvas: the "?" badge, its `helpStore` registry and the popup they opened were removed after 1.0.0. Tooltips on the widgets themselves come from `data/locales/{en,ru}.json` through the Python schemas.

This is a new public contract. Workflows created for the former backup implementation are not a compatibility target.

## Backend ownership

- `nodes/node_*.py`: ComfyUI inputs, outputs and node-owned behavior.
- `common/`: provider, prompt, image and style helpers used by more than one runtime area.
- `common/style_engine/`: data-only style rules, presets, the resolver, and the public `StyleEnforcer` used by Optic Scanner to produce enforcement blocks.
- `common/contracts/registry.py`: canonical ids, titles, categories and input/output schemas for every node — single source of truth, used by the frontend contract endpoint and validated at import time via its own `assert set(CANONICAL_IDS) == {...}`.
- `server_routes.py`: `/fil_design_imagemind/*` HTTP API. It must not expose API keys or internal exception details.

Do not add import aliases, background preflight threads or fallback imports from `FiL_Design_ImageMind_backup`. Add shared helpers only after two runtime areas need them.

Optional engines (`common/style_engine/`) may be skipped at import time if the rules data is unavailable; the Optic Scanner falls back to the bare style block when the contract is inactive.

## Frontend ownership (v3 stack)

- **`frontend/dist/`** — built UMD bundle (`fil_design_imagemind.js` + `style.css`), served by ComfyUI via `WEB_DIRECTORY = "./frontend/dist"`.
- **`frontend/src/api/contracts.ts`** — auto-generated from Pydantic JSON Schema (`scripts/gen_contracts.mjs`).
- **`frontend/src/api/client.ts`** — typed HTTP client for `/fil_design_imagemind/*` routes.
- **`frontend/src/nodes2/domWidgetHost.ts`** — core `node.addDOMWidget()` harness that mounts Vue components.
- **`frontend/src/nodes2/nodes/*.ts`** — one registration module per node (15).
- **`frontend/src/components/nodes/*.vue`** — Vue node bodies (9, plus the shared `ProviderModelPicker`). Nodes whose panel is a handful of plain widgets (Cleaner, Decomposer, Noise Control, Tile Assembly, KSampler) use native ComfyUI widgets and only get node styling — a DOM widget there costs the whole browser-vs-LiteGraph layout reconciliation for nothing.
- **`frontend/src/components/widgets/*.vue`** — design-system widgets (19 components).
- **`frontend/src/stores/`** — Pinia stores: `toastStore`, `providerStore`.
- **`frontend/src/stores/settings/`** — settings modules, all aggregated in `allSettings.ts`.
- **`frontend/src/composables/`** — `useConnectionFx`, `useRunButtonFx`, `useI18n`, `scrollGuard`, `providerMeta`, `icons.ts`.

### UI patterns (v3)

- **Vue 3 + TS + Vite + Pinia**. Vue and Pinia externalised — consume `window.Vue` / `window.Pinia` globals from ComfyUI Nodes 2.0.
- **Widget API**: `node.addDOMWidget(name, "custom", el, {hideOnZoom, getValue, setValue, getHeight, onDraw})`. Each node component receives a single `state: FilNodeState` prop for reactive binding.
- **Both renderers**. ComfyUI draws a node either on the LiteGraph canvas (default) or as DOM under `Comfy.VueNodes.Enabled` (Nodes 2.0). The two read different fields for the same intent, and every one of these was paid for with a broken release:
  - *Hiding a native widget* — canvas reads `widget.hidden`, Vue reads `widget.options.hidden` only. Always go through `nodes2/util.ts::hideWidget` / `hideNativeWidget`, which write both. The Vue snapshot is taken once when the node joins the graph (`useGraphNodeManager.ts` publishes no widget-change event), so hide at creation time.
  - *Keeping the panel out of the properties sidebar* — `hideInPanel`, never `canvasOnly`. The latter means "not rendered by the Vue renderer at all".
  - *Theme chrome* — the canvas painting lives in `nodes2/nodeStyle.ts`, its CSS twin in `styles/vueNodeSkin.ts`. Change one, change the other. The CSS side needs no renderer detection: it hangs off `.lg-node`, which exists only under Vue rendering, narrowed by `:has(.fil-node-shell)` to our own nodes.
  - *`node.color` / `node.bgcolor`* — the Vue renderer treats them as node surfaces, the canvas one does not. `color` is pinned to `#ffffff` for a canvas reason and would otherwise paint the header white.
  - *Widget input sockets* — the two renderers put them in different places. On the canvas, `nodes2/widgetInputSockets.ts` gives a hidden widget's slot a row of its own. Under Vue rendering the only dot a widget-backed input gets lives inside that widget's row and is drawn just for visible widgets, so the same module keeps those rows alive there (`keepVueSocketRow`) and `styles/vueNodeSkin.ts` strips them to a labelled socket. Both are driven by the one `*_SOCKET_INPUTS` list each node module already declares.
- **Design system**: CSS variables on `:root` (`--fil-accent`, `--fil-panel`, `--fil-text`, `--fil-radius`, …), injected at app boot. Scoped styles per component — no global leakage.
- **Icon system**: `src/composables/icons.ts` exports `ICONS` map (Lucide-style inline SVGs) and `icon(name)` helper. `<FilIcon>` renders via `v-html`.
- **Modal**: `<FilModal>` (Teleport + focus trap + Esc) — used by the provider manager. The help popup and the colour picker that also used it were removed after 1.0.0.
- **Context menu**: `registerStyledNode` wraps `getExtraMenuOptions` through an accessor, so the wrapper stays outermost whatever order extensions register in, and repairs ComfyUI-Manager's "Fix node (recreate)" entry (`nodes2/recreateNode.ts`) instead of adding items of its own.
- **Toast**: routes through `extensionManager.toast` when available, falls back to Pinia `<FilToastStack>`.
- **Settings**: `readSetting<T>(id, fallback)` helper uses `extensionManager.setting.get` with `app.ui.settings.getSettingValue` fallback.
- **Keyboard**: none. The pack registered `Shift+?` and `/` through the commands API until 1.0.0; global keys belong to ComfyUI's own keybinding settings, not to a node pack.
- **Effects**: `useConnectionFx` (connection toasts), `useRunButtonFx` (CSS pulse on the header of the node the `executing` event names, cleared when the queue drains), `useAdaptiveTitleInk` (luminance-based contrast).
- **State persistence**: workflow serialised via `addDOMWidget` getValue/setValue. Legacy `fil_ui_compare_*` keys preserved exactly.

### Settings (v3)

ComfyUI settings registered by FiL_Design_ImageMind (under `["FiL_Design_ImageMind", …]` categories):
- Every module in `frontend/src/stores/settings/` is aggregated in `allSettings.ts`, which is the array handed to ComfyUI. A settings file that is not in that array declares an id ComfyUI never registers, so every read of it returns the fallback — which is exactly how the connection-FX toggle spent 1.0.0.

Widget names and values come from Python Pydantic contracts. Frontend must not silently change serialized values.

## API and local secrets

Supported routes:

- `GET /fil_design_imagemind/health` — status + `common.brand.VERSION`
- `POST /fil_design_imagemind/log_level`
- `GET /fil_design_imagemind/providers`
- `GET /fil_design_imagemind/models/{provider}`
- `GET /fil_design_imagemind/auth`
- `POST /fil_design_imagemind/auth`
- `POST /fil_design_imagemind/provider_probe`
- `GET /fil_design_imagemind/locale/{lang}`
- `GET /fil_design_imagemind/node_contracts`

`/fil_design_imagemind/node_contracts` is also consumed by the frontend `selfCheckNodeContracts()` hook.

Local credentials are stored in `data/auth.json`, which is ignored by Git. Responses replace keys with `***HIDDEN***`. Logs and provider errors must not contain credentials.

## Validation

Use the embedded ComfyUI Python:

```powershell
python.exe -m compileall -q __init__.py server_routes.py common nodes tests tools
python.exe -m pytest tests -q
python.exe tools/preflight_check.py
python.exe tools/scan_node_conflicts.py
```

Run `npm run typecheck` and `npm test` under `frontend/`. Finally restart ComfyUI and verify all fourteen nodes under `🎨 FiL Design/...`.

Tests that require `torch` use `pytest.importorskip("torch")` so the suite stays green without the framework installed.

---

## Optic Scanner Architecture

### Pipeline Overview

```
                    ┌─────────────────────────────────────────┐
                    │           🕵️ Optic Scanner              │
                    │         (nodes/node_scanner.py)         │
                    └─────────────────────────────────────────┘
                                     │
                    ┌────────────────▼────────────────────────┐
                    │        execute() — input hub            │
                    │   config, agent, image, prompt, style…  │
                    └────────────────┬────────────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              ▼                      ▼                      ▼
     ┌────────────────┐   ┌──────────────────┐   ┌──────────────────┐
     │ PromptGenerator│   │   StyleManager   │   │   StyleEnforcer  │
     │ (common/logic) │   │  (common/logic)  │   │(common/enforcer) │
     └────────┬───────┘   └────────┬─────────┘   └────────┬─────────┘
              │                    │                       │
              ▼                    ▼                       ▼
     agent + language +       loads styles           checks style
     detail + model_type      from style dicts       compatibility
              │                    │                  with description
              └────────────────────┼───────────────────────┘
                                   ▼
                    ┌──────────────────────────────┐
                    │    Two-Stage pipeline?        │
                    │ prompt_mode = Auto / Two-Stage│
                    └──────────┬───────────────────┘
                               │
              ┌────────────────┴────────────────┐
              ▼                                  ▼
     ┌──────────────────┐              ┌─────────────────────────┐
     │   Hybrid (1 pass)│              │  Two-Stage (2 pass)    │
     │                  │              │                        │
     │ system + style + │              │ Stage 1: raw desc      │
     │ user_message     │              │  (agent + lang + detail│
     │ → LLM            │              │   WITHOUT style)       │
     │                  │              │                        │
     │ return result    │              │ Stage 2: restyle       │
     └──────────────────┘              │  (agent + style,       │
                                       │   rework stage1 text) │
                                       │                        │
                                       │ return styled result   │
                                       └────────────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────┐
                              │    Post-convert (if needed)   │
                              │    DiT format / word-limit   │
                              │    clean_output()             │
                              └──────────────────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────┐
                              │  metadata_json + metadata_dict│
                              └──────────────────────────────┘
```

### Agents

Defined in `common/data.py` → `AGENTS` dict.

Each agent has a structured prompt format:

```
PURPOSE: mission statement
FOCUS: what to look at (with specific attributes)
CONCRETE: how to describe — grounded in observable traits, not labels
IGNORE: explicit stop-list of what NOT to generate
OUTPUT MODE: format (prose paragraph or comma-separated tags)
Order: suggested sequence for the description
```

#### Full Agent List

| # | Agent | Emoji |
|---|-------|-------|
| 1 | None | ⚪ |
| 2 | Portrait | 👤 |
| 3 | Products | 📦 |
| 4 | Nature & Landscape | 🌿 |
| 5 | Art & Illustration | 🎨 |
| 6 | Fashion | 👗 |
| 7 | Animals | 🐾 |
| 8 | Architecture | 🏛 |
| 9 | Interior | 🪑 |
| 10 | City | 🌆 |
| 11 | Transport | 🚗 |
| 12 | Food | 🍽 |
| 13 | Games | 🎮 |

The craft layers (Composition, Lighting & Color, Ultra Detail, Cinematic,
Emotion & Motion) live on a separate `agent_focus` axis; tag output is a
`response_format`, not an agent. Retired names are mapped by
`migrate_legacy_agent()` so saved workflows keep their behaviour.

#### Key Functions

- `get_visible_agent_keys()` — returns emoji-prefixed agent names for UI dropdown (`common/data.py:429`)
- `resolve_agent_key(value)` — matches both clean and emoji-prefixed agent keys (`common/data.py:453`)
- `get_default_agent_key()` — returns `"⚪ None"`, the neutral describer (`common/data.py`)
- `get_visible_focus_keys()` / `resolve_focus_key(value)` — the second axis, a craft-layer
  overlay appended after the agent template (`AGENT_FOCUSES` in `common/data.py`)
- `migrate_legacy_agent(value)` — maps an agent retired by the axis split onto
  `(agent, focus, response_format)` so saved workflows keep their behaviour
- `get_agent_output_mode(key)` — returns `"tags"` for Professional Tagger, `"prose"` for all others (`common/data.py:469`)

### Prompt Assembly

Located in `common/logic.py` → `PromptGenerator`.

#### `build_system_prompt_bundle()`

Collects, in priority order (later blocks override earlier defaults):

```
[AGENT TEMPLATE]
[TEXT-ONLY instruction — when no image is wired]
[Detail hint]
[Model type guidance, e.g. FLUX/Z-Image/SDXL/Video/MiniMax H3…]
[SHOT PARAMETERS — user-fixed video widget facts, only for video profiles]
[Focus overlay — composition / light / detail / cinematic / emotion]
[Aspect-ratio guidance from wired width/height — skipped when a video
 aspect widget is locked: the explicit widget outranks the sockets]
[Style block — only if styles are selected]
[Tag-shape override — when response_format=tags]
```

The language rule is deliberately NOT in this stack. The node appends style
overlays (enforcement / NSFW / custom style) on top of the bundle, and the
language rule must be the last block the model reads (it is the instruction
models drop first), so the bundle returns it separately and the node closes
the final system prompt with it.

Returns tuple: `(system_prompt, agent_template, style_block, language_hint)`

#### `build_system_prompt_two_stage_bundle()`

Same stack, split into two stages:

- **Stage 1**: the stack above WITHOUT the style block (raw description).
  The node appends the language rule right after it.
- **Stage 2**: the stack WITH the style block and the tag-shape override.
  The node stacks its own overlays (NSFW / custom style / enforcement /
  preset-support) on top and closes with the language rule.

Stage 2 does NOT re-process the image — it restyles stage 1's locked text.
Returns a dict: `stage1.prompt`, `stage2.prompt`, `style_block`,
`language_hint`.

#### Detail Hints (`common/data.py:14-20`)

| Level | Words | Description |
|-------|-------|-------------|
| tiny | 20-50 | 1-2 sentences |
| short | 40-80 | 2-4 sentences |
| normal | 100-250 | Balanced |
| detailed | 250-500 | Detailed |
| ultra | 500-1200 | Exhaustive |

### Model Type Guidance

Defined in `common/logic.py:20-66`.

Each model type gets appended to system prompt so the LLM knows what output shape to produce:

| Model | Format | Max Words | Negatives |
|-------|--------|-----------|-----------|
| Auto/None | — | — | Standard |
| Z-Image Turbo | Natural language (DiT) | 250 | Positive constraints |
| FLUX | Natural language (DiT) | 160 | Positive constraints |
| QWEN | 1-3 sentences | — | Standard |
| SDXL | Comma-separated tags | — | Standard |
| Krea 2 | Natural language prose | — | Positive constraints |
| Ideogram 4 | Plain natural language | — | Positive constraints |
| Video | One continuous shot description | 150 | Positive constraints |
| MiniMax H3 | Timeline shot-blocks | 250 | Positive constraints |

### Two-Stage vs Hybrid

Determined in `node_scanner.py:354-356`:

```python
if effective_mode == "Auto":
    effective_mode = "Two-Stage" if style_block.strip() else "Hybrid"
```

**Hybrid** — single LLM call. Image + agent + style + user prompt all sent together.

**Two-Stage** — two LLM calls:
1. **Stage 1**: agent + image → raw unstyled description
2. **Stage 2**: Stage 1 text + agent + style → restyled prompt

Stage 2 does NOT re-process the image — it only restyles the text from Stage 1. This prevents the style overlay from distorting the visual facts.

#### Fallback Chains

If Stage 1 times out → falls back to Hybrid (`_hybrid_call`)
If Stage 2 times out → falls back to Hybrid
If Stage 2 returns empty (<10 chars) → uses Stage 1 result as-is

### Style System

- **4 style widgets**: `photo_style`, `nsfw_photo_style`, `art_style`, `nsfw_art_style`
- **Sources**: `styles/photo.py`, `styles/nsfw_photo.py`, `styles/art.py`, `styles/nsfw_art.py`
- **StyleManager** (`common/logic.py:91-128`):
  - `build_style_block()` — collects all active styles into a block appended to system prompt
  - `get_active_styles()` — resolves widget values to prompt text

#### StyleEnforcer

Located in `common/style_enforcer.py`.

- `resolve_style_contract()` — checks whether the style preset is compatible with the source description
- `build_enforcement_block()` — adds rules to prevent style drift
- `build_preset_support_block()` — adds support text that helps the LLM apply the style correctly

### Post-Conversion

Applied in `node_scanner.py:423-436`. Runs when the model type needs prompt restructuring:

- **DiT models (FLUX, Z-Image)**: prose → dense DiT-format, word limit enforced
- **JSON format**: structured caption output
- **Professional Tagger**: skipped — `get_agent_output_mode()` returns "tags" and post-convert ignores tag-mode output

### Metadata Output

Each scanner execution returns:

- `prompt` (str) — generated text
- `metadata_json` (str) — JSON string with full execution trace
- `metadata_dict` (dict) — parsed metadata

Metadata includes: provider, model, agent, detail, elapsed time, style contract, response outcome (truncation check, cue hits, drift detection), decision trace (pipeline mode, fallback reasons), and the exact sent prompt for debugging.
