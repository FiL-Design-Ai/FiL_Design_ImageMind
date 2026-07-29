"""Automatic color correction — pure numpy, no OpenCV dependency."""

from __future__ import annotations

import numpy as np


# ── helpers ──────────────────────────────────────────────────────────

def _srgb_to_linear(c: np.ndarray) -> np.ndarray:
    c = c.astype(np.float32) / 255.0
    mask = c <= 0.04045
    linear = np.empty_like(c)
    linear[mask] = c[mask] / 12.92
    linear[~mask] = ((c[~mask] + 0.055) / 1.055) ** 2.4
    return linear


def _linear_to_srgb(c: np.ndarray) -> np.ndarray:
    mask = c <= 0.0031308
    srgb = np.empty_like(c)
    srgb[mask] = 12.92 * c[mask]
    srgb[~mask] = 1.055 * (c[~mask] ** (1.0 / 2.4)) - 0.055
    return srgb


def _xyz_to_lab_fwd(t: np.ndarray) -> np.ndarray:
    mask = t > 0.008856
    res = np.empty_like(t)
    res[mask] = np.cbrt(t[mask])
    res[~mask] = (903.3 * t[~mask] + 16.0) / 116.0
    return res


def _lab_to_xyz_inv(t: np.ndarray) -> np.ndarray:
    mask = t > 0.206897
    res = np.empty_like(t)
    res[mask] = t[mask] ** 3
    res[~mask] = (t[~mask] - 16.0 / 116.0) / 7.787
    return res


# ── color space ──────────────────────────────────────────────────────

def rgb_to_lab(rgb: np.ndarray) -> np.ndarray:
    """RGB uint8 [H,W,3] → LAB float [H,W,3] (L: 0-100, a/b: ~-128..128)."""
    r = _srgb_to_linear(rgb[..., 0])
    g = _srgb_to_linear(rgb[..., 1])
    b = _srgb_to_linear(rgb[..., 2])

    x = 0.4124564 * r + 0.3575761 * g + 0.1804375 * b
    y = 0.2126729 * r + 0.7151522 * g + 0.0721750 * b
    z = 0.0193339 * r + 0.1191920 * g + 0.9503041 * b

    x /= 0.95047
    y /= 1.0
    z /= 1.08883

    fx = _xyz_to_lab_fwd(x)
    fy = _xyz_to_lab_fwd(y)
    fz = _xyz_to_lab_fwd(z)

    l = 116.0 * fy - 16.0
    a = 500.0 * (fx - fy)
    b_lab = 200.0 * (fy - fz)

    return np.stack([l, a, b_lab], axis=-1)


def lab_to_rgb(lab: np.ndarray) -> np.ndarray:
    """LAB float [H,W,3] → RGB uint8 [H,W,3]."""
    l, a, b = lab[..., 0], lab[..., 1], lab[..., 2]

    fy = (l + 16.0) / 116.0
    fx = a / 500.0 + fy
    fz = fy - b / 200.0

    x = _lab_to_xyz_inv(fx) * 0.95047
    y = _lab_to_xyz_inv(fy) * 1.0
    z = _lab_to_xyz_inv(fz) * 1.08883

    r_lin = 3.2404542 * x - 1.5371385 * y - 0.4985314 * z
    g_lin = -0.9692660 * x + 1.8760108 * y + 0.0415560 * z
    b_lin = 0.0556434 * x - 0.2040259 * y + 1.0572252 * z

    r = _linear_to_srgb(r_lin)
    g = _linear_to_srgb(g_lin)
    b = _linear_to_srgb(b_lin)

    rgb = np.stack([r, g, b], axis=-1)
    return np.clip(rgb * 255.0, 0, 255).astype(np.uint8)


def _rgb_to_hsv(rgb: np.ndarray) -> np.ndarray:
    """RGB uint8 [H,W,3] → HSV float [H,W,3] (H: 0-360, S/V: 0-1)."""
    f = rgb.astype(np.float32) / 255.0
    r, g, b = f[..., 0], f[..., 1], f[..., 2]

    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    diff = mx - mn

    h = np.zeros_like(mx)
    mask = diff > 0.001
    r_m, g_m, b_m = r[mask], g[mask], b[mask]
    mx_m, diff_m = mx[mask], diff[mask]

    sel_r = mx_m == r_m
    sel_g = mx_m == g_m
    h_m = np.zeros_like(r_m)
    h_m[sel_r] = (60.0 * ((g_m[sel_r] - b_m[sel_r]) / diff_m[sel_r])) % 360.0
    h_m[sel_g] = (60.0 * ((b_m[sel_g] - r_m[sel_g]) / diff_m[sel_g]) + 120.0) % 360.0
    h_m[~sel_r & ~sel_g] = (60.0 * ((r_m[~sel_r & ~sel_g] - g_m[~sel_r & ~sel_g]) / diff_m[~sel_r & ~sel_g]) + 240.0) % 360.0
    h[mask] = h_m

    s = np.where(mx > 0.001, diff / mx, 0.0)
    return np.stack([h, s, mx], axis=-1)


