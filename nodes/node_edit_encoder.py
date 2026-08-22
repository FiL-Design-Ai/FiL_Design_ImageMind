"""FiL Edit Encoder — one node where core wants six.

ComfyUI's stock edit pipeline for FLUX.2-family models (Klein, Dev, and the
Krea2 merges) is a chain of separate nodes per reference image:
``ImageScaleToTotalPixels`` -> ``VAEEncode`` -> ``ReferenceLatent``, repeated,
plus a standalone ``CLIPTextEncode`` for the prompt. This node folds the whole
chain into one: prompt + any number of reference images in, one
``CONDITIONING`` out, carrying the ``reference_latents`` and the
``reference_latents_method`` the model consumes.

Deliberately thin on model specifics: references resize full-auto (native size,
capped at 1MP — the band the edit models train in), encode through the
workflow's VAE, and land on the conditioning the way core's ``ReferenceLatent``
does. Which edit model is on the receiving end is the graph's business, so the
node works unchanged for any model that reads ``reference_latents`` the FLUX.2
way.
"""

import math
import re

import comfy.utils
import node_helpers
import torch
from comfy_api.latest import io

from . import _edit_encode_cache as encode_cache
from . import _edit_reference_prep as reference_prep
from ..common.brand import CATEGORY_CONDITIONING
from ..common.localization import t

# The two ways a reference can reach an edit model. They are different halves
# of the model and this node used to do both at once, which is why it applied
# the edit *and* pasted the source into the frame.
#
#   vision   the picture goes to the text encoder, which looks at it. Nothing
#            of it enters the canvas. This is what `custom_nodes/krea-reference`
#            does for Krea 2 — that pack never writes `reference_latents` at all.
#   latents  the picture is VAE-encoded and concatenated to the frame's own
#            tokens. This is core's ImageScaleToTotalPixels -> VAEEncode ->
#            ReferenceLatent chain, the FLUX.2/Kontext way. Tiling the source
#            into the output is what this mechanism *is*; no
#            `reference_latents_method` turns it off.
#   both     both channels, which is only sensible when a model is trained for
#            it. Measured on Krea 2 it edits correctly and shows the reference
#            bleeding through as a mosaic.
#
# Default is `vision`: it is the mode that works on the vision-language text
# encoders this node is aimed at, and the one that cannot silently corrupt the
# frame. A FLUX.2 graph wanting the Kontext behaviour asks for `latents`.
REFERENCE_MODES = ["vision", "latents", "both"]

# Measured on Krea 2 (`cielbleu_krea2_v1_int8`), one reference, fixed seed, one
# generation per value — because reading the code was not enough to predict any
# of this:
#
#   omitted   references dropped entirely, silently
#   offset    reference and output tiled into a contact sheet
#   index     same contact sheet
#   uxo       same contact sheet
#   index_timestep_zero   one frame, the edit applied  <- the only usable one
#
# Krea 2 is its own architecture (`image_model = "krea2"`), not FLUX.2, so
# `comfy/ldm/flux/model.py` — where the offset/index/uxo branches live and
# actually differ — never runs for it. `comfy/ldm/krea2/model.py` gates on
# `if ref_method is not None`, positions every reference by its ordinal
# regardless of the value, and looks at the string once more only to check for
# "index_timestep_zero". That is why three of the values are indistinguishable
# here and why leaving it unset is not "let the model decide" but "throw the
# references away": krea2's own `default_ref_method` is None.
#
# So there is no "auto". An earlier revision of this file had one, meaning
# "write no method at all"; on FLUX.2 that is right (its detected default is
# "index", comfy/model_detection.py) and on Krea 2 it quietly disabled the
# entire feature.
#
# Core knows a fifth value, "negative_index", and it is deliberately not here:
# it belongs to Qwen Image Layered (comfy/model_detection.py, the
# `use_additional_t_cond` branch), an architecture this node does not target.
# Adding it would offer a value that does nothing for every model this node is
# for. Revisit only if Qwen Image joins the target list.
_REFERENCE_METHODS = ["index_timestep_zero", "index", "offset", "uxo"]

