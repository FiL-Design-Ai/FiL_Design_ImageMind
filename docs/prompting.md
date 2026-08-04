# FiL_Design_ImageMind Prompting Documentation

## Overview

FiL_Design_ImageMind follows the v3 prompting contract:

`BASE PROMPT + STYLE OVERLAY + AGENT MODE + MODEL TYPE = FINAL PROMPT`

Where:

- **Base Prompt** = immutable scene truth
- **Style Overlay** = visual language applied on top of the locked scene
- **Agent Mode** = selected UI behavior mode that changes priorities and output shaping
- **Model Type** = final syntax adaptation for `Auto`, `Krea 2`, `Ideogram 4`, `Z-Image Turbo`, `FLUX`, `QWEN`, or `SDXL`

Core rule:

- Base controls **what is shown**
- Style controls **how it looks**
- Agent controls **what to prioritize**
- Model type controls **how the prompt is written**

`FiLOpticScanner` accepts either an image or a text idea. With an image, visible scene truth remains the locked source. Without an image, the non-empty `Prompt` field becomes the source contract and is expanded through the same agent/style/model pipeline.

Production invariant:

- The image description first locks the core of the visible scene.
- The locked core contains only: main subject, subject/object count, main action, main pose, composition essence, focal anchor, object relationships, and age readability.
- Style and agent modes should visibly transform everything outside that core — medium, rendering language, palette, atmosphere, lighting treatment, material vocabulary, environment, wardrobe/coverage, era/weather/props, explicitness, and emphasis.

## Prompt Hierarchy

FiL_Design_ImageMind builds prompts in this canonical order:

`Meaning -> Subject -> Geometry -> Details -> Focal Anchor -> Environment -> Light -> Style`

Interpretation:

1. lock the scene meaning only when it is visually grounded
2. lock the dominant subject
3. lock geometry, framing, placement, and depth
4. keep visually consequential details only
5. keep the focal anchor explicit when it clearly exists
6. preserve environment as support structure
7. treat light and color as physical evidence
8. apply style only after Base is locked

## Base Prompt Contract

Base Prompt is scene physics.

It must answer:

- who or what is primary
- what action or state is visible
- how the frame is composed
- what the focal anchor is
- what environment is visible
- what physical light is present
- what important materials, colors, and shapes are truly visible

Base template:

`[scene type], [main subject + action/expression], [composition + camera], [subject physical details], [focal object], [environment], [lighting as physics]`

Base may not contain:

- style
- invented details
- symbolism
- story
- scene replacement
- object additions
- composition changes

## Style Overlay Contract

Style is applied only after Base Prompt is locked.

Style may change:

- render language
- palette wording
- material treatment
- lighting style
- atmosphere
- artistic technique
- finish density
- presentation and emphasis, so the chosen style is actually visible in the final prompt

Style may not change the locked core:

- main subject
- subject/object count
- main action
- main pose
- composition essence
- focal anchor
- object relationships
- age readability

Everything outside that core may be restyled, including environment, lighting, color, materials, clothing/coverage, anatomy visibility, weather, era, props, camera/lens language, and NSFW explicitness when appropriate.

Normalization rule:

- if style changes the main subject -> restore the original subject
- if style changes subject/object count -> restore the count
- if style changes main action or main pose -> restore the locked action/pose
- if style breaks composition essence or focal anchor -> restore those anchors
- if style changes relationships between objects/subjects -> restore the original relationships
- if style introduces age ambiguity or teen/child-coded drift -> restore adult/age-safe readability

## UI Agent System

The scanner splits "how to look at this" across three independent axes instead
of one dropdown. They used to be a single list of 22 agents, where picking
📐 Composition meant giving up 🍽 Food even though the two describe different
things.

### `agent` — subject domain (what is in the frame)

`⚪ None` (the default) is the neutral describer: no assumption about the
subject. The other twelve are subject domains:

`👤 Portrait` · `📦 Products` · `🌿 Nature & Landscape` · `🎨 Art & Illustration` ·
`👗 Fashion` · `🐾 Animals` · `🏛 Architecture` · `🪑 Interior` · `🌆 City` ·
`🚗 Transport` · `🍽 Food` · `🎮 Games`

Portrait carries body language (action vector, weight shift, gesture pressure);
Products covers devices, including screen state and visible interface.

### `agent_focus` — craft layer (what to weigh heavier)

