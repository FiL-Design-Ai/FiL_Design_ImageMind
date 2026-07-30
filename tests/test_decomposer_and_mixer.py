"""Comprehensive test suite for FiLImageDecomposer and FiLStyleMixer nodes."""

import json
from unittest.mock import MagicMock, patch

from FiL_Design_ImageMind.nodes.node_decomposer import FiLImageDecomposer
from FiL_Design_ImageMind.nodes.node_style_mixer import FiLStyleMixer


def test_decomposer_node_execution():
    """Test standard JSON response decomposition."""
    config = {"provider": "Ollama", "model": "llama3"}
    fake_json_response = json.dumps({
        "subject": "A cyberpunk android character",
        "lighting": "Neon magenta and cyan illumination",
        "composition": "Close-up low angle shot",
        "style": "Photorealistic octane render",
        "full_prompt": "A cyberpunk android character, neon magenta illumination, close-up low angle, octane render",
    })

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=fake_json_response):
        output = FiLImageDecomposer.execute(
            config=config,
            prompt="Cyberpunk android",
            language="English",
        )

        res_tuple = output.args if hasattr(output, "args") else output
        subject, lighting, composition, style, full_prompt = res_tuple

        assert subject == "A cyberpunk android character"
        assert lighting == "Neon magenta and cyan illumination"
        assert composition == "Close-up low angle shot"
        assert style == "Photorealistic octane render"
        assert "cyberpunk android" in full_prompt.lower()


def test_decomposer_markdown_json_cleaning():
    """Test stripping markdown codeblocks from LLM responses."""
    config = {"provider": "OpenAI", "model": "gpt-4o"}
    raw_markdown_resp = """```json
{
  "subject": "Cyberpunk street",
  "lighting": "Rainy reflections with neon glow",
  "composition": "Wide angle street level view",
  "style": "Cinematic photo",
  "full_prompt": "Cyberpunk street, rainy reflections, wide angle street level view, cinematic photo"
}
```"""

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=raw_markdown_resp):
        output = FiLImageDecomposer.execute(config=config, prompt="Street view")
        res_tuple = output.args if hasattr(output, "args") else output
        subject, lighting, composition, style, full_prompt = res_tuple

        assert subject == "Cyberpunk street"
        assert lighting == "Rainy reflections with neon glow"
        assert composition == "Wide angle street level view"
        assert style == "Cinematic photo"


def test_decomposer_fallback_non_json():
    """Test graceful fallback when LLM response is not valid JSON."""
    config = {"provider": "Ollama", "model": "mistral"}
    raw_plain_text = "Subject: Cyberpunk android. Style: Photorealistic."

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=raw_plain_text):
        output = FiLImageDecomposer.execute(config=config, prompt="Fallback test")
        res_tuple = output.args if hasattr(output, "args") else output
        subject, lighting, composition, style, full_prompt = res_tuple

        assert subject == raw_plain_text
        assert lighting == ""
        assert composition == ""
        assert style == ""
        assert full_prompt == raw_plain_text


def test_decomposer_missing_full_prompt_auto_synthesis():
    """Test auto-synthesis of full_prompt when omitted from LLM response."""
    config = {"provider": "Ollama", "model": "llama3"}
    json_resp_no_full = json.dumps({
        "subject": "Cyber-warrior",
        "lighting": "Dramatic rim light",
        "composition": "Medium shot",
        "style": "Digital painting",
    })

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=json_resp_no_full):
        output = FiLImageDecomposer.execute(config=config, prompt="Synth test")
        res_tuple = output.args if hasattr(output, "args") else output
        subject, lighting, composition, style, full_prompt = res_tuple

        assert subject == "Cyber-warrior"
        assert full_prompt == "Cyber-warrior, Digital painting, Dramatic rim light, Medium shot"


def test_decomposer_image_tensor_input():
    """Test image input passing to tensor_to_base64 processor."""
    config = {"provider": "Ollama", "model": "llava"}
    fake_tensor = MagicMock()
    json_resp = json.dumps({"subject": "Image subject", "full_prompt": "Image prompt"})

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._processor.tensor_to_base64", return_value="base64str") as mock_conv, \
         patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=json_resp) as mock_gen:

        FiLImageDecomposer.execute(config=config, image=fake_tensor, prompt="Look at image")

        mock_conv.assert_called_once_with(fake_tensor)
        mock_gen.assert_called_once()
        _, kwargs = mock_gen.call_args
        assert kwargs["images"] == ["base64str"]


def test_decomposer_image_tensor_conversion_error_graceful():
    """Test robust handling when tensor_to_base64 fails."""
    config = {"provider": "Ollama", "model": "llava"}
    invalid_tensor = MagicMock()
    json_resp = json.dumps({"subject": "Fallback subject", "full_prompt": "Fallback prompt"})

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._processor.tensor_to_base64", side_effect=ValueError("Invalid tensor format")), \
         patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=json_resp) as mock_gen:

        output = FiLImageDecomposer.execute(config=config, image=invalid_tensor, prompt="Corrupted tensor test")

        res_tuple = output.args if hasattr(output, "args") else output
        assert res_tuple[0] == "Fallback subject"
        mock_gen.assert_called_once()
        _, kwargs = mock_gen.call_args
        assert kwargs["images"] is None


