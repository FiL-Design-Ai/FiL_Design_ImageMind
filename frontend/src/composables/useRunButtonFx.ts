/**
 * Run button visual feedback per advanced guide §16.4 — flashes a node's
 * title/header area with a brief accent-colour pulse when it's queued.
 * Wired up via `installRunButtonFx` (nodes2/installers/runButtonFx.ts),
 * which calls `flashNodeRun` below directly from the queue hook — there's
 * no per-node `beforeRegisterNodeDef` registration step needed.
 */

/**
 * Get animation duration from global settings.
 */
function getAnimationDuration(): number {
  const g = globalThis as unknown as {
    app?: {
      extensionManager?: {
        setting?: { get?: (id: string, fallback?: string) => string };
      };
    };
    ui?: { settings?: { getSettingValue?: (id: string, fallback?: string) => string } };
  };

  const settingId = "FiL_Design_ImageMind.RunButton.AnimationDuration";
  const duration =
    g.app?.extensionManager?.setting?.get?.(settingId, "Normal") ??
    (globalThis as unknown as { app?: { ui?: { settings?: { getSettingValue?: (i: string, f?: string) => string } } } })
      .app?.ui?.settings?.getSettingValue?.(settingId, "Normal") ??
    "Normal";

  const durations: Record<string, number> = { Fast: 200, Normal: 400, Slow: 600 };
  return durations[String(duration)] || 400;
}

/**
 * Flash the node header. Call after `app.queuePrompt` for the node.
 * Duration is configurable via FiL_Design_ImageMind.RunButton.AnimationDuration setting.
 */
export function flashNodeRun(
  app: { canvas?: { nodeEls?: Record<string | number, HTMLElement> } },
  nodeId: string | number,
): void {
  // Check if effects are enabled
  const g = globalThis as unknown as {
    app?: {
      extensionManager?: {
        setting?: { get?: (id: string, fallback?: unknown) => unknown };
      };
    };
    ui?: { settings?: { getSettingValue?: (id: string, fallback?: unknown) => unknown } };
  };

  const isEnabled =
    g.app?.extensionManager?.setting?.get?.("FiL_Design_ImageMind.RunButton.Enabled", true) ??
    (globalThis as unknown as { app?: { ui?: { settings?: { getSettingValue?: (i: string, f?: unknown) => unknown } } } })
      .app?.ui?.settings?.getSettingValue?.("FiL_Design_ImageMind.RunButton.Enabled", true) ??
    true;

  if (!isEnabled) return;

  const el = app?.canvas?.nodeEls?.[nodeId];
  if (!el) return;

  const header = el.querySelector<HTMLElement>(".comfy-node-header");
  if (!header) return;

  const duration = getAnimationDuration();
  const originalBg = header.style.background;
  const transitionTime = Math.max(60, duration * 0.3); // 30% of duration for transition

  header.style.transition = `background ${transitionTime}ms ease`;
  header.style.background = "var(--fil-accent, #7c3aed)";
  setTimeout(() => {
    header.style.background = originalBg;
  }, duration);
}
