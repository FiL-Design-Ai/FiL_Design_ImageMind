/**
 * Hand this pack's theme to ComfyUI as one of *its* colour palettes.
 *
 * The pack's own theme stops at its node panels: the canvas, the links, the
 * menus and every other pack's nodes stay exactly as ComfyUI painted them.
 * That is deliberate — writing to `Comfy.ColorPalette` repaints the whole
 * application, and reaching that far into the host is what got three features
 * removed in 1.1.0.
 *
 * This is the honest middle. It *offers* a palette built from the current
 * theme's colours and does nothing else:
 *
 *   - it only ever ADDS an entry to the user's palette list, keyed `fil_<theme>`
 *     and named so its origin is obvious;
 *   - it never switches the active palette. The user applies it from ComfyUI's
 *     own picker, which is also how they undo it — reverting is the host's
 *     mechanism, not something this pack has to reimplement or get right;
 *   - it can be removed again, by the user in that same picker or by
 *     `removeExportedPalette`.
 *
 * One mapping decision is worth stating, because the obvious version is wrong:
 * **socket colours are copied through untouched.** `node_slot` encodes the data
 * type — IMAGE blue, MODEL purple, LATENT pink — and those readings are learned
 * and shared across every pack a user has installed. Restyling them to match a
 * theme would trade a universal signal for decoration, on nodes that are not
 * ours. So the exported palette carries whatever `node_slot` the user already
 * had.
 */

import { ACTIVE_PALETTE, type FilPalette, type FilThemeName } from "@/styles/brand";

const PALETTE_ID_PREFIX = "fil_";

interface ComfyColorPalette {
  id: string;
  name: string;
  colors: {
    node_slot: Record<string, string>;
    litegraph_base: Record<string, string | number>;
    comfy_base: Record<string, string>;
  };
}

interface ColorPaletteApi {
  getActiveColorPalette?: () => ComfyColorPalette | undefined;
  addCustomColorPalette?: (palette: ComfyColorPalette) => Promise<unknown>;
  deleteCustomColorPalette?: (id: string) => Promise<unknown>;
}

interface SettingApi {
  get?: (id: string) => unknown;
  set?: (id: string, value: unknown) => Promise<unknown> | unknown;
}

interface HostApi {
  extensionManager?: { colorPalette?: ColorPaletteApi; setting?: SettingApi };
}

const ACTIVE_PALETTE_SETTING = "Comfy.ColorPalette";

function host(): HostApi | null {
  return (globalThis as { app?: HostApi }).app ?? null;
}

function paletteApi(): ColorPaletteApi | null {
  return host()?.extensionManager?.colorPalette ?? null;
}

function settingApi(): SettingApi | null {
  return host()?.extensionManager?.setting ?? null;
}

/** `#rrggbb` at the given alpha, for the few slots that want a translucent fill. */
function withAlpha(hex: string, alpha: number): string {
  const m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim());
  if (!m) return hex;
  const [r, g, b] = [1, 2, 3].map((i) => parseInt(m[i], 16));
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * Build a ComfyUI palette out of a FiL palette.
 *
 * `nodeSlot` is the user's existing socket colouring, passed straight through —
 * see the note at the top of this file.
 */
