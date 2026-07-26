# 🕵️ Optic Scanner — Architecture

## Pipeline Overview

```
                    ┌─────────────────────────────────────────┐
                    │           🕵️ Optic Scanner              │
                    │         (nodes/node_scanner.py)         │
                    └─────────────────────────────────────────┘
                                     │
                    ┌────────────────▼────────────────────────┐
                    │        execute() — input hub            │
                    │   config, agent, image, prompt, style…  │
                    └────────────────┬────────────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              ▼                      ▼                      ▼
     ┌────────────────┐   ┌──────────────────┐   ┌──────────────────┐
     │ PromptGenerator│   │   StyleManager   │   │   StyleEnforcer  │
     │ (common/logic) │   │  (common/logic)  │   │(common/enforcer) │
     └────────┬───────┘   └────────┬─────────┘   └────────┬─────────┘
              │                    │                       │
              ▼                    ▼                       ▼
     agent + language +       loads styles           checks style
     detail + model_type      from style dicts       compatibility
              │                    │                  with description
              └────────────────────┼───────────────────────┘
                                   ▼
                    ┌──────────────────────────────┐
                    │    Two-Stage pipeline?        │
                    │ prompt_mode = Auto / Two-Stage│
                    └──────────┬───────────────────┘
                               │
              ┌────────────────┴────────────────┐
              ▼                                  ▼
     ┌──────────────────┐              ┌─────────────────────────┐
     │   Hybrid (1 pass)│              │  Two-Stage (2 pass)    │
     │                  │              │                        │
     │ system + style + │              │ Stage 1: raw desc      │
     │ user_message     │              │  (agent + lang + detail│
     │ → LLM            │              │   WITHOUT style)       │
     │                  │              │                        │
     │ return result    │              │ Stage 2: restyle       │
     └──────────────────┘              │  (agent + style,       │
                                       │   rework stage1 text) │
                                       │                        │
                                       │ return styled result   │
                                       └────────────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────┐
                              │    Post-convert (if needed)   │
                              │    DiT format / word-limit   │
                              │    clean_output()            │
                              └──────────────────────────────┘
                                               │
                                               ▼
                              ┌──────────────────────────────┐
                              │  metadata_json + metadata_dict│
                              └──────────────────────────────┘
```

## Agents

Defined in `common/data.py` → `AGENTS` dict.

Each agent has a structured prompt format:

```
PURPOSE: mission statement
FOCUS: what to look at (with specific attributes)
CONCRETE: how to describe — grounded in observable traits, not labels
IGNORE: explicit stop-list of what NOT to generate
OUTPUT MODE: format (prose paragraph or comma-separated tags)
Order: suggested sequence for the description
```

### Full Agent List

| # | Agent | Emoji |
|---|-------|-------|
| 1 | None | ⚪ |
| 2 | Universal | 🌐 |
| 3 | Portrait | 👤 |
| 4 | Products | 📦 |
| 5 | Nature & Landscape | 🌿 |
| 6 | Art & Illustration | 🎨 |
| 7 | Ultra Detailed Expert | 🔬 |
| 8 | Cinematic Master | 🎬 |
| 9 | 18+ | 🔞 |
| 10 | Fashion | 👗 |
| 11 | Animals | 🐾 |
| 12 | Character Performance Agent | 🎭 |
| 13 | Architecture | 🏛 |
| 14 | Interior | 🪑 |
| 15 | City | 🌆 |
| 16 | Transport | 🚗 |
| 17 | Food | 🍽 |
| 18 | Gadgets | 📱 |
| 19 | Games | 🎮 |
| 20 | Composition Agent | 📐 |
| 21 | Lighting & Color Agent | 💡 |
| 22 | Professional Tagger | 🏷 |

### Key Functions

- `get_visible_agent_keys()` — returns emoji-prefixed agent names for UI dropdown (`common/data.py:429`)
- `resolve_agent_key(value)` — matches both clean and emoji-prefixed agent keys (`common/data.py:453`)
- `get_default_agent_key()` — returns `"⚪ None"`, the neutral describer (`common/data.py`)
- `get_visible_focus_keys()` / `resolve_focus_key(value)` — the second axis, a craft-layer
  overlay appended after the agent template (`AGENT_FOCUSES` in `common/data.py`)
