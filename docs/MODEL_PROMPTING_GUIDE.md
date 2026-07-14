# Model Prompting Guide - Complete Reference

> **Historical snapshot — last updated 2026-07-08.** This is a research/reference document, not the runtime contract. The canonical, code-synced source of truth is [prompting.md](prompting.md); the implementation lives in `common/model_prompt_adapters.py`. Re-verified against fresh official sources on 2026-07-10 — no drift found here beyond what's noted in [MODEL_PROMPTING_OFFICIAL.md](MODEL_PROMPTING_OFFICIAL.md).

This guide covers prompting recommendations for each of the 7 supported image generation models in Optic Scanner.

---

## Quick Reference Table

| Model | Best For | Text Mode | JSON Mode | Speed | Restructures |
|-------|----------|-----------|-----------|-------|--------------|
| **Auto/None** | Custom integration | ✅ Passthrough | ✅ Wrap | ⚡ | No |
| **Z-Image Turbo** | Real-time apps | ✅ Normalize | ✅ Wrap | ⚡⚡ | No |
| **FLUX** | Structured control | ✅ Normalize | ✅ **7-field** | ⚡ | No |
| **SDXL** | Complex scenes | ✅ Restructure | ✅ Wrap | ⚡ | Yes |
| **QWEN** | Quality output | ✅ Restructure | ✅ Wrap | ⚡ | Yes |
| **Krea 2** | Natural language | ✅ Normalize | ✅ Wrap | ⚡⚡⚡ | No |
| **Ideogram 4** | Native API | ✅ Optimize | ✅ Wrap | ⚡⚡ | No |

---

## 1. Auto/None - Universal Passthrough

### Overview
No conversion whatsoever. Prompts pass through completely unchanged.

### When to Use
- Integrating with external prompt generation systems
- Bypassing all Optic Scanner processing
- Maximum compatibility mode
- Custom preprocessing already applied

### Text Mode Examples

**Good prompt**:
```
A sleek chrome android with neon implants in a cyberpunk megacity
```

**Output** (unchanged):
```
A sleek chrome android with neon implants in a cyberpunk megacity
```

### JSON Mode
Wraps any text in generic schema:
```json
{
  "prompt": "A sleek chrome android..."
}
```

### Best Practices
- Use when you have perfect prompts already
- Ideal for chaining multiple systems
- Minimal overhead
- No transformations applied

---

## 2. Z-Image Turbo - Fast Normalization

### Overview
Lightweight text normalization optimized for speed.

### When to Use
- Real-time applications requiring <2ms latency
- Simple prompts that need minor cleanup
- Batch processing many prompts
- Resource-constrained environments

### Processing Applied
- Remove markdown: `**text**` → `text`
- Clean extra whitespace
- Normalize punctuation
- Preserve semantic content

### Text Mode Examples

**Input with formatting**:
```
**bold scene** with, commas - and dashes -- here
```

**Output** (cleaned):
```
bold scene with commas and dashes here
```

### Performance
- ~1-2ms per prompt
- Minimal memory usage
- Suitable for high-throughput pipelines

### Best Practices
- Write well-formatted prompts (minor cleanup only)
- Good for real-time applications
- Don't rely on complex restructuring
- Simple, direct descriptions work best

### Example Workflow
```
User input → Z-Image Turbo → API
            ~2ms
```

---

## 3. FLUX - Advanced Structured Prompting

### Overview
Specialized 7-field JSON schema for precise composition control.

### When to Use
- Need camera/lens specifications
- Require precise lighting descriptions
- Want mood/style separation
- Need detailed color control
- Composing complex scenes

### JSON Mode: The 7-Field Schema

```json
{
  "scene": "primary scene description",
  "subjects": [],
  "style": "artistic style terms",
  "color_palette": ["#RRGGBB", ...],
  "lighting": "light sources and quality",
  "mood": "emotional tone",
  "camera": {
    "angle": "camera angle",
    "lens": "focal length",
    "f_number": "f-stop"
  }
}
```

### Field Details

#### 1. Scene
Main scene description (max 200 chars recommended)

**Examples**:
```
"A serene mountain lake at dawn with mist rising"
"A neon-lit cyberpunk street in heavy rain"
"An ancient temple in a misty forest"
```

#### 2. Subjects
Array of main subjects/objects (auto-populated or manual)

