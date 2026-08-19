from __future__ import annotations

from pathlib import Path


def test_auth_file_is_gitignored():
    root = Path(__file__).resolve().parents[1]
    assert "data/auth.json" in (root / ".gitignore").read_text(encoding="utf-8")


def test_routes_do_not_return_raw_provider_exceptions():
    root = Path(__file__).resolve().parents[1]
    source = (root / "server_routes.py").read_text(encoding="utf-8")
    assert '"error": str(' not in source
    assert "get_safe_provider_accounts" in source


def test_cross_site_detection():
    from FiL_Design_ImageMind.server_routes import is_cross_site_request

    # Blocked: a page on another site posting to our routes.
    assert is_cross_site_request("https://evil.example.com", "127.0.0.1:8188")
    assert is_cross_site_request("http://attacker.test", "localhost:8188")
    # Allowed: same origin, and non-browser callers that send no Origin at all.
    assert not is_cross_site_request("http://127.0.0.1:8188", "127.0.0.1:8188")
    assert not is_cross_site_request("https://Comfy.Example.com", "comfy.example.com")
    assert not is_cross_site_request("", "127.0.0.1:8188")
    assert not is_cross_site_request("https://evil.example.com", "")


def test_remote_provider_base_url_must_be_https_and_public():
    """An attacker-supplied base_url is where the saved API key would be sent."""
    import pytest

    from FiL_Design_ImageMind.common.provider_accounts import validate_base_url

    for bad in (
        "http://evil.example.com/v1",       # plaintext
        "https://127.0.0.1:8080/v1",        # loopback
        "https://192.168.1.10/v1",          # private LAN
        "https://169.254.169.254/latest",   # cloud metadata
        "https://localhost/v1",
        "ftp://example.com/v1",
        "not-a-url",
    ):
        with pytest.raises(ValueError):
            validate_base_url("openrouter", bad)

    assert validate_base_url("openrouter", "https://openrouter.ai/api/v1/") == (
        "https://openrouter.ai/api/v1"
    )


def test_local_provider_base_url_may_stay_on_loopback():
    from FiL_Design_ImageMind.common.provider_accounts import validate_base_url

    assert validate_base_url("ollama", "http://127.0.0.1:11434/") == "http://127.0.0.1:11434"
    assert validate_base_url("lmstudio", "http://192.168.1.50:1234") == "http://192.168.1.50:1234"
    assert validate_base_url("ollama", "") == ""


def test_invalid_base_url_is_rejected_with_400_and_no_exception_text():
    from FiL_Design_ImageMind.server_routes import apply_auth_payload

    payload, status = apply_auth_payload(
        {"accounts": {"openrouter": {"base_url": "https://169.254.169.254/"}}}
    )
    assert status == 400
    assert payload == {"error": "invalid base_url"}


# ── The model inspector must not leave the model folders ────────────────────
#
# `/model_info` and `/model_preview` take a path from the query string, and
# neither route asks who is calling. `folder_paths.get_full_path` normalises
# `..` away before it joins, but the fallbacks that were added for subfolders
# join the caller's string onto a model directory as it stands: a query of
# `path=../../../ComfyUI/main.py` came back with the absolute location, size
# and date of that file, and `/model_preview` served any image sitting beside
# whatever was named. Checked against real model directories rather than a
# stub, because the guard is a comparison between real resolved paths.


def _fake_model_dir(tmp_path, monkeypatch):
    import folder_paths

    models = tmp_path / "models" / "checkpoints"
    models.mkdir(parents=True)
    (models / "inside.safetensors").write_bytes(b"x")
    (tmp_path / "secret.txt").write_text("not a model", encoding="utf-8")

    monkeypatch.setattr(
        folder_paths,
        "folder_names_and_paths",
        {"checkpoints": ([str(models)], {".safetensors"})},
    )
    return models