Appended after the agent template, never replacing it, so any focus composes
with any domain — a cinematic read of a plate of food is one pick each.

`⚪ None` · `📐 Composition` · `💡 Lighting & Color` · `🔬 Ultra Detail` · `🎬 Cinematic`

### `response_format` — output shape

`text` (prose) · `tags` (flat comma-separated tokens, SDXL-style) · `json`
(model-specific schema for FLUX / Ideogram 4). `tags` is decided before any
json branch, so asking for tags always returns tags.

### Migration of saved workflows

A workflow saved against the old single list keeps working — `migrate_legacy_agent()`
maps the retired name onto the new axes, and an explicit pick of the user's
always wins over the migrated one:

| retired agent | becomes |
|---|---|
| `🌐 Universal` | `agent = None` (near-duplicate of the neutral describer) |
| `🎭 Character Performance Agent` | `agent = Portrait` |
| `📱 Gadgets` | `agent = Products` |
| `🔞 18+` | `agent = None` — adult framing is what the NSFW style presets are for |
| `📐 Composition Agent` | `agent_focus = Composition` |
| `💡 Lighting & Color Agent` | `agent_focus = Lighting & Color` |
| `🔬 Ultra Detailed Expert` | `agent_focus = Ultra Detail` |
| `🎬 Cinematic Master` | `agent_focus = Cinematic` |
| `🏷 Professional Tagger` | `response_format = tags` |

Unresolved labels still fall back to `None`. `resolve_agent_key()` returns the
stable flat runtime profile before prompt construction; `resolve_focus_key()`
does the same for the focus axis.

### Text-only runs

With no image connected the system prompt carries an explicit "no image is
attached" instruction: the agent expands the user's idea into a prompt instead
of describing a picture that does not exist.

## Agent Output Contract

Every selected agent must return a **final generation-ready prompt**, not analysis.

### Character liveliness upgrade

FiL_Design_ImageMind includes a global **Liveliness + Character Performance Pass**. It is active in final prompt construction and is especially important for people, creatures, and character-like subjects.

The pass may strengthen:

- visible micro-expression;
- gaze direction and eye pressure;
- mouth, brow, jaw, head-angle tension;
- shoulder/hand pressure;
- grip/contact with objects;
- natural weight shift and balance;
- line of action, gesture, and pose energy;
- fabric pull, hair drift, and environment contact when visible.

The pass must not:

- invent a new pose;
- invent a new action;
- add unsupported motion blur;
- create off-screen causes or story;
- exaggerate emotion beyond what the image supports;
- break the locked core.

`👤 Portrait` is the strongest dedicated control for this behavior. It absorbed the retired `Character Performance Agent` (itself a merge of the earlier `Emotion & Life Director` and `Action & Emotion Agent`), so one pick now covers micro-expression, gaze, body-language pressure, action vector, balance/weight transfer, gesture/contact, physical impulse, and captured-moment presence.

Agent modes may:

- change emphasis
- choose a better structure
- strengthen useful visible elements
- improve Base precision
- improve Style cleanliness
- adapt wording to model type

Agent modes may not:

- change the locked core
- change the main subject
- change subject/object count
- change main action or main pose
- replace the focal anchor
- break object relationships
- introduce age-readability drift
- ignore model type
- output analysis instead of a prompt

## Agent Selection Rule

Only one agent may be selected at a time.

Reason:

- one selected agent = one clear behavior mode
- multiple selected agents = unstable priorities and unpredictable prompting

## Prompt Modes

### Hybrid

One pass:

`Image/Text -> Base logic -> Agent emphasis -> Style overlay -> Model packaging`

Pros:

- faster
- cheaper
- simpler

Cons:

- weaker lock
- higher chance of style drift

### Two-Stage

Stage 1:

`Build locked Base Prompt`

Stage 2:

`Apply Style + Agent + Model Type without breaking Base`

Pros:

- stronger control
- lower drift
- better for complex scenes

Cons:

- slower
- more expensive
- more logic

Runtime diagnostics for Two-Stage are derived from the exact Stage 1 and Stage 2 bundles used by `ModelClient`; normal logs contain lengths, module names, and fingerprints rather than prompt text.

## Model Type Adaptation

### Auto

- universal clean prompt
- natural English
- medium length
- no model-specific clutter

### Krea 2

