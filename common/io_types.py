"""Custom ComfyUI V3 socket types for the FiL_LLM project."""

from comfy_api.latest import io

FilProviderConfig = io.Custom("FIL_PROVIDER_CONFIG")
"""
Socket-typed provider configuration dict.

Connects FiLProviderLoader (output) → FiLOpticScanner (input),
preventing accidental connection of incompatible sockets on the graph.
"""
