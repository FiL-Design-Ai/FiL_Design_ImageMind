"""Caption prompts, normalisation and the per-frame batch loop."""

from __future__ import annotations

from FiL_Design_ImageMind.common.dataset import captioning


class _RecordingClient:
    """Captures every `generate()` call and replays canned answers."""

    def __init__(self, answers=None):
        self.calls = []
        self._answers = list(answers or [])

    def generate(self, **kwargs):
        self.calls.append(kwargs)
        if self._answers:
            return self._answers.pop(0)
        return f"answer {len(self.calls)}"


def test_system_prompt_names_the_varying_features_and_forbids_the_invariants():
    prompt = captioning.build_caption_system_prompt(
        mode="natural", language="en", max_words=45,
        class_token="woman", dont_caption="her face, red hair",
    )

    assert "45 words" in prompt
    for varying in ("pose", "background", "lighting", "camera angle"):
        assert varying in prompt
    # The invariant must be both listed and framed as forbidden.
    assert "her face, red hair" in prompt
    assert "Never mention" in prompt
    assert "belong to the trigger word" in prompt


def test_caption_modes_ask_for_different_shapes():
    tags = captioning.build_caption_system_prompt(mode="tags")
    natural = captioning.build_caption_system_prompt(mode="natural")

    assert "lowercase tags" in tags
    assert "natural-language caption" in natural
    # An unknown mode must not produce a prompt without any format instruction.
    assert "natural-language caption" in captioning.build_caption_system_prompt(mode="bogus")


def test_normalize_caption_flattens_and_truncates():
    raw = "This image shows a **woman** standing\n\nin the rain.\n"
    assert captioning.normalize_caption(raw) == "a woman standing in the rain."

    assert captioning.normalize_caption("one two three four five", max_words=3) == "one two three"


def test_normalize_caption_strips_medium_preambles():
    """'a photo of' would otherwise train the medium into the concept."""
    assert captioning.normalize_caption("A photo of a woman in a red coat") == "a woman in a red coat"
    assert captioning.normalize_caption("Close-up of a rusty gear") == "a rusty gear"
    assert captioning.normalize_caption("The picture depicts an empty street") == "an empty street"
    # A caption that merely *contains* the phrase keeps it.
    assert captioning.normalize_caption("woman holding a photo of a cat") == (
        "woman holding a photo of a cat"
    )


def test_apply_trigger_puts_the_token_first():
    assert captioning.apply_trigger("standing in the rain", "ohwx", "woman") == (
        "ohwx woman, standing in the rain"
    )
    assert captioning.apply_trigger("standing", "", "") == "standing"
    assert captioning.apply_trigger("", "ohwx", "woman") == "ohwx woman"


def test_split_manual_captions_handles_scanner_output_and_short_blocks():
    scanner_output = "first caption\n\n---\n\nsecond caption\n\n---\n\nthird caption"
    assert captioning.split_manual_captions(scanner_output, 3) == [
        "first caption", "second caption", "third caption",
    ]

    # One caption for a whole batch is a deliberate broadcast...
    assert captioning.split_manual_captions("only one", 3) == ["only one"] * 3
    # ...but a partial block must pad, never shift captions onto wrong frames.
    assert captioning.split_manual_captions("a\n---\nb", 3) == ["a", "b", ""]
    assert captioning.split_manual_captions("", 2) == ["", ""]
    assert captioning.split_manual_captions("a\n---\nb\n---\nc", 2) == ["a", "b"]


def test_caption_image_sends_the_image_and_cleans_the_answer():
    client = _RecordingClient(["Here is the caption: a red car on a wet street."])

    caption = captioning.caption_image(
        client, provider="ollama", model="qwen3-vl", image_b64="BASE64",
        mode="natural", class_token="car",
    )

    assert caption == "a red car on a wet street."
    call = client.calls[0]
    assert call["images"] == ["BASE64"]
    assert call["response_format"] == "text"
    assert "car" in call["system_prompt"]


def test_caption_batch_bumps_the_seed_so_frames_do_not_share_a_cache_entry():
    client = _RecordingClient(["one", "two", "three"])
    progress = []

    captions = captioning.caption_batch(
        client, ["a", "b", "c"], provider="ollama", model="qwen3-vl",
        seed=100, on_progress=lambda index, total: progress.append((index, total)),
    )

    assert captions == ["one", "two", "three"]
    assert [call["seed"] for call in client.calls] == [100, 101, 102]
    assert progress == [(0, 3), (1, 3), (2, 3)]


def test_caption_batch_keeps_random_seed_random_for_every_frame():
    client = _RecordingClient()
    captioning.caption_batch(client, ["a", "b"], provider="ollama", model="m", seed=-1)
    assert [call["seed"] for call in client.calls] == [-1, -1]
