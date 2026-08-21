from __future__ import annotations

import fnmatch
import json
import re
from pathlib import Path

import pytest


ROOT = Path(__file__).resolve().parents[1]
WORKFLOWS = sorted((ROOT / "example_workflows").glob("*.json"))
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


def test_the_architecture_note_lists_every_node():
    """`docs/architecture.md` describes the pack to whoever changes it next.

    It had drifted quietly: two nodes missing from its own canonical list, "15"
    registration modules for 19, "9" Vue node bodies, "all fourteen nodes", five
    nodes described as having no panel when every one of them had gained one
    (KSamplerPanel.vue is 1169 lines), and a reference to an import-time
    `assert set(CANONICAL_IDS) == {...}` that had been deliberately removed. A
    document wrong in six places is worse than no document, because it is
    believed.

    The counts are gone from the prose rather than checked here — a number that
    has to be edited whenever a node is added is a number that will be wrong.
    What remains is this: every node the pack registers must be named.
    """
    node_ids = _registered_node_ids()
    text = (ROOT / "docs" / "architecture.md").read_text(encoding="utf-8")
    missing = sorted(nid for nid in node_ids if nid not in text)
    assert not missing, f"docs/architecture.md does not mention: {missing}"


def test_the_adding_a_node_checklist_points_at_checks_that_exist():
    """Its value is the right-hand column: which check catches a skipped step.

    A checklist naming a test that no longer exists teaches whoever follows it
    that the checks are decoration.
    """
    text = (ROOT / "docs" / "adding-a-node.md").read_text(encoding="utf-8")
    referenced = set(re.findall(r"\b(test_\w+\.py|\w+\.test\.ts)\b", text))
    referenced |= set(re.findall(r"\b(tools/\w+\.py)\b", text))

    missing = []
    for name in sorted(referenced):
        if name.startswith("tools/"):
            if not (ROOT / name).is_file():
                missing.append(name)
        elif name.endswith(".test.ts"):
            if not (ROOT / "frontend" / "tests" / name).is_file():
                missing.append(name)
        elif not (ROOT / "tests" / name).is_file():
            missing.append(name)
    assert not missing, f"docs/adding-a-node.md names checks that do not exist: {missing}"


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

    workflows = sorted((Path(__file__).resolve().parents[1] / "example_workflows").glob("*.json"))
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


# ---------------------------------------------------------------------------
# config.example.yaml
# ---------------------------------------------------------------------------


def test_the_shipped_config_example_exists_and_parses():
    """README tells the user to copy this file. It has to be there and be valid
    YAML, or the instruction sends them looking for something that is broken."""
    yaml = pytest.importorskip("yaml")
    example = ROOT / "config.example.yaml"
    assert example.exists(), "README points at config.example.yaml; ship it"
    data = yaml.safe_load(example.read_text(encoding="utf-8"))
    assert isinstance(data, dict) and data, "the example must parse to a non-empty mapping"


def test_the_shipped_config_example_carries_no_credentials():
    """This file is published to the registry, and the obvious way to refresh it
    is to copy someone's working `config.yaml`. That copy would carry keys. The
    example may name environment variables, never their values.
    """
    example = ROOT / "config.example.yaml"
    text = example.read_text(encoding="utf-8")

    vendor_prefixes = re.compile(r"\b(sk-|gsk_|sk-or-|AIza|xai-|hf_)[A-Za-z0-9_\-]{8,}")
    assert not vendor_prefixes.search(text), "a provider key is sitting in config.example.yaml"

    # `api_key_env: "GROQ_API_KEY"` is a variable name and fine; an assignment
    # to a key/token/secret field with anything else in it is not.
    for match in re.finditer(r"(?im)^\s*([a-z_]*(?:key|token|secret|password)[a-z_]*)\s*:\s*(\S.*)$", text):
        field, value = match.group(1), match.group(2).split("#")[0].strip().strip('"\'')
        if field.endswith("_env") or not value:
            continue
        assert re.fullmatch(r"[A-Z0-9_]+|\d+|true|false|null", value), (
            f"{field} looks like a real credential, not a variable name: {value!r}"
        )


