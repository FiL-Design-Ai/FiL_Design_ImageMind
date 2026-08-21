"""Single source of truth for the project's brand token and its derived forms."""

BRAND = "FiL_Design_ImageMind"
# Kept in step with `pyproject.toml`'s `version` by test_documentation.py.
VERSION = "1.1.2"
ROUTE_SLUG = BRAND.lower()
SETTINGS_PREFIX = f"{BRAND}."
CATEGORY_ROOT = "🎨 FiL Design"
OUTPUT_SUBFOLDER = BRAND

CATEGORY_ANALYSIS = f"{CATEGORY_ROOT}/🔍 Analysis"
CATEGORY_CONDITIONING = f"{CATEGORY_ROOT}/🔗 Conditioning"
CATEGORY_DATASET = f"{CATEGORY_ROOT}/📁 Dataset"
CATEGORY_IMAGE = f"{CATEGORY_ROOT}/🖼️ Image"
CATEGORY_LLM = f"{CATEGORY_ROOT}/🧠 LLM"
CATEGORY_SAMPLING = f"{CATEGORY_ROOT}/⚡ Sampling"
CATEGORY_STYLING = f"{CATEGORY_ROOT}/🎨 Styling"
CATEGORY_TOOLS = f"{CATEGORY_ROOT}/🧰 Tools"
CATEGORY_VALUES = f"{CATEGORY_ROOT}/🔢 Values"
