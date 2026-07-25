import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

export const decomposerNode: NodeModule = {
  id: "FiLImageDecomposer",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }],
    });

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
