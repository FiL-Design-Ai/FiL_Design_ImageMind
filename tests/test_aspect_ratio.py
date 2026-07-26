import pytest
from FiL_Design_ImageMind.common.logic import compute_aspect_ratio_info, PromptGenerator
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner


def test_compute_aspect_ratio_info_disabled():
    res = compute_aspect_ratio_info(0, 0)
    assert res["active"] is False
    assert res["guidance"] == ""

    res_neg = compute_aspect_ratio_info(-100, 1024)
    assert res_neg["active"] is False


def test_compute_aspect_ratio_info_orientations():
    # Portrait 1024x1536 (2:3 ~ 9:16 approx)
    res_portrait = compute_aspect_ratio_info(1024, 1536)
    assert res_portrait["active"] is True
    assert res_portrait["orientation"] == "Portrait"
    assert "Portrait vertical" in res_portrait["guidance"]
    assert res_portrait["ratio_str"] in ("2:3", "9:16")

    # Landscape 1920x1080 (16:9)
    res_land = compute_aspect_ratio_info(1920, 1080)
    assert res_land["active"] is True
    assert res_land["orientation"] == "Landscape"
    assert res_land["ratio_str"] == "16:9"
    assert "Landscape horizontal" in res_land["guidance"]

    # Square 1024x1024 (1:1)
    res_sq = compute_aspect_ratio_info(1024, 1024)
    assert res_sq["active"] is True
    assert res_sq["orientation"] == "Square"
    assert res_sq["ratio_str"] == "1:1"

    # Ultra-Wide 2560x1080 (21:9 approx)
    res_uw = compute_aspect_ratio_info(2560, 1080)
    assert res_uw["active"] is True
    assert res_uw["orientation"] == "Ultra-Wide"

    # Ultra-Tall 1080x2560
    res_ut = compute_aspect_ratio_info(1080, 2560)
    assert res_ut["active"] is True
    assert res_ut["orientation"] == "Ultra-Tall"


def test_prompt_generator_aspect_ratio_integration():
    pg = PromptGenerator()
    sys_prompt, _, _ = pg.build_system_prompt_bundle(
        width=1024, height=1536, model_type="FLUX"
    )
    assert "Target image dimensions: 1024x1536" in sys_prompt
    assert "Portrait vertical" in sys_prompt

    two_stage = pg.build_system_prompt_two_stage_bundle(
        width=1920, height=1080, model_type="Z-Image Turbo"
    )
    assert "Target image dimensions: 1920x1080" in two_stage["stage1"]["prompt"]
    assert "Target image dimensions: 1920x1080" in two_stage["stage2"]["prompt"]


def test_optic_scanner_fingerprint_includes_dimensions():
    fp1 = FiLOpticScanner.fingerprint_inputs(config={"provider": "ollama", "model": "qwen"}, width=1024, height=1024)
    fp2 = FiLOpticScanner.fingerprint_inputs(config={"provider": "ollama", "model": "qwen"}, width=1024, height=1536)
    assert fp1 != fp2
