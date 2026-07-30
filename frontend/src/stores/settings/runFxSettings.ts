import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const RUN_FX_MODE = "FiL_Design_ImageMind.RunFx.Mode";

export const MODE_OFF = "Off";
export const MODE_OURS = "FiL nodes only";
export const MODE_ALL = "All nodes";

// One list rather than a switch plus a scope: a separate "applies to" setting
// stays visible and editable while the switch is off, which reads as a control
// that does nothing.
export const RUN_FX_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: RUN_FX_MODE,
    name: "Highlight the running node",
    type: "combo",
    defaultValue: MODE_OURS,
    options: [MODE_OFF, MODE_OURS, MODE_ALL],
    category: [SETTINGS_CATEGORY, "Canvas", "RunHighlight"],
    tooltip: "Pulse a node's header while it is executing, so you can see where the queue is. Choose whether that covers only this pack's nodes or every node in the graph.",
  },
];

/** Read per event, so a change takes effect without a reload. */
function mode(): string {
  return readSetting<string>(RUN_FX_MODE, MODE_OURS);
}

export function runFxEnabled(): boolean {
  return mode() !== MODE_OFF;
}

export function runFxCoversEveryNode(): boolean {
  return mode() === MODE_ALL;
}
