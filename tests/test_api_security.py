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


def test_unknown_provider_and_invalid_auth_payload():
    from FiL_Design_ImageMind.server_routes import apply_auth_payload, build_models_response

    assert build_models_response("unknown") == ({"error": "unknown provider"}, 404)
    assert apply_auth_payload({"accounts": []}) == ({"error": "accounts must be an object"}, 400)
    assert apply_auth_payload({"accounts": {"unknown": {}}}) == ({"error": "invalid provider account"}, 400)
