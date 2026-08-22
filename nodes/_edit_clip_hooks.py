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
        try:
            return _weigh(result, embed)
        except Exception:
            # A hook must never be the reason a render dies. Everything here
            # reads ComfyUI's internal shapes, and the day one of them changes
            # the cost has to be the feature, not the run.
            return result

    def _weigh(result, embed):
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


def _leaf_model(clip):
    """The inner text model — the object holding `process_tokens`."""
    cond_stage_model = getattr(clip, "cond_stage_model", None)
    leaf_name = getattr(cond_stage_model, "clip", None)
    if not isinstance(leaf_name, str):
        return None
    return getattr(cond_stage_model, leaf_name, None)


def supports_muting(clip) -> bool:
    """True when the written instruction can be silenced without dropping it."""
    return callable(getattr(_leaf_model(clip), "process_tokens", None))


def token_element(item):
    """The token id or image dict inside a row entry, unwrapping `(item, weight)`."""
    return item[0] if isinstance(item, tuple) else item


def prompt_token_span(full_rows, bare_rows) -> tuple[int, int] | None:
    """Where the instruction sits in the tokenized row, as `[start, end)`.

    Found by tokenizing the same call twice — once as sent, once with the
    instruction emptied — and taking the first place the two rows disagree.
    The instruction is then as long as the rows differ in length.

    This is `krea-reference`'s ladder trick (`kg_krea_slider/poles.py`) rather
    than its chat-template analysis (`kg_krea_v9/qwen_tokens.py`), and it is
    chosen for what it does *not* need: no `<|im_start|>` token id, no
    knowledge of where the vision blocks end. A tokenizer that numbers its
    special tokens differently, or a template this node rewrites later, both
    keep working. A BPE merge across the boundary can move the divergence by
    one token — harmless, since muting one separator either way changes
    nothing the model reads as the instruction.

    Returns None when the two tokenizations say the instruction is empty,
    which is exactly when there is nothing to mute.
    """
    if not full_rows or not bare_rows:
        return None
    full, bare = full_rows[0], bare_rows[0]
    length = len(full) - len(bare)
    if length <= 0:
        return None
    start = min(len(full), len(bare))
    for index in range(start):
        if token_element(full[index]) != token_element(bare[index]):
            start = index
            break
    return start, start + length


def embedding_positions(row, start: int, end: int, embeds_info) -> tuple[int, int]:
    """Convert a token-index span into the embedding positions it occupies.

    Every entry costs one position except an image, which expands to as many
    as its embedding took — so a span measured in tokens says nothing about
    where it lands in the embeddings until the images in front of it are
    counted at their real size.
    """
    sizes = [
        int(info.get("size", 1))
        for info in sorted(
            (i for i in (embeds_info or []) if i.get("type") == "image"),
            key=lambda i: i.get("index", 0),
        )
    ]

    def walk(stop):
        position = 0
        image = 0
        for item in row[:stop]:
            element = token_element(item)
            if isinstance(element, dict) and element.get("type") == "image":
                position += sizes[image] if image < len(sizes) else 1
                image += 1
            else:
                position += 1
        return position

    return walk(start), walk(end)


def _token_rows(tokens):
    """The rows, whichever shape they arrive in.

    `clip.tokenize` hands back `{name: [row, ...]}`, but by the time
    `process_tokens` is called the name has been stripped and it is the bare
    list of rows (comfy/sd1_clip.py iterates `for x in tokens`). This hook sees
    the second shape and the span search sees the first, so both are accepted
    rather than one of them being assumed — assuming cost a run that failed
    with `list indices must be integers`, and a test fake that had copied the
    assumption could not catch it.
    """
    values = getattr(tokens, "values", None)
    if callable(values):
        for rows in values():
            return rows
        return []
    return list(tokens or [])


@contextmanager
def muted_prompt(clip, span):
    """Silence the instruction's own embeddings for the duration of one encode.

    Rendered on Krea 2 2026-08-22, one reference and one seed, against the
    scene instruction "standing on a rainy Tokyo street at night":

      0.00   no scene at all — a dark backdrop and the reference's subject,
             which is what the model took from the picture and nothing else
      0.50   the street arrives in half: bokeh lights, depth, a hint of rain
      1.00   the full instruction — neon, passers-by, rain
      1.50   the same scene pushed: more neon, denser crowd, harder rain

    Unlike the per-reference strength this one is even the whole way across;
    that dial holds the reference right up to zero and then drops it, while
    this reads as a plain cross-fade between the picture and the words. Worth
    knowing when writing tooltips for the two, because they look alike and do
    not behave alike.

    Zeroed in place and dropped from the attention mask rather than removed:
    the encode has to come back the same length as the unmuted one, or there
    is nothing to compare it against. Deleting the tokens instead is the trap
    that makes a prompt-strength dial silently do nothing.
    """
    leaf = _leaf_model(clip)
    original = getattr(leaf, "process_tokens", None)
    if span is None or not callable(original):
        yield
        return

    def patched(tokens, *args, **kwargs):
        result = original(tokens, *args, **kwargs)
        try:
            return _silence(result, tokens)
        except Exception:
            return result

    def _silence(result, tokens):
        if not (isinstance(result, tuple) and len(result) == 4):
            return result
        embeds, attention_mask, num_tokens, embeds_info = result
        rows = _token_rows(tokens)
        if not rows:
            return result
        start, end = embedding_positions(rows[0], span[0], span[1], embeds_info)
        start = min(max(0, start), embeds.shape[1])
        end = min(max(start, end), embeds.shape[1])
        if end <= start:
            return result
        embeds = embeds.clone()
        attention_mask = attention_mask.clone()
        embeds[:, start:end] = 0.0
        attention_mask[:, start:end] = 0
        num_tokens = [int(mask.sum().item()) for mask in attention_mask]
        return embeds, attention_mask, num_tokens, embeds_info

    leaf.process_tokens = patched
    try:
        yield
    finally:
        leaf.process_tokens = original
