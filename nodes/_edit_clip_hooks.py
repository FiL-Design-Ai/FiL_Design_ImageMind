"""Weighing one reference against another, inside the text encoder.

`FiLEditEncoder` could already say how hard *all* the references pull: encode
once with them and once against blanks, interpolate. That dial cannot separate
one picture from another, because the contribution of a single reference is not
recoverable from a conditioning tensor that has already mixed them.

The finer seam is one step earlier. A vision-language text encoder turns each
picture into image embeddings before the transformer reads them, through
`preprocess_embed` — one call per image. Scaling what that call returns weighs
exactly one reference, in the pass the encoder was going to run anyway.

The technique is taken from `custom_nodes/krea-reference`
(`kg_krea_v9/clip_hooks.py`), which weighs its guide cards this way. Two things
carry over with it and are not incidental:

  * the embeds have to be *tagged* first — the hook is handed an embed, not a
    slot number, so `tag_images` stamps each image dict inside the tokenized
    rows with its position before anything is encoded;
  * `deepstack` in the extras is a list of per-layer copies of the same
    embedding, and scaling the embedding while leaving those alone would weigh
    the reference in some layers and not others.

Rendered on Krea 2 2026-08-22 (setup in `common/edit_roles`): 0.5 still holds
the reference's subject, 0.0 drops it entirely, and -0.5 comes back with the
reference's traits inverted rather than merely absent. The scale is therefore
not linear — see `edit_roles._strength`, which carries the numbers.

Everything here is a patch on ComfyUI internals, so everything here fails to
"no patch": an encoder that exposes no `preprocess_embed` (FLUX.2's Mistral3
takes no images at all) leaves the model untouched, `supports_scaling` says so,
and the node reports it rather than showing a dial that does nothing. The
original method is restored in a `finally` — the model is a shared object that
outlives this node, and leaving it patched would weigh every other node's
encode too.
"""

from __future__ import annotations

from contextlib import contextmanager


def _image_transformer(clip):
    """The transformer whose `preprocess_embed` turns a picture into embeddings.

    `CLIP` -> `cond_stage_model` -> the leaf model named by its own `clip`
    attribute -> `transformer`. Returns None at the first step that is not
    there, which is every encoder this hook does not apply to.
    """
    cond_stage_model = getattr(clip, "cond_stage_model", None)
    leaf_name = getattr(cond_stage_model, "clip", None)
    if not isinstance(leaf_name, str):
        return None
    leaf = getattr(cond_stage_model, leaf_name, None)
    return getattr(leaf, "transformer", None)


def supports_scaling(clip) -> bool:
    """True when this CLIP can weigh references one at a time."""
    return callable(getattr(_image_transformer(clip), "preprocess_embed", None))


_INDEX_KEY = "fil_reference_index"


def tag_images(tokens) -> None:
    """Stamp each image embed in the tokenized rows with its slot, in place.

    The hook below sees embeds one at a time with nothing to identify them, so
    the position has to be written down while the order is still visible. Rows
    hold token ids, `(id, weight)` tuples, and image dicts mixed together; only
    the dicts are touched, and they are copied rather than mutated because the
    same dict may be shared with the caller's own list.
    """
    # Real tokenizers hand back `{name: [row, ...]}`. Anything else is left
    # alone: an untagged embed simply keeps its weight of 1.0, which is the
    # same "fail to no patch" this whole module is built on.
    values = getattr(tokens, "values", None)
    if not callable(values):
        return
    for rows in values():
        for row in rows:
            index = 0
            for position, item in enumerate(row):
                element = item[0] if isinstance(item, tuple) else item
                if not (isinstance(element, dict) and element.get("type") == "image"):
                    continue
                tagged = dict(element)
                tagged[_INDEX_KEY] = index
                row[position] = ((tagged,) + item[1:]) if isinstance(item, tuple) else tagged
                index += 1


def _scaled(value, factor):
    """Multiply a tensor, or every tensor in a list, leaving None alone."""
    if value is None:
        return None
    if isinstance(value, (list, tuple)):
        return [_scaled(item, factor) for item in value]
    return value * factor


@contextmanager
def scaled_images(clip, scales: dict[int, float] | None):
    """Weigh each reference by `scales[slot]` for the duration of one encode.

    Slots not named in `scales` are left at 1.0. An empty or absent mapping,
    and an encoder with no `preprocess_embed`, both yield without patching
    anything — callers do not have to check first.
    """
    transformer = _image_transformer(clip)
    original = getattr(transformer, "preprocess_embed", None)
    if not scales or not callable(original):
        yield
        return

    def patched(embed, *args, **kwargs):
        result = original(embed, *args, **kwargs)
        # Anything but the (embedding, extras) pair this was written against is
        # handed back untouched: a changed contract must cost the feature, not
        # the render.
        if not (isinstance(result, tuple) and len(result) == 2):
            return result
        embedding, extra = result
        if not isinstance(embed, dict) or embed.get("type") != "image":
            return result
        factor = scales.get(embed.get(_INDEX_KEY))
        if factor is None or factor == 1.0 or embedding is None:
            return result
        # `deepstack` carries the same picture into several layers; scaling the
        # embedding alone would weigh the reference in one place and not the
        # others.
        if isinstance(extra, dict) and "deepstack" in extra:
            extra = dict(extra)
            extra["deepstack"] = _scaled(extra["deepstack"], factor)
        return embedding * factor, extra

    transformer.preprocess_embed = patched
    try:
        yield
    finally:
        transformer.preprocess_embed = original