# ── skin detection ───────────────────────────────────────────────────

def _skin_probability(hsv: np.ndarray) -> np.ndarray:
    """Per-pixel skin probability [0, 1] based on HSV ranges."""
    h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
    # Hue: skin tones span roughly 0–55°
    hp = np.clip(1.0 - np.abs(h - 20.0) / 35.0, 0, 1)
    # Saturation: skin usually 0.10–0.70
    sp = np.clip(1.0 - np.abs(s - 0.4) / 0.35, 0, 1)
    # Value: skin usually 0.25–0.95
    vp = np.clip(1.0 - np.abs(v - 0.6) / 0.4, 0, 1)
    return np.clip(hp * sp * vp, 0, 1)


# ── temperature / tint ────────────────────────────────────────────────

def temperature_tint(img: np.ndarray, temperature: float = 0.0, tint: float = 0.0) -> np.ndarray:
    """Adjust colour temperature (blue↔yellow) and tint (green↔magenta).

    temperature: -1.0 (cool/blue) → +1.0 (warm/yellow)
    tint:        -1.0 (green) → +1.0 (magenta)
    """
    f = img.astype(np.float32)
    tg = temperature * 0.12
    tg_ = tint * 0.12
    gains = np.array([
        1.0 + tg - tg_ * 0.3,
        1.0 + tg_ * 0.6,
        1.0 - tg - tg_ * 0.3,
    ], dtype=np.float32)
    for c in range(3):
        f[..., c] = np.clip(f[..., c] * gains[c], 0, 255)
    return f.astype(np.uint8)


# ── correction methods ───────────────────────────────────────────────

def gray_world(img: np.ndarray, strength: float = 1.0) -> np.ndarray:
    """Gray World auto white balance."""
    if strength <= 0.001:
        return img.copy()
    f = img.astype(np.float32)
    means = [np.mean(f[..., c]) for c in range(3)]
    avg = sum(means) / 3.0
    for c in range(3):
        gain = 1.0 + (avg / max(means[c], 0.001) - 1.0) * strength
        f[..., c] = np.clip(f[..., c] * gain, 0, 255)
    return f.astype(np.uint8)


def white_patch(img: np.ndarray, percentile: float = 99.0, strength: float = 1.0) -> np.ndarray:
    """White Patch — per-channel max-normalisation."""
    if strength <= 0.001:
        return img.copy()
    f = img.astype(np.float32)
    for c in range(3):
        p = max(np.percentile(f[..., c], percentile), 0.001)
        gain = 1.0 + (255.0 / p - 1.0) * strength
        f[..., c] = np.clip(f[..., c] * gain, 0, 255)
    return f.astype(np.uint8)


def channel_stretch(img: np.ndarray, saturate: float = 0.5, strength: float = 1.0) -> np.ndarray:
    """Simplest Color Balance — per-channel percentile stretch."""
    if strength <= 0.001:
        return img.copy()
    f = img.astype(np.float32)
    lo, hi = saturate, 100.0 - saturate
    for c in range(3):
        ch = f[..., c]
        pl = np.percentile(ch, lo)
        ph = np.percentile(ch, hi)
        stretched = (ch - pl) * (255.0 / max(ph - pl, 0.001))
        stretched = np.clip(stretched, 0, 255)
        f[..., c] = ch * (1.0 - strength) + stretched * strength
    return f.astype(np.uint8)


def lab_enhance(img: np.ndarray, strength: float = 1.0) -> np.ndarray:
    """LAB-space L-channel histogram equalisation."""
    if strength <= 0.001:
        return img.copy()
    lab = rgb_to_lab(img)
    l = lab[..., 0]

    flat = l.flatten()
    hist, bins = np.histogram(flat, bins=256, range=(0, 100))
    cdf = hist.cumsum()
    cdf_n = (cdf.astype(np.float32) - cdf.min()) * 100.0 / max(cdf.max() - cdf.min(), 1e-6)
    l_eq = np.interp(flat, bins[:-1], cdf_n).reshape(l.shape)

    l = l * (1.0 - strength) + l_eq * strength
    lab[..., 0] = np.clip(l, 0, 100)
    return lab_to_rgb(lab)