def test_decomposer_json_nulls_are_not_literal_strings():
    """Test that if LLM returns explicit JSON nulls, they become empty strings, not 'None'."""
    config = {"provider": "Ollama", "model": "llama3"}
    json_null_resp = json.dumps({
        "subject": None,
        "lighting": None,
        "composition": None,
        "style": None,
        "full_prompt": None,
    })

    with patch("FiL_Design_ImageMind.nodes.node_decomposer._model_client.generate", return_value=json_null_resp):
        output = FiLImageDecomposer.execute(config=config, prompt=None)
        res_tuple = output.args if hasattr(output, "args") else output

        # Verify no literal "None" strings are returned
        assert res_tuple[0] == ""
        assert res_tuple[1] == ""
        assert res_tuple[2] == ""
        assert res_tuple[3] == ""
        assert res_tuple[4] == ""


def test_style_mixer_node_execution():
    """Test basic execution of FiLStyleMixer."""
    output = FiLStyleMixer.execute(
        base_prompt="A majestic lion standing on a cliff",
        style_1="🎨 Style & Cinematic/🎬 Cinematic Master",
        weight_1=1.0,
        style_2="👾 ДИДЖИТАЛ/ Surfer Vaporwave Cyber",
        weight_2=0.5,
    )

    res_tuple = output.args if hasattr(output, "args") else output
    styled_prompt, style_overlay = res_tuple
    assert "majestic lion" in styled_prompt
    assert len(style_overlay) > 0


def test_style_mixer_weight_thresholds():
    """Test weight threshold logic (<=0.01 ignored, <0.95 weighted, >=0.95 clean)."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value="vibrant neon art"):
        # Case 1: weight <= 0.01 (ignored)
        output_ignored = FiLStyleMixer.execute(
            base_prompt="Hero",
            style_1="SomeStyle",
            weight_1=0.01,
        )
        t_ignored = output_ignored.args if hasattr(output_ignored, "args") else output_ignored
        assert t_ignored[1] == ""
        assert t_ignored[0] == "Hero"

        # Case 2: 0.01 < weight < 0.95 (weighted parentheses)
        output_weighted = FiLStyleMixer.execute(
            base_prompt="Hero",
            style_1="SomeStyle",
            weight_1=0.75,
        )
        t_weighted = output_weighted.args if hasattr(output_weighted, "args") else output_weighted
        assert "(vibrant neon art:0.75)" in t_weighted[1]
        assert "Hero, (vibrant neon art:0.75)" == t_weighted[0]

        # Case 3: weight >= 0.95 (unweighted prompt)
        output_clean = FiLStyleMixer.execute(
            base_prompt="Hero",
            style_1="SomeStyle",
            weight_1=0.95,
        )
        t_clean = output_clean.args if hasattr(output_clean, "args") else output_clean
        assert t_clean[1] == "vibrant neon art"
        assert t_clean[0] == "Hero, vibrant neon art"


def test_style_mixer_multiple_styles_and_none():
    """Test combining up to 3 styles with (None) options."""
    def fake_get_style(name):
        styles = {
            "StyleA": "cinematic lighting",
            "StyleB": "cyberpunk cyberware",
            "StyleC": "oil painting texture",
        }
        return styles.get(name, "")

    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", side_effect=fake_get_style):
        output = FiLStyleMixer.execute(
            base_prompt="Robot warrior",
            style_1="StyleA",
            weight_1=1.0,
            style_2="(None)",
            weight_2=0.5,
            style_3="StyleC",
            weight_3=0.3,
        )

        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert style_overlay == "cinematic lighting, (oil painting texture:0.30)"
        assert styled_prompt == "Robot warrior, cinematic lighting, (oil painting texture:0.30)"


def test_style_mixer_empty_base_prompt():
    """Test handling of empty or whitespace base_prompt."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value="surreal atmosphere"):
        output = FiLStyleMixer.execute(
            base_prompt="   ",
            style_1="Surreal",
            weight_1=1.0,
        )

        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert style_overlay == "surreal atmosphere"
        assert styled_prompt == "surreal atmosphere"


def test_style_mixer_none_base_prompt():
    """Test handling of None base_prompt (avoiding literal 'None' strings)."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value="surreal atmosphere"):
        output = FiLStyleMixer.execute(
            base_prompt=None,  # type: ignore
            style_1="Surreal",
            weight_1=1.0,
        )

        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert style_overlay == "surreal atmosphere"
        assert styled_prompt == "surreal atmosphere"


def test_style_mixer_none_weight():
    """Test handling of None weight (safe cast to 0.0)."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value="vibrant neon art"):
        output = FiLStyleMixer.execute(
            base_prompt="Hero",
            style_1="SomeStyle",
            weight_1=None,  # type: ignore
        )
        res_tuple = output.args if hasattr(output, "args") else output
        assert res_tuple[1] == ""
        assert res_tuple[0] == "Hero"


