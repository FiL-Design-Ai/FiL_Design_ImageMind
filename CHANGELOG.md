# Changelog

## Unreleased

### Fixed
- **Contrast was certified against the wrong background in 1.1.0.** That pass
  measured every token against the palette's `panel`/`panelAlt`, but no widget
  sits on those: the node body is `--fil-surface-bg` (a 6% tint) over the color
  LiteGraph paints on its canvas, and rows stack `--fil-surface-1/2` on top, so
  the real backdrop is materially lighter. Measuring the composited value off a
  live graph instead showed `muted` at 3.31–4.29:1 and `danger` at 4.15–4.48:1
  — under the 4.5:1 floor in six of seven palettes, worst of all Pixaroma's
  labels at 3.31:1 inside a segmented trough. Both retuned per palette, hue
  preserved (`muted` blended toward each theme's own text color, `danger`
  toward white so it stays red). The section-collapse arrow also moved to
  `--fil-accent-text`, having measured 2.38:1 on the light palette — below even
  the 3:1 a glyph needs. Re-verified across 204 rendered elements in all seven
  palettes on both a light and a dark ComfyUI: no element under its floor.

## 1.1.0 (2026-07-27)

Adds the 15th node — 📚 LoRA Dataset Forge — and puts the design system through
the same hardening checklist the nodes get: every color token measured against
WCAG AA in all seven palettes, duplicated widget CSS consolidated, and the light
mode fixed after finding it had never actually applied.

### Added
- **📚 LoRA Dataset Forge (`FiLDatasetForge`)** — new node in `🎨 FiL Design/Dataset`.
  Takes an image batch and writes a training-ready LoRA dataset in one pass:
  kohya-style aspect-ratio buckets around the chosen base resolution
  (512 – 1536, step 64), one LLM caption per frame through 🔌 Provider Loader,
  and either the `kohya` layout (`<name>/img/<repeats>_<trigger> <class>/` plus
  an sd-scripts `dataset.toml`) or a `flat` image+caption folder. Always writes
  a `manifest.json` recording per-frame bucket, crop box, caption and hash.
  - Caption prompts encode the rule that decides whether a LoRA generalizes:
    describe what varies, never describe the invariant named in `dont_caption` —
    that belongs to the trigger word.
  - `dry_run` plans the whole run without touching disk; `write_mode=overwrite`
    deletes only the image/caption pairs this node owns, leaving foreign files
    in the folder alone.
  - No upscaling: sources smaller than their bucket are still written but
    counted in `upscaled_count` and flagged in the report.
- **`common/dataset/`** — `bucketing` (bucket math, cover-resize, center/entropy
  crop), `captioning` (prompts, normalisation, per-frame batch loop) and
  `writer` (layouts, sidecars, TOML, manifest, path sanitisation).
- **Sixth theme, *Pixaroma*** — matches the `ComfyUI-Pixaroma` node pack's own
  brand colors, so a graph mixing both packs reads as one system instead of
  two. Flat panels, no glow or scanline, because that is what their editor
  chrome looks like.
- **Shared field widgets** — `FilTextInput` (single-line), `FilTextArea`
  (multi-line) and `FilSeedRow` (seed readout + Random/Use last/New fixed).
  The textarea CSS had been pasted into two components and the seed row into
  two more, and both pairs had already drifted apart.

### Changed
- **Text tokens taken through WCAG AA in all seven palettes.** (The ratios
  quoted below were measured against the palette's nominal surfaces; see the
  Unreleased section, which corrects them against the composited backdrop a
  widget actually sits on.) Text painted on the accent (active segment,
  primary button, active pill) was white in four themes and as low as 1.54:1 —
  under the 4.5:1 floor for the 11–13px labels that use it; each theme now
  uses its own darkest tone, 4.9–10.8:1. The muted label color failed on its
  own panel in three themes and was raised to 5.8–6.7:1. `--fil-danger` and
  `--fil-ok` — which color error/ok lines, toasts, provider status and the
  destructive-button label — failed in four themes, worst of all Fallout's
  dark rust at 2.17:1 on its own panel; all seven now clear 4.6:1. Finally,
  nine rules used the raw accent as small *text* (active tab, selected combo
  option, active chip, status badges, the presets title) where it sat at
  3.10:1 on the light palette and 4.19:1 on Pixaroma — those moved to a new
  `--fil-accent-text`, the accent pulled 35% toward the theme's own text
  color, landing the set at 5.17–11.01:1 with the hue still readable. Icons
  keep the raw accent; glyphs are non-text and only need 3:1. Contrast
  ratios are recorded next to the values in `styles/brand.ts` so the next
  edit can't quietly undo this.
