from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WORKFLOWS = sorted((ROOT / "docs" / "workflows").glob("*.json"))
CURRENT_TYPES = {"LoadImage", "FiLProviderLoader", "FiLOpticScanner"}
REMOVED_TYPES = {
    "CyberDeckProviderLoader", "LLMServerLoaderPro", "OpticScanner",
    "PromptChat", "CyberSeed", "FiLDataSniffer",
}


def test_user_documentation_lists_only_current_nodes():
    files = [ROOT / "README.md", ROOT / "docs" / "README.ru.md", ROOT / "docs" / "getting-started.md", *WORKFLOWS]
    combined = "\n".join(path.read_text(encoding="utf-8") for path in files)
    for removed in REMOVED_TYPES:
        assert not re.search(rf"(?<![A-Za-z0-9_]){re.escape(removed)}(?![A-Za-z0-9_])", combined)


def test_example_workflows_are_valid_and_use_current_types():
    assert len(WORKFLOWS) == 2
    for path in WORKFLOWS:
        workflow = json.loads(path.read_text(encoding="utf-8"))
        assert {node["type"] for node in workflow["nodes"]} <= CURRENT_TYPES
        node_ids = {node["id"] for node in workflow["nodes"]}
        link_ids = {link[0] for link in workflow["links"]}
        assert workflow["last_node_id"] == max(node_ids)
        assert workflow["last_link_id"] == max(link_ids)
        for link_id, source, _slot, target, _target_slot, _type in workflow["links"]:
            assert link_id in link_ids
            assert source in node_ids
            assert target in node_ids


def test_workflow_widget_values_match_serialized_widget_inputs():
    for path in WORKFLOWS:
        workflow = json.loads(path.read_text(encoding="utf-8"))
        for node in workflow["nodes"]:
            widget_inputs = [
                item for item in node.get("inputs", [])
                if "widget" in item and item.get("type") != "IMAGEUPLOAD"
            ]
            assert len(node.get("widgets_values", [])) == len(widget_inputs)


def test_reported_version_matches_pyproject():
    """`/health` reports `common.brand.VERSION` — it must not drift from the package."""
    from FiL_Design_ImageMind.common.brand import VERSION

    pyproject = (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    declared = re.search(r'^version\s*=\s*"([^"]+)"', pyproject, re.MULTILINE)
    assert declared, "pyproject.toml has no version"
    assert VERSION == declared.group(1)


def test_readme_documents_every_registered_node():
    """The GitHub landing page must list all node-ids the pack registers."""
    import ast

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    node_ids: set[str] = set()
    for path in (ROOT / "nodes").glob("node_*.py"):
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        for node in ast.walk(tree):
            if isinstance(node, ast.keyword) and node.arg == "node_id":
                if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                    node_ids.add(node.value.value)
    assert node_ids, "no node ids found"
    missing = sorted(nid for nid in node_ids if nid not in readme)
    assert not missing, f"README does not document: {missing}"
