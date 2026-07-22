"""FiL Design ImageMind custom nodes for ComfyUI (V3 API)."""

import os
from typing import override

from comfy_api.latest import ComfyExtension, io

from . import server_routes
from .common.release_gate import filter_release_nodes

WEB_DIRECTORY = "./frontend/dist"


class FiLExtension(ComfyExtension):
    @override
    async def get_node_list(self) -> list[type[io.ComfyNode]]:
        from .nodes.node_seed import FiLSeed
        from .nodes.node_provider import FiLProviderLoader
        from .nodes.node_scanner import FiLOpticScanner
        from .nodes.node_cleaner import FiLNeuroCleaner
        from .nodes.node_compare import FiLBeforeAfterCompare
        from .nodes.node_upscale import FiLUpscaleTileCalc
        from .nodes.node_upscale_simple import FiLUpscaleSimple
        from .nodes.node_tile_assembly import FiLTileAssembly
        from .nodes.node_ksampler import FiLKSampler
        from .nodes.node_hiresfix import FiLHighResFix
        from .nodes.node_noise_control import FiLNoiseControl
        return filter_release_nodes([
            FiLSeed,
            FiLProviderLoader,
            FiLOpticScanner,
            FiLNeuroCleaner,
            FiLBeforeAfterCompare,
            FiLUpscaleTileCalc,
            FiLUpscaleSimple,
            FiLTileAssembly,
            FiLKSampler,
            FiLHighResFix,
            FiLNoiseControl,
        ])


async def comfy_entrypoint() -> FiLExtension:
    """ComfyUI V3 extension entry point."""
    server_routes.register_routes()
    return FiLExtension()
