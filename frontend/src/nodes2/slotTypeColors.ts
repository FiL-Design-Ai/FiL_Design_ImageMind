/**
 * Colours for the pack's own custom slot types.
 *
 * `common/io_types.py` declares three types nothing else in ComfyUI knows about:
 * `FIL_HIRES_SCRIPT`, `FIL_TILE_LAYOUT`, `FIL_PROVIDER_CONFIG`. Verified live
 * against a running ComfyUI: the host's own colour maps
 * (`app.canvas.default_connection_color_byType`, `LGraphCanvas.link_type_colors`)
 * carry an empty string for all three — `colorPaletteService.ts::loadLinkColorPalette`
 * pre-fills every known data type with `''` before laying the active palette on
 * top, and nothing ever supplies these three because the host has never heard
 * of them. An empty string is not a missing entry a `??` can fall through; the
 * dot renders with it and lands on the dejected grey-green "no colour"
 * default (`input_off: #778` / `input_on: #7F7`, `SlotBase.ts`).
 *
 * Fixed hex, not a theme token: these sit in the same row as the six colours
 * core ships for MODEL/CONDITIONING/LATENT/VAE/CLIP/IMAGE, which never move
 * when a FiL theme changes. A socket dot that redecorates itself on every
 * theme switch breaks the one thing a slot colour is for — "the purple one is
 * always MODEL" — for our own types too.
 */

/**
 * One dot colour per FiL-only type. Picked clear of the six core colours
 * measured live: IMAGE #64B5F6 (hue 207°), MODEL #B39DDB (262°),
 * CONDITIONING #FFA931 (35°), LATENT #FF9CF9 (303°), CLIP #FFD500 (50°),
 * VAE #FF6E6E (0°).
 *
 * `FIL_TILE_LAYOUT` originally sat at hue 199° (#38BDF8) — 8° from IMAGE's
 * 207°, close enough that the two dots on FiLUpscaleSimple (`image`/`tiles`
 * next to `layout`) read as the same blue at a glance (reported live: "не
 * тот цвет у точек"). Moved to 103° (yellow-green), the widest open span on
 * the wheel (50°→207°, 157° wide) — 53° clear of both CLIP and itself vs.
 * FIL_HIRES_SCRIPT.
 *
 * `FIL_PROVIDER_CONFIG` sat 27° from LATENT (303° vs. its old 330°) — under
 * the 30° minimum `nodes2/wireless/channelColor.ts` already holds channel
 * hues to for the same reason. Moved to 331° (rose), now 69° clear of MODEL
 * and 28° clear of VAE on the other side — the only direction with any
 * gap left once the wheel is this full.
 */
export const FIL_SLOT_COLORS: Readonly<Record<string, string>> = {
  FIL_HIRES_SCRIPT: "#6EE7B7",
  FIL_TILE_LAYOUT: "#83DD5F",
  FIL_PROVIDER_CONFIG: "#E467A4",
};

interface ColorableSlot {
  type?: unknown;
  color_on?: string;
  color_off?: string;
}

interface ColorableNode {
  inputs?: ColorableSlot[];
  outputs?: ColorableSlot[];
}

/**
 * Paint this node's own inputs/outputs whose type is one of ours.
 *
 * The classic canvas renderer reads a slot's own `color_on`/`color_off`
 * before it ever asks the type-colour map (`SlotBase.ts` `getConnectedColor`),
 * so this touches only sockets on FiL nodes and nothing belonging to the host
 * or another pack — no global map, no shared state.
 */
export function applyFilSlotColors(node: unknown): void {
  const n = node as ColorableNode;
  for (const slot of [...(n.inputs ?? []), ...(n.outputs ?? [])]) {
    if (!slot) continue;
    const color = FIL_SLOT_COLORS[String(slot.type ?? "")];
    if (!color) continue;
    slot.color_on = color;
    slot.color_off = color;
  }
}

/**
 * Register the same three colours with the host's own maps, so a *link* (the
 * drawn wire, not the dot at either end) also wears the FiL colour instead of
 * the host's blank-string default — and so the Nodes 2.0 (Vue) socket dot,
 * which reads `--color-datatype-<type>` rather than a per-slot property, picks
 * it up too (`SlotConnectionDot.vue`, read from `channelColor.ts`'s comment
 * trail on the same three call sites).
 *
 * Idempotent and safe to call repeatedly — `applyThemeToWholeUi` /
 * `restoreUserPalette` (`styles/comfyPalette.ts`) rebuild both host maps from
 * scratch on every theme switch, wiping this out each time, so the caller
 * re-runs this after every switch rather than once at startup.
 */
export function registerFilTypeColors(): void {
  const host = globalThis as {
    app?: { canvas?: { default_connection_color_byType?: Record<string, string> } };
    LGraphCanvas?: { link_type_colors?: Record<string, string> };
  };
  const byType = host.app?.canvas?.default_connection_color_byType;
  const linkColors = host.LGraphCanvas?.link_type_colors;
  const root = globalThis.document?.documentElement;

  for (const [type, color] of Object.entries(FIL_SLOT_COLORS)) {
    if (byType) byType[type] = color;
    if (linkColors) linkColors[type] = color;
    root?.style.setProperty(`--color-datatype-${type}`, color);
  }
}
