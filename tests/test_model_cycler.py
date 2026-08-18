"""Unit tests for FiLModelCycler (Model Cycler node)."""

from __future__ import annotations

from unittest.mock import MagicMock, patch

import pytest
from comfy_api.latest import io

from executor_harness import as_the_executor_calls_it

from FiL_Design_ImageMind.nodes.node_model_cycler import (
    _CYCLE_STATE,
    FiLModelCycler,
    _CycleState,
    _clean_model_name,
    _clear_vram_cache,
    _filter_models,
    _unload_all_models,
)


def test_clean_model_name() -> None:
    assert _clean_model_name("flux1-dev.safetensors") == "flux1-dev"
    assert _clean_model_name("subfolder/my_model.ckpt") == "my_model"
    assert _clean_model_name("sdxl_base_1.0.pth") == "sdxl_base_1.0"
    assert _clean_model_name("custom_name") == "custom_name"


def test_filter_models() -> None:
    models = [
        "flux1-dev.safetensors",
        "flux1-schnell.safetensors",
        "sd_xl_base.safetensors",
        "illustrious_v1.safetensors",
    ]

    assert len(_filter_models(models, "")) == 4
    assert _filter_models(models, "flux*") == [
        "flux1-dev.safetensors",
        "flux1-schnell.safetensors",
    ]
    assert _filter_models(models, "*xl*") == ["sd_xl_base.safetensors"]
    assert _filter_models(models, "illustrious_v1.safetensors") == [
        "illustrious_v1.safetensors"
    ]


def test_fingerprint_inputs() -> None:
    fp_fixed = FiLModelCycler.fingerprint_inputs(
        source_mode="Checkpoints", index=0, auto_advance=False
    )
    assert fp_fixed == "Checkpoints_0"

    fp_auto1 = FiLModelCycler.fingerprint_inputs(
        source_mode="Checkpoints", index=0, auto_advance=True
    )
    assert str(fp_auto1).startswith("Checkpoints_0_")
    assert isinstance(fp_auto1, str)


@patch("FiL_Design_ImageMind.nodes.node_model_cycler._get_checkpoint_names")
def test_execute_checkpoints(mock_get_ckpts: MagicMock) -> None:
    mock_get_ckpts.return_value = ["model_a.safetensors", "model_b.safetensors"]

    with patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_checkpoint"
    ) as mock_load:
        dummy_model = MagicMock()
        dummy_clip = MagicMock()
        dummy_vae = MagicMock()
        mock_load.return_value = (dummy_model, dummy_clip, dummy_vae)

        _CYCLE_STATE.clear()

        out = FiLModelCycler.execute(
            source_mode="Checkpoints",
            model_list="",
            filter_pattern="",
            cycle_mode="Sequential (Loop)",
            index=0,
            auto_advance=True,
            unload_previous=False,
            free_vram=False,
        )

        assert len(out.args) == 5
        model, clip, vae, model_name, clean_name = out.args

        assert model == dummy_model
        assert clip == dummy_clip
        assert vae == dummy_vae
        assert model_name == "model_a.safetensors"
        assert clean_name == "model_a"


@patch("FiL_Design_ImageMind.nodes.node_model_cycler._get_diffusion_model_names")
def test_execute_diffusion_models(mock_get_unets: MagicMock) -> None:
    mock_get_unets.return_value = ["flux1-dev.safetensors", "zimage.safetensors"]

    with patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_unet"
    ) as mock_load_unet:
        dummy_unet = MagicMock()
        mock_load_unet.return_value = dummy_unet

        dummy_clip = MagicMock()
        dummy_vae = MagicMock()

        _CYCLE_STATE.clear()

        out = FiLModelCycler.execute(
            source_mode="Diffusion Models",
            model_list="",
            filter_pattern="",
            cycle_mode="Sequential (Loop)",
            index=0,
            auto_advance=True,
            unload_previous=False,
            free_vram=False,
            weight_dtype="fp8_e4m3fn",
            clip=dummy_clip,
            vae=dummy_vae,
        )

        model, clip, vae, model_name, clean_name = out.args
        assert model == dummy_unet
        assert clip == dummy_clip
        assert vae == dummy_vae
        assert model_name == "flux1-dev.safetensors"
        assert clean_name == "flux1-dev"
        mock_load_unet.assert_called_with("flux1-dev.safetensors", "fp8_e4m3fn")


