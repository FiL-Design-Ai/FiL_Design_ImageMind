import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

export const noiseControlNode: NodeModule = {
  id: "FiLNoiseControl",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }],
    });

    // Small enough widget set (4) that it keeps every native ComfyUI widget
    // visible, same call as FiLKSampler/FiLHighResFix's advanced sockets —
    // no custom Vue panel needed.
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
