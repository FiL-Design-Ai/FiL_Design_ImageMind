import { defineAsyncComponent } from "vue";
import type { ComfyApp, ComfyNodeData, LGraphLink, LGraphNode, LGraphNodeType, LGraphSlot } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

import { typeColor } from "@/nodes2/wireless/channelColor";
import { FIL_SLOT_COLORS } from "@/nodes2/slotTypeColors";

const ShowAnyVue = defineAsyncComponent(() => import("@/components/nodes/ShowAnyPanel.vue"));

export const SHOW_ANY_SOCKET_INPUTS = ["source", "text"];

const CORE_TYPE_COLORS: Readonly<Record<string, string>> = {
  IMAGE: "#64B5F6",
  LATENT: "#FF9CF9",
  MODEL: "#B39DDB",
  CLIP: "#FFD500",
  VAE: "#FF6E6E",
  CONDITIONING: "#FFA931",
  MASK: "#FFFFFF",
  CONTROL_NET: "#A78BFA",
  STRING: "#6EE7B7",
  INT: "#4ADE80",
  FLOAT: "#FACC15",
  BOOLEAN: "#A78BFA",
  AUDIO: "#FB7185",
  VIDEO: "#38BDF8",
};

export function getKnownSlotColor(type: string): string | undefined {
  if (!type || type === "*") return undefined;
  const hostColor = typeColor(type);
  if (hostColor) return hostColor;

  if (FIL_SLOT_COLORS[type]) return FIL_SLOT_COLORS[type];

  const upper = type.toUpperCase();
  return CORE_TYPE_COLORS[upper];
}

export interface ResolvedShowAnyType {
  type: string;
  color?: string;
}

export function resolveShowAnyType(node: LGraphNode): ResolvedShowAnyType {
  const inputSlot = node.inputs?.[0];
  if (!inputSlot) return { type: "*" };

  const graph = node.graph;
  const linkId = inputSlot.link;

  if (linkId != null && graph?.links) {
    let currLinkId: number | null = linkId;
    const visitedLinks = new Set<number>();
    const visitedNodes = new Set<number | string>();

    while (currLinkId != null && !visitedLinks.has(currLinkId)) {
      visitedLinks.add(currLinkId);
      const link: LGraphLink | undefined = graph.links[currLinkId];
      if (!link) break;

      const originNode: LGraphNode | null | undefined =
        link.origin_id != null ? graph.getNodeById?.(link.origin_id) : undefined;
      const originSlot: LGraphSlot | undefined =
        link.origin_slot != null ? originNode?.outputs?.[link.origin_slot] : undefined;

      const rawType = String(originSlot?.type || link.type || "*").trim();
      const slotColor = originSlot?.color_on || originSlot?.color_off;

      if (rawType && rawType !== "*" && rawType !== "-1") {
        return {
          type: rawType,
          color: slotColor || getKnownSlotColor(rawType),
        };
      }

      if (originNode && originNode.id != null && !visitedNodes.has(originNode.id)) {
        visitedNodes.add(originNode.id);

        const originState = (
          originNode as LGraphNode & { _filShowAnyState?: { ui?: { data_type?: string } } }
        )._filShowAnyState;
        const originRuntimeType = originState?.ui?.data_type;
        if (originRuntimeType && originRuntimeType !== "*" && originRuntimeType !== "UNKNOWN") {
          return {
            type: originRuntimeType,
            color: getKnownSlotColor(originRuntimeType),
          };
        }

        const upstreamSlot: LGraphSlot | undefined = originNode.inputs?.[0];
        if (upstreamSlot?.link != null) {
          currLinkId = upstreamSlot.link;
          continue;
        }
      }

      break;
    }
  }

  // Fallback 1: runtime data_type from executed backend
  const selfState = (
    node as LGraphNode & { _filShowAnyState?: { ui?: { data_type?: string } } }
  )._filShowAnyState;
  const selfRuntimeType = selfState?.ui?.data_type;
  if (selfRuntimeType && selfRuntimeType !== "*" && selfRuntimeType !== "UNKNOWN") {
    return {
      type: selfRuntimeType,
      color: getKnownSlotColor(selfRuntimeType),
    };
  }

  // Fallback 2: text slot wired
  const textSlot = node.inputs?.find((i) => i.name === "text");
  if (textSlot?.link != null) {
    return {
      type: "STRING",
      color: getKnownSlotColor("STRING"),
    };
  }

  return { type: "*" };
}

