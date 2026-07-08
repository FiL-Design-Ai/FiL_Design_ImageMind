# Official Model Prompting Guide - Based on Vendor Documentation

This is the CORRECTED guide based on official documentation from each model's vendor.
Updated: 2026-07-08

---

## FLUX (Black Forest Labs Official Docs)

### No Negative Prompts!
**CRITICAL**: FLUX does NOT support negative prompts. Describe what you WANT, never what to avoid.

### Structured Prompting
FLUX unlocks power through structured prompting:
1. **Lead with subject**
2. **Use HEX codes for exact colors**
3. **Leverage JSON for complex scenes**
4. **Follow hierarchical information architecture**

### Key Features
- ✅ Up to 10 reference images supported (in single generation!)
- ✅ Natural language prompts with subject-first structure
- ✅ Hex colors (#RRGGBB) for precise color control
- ✅ JSON schema for complex multi-element scenes
- ❌ NO negative prompts
- ✅ Camera specifications improve photorealism
- ✅ Detailed lighting descriptions work well

### Best Structure
```
[Subject], [detailed description], shot with [camera specs], 
[lighting description], [style/aesthetic], [colors in hex or names]
```

### Example - CORRECT
```
A sleek chrome android, neon implants glowing cyan (#00FFFF) and magenta (#FF00FF), 
standing in rain-soaked cyberpunk megacity, shot with 50mm lens f/2.8, 
dramatic neon glow with deep shadows, hyperrealistic, cyberpunk aesthetic
```

### Example - WRONG
```
A sleek android, no blur, not cartoon, avoid dark colors, don't make it look fake
```
(All negative instructions will be ignored!)

---

## QWEN (Official Qwen Image 2512 Guide)

### Sweet Spot: 1-3 Sentences
**CRITICAL**: Keep prompts to 1-3 sentences. This is optimized.
- Longer = 60% more tokens wasted
- Shorter = Better results

### Mandatory Structure
```
[Subject first] in [Environment], [Lighting], [Mood/Style]
```

### Text Rendering - QUOTE IT!
**CRITICAL**: Text accuracy improves from 65% → 96% with quotes!
```
Correct:   "HELLO WORLD" sign with blue neon
Wrong:     HELLO WORLD sign with blue neon (only 65% accuracy)
```

### Golden Configuration
- **CFG Scale**: 4.5 (sweet spot)
- **Steps**: 50
- **Result**: Best quality/speed tradeoff

For precision work (product shots, text-heavy):
- **CFG Scale**: 5-7
- **Steps**: 50-75

### Semantic Structure = 30% Better
Use categorized descriptions:
```
Subject: sleek android
Environment: rain-soaked megacity
Lighting: neon glow, dramatic shadows
Mood: cyberpunk, dystopian

Result: 30% precision boost over narrative-only prompts
```

### Negative Prompts Work!
15% satisfaction improvement when used properly:
```
Negative: "blurry, low quality, distorted, deformed, oversaturated, watermark"
```

### Anti-Patterns to Avoid
- ❌ Contradictory styles: "Photorealistic oil painting" (choose ONE)
- ❌ Vague descriptors: "beautiful", "amazing" (no signal)
- ❌ Overly long prompts (kills token efficiency)

### Example - CORRECT (1-3 sentences)
```
Subject: sleek chrome android with neon implants
Environment: rain-soaked cyberpunk megacity at night
Lighting: neon glow with deep shadows, dramatic rim lighting
Style: hyperrealistic, cyberpunk noir aesthetic
```

### Example - WRONG
```
Make a really beautiful and amazing robot in a cool city with lots of colors 
and nice lighting that looks awesome and realistic but also stylized and awesome
```
(Too long, vague, contradictory)

---

## Krea 2 (Official Krea AI GitHub & Docs)

### Exploratory Prompting - Default Approach!
Don't aim for perfection on first try. Krea recommends:
1. Start intentionally vague
2. Use first generations as research
3. Find direction you like
4. Narrow from there
5. Work like an art director: start broad, home in

### Word Count Guidelines
- **Exploration**: 5-20 words (intentionally vague)
- **Controlled generation**: 30-80 words
- **Complex scenes**: 80-140 words

### Start Simple, Add Detail Only If Needed
Krea's approach:
1. **First try**: Basic subject + light cue + mood word
2. **If needed**: Add technical details for steering
3. **Only if needed**: Add composition, style, references

### Technical Detail Words That Work
- "Shallow depth of field"
- "Golden hour"
- "Shot on 35mm"
- "Bokeh background"
- "Soft natural lighting"
- etc.

### Style Transfer - Unique Feature!
Use reference images to transfer:
- Palette (colors)
- Lines (composition)
- Texture (surface detail)
- Lighting (light quality)
- Composition (framing)

From one image to new scene.

### Text Rendering
Put quotes around text:
```
Correct:   "HELLO" sign in neon
Wrong:     HELLO sign in neon
```

### Natural Language > Tag-Based
Use clear clauses, not comma soup:
```
Correct:   "A forest where the trees have silver leaves and the sky glows purple"
Wrong:     "forest, silver leaves, purple sky, trees, glowing, nature"
```

### Avoid Over-Engineering
Krea can generate high quality with minimal engineering. Too many instructions = noise.

### Example - CORRECT (Exploratory)
```
Cyberpunk android
```
(Let it generate, see results, then refine)

### Example - CORRECT (Controlled)
```
A sleek chrome android with neon implants standing in a neon-lit city street at night,
shallow depth of field with bokeh, shot on 50mm lens, dramatic lighting
```

### Example - WRONG
```
Make me the most detailed, beautiful, amazing cyberpunk robot with everything perfect
and all the details and the best quality and colors and lighting
```
(Over-engineered, vague, contradictory)

---

## SDXL (Stable Diffusion Art Official Guide)

### NOT SD1.5 - Don't Use Tag-Based Prompts!
**CRITICAL**: Tag-based prompts from SD1.5 DON'T WORK in SDXL.
```
❌ WRONG for SDXL:  "cyberpunk, neon, android, city, night, photorealistic"
✅ RIGHT for SDXL:  "A cyberpunk android standing in a neon city at night"
```

### Preferred Structure
SDXL understands natural language better. Use full sentences:

#### Option 1: Descriptive Sentences
```
"A sleek chrome android with glowing neon implants standing in a rain-soaked 
cyberpunk megacity at night. Dramatic neon glow with deep shadows. 
Hyperrealistic, cinematic lighting."
```

#### Option 2: Subject-Action-Location-Aesthetic
```
Subject: sleek chrome android
Action: standing (active pose)
Location: rain-soaked cyberpunk megacity, night
Aesthetic: hyperrealistic, cinematic, neon glow
```

### Negative Prompts Are MINIMAL
SDXL doesn't need long negative lists. Only exclude:
- Major style conflicts: "cartoon" (if doing photorealistic)
- Specific unwanted elements: "watermark", "text"
- Avoid vague things like "ugly", "bad quality"

### Keyword Weights - Supported!
Increase emphasis with weights:
```
"A (sleek:1.3) chrome android with (neon implants:1.2) in cyberpunk city"
```
- `(word:1.1)` = +10% emphasis
- `(word:1.2)` = +20% emphasis
- `(word:1.5)` = +50% emphasis

### Resolution Matters
- ✅ BEST: 1024×1024 (trained at this)
- ✅ GOOD: 768×1024, 1024×768 (flexible)
- ❌ AVOID: Unusual values like 900×900, 1000×1000 (reduce quality)

### Length Sweet Spot
- Sentence-style prompts work better than tags
- 2-4 sentences optimal
- Longer = more detail but potentially more confusion
- Shorter = faster, but less control

### Example - CORRECT (Full sentences)
```
A sleek android with chrome body and glowing neon implants. Standing in a 
rain-soaked cyberpunk megacity at night. Dramatic neon glow with deep shadows 
and reflections in puddles. Hyperrealistic, cinematic lighting, cyberpunk aesthetic.
```

### Example - CORRECT (Subject-Action-Location-Aesthetic)
```
Subject: sleek chrome android with neon implants
Action: standing confidently, looking over shoulder
Location: rain-soaked futuristic megacity, neon signs, holographic billboards
Aesthetic: hyperrealistic, cinematically lit, cyberpunk noir, dramatic shadows
```

### Example - WRONG
```
cyberpunk, android, neon, city, night, photorealistic, hd, high quality, 
detailed, intricate, perfect, beautiful, amazing
```
(Tag-based with SD1.5 approach - doesn't work!)

---

## Comparison: Official Recommendations

| Model | Recommended Length | Negative Prompts | Key Feature | Best For |
|-------|-------------------|------------------|-------------|----------|
| **FLUX** | Medium-Long | ❌ NOT SUPPORTED | 10 reference images, JSON schema | Controlled composition |
| **QWEN** | **1-3 sentences** | ✅ Supported (15% boost) | CFG 4.5 + 50 steps | Quality + efficiency |
| **Krea 2** | 5-140 words | No info | Exploratory approach, style transfer | Artistic exploration |
| **SDXL** | 2-4 sentences | ✅ Supported (minimal) | Keyword weights, full sentences | Natural language understanding |

---

## Critical Takeaways

### FLUX
- ❌ NO negative prompts!
- ✅ Use structured prompting
- ✅ 10 reference images per generation
- ✅ Subject-first structure

### QWEN
- ✅ 1-3 sentences ONLY
- ✅ Quote text: "TEXT" (65% → 96% accuracy)
- ✅ Structure: Subject/Environment/Lighting
- ✅ Negative prompts help (+15%)
- ✅ CFG 4.5, 50 steps = golden config

### Krea 2
- ✅ Start with exploratory (vague) prompts
- ✅ Use as research tool
- ✅ Refine based on results
- ✅ Style transfer = unique feature
- ✅ Avoid over-engineering

### SDXL
- ❌ NOT tag-based (SD1.5 approach fails!)
- ✅ Full sentences, 2-4 max
- ✅ Keyword weights supported: (word:1.2)
- ✅ 1024×1024 for best quality
- ✅ Minimal negative prompts needed

---

## What I Got Wrong Before

| Model | What I Missed |
|-------|---------------|
| FLUX | No negative prompts, 10 reference images, should be MORE structured |
| QWEN | 1-3 sentence limit, MUST quote text, exact CFG/steps, semantic structure |
| Krea 2 | Exploratory approach, style transfer feature, word count guidelines |
| SDXL | NOT tag-based, keyword weights, 1024x1024 requirement |

---

## Next Steps

The Optic Scanner's prompting logic needs updates to align with official vendor docs:

1. **FLUX**: Ensure no negative prompts are passed, verify 10 image reference support
2. **QWEN**: Add 1-3 sentence limit enforcement, text quoting guidance
3. **Krea 2**: Document exploratory approach, add style transfer capability
4. **SDXL**: Reject tag-based prompts, support keyword weights

---

Sources:
- [FLUX Prompting Guide - Black Forest Labs](https://docs.bfl.ml/guides/prompting_summary)
- [Qwen Image 2512 Prompt Practical Guide](https://help.apiyi.com/en/qwen-image-2512-prompt-guide-test-cases-en.html)
- [Krea 2 Prompting Guide](https://fal.ai/learn/tools/krea-2-prompting-guide)
- [SDXL Best Practices](https://stable-diffusion-art.com/sdxl-prompts/)
