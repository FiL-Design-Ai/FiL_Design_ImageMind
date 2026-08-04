# Style Presets and Guardrails

FiL_Design_ImageMind style presets are **overlays**, not scene rewrites.

A preset may strengthen or change medium, render language, palette, material treatment, light, atmosphere, environment, wardrobe/coverage, props, era/weather, explicitness, and generation-facing wording. A preset must preserve the locked core: main subject, subject/object count, main action, main pose, composition essence, focal anchor, object relationships, and age readability.

## Writing a style preset

Every preset in these libraries is a comma-separated chain of noun phrases, and
that shape is deliberate: a style stacks *under* the user's own prompt through
Style Mixer, so it has to stay neutral about what is in the frame. The shape is
not the problem. What breaks is when a property is named with nothing to attach
it to.

**Bind every property to a place, a bearer, or a moment.** A live sweep of the
`🦾 КИБЕРПАНК` category found five presets that listed "exposed wires, damaged
cyberware, rusted metal parts" and rendered as an ordinary person in ordinary
clothes: the model had no location to put any of it, so it dropped all of it.
The presets that always worked named where — chest, arm, the base of the neck.
Same failure, different category: `🗺️ СЦЕНЫ` described rooms with the lights on
and nobody in them until each got something that was just happening (a lid
propped open, a bell still swinging, dust turning in a beam), and `⏱️ ЗАХВАТ`
had three presets about photographing movement and no vocabulary for movement
itself.

Two exceptions worth knowing, both found by rendering rather than reading:

- **Full coverage is its own binding.** `Cyber-Samurai` and `Industrial Cyborg
  Portrait` name no body part and are fine, because the armour or the shell
  covers everything. Only partial augmentation needs an address.
- **Never order the frame emptied.** `White Android Minimal Studio` said
  "nothing else in frame" while describing a standalone bust — correct for the
  library's own subject-less preview, and a direct instruction to delete the
  user's subject everywhere else. This one *is* enforced, in
  `tests/test_photo_style_library.py`.

**Do not try to enforce the rest with a regex.** Two attempts were made and
both were dropped: a "connective phrasing" pattern failed `Long Exposure Ghost`
and `Handheld Grab Shot`, which live renders prove work; a rule requiring
augmentation presets to name a body part had a 60% false-positive rate. Prose
shape does not predict whether an image comes back right. Render it and look.

## Current style libraries

### Photo presets

`common/styles/photo.py` contains **171** visible photo presets.

Current category layout:

- `📷 КАМЕРЫ` — 9
- `📐 МОДИФИКАТОРЫ` — 5
- `🎬 КИНО` — 5
- `⏱️ ЗАХВАТ` — 11
- `🕰️ РЕТРО` — 10
- `🏠 ИНТЕРЬЕР` — 7
- `👗 ФЭШН` — 8
- `🏙️ СРЕДА` — 9
- `🏜️ ЖАНРЫ` — 7
- `📸 РЕПОРТАЖ` — 3
- `🧪 ЭФФЕКТЫ` — 31
- `🦾 КИБЕРПАНК` — 30
- `🗺️ СЦЕНЫ` — 36

`⏱️ ЗАХВАТ` is the movement vocabulary: shutter techniques meant to be stacked
onto another preset through Style Mixer. Each one describes only how the frame
was taken, so it can ride on any subject, and each carries a guardrail in
`common/style_engine/presets.py` stopping the model from inventing action when
the scene it is applied to is standing still.

### Art presets

`common/styles/art.py` contains **129** visible art presets.

Current category layout:

- `🎨 ЖИВОПИСЬ` — 10
- `✏️ ГРАФИКА` — 5
- `💻 ЦИФРОВАЯ` — 36
- `🏛️ ИСТОРИЯ` — 7
- `🔬 СТИЛИЗАЦИЯ` — 26
- `💥 КОМИКС` — 15
- `🦾 КИБЕРПАНК` — 19
- `👾 ДИДЖИТАЛ` — 11

### NSFW photo presets

`common/styles/nsfw_photo.py` contains **66** adult photographic presets.

Current category layout:

- `📸 СТУДИЯ` — 5
- `🏠 ИНТЕРЬЕР` — 5
- `🌿 ПРИРОДА` — 4
- `🎭 ФЭШН` — 4
- `🌑 НУАР` — 8
- `🛀 ТЕКСТУРЫ` — 9
- `🏙️ ЛОКАЦИИ` — 11
- `🦾 КИБЕРПАНК` — 20

NSFW photo presets must stay photographic: lens/light/material/location truth first, adult context second, no collapse into safe glamour or generic fashion filler.

New `🦾 КИБЕРПАНК` NSFW photo presets:

- `🌃 Neon Alley Exposure`
- `🤖 Chrome Implant Nude`
- `🧬 Synthetic Skin Android Nude`
- `🪩 Holographic Strip Club`
- `🩺 Ripperdoc Aftercare`
- `⛓️ Cyber Latex Dungeon`
- `🌧️ Rain-Slick Rooftop Nude`
- `📹 Backroom Neon POV`
- `🚦 Red-Light District Android`
- `🪞 Augmented Mirror Selfie`
- `💡 Bioluminescent Body Ports`
- `🏙️ Drone-Lit Penthouse Nude`
- `🚿 Wet Chrome Shower Pod`
- `🎤 Virtual Idol Dressing Room`
- `🩻 Holo-Tattoo Nude Scan`
- `🫧 Glass Capsule Display`
- `🏍️ Neon Motorcycle Garage`
- `🟣 Blacklight Cyber Boudoir`
- `🖥️ Server Room Heat`
- `💎 Prismatic Implant Glamour`

