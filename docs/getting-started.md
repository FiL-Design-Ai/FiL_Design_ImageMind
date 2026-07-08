# Getting started

## Provider setup

1. Restart ComfyUI after installing or updating FiL_LLM.
2. Open `Settings → FiL_LLM → Providers and API keys`.
3. Configure a cloud API key or start Ollama/LM Studio locally.
4. Add `FiL Provider Loader`, choose the provider, and refresh its model list.

Credentials stay in `data/auth.json` or environment configuration. They are not written to workflows or returned by the loader.

## Image to prompt

1. Add `Load Image`, `FiL Provider Loader`, and `FiL Optic Scanner`.
2. Connect Loader `config` to Scanner `config`.
3. Connect the image to Scanner `image`.
4. Choose a vision-capable model and queue the workflow.

The image remains the source of truth for subject, count, pose, action, composition, and focal anchor.

## Text to prompt

Use the same Loader and Scanner, leave `image` disconnected, and enter the source idea in `prompt`. A text-only model is sufficient.

## Utility nodes

- `FiL Seed`: fixed seed or random value when set to `-1`.
- `FiL Neuro Cleaner`: optional VRAM/RAM cleanup with value passthrough.
- `FiL Before/After Compare`: comparison preview, swap, and optional resize.
- `FiL Upscale Tile Calc`: tile, grid, latent-size, denoise, and warning calculation.

All nodes are available under `FiL_LLM/...`. Use `FiL_LLM: help` in a node context menu for a short explanation.