- `migrate_legacy_agent(value)` — maps an agent retired by the axis split onto
  `(agent, focus, response_format)` so saved workflows keep their behaviour
- `get_agent_output_mode(key)` — returns `"tags"` for Professional Tagger, `"prose"` for all others (`common/data.py:469`)

## Prompt Assembly

Located in `common/logic.py` → `PromptGenerator`.

### `build_system_prompt_bundle()` (lines 134-163)

Collects agent template + language hint + detail hint + model guidance into a single system prompt:

```
[AGENT TEMPLATE]

Answer in Russian / English.

Write a balanced description.

[Model type guidance, e.g. FLUX/Z-Image/SDXL…]

[Style block — only if styles are selected]
```

Returns tuple: `(system_prompt, agent_template, style_block)`

### `build_system_prompt_two_stage_bundle()` (lines 186-220)

Same as above, but splits into two stages:

- **Stage 1**: agent + language + detail + model guidance (NO style)
- **Stage 2**: agent + language + detail + model guidance + style block

### Detail Hints (`common/data.py:14-20`)

| Level | Words | Description |
|-------|-------|-------------|
| tiny | 20-50 | 1-2 sentences |
| short | 40-80 | 2-4 sentences |
| normal | 100-250 | Balanced |
| detailed | 250-500 | Detailed |
| ultra | 500-1200 | Exhaustive |

## Model Type Guidance

Defined in `common/logic.py:20-66`.

Each model type gets appended to system prompt so the LLM knows what output shape to produce:

| Model | Format | Max Words | Negatives |
|-------|--------|-----------|-----------|
| Auto/None | — | — | Standard |
| Z-Image Turbo | Natural language (DiT) | 250 | Positive constraints |
| FLUX | Natural language (DiT) | 160 | Positive constraints |
| QWEN | 1-3 sentences | — | Standard |
| SDXL | Comma-separated tags | — | Standard |
| Krea 2 | Natural language prose | — | Positive constraints |
| Ideogram 4 | Plain natural language | — | Standard |

## Two-Stage vs Hybrid

Determined in `node_scanner.py:354-356`:

```python
if effective_mode == "Auto":
    effective_mode = "Two-Stage" if style_block.strip() else "Hybrid"
```

**Hybrid** — single LLM call. Image + agent + style + user prompt all sent together.

**Two-Stage** — two LLM calls:
1. **Stage 1**: agent + image → raw unstyled description
2. **Stage 2**: Stage 1 text + agent + style → restyled prompt

Stage 2 does NOT re-process the image — it only restyles the text from Stage 1. This prevents the style overlay from distorting the visual facts.

### Fallback Chains

If Stage 1 times out → falls back to Hybrid (`_hybrid_call`)
If Stage 2 times out → falls back to Hybrid
If Stage 2 returns empty (<10 chars) → uses Stage 1 result as-is

## Style System

- **4 style widgets**: `photo_style`, `nsfw_photo_style`, `art_style`, `nsfw_art_style`
- **Sources**: `styles/photo.py`, `styles/nsfw_photo.py`, `styles/art.py`, `styles/nsfw_art.py`
- **StyleManager** (`common/logic.py:91-128`):
  - `build_style_block()` — collects all active styles into a block appended to system prompt
  - `get_active_styles()` — resolves widget values to prompt text

### StyleEnforcer

Located in `common/style_enforcer.py`.

- `resolve_style_contract()` — checks whether the style preset is compatible with the source description
- `build_enforcement_block()` — adds rules to prevent style drift
- `build_preset_support_block()` — adds support text that helps the LLM apply the style correctly

## Post-Conversion

Applied in `node_scanner.py:423-436`. Runs when the model type needs prompt restructuring:

- **DiT models (FLUX, Z-Image)**: prose → dense DiT-format, word limit enforced
- **JSON format**: structured caption output
- **Professional Tagger**: skipped — `get_agent_output_mode()` returns "tags" and post-convert ignores tag-mode output

## Metadata Output

Each scanner execution returns:

- `prompt` (str) — generated text
- `metadata_json` (str) — JSON string with full execution trace
- `metadata_dict` (dict) — parsed metadata

Metadata includes: provider, model, agent, detail, elapsed time, style contract, response outcome (truncation check, cue hits, drift detection), decision trace (pipeline mode, fallback reasons), and the exact sent prompt for debugging.
