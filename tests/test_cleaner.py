from __future__ import annotations

from FiL_Design_ImageMind.nodes import node_cleaner


def test_unload_drops_everything_without_sorting_by_class_name(monkeypatch):
    class Management:
        current_loaded_models = [object(), object()]
        calls = []

        @staticmethod
        def get_torch_device():
            return "cuda"

        @classmethod
        def unload_all_models(cls):
            cls.calls.append("unload_all")

    monkeypatch.setattr(node_cleaner, "_get_model_management", lambda: Management)
    node_cleaner._unload_all_models()
    assert Management.calls == ["unload_all"]


def test_unload_falls_back_to_free_memory(monkeypatch):
    class Management:
        current_loaded_models = [object()]
        calls = []

        @staticmethod
        def get_torch_device():
            return "cuda"

        @staticmethod
        def unload_all_models():
            raise AttributeError("older comfy")

        @classmethod
        def free_memory(cls, amount, device, keep_loaded):
            cls.calls.append((device, keep_loaded))

    monkeypatch.setattr(node_cleaner, "_get_model_management", lambda: Management)
    node_cleaner._unload_all_models()
    assert Management.calls == [("cuda", [])]


def test_nothing_loaded_is_a_no_op(monkeypatch):
    class Management:
        current_loaded_models = []

        @staticmethod
        def unload_all_models():
            raise AssertionError("must not run")

    monkeypatch.setattr(node_cleaner, "_get_model_management", lambda: Management)
    node_cleaner._unload_all_models()


def test_cache_flush_leaves_models_loaded(monkeypatch):
    class Management:
        calls = []

        @classmethod
        def soft_empty_cache(cls):
            cls.calls.append("soft_empty_cache")

        @staticmethod
        def unload_all_models():
            raise AssertionError("flushing the cache must not unload models")

    monkeypatch.setattr(node_cleaner, "_get_model_management", lambda: Management)
    node_cleaner._clear_vram()
    assert Management.calls == ["soft_empty_cache"]


def test_cleanup_switches_call_only_requested_operations(monkeypatch):
    calls = []
    monkeypatch.setattr(node_cleaner, "_unload_all_models", lambda: calls.append("models"))
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: calls.append("vram"))
    marker = object()

    res1 = node_cleaner.FiLNeuroCleaner.execute(clean_vram=True, unload_models=True, anything=marker)
    assert res1[0] is marker
    assert calls == ["models", "vram"]

    calls.clear()
    res2 = node_cleaner.FiLNeuroCleaner.execute(clean_vram=True, unload_models=False, anything=marker)
    assert res2[0] is marker
    assert calls == ["vram"]

    calls.clear()
    res3 = node_cleaner.FiLNeuroCleaner.execute(clean_vram=False, unload_models=True, anything=marker)
    assert res3[0] is marker
    assert calls == ["models"]


def test_disabled_cleanup_is_pure_passthrough(monkeypatch):
    monkeypatch.setattr(node_cleaner, "_clear_vram", lambda: (_ for _ in ()).throw(AssertionError("must not run")))
    monkeypatch.setattr(node_cleaner, "_unload_all_models", lambda: (_ for _ in ()).throw(AssertionError("must not run")))
    marker = object()
    result = node_cleaner.FiLNeuroCleaner.execute(clean_vram=False, unload_models=False, anything=marker)
    assert result[0] is marker


def test_fingerprint_changes_only_when_there_is_work_to_do():
    fingerprint = node_cleaner.FiLNeuroCleaner.fingerprint_inputs
    assert fingerprint(clean_vram=False, unload_models=False) == 0.0
    assert fingerprint(clean_vram=True, unload_models=False) != 0.0
    assert fingerprint(clean_vram=False, unload_models=True) != 0.0
    # The four switches this replaced cannot reach the node: ComfyUI only passes
    # inputs that are links or still in the schema, so a dropped widget input is
    # never in kwargs. Defaults are what an old API-format prompt gets.
    assert fingerprint() != 0.0