- coherent natural-language prompt with a clear separation between what is shown and how it looks
- short detail levels preserve exploratory variation; higher levels progressively specify medium, style, composition, movement, and light
- no quality-tag spam or contradictory style stacks
- no automatic negative prompt; manual exclusions are converted into positive composition constraints

### Ideogram 4

- plain natural-language descriptive prompt — normal sentences, no JSON, no field labels, no markdown
- Ideogram's own Magic Prompt feature (server-side) handles further enhancement; the tool does not build a structured caption object
- literal on-image text is put in quotes
- supports a real `negative_prompt` field (standard negative-prompt policy, not positive-constraint reframing)
- this text-mode default targets the hosted Ideogram API (`docs.ideogram.ai`), where Magic Prompt runs server-side on plain text. The open-weights `ideogram-oss/ideogram4` model was trained exclusively on structured JSON captions — passing it plain text directly is documented to fail/trigger a safety warning. If the downstream consumer is the raw self-hosted model rather than the hosted API, use `response_format: json` (see [MODEL_PROMPTING_GUIDE.md](MODEL_PROMPTING_GUIDE.md#7-ideogram-4---plain-text-optimization)), which the adapter already supports via `adapt_ideogram4_caption`.

### Z-Image Turbo

- clear, structured natural-language description (not a comma-separated tag list) — camera and lighting language matter, and a recognizable sentence structure is expected
- covers, in order: subject, action/state, composition, environment, lighting, mood, style
- 80-250 words: long and precise beats short and vague, but avoid poetic/novelistic language
- no automatic negative prompt (`guidance_scale=0.0`, no negative-prompt mechanism in the pipeline)

### FLUX

- coherent natural English
- medium descriptive style
- logical scene readability
- follows a subject → environment → style → technical-specs hierarchy (per `docs.bfl.ml`); FLUX's attention mechanism makes explicit emphasis syntax largely unnecessary — natural sentence structure and ordering already signal what matters
- length follows the selected `detail_level`, not a separate model cap

### QWEN

- structured sections
- explicit subject/action/composition/environment/style separation
- clear fields, no fluff

### SDXL

- full natural-language sentences, not comma-separated SD1.5-style tags — official guidance (Stability AI / SDXL prompting guides) is explicit that tag-lists underperform on SDXL
- subject/action leads, environment and lighting as their own sentences, style and quality words trail as a short comma-tagged tail
- optional negative prompt supported (kept minimal, not a long SD1.5-style exclusion list)
- roughly 2-4 sentences depending on scene complexity

### Video

Universal profile for video-generation targets — MiniMax H2/H3, Wan 2.x, HunyuanVideo, LTX Video,
Kling and Veo/Sora-class DiT video models read the same shape of prompt, so one profile covers the
class instead of a node per vendor.

- one continuous natural-language shot description in the present tense — 2-4 sentences, roughly 40-150 words, capped at 150
- covers, in order: subject and its action, scene/environment, camera framing and movement, lighting, mood, style
- motion is mandatory content: what moves, how, in which direction, plus explicit camera behavior (locked, pan, tilt, dolly, orbit, handheld, zoom); a static shot says "locked-off static shot" outright — unstated, video models default to a slow push-in
- one clause of sound design (ambience, foley, music mood): models with native audio invent a random ambience when sound goes undescribed
- with a wired image, each reference gets a role ("the image sets the scene and lighting; the subject keeps its identity")
- no shot lists, no timestamps, no field labels — post-conversion normalizes only, never restructures into component buckets
- no negative-prompt mechanism: manual exclusions are flipped into positive composition constraints, same policy as FLUX / Z-Image Turbo / Krea 2
- literal on-screen text is put in quotes, plus "only that text appears" — no other lettering, no subtitles
- works both directions of image-to-video prompting: with a wired image it narrates the motion into the existing frame; text-only it expands an idea into a shot
- verified against MiniMax's official docs (platform.minimax.io, 2026-08-04): H3 takes one free-text prompt (up to 7000 chars) with no negative-prompt parameter, understands sound and per-reference roles, and supports first/last frame; the `[Shot N]`/timeline structure is the output of the separate H3-Context-IR enrichment call, so hand-written timestamps stay out of this profile

## Negative Prompt Policy

Negative prompt is recommended for:

- SDXL
- anatomy-critical scenes
- hands/faces
- products
- clean commercial shots
- user-requested precision

Negative prompt is generated only for models that support it. Krea 2, FLUX, Z-Image Turbo, and Video receive no automatic negative prompt — manual exclusions for these models are expressed as positive composition constraints rather than a generated negative-prompt block (video models have no negative-prompt input at all). Ideogram 4 has a real `negative_prompt` field (per `docs.ideogram.ai`) and uses the standard negative-prompt policy like SDXL/QWEN/Auto.

The dynamic composer adds only context-relevant negatives:

- base quality: `low quality, blurry, text, watermark, logo, distorted`
- anatomy when needed: `bad anatomy, bad hands, extra fingers, malformed limbs, distorted face`
- NSFW/adult safety and anti-censorship: `underage, childlike body, ambiguous age, teen-coded, non-consensual framing, censored, mosaic censor, blurred genitals, barbie-doll anatomy`
- photo styles suppress art drift: `cartoon, painting, illustration, anime, fake 3d render`
- art styles suppress photo drift: `raw photo, DSLR photo, stock photography, camera snapshot`

Conflict rule: do not negative a term that is part of the selected style identity, e.g. `3D Render` must not receive `3d render` as a negative.

## Final Prompt Compiler

Before final output, FiL_Design_ImageMind treats the assembled prompt as a compiled visual contract:

`Style/Medium Signature -> Main Subject + Pose/Action -> Focal Anchor -> Composition -> Material Response -> Environment -> Light Physics -> Camera/Art Grammar -> Style Finish -> Model Packaging`

Compiler rules are intentionally lean:

- **Focal Anchor Lock**: the dominant subject or focal object must remain strongest.
- **Light Physics Pass**: describe source, direction, hardness/color, falloff, shadows, highlights when supported.
- **Material Response Pass**: describe how visible materials react to light/contact.
- **Prompt Compressor**: remove repetition, empty praise, generic filler, and unsupported quality padding.
- **Style Placement**: high strength front-loads 2-3 compatible style/medium cues; medium strength keeps style visible but controlled.

The compiler may reorder or compress wording for the target model and may restyle presentation broadly, but it may not change the locked core or overload the positive prompt.

## Adult Scene Truth Pass

When an NSFW style is active (the retired `🔞 18+` agent folded into those presets), FiL_Design_ImageMind adds an adult-scene truth pass:

- confirm adult-only subject framing;
- suppress age ambiguity or childlike/teen-coded wording;
- preserve subject identity, count, pose/action, expression, contact, context, and consent logic;
- allow selected NSFW styles to make nudity/anatomy explicit for generation;
- do not change subject/object count, core pose/action, object relationships, age readability, or adult-only/consent logic;
- express adult content through visible pose pressure, explicit anatomy when allowed, material response, light, facial expression, and environment.

## NSFW Explicit Generation

NSFW style selection is treated as permission for genuinely explicit adult generation, not just sensual mood.

When an NSFW style is active and the locked Base Prompt does not forbid it, the final prompt may include compatible explicit adult anchors:

- nude adult body;
- exposed breasts and nipples;
- visible vulva or erect penis as subject-compatible;
- bare ass/buttocks;
- genital focus.

Sexual actions such as penetration, oral sex, masturbation, or genital contact are allowed only when the user prompt, visible Base Prompt, or selected explicit preset supports them.

The invariant still holds: explicitness may change exposure/anatomy visibility and erotic intensity, but must not change the locked core: main subject, count, main action, main pose, composition essence, focal anchor, object relationships, age readability, or adult-only/consent constraints.

## Final Output Rule

Default final output:

`final prompt`

Optional when the model type requires it:

`negative prompt`

Do not output explanation or analysis.

Exception:

- QWEN may output structured prompt fields
- debug-only module output is allowed when debug mode is explicitly enabled

## Quality Checklist

Before returning the final prompt, the runtime should preserve:

- main subject
- action/state
- composition
- focal anchor if visible
- non-static scene truth
- visible emotion and grounded character performance when supported
- style as overlay only
- model-type formatting only
- generation-ready wording only

## Runtime Files

The v3 contract must stay synchronized across:

- `common/data.py`
- `common/logic.py`
- `common/models.py`
- `common/model_prompt_adapters.py`
- `nodes/`
- `web/` UI agent selector logic
- `README.md`
- `tests/test_node_contracts.py`
