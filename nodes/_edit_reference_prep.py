"""Reference-image preparation for the Edit Encoder.

What the node sends to the model and what the user believes it sends have come
apart at every step of this node's life: a reference resized to a size nobody
asked for, an encoder handed nothing at all, a channel that was off. The
`summary` output tells that story in words. This module is the other half —
it hands the prepared copies back as an ``IMAGE`` so the story can be looked at.

`custom_nodes/qweneditutils` does the same for the same reason: every one of its
encoders returns the images it prepared alongside the conditioning.
"""

from __future__ import annotations

import torch

# Shown when nothing is wired. Small and black: the output exists so a preview
# node downstream never breaks the graph, and an empty frame reads as "nothing
# went to the model" without pretending to be a picture.
EMPTY_SIDE = 64


def as_preview_batch(images: list, fallback_side: int = EMPTY_SIDE) -> torch.Tensor:
    """Stack prepared references into one BHWC batch, padding rather than scaling.

    References rarely share a size — the node sizes each one from its own
    aspect — and a batch tensor needs one. Rescaling them to agree would defeat
    the point: the question this output answers is *at what size did the model
    see this*, and an answer that has been resized again is not an answer.

    So each copy is centred on a black canvas as large as the largest, and the
    canvases are stacked. The preview's frame slider steps through them, and
    the relative sizes stay visible at a glance.
    """
    if not images:
        return torch.zeros(1, fallback_side, fallback_side, 3)

    reference = images[0]
    height = max(int(image.shape[1]) for image in images)
    width = max(int(image.shape[2]) for image in images)

    padded = []
    for image in images:
        image = image[..., :3].to(dtype=reference.dtype, device=reference.device)
        batch, image_height, image_width = image.shape[0], image.shape[1], image.shape[2]
        if (image_height, image_width) == (height, width):
            padded.append(image)
            continue
        canvas = torch.zeros(
            batch, height, width, 3, dtype=reference.dtype, device=reference.device
        )
        top = (height - image_height) // 2
        left = (width - image_width) // 2
        canvas[:, top:top + image_height, left:left + image_width, :] = image
        padded.append(canvas)

    return torch.cat(padded, dim=0)


# What can be done to a reference *before* the encoder looks at it.
#
# This is the missing half of "use this image for its style, not its subject".
# In `vision` mode the encoder is handed the whole picture, and no wording makes
# it unsee the parts it was told to ignore — two prompt presets promising
# exactly that were cut from this node for lying about it. Treating the picture
# is how `custom_nodes/krea-reference` gets the effect instead: strip what the
# reference should not contribute, and only the wanted signal survives to be
# looked at.
#
# Kernel sizes follow that pack (kg_krea_v9/images.py), which tuned them by
# rendering at roughly the resolution this node's vision copy uses.
TREATMENTS = [
    "normal", "grayscale", "soft blur", "strong blur", "shape wash", "palette wash",
]

_SOFT_BLUR = 5
_STRONG_BLUR = 13


def _blur(samples, kernel_size: int):
    """Box-blur NCHW samples; sizes <= 1 pass through, evens round up to odd."""
    kernel_size = int(kernel_size)
    if kernel_size <= 1:
        return samples
    if kernel_size % 2 == 0:
        kernel_size += 1
    return torch.nn.functional.avg_pool2d(
        samples, kernel_size=kernel_size, stride=1, padding=kernel_size // 2
    )


def _grayscale(samples):
    """Drop colour, keep three channels — the encoder still wants an RGB image."""
    return samples.mean(dim=1, keepdim=True).repeat(1, 3, 1, 1)


def _palette_wash(samples):
    """Reduce to a smooth coarse colour field: palette without structure.

    The adaptive pool destroying structure is the point. The way back up is
    bilinear deliberately: krea-reference found that a nearest upscale left
    hard-edged cells and the model reproduced them literally, rendering
    subjects as pixel-art mosaics. Bilinear melts the same palette
    relationships into gradients.
    """
    height = int(samples.shape[2])
    width = int(samples.shape[3])
    grid_h = min(10, max(2, height // 48))
    grid_w = min(10, max(2, width // 48))
    palette = torch.nn.functional.adaptive_avg_pool2d(samples, (grid_h, grid_w))
    palette = torch.nn.functional.interpolate(
        palette, size=(height, width), mode="bilinear", align_corners=False
    )
    average_colour = samples.mean(dim=(2, 3), keepdim=True)
    return _blur(palette * 0.85 + average_colour * 0.15, 9)


def apply_treatment(image, treatment: str):
    """Treat one BHWC reference. Unknown names pass through untouched.

    Only ever applied to the copy the *text encoder* reads. The copy the VAE
    encodes must stay faithful — it is concatenated into the frame's own tokens,
    so treating it would paste a blurred source into the picture.
    """
    if not treatment or treatment == "normal":
        return image
    samples = image.movedim(-1, 1)
    if treatment == "grayscale":
        samples = _grayscale(samples)
    elif treatment == "soft blur":
        samples = _blur(samples, _SOFT_BLUR)
    elif treatment == "strong blur":
        samples = _blur(samples, _STRONG_BLUR)
    elif treatment == "shape wash":
        # Colour gone and detail gone, mass left: what survives is where the
        # big shapes sit. The order matters only for cost — blurring one
        # channel instead of three — not for the result.
        samples = _blur(_grayscale(samples), _STRONG_BLUR)
    elif treatment == "palette wash":
        samples = _palette_wash(samples)
    else:
        return image
    return samples.movedim(1, -1)
