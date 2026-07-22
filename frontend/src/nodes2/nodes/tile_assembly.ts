import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

export const tileAssemblyNode: NodeModule = {
  id: "FiLTileAssembly",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }],
    });

    // No widgets — just two sockets (tiles, layout) and an image output.
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
