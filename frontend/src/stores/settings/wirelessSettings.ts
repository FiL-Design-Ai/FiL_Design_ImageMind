import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const WIRELESS_ENABLED = "FiL_Design_ImageMind.Wireless.Enabled";
export const WIRELESS_LINKS = "FiL_Design_ImageMind.Wireless.Links";
export const WIRELESS_LABELS = "FiL_Design_ImageMind.Wireless.Labels";
export const WIRELESS_WIDGETS = "FiL_Design_ImageMind.Wireless.WidgetFeeds";

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
    id: WIRELESS_WIDGETS,
    name: "Channels feed same-named widgets",
    type: "boolean",
    defaultValue: false,
    tooltip:
      "A KSampler's seed is a widget, not an input, so no wire reaches it until it is converted. With this on, a channel whose name matches a widget exactly (SEED → seed) replaces the widget's value with the channel's link at queue time — in the prompt only, the graph stays as drawn. Off by default: a widget reads as a constant, and feeding it from somewhere else is a surprise worth opting into.",
    category: [SETTINGS_CATEGORY, "Wireless", "WirelessWidgetFeeds"],
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
 *
 * The fallback has to be the same `LINKS_SELECTED` the setting is registered
 * with above. It used to be `LINKS_ALWAYS`, which meant a user who had never
 * opened the settings panel got every channel drawn at once while the panel
 * told them "Only for the selected Nodes" — the mode that exists precisely
 * because `Always` is unusable on a real graph.
 */
export function wirelessLinkMode(): WirelessLinkMode {
  return readSetting<WirelessLinkMode>(WIRELESS_LINKS, LINKS_SELECTED) ?? LINKS_SELECTED;
}

/** Whether the channel's name is tagged onto each input it feeds. */
export function wirelessLabelsShown(): boolean {
  return readSetting<boolean>(WIRELESS_LABELS, true) !== false;
}

/** Whether channels may replace same-named widget values with their link, per queue. */
export function wirelessWidgetFeedsEnabled(): boolean {
  return readSetting<boolean>(WIRELESS_WIDGETS, false) === true;
}