# ---------------------------------------------------------------------------
# Style preview thumbnails
# ---------------------------------------------------------------------------


def _preview_map() -> dict[str, str]:
    source = (ROOT / "frontend" / "src" / "generated" / "stylePreviews.ts").read_text(encoding="utf-8")
    return dict(re.findall(r'^\s+"([^"]+)": "([^"]+)"', source, re.M))


def test_every_style_preview_points_at_a_file_that_exists():
    """An entry with no image behind it is worse than no entry at all.

    A style that is absent from the map renders as an emoji + name tile, which
    is fine and by design. A style that is present but whose file is gone
    renders as a broken image. `tools/gen_style_previews.py` names new files
    from md5(key), so a key renamed after its image was made would silently
    orphan it — that has happened once already.
    """
    previews = ROOT / "frontend" / "public" / "style-previews"
    missing = sorted(
        key for key, url in _preview_map().items()
        if not (previews / url.rsplit("/", 1)[1]).exists()
    )
    assert not missing, f"preview entries with no image on disk: {missing}"


def test_style_previews_name_only_styles_that_still_exist():
    """A preview for a deleted style is dead weight shipped to every user."""
    from FiL_Design_ImageMind.common.data import get_all_style_keys

    known = set(get_all_style_keys())
    orphans = sorted(key for key in _preview_map() if key not in known)
    assert not orphans, f"previews for styles the pack no longer has: {orphans}"


def test_the_shipped_bundle_carries_every_preview_image():
    """`frontend/dist` is what reaches the registry; `public` is only the source.

    These are copied at build time, so a preview added without a rebuild would
    be referenced by the bundle and absent from it.
    """
    source = {p.name for p in (ROOT / "frontend" / "public" / "style-previews").glob("*.webp")}
    shipped = {p.name for p in (ROOT / "frontend" / "dist" / "style-previews").glob("*.webp")}
    assert not (source - shipped), f"previews missing from the built bundle: {sorted(source - shipped)}"


# ---------------------------------------------------------------------------
# .comfyignore — what `comfy node publish` actually ships
# ---------------------------------------------------------------------------
#
# `.comfyignore` is a hand-maintained text file, and it is the ONLY thing
# standing between secrets and the registry when someone runs `comfy node
# publish` from a working copy: that command packs the directory as it stands,
# not a clean git checkout, so being merely `.gitignore`d is not enough (see
# the 2026-07-29 audit, which found API.env and data/auth.json sitting outside
# it with nothing but "we always publish from CI" as protection). CI publishes
# from a clean checkout, so this file also has to keep dev tooling and
# repository-only docs out, or an accidental change ships them anyway.
#
# This mirrors gitwildmatch semantics narrowly rather than depending on
# `pathspec` (not a declared dependency of this pack): exact paths, a
# directory prefix via a trailing `/`, a single `**/name/` anywhere-match, and
# one-segment `*` globs — the only forms `.comfyignore` actually uses. Verified
# byte-for-byte against `pathspec.PathSpec.from_lines("gitwildmatch", ...)`
# across all 906 tracked files before this test was written.


def _comfyignore_lines() -> list[str]:
    text = (ROOT / ".comfyignore").read_text(encoding="utf-8")
    return [ln for ln in text.splitlines() if ln.strip() and not ln.strip().startswith("#")]


def _comfyignore_excludes(path: str, patterns: list[str]) -> bool:
    def one(p: str, pattern: str) -> bool:
        if pattern.startswith("**/"):
            pattern = pattern[3:]
            segs = p.split("/")
            return any(one("/".join(segs[i:]), pattern) for i in range(len(segs)))
        if pattern.endswith("/"):
            stem = pattern.rstrip("/")
            return p == stem or p.startswith(stem + "/")
        if "*" in pattern:
            return fnmatch.fnmatch(p, pattern) or fnmatch.fnmatch(p.rsplit("/", 1)[-1], pattern)
        return p == pattern or p.startswith(pattern + "/")

    return any(one(path, pat) for pat in patterns)


