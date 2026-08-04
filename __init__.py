"""FiL Design ImageMind custom nodes for ComfyUI (V3 API)."""

try:
    from typing import override
except ImportError:  # Python 3.10/3.11 — the decorator is documentation-only
    def override(method):  # type: ignore[misc]
        return method

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
        from .nodes.node_upscale import FiLUpscaleTileCalc
        from .nodes.node_upscale_simple import FiLUpscaleSimple
        from .nodes.node_tile_assembly import FiLTileAssembly
        from .nodes.node_ksampler import FiLKSampler
        from .nodes.node_hiresfix import FiLHighResFix
        from .nodes.node_noise_control import FiLNoiseControl
        from .nodes.node_decomposer import FiLImageDecomposer
        from .nodes.node_style_mixer import FiLStyleMixer
        from .nodes.node_cinema_rig import FiLCinemaRig
        from .nodes.node_color_wizard import FiLColorWizard
        from .nodes.node_switch import FiLSignalSwitch
        from .nodes.node_dataset import FiLDatasetForge
        from .nodes.node_channel import FiLChannel
        return filter_release_nodes([
            FiLSeed,
            FiLProviderLoader,
            FiLOpticScanner,
            FiLNeuroCleaner,
            FiLUpscaleTileCalc,
            FiLUpscaleSimple,
            FiLTileAssembly,
            FiLKSampler,
            FiLHighResFix,
            FiLNoiseControl,
            FiLImageDecomposer,
            FiLStyleMixer,
            FiLCinemaRig,
            FiLColorWizard,
            FiLSignalSwitch,
            FiLDatasetForge,
            FiLChannel,
        ])


async def comfy_entrypoint() -> FiLExtension:
    """ComfyUI V3 extension entry point."""
    server_routes.register_routes()
    return FiLExtension()
