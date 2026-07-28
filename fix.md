# Fixes

Running log of what was fixed after the 1.0.0 release went out, and what was
fixed on the way to it. `CHANGELOG.md` describes what the pack *is* at each
version; this file records the individual repairs, newest section first, so a
bug can be traced to the commit that closed it.

Add an entry when you fix something. Format: `` `hash` — one line saying what
was broken`` , then a sentence on the cause where it is not obvious.

## 1.0.1

- `86b4c0e` — **the 400 ms layout poll per widget is gone, and so is the reflow
  per frame.** The ResizeObserver it backed up was watching `host`, whose box
  stops following the content as soon as ComfyUI's `h-full` or `applyStretch()`
  pins it, while the measurement read the panel's `scrollHeight` — the observer
  was never "silently failing", it was watching the wrong element. The panel
  itself is observed now, with a MutationObserver for the async component's
  arrival and one for content changes inside a pinned growable box.
- `86b4c0e` — **context menus died with "Maximum call stack size exceeded"**
  wherever cg-use-everywhere was installed. Extensions patch
  `getExtraMenuOptions` by reading it, storing it and reassigning; our wrapper
  read the previous handler late, so what they had stored resolved to their own
  function and the two called each other. The handler is captured on read now.
- `86b4c0e` — **ComfyUI-Manager's "Fix node (recreate)" left two nodes stacked.**
  It adds the fresh node before copying links and copies them with a call shape
  LiteGraph dropped, so it throws before its own `graph.remove(old)`. Repaired
  in place by `nodes2/recreateNode.ts`, which reconnects by slot index and
  unwinds the new node if anything fails.
- `86b4c0e` — **🧹 Cleaner's four per-kind switches could not do what they
  promised.** Loaded models were sorted by matching class names, with a model's
  own name and its submodules' matched as one string and `modelpatcher` — the
  wrapper around every model in ComfyUI — counting as a diffusion marker, so
  anything unrecognised was unloaded as diffusion. Its "flush cache" switch also
  raised the queue's `free_memory` flag, which ComfyUI answers with
  `unload_all_models()`, so both switches did the same thing. One `unload_models`
  switch now, old workflows still honoured.
- `86b4c0e` — **Style Mixer lost every wire into it on reload.** `configure()`
  replaces `node.inputs` with fresh slot objects carrying the links, and the
  hidden-slot filter handed LiteGraph the stale copies parked in `_allInputs`.
  Links are folded back in by name, and `target_slot` re-stamped after hiding.
- `86b4c0e` — **the connection-toast setting was unreachable**: never added to
  `allSettings.ts`, so ComfyUI never registered the id and every read returned
  the fallback — which was `true` while the declaration said `false`.
- `86b4c0e` — **Default LLM Provider could not be set to OpenAI**: the option
  list was hand-written and had drifted from the provider registry.
- `86b4c0e` — every `readSetting` call logged a deprecation warning, from
  passing a fallback into an API that takes the default from the registration.
- `86b4c0e` — Delete in the provider panel was offered for keys it cannot
  remove: `configured` is true for a key from the environment or config.yaml,
  while the button only clears `data/auth.json`.
- `86b4c0e` — three orphaned features removed with the code behind them: the
  global `wheel` listener, the `Shift+?` / `/` keybindings with their help
  popup, and a colour picker that was never wired into a menu. 36 unreferenced
  locale keys and the docs describing all of it went too.
- `42cbcdb` — the provider panel asked for a Base URL on every card, including
  the ones whose endpoint is fixed: a URL typed there could only break a
  working setup. It now shows for the local servers, and for any provider that
  already has a custom endpoint saved. Each card links to the page that issues
  the credential (Cloudflare's account id link points at the dashboard, since
  it is not on the token page).