def test_comfyignore_keeps_secrets_and_local_state_out_of_the_publish():
    """A local `comfy node publish` packs the working copy as-is — being in
    .gitignore does not stop it. Every one of these must also be named here.
    """
    patterns = _comfyignore_lines()
    must_exclude = [
        "API.env", "data/auth.json", "data/auth.json.backup-2026-01-01",
        "config.yaml", "config.local.yaml", "comfyui_detail.log",
        "logs/fil_design_imagemind.log", ".venv/pyvenv.cfg",
        "common/__pycache__/base.cpython-312.pyc",
    ]
    missed = [p for p in must_exclude if not _comfyignore_excludes(p, patterns)]
    assert not missed, f".comfyignore would ship these: {missed}"


def test_comfyignore_keeps_dev_tooling_and_repo_only_docs_out():
    """Developer tooling and maintainer-only notes are not something an
    installed pack needs, and some (CI config, pre-commit config) only make
    sense inside this repository.
    """
    patterns = _comfyignore_lines()
    must_exclude = [
        "tests/test_documentation.py", "tools/gen_style_previews.py",
        "scripts/dump_contracts.py", "requirements-dev.txt",
        ".pre-commit-config.yaml", ".github/workflows/ci.yml",
        "CLAUDE.md", "audit.md", "audit-next.md", "fix.md", "docs/add-theme.md",
        "docs/adding-a-node.md", "tools/check_all.py",
        "docs/comfyui-css-variables.md", "docs/VERIFICATION.md",
        "docs/wireless.md", "docs/release/RELEASE_CHECKLIST.md",
        "frontend/src/App.vue", "frontend/public/style-previews/x.webp",
        "frontend/tests/widgets3.test.ts", "frontend/node_modules/vue/package.json",
        "frontend/package.json",
        # The sourcemap deliberately is NOT here: it has to ship, or the bundle
        # is unreadable minified code on its own. See
        # test_comfyignore_ships_the_sourcemap_so_the_bundle_stays_reviewable.
    ]
    missed = [p for p in must_exclude if not _comfyignore_excludes(p, patterns)]
    assert not missed, f".comfyignore would ship these: {missed}"


def test_comfyignore_still_ships_what_the_pack_needs_to_run():
    """The exclusion list is broad; it must not swallow the runtime itself."""
    patterns = _comfyignore_lines()
    must_ship = [
        "__init__.py", "server_routes.py", "requirements.txt", "LICENSE",
        "README.md", "CHANGELOG.md", "config.example.yaml",
        "common/models.py", "nodes/node_scanner.py",
        "data/locales/en.json", "example_workflows/fil-image-to-prompt.json",
        "frontend/dist/fil_design_imagemind.js",
        "frontend/dist/style-previews/0112215f4991.webp",
    ]
    shipped_anyway = [p for p in must_ship if _comfyignore_excludes(p, patterns)]
    assert not shipped_anyway, f".comfyignore wrongly excludes: {shipped_anyway}"


def test_comfyignore_ships_the_sourcemap_so_the_bundle_stays_reviewable():
    """The shipped frontend must not be unreadable minified code on its own.

    `fil_design_imagemind.js` is 619 KB of minified, name-mangled JavaScript
    and `frontend/src/` is excluded, so the sourcemap is the only thing in the
    archive that a reviewer — or the registry's scanner — can read the bundle
    against; its `sourcesContent` inlines every source file. The registry
    forbids obfuscated code because it prevents security review, and the
    version history matches: 1.0.0 shipped the map and went Active, 1.1.0
    dropped it and was flagged. Excluding it saves 2.3 MB and risks the
    release, so this asserts it cannot be dropped again quietly.
    """
    patterns = _comfyignore_lines()
    sourcemap = "frontend/dist/fil_design_imagemind.js.map"
    assert not _comfyignore_excludes(sourcemap, patterns), (
        f".comfyignore excludes {sourcemap}: the published bundle would be "
        "minified code with no readable source, which is what got 1.1.0 flagged"
    )
    assert (ROOT / sourcemap).exists(), f"{sourcemap} is missing from the build"
