import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const TileAssemblyPanel = defineAsyncComponent(() => import("@/components/nodes/TileAssemblyPanel.vue"));

export const tileAssemblyNode: NodeModule = {
  id: "FiLTileAssembly",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // 200-tall floor predated the panel; with it the node just carried a
      // big empty strip below the description line.
      minSize: [270, 120],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // The node has no widgets, so without a DOM widget nothing of ours lands
    // in the node's DOM and the Vue-renderer skin (keyed off `.fil-node-shell`)
    // never matches — the node wears stock chrome. The description panel is
    // both the marker and the only UI the node had no home for.
    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      addFilDomWidget(this, "fil_tile_assembly_view", TileAssemblyPanel, { state: {}, height: 20 });
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // No widgets — just two sockets (tiles, layout) and an image output.
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
