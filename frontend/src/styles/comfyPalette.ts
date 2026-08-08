/**
 * Hand this pack's theme to ComfyUI as one of *its* colour palettes.
 *
 * The pack's own theme stops at its node panels: the canvas, the links, the
 * menus and every other pack's nodes stay exactly as ComfyUI painted them.
 * That is deliberate — writing to `Comfy.ColorPalette` repaints the whole
 * application, and reaching that far into the host is what got three features
 * removed in 1.1.0.
 *
 * The default here is the honest middle. `exportThemeAsComfyPalette` *offers* a
 * palette built from the current theme's colours and does nothing else:
 *
 *   - it only ever ADDS an entry to the user's palette list, keyed `fil_<theme>`
 *     and named so its origin is obvious;
 *   - it never switches the active palette. The user applies it from ComfyUI's
 *     own picker, which is also how they undo it — reverting is the host's
 *     mechanism, not something this pack has to reimplement or get right;
 *   - it can be removed again, by the user in that same picker or by
 *     `removeExportedPalette`.
 *
 * `applyThemeToWholeUi` is the same palette with the switch thrown, and it runs
 * only when the user turns on "Theme covers all of ComfyUI" themselves. Asking
 * for the whole application to be repainted is a legitimate thing to want; doing
 * it uninvited is what got features removed in 1.1.0. The palette that was
 * active is written down first, so `restoreUserPalette` can put it back.
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

/**
 * Where the host persists the custom palettes themselves — `colorPaletteService`
 * writes exactly this key from `persistCustomColorPalettes`. Reading it is how
 * to ask whether an id is already taken, and asking matters: `addCustomPalette`
 * throws outright on a duplicate id, and `deleteCustomPalette` throws on an
 * absent one.
 */
const CUSTOM_PALETTES_SETTING = "Comfy.CustomColorPalettes";

function host(): HostApi | null {
  return (globalThis as { app?: HostApi }).app ?? null;
}

