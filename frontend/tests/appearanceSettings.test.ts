import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  APPEARANCE_SETTINGS,
  ANIMATIONS,
  THEME_SCOPE,
  WHOLE_UI,
  SCOPE_ALL,
  SCOPE_OURS,
  renderAppearance,
  syncWholeUiPalette,
} from "@/stores/settings/appearanceSettings";

/**
 * ComfyUI fires `onChange` *before* the settings store holds the new value.
 * Measured on a live 1.47.10: a handler that re-read the store instead of using
 * the argument left the panels one change behind — animations kept running
 * after they were switched off and only stopped on the next unrelated edit.
 *
 * The store here is deliberately stale, exactly as the real one is at that
 * moment, so a handler that reads it instead of its argument fails.
 */

const settings: Record<string, unknown> = {};

function settingById(id: string) {
  const found = APPEARANCE_SETTINGS.find((s) => s.id === id);
  if (!found) throw new Error(`no setting ${id}`);
  return found;
}

beforeEach(() => {
  for (const k of Object.keys(settings)) delete settings[k];
  (globalThis as unknown as { app: unknown }).app = {
    extensionManager: { setting: { get: (id: string) => settings[id] } },
  };
  delete document.documentElement.dataset.filMotion;
  delete document.documentElement.dataset.filScope;
});

describe("appearance settings", () => {
  it("turns animations off from the argument, not the not-yet-updated store", () => {
    settings[ANIMATIONS] = true; // what the store still says while onChange runs
    settingById(ANIMATIONS).onChange?.(false, true);
    expect(document.documentElement.dataset.filMotion).toBe("off");
  });

  it("turns animations back on the same way", () => {
    settings[ANIMATIONS] = false;
    settingById(ANIMATIONS).onChange?.(true, false);
    expect(document.documentElement.dataset.filMotion).toBe("full");
  });

  it("widens the scope from the argument too", () => {
    settings[THEME_SCOPE] = SCOPE_OURS;
    settingById(THEME_SCOPE).onChange?.(SCOPE_ALL, SCOPE_OURS);
    expect(document.documentElement.dataset.filScope).toBe("all");
  });

  it("defaults to our own nodes and to animations on", () => {
    renderAppearance();
    expect(document.documentElement.dataset.filScope).toBe("ours");
    expect(document.documentElement.dataset.filMotion).toBe("full");
  });

  it("offers the whole-application option off by default", () => {
    // Off is the only defensible default: turning it on repaints menus,
    // sidebars and every other pack's nodes, which is the user's call to make.
    expect(settingById(WHOLE_UI).type).toBe("boolean");
    expect(settingById(WHOLE_UI).defaultValue).toBe(false);
  });

  it("keeps the scope setting's options in step with the exported constants", () => {
    // The stored value is one of these strings; a rename on one side only would
    // silently fall through to the default scope.
    expect(settingById(THEME_SCOPE).options).toContain(SCOPE_OURS);
    expect(settingById(THEME_SCOPE).options).toContain(SCOPE_ALL);
    expect(settingById(THEME_SCOPE).defaultValue).toBe(SCOPE_OURS);
  });
});

/**
 * The switch itself, driven the way the host drives it. `onChange` is
 * synchronous and the work behind it is not, so these wait for the palette to
 * actually land rather than for the handler to return.
 */
describe("the whole-of-ComfyUI switch", () => {
  /**
   * The same shape as the fake in comfyPalette.test.ts, and for the same
   * reason: `addCustomPalette` switches to what it adds and refuses a duplicate
   * id. `toast` is routed to the host's own alert channel so a warning path
   * does not need Pinia standing up.
   */
  function fakePaletteHost(active: string) {
    const state = { active, custom: {} as Record<string, unknown> };
    (globalThis as unknown as { app: unknown }).app = {
      graph: { _nodes: [] },
      extensionManager: {
        toast: { addAlert: vi.fn() },
        colorPalette: {
          getActiveColorPalette: () => ({ id: state.active, name: state.active, colors: { node_slot: {} } }),
          addCustomColorPalette: vi.fn(async (p: { id: string }) => {
            if (p.id in state.custom) return;
            state.custom[p.id] = p;
            state.active = p.id;
          }),
          deleteCustomColorPalette: vi.fn(async (id: string) => {
            if (!(id in state.custom)) return;
            delete state.custom[id];
            state.active = "dark";
          }),
        },
        setting: {
          get: (id: string) => {
            if (id === "Comfy.ColorPalette") return state.active;
            if (id === "Comfy.CustomColorPalettes") return state.custom;
            return settings[id];
          },
          set: async (id: string, v: unknown) => {
            if (id === "Comfy.ColorPalette") state.active = String(v);
          },
        },
      },
    };
    return state;
  }

  beforeEach(() => {
    localStorage.clear();
  });

  it("hands the application over and takes it back again", async () => {
    const state = fakePaletteHost("obsidian");
    settingById(WHOLE_UI).onChange?.(true, false);
    await vi.waitFor(() => expect(state.active).toBe("fil_default"));

    settingById(WHOLE_UI).onChange?.(false, true);
    await vi.waitFor(() => expect(state.active).toBe("obsidian"));
  });

  it("leaves the host's palette alone while the switch is off", async () => {
    const state = fakePaletteHost("obsidian");
    settings[WHOLE_UI] = false;
    syncWholeUiPalette("pipboy");
    await new Promise((r) => setTimeout(r, 0));
    expect(state.active).toBe("obsidian");
  });

  it("follows the theme picker while the switch is on", async () => {
    // Otherwise the application keeps the colours of the theme just left.
    const state = fakePaletteHost("obsidian");
    settings[WHOLE_UI] = true;
    syncWholeUiPalette("pipboy");
    await vi.waitFor(() => expect(state.active).toBe("fil_pipboy"));
  });
});
