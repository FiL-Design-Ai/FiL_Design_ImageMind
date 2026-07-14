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

FiL_Design_ImageMind must expose exactly **21 visible UI agents + None**.

`None` means no specialized mode selected.

In `FiLOpticScanner`, visible agents resolve to stable internal agent profiles.

### English UI categories

1. `📸 General Core/🛑 None`
2. `📸 General Core/🌐 Universal`
3. `📸 General Core/📜 Ultra Detailed Expert`
4. `🧬 Subjects & People/🧑‍🎤 Portrait`
5. `🧬 Subjects & People/🔞 18+`
6. `🧬 Subjects & People/👕 Fashion`
7. `🧬 Subjects & People/🐱 Animals`
8. `🧬 Subjects & People/🎭 Character Performance Agent`
9. `🏙️ Places & Nature/🏛️ Architecture`
10. `🏙️ Places & Nature/🌿 Nature`
11. `🏙️ Places & Nature/🏠 Interior`
12. `🏙️ Places & Nature/🌆 City`
13. `🏙️ Places & Nature/🚗 Transport`
14. `📦 Objects & Food/📦 Products`
15. `📦 Objects & Food/🍔 Food`
16. `📦 Objects & Food/📱 Gadgets`
17. `📦 Objects & Food/🎮 Games`
18. `🎨 Style & Cinematic/🎨 Art`
19. `🎨 Style & Cinematic/🎬 Cinematic Master`
20. `🎨 Style & Cinematic/📐 Composition Agent`
21. `🎨 Style & Cinematic/💡 Lighting & Color Agent`
22. `🛠️ Prompt Tools/🏷️ Professional Tagger`

### Russian UI categories

1. `📸 Общие и база/🛑 Без агента`
2. `📸 Общие и база/🌐 Универсальный`
3. `📸 Общие и база/📜 Ультра Детальный Эксперт`
4. `🧬 Субъекты и люди/🧑‍🎤 Портрет`
5. `🧬 Субъекты и люди/🔞 18+`
6. `🧬 Субъекты и люди/👕 Мода`
7. `🧬 Субъекты и люди/🐱 Животные`
8. `🧬 Субъекты и люди/🎭 Агент живого персонажа`
9. `🏙️ Места и природа/🏛️ Архитектура`
10. `🏙️ Места и природа/🌿 Природа`
11. `🏙️ Места и природа/🏠 Интерьер`
12. `🏙️ Места и природа/🌆 Город`
13. `🏙️ Места и природа/🚗 Транспорт`
14. `📦 Предметы и еда/📦 Товары`
15. `📦 Предметы и еда/🍔 Еда`
16. `📦 Предметы и еда/📱 Гаджеты`
17. `📦 Предметы и еда/🎮 Игры`
18. `🎨 Стиль и кино/🎨 Арт`
19. `🎨 Стиль и кино/🎬 Кинематографический Мастер`
20. `🎨 Стиль и кино/📐 Агент композиции`
21. `🎨 Стиль и кино/💡 Агент света и цвета`
22. `🛠️ Инструменты промпта/🏷️ Профессиональный Теггер`

The count is **21 agents + None**: the first entry is `None`, the other 21 entries are active agent modes.

Compatibility rules:

- old flat agent labels are accepted;
- RU and EN flat labels are accepted;
- RU and EN `Category/Agent` labels are accepted;
- frontend migration may rewrite old flat labels to current category paths;
- `Style Overlay Agent`, `Technical Lock Analyst`, `Prompt Engineer`, `Base Prompt Agent`, and `Model Adapter Agent` were removed as meta-agents that operate on an already-generated prompt rather than describing an image; unresolved legacy labels fall back to `None`;
- backend `resolve_agent_key()` must return the stable flat runtime profile before prompt construction.

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

`Character Performance Agent` is the strongest dedicated control for this behavior. It merges the previous `Emotion & Life Director` and `Action & Emotion Agent` roles into one clearer agent focused on character performance, micro-expression, gaze, body-language pressure, action vector, balance/weight transfer, gesture/contact, physical impulse, and captured-moment presence.

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
- this text-mode default targets the hosted Ideogram API (`docs.ideogram.ai`), where Magic Prompt runs server-side on plain text. The open-weights `ideogram-oss/ideogram4` model was trained exclusively on structured JSON captions — passing it plain text directly is documented to fail/trigger a safety warning. If the downstream consumer is the raw self-hosted model rather than the hosted API, use `response_format: json` (see [IDEOGRAM4_JSON_PROMPTING.md](IDEOGRAM4_JSON_PROMPTING.md)), which the adapter already supports via `adapt_ideogram4_caption`.

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

## Negative Prompt Policy

Negative prompt is recommended for:

- SDXL
- anatomy-critical scenes
- hands/faces
- products
- clean commercial shots
- user-requested precision

Negative prompt is generated only for models that support it. Krea 2, FLUX, and Z-Image Turbo receive no automatic negative prompt — manual exclusions for these models are expressed as positive composition constraints rather than a generated negative-prompt block. Ideogram 4 has a real `negative_prompt` field (per `docs.ideogram.ai`) and uses the standard negative-prompt policy like SDXL/QWEN/Auto.

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

When the `🔞 18+` agent or an NSFW style is active, FiL_Design_ImageMind adds an adult-scene truth pass:

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
