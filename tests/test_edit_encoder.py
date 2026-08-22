"""FiLEditEncoder — prompt + reference images into one edit conditioning.

The fakes stand where the real CLIP and VAE sit in a workflow: the node only
needs ``tokenize`` / ``encode_from_tokens_scheduled`` from the former and
``encode`` from the latter, which is exactly the seam the node leans on.
"""

import pytest
import torch

from FiL_Design_ImageMind.nodes.node_edit_encoder import FiLEditEncoder, _connected_images


class _FakeClip:
    """Records the prompt *and the images* it encodes.

    `images` is not decoration. ComfyUI's vision-language tokenizers pick a
    different prompt template depending on whether they were handed any
    (`comfy/text_encoders/qwen3vl.py`), so a node that forgets to pass them
    encodes the edit instruction with no idea what it refers to — and the
    references still arrive on the conditioning through the VAE path. The model
    reads them as extra canvas and paints the source into a corner of its own
    output.

    The fake took no `images` argument at all until that shipped, which is why
    nothing here failed. It mirrors `CLIP.tokenize(text, **kwargs)` now.
    """

    def __init__(self):
        self.prompts = []
        self.images = None

    def tokenize(self, prompt, images=None, **kwargs):
        self.prompts.append(prompt)
        self.images = images
        return [("tokens", prompt)]

    def encode_from_tokens_scheduled(self, tokens):
        return [[torch.zeros(1, 4), {"pooled_output": torch.zeros(1, 4)}]]


class _FakeVae:
    """Records what it was asked to encode; returns a quarter-size latent."""

    def __init__(self):
        self.encoded = []   # inputs received
        self.latents = []   # latents returned

    def encode(self, image):
        self.encoded.append(image)
        height, width = image.shape[1] // 8, image.shape[2] // 8
        latent = torch.zeros(1, 16, height, width)
        self.latents.append(latent)
        return latent


def _execute(**kwargs):
    """Run the node. Defaults to `both` so a test that says nothing exercises
    every channel; the mode-specific tests below pass their own."""
    clip = kwargs.pop("clip", _FakeClip())
    prompt = kwargs.pop("prompt", "make it rain")
    vae = kwargs.pop("vae", None)
    kwargs.setdefault("reference_mode", "both")
    return clip, vae, FiLEditEncoder.execute(clip, prompt, vae, **kwargs)


def test_schema_identity():
    schema = FiLEditEncoder.GET_SCHEMA()
    assert schema.node_id == "FiLEditEncoder"
    assert schema.display_name == "🎯 Edit Encoder"
    assert schema.category.startswith("🎨 FiL Design/")


def test_no_images_is_plain_text_conditioning():
    _, _, result = _execute()
    conditioning = result.args[0]
    assert len(conditioning) == 1
    assert "reference_latents" not in conditioning[0][1]
    assert "reference_latents_method" not in conditioning[0][1]


def test_single_reference_lands_in_the_conditioning():
    vae = _FakeVae()
    images = {"image_1": torch.rand(1, 512, 256, 3)}
    _, _, result = _execute(vae=vae, images=images)
    extra = result.args[0][0][1]

    assert len(extra["reference_latents"]) == 1
    # The latent the VAE produced is the one the conditioning carries.
    assert extra["reference_latents"][0] is vae.latents[0]
    # A method is always written. Leaving it out is not "let the model choose":
    # krea2's own default is None, and comfy/ldm/krea2/model.py gates the whole
    # reference branch on `is not None`, so an absent key silently drops every
    # reference. Measured on Krea 2 — see _REFERENCE_METHODS in the node.
    assert extra["reference_latents_method"] == "index_timestep_zero"


def test_small_references_keep_their_native_size():
    vae = _FakeVae()
    # Full-auto never upscales: a 512x256 source goes through untouched.
    images = {"image_1": torch.rand(1, 512, 256, 3)}
    _execute(vae=vae, images=images)

    height, width = vae.encoded[0].shape[1], vae.encoded[0].shape[2]
    assert (height, width) == (512, 256)


def test_large_references_are_capped_and_8_aligned():
    vae = _FakeVae()
    images = {"image_1": torch.rand(1, 4096, 2048, 3)}
    _execute(vae=vae, images=images)

    encoded = vae.encoded[0]
    height, width = encoded.shape[1], encoded.shape[2]
    assert height % 8 == 0 and width % 8 == 0
    # Aspect of the source survives the resize (W/H = 2048/4096).
    assert abs((width / height) - 0.5) < 0.02
    # The 1MP cap is honoured within one /8 step of slack on each axis.
    assert 0.9e6 <= height * width <= 1.15e6


def test_alpha_channel_is_dropped_before_encoding():
    vae = _FakeVae()
    images = {"image_1": torch.rand(1, 64, 64, 4)}
    _execute(vae=vae, images=images)
    assert vae.encoded[0].shape[-1] == 3


def test_references_keep_wired_order_not_dict_order():
    vae = _FakeVae()
    first = torch.rand(1, 64, 128, 3)   # landscape (W/H = 2)
    second = torch.rand(1, 128, 64, 3)  # portrait (W/H = 0.5)
    # Dict order deliberately scrambled against the slot suffixes.
    images = {"image_2": second, "image_1": first}
    _execute(vae=vae, images=images)

    assert len(vae.encoded) == 2
    # The order is checked through the aspects (auto keeps these small
    # references native): slot 1's landscape first, then portrait.
    assert abs((vae.encoded[0].shape[2] / vae.encoded[0].shape[1]) - 2.0) < 0.02
    assert abs((vae.encoded[1].shape[2] / vae.encoded[1].shape[1]) - 0.5) < 0.02


def test_ui_style_slot_names_keep_the_wired_order():
    """The UI spells Autogrow slots `image1`/`image2` — no underscore.

    The first live run through the graph crashed on exactly this: the order
    parser expected the API spelling and died on `int('image1')`.
    """
    vae = _FakeVae()
    first = torch.rand(1, 64, 128, 3)   # landscape
    second = torch.rand(1, 128, 64, 3)  # portrait
    images = {"image2": second, "image1": first}
    _execute(vae=vae, images=images)

    assert len(vae.encoded) == 2
    assert abs((vae.encoded[0].shape[2] / vae.encoded[0].shape[1]) - 2.0) < 0.02
    assert abs((vae.encoded[1].shape[2] / vae.encoded[1].shape[1]) - 0.5) < 0.02


def test_method_choice_reaches_the_conditioning():
    vae = _FakeVae()
    images = {"image_1": torch.rand(1, 64, 64, 3)}
    _, _, result = _execute(vae=vae, images=images, reference_latents_method="uxo")
    assert result.args[0][0][1]["reference_latents_method"] == "uxo"


def test_images_without_a_vae_fail_fast():
    """Only when the mode actually needs one."""
    with pytest.raises(ValueError, match="vae"):
        _execute(images={"image_1": torch.rand(1, 64, 64, 3)}, reference_mode="latents")


