# Changelog

## Unreleased

### Added

- **🎨 New setting "Repaint the whole ComfyUI app" (`FiL_Design_ImageMind.Appearance.WholeUi`).**
  Renamed from its first cut, "Theme covers all of ComfyUI" — sitting right
  under "Theme applies to", which has its own "All nodes" option, the two read
  as if this were just a bigger version of that setting. It is not: the scope
  setting only ever tints title bars.
  The scope setting could always widen where *our* painting reaches, but it
  stops at the node title bar — everything outside our nodes is the host's to
  colour. This switch takes the other road: it builds a full ComfyUI color
  palette out of the active theme (`extensionManager.colorPalette`), registers
  it as `fil_<theme>` and selects it, so menus, sidebars, canvas and every
  other pack's nodes wear the theme too. Turning it off restores the palette
  the user was on before; while it is on, switching theme re-exports the
  palette so the application follows. Nothing is written into the workflow
  file — a ComfyUI palette lives in the user's own settings, and the generated
  palette stays in Settings → Appearance → Color Palette, theirs to keep or
  delete. Degrades to a warning toast on hosts without the palette API. Our
  nodes carry explicit LiteGraph colours a palette switch does not touch, so a
  theme change re-asserts them across the open graph. Locked in by the widened
  `appearanceSettings.test.ts` and `comfyPalette.test.ts`.

### Fixed

- **Pipboy's "узел в узле" — one frame around the whole node instead of three
  fighting ones.** The theme used to stroke a green rectangle around the TITLE
  alone (`onDrawTitleBar`), drop corner brackets on the DOM panel's own border,
  and leave the slot row floating between boundaries that matched neither —
  the exact box-inside-a-box shape flagged from a live screenshot. The
  title-only stroke and the card's own border/shadow are gone; `onDrawForeground`
  now draws a single phosphor frame (rounded rect + all four corner brackets,
  CRT-bezel trope) around title, slots and body together. The logic is shared
  with `cyber_punch_hud` through a `FRAME_THEMES` table, since both themes hit
  the identical bug and `onDrawForeground` is the only hook that runs after the
  body and badges are painted.
- **NFT Vibe was mixing its two brand hues in the same glow instead of picking
  one per element.** Flagged from a live screenshot of a real 17-node
  workflow: the card had a lime border and a violet ambient glow at once, the
  active-chip highlight blended a lime shadow with a violet one on top of it,
  and `muted` — the token nearly every widget label reads — was itself violet,
  so secondary text fought the lime accent across every node on screen. The
  reference swatch (Blanche White / Banana Yellow / Plum Violet) only ever
  uses violet as one of three solid blocks, never as running text. Fixed by
  giving each hue one job: violet is now the card border, the glass/field
  border and the section-divider fill (`--fil-surface-border`,
  `--fil-glass-border`, `--fil-input-border` all switched from lime to
  violet), lime is reserved for the active/focus state alone (chip highlight
  glow dropped its violet half; the seed-pill hover glow dropped its lime
  half in favour of violet, matching its own violet fill), and `muted` moved
  from `#c084fc` to a neutral `#c7c5cc` (11.7:1 on the panel) so body text
  stops competing with either brand colour.

### Changed

- **Pipboy reworked against the pip-boy.com reference.** The tube blips, it
  does not strobe: a 6-second CRT flicker (one opacity dip near the end)
  replaces both the travelling scanline band (1.2s loop) and the beam sweep
  (6s loop) — motion the reference never had, running on every visible node at
  once. The flat panel fill becomes a radial phosphor vignette (green at the
  centre falling to black at the corners), and the scanlines stay ruled but
  quiet — still 1px lines every 4px in `overlay`-blended white instead of
  moving 2px green/black bars. Muted text moves `#00b800` → `#98ffa1` per the
  reference, which takes secondary text *lighter* on a phosphor screen; the
  old value sat right on the AA floor at 4.8:1, the new one reads at 16.4:1 on
  the node surface. With "Theme animations" off the flicker freezes but the
  scanlines stay ruled — same colours, no movement.
- **Optic Scanner and Dataset Forge now report progress through the V3
  `ComfyAPISync.Execution.set_progress` API — and show the frame being
  processed.** Both nodes used `comfy.utils.ProgressBar`, which only carries
  numbers; the V3 API ships the preview frame alongside the progress event
  with node metadata, so during a multi-frame analyse run or a dataset
  captioning batch the UI shows the exact frame the model is looking at right
  now. The plumbing lives in a new `common/progress.py` (`FilProgress`), which
  picks its backend once at import: the V3 sync API where it exists, the
  legacy bar on hosts older than ComfyAPI v0.0.2 — the pack still installs
  there, so the fallback is a compatibility boundary rather than dead code
  (previews are simply dropped on those hosts). Locked in by
  `tests/test_progress.py` (backend selection, call shape, legacy fallback,
  and the captioning batch wiring that asserts each progress tick carries its
  own frame).
- **The two example workflows moved from `docs/workflows/` to
  `example_workflows/` — and now show up in Workflows → Browse Templates.**
  ComfyUI scans `custom_nodes/*/example_workflows/*.json` and serves whatever
  it finds there through `/workflow_templates`, so the graphs the README
  already shipped as drag-and-drop starters are now also one click away in the
  host's own template gallery (and visible on the registry page, which reads
  the same folder). The graphs themselves are unchanged — same two files,
  re-synced to the current schema at 1.1.2 — only the address moved. The move
  is followed through everywhere the old path was named: README (EN + RU),
  `pyproject.toml` package data, the `.comfyignore` shipping note, the two
  documentation tests that open the graphs, and the frontend comments that
  point at them.
- **📋 The pack's two actions are now in the menu bar under a top-level
  "FiL Design" group.** The keyboard cheatsheet and "save this theme as a
  ComfyUI palette" were reachable only through Shift+? and the command
  palette — which is where discoverability went to die. Both are now
  registered through the declarative `menuCommands` extension property; the
  host's menu store creates the top-level group the first time it meets the
  path, so nothing host-side needs setting up. Each command gained a short
  `menubarLabel` ("Keyboard cheatsheet", "Save theme as palette"), because the
  host renders that field verbatim and does not fall back to the longer
  command-palette label. Locked in by `tests/menuCommands.test.ts`: every
  menu id must also be a declared command (the host silently drops ones that
  are not) and every menu-bound command must carry a `menubarLabel` (the
  entry renders blank without one).
- **Pixaroma's surface tokens remeasured against the sibling pack's real node
  faces.** The values previously came from its full-screen paint editor — one
  shade blacker than the nodes themselves, with solid opaque border-greys.
  Measured against the actual node-face CSS (`.pix-ops-sl`, `.pix-xy-field`,
  `.pix-xy-input`, `.pix-xy-combo` all share `background:#1d1d1d` with
  `1px solid rgba(255,255,255,.14)` borders at radius 5px), the glass fields
  move `#111111` → `#1d1d1d`, every border `#3a3d40` → the translucent
  `rgba(255,255,255,0.14)`, and the field radius 4px → 5px. The one token the
  sibling pack cannot supply — `--fil-surface-border`, its nodes carry no card
  of their own at all — stays invented, but drops the opaque grey for a
  barely-visible `rgba(255,255,255,0.08)` wash against a dark canvas.

