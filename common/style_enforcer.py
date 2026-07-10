"""Compatibility facade for FiL_Design_ImageMind style enforcement.

The implementation lives in common.style_engine so the style rule data,
preset support, resolver, and public enforcer stay maintainable.
"""

from __future__ import annotations

from .style_engine.enforcer import StyleEnforcer

__all__ = ["StyleEnforcer"]