export function buildComfyPalette(
  theme: FilThemeName,
  palette: FilPalette,
  nodeSlot: Record<string, string> = {},
): ComfyColorPalette {
  const label = theme.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    id: `${PALETTE_ID_PREFIX}${theme}`,
    name: `FiL — ${label}`,
    colors: {
      node_slot: { ...nodeSlot },
      litegraph_base: {
        CLEAR_BACKGROUND_COLOR: palette.panel,
        NODE_TITLE_COLOR: palette.text,
        NODE_SELECTED_TITLE_COLOR: palette.accent,
        NODE_TEXT_COLOR: palette.text,
        NODE_DEFAULT_COLOR: palette.panel,
        NODE_DEFAULT_BGCOLOR: palette.panelAlt,
        NODE_DEFAULT_BOXCOLOR: palette.muted,
        NODE_BOX_OUTLINE_COLOR: palette.accent,
        // Left at ComfyUI's own magenta on purpose: "this node is bypassed" is a
        // state the user reads at a glance across every pack, and a themed
        // version of it would be a private dialect.
        NODE_BYPASS_BGCOLOR: "#FF00FF",
        NODE_ERROR_COLOUR: palette.danger,
        DEFAULT_SHADOW_COLOR: "rgba(0,0,0,0.25)",
        WIDGET_BGCOLOR: palette.panelAlt,
        WIDGET_OUTLINE_COLOR: palette.muted,
        WIDGET_TEXT_COLOR: palette.text,
        WIDGET_SECONDARY_TEXT_COLOR: palette.muted,
        LINK_COLOR: palette.accent,
        EVENT_LINK_COLOR: palette.ok,
        CONNECTING_LINK_COLOR: palette.ok,
      },
      comfy_base: {
        "fg-color": palette.text,
        "bg-color": palette.panel,
        "comfy-menu-bg": palette.panelAlt,
        "comfy-menu-secondary-bg": palette.panelAlt,
        "comfy-input-bg": palette.panelAlt,
        "input-text": palette.text,
        "descrip-text": palette.muted,
        "drag-text": palette.muted,
        "error-text": palette.danger,
        "border-color": withAlpha(palette.muted, 0.35),
        "tr-even-bg-color": palette.panel,
        "tr-odd-bg-color": palette.panelAlt,
        "content-bg": palette.panelAlt,
        "content-fg": palette.text,
        "content-hover-bg": palette.panel,
        "content-hover-fg": palette.accent,
      },
    },
  };
}

/**
 * Offer the theme currently in effect as a ComfyUI palette, and leave the
 * user's own palette in place.
 *
 * `addCustomColorPalette` does not only add — it *switches to* what it adds.
 * Measured on a live 1.47.10: one call and the canvas, links and menus were all
 * repainted, which is precisely the whole-application change this feature exists
 * to avoid making on the user's behalf. The unit tests could not have caught it,
 * because they mock the host; only asking the real one showed it.
 *
 * So the previously active palette is read first and put back afterwards. The
 * net effect is the one that was asked for: a new entry appears in Settings →
 * Appearance → Color Palette, and nothing changes until the user picks it.
 *
 * Restoring goes through the setting rather than `loadColorPalette`, which was
 * also measured: `loadColorPalette("obsidian")` left the active palette on
 * "dark", while writing the setting is what the picker itself does and lands
 * where it says.
 */
export async function exportThemeAsComfyPalette(theme: FilThemeName): Promise<ComfyColorPalette | null> {
  const api = paletteApi();
  if (!api?.addCustomColorPalette) return null;
  const nodeSlot = api.getActiveColorPalette?.()?.colors?.node_slot ?? {};
  const palette = buildComfyPalette(theme, ACTIVE_PALETTE, nodeSlot);

  const settings = settingApi();
  const previous = settings?.get?.(ACTIVE_PALETTE_SETTING);

  await api.addCustomColorPalette(palette);

  if (typeof previous === "string" && previous && previous !== palette.id) {
    await settings?.set?.(ACTIVE_PALETTE_SETTING, previous);
  }
  return palette;
}

/** Take one back out of the user's list. */
export async function removeExportedPalette(theme: FilThemeName): Promise<boolean> {
  const api = paletteApi();
  if (!api?.deleteCustomColorPalette) return false;
  await api.deleteCustomColorPalette(`${PALETTE_ID_PREFIX}${theme}`);
  return true;
}

/**
 * The theme actually in effect, read from where `applyFilTheme` publishes it
 * rather than from the setting — the two can differ for one tick during a
 * change, and what the user can see is the honest answer.
 */
export function currentThemeName(): FilThemeName {
  if (typeof document === "undefined") return "default";
  return (document.documentElement.dataset.filTheme as FilThemeName) || "default";
}

/**
 * Registered on the extension so it appears in ComfyUI's command palette and
 * its keybinding settings — visible, rebindable, and not a key claimed behind
 * the user's back.
 */
export const paletteCommands = [
  {
    id: "FiL_Design_ImageMind.exportThemeAsPalette",
    label: "FiL_Design_ImageMind — Save this theme as a ComfyUI color palette",
    icon: "🎨",
    function: async () => {
      const { toast } = await import("@/stores/toastStore");
      const theme = currentThemeName();
      try {
        const made = await exportThemeAsComfyPalette(theme);
        if (!made) {
          toast.warning("This ComfyUI has no color-palette API to add to.");
          return;
        }
        toast.success(`"${made.name}" added. Apply it in Settings → Appearance → Color Palette.`);
      } catch (err) {
        toast.error(`Could not add the palette: ${String((err as Error)?.message ?? err)}`);
      }
    },
  },
];