## 1.1.2 (2026-08-06)

The video release, with a wireless heart. Optic Scanner became the pack's
video department — two new targets (a universal Video profile and MiniMax H3
timelines), four shot-parameter widgets that only exist for video targets,
and a prompting rewrite paid for with live renders. Around it: 📡 Channel
finishes wireless data transfer (conflict picking, a diagnostics tab), 🎬
Cinema Rig joins the styling department, the style libraries completed their
first full live-render sweeps, two Cyber Punch themes join the theme layer,
and a long row of interaction fixes — scrubbing number fields, seed-linked
controls graying out, the language rule finally closing every system prompt.
Saved workflows load unchanged. The output that does change: video-target
prompts (rewritten guidance), Ideogram 4 prompts (the v4 API has no
negative-prompt field), and the style-library presets whose endings and
anchors the sweeps rewrote.

### Added

- **🕵️ Optic Scanner grew four video shot parameters — Output widgets that
  appear the moment `model_type` switches to Video or MiniMax H3 and vanish
  for every image target.** Selecting a video profile now surfaces ⏱
  `video_duration` (slider; 0 = Auto; the range follows the profile — Video
  2-20s, MiniMax H3 4-15s, the API's hard limit, re-clamped at injection so a
  stale value after a model switch can never produce an invalid prompt), 📐
  `video_aspect` (Auto/16:9/9:16/1:1/21:9, written into the shot framing —
  for H3 into the timeline header line), 🔊 `video_sound` (Auto / Off =
  silent clip / Layered = mandatory ambience+foley+music clause) and 🎥
  `video_camera` (ten preset moves, injected as a preference the LLM builds
  the shot around, adapting per story stage). Non-Auto values land in a
  `SHOT PARAMETERS` block placed after the model guidance in both Hybrid and
  Two-Stage system prompts, so user-fixed facts override the guidance's
  defaults; all-Auto runs stay byte-identical to the pre-widget output, and
  hidden values persist in the workflow — switching back to a video profile
  restores them on screen. The chosen parameters are echoed in
  `metadata_dict.video_params` (with a `duration_clamped` flag); the key is
  absent for image runs. Mechanically this is the first real consumer of the
  contract schema's dormant `visible_when` / `visible_when_value` fields —
  OpticScanner.vue now evaluates them generically, and the panel gained a
  FilSlider branch (its first slider) plus a FilSelect for the ten-option
  camera list. Both example workflows were re-synced to the wider schema,
  locales carry EN/RU tooltips, and the feature is locked in by
  `test_video_shot_parameters.py` (18 tests: clamp ranges, block assembly,
  byte-identical all-Auto, both bundle stages, node-level metadata/gating)
  and five new OpticScanner component tests (visibility per model type,
  dynamic slider bounds, clamp-on-switch, hidden-value persistence).

### Fixed

- **The language rule is now genuinely the last block of the system prompt, in
  both Hybrid and Two-Stage.** `execute()` stacked the style overlays
  (enforcement / NSFW overlay / custom style) on top of the bundle *after* the
  bundle had appended the language rule, so a `language=ru` run with any style
  selected ended with English style prose after "write in Russian" — the exact
  burial the 2026-07-29 run over 132 models flagged (29% answered in English
  when the rule sat mid-prompt). `build_system_prompt_bundle()` and
  `build_system_prompt_two_stage_bundle()` now return the rule separately and
  the node appends it after every overlay (stage 2 included), locked in by two
  node-level tests asserting the final sent system prompt ends on the rule.
- **A locked `video_aspect` now outranks wired width/height sockets.** With
  the widget at `16:9` and a 4:3 resolution wired in, the prompt used to carry
  two contradictory framing instructions, and the socket-derived one read
  later. The socket guidance is now skipped for video profiles whenever the
  widget is non-Auto (image targets and Auto keep it, unchanged).

### Changed

