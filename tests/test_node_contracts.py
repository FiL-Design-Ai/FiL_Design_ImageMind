from __future__ import annotations

import importlib
import asyncio

from FiL_Design_ImageMind.common.brand import CATEGORY_ROOT

from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner
from executor_harness import as_the_executor_calls_it

# The scanner reports per-image progress through `cls.hidden.unique_id`,
# which only the clone the executor prepares carries — calling
# `FiLOpticScanner.execute()` straight from a test does not have it.
# See tests/executor_harness.py.
_execute = as_the_executor_calls_it(FiLOpticScanner)


EXPECTED_IDS = {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLUpscaleTileCalc",
    "FiLUpscaleSimple",
    "FiLTileAssembly",
    "FiLKSampler",
    "FiLHighResFix",
    "FiLNoiseControl",
    "FiLImageDecomposer",
    "FiLStyleMixer",
    "FiLCinemaRig",
    "FiLColorWizard",
    "FiLSignalSwitch",
    "FiLDatasetForge",
    "FiLChannel",
    "FiLModelCycler",
    "FiLLoraLoader",
}


def _all_node_ids(monkeypatch) -> set[str]:
    """Node-ids of every node class, with the release gate bypassed."""
    monkeypatch.setenv("FIL_RELEASE_ALL", "1")
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    node_classes = asyncio.run(ext.get_node_list())
    return {c.GET_SCHEMA().node_id for c in node_classes}


def test_every_node_class_has_a_frontend_contract(monkeypatch):
    """Guards the gap that shipped FiLColorWizard without a contract.

    Derives both sides instead of comparing two hand-maintained lists, so a new
    node cannot be registered while the frontend contract layer stays unaware.
    """
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    node_ids = _all_node_ids(monkeypatch)
    contract_ids = set(NODE_SCHEMAS)

    assert not node_ids - contract_ids, (
        "node classes without a contract in common/contracts/registry.py: "
        f"{sorted(node_ids - contract_ids)}"
    )
    assert not contract_ids - node_ids, (
        "contracts for node ids that no node class defines: "
        f"{sorted(contract_ids - node_ids)}"
    )


def test_contract_widgets_exist_in_the_node_schema(monkeypatch):
    """Every contract widget must map to a real schema input (or be declared UI-only).

    Caught a `seed` widget that stayed in the FiLProviderLoader contract after
    the input was dropped from the node — the panel advertised a field the
    backend could never receive.
    """
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS, UI_ONLY_WIDGETS

    monkeypatch.setenv("FIL_RELEASE_ALL", "1")
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())

    stale: dict[str, list[str]] = {}
    for node_class in asyncio.run(ext.get_node_list()):
        schema = node_class.GET_SCHEMA()
        contract = NODE_SCHEMAS.get(schema.node_id)
        if contract is None:
            continue
        schema_inputs = {i.id for i in schema.inputs}
        allowed = schema_inputs | UI_ONLY_WIDGETS.get(schema.node_id, set())
        widgets = list(contract.inputs.required) + list(contract.inputs.optional)
        unknown = sorted({w.name for w in widgets} - allowed)
        if unknown:
            stale[schema.node_id] = unknown

    assert not stale, f"contract widgets with no matching schema input: {stale}"


def test_every_node_class_has_a_frontend_module(monkeypatch):
    """Every node id must have a `nodes2/nodes/*.ts` module wired into the registry."""
    import re
    from pathlib import Path

    registry_ts = (
        Path(__file__).resolve().parents[1] / "frontend" / "src" / "nodes2" / "nodeRegistry.ts"
    )
    source = registry_ts.read_text(encoding="utf-8")
    imported = set(re.findall(r"import \{ (\w+) \} from \"@/nodes2/nodes/", source))
    listed = set(re.findall(r"^  (\w+),$", source, flags=re.MULTILINE))

    assert imported == listed, (
        f"nodeRegistry.ts imports and module list disagree: {imported ^ listed}"
    )
    assert len(listed) == len(_all_node_ids(monkeypatch)), (
        f"nodeRegistry.ts registers {len(listed)} modules for "
        f"{len(_all_node_ids(monkeypatch))} node classes"
    )


def test_package_has_comfy_entrypoint():
    package = importlib.import_module("FiL_Design_ImageMind")
    assert hasattr(package, "comfy_entrypoint")
    assert callable(package.comfy_entrypoint)
    assert package.WEB_DIRECTORY == "./frontend/dist"


def test_entrypoint_returns_all_nodes():
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    node_classes = asyncio.run(ext.get_node_list())
    node_ids = {c.GET_SCHEMA().node_id for c in node_classes}
    assert node_ids == EXPECTED_IDS


