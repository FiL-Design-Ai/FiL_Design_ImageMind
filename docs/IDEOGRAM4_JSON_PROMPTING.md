# Ideogram 4 JSON Prompting Guide

## Overview

Optic Scanner supports structured JSON prompting for Ideogram 4, enabling precise control over composition, colors, and element placement through bbox coordinates.

## JSON Structure

The canonical Ideogram 4 JSON caption format has this exact structure:

```json
{
  "high_level_description": "50-word max scene summary",
  "style_description": {
    "aesthetics": "mood and style terms",
    "lighting": "lighting description",
    "photo": "photography technique (if photo_style selected)",
    "medium": "photograph or illustration",
    "color_palette": ["#RRGGBB", "#RRGGBB", ...]
  },
  "compositional_deconstruction": {
    "background": "environmental context and spatial setting",
    "elements": [
      {
        "type": "obj",
        "desc": "element description (60 words max)",
        "bbox": [y1, x1, y2, x2],
        "color_palette": ["#RRGGBB", ...]
      },
      {
        "type": "text",
        "text": "visible text in the composition",
        "desc": "description of text element",
        "bbox": [y1, x1, y2, x2],
        "color_palette": ["#RRGGBB", ...]
      }
    ]
  }
}
```

## Field Details

### high_level_description
- **Type**: String
- **Max length**: 50 words
- **Purpose**: Overall scene summary
- **Example**: "A cyberpunk android with neon implants standing in a rain-soaked megacity alley at night"

### style_description
- **aesthetics**: Mood, style, and visual tone
- **lighting**: Describes light sources, shadows, quality
- **photo** (photo_style only): Photography technique and optics
- **medium**: Must be "photograph" or "illustration"
- **color_palette**: Array of hex colors (see Color Palette section)

### compositional_deconstruction
Breaks down the composition into semantic elements for precise control.

#### background
Environmental context and spatial setting (not an element).

#### elements
Array of visual elements. Each element can have:
- **type**: "obj" (object) or "text" (visible text)
- **desc**: Description (60 words max)
- **text** (text type only): The actual visible text
- **bbox** (optional): Bounding box coordinates
- **color_palette** (optional): Colors specific to this element

## Bounding Box (bbox) Format

### Coordinate System
- Format: `[y1, x1, y2, x2]`
- Range: All values must be integers in `[0, 1000]`
- Interpretation: Normalized coordinates where (0,0) is top-left, (1000,1000) is bottom-right

### Requirements
- `y1 < y2` (top coordinate must be less than bottom)
- `x1 < x2` (left coordinate must be less than right)
- Minimum size: 2x2 pixels (y2-y1 >= 2, x2-x1 >= 2)

### Examples

**Full image (entire canvas)**
```json
"bbox": [0, 0, 1000, 1000]
```

**Top-left quadrant**
```json
"bbox": [0, 0, 500, 500]
```

**Center region**
```json
"bbox": [250, 250, 750, 750]
```

**Left half of image**
```json
"bbox": [0, 0, 1000, 500]
```

## Color Palette Format

### Hex Color Format
- Only valid format: `#RRGGBB` (uppercase)
- Each component (R, G, B) must be two hexadecimal digits
- Case-insensitive input, always normalized to UPPERCASE

### Color Limits
- **style_description.color_palette**: Maximum 16 colors
- **element.color_palette**: Maximum 5 colors per element

### Validation Rules
- Invalid formats are silently dropped:
  - `red` (color name) → rejected
  - `#RGB` (3-digit) → rejected
  - `#RRGGBBAA` (8-digit alpha) → rejected
  - `rgb(255,0,0)` (RGB function) → rejected
  - `#GGGGGG` (non-hex chars) → rejected

### Deduplication
- Duplicate colors (case-insensitive) are automatically removed
- First occurrence is preserved
- Order is maintained

### Examples

**Valid palette**
```json
"color_palette": ["#FF0000", "#00FF00", "#0000FF"]
```

**Cyberpunk neon**
```json
"color_palette": ["#FF00FF", "#00FFFF", "#FF0000", "#FFFF00"]
```

**Grayscale**
```json
"color_palette": ["#FFFFFF", "#808080", "#000000"]
```

## Usage with Optic Scanner

### Enabling JSON Mode
1. In Optic Scanner node, set `response_format` to "json"
2. Select model_type: "Ideogram 4"
3. Choose a photo_style or art_style
4. Provide either an image (for analysis) or a prompt text (for expansion)

### Output
The node returns three outputs:
- **prompt**: The structured JSON string
- **metadata_json**: String containing JSON metadata about processing
- **metadata_dict**: Dictionary with metadata fields

### Metadata Fields
```python
{
    "model_type": "Ideogram 4",
    "style_category": "КИБЕРПАНК",
    "style_required_cues": ["neon", "cyberpunk", "rain"],
    "camera_override": {...},  # bbox parameters from style
    "response_outcome": {
        "required_cue_hits": 3,
        "forbidden_drift_hits": 0,
        "style_drift_detected": False
    }
}
```