/** Is `id` already in the user's custom palette list? */
function paletteExists(id: string): boolean {
  const all = settingApi()?.get?.(CUSTOM_PALETTES_SETTING);
  return !!all && typeof all === "object" && id in (all as Record<string, unknown>);
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
 * Grid spacing, in graph units. NOT the stock tile's own 10 — first shipped at
 * 10 with the dots at 0.55 alpha to match the stock grid's visual weight, and
 * on a live graph loaded with nodes that read as a dense, flickering static
 * rather than a texture ("пестрит в глазах" — reported directly, not a guess).
 * Doubling the spacing to 20 cuts the dot COUNT to a quarter for the same
 * alpha, which is what actually calms a repeating pattern down — dimming alone
 * (tried first, at the original 10-unit spacing) still left the same density of
 * flecks, just fainter ones, and the busy read barely moved.
 */
const GRID_CELL = 20;
const GRID_TILE = 100;
const DOT_RADIUS = 0.8;
/**
 * A r=0.8 dot every 20 units covers about 0.5% of the tile — sparse enough that
 * a considerably higher alpha than the ruled tile's 18% line-alpha still reads
 * as a quiet texture rather than a graph-paper grid.
 */
const DOT_ALPHA = 0.35;

/**
 * The canvas grid, in the theme's own colours.
 *
 * This is the one part of the background that does NOT follow from a colour
 * swatch. LiteGraph paints the canvas in two layers: `clear_background_color`
 * (a flat fill, and `CLEAR_BACKGROUND_COLOR` already carries the theme there)
 * and `background_image` — a *raster tile* repeated across the viewport, whose
 * colours are baked into the pixels. Omit it and `completePalette` falls back to
 * stock dark's tile, which is why a themed canvas still had ComfyUI's own grey
 * grid ruled over it.
 *
 * An SVG data URI rather than a base64 PNG like the stock one: the tile has to
 * be built per theme, and generating a PNG means an offscreen canvas and
 * `toDataURL`, which drags a DOM dependency into what is otherwise a pure
 * function — untestable outside a browser for no gain. `new Image()` +
 * `createPattern` accepts the SVG (verified against the live canvas: 100×100
 * intrinsic size, pattern created).
 *
 * Opaque, matching the stock tile: above 1.5× zoom LiteGraph skips the flat
 * fill and paints only this, so a transparent tile would drop the canvas back
 * to whatever sits under the element at high zoom.
 *
 * A user who has set their own `Comfy.Canvas.BackgroundImage` keeps it — the
 * host makes the clear colour transparent and never looks at this tile in that
 * case. Their picture wins over our grid, which is the right way round.
 *
 * Dots at the intersections rather than the stock tile's ruled lines: compared
 * side by side on a live canvas, the ruled version reads as graph paper under
 * the nodes, while the dots stay a texture and leave the links the only lines on
 * screen. Chosen by the pack owner from those two plus a brighter-lines and an
 * accent-coloured variant.
 */
export function canvasGridTile(palette: FilPalette): string {
  const dots: string[] = [];
  for (let x = 0; x < GRID_TILE; x += GRID_CELL) {
    for (let y = 0; y < GRID_TILE; y += GRID_CELL) {
      dots.push(`<circle cx="${x}" cy="${y}" r="${DOT_RADIUS}"/>`);
    }
  }
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${GRID_TILE}" height="${GRID_TILE}">` +
    `<rect width="${GRID_TILE}" height="${GRID_TILE}" fill="${palette.panel}"/>` +
    `<g fill="${withAlpha(palette.muted, DOT_ALPHA)}">${dots.join("")}</g>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
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
        // The canvas, both layers of it: the flat fill and the grid ruled over
        // it. Anything omitted here is filled in from stock dark by the host's
        // `completePalette`, which is how a fully themed canvas kept ComfyUI's
        // own grey grid — see `canvasGridTile`.
        CLEAR_BACKGROUND_COLOR: palette.panel,
        BACKGROUND_IMAGE: canvasGridTile(palette),
        NODE_TITLE_COLOR: palette.text,
        NODE_SELECTED_TITLE_COLOR: palette.accent,
        NODE_TEXT_COLOR: palette.text,
        NODE_TEXT_HIGHLIGHT_COLOR: palette.accent,
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
        WIDGET_DISABLED_TEXT_COLOR: withAlpha(palette.muted, 0.5),
        LINK_COLOR: palette.accent,
        EVENT_LINK_COLOR: palette.ok,
        CONNECTING_LINK_COLOR: palette.ok,
        // The little count/type chips LiteGraph draws on a node. Stock dark's
        // pair on a themed node is the same mismatch the grid was.
        BADGE_FG_COLOR: palette.text,
        BADGE_BG_COLOR: palette.panelAlt,
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

/**
 * Where the user's own palette is parked while ours is in charge.
 *
 * `localStorage` rather than a ComfyUI setting on purpose: ComfyUI rejects
 * writes to ids it has no registered definition for, and registering a hidden
 * bookkeeping row in the user's settings panel to remember one string is worse
 * than a key in the browser. The consequence is that the memory is per-browser —
 * if it is gone, `restoreUserPalette` falls back to core's default rather than
 * leaving the user stuck on our colours.
 */
const PREVIOUS_PALETTE_KEY = "FiL_Design_ImageMind.previousColorPalette";

/** ComfyUI's own default palette id, and the fallback when nothing was remembered. */
export const COMFY_DEFAULT_PALETTE = "dark";

function rememberPrevious(id: unknown): void {
  if (typeof id !== "string" || !id) return;
  // Never let one of ours become "what the user had before". Changing the theme
  // while the whole-interface option is on re-runs this with `fil_<old theme>`
  // active, and overwriting here would lose the real answer for good.
  if (id.startsWith(PALETTE_ID_PREFIX)) return;
  try {
    localStorage.setItem(PREVIOUS_PALETTE_KEY, id);
  } catch {
    /* private mode or quota — the fallback above is what covers this */
  }
}

function takePrevious(): string | null {
  try {
    const stored = localStorage.getItem(PREVIOUS_PALETTE_KEY);
    localStorage.removeItem(PREVIOUS_PALETTE_KEY);
    return stored;
  } catch {
    return null;
  }
}

/**
 * The opt-in version of the export above: build the palette AND switch ComfyUI
 * to it, so the theme reaches the menus, the sidebars, the canvas and every
 * other pack's nodes.
 *
 * This is the whole-application repaint the file header warns about, which is
 * why it exists only behind a setting the user turns on themselves, and why the
 * palette they were on is written down first — `restoreUserPalette` is the
 * matching "off".
 *
 * The active palette is set explicitly rather than left to
 * `addCustomColorPalette`'s side effect. That the host switches to whatever it
 * adds is measured behaviour, not a promise, and this function's whole job is
 * the switch — it should not depend on someone else's accident.
 *
 * Two things about the host make the shape below necessary, both read out of
 * `stores/workspace/colorPaletteStore.ts` and `services/colorPaletteService.ts`
 * rather than guessed:
 *
 *  - `addCustomPalette` **throws on an id that already exists** and adds
 *    nothing. Turning this option on a second time for a theme whose palette is
 *    still in the list hits that every time, so the old entry is dropped first.
 *    Re-adding is also what picks up a retuned accent, since palettes are held
 *    to a contrast ratio and do get retuned.
 *  - every method on `extensionManager.colorPalette` is wrapped in the host's
 *    `wrapWithErrorHandlingAsync`, which reports the throw and **resolves
 *    anyway**. So `await` succeeding proves nothing, and pointing
 *    `Comfy.ColorPalette` at a palette that was never added leaves the user on
 *    an id that resolves to nothing. The add is verified before the switch.
 */
export async function applyThemeToWholeUi(theme: FilThemeName): Promise<ComfyColorPalette | null> {
  const api = paletteApi();
  const settings = settingApi();
  if (!api?.addCustomColorPalette || !settings?.set) return null;

  rememberPrevious(settings.get?.(ACTIVE_PALETTE_SETTING));
  const nodeSlot = api.getActiveColorPalette?.()?.colors?.node_slot ?? {};
  const palette = buildComfyPalette(theme, ACTIVE_PALETTE, nodeSlot);

  if (paletteExists(palette.id)) await api.deleteCustomColorPalette?.(palette.id);
  await api.addCustomColorPalette(palette);
  if (api.getActiveColorPalette?.()?.id !== palette.id) return null;

  await settings.set(ACTIVE_PALETTE_SETTING, palette.id);
  return palette;
}

/**
 * Hand the application back.
 *
 * Returns the palette id restored, or `null` when there was nothing to undo —
 * including the case where the user has already switched away in ComfyUI's own
 * picker. Overruling that would be this pack deciding it knows better than the
 * last thing the user clicked.
 *
 * The `fil_*` entry itself is deliberately left in their palette list. It is
 * inert once inactive, it is theirs to keep or delete from the same picker, and
 * silently deleting a saved palette on a toggle is a bigger move than the toggle
 * promises.
 */
export async function restoreUserPalette(): Promise<string | null> {
  const settings = settingApi();
  if (!settings?.set) return null;

  const active = settings.get?.(ACTIVE_PALETTE_SETTING);
  if (typeof active === "string" && active && !active.startsWith(PALETTE_ID_PREFIX)) {
    takePrevious();
    return null;
  }

  const previous = takePrevious() || COMFY_DEFAULT_PALETTE;
  await settings.set(ACTIVE_PALETTE_SETTING, previous);
  return previous;
}

/**
 * Take one back out of the user's list.
 *
 * Guarded on it being there, because `deleteCustomPalette` throws on an id it
 * does not hold — and the host's wrapper turns that into a console error the
 * user did nothing to earn.
 */
export async function removeExportedPalette(theme: FilThemeName): Promise<boolean> {
  const api = paletteApi();
  const id = `${PALETTE_ID_PREFIX}${theme}`;
  if (!api?.deleteCustomColorPalette || !paletteExists(id)) return false;
  await api.deleteCustomColorPalette(id);
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
    // Short form for the menu bar; the command palette keeps the long label.
    menubarLabel: "Save theme as palette",
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
