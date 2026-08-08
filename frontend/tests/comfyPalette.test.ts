import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  buildComfyPalette,
  exportThemeAsComfyPalette,
  removeExportedPalette,
  currentThemeName,
  applyThemeToWholeUi,
  restoreUserPalette,
  canvasGridTile,
  COMFY_DEFAULT_PALETTE,
} from "@/styles/comfyPalette";
import { applyFilTheme, injectFilBrandVars, ACTIVE_PALETTE } from "@/styles/brand";

/**
 * The pack offers its theme to ComfyUI as a palette. What matters is what it
 * does *not* do: it must not switch the active palette, must not invent socket
 * colours, and must not leave anything behind that the user cannot remove from
 * ComfyUI's own picker.
 */

const NODE_SLOT = { IMAGE: "#64B5F6", MODEL: "#B39DDB", LATENT: "#FF9CF9" };

/** `#rrggbb` as the `rgba(r,g,b,` prefix the tile writes, so the test names a colour rather than a literal. */
function withAlphaLike(hex: string): string {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r},${g},${b},`;
}

/**
 * Modelled on the host's own `colorPaletteStore` / `colorPaletteService`, not on
 * what its method names suggest. Three behaviours here are load-bearing and each
 * one was read out of the shipped sources:
 *
 *  - `addCustomPalette` *switches to* the palette it adds;
 *  - it **throws on an id that already exists**, adding nothing;
 *  - every method is wrapped in `wrapWithErrorHandlingAsync`, which reports the
 *    throw and resolves anyway — so a caller that only awaits sees success.
 *
 * The first cut of this fake modelled only the first of those, and the second
 * toggle of "Theme covers all of ComfyUI" pointed the user's palette setting at
 * a palette that had never been added. The unit tests were green; a live
 * ComfyUI put the error in the console.
 */
function fakeHost(active = "obsidian") {
  const state = { active, custom: {} as Record<string, { id: string; colors: { node_slot: Record<string, string> } }> };
  const lookup = (id: string) =>
    state.custom[id] ?? (id ? { id, name: id, colors: { node_slot: NODE_SLOT } } : undefined);
  const swallowed: string[] = [];
  const api = {
    getActiveColorPalette: vi.fn(() => lookup(state.active)),
    addCustomColorPalette: vi.fn(async (p: { id: string; colors: { node_slot: Record<string, string> } }) => {
      if (p.id in state.custom) {
        swallowed.push(`Palette with id ${p.id} already exists`);
        return;
      }
      state.custom[p.id] = p as never;
      state.active = p.id;
    }),
    deleteCustomColorPalette: vi.fn(async (id: string) => {
      if (!(id in state.custom)) {
        swallowed.push(`Palette with id ${id} does not exist`);
        return;
      }
      delete state.custom[id];
      state.active = "dark";
    }),
    loadColorPalette: vi.fn(async () => undefined),
  };
  const setting = {
    get: vi.fn((id: string) => {
      if (id === "Comfy.ColorPalette") return state.active;
      if (id === "Comfy.CustomColorPalettes") return state.custom;
      return undefined;
    }),
    set: vi.fn(async (id: string, v: unknown) => {
      if (id === "Comfy.ColorPalette") state.active = String(v);
    }),
  };
  (globalThis as unknown as { app: unknown }).app = { extensionManager: { colorPalette: api, setting } };
  return { api, setting, state, swallowed };
}

describe("exporting a theme as a ComfyUI palette", () => {
  beforeEach(() => {
    injectFilBrandVars();
    delete (globalThis as { app?: unknown }).app;
  });

  it("carries the user's socket colours through untouched", () => {
    // Socket colour means data type — IMAGE blue, MODEL purple — and that
    // reading is shared across every pack the user has. Restyling it would
    // trade a universal signal for decoration on nodes that are not ours.
    const built = buildComfyPalette("cyberpunk", ACTIVE_PALETTE, NODE_SLOT);
    expect(built.colors.node_slot).toEqual(NODE_SLOT);
  });

  it("keeps the bypass colour ComfyUI users already read", () => {
    const built = buildComfyPalette("nft_vibe", ACTIVE_PALETTE, {});
    expect(built.colors.litegraph_base.NODE_BYPASS_BGCOLOR).toBe("#FF00FF");
  });

  it("names itself so its origin and its theme are both obvious", () => {
    const built = buildComfyPalette("hollywood_teal", ACTIVE_PALETTE, {});
    expect(built.id).toBe("fil_hollywood_teal");
    expect(built.name).toBe("FiL — Hollywood Teal");
  });

  it("rules the canvas grid in the theme's colours, not stock dark's", () => {
    // The grid is a raster tile with its colours baked in, and the host fills
    // an omitted BACKGROUND_IMAGE from stock dark — so a fully themed canvas
    // kept ComfyUI's own grey grid ruled over it.
    applyFilTheme("pipboy");
    const tile = String(buildComfyPalette("pipboy", ACTIVE_PALETTE, {}).colors.litegraph_base.BACKGROUND_IMAGE);
    expect(tile.startsWith("data:image/svg+xml")).toBe(true);
    const svg = decodeURIComponent(tile.split(",")[1]);
    // Pipboy's near-black phosphor panel, and its own muted green in the dots.
    expect(svg).toContain(ACTIVE_PALETTE.panel);
    expect(svg).toContain(withAlphaLike(ACTIVE_PALETTE.muted));
  });

  it("keeps the grid tile a self-contained image, with no DOM behind it", () => {
    // Built as a string on purpose rather than via canvas.toDataURL — the
    // palette builder stays a pure function.
    const a = canvasGridTile({ ...ACTIVE_PALETTE, panel: "#010203", muted: "#0a141e" });
    expect(a).toContain(encodeURIComponent("#010203"));
    expect(a).toContain(encodeURIComponent("rgba(10,20,30,0.35)"));
  });

  it("draws the grid as dots, one per cell across the tile", () => {
    const svg = decodeURIComponent(canvasGridTile(ACTIVE_PALETTE).split(",")[1]);
    // 5 columns × 5 rows at the current 20-unit spacing, and no ruled lines.
    // Widened from the stock tile's 10 after "пестрит в глазах" on a live
    // graph — a quarter of the dots at the same alpha is what actually calmed
    // the pattern down, not dimming a denser grid further.
    expect(svg.match(/<circle /g)?.length).toBe(25);
    expect(svg).not.toContain("<path");
  });

  it("builds the canvas and chrome out of the theme's own colours", () => {
    applyFilTheme("cyberpunk_2077");
    const built = buildComfyPalette("cyberpunk_2077", ACTIVE_PALETTE, {});
    expect(built.colors.litegraph_base.CLEAR_BACKGROUND_COLOR).toBe(ACTIVE_PALETTE.panel);
    expect(built.colors.litegraph_base.LINK_COLOR).toBe(ACTIVE_PALETTE.accent);
    expect(built.colors.comfy_base["bg-color"]).toBe(ACTIVE_PALETTE.panel);
    expect(built.colors.comfy_base["error-text"]).toBe(ACTIVE_PALETTE.danger);
  });

  it("adds the palette and leaves the user's own one active", async () => {
    const { api, state } = fakeHost("obsidian");
    applyFilTheme("neo_emerald");
    const made = await exportThemeAsComfyPalette("neo_emerald");
    expect(api.addCustomColorPalette).toHaveBeenCalledTimes(1);
    expect(made?.id).toBe("fil_neo_emerald");
    // The host switches to whatever it adds, so "only add" has to be restored
    // deliberately. Applying is the user's move, in ComfyUI's own picker —
    // which is also how they undo it.
    expect(state.active).toBe("obsidian");
  });

  it("does not fight the host when our palette was already the active one", async () => {
    const { setting, state } = fakeHost("fil_neo_emerald");
    applyFilTheme("neo_emerald");
    await exportThemeAsComfyPalette("neo_emerald");
    expect(state.active).toBe("fil_neo_emerald");
    expect(setting.set).not.toHaveBeenCalled();
  });

  it("can take the palette back out again", async () => {
    const { api } = fakeHost();
    applyFilTheme("neo_emerald");
    await exportThemeAsComfyPalette("neo_emerald");
    expect(await removeExportedPalette("neo_emerald")).toBe(true);
    expect(api.deleteCustomColorPalette).toHaveBeenCalledWith("fil_neo_emerald");
  });

  it("does not ask the host to delete a palette it never had", async () => {
    // `deleteCustomPalette` throws on an absent id, and the host's wrapper
    // turns that into a console error the user did nothing to earn.
    const { api, swallowed } = fakeHost();
    expect(await removeExportedPalette("neo_emerald")).toBe(false);
    expect(api.deleteCustomColorPalette).not.toHaveBeenCalled();
    expect(swallowed).toEqual([]);
  });

  it("does nothing when the host has no palette API", async () => {
    // Older ComfyUI, or a future one that moved it: report nothing rather than
    // throwing inside a command the user just clicked.
    (globalThis as unknown as { app: unknown }).app = { extensionManager: {} };
    await expect(exportThemeAsComfyPalette("default")).resolves.toBeNull();
    await expect(removeExportedPalette("default")).resolves.toBe(false);
  });

  it("reads the theme that is actually applied", () => {
    applyFilTheme("pipboy");
    expect(currentThemeName()).toBe("pipboy");
  });
});

/**
 * The opt-in whole-application version. Everything the export above refuses to
 * do, this one does on purpose — so what matters here is that it is reversible:
 * the user's palette has to survive the round trip, including a theme change
 * made while the option is on.
 */
describe("applying a theme to the whole of ComfyUI", () => {
  beforeEach(() => {
    injectFilBrandVars();
    delete (globalThis as { app?: unknown }).app;
    localStorage.clear();
  });

  it("switches ComfyUI to a palette built from the theme", async () => {
    const { api, setting, state } = fakeHost("obsidian");
    applyFilTheme("neo_emerald");
    const made = await applyThemeToWholeUi("neo_emerald");
    expect(made?.id).toBe("fil_neo_emerald");
    expect(api.addCustomColorPalette).toHaveBeenCalledTimes(1);
    // Set explicitly, not left to `addCustomColorPalette`'s measured side
    // effect — the switch is this function's whole job.
    expect(setting.set).toHaveBeenCalledWith("Comfy.ColorPalette", "fil_neo_emerald");
    expect(state.active).toBe("fil_neo_emerald");
  });

  it("puts the user's own palette back when switched off", async () => {
    const { state } = fakeHost("obsidian");
    applyFilTheme("pipboy");
    await applyThemeToWholeUi("pipboy");
    expect(await restoreUserPalette()).toBe("obsidian");
    expect(state.active).toBe("obsidian");
  });

  it("still remembers the real palette after the theme is changed mid-flight", async () => {
    // The second apply runs with `fil_pipboy` active. Recording that as "what
    // the user had before" would lose obsidian for good.
    const { state } = fakeHost("obsidian");
    applyFilTheme("pipboy");
    await applyThemeToWholeUi("pipboy");
    applyFilTheme("nft_vibe");
    await applyThemeToWholeUi("nft_vibe");
    expect(state.active).toBe("fil_nft_vibe");
    expect(await restoreUserPalette()).toBe("obsidian");
  });

  it("falls back to ComfyUI's default when nothing was remembered", async () => {
    const { state } = fakeHost("fil_pipboy");
    localStorage.clear();
    expect(await restoreUserPalette()).toBe(COMFY_DEFAULT_PALETTE);
    expect(state.active).toBe(COMFY_DEFAULT_PALETTE);
  });

  it("does not overrule a user who already switched away in ComfyUI's own picker", async () => {
    const { setting, state } = fakeHost("obsidian");
    applyFilTheme("pipboy");
    await applyThemeToWholeUi("pipboy");
    await setting.set("Comfy.ColorPalette", "nord"); // the user, in the host's picker
    setting.set.mockClear();
    expect(await restoreUserPalette()).toBeNull();
    expect(state.active).toBe("nord");
    expect(setting.set).not.toHaveBeenCalled();
  });

  it("can be switched on again for a theme whose palette is still in the list", async () => {
    // Found on a live 1.47.10. The host refuses a duplicate id and its own
    // error wrapper swallows the throw, so the second "on" used to select a
    // palette that had never been added.
    const { state, swallowed } = fakeHost("obsidian");
    applyFilTheme("pipboy");
    await applyThemeToWholeUi("pipboy");
    await restoreUserPalette();

    const again = await applyThemeToWholeUi("pipboy");
    expect(again?.id).toBe("fil_pipboy");
    expect(state.active).toBe("fil_pipboy");
    expect(state.custom).toHaveProperty("fil_pipboy");
    expect(swallowed, "the host should never have been handed a duplicate id").toEqual([]);
  });

  it("refuses to select a palette the host did not actually take", async () => {
    // The add is wrapped in the host's error handler, so awaiting it proves
    // nothing. Pointing Comfy.ColorPalette at a palette that does not exist
    // leaves the user on an id that resolves to nothing at all.
    const { api, setting } = fakeHost("obsidian");
    api.addCustomColorPalette.mockImplementation(async () => undefined);
    setting.set.mockClear();
    expect(await applyThemeToWholeUi("pipboy")).toBeNull();
    expect(setting.set).not.toHaveBeenCalled();
  });

  it("reports nothing rather than throwing when the host has no palette API", async () => {
    (globalThis as unknown as { app: unknown }).app = { extensionManager: {} };
    await expect(applyThemeToWholeUi("default")).resolves.toBeNull();
    await expect(restoreUserPalette()).resolves.toBeNull();
  });
});