def test_contracts_use_fil_design_imagemind_categories_and_valid_schema():
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    node_classes = asyncio.run(ext.get_node_list())
    for node_class in node_classes:
        schema = node_class.GET_SCHEMA()
        assert schema.category.startswith(f"{CATEGORY_ROOT}/")


def test_seed_passthrough():
    from FiL_Design_ImageMind.nodes.node_seed import FiLSeed

    result = FiLSeed.execute(seed=123)
    assert result[0] == 123

    result = FiLSeed.execute(seed=0)
    assert result[0] == 0

    result = FiLSeed.execute(seed=0xFFFFFFFFFFFFFFFF)
    assert result[0] == 0xFFFFFFFFFFFFFFFF



def test_cleaner_passthrough_when_cleanup_disabled():
    from FiL_Design_ImageMind.nodes.node_cleaner import FiLNeuroCleaner

    marker = object()
    result = FiLNeuroCleaner.execute(clean_vram=False, unload_models=False, anything=marker)
    assert result[0] is marker


def test_scanner_returns_clear_error_without_model():

    result = _execute(config={}, prompt="test")
    assert result[0] == "Ошибка: модель не выбрана в Provider Loader."
    assert result[1] == "{}"
    assert result[2] == {}


def test_provider_loader_does_not_expose_api_key():
    from FiL_Design_ImageMind.nodes.node_provider import FiLProviderLoader

    result = FiLProviderLoader.execute(provider="ollama", model="qwen3-vl")
    config = result[0]
    assert config["provider"] == "ollama"
    assert config["model"] == "qwen3-vl"
    assert "api_key" not in config
    assert "account_id" not in config


def test_scanner_text_only_success(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "ready prompt")
    result = _execute(
        config={"provider": "ollama", "model": "qwen3"}, prompt="red sports car"
    )
    assert result[0] == "ready prompt"
    assert result[2]["provider"] == "ollama"
    assert '"provider": "ollama"' in result[1]


def test_scanner_rejects_non_vision_model_before_processing():

    result = _execute(
        config={"provider": "ollama", "model": "plain-text-model"}, image=object()
    )
    assert "не поддерживает анализ изображений" in result[0]


def test_scanner_rejects_placeholder_model():
    from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

    assert FiLOpticScanner.validate_inputs(config={"provider": "ollama", "model": "(no models)"}) is not True
    result = _execute(
        config={"provider": "ollama", "model": "(no models)"}, image=object()
    )
    assert "не выбрана действующая модель" in result[0]



def test_scanner_no_image_no_text_returns_error():

    result = _execute(config={"provider": "ollama", "model": "qwen3"}, prompt="")
    assert "подключи изображение или введи текст" in result[0]


def test_scanner_empty_prompt_with_image_succeeds(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client, _processor

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "described image")
    monkeypatch.setattr(_processor, "process_batch", lambda img: (["img0"], 64, 64))
    fake_image = [type("Frame", (), {"cpu": lambda self: self, "numpy": lambda self: type("N", (), {"tobytes": lambda b=b"x" * 128: b"x" * 128})()})()]
    result = _execute(
        config={"provider": "ollama", "model": "qwen3-vl"}, prompt="", image=fake_image
    )
    assert result[0] == "described image"


def test_scanner_custom_style_unicode(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "styled unicode result")
    result = _execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", custom_style="стиль с юникодом 🔥",
    )
    assert result[0] == "styled unicode result"
    assert result[2]["decision_trace"]["style_selected"] is True


def test_scanner_response_format_short(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: "short")
    result = _execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", response_format="short",
    )
    assert result[0] == "short"


def test_scanner_response_format_json(monkeypatch):
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client

    monkeypatch.setattr(_model_client, "generate", lambda **kwargs: '{"key": "value"}')
    result = _execute(
        config={"provider": "ollama", "model": "qwen3"},
        prompt="test", response_format="json",
    )
    assert "key" in result[0]
    assert "value" in result[0]


def test_scanner_auth_error_hides_raw_exception_text(monkeypatch):
    """A 401 from the provider must surface as the safe generic message from
    safe_provider_error(), never the raw exception text (which can contain
    the rejected key or other account details)."""
    import requests
    from FiL_Design_ImageMind.nodes.node_scanner import _model_client

    def _boom(**kwargs):
        resp = requests.Response()
        resp.status_code = 401
        raise requests.exceptions.HTTPError(
            "401 Client Error: invalid api key 'sk-live-secretkey123' for url: "
            "https://api.example.com/v1/chat",
            response=resp,
        )

    monkeypatch.setattr(_model_client, "generate", _boom)
    result = _execute(
        config={"provider": "ollama", "model": "qwen3"}, prompt="red sports car"
    )
    assert result[0] == "Ошибка: API-ключ отклонён провайдером."
    assert "sk-live-secretkey123" not in result[0]
    assert "sk-live-secretkey123" not in result[1]


