/**
 * useConnectionFx — connection event handlers.
 *
 * Handles connection/disconnection toasts.
 */
import { toast } from "@/stores/toastStore";

function shouldShowToasts(): boolean {
  const g = globalThis as unknown as {
    app?: {
      extensionManager?: {
        setting?: { get?: (id: string, fallback?: unknown) => unknown };
      };
    };
    ui?: { settings?: { getSettingValue?: (id: string, fallback?: unknown) => unknown } };
  };

  return Boolean(
    g.app?.extensionManager?.setting?.get?.("FiL_Design_ImageMind.ConnectionFX.ShowToasts", true) ??
      (globalThis as unknown as { app?: { ui?: { settings?: { getSettingValue?: (i: string, f?: unknown) => unknown } } } })
        .app?.ui?.settings?.getSettingValue?.("FiL_Design_ImageMind.ConnectionFX.ShowToasts", true) ??
        true,
  );
}

export function useConnectionFx() {
  function onConnectionsChange(
    _node: unknown,
    _inputSlot: number,
    _outputSlot: number,
    _links: unknown,
  ) {
    // This placeholder is for advanced link-change inspection.
  }

  function onConnect(
    _inputSlot: number,
    _outputSlot: number,
    _link: unknown,
    _nodeInput: unknown,
  ) {
    if (shouldShowToasts()) {
      toast.success("Connected");
    }
  }

  function onDisconnect(_inputSlot: number, _outputSlot: number) {
    if (shouldShowToasts()) {
      toast.info("Disconnected");
    }
  }

  return { onConnectionsChange, onConnect, onDisconnect };
}