- `c714312` — **the window-level wheel listener is deleted.**
  `nodes2/installers/scrollGuard.ts` bound a capture-phase `wheel` handler to
  `window`, which put a node pack ahead of every other extension in the app on
  every wheel event. What remains is one listener on the pack's own widget
  host, so a wheel event outside a FiL panel never reaches our code at all; it
  stops propagation only over a scrollable region of ours, keeping an ancestor
  forwarder from zooming the canvas at the same time. Modifiers are left to
  whoever else wants them. The three-way `ScrollGuard.Mode` added in `d03e9ec`
  collapses to `Wheel.Enabled`, since "also handle other packs' widgets" was
  the global listener's trick and left with it.
- `410fc95` — `getHeight()` forced a layout on every frame. LiteGraph calls it
  from the draw loop and it read `scrollHeight` each time; it returns the
  cached height the ResizeObserver, settle loop and 400 ms poll already
  maintain — 2.5 measurements a second per node instead of 60.
- `410fc95` — the wheel guard silenced every other node pack: it consumed wheel
  events over *any* scrollable region, so other packs' wheel-driven carousels,
  value tweaks and lazy loading never fired. Scoping it to `.fil-vue-host` was
  the first fix; `c714312` then removed the listener outright. Listed because
  the released 1.0.0 still carries the unscoped version.
- `46b09dc` — the GitHub Pages landing page still showed `v1.1.0`, the version
  the release rolled back from. A test now pins every version string on the
  page to `pyproject.toml`.
- `939d37c` — the README's screenshot placeholders were never filled. Fifteen
  panels shot against the 1.0.0 UI, gallery in both language halves,
  `docs/images/` kept out of the registry archive.

Everything above ships in 1.0.1. Until that tag is pushed, ComfyUI Manager
still serves 1.0.0 — the code as it stood at `d03b5e8`, global wheel listener
and all.

## 1.0.0 (tag `v1.0.0` = `d03b5e8`)

Everything below is an ancestor of that tag, so it is in the published version.
All of it was found between the release commit and the tag that actually
shipped — mostly by CI, which until then had never been able to run the tests.

- `d03b5e8`, `d83bab3`, `0a030a3` — publishing to the registry failed six times
  with a bare `exit 2`. `comfy node publish --token` with an empty value is a
  click usage error, and the key was stored under `FIL_DESIGN_IMAGEMIND` while
  the workflow asked for `REGISTRY_ACCESS_TOKEN`. Both names are accepted now,
  and a guard step names the cause instead of leaving an exit code.
- `88a2e7c` — `pydantic` was used by `common/contracts/schema.py` but declared
  nowhere; it worked only because ComfyUI installs it. The Windows installer
  also broke on paths containing a space, never looked for `venv`/`.venv`
  layouts, advertised a Codex runtime the pack does not have, and printed `[]`
  where `[!]` was meant.
- `055af99` — the registry archive shipped the whole 8.5 MB tree, including
  tests, CI and 1.5 MB of style previews stored twice. `.comfyignore` trims it
  to the ~2 MB ComfyUI actually loads. Four overlapping documents merged into
  two.
- `e997841` — `requires-comfyui` sat in `[project]`, which comfy-cli never
  reads, and dependencies were declared through `[tool.setuptools.dynamic]`,
  which neither the registry nor setuptools resolved.
- `359a8fc` — the seven-provider test passed only on a machine with a
  Cloudflare account id in `data/auth.json` or the environment.
- `e7c05cc` — `comfy.model_management` picks its device at import and starts
  from `CPUState.GPU` without ever probing `torch.cuda.is_available()`, so the
  whole HighRes-fix suite died with "Torch not compiled with CUDA enabled" on
  any machine without a GPU. Tests pin CPU before comfy loads.
- `7010b2e` — **the pack could not be imported on Python 3.10 or 3.11 at all.**
  `typing.override` only exists from 3.12, while `pyproject.toml` advertises
  `>=3.10`. Never seen locally (embedded Python is 3.12) and CI could not see
  it either, per the next entry.
- `f975753` — CI had never actually run the tests: neither ComfyUI's
  requirements nor ours ship pytest, so `python -m pytest` exited 1 before
  collecting anything. The frontend job also needed Node 22 for vite 8 /
  vitest 4.
- `d2ea953` — the README counted 14 nodes; the pack ships 15.
