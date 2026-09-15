import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { FIL_STATE_KEY, installFilStatePersistence, restoreFilState, type PersistedPanelState } from "@/nodes2/statePersistence";

const LatentUpscaleProVue = defineAsyncComponent(() => import("@/components/nodes/LatentUpscaleProPanel.vue"));

export const LATENT_UPSCALE_PRO_SOCKET_INPUTS = [
  "scale_by",
  "target_width",
  "target_height",
  "longest_edge",
];

const numericDefaults: Record<string, number> = {
  scale_by: 1.5,
  target_width: 1024,
  target_height: 1024,
  longest_edge: 1536,
};

const stringDefaults: Record<string, string> = {
  mode: "By Factor",
  upscale_method: "bislerp",
  snap_to: "64 px (U-Net & DiT Safe)",
  round_mode: "nearest",
};

const HIDE = [...Object.keys(numericDefaults), ...Object.keys(stringDefaults)];

export const latentUpscaleProNode: NodeModule = {
  id: "FiLLatentUpscalePro",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [320, 320],
      initialWidth: 320,
      family: "image",
      description: "Smart latent scaler with artifact-free grid snapping (64/16/8 px), aspect ratio preservation, and pixel dimension outputs.",
      badges: [{ text: "latent", color: "#38bdf8", text_color: "#000" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>, quiet = false) => {
      for (const name of Object.keys(numericDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name], quiet);
      }
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name], quiet);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filLatentUpscaleProState?: unknown; _filSocketPolicy?: string };
      node._filSocketPolicy = "always";
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filLatentUpscaleProState = state;

      installFilStatePersistence(node, state);
      addFilDomWidget(node, "fil_latent_upscale_pro_view", LatentUpscaleProVue, { state, height: 320, growable: true });
      exposeWidgetInputSockets(this, LATENT_UPSCALE_PRO_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filLatentUpscaleProState?: PersistedPanelState; _filSocketPolicy?: string };
      node._filSocketPolicy = "always";
      const state = node._filLatentUpscaleProState;
      if (!state) return result;
      const hasFilState = Boolean((args[0] as Record<string, unknown> | undefined)?.[FIL_STATE_KEY]);
      syncAll(node, state.nodeState, hasFilState);
      restoreFilState(state, args[0]);
      exposeWidgetInputSockets(this, LATENT_UPSCALE_PRO_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, LATENT_UPSCALE_PRO_SOCKET_INPUTS, "_filLatentUpscaleProState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