## Best Practices for Ideogram 4 JSON

### 1. Semantic Decomposition
Break complex scenes into logical elements:
```json
"elements": [
  {"type": "obj", "desc": "foreground character"},
  {"type": "obj", "desc": "background architecture"},
  {"type": "text", "text": "NEON", "desc": "glowing sign"}
]
```

### 2. Bbox Precision for Key Elements
Only use bbox for elements you want to precisely control positioning:
```json
{
  "type": "obj",
  "desc": "android in center frame",
  "bbox": [150, 250, 850, 750]  // centered, takes up 60% of image
}
```

### 3. Color Consistency
Use colors that reinforce the style:
- **Cyberpunk**: Neon (magenta, cyan, red) + dark neutrals
- **Vintage**: Warm tones, faded colors, sepia
- **Nature**: Greens, blues, earth tones

```json
{
  "aesthetics": "neon cyberpunk",
  "color_palette": ["#FF00FF", "#00FFFF", "#0A0E27"]
}
```

### 4. Descriptive Precision
Write descriptions that guide the LLM:
- Include specific visual qualities (not just objects)
- Mention materials, textures, lighting
- Reference emotions or mood

```json
{
  "type": "obj",
  "desc": "sleek chrome android head with glowing LED eyes, metallic sheen, sharp geometric features, professional studio lighting"
}
```

### 5. Quoted Literal Preservation
Any quoted text in the source prompt is automatically injected as text elements:
```
Input: "A sign reading 'HELLO' and 'WORLD'"
Output elements include:
  {"type": "text", "text": "HELLO", ...}
  {"type": "text", "text": "WORLD", ...}
```

## Testing & Validation

### Valid JSON Checklist
- [ ] Top-level keys match: `high_level_description`, `style_description`, `compositional_deconstruction`
- [ ] All bbox values are integers in [0, 1000]
- [ ] All bbox values satisfy: y1 < y2, x1 < x2
- [ ] All colors are `#RRGGBB` format (uppercase)
- [ ] Style palette has max 16 colors
- [ ] Element palettes have max 5 colors each
- [ ] Element type is "obj" or "text" only
- [ ] Text elements have non-empty "text" field

### Common Errors

**Error: "bbox out of range"**
- **Cause**: Value < 0 or > 1000
- **Fix**: Normalize to [0, 1000]

**Error: "inverted bbox"**
- **Cause**: y1 >= y2 or x1 >= x2
- **Fix**: Ensure top-left is before bottom-right

**Error: "colors dropped"**
- **Cause**: Invalid hex format
- **Fix**: Use only `#RRGGBB` uppercase

**Error: "palette exceeds limit"**
- **Cause**: More than 16 colors in style or 5 in element
- **Fix**: Keep colors under the limit

## Performance Notes

- Bbox calculations are O(n) for n elements
- Color deduplication uses case-insensitive comparison
- JSON validation happens at adaptation time (fast)
- All invalid data is silently dropped (fail-open)

## Examples

### Cyberpunk Android
```json
{
  "high_level_description": "A sleek chrome android with neon implants in a rain-soaked cyberpunk megacity at night",
  "style_description": {
    "aesthetics": "neon, futuristic, dystopian",
    "lighting": "neon glow with deep shadows",
    "photo": "sharp, hyper-detailed, professional",
    "medium": "photograph",
    "color_palette": ["#FF00FF", "#00FFFF", "#FF0000", "#0A0E27"]
  },
  "compositional_deconstruction": {
    "background": "rain-soaked neon-lit megacity streets with holographic signs",
    "elements": [
      {
        "type": "obj",
        "desc": "chrome android head with glowing LED eyes and neon circuitry",
        "bbox": [150, 250, 750, 850],
        "color_palette": ["#FF00FF", "#00FFFF", "#C0C0C0"]
      }
    ]
  }
}
```

### Vintage Portrait
```json
{
  "high_level_description": "A classic 1950s portrait with warm Kodachrome colors and film grain",
  "style_description": {
    "aesthetics": "vintage, nostalgic, retro",
    "lighting": "warm studio lighting with soft shadows",
    "photo": "Kodachrome slide film, soft focus",
    "medium": "photograph",
    "color_palette": ["#D4A574", "#8B4513", "#DEB887", "#FFFACD"]
  },
  "compositional_deconstruction": {
    "background": "soft-focus studio backdrop with warm tones",
    "elements": [
      {
        "type": "obj",
        "desc": "portrait subject in period clothing with vintage makeup",
        "bbox": [0, 200, 1000, 800],
        "color_palette": ["#D4A574", "#8B4513"]
      }
    ]
  }
}
```

## Version History

- v1.0 (2024): Initial canonical JSON schema for Ideogram 4
- Functions: `adapt_ideogram4_caption()`, `_normalize_bbox()`, `_normalize_palette()`, `_normalize_element()`