**Examples**:
```
[]  (auto-extracted)
["mountain", "lake", "mist"]
```

#### 3. Style
Artistic/photographic style

**Examples**:
```
"cinematic landscape photography"
"digital oil painting"
"cyberpunk noir aesthetic"
"hyperrealistic"
"watercolor impressionism"
```

#### 4. Color Palette
Array of hex colors (auto-extracted and deduped)

**Examples**:
```
["#1a2b3c", "#0066cc", "#ff6600"]  (from hex in prompt)
["blue", "orange", "black"]        (from color names)
["#1a2b3c", "blue", "#ff6600"]     (mixed)
```

**Max**: 5 colors (enforced)

#### 5. Lighting
Light sources and quality

**Examples**:
```
"Soft morning golden hour lighting"
"Dramatic studio lighting with rim light"
"Natural overcast daylight"
"Neon glow with deep shadows"
"Warm candlelit atmosphere"
```

#### 6. Mood
Emotional tone or atmosphere

**Examples**:
```
"tranquil and contemplative"
"dark and mysterious"
"energetic and vibrant"
"melancholic and introspective"
"epic and grandiose"
```

#### 7. Camera

**Angle**: Eye level, low angle, high angle, bird's eye, overhead, etc.

**Lens**: Focal length in mm
```
"35mm"  (standard)
"50mm"  (portrait)
"85mm"  (telephoto portrait)
"24mm"  (wide)
"14mm"  (ultra-wide)
```

**F-Number**: Aperture/depth of field
```
"f/1.8"  (shallow depth, portrait mode)
"f/2.8"  (professional zoom range)
"f/8.0"  (landscape, everything sharp)
"f/16"   (extreme depth of field)
```

### Text Mode
Normalizes but preserves structure for manual JSON creation.

**Input**:
```
A serene mountain lake at dawn.
Shot with 35mm lens, f/2.8, eye level.
Soft morning lighting. Mood: tranquil.
Style: cinematic landscape.
Colors: #1a2b3c, #0066cc.
```

**Auto-Extraction (JSON Mode)**:
```json
{
  "scene": "A serene mountain lake at dawn",
  "style": "cinematic landscape",
  "color_palette": ["#1A2B3C", "#0066CC"],
  "lighting": "Soft morning lighting",
  "mood": "tranquil",
  "camera": {
    "lens": "35mm",
    "f_number": "f/2.8",
    "angle": "eye level"
  }
}
```

### Best Practices

#### 1. Include all 7 fields
Even if empty, structure matters.

**Good**:
```
Scene: A mountain landscape
Style: cinematic
Lighting: soft golden hour
Mood: serene
Camera: 50mm, f/2.8, eye level
Color: #FFD700, #1a1a1a
```

**Better** (JSON):
```json
{
  "scene": "A mountain landscape",
  "style": "cinematic",
  "lighting": "soft golden hour",
  "mood": "serene",
  "camera": {"lens": "50mm", "f_number": "f/2.8", "angle": "eye level"},
  "color_palette": ["#FFD700", "#1a1a1a"]
}
```

#### 2. Use hex colors when possible
Hex (`#FF0000`) is more precise than color names (`red`).

#### 3. Specify camera details for composition
The camera parameters significantly affect framing and depth of field.

#### 4. Be specific with lighting
"Soft morning golden hour" > "nice lighting"

#### 5. Limit color palette to 5 colors
More colors get trimmed to 5 anyway; pick the most important ones.

### Examples

**Example 1: Landscape**
```
Scene: Alpine meadow at sunrise with wildflowers
Subjects: [meadow, mountains, wildflowers]
Style: photorealistic landscape photography
Color: #FFD700 #87CEEB #228B22
Lighting: Golden hour sunlight through clouds
Mood: peaceful and majestic
Camera: 50mm lens, f/8, eye level
```

**Example 2: Portrait**
```
Scene: Professional studio portrait
Style: contemporary photography
Color: #808080 #FFFFFF #000000
Lighting: Three-point studio lighting with soft fill
Mood: confident and approachable
Camera: 85mm lens, f/2.8, slight low angle
```

**Example 3: Cyberpunk**
```
Scene: Neon megacity in heavy rain at night
Style: cyberpunk noir
Color: #FF00FF #00FFFF #0A0E27
Lighting: Neon glow with deep shadow
Mood: dark, intense, dystopian
Camera: 35mm lens, f/2.0, eye level
```

