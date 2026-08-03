import type { ComfyExtensionSettings } from "@/types/comfy";
import { applyFilBaseTheme, applyFilTheme, detectComfyBase, type FilThemeName } from "@/styles/brand";
import { reapplyThemeToGraph } from "@/nodes2/nodeStyle";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { renderAppearance } from "@/stores/settings/appearanceSettings";

const THEME_VALUE_TO_NAME: Record<string, FilThemeName> = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  "Cyberpunk 2077": "cyberpunk_2077",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate",
  Pixaroma: "pixaroma",
  "Neo Emerald": "neo_emerald",
  "NFT Vibe": "nft_vibe",
  "Hollywood Teal": "hollywood_teal",
  "Cyber Punch": "cyber_punch",
  "Cyber Punch HUD": "cyber_punch_hud",
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
    name: "Theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Cyberpunk 2077", "Fallout", "Pipboy", "FiL Green", "Pixaroma", "Neo Emerald", "NFT Vibe", "Hollywood Teal", "Cyber Punch", "Cyber Punch HUD"],
    // The third level is required, and the comment that used to sit here had it
    // backwards: it claimed a third level "put this entry behind an extra
    // heading of its own". It does not — the visible heading is the second
    // level, and the third is an invisible slot key. Two levels made ComfyUI
    // treat the section itself as the slot, so Appearance's three settings
    // collided and only the last registered survived. This picker was one of
    // the four that silently vanished from the panel.
    category: [SETTINGS_CATEGORY, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel. Options: Cyberpunk Neon, official Cyberpunk 2077 High-Voltage Yellow, Vault-Tec CRT Fallout/Pipboy, FiL Green, Web3 Neo Emerald, NFT Vibe, Hollywood Teal, Cyber Punch (glass) and Cyber Punch HUD. Applies instantly, no reload.",
    onChange: onThemeChange,
  },
];

/**
 * Re-checks ComfyUI's own light/dark mode and, when it flipped, re-themes.
 * Exported for the observer below and reused at startup.
 */
function syncBaseTheme(): void {
  applyFilBaseTheme(detectComfyBase());
  const app = (globalThis as unknown as { app?: unknown }).app;
  if (app) reapplyThemeToGraph(app);
}

/**
 * ComfyUI writes its palette as inline custom properties on `<html>` (there is
 * no class to hook — see `detectComfyBase`), so the only reliable signal that
 * the user switched palettes is that style attribute changing. Cheap: the
 * callback only re-renders when the computed base actually flipped, and palette
 * switches are a human-speed event.
 */
function watchComfyBaseTheme(): void {
  if (typeof MutationObserver === "undefined" || typeof document === "undefined") return;
  let last = detectComfyBase();
  new MutationObserver(() => {
    const now = detectComfyBase();
    if (now === last) return;
    last = now;
    syncBaseTheme();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["style", "class"] });
}

/** Applies the currently-saved theme at startup (onChange only fires on *future* changes, not the initial load). */
export function applyStartupTheme(readSetting: <T>(id: string, fallback: T) => T): void {
  const stored = readSetting<string>("FiL_Design_ImageMind.Theme", "Default");
  applyFilBaseTheme(detectComfyBase());
  applyFilTheme(THEME_VALUE_TO_NAME[stored] ?? "default");
  // Same reason: the scope and animation settings publish themselves as
  // attributes on <html>, and their onChange only fires on later edits.
  renderAppearance();
  watchComfyBaseTheme();
}
