/**
 * Read a ComfyUI setting via the platform `extensionManager.setting.get`
 * API (per the advanced guide §13.3) instead of the legacy
 * `app.ui.settings.getSettingValue`. Falls back to `defaultValue` when
 * either the API or the stored value is missing.
 */
export function readSetting<T>(id: string, defaultValue: T, app?: unknown): T {
  const w = (app ?? globalThis) as unknown as {
    app?: {
      extensionManager?: {
        setting?: { get?: (id: string, fallback?: T) => T };
      };
    };
    ui?: { settings?: { getSettingValue?: (id: string, fallback?: T) => T } };
  };
  try {
    const modern = w.app?.extensionManager?.setting?.get;
    if (typeof modern === "function") return modern(id, defaultValue);
    const legacy = w.ui?.settings?.getSettingValue ?? (globalThis as unknown as { app?: { ui?: { settings?: { getSettingValue?: (i: string, f?: T) => T } } } }).app?.ui?.settings?.getSettingValue;
    if (typeof legacy === "function") return legacy(id, defaultValue);
  } catch (err) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${id}":`, err);
  }
  return defaultValue;
}