def test_execute_multiline_list_with_comments() -> None:
    multiline = "model_a.safetensors\n# model_b.safetensors\nmodel_c.safetensors"

    with patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_checkpoint"
    ) as mock_load:
        mock_load.return_value = (MagicMock(), MagicMock(), MagicMock())
        _CYCLE_STATE.clear()

        out = FiLModelCycler.execute(
            source_mode="Checkpoints",
            model_list=multiline,
            cycle_mode="Sequential (Loop)",
            index=0,
            auto_advance=True,
            unload_previous=False,
            free_vram=False,
        )

        model, clip, vae, model_name, clean_name = out.args
        assert model_name == "model_a.safetensors"


@patch("FiL_Design_ImageMind.nodes.node_model_cycler._get_checkpoint_names")
def test_ping_pong_and_stop_modes(mock_get_ckpts: MagicMock) -> None:
    mock_get_ckpts.return_value = ["m1.ckpt", "m2.ckpt", "m3.ckpt"]

    with patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_checkpoint"
    ) as mock_load:
        mock_load.return_value = (MagicMock(), None, None)

        _CYCLE_STATE.clear()

        # Ping-Pong run 1 -> m1 (idx 0)
        out1 = FiLModelCycler.execute(
            source_mode="Checkpoints", cycle_mode="Ping-Pong", index=0, auto_advance=True
        )
        assert out1.args[3] == "m1.ckpt"

        # Ping-Pong run 2 -> m2 (idx 1)
        out2 = FiLModelCycler.execute(
            source_mode="Checkpoints", cycle_mode="Ping-Pong", index=0, auto_advance=True
        )
        assert out2.args[3] == "m2.ckpt"

        # Sequential (Stop) mode
        # Parked one past the end: the position Sequential (Stop) reaches
        # after the last model, and the one that must refuse to run again.
        _CYCLE_STATE.clear()
        _CYCLE_STATE["-"] = _CycleState(
            position=3, direction=1, signature=("m1.ckpt", "m2.ckpt", "m3.ckpt"), start_index=0
        )
        out_stop = FiLModelCycler.execute(
            source_mode="Checkpoints", cycle_mode="Sequential (Stop)", index=0, auto_advance=True
        )
        assert out_stop.block_execution
        assert "Cycle stopped" in out_stop.block_execution


@patch("FiL_Design_ImageMind.nodes.node_model_cycler._get_checkpoint_names")
def test_skip_on_error(mock_get_ckpts: MagicMock) -> None:
    mock_get_ckpts.return_value = ["bad_model.ckpt", "good_model.ckpt"]

    def _side_effect(name: str):
        if name == "bad_model.ckpt":
            raise RuntimeError("Corrupt checkpoint header")
        return (MagicMock(), MagicMock(), MagicMock())

    with patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_checkpoint",
        side_effect=_side_effect,
    ):
        _CYCLE_STATE.clear()

        # With skip_on_error=True -> skips bad_model and loads good_model
        out = FiLModelCycler.execute(
            source_mode="Checkpoints",
            cycle_mode="Sequential (Loop)",
            skip_on_error=True,
        )
        assert out.args[3] == "good_model.ckpt"

        # With skip_on_error=False -> raises RuntimeError
        _CYCLE_STATE.clear()
        with pytest.raises(RuntimeError):
            FiLModelCycler.execute(
                source_mode="Checkpoints",
                cycle_mode="Sequential (Loop)",
                skip_on_error=False,
            )


def test_vram_cleanup_helpers() -> None:
    # Verify helper calls execute without raising exceptions
    _unload_all_models()
    _clear_vram_cache()


@patch("FiL_Design_ImageMind.nodes.node_model_cycler._get_checkpoint_names")
def test_execute_empty_candidates(mock_get_ckpts: MagicMock) -> None:
    mock_get_ckpts.return_value = []

    out = FiLModelCycler.execute(
        source_mode="Checkpoints",
        model_list="",
        filter_pattern="",
    )

    # Stopping has to reach every output, not just MODEL. An `ExecutionBlocker`
    # placed in slot 0 by hand left CLIP, VAE and the two names carrying `None`
    # and `""`, and whatever hung off those ran anyway. `block_execution` is
    # what makes the host broadcast — and it only does so for a NodeOutput that
    # also carries positional values, since `execution.py` skips a result of
    # `None` outright, leaving the node with no outputs at all.
    assert out.block_execution
    assert out.result is not None
    assert len(out.result) == len(FiLModelCycler.GET_SCHEMA().outputs)


# ── Where a node stands in its cycle ───────────────────────────────────────
#
# The position lives in the process between prompts, so the only question that
# matters is whose position it is. It used to be keyed by
# `f"{source_mode}_{len(candidates)}"`, which two cyclers over two lists of the
# same length share — the ordinary shape of an A/B comparison, and each of them
# then saw every other model. The key is now the node's own id, which reaches a
# V3 node through `cls.hidden` and nowhere else, so these go through the
# executor's own class clone rather than calling `execute` directly.


