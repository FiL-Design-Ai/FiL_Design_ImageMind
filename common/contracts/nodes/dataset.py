"""Frontend contract for `FiLDatasetForge`."""

from __future__ import annotations

from ..widgets import _bool, _combo, _int, _segmented, _string
from ..schema import NodeContract, NodeInputs, NodeOutput
from ...brand import CATEGORY_DATASET
from ...data import LANGUAGES, first_or_default
from ...dataset.bucketing import (
    BASE_RESOLUTIONS as DATASET_BASE_RESOLUTIONS,
    CROP_MODES as DATASET_CROP_MODES,
)
from ...dataset.captioning import CAPTION_MODES as DATASET_CAPTION_MODES
from ...dataset.writer import (
    CAPTION_EXTENSIONS as DATASET_CAPTION_EXTENSIONS,
    IMAGE_FORMATS as DATASET_IMAGE_FORMATS,
    LAYOUTS as DATASET_LAYOUTS,
    WRITE_MODES as DATASET_WRITE_MODES,
)

CONTRACT = NodeContract(
    id="FiLDatasetForge",
    title="📚 LoRA Dataset Forge",
    category=CATEGORY_DATASET,
    description="Batch → aspect-bucketed images + LLM captions written as a kohya/flat LoRA dataset.",
    min_size=(350, 460),
    family="llm",
    inputs=NodeInputs(
        required=[
            _string("dataset_name", default="my_lora", label="Dataset name", section="settings"),
            _string("trigger_word", default="", label="Trigger word", section="settings"),
            _string("class_token", default="", label="Class token", section="settings"),
            _combo("base_resolution", [str(r) for r in DATASET_BASE_RESOLUTIONS], "1024", label="Resolution", section="settings"),
            _segmented("layout", options=list(DATASET_LAYOUTS), default="kohya", label="Layout", section="settings"),
            _int("repeats", default=10, minv=1, maxv=1000, step=1, label="Repeats", section="settings"),
            _combo("caption_mode", list(DATASET_CAPTION_MODES), "natural", label="Caption mode", section="settings"),
            _segmented("crop_mode", options=list(DATASET_CROP_MODES), default="center", label="Crop", section="settings"),
            _bool("dry_run", default=False, label="Dry run", section="settings"),
        ],
        optional=[
            _string("captions", default="", multiline=True, label="Manual captions"),
            _segmented("write_mode", options=list(DATASET_WRITE_MODES), default="append", section="advanced"),
            _int("caption_max_words", default=60, minv=4, maxv=400, step=1, section="advanced"),
            _combo("caption_language", LANGUAGES, first_or_default(LANGUAGES, "en"), section="advanced"),
            _string("dont_caption", default="", multiline=True, label="Never caption", section="advanced"),
            _string("caption_instruction", default="", multiline=True, section="advanced"),
            _int("bucket_step", default=64, minv=8, maxv=256, step=8, section="advanced"),
            _combo("caption_extension", list(DATASET_CAPTION_EXTENSIONS), ".txt", section="advanced"),
            _combo("image_format", list(DATASET_IMAGE_FORMATS), "png", section="advanced"),
            _int("jpg_quality", default=95, minv=50, maxv=100, step=1, section="advanced"),
            _int("seed", default=-1, minv=-1, maxv=999999999999, step=1, section="advanced"),
        ],
    ),
    outputs=[
        NodeOutput(name="preview", type="IMAGE"),
        NodeOutput(name="report", type="STRING"),
        NodeOutput(name="dataset_path", type="STRING"),
        NodeOutput(name="manifest", type="DICT"),
    ],
)
