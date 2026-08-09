"""The Provider Loader's "unload LLM after prompt" switch, end to end.

The helper's own request shapes live in test_provider_runtime.py; here the
question is whether the nodes that spend the model actually call it — and
only when the switch is on.
"""

from __future__ import annotations

from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

_execute = as_the_executor_calls_it(FiLOpticScanner)


def _config(**overrides):
    base = {"provider": "lmstudio", "model": "google/gemma-4-e4b"}
    base.update(overrides)
    return base


def test_scanner_unloads_the_local_model_after_the_prompt_when_the_switch_is_on(stub_scanner_generate, monkeypatch):
    from FiL_Design_ImageMind.nodes import node_scanner

    stub_scanner_generate(lambda **kwargs: "A lone lighthouse on a cliff at dusk.")
    unloaded = []
    monkeypatch.setattr(node_scanner, "unload_local_model", lambda provider, model: unloaded.append((provider, model)))

    result = _execute(config=_config(unload_llm=True), agent="None", image=None, prompt="a lighthouse")

    assert not str(result[0]).startswith("Ошибка")
    assert unloaded == [("lmstudio", "google/gemma-4-e4b")]


def test_scanner_keeps_the_model_loaded_when_the_switch_is_off(stub_scanner_generate, monkeypatch):
    from FiL_Design_ImageMind.nodes import node_scanner

    stub_scanner_generate(lambda **kwargs: "A lone lighthouse on a cliff at dusk.")
    unloaded = []
    monkeypatch.setattr(node_scanner, "unload_local_model", lambda provider, model: unloaded.append((provider, model)))

    _execute(config=_config(), agent="None", image=None, prompt="a lighthouse")

    assert unloaded == []


_DECOMPOSITION_JSON = (
    '{"subject": "lighthouse", "lighting": "dusk glow", "composition": "centered",'
    ' "style": "painterly", "full_prompt": "a lone lighthouse at dusk"}'
)


class _DecomposerStubClient:
    def generate(self, **kwargs):
        return _DECOMPOSITION_JSON


def test_decomposer_unloads_the_local_model_after_the_prompt(monkeypatch):
    from FiL_Design_ImageMind.nodes import node_decomposer

    monkeypatch.setattr(node_decomposer, "_model_client", _DecomposerStubClient())
    unloaded = []
    monkeypatch.setattr(node_decomposer, "unload_local_model", lambda provider, model: unloaded.append((provider, model)))

    result = node_decomposer.FiLImageDecomposer.execute(
        config=_config(provider="ollama", model="qwen3-vl:8b", unload_llm=True),
        prompt="a lighthouse",
    )

    assert result[4] == "a lone lighthouse at dusk"
    assert unloaded == [("ollama", "qwen3-vl:8b")]


def test_decomposer_keeps_the_model_loaded_when_the_switch_is_off(monkeypatch):
    from FiL_Design_ImageMind.nodes import node_decomposer

    monkeypatch.setattr(node_decomposer, "_model_client", _DecomposerStubClient())
    unloaded = []
    monkeypatch.setattr(node_decomposer, "unload_local_model", lambda provider, model: unloaded.append((provider, model)))

    node_decomposer.FiLImageDecomposer.execute(
        config=_config(provider="ollama", model="qwen3-vl:8b"),
        prompt="a lighthouse",
    )

    assert unloaded == []


def test_cinema_rig_polish_unloads_the_local_model_after_the_rewrite(monkeypatch):
    from FiL_Design_ImageMind.nodes import node_cinema_rig

    class _PolishStubClient:
        def generate(self, **kwargs):
            return "  polished rig text  "

    monkeypatch.setattr(node_cinema_rig, "_model_client", _PolishStubClient())
    unloaded = []
    monkeypatch.setattr(node_cinema_rig, "unload_local_model", lambda provider, model: unloaded.append((provider, model)))

    polished = node_cinema_rig.FiLCinemaRig._polish(
        _config(unload_llm=True), "an assembled rig",
    )

    assert polished == "polished rig text"
    assert unloaded == [("lmstudio", "google/gemma-4-e4b")]
