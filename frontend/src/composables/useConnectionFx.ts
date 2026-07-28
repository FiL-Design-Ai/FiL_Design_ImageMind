/**
 * useConnectionFx — connection event handlers.
 *
 * Handles connection/disconnection toasts.
 */
import { toast } from "@/stores/toastStore";
import { readSetting } from "@/stores/settings/providerSettings";
import { SHOW_CONNECTION_TOASTS } from "@/stores/settings/connectionFxSettings";

// The setting was declared with a default of false but read with a fallback of
// true, and it was never registered with ComfyUI — so the fallback was the only
// value anyone ever got. Registered now, and both ends agree on false.
function shouldShowToasts(): boolean {
  return readSetting<boolean>(SHOW_CONNECTION_TOASTS, false) === true;
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