def test_model_info_refuses_a_path_outside_the_model_folders(tmp_path, monkeypatch):
    from FiL_Design_ImageMind.server_routes import _inspect_model_file

    _fake_model_dir(tmp_path, monkeypatch)

    escaped = _inspect_model_file("checkpoints", "../../secret.txt")
    assert escaped == {"error": "file_not_found", "path": "../../secret.txt"}

    # And the ordinary case still answers, or the guard would be a rename of
    # "the feature is off".
    ok = _inspect_model_file("checkpoints", "inside.safetensors")
    assert "error" not in ok
    assert ok["full_path"].endswith("inside.safetensors")


def test_a_name_in_the_wrong_subfolder_is_not_found_by_basename(tmp_path, monkeypatch):
    """No answering about whichever file happens to share the name.

    The resolver ended with a walk over every model directory matching on the
    basename alone, so `sdxl/style.safetensors` and `flux/style.safetensors`
    were interchangeable — the dialog described whichever copy the walk met
    first, and every miss re-read the whole models tree to do it.
    """
    import folder_paths

    from FiL_Design_ImageMind.server_routes import _inspect_model_file

    models = tmp_path / "models" / "checkpoints"
    (models / "flux").mkdir(parents=True)
    (models / "flux" / "style.safetensors").write_bytes(b"x")

    monkeypatch.setattr(
        folder_paths,
        "folder_names_and_paths",
        {"checkpoints": ([str(models)], {".safetensors"})},
    )

    assert _inspect_model_file("checkpoints", "sdxl/style.safetensors")["error"] == "file_not_found"

    # The real subfolder still resolves, in either slash direction.
    for asked in ("flux/style.safetensors", "flux\\style.safetensors"):
        found = _inspect_model_file("checkpoints", asked)
        assert "error" not in found, asked


def test_a_null_in_the_metadata_does_not_take_the_dialog_down(tmp_path, monkeypatch):
    """`"meta": null` is ordinary in a Civitai record, and it returned a 500.

    `d.get("k", {})` hands back the stored `None` when the key is present and
    null, so the next `.get` raised and the route answered "Server got itself
    in trouble" — reproduced against an installed LoRA on 2026-08-14, where the
    info dialog was dead for that model and no test had noticed. Every image
    uploaded without generation data carries exactly this shape.
    """
    import json

    import folder_paths

    from FiL_Design_ImageMind.server_routes import _inspect_model_file

    loras = tmp_path / "loras"
    loras.mkdir()
    (loras / "x.safetensors").write_bytes(b"x")
    (loras / "x.metadata.json").write_text(
        json.dumps(
            {
                "civitai": {
                    "model": None,
                    "creator": None,
                    "stats": None,
                    "trainedWords": None,
                    "images": [{"meta": None}, {"meta": {"prompt": "a real one"}}, None],
                }
            }
        ),
        encoding="utf-8",
    )
    monkeypatch.setattr(
        folder_paths, "folder_names_and_paths", {"loras": ([str(loras)], {".safetensors"})}
    )

    info = _inspect_model_file("loras", "x.safetensors")

    assert "error" not in info
    assert info["sample_prompts"] == ["a real one"]
    assert info["trained_words"] == []
    # The route serialises the answer, so a value that cannot be is also a 500.
    json.dumps(info)

    # A `civitai` key that is null itself is the same trap one level up.
    (loras / "x.metadata.json").write_text(json.dumps({"civitai": None}), encoding="utf-8")
    assert "error" not in _inspect_model_file("loras", "x.safetensors")


def test_extra_model_paths_are_read_once(monkeypatch):
    """Loading them per request re-read the yaml on every panel open.

    ComfyUI reads these at startup and never again; a folder that gains files
    later is picked up by the host's own mtime check, not by re-reading config.
    """
    from FiL_Design_ImageMind.common import model_folders

    import os

    # The directory scan is the work being counted: it happens once per real
    # pass and not at all once the flag is set. Counting the loader calls
    # instead would pass for the wrong reason on an install that has no
    # `extra_model_paths.yaml` to load.
    scans = 0
    real_listdir = os.listdir

    def counting_listdir(path):
        nonlocal scans
        scans += 1
        return real_listdir(path)

    monkeypatch.setattr(model_folders, "_EXTRA_PATHS_LOADED", False)
    monkeypatch.setattr(os, "listdir", counting_listdir)

    model_folders.ensure_extra_model_paths()
    assert scans == 1

    model_folders.ensure_extra_model_paths()
    model_folders.ensure_extra_model_paths()
    assert scans == 1