# A second, much smaller copy of every reference goes to the *text* encoder.
#
# These edit models are driven by a vision-language text encoder (Qwen3-VL for
# Krea2), whose tokenizer picks a different prompt template depending on
# whether it was handed any images: none gets the text-only template, images
# get one carrying a `<|vision_start|><|image_pad|><|vision_end|>` block per
# picture (comfy/text_encoders/qwen3vl.py, tokenize_with_weights). Encoding the
# instruction without them tells the model to change something it was never
# shown.
#
# The two copies are sized on their own axes — `vision_megapixels` for the one
# the encoder reads, `latent_megapixels` for the one the VAE encodes. They feed
# different halves of the model and neither wants the other's resolution.

# A role the vision-language encoder can be given before it reads the picture,
# offered through `system_preset` below.
#
# `krea-reference`, `qweneditutils` and core's `TextEncodeQwenImageEditPlus` all
# send something like it. Measured on Krea 2 it is not free: it makes a
# style-only prompt use the reference at all, and it makes an explicit "keep her
# pose" land less exactly — "Generate a new image that meets the user's
# requirements" invites re-invention.
SYSTEM_PROMPT_SUGGESTED = (
    "Describe the key features of the input image (color, shape, size, texture, "
    "objects, background), then explain how the user's text instruction should "
    "alter or modify the image. Generate a new image that meets the user's "
    "requirements while maintaining consistency with the original input where "
    "appropriate."
)

# Which of those roles to send, as a choice rather than a paste.
#
# Both entries are measured on Krea 2, same seed, same reference:
#
#   none            a prompt that says "keep her face and her pose" is obeyed
#                   exactly. A prompt that only describes a *style* — the usual
#                   "cinematic lighting, 85mm, film grain" — leaves the model no
#                   reason to use the reference, and it does not.
#   use reference   that style-only prompt now uses the reference. The cost is
#                   that an explicit "keep her pose" is followed less closely:
#                   "Generate a new image that meets the user's requirements"
#                   invites re-invention.
#
# So the rule the presets encode: describing a style, pick `use reference`;
# giving an instruction, leave it on `none`.
# Ready-made openings for the instruction itself.
#
# Not a replacement for the prompt: each is prepended to whatever is typed, so
# "keep subject, change scene" plus "a rainy Tokyo street" reads as one
# instruction.
#
# Three, because five were written and two of them lied. Each entry below was
# generated on Krea 2 in `vision` mode, one seed, the same reference:
#
#   none                        the reference carries through anyway — in
#                               `vision` the encoder is looking at it whatever
#                               the words say.
#   edit this image             much the same, said out loud.
#   keep subject, change scene  works, and holds the reference's pose closest
#                               of the three.
#
#   use as style reference     works, but only with a `reference_treatment`.
#
# 'keep the scene, change the subject' stays cut: it came back with the subject
# copied in full, and there is nothing to treat that would fix it — the whole
# picture is the subject there.
#
# 'use as style reference' was cut for the same reason and has been restored,
# because `reference_treatment` is the thing that was missing. Measured on
# Krea 2, one seed, a style-only prompt, the same portrait reference:
#
#   treatment 'normal'        the reference's subject is reproduced in full,
#                             exactly as when the preset was first cut.
#   treatment 'palette wash'  the subject is gone and a new one appears.
#
# And the washed reference is still doing something: the same run against a
# teal reference instead of a warm one gives a different picture in a cooler
# palette, so this is not simply the reference being ignored.
#
# The preset therefore ships with the one condition it needs, and `_summary`
# says so out loud when it is selected with no treatment — the alternative
# would be the silent wrongness that got it cut the first time.
PROMPT_PRESETS = {
    "none": "",
    "edit this image": "Edit the reference image. ",
    "keep subject, change scene": (
        "Keep the subject of the reference image — their face, hair and pose — "
        "exactly as they are, and change the scene around them to: "
    ),
    "use as style reference": (
        "Use the reference image only for its style — its palette, its light and "
        "the way it is rendered. Do not reproduce its subject. Paint instead: "
    ),
}

# The preset above needs the reference treated, or it promises what it cannot
# deliver. Named here so `_summary` and the preset list cannot drift apart.
STYLE_PRESET = "use as style reference"