---

## 4. SDXL - Semantic Restructuring

### Overview
Forces semantic restructuring of all prompts for maximum clarity.

### When to Use
- Complex scenes that need decomposition
- Semantic clarity is priority
- Processing time is acceptable (5ms)
- Want guaranteed structure

### Processing
SDXL ALWAYS restructures, even simple prompts.

**Input**:
```
A robot in the city
```

**Output** (restructured with semantic labels):
```
SETTING: Urban cityscape with modern architecture
SUBJECT: Advanced robot with metallic body
MOOD: Futuristic, technological
LIGHTING: Natural daylight with urban reflections
DETAILS: High-tech components, sleek design
```

### Text Mode Examples

**Input**: Simple scene
```
A sleek android in neon city
```

**Output**: Restructured
```
Subject: sleek android with advanced features
Location: neon-lit cyberpunk megacity with holographic signs
Lighting: neon glow and dramatic shadows
Mood: futuristic and dystopian
Style: hyperrealistic with cinematic lighting
```

### Word Limits by Detail Level

| Detail Level | Max Words | Use Case |
|-------------|-----------|----------|
| **tiny** | 50 | Mobile, real-time |
| **normal** | 160 | Standard use |
| **extreme** | 320+ | Maximum detail |

### Best Practices

#### 1. Write natural prompts
Let SDXL do the restructuring.

**Good**:
```
A sleek chrome android with neon implants standing in a rain-soaked megacity
```

**Also good**:
```
Cyberpunk android
Rain-soaked city
Neon lights
```

#### 2. Use detail level wisely
```python
# For simple images
convert_to_dit_format(prompt, "SDXL", detail_level="tiny")

# For complex images
convert_to_dit_format(prompt, "SDXL", detail_level="extreme")
```

#### 3. Provide context, not instructions
SDXL will restructure anyway; provide content.

**Good**:
```
A cathedral in the mountains at sunset with warm lighting
```

**Don't do**:
```
Make it look like a cathedral in mountains at sunset
```

### Examples

**Example 1: Portrait**
Input:
```
A professional woman in business attire
```

Output (restructured):
```
SUBJECT: Professional woman, confident expression, business attire
SETTING: Modern office environment with neutral background
LIGHTING: Professional studio lighting
MOOD: Professional, authoritative
STYLE: Hyperrealistic portrait photography
```

**Example 2: Landscape**
Input:
```
Mountain landscape in autumn
```

Output (restructured):
```
SETTING: Alpine landscape with autumn foliage
FOREGROUND: Golden and orange leaves, meadow
BACKGROUND: Snow-capped mountain peaks
LIGHTING: Golden hour sunlight
MOOD: Serene, majestic
COLOR: #FFD700 #8B4513 #FFFFFF
```

---

## 5. QWEN - Quality-Focused Restructuring

### Overview
Like SDXL but with additional quality enhancements and validation.

### When to Use
- Quality is more important than speed
- Complex scenes with many elements
- Want semantic enrichment beyond SDXL
- Time budget allows 6ms per prompt

### Key Differences from SDXL

| Aspect | SDXL | QWEN |
|--------|------|------|
| Restructuring | ✅ Forced | ✅ Forced |
| Processing time | 5ms | 6ms |
| Quality | Good | Excellent |
| Semantic enrichment | Standard | Enhanced |
| Validation | Basic | Strict |

### Processing
QWEN restructures + enriches + validates.

**Input**:
```
A robot in the city
```

**Output** (restructured + enriched):
```
COMPOSITION: Urban scene with technological elements
SUBJECT: Advanced humanoid robot with intricate mechanical details
ENVIRONMENT: Modern megacity with futuristic architecture
LIGHTING: Dynamic urban lighting with neon and artificial lights
ATMOSPHERE: Futuristic, technological, slightly dystopian
COLOR PALETTE: Metallic grays, neon accents, urban darks
DETAILS: Advanced robotics, seamless integration with environment
MOOD: Powerful, advanced, awe-inspiring
```

### Text Mode Examples

**Input**: Less detailed
```
Cyberpunk scene
```

**Output**: Heavily enriched
```
ENVIRONMENT: Cyberpunk megacity with neon-lit streets
ATMOSPHERE: Dark, rain-soaked, neon-filled
AESTHETIC: Cyberpunk noir with high-tech elements
LIGHTING: Neon glow mixed with artificial street lighting
MOOD: Dystopian, intense, futuristic
ARCHITECTURAL: Towering corporate buildings, holographic advertisements
COLOR: #FF00FF #00FFFF #0A0E27 #FF6600
```

