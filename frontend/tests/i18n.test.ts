import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * A flat `t('prov_models', 'models')` read "1 моделей" for a single model —
 * grammatically wrong regardless of the English fallback, since Russian has
 * three plural forms where English only has two. tPlural() is the fix; this
 * covers its Russian mod-10/mod-100 rule directly.
 */

vi.mock("@/stores/settings/providerSettings", () => ({
  readSetting: vi.fn(() => "ru"),
}));

vi.mock("@/api/client", () => ({
  getJson: vi.fn(async () => ({
    prov_models_one: "модель",
    prov_models_few: "модели",
    prov_models_many: "моделей",
  })),
}));

// `state` in useI18n.ts is a module-scope singleton, so each test needs a
// fresh module instance to pick up its own mocked locale fetch.
async function loadUseI18n() {
  vi.resetModules();
  const mod = await import("@/composables/useI18n");
  const { t, tPlural, state } = mod.useI18n();
  for (let i = 0; i < 10 && !state.loaded; i++) {
    await Promise.resolve();
  }
  return { t, tPlural, state };
}

describe("useI18n.tPlural", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("uses the Russian mod-10/mod-100 rule once the locale has loaded", async () => {
    const { tPlural, state } = await loadUseI18n();
    expect(state.lang).toBe("ru");

    expect(tPlural("prov_models", 1, "model", "models", "models")).toBe("модель");
    expect(tPlural("prov_models", 21, "model", "models", "models")).toBe("модель"); // 21 -> one
    expect(tPlural("prov_models", 2, "model", "models", "models")).toBe("модели");
    expect(tPlural("prov_models", 4, "model", "models", "models")).toBe("модели");
    expect(tPlural("prov_models", 5, "model", "models", "models")).toBe("моделей");
    expect(tPlural("prov_models", 11, "model", "models", "models")).toBe("моделей"); // teens are always "many"
    expect(tPlural("prov_models", 0, "model", "models", "models")).toBe("моделей");
  });

  it("falls back to English singular/plural when no translation is loaded", async () => {
    vi.doMock("@/api/client", () => ({ getJson: vi.fn(async () => ({})) }));
    vi.doMock("@/stores/settings/providerSettings", () => ({ readSetting: vi.fn(() => "en") }));
    const { tPlural, state } = await loadUseI18n();
    expect(state.lang).toBe("en");

    expect(tPlural("prov_models", 1, "model", "models", "models")).toBe("model");
    expect(tPlural("prov_models", 2, "model", "models", "models")).toBe("models");
    expect(tPlural("prov_models", 21, "model", "models", "models")).toBe("models");
  });
});
