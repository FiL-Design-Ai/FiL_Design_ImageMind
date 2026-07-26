# FiL_Design_ImageMind v3 Architecture

## Runtime

`__init__.py` is a thin ComfyUI bootstrap. It imports each node module, filters the list through `common/release_gate.py` (staged 1.0.0 hardening rollout), publishes `WEB_DIRECTORY = "./frontend/dist"`, and registers `server_routes.py`.

Canonical node ids:

- `FiLProviderLoader`, `FiLOpticScanner` — LLM
- `FiLImageDecomposer` — Analysis
- `FiLStyleMixer` — Styling
- `FiLKSampler`, `FiLHighResFix`, `FiLNoiseControl` — Sampling
- `FiLUpscaleTileCalc`, `FiLUpscaleSimple`, `FiLTileAssembly`, `FiLColorWizard` — Image
- `FiLSeed` — Values
- `FiLNeuroCleaner`, `FiLSignalSwitch` — Tools

`FiLBeforeAfterCompare` was removed in 1.0.0 along with its `/compare/save` route and output folder.

Per-node help is a small "?" badge mounted on every node (`FilNodeShell`/`FilNodeHelpBadge`), opening the `helpStore`-backed popup for that node's `comfyClass`.

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
- **`frontend/src/nodes2/nodes/*.ts`** — 14 per-node registration modules using `addFilDomWidget`.
- **`frontend/src/components/nodes/*.vue`** — Vue node bodies (9, plus the shared `ProviderModelPicker`). Nodes without a custom panel (Decomposer, Noise Control, Tile Assembly) use native ComfyUI widgets and only get node styling.
- **`frontend/src/components/widgets/*.vue`** — design-system widgets (18 components).
- **`frontend/src/stores/`** — Pinia stores: `toastStore`, `providerStore`, `helpStore` (+ `helpDefaults`).
- **`frontend/src/stores/settings/`** — settings modules with `category: ["FiL_Design_ImageMind", ...]`.
- **`frontend/src/composables/`** — composables: `useShortcuts`, `useConnectionFx`, `useRunButtonFx`, `useColorPicker`, `useI18n`, `scrollGuard`, `providerMeta`, `icons.ts`.

### UI patterns (v3)

- **Vue 3 + TS + Vite + Pinia**. Vue and Pinia externalised — consume `window.Vue` / `window.Pinia` globals from ComfyUI Nodes 2.0.
- **Widget API**: `node.addDOMWidget(name, "custom", el, {hideOnZoom, getValue, setValue, getHeight, onDraw})`. Each node component receives a single `state: FilNodeState` prop for reactive binding.
- **Design system**: CSS variables on `:root` (`--fil-accent`, `--fil-panel`, `--fil-text`, `--fil-radius`, …), injected at app boot. Scoped styles per component — no global leakage.
- **Icon system**: `src/composables/icons.ts` exports `ICONS` map (Lucide-style inline SVGs) and `icon(name)` helper. `<FilIcon>` renders via `v-html`.
- **Help popup**: `<FilHelpPopup>` wraps `<FilModal>` (Teleport + focus trap + Esc). Content from `helpStore` registry (dynamically populated from `helpDefaults.ts`).
- **Color picker**: `<FilColorPicker>` grid of 20 preset swatches + `useColorPicker` composable registering `getExtraMenuOptions`.
- **Toast**: routes through `extensionManager.toast` when available, falls back to Pinia `<FilToastStack>`.
- **Settings**: `readSetting<T>(id, fallback)` helper uses `extensionManager.setting.get` with `app.ui.settings.getSettingValue` fallback.
- **Shortcuts**: `installShortcuts(app)` registers declarative `commands`/`keybindings`/`menuCommands` (advanced guide §11, §12.3) with fallback keydown handler.
- **Effects**: `useConnectionFx` (accent pulse via canvas node element box-shadow), `useRunButtonFx` (header flash on queue), `useAdaptiveTitleInk` (luminance-based contrast).
- **State persistence**: workflow serialised via `addDOMWidget` getValue/setValue. Legacy `fil_ui_compare_*` keys preserved exactly.

### Settings (v3)

ComfyUI settings registered by FiL_Design_ImageMind (under `["FiL_Design_ImageMind", …]` categories):
- See `frontend/src/stores/settings/*.ts` for the full list (connection FX, run button, shortcuts, title ink, provider manager).

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
