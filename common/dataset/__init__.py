"""Dataset-building logic for the 📚 LoRA Dataset Forge node.

Split by responsibility so `nodes/node_dataset.py` stays a thin schema wrapper:

* `bucketing` — aspect-ratio buckets and the resize/crop math (pure PIL/numpy).
* `captioning` — caption prompts and per-image LLM calls.
* `writer`    — on-disk layout (kohya / flat), sidecar captions, TOML, manifest.
"""
