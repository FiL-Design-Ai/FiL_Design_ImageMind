# TODO Features - Detailed Analysis

---

## 1. FLUX Reference Images (10 per generation) - MEDIUM EFFORT

### What It Is
FLUX officially supports up to **10 reference images** per generation.

From [Black Forest Labs Docs](https://docs.bfl.ml):
```
FLUX supports multiple reference images per request.
Maximum: 10 reference images per generation
Each image contributes to style/composition guidance
```

### How It Works

**Without Reference Images (Current)**:
```
User prompt: "A cyberpunk android"
→ FLUX generates based on text only
```

**With Reference Images (Future)**:
```
User prompt: "A cyberpunk android"
References:
  1. neon_lighting.jpg
  2. chrome_texture.jpg
  3. megacity_composition.jpg
→ FLUX uses references to guide generation
```

### What FLUX Uses from Reference Images
- Color palette (extracts dominant colors)
- Lighting style (bright, dark, neon, etc.)
- Composition (foreground, midground, background)
- Texture quality (smooth, rough, metallic, etc.)
- Artistic style (photorealistic, painterly, etc.)

### Implementation Plan

#### Step 1: Extend Input Contract
**File**: `common/contracts/registry.py`

Current:
```python
_SCANNER = NodeContract(
    id="FiLOpticScanner",
    inputs=NodeInputs(
        required=[
            _chip_grid("model_type", values=["Auto/None", "FLUX", ...]),
            # No image references
        ]
    )
)
```

Proposed:
```python
_SCANNER = NodeContract(
    id="FiLOpticScanner",
    inputs=NodeInputs(
        required=[
            _chip_grid("model_type", ...),
        ],
        optional=[
            # NEW: Reference images for FLUX only
            _string("reference_image_1", default="", label="Reference 1 (FLUX only)"),
            _string("reference_image_2", default="", label="Reference 2 (FLUX only)"),
            # ... up to 10
        ]
    )
)
```

#### Step 2: Update Node Interface
**File**: `frontend/src/components/nodes/OpticScanner.vue`

Add image input fields (only visible when FLUX selected):
```vue
<div v-if="modelType === 'FLUX'" class="reference-images">
  <label>Reference Images (max 10):</label>
  <div v-for="i in 10" :key="i">
    <ImageInput 
      :label="`Reference ${i}`"
      :optional="true"
      v-model="references[i]"
    />
  </div>
</div>
```

#### Step 3: Update Backend Processing
**File**: `nodes/node_scanner.py`

Current:
```python
def execute(self, config, prompt, image, ...):
    # Process prompt for model
    output = llm.generate(prompt)
    return output
```

Proposed:
```python
def execute(self, config, prompt, image, ref_images=None, ...):
    # If FLUX with references, prepare reference data
    if model_type == "FLUX" and ref_images:
        # Filter to max 10 non-empty
        refs = [r for r in ref_images if r][:10]
        # Extract features from each ref image
        ref_features = extract_reference_features(refs)
        # Include in prompt/context
        augmented_prompt = enhance_with_references(prompt, ref_features)
    else:
        augmented_prompt = prompt
    
    output = llm.generate(augmented_prompt)
    return output
```

#### Step 4: Add Reference Feature Extraction
**File**: `common/reference_handler.py` (new file)

```python
def extract_reference_features(images: List[Image]) -> Dict[str, Any]:
    """Extract style/composition features from reference images."""
    features = {
        "color_palette": [],
        "lighting_style": "",
        "composition": {},
        "texture": "",
        "artistic_style": ""
    }
    
    for img in images:
        # Extract colors
        colors = extract_dominant_colors(img)  # → ["#FF00FF", "#00FFFF", ...]
        features["color_palette"].extend(colors)
        
        # Analyze lighting
        lighting = analyze_lighting(img)  # → "neon", "bright", "dark", etc.
        if not features["lighting_style"]:
            features["lighting_style"] = lighting
        
        # Analyze composition
        comp = analyze_composition(img)  # → {"foreground": "...", ...}
        features["composition"].update(comp)
        
        # Detect texture
        texture = detect_texture(img)  # → "metallic", "smooth", etc.
        if not features["texture"]:
            features["texture"] = texture
    
    return features
```

#### Step 5: Integrate into Prompt Adaptation
**File**: `common/model_prompt_adapters.py`

```python
def build_flux_prompt_with_references(
    prompt: str, 
    reference_features: Dict[str, Any]
) -> str:
    """Enhance FLUX prompt with reference image features."""
    
    enhancement = f"""
    Reference style guidance:
    - Color palette: {", ".join(reference_features["color_palette"])}
    - Lighting: {reference_features["lighting_style"]}
    - Texture: {reference_features["texture"]}
    - Composition: {reference_features["composition"]}
    
    Apply these reference elements to: {prompt}
    """
    
    return enhancement
```

### Testing Plan
```python
def test_flux_accepts_reference_images():
    """FLUX should process up to 10 reference images."""
    refs = [img1, img2, img3]  # 3 reference images
    output = scanner.execute(
        prompt="A robot",
        model_type="FLUX",
        reference_images=refs
    )
    assert "reference" in str(output) or refs were used
```

### Effort Estimate
- UI: ~1-2 hours (image inputs)
- Backend: ~2-3 hours (reference processing)
- Testing: ~1-2 hours
- **Total: ~5-7 hours (medium effort)**

### Priority: MEDIUM
- Adds significant value (compositional control)
- Not critical for basic operation
- Moderate implementation complexity

---

## 2. Krea 2 Style Transfer - HIGH EFFORT

### What It Is
Krea 2's unique feature to **transfer style from reference image** to new generation.

From [Krea AI Docs](https://fal.ai/learn/tools/krea-2-prompting-guide):
```
Style transfer: Apply the visual language of one image 
(palette, lines, texture, lighting, composition) 
to a new scene.

Works by: Extracting style signature from reference,
then applying to new prompt/generation.
```

### How It Works

**Without Style Transfer (Current)**:
```
Prompt: "A futuristic city"
Result: Generated city based on text only
```

**With Style Transfer (Future)**:
```
Reference image: oil_painting_sunset.jpg
Prompt: "A futuristic city"

1. Extract style from reference:
   - Brushstrokes (oil painting technique)
   - Color range (#FFD700, #FF7F00, #FF4500)
   - Composition (rule of thirds)
   - Lighting (golden hour)

2. Apply extracted style to prompt:
   "A futuristic city in oil painting style with warm sunset colors,
    golden hour lighting, rule of thirds composition"

Result: City rendered in same style as reference
```

### What Gets Transferred
```
Visual Language Elements:
├── Palette (primary + secondary colors)
├── Lines (sharp, soft, curved, angular)
├── Texture (smooth, rough, grainy, painted)
├── Lighting (quality, direction, temperature)
└── Composition (framing, perspective, balance)
```

### Example Use Cases

**Example 1: Apply Painting Style**
```
Reference: Van Gogh's Starry Night
Prompt: "A modern city skyline"
Result: Skyline painted in Van Gogh's swirling style
```

**Example 2: Apply Lighting Style**
```
Reference: Golden hour portrait photo
Prompt: "A futuristic robot"
Result: Robot lit with golden hour warm lighting
```

**Example 3: Apply Color Palette**
```
Reference: Cyberpunk neon art
Prompt: "A serene landscape"
Result: Landscape with cyberpunk neon colors
```

### Implementation Plan

#### Step 1: Create Style Extraction Module
**File**: `common/style_extractor.py` (new file)

```python
class StyleExtractor:
    """Extract visual style from reference image."""
    
    def extract(self, image: Image) -> StyleSignature:
        """Extract complete style signature."""
        return StyleSignature(
            palette=self.extract_palette(image),
            texture=self.detect_texture(image),
            lighting=self.analyze_lighting(image),
            composition=self.analyze_composition(image),
            lines=self.extract_line_style(image),
            artistic_technique=self.detect_technique(image)
        )
    
    def extract_palette(self, image: Image) -> List[str]:
        """Extract dominant + secondary colors."""
        # K-means clustering to find color groups
        # Return top 5-8 colors as hex
        pass
    
    def detect_texture(self, image: Image) -> str:
        """Detect texture type."""
        # Analyze surface properties
        # Return: "smooth", "rough", "grainy", "painted", etc.
        pass
    
    def analyze_lighting(self, image: Image) -> LightingProfile:
        """Analyze lighting characteristics."""
        return LightingProfile(
            temperature="warm",  # warm, cool, neutral
            quality="soft",  # soft, hard, dramatic
            direction="side",  # front, side, back, multiple
            brightness="moderate"  # bright, moderate, dark
        )
    
    def analyze_composition(self, image: Image) -> CompositionProfile:
        """Analyze compositional elements."""
        return CompositionProfile(
            rule_of_thirds=detect_rule_of_thirds(image),
            perspective=detect_perspective(image),
            balance=detect_balance(image),
            depth=estimate_depth(image)
        )
```

#### Step 2: Create Style Application Module
**File**: `common/style_applier.py` (new file)

```python
class StyleApplier:
    """Apply extracted style to new prompt."""
    
    def apply(self, prompt: str, style: StyleSignature) -> str:
        """Transform prompt to include style guidance."""
        
        style_directives = self.build_directives(style)
        
        enhanced_prompt = f"""
        Base prompt: {prompt}
        
        Apply this visual style:
        {style_directives}
        
        Important: Maintain original prompt intent while applying the style.
        """
        
        return enhanced_prompt
    
    def build_directives(self, style: StyleSignature) -> str:
        """Build natural language style directives."""
        parts = []
        
        # Color palette
        colors = ", ".join(style.palette)
        parts.append(f"Color palette: {colors}")
        
        # Lighting
        parts.append(f"Lighting: {style.lighting.quality} {style.lighting.temperature} light")
        
        # Texture
        parts.append(f"Texture: {style.texture}")
        
        # Technique
        parts.append(f"Artistic technique: {style.artistic_technique}")
        
        # Composition
        parts.append(f"Composition: {style.composition.description}")
        
        return "\n".join(parts)
```

#### Step 3: Update Node Interface
**File**: `frontend/src/components/nodes/OpticScanner.vue`

```vue
<div v-if="modelType === 'Krea 2'" class="style-transfer">
  <label>Style Reference (Krea 2 only):</label>
  <ImageInput 
    label="Reference image for style transfer"
    optional="true"
    v-model="styleReference"
    help="Style from this image will be applied to generation"
  />
</div>
```

#### Step 4: Update Scanner Node
**File**: `nodes/node_scanner.py`

```python
def execute(self, config, prompt, image, style_reference=None, ...):
    if model_type == "Krea 2" and style_reference:
        # Extract style from reference
        extractor = StyleExtractor()
        style_sig = extractor.extract(style_reference)
        
        # Apply to prompt
        applier = StyleApplier()
        enhanced_prompt = applier.apply(prompt, style_sig)
    else:
        enhanced_prompt = prompt
    
    output = llm.generate(enhanced_prompt)
    return output
```

#### Step 5: Add Configuration Options
**File**: `common/contracts/registry.py`

```python
optional=[
    _string("style_reference", default="", label="Style Reference (Krea 2)"),
    _segmented(
        "style_transfer_intensity",
        options=["subtle", "moderate", "strong"],
        default="moderate",
        label="Style Transfer Strength"
    ),
]
```

### Testing Plan
```python
def test_krea2_style_transfer():
    """Krea 2 should apply style from reference."""
    ref_image = load_image("oil_painting.jpg")
    output = scanner.execute(
        prompt="A robot",
        model_type="Krea 2",
        style_reference=ref_image
    )
    # Output should contain oil painting style directives
    assert "oil" in output.lower() or "paint" in output.lower()

def test_style_extraction_accuracy():
    """Style extraction should identify key characteristics."""
    ref = load_image("neon_cyberpunk.jpg")
    style = StyleExtractor().extract(ref)
    
    # Should detect neon colors
    assert any("#" in color for color in style.palette)
    # Should detect appropriate lighting
    assert "neon" in str(style).lower()
```

### Effort Estimate
- Style extraction module: ~3-4 hours
- Style application module: ~2-3 hours
- UI updates: ~2 hours
- Testing: ~2-3 hours
- **Total: ~10-12 hours (high effort)**

### Priority: MEDIUM-HIGH
- Unique selling point for Krea 2
- Complex implementation (image analysis)
- High user value once implemented

---

## 3. Infrastructure Documentation - LOW EFFORT

### What It Is
Document infrastructure-level settings that affect model quality but aren't part of prompting.

These are handled at **inference time**, not prompt adaptation time.

### QWEN Configuration

**Official Recommendation**:
```
Golden Configuration:
- CFG Scale: 4.5
- Steps: 50

For precision work (product shots, text):
- CFG Scale: 5.0-7.0
- Steps: 50-75
```

**What CFG Scale Does**:
- Controls how much the model follows the prompt
- 1.0 = ignores prompt (generates random)
- 4.5 = balanced (follows prompt + creativity)
- 7.0 = strict (very close to prompt)
- 15.0 = too strict (may lose quality)

**What Steps Does**:
- Number of denoising iterations
- 20-30 = fast but lower quality
- 50 = good balance
- 75+ = higher quality but slower

### SDXL Configuration

**Official Recommendation**:
```
Resolution: 1024×1024
- SDXL was trained at this resolution
- Other resolutions (768×1024, 1024×768) supported
- Avoid unusual sizes like 900×900 or 1000×1000

Steps: 30-50
- Default: 30 steps
- For detail: 50 steps
- Rarely needs more
```

**Why 1024×1024**:
```
Model trained on 1024×1024 data
↓
Optimal quality at training resolution
↓
Other 1024px dimensions work (768×1024)
↓
Unusual dimensions (900×900) reduce quality
```

### FLUX Configuration

**Recommendations**:
```
Resolution: Any common aspect ratio
- 1024×1024 (square)
- 1024×576 (16:9 widescreen)
- 576×1024 (9:16 portrait)

Steps: 1 (!)
- FLUX is so efficient it needs only 1 step
- Can do 2-4 for fine-tuning

CFG Scale: 3.0-3.5
- Lower than other models
- 3.0 = good balance
```

### Where to Document

**Location 1**: UI Settings/Presets
```
OpticScanner Node → Advanced → Model Settings
├── QWEN
│   ├── CFG Scale: 4.5 (golden config)
│   └── Steps: 50
├── SDXL
│   ├── Resolution: 1024×1024
│   └── Steps: 30
└── FLUX
    ├── Steps: 1-2
    └── CFG Scale: 3.0-3.5
```

**Location 2**: Documentation Files
```
docs/
├── MODEL_PROMPTING_OFFICIAL.md
├── INFRASTRUCTURE_SETTINGS.md (NEW)
└── README.md (update with links)
```

**Location 3**: Inline Comments
```python
# In node_scanner.py
QWEN_OPTIMAL_CFG = 4.5  # Golden config per official guide
QWEN_OPTIMAL_STEPS = 50

SDXL_OPTIMAL_RESOLUTION = (1024, 1024)  # Trained at this
FLUX_OPTIMAL_STEPS = 1  # Remarkably efficient
```

### Implementation Plan

#### Step 1: Create Infrastructure Doc
**File**: `docs/INFRASTRUCTURE_SETTINGS.md`

```markdown
# Infrastructure Settings by Model

## QWEN (Alibaba)
### Golden Configuration
- CFG Scale: **4.5** (sweet spot)
- Steps: **50** (quality/speed balance)

### For Precision Work
- CFG Scale: 5.0-7.0
- Steps: 50-75

## SDXL (Stability AI)
### Optimal Resolution
- **1024×1024** (trained resolution)
- Also supported: 768×1024, 1024×768
- Avoid: 900×900, 1000×1000 (quality loss)

### Steps
- Default: 30 steps
- For detail: 50 steps

## FLUX (Black Forest Labs)
### Resolution
- Any common aspect ratio
- 1024×1024, 1024×576, 576×1024

### Steps
- **1 step** (highly efficient!)
- 2-4 for fine-tuning

### CFG Scale
- **3.0-3.5** (lower than others)

## Krea 2 (Krea AI)
### Default Settings
- Steps: 30-50
- CFG: varies by use case
```

#### Step 2: Update Node Contracts
**File**: `common/contracts/registry.py`

```python
_SCANNER = NodeContract(
    # ... existing config ...
    
    # NEW: Infrastructure settings section
    optional=[
        _slider("cfg_scale", 
                default=4.5,  # QWEN default
                minv=1.0,
                maxv=10.0,
                label="CFG Scale (Guidance)",
                section="inference"),
        
        _int("steps",
             default=50,
             minv=1,
             maxv=200,
             label="Inference Steps",
             section="inference"),
    ]
)
```

#### Step 3: Add Comments & Documentation

```python
# nodes/node_scanner.py

# Infrastructure settings based on official vendor docs

DEFAULTS_BY_MODEL = {
    "QWEN": {
        "cfg_scale": 4.5,  # Official: golden configuration
        "steps": 50,       # Official: quality/speed balance
        "note": "For precision: cfg_scale 5-7, steps 50-75"
    },
    "SDXL": {
        "resolution": (1024, 1024),  # Official: trained at this
        "steps": 30,
        "note": "Avoid unusual sizes like 900×900"
    },
    "FLUX": {
        "steps": 1,  # Official: remarkably efficient
        "cfg_scale": 3.0,  # Official: lower than others
        "note": "Can use 2-4 steps for fine-tuning"
    },
}
```

### Effort Estimate
- Documentation: ~1-2 hours
- Comments: ~1 hour
- UI updates: ~1-2 hours
- **Total: ~3-5 hours (low effort)**

### Priority: LOW
- Already handled at inference time
- Good for documentation
- Improves user understanding

---

## Summary Table

| Feature | Model | Effort | Priority | Impact |
|---------|-------|--------|----------|--------|
| **Reference Images** | FLUX | Medium | Medium | High (composition control) |
| **Style Transfer** | Krea 2 | High | Medium-High | Very High (unique feature) |
| **Infrastructure Docs** | All | Low | Low | Medium (education) |

---

## Timeline Recommendation

### Phase 1 (Quick Wins)
1. Add infrastructure documentation (3-5 hours)
   - Highest ROI
   - Lowest effort
   - Helps users immediately

### Phase 2 (Medium Effort)
2. Implement FLUX reference images (5-7 hours)
   - Adds significant value
   - Moderate complexity
   - Supported by API

### Phase 3 (Advanced Feature)
3. Implement Krea 2 style transfer (10-12 hours)
   - Unique capability
   - High complexity
   - Major differentiator

---

## Testing Checklist

### Reference Images (FLUX)
- [ ] Can upload up to 10 reference images
- [ ] Features extracted correctly
- [ ] Prompt enhanced with reference data
- [ ] Generation respects reference style
- [ ] Gracefully handles <10 images
- [ ] Error handling for invalid images

### Style Transfer (Krea 2)
- [ ] Style extracted from reference
- [ ] Palette colors identified correctly
- [ ] Lighting analysis works
- [ ] Texture detection works
- [ ] Composition analysis works
- [ ] Prompt properly enhanced
- [ ] Generation matches style

### Infrastructure Docs
- [ ] Documentation complete
- [ ] Settings documented in UI
- [ ] Comments in code
- [ ] Examples provided
- [ ] Links to official docs

---

*Created: 2026-07-08*
*Updated: After vendor compliance review*
