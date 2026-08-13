# 🕵️ Optic Scanner — Video Output Settings (dynamic, model-driven)

**Date:** 2026-08-05
**Status:** approved via discovery interview
**Author:** FiL + Лёха

## Executive Summary

When `model_type` in 🕵️ Optic Scanner is switched to **Video** or **MiniMax H3**, the 📤 Output section gains four video-specific widgets (duration, aspect ratio, sound mode, camera preset). For image models the Output section stays exactly as today. All defaults are `Auto`, which changes nothing — existing workflows produce byte-identical prompts.

## Problem Statement

The video profiles (rewritten 2026-08-05) tell the LLM to state duration, aspect, sound design and camera behavior — but those facts live only in free-form prompt text. Users must remember to type "10 seconds, 16:9" themselves; H3's hard API limits (4–15 whole seconds) are invisible in the UI; sound and camera choices get lost or stay vague (the "static camera" pain). Widgets make these shot parameters first-class, discoverable node inputs.

## Success Criteria

1. Selecting `Video` or `MiniMax H3` reveals exactly the four video widgets in 📤 Output; selecting any other model hides them (values persist in the workflow).
2. All-`Auto` state produces a prompt byte-identical to today's output (zero regression).
3. Non-Auto values appear in the generated prompt as a `SHOT PARAMETERS` block and survive both Hybrid and Two-Stage modes.
4. H3 duration is clamped to the 4–15 API range at injection time; the slider bounds adapt when the model switches (Video 2–20 ↔ H3 4–15).
5. Full test suites green: `pytest`, `ruff check`, `npm run test:all` (typecheck + vitest + e2e + build), `npm run check:bundle`.

## User Personas

FiL (author, primary user) and pack users building image-to-video / text-to-video prompt chains. Technical level: mixed — the pack serves ComfyUI users who think in nodes, not prompt engineers. Widgets must be self-explanatory via tooltips (EN + RU).

## User Journey

1. User drops Optic Scanner, wires Provider Loader config, picks `model_type = MiniMax H3` in 🧠 Model.
2. 📤 Output section now shows: detail chips, language, prompt mode **plus** ⏱ Duration slider (4–15), 📐 Aspect combo, 🔊 Sound combo, 🎥 Camera combo.
3. User sets 10s, 16:9, Layered sound, Orbit camera.
4. Execute: the LLM receives the video guidance **plus** a `SHOT PARAMETERS` block fixing those four facts; the timeline it writes totals exactly 10s with an orbit move and a layered `Sound:` clause.
5. User switches `model_type` back to `FLUX` — video widgets disappear; detail/language/prompt-mode stay; the hidden values are still saved in the workflow for the next switch back.

## Functional Requirements

### Must Have (P0)

- **`video_duration`** — Int slider. `0` = Auto. Range depends on model: Video 2–20, MiniMax H3 4–15 (slider bounds switch reactively with `model_type`). Injected as the requested duration; H3 injection clamps to 4–15 regardless of what the widget holds.
- **`video_aspect`** — Combo: `Auto / 16:9 / 9:16 / 1:1 / 21:9`. Injected into the framing header instruction (H3 first line; universal Video shot framing).
- **`video_sound`** — Combo: `Auto / Off / Layered`. `Off` → explicit "silent clip, no sound design clause" instruction; `Layered` → mandatory full clause (ambience bed + foley + music mood).
- **`video_camera`** — Combo: `Auto / Locked-off / Dolly in / Dolly out / Orbit / Pan / Handheld follow / Crane up / FPV push / Rack focus`. Injected as a **preference** ("build the shot around it, adapt per story stage"), never a hard override.
- Visibility: the four widgets render **only** when `model_type ∈ {Video, MiniMax H3}`; otherwise hidden, values preserved.
- Defaults `Auto` everywhere → all-Auto system prompt is byte-identical to current.
- `SHOT PARAMETERS` block present in both Hybrid and Two-Stage system prompts.
- EN + RU tooltips and labels (locales).

### Should Have (P1)

- Chosen parameters surfaced in `metadata_dict` (`video_params` sub-dict) so downstream nodes/UI can show what was fixed.
- Frontend unit tests for visibility + dynamic slider bounds.

### Nice to Have (P2)