def full_auto(img: np.ndarray, strength: float = 0.8) -> np.ndarray:
    """Full pipeline: Gray World → LAB enhance."""
    if strength <= 0.001:
        return img.copy()
    img = gray_world(img, strength=strength)
    img = lab_enhance(img, strength=strength * 0.7)
    return img


# ── skin preservation ────────────────────────────────────────────────

def preserve_skin_blend(original: np.ndarray, corrected: np.ndarray, strength: float = 0.7) -> np.ndarray:
    """Blend corrected back toward original in skin-toned areas.

    Areas with high skin probability keep more of the original colour
    so faces don't get grey-washed by white-balance corrections.
    """
    mask = _skin_probability(_rgb_to_hsv(original))
    alpha = mask * np.clip(strength, 0, 1)
    # Lift low-probability areas slightly so the transition is smooth
    alpha = np.clip(alpha * 1.5, 0, 1)
    f = corrected.astype(np.float32) * (1.0 - alpha[..., None]) \
        + original.astype(np.float32) * alpha[..., None]
    return np.clip(f, 0, 255).astype(np.uint8)


# ── white balance picker ────────────────────────────────────────────

def white_balance_from_mask(img: np.ndarray, mask: np.ndarray, strength: float = 1.0) -> np.ndarray:
    """Compute white balance from a masked neutral area.

    mask:  [H, W] float 0–1 (1 = region to sample as neutral grey).

    A mask drawn or loaded at a different resolution than the image is a normal
    thing to wire up, so it is resampled here (nearest neighbour — the mask is
    thresholded straight after anyway) instead of raising a raw numpy
    ``IndexError: boolean index did not match indexed array``.
    """
    f = img.astype(np.float32)
    h, w = f.shape[:2]
    if mask.shape[:2] != (h, w):
        mh, mw = mask.shape[:2]
        rows = (np.arange(h) * mh // h).clip(0, mh - 1)
        cols = (np.arange(w) * mw // w).clip(0, mw - 1)
        mask = mask[rows][:, cols]
    bin_mask = mask > 0.5
    if bin_mask.sum() < 10:
        return img.copy()
    means = [f[..., c][bin_mask].mean() for c in range(3)]
    avg = sum(means) / 3.0
    for c in range(3):
        gain = 1.0 + (avg / max(means[c], 0.001) - 1.0) * strength
        f[..., c] = np.clip(f[..., c] * gain, 0, 255)
    return f.astype(np.uint8)


# ── reference colour matching ───────────────────────────────────────

def _histogram_match_channel(src: np.ndarray, ref: np.ndarray) -> np.ndarray:
    """Match *src* histogram to *ref* for a single channel (per-rank mapping)."""
    s = src.ravel().astype(np.float32)
    r_sort = np.sort(ref.ravel().astype(np.float32))
    # Rank of each src pixel, normalised to [0, 1] so src and ref may hold a
    # different number of pixels — indexing r_sort by raw rank would raise on a
    # smaller reference and silently use only its darkest values on a larger one.
    rank = np.argsort(np.argsort(s)).astype(np.float32)
    positions = rank / (s.size - 1) if s.size > 1 else np.zeros_like(rank)
    ref_positions = (
        np.linspace(0.0, 1.0, r_sort.size, dtype=np.float32)
        if r_sort.size > 1
        else np.zeros(1, dtype=np.float32)
    )
    result = np.interp(positions, ref_positions, r_sort)
    return result.reshape(src.shape).astype(src.dtype)


def match_to_reference(img: np.ndarray, reference: np.ndarray, strength: float = 1.0) -> np.ndarray:
    """Match *img* colour distribution to *reference* in LAB space.

    Uses per-channel histogram matching inside LAB so luminance and
    chrominance are transferred independently.
    """
    img_lab = rgb_to_lab(img)
    ref_lab = rgb_to_lab(reference)
    matched = np.empty_like(img_lab)
    for c in range(3):
        mc = _histogram_match_channel(img_lab[..., c], ref_lab[..., c])
        matched[..., c] = img_lab[..., c] * (1.0 - strength) + mc * strength
    return lab_to_rgb(matched)


# ── registry ─────────────────────────────────────────────────────────

METHODS: dict[str, callable] = {
    "Full Auto": full_auto,
    "Gray World": gray_world,
    "White Patch": white_patch,
    "Channel Stretch": channel_stretch,
    "LAB Enhance": lab_enhance,
}

METHOD_KEYS = list(METHODS.keys())
