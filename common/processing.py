import base64
import io
import logging
from typing import Any, List, Tuple

import numpy as np
from PIL import Image

try:
    import torch
    TORCH_AVAILABLE = True
except ImportError:
    TORCH_AVAILABLE = False

from .config import get_config

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.Processing")


def comfy_image_to_rgb_uint8(image: Any) -> np.ndarray:
    if hasattr(image, "detach"):
        frame = image[0].detach().cpu().numpy()
    elif hasattr(image, "cpu"):
        frame = image[0].cpu().numpy()
    else:
        frame = np.asarray(image[0])
    if frame.ndim == 2:
        frame = frame[..., np.newaxis]
    if frame.ndim != 3:
        raise ValueError(f"Expected IMAGE frame (H, W, C), got {frame.shape}")
    channels = int(frame.shape[-1])
    if channels == 1:
        frame = np.repeat(frame, 3, axis=-1)
    elif channels > 3:
        frame = frame[..., :3]
    if np.issubdtype(frame.dtype, np.floating):
        frame = (np.clip(frame, 0.0, 1.0) * 255.0).astype(np.uint8)
    return frame


def comfy_image_to_pil(image: Any) -> Image.Image:
    return Image.fromarray(comfy_image_to_rgb_uint8(image)).convert("RGB")


class ImageProcessor:
    def __init__(self, max_side: int = 1024, quality: int = 80):
        cfg = get_config()
        img_cfg = cfg.get_image_config()
        self.max_side = max_side or img_cfg.get("max_side", 1024)
        self.quality = quality or img_cfg.get("quality", 80)

    def tensor_to_pil(self, tensor) -> Image.Image:
        if tensor.ndim == 4:
            tensor = tensor[0]
        if hasattr(tensor, "cpu"):
            curr = (tensor * 255).clamp(0, 255).to(torch.uint8).cpu().numpy()
        else:
            curr = (np.clip(np.asarray(tensor), 0.0, 1.0) * 255).astype(np.uint8)
        return Image.fromarray(curr, mode="RGB")

    def resize(self, img: Image.Image) -> Image.Image:
        if self.max_side <= 0 or max(img.size) <= self.max_side:
            return img
        w, h = img.size
        ratio = self.max_side / max(w, h)
        return img.resize((int(w * ratio), int(h * ratio)), Image.Resampling.LANCZOS)

    def to_base64(self, img: Image.Image) -> str:
        resized = self.resize(img)
        buf = io.BytesIO()
        resized.save(buf, format="JPEG", quality=self.quality)
        return base64.b64encode(buf.getvalue()).decode("utf-8")

    def process_batch(self, image_tensor: Any) -> Tuple[List[str], int, int]:
        b, h, w, c = image_tensor.shape
        results = []
        for i in range(b):
            single = image_tensor[i : i + 1]
            pil = comfy_image_to_pil(single)
            b64 = self.to_base64(pil)
            results.append(b64)
        return results, w, h

    def process_single(self, image_tensor: Any) -> Tuple[str, int, int]:
        batch, w, h = self.process_batch(image_tensor)
        return (batch[0], w, h) if batch else ("", 0, 0)


def normalize_model_name(model: str) -> str:
    if not model:
        return ""
    clean = str(model).strip()
    badges = ["✅ ", "💰 ", "👁️ "]
    for badge in badges:
        if clean.startswith(badge):
            clean = clean[len(badge) :].strip()
            break
    return clean


INVALID_MODEL_PLACEHOLDERS = {
    "", "(loading...)", "(no models)", "(error loading models)", "(no vision models)", "(no models available)"
}


def is_valid_model_name(model: Any) -> bool:
    if not model or not isinstance(model, str):
        return False
    clean = normalize_model_name(model)
    if not clean:
        return False
    if clean in INVALID_MODEL_PLACEHOLDERS:
        return False
    if clean.startswith("(") and clean.endswith(")"):
        return False
    return True