### Word Limits
Same as SDXL:
- Tiny: 50 words
- Normal: 160 words
- Extreme: 320+ words

### Best Practices

#### 1. Let QWEN add details
Input doesn't need to be detailed; QWEN enriches.

**Minimal input** (QWEN will enrich):
```
Steampunk airship
```

**Output** (automatically enriched):
```
SETTING: Victorian steampunk world
AIRSHIP: Brass-and-leather airship with steam engines
ATMOSPHERE: Industrial, adventurous
AESTHETIC: Vintage technology meets fantasy
DETAILS: Gears, steam vents, ornate design
MOOD: Adventurous, mysterious, grand
```

#### 2. Trust QWEN's enrichment
You don't need to be maximally specific.

**Works great**:
```
Underwater city
```

**Also works**:
```
A city beneath the ocean with bioluminescent creatures
```

#### 3. Use for complex images
QWEN excels with complex scenes.

### Examples

**Example 1: Fantasy Scene**
Input:
```
Dragon in mountains
```

Output (enriched):
```
SUBJECT: Massive dragon with intricate scales
SETTING: Alpine mountains with mist and ancient ruins
COMPOSITION: Dragon as centerpiece, mountains in background
LIGHTING: Golden hour with atmospheric mist
ATMOSPHERE: Epic, majestic, primordial
MOOD: Powerful, awe-inspiring, mythical
COLOR: Gold, deep blue, earth tones
DETAILS: Intricate scales, ancient architecture, mystical elements
```

**Example 2: Sci-Fi Interior**
Input:
```
Spaceship bridge
```

Output (enriched):
```
SETTING: High-tech spaceship command bridge
ARCHITECTURE: Sleek futuristic design with integrated displays
LIGHTING: Soft ambient with holographic interfaces
MOOD: Professional, technological, forward-thinking
ATMOSPHERE: Clean, organized, advanced
DETAILS: Multiple monitors, control panels, sleek materials
COLOR PALETTE: Metallic blues, cool grays, bright accents
COMPOSITION: Centered around main control console
```

---

## 6. Krea 2 - Natural Language

### Overview
Minimal processing for natural, conversational prompting.

### When to Use
- You prefer natural language prompts
- Speed is critical (fastest option)
- No restructuring desired
- Simple, well-written prompts
- Real-time interactive use

### Processing
Minimal! Just basic cleanup.

**Input**:
```
**bold text** here, with extra   spaces
```

**Output** (minimal changes):
```
bold text here, with extra spaces
```

### Text Mode Philosophy
- Works best with natural, conversational prompts
- No forced structure
- Preserves intent and style
- Fastest processing (1ms)

### Examples

**Example 1: Natural Description**
Input:
```
A quiet café on a rainy Paris street with warm lighting
```

Output (unchanged or minor cleanup):
```
A quiet café on a rainy Paris street with warm lighting
```

**Example 2: Conversational**
Input:
```
Show me a cyberpunk android, sleek design, neon city vibes
```

Output (minimal restructuring):
```
A cyberpunk android with sleek design in a neon city
```

### Best Practices

#### 1. Write naturally
Krea 2 doesn't restructure; write good prompts yourself.

**Good**:
```
A serene landscape with a single tree at sunset, warm golden light, peaceful mood
```

**Less ideal for Krea 2**:
```
landscape
tree
sunset
```

#### 2. Be specific but conversational
Balance detail with natural language.

**Good**:
```
A professional headshot of a woman in business attire, 
warm lighting, confident expression, neutral background
```

#### 3. Use descriptive language
Natural language works best.

### Performance
- Fastest model: ~1ms
- Suitable for high-frequency use
- Minimal overhead
- Real-time processing possible

---

## 7. Ideogram 4 - Plain-Text Optimization

### Overview
Optimized for Ideogram 4's native API (plain-text mode).

### When to Use
- Using Ideogram 4 as the backend
- Plain-text prompts preferred
- Want Ideogram-optimized phrasing
- Native API integration

### Note on JSON Schema
- **Legacy**: Ideogram once used specialized JSON
- **Current**: Public API uses plain-text (more flexible)
- **Support**: Full JSON schema available if needed
- **Recommendation**: Use plain-text mode for simplicity

