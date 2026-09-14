"""Backend wireless channel resolver for FiLChannel nodes.

Allows headless scripts, external tools, and ComfyUI API clients to resolve
virtual wireless connections into direct node-to-node links before execution.
"""

from __future__ import annotations

import copy
import logging
from typing import Any

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.WirelessResolver")

CHANNEL_NODE_TYPE = "FiLChannel"

# Known standard node outputs for auto-type guessing when only prompt graph is provided
KNOWN_OUTPUT_TYPES: dict[str, list[str]] = {
    "CheckpointLoaderSimple": ["MODEL", "CLIP", "VAE"],
    "UNETLoader": ["MODEL"],
    "CLIPLoader": ["CLIP"],
    "VAELoader": ["VAE"],
    "LoadImage": ["IMAGE", "MASK"],
    "EmptyLatentImage": ["LATENT"],
    "CLIPTextEncode": ["CONDITIONING"],
    "FiLSeed": ["INT"],
    "FiLProviderLoader": ["FIL_PROVIDER_CONFIG"],
    "FiLKSampler": ["LATENT"],
    "FiLHighResFix": ["IMAGE", "LATENT"],
    "FiLCinemaRig": ["IMAGE"],
    "FiLColorWizard": ["IMAGE"],
}


def resolve_wireless_prompt(
    prompt: dict[str, Any],
    workflow: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Resolves all FiLChannel wireless connections in a ComfyUI prompt dictionary.

    Returns a new prompt dictionary where inputs previously wired through or targeted
    by FiLChannel nodes receive direct links to origin data providers.
    """
    if not isinstance(prompt, dict):
        return prompt

    resolved_prompt = copy.deepcopy(prompt)

    # 1. Identify all channel transmitters
    transmitters: dict[str, dict[str, Any]] = {}
    for node_id, node_data in resolved_prompt.items():
        if isinstance(node_data, dict) and node_data.get("class_type") == CHANNEL_NODE_TYPE:
            transmitters[str(node_id)] = node_data

    if not transmitters:
        return resolved_prompt

    # 2. Map channel slot -> [origin_node_id, origin_slot_index]
    # Also attempt to identify data type / channel name
    channels: list[dict[str, Any]] = []

    for tx_id, tx_data in transmitters.items():
        inputs = tx_data.get("inputs", {})
        if not isinstance(inputs, dict):
            continue

        for slot_name, link in inputs.items():
            if not (isinstance(link, list) and len(link) >= 2):
                continue
            origin_id = str(link[0])
            origin_slot = int(link[1])

            origin_node = resolved_prompt.get(origin_id, {})
            origin_class = origin_node.get("class_type", "")

            # Guess carried type if possible
            guessed_type = "UNKNOWN"
            if origin_class in KNOWN_OUTPUT_TYPES:
                known_outs = KNOWN_OUTPUT_TYPES[origin_class]
                if 0 <= origin_slot < len(known_outs):
                    guessed_type = known_outs[origin_slot]

            channels.append({
                "transmitter_id": tx_id,
                "transmitter_slot": slot_name,
                "origin_id": origin_id,
                "origin_slot": origin_slot,
                "type": guessed_type,
            })

    if not channels:
        return resolved_prompt

    # 3. Resolve any receiver input that directly plugged into transmitter
    for node_id, node_data in resolved_prompt.items():
        if str(node_id) in transmitters or not isinstance(node_data, dict):
            continue

        node_inputs = node_data.get("inputs", {})
        if not isinstance(node_inputs, dict):
            continue

        for input_name, val in list(node_inputs.items()):
            # Case A: Input was literally linked to a FiLChannel node
            if isinstance(val, list) and len(val) >= 2 and str(val[0]) in transmitters:
                tx_id = str(val[0])
                for ch in channels:
                    if ch["transmitter_id"] == tx_id:
                        node_inputs[input_name] = [ch["origin_id"], ch["origin_slot"]]
                        logger.debug("Resolved direct wireless link on node %s, input %s", node_id, input_name)
                        break

    return resolved_prompt

