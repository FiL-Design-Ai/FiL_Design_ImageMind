import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

export const cleanerNode: NodeModule = {
  id: "FiLNeuroCleaner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height measured from the real layout: LiteGraph's own computeSize()
      // reports 82px for the title, the `anything` socket row and two toggles.
      // A taller floor would only stop the user shrinking the node back to the
      // size it takes by itself.
      minSize: [240, 82],
      family: "tool",
      description: "GPU VRAM and loaded model memory cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }],
    });

    // No Vue panel: the node is two booleans, and native ComfyUI widgets cover
    // them completely — `label_on`/`label_off` carry the switch text, localized
    // from node_cleaner.py. A DOM widget here bought nothing and cost the whole
    // reconciliation between the browser's layout and LiteGraph's: hidden
    // widgets, a synced state proxy, and a resize observer per node. Same
    // pattern as ksampler.ts / noise_control.ts.
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