def test_scanner_non_vision_error_never_leaks_api_key():
    """The 'image sent to a non-vision model' error path must not leak
    config['api_key'] into the message, metadata_json, or metadata_dict."""

    result = _execute(
        config={"provider": "ollama", "model": "plain-text-model", "api_key": "SECRET_KEY_123"},
        image=object(),
    )
    assert "SECRET_KEY_123" not in result[0]
    assert "SECRET_KEY_123" not in result[1]
    assert "SECRET_KEY_123" not in str(result[2])


def _contract_widgets(contract):
    return list(contract.inputs.required) + list(contract.inputs.optional)


def test_contract_numeric_ranges_match_the_node_schema(monkeypatch):
    """A widget must not refuse a value its node would have accepted.

    Guards the ♻️ Seed bug found on 2026-07-29: `nodes/node_seed.py` allowed a
    seed up to 0xFFFFFFFFFFFFFFFF while its contract capped the panel at
    999999999999, so the widget rejected values the node was happy with. Its
    three sibling seeds in the same registry file were declared correctly —
    only this one was missed, and nothing compared the two numbers.

    Compared as floats because `WidgetSpec.min`/`max` are floats: a 64-bit
    maximum cannot survive JSON and JavaScript intact, so an exact match on
    the integer would fail for every seed in the pack.
    """
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    monkeypatch.setenv("FIL_RELEASE_ALL", "1")
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())

    narrowed: dict[str, list[str]] = {}
    for node_class in asyncio.run(ext.get_node_list()):
        schema = node_class.GET_SCHEMA()
        contract = NODE_SCHEMAS.get(schema.node_id)
        if contract is None:
            continue
        schema_inputs = {i.id: i for i in schema.inputs}
        for widget in _contract_widgets(contract):
            spec = schema_inputs.get(widget.name)
            if spec is None:
                continue
            for edge, tighter in (("min", lambda w, s: w > s), ("max", lambda w, s: w < s)):
                w_val = getattr(widget, edge, None)
                s_val = getattr(spec, edge, None)
                if w_val is None or s_val is None:
                    continue
                if tighter(float(w_val), float(s_val)):
                    narrowed.setdefault(schema.node_id, []).append(
                        f"{widget.name}.{edge}: panel {w_val} vs node {s_val}"
                    )

    assert not narrowed, f"contract ranges narrower than the node accepts: {narrowed}"


def test_contract_option_lists_match_the_node_schema(monkeypatch):
    """A chip list or dropdown must offer everything its node would accept.

    Guards the 🎛️ Style Mixer bug found on 2026-07-29: the node built its style
    options from all four libraries, the contract built them from photo + art
    only, and 112 NSFW styles were reachable through a wired socket but
    impossible to pick in the panel. Both sides now read
    `common.data.get_all_style_keys()`; this test is what keeps them there.

    Only missing options fail. A panel may legitimately offer a placeholder the
    schema has no entry for ("(None)" is one), so extras are ignored.

    Single-entry lists are skipped: that is how this registry spells "the host
    fills this in at runtime". `pixel_upscaler` and `control_net_name` ship as
    `["(none)"]` because their real contents are whichever model files the user
    happens to have installed, which no contract can enumerate.
    """
    from FiL_Design_ImageMind.common.contracts.registry import NODE_SCHEMAS

    monkeypatch.setenv("FIL_RELEASE_ALL", "1")
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())

    unreachable: dict[str, str] = {}
    for node_class in asyncio.run(ext.get_node_list()):
        schema = node_class.GET_SCHEMA()
        contract = NODE_SCHEMAS.get(schema.node_id)
        if contract is None:
            continue
        schema_inputs = {i.id: i for i in schema.inputs}
        for widget in _contract_widgets(contract):
            spec = schema_inputs.get(widget.name)
            offered_list = list(getattr(widget, "values", None) or [])
            offered = set(offered_list)
            accepted = set(getattr(spec, "options", None) or []) if spec else set()
            if not offered or not accepted or len(offered_list) == 1:
                continue
            missing = accepted - offered
            if missing:
                sample = ", ".join(sorted(missing)[:3])
                unreachable[f"{schema.node_id}.{widget.name}"] = (
                    f"{len(missing)} option(s) the panel cannot pick, e.g. {sample}"
                )

    assert not unreachable, f"node options missing from the panel: {unreachable}"