### NSFW art presets

`common/styles/nsfw_art.py` contains **46** adult illustration, painting, and render presets.

Current category layout:

- `🎨 ИЛЛЮСТРАЦИЯ` — 8
- `💻 ЦИФРОВАЯ` — 3
- `📜 КЛАССИКА` — 3
- `🎯 ЖАНРЫ` — 3
- `🖌️ ЖИВОПИСЬ` — 5
- `✒️ СКЕТЧ` — 3
- `🏰 ФЭНТЕЗИ` — 7
- `🚀 SCI-FI` — 5
- `🦾 КИБЕРПАНК` — 5
- `🕰️ РЕТРО` — 4

NSFW art presets must stay visibly non-photographic unless the style explicitly says render/CGI. They should preserve adult-only framing, medium identity, anatomy clarity, and style-specific material/render cues.

## Audit status

Style preset text is maintained by hand against the wording standard below. There is no separate automated style-audit test; preset counts and category layouts above are the source of truth. When you edit a style library, re-check the counts in this document and run the validation commands at the bottom.

## Preset wording standard

Preset text should be generation-ready and visually grounded:

```text
[medium / render type], [surface or material logic], [line/render behavior], [palette], [lighting], [composition/readability], [mood], [anti-drift clause]
```

Good preset text uses concrete visual cues:

- `clean cel shading`
- `heavy black ink outlines`
- `wet asphalt reflections`
- `raised pigment ridges`
- `gold ground`
- `layered HUD panes`
- `mirror chrome reflectivity`

Avoid vague filler:

- `beautiful`
- `awesome`
- `high quality`
- `very detailed`
- `cinematic` without lens/light/material specifics

## Pinterest-derived styles

A Pinterest archive analysis produced 61 style presets from 190 reference images.

The temporary `📌 ПИНТЕРЕСТ/*` keys were normalized into canonical art categories:

- `💻 ЦИФРОВАЯ` — digital, anime, UI, wallpaper, sci-fi render styles
- `🔬 СТИЛИЗАЦИЯ` — gothic, pastel, neon, fashion/editorial stylizations
- `💥 КОМИКС` — comic ink, splash, superhero graphic styles
- `🦾 КИБЕРПАНК` — cyborg, android, biomechanical, x-ray, synthetic-body styles

Legacy `📌 ПИНТЕРЕСТ/*` values are still accepted by backend normalization but are hidden from the visible UI.

Examples:

- `📌 ПИНТЕРЕСТ/🌃 Neon Cyberpunk City Rain` → `💻 ЦИФРОВАЯ/🌃 Neon Cyberpunk City Rain`
- `📌 ПИНТЕРЕСТ/🤖 Chrome Cyborg Hyperrealism` → `🦾 КИБЕРПАНК/🤖 Chrome Cyborg Hyperrealism`
- `📌 ПИНТЕРЕСТ/🧨 Dynamic Superhero Splash` → `💥 КОМИКС/🧨 Dynamic Superhero Splash`
- `📌 ПИНТЕРЕСТ/🪞 Glossy Black Latex Cyber` → `🔬 СТИЛИЗАЦИЯ/🪞 Glossy Black Latex Cyber`

## Guardrails

Style presets are **overlays**, not scene rewrites (see the top of this document). There is no separate guardrail engine or preset-rule file; the Base Prompt lock is enforced directly by `common/logic.py` (`PromptGenerator.build_system_prompt_bundle`) and the runtime prompt construction in `nodes/node_scanner.py`. The NSFW overlay text lives in `common/data.py` (`NSFW_STYLE_OVERLAY`) and is applied automatically whenever `nsfw_photo_style` or `nsfw_art_style` has a preset selected — there is no separate toggle; picking the preset is the activation.

Important: presets must preserve the locked core regardless of which style is selected.

## NSFW style policy

NSFW presets follow the same Base Prompt lock as every other style preset.

Additional requirements:

1. Keep all NSFW language explicitly adult-only.
2. Never intensify ambiguous-age content; degrade to non-explicit style cues instead.
3. Preserve photo vs art medium identity.
4. Do not invent sexual acts, props, restraints, exposure, or anatomy that are not supported by the locked Base Prompt.
5. Avoid safe-glamour dilution when the user selected a valid adult preset.
6. Avoid exploitative/voyeur wording; keep consensual adult framing.

## Compatibility policy

When renaming or merging style keys:

1. Keep the new canonical key visible in the appropriate style library.
2. Add old → new mapping in `common/data.py`.
3. Hide obsolete keys from UI if they still exist or can appear from workflows.
4. Update the counts in this document and run the validation commands below.

## Validation

Run after style preset changes:

```bash
python -m py_compile common/styles/photo.py common/styles/art.py common/data.py common/logic.py
python -m pytest tests -q
python tools/preflight_check.py
```
