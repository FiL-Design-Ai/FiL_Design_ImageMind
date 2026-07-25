from __future__ import annotations

from unittest.mock import patch

from FiL_Design_ImageMind.common.logic import StyleManager
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner


def test_style_manager_resolves_multiple_styles():
    sm = StyleManager()
    photo_keys = "📷 КАМЕРЫ/📷 Disposable 90s | 📷 КАМЕРЫ/📸 Polaroid 600"
    style_key, style_prompt = sm.resolve_style_selection("photo_style", photo_keys)
    
    assert "Disposable 90s" in style_key
    assert "Polaroid 600" in style_key
    assert "Kodak FunSaver" in style_prompt
    assert "Polaroid 600 instant film" in style_prompt


@patch("FiL_Design_ImageMind.common.models.ModelClient.generate")
def test_optic_scanner_execute_with_multiple_styles(mock_generate):
    mock_generate.return_value = "A descriptive futuristic street scene with detailed lighting."
    
    config = {
        "provider": "ollama",
        "model": "qwen2.5:7b",
        "temperature": 0.7,
        "max_tokens": 1024,
    }
    
    out = FiLOpticScanner.execute(
        config=config,
        prompt="A futuristic street scene",
        photo_style="📷 КАМЕРЫ/📷 Disposable 90s | 📷 КАМЕРЫ/📸 Polaroid 600",
        art_style="🎨 ИЛЛЮСТРАЦИЯ/🎎 Ретро-аниме 80х",
    )
    
    assert out is not None
    # Check that system prompt sent to model included all style overlays
    called_kwargs = mock_generate.call_args.kwargs
    sys_prompt = called_kwargs.get("system_prompt", "")
    assert "Kodak FunSaver" in sys_prompt or "Photo style overlay" in sys_prompt
