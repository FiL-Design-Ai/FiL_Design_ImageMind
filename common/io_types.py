"""Custom ComfyUI V3 socket types for the FiL_Design_ImageMind project."""

from comfy_api.latest import io

FilProviderConfig = io.Custom("FIL_PROVIDER_CONFIG")
"""
Socket-typed provider configuration dict.

Connects FiLProviderLoader (output) → FiLOpticScanner (input),
preventing accidental connection of incompatible sockets on the graph.
"""

FilDict = io.Custom("DICT")
"""
Generic ``DICT`` socket.

Stand-in for ``io.Dict``, which is not present in every ComfyUI build
(removed from ``comfy_api.latest`` in newer releases). ``io.Custom("DICT")``
yields the same ``"DICT"`` wire type and is available across versions, so the
package imports on both old and new ComfyUI.
"""

FilHiresScript = io.Custom("FIL_HIRES_SCRIPT")
"""
Socket-typed HighRes-fix "script" dict.

Connects FiLHighResFix (output) → FiLKSampler (`script` input). Carries an
opaque dict such as ``{"hiresfix": {...}}`` describing the post-sampling
upscale/re-sample pass. Kept as a dedicated socket type so it can only be
wired into FiL nodes that understand it.
"""