export function updateDynamicShowAnySocket(node: LGraphNode): void {
  if (!node.inputs?.[0] || !node.outputs?.[0]) return;
  const inputSlot = node.inputs[0];
  const outputSlot = node.outputs[0];

  const resolved = resolveShowAnyType(node);
  const detectedType = resolved.type;
  const color = resolved.color;

  const isConnected = detectedType !== "*";

  if (isConnected) {
    inputSlot.label = detectedType;
    if (color) {
      inputSlot.color_on = color;
      inputSlot.color_off = color;
    } else {
      delete inputSlot.color_on;
      delete inputSlot.color_off;
    }

    outputSlot.type = detectedType;
    outputSlot.name = detectedType;
    outputSlot.label = detectedType;
    if (color) {
      outputSlot.color_on = color;
      outputSlot.color_off = color;
    } else {
      delete outputSlot.color_on;
      delete outputSlot.color_off;
    }
  } else {
    inputSlot.label = "source";
    delete inputSlot.color_on;
    delete inputSlot.color_off;

    outputSlot.type = "*";
    outputSlot.name = "*";
    outputSlot.label = "*";
    delete outputSlot.color_on;
    delete outputSlot.color_off;
  }

  // Notify downstream ShowAny nodes if connected
  if (outputSlot.links && node.graph?.links) {
    for (const outLinkId of outputSlot.links) {
      const outLink = node.graph.links[outLinkId];
      if (outLink?.target_id != null) {
        const targetNode = node.graph.getNodeById?.(outLink.target_id) as
          | (LGraphNode & { _filShowAnyState?: unknown })
          | undefined;
        if (targetNode && (targetNode.type === "FiLShowAny" || targetNode.comfyClass === "FiLShowAny")) {
          updateDynamicShowAnySocket(targetNode);
        }
      }
    }
  }

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

    // Prioritize the universal `source` input for any automatic connection (Search-on-Drag, connectByType, etc.)
    // while keeping the `text` slot accessible for explicit manual drops.
    interface HostSlotConnectProto {
      findInputByType?: (type: unknown) => { index: number; slot: unknown } | undefined;
      findInputSlot?: (type: string, free_slot?: boolean) => number;
      findSlotByType?: (isInput: boolean, type: unknown, ...rest: unknown[]) => number;
      findConnectByTypeSlot?: (isInput: boolean, targetNode: unknown, type: unknown, options: unknown) => number | undefined;
      connectByType?: (slot: number, source_node: LGraphNode, source_slotType: string, opts?: unknown) => unknown;
    }
    const slotConnectProto = p as unknown as HostSlotConnectProto;

    const originalFindInputByType = slotConnectProto.findInputByType;
    slotConnectProto.findInputByType = function (this: LGraphNode, type: unknown) {
      const sourceSlot = this.inputs?.find((i) => i.name === "source");
      if (
        sourceSlot &&
        (sourceSlot.link == null ||
          !!(this.graph as { getLink?: (id: number) => { _dragging?: boolean } })?.getLink?.(sourceSlot.link)?._dragging)
      ) {
        const index = this.inputs!.indexOf(sourceSlot);
        return { index, slot: sourceSlot };
      }
      return originalFindInputByType ? originalFindInputByType.call(this, type) : undefined;
    };

    const originalFindInputSlot = slotConnectProto.findInputSlot;
    slotConnectProto.findInputSlot = function (this: LGraphNode, type: string, free_slot?: boolean) {
      const sourceSlotIdx = this.inputs?.findIndex((i) => i.name === "source");
      if (sourceSlotIdx !== undefined && sourceSlotIdx !== -1) {
        const slot = this.inputs![sourceSlotIdx];
        if (!free_slot || slot.link == null) {
          return sourceSlotIdx;
        }
      }
      return originalFindInputSlot ? originalFindInputSlot.apply(this, [type, free_slot]) : -1;
    };

    const originalFindSlotByType = slotConnectProto.findSlotByType;
    slotConnectProto.findSlotByType = function (this: LGraphNode, isInput: boolean, type: unknown, ...rest: unknown[]) {
      if (isInput) {
        const sourceSlotIdx = this.inputs?.findIndex((i) => i.name === "source");
        if (sourceSlotIdx !== undefined && sourceSlotIdx !== -1) {
          const slot = this.inputs![sourceSlotIdx];
          const freeSlot = rest[1] as boolean | undefined;
          if (!freeSlot || slot.link == null) {
            return sourceSlotIdx;
          }
        }
      }
      return originalFindSlotByType ? originalFindSlotByType.apply(this, [isInput, type, ...rest]) : -1;
    };

    const originalFindConnectByTypeSlot = slotConnectProto.findConnectByTypeSlot;
    slotConnectProto.findConnectByTypeSlot = function (
      this: LGraphNode,
      isInput: boolean,
      targetNode: unknown,
      type: unknown,
      options: unknown
    ) {
      if (isInput) {
        const sourceSlotIdx = this.inputs?.findIndex((i) => i.name === "source");
        if (sourceSlotIdx !== undefined && sourceSlotIdx !== -1) {
          const slot = this.inputs![sourceSlotIdx];
          if (slot.link == null) {
            return sourceSlotIdx;
          }
        }
      }
      return originalFindConnectByTypeSlot
        ? originalFindConnectByTypeSlot.apply(this, [isInput, targetNode, type, options])
        : undefined;
    };

    const originalConnectByType = slotConnectProto.connectByType;
    slotConnectProto.connectByType = function (
      this: LGraphNode,
      slot: number,
      source_node: LGraphNode,
      source_slotType: string,
      opts?: unknown
    ) {
      const sourceSlotIdx = this.inputs?.findIndex((i) => i.name === "source");
      if (sourceSlotIdx !== undefined && sourceSlotIdx !== -1 && this.inputs![sourceSlotIdx].link == null) {
        return (this as unknown as { connect: (targetSlot: number, src: LGraphNode, srcSlot: number) => unknown }).connect(
          sourceSlotIdx,
          source_node,
          slot
        );
      }
      return originalConnectByType
        ? originalConnectByType.apply(this, [slot, source_node, source_slotType, opts])
        : null;
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
          updateDynamicShowAnySocket(this as LGraphNode);
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
            updateDynamicShowAnySocket(node);
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
