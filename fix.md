# Fixes

Running log of what was fixed after the 1.0.0 release went out, and what was
fixed on the way to it. `CHANGELOG.md` describes what the pack *is* at each
version; this file records the individual repairs, newest section first, so a
bug can be traced to the commit that closed it.

Add an entry when you fix something. Format: `` `hash` — one line saying what
was broken`` , then a sentence on the cause where it is not obvious.

## Unreleased (after 1.0.0)

- `410fc95` — the wheel guard silenced every other node pack. Its listener has
  to sit on `window` in the capture phase to beat ComfyUI's canvas forwarder,
  but it consumed wheel events over *any* scrollable region, so other packs'
  wheel-driven carousels, value tweaks and lazy loading never fired. It now
  acts only inside `.fil-vue-host`; rescuing third-party widgets moved behind
  the `ScrollGuard.ThirdPartyWidgets` setting (off by default), Alt/Shift join
  Ctrl/Meta as gestures to leave alone, and the listener installs on the first
  mounted FiL panel instead of at module import.
- `410fc95` — `getHeight()` forced a layout on every frame. LiteGraph calls it
  from the draw loop and it read `scrollHeight` each time; it returns the
  cached height the ResizeObserver, settle loop and 400 ms poll already
  maintain — 2.5 measurements a second per node instead of 60.
- `46b09dc` — the GitHub Pages landing page still showed `v1.1.0`, the version
  the release rolled back from. A test now pins every version string on the
  page to `pyproject.toml`.
- `939d37c` — the README's screenshot placeholders were never filled. Fifteen
  panels shot against the 1.0.0 UI, gallery in both language halves,
  `docs/images/` kept out of the registry archive.

## 1.0.0 (published 2026-07-28)

Everything below is in the published 1.0.0. It was found between the release
commit and the tag that actually shipped — mostly by CI, which had never passed
because it could not run.

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
