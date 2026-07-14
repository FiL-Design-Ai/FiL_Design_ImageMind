"""Tests for the Pydantic node-contract layer (`FiL_Design_ImageMind.common.contracts`).
"""

from __future__ import annotations

import pytest

from FiL_Design_ImageMind.common.contracts import (
    CANONICAL_IDS,
    NODE_SCHEMAS,
    get_node_contract,
    get_node_schemas,
    public_node_contracts_v2,
)
from FiL_Design_ImageMind.common.contracts.schema import NodeContract, WidgetKind
from FiL_Design_ImageMind.common.brand import CATEGORY_ROOT

CANONICAL = {
    "FiLSeed",
    "FiLProviderLoader",
    "FiLOpticScanner",
    "FiLNeuroCleaner",
    "FiLBeforeAfterCompare",
    "FiLUpscaleTileCalc",
}


def test_canonical_ids_match_legacy_registry():
    assert set(CANONICAL_IDS) == CANONICAL


def test_node_schemas_export_per_node_json_schema():
    schemas = get_node_schemas()
    assert set(schemas) == CANONICAL
    for node_id, schema in schemas.items():
        assert schema["type"] == "object"
        props = schema["properties"]
        # `id` is a plain str field; Pydantic does not add a `const`, only type.
        assert props["id"]["type"] == "string"
        assert "title" in props
        assert "category" in props
        assert "inputs" in props
        assert "outputs" in props


def test_public_node_contracts_v2_payload_shape():
    payload = public_node_contracts_v2()
    assert set(payload) == {"node_ids", "schemas", "data", "settings_prefix"}
    assert payload["settings_prefix"] == "FiL_Design_ImageMind."
    assert set(payload["node_ids"]) == CANONICAL
    for node_id, info in payload["node_ids"].items():
        assert set(info) == {"title", "category"}
        assert info["category"].startswith(f"{CATEGORY_ROOT}/")
    # `data` carries the per-node model_dump() — needed by the TS generator.
    assert set(payload["data"]) == CANONICAL
    for node_id, node_data in payload["data"].items():
        assert isinstance(node_data, dict)
        assert node_data["id"] == node_id
        assert "inputs" in node_data
        assert "outputs" in node_data


def test_widget_kind_enum_values_are_stable():
    expected = {
        "combo", "segmented", "chip_grid", "chip_list",
        "number", "slider", "boolean", "string", "color", "dict", "custom",
    }
    assert {kind.value for kind in WidgetKind} == expected


def test_optic_scanner_uses_chip_grids_for_agent_and_model_type():
    contract = get_node_contract("FiLOpticScanner")
    by_name = {w.name: w for w in contract.inputs.required}
    assert by_name["agent"].kind is WidgetKind.CHIP_GRID
    assert by_name["model_type"].kind is WidgetKind.CHIP_GRID
    assert by_name["agent"].columns == 3
    assert by_name["detail_level"].columns == 5
    assert by_name["photo_style"].kind is WidgetKind.CHIP_LIST
    assert by_name["photo_style"].searchable is True


def test_seed_contract_has_random_fixed_segmented_and_int_seed():
    contract = get_node_contract("FiLSeed")
    by_name = {w.name: w for w in contract.inputs.required}
    assert by_name["mode"].kind is WidgetKind.SEGMENTED
    assert by_name["mode"].options == ["random", "fixed"]
    assert by_name["seed"].kind is WidgetKind.NUMBER
    assert by_name["seed"].min == 0


def test_compare_contract_modes_match_engine():
    contract = get_node_contract("FiLBeforeAfterCompare")
    by_name = {w.name: w for w in contract.inputs.optional}
    assert by_name["resize_mode"].options == ["Off", "Preview only", "Preview + output"]
    assert by_name["swap"].kind is WidgetKind.SEGMENTED
    assert by_name["max_resolution"].kind is WidgetKind.SLIDER


def test_get_node_contract_raises_on_unknown_id():
    with pytest.raises(KeyError):
        get_node_contract("NotARealNode")


def test_node_contract_models_roundtrip_serialize():
    for contract in NODE_SCHEMAS.values():
        # must be JSON-serializable (no datetime/object leaks)
        as_json = contract.model_json_schema()
        assert isinstance(as_json, dict)
        # instantiate back from dict copy
        roundtrip = NodeContract.model_validate(contract.model_dump())
        assert roundtrip.id == contract.id
        assert roundtrip.title == contract.title
        assert len(roundtrip.inputs.required) == len(contract.inputs.required)