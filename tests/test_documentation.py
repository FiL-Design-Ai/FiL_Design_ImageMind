from __future__ import annotations

import json
import re
from pathlib import Path

import pytest


ROOT = Path(__file__).resolve().parents[1]
WORKFLOWS = sorted((ROOT / "docs" / "workflows").glob("*.json"))
CURRENT_TYPES = {"LoadImage", "FiLProviderLoader", "FiLOpticScanner"}
REMOVED_TYPES = {
    "CyberDeckProviderLoader", "LLMServerLoaderPro", "OpticScanner",
    "PromptChat", "CyberSeed", "FiLDataSniffer",
    "FiLBeforeAfterCompare", "FiLHelp",
}
# Pages that must describe the pack as it ships. `architecture.md` and the
# changelog are deliberately excluded — they name removed nodes on purpose.
USER_FACING = (
    ROOT / "README.md",
    ROOT / "docs" / "getting-started.md",
    ROOT / "docs" / "index.html",
)


def test_user_documentation_lists_only_current_nodes():
    files = [*USER_FACING, *WORKFLOWS]
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


def test_workflow_widget_values_cover_every_widget_input():
    """Every widget input must have a value at its own position.

    This used to assert the two lengths were *equal*, which ComfyUI does not
    honour — it was only ever green because both examples were stale in
    matching ways. A graph serialized by 1.47.10 carries extras that belong to
    no declared input:

      * `control_after_generate`, inserted right after a seed widget;
      * the Vue panel's state object, always last on our nodes;
      * `upload` on LoadImage, which the old filter excluded from one side of
        the comparison but the host writes a value for anyway.

    So the real invariant is a prefix one: `widgets_values` is at least as long
    as the widget-input list, and never shorter — a short list is what silently
    shifts values onto the wrong fields.
    """
    for path in WORKFLOWS:
        workflow = json.loads(path.read_text(encoding="utf-8"))
        for node in workflow["nodes"]:
            widget_inputs = [item for item in node.get("inputs", []) if "widget" in item]
            values = node.get("widgets_values", [])
            assert len(values) >= len(widget_inputs), (
                f"{path.name}: {node['type']} has {len(values)} values for "
                f"{len(widget_inputs)} widget inputs — values would land on the wrong fields"
            )


def test_reported_version_matches_pyproject():
    """`/health` reports `common.brand.VERSION` — it must not drift from the package."""
    from FiL_Design_ImageMind.common.brand import VERSION

    pyproject = (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    declared = re.search(r'^version\s*=\s*"([^"]+)"', pyproject, re.MULTILINE)
    assert declared, "pyproject.toml has no version"
    assert VERSION == declared.group(1)


def test_landing_page_version_matches_pyproject():
    """The Pages footer shipped `v1.1.0` after the release settled on 1.0.0."""
    pyproject = (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    declared = re.search(r'^version\s*=\s*"([^"]+)"', pyproject, re.MULTILINE).group(1)

    page = (ROOT / "docs" / "index.html").read_text(encoding="utf-8")
    shown = re.findall(r"v(\d+\.\d+\.\d+)", page)
    assert shown, "docs/index.html shows no version"
    assert set(shown) == {declared}, f"landing page shows {sorted(set(shown))}, package is {declared}"


def _registered_node_ids() -> set[str]:
    import ast

    node_ids: set[str] = set()
    for path in (ROOT / "nodes").glob("node_*.py"):
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        for node in ast.walk(tree):
            if isinstance(node, ast.keyword) and node.arg == "node_id":
                if isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
                    node_ids.add(node.value.value)
    assert node_ids, "no node ids found"
    return node_ids


def test_landing_pages_document_every_registered_node():
    """README and the Pages site must list every shipped node."""
    node_ids = _registered_node_ids()
    for page in (ROOT / "README.md", ROOT / "docs" / "index.html"):
        text = page.read_text(encoding="utf-8")
        missing = sorted(nid for nid in node_ids if nid not in text)
        assert not missing, f"{page.name} does not document: {missing}"


def test_readme_style_counts_match_the_libraries():
    """The numbers README quotes must be the numbers the pack ships.

    On 2026-07-29 the README still advertised "158 photo + 130 art presets" and
    a "288-preset" Style Mixer catalogue against real libraries of 163, 129 and
    401 — the six styles added in a4404cb never reached the docs, in either
    language half. Counts are derived here, so the next library change fails
    this test instead of quietly making the README wrong again.
    """
    import re
    from pathlib import Path

    from FiL_Design_ImageMind.common.data import get_all_style_keys, get_visible_style_keys

    photo = len(get_visible_style_keys("photo_style"))
    art = len(get_visible_style_keys("art_style"))
    catalogue = len(get_all_style_keys())

    readme = (Path(__file__).resolve().parents[1] / "README.md").read_text(encoding="utf-8")

    pairs = re.findall(r"(\d+)\s*(?:photo|фото)\s*\+\s*(\d+)\s*(?:art|арт)", readme)
    assert pairs, "README no longer states a photo+art preset count in either language"
    for found_photo, found_art in pairs:
        assert (int(found_photo), int(found_art)) == (photo, art), (
            f"README says {found_photo} photo + {found_art} art; libraries hold {photo} + {art}"
        )

    quoted = re.findall(r"(\d+)[- ](?:preset|пресет)", readme)
    assert quoted, "README no longer states the Style Mixer catalogue size"
    for value in quoted:
        assert int(value) == catalogue, (
            f"README quotes a {value}-preset catalogue; the mixer offers {catalogue}"
        )


def test_workflow_widget_inputs_match_the_current_node_schema(monkeypatch):
    """The shipped example graphs must describe the nodes as they are today.

    `test_workflow_widget_values_match_serialized_widget_inputs` compares the
    two halves of a saved node against each other, so a graph whose halves went
    stale together stayed green. Both examples had exactly that until they were
    regenerated: FiLProviderLoader carried 14 widgets for a schema with 7, and
    FiLOpticScanner carried `temperature`/`max_tokens`/`max_image_side` — which
    moved to the Provider Loader — while missing `agent_focus`. ComfyUI reads
    widgets_values positionally, so opening either example landed values on the
    wrong fields without a word of warning.

    `force_input` inputs are excluded: they are sockets, not widgets. `width`
    and `height` on the scanner have defaults *and* `force_input=True`, and a
    first pass at this test counted them as widgets — the live node exposes 15,
    not 17. The host was asked; it disagreed with the schema reading, and the
    host won.
    """
    import importlib
    import asyncio
    import json
    from pathlib import Path

    monkeypatch.setenv("FIL_RELEASE_ALL", "1")
    package = importlib.import_module("FiL_Design_ImageMind")
    ext = asyncio.run(package.comfy_entrypoint())
    schema_widgets = {}
    for node_class in asyncio.run(ext.get_node_list()):
        schema = node_class.GET_SCHEMA()
        schema_widgets[schema.node_id] = [
            i.id
            for i in schema.inputs
            if getattr(i, "default", None) is not None and not getattr(i, "force_input", False)
        ]

    workflows = sorted((Path(__file__).resolve().parents[1] / "docs" / "workflows").glob("*.json"))
    assert workflows, "no example workflows found"

    drifted = {}
    for path in workflows:
        graph = json.loads(path.read_text(encoding="utf-8"))
        for node in graph.get("nodes", []):
            expected = schema_widgets.get(node.get("type"))
            if expected is None:
                continue
            saved = [i["name"] for i in node.get("inputs", []) if "widget" in i]
            # Which widgets, not what order. The order is the host's to decide —
            # ComfyUI 1.47.10 puts the multiline fields last, so the scanner
            # serializes as `agent, agent_focus, detail_level, …, prompt,
            # negative_prompt, custom_style` while the schema declares `prompt`
            # third. An earlier version of this test compared the sequences and
            # failed on files the host itself had just written: nothing in Python
            # can know that ordering, so nothing in Python should assert it.
            missing = [n for n in expected if n not in saved]
            stale = [n for n in saved if n not in expected]
            if missing or stale:
                drifted[f"{path.name}:{node['type']}"] = {"missing": missing, "stale": stale}

    assert not drifted, f"example workflows describe an older schema: {drifted}"