- **The seed row tells state from action.** Random / Use last / New fixed
  used to render the current mode and the primary action as two identical
  accent-filled buttons. Solid accent now means "this is the mode you are
  in", an accent outline means "this button does something". `🔬 HighRes Fix`
  also widened from 320 to 380px, since below that its seed captions were
  clipped, and the Russian "Новый фикс." shortened to "Новый" to match the
  one-word captions beside it.
- **`🔀 Cyber Switch` follows the theme.** The ON/OFF button was a fixed
  emerald→sky / red→slate gradient with sky-500 and red-400 text, which
  matched no palette but its own. ON now tints with `--fil-ok`, OFF with
  `--fil-danger`. The label stays `--fil-text` rather than the state color:
  measured across the palettes, `--fil-danger` as text on its own tint runs
  1.96–4.04:1, so the state is carried by the fill, the border and the word
  itself, which already reads ON or OFF.
- **Optic Scanner's style button stopped animating.** Its selected state ran
  a `pulse-neon` @keyframes loop forever, on every scanner in the graph —
  `styles/brand.ts` keeps its own theme flourishes static for exactly that
  reason. The cyan→magenta gradient (cyan even under the orange default and
  the lime Travelmate) is now the accent, held still.
- **`--fil-muted` is text-only; field outlines come from `--fil-border`.** The
  two roles shared one token, so neither could be adjusted without dragging
  the other. Overlay surfaces (section headers, segmented troughs, toggle
  tracks, inset fields) moved to `--fil-surface-1/2/3` and `--fil-inset`,
  which is what lets the light theme flip their polarity.
- **Uniform control heights** — `--fil-control-h` (30px) for text/select/number
  fields, `--fil-control-h-lg` (34px) for seed rows and icon buttons. A stack
  of mixed widgets used to step 30/32/34px.

### Fixed
- **The light palette never applied at all.** It was keyed off a
  `.comfy-theme-light` class that current ComfyUI builds do not add — verified
  against a running instance: switching to a light color palette changes
  `--bg-color`/`--fg-color` as inline styles on `<html>` and adds no class
  anywhere. Node panels therefore stayed dark whatever ComfyUI did. The mode is
  now derived from the luminance of ComfyUI's own `--bg-color`, which also
  covers third-party and hand-made palettes that no list of names would catch,
  and a `MutationObserver` picks up palette switches live. Only the *default*
  theme follows it — picking Cyberpunk means Cyberpunk on a light canvas too.
- **Light-palette rendering, now that it runs.** Overlay surfaces were
  hardcoded as white at 4–16% opacity, invisible over an already-light panel;
  `FilSection`'s hover set `color:#fff` on that light background; inset fields
  used `rgba(0,0,0,0.35)`, putting dark text on a dark field; and `FilInfo` —
  which carries the Dataset Forge path preview and the "connect a provider"
  warning — was a flat white and vanished entirely.
- **Three CSS variables were referenced but never defined** (`--fil-success`,
  `--fil-warning`, `--fil-text-secondary`), so five rules in `FilHelpPopup` and
  the provider status colors silently rendered hardcoded fallbacks and ignored
  the active theme.
- **`🔀 Cyber Switch` now says why it blocked.** ON with nothing connected
  returned the same silent blocker as a deliberate OFF, leaving a dead branch
  and no explanation. OFF stays silent; ON without a signal reports it on the
  node. This also surfaces an upstream output that never reached the cache.
- **`🕵️ Optic Scanner` focus section** had no localized label (it fell through
  to a raw uppercased `FOCUS` in every language) and stayed expanded on a fresh
  node while its siblings collapsed.

## 1.0.0 (2026-07-26)

First public release. Ships 14 nodes, each one taken through the hardening
checklist in `docs/release/HARDENING_LEDGER.md` (audit → UX → functional fixes →
UI → tests → contract → live smoke on a running ComfyUI).

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
  (health, models, providers, auth, provider_probe, locale, node_contracts).
- **Settings prefix** — `FiL_LLM.*` → `FiL_Design_ImageMind.*` ComfyUI
  settings keys.
- **Frontend bundle** — `dist/fil_llm.js` → `dist/fil_design_imagemind.js`;
  Vite `base` now serves from `/extensions/FiL_Design_ImageMind/`.
