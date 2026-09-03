import { defineAsyncComponent } from "vue";
import type { ComfyApp, ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const ShowAnyVue = defineAsyncComponent(() => import("@/components/nodes/ShowAnyPanel.vue"));

export const SHOW_ANY_SOCKET_INPUTS = ["source", "text"];

function updateDynamicShowAnySocket(node: LGraphNode): void {
  if (!node.inputs?.[0] || !node.outputs?.[0]) return;
  const inputSlot = node.inputs[0];
  const outputSlot = node.outputs[0];

  const linkId = inputSlot.link;
  if (linkId != null && node.graph?.links) {
    const link = node.graph.links[linkId];
    if (link) {
      const originNode =
        link.origin_id != null ? node.graph.getNodeById?.(link.origin_id) : undefined;
      const originSlot =
        link.origin_slot != null ? originNode?.outputs?.[link.origin_slot] : undefined;
      const detectedType = String(originSlot?.type || link.type || "*");

      outputSlot.type = detectedType;
      outputSlot.label = detectedType === "*" ? "*" : detectedType;
      if (originSlot?.color_on) outputSlot.color_on = originSlot.color_on;
      if (originSlot?.color_off) outputSlot.color_off = originSlot.color_off;
      node.graph.setDirtyCanvas?.(true, true);
      return;
    }
  }

  outputSlot.type = "*";
  outputSlot.label = "*";
  delete outputSlot.color_on;
  delete outputSlot.color_off;
  node.graph?.setDirtyCanvas?.(true, true);
}

export const showAnyNode: NodeModule = {
  id: "FiLShowAny",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [260, 120],
      initialWidth: 280,
      family: "tool",
      description: "Universal data inspector & pass-through monitor.",
      badges: [{ text: "SHOW ANY", color: "#2dd4bf", text_color: "#000" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onConnectionsChange?: (...a: unknown[]) => unknown;
        onExecuted?: (message: Record<string, unknown>, ...args: unknown[]) => unknown;
        onDrawBackground?: (ctx: CanvasRenderingContext2D, ...args: unknown[]) => unknown;
        onDrawForeground?: (ctx: CanvasRenderingContext2D, ...args: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const stringDefaults: Record<string, string> = {
      text: "",
    };

    const syncAll = (node: LGraphNode, target: Record<string, unknown>) => {
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filShowAnyState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      hideNativeWidget(node, "text");

      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {} as Record<string, unknown>,
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      const controller = addFilDomWidget(node, "fil_show_any_view", ShowAnyVue, { state, height: 120, growable: true });
      node._filShowAnyState = controller?.state ?? state;
      exposeWidgetInputSockets(this, SHOW_ANY_SOCKET_INPUTS);
      updateDynamicShowAnySocket(this as LGraphNode);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filShowAnyState?: { nodeState: Record<string, unknown> } };
      const state = node._filShowAnyState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, SHOW_ANY_SOCKET_INPUTS);
      updateDynamicShowAnySocket(this as LGraphNode);
      return result;
    };

    const originalConnectionsChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConnectionsChange?.apply(this, args);
      updateDynamicShowAnySocket(this as LGraphNode);
      return result;
    };

      const originalExecuted = p.onExecuted;
    p.onExecuted = function (this: LGraphNode, message: unknown, ...args: unknown[]) {
      const result = originalExecuted?.apply(this, [message as Record<string, unknown>, ...args]);
      const node = this as LGraphNode & {
        _filShowAnyState?: {
          nodeState: Record<string, unknown>;
          ui: Record<string, unknown>;
        };
        imgs?: unknown[];
        imageIndex?: number;
      };

      // Suppress ComfyUI core canvas image duplication (ShowAnyPanel renders it in DOM Vue)
      if (node.imgs) {
        delete node.imgs;
      }

      const state = node._filShowAnyState;
      if (!state || !message || typeof message !== "object") return result;

      const msg = message as Record<string, unknown>;
      const textRaw = msg.text ?? (msg.output as Record<string, unknown>)?.text ?? (msg.ui as Record<string, unknown>)?.text;
      if (textRaw !== undefined && textRaw !== null) {
        const textVal = Array.isArray(textRaw) ? textRaw[0] : textRaw;
        if (typeof textVal === "string") {
          state.nodeState.text = textVal;
        }
      }

      const dtRaw = msg.data_type ?? (msg.output as Record<string, unknown>)?.data_type ?? (msg.ui as Record<string, unknown>)?.data_type;
      if (dtRaw !== undefined && dtRaw !== null) {
        const dtVal = Array.isArray(dtRaw) ? dtRaw[0] : dtRaw;
        if (typeof dtVal === "string") {
          state.ui.data_type = dtVal;
        }
      }

      const imgRaw = msg.images ?? (msg.output as Record<string, unknown>)?.images ?? (msg.ui as Record<string, unknown>)?.images;
      if (Array.isArray(imgRaw)) {
        state.ui.images = imgRaw;
      }
      return result;
    };

    const originalDrawBackground = p.onDrawBackground;
    p.onDrawBackground = function (this: LGraphNode, ctx: CanvasRenderingContext2D, ...args: unknown[]) {
      const node = this as LGraphNode & { imgs?: unknown[]; imageIndex?: number };
      if (node.imgs) {
        delete node.imgs;
      }
      return originalDrawBackground?.apply(this, [ctx, ...args]);
    };

    const originalDrawForeground = p.onDrawForeground;
    p.onDrawForeground = function (this: LGraphNode, ctx: CanvasRenderingContext2D, ...args: unknown[]) {
      const node = this as LGraphNode & { imgs?: unknown[]; imageIndex?: number };
      if (node.imgs) {
        delete node.imgs;
      }
      return originalDrawForeground?.apply(this, [ctx, ...args]);
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, SHOW_ANY_SOCKET_INPUTS, "_filShowAnyState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};

if (typeof window !== "undefined") {
  const tryAttachWs = () => {
    const app = (globalThis as unknown as { app?: ComfyApp }).app;
    const api = app?.api;
    if (typeof api?.addEventListener === "function") {
      api.addEventListener("fil_show_any_update", (event: Event) => {
        const detail = (event as CustomEvent<{ node?: string | number; text?: string; data_type?: string; images?: unknown[] }>).detail;
        if (!detail || !detail.node) return;
        const graph = app?.graph as { getNodeById?: (id: number) => LGraphNode | null } | undefined;
        if (!graph || typeof graph.getNodeById !== "function") return;
        const node = graph.getNodeById(Number(detail.node)) as (LGraphNode & {
          _filShowAnyState?: {
            nodeState: Record<string, unknown>;
            ui: Record<string, unknown>;
          };
        }) | null;
        if (node?._filShowAnyState) {
          if (typeof detail.text === "string") {
            node._filShowAnyState.nodeState.text = detail.text;
          }
          if (typeof detail.data_type === "string") {
            node._filShowAnyState.ui.data_type = detail.data_type;
          }
          if (Array.isArray(detail.images)) {
            node._filShowAnyState.ui.images = detail.images;
          }
        }
      });
      return true;
    }
    return false;
  };

  if (!tryAttachWs()) {
    setTimeout(tryAttachWs, 500);
  }
}
