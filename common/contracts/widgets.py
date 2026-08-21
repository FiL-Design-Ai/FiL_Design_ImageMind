"""Builders for the widget specs a node contract is made of.

Split out of `registry.py` when the contracts moved into `nodes/`, so the
nineteen per-node modules share one definition of what a combo or a slider
is rather than each spelling out `WidgetSpec(...)`.

The leading underscores stay: `_int`, `_float`, `_bool` and `_string` would
otherwise shadow the builtins they are named after, inside modules whose whole
job is describing types.
"""

from __future__ import annotations

from typing import Any
from .schema import WidgetKind, WidgetSpec


def _combo(name: str, values: list[str], default: str, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.COMBO, values=values, default=default, **kw)


# Host-filled option lists.
#
# These used to read `comfy.samplers.KSampler.SAMPLERS` and fall back to a
# single entry when ComfyUI was not importable — which made this module's
# output depend on the machine that ran it. `scripts/dump_contracts.py` on a
# workstation with ComfyUI produced 44 samplers; the same script in a bare
# checkout produced one, and `frontend/src/api/contracts.json` is committed.
# So `npm run gen:contracts` silently baked one developer's install into the
# artifact every user receives, and no check could catch it: any comparison
# would fail on whichever machine was not the one that last generated it.
#
# A contract that cannot be reproduced cannot be guarded, so the live lists are
# not the contract's business. They are the running ComfyUI's: the node reads
# them lazily in `define_schema()` (nodes/node_ksampler.py) and the panel reads
# them off the live widget (`comboOptions` in KSamplerPanel.vue), neither of
# which consults these values. This is the same "the host fills this in"
# spelling already used by `pixel_upscaler` (nodes/upscale.py) and
# `control_net_name` (nodes/hiresfix.py), and
# `test_contract_option_lists_match_the_node_schema` skips single-entry lists
# for exactly that reason.
SAMPLER_PLACEHOLDER = "euler"
SCHEDULER_PLACEHOLDER = "normal"


def _samplers() -> list[str]:
    return [SAMPLER_PLACEHOLDER]


def _schedulers() -> list[str]:
    return [SCHEDULER_PLACEHOLDER]


def _chip_grid(name: str, values: list[str], default: str, columns: int, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.CHIP_GRID, values=values, default=default, columns=columns, **kw
    )


def _chip_list(name: str, values: list[str], default: str | None = None, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.CHIP_LIST, values=values, default=default, searchable=True, **kw
    )


def _segmented(name: str, options: list[str], default: str, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.SEGMENTED, options=options, default=default, **kw)


def _number(name: str, default: int | float, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.NUMBER, default=default, **kw)


def _int(name: str, default: int, minv: int | None = None, maxv: int | None = None, step: int = 1, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.NUMBER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _float(name: str, default: float, minv: float | None = None, maxv: float | None = None, step: float = 0.05, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.NUMBER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _slider(name: str, default: float, minv: float, maxv: float, step: float = 0.05, **kw: Any) -> WidgetSpec:
    return WidgetSpec(
        name=name, kind=WidgetKind.SLIDER, default=default, min=minv, max=maxv, step=step, **kw
    )


def _bool(name: str, default: bool, **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.BOOLEAN, default=default, **kw)


def _string(name: str, default: str = "", **kw: Any) -> WidgetSpec:
    return WidgetSpec(name=name, kind=WidgetKind.STRING, default=default, **kw)