def test_vision_mode_needs_no_vae_and_writes_no_latents():
    """The Krea 2 path, and the reason the switch exists.

    `reference_latents` concatenates the reference to the frame's own tokens —
    tiling the source into the output is what that mechanism is, and no
    `reference_latents_method` turns it off. `custom_nodes/krea-reference`
    never writes the key at all; this mode is the same choice.
    """
    clip, _, result = _execute(
        images={"image_1": torch.rand(1, 512, 256, 3)}, reference_mode="vision"
    )
    extra = result.args[0][0][1]

    assert "reference_latents" not in extra
    assert "reference_latents_method" not in extra
    # The encoder still sees the picture — that is the whole point.
    assert clip.images is not None and len(clip.images) == 1


def test_latents_mode_keeps_the_references_out_of_the_text_encoder():
    """The FLUX.2/Kontext path: the frame carries them, the encoder does not."""
    vae = _FakeVae()
    clip, _, result = _execute(
        clip=_FakeClip(), vae=vae,
        images={"image_1": torch.rand(1, 512, 256, 3)}, reference_mode="latents",
    )
    assert len(result.args[0][0][1]["reference_latents"]) == 1
    assert clip.images == []


def test_both_mode_uses_each_channel_once():
    vae = _FakeVae()
    clip, _, result = _execute(
        clip=_FakeClip(), vae=vae,
        images={"image_1": torch.rand(1, 512, 256, 3)}, reference_mode="both",
    )
    assert len(result.args[0][0][1]["reference_latents"]) == 1
    assert len(clip.images) == 1
    # Two different sizes, because the two halves want different resolutions:
    # ~384*384 for the vision tower, up to 1MP for the VAE.
    assert clip.images[0].shape[1:3] != vae.encoded[0].shape[1:3]


def test_prompt_reaches_the_text_encoder():
    clip, _, _ = _execute(prompt="turn the sky green")
    assert clip.prompts == ["turn the sky green"]


def test_connected_images_skips_unwired_slots():
    assert _connected_images(None) == []
    assert _connected_images({}) == []
    only_second = _connected_images({"image_1": None, "image_2": "img"})
    assert only_second == ["img"]
    # Both slot spellings sort by their trailing number, and a name with no
    # number sorts first instead of crashing the parser.
    mixed = _connected_images({"image2": "b", "image10": "c", "image1": "a", "image": "z"})
    assert mixed == ["z", "a", "b", "c"]


def test_references_reach_the_text_encoder_not_just_the_vae():
    """The bug that made the node paste the reference into a corner.

    The node encoded the prompt with `clip.tokenize(prompt)` and attached the
    reference latents afterwards. For a vision-language text encoder — Qwen3-VL,
    which is what a Krea2 graph loads — handing it no images selects the
    text-only prompt template, so the instruction was encoded with no visual
    grounding while the latents arrived anyway. The model read them as more
    canvas and produced a collage of the source and a fresh generation.

    Core's `TextEncodeQwenImageEditPlus` passes `images=` for exactly this
    reason. Nothing raised, which is why only a generated image showed it.
    """
    clip, vae = _FakeClip(), _FakeVae()
    images = {"image1": torch.rand(1, 1024, 1024, 3)}
    _execute(clip=clip, vae=vae, images=images)

    assert clip.images, "the reference never reached the text encoder"
    assert len(clip.images) == 1
    # Three channels, and small: this copy feeds the vision tower, not the VAE.
    assert clip.images[0].shape[-1] == 3
    assert clip.images[0].shape[1] * clip.images[0].shape[2] <= 400 * 400


def test_the_vision_copy_is_not_the_latent_copy():
    """Two copies at two sizes — the halves of the model want different things."""
    clip, vae = _FakeClip(), _FakeVae()
    _execute(clip=clip, vae=vae, images={"image1": torch.rand(1, 2048, 2048, 3)})

    vl = clip.images[0]
    latent_src = vae.encoded[0]
    assert vl.shape[1] * vl.shape[2] < latent_src.shape[1] * latent_src.shape[2]


def test_no_references_still_encodes_plain_text():
    """With nothing wired the tokenizer must see an empty list, not an image."""
    clip, _, _ = _execute()
    assert clip.images == []


def test_reference_latents_are_appended_not_replaced():
    """Chaining after another edit node must add to its references.

    Every core node that writes `reference_latents` uses `append=True`; this one
    overwrote. The method is set separately and without appending — appending a
    plain string would concatenate it on a second pass.
    """
    import node_helpers

    vae = _FakeVae()
    clip = _FakeClip()
    _, _, result = _execute(clip=clip, vae=vae, images={"image1": torch.rand(1, 64, 64, 3)})
    once = result.args[0]

    # A second pass over the same conditioning, as a chained node would do.
    twice = node_helpers.conditioning_set_values(
        once, {"reference_latents": [torch.zeros(1, 16, 8, 8)]}, append=True
    )
    assert len(twice[0][1]["reference_latents"]) == 2
    assert twice[0][1]["reference_latents_method"] == "index_timestep_zero"


def test_an_explicit_method_is_written_once_and_not_concatenated():
    """The override path, and the reason it is set without appending.

    `conditioning_set_values(..., append=True)` on a plain string concatenates
    it, so a chained second pass would ask the model for "indexindex".
    """
    import node_helpers

    vae = _FakeVae()
    _, _, result = _execute(
        vae=vae, images={"image1": torch.rand(1, 64, 64, 3)}, reference_latents_method="index"
    )
    once = result.args[0]
    assert once[0][1]["reference_latents_method"] == "index"

    twice = node_helpers.conditioning_set_values(
        once, {"reference_latents_method": "index"}
    )
    assert twice[0][1]["reference_latents_method"] == "index"


class _VisionTokenizer:
    """Stands in for a Qwen-family tokenizer: it defines `llama_template_images`."""

    llama_template_images = "<|im_start|>user\n<|vision_start|><|image_pad|><|vision_end|>{}"


class _VisionClip(_FakeClip):
    """A CLIP whose tokenizer builds vision blocks — Qwen3-VL, Krea 2's encoder."""

    def __init__(self):
        super().__init__()
        self.tokenizer = _VisionTokenizer()
        self.templates = []

    def tokenize(self, prompt, images=None, llama_template=None, **kwargs):
        self.templates.append(llama_template)
        return super().tokenize(prompt, images=images, **kwargs)


class _Transformer:
    """The seam the per-reference weights hook into.

    Real encoders build one image embedding per picture here; this returns a
    constant so a scaled one is recognisable by its sum alone. `deepstack` is
    present because the hook has to weigh those copies too — a reference scaled
    in the embedding and not in its per-layer copies is weighed in some layers
    and not others.
    """

    def preprocess_embed(self, embed, device=None):
        return torch.ones(1, 4), {"deepstack": [torch.ones(1, 4)]}