### Text Mode
Optimizes prompts for Ideogram 4.

**Input**:
```
A neon cyberpunk scene
```

**Output** (optimized):
```
A neon cyberpunk scene
```

(Minimal changes; optimizations are subtle)

### Best Practices

#### 1. Use descriptive language
Ideogram 4 API works well with natural descriptions.

**Good**:
```
A sleek chrome android with glowing neon implants 
standing in a rain-soaked cyberpunk megacity at night,
neon signs reflected in puddles, dramatic lighting
```

#### 2. Include style hints
Ideogram 4 responds well to style descriptors.

**Good**:
```
Hyperrealistic photograph with cinematic lighting of a...
```

#### 3. Specify colors when important
Hex colors work in plain-text mode.

**Good**:
```
Neon colors: magenta (#FF00FF), cyan (#00FFFF), deep space blue (#0A0E27)
```

### JSON Mode
Generates generic JSON schema (not Ideogram-specific).

```json
{
  "prompt": "A neon cyberpunk scene with chrome androids..."
}
```

### Performance
- ~3ms per prompt
- Efficient plain-text optimization
- Good for real-time use

### Advanced: Enabling Legacy JSON Mode

If you need Ideogram's canonical JSON schema (rarely used):

```python
# Set up for JSON prompting
result = convert_to_dit_format(
    prompt,
    "Ideogram 4",
    response_format="json",
    # Additional params would enable legacy JSON
)
```

---

## Comparison & Decision Guide

### Speed Requirements

**Critical (<2ms)**:
- Z-Image Turbo
- Krea 2

**Good (2-4ms)**:
- FLUX
- Ideogram 4

**Acceptable (4-6ms)**:
- SDXL
- QWEN

### Quality Requirements

**Maximum quality**:
- QWEN (enhanced restructuring)
- SDXL (semantic restructuring)

**Good quality**:
- FLUX (structured control)
- Ideogram 4 (optimized)

**Basic quality**:
- Z-Image Turbo
- Krea 2
- Auto/None

### Control Level

**Maximum control**:
- FLUX (7-field schema)
- SDXL (restructuring)
- QWEN (enriched restructuring)

**Moderate control**:
- Ideogram 4 (plain-text)
- Z-Image Turbo (normalization)

**Minimal control**:
- Krea 2 (natural language)
- Auto/None (passthrough)

### Use Case Matrix

| Use Case | Best Model | Reason |
|----------|------------|--------|
| Real-time web app | Krea 2 | Fastest |
| Mobile app | Z-Image Turbo | Fast + normalized |
| Detailed composition | FLUX | 7-field schema |
| Complex scenes | QWEN | Enhanced quality |
| Structured output | SDXL | Forced restructuring |
| Ideogram 4 API | Ideogram 4 | Native optimization |
| Custom pipeline | Auto/None | No processing |

---

## Tips & Tricks

### Combining Models
Chain models for different purposes:

```python
# Get structured output from FLUX
structured = convert_to_dit_format(prompt, "FLUX", "json")

# Then optimize for speed
final = convert_to_dit_format(prompt, "Krea 2", "text")
```

### Detail Level Scaling
Adapt output verbosity to your needs:

```python
# Minimal output
tiny = convert_to_dit_format(prompt, "SDXL", detail_level="tiny")

# Standard output
normal = convert_to_dit_format(prompt, "SDXL", detail_level="normal")

# Maximum detail
extreme = convert_to_dit_format(prompt, "SDXL", detail_level="extreme")
```

### Color Handling
All models support color extraction:

```
Input: "Neon #FF00FF and cyan #00FFFF colors"
Output: ["#FF00FF", "#00FFFF"] (for FLUX, automatic)
```

### Field Preservation
When prompts get restructured (SDXL, QWEN), key information is preserved:

```
Input: "35mm lens, cyberpunk style"
Output: (restructured but includes both elements)
```

---

## Summary

Choose your model based on:

1. **Speed needs** → Krea 2 or Z-Image Turbo
2. **Control needs** → FLUX or SDXL
3. **Quality needs** → QWEN
4. **Specific API** → Ideogram 4
5. **No processing** → Auto/None

All models are production-ready and handle edge cases gracefully.

---

*Last updated: 2026-07-08*
*All 7 models validated and tested*