def test_style_mixer_invalid_style_key():
    """Test handling when style name returns empty prompt."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value=""):
        output = FiLStyleMixer.execute(
            base_prompt="Dragon",
            style_1="NonExistentStyle",
            weight_1=1.0,
        )

        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert style_overlay == ""
        assert styled_prompt == "Dragon"


def test_decomposer_fingerprint_inputs_caching():
    """Test that fingerprint_inputs returns identical hashes for identical inputs and different hashes when inputs change."""
    config = {"provider": "Ollama", "model": "llama3"}
    fp1 = FiLImageDecomposer.fingerprint_inputs(config=config, prompt="A cat", language="English")
    fp2 = FiLImageDecomposer.fingerprint_inputs(config=config, prompt="A cat", language="English")
    fp3 = FiLImageDecomposer.fingerprint_inputs(config=config, prompt="A dog", language="English")

    assert fp1 == fp2
    assert fp1 != fp3


def test_style_mixer_multi_image_fallback():
    """Test multi-image style mixer fallback when no Provider Loader config is attached."""
    fake_tensor_1 = MagicMock()
    fake_tensor_2 = MagicMock()
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer._processor.tensor_to_base64", return_value="fake_b64"):
        output = FiLStyleMixer.execute(
            base_prompt="Cyberpunk Alley",
            image_1=fake_tensor_1,
            img_weight_1=0.8,
            img_focus_1="Color & Lighting",
            image_2=fake_tensor_2,
            img_weight_2=0.5,
            img_focus_2="Style & Texture",
        )
        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert "Cyberpunk Alley" in styled_prompt
        assert "(image 1 visual style [Color & Lighting]:0.80)" in style_overlay
        assert "(image 2 visual style [Style & Texture]:0.50)" in style_overlay


def test_style_mixer_multi_image_smart_llm_fusion():
    """Test multi-image style mixer Smart LLM Fusion with provider config."""
    fake_tensor_1 = MagicMock()
    fake_tensor_2 = MagicMock()
    config = {"provider": "OpenAI", "model": "gpt-4o", "temperature": 0.7}
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer._processor.tensor_to_base64", return_value="fake_b64"), \
         patch("FiL_Design_ImageMind.nodes.node_style_mixer._model_client.generate", return_value="Synthesized fused prompt with dramatic neon and metallic armor."):
        output = FiLStyleMixer.execute(
            config=config,
            fusion_mode="Smart LLM Fusion (Gen-Mix)",
            base_prompt="Cyberpunk Knight",
            image_1=fake_tensor_1,
            img_weight_1=0.9,
            img_focus_1="Color & Lighting",
            image_2=fake_tensor_2,
            img_weight_2=0.7,
            img_focus_2="Style & Texture",
        )
        res_tuple = output.args if hasattr(output, "args") else output
        styled_prompt, style_overlay = res_tuple
        assert styled_prompt == "Synthesized fused prompt with dramatic neon and metallic armor."




def test_style_mixer_reports_provider_failure_instead_of_a_placeholder():
    """A dead provider used to yield "(image 1 visual style:0.90)" as success.

    The reference image was never analysed, so the prompt silently lost its
    influence while the node still reported a normal result.
    """
    config = {"provider": "OpenAI", "model": "gpt-4o"}
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer._processor.tensor_to_base64", return_value="fake_b64"), \
         patch("FiL_Design_ImageMind.nodes.node_style_mixer._model_client.generate",
               side_effect=RuntimeError("connection refused")):
        output = FiLStyleMixer.execute(
            config=config,
            fusion_mode="Weighted Stack (Fast)",
            base_prompt="Cyberpunk Knight",
            image_1=MagicMock(),
            img_weight_1=0.9,
        )
        styled_prompt, _ = output.args if hasattr(output, "args") else output
        assert "⚠️" in styled_prompt
        assert "image_1" in styled_prompt
        assert "visual style:0.90" not in styled_prompt


def test_style_mixer_image_encode_failure_is_reported():
    """A reference image that cannot be encoded must not be dropped silently."""
    config = {"provider": "OpenAI", "model": "gpt-4o"}
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer._processor.tensor_to_base64",
               side_effect=ValueError("bad tensor")):
        output = FiLStyleMixer.execute(
            config=config,
            base_prompt="Hero",
            image_1=MagicMock(),
            img_weight_1=0.8,
        )
        styled_prompt, _ = output.args if hasattr(output, "args") else output
        assert "⚠️" in styled_prompt


def test_style_mixer_without_images_is_unaffected_by_failure_reporting():
    """Text-only style mixing must still return a normal prompt."""
    with patch("FiL_Design_ImageMind.nodes.node_style_mixer.get_style_prompt", return_value="vibrant neon art"):
        output = FiLStyleMixer.execute(base_prompt="A lion", style_1="SomeStyle", weight_1=1.0)
        styled_prompt, _ = output.args if hasattr(output, "args") else output
        assert "⚠️" not in styled_prompt
        assert "lion" in styled_prompt
