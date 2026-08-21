import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const SwitchVue = defineAsyncComponent(() => import("@/components/nodes/Switch.vue"));

function updateDynamicOutputSocket(node: LGraphNode): void {
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
      // `LGraphSlot.type` is `string | number` — LiteGraph spells a wildcard
      // both ways depending on version.
      const detectedType = String(originSlot?.type || link.type || "*");

      outputSlot.type = detectedType;
      outputSlot.label = detectedType === "*" ? "output" : detectedType.toLowerCase();
      inputSlot.label = detectedType === "*" ? "input" : detectedType.toLowerCase();
      if (originSlot?.color_on) outputSlot.color_on = originSlot.color_on;
      if (originSlot?.color_off) outputSlot.color_off = originSlot.color_off;
      node.graph.setDirtyCanvas?.(true, true);
      return;
    }
  }

  outputSlot.type = "*";
  outputSlot.label = "output";
  inputSlot.label = "input";
  delete outputSlot.color_on;
  delete outputSlot.color_off;
  node.graph?.setDirtyCanvas?.(true, true);
}

/**
 * FiLSignalSwitch — universal signal pass-through toggle.
 */
export const switchNode: NodeModule = {
  id: "FiLSignalSwitch",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [250, 52],
      initialWidth: 250,
      family: "tool",
      description: "Universal signal pass-through toggle ON/OFF.",
      badges: [{ text: "SWITCH", color: "#38bdf8", text_color: "#000" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onConnectionsChange?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode;

      const enableWidget = findFilWidget(node, "enable");
      const initialEnable = sanitizeWidgetValue(enableWidget, "boolean", true);
      hideWidget(enableWidget);

      const state = {
        // Synced, like every other node module — see the note in seed.ts. This
        // panel drove the native `enable` widget by hand, which is why a dead
        // watcher (fixed in 4f278d5) could leave the widget stale while the
        // button looked right: there was no second path.
        nodeState: createSyncedNodeState(node, {
          enable: initialEnable,
        }),
        initialValues: { enable: initialEnable },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filSwitchState = state;

      addFilDomWidget(node, "fil_switch_view", SwitchVue, { state, height: 46 });
      updateDynamicOutputSocket(node);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filSwitchState?: { nodeState: Record<string, unknown> } };
      const state = node._filSwitchState;
      if (state) {
        state.nodeState.enable = sanitizeWidgetValue(findFilWidget(node, "enable"), "boolean", true);
      }
      updateDynamicOutputSocket(node);
      return result;
    };

    const originalConnectionsChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConnectionsChange?.apply(this, args);
      updateDynamicOutputSocket(this as LGraphNode);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
