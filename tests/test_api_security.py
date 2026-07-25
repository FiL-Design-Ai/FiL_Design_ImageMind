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


def test_unknown_provider_and_invalid_auth_payload():
    from FiL_Design_ImageMind.server_routes import apply_auth_payload, build_models_response

    assert build_models_response("unknown") == ({"error": "unknown provider"}, 404)
    assert apply_auth_payload({"accounts": []}) == ({"error": "accounts must be an object"}, 400)
    assert apply_auth_payload({"accounts": {"unknown": {}}}) == ({"error": "invalid provider account"}, 400)
