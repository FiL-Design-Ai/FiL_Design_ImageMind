"""Unit tests for 🧬 LoRA Loader dynamic stack (FiLLoraLoader)."""

from __future__ import annotations

import os
import tempfile

from executor_harness import as_the_executor_calls_it, executor_call

from FiL_Design_ImageMind.nodes.node_lora_loader import (
    FiLLoraLoader,
    _clean_lora_name,
    _extract_trigger_words,
    _filter_loras,
    _parse_lora_line,
    trigger_words_from_path,
)


def test_parse_lora_line_plain():
    spec = _parse_lora_line("style_v1.safetensors", 1.0, 1.0)
    assert spec is not None
    assert spec.filename == "style_v1.safetensors"
    assert spec.enabled is True
    assert spec.strength_model == 1.0
    assert spec.strength_clip == 1.0


def test_parse_lora_line_disabled():
    spec = _parse_lora_line("# style_v1.safetensors:0.8:0.5", 1.0, 1.0)
    assert spec is not None
    assert spec.filename == "style_v1.safetensors"
    assert spec.enabled is False
    assert spec.strength_model == 0.8
    assert spec.strength_clip == 0.5


def test_clean_lora_name():
    assert _clean_lora_name("subfolder/style_v1.safetensors") == "style_v1"
    assert _clean_lora_name("subfolder\\cyber_v2.ckpt") == "cyber_v2"
    assert _clean_lora_name("") == ""


def test_filter_loras():
    loras = ["cyberpunk_v1.safetensors", "anime_v2.safetensors", "cyber_v2.safetensors"]
    filtered = _filter_loras(loras, "cyber*")
    assert filtered == ["cyberpunk_v1.safetensors", "cyber_v2.safetensors"]


def test_extract_trigger_words_sidecar_txt(monkeypatch):
    with tempfile.TemporaryDirectory() as tmpdir:
        lora_file = os.path.join(tmpdir, "test_style.safetensors")
        txt_file = os.path.join(tmpdir, "test_style.txt")

        with open(lora_file, "w") as f:
            f.write("fake lora")
        with open(txt_file, "w", encoding="utf-8") as f:
            f.write("cyberpunk, neon glow, futuristic city")

        import folder_paths

        def mock_get_full_path(folder_type, filename):
            if folder_type == "loras" and filename == "test_style.safetensors":
                return lora_file
            return None

        monkeypatch.setattr(folder_paths, "get_full_path", mock_get_full_path)

        words = _extract_trigger_words("test_style.safetensors")
        assert words == "cyberpunk, neon glow, futuristic city"


def test_execute_disabled_lines_returns_passthrough():
    out = FiLLoraLoader.execute(
        model="dummy_model",
        clip="dummy_clip",
        lora_list="# style_v1.safetensors:0.8:0.5\n# cyber_v2.safetensors",
    )
    assert out[0] == "dummy_model"
    assert out[1] == "dummy_clip"
    assert out[2] == ""
    assert "Bypass" in out[3]


# ── Nothing wired in ───────────────────────────────────────────────────────
#
# Both sockets are optional, so the executor runs the node with neither of them
# and every argument at its default — the state a node has the moment it is
# dropped on the canvas. It used to answer with `None` on the MODEL wire, and
# the run died later inside KSampler over a value whose origin nothing named.
# Driven through the executor's own call assembly, because "the executor omits
# an unconnected optional input" is exactly the belief that has to be checked
# rather than restated.


def test_nothing_connected_stops_the_run_here():
    call = executor_call(
        FiLLoraLoader,
        {
            "lora_list": "",
            "filter_pattern": "",
            "strength_model": 1.0,
            "strength_clip": 1.0,
            "skip_on_error": True,
        },
    )
    assert "model" not in call.kwargs and "clip" not in call.kwargs

    out = as_the_executor_calls_it(FiLLoraLoader)(**call.kwargs)

    assert out.block_execution
    assert "LoRA Loader" in out.block_execution
    # The host broadcasts the block to every output only for a NodeOutput that
    # also carries positional values: `execution.py` skips any result that is
    # `None`, so a bare `block_execution=` would leave the node with no outputs
    # at all and the downstream lookup failing instead of blocking.
    assert out.result is not None
    assert len(out.result) == len(FiLLoraLoader.GET_SCHEMA().outputs)


def test_a_model_alone_is_enough():
    """Flux-shaped wiring: MODEL in, no CLIP. Not the same as nothing wired."""
    out = as_the_executor_calls_it(FiLLoraLoader)(model="dummy_model", lora_list="")

    assert not out.block_execution
    assert out[0] == "dummy_model"
    assert out[1] is None


def test_the_api_answers_the_panel_with_the_words_the_run_applies(tmp_path, monkeypatch):
    """`trigger_words` — the field the panel reads, under the name it reads it by.

    The API sent `trained_words`, filled only from Civitai json, and the panel
    asked for `trigger_words`. Nothing errored: the 📋 button on each row simply
    never appeared and "copy all active triggers" always came back empty, while
    the node itself happily emitted the words from the `.txt` sidecar beside the
    file. Same reader on both sides now, so the panel cannot show one thing
    while the run applies another.
    """
    import folder_paths

    from FiL_Design_ImageMind.server_routes import _inspect_model_file

    loras = tmp_path / "loras"
    loras.mkdir()
    (loras / "style_v1.safetensors").write_bytes(b"x")
    (loras / "style_v1.txt").write_text("neon glow, wet asphalt", encoding="utf-8")

    monkeypatch.setattr(
        folder_paths, "folder_names_and_paths", {"loras": ([str(loras)], {".safetensors"})}
    )

    info = _inspect_model_file("loras", "style_v1.safetensors")

    assert info["trigger_words"] == "neon glow, wet asphalt"
    assert info["trigger_words"] == _extract_trigger_words("style_v1.safetensors")


def test_trigger_words_read_straight_from_a_resolved_path():
    """What the API answers the panel with, without going through folder_paths."""
    with tempfile.TemporaryDirectory() as tmpdir:
        lora_file = os.path.join(tmpdir, "test_style.safetensors")
        with open(lora_file, "w") as f:
            f.write("fake lora")
        with open(os.path.join(tmpdir, "test_style.txt"), "w", encoding="utf-8") as f:
            f.write("neon glow")

        assert trigger_words_from_path(lora_file) == "neon glow"
        assert trigger_words_from_path(os.path.join(tmpdir, "absent.safetensors")) == ""
