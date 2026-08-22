"""Content-keyed cache for the Edit Encoder's text-encoder passes.

Encoding is the expensive half of `FiLEditEncoder`, and `reference_strength`
made it twice as expensive: anything other than 1.0 encodes a second time
against blank references so the two can be interpolated. Both passes depend
only on what goes *into* the tokenizer — the text, the template, the prepared
images, and the per-reference weights the encode itself runs under. That global
strength is applied afterwards, on tensors that are already computed.

So turning the strength dial re-runs no encoder at all once its two passes are
in here, which is the difference between a slider that is usable and one that
costs a model forward pass per nudge. The idea and the fingerprint scheme are
taken from `custom_nodes/krea-reference` (`kg_krea_v10/cache.py`), which caches
the same seam for the same reason.

Every failure mode ends in "do not cache" rather than an exception: a CLIP that
cannot be weak-referenced, an image that cannot be fingerprinted, a key that
will not hash. The node then behaves exactly as it did before this module
existed.
"""

from __future__ import annotations

import weakref
from collections import OrderedDict

import torch

# A run stores the pass it was going to make anyway, plus one per thing that
# needs a comparison: the blank-reference pass behind `reference_strength`, and
# one per reference a card pushes away from. Eight holds a two-reference setup
# with both pushed away, and the setup before it. Conditioning tensors are
# large; this is deliberately not a general-purpose cache.
MAX_ENTRIES = 8

_CACHE: OrderedDict = OrderedDict()


def reset() -> None:
    """Drop everything. For tests, and for anywhere memory matters more."""
    _CACHE.clear()


def _tensor_fingerprint(value):
    """Cheap content signature for an image tensor.

    Shape and dtype, plus three sums: the values, their squares, and the values
    weighted by position. The last is what makes it order-sensitive — two
    images with the same histogram but different layout fingerprint
    differently, so an edited reference cannot collide with the stale entry for
    its original.
    """
    flat = value.float().reshape(-1)
    positions = torch.arange(flat.shape[0], dtype=flat.dtype, device=flat.device)
    return (
        tuple(int(dim) for dim in value.shape),
        str(value.dtype),
        float(flat.sum().item()),
        float((flat * flat).sum().item()),
        float((flat * positions).sum().item()),
    )


def make_key(clip, text: str, template, images, scales=None) -> tuple | None:
    """Key for one encode context, or None when it cannot be cached.

    `id(clip)` rather than the object: the key has to be hashable and must not
    keep the model alive. `lookup` re-checks identity through a weak reference,
    which is what makes a recycled id safe — a new CLIP at the same address
    fails that check and the entry is dropped.
    """
    prints = []
    for image in images:
        if not torch.is_tensor(image):
            return None
        try:
            prints.append(_tensor_fingerprint(image))
        except Exception:
            return None
    # Per-reference weights belong in the key: they are applied *during* the
    # encode, through a hook inside the text encoder, and not afterwards on
    # tensors already in hand the way `reference_strength` is. Two runs that
    # differ only in a card's strength are two different passes.
    weights = tuple(sorted((int(slot), float(value)) for slot, value in (scales or {}).items()))
    return (id(clip), str(text), str(template), tuple(prints), weights)


def lookup(key, clip):
    """The cached conditioning for `key`, or None."""
    if key is None:
        return None
    entry = _CACHE.get(key)
    if entry is None:
        return None
    clip_ref = entry["clip_ref"]
    if clip_ref() is not clip:
        # The id was reused by a different CLIP, or the original is gone.
        _CACHE.pop(key, None)
        return None
    _CACHE.move_to_end(key)
    return entry["conditioning"]


def store(key, clip, conditioning) -> None:
    """Remember `conditioning` under `key`, evicting the oldest if needed."""
    if key is None:
        return
    try:
        clip_ref = weakref.ref(clip)
    except TypeError:
        return  # Not weak-referenceable; skip rather than hold it alive.
    _CACHE[key] = {"clip_ref": clip_ref, "conditioning": conditioning}
    _CACHE.move_to_end(key)
    while len(_CACHE) > MAX_ENTRIES:
        _CACHE.popitem(last=False)