- **Python exception base class** — `FiLLLMError` → `FiLError`.
- **`FiLBeforeAfterCompare` removed** — the node, its `/compare/save` route and
  its `output/FiL_LLM/compare/` folder are gone; nothing replaces them in 1.0.0.

### Added
- **`common/brand.py`** / **`frontend/src/constants/brand.ts`** — single
  source of truth for the brand token and its derived forms (category root,
  settings prefix, route slug, log tag), so future rebrands don't require a
  repo-wide string sweep.
- **`🔍 Upscaler Simple` (`FiLUpscaleSimple`)** — the Advanced tiling panel with
  a required upscale model and only the `image`/`tiles`/`latent`/`latent_tiles`
  outputs. Delegates
  100% of the geometry to `FiLUpscaleTileCalc`, so both nodes can never drift.
- **`🧩 Tile Assembly` (`FiLTileAssembly`)** — stitches processed tiles back into
  a full-resolution image using the layout the calculator produced.
- **`🎛️ Noise Control` (`FiLNoiseControl`)** — RNG source (cpu/gpu) and seed
  variation as a script for `FiLKSampler`, built on the public `comfy.sample`
  API instead of patching the CFG denoiser.
- **`🔀 Cyber Switch` (`FiLSignalSwitch`)** — any-type pass-through gate for
  muting a branch of a graph without rewiring it.
- **Upscaler inputs/outputs** — real `upscale_model` upscaling (not passthrough),
  `latent` in with `latent`/`latent_tiles` out, cropped `tiles` preview,
  `auto_overlap`, and `auto_fix_thin_edges`.
- **KSampler** — `eta` (η) for ancestral/SDE samplers and `bongmath` controls.
- **Settings** — working `Log level` setting and a fourth theme, *Travelmate*.
- **`common/release_gate.py`** — staging gate that registers only node-ids listed
  in `RELEASE_NODES`, so a new node stays out of the ComfyUI menu until it has
  been through the checklist. `FIL_RELEASE_ALL=1` bypasses it.
- **`tools/preflight_check.py` / `tools/scan_node_conflicts.py`** — static
  release preflight and a scan for node-id collisions with other node packs.

### Changed
- **`FiLUpscaleTileCalc` display name → `🔍 Upscaler Advanced`** (`node_id`
  unchanged, so saved workflows keep loading).
- **Upscaler defaults** — `tile_size` 512 → 1024; the `overlap` output is a
  FLOAT (was a truncated INT); the drawn tile-grid preview was replaced by the
  real cropped `tiles` batch.
- **`🧹 Cleaner` rebuilt** — 14 checkboxes and the Windows ctypes placebo code
  replaced by explicit VRAM/model toggles.
- **UI pass across every node** — compact `FilToggle` switches instead of
  ON/OFF pill pairs, ▲/▼ steppers on numeric fields, themed panels, node height
  that collapses to content, and node option lists read from the contract so a
  panel can't offer a value the backend rejects.
- **Full ru/en localization** — every panel, tooltip and toast goes through
  `data/locales/*`; no hardcoded UI strings left.

### Fixed
- **`crop_latent_tiles` on 5D latents** — video-style `(B,C,T,H,W)` tensors from
  some checkpoints made every tile below the first row collapse to zero elements
  and crash the upscale chain.
- **`tile_overlap` did nothing to the grid** — it only fed `mask_blur` and the
  output socket; the layout stepped tile-to-tile with no overlap at all.
- **`non_square_tiles` produced unbounded aspect ratios** — a tile now clamps at
  1.5:1 instead of copying the whole image's proportions.
- **Black bars on edge tiles** — the last tile shifts inward to stay full-size
  instead of being zero-padded.
- **Nodes reporting success when the work did not happen** (Cleaner and friends).
- **Draw-loop exceptions** in the canvas overlay, plus the layout bugs running it
  exposed (labels detached from their inputs on paired rows, panel overflow).
- **`/health` reported version `2.0.0`** — it now serves `common.brand.VERSION`,
  which a test keeps in step with `pyproject.toml`.
- **Cyber Switch emitted `None` when OFF**, so the node downstream ran anyway and
  failed inside itself, naming the wrong node. It now returns ComfyUI's
  `ExecutionBlocker`, which skips consumers silently and lets the rest of the
  graph finish; an unconnected input blocks the same way.

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
