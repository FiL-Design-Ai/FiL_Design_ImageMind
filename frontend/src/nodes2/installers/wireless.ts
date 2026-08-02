import type { ComfyApp } from "@/types/comfy";
import { installWirelessOverlay, installWirelessPromptBridge } from "@/nodes2/wireless";

/**
 * Turn wireless channels on for this page.
 *
 * Installed unconditionally, because the switch it obeys
 * (`FiL_Design_ImageMind.Wireless.Enabled`) is read per queue, not here — a
 * user who flips it off expects the next run to obey, not the next reload.
 * With no Channel node in the graph the bridge resolves nothing and changes
 * nothing, so the cost of it being present is a function call per queue.
 */
export function installWireless(app: ComfyApp): void {
  installWirelessPromptBridge(app);
  // Independent of the bridge: if drawing fails the graph still queues
  // correctly, and the reverse holds too.
  installWirelessOverlay(app);
}
