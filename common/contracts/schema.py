"""Pydantic v2 models for the public FiL Design ImageMind node contract."""

from __future__ import annotations

from enum import Enum
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field


class WidgetKind(str, Enum):
    """Frontend rendering hint for a single widget."""

    COMBO = "combo"            # native dropdown, options fixed
    SEGMENTED = "segmented"   # Random/Fixed-style two/three-state pill
    CHIP_GRID = "chip_grid"    # multi-column grid of chips
    CHIP_LIST = "chip_list"    # scrollable chip list, optional search
    NUMBER = "number"         # int/float numeric field (math expressions ok)
    SLIDER = "slider"          # ranged slider + number
    BOOLEAN = "boolean"       # checkbox / toggle
    STRING = "string"         # plain text / textarea
    COLOR = "color"            # color picker (8 presets)
    DICT = "dict"             # opaque dict pass-through (no UI)
    CUSTOM = "custom"          # node-specific DOM widget (e.g. compare canvas)


class WidgetSpec(BaseModel):
    """A single widget on a node body."""

    model_config = ConfigDict(extra="forbid")

    name: str = Field(..., description="Widget name; matches the ComfyUI INPUT_TYPES key.")
    kind: WidgetKind
    label: str | None = Field(None, description="Optional display label (defaults to the widget name).")
    default: Any = None
    tooltip: str | None = None
    # COMBO / CHIP_GRID / CHIP_LIST:
    values: list[str] | None = None
    columns: int | None = Field(None, description="Layout hint for chip grids.")
    searchable: bool | None = Field(None, description="Whether a chip list shows a search box.")
    # NUMBER / SLIDER:
    min: float | None = None
    max: float | None = None
    step: float | None = None
    # SLIDER only:
    units: str | None = None
    # SEGMENTED:
    options: list[str] | None = None
    # Section grouping ( août — top-of-body collapsible):
    section: str | None = None
    # Visibility dependency: hide this widget when another widget's value
    # does not match `visible_when_value`.
    visible_when: str | None = None
    visible_when_value: Any | None = None


class NodeInputs(BaseModel):
    model_config = ConfigDict(extra="forbid")

    required: list[WidgetSpec] = Field(default_factory=list)
    optional: list[WidgetSpec] = Field(default_factory=list)
    hidden: list[WidgetSpec] = Field(default_factory=list)


class NodeOutput(BaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    type: Literal[
        "INT", "FLOAT", "STRING", "BOOLEAN", "DICT", "IMAGE", "MASK", "LATENT", "ANY"
    ]


class NodeContract(BaseModel):
    """Full frontend contract for a single FiL Design ImageMind node."""

    model_config = ConfigDict(extra="forbid")

    id: str
    title: str
    category: str
    description: str | None = None
    inputs: NodeInputs = Field(default_factory=NodeInputs)
    outputs: list[NodeOutput] = Field(default_factory=list)
    min_size: tuple[int, int] | None = None
    family: str | None = None