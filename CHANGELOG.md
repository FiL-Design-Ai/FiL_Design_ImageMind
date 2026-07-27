# Changelog

## 1.0.0 (2026-07-28)

First public release. Ships 15 nodes under `🎨 FiL Design/*`, each one taken
through the hardening checklist in `docs/release/HARDENING_LEDGER.md` (audit →
UX → functional fixes → UI → tests → contract → live smoke on a running
ComfyUI), on a Vue 3 + Pinia frontend with a seven-palette design system.

Everything below shipped in this release. The version numbers in the git
history before this tag were internal iterations that were never published.

### Nodes

- **`🔍 Upscaler Advanced` (`FiLUpscaleTileCalc`)** — tiling geometry: overlap,
  `non_square_tiles` clamped at 1.5:1, `auto_overlap`, `auto_fix_thin_edges`,
  and edge tiles that shift inward instead of being zero-padded. Emits the
  cropped `tiles` batch, `latent`/`latent_tiles`, and a FLOAT `overlap`.
- **`🔍 Upscaler Simple` (`FiLUpscaleSimple`)** — the same panel with a required
  upscale model and only the four core outputs. Delegates 100% of the geometry
  to `FiLUpscaleTileCalc`, so the two can never drift apart.
- **`🧩 Tile Assembly` (`FiLTileAssembly`)** — stitches processed tiles back to
  full resolution using the layout the calculator produced.
- **`🔬 HighRes Fix` (`FiLHighResFix`)** — upscale+resample passes with its own
  seed row, or the sampler's seed reused.
- **`🎛️ Noise Control` (`FiLNoiseControl`)** — RNG source (cpu/gpu) and seed
  variation as a script for `FiLKSampler`, built on the public `comfy.sample`
  API rather than patching the CFG denoiser.
- **`🔀 Cyber Switch` (`FiLSignalSwitch`)** — any-type pass-through gate for
  muting a branch without rewiring it. OFF returns ComfyUI's `ExecutionBlocker`
  so consumers skip silently and the rest of the graph still finishes; ON with
  nothing connected blocks the same way but says so on the node.
- **`📚 LoRA Dataset Forge` (`FiLDatasetForge`)** — takes an image batch and
  writes a training-ready LoRA dataset in one pass: kohya-style aspect-ratio
  buckets around the chosen base resolution (512 – 1536, step 64), one LLM
  caption per frame through `🔌 Provider Loader`, and either the `kohya` layout
  (`<name>/img/<repeats>_<trigger> <class>/` plus an sd-scripts `dataset.toml`)
  or a `flat` image+caption folder. Always writes a `manifest.json` recording
  per-frame bucket, crop box, caption and hash.
  - Caption prompts encode the rule that decides whether a LoRA generalizes:
    describe what varies, never describe the invariant named in `dont_caption` —
    that belongs to the trigger word.
  - `dry_run` plans the whole run without touching disk; `write_mode=overwrite`
    deletes only the image/caption pairs this node owns, leaving foreign files
    in the folder alone.
  - No upscaling: sources smaller than their bucket are still written, but
    counted in `upscaled_count` and flagged in the report.
- **`🧹 Cleaner` (`FiLNeuroCleaner`)** — explicit VRAM/model toggles, replacing
  an earlier design with 14 checkboxes and Windows ctypes placebo code.
- **`🕵️ Optic Scanner`, `🎨 Style Mixer`, `🌈 Color Wizard`, `🧬 Decomposer`,
  `🌱 Seed`, `🎲 KSampler`** (with `eta` (η) for ancestral/SDE samplers and
  `bongmath`), and **`🔌 Provider Loader`**.

### Design system

- **Every text token clears WCAG AA in all seven palettes**, measured against
  the backdrop a widget actually sits on — the node body is `--fil-surface-bg`
  (a 6% tint) over the color LiteGraph paints on its canvas, with rows stacking
  `--fil-surface-1/2` above that, which runs consistently lighter than the
  palette's nominal `panel`/`panelAlt` and is worth 0.5–1.0 of ratio.
  - Text painted on the accent (active segment, primary button, active pill) is
    each theme's own darkest tone at 4.9–10.8:1, not white — white measured as
    low as 1.54:1 for the 11–13px labels that use it.
  - Nine rules that used the raw accent as small *text* (active tab, selected
    combo option, active chip, status badges, the presets title) use
    `--fil-accent-text` — the accent pulled 35% toward the theme's text color —
    landing at 5.17–11.01:1 with the hue still readable. Icons keep the raw
    accent; glyphs are non-text and need only 3:1.
  - `--fil-muted` and `--fil-danger`/`--fil-ok` are tuned per palette against
    the composited backdrop: `muted` blended toward each theme's own text color
    so it keeps its character, `danger` toward white (black on the light
    palette) so it stays red rather than turning brown against Pipboy's green.
  - Verified across 204 rendered elements in all seven palettes on both a light
    and a dark ComfyUI. Ratios are recorded next to the values in
    `styles/brand.ts` so the next edit can't quietly undo this.
