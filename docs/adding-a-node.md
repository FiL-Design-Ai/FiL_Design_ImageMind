# Adding a node

Nine files, in this order. Every step has a check behind it — the right-hand
column is what fails if you skip that step, and none of them needs a browser or
a running ComfyUI.

Run `python tools/check_all.py --fast` when you are done. It is the whole of CI
minus the browser suites, and it takes about a minute.

| # | Do | Skipped it? This fails |
|---|----|------------------------|
| 1 | `nodes/node_<name>.py` — the node class, its `define_schema()` and `execute()` | — |
| 2 | `__init__.py` — import it and add it to the list `filter_release_nodes` receives | `tools/preflight_check.py` |
| 3 | `common/release_gate.py` — add the node id to `RELEASE_NODES` | `test_node_contracts.py::test_the_release_gate_currently_holds_nothing_back` |
| 4 | `common/contracts/nodes/<name>.py` — its `CONTRACT` | `test_node_contracts.py::test_every_node_class_has_a_frontend_contract` |
| 5 | `common/contracts/registry.py` — import that `CONTRACT` and list it | same as 4 |
| 6 | `npm run gen:contracts` and commit both artifacts | `test_contract_generation.py`, `npm run check:contracts` |
| 7 | `frontend/src/components/nodes/<Name>Panel.vue` — the panel | `test_node_wiring.py::test_every_node_mounts_a_panel_that_exists` |
| 8 | `frontend/src/nodes2/nodes/<name>.ts` — the registration module | `test_node_contracts.py::test_every_node_class_has_a_frontend_module` |
| 9 | `frontend/src/nodes2/nodeRegistry.ts` — import it and list it | same as 8 |
| 10 | `data/locales/en.json` and `ru.json` — every `t()` / `_t()` key you added | `test_locale_coverage.py` |
| 11 | `npm run build` and commit `frontend/dist/` | `npm run check:bundle` |

## The rules a new node has to keep

- **It may not import another node.** Shared behaviour goes in `common/`; the
  same rule holds for its contract and its frontend module. Enforced by
  `tests/test_layer_boundaries.py` and `frontend/eslint.config.js`. There is one
  recorded exception and it is written down with its reason.
- **Its contract may not ask the running host anything.** No `import comfy`, no
  `folder_paths`. A widget whose options come from the user's installation ships
  as a single-entry placeholder — see `SAMPLER_PLACEHOLDER` in
  `common/contracts/widgets.py` — and the node's own `define_schema()` and its
  panel read the live list at runtime. Enforced by
  `test_contract_generation.py::test_the_registry_does_not_depend_on_a_running_comfyui`.
- **Nothing crossing the ComfyUI seam is `unknown`.** Use `LGraphNode` /
  `LGraphNodeType` from `@/types/comfy`. Enforced by
  `frontend/tests/typeRatchet.test.ts`.
- **The generated contract artifacts are committed and must match.** They are
  what the frontend imports, so a stale pair ships a contract the backend does
  not describe — silently, since the Python suite reads the registry and the
  frontend suite reads the stale JSON.

## Why the list is short

It used to be longer. The same nineteen node ids were written out by hand in
eight places — `__init__.py`, the contract registry, the release gate,
`preflight_check.py` twice, `test_node_contracts.py`, `nodeRegistry.ts`, and the
smoke spec twice — and most of the checks built on top compared one copy against
another. All but the three that must name a node to import it are now derived,
so the steps above are the ones that genuinely exist.
