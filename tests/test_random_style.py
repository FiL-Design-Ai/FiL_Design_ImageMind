from FiL_Design_ImageMind.common.data import (
    RANDOM_STYLE_KEY,
    RANDOM_ALL_STYLE_KEY,
    get_style_dropdown_options,
    get_style_mixer_dropdown_options,
    resolve_random_style,
    get_all_style_keys,
    PHOTO_STYLES,
    ART_STYLES,
)
from FiL_Design_ImageMind.common.logic import StyleManager
from FiL_Design_ImageMind.nodes import node_scanner
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner
from FiL_Design_ImageMind.nodes.node_style_mixer import FiLStyleMixer
from executor_harness import as_the_executor_calls_it

_execute_scanner = as_the_executor_calls_it(FiLOpticScanner)
_execute_mixer = as_the_executor_calls_it(FiLStyleMixer)
CONFIG = {"provider": "ollama", "model": "qwen3"}


def _setup(monkeypatch, generate_fn):
    monkeypatch.setattr(node_scanner._model_client, "generate", generate_fn)


def test_random_style_keys_present_in_dropdown_options():
    for category in ["photo_style", "art_style", "nsfw_photo_style", "nsfw_art_style"]:
        opts = get_style_dropdown_options(category)
        assert opts[0] == "None"
        assert opts[1] == RANDOM_STYLE_KEY
        assert opts[2] == RANDOM_ALL_STYLE_KEY
        assert len(opts) > 3

    mixer_opts = get_style_mixer_dropdown_options()
    assert mixer_opts[0] == "(None)"
    assert mixer_opts[1] == RANDOM_STYLE_KEY
    assert mixer_opts[2] == RANDOM_ALL_STYLE_KEY
    assert len(mixer_opts) > 3


def test_resolve_random_style_static_and_none():
    assert resolve_random_style("photo_style", "None") == ("", "")
    assert resolve_random_style("style_mixer", "(None)") == ("", "")
    assert resolve_random_style("photo_style", "") == ("", "")
    assert resolve_random_style("photo_style", None) == ("", "")

    sample_key = next(k for k in PHOTO_STYLES.keys() if k != "None")
    key, prompt = resolve_random_style("photo_style", sample_key)
    assert key == sample_key
    assert len(prompt) > 0


def test_resolve_random_style_category_scoped():
    picked, prompt = resolve_random_style("photo_style", RANDOM_STYLE_KEY, seed=42)
    clean_key = picked.replace(" (🎲 Random)", "")
    assert clean_key in PHOTO_STYLES
    assert len(prompt) > 0

    picked_art, prompt_art = resolve_random_style("art_style", RANDOM_STYLE_KEY, seed=42)
    clean_art_key = picked_art.replace(" (🎲 Random)", "")
    assert clean_art_key in ART_STYLES
    assert len(prompt_art) > 0


def test_resolve_random_style_all():
    all_keys = set(get_all_style_keys())
    picked_all_1, p1 = resolve_random_style("photo_style", RANDOM_ALL_STYLE_KEY, seed=100)
    picked_all_2, p2 = resolve_random_style("style_mixer", RANDOM_ALL_STYLE_KEY, seed=200)

    clean_1 = picked_all_1.replace(" (🎲 Random ALL)", "")
    clean_2 = picked_all_2.replace(" (🎲 Random ALL)", "")
    assert clean_1 in all_keys
    assert clean_2 in all_keys
    assert len(p1) > 0
    assert len(p2) > 0


def test_resolve_random_style_determinism():
    res_1, _ = resolve_random_style("photo_style", RANDOM_STYLE_KEY, seed=777)
    res_2, _ = resolve_random_style("photo_style", RANDOM_STYLE_KEY, seed=777)
    assert res_1 == res_2

    samples = {resolve_random_style("photo_style", RANDOM_STYLE_KEY, seed=i)[0] for i in range(20)}
    assert len(samples) > 1


def test_style_manager_resolves_random_styles():
    manager = StyleManager()
    active_styles = manager.get_active_styles(
        seed=12345,
        photo_style=RANDOM_STYLE_KEY,
        art_style="None",
        nsfw_photo_style="None",
        nsfw_art_style="None",
    )
    assert "photo_style" in active_styles
    resolved_key, prompt = active_styles["photo_style"]
    assert "(🎲 Random)" in resolved_key
    clean_name = resolved_key.replace(" (🎲 Random)", "")
    assert clean_name in PHOTO_STYLES
    assert len(prompt) > 0


def test_optic_scanner_metadata_with_random_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "ancient temple in cinematic lighting")
    _, _, metadata = _execute_scanner(
        config=CONFIG,
        prompt="A mystical ancient temple in the jungle",
        photo_style=RANDOM_STYLE_KEY,
        model_type="Auto/None",
        seed=999,
    )
    dt = metadata["decision_trace"]
    assert dt["style_selected"] is True
    assert "(🎲 Random)" in dt["style_key"]
    actual_name = dt["style_key"].replace(" (🎲 Random)", "")
    assert actual_name in PHOTO_STYLES


def test_optic_scanner_metadata_with_random_all_style(monkeypatch):
    _setup(monkeypatch, lambda **kw: "cyberpunk neo-tokyo neon rain")
    _, _, metadata = _execute_scanner(
        config=CONFIG,
        prompt="Cyberpunk street in neo-tokyo",
        art_style=RANDOM_ALL_STYLE_KEY,
        model_type="Auto/None",
        seed=888,
    )
    dt = metadata["decision_trace"]
    assert dt["style_selected"] is True
    assert "(🎲 Random ALL)" in dt["style_key"]
    actual_name = dt["style_key"].replace(" (🎲 Random ALL)", "")
    all_keys = set(get_all_style_keys())
    assert actual_name in all_keys


def test_style_mixer_resolves_random_styles():
    styled_prompt, style_overlay = _execute_mixer(
        base_prompt="Portrait of an astronaut",
        style_1=RANDOM_ALL_STYLE_KEY,
        weight_1=1.0,
        style_2="(None)",
        style_3="(None)",
        seed=555,
    )
    assert RANDOM_ALL_STYLE_KEY not in styled_prompt
    assert "Portrait of an astronaut" in styled_prompt
    assert len(styled_prompt) > len("Portrait of an astronaut")
