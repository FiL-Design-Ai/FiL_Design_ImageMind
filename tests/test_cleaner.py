from __future__ import annotations

from FiL_LLM.nodes import node_cleaner


def test_model_classification_uses_nested_runtime_types():
    DiffusionModel = type("DiffusionModel", (), {})
    ControlNet = type("ControlNet", (), {})
    VAE = type("VAE", (), {})
    assert node_cleaner._classify_loaded_model(DiffusionModel()) == "diffusion"
    assert node_cleaner._classify_loaded_model(ControlNet()) == "control"
    assert node_cleaner._classify_loaded_model(VAE()) == "vae"


def test_selected_models_are_unloaded_and_others_kept(monkeypatch):
    DiffusionModel = type("DiffusionModel", (), {})
    SomethingElse = type("SomethingElse", (), {})
    diffusion = DiffusionModel()
    other = SomethingElse()

    class Management:
        current_loaded_models = [diffusion, other]
        calls = []

        @staticmethod
        def get_torch_device():
            return "cuda"

        @classmethod
        def free_memory(cls, amount, device, keep_loaded):
            cls.calls.append((amount, device, keep_loaded))

    monkeypatch.setattr(node_cleaner, "_get_model_management", lambda: Management)
    node_cleaner._unload_models({"diffusion"})
    assert Management.calls[0][1:] == ("cuda", [other])


def test_cleanup_switches_call_only_requested_operations(monkeypatch):
    calls = []
    monkeypatch.setattr(node_cleaner, "_unload_models", lambda selected: calls.append(("models", selected)))
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: calls.append(("vram",)))
    monkeypatch.setattr(node_cleaner, "_clear_ram", lambda *args: calls.append(("ram", args)))
    marker = object()
    result = node_cleaner.FiLNeuroCleaner.execute(
        clean_vram=True, offload_model=True, offload_cache=False,
        unload_diffusion=True, unload_clip=False, unload_vae=False,
        unload_control=False, unload_lora=False, clean_ram=True,
        clean_file_cache=False, clean_processes=False, clean_dlls=False,
        retry_times=2, anything=marker,
    )
    assert result[0] is marker
    assert calls == [("models", {"diffusion"}), ("ram", (False, False, False, 2))]


def test_disabled_cleanup_is_pure_passthrough(monkeypatch):
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: (_ for _ in ()).throw(AssertionError("must not run")))
    marker = object()
    result = node_cleaner.FiLNeuroCleaner.execute(clean_vram=False, clean_ram=False, anything=marker)
    assert result[0] is marker


def test_force_flag_triggers_cleanup_regardless_of_selection(monkeypatch):
    calls = []
    monkeypatch.setattr(node_cleaner, "_unload_models", lambda selected: calls.append(("models", selected)))
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: calls.append(("vram",)))
    marker = object()
    result = node_cleaner.FiLNeuroCleaner.execute(
        clean_vram=True, offload_model=False, unload_diffusion=False,
        unload_clip=False, unload_vae=False, unload_control=False,
        unload_lora=False, clean_ram=False, force=True, anything=marker,
    )
    assert result[0] is marker
    assert ("vram",) in calls


def test_all_disabled_with_force_does_nothing(monkeypatch):
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: (_ for _ in ()).throw(AssertionError("must not run")))
    monkeypatch.setattr(node_cleaner, "_unload_models", lambda s: (_ for _ in ()).throw(AssertionError("must not run")))
    marker = object()
    result = node_cleaner.FiLNeuroCleaner.execute(
        clean_vram=False, offload_model=False, unload_diffusion=False,
        unload_clip=False, unload_vae=False, unload_control=False,
        unload_lora=False, clean_ram=False, force=False, anything=marker,
    )
    assert result[0] is marker