- **📖 `docs/ETA_GUIDE.md` rewritten to match the actual code path.** The
  previous version hand-waved the math ("Noise Added = eta × Standard Noise
  Factor"), carried an incomplete sampler table, listed a nonexistent
  "ClownsharKSampler" in the subtitle and framed `eta > 1` as pure artifact
  risk. The guide now documents the real `get_ancestral_step` split
  (`sigma_up` / `sigma_down`, including the `sigma_up ≤ sigma_to` clamp that
  saturates the effect above ~1–2), the full `_ETA_SAMPLERS` allowlist
  (+`cfg_pp`/`_gpu` variants, `dpm_adaptive`) plus runtime signature-detected
  RES4LYF samplers (`rk_beta`, whose native default is 0.5), the documented
  exclusion traps (`er_sde`/`sa_solver`/`dpm_fast`), seed-based
  reproducibility of the injected noise, and a new section on how FiL KSampler
  routes eta — silent skip + frontend grayout for samplers that ignore it, so
  a stale `eta` value can never crash a deterministic sampler with TypeError.
  Both RU and EN versions updated symmetrically; no code changes.

- **🔬 HighRes Fix's 🔁 Iterations moved out of the ADVANCED fold — it now
  sits right under 🪜 Hires steps in the always-visible panel.** It was
  collapsed by default next to set-once controls (Hires checkpoint,
  ControlNet), but the pass count is an everyday quality knob you tweak
  run-to-run, so hiding it one click away was friction for no gain. ADVANCED
  now keeps only the Hires checkpoint and the ControlNet stack. The widget's
  name, 0–5 range, default and the backend `iterations` behaviour are
  untouched — saved workflows, socket wiring and packed scripts are all
  unaffected; `hiResFix.test.ts` updated to assert Iterations is visible with
  ADVANCED collapsed.

- **🕵️ Optic Scanner's Video and MiniMax H3 prompting was rewritten around four
  observed failure modes.** Runs against real video targets kept producing (1)
  still-frame prompts — a caption of the image with nothing actually moving;
  (2) collapsed structure — timestamps leaking into the universal Video
  profile, beats missing their `Sound:` clause in H3 timelines; (3) weak or
  irrelevant sound — one generic ambience word instead of a clause tied to
  what is on screen; (4) vague camera — "camera moves" with no shot size,
  angle or move character. The universal **Video** guidance (`common/logic.py`)
  now opens with the motion-first principle ("a video prompt is a shot
  unfolding in time, not a picture description"), teaches the LLM to read a
  wired image as one frozen instant and project its motion evidence forward,
  demands secondary motion (hair, fabric, dust, parallax), light that changes
  during the shot, a full shot-size/angle vocabulary, exactly ONE named camera
  move per shot (compound moves confuse every video model), a style/treatment
  anchor, a layered sound-design clause (ambience bed + foley from the visible
  action + music mood) and `Image N` reference roles; it still forbids
  timestamps/shot lists/bracket tags because every non-MiniMax parser in the
  class reads free text only. The dedicated **MiniMax H3** guidance was
  re-verified against platform.minimax.io on 2026-08-05 and gained the API
  facts: 4–15 whole-second durations, `9:16 vertical` header variant, inline
  camera tags `[pan]`/`[zoom]`/`[static]`, reference jobs on the first line,
  no-gaps/no-overlap beat coverage of the whole duration, one motion + one
  camera move per beat (empty beats get merged, never padded), same-word
  subject naming for identity across cuts, a style/tone anchor, and a layered
  `Sound:` clause that evolves with the beats. Post-conversion
  (`common/model_prompt_adapters.py`) is now video-aware too: timelines keep
  one beat per line, universal video prose flattens to the promised single
  paragraph, and truncation retreats to a sentence boundary and never cuts
  inside a `[beat]` bracket span or leaves a trailing ellipsis, instead of
  shredding the last beat mid-word. Both video contracts' word ceilings
  (Video 150, H3 250) are now enforced by the converter even when a roomier
  detail level is set — video models follow short concrete shots better than
  dense walls of text. New guidance assertions in `test_prompt_pipeline.py`,
  adapter/truncation tests in `test_all_models_prompting.py`, and a MiniMax
  vendor-compliance section in `test_official_vendor_compliance.py` lock all
  of it in; `docs/prompting.md` updated to match.

### Added

- **🎬 Cinema Rig (`FiLCinemaRig`) — a camera-department shot builder.** Style
  Mixer blends flat style overlays; Cinema Rig assembles a shot from five
  orthogonal rig axes — camera body, lens, focal length, aperture and color
  grade — the way a cinematographer actually specs a frame. 6 bodies, 6 lenses,
  6 focal lengths, 5 apertures and 14 grades combine into a deterministic
  assembly (no API call), wrapped in film or digital medium language depending
  on the camera's type so the output always names a capture. Two modes:
  `Original Shot` rides the user's scene through the rig untouched, and
  `Reshoot` locks a reference image's identity/pose/props and only changes the
  camera treatment. An optional `LLM Polish` rewrites the assembly into fluent
  prose through the provider model, falling back to the deterministic rig on
  any failure. Outputs both the `rigged_prompt` and the `rig_overlay` (camera
  treatment alone, stackable under any prompt). Presets are original to this
  pack and held by the same guards as the photo library.

### Changed

- **A linked `seed` input now grays out its companion controls, matching stock
  ComfyUI, in every panel that has one.** FiLKSampler's 🔁 After generate was
  fixed first; an audit of every socket-exposing node found two more spots
  where a wire into `seed` left its companions live: FiLNoiseControl's 🔁
  After generate stayed editable next to a driven variation seed, and
  FiLHighResFix's Seed source segmented plus the Random / Use last / New fixed
  row stayed clickable while the link overwrites the value at queue time. All
  three now disable and show the shared "Driven by the connected input"
  tooltip; `FilSeedRow` grew a `disabled` prop so HiResFix can gray the whole
  row. Nodes checked and already correct: DatasetForge (seed grays, its
  after-generate is intentionally pinned `fixed`), OpticScanner and FiLSeed
  (no seed socket at all), ColorWizard `saturate` and StyleMixer
  `base_prompt` (graph-only sockets with no panel field).
- **The two art-library `🦾 КИБЕРПАНК` presets left unconfirmed after four
  rewrites each are now fixed — on a fifth attempt, using a different lever
  than "say it's hers" one more time.** `Golden Mechanical Portrait` kept
  building a separate golden statue because its own opening words — "golden
  cyberpunk mechanical...portrait art" — set up a golden mechanical *subject*
  before "her" was ever mentioned; moving every "golden"/"regal"/"luxury"
  word out of the opening and into a clause that only modifies her hand
  fixed it outright. `Neuro-Interface` kept rendering nothing because "a cold
  blue monitor glowing on the desk beside her" was a full second scene
  competing for the same detail budget as a small neck feature; dropping the
  monitor and forcing an extreme close-up crop — the same fix as Macro
  Micro-world and Bath Scene earlier this session — finally got the hardware
  on screen. The first render of the fixed Neuro-Interface came back as a
  giant collar dwarfing a tiny figure — this session's usual full-body test
  subject fighting a preset that explicitly asks for a close-up — and cleared
  up completely once tested against a matching portrait-crop subject instead,
  the same test-harness collision already on record for Macro Micro-world.
  `🦾 КИБЕРПАНК` in the art library is now 9 for 9.
- **NSFW libraries: photo half live-swept clean, art half partially swept, 3
  text-only fixes unverified.** Testing NSFW presets first needed a checkpoint
  swap — the "official" krea2 checkpoint used for every other sweep this
  session suppresses explicit content regardless of what the prompt asks for,
  confirmed by rendering the identical prompt against both and getting a
  clothed figure from one and a compliant result from the other. Switched to
  `darkBeastKrea2` for this pass. With the right checkpoint, `NSFW_PHOTO_STYLES`
  (66 presets, all 8 categories including `🦾 КИБЕРПАНК`) came back clean — 0
  confirmed anchor bugs, including three presets predicted high-risk from text
  alone that all rendered fine. That reverses this session's working
  assumption: the anchor bug's presence in photo/art `🦾 КИБЕРПАНК` was not
  proof NSFW cyberpunk would have it too. One separate pattern noted, not
  fixed: 3 presets that ask for lingerie/swimwear (`Glamour Core`, `Fashion
  Editorial`, `Swimsuit Campaign`) render fully nude anyway — reads as a
  checkpoint-level pull the way `Golden Mechanical Portrait` resisted four
  rewrites, not something preset wording fixes.

  `NSFW_ART_STYLES` (46 presets) is only partially confirmed: `🎨 ИЛЛЮСТРАЦИЯ`
  (8) and `💻 ЦИФРОВАЯ` (3) rendered clean. The remaining 35 across 8
  categories never rendered — the sweep was interrupted mid-run twice and was
  not restarted a third time. Of those, `📜 КЛАССИКА`, `🎯 ЖАНРЫ`, `🖌️ ЖИВОПИСЬ`,
  `✒️ СКЕТЧ`, `🏰 ФЭНТЕЗИ` and `🕰️ РЕТРО` (26 presets) describe medium and
  technique only, the same shape that held up clean across ЖИВОПИСЬ/ГРАФИКА/
  ИСТОРИЯ/КОМИКС/ДИДЖИТАЛ in the main art library — low risk by pattern, but
  pattern is not proof, as this same session just demonstrated in the other
  direction. `🚀 SCI-FI` and `🦾 КИБЕРПАНК` (9 presets) is where the anchor bug
  would actually be expected; three of those — `Cyberpunk NSFW`, `Synthetic
  Skin`, `Glowing Fiber Optics` — had the unanchored-property shape and were
  given the same fix already confirmed elsewhere, but with no render behind
  it this time. Marked `# not yet render-verified` in-file rather than
  presented as confirmed repairs.
- **Text review of the art library's remaining 110 presets (everything outside
  `🦾 КИБЕРПАНК`), one confirmed fix.** `🎨 ЖИВОПИСЬ`, `✏️ ГРАФИКА`, `🏛️ ИСТОРИЯ`,
  `💥 КОМИКС` and `👾 ДИДЖИТАЛ` describe medium and technique only — nothing
  claims an attached part the way cyberware does, so the anchor bug that broke
  9 of 19 `🦾 КИБЕРПАНК` presets has nowhere to occur. One direct parallel
  found anyway: `💻 ЦИФРОВАЯ/🌫️ Atmospheric Sci-Fi Mist` carried the exact same
  wording as the photo library's own Atmospheric Sci-Fi Mist before *that* one
  was fixed earlier this session — generic fog with nothing sci-fi about it.
  Same anchor applied, confirmed by a live before/after render. Two things
  spotted but left alone pending a live sweep: six presets in `🔬 СТИЛИЗАЦИЯ`
  read as close variations of one dark-gothic-portrait concept (worth checking
  whether they're actually distinct on screen); a couple of presets elsewhere
  in `💻 ЦИФРОВАЯ` name decorative accents with no clear location, but
  low-stakes enough not to act on without a render to confirm.
- **The art library's `🦾 КИБЕРПАНК` category (19 presets) got the same live
  sweep the photo library already went through — first review of the 129-entry
  art library since it shipped.** 9 of 19 came back with no augmentation
  visible on the subject at all, worse than the photo cyberpunk category's 8
  of 30. Five had the familiar bug — properties named with no body part to
  land on (`Nanopunk Swarm`, `Bio-Corroded Tech`, `Angelic Cyber Feminine`,
  `X-Ray Skeleton Cyber Anime`, `White Android Minimal Portrait`). Four showed
  a shape this session hadn't seen before: the augmentation rendered in full,
  glowing detail — as scenery around the subject rather than on her
  (`Mecha Pilot`'s cockpit, `Neuro-Interface`'s monitor, `Industrial Female
  Cyborg Portrait`'s machinery backdrop, `Golden Mechanical Portrait`'s gold
  hall). The photo library's own `Industrial Cyborg Portrait` carries nearly
  identical wording and rendered fine as a photograph; the same words as
  "digital portrait art" pulled toward a character-sheet convention instead —
  subject standing in front of her machine, not wearing it. Fixed by saying
  whose the part is, not just naming it: "her own skull", "her own shoulder".
  6 of 9 confirmed fixed on the first or second attempt. Two — `Neuro-Interface`
  and `Golden Mechanical Portrait` — resisted three to four structurally
  different rewrites each and are left in their best-reasoned state,
  documented in-file as unconfirmed rather than iterated on indefinitely; the
  art library's remaining 110 presets have not been swept.
- **64 presets no longer close on the word "realism".** A third of the photo
  library ended in an adjective plus `realism` — "cinematic movement realism",
  "moody urban realism", "tactile engineering realism" — which names no camera,
  no practice and no context, and left distinct styles reading as variations of
  each other. Each ending now says who takes this kind of picture and why:
  "a picture somebody took on their phone", "shot from the photographers' pit",
  "film that sat in a drawer too long". Two tests hold the line. One category
  moved as a result, for the better: `Cybernetic Arm Close-Up` now resolves to
  `cyborg` instead of scraping past `oil_painting` on the photo-library guard.
- **20 of the 36 `🗺️ СЦЕНЫ` presets now have a moment passing in them.** The
  scenes were the stillest group in the library — an empty set with the lights
  on and nobody in it, which is most of why the photo half read as a postcard.
  `Piano Studio` was polished wood and window light; it now has the lid propped
  open, the bench pushed back and a pencil across the open score. What each one
  gained is evidence rather than plot: dust turning in a beam, a shop bell still
  swinging, a gap in the shelf where something was just lifted out. None of them
  gives the subject an action to perform — a scene preset stacks under the
  user's own prompt and must not decide what the person in it is doing.

### Changed

- **The photo library has been fully swept live.** `🏠 ИНТЕРЬЕР`, `🏜️ ЖАНРЫ`,
  `📐 МОДИФИКАТОРЫ`, `🎬 КИНО` and `📸 РЕПОРТАЖ` — the last 27 unchecked
  presets — came back with zero breaks, closing out a category-by-category
  live sweep of all 171 `common/styles/photo.py` entries. Final count: 12
  broken, 12 fixed — 8 in `🦾 КИБЕРПАНК`, 2 in `🧪 ЭФФЕКТЫ`, 2 in `⏱️ ЗАХВАТ`,
  plus the earlier `🗺️ СЦЕНЫ` repair — against 159 that held up on inspection.
  Full tally and the two known false-positive traps (a style colliding with
  the *test subject* rather than the model; a style surfacing an unrelated
  model quirk) are recorded in `docs/styles.md`. The art library and both
  NSFW libraries have not been swept this way.
- **`⏱️ ЗАХВАТ`, `🕰️ РЕТРО`, `📷 КАМЕРЫ`, `🏙️ СРЕДА`, `👗 ФЭШН` swept live — 2 of
  47 needed fixing.** Both in `⏱️ ЗАХВАТ`, and both the same disease from a new
  angle: `Gesture Smear` described the smear and never the movement to smear —
  nothing told the model a hand was doing anything, so a live render came back
  as two ordinary static women. Wind Gust solved the equivalent problem with an
  outside force (wind) that needs no cooperation from the subject's pose; a
  hand has no such shortcut, so this now names the smallest, most generic
  gesture that fits almost any pose — brushing hair back, adjusting a cuff.
  `Rolling Shutter Skew` leaned entirely on "spoke and propeller geometry",
  which most scenes don't contain and had no fallback; a render with neither in
  frame came back with no skew at all. Led instead with the one thing every
  photograph already has — vertical lines in the background — with the
  spoke/propeller case kept as a bonus when one is present. The other 45 held
  up, `📷 КАМЕРЫ` and `🏙️ СРЕДА` in particular each reading as nine distinct,
  unmistakable places rather than variations on each other.
- **`🧪 ЭФФЕКТЫ` and `🗺️ СЦЕНЫ` swept live — 2 of 67 needed fixing.** `HDR
  Dynamic` described the merging process ("three bracketed exposures, tone
  mapping, highlight recovery") and never the visible signature that process
  leaves; a render came back as an ordinary daylight photo. Now names the tell
  — glowing halos on cloud edges, colours pushed loud, shadow texture that
  shouldn't be visible — the recognisable "loud HDR" look. `Цифровой муар`
  named "a fine repeating pattern" with nowhere to put it, and moire is an
  interference effect between two grids — with nothing supplying the second
  grid, the render was a plain portrait against a plain wall. Anchored to a
  perforated metal grille in the background. Two more natural word choices for
  that grille — "screen", "venetian blind" — turned out to be `cinema`
  category triggers that would have rewritten "photograph" into "70mm capture"
  the moment the preset stacked through Smart LLM Fusion; checked the final
  wording against the full keyword list before settling on it. The other 65
  presets — all 36 `🗺️ СЦЕНЫ` (already repaired earlier this session) plus 29
  of `🧪 ЭФФЕКТЫ` — held up on inspection.
- **A written rule for style prose, and one narrow test instead of a broad
  one.** `docs/styles.md` now opens with how to write a preset: the
  comma-separated noun-phrase shape is deliberate (a style stacks *under* the
  user's prompt and must stay neutral), and the real failure is naming a
  property with nothing to attach it to — the single cause behind the ЗАХВАТ,
  СЦЕНЫ and КИБЕРПАНК repairs. Two attempts to enforce that automatically were
  built and thrown away: a "connective phrasing" regex failed `Long Exposure
  Ghost` and `Handheld Grab Shot`, both proven working by live render, and a
  rule requiring augmentation presets to name a body part had a 60%
  false-positive rate — full-body armour needs no address. Only the
  unambiguous half is now a test: no preset may order the frame emptied, the
  contradiction that made `White Android Minimal Studio` delete its own
  subject.
- **Eight `🦾 КИБЕРПАНК` presets rewritten after a live sweep of all 30 came back
  showing no cyberware at all.** `Wirehead Junkie`, `Corpo-Cyborg`, `Military
  Cyborg`, `Post-Apoc Cyber` and `Solarpunk Hybrid` listed materials —
  "exposed wires, damaged cyberware, rusted metal parts" — without ever naming
  a body part to put them on, and every one rendered as an ordinary person on
  an ordinary street. The presets that already worked, `Bio-Mechanical Core`
  and `Cybernetic Arm Close-Up`, always named where: chest, arm. Each of the
  five now does too — a prosthetic forearm, a neural jack at the neck, an
  armoured arm — and a re-render shows a real, unmistakable prosthetic in
  every one. `White Android Minimal Studio` had a sharper problem: its text
  demanded "nothing else in frame" while describing a standalone android bust,
  which is a direct conflict the moment it stacks under an actual subject
  through Style Mixer. Repointed at the subject's own head, the way `Chrome
  Android` already does. `Golden Mechanical Luxury` and `Atmospheric Sci-Fi
  Mist` got the same anchor treatment on a smaller scale. Checked for category
  drift before and after with the resolver cache built from each library in
  turn — none.

### Added

- **A fifth Scanner craft layer: `🎭 Emotion & Motion`.** The other four
  describe how the picture was made; this one describes what is going on inside
  it — facial state, gaze, body tension, the stage of the action, momentum, and
  the physical evidence movement leaves behind. It is a focus rather than a
  fourteenth agent because 👤 Portrait already carries body language and nothing
  else did: a car mid-corner, an animal mid-gait and a crowd flowing one way are
  the same question asked of a different subject, so the layer has to compose
  with the agent instead of replacing it. It holds the pack's markers-over-labels
  rule hardest of all — "outer brow raised, lower lid tight, mouth corner pulled
  back on one side only", never "happy" — and on a genuinely still frame it says
  what holds the subject still rather than inventing movement.
- **Eight movement modifiers in `⏱️ ЗАХВАТ`** — Wind Gust, Panning Follow,
  Gesture Smear, Long Exposure Ghost, Rolling Shutter Skew, Rear-Curtain Sync,
  Zoom Burst and Handheld Grab Shot. The photo library described the camera in
  detail and the moment almost never: 90 of its 163 presets opened with a lens
  and an aperture, 14 said anything about what was happening in front of it,
  and the one category about movement held three entries. These are shutter
  techniques rather than subjects, so they stack onto any other preset through
  Style Mixer, and each carries a guardrail stopping the model from inventing a
  chase when the scene it lands on is standing still.

- **Two "Cyber Punch" themes** — same brand palette (`#FF0022` red, `#121212`
  ink, `#FFD000` yellow, `#FFFFFF` white), two different treatments. `Cyber
  Punch` is translucent glass over the red/black base with a wide blur and a
  persistent glow on the controls actually carrying state; `Cyber Punch HUD`
  is the opposite instinct — near-opaque, sharp corners, a thin yellow frame
  with corner-bracket accents drawn around the whole node, not its title bar.
  Both were tried first as variants on a throwaway sandbox node (`ui-lab`
  branch, never merged) before either reached the shared theme layer, then
  re-verified number for number against that lab treatment — the first cut
  had ported the palette faithfully but improvised the CSS from other themes'
  idioms.

### Added

- **📡 Channel (`FiLChannel`) — data across the graph with no wire drawn.**
  Plug something into a Channel and every free input of the same type
  elsewhere in the graph picks it up. The pack's 16th node, and it ships
  finished, with the two things a wireless layer dies without:
  - When two channels could feed the same input, or a node has two identical
    inputs a channel can't tell apart (a KSampler's positive/negative),
    nothing auto-wires — the gear on the Channel's own panel opens a target
    picker. Same-type inputs pair to channels by name, with the unnamed
    second wire settled by deduction; a positive/negative question is asked
    once per wire and vaulted in node properties, so reloads never re-ask it.
  - A "Wireless" tab in the bottom panel (next to Essential/View Controls)
    lists every channel in the graph and everything currently unresolved:
    dormant subscriptions, ambiguous picks, type mismatches, unknown channel
    names, self-loops, unused channels.
  - A subgraph is its own scope — a Channel placed inside one serves
    receivers in that same subgraph only.
  - The rest of the kit: a cluster modal for the leftovers, takeover of real
    wires with an Undo toast, inline channel rename, memory pre-highlight of
    the last answer. One async race closed on the way: a wire drawn the
    instant the node exists fires `onConnectionsChange` before the panel's
    async mount has run, so pending ambiguity checks queue on the node itself
    and drain on mount. While in there: style-library category headers
    (StyleBrowser's sidebar and tiles) are translated at display time now
    instead of showing the raw Russian category word from the style key.

- **🎥 Two new Scanner targets for video models: universal `Video` and
  `MiniMax H3`.** Image profiles shape text for diffusion models; video
  models need a shot, not a picture. `Video` is a universal profile for any
  video generator (MiniMax H2, Wan 2.x, whatever reads plain prose) asking
  for one continuous shot description — motion first, light that changes, a
  layered sound clause, exactly one named camera move, `Image N` reference
  roles. `MiniMax H3` writes the platform's timeline format: a header line
  (duration, aspect, style) and gap-free shot blocks with `Sound:` clauses.
  Both carry word ceilings (150/250) because video models follow short
  concrete shots better than dense text. The prompting rewrite further down
  is what live runs against these first versions surfaced.

### Fixed

- **`eta`/`bongmath` no longer crash the samplers that ignore them — and the
  panel now says when they would.** `er_sde`/`sa_solver`/`sa_solver_pece` sat
  in the eta allowlist although their k_diffusion functions take
  `s_noise`/`tau_func` instead — `KSAMPLER.sample()` unpacks `extra_options`
  as `**kwargs`, so every generation with them died in a TypeError. The
  allowlist now matches the real signatures (drift-checked against the
  installed ComfyUI by tests), and unknown/custom samplers fall back to
  introspecting the registered function, which puts RES4LYF's
  `rk`/`legacy_rk`/`rk_beta` on eta. On the frontend, `GET /sampler_options`
  serves the installed samplers that actually read the values; the KSampler
  panel grays eta/Bongmath out with an explanatory tooltip when the selected
  sampler would drop them, and fails open (widgets stay editable) if the
  route is unreachable. `_sample_core` also moves the result to the
  intermediate device/dtype, matching stock `common_ksampler`'s sample path.

- **KSampler's `sampler_name` and `scheduler` now take a wire, and a bad
  linked value gets a readable error.** The two combos stayed widget-only
  while every other KSampler field exposed a socket; a linked value only gets
  type-checked by ComfyUI, never validated against the installed list, so an
  unknown name reached `comfy.samplers` and died there as a bare KeyError
  with no hint which field was at fault — `execute()` now rejects it naming
  what's actually installed. Two things this surfaced: `registerStyledNode`'s
  `getExtraMenuOptions` setter wrote every assignment into one shared closure,
  so packs that patch per node *instance* (cg-use-everywhere) piled their
  menu block up once per node ever created, all inside a single node's
  context menu; and exposing the two combos put three different field
  heights in one KSampler row — a single `--fil-control-h` now governs every
  interactive control, and every labelled row shares one label-column width.

- **Selecting a FiL node no longer stretches ComfyUI's Properties Panel into
  a blank 500–1000px canvas.** The right-side panel has no Vue renderer for
  custom DOM widgets and falls back to `WidgetLegacy.vue`, which draws the
  widget into a blank `<canvas>` sized to whatever `getHeight()` reports.
  `canvasOnly` is the flag the panel's own widget filter checks to skip a
  widget entirely; canvas rendering is untouched. One shared fix in the DOM
  widget host covers every node in the pack.

- **Image Decomposer's language widget defaulted to a value it doesn't
  offer.** `default` was `"English"` while the options are `["en", "ru"]` —
  the widget silently fell back to the first entry while `execute()`'s own
  default stayed `"English"`, so an untouched node sent a value the widget
  never actually showed.

- **Provider calls no longer freeze ComfyUI, and a row of prompt-generation
  edge cases closed.** Model listing, provider probe and auth writes moved
  off the aiohttp event loop via `asyncio.to_thread` — a probe could freeze
  the whole UI for the entire generation, up to the provider timeout. Also:
  every reference image now reaches the provider (Style Mixer Smart Fusion
  silently dropped 3 of 4); Style Mixer preflights model validity and vision
  capability before analysing references; Decomposer keeps error text out of
  `full_prompt` and hashes every frame into the fingerprint, not just the
  first; Scanner derives the two-stage second seed from `seed >= 0` so a
  fixed `seed=0` no longer falls back to a random stage-2 seed;
  `ImageProcessor.max_side` mutation was replaced with a thread-safe
  per-call `with_max_side`; the `RateLimiter` reserves its slot and sleeps
  outside the global lock; and the OpenRouter catalogue is TTL-cached instead
  of refetched on every vision generation.

- **The published archive ships the bundle's sourcemap again.** Since 1.1.0
  the 2.3 MB map was excluded to save space, leaving the 619 KB of minified
  frontend in the archive with nothing to read it against — and the registry
  forbids obfuscated code because it prevents security review. The version
  history lines up exactly: 1.0.0 shipped the map and is Active; 1.1.0 first
  dropped it and is Flagged; 1.1.1 inherited the exclusion. That's a
  correlation, not a stated reason — but the map's `sourcesContent` inlines
  every source file, so shipping it is what makes the bundle reviewable. Two
  tests hold it: one asserts the map both ships and exists on disk, and the
  dev-tooling exclusion list caught the policy flip.

- **Ideogram 4 lost its negative prompt — the v4 API has no such field.**
  The profile carried `supports_negative_prompt: true` from the v3 era; the
  v4 generate endpoint exposes no `negative_prompt`, and Ideogram's own
  prompting guide says to describe the positive visual opposite of anything
  excluded. Negatives now flip positive, same as FLUX/Z-Image/Krea 2, and the
  guidance carries the documented ~150–160-word sweet spot with the most
  important subject first. Every profile in `MODEL_PROMPT_RULES` gained a
  dated vendor-verification note saying where each rule came from
  (Tongyi-MAI, Alibaba Model Studio, krea.ai, ideogram.ai); QWEN moved from
  `partially_verified` to `verified`.

- **Clean QWEN answers stopped being rewritten, and the FLUX JSON fallback
  stopped repeating itself.** QWEN was force-restructured like SDXL even when
  the LLM produced clean prose — but Qwen-Image's own examples are dense
  prose, and a forced labeled breakdown would undo a good answer; now only
  SDXL keeps the always-restructure path, and QWEN restructures only on messy
  markup. And `format_for_flux_json` no longer copies the scene line
  wholesale into the lighting/camera/style fields — for single-paragraph
  prose that line is every line, and the schema used to fill with truncated
  repeats of the same text.

- **Panel state stopped shipping inside the queued prompt, and KSampler's
  seed mode now survives a reload.** `graphToPrompt` puts every widget into
  the node's API inputs unless `serialize: false`, so the whole panel state
  object shipped as an undeclared input — and since the server hashes every
  prompt input into the execution cache key, any change to it defeated the
  cache ("cached" never fired; the sampler re-ran every queue). The flag only
  controls prompt inclusion; workflow persistence is untouched. Separately,
  ComfyUI core creates the seed widget's `control_after_generate` companion
  with `serialize: false`, so the user's "fixed" choice silently came back as
  "randomize" on every load — `fil_state` now carries it across saves, same
  as Scanner and Style Mixer already did.

- **Toggle labels stopped being clipped next to dead space.** A row reserved
  38% for the label and 62% for the control — but a switch is 36px wide and
  pinned to the row's right edge, so the 62% was bought and never used:
  measured on a live 262px Cleaner, the label clipped to 86px while needing
  143px, with ~94px of dead space beside it. `minmax(0, 1fr) auto` gives the
  switch its own width and the label the rest; nothing that was previously
  aligned moves. Shared widget — seven node panels use it.

- **🧹 Cleaner's switches now name the action.** The old compound labels
  ("🧹 GPU cache — Flush cache") ellipsised past reading at the node's
  ~250px width; the label now names the action ("🧹 Flush GPU cache",
  "🧠 Unload models") and the switch position says whether it will happen.
  Widget ids untouched — saved workflows load unchanged.

### Changed

- **Number fields now scrub like ComfyUI's own.** FilNumberInput matches
  ScrubableNumberInput: drag left/right to change the value, a plain click
  enters text-edit instead. Every commit path (typed, arrow-clicked, dragged)
  rounds to the decimal precision `step` implies, so repeated bumps land on
  1.1/1.2/1.3 instead of drifting to 1.2000000000000002. FilSlider drops its
  separate range track — the scrub gesture replaces it, matching the default
  widget's look; every node built on FilSlider (Denoise, Provider Loader,
  HighRes Fix, Color Wizard, Style Mixer, Noise Control) picks this up
  automatically. KSampler's field order now matches the stock KSampler:
  denoise moved after sampler_name/scheduler instead of sitting right after
  cfg.

- **Node widths unified behind an `initialWidth` cap.** LiteGraph's
  `computeSize()` measures the DOM panel's unconstrained content width (a
  combo's longest option, a segmented pill's options in a row), which landed
  row panels at ~400px — visibly wider than native nodes. New nodes now start
  at the contract's declared width instead; saved workflows keep whatever
  size they were saved with. The contracts' `min_size` values were re-tuned
  to the same 250–350 band at the same time.

- **The Provider Manager panel speaks the UI language.** Field labels,
  buttons, status badges, key-state hints and the cache-age suffix now route
  through the en/ru dictionaries. Also pins the vitest worker pool to
  `vmThreads` — the default pools crash on Node 24 with vitest 4.1.10 at
  collection, while `vmThreads` works on both Node 22 (CI) and Node 24.

- **📖 The README caught up with the pack it describes.** The Russian feature
  table still said six themes (ten since 1.1.1's four landed), and the
  settings table never documented *Theme applies to* / *Theme animations*.
  The prompting system — five bullet points with no examples — was replaced
  with a per-axis Optic Scanner breakdown (agent table, focus stacking, style
  contract modes, prompt/negative_prompt semantics) grounded in the actual
  code, plus short practical tips for the other complex nodes. LoRA Dataset
  Forge, Style Mixer, Image Decomposer and Color Wizard gained one-line
  example chains in both languages naming real inputs/outputs. CI badge
  added.

- **Internal dev docs left git tracking.** CLAUDE.md, audit.md,
  audit-next.md, fix.md and .claude/launch.json are maintainer-only notes
  (the last one also hardcoded local disk paths); they stay local now instead
  of sitting in the public repo view.

## 1.1.1 (2026-07-30)

Repairs found by a full audit of 1.1.0 — code, tests, the ComfyUI host seam,
and every configured provider checked with real requests — plus style preview
thumbnails, which had never shipped for most of the library. Nothing here
renames or removes anything; saved workflows load unchanged. One change does
alter output: five art styles named no drawing technique and were rewritten to
ask for one, mirroring the photo-style fix already in 1.1.0. Their keys are
untouched, but a workflow using one of the five will get a different prompt.

### Fixed

- **A cut-off model answer was passed off as a finished one.** Both response
  parsers returned the model's text before checking whether it had been cut
  off, so a partial reply only got caught when there was no text at all. Found
  live: asked to describe three shapes at a low token budget, Gemini answered
  "Red circle, green" and the pack forwarded it as the finished prompt: on a
  reasoning model it was worse, an unfinished internal-monologue block got
  unwrapped and sent out as the prompt instead of a result. The existing retry
  ladder now runs for a partial answer, not only an empty one.
- **112 NSFW styles were accepted by 🎨 Style Mixer and impossible to select.**
  The node built its style list from all four libraries; the panel only knew
  about two of them. Both sides now read the same list.
- **♻️ Seed's panel rejected values the node accepted.** The widget capped at
  999,999,999,999; the node allows up to 0xFFFFFFFFFFFFFFFF, same as every
  other seed in the pack — only this one had been missed.
- **`^` in a number field computed bitwise XOR instead of a power.** `2^10`
  silently returned 8 instead of 1024, in the field used for image dimensions.
- **An external write to 🔀 Cyber Switch's `enable` never reached the widget
  the backend reads.** Loading a workflow or an undo could leave the panel
  showing the right state while the backend read a stale one; clicking the
  switch was unaffected.
- **The two example workflows under `docs/workflows/` were rebuilt.** Both
  were a snapshot of an older node schema, and opening either landed values on
  the wrong fields with no warning.
- **KSampler's preview-with-workflow path, and an unreadable `config.yaml` or
  `API.env`, failed silently.** Both now log a warning instead of vanishing.
- **Four of the pack's ten settings never appeared in the settings panel** —
  including the theme picker. ComfyUI reads a setting's `category` as
  `[group, section, slot]`, and with only two levels it treats the section
  itself as the slot, so settings sharing a section overwrite each other and
  only the last registered is drawn. The panel is also reorganised: six
  sections, four of them holding a single row, are now three — Appearance,
  Canvas and General.
- **Two of the new palettes had unreadable text.** `muted` is a text colour, and
  Cyberpunk's measured 3.00:1 against the panel behind it where 4.5:1 is the
  floor. Contrast is now checked by test across all ten themes.
- **Five art styles named no drawing technique and rendered as photographs**
  — `Cosmic Dream Girl`, `Holographic Y2K Pop Star`, `Alien Fashion Runway`,
  `Bloom Soft Girl Aesthetic`, `Abstract Cyber Shape Design`.
- Secrets could reach an archive published by hand from a working copy:
  `.comfyignore` was missing `API.env` and `data/auth.json`.
- The smoke suite — the one check that starts a real ComfyUI and verifies the
  pack registers and draws in it — could not run on a portable install.

### Added

- **Four more themes** — `Cyberpunk 2077`, `Neo Emerald`, `NFT Vibe` and
  `Hollywood Teal`, bringing the set to ten.
- **Two controls over how a theme behaves.** **Theme applies to** extends the
  tint past this pack's own nodes — to nodes wired to them, or to every node on
  the canvas. It colours the title bar only, never the node body: body colour is
  what LiteGraph saves into the workflow file, so painting a foreign node that
  way would travel to whoever the workflow is sent to and outlive uninstalling
  this pack. **Theme animations** stops the looping flourishes some themes run
  (Pipboy's CRT scanline sweep, Neo Emerald's pulsing orb) and starts off when
  the system asks for reduced motion.
- **Save a theme as a ComfyUI color palette.** The command
  "FiL_Design_ImageMind — Save this theme as a ComfyUI color palette" builds a
  palette from the current theme and adds it to Settings → Appearance → Color
  Palette. It only adds: your active palette stays active, and applying — or
  undoing — is done in ComfyUI's own picker. Socket colours are copied through
  untouched, because those encode the data type (IMAGE blue, MODEL purple) and
  that reading is shared with every other pack.
- **Style preview thumbnails for the whole photo and art libraries** — 292 of
  404 styles now show an actual picture instead of just a name; the two NSFW
  libraries are not yet covered. Generated by a new, checked-in script,
  replacing one that had been lost.
- **`config.example.yaml` ships with the pack.** The README always described
  editing `config.yaml`, which is git-ignored on purpose and never reached
  anyone.
- **`tools/live_provider_check.py`** — a manual check that sends a real image
  to every configured provider and verifies the description it gets back
  against what was actually drawn. Kept out of the automated test suite
  because CI carries no provider keys.
- **FilBrowser, a shared browsing frame, replaces the separate pickers for
  provider models and prompt styles.** A resizable window with a left column
  of filter groups that each carry a count, ranked search, favourites, and a
  recently-used list kept distinct from favourites. Search ranks instead of
  filtering: `gpt-4o` used to sit below every longer name that merely
  contained it, because a substring filter kept the provider's own order.
  🧹 Cleaner, ⚡ KSampler, 🎛️ Noise Control and 👁️‍🗨️ Image Decomposer gain
  Vue panels of their own, built on the same frame.

## 1.1.0 (2026-07-29)

There is no 1.0.1. It was tagged, published, and pulled from the registry the
same day, and publishing again under that number did not go through — so the
work below, which is what 1.0.1 would have been plus the features that landed
after it, ships under the next number instead. Anyone who installed 1.0.1 in
the hours it was listed needs nothing beyond updating.

Repairs to 1.0.0, plus the removal of three features that reached further into
ComfyUI than a node pack should. One change does alter what the nodes produce:
the photo style library was rewritten to actually ask for photographs, so a
workflow using a photo style will not reproduce its 1.0.0 output. Everything
else leaves generation alone.

### Breaking

- **🧹 Cleaner**: the four per-kind switches (`unload_diffusion`, `unload_clip`,
  `unload_vae`, `unload_control`) are one `unload_models` switch. They sorted
  loaded models by matching class names, and could not do it reliably — a
  model's name and its nested submodules' names were matched as one string, and
  `modelpatcher`, the wrapper around every model in ComfyUI, counted as a
  diffusion marker, so anything unrecognised was unloaded as diffusion whatever
  the other switches said. A workflow loaded in the UI carries its old
  `unload_diffusion` value onto the new switch, since `widgets_values` maps
  positionally. A saved API-format prompt cannot: ComfyUI passes only inputs
  that are links or still in the schema, so the three remaining names are
  dropped and the node runs on its defaults — check the switch after updating
  if you had unloading turned off.
- **⚡ KSampler**: `latent_image` → `latent`, `optional_vae` → `vae`, matching
  the outputs they pair with. Workflows addressing them by the old names in the
  API format still load.
- **`/` no longer opens the add-node search, and `Shift+?` is rebindable.** In
  1.0.0 both keys were claimed by a capture-phase listener the user could
  neither see in ComfyUI's keybinding settings nor override. `Shift+?` is back
  as one registered command — it appears in those settings and can be rebound
  or cleared, and `Shortcuts.Enabled` switches the set off. `/` is not coming
  back: a bare key claimed from every context collides with whatever else
  wants it, and the search field it reached for was hunted through five
  guessed CSS selectors. Focusing core's own search is core's business.
- **Settings removed**: `RequestTimeout` and `AutoCleanVRAM` were never read by
  anything — timeouts come from `config.yaml` and per-provider defaults, and
  VRAM cleanup is the Cleaner node's job. `RunButton.Enabled` /
  `RunButton.AnimationDuration` were never registered with ComfyUI.

### Fixed

- **The photo style library asks for photographs now.** A diffusion model
  picks the medium from the words it is given, and 69 of the 157 photo styles
  named no medium at all — "bohemian interior design, layered textiles, warm
  ambient lighting" describes a room, never a picture of one, so the model was
  free to answer with an illustration or a 3D render, and did. Every entry now
  carries the lens, light and capture it would be taken with, and six that
  asked outright for the thing the category exists to avoid (`photo-real
  render look`, `digital HDR rendering`) are gone. The deeper cause was in the
  engine: category detection reads free text and could not see which library a
  style came from, so ten photo styles resolved into categories whose own
  rules strip photography back out — `comic` replaces "photograph" with
  "illustration", and `Cybernetic Arm Close-Up` resolved to `oil_painting`.
  The resolver consults the photo libraries directly now, because membership
  is a fact and a keyword match is a guess. Style keys are unchanged, so no
  workflow needs editing — but prompts built from a photo style will differ
  from 1.0.0.
- **The global wheel listener is gone.** A capture-phase `wheel` handler on
  `window`, installed at import, put this pack ahead of every other extension
  for every wheel event in the application — other packs' wheel-driven
  carousels, value tweaks and lazy loading never fired. What remains is one
  listener on the pack's own widget host, which never sees an event outside a
  FiL panel, and `Wheel.Enabled` switches even that off.
- **Node panels no longer poll the layout.** Each mounted widget ran a 400 ms
  `setInterval` and measured `scrollHeight` from LiteGraph's draw loop — a
  forced reflow per frame per node. The ResizeObserver it was compensating for
  was watching `host`, whose box stops following the content as soon as
  anything pins it; observing the panel itself removed both the timer and the
  per-frame measurement.
- **Context menus no longer break other extensions.** `getExtraMenuOptions` is
  wrapped through an accessor that captures the previous handler on read, so an
  extension patching it the usual way cannot end up calling itself — with
  cg-use-everywhere installed, every context menu died on "Maximum call stack
  size exceeded". ComfyUI-Manager's "Fix node (recreate)" is repaired in place:
  its own version leaves the old node stacked under the new one whenever any
  input is connected.
- **Style Mixer kept its wires** across a reload, and the panel state survives a
  shifted `widgets_values` array.
- **Connection toasts** were declared with a default of `false`, read with a
  fallback of `true`, and never registered with ComfyUI — so the fallback was
  the only value anyone got.
- **Default LLM Provider** could not be set to OpenAI: the option list was
  hand-written and had drifted from the provider registry.
- **A resized Optic Scanner shrank a little on every load.** A panel dragged
  to +200px of height came back at +162, then +122, until it sat on its
  content. On the first sync the stretch was recovered as "box minus content
  height" while the content height was still the caller's estimate rather than
  the fresh measurement — `scanner.ts` guesses 580 for a panel that measures
  540, and that 40px gap was charged to the drag once per load.
- **Theme flourishes on node titles never ran.** Every cyberpunk glow and
  pipboy text-shadow keyed off `.comfy-node-header`, a class no shipped
  frontend emits — the Vue renderer names it `.lg-node-header`. Under the
  default canvas renderer a node has no DOM at all, so these stay inert there
  by nature; the node-body rules sit on this pack's own shell and always
  applied. The pixaroma skin, left blank on the assumption that flat panels
  mean no flourish, is filled in.
- **🧹 Cleaner printed widget ids instead of labels** — `clean_vram` ran down
  the left edge next to human text on the right. V3 schemas take a
  `display_name` per input and nothing in the pack used it, so LiteGraph fell
  back to the raw id. The ids are untouched; saved workflows address widgets
  by them.
- **The model picker could take itself down on import.** Its localStorage
  reads run at module scope and were unguarded while the writes had been
  wrapped all along, so a blocked-storage profile or an opaque origin — where
  the global is undefined — broke the whole picker rather than one preference.
- Reading any setting logged a deprecation warning on every call.

### Added

- **Provider panel**: each card links to the page that issues the credential,
  and shows the masked key together with where it came from — this panel,
  an environment variable, or `config.yaml`. Delete is offered only for what
  the panel itself saved. The Base URL field appears for the local servers and
  for anyone with a custom endpoint already saved, instead of on every card.
- **Running node highlight** (`RunFx.Mode`): the header pulses for as long as
  the node executes, instead of a 400 ms flash. Covers this pack's nodes by
  default, optionally all of them.
- **Widget inputs have their dots back, next to the field they drive.** A Vue
  panel hides the native widget, and hiding a widget hides its input slot with
  it — so a field that can be graph-driven had no visible socket, or one in a
  fallback row with no clue which field it fed. A field with a wire attached
  goes read-only: what you typed there would be overwritten by the link when
  the prompt is queued, and a control that silently discards input is worse
  than one that says it is taken. Covers Color Wizard, Dataset Forge, Style
  Mixer, Upscaler and Upscaler Simple.
- **Starred models in the picker.** OpenRouter lists 367 models and OpenAI 76;
  the type and tier filters narrow that by kind, but the three or four you
  actually use stay scattered through whatever is left. A star pulls them back
  and a badge filters down to them. Favourites are keyed `provider::model`, so
  `openai/gpt-oss-20b` starred on Groq does not light up under OpenRouter
  where it is a different offering, and they live in localStorage rather than
  inside a saved graph — a per-machine convenience should not travel with a
  workflow.
- **🔬 HighRes Fix folds its rarely-touched controls into an ADVANCED
  section.** Nine rows showed by default and six of them are set once and
  never looked at again. The section remembers whether you left it open, per
  saved workflow; a fresh node starts closed.
- **Six photo styles on the axis the library was thin on** — Smartphone
  Computational, Direct Flash Night, Cinestill 800T Halation, Tri-X Push 1600,
  Scanned Print and Rembrandt Key Light. The library ran 96 of 157 entries on
  what is in front of the camera and 20 on what the camera is, and since Style
  Mixer stacks three styles with weights, an entry on the "how it was shot"
  axis multiplies across every scene while another scene only adds itself.

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
