import type { ComfyExtensionSettings } from "@/types/comfy";
import { applyFilTheme, type FilThemeName } from "@/styles/brand";
import { reapplyThemeToGraph } from "@/nodes2/nodeStyle";
import { SETTINGS_CATEGORY } from "@/constants/brand";

const THEME_VALUE_TO_NAME: Record<string, FilThemeName> = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate",
  Pixaroma: "pixaroma",
};

/**
 * Applies immediately (Settings panel `onChange` — confirmed working via
 * NodeAlign's own settings.js, which uses the same mechanism for live
 * color/opacity updates) — no reload needed. `applyFilTheme` swaps the CSS
 * variables every Vue widget already reads; `reapplyThemeToGraph` then
 * re-colors already-placed nodes' native LiteGraph title/body (a separate
 * step because those are plain JS properties, not CSS-driven).
 */
function onThemeChange(newValue: unknown): void {
  const theme = THEME_VALUE_TO_NAME[String(newValue)] ?? "default";
  applyFilTheme(theme);
  const app = (globalThis as unknown as { app?: unknown }).app;
  if (app) reapplyThemeToGraph(app);
}

export const THEME_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green", "Pixaroma"],
    category: [SETTINGS_CATEGORY, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Pixaroma matches the ComfyUI-Pixaroma node pack's own colors. Applies instantly, no reload.",
    onChange: onThemeChange,
  },
];

/** Applies the currently-saved theme at startup (onChange only fires on *future* changes, not the initial load). */
export function applyStartupTheme(readSetting: <T>(id: string, fallback: T) => T): void {
  const stored = readSetting<string>("FiL_Design_ImageMind.Theme", "Default");
  applyFilTheme(THEME_VALUE_TO_NAME[stored] ?? "default");
}
