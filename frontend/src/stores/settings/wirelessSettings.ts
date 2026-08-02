import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const WIRELESS_ENABLED = "FiL_Design_ImageMind.Wireless.Enabled";
export const WIRELESS_LINKS = "FiL_Design_ImageMind.Wireless.Links";
export const WIRELESS_LABELS = "FiL_Design_ImageMind.Wireless.Labels";

export const LINKS_ALWAYS = "Always";
export const LINKS_SELECTED = "Only for the selected Nodes";
export const LINKS_NEVER = "Never";

export type WirelessLinkMode = typeof LINKS_ALWAYS | typeof LINKS_SELECTED | typeof LINKS_NEVER;

/**
 * Its own section rather than folded into "Canvas": three settings that all
 * belong to one node (📡 Channel) are worth a heading that says so, the same
 * call already made for "Appearance" (all Theme.*) — see the note in
 * `allSettings.ts`.
 */
export const WIRELESS_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: WIRELESS_LABELS,
    name: "Channel name at the input",
    type: "boolean",
    defaultValue: true,
    tooltip:
      "Write the channel's name next to every input it feeds, in the channel's colour. Off, the dashed link is drawn without the tag — quieter on a dense graph, at the cost of having to follow the line to see where the data comes from.",
    category: [SETTINGS_CATEGORY, "Wireless", "WirelessLabels"],
  },
  {
    id: WIRELESS_LINKS,
    name: "Draw wireless links",
    type: "combo",
    defaultValue: LINKS_SELECTED,
    options: [LINKS_ALWAYS, LINKS_SELECTED, LINKS_NEVER],
    tooltip:
      "When the dashed channel links are drawn on the canvas. \"Only for the selected Nodes\" (the default) shows a link only while one of its two ends — the 📡 Channel node or the input it feeds — is selected, so a big graph stays clean until you click something. \"Always\" draws every link at once, which gets busy fast on a graph with more than a couple of channels. \"Never\" hides them entirely — the channels still work, they are just invisible. None of this affects what gets queued.",
    category: [SETTINGS_CATEGORY, "Wireless", "WirelessLinks"],
  },
  {
    id: WIRELESS_ENABLED,
    name: "Wireless channels",
    type: "boolean",
    defaultValue: true,
    tooltip:
      "The 📡 Channel node broadcasts whatever is plugged into it to free inputs of the same type, and the links are added to the prompt at queue time. Off, Channel nodes do nothing and the graph is queued exactly as drawn — the switch to flip when ruling this pack out of a wiring problem.",
    category: [SETTINGS_CATEGORY, "Wireless", "Wireless"],
  },
];

/**
 * Whether wireless channels may rewrite the graph.
 *
 * Read at each queue rather than cached: turning it off has to take effect on
 * the next run, not after a reload — that is the entire value of having a
 * switch for a feature that edits the user's graph.
 */
export function wirelessEnabled(): boolean {
  return readSetting<boolean>(WIRELESS_ENABLED, true) !== false;
}

/**
 * When the dashed links are drawn. Purely visual — the resolution behind them
 * runs either way, so nothing here can change what the server receives.
 */
export function wirelessLinkMode(): WirelessLinkMode {
  return readSetting<WirelessLinkMode>(WIRELESS_LINKS, LINKS_ALWAYS) ?? LINKS_ALWAYS;
}

/** Whether the channel's name is tagged onto each input it feeds. */
export function wirelessLabelsShown(): boolean {
  return readSetting<boolean>(WIRELESS_LABELS, true) !== false;
}
