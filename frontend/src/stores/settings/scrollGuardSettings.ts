import type { ComfyExtensionSettings } from "@/types/comfy";

/** When on, the wheel guard also rescues scrollable widgets belonging to other
 * node packs. Off by default: doing so consumes wheel events those packs may
 * handle themselves. */
export const SCROLL_GUARD_THIRD_PARTY = "FiL_Design_ImageMind.ScrollGuard.ThirdPartyWidgets";

export const SCROLL_GUARD_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: SCROLL_GUARD_THIRD_PARTY,
    name: "Fix wheel scrolling in other packs' widgets",
    type: "boolean",
    defaultValue: false,
    tooltip:
      "ComfyUI forwards the wheel to canvas zoom over most DOM widgets, so scrollable lists in other node packs zoom instead of scrolling. Turn this on to let FiL Design's wheel guard fix them too — at the cost of those packs no longer seeing wheel events over their own scrollable areas. FiL Design's own panels are always handled.",
    category: ["FiL_Design_ImageMind", "Canvas"],
  },
];
