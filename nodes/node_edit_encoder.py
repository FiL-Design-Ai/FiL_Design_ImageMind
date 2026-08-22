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

from . import _edit_clip_hooks as clip_hooks
from . import _edit_encode_cache as encode_cache
from . import _edit_reference_prep as reference_prep
from ..common import edit_roles
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
#
# How hard the reference is held, measured on Krea 2 with one seed, one
# reference and one instruction ("standing on a rainy Tokyo street at night"):
#
#   vision, 0.15 MP   the subject is recognisable but loose — much of the
#                     reference's hardware is invented afresh
#   vision, 0.50 MP   closer: the implant and the cabling come back
#   vision, 1.00 MP   closest of the three; face structure and hardware hold
#   latents           destroyed — the frame is a mosaic of reference tiles
#   both              the edit lands, with the mosaic bleeding through it
#
# So on this architecture the answer to "hold the reference better" is more
# vision resolution, not the latent channel. The default stays 0.15 (core's
# value for the Qwen edit nodes) because raising it changes the output of every
# saved workflow silently, and it costs vision tokens and time — but the dial is
# the one worth turning, and the tooltip says so.
#
# Related diagnostic, since the encoder cannot be asked what it saw: run with an
# empty prompt. What comes out is what the model took from the picture and
# nothing else — measured above, it is very nearly a reconstruction of the
# reference.

# The ready-made openings that used to live here — "edit this image", "keep
# subject, change scene", "use as style reference" — are gone, and with them the
# `prompt_preset` widget. Each said one thing about *every* reference at once, in
# words only, and the one that mattered ("style, not its subject") could not keep
# its promise: wording alone does not make an encoder unsee what it was handed,
# which is why that preset was once cut outright and then restored with a
# treatment it had no way to require.
#
# A role replaces them: one job, given to one picture, carrying the treatment
# that makes the job true. `common/edit_roles` holds the table, and maps the four old
# preset names onto the roles that replaced them so a workflow saved before this
# keeps meaning what it meant.


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


# Per-reference *strength* is deliberately absent, and this is not an oversight
# to be filled in later without measuring. `_blend_conditioning` interpolates
# two whole encodes; the contribution of one reference is not separable from
# the others inside a single conditioning tensor. A per-reference version would
# mean encoding once per reference with that one blanked and superposing the
# differences — N+1 encodes and an assumption of linearity that nothing here
# has tested. `krea-reference` gets it honestly instead, by scaling image
# embeddings inside the CLIP through a context manager, which is a patch on
# ComfyUI internals this node would then own.
#
# So the treatment is per reference and the strength is not, and the summary
# never implies otherwise.
# Channels for the placeholder latent when the VAE encoded nothing. The FLUX.2
# family this node targets is 16; core's `fix_empty_latent_channels` corrects an
# all-zero latent to whatever the model wants anyway, so this is a shape to hand
# on rather than a claim about the model.
_EMPTY_LATENT_CHANNELS = 16


def _masked_latent(main_latent, main_geometry, mask):
    """The `latent` output: the main reference, plus the mask aligned to it.

    The alignment is the point. A mask is drawn on the reference at its own
    size, while the reference reaches the model resized — and this node is the
    only thing that knows by how much, so pairing them anywhere else means
    reproducing its arithmetic and getting it wrong on the day it changes.

    Stored at image resolution in `(-1, 1, H, W)`, which is what core's
    `SetLatentNoiseMask` writes; `comfy.sample` scales it to latent size itself.
    """
    if main_latent is None:
        return {"samples": torch.zeros(1, _EMPTY_LATENT_CHANNELS, 64, 64)}
    latent = {"samples": main_latent}
    if mask is None:
        return latent
    height, width = main_geometry
    resized = comfy.utils.common_upscale(
        mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])),
        width, height, "bilinear", "disabled",
    )
    latent["noise_mask"] = resized
    return latent


def _treatments_for(count: int, default: str, override: str) -> list[str]:
    """One treatment name per reference, in slot order.

    The combo covers the common case — the same treatment for everything — and
    the override is for the case that made per-reference treatment worth having
    at all: one reference for its subject, another for its palette. Comma
    separated, in slot order.

    Fewer names than references repeats the last, so a single name still means
    "all of them" and `"palette wash, normal"` against three references treats
    the first and leaves the rest alone. Names are not validated here: an
    unknown one passes the image through untouched and `_summary` says which,
    rather than failing a run over a typo in a field that is meant to be typed
    in quickly.
    """
    names = [part.strip() for part in (override or "").split(",") if part.strip()]
    if not names:
        return [default] * count
    return [names[min(index, len(names) - 1)] for index in range(count)]