class _CondStage:
    def __init__(self):
        self.clip = "leaf"
        self.leaf = type("Leaf", (), {"transformer": _Transformer()})()


class _ScalingClip(_VisionClip):
    """A CLIP that can weigh one reference at a time, and shows what it weighed.

    `encode_from_tokens_scheduled` walks the token rows the way the real
    encoder does — one `preprocess_embed` per image dict — so whatever the hook
    did to those embeddings lands in the conditioning, where a test can read it.
    """

    def __init__(self):
        super().__init__()
        self.cond_stage_model = _CondStage()

    def tokenize(self, prompt, images=None, llama_template=None, **kwargs):
        super().tokenize(prompt, images=images, llama_template=llama_template, **kwargs)
        rows = [[{"type": "image"} for _ in (images or [])] + [1, 2]]
        return {"qwen3vl": rows}

    def encode_from_tokens_scheduled(self, tokens):
        transformer = self.cond_stage_model.leaf.transformer
        total = 0.0
        for rows in tokens.values():
            for row in rows:
                for item in row:
                    element = item[0] if isinstance(item, tuple) else item
                    if isinstance(element, dict) and element.get("type") == "image":
                        embedding, extra = transformer.preprocess_embed(element)
                        total += float(embedding.sum())
                        total += float(sum(d.sum() for d in extra["deepstack"]))
        return [[torch.full((1, 4), total), {"pooled_output": torch.zeros(1, 4)}]]


def _weight_of(result):
    """The single number `_ScalingClip` folds every image embedding into."""
    return float(result[0][0][0][0, 0])


IMAGE_EMBED_SIZE = 3


class _MutingLeaf:
    """A text model whose `process_tokens` this node can silence a span inside.

    One embedding position per token, `IMAGE_EMBED_SIZE` of them per picture —
    the expansion that makes a token span and an embedding span two different
    things, which is the arithmetic the hook has to get right.
    """

    def process_tokens(self, tokens, device=None):
        # A bare list of rows, exactly as comfy/sd1_clip.py passes it — the
        # shape this fake used to get wrong, which let a crash reach a render.
        assert not hasattr(tokens, "values"), "process_tokens takes rows, not the token dict"
        row = tokens[0]
        positions, info, index = 0, [], 0
        for item in row:
            element = item[0] if isinstance(item, tuple) else item
            if isinstance(element, dict) and element.get("type") == "image":
                info.append({"type": "image", "index": index, "size": IMAGE_EMBED_SIZE})
                positions += IMAGE_EMBED_SIZE
                index += 1
            else:
                positions += 1
        embeds = torch.ones(1, positions, 4)
        mask = torch.ones(1, positions)
        return embeds, mask, [positions], info


class _MutingClip(_VisionClip):
    """A CLIP that tokenizes text into words, so an instruction has a span."""

    def __init__(self):
        super().__init__()
        self.cond_stage_model = type("Cond", (), {"clip": "leaf", "leaf": _MutingLeaf()})()

    def tokenize(self, prompt, images=None, llama_template=None, **kwargs):
        super().tokenize(prompt, images=images, llama_template=llama_template, **kwargs)
        row = [{"type": "image"} for _ in (images or [])]
        row += list(range(1, len(str(prompt).split()) + 1))
        return {"qwen3vl": [row]}

    def encode_from_tokens_scheduled(self, tokens):
        # Counted apart from `prompts`, which also records the two throwaway
        # tokenizations the span search makes. Encoder passes are the cost.
        self.encodes = getattr(self, "encodes", 0) + 1
        rows = next(iter(tokens.values()))
        embeds, mask, _, _ = self.cond_stage_model.leaf.process_tokens(rows)
        total = float((embeds.sum(dim=-1) * mask).sum())
        return [[torch.full((1, 4), total), {"pooled_output": torch.zeros(1, 4)}]]


def test_the_instruction_can_be_weighed_against_the_pictures():
    """Silenced in place, so the two encodes stay the same length and compare."""
    clip = _MutingClip()
    image = torch.rand(1, 64, 64, 3)
    _, _, full = _execute(clip=clip, reference_mode="vision", prompt="one two three four",
                          images={"image1": image})
    quiet = _MutingClip()
    _, _, muted = _execute(clip=quiet, reference_mode="vision", prompt="one two three four",
                           prompt_strength=0.0, images={"image1": image})
    # Four instruction words silenced, out of an embedding row that also holds
    # the picture's own positions.
    assert _weight_of(muted) == pytest.approx(_weight_of(full) - 4 * 4)
    assert "Prompt strength 0" in _summary_of(muted)
    # One extra pass, and only when the dial is off 1.0.
    assert quiet.encodes == 2 and clip.encodes == 1


def test_the_prompt_dial_lands_halfway_at_a_half():
    clip = _MutingClip()
    image = torch.rand(1, 64, 64, 3)
    _, _, full = _execute(clip=clip, reference_mode="vision", prompt="one two three four",
                          images={"image1": image})
    _, _, half = _execute(clip=_MutingClip(), reference_mode="vision",
                          prompt="one two three four", prompt_strength=0.5,
                          images={"image1": image})
    assert _weight_of(half) == pytest.approx(_weight_of(full) - 8.0)


