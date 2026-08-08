"""Progress reporting for long-running node work (multi-frame LLM passes, dataset captioning).

Two backends, picked once at import:

* the V3 ``ComfyAPISync.Execution.set_progress`` API — progress arrives as
  ``progress_state`` events, and the optional preview frame travels with node
  metadata, so the UI shows which frame is being processed right now;
* the legacy ``comfy.utils.ProgressBar`` — what the pack used before, and the
  only option on hosts older than ComfyAPI v0.0.2 (this pack still installs
  there, so the fallback is a compatibility boundary, not dead code).

``FilProgress.update`` keeps the absolute call shape the nodes already used
(``ProgressBar.update_absolute``), adding an optional ``preview`` (PIL image
or ``[H, W, C]`` / ``[B, H, W, C]`` tensor) that only the V3 backend forwards.
"""

from __future__ import annotations

from typing import Any

_PROGRESS_API: Any
try:
    from comfy_api.latest import ComfyAPISync

    _PROGRESS_API = ComfyAPISync()
except Exception:  # host older than ComfyAPI v0.0.2 — fall back to ProgressBar
    _PROGRESS_API = None


class FilProgress:
    """Absolute progress reporter bound to one node execution.

    ``node_id`` comes from ``cls.hidden.unique_id`` on V3 nodes; the V3
    backend could also resolve it from the executing context, but every
    caller already holds the real id.
    """

    def __init__(self, total: int, node_id: str | None) -> None:
        self.total = max(1, int(total))
        self.node_id = node_id
        self._legacy_bar: Any = None
        if _PROGRESS_API is None:
            from comfy.utils import ProgressBar

            self._legacy_bar = ProgressBar(self.total, node_id=node_id)

    def update(self, value: int | float, preview: Any = None) -> None:
        """Report absolute progress ``value`` out of ``total``.

        ``preview`` (PIL image or tensor) is forwarded to the UI only on the
        V3 backend; the legacy bar reports numbers alone.
        """
        if self._legacy_bar is not None:
            self._legacy_bar.update_absolute(value, self.total)
            return
        _PROGRESS_API.execution.set_progress(
            value=float(value),
            max_value=float(self.total),
            node_id=self.node_id,
            preview_image=preview,
        )