def test_civitai_is_only_asked_when_the_caller_asks(tmp_path, monkeypatch):
    """Opening a panel must not phone out or write into the model folder.

    Every panel used to trigger this per listed model on open: a 64 MB read and
    a request to civitai.com each, then a `.metadata.json` and a `.png` written
    next to the user's models without them asking for either.
    """
    from FiL_Design_ImageMind import server_routes

    _fake_model_dir(tmp_path, monkeypatch)

    calls: list[str] = []
    monkeypatch.setattr(
        server_routes,
        "_fetch_civitai_metadata_and_preview",
        lambda path: calls.append(path) or True,
    )

    server_routes._inspect_model_file("checkpoints", "inside.safetensors")
    assert calls == []

    server_routes._inspect_model_file("checkpoints", "inside.safetensors", fetch_remote=True)
    assert len(calls) == 1


def test_unknown_provider_and_invalid_auth_payload():
    from FiL_Design_ImageMind.server_routes import apply_auth_payload, build_models_response

    assert build_models_response("unknown") == ({"error": "unknown provider"}, 404)
    assert apply_auth_payload({"accounts": []}) == ({"error": "accounts must be an object"}, 400)
    assert apply_auth_payload({"accounts": {"unknown": {}}}) == ({"error": "invalid provider account"}, 400)

def test_a_preview_is_found_whatever_the_downloader_called_it(tmp_path, monkeypatch):
    """Every shape a picture beside a model comes in, and the pick order.

    The list knew `.png`, `.preview.png`, `.jpg`, `.jpeg` and `.webp`, which
    leaves out the form ComfyUI Manager and the Civitai helpers write most
    often: `model.preview.jpeg`. Those models showed an empty box in the info
    dialog and no thumbnail in the picker, with nothing on screen to say why.
    """
    from FiL_Design_ImageMind.server_routes import _inspect_model_file

    models = _fake_model_dir(tmp_path, monkeypatch)

    for suffix in (".preview.png", ".preview.jpeg", ".preview.jpg", ".preview.webp",
                   ".png", ".jpg", ".jpeg", ".webp"):
        picture = models / f"inside{suffix}"
        picture.write_bytes(b"fake image bytes")
        found = _inspect_model_file("checkpoints", "inside.safetensors")
        assert found.get("has_preview") is True, f"{suffix} was not looked for"
        assert found["preview_path"].endswith(suffix)
        picture.unlink()

    # And when a model has both, the one somebody chose wins over the one that
    # merely sits there.
    chosen = models / "inside.preview.jpeg"
    stray = models / "inside.png"
    chosen.write_bytes(b"fake jpeg bytes")
    stray.write_bytes(b"fake png bytes")
    assert _inspect_model_file("checkpoints", "inside.safetensors")["preview_path"].endswith(
        ".preview.jpeg"
    )


def test_a_webp_preview_is_labelled_as_an_image():
    """`mimetypes` on a stock Windows Python does not know `.webp`, so the file
    went out as `application/octet-stream`. An `<img>` sniffs and renders it
    anyway; nothing that reads the header does."""
    from FiL_Design_ImageMind.server_routes import PREVIEW_CONTENT_TYPES, PREVIEW_EXTENSIONS

    for ext in PREVIEW_EXTENSIONS:
        bare = ext.replace(".preview", "")
        assert PREVIEW_CONTENT_TYPES[bare].startswith("image/")
    assert PREVIEW_CONTENT_TYPES[".webp"] == "image/webp"
