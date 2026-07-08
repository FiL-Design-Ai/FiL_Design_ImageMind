# FiL_LLM → Vue 3 + TS migration status

This document tracks the staged migration of the FiL_LLM frontend from the
legacy Vanilla JS bundle under `web/` to the new Vue 3 + TypeScript +
Vite stack under `frontend/`. Decided in the planning round of
2026-07-05.

## Decisions locked in

- **Stack**: Vue 3 + `<script setup>` + Pinia + TypeScript + Vite.
- **Strategy**: Full replacement — `web/` is deleted at the end, no
  long-term dual runtime.
- **Backend scope**: Frontend migration + reorganisation of `common/`
  into typed contracts/services. Backend logic is preserved, only its
  packaging changes.
- **Target version**: `3.0.0` (breaking change for the frontend
  contract; node ids, INPUT_TYPES and workflow shape stay stable).

## Phase tracker

| # | Step | Status |
|---|---|---|
| 0 | Plan + environment (Node v26, npm 11, Python 3.12, Pydantic 2.13) | ✅ done |
| 1 | `frontend/` skeleton (Vite + Vue 3 + TS + Pinia) with UMD output | ✅ done |
| 2 | Extension skeleton — `registerExtension`, `beforeRegisterNodeDef`, 7 node stubs | ✅ done |
| 3 | `common/contracts/` Pydantic models, exposed via `/fil_llm/node_contracts` | ✅ done |
| 4 | `scripts/gen_contracts.mjs` renders `frontend/src/api/contracts.ts` (7 contracts) | ✅ done |
| 5 | Design-system widgets (9 Vue components + barrel + 10 Vitest tests → 14) | ✅ done |
| 6 | Pinia stores — `toastStore`, `providerStore`, `compareStore`, `helpStore` + `helpDefaults` | ✅ done |
| 7 | Vue node components (7 nodes) + `domWidgetHost.ts` mounting into LiteGraph via `addDOMWidget` | ✅ done |
| 8 | Function module ports — `FilToastStack`, `FilHelpPopup`, `FilModal`, `FilIcon`, `FilColorPicker`, `useColorPicker`, `useShortcuts`, `useConnectionFx`, `useRunButtonFx`, `useAdaptiveTitleInk` + 4 wired installers | ✅ done |
| 9 | Switch `WEB_DIRECTORY = "./frontend/dist"` in `__init__.py` | ✅ done |
| 10 | Delete `web/` | ✅ done |
| 11 | Bump to `3.0.0`, `CHANGELOG.md`, `docs/architecture.md` updated | ✅ done |

## What is live right now

ComfyUI loads `frontend/dist/fil_llm.js` (Vue 3 + TS + Pinia bundle,
14 KB gzip). The legacy `web/` directory has been deleted entirely.

## Why the staged approach

The cutover was atomic — `WEB_DIRECTORY` switched from `./web` to
`./frontend/dist` only after all Vue components, stores, composables,
and installers were implemented and tested. No dual runtime was deployed.

## Backend additions (already active)

- `common/contracts/` — Pydantic v2 models describing every node's
  widget shape (`WidgetSpec`, `NodeInputs`, `NodeOutput`,
  `NodeContract`).
- `common/contracts/registry.py` — `NODE_SCHEMAS` registry covering all
  7 canonical nodes; `public_node_contracts_v2()` is the typed payload.
- `server_routes.py` — `/fil_llm/node_contracts` now returns
  `{ node_ids, schemas, data, settings_prefix }` (legacy `node_ids`
  preserved for the v1 frontend).
- `scripts/dump_contracts.py` — offline JSON dumper for
  `npm run gen:contracts` (no ComfyUI running required).
- `tests/test_contracts_v2.py` — 9 assertions covering the new layer.

## Frontend structure (v3, live)

```
frontend/
├── src/
│   ├── api/           # Typed HTTP client + auto-generated contracts.ts
│   ├── components/
│   │   ├── nodes/     # 7 Vue node body components
│   │   └── widgets/   # 11 design-system widgets (FilButton, FilModal, …)
│   ├── composables/   # Effects, shortcuts, icons, color picker
│   ├── nodes2/        # Extension bootstrap + per-node registration
│   ├── stores/        # Pinia stores + settings modules
│   └── types/         # ComfyUI type declarations
├── dist/              # Built UMD bundle (fil_llm.js + style.css)
├── scripts/           # gen_contracts.mjs (Pydantic → TS)
└── tests/             # 4 test files, 21 tests total
```

## Verification commands

```powershell
# Frontend
cd frontend
npm install
npm run gen:contracts   # refreshes src/api/contracts.ts
npm run typecheck       # vue-tsc --noEmit
npm test               # vitest run
npm run build          # dist/fil_llm.js (UMD)

# Backend (existing test suite still green)
$env:PYTHONIOENCODING="utf-8"
python -m pytest tests -q
python tools/preflight_check.py
```

## Resolved risks

- **ComfyUI Core Vue global** → `vue` and `pinia` are set as Vite externals,
  consuming `window.Vue` / `window.Pinia` globals. Bundle is 14 KB gzip.
- **DOM-widget host** → `domWidgetHost.ts` uses `node.addDOMWidget()`
  (official API, advanced guide §5.3). Each node gets a standalone Vue app
  wired via `createApp().mount(el)`.
- **Workflow compatibility** — legacy `fil_ui_compare_*` keys preserved
  in `getValue/setValue` bridges. All 7 node IDs unchanged.
- **`app.widgets.registerDOMWidget`** — replaced with
  `node.addDOMWidget(name, "custom", el, {hideOnZoom, getValue, setValue})`.

## No known open risks

All migration phases are complete. The frontend has been atomically
cut over to Vue 3 + TS + Vite + Pinia. Legacy `web/` directory deleted.
Backward compatibility for workflow files is maintained through the
`getValue/setValue` serialisation contract.