def _card_notes(cards, strengths, windows, vl_shapes, can_weigh) -> list[str]:
    """One short warning per card, empty where the card did what it said.

    The `summary` output already says all of this, in one place, for the whole
    run — and that is the problem it does not solve: which of five cards the
    sentence is about. A note sits on the card it belongs to, so the answer is
    where the question is asked.

    Ordered worst first: a card that reached nothing at all is worth saying
    before a card whose strength was the part that did not land.
    """
    notes = []
    for slot in range(len(cards)):
        weight = strengths[slot] if slot < len(strengths) else 1.0
        if not vl_shapes:
            notes.append(
                "This mode never shows the references to the text encoder, so this "
                "card's role and strength did nothing."
            )
        elif not can_weigh and (
            weight != 1.0
            or (slot < len(windows) and windows[slot] != edit_roles.DEFAULT_WINDOW)
        ):
            notes.append(
                "This text encoder builds no per-image embeddings, so neither the "
                "strength nor the window could be applied to this reference alone."
            )
        else:
            notes.append("")
    return notes


def _summary(
    mode, vl_shapes, latent_shapes, strength, prompt_strength, prompt_weighed, treatments, cards,
    windows,
    card_strengths, can_weigh, role_source, role_sent, method, speaks_vision,
    masked, main_geometry, sent_text,
):
    """Plain-language account of what this run actually did.

    Every trap found while getting this node working was silent: references
    discarded because no method was written, the source tiled into the frame
    because the latent channel was on, an instruction encoded with no idea what
    it referred to. None of them raised anything. This says out loud what the
    node chose, and warns about the two that still look like bugs when they are
    settings.

    `card_strengths` are the weights the encode actually ran under — the cards
    multiplied by the node-wide dial and clamped — not the numbers typed on
    either control. Two dials that combine have to report their product, or the
    line is a claim about the settings rather than about the run.
    """
    lines = []
    count = max(len(vl_shapes), len(latent_shapes))
    if not count:
        lines.append("No references wired — this is a plain text encode.")
    else:
        lines.append(f"{count} reference(s), mode '{mode}'.")
        if vl_shapes:
            uniform = len(set(treatments)) <= 1
            if uniform:
                sizes = ", ".join(f"{w}x{h}" for h, w in vl_shapes)
                one = treatments[0] if treatments else "normal"
                treated = "" if one in (None, "", "normal") else f", treated '{one}'"
                lines.append(f"  text encoder reads: {sizes}{treated}")
            else:
                # Different treatments per reference is the whole reason the
                # override exists, so name which got what rather than leaving
                # it to be counted out against the slot order.
                pairs = ", ".join(
                    f"{w}x{h} '{name}'" for (h, w), name in zip(vl_shapes, treatments)
                )
                lines.append(f"  text encoder reads: {pairs}")
        # The job each picture was given, which is the thing a reader wants to
        # check first and the thing no other line says: a treatment named on
        # its own does not reveal that it arrived because a role asked for it.
        jobs = [
            (slot, card.get("role"))
            for slot, card in enumerate(cards, start=1)
            if card.get("role", edit_roles.DEFAULT_ROLE) != edit_roles.DEFAULT_ROLE
        ]
        if jobs:
            lines.append(
                "  roles: " + ", ".join(f"{slot} '{role}'" for slot, role in jobs)
            )
        weights = [
            (slot, weight)
            for slot, weight in enumerate(card_strengths, start=1)
            if weight != 1.0
        ]
        timed = [
            (slot, window)
            for slot, window in enumerate(windows, start=1)
            if window != edit_roles.DEFAULT_WINDOW
        ]
        if timed and vl_shapes and can_weigh:
            lines.append(
                "  windows: "
                + ", ".join(
                    "{} '{}' ({:g}-{:g})".format(
                        slot, window, *edit_roles.WINDOWS[window]
                    )
                    for slot, window in timed
                )
            )
        if weights and not vl_shapes:
            lines.append(
                "  per-reference strengths ignored — this mode never shows the "
                "references to the text encoder, and that is the only place a single "
                "one can be weighed."
            )
        elif weights and can_weigh:
            lines.append(
                "  strengths: "
                + ", ".join(
                    f"{slot} {weight:g}" + (" (away)" if weight < 0 else "")
                    for slot, weight in weights
                )
            )
        if latent_shapes:
            sizes = ", ".join(f"{w}x{h}" for h, w in latent_shapes)
            lines.append(f"  VAE encodes: {sizes}  (method '{method}')")
        if abs(strength - 1.0) > 1e-6 and not vl_shapes:
            lines.append(
                f"  reference_strength {strength:g} ignored — it multiplies what the text "
                "encoder reads, and this mode never shows it the references."
            )

    if masked:
        if main_geometry:
            height, width = main_geometry
            lines.append(
                f"Masked edit: the latent output is reference 1 at {width}x{height}, "
                "with the mask scaled to match. Sample on top of it."
            )
        else:
            lines.append(
                "NOTE: a mask is wired but no reference is — there is nothing to mask, "
                "and the latent output is empty."
            )

    if abs(prompt_strength - 1.0) > 1e-6:
        if prompt_weighed:
            lines.append(
                f"Prompt strength {prompt_strength:g} — the instruction was encoded twice, once "
                "silenced, and the difference re-weighed."
            )
        else:
            lines.append(
                f"NOTE: prompt strength {prompt_strength:g} did nothing. It needs a written "
                "instruction and a text encoder whose token embeddings this node can reach "
                "(Qwen3-VL); one of the two was missing."
            )

    # The exact string that reached the tokenizer. The node prepends presets and,
    # when a role is sent, the vision blocks — so what was asked for is not what
    # was typed, and there was no way to see the difference.
    lines.append(f"Sent to the encoder: {sent_text!r}")

    if not role_source:
        lines.append("Encoder role: none.")
    elif role_sent:
        lines.append(f"Encoder role: sent ({role_source}).")
    else:
        lines.append(
            f"Encoder role: NOT sent ({role_source}) — a role only reaches a "
            "vision-language encoder that was given images to look at."
        )
        if edit_roles.inline_prefix(cards):
            lines.append(
                "  the reference roles went into the instruction itself instead — "
                "they are the opening of the text quoted above."
            )

    if latent_shapes:
        lines.append(
            "NOTE: the latent channel concatenates each reference to the frame's own "
            "tokens. Tiling the source into the output is what it does, not a fault — "
            "switch reference_mode to 'vision' if that is not what you want."
        )
    unknown = sorted({
        name for name in treatments
        if name and name not in reference_prep.TREATMENTS
    })
    if vl_shapes and unknown:
        lines.append(
            f"NOTE: no such treatment: {', '.join(repr(n) for n in unknown)}. Those "
            f"references went to the encoder untouched. Known: "
            f"{', '.join(reference_prep.TREATMENTS)}."
        )
    # A role brings its own treatment, so the only way to end up with a role
    # that cannot keep its promise is to override that treatment by hand. It is
    # a legitimate thing to want — and it is also exactly the silent failure
    # that got a prompt preset cut once, so it says so.
    disarmed = [
        slot
        for slot, card in enumerate(cards, start=1)
        if slot <= len(treatments)
        and treatments[slot - 1] in (None, "", "normal")
        and (edit_roles.ROLES.get(card.get("role")) or edit_roles.ROLES[edit_roles.DEFAULT_ROLE]).treatment
        not in (None, "", "normal")
    ]
    if vl_shapes and disarmed:
        lines.append(
            "NOTE: reference(s) "
            + ", ".join(str(slot) for slot in disarmed)
            + " were given a role that asks the encoder to ignore part of the picture, "
            "with the treatment that makes that true overridden to 'normal'. Wording "
            "alone does not achieve it — the encoder is handed the whole picture. Clear "
            "the override to let the role bring its own treatment back."
        )
    if vl_shapes and not can_weigh and any(weight != 1.0 for weight in card_strengths):
        lines.append(
            "NOTE: a card asked for its own strength, and this text encoder builds no "
            "per-image embeddings to weigh (only vision-language ones such as Qwen3-VL "
            "do). Every reference pulled the same. reference_strength still weighs them "
            "all together."
        )
    if vl_shapes and not speaks_vision:
        lines.append(
            "NOTE: this text encoder takes no images (FLUX.2's Mistral3 is one), so the "
            "'vision' channel reaches nothing here. Use 'latents' for this model."
        )
    return "\n".join(lines)


def _with_timestep_range(conditioning, start: float, end: float):
    """A copy of `conditioning` that only applies over `[start, end)`.

    The same two keys core's `ConditioningSetTimestepRange` writes. Copied
    rather than set in place: the caller holds the unranged conditioning and
    ranges it again for the next segment.
    """
    ranged = []
    for tokens, extra in conditioning:
        extra = dict(extra)
        extra["start_percent"] = float(start)
        extra["end_percent"] = float(end)
        ranged.append([tokens, extra])
    return ranged


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


def _rows(tokens):
    """The first tokenizer's row list out of a `{name: [row, ...]}` bag."""
    values = getattr(tokens, "values", None)
    if not callable(values):
        return []
    for rows in values():
        return rows
    return []


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
                io.Mask.Input(
                    "mask",
                    optional=True,
                    tooltip=t(
                        "ee_mask",
                        "Edit only this area of the FIRST reference. The node returns that reference as a latent with the mask aligned to it, so the sampler re-denoises the marked part and leaves the rest — this node is the only thing that knows how the reference was resized, which is what makes the mask line up. Needs the VAE wired.",
                    ),
                ),
                # Deliberately at the index `prompt_preset` used to hold. A
                # saved workflow stores widget values positionally, so removing
                # that combo outright would shift every widget after it by one;
                # taking its place instead means the old preset name arrives
                # here, where `edit_roles.parse_cards` recognises it and
                # returns the role that replaced it.
                io.String.Input(
                    "reference_cards",
                    default="",
                    optional=True,
                    tooltip=t(
                        "ee_cards",
                        "A job for each reference, in slot order, as JSON: "
                        '[{"role": "subject"}, {"role": "style"}]. The role decides what '
                        "the model takes from that picture and brings the treatment that "
                        "makes it true — 'style' washes the reference to a colour field so "
                        "there is no subject left to copy. Add \"treatment\" to a card to "
                        "override that. Roles: "
                        + ", ".join(edit_roles.ROLE_NAMES)
                        + ". Empty means every reference is used as it is.",
                    ),
                ),
                io.Combo.Input(
                    "system_preset",
                    options=list(SYSTEM_PRESETS),
                    default="none",
                    advanced=True,
                    tooltip=t(
                        "ee_preset",
                        "Legacy: a canned role for the text encoder. Reference cards write the roles now, one per picture, so this is kept for workflows saved before them and is hidden in the panel.",
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
                        "Legacy: the treatment for every reference that has no role of its own. Roles bring the treatment that matches the job, so this is kept for workflows saved before them and is hidden in the panel. A card's role, or its own 'treatment', wins over it.",
                    ),
                ),
                io.String.Input(
                    "treatment_per_reference",
                    default="",
                    optional=True,
                    advanced=True,
                    tooltip=t(
                        "ee_treatments",
                        "Legacy: per-reference treatments as comma-separated names in slot order. Reference cards replaced it — a card carries its own 'treatment' next to its role — and it is kept only so workflows saved before them keep working.",
                    ),
                ),
                io.Float.Input(
                    "reference_strength",
                    default=1.0, min=0.0, max=3.0, step=0.05,
                    optional=True,
                    tooltip=t(
                        "ee_strength",
                        "One dial over every reference card: each card's own strength is multiplied by this. 1.0 changes nothing. Set the cards for 'this one harder than that one' — this is for driving them all together from the graph. No effect in reference_mode 'latents', which never shows the references to the text encoder.",
                    ),
                ),
                io.Float.Input(
                    "vision_megapixels",
                    default=0.15, min=0.01, max=4.0, step=0.01,
                    optional=True, advanced=True,
                    tooltip=t(
                        "ee_vl_mp",
                        "Size of the copy the text encoder reads. This is the dial for holding a reference more closely: measured on Krea 2, 0.15 MP keeps the subject only loosely while 1.0 MP holds its structure and detail. 0.15 (~384x384) is what core uses and is kept as the default because raising it changes every saved workflow's output — and costs vision tokens and time.",
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
                io.Float.Input(
                    "prompt_strength",
                    default=1.0, min=0.0, max=2.0, step=0.05,
                    optional=True,
                    tooltip=t(
                        "ee_prompt_strength",
                        "How loudly the written instruction speaks against the pictures. 1.0 is as "
                        "written and costs nothing. Below 1 the references decide more and the text "
                        "less; 0 is what the model takes from the pictures alone. Above 1 pushes the "
                        "instruction harder. Anything but 1.0 encodes a second time with the "
                        "instruction silenced, and needs a text encoder this node can reach into — "
                        "the summary says when it could not.",
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
                # Appended, not inserted: an output added above this one
                # renumbers every output after it and re-wires saved workflows
                # without a word.
                io.Latent.Output(
                    display_name="latent",
                    tooltip=t(
                        "ee_latent",
                        "The first reference, VAE-encoded, to sample on top of — carrying the mask when one is wired. Empty unless the VAE encoded it: that is reference_mode 'latents'/'both', or any mode with a mask.",
                    ),
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
        mask=None,
        reference_cards="",
        system_preset="none",
        system_prompt="",
        reference_mode="vision",
        reference_treatment="normal",
        treatment_per_reference="",
        reference_latents_method="index_timestep_zero",
        reference_strength=1.0,
        prompt_strength=1.0,
        vision_megapixels=0.15,
        latent_megapixels=1.0,
    ) -> io.NodeOutput:
        references = _connected_images(images)
        cards = edit_roles.parse_cards(reference_cards, len(references))
        wants_vision = reference_mode in ("vision", "both")
        wants_latents = reference_mode in ("latents", "both")

        if references and wants_latents and vae is None:
            raise ValueError(
                "FiLEditEncoder: reference_mode is "
                f"{reference_mode!r}, which VAE-encodes the references, but `vae` "
                "is not wired. Wire the edit model's VAE, or switch "
                "reference_mode to 'vision'."
            )
        if references and mask is not None and vae is None:
            raise ValueError(
                "FiLEditEncoder: a `mask` is wired, which means sampling on top of "
                "the first reference, but `vae` is not. Wire the edit model's VAE, "
                "or remove the mask."
            )

        # Three sources, one answer per slot: the card's own override, the
        # role's treatment, and — for every slot still doing the default job —
        # the node-wide widgets, which is what a workflow saved before roles
        # existed has and all it has.
        treatments = [
            name
            for name, _source in edit_roles.treatments_for(
                cards,
                _treatments_for(
                    len(references), reference_treatment, treatment_per_reference
                ),
            )
        ]

        ref_latents = []
        # The first reference, encoded, for the `latent` output — what a masked
        # edit samples on top of. Kept apart from `ref_latents`: a mask must not
        # smuggle a reference into the conditioning that `vision` mode
        # deliberately keeps out of the frame.
        main_latent = None
        main_geometry = None
        images_vl = []
        vl_shapes = []
        latent_shapes = []
        # What goes to the `references` output: the copies the model was
        # actually given. In `vision`/`both` that is what the text encoder read;
        # in `latents` there is no such copy, so it is what the VAE encoded.
        prepared = []
        for slot, image in enumerate(references):
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
                    vl.movedim(1, -1)[:, :, :, :3], treatments[slot]
                )
                images_vl.append(vl_image)
                vl_shapes.append((int(vl_image.shape[1]), int(vl_image.shape[2])))
                prepared.append(vl_image)

            # The mask needs the first reference encoded whatever the mode:
            # there is nothing to sample on top of otherwise.
            if wants_latents or (mask is not None and slot == 0):
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
                latent_image = scaled.movedim(1, -1)[:, :, :, :3]
                encoded = vae.encode(latent_image)
                if slot == 0:
                    main_latent = encoded
                    main_geometry = (height, width)
                if wants_latents:
                    latent_shapes.append((height, width))
                    if not wants_vision:
                        prepared.append(latent_image)
                    ref_latents.append(encoded)

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

        # The roles the cards asked for, in the same block as the encoder role:
        # both are things said to the model before it looks at anything, and an
        # encoder that reads one reads the other.
        job_lines = edit_roles.system_lines(cards)
        system_block = '\n'.join(
            ([role.strip()] if role.strip() else []) + job_lines
        )
        if job_lines:
            role_source = f"{role_source} + reference roles" if role_source else "reference roles"

        text = prompt
        tokenize_kwargs = {"images": images_vl}
        if images_vl and system_block and _speaks_vision(clip):
            # The two go together or not at all: supplying `llama_template`
            # turns off the tokenizer's own vision-block insertion, so the
            # blocks have to come from the text — one per image, or the block
            # count stops matching the image count.
            text = "".join(
                _VISION_BLOCK.format(i + 1) for i in range(len(images_vl))
            ) + prompt
            tokenize_kwargs["llama_template"] = (
                _TEMPLATE_PREFIX + system_block + _TEMPLATE_SUFFIX
            )
        else:
            # No system channel to put them in — FLUX.2's Mistral3 has none, and
            # neither has a run with no pictures for the encoder to look at. The
            # roles then go where the model will still read them: the front of
            # the instruction. Saying nothing here is how removing the prompt
            # presets would have quietly emptied this node on those models.
            text = edit_roles.inline_prefix(cards) + prompt
        template = tokenize_kwargs.get("llama_template")

        # Where the written instruction sits in the tokenized row, found by
        # tokenizing the same call twice — as sent, and with the instruction
        # emptied. Done once, up here, because it depends on the text and not
        # on any of the weights below.
        def tokenize(with_text, with_images):
            return clip.tokenize(
                with_text, **{**tokenize_kwargs, "images": with_images}
            )

        prompt_span = None
        can_mute = clip_hooks.supports_muting(clip)
        wants_prompt_dial = abs(prompt_strength - 1.0) > 1e-6
        if wants_prompt_dial and can_mute and prompt.strip():
            prompt_span = clip_hooks.prompt_token_span(
                _rows(tokenize(text, images_vl)),
                # `text` is always the prefixes plus the instruction, in that
                # order, so the instruction is a suffix and can be cut by
                # length. Searching for it instead could match the same words
                # inside a role line.
                _rows(tokenize(text[: len(text) - len(prompt)], images_vl)),
            )

        def encode(with_images, scales=None, mute=False):
            """One encoder pass, reused when the same inputs come back.

            `scales` weighs individual references *inside* this pass, so it is
            part of what identifies it; the node-wide strength below is not,
            because that one is arithmetic on tensors this has already produced.
            That is what keeps turning the global dial free while a per-card
            one costs a pass the first time it moves.
            """
            key = encode_cache.make_key(clip, text, template, with_images, scales, mute)
            cached = encode_cache.lookup(key, clip)
            if cached is not None:
                return cached
            tokens = tokenize(text, with_images)
            if scales:
                clip_hooks.tag_images(tokens)
            with clip_hooks.scaled_images(clip, scales):
                with clip_hooks.muted_prompt(clip, prompt_span if mute else None):
                    conditioning = clip.encode_from_tokens_scheduled(tokens)
            encode_cache.store(key, clip, conditioning)
            return conditioning

        # What each card asked for, split by direction. A weight at or above
        # zero is how hard that reference pulls and rides along in the pass the
        # encoder was going to run anyway. Below zero means *away from* this
        # picture, which cannot be done in one pass: it needs the encode with
        # that reference held out, to see what it was contributing.
        # The node-wide dial is a multiplier over the cards rather than a
        # mechanism of its own. It used to be one: an encode against blank
        # references, interpolated with the real one. That bought a second way
        # to say the same thing, cost an extra pass to say it, and could only
        # ever move every reference together — so it is gone, and the dial now
        # rides the same seam the cards do. A card at 0.8 under a dial at 0.5
        # pulls at 0.4; a pushed-away card keeps its sign and is pushed less
        # hard. Clamped to the range the renders covered, which is also why the
        # summary prints what the encode actually used rather than what was
        # typed on either control.
        strengths = [
            max(edit_roles.STRENGTH_MIN, min(edit_roles.STRENGTH_MAX, weight * reference_strength))
            for weight in edit_roles.strengths_for(cards)
        ]
        looked_at = strengths[:len(images_vl)]
        pulls = {
            slot: (0.0 if weight < 0 else weight)
            for slot, weight in enumerate(looked_at)
            if weight != 1.0
        }
        pushes = {slot: -weight for slot, weight in enumerate(looked_at) if weight < 0}
        can_weigh = clip_hooks.supports_scaling(clip)
        if not can_weigh:
            pulls, pushes = {}, {}

        def composed(silenced=()):
            """The conditioning with `silenced` slots held out, at full cost.

            One place, so a sampling window — which needs this several times
            over with different slots held out — cannot drift from the plain
            path that has no windows at all.
            """
            weights = dict(pulls)
            for slot in silenced:
                weights[slot] = 0.0
            conditioning = encode(images_vl, weights or None)

            # One extra pass per pushed-away reference: the same encode with
            # that one back at full weight, so the difference is what it was
            # adding. Subtracting more of that difference than there was pushes
            # past merely dropping it, which is what "away from this image"
            # means.
            #
            # Several pushed at once are handled one at a time and superposed,
            # which assumes their contributions add. Nothing here has measured
            # that, and it is the reason the pushes are applied in slot order
            # rather than being combined into one correction.
            for slot, weight in pushes.items():
                if slot in silenced:
                    continue
                lifted = {other: value for other, value in weights.items() if other != slot}
                conditioning = _blend_conditioning(
                    conditioning, encode(images_vl, lifted or None), -weight
                )

            # The instruction's own weight. Silenced in place — same tokens,
            # same length — so the difference between the two encodes is the
            # text and nothing else, and can be re-added at any strength.
            # Removing the instruction instead would change the sequence
            # length, and `_blend_conditioning` would hand back the unweighted
            # encode without a word; that is the trap this path is shaped
            # around.
            if prompt_span is not None:
                conditioning = _blend_conditioning(
                    encode(images_vl, weights or None, mute=True),
                    conditioning,
                    prompt_strength,
                )
            return conditioning

        prompt_weighed = prompt_span is not None

        # When during the run each reference is allowed to speak. Measured on
        # Krea 2: the early steps settle the layout and the later ones the
        # look, so a reference held out of the first fifth lends its surface
        # without dictating the frame (see `edit_roles.WINDOWS`).
        #
        # The run is cut at every window edge, and each piece is encoded with
        # the references that are silent there held out. Pieces are then
        # concatenated — a sampler reads a conditioning list and applies each
        # entry over its own `start_percent`/`end_percent`, which is how core's
        # `ConditioningSetTimestepRange` and `ConditioningCombine` do it by
        # hand.
        windows = edit_roles.windows_for(cards)[:len(images_vl)]
        windowed = can_weigh and any(
            window != edit_roles.DEFAULT_WINDOW for window in windows
        )
        if not windowed:
            conditioning = composed()
        else:
            edges = edit_roles.WINDOW_EDGES
            segments = []
            for low, high in zip(edges, edges[1:]):
                if high <= low:
                    continue
                silenced = tuple(
                    slot for slot, window in enumerate(windows)
                    if not edit_roles.active_at(window, low, high)
                )
                segments.extend(_with_timestep_range(composed(silenced), low, high))
            conditioning = segments

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
            reference_mode, vl_shapes, latent_shapes, reference_strength,
            prompt_strength, prompt_weighed, treatments, cards, windows, strengths, can_weigh, role_source,
            bool(tokenize_kwargs.get("llama_template")),
            reference_latents_method, _speaks_vision(clip),
            mask is not None, main_geometry, text,
        )

        return io.NodeOutput(
            conditioning,
            summary,
            reference_prep.as_preview_batch(prepared),
            _masked_latent(main_latent, main_geometry, mask),
            # The report is worth nothing unwired. Every trap this node has is
            # silent by nature, so its warning has to reach someone who does not
            # already know to go looking for it — `execution.py` sends an
            # `executed` message for any node returning a `ui` payload, output
            # node or not, and the panel shows the last line on the node itself.
            ui={
                "text": [summary],
                "fil_edit_encoder": [{
                    "summary": summary,
                    "warned": "NOTE:" in summary,
                    # What each card's picture looked like by the time the model
                    # saw it — the panel puts them on the cards themselves.
                    "thumbs": reference_prep.thumbnails(prepared),
                    # And, per card, the reason its own picture may not have
                    # arrived — on the card rather than in one shared sentence.
                    "notes": _card_notes(cards, strengths, windows, vl_shapes, can_weigh),
                }],
            },
        )
