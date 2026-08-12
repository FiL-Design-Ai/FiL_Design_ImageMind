"""Unit tests for FiLModelCycler (Model Cycler node)."""

from __future__ import annotations

from unittest.mock import MagicMock, patch

import pytest
from comfy_execution.graph_utils import ExecutionBlocker

from FiL_Design_ImageMind.nodes.node_model_cycler import (
    FiLModelCycler,
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

        FiLModelCycler._last_index_map.clear()

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

        FiLModelCycler._last_index_map.clear()

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
            clip_in=dummy_clip,
            vae_in=dummy_vae,
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
        FiLModelCycler._last_index_map.clear()

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

        FiLModelCycler._last_index_map.clear()
        FiLModelCycler._ping_pong_direction.clear()

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
        FiLModelCycler._last_index_map.clear()
        FiLModelCycler._last_index_map["Checkpoints_3"] = 3
        out_stop = FiLModelCycler.execute(
            source_mode="Checkpoints", cycle_mode="Sequential (Stop)", index=0, auto_advance=True
        )
        assert isinstance(out_stop.args[0], ExecutionBlocker)


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
        FiLModelCycler._last_index_map.clear()

        # With skip_on_error=True -> skips bad_model and loads good_model
        out = FiLModelCycler.execute(
            source_mode="Checkpoints",
            cycle_mode="Sequential (Loop)",
            skip_on_error=True,
        )
        assert out.args[3] == "good_model.ckpt"

        # With skip_on_error=False -> raises RuntimeError
        FiLModelCycler._last_index_map.clear()
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

    res = out[0]
    assert isinstance(res, ExecutionBlocker)
