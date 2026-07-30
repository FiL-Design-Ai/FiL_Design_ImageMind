/**
 * How far the theme reaches, and whether it moves.
 *
 * Both settings exist because the themes grew teeth: several now run permanent
 * CSS animations (Pipboy's scanline sweep and beam, Neo Emerald's pulsing orb)
 * on every visible panel, and a theme is only worth having if the user can say
 * where it applies and whether it animates.
 */
import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const THEME_SCOPE = "FiL_Design_ImageMind.Appearance.Scope";
export const ANIMATIONS = "FiL_Design_ImageMind.Appearance.Animations";

export const SCOPE_OURS = "FiL nodes only";
export const SCOPE_CONNECTED = "FiL nodes + directly connected";
export const SCOPE_ALL = "All nodes";

export type ThemeScope = typeof SCOPE_OURS | typeof SCOPE_CONNECTED | typeof SCOPE_ALL;

export const APPEARANCE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: THEME_SCOPE,
    name: "Theme applies to",
    type: "combo",
    defaultValue: SCOPE_OURS,
    options: [SCOPE_OURS, SCOPE_CONNECTED, SCOPE_ALL],
    category: [SETTINGS_CATEGORY, "Appearance", "Scope"],
    // Deliberately promises the title bar and nothing else. A foreign node's
    // body fill comes from `node.bgcolor`, which LiteGraph *serialises* — see
    // any saved workflow, where our own nodes carry `color`/`bgcolor` in the
    // JSON. Painting someone else's node that way writes our colour into the
    // user's file for good: it travels to whoever they send the workflow to,
    // outlives uninstalling this pack, and fights packs that colour their own
    // nodes. The title bar is drawn per frame through `onDrawTitleBar` and
    // stored nowhere, so it is the only honest thing to offer here.
    tooltip:
      "How far this pack's theme reaches. Beyond its own nodes it only tints the title bar — never the node body, because body colour is saved into the workflow file and would outlive both the setting and this pack.",
    onChange: (value: unknown) => onAppearanceChange({ scope: value as ThemeScope }),
  },
  {
    id: ANIMATIONS,
    name: "Theme animations",
    type: "boolean",
    defaultValue: true,
    category: [SETTINGS_CATEGORY, "Appearance", "Animations"],
    tooltip:
      "Pipboy's CRT scanline sweep and Neo Emerald's pulsing orb run continuously on every visible panel. Turn this off for a still version of the same theme. Off by default when your system asks for reduced motion.",
    onChange: (value: unknown) => onAppearanceChange({ animations: value as boolean }),
  },
];

/**
 * The changed value arrives as the argument and MUST be used from there.
 *
 * ComfyUI fires `onChange` before the settings store holds the new value —
 * measured on a live 1.47.10: re-reading the store inside the handler returned
 * the *previous* value, so the panels stayed one change behind and only caught
 * up on the next edit. `onThemeChange` in themeSettings.ts already takes the
 * argument; this is the same contract.
 */
function onAppearanceChange(changed: { scope?: ThemeScope; animations?: boolean }): void {
  renderAppearance(changed);
  const app = (globalThis as unknown as { app?: unknown }).app;
  if (app) {
    void import("@/nodes2/nodeStyle").then((m) => m.reapplyThemeToGraph(app));
  }
}

export function themeScope(): ThemeScope {
  return readSetting<ThemeScope>(THEME_SCOPE, SCOPE_OURS);
}

/**
 * `prefers-reduced-motion` is the answer when the user has expressed no opinion
 * of their own — an OS-level "stop moving things" is a real request, and a
 * looping scanline over every node is exactly what it is about. An explicit
 * `false` here still wins, so turning it off stays off regardless.
 */
export function animationsEnabled(stored?: boolean): boolean {
  const on = stored ?? readSetting<boolean>(ANIMATIONS, true);
  if (!on) return false;
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Publish both settings as attributes on `<html>`, next to `data-fil-theme`.
 * CSS keys off them, so the panels restyle with no re-render and no reload.
 *
 * `changed` carries the value ComfyUI just handed us for the setting being
 * edited; anything absent is read from the store, which is correct for it.
 */
export function renderAppearance(changed: { scope?: ThemeScope; animations?: boolean } = {}): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const scope = changed.scope ?? themeScope();
  root.dataset.filMotion = animationsEnabled(changed.animations) ? "full" : "off";
  root.dataset.filScope = scope === SCOPE_ALL ? "all" : scope === SCOPE_CONNECTED ? "connected" : "ours";
}
