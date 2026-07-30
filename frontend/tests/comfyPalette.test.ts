import { describe, it, expect, beforeEach, vi } from "vitest";
import { buildComfyPalette, exportThemeAsComfyPalette, removeExportedPalette, currentThemeName } from "@/styles/comfyPalette";
import { applyFilTheme, injectFilBrandVars, ACTIVE_PALETTE } from "@/styles/brand";

/**
 * The pack offers its theme to ComfyUI as a palette. What matters is what it
 * does *not* do: it must not switch the active palette, must not invent socket
 * colours, and must not leave anything behind that the user cannot remove from
 * ComfyUI's own picker.
 */

const NODE_SLOT = { IMAGE: "#64B5F6", MODEL: "#B39DDB", LATENT: "#FF9CF9" };

/**
 * Modelled on what the real host does, not on what its method names suggest:
 * `addCustomColorPalette` *switches to* the palette it adds. Measured live —
 * see the note in comfyPalette.ts. A fake that merely records the call would
 * let the bug this guards against straight through.
 */
function fakeHost(active = "obsidian") {
  const state = { active };
  const api = {
    getActiveColorPalette: vi.fn(() => ({ id: state.active, name: "Obsidian", colors: { node_slot: NODE_SLOT } })),
    addCustomColorPalette: vi.fn(async (p: { id: string }) => {
      state.active = p.id;
    }),
    deleteCustomColorPalette: vi.fn(async () => undefined),
    loadColorPalette: vi.fn(async () => undefined),
  };
  const setting = {
    get: vi.fn((id: string) => (id === "Comfy.ColorPalette" ? state.active : undefined)),
    set: vi.fn(async (id: string, v: unknown) => {
      if (id === "Comfy.ColorPalette") state.active = String(v);
    }),
  };
  (globalThis as unknown as { app: unknown }).app = { extensionManager: { colorPalette: api, setting } };
  return { api, setting, state };
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
    await removeExportedPalette("neo_emerald");
    expect(api.deleteCustomColorPalette).toHaveBeenCalledWith("fil_neo_emerald");
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
