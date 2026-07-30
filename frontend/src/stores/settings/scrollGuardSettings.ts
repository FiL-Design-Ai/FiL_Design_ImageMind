import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const WHEEL_HANDLING_ENABLED = "FiL_Design_ImageMind.Wheel.Enabled";

export const SCROLL_GUARD_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: WHEEL_HANDLING_ENABLED,
    name: "Mouse wheel over panels",
    type: "boolean",
    defaultValue: true,
    tooltip:
      "ComfyUI forwards the wheel to canvas zoom over DOM widgets, so scrollable lists inside nodes zoom instead of scrolling. On, this pack handles the wheel over its own panels — nowhere else. Off, its nodes behave like stock ComfyUI: lists zoom the canvas. Turn it off to rule the pack out of a scroll conflict.",
    category: [SETTINGS_CATEGORY, "Canvas", "Wheel"],
  },
];

/** Whether the widget host may act on wheel events over its own panel. Read
 * per event, so flipping the setting takes effect without a reload. */
export function wheelHandlingEnabled(): boolean {
  return readSetting<boolean>(WHEEL_HANDLING_ENABLED, true) !== false;
}
