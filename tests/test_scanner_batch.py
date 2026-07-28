"""Tests for per-image batch processing in OpticScanner (V3 execute classmethod)."""
from __future__ import annotations

import types

from FiL_Design_ImageMind.nodes import node_scanner
from FiL_Design_ImageMind.nodes.node_scanner import FiLOpticScanner

from executor_harness import as_the_executor_calls_it

# The scanner reports per-image progress through `cls.hidden.unique_id`,
# which only the clone the executor prepares carries — calling
# `FiLOpticScanner.execute()` straight from a test does not have it.
# See tests/executor_harness.py.
_execute = as_the_executor_calls_it(FiLOpticScanner)


CONFIG = {"provider": "ollama", "model": "qwen3-vl"}


def _fake_image_tensor(batch_size: int = 1):
    class _Frame:
        def cpu(self):
            return self

        def numpy(self):
            return types.SimpleNamespace(tobytes=lambda b=self: b"x" * 256)

    class _Tensor(list):
        def cpu(self):
            return self

        def numpy(self):
            return types.SimpleNamespace(tobytes=lambda b=self: b"y" * 256)

    return _Tensor(_Frame() for _ in range(batch_size))


def _setup(monkeypatch, generate_responses):
    calls = []

    def fake_generate(**kwargs):
        calls.append(kwargs)
        idx = len(calls) - 1
        if idx < len(generate_responses):
            return generate_responses[idx]
        return "default prompt"

    monkeypatch.setattr(node_scanner._model_client, "generate", fake_generate)

    def fake_process_batch(image_tensor):
        n = len(image_tensor)
        return [f"img{i}" for i in range(n)], 64, 64

    monkeypatch.setattr(node_scanner._processor, "process_batch", fake_process_batch)
    return calls


def test_single_image_no_image_runs(monkeypatch):
    _setup(monkeypatch, ["single result"])
    img = _fake_image_tensor(1)
    _, _, meta = _execute(config=CONFIG, image=img, prompt="describe")
    assert "image_runs" not in meta


def test_single_image_returns_prompt(monkeypatch):
    _setup(monkeypatch, ["single result"])
    img = _fake_image_tensor(1)
    prompt, _, _ = _execute(config=CONFIG, image=img, prompt="describe")
    assert prompt == "single result"


def test_multi_image_produces_image_runs(monkeypatch):
    _setup(monkeypatch, ["caption A", "caption B"])
    img = _fake_image_tensor(2)
    _, _, meta = _execute(config=CONFIG, image=img, prompt="describe")
    assert "image_runs" in meta
    assert len(meta["image_runs"]) == 2
    assert meta["image_runs"][0]["index"] == 0
    assert meta["image_runs"][1]["index"] == 1
    assert "elapsed_seconds" in meta["image_runs"][0]


def test_multi_image_results_joined_with_separator(monkeypatch):
    _setup(monkeypatch, ["caption A", "caption B"])
    img = _fake_image_tensor(2)
    prompt, _, _ = _execute(config=CONFIG, image=img, prompt="describe")
    assert "caption A" in prompt
    assert "caption B" in prompt
    assert "---" in prompt
