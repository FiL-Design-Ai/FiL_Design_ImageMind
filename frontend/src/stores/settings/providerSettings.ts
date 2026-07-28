/**
 * Read a ComfyUI setting via the platform `extensionManager.setting.get`
 * API (per the advanced guide §13.3) instead of the legacy
 * `app.ui.settings.getSettingValue`. Falls back to `defaultValue` when
 * either the API or the stored value is missing.
 *
 * The id is passed on its own: handing a fallback to either API logs
 * "Parameter defaultValue is deprecated. The default value in settings
 * definition will be used instead." on every read. Our settings all declare a
 * `defaultValue` where they are registered, which is the value ComfyUI now
 * returns by itself; `defaultValue` here only covers a read that happens before
 * registration, or an id ComfyUI does not know.
 */
export function readSetting<T>(id: string, defaultValue: T, app?: unknown): T {
  const w = (app ?? globalThis) as unknown as {
    app?: {
      extensionManager?: {
        setting?: { get?: (id: string) => T | undefined };
      };
    };
    ui?: { settings?: { getSettingValue?: (id: string) => T | undefined } };
  };
  try {
    const modern = w.app?.extensionManager?.setting?.get;
    if (typeof modern === "function") return modern(id) ?? defaultValue;
    const legacy = w.ui?.settings?.getSettingValue ?? (globalThis as unknown as { app?: { ui?: { settings?: { getSettingValue?: (i: string) => T | undefined } } } }).app?.ui?.settings?.getSettingValue;
    if (typeof legacy === "function") return legacy(id) ?? defaultValue;
  } catch (err) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${id}":`, err);
  }
  return defaultValue;
}
