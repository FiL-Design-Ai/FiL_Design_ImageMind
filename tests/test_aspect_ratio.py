import requests
from FiL_Design_ImageMind.common.logic import compute_aspect_ratio_info, PromptGenerator
from FiL_Design_ImageMind.common.data import get_visible_style_keys
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

# The scanner reports per-image progress through `cls.hidden.unique_id`,
# which only the clone the executor prepares carries — calling
# `FiLOpticScanner.execute()` straight from a test does not have it.
# See tests/executor_harness.py.
_execute = as_the_executor_calls_it(FiLOpticScanner)

PHOTO_STYLE = get_visible_style_keys("photo_style")[0]


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
    sys_prompt, _, _, _ = pg.build_system_prompt_bundle(
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


# ── Node level: the guidance has to survive every path to the provider ──────
# The builder-level tests above only prove the string is assembled. These drive
# the node with a stubbed provider and assert on the system
# prompt that actually reached it, per mode.

def _dims_line(system_prompt: str) -> str:
    return next((ln for ln in system_prompt.split("\n") if "Target image dimensions" in ln), "")


def _run_scanner(stub_scanner_generate, generate, **kwargs):
    stub_scanner_generate(generate)
    return _execute(
        config={"provider": "ollama", "model": "llama3.2-vision"},
        agent="None",
        image=None,
        prompt="a scene",
        **kwargs,
    )


def test_hybrid_sends_dimensions(stub_scanner_generate):
    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        return "generated prompt text"

    _, _, meta = _run_scanner(stub_scanner_generate, fake_generate, width=1536, height=1024)

    assert len(calls) == 1
    assert "Target image dimensions: 1536x1024" in calls[0]["system_prompt"]
    assert "Landscape horizontal" in calls[0]["system_prompt"]
    assert meta["target_dimensions"] == {
        "width": 1536, "height": 1024, "aspect_ratio": "3:2", "orientation": "Landscape",
    }
    assert "Target image dimensions" in meta["sent_prompt"]["system"]


def test_two_stage_sends_dimensions_to_both_stages(stub_scanner_generate):
    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        return "stage output long enough to pass the length guard"

    _run_scanner(
        stub_scanner_generate, fake_generate,
        prompt_mode="Two-Stage", photo_style=PHOTO_STYLE, width=1024, height=1536,
    )

    assert len(calls) == 2, "expected a stage-1 and a stage-2 call"
    for call in calls:
        assert "Target image dimensions: 1024x1536" in call["system_prompt"]
        assert "Portrait vertical" in call["system_prompt"]


def test_timeout_fallback_keeps_dimensions(stub_scanner_generate):
    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        if len(calls) == 1:
            raise requests.exceptions.Timeout("stage 1 timed out")
        return "hybrid fallback result"

    _, _, meta = _run_scanner(
        stub_scanner_generate, fake_generate,
        prompt_mode="Two-Stage", photo_style=PHOTO_STYLE, width=2560, height=1080,
    )

    assert meta["fallback_reason"] == "two_stage_stage1_timeout"
    # The hybrid retry must not be a bare prompt — it carries the same guidance.
    assert "Target image dimensions: 2560x1080" in calls[-1]["system_prompt"]
    assert "Ultra-Wide horizontal" in calls[-1]["system_prompt"]


def test_batch_sends_dimensions_per_image(stub_scanner_generate):
    import torch

    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        return "per image prompt"

    stub_scanner_generate(fake_generate)
    _execute(
        config={"provider": "ollama", "model": "llama3.2-vision"},
        agent="None",
        image=torch.zeros(2, 8, 8, 3),
        prompt="a scene",
        width=1024, height=1024,
    )

    assert len(calls) == 2, "one call per image in the batch"
    for call in calls:
        assert "Target image dimensions: 1024x1024" in call["system_prompt"]
        assert "Square" in call["system_prompt"]


def test_unlinked_dimensions_add_no_guidance(stub_scanner_generate):
    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        return "generated prompt text"

    _, _, meta = _run_scanner(stub_scanner_generate, fake_generate)

    assert _dims_line(calls[0]["system_prompt"]) == ""
    assert meta["target_dimensions"] is None


def test_linked_dimensions_are_sanitized(stub_scanner_generate):
    """A link can hand over None or a float — neither may reach the guidance."""
    calls = []

    def fake_generate(**kw):
        calls.append(kw)
        return "generated prompt text"

    _, _, meta_none = _run_scanner(stub_scanner_generate, fake_generate, width=None, height=None)
    assert meta_none["target_dimensions"] is None

    calls.clear()
    _, _, meta_float = _run_scanner(stub_scanner_generate, fake_generate, width=1536.0, height=1024.0)
    assert meta_float["target_dimensions"]["width"] == 1536
    assert "Target image dimensions: 1536x1024" in calls[0]["system_prompt"]