SYSTEM_PRESETS = {
    "none": "",
    "use reference": SYSTEM_PROMPT_SUGGESTED,
}

# Legacy value. `system_preset` used to offer a third entry, "custom", and the
# `system_prompt` field below did nothing unless it was selected — so text typed
# into the field with the preset left on "none" was discarded without a word.
# The rule is now "a named preset wins; otherwise the field is used", which
# makes "custom" indistinguishable from "none" and so it is gone from the list.
# Saved workflows still carry it, and it still means what it always meant.
PRESET_CUSTOM = "custom"


def _role_text(system_preset: str, system_prompt: str) -> tuple[str, str]:
    """The role to send, and where it came from (for the summary).

    Returns `("", "")` when there is no role at all.
    """
    if system_preset not in ("none", PRESET_CUSTOM):
        text = SYSTEM_PRESETS.get(system_preset, "")
        return (text, f"preset {system_preset!r}") if text.strip() else ("", "")
    text = system_prompt or ""
    return (text, "custom field") if text.strip() else ("", "")

_TEMPLATE_PREFIX = "<|im_start|>system\n"
_TEMPLATE_SUFFIX = "<|im_end|>\n<|im_start|>user\n{}<|im_end|>\n<|im_start|>assistant\n"
_VISION_BLOCK = "Picture {}: <|vision_start|><|image_pad|><|vision_end|>"


def _speaks_vision(clip) -> bool:
    """True when this CLIP's tokenizer inserts its own vision blocks.

    Qwen3-VL, Qwen3.5, JoyImage and friends define `llama_template_images` and
    build one `<|vision_start|>` block per image by themselves. FLUX.2's own
    Mistral3 tokenizer does not — it has a single text template and would take
    a Qwen-style `<|im_start|>system` template literally, wrecking the prompt.

    A heuristic on ComfyUI internals, so it fails to False: when in doubt this
    node sends no template and the tokenizer keeps its own behaviour, which is
    what it did before the system prompt existed.
    """
    tokenizer = getattr(clip, "tokenizer", None)
    if tokenizer is None:
        return False
    if hasattr(tokenizer, "llama_template_images"):
        return True
    # `SD1Tokenizer` holds the real one under the attribute its `clip` names.
    leaf_name = getattr(tokenizer, "clip", None)
    if not isinstance(leaf_name, str):
        return False
    return hasattr(getattr(tokenizer, leaf_name, None), "llama_template_images")


_SLOT_INDEX_RE = re.compile(r"(\d+)\D*$")


def _slot_index(name: str) -> int:
    """Trailing slot number of an Autogrow input name.

    The UI names the slots `image1`, `image2`, ... while a hand-built API
    prompt is free to spell them `image_1` — the wiring order must survive
    both, so only the trailing digits matter.
    """
    match = _SLOT_INDEX_RE.search(name)
    return int(match.group(1)) if match else 0


def _summary(
    mode, vl_shapes, latent_shapes, strength, blended, treatment, prompt_preset,
    role_source, role_sent, method, speaks_vision,
):
    """Plain-language account of what this run actually did.

    Every trap found while getting this node working was silent: references
    discarded because no method was written, the source tiled into the frame
    because the latent channel was on, an instruction encoded with no idea what
    it referred to. None of them raised anything. This says out loud what the
    node chose, and warns about the two that still look like bugs when they are
    settings.

    `blended` is passed rather than derived from `strength`, because the two
    part company: the strength dial interpolates two *text-encoder* passes, and
    in `latents` mode there is no such pass to interpolate. This line used to be
    printed from `strength` alone and so announced a blend that never happened.
    """
    lines = []
    count = max(len(vl_shapes), len(latent_shapes))
    if not count:
        lines.append("No references wired — this is a plain text encode.")
    else:
        lines.append(f"{count} reference(s), mode '{mode}'.")
        if vl_shapes:
            sizes = ", ".join(f"{w}x{h}" for h, w in vl_shapes)
            treated = "" if treatment in (None, "", "normal") else f", treated '{treatment}'"
            lines.append(f"  text encoder reads: {sizes}{treated}")
        if latent_shapes:
            sizes = ", ".join(f"{w}x{h}" for h, w in latent_shapes)
            lines.append(f"  VAE encodes: {sizes}  (method '{method}')")
        if abs(strength - 1.0) > 1e-6:
            if not blended:
                lines.append(
                    f"  strength {strength:g} ignored — this mode has no vision pass to "
                    "blend. Reference strength only weighs what the text encoder reads."
                )
            elif latent_shapes:
                lines.append(
                    f"  strength {strength:g} — applied to the vision half only; the "
                    "latents are unweighted."
                )
            else:
                lines.append(f"  strength {strength:g} — blended against blank references.")

    if not role_source:
        lines.append("Encoder role: none.")
    elif role_sent:
        lines.append(f"Encoder role: sent ({role_source}).")
    else:
        lines.append(
            f"Encoder role: NOT sent ({role_source}) — a role only reaches a "
            "vision-language encoder that was given images to look at."
        )

    if latent_shapes:
        lines.append(
            "NOTE: the latent channel concatenates each reference to the frame's own "
            "tokens. Tiling the source into the output is what it does, not a fault — "
            "switch reference_mode to 'vision' if that is not what you want."
        )
    if vl_shapes and prompt_preset == STYLE_PRESET and treatment in (None, "", "normal"):
        lines.append(
            "NOTE: the style preset asks the encoder to ignore the reference's subject, "
            "and wording alone does not achieve that — it is handed the whole picture. "
            "Set reference_treatment (measured: 'palette wash') so there is no subject "
            "left to copy."
        )
    if vl_shapes and not speaks_vision:
        lines.append(
            "NOTE: this text encoder takes no images (FLUX.2's Mistral3 is one), so the "
            "'vision' channel reaches nothing here. Use 'latents' for this model."
        )
    return "\n".join(lines)


def _blend_conditioning(weak, strong, strength: float):
    """`weak + (strong - weak) * strength`, entry by entry.

    The two encodes have to agree in shape, which is why the weak one is made
    by handing the encoder *blank* references rather than none: dropping the
    images changes the prompt template and with it the token count, and there
    is nothing to interpolate between two different sequence lengths. Blank
    references keep every dimension and only empty out what the vision tower
    sees.

    `krea-reference` gets the same effect by scaling the image embeddings
    inside the CLIP through a context manager. That is finer-grained — it can
    weigh one reference against another — and it is a patch on ComfyUI
    internals this node would then own. This stays outside, at the cost of a
    second encode and one strength for all references.

    Anything that does not line up is returned as the strong encode, so a
    tokenizer this was not written against loses the feature rather than the
    output.
    """
    if len(weak) != len(strong):
        return strong
    blended = []
    for weak_entry, strong_entry in zip(weak, strong):
        weak_tokens, weak_extra = weak_entry[0], weak_entry[1]
        strong_tokens, strong_extra = strong_entry[0], strong_entry[1]
        if getattr(weak_tokens, "shape", None) != getattr(strong_tokens, "shape", None):
            return strong
        extra = dict(strong_extra)
        weak_pooled = weak_extra.get("pooled_output")
        strong_pooled = strong_extra.get("pooled_output")
        if (
            weak_pooled is not None
            and strong_pooled is not None
            and weak_pooled.shape == strong_pooled.shape
        ):
            extra["pooled_output"] = weak_pooled + (strong_pooled - weak_pooled) * strength
        blended.append([weak_tokens + (strong_tokens - weak_tokens) * strength, extra])
    return blended


def _connected_images(images: dict | None) -> list:
    """Autogrow values in slot order, skipping unconnected inputs."""
    if not images:
        return []
    ordered = sorted(images, key=_slot_index)
    return [images[name] for name in ordered if images[name] is not None]


class FiLEditEncoder(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLEditEncoder",
            display_name="🎯 Edit Encoder",
            category=CATEGORY_CONDITIONING,
            description="🎯 FiL Edit Encoder — prompt + reference images in one conditioning for FLUX.2-family edit models (Krea2, Klein, Dev).",
            inputs=[
                io.Clip.Input(
                    "clip",
                    tooltip=t("ee_clip", "Text encoder of the edit model (e.g. Qwen3-VL for FLUX.2/Krea2)."),
                ),
                io.String.Input(
                    "prompt",
                    multiline=True,
                    dynamic_prompts=True,
                    tooltip=t("ee_prompt", "Edit instruction: what to change, keep, or compose from the references."),
                ),
                io.Vae.Input(
                    "vae",
                    optional=True,
                    tooltip=t("ee_vae", "VAE of the edit model. Only needed when reference_mode uses latents."),
                ),
                io.Autogrow.Input(
                    "images",
                    template=io.Autogrow.TemplatePrefix(
                        io.Image.Input("image"),
                        prefix="image",
                        min=0,
                        max=10,
                    ),
                    optional=True,
                    tooltip=t(
                        "ee_images",
                        "Reference images to edit from. Each adds its latent to the conditioning — VRAM and sampling time grow with every one.",
                    ),
                ),
                io.Combo.Input(
                    "prompt_preset",
                    options=list(PROMPT_PRESETS),
                    default="none",
                    tooltip=t(
                        "ee_prompt_preset",
                        "A ready-made opening, prepended to whatever you type. Edit models follow an explicit instruction far more closely than a bare description.",
                    ),
                ),
                io.Combo.Input(
                    "system_preset",
                    options=list(SYSTEM_PRESETS),
                    default="none",
                    advanced=True,
                    tooltip=t(
                        "ee_preset",
                        "Role sent to the text encoder. 'none' for a prompt that gives an instruction ('change X, keep Y') — it is followed most closely that way, and leaves the system_prompt field below free to supply a role of your own. 'use reference' for a prompt that only describes a style, which otherwise leaves the model no reason to look at the reference.",
                    ),
                ),
                io.String.Input(
                    "system_prompt",
                    multiline=True,
                    default="",
                    optional=True,
                    advanced=True,
                    tooltip=t(
                        "ee_system",
                        "Optional role for the text encoder, sent before it reads the references. Used whenever system_preset is 'none' and this is not empty. Empty (the default) leaves the tokenizer's own template alone, which held a pose better than the usual 'describe then modify' wording in testing. Only reaches vision-language encoders (Qwen3-VL); ignored for FLUX.2's Mistral3, which would read it literally.",
                    ),
                ),
                io.Combo.Input(
                    "reference_mode",
                    options=REFERENCE_MODES,
                    default="vision",
                    tooltip=t(
                        "ee_mode",
                        "How references reach the model. 'vision': the text encoder looks at them, nothing enters the frame (Krea 2). 'latents': they are VAE-encoded into the frame itself (FLUX.2/Kontext) — this is what tiles the source into the output. 'both': both channels.",
                    ),
                ),
                io.Combo.Input(
                    "reference_treatment",
                    options=reference_prep.TREATMENTS,
                    default="normal",
                    tooltip=t(
                        "ee_treatment",
                        "What to do to each reference before the text encoder looks at it. 'normal' shows it as it is. The blurs and 'palette wash' strip detail the model should not copy, which is how you use a picture for its style or its colours without pulling its subject in. Never touches the copy the VAE encodes.",
                    ),
                ),
                io.Float.Input(
                    "reference_strength",
                    default=1.0, min=0.0, max=3.0, step=0.05,
                    optional=True,
                    tooltip=t(
                        "ee_strength",
                        "How hard the references pull on the text encoder. 1.0 is the plain encode and costs nothing; anything else encodes a second time against blank references and interpolates, so 0 ignores them and above 1 exaggerates them. Has no effect in reference_mode 'latents', which has no text-encoder pass to weigh — the summary output says so.",
                    ),
                ),
                io.Float.Input(
                    "vision_megapixels",
                    default=0.15, min=0.01, max=4.0, step=0.01,
                    optional=True, advanced=True,
                    tooltip=t(
                        "ee_vl_mp",
                        "Size of the copy the text encoder reads. 0.15 MP (~384x384) is what core uses — bigger lets it read fine detail, at more vision tokens and more time.",
                    ),
                ),
                io.Float.Input(
                    "latent_megapixels",
                    default=1.0, min=0.1, max=4.0, step=0.05,
                    optional=True, advanced=True,
                    tooltip=t(
                        "ee_lat_mp",
                        "Cap for the copy the VAE encodes, when reference_mode uses latents. References smaller than this are left at native size — this only tames the giants.",
                    ),
                ),
                io.Combo.Input(
                    "reference_latents_method",
                    options=_REFERENCE_METHODS,
                    default="index_timestep_zero",
                    advanced=True,
                    tooltip=t(
                        "ee_method",
                        "Only used when reference_mode sends latents. On Krea 2 every value behaves the same except index_timestep_zero.",
                    ),
                ),
            ],
            outputs=[
                io.Conditioning.Output(
                    display_name="conditioning",
                    tooltip=t("ee_out", "Prompt conditioning carrying every reference latent — feed the sampler's positive input."),
                ),
                io.String.Output(
                    display_name="summary",
                    tooltip=t("ee_summary", "What this run did with the references, and a note when a setting looks like a bug but is not."),
                ),
                io.Image.Output(
                    display_name="references",
                    tooltip=t("ee_refs_out", "The prepared copies the model actually received — the text encoder's in 'vision' and 'both', the VAE's in 'latents'. Wire a Preview Image here to see what it read."),
                ),
            ],
            search_aliases=["edit", "reference", "flux2", "krea", "klein", "inpaint", "conditioning"],
        )

    @classmethod
    def execute(
        cls,
        clip,
        prompt,
        vae=None,
        images=None,
        prompt_preset="none",
        system_preset="none",
        system_prompt="",
        reference_mode="vision",
        reference_treatment="normal",
        reference_latents_method="index_timestep_zero",
        reference_strength=1.0,
        vision_megapixels=0.15,
        latent_megapixels=1.0,
    ) -> io.NodeOutput:
        prompt = PROMPT_PRESETS.get(prompt_preset, "") + prompt
        references = _connected_images(images)
        wants_vision = reference_mode in ("vision", "both")
        wants_latents = reference_mode in ("latents", "both")

        if references and wants_latents and vae is None:
            raise ValueError(
                "FiLEditEncoder: reference_mode is "
                f"{reference_mode!r}, which VAE-encodes the references, but `vae` "
                "is not wired. Wire the edit model's VAE, or switch "
                "reference_mode to 'vision'."
            )

        ref_latents = []
        images_vl = []
        vl_shapes = []
        latent_shapes = []
        # What goes to the `references` output: the copies the model was
        # actually given. In `vision`/`both` that is what the text encoder read;
        # in `latents` there is no such copy, so it is what the VAE encoded.
        prepared = []
        for image in references:
            samples = image.movedim(-1, 1)
            native = samples.shape[3] * samples.shape[2]

            if wants_vision:
                # The copy the text encoder reads. No /8 alignment and no cap
                # on growth: this one never reaches a VAE.
                vl_scale = math.sqrt(max(1, int(vision_megapixels * 1024 * 1024)) / native)
                vl = comfy.utils.common_upscale(
                    samples,
                    max(1, round(samples.shape[3] * vl_scale)),
                    max(1, round(samples.shape[2] * vl_scale)),
                    "area",
                    "disabled",
                )
                vl_image = reference_prep.apply_treatment(
                    vl.movedim(1, -1)[:, :, :, :3], reference_treatment
                )
                images_vl.append(vl_image)
                vl_shapes.append((int(vl_image.shape[1]), int(vl_image.shape[2])))
                prepared.append(vl_image)

            if wants_latents:
                # The copy the VAE encodes. Full-auto: never upscale — small
                # references stay native (fewer latent tokens, no invented
                # detail), the cap only tames the giants.
                #
                # "area"/"disabled" matches core's `ImageScaleToTotalPixels`.
                # "lanczos" rings on a heavy downscale, and "center" crops the
                # reference whenever rounding each axis to /8 shifts the
                # aspect — core never crops here.
                total = min(native, max(1, int(latent_megapixels * 1024 * 1024)))
                scale_by = math.sqrt(total / native)
                width = max(8, round(samples.shape[3] * scale_by / 8.0) * 8)
                height = max(8, round(samples.shape[2] * scale_by / 8.0) * 8)
                scaled = comfy.utils.common_upscale(samples, width, height, "area", "disabled")
                latent_shapes.append((height, width))
                latent_image = scaled.movedim(1, -1)[:, :, :, :3]
                if not wants_vision:
                    prepared.append(latent_image)
                ref_latents.append(vae.encode(latent_image))

        # `images` reaching the tokenizer is what makes the vision half of the
        # encoder look at the references at all. An empty list selects the
        # text-only template, which is exactly right when there is nothing to
        # look at — or when the graph asked for latents only.
        #
        # No `<|vision_start|>` prefix and no `llama_template` of our own:
        # qwen3vl's tokenizer inserts one vision block per image by itself
        # whenever no template is supplied. Passing both, as
        # `krea-reference` does, means supplying the template too — do one or
        # the other, never half of each, or the block count stops matching the
        # image count.
        role, role_source = _role_text(system_preset, system_prompt)

        text = prompt
        tokenize_kwargs = {"images": images_vl}
        if images_vl and role.strip() and _speaks_vision(clip):
            # The two go together or not at all: supplying `llama_template`
            # turns off the tokenizer's own vision-block insertion, so the
            # blocks have to come from the text — one per image, or the block
            # count stops matching the image count.
            text = "".join(
                _VISION_BLOCK.format(i + 1) for i in range(len(images_vl))
            ) + prompt
            tokenize_kwargs["llama_template"] = (
                _TEMPLATE_PREFIX + role.strip() + _TEMPLATE_SUFFIX
            )
        template = tokenize_kwargs.get("llama_template")

        def encode(with_images):
            """One encoder pass, reused when the same inputs come back.

            Only the inputs are keyed — the strength is applied below, on
            tensors this has already produced. That is what makes turning the
            dial cost nothing: both passes are already in hand.
            """
            key = encode_cache.make_key(clip, text, template, with_images)
            cached = encode_cache.lookup(key, clip)
            if cached is not None:
                return cached
            tokens = clip.tokenize(text, **{**tokenize_kwargs, "images": with_images})
            conditioning = clip.encode_from_tokens_scheduled(tokens)
            encode_cache.store(key, clip, conditioning)
            return conditioning

        conditioning = encode(images_vl)

        # Only when asked for: at 1.0 this is the encode above and nothing more
        # is spent. In `latents` mode `images_vl` is empty and there is no
        # second pass to interpolate — the summary says so rather than letting
        # the dial look like it did something.
        blended = bool(images_vl) and abs(reference_strength - 1.0) > 1e-6
        if blended:
            conditioning = _blend_conditioning(
                encode([torch.zeros_like(image) for image in images_vl]),
                conditioning,
                reference_strength,
            )

        if ref_latents:
            # `append=True` for the latents, as every core node that sets them
            # does — chaining this after another edit node must add to its
            # references, not replace them. The method is a plain string and is
            # set without appending, or a second pass would concatenate it.
            conditioning = node_helpers.conditioning_set_values(
                conditioning, {"reference_latents": ref_latents}, append=True
            )
            conditioning = node_helpers.conditioning_set_values(
                conditioning, {"reference_latents_method": reference_latents_method}
            )

        summary = _summary(
            reference_mode, vl_shapes, latent_shapes, reference_strength, blended,
            reference_treatment, prompt_preset, role_source,
            bool(tokenize_kwargs.get("llama_template")),
            reference_latents_method, _speaks_vision(clip),
        )

        return io.NodeOutput(
            conditioning,
            summary,
            reference_prep.as_preview_batch(prepared),
            # The report is worth nothing unwired. Every trap this node has is
            # silent by nature, so its warning has to reach someone who does not
            # already know to go looking for it — `execution.py` sends an
            # `executed` message for any node returning a `ui` payload, output
            # node or not, and the panel shows the last line on the node itself.
            ui={
                "text": [summary],
                "fil_edit_encoder": [{"summary": summary, "warned": "NOTE:" in summary}],
            },
        )
