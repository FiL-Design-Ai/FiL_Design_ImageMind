# Changelog

## 1.0.0 (2026-07-10)

### Breaking
- **Project renamed: `FiL_LLM` → `FiL_Design_ImageMind`.** This is the first
  public 1.0.0 release under the new name; there is no backward-compatibility
  shim for anything below since the project was never publicly released
  under the old name.
- **Package/import name** — `FiL_LLM` → `FiL_Design_ImageMind` (`pyproject.toml`,
  `custom_nodes/<folder>`, all internal imports).
- **Node categories** — `FiL_LLM/*` → `🎨 FiL Design/*` in the ComfyUI
  node browser.
- **REST API route prefix** — `/fil_llm/*` → `/fil_design_imagemind/*`
  (health, models, providers, auth, provider_probe, compare/save, locale,
  node_contracts).
- **Settings prefix** — `FiL_LLM.*` → `FiL_Design_ImageMind.*` ComfyUI
  settings keys.
- **Frontend bundle** — `dist/fil_llm.js` → `dist/fil_design_imagemind.js`;
  Vite `base` now serves from `/extensions/FiL_Design_ImageMind/`.
- **Python exception base class** — `FiLLLMError` → `FiLError`.
- **Compare output folder** — saved images now land in
  `output/FiL_Design_ImageMind/compare/` instead of `output/FiL_LLM/compare/`.

### Added
- **`common/brand.py`** / **`frontend/src/constants/brand.ts`** — single
  source of truth for the brand token and its derived forms (category root,
  settings prefix, route slug, log tag), so future rebrands don't require a
  repo-wide string sweep.

## 4.0.0 (2026-07-05)

### Breaking
- **Migrated backend nodes from V1 to V3 ComfyUI API.** All 7 node classes now
  inherit from `io.ComfyNode` and use declarative `define_schema()` / `async def execute()`
  instead of `INPUT_TYPES()` / `FUNCTION`.
- **Entry point changed:** `__init__.py` now exports `comfy_entrypoint()` returning a
  `ComfyExtension` subclass instead of `NODE_CLASS_MAPPINGS`.
- **Version bumped to 4.0.0** due to internal API change (workflow JSON format unchanged).

### Changed
- Nodes are now **classmethods** (stateless) — all internal singletons (processor,
  style_manager, prompt_gen, model_client, style_enforcer) lifted to module level.
- `IS_CHANGED` → `fingerprint_inputs`, `VALIDATE_INPUTS` → `validate_inputs`.
- `Combo` inputs use typed `io.Combo.Input` instead of raw `(["a","b"],)` tuples.
- Hidden inputs use `io.Hidden.unique_id` / `io.Hidden.prompt` / `io.Hidden.extra_pnginfo`.
- `RETURN_TYPES` / `RETURN_NAMES` → typed `io.*.Output` list in schema.
- Dependencies: `comfy_api>=0.0.3` added to `requirements.txt`.

### Removed
- `NODE_CLASS_MAPPINGS`, `NODE_DISPLAY_NAME_MAPPINGS`, `SEARCH_ALIASES` from all node files.
- `validate_node_mappings()` validator (V3 handles registration natively).
- `_display_banner()` with ANSI art (V3 extension system logs registration).

## 3.0.0 (2026-07-05)

### Breaking
- **Cutover to frontend v3 (Vue 3 + TS + Vite + Pinia).** Old Vanilla JS `web/` directory deleted.
  `WEB_DIRECTORY` now points to `./frontend/dist`. No backward compatibility layer.

### Added
- **Vue 3 design system:** 9 widget components (`FilButton`, `FilSegmented`,
  `FilChipGrid`, `FilChipList`, `FilSection`, `FilNumberInput`, `FilSlider`,
  `FilSelect`, `FilInfo`) + SVGs-in-JS icon library.
- **FilModal** — Teleport + focus trap + Esc/backdrop dismiss.
- **FilHelpPopup** — renders help content (body, bullets, table, code) per
  `helpStore` registry entry.
- **FilColorPicker** + **useColorPicker** — context-menu (`getExtraMenuOptions`)
  colour swatch picker for node tint.
- **useShortcuts** — declarative `commands`/`keybindings`/`menuCommands` API
  (advanced guide §11, §12.3) with fallback legacy keydown handler.
- **useConnectionFx / useRunButtonFx / useAdaptiveTitleInk** — effect composables
  from the advanced guide.
- **Pydantic v2 backend contracts** (`common/contracts/`) — single source of truth
  for Python↔TS types, exposed via `/fil_llm/node_contracts`.
- **`scripts/gen_contracts.mjs`** — offline TS type generator from Pydantic schemas.
- **Backend metadata** — `DESCRIPTION`, `OUTPUT_TOOLTIPS`, `SEARCH_ALIASES`,
  `tooltip`, `advanced: True`, `VALIDATE_INPUTS` on all 7 node classes.

### Fixed
- **domWidgetHost.ts** — uses official `node.addDOMWidget(name, "custom", el, opts)`
  (was broken with non-existent `app.widgets.registerDOMWidget`).
- **Vue external** — set `vue` and `pinia` as externals; bundle drops from 59→14 KB gzip.
- **`control_after_generate` seed bug** — custom `<FilSegmented>` Random/Fixed
  avoids ComfyUI issue #11905.
- **Toast system** — routes through `extensionManager.toast` when available.
- **Settings API** — `category: ["FiL_LLM", ...]` arrays + `readSetting<T>()` helper.
- **UnicodeEncodeError** on Windows — `PYTHONIOENCODING=utf-8` in scripts.

### Changed
- All 7 node Vue components refactored to single `state: FilNodeState` prop.
- `IS_CHANGED` on FiLNeuroCleaner returns `time.time()` when clean requested.
- `VALIDATE_INPUTS` on FiLOpticScanner checks config slot.

### Removed
- Entire `web/` directory (Vanilla JS legacy): ~30 files across `web/core/`,
  `web/nodes/`, `web/settings/`, `web/assets/`.
- All references to `app.widgets.registerDOMWidget` — gone.
