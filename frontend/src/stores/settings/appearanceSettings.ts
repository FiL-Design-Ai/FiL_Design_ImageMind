/**
 * How far the theme reaches, and whether it moves.
 *
 * Both settings exist because the themes grew teeth: several now run permanent
 * CSS animations (Pipboy's CRT flicker, Neo Emerald's pulsing orb)
 * on every visible panel, and a theme is only worth having if the user can say
 * where it applies and whether it animates.
 */
import { getActivePinia } from "pinia";
import type { ComfyExtensionSettings } from "@/types/comfy";
import type { FilThemeName } from "@/styles/brand";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const THEME_SCOPE = "FiL_Design_ImageMind.Appearance.Scope";
export const WHOLE_UI = "FiL_Design_ImageMind.Appearance.WholeUi";
export const ANIMATIONS = "FiL_Design_ImageMind.Appearance.Animations";

export const SCOPE_OURS = "FiL only";
export const SCOPE_CONNECTED = "+ Connected";
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
    id: WHOLE_UI,
    // Deliberately NOT "Theme covers all of ComfyUI" — the setting right above
    // this one has an "All nodes" option in its own dropdown, and the two
    // together read as if this were just a fourth, bigger "applies to" value.
    // It is not: that setting only ever tints title bars; this one hands the
    // theme to ComfyUI as an application-wide colour palette (menus, sidebars,
    // canvas). The name has to say "app", not "all", to not echo the setting
    // next to it.
    name: "Repaint the whole ComfyUI app",
    type: "boolean",
    defaultValue: false,
    category: [SETTINGS_CATEGORY, "Appearance", "WholeUi"],
    // The one thing above cannot do, offered as its own switch rather than as a
    // fourth "applies to" value: this does not widen where *our* painting
    // reaches, it hands the theme to ComfyUI as one of ITS colour palettes and
    // selects it. Different mechanism, different blast radius, and — unlike the
    // scope setting — nothing is written into the user's workflow file, because
    // a ComfyUI palette lives in their own settings.
    tooltip:
      "Different from 'Theme applies to' above: that one only ever tints title bars. This repaints the whole application — menus, sidebars, canvas and every other pack's nodes — by building a ComfyUI color palette from this theme and selecting it. Turning it off restores the palette you were on. The generated palette stays in Settings → Appearance → Color Palette, yours to keep or delete.",
    onChange: (value: unknown) => onWholeUiChange(Boolean(value)),
  },
  {
    id: ANIMATIONS,
    name: "Theme animations",
    type: "boolean",
    defaultValue: true,
    category: [SETTINGS_CATEGORY, "Appearance", "Animations"],
    tooltip:
      "Pipboy's CRT flicker and Neo Emerald's pulsing orb run continuously on every visible panel. Turn this off for a still version of the same theme — same colours, same scanlines, no movement. Off by default when your system asks for reduced motion.",
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

/**
 * Turning it on repaints ComfyUI; turning it off puts the user's palette back.
 *
 * Async work behind a fire-and-forget wrapper because ComfyUI's `onChange` is
 * synchronous and ignores a returned promise — so the errors have to be caught
 * here or they become an unhandled rejection in the console of someone who just
 * clicked a switch.
 *
 * Nothing is needed at startup: ComfyUI stores the active palette itself, so a
 * reload comes back already painted. Re-applying on boot would only be a second
 * writer for a state the host already keeps.
 */
function onWholeUiChange(on: boolean): void {
  // ComfyUI echoes onChange once per setting while it registers them. The
  // host already holds whatever palette this would write ("Nothing is needed
  // at startup" above), and the toast stack does not exist yet — a failure
  // inside would surface as a page-load crash, not a toast. Real toggles come
  // from the settings UI, inside a live app with pinia active.
  if (!getActivePinia()) return;
  void (async () => {
    const { applyThemeToWholeUi, restoreUserPalette, currentThemeName } = await import("@/styles/comfyPalette");
    const { toast } = await import("@/stores/toastStore");
    try {
      if (on) {
        const made = await applyThemeToWholeUi(currentThemeName());
        if (!made) {
          toast.warning("This ComfyUI has no color-palette API to apply the theme to.");
          return;
        }
      } else {
        await restoreUserPalette();
      }
    } catch (err) {
      toast.error(`Could not change the ComfyUI color palette: ${String((err as Error)?.message ?? err)}`);
      return;
    }
    // Our own nodes carry explicit LiteGraph colours, which a palette switch
    // does not touch; re-asserting them keeps them on the theme rather than on
    // whatever the new palette left behind.
    const app = (globalThis as unknown as { app?: unknown }).app;
    if (app) {
      const { reapplyThemeToGraph } = await import("@/nodes2/nodeStyle");
      reapplyThemeToGraph(app);
    }
    // `applyThemeToWholeUi`/`restoreUserPalette` route through the host's own
    // `loadLinkColorPalette`, which rebuilds its type→colour maps from scratch
    // on every switch — wiping the three FiL-only types back to the blank
    // string they start with (see `slotTypeColors.ts`'s file comment).
    const { registerFilTypeColors } = await import("@/nodes2/slotTypeColors");
    registerFilTypeColors();
  })();
}

/**
 * Called after the theme itself changes: while the option is on, the exported
 * palette has to follow, or the application keeps the colours of the theme the
 * user just left.
 */
export function syncWholeUiPalette(theme: FilThemeName): void {
  if (!readSetting<boolean>(WHOLE_UI, false)) return;
  void (async () => {
    const { applyThemeToWholeUi } = await import("@/styles/comfyPalette");
    try {
      await applyThemeToWholeUi(theme);
      const { registerFilTypeColors } = await import("@/nodes2/slotTypeColors");
      registerFilTypeColors();
    } catch {
      /* The theme itself is already applied. A palette that failed to follow is
       * a degraded look, not a broken one, and does not earn a toast on every
       * switch through the picker. */
    }
  })();
}

export function themeScope(): ThemeScope {
  const raw = readSetting<string>(THEME_SCOPE, SCOPE_OURS);
  if (raw === SCOPE_ALL || raw === "All nodes") return SCOPE_ALL;
  if (
    raw === SCOPE_CONNECTED ||
    raw === "+ Connected" ||
    raw === "Connected" ||
    raw === "FiL + Connected" ||
    raw === "FiL nodes + directly connected"
  ) {
    return SCOPE_CONNECTED;
  }
  return SCOPE_OURS;
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
