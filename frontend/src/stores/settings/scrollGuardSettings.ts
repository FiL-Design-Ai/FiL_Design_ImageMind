import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const SCROLL_GUARD_MODE = "FiL_Design_ImageMind.ScrollGuard.Mode";

/**
 * How much of the wheel the pack is allowed to handle.
 *
 * - `off` — nothing at all: no window listener, and the widget host stops
 *   forwarding the wheel to the canvas. Stock ComfyUI behaviour, which means
 *   scrollable lists inside FiL panels zoom the canvas instead of scrolling.
 *   Use it to rule the pack out when hunting a scroll conflict.
 * - `fil` — our own panels only (default).
 * - `all` — also rescue other packs' scrollable widgets, at the cost of their
 *   own wheel handlers never seeing those events.
 */
export type ScrollGuardMode = "off" | "fil" | "all";

const LABELS: Record<string, ScrollGuardMode> = {
  "Off — never touch the wheel": "off",
  "FiL Design panels only": "fil",
  "All node packs' widgets": "all",
};

export const SCROLL_GUARD_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: SCROLL_GUARD_MODE,
    name: "Wheel scrolling in node panels",
    type: "combo",
    defaultValue: "FiL Design panels only",
    options: Object.keys(LABELS),
    tooltip:
      "ComfyUI forwards the wheel to canvas zoom over DOM widgets, so scrollable lists inside nodes zoom instead of scrolling. 'FiL Design panels only' fixes that for this pack's nodes. 'All node packs' widgets' fixes it everywhere, but then other extensions stop receiving wheel events over their own scrollable areas. 'Off' disables the pack's wheel handling entirely — pick it if you suspect a conflict.",
    category: [SETTINGS_CATEGORY, "Canvas"],
  },
];

/** Current mode, tolerant of both the stored label and a raw value. */
export function readScrollGuardMode(): ScrollGuardMode {
  const stored = String(readSetting(SCROLL_GUARD_MODE, "fil"));
  return LABELS[stored] ?? (["off", "fil", "all"].includes(stored) ? (stored as ScrollGuardMode) : "fil");
}
