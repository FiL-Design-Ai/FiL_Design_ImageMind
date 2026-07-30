import { describe, it, expect, beforeEach } from "vitest";
import {
  APPEARANCE_SETTINGS,
  ANIMATIONS,
  THEME_SCOPE,
  SCOPE_ALL,
  SCOPE_OURS,
  renderAppearance,
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

  it("keeps the scope setting's options in step with the exported constants", () => {
    // The stored value is one of these strings; a rename on one side only would
    // silently fall through to the default scope.
    expect(settingById(THEME_SCOPE).options).toContain(SCOPE_OURS);
    expect(settingById(THEME_SCOPE).options).toContain(SCOPE_ALL);
    expect(settingById(THEME_SCOPE).defaultValue).toBe(SCOPE_OURS);
  });
});