def test_the_prompt_dial_costs_nothing_at_one():
    clip = _MutingClip()
    _execute(clip=clip, reference_mode="vision", prompt="one two three",
             prompt_strength=1.0, images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.encodes == 1


def test_a_hook_that_breaks_costs_the_feature_and_not_the_render():
    """Both hooks read ComfyUI's internals, so both must fail to the plain pass."""
    clip = _MutingClip()
    leaf = clip.cond_stage_model.leaf
    original = leaf.process_tokens

    def hostile(tokens, device=None):
        embeds, mask, num, info = original(tokens, device)
        return embeds, mask, num, [{"type": "image", "index": 0, "size": "not a number"}]

    leaf.process_tokens = hostile
    _, _, result = _execute(clip=clip, reference_mode="vision", prompt="one two three",
                            prompt_strength=0.0, images={"image1": torch.rand(1, 64, 64, 3)})
    # It ran, and it produced conditioning rather than an exception.
    assert result.args[0]


def test_an_encoder_that_cannot_be_silenced_says_so():
    """`_VisionClip` exposes no `process_tokens`, so there is nothing to mute."""
    _, _, result = _execute(clip=_VisionClip(), reference_mode="vision", prompt="one two",
                            prompt_strength=0.4, images={"image1": torch.rand(1, 64, 64, 3)})
    assert "prompt strength 0.4 did nothing" in _summary_of(result)


def test_an_empty_instruction_has_no_strength_to_weigh():
    _, _, result = _execute(clip=_MutingClip(), reference_mode="vision", prompt="",
                            prompt_strength=0.5, images={"image1": torch.rand(1, 64, 64, 3)})
    assert "did nothing" in _summary_of(result)


def test_the_muted_pass_is_cached_apart_from_the_plain_one():
    clip = _MutingClip()
    image = torch.rand(1, 64, 64, 3)
    kwargs = dict(clip=clip, reference_mode="vision", prompt="one two three", images={"image1": image})
    _execute(prompt_strength=0.5, **kwargs)
    assert clip.encodes == 2, "the plain pass and the silenced one"
    _execute(prompt_strength=0.5, **kwargs)
    assert clip.encodes == 2, "the same dial re-encoded"
    _execute(prompt_strength=1.5, **kwargs)
    assert clip.encodes == 2, "moving the dial should reuse both passes"


def _ranges_of(result):
    """Every `[start, end)` the returned conditioning carries, in order."""
    return [
        (entry[1].get("start_percent"), entry[1].get("end_percent"))
        for entry in result.args[0]
    ]


def test_without_a_window_the_conditioning_stays_one_piece():
    """The plain path must not grow a timestep range it never asked for."""
    _, _, result = _execute(clip=_ScalingClip(), reference_mode="vision",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert _ranges_of(result) == [(None, None)]


def test_a_window_cuts_the_run_at_its_edges():
    _, _, result = _execute(
        clip=_ScalingClip(), reference_mode="vision",
        reference_cards='[{"role": "as is", "window": "look"}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    # Cut at every edge any window can fall on, so segments never straddle one.
    assert _ranges_of(result) == [(0.0, 0.15), (0.15, 0.4), (0.4, 1.0)]


def test_a_look_card_is_silent_early_and_a_layout_card_late():
    """The whole point: which reference is speaking depends on when."""
    clip = _ScalingClip()
    image = torch.rand(1, 64, 64, 3)
    _, _, look = _execute(clip=clip, reference_mode="vision",
                          reference_cards='[{"role": "as is", "window": "look"}]',
                          images={"image1": image})
    early, middle, late = (entry[0][0, 0].item() for entry in look.args[0])
    assert early == middle == 0.0, "a 'look' reference must not speak while the layout settles"
    assert late > 0.0

    _, _, layout = _execute(clip=_ScalingClip(), reference_mode="vision",
                            reference_cards='[{"role": "as is", "window": "layout"}]',
                            images={"image1": image})
    early, middle, late = (entry[0][0, 0].item() for entry in layout.args[0])
    assert early > 0.0
    assert middle == late == 0.0


def test_two_cards_can_speak_at_different_times():
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "as is", "window": "layout"}, {"role": "as is", "window": "look"}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    early, middle, late = (entry[0][0, 0].item() for entry in result.args[0])
    # One reference each at the ends, neither in the gap between the windows.
    assert early == pytest.approx(late)
    assert middle == 0.0
    assert early > middle


def test_the_summary_names_each_window_and_its_edges():
    _, _, result = _execute(
        clip=_ScalingClip(), reference_mode="vision",
        reference_cards='[{"role": "as is", "window": "look"}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    assert "windows: 1 'look' (0.4-1)" in _summary_of(result)


def test_an_unweighable_encoder_cannot_honour_a_window_and_says_so():
    _, _, result = _execute(
        clip=_VisionClip(), reference_mode="vision",
        reference_cards='[{"role": "as is", "window": "look"}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    assert _ranges_of(result) == [(None, None)], "no encoder seam, no honest window"
    assert "nor the window" in result.ui["fil_edit_encoder"][0]["notes"][0]


def test_an_unreadable_window_falls_back_to_the_whole_run():
    _, _, result = _execute(
        clip=_ScalingClip(), reference_mode="vision",
        reference_cards='[{"role": "as is", "window": "whenever"}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    assert _ranges_of(result) == [(None, None)]


def test_a_card_weighs_its_own_reference():
    """The dial the node could not offer before: one picture, not all of them."""
    plain = _ScalingClip()
    _, _, before = _execute(clip=plain, reference_mode="vision", images={
        "image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3),
    })

    weighed = _ScalingClip()
    _, _, after = _execute(
        clip=weighed, reference_mode="vision",
        reference_cards='[{"role": "as is"}, {"role": "as is", "strength": 0.5}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    # Two references at 1.0 against one at 1.0 and one at 0.5: three quarters.
    assert _weight_of(after) == pytest.approx(_weight_of(before) * 0.75)


def test_a_strength_of_zero_drops_one_reference_and_keeps_the_other():
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "as is", "strength": 0}, {"role": "as is"}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    single = _ScalingClip()
    _, _, one = _execute(clip=single, reference_mode="vision",
                         images={"image1": torch.rand(1, 64, 64, 3)})
    assert _weight_of(result) == pytest.approx(_weight_of(one))


def test_pushing_away_goes_past_dropping_the_reference():
    """"Away" is not "ignore": it needs the pass that shows what was there."""
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "as is", "strength": -0.5}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    # Held out the reference is 0; the pass with it back is 8. Half that
    # difference the other way is -4.
    assert _weight_of(result) == pytest.approx(-4.0)
    # The extra pass is the cost, and it is one, not one per reference.
    assert len(clip.prompts) == 2


def test_the_encoder_is_left_exactly_as_it_was_found():
    """A shared model left patched would weigh every other node's encode."""
    clip = _ScalingClip()
    original = clip.cond_stage_model.leaf.transformer.preprocess_embed
    _execute(clip=clip, reference_mode="vision",
             reference_cards='[{"role": "as is", "strength": 0.25}]',
             images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.cond_stage_model.leaf.transformer.preprocess_embed == original


def test_the_summary_names_each_reference_weight():
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "as is", "strength": 0.4}, {"role": "as is", "strength": -0.5}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    summary = _summary_of(result)
    assert "strengths: 1 0.4, 2 -0.5 (away)" in summary


def test_an_encoder_without_the_seam_says_so_instead_of_pretending():
    """`_VisionClip` has no `cond_stage_model`, so there is nothing to weigh."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_cards='[{"role": "as is", "strength": 0.3}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "no per-image embeddings to weigh" in _summary_of(result)


def test_the_same_weights_encode_once_and_a_changed_one_does_not_reuse_it():
    cards = '[{"role": "as is", "strength": 0.5}]'
    clip = _ScalingClip()
    image = torch.rand(1, 64, 64, 3)
    _execute(clip=clip, reference_mode="vision", reference_cards=cards, images={"image1": image})
    passes = len(clip.prompts)
    _execute(clip=clip, reference_mode="vision", reference_cards=cards, images={"image1": image})
    assert len(clip.prompts) == passes, "the same weights re-encoded"

    _execute(clip=clip, reference_mode="vision",
             reference_cards='[{"role": "as is", "strength": 0.75}]', images={"image1": image})
    assert len(clip.prompts) > passes, "a moved dial served a stale encode"


def test_a_weight_in_latents_mode_says_it_did_nothing():
    _, _, result = _execute(clip=_VisionClip(), vae=_FakeVae(), reference_mode="latents",
                            reference_cards='[{"role": "as is", "strength": 0.5}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "per-reference strengths ignored" in _summary_of(result)


def test_the_system_prompt_reaches_a_vision_encoder_with_its_blocks():
    """Template and vision blocks travel together or not at all.

    Supplying `llama_template` turns off the tokenizer's own vision-block
    insertion (comfy/text_encoders/qwen3vl.py), so the blocks have to come from
    the text — one per image, or the count stops matching the images and the
    encoder reads a picture that is not there.
    """
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", system_preset="use reference", images={
        "image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3),
    })

    template = clip.templates[0]
    assert template is not None and "<|im_start|>system" in template
    assert "maintaining consistency" in template
    # Two images, two blocks, numbered.
    assert clip.prompts[0].count("<|vision_start|>") == 2
    assert "Picture 1:" in clip.prompts[0] and "Picture 2:" in clip.prompts[0]


def test_no_system_prompt_for_a_text_only_encoder():
    """FLUX.2's own Mistral3 tokenizer has no `llama_template_images`.

    It does read `llama_template` — so a Qwen-style `<|im_start|>system` block
    sent there replaces its real template and the prompt is encoded as markup.
    `_speaks_vision` fails to False for anything it does not recognise, which
    is the behaviour this node had before the system prompt existed.
    """
    clip = _VisionClip()
    clip.tokenizer = object()          # no llama_template_images anywhere
    _execute(clip=clip, reference_mode="vision", images={"image1": torch.rand(1, 64, 64, 3)})

    assert clip.templates == [None]
    assert "<|vision_start|>" not in clip.prompts[0]
    assert clip.prompts[0] == "make it rain"


def test_the_default_sends_no_system_prompt():
    """Empty by default — measured better at holding a pose than the usual
    "describe then modify" wording. See SYSTEM_PROMPT_SUGGESTED in the node."""
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.templates == [None]
    assert clip.prompts[0] == "make it rain"


def test_an_empty_role_field_sends_none():
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision",
             system_prompt="   ", images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.templates == [None]
    assert clip.prompts[0] == "make it rain"


def test_the_field_is_used_without_asking_for_a_preset():
    """Typing a role and leaving the preset alone must send that role.

    It used to be discarded unless `system_preset` was switched to "custom" —
    silently, which is the one failure mode this node exists to not have.
    """
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            system_prompt="Only change the sky.",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Only change the sky." in clip.templates[0]
    assert "sent (custom field)" in _summary_of(result)


def test_the_legacy_custom_preset_still_reads_the_field():
    """Saved workflows carry `system_preset="custom"`; it means what it meant."""
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", system_preset="custom",
             system_prompt="Only change the sky.",
             images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Only change the sky." in clip.templates[0]


def test_a_named_preset_wins_over_a_leftover_field():
    """A stale custom text must not leak into a named preset."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            system_preset="use reference",
                            system_prompt="Only change the sky.",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Only change the sky." not in clip.templates[0]
    assert "maintaining consistency" in clip.templates[0]
    assert "sent (preset 'use reference')" in _summary_of(result)


def test_a_role_that_cannot_be_delivered_is_reported():
    """A text-only encoder never receives the role — say so, do not imply it did."""
    clip = _VisionClip()
    clip.tokenizer = object()          # no llama_template_images anywhere
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            system_prompt="Only change the sky.",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.templates == [None]
    assert "NOT sent (custom field)" in _summary_of(result)


def test_a_role_opens_the_instruction_when_there_is_no_system_channel():
    """`_FakeClip` takes no images, so the roles have nowhere else to go.

    This is the FLUX.2/Mistral3 case. Dropping the prompt presets for roles
    would have emptied the node on those models if the roles only ever went
    into a Qwen system template.
    """
    clip, _, _ = _execute(
        prompt="a rainy Tokyo street at night",
        reference_cards='[{"role": "lighting"}]',
        reference_mode="vision",
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    text = clip.prompts[0]
    assert text.startswith("Reference 1: use its light and layout, not its subject.")
    assert text.endswith("a rainy Tokyo street at night")


def test_the_resize_knobs_reach_both_copies():
    """Each half of the model is sized on its own axis."""
    vae = _FakeVae()
    clip, _, _ = _execute(
        clip=_FakeClip(), vae=vae, reference_mode="both",
        images={"image1": torch.rand(1, 2048, 2048, 3)},
        vision_megapixels=0.04,   # ~205x205
        latent_megapixels=0.25,   # ~512x512
    )
    vl_h, vl_w = clip.images[0].shape[1:3]
    lat_h, lat_w = vae.encoded[0].shape[1:3]
    assert 0.03e6 <= vl_h * vl_w <= 0.05e6
    assert 0.22e6 <= lat_h * lat_w <= 0.28e6


class _CountingClip(_FakeClip):
    """Encodes to a tensor that depends on whether the images were blank."""

    def __init__(self):
        super().__init__()
        self.encodes = 0
        self._blank = []

    def tokenize(self, prompt, images=None, **kwargs):
        self._blank.append(bool(images) and all(float(i.abs().sum()) == 0.0 for i in images))
        return super().tokenize(prompt, images=images, **kwargs)

    def encode_from_tokens_scheduled(self, tokens):
        blank = self._blank[self.encodes]
        self.encodes += 1
        value = 0.0 if blank else 1.0
        return [[torch.full((1, 4), value), {"pooled_output": torch.full((1, 4), value)}]]


def test_strength_of_one_encodes_once():
    clip = _CountingClip()
    _execute(clip=clip, reference_mode="vision", reference_strength=1.0,
             images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.encodes == 1


def test_the_node_wide_dial_multiplies_every_card():
    """One dial over the cards, not a second mechanism beside them.

    It used to interpolate against an encode of blank references — a second way
    to say the same thing that cost a second pass to say it. Now it rides the
    same per-reference seam the cards do, so a card at 1.0 under a dial at 0.5
    is a reference weighed at 0.5.
    """
    plain = _ScalingClip()
    _, _, full = _execute(clip=plain, reference_mode="vision",
                          images={"image1": torch.rand(1, 64, 64, 3)})

    dialled = _ScalingClip()
    _, _, halved = _execute(clip=dialled, reference_mode="vision", reference_strength=0.5,
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert _weight_of(halved) == pytest.approx(_weight_of(full) * 0.5)
    # And it does it in the pass the encoder was going to run anyway.
    assert len(dialled.prompts) == 1


def test_the_dial_and_the_card_combine_rather_than_one_winning():
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision", reference_strength=0.5,
        reference_cards='[{"role": "as is", "strength": 0.4}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    plain = _ScalingClip()
    _, _, full = _execute(clip=plain, reference_mode="vision",
                          images={"image1": torch.rand(1, 64, 64, 3)})
    assert _weight_of(result) == pytest.approx(_weight_of(full) * 0.2)
    # The summary reports the product, not either number as typed.
    assert "strengths: 1 0.2" in _summary_of(result)


def test_the_dial_keeps_a_pushed_card_pushed():
    """Multiplying must not flip a direction the card chose."""
    clip = _ScalingClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision", reference_strength=0.5,
        reference_cards='[{"role": "as is", "strength": -1}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    assert "(away)" in _summary_of(result)
    assert _weight_of(result) < 0


def test_strength_is_ignored_without_references():
    clip = _CountingClip()
    _execute(clip=clip, reference_mode="vision", reference_strength=0.0)
    assert clip.encodes == 1


@pytest.fixture(autouse=True)
def _clear_encode_cache():
    """The cache is module-level and outlives a test; every one starts empty."""
    from FiL_Design_ImageMind.nodes import _edit_encode_cache as cache
    cache.reset()
    yield
    cache.reset()


def test_the_same_inputs_encode_once():
    clip = _CountingClip()
    images = {"image1": torch.rand(1, 64, 64, 3)}
    _execute(clip=clip, reference_mode="vision", images=images)
    _execute(clip=clip, reference_mode="vision", images=images)
    assert clip.encodes == 1


def test_an_edited_reference_is_not_served_from_the_cache():
    """Fingerprints are order-sensitive, so a changed pixel changes the key."""
    clip = _CountingClip()
    first = torch.zeros(1, 8, 8, 3)
    _execute(clip=clip, reference_mode="vision", images={"image1": first})
    edited = first.clone()
    edited[0, 0, 0, 0] = 1.0
    _execute(clip=clip, reference_mode="vision", images={"image1": edited})
    assert clip.encodes == 2


def test_a_changed_prompt_is_not_served_from_the_cache():
    clip = _CountingClip()
    images = {"image1": torch.rand(1, 64, 64, 3)}
    _execute(clip=clip, prompt="one", reference_mode="vision", images=images)
    _execute(clip=clip, prompt="two", reference_mode="vision", images=images)
    assert clip.encodes == 2


def test_the_cache_never_serves_another_clip():
    """`id()` can be recycled; the weak reference is what makes that safe."""
    from FiL_Design_ImageMind.nodes import _edit_encode_cache as cache

    clip = _CountingClip()
    images = [torch.zeros(1, 8, 8, 3)]
    key = cache.make_key(clip, "text", None, images)
    cache.store(key, clip, "conditioning")
    assert cache.lookup(key, clip) == "conditioning"
    assert cache.lookup(key, _CountingClip()) is None


def test_uncacheable_inputs_are_skipped_rather_than_failing():
    from FiL_Design_ImageMind.nodes import _edit_encode_cache as cache

    assert cache.make_key(_CountingClip(), "text", None, ["not a tensor"]) is None
    cache.store(None, _CountingClip(), "x")      # no key: a no-op, not a crash
    assert cache.lookup(None, _CountingClip()) is None


def _summary_of(result):
    return result.args[1]


def test_the_summary_reports_what_the_run_did():
    vae = _FakeVae()
    _, _, result = _execute(
        clip=_VisionClip(), vae=vae, reference_mode="both", reference_strength=0.5,
        images={"image1": torch.rand(1, 512, 256, 3)},
    )
    text = _summary_of(result)
    assert "1 reference(s), mode 'both'" in text
    assert "text encoder reads:" in text and "VAE encodes:" in text


def test_the_summary_warns_that_latents_tile_the_source():
    """The behaviour that looked like a bug for a whole day. It is a setting."""
    vae = _FakeVae()
    _, _, result = _execute(vae=vae, reference_mode="latents",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Tiling the source into the output is what it does" in _summary_of(result)


def test_the_summary_warns_when_the_encoder_cannot_see():
    """Vision mode against FLUX.2's Mistral3 reaches nothing at all."""
    clip = _VisionClip()
    clip.tokenizer = object()          # no llama_template_images
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "takes no images" in _summary_of(result)


def test_the_summary_says_so_when_there_are_no_references():
    _, _, result = _execute()
    assert "plain text encode" in _summary_of(result)


def test_strength_is_ignored_in_latents_mode_and_says_so():
    """The dial interpolates two *text-encoder* passes.

    `latents` mode has no such pass — the references go through the VAE. The
    summary used to announce a blend anyway, because it printed the line from
    the strength value rather than from what happened.
    """
    clip = _CountingClip()
    _, _, result = _execute(clip=clip, vae=_FakeVae(), reference_mode="latents",
                            reference_strength=0.5,
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert clip.encodes == 1
    text = _summary_of(result)
    assert "strength 0.5 ignored" in text
    assert "blended against blank references" not in text


def _references_of(result):
    return result.args[2]


def test_the_references_output_shows_what_the_text_encoder_read():
    """`vision`/`both` return the VL copy — the one the encoder was given."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            vision_megapixels=0.04,   # ~205x205
                            images={"image1": torch.rand(1, 512, 512, 3)})
    preview = _references_of(result)
    assert preview.shape[0] == 1 and preview.shape[-1] == 3
    # The size the encoder saw, not the size that was wired in.
    assert 180 <= preview.shape[1] <= 230 and preview.shape[1] == preview.shape[2]


def test_the_references_output_shows_the_vae_copy_in_latents_mode():
    """There is no VL copy there — showing the wired image instead would lie."""
    _, _, result = _execute(vae=_FakeVae(), reference_mode="latents",
                            latent_megapixels=0.25,   # ~512x512
                            images={"image1": torch.rand(1, 2048, 2048, 3)})
    preview = _references_of(result)
    assert preview.shape[1] % 8 == 0
    assert 450 <= preview.shape[1] <= 560


def test_references_of_different_sizes_are_padded_not_rescaled():
    """Rescaling to agree would defeat the point of the output."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            images={"image1": torch.rand(1, 256, 512, 3),   # landscape
                                    "image2": torch.rand(1, 512, 256, 3)})  # portrait
    preview = _references_of(result)
    assert preview.shape[0] == 2
    # One canvas as large as the largest of each axis, both frames on it.
    assert preview.shape[1] == preview.shape[2]
    # Padding is black, so the corners of the landscape frame are empty.
    assert float(preview[0, 0, 0].abs().sum()) == 0.0


def test_the_references_output_is_a_valid_empty_image_with_nothing_wired():
    """A downstream Preview Image must not break a graph that has no refs."""
    _, _, result = _execute()
    preview = _references_of(result)
    assert preview.shape == (1, 64, 64, 3)
    assert float(preview.abs().sum()) == 0.0


def test_treatment_changes_what_the_encoder_sees():
    """Every treatment must reach the tokenizer, not just the preview."""
    clip = _VisionClip()
    plain, _, _ = _execute(clip=clip, reference_mode="vision",
                           images={"image1": torch.rand(1, 256, 256, 3)})
    untreated = plain.images[0].clone()

    for treatment in ("grayscale", "soft blur", "strong blur", "palette wash"):
        clip = _VisionClip()
        _execute(clip=clip, reference_mode="vision", reference_treatment=treatment,
                 images={"image1": torch.rand(1, 256, 256, 3)})
        seen = clip.images[0]
        assert seen.shape == untreated.shape, treatment
        # Every one of them removes signal; none leaves the picture untouched.
        assert float(seen.std()) < float(untreated.std()), treatment


def test_grayscale_leaves_no_colour():
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", reference_treatment="grayscale",
             images={"image1": torch.rand(1, 64, 64, 3)})
    seen = clip.images[0]
    assert torch.allclose(seen[..., 0], seen[..., 1])
    assert torch.allclose(seen[..., 1], seen[..., 2])


def test_treatment_never_touches_the_copy_the_vae_encodes():
    """It is concatenated into the frame — treating it pastes a blur into the picture."""
    vae = _FakeVae()
    source = torch.rand(1, 128, 128, 3)
    _execute(clip=_VisionClip(), vae=vae, reference_mode="both",
             reference_treatment="strong blur", images={"image1": source})
    assert torch.allclose(vae.encoded[0], source)


def test_an_unknown_treatment_passes_the_image_through():
    """Fail open: a value from a newer version must not corrupt the reference."""
    clip = _VisionClip()
    source = torch.rand(1, 64, 64, 3)
    _execute(clip=clip, reference_mode="vision", reference_treatment="hall of mirrors",
             vision_megapixels=0.0039,  # 64x64: no resize, so the pixels are comparable
             images={"image1": source})
    assert torch.allclose(clip.images[0], source, atol=1e-4)


def test_the_summary_names_the_treatment():
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_treatment="palette wash",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "treated 'palette wash'" in _summary_of(result)
    _, _, plain = _execute(clip=_VisionClip(), reference_mode="vision",
                           images={"image1": torch.rand(1, 64, 64, 3)})
    assert "treated" not in _summary_of(plain)


def test_a_role_brings_its_own_treatment():
    """The half that makes "style, not subject" true rather than merely asked for.

    Measured on Krea 2: with `normal` the reference's subject is reproduced in
    full (which is why a style preset was cut once); with `palette wash` it is
    gone and the palette still carries.
    """
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_cards='[{"role": "style"}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "treated 'palette wash'" in _summary_of(result)


def test_a_role_whose_treatment_was_overridden_away_says_so():
    """Overriding it is allowed. Doing it silently is what got a preset cut."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_cards='[{"role": "style", "treatment": "normal"}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "overridden to 'normal'" in _summary_of(result)

    clip = _VisionClip()
    _, _, kept = _execute(clip=clip, reference_mode="vision",
                          reference_cards='[{"role": "style"}]',
                          images={"image1": torch.rand(1, 64, 64, 3)})
    assert "overridden to 'normal'" not in _summary_of(kept)


def test_the_run_carries_a_picture_of_what_the_model_saw():
    """The card shows the treated copy, so "palette" explains itself on sight."""
    _, _, result = _execute(
        clip=_VisionClip(), reference_mode="vision",
        reference_cards='[{"role": "palette"}, {"role": "as is"}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    entry = result.ui["fil_edit_encoder"][0]
    thumbs = entry["thumbs"]
    assert len(thumbs) == 2
    assert all(t.startswith("data:image/png;base64,") for t in thumbs)
    # Small enough to ride along with every run report.
    assert all(len(t) < 40_000 for t in thumbs)


def test_a_card_that_did_nothing_says_so_on_itself():
    """One shared sentence cannot say *which* of five cards it is about."""
    _, _, result = _execute(
        clip=_VisionClip(), vae=_FakeVae(), reference_mode="latents",
        reference_cards='[{"role": "palette"}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    notes = result.ui["fil_edit_encoder"][0]["notes"]
    assert len(notes) == 1
    assert "never shows the references to the text encoder" in notes[0]


def test_a_card_that_landed_carries_no_note():
    _, _, result = _execute(
        clip=_ScalingClip(), reference_mode="vision",
        reference_cards='[{"role": "palette", "strength": 0.5}]',
        images={"image1": torch.rand(1, 64, 64, 3)},
    )
    assert result.ui["fil_edit_encoder"][0]["notes"] == [""]


def test_an_unweighable_encoder_marks_only_the_cards_that_asked():
    _, _, result = _execute(
        clip=_VisionClip(), reference_mode="vision",
        reference_cards='[{"role": "as is"}, {"role": "as is", "strength": 0.5}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    notes = result.ui["fil_edit_encoder"][0]["notes"]
    assert notes[0] == ""
    assert "builds no per-image embeddings" in notes[1]


def test_a_run_with_no_references_carries_no_pictures():
    _, _, result = _execute(clip=_VisionClip(), reference_mode="vision")
    assert result.ui["fil_edit_encoder"][0]["thumbs"] == []


def test_a_cut_role_still_means_what_it_meant():
    """Roles that rendered identically were removed from the list, not from saved graphs.

    A workflow saved with `style` has to keep doing what it did — falling back
    to the default role would quietly change the picture it produces.
    """
    clip = _VisionClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "style"}, {"role": "shape only"}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    summary = _summary_of(result)
    assert "1 'palette'" in summary and "2 'lighting'" in summary


def test_an_unknown_role_falls_back_rather_than_failing_a_run():
    _, _, result = _execute(clip=_VisionClip(), reference_mode="vision",
                            reference_cards='[{"role": "kitchen sink"}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "roles:" not in _summary_of(result)


def test_each_reference_gets_its_own_job():
    """The whole reason roles are per card: subject from one, palette from another."""
    clip = _VisionClip()
    _, _, result = _execute(
        clip=clip, reference_mode="vision",
        reference_cards='[{"role": "lighting"}, {"role": "palette"}]',
        images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)},
    )
    summary = _summary_of(result)
    assert "1 'lighting'" in summary and "2 'palette'" in summary
    assert "'strong blur'" in summary and "'palette wash'" in summary


def test_the_node_wide_treatment_still_rules_every_slot_without_a_job():
    """What a workflow saved before roles existed has, and all it has."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_treatment="grayscale",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "treated 'grayscale'" in _summary_of(result)


def test_a_saved_prompt_preset_becomes_the_role_that_replaced_it():
    """`reference_cards` holds the widget index `prompt_preset` used to.

    An old workflow hands its preset name straight to the card parser, which is
    the only reason removing that combo does not shift every widget after it.
    """
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_cards="use as style reference",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "1 'palette'" in _summary_of(result)


def test_an_unreadable_card_field_does_not_fail_the_run():
    """It is a field people type into; a stray bracket must not cost a render."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            reference_cards='[{"role": "style"',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "roles:" not in _summary_of(result)


def test_roles_reach_a_vision_encoder_in_its_system_block():
    """Where an encoder has a system channel, that is where the roles go."""
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision",
             reference_cards='[{"role": "style"}]',
             images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Input 1: take only its colours" in clip.templates[0]
    # ...and not twice: the inline opening is for encoders without one.
    assert not clip.prompts[0].startswith("Reference 1:")


def test_the_run_reports_itself_to_the_panel():
    """The summary output says nothing to anyone who has not wired it.

    `execution.py` sends an `executed` message for any node returning a `ui`
    payload, so the panel can show the last run without the graph asking.
    """
    vae = _FakeVae()
    _, _, result = _execute(vae=vae, reference_mode="latents", reference_strength=0.5,
                            images={"image1": torch.rand(1, 64, 64, 3)})
    entry = result.ui["fil_edit_encoder"][0]
    assert entry["summary"] == result.args[1]
    # The latents NOTE is exactly the kind of thing worth interrupting for.
    assert entry["warned"] is True
    assert result.ui["text"] == [result.args[1]]


def test_a_quiet_run_is_not_flagged_as_a_warning():
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert result.ui["fil_edit_encoder"][0]["warned"] is False


def test_each_reference_can_be_treated_differently():
    """The case the override exists for: one for its subject, one for its palette."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            treatment_per_reference="normal, grayscale",
                            images={"image1": torch.rand(1, 64, 64, 3),
                                    "image2": torch.rand(1, 64, 64, 3)})
    first, second = clip.images[0], clip.images[1]
    assert not torch.allclose(first[..., 0], first[..., 1])   # untouched, still colour
    assert torch.allclose(second[..., 0], second[..., 1])     # grey
    assert "'normal'" in _summary_of(result) and "'grayscale'" in _summary_of(result)


def test_one_name_covers_every_reference():
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", treatment_per_reference="grayscale",
             images={"image1": torch.rand(1, 64, 64, 3), "image2": torch.rand(1, 64, 64, 3)})
    for seen in clip.images:
        assert torch.allclose(seen[..., 0], seen[..., 2])


def test_the_override_wins_over_the_combo():
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", reference_treatment="grayscale",
             treatment_per_reference="normal", images={"image1": torch.rand(1, 64, 64, 3)})
    seen = clip.images[0]
    assert not torch.allclose(seen[..., 0], seen[..., 1])


def test_an_empty_override_leaves_the_combo_alone():
    clip = _VisionClip()
    _execute(clip=clip, reference_mode="vision", reference_treatment="grayscale",
             treatment_per_reference="  ", images={"image1": torch.rand(1, 64, 64, 3)})
    assert torch.allclose(clip.images[0][..., 0], clip.images[0][..., 1])


def test_a_misspelled_treatment_is_named_rather_than_swallowed():
    """It already passes the image through; the run has to say which one did."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            treatment_per_reference="grayscale, palette wsah",
                            images={"image1": torch.rand(1, 64, 64, 3),
                                    "image2": torch.rand(1, 64, 64, 3)})
    text = _summary_of(result)
    assert "no such treatment: 'palette wsah'" in text
    assert result.ui["fil_edit_encoder"][0]["warned"] is True


def _latent_of(result):
    return result.args[3]


def test_a_mask_comes_back_aligned_to_the_reference_the_model_saw():
    """The whole reason this belongs here: only this node knows the resize.

    A mask is drawn at the reference's own size; the reference reaches the
    model resized. Pairing them anywhere else means reproducing this node's
    arithmetic.
    """
    vae = _FakeVae()
    _, _, result = _execute(clip=_VisionClip(), vae=vae, reference_mode="vision",
                            latent_megapixels=0.25,
                            images={"image1": torch.rand(1, 2048, 2048, 3)},
                            mask=torch.ones(1, 2048, 2048))
    latent = _latent_of(result)
    encoded = vae.encoded[0]
    assert latent["samples"] is vae.latents[0]
    # (-1, 1, H, W), the shape core's SetLatentNoiseMask writes.
    assert latent["noise_mask"].shape == (1, 1, encoded.shape[1], encoded.shape[2])


def test_a_mask_encodes_the_reference_even_in_vision_mode():
    """There is nothing to sample on top of otherwise — but it must not leak
    into the conditioning, which is exactly what `vision` mode is for."""
    vae = _FakeVae()
    _, _, result = _execute(clip=_VisionClip(), vae=vae, reference_mode="vision",
                            images={"image1": torch.rand(1, 64, 64, 3)},
                            mask=torch.ones(1, 64, 64))
    assert len(vae.encoded) == 1
    assert "reference_latents" not in result.args[0][0][1]
    assert _latent_of(result)["samples"] is vae.latents[0]


def test_the_mask_takes_the_first_reference_not_the_last():
    vae = _FakeVae()
    _, _, result = _execute(clip=_VisionClip(), vae=vae, reference_mode="latents",
                            images={"image2": torch.rand(1, 128, 64, 3),
                                    "image1": torch.rand(1, 64, 128, 3)},
                            mask=torch.ones(1, 64, 128))
    assert _latent_of(result)["samples"] is vae.latents[0]
    # Slot 1 is the landscape one; that is the geometry the summary names.
    assert "reference 1 at 128x64" in _summary_of(result)


def test_a_mask_without_a_vae_fails_with_a_sentence_that_says_what_to_do():
    with pytest.raises(ValueError, match="vae"):
        _execute(clip=_VisionClip(), reference_mode="vision",
                 images={"image1": torch.rand(1, 64, 64, 3)},
                 mask=torch.ones(1, 64, 64))


def test_the_latent_output_is_empty_but_valid_without_a_vae():
    _, _, result = _execute(clip=_VisionClip(), reference_mode="vision",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    latent = _latent_of(result)
    assert latent["samples"].shape == (1, 16, 64, 64)
    assert "noise_mask" not in latent


def test_a_mask_with_no_reference_says_so():
    _, _, result = _execute(clip=_VisionClip(), vae=_FakeVae(), reference_mode="vision",
                            mask=torch.ones(1, 64, 64))
    assert "nothing to mask" in _summary_of(result)


def test_the_summary_quotes_what_was_actually_sent():
    """Roles and vision blocks mean the encoder never gets what was typed."""
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, prompt="a rainy Tokyo street",
                            reference_mode="vision",
                            reference_cards='[{"role": "lighting"}]',
                            images={"image1": torch.rand(1, 64, 64, 3)})
    text = _summary_of(result)
    assert "Sent to the encoder:" in text
    # Exactly what the tokenizer saw, blocks and all.
    assert clip.prompts[0] in text


def test_the_quoted_text_includes_the_vision_blocks_when_a_role_is_sent():
    clip = _VisionClip()
    _, _, result = _execute(clip=clip, reference_mode="vision",
                            system_preset="use reference",
                            images={"image1": torch.rand(1, 64, 64, 3)})
    assert "Picture 1:" in _summary_of(result)