- README widget table rows (EN + RU halves).

## Technical Architecture

### Data flow

```
Vue panel (OpticScanner.vue)
  → state.nodeState (createSyncedNodeState) → hidden native widgets
  → FiLOpticScanner.execute(**inputs)
  → PromptGenerator.build_system_prompt_bundle(..., video_params=...)
  → SHOT PARAMETERS block appended after model guidance
```

### Components touched

| Layer | File(s) | Change |
|---|---|---|
| Data | `common/data.py` | option lists, per-model duration ranges, `clamp_video_duration()` |
| Prompt logic | `common/logic.py` | `build_shot_parameters_block()`; bundle builders accept the four params |
| Node | `nodes/node_scanner.py` | 4 advanced inputs, fingerprint, execute passthrough, metadata |
| Contract | `common/contracts/registry.py` | 4 widgets, `section="output"`; then `npm run gen:contracts` |
| Frontend | `frontend/src/nodes2/nodes/scanner.ts` | `allWidgetNames` += 4 |
| Frontend | `frontend/src/components/nodes/OpticScanner.vue` | conditional visibility keyed on `nodeState.model_type`; dynamic duration min/max |
| Locales | `data/locales/en.json`, `ru.json` | labels + tooltips |
| Tests | `tests/test_prompt_pipeline.py` (+ new files as needed), frontend vitest | block assembly, clamp, visibility |
| Docs | `docs/prompting.md`, `CHANGELOG.md`, README tables | document the new inputs |

### Injection semantics (`SHOT PARAMETERS`)

- Emitted **only** when at least one parameter is non-Auto and the model is a video profile.
- Placement: immediately after the model-type guidance, before focus/aspect/style blocks — it overrides guidance defaults, so it must read later than them.
- Shape (example, H3, 10s, 16:9, Layered, Orbit):

```
SHOT PARAMETERS (fixed by the user — these override your defaults):
- Duration: exactly 10 seconds — time-coded beats must total this duration.
- Aspect ratio: 16:9 — state it in the framing header line.
- Sound: layered — the Sound: clause is mandatory (ambience bed, foley from the visible actions, music mood).
- Camera: orbit is the user's preferred move — build the shot around it, adapting per story stage if the arc needs it.
```

- `video_sound = Off` → `- Sound: silent clip — do not write any sound design clause.`
- Universal Video profile: same block, wording without timeline specifics ("state the requested duration", "frame the shot in 16:9").
- Duration clamp: `clamp_video_duration(model_type, seconds)` → H3 forces [4, 15], Video forces [2, 20]; `0` means Auto (line omitted).

### Compatibility rules

- New inputs are `advanced=True` with Auto/0 defaults → V3 schema change is additive; saved workflows load unchanged.
- `fil_state` persistence already round-trips arbitrary widget values; new widgets join `allWidgetNames` and get the same treatment.
- Hidden ≠ cleared: switching model away keeps stored values; switching back restores them on screen.

## Non-Functional Requirements

- Performance: none (no new API calls; block assembly is string building).
- Reliability: all-Auto path must be byte-identical — enforced by test.
- Consistency: follows the pack's widget conventions (`_int`/`_combo` contract factories, section grouping, EN+RU tooltips, CHANGELOG discipline).

## Out of Scope

- Shot-structure widget (single shot vs multi-beat) — beat structure stays the LLM's job per the H3 guidance.
- FPS / resolution / generator-side parameters — this pack writes prompt text only.
- Image-model widgets — image Output stays as today.
- Per-beat camera assignment for H3 — the preset is a shot-level preference.
- New node or new section — widgets live in the existing 📤 Output section.

## Open Questions for Implementation

- Exact combo label casing (keep it consistent with existing chips/combos).
- Whether `video_params` metadata should also echo the clamp when it fired (planned: yes, a `clamped: true` flag).

## Decisions Log (from the interview)

1. Widget set: duration + aspect + sound + camera (all four accepted).
2. UI mechanic: hide irrelevant widgets (not gray-out, not a separate section).
3. Defaults: everything Auto, zero behavior change until touched.
4. Duration range: dynamic per model (Video 2–20, H3 4–15).
5. Aspect set: base (Auto/16:9/9:16/1:1/21:9).
6. Camera semantics: preference, not a hard command.