def _cycler_for(node_id: str):
    return as_the_executor_calls_it(
        FiLModelCycler, hidden={io.Hidden.unique_id: node_id}
    )


def _loaded(*names: str):
    """Patch the checkpoint loader and report which names it was asked for."""
    return patch(
        "FiL_Design_ImageMind.nodes.node_model_cycler._load_checkpoint",
        side_effect=lambda name: (MagicMock(), MagicMock(), MagicMock()),
    )


def _run(execute, model_list: str, **kwargs) -> str:
    out = execute(
        source_mode="Checkpoints",
        model_list=model_list,
        cycle_mode=kwargs.pop("cycle_mode", "Sequential (Loop)"),
        auto_advance=kwargs.pop("auto_advance", True),
        unload_previous=False,
        free_vram=False,
        **kwargs,
    )
    return out.args[3]


LIST_A = "a1.safetensors\na2.safetensors"
LIST_B = "b1.safetensors\nb2.safetensors"


def test_two_cyclers_of_equal_length_keep_separate_positions() -> None:
    _CYCLE_STATE.clear()
    first = _cycler_for("11")
    second = _cycler_for("22")

    with _loaded():
        # Both start at the top of their own list.
        assert _run(first, LIST_A) == "a1.safetensors"
        assert _run(second, LIST_B) == "b1.safetensors"
        # And each advances by one — not by two, which is what a shared
        # counter produced.
        assert _run(first, LIST_A) == "a2.safetensors"
        assert _run(second, LIST_B) == "b2.safetensors"


def test_the_node_id_is_what_separates_them() -> None:
    """The same id is the same cycle, however many times it is asked."""
    _CYCLE_STATE.clear()
    execute = _cycler_for("11")

    with _loaded():
        assert _run(execute, LIST_A) == "a1.safetensors"
        assert _run(_cycler_for("11"), LIST_A) == "a2.safetensors"

    assert set(_CYCLE_STATE) == {"11"}


def test_editing_the_list_restarts_the_cycle() -> None:
    _CYCLE_STATE.clear()
    execute = _cycler_for("11")

    with _loaded():
        assert _run(execute, LIST_A) == "a1.safetensors"
        # A different list is a different walk; carrying position 1 into it
        # would open on the second model of a list the user just typed.
        assert _run(execute, LIST_B) == "b1.safetensors"


def test_a_new_starting_index_restarts_the_cycle() -> None:
    """Only a *changed* index restarts — an unchanged one is just the cycle running."""
    _CYCLE_STATE.clear()
    three = "m1.ckpt\nm2.ckpt\nm3.ckpt"
    execute = _cycler_for("11")

    with _loaded():
        assert _run(execute, three) == "m1.ckpt"
        assert _run(execute, three) == "m2.ckpt"
        # Same index as the two runs before: keep walking, do not start over.
        assert _run(execute, three, index=0) == "m3.ckpt"
        # Typing a new one is a new starting point, taken immediately.
        assert _run(execute, three, index=1) == "m2.ckpt"
        assert _run(execute, three, index=1) == "m3.ckpt"


def test_the_run_reports_the_live_position_for_the_panel() -> None:
    """`index` cannot show this — it is where the cycle began, not where it is."""
    _CYCLE_STATE.clear()
    execute = _cycler_for("11")

    with _loaded():
        first = execute(
            source_mode="Checkpoints",
            model_list=LIST_A,
            unload_previous=False,
            free_vram=False,
        )
        second = execute(
            source_mode="Checkpoints",
            model_list=LIST_A,
            unload_previous=False,
            free_vram=False,
        )

    assert first.ui["fil_cycler"][0] == {
        "position": 1,
        "total": 2,
        "model_name": "a1.safetensors",
        "clean_name": "a1",
    }
    assert second.ui["fil_cycler"][0]["position"] == 2
    assert second.ui["fil_cycler"][0]["clean_name"] == "a2"


def test_sort_models_logic() -> None:
    models = ["# zebra.safetensors", "alpha.safetensors", "beta.safetensors"]

    # Test name_asc
    sorted_asc = sorted(models, key=lambda x: x.replace("#", "").strip().lower())
    assert sorted_asc[0] == "alpha.safetensors"
    assert sorted_asc[1] == "beta.safetensors"

    # Test enabled_first
    sorted_enabled = sorted(models, key=lambda x: 1 if x.startswith("#") else 0)
    assert sorted_enabled[0] == "alpha.safetensors"
    assert sorted_enabled[1] == "beta.safetensors"
    assert sorted_enabled[2] == "# zebra.safetensors"