- **Light mode follows ComfyUI by luminance.** The mode is derived from the
  luminance of ComfyUI's own `--bg-color`, which covers third-party and
  hand-made palettes that no list of names would catch, and a `MutationObserver`
  picks up palette switches live. Only the *default* theme follows it — picking
  Cyberpunk means Cyberpunk on a light canvas too.
- **Six themes**, including *Travelmate* and *Pixaroma* — the latter matching
  the `ComfyUI-Pixaroma` node pack's own brand colors, so a graph mixing both
  packs reads as one system instead of two. Flat panels, no glow or scanline,
  because that is what their editor chrome looks like.
- **`--fil-muted` is text-only; field outlines come from `--fil-border`.**
  Overlay surfaces (section headers, segmented troughs, toggle tracks, inset
  fields) use `--fil-surface-1/2/3` and `--fil-inset`, which is what lets the
  light theme flip their polarity.
- **Uniform control heights** — `--fil-control-h` (30px) for text/select/number
  fields, `--fil-control-h-lg` (34px) for seed rows and icon buttons.
- **Shared field widgets** — `FilTextInput`, `FilTextArea` and `FilSeedRow`
  (seed readout + Random/Use last/New fixed), each previously pasted into two
  or more components and already drifting apart.
- **The seed row tells state from action.** Solid accent means "this is the
  mode you are in", an accent outline means "this button does something".
  `🔬 HighRes Fix` is 380px wide because below that the seed captions clip in
  both languages.
- **State colors follow the theme.** `🔀 Cyber Switch` tints ON with
  `--fil-ok` and OFF with `--fil-danger` instead of a fixed emerald/red
  gradient that matched no palette but its own; the label stays `--fil-text`,
  since `--fil-danger` as text on its own tint runs 1.96–4.04:1. Optic
  Scanner's selected style button holds its accent still rather than running a
  `pulse-neon` loop forever on every scanner in the graph.

### Infrastructure

- **`common/brand.py`** / **`frontend/src/constants/brand.ts`** — single source
  of truth for the brand token and its derived forms (category root, settings
  prefix, route slug, log tag), so future rebrands don't need a repo-wide
  string sweep. `/health` serves `common.brand.VERSION`, which a test keeps in
  step with `pyproject.toml`.
- **`common/dataset/`** — `bucketing` (bucket math, cover-resize, center/entropy
  crop), `captioning` (prompts, normalisation, per-frame batch loop) and
  `writer` (layouts, sidecars, TOML, manifest, path sanitisation).
- **`common/release_gate.py`** — staging gate that registers only node-ids
  listed in `RELEASE_NODES`, so a new node stays out of the ComfyUI menu until
  it has been through the checklist. `FIL_RELEASE_ALL=1` bypasses it.
- **`tools/preflight_check.py` / `tools/scan_node_conflicts.py`** — static
  release preflight and a scan for node-id collisions with other node packs.
- **Full ru/en localization** — every panel, tooltip and toast goes through
  `data/locales/*`; no hardcoded UI strings left.
- **Node option lists are read from the Pydantic contract**, so a panel cannot
  offer a value the backend rejects.

### Notes for anyone who ran the pre-release code

The project was developed as `FiL_LLM` and renamed before publication. Nothing
was ever released under the old name, so there is no compatibility shim: the
package/import name, the `🎨 FiL Design/*` node categories, the
`/fil_design_imagemind/*` route prefix, the `FiL_Design_ImageMind.*` settings
keys, the `dist/fil_design_imagemind.js` bundle name and the `FiLError`
exception base all changed at once. `FiLBeforeAfterCompare` — its node, its
`/compare/save` route and its `output/FiL_LLM/compare/` folder — was removed
with nothing replacing it.

---

The sections below belong to the pre-rename `FiL_LLM` project and are kept for
provenance. Their version numbers are unrelated to the scheme above.

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
