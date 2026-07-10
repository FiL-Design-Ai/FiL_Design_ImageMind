import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import type { ImageDescriptor } from "@/api/client";

const CompareVue = defineAsyncComponent(() => import("@/components/nodes/BeforeAfterCompare.vue"));

export const compareNode: NodeModule = {
  id: "FiLBeforeAfterCompare",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onExecuted?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as {
        widgets?: unknown[];
        onExecuted?: (...a: unknown[]) => unknown;
        _filCompareState?: unknown;
      };
      const swapW = findFilWidget(node, "swap");
      const resizeModeW = findFilWidget(node, "resize_mode");
      const maxResolutionW = findFilWidget(node, "max_resolution");

      const initial = {
        swap: sanitizeWidgetValue(swapW, "boolean", false),
        resize_mode: sanitizeWidgetValue(resizeModeW, "string", "Off"),
        max_resolution: sanitizeWidgetValue(maxResolutionW, "number", 4096),
      };

      for (const w of [swapW, resizeModeW, maxResolutionW]) {
        if (w) (w as { hidden?: boolean }).hidden = true;
      }

      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: true,
        } as Record<string, unknown>,
      };
      node._filCompareState = state;
      const controller = addFilDomWidget(node, "fil_compare_view", CompareVue, { state, height: 380 });

      // ComfyUI calls `onExecuted(output)` with the node's raw `ui` dict —
      // `node_compare.py` always emits `a_images`/`b_images` (never a plain
      // `images` key), so the default preview-thumbnail behavior never
      // kicks in and this is the only path image data reaches the widget.
      const originalExecuted = node.onExecuted;
      node.onExecuted = function (this: unknown, message: unknown) {
        const result = originalExecuted?.apply(this, [message]);
        const msg = message as { a_images?: ImageDescriptor[]; b_images?: ImageDescriptor[] } | undefined;
        if (controller && msg) {
          controller.state.ui.compare_images = { a: msg.a_images ?? [], b: msg.b_images ?? [] };
        }
        return result;
      };
      return result;
    };

    // See provider.ts / sanitizeWidgetValue(): LiteGraph applies a loaded
    // node's `widgets_values` (positional array) onto `node.widgets[i]`
    // AFTER `onNodeCreated` runs, then calls `onConfigure` — so a workflow
    // saved with an older version of this node's schema can silently
    // overwrite the sanitized defaults set above. Re-sanitizing here is
    // what actually prevents a stale/corrupted value reaching `execute()`.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCompareState?: { nodeState: Record<string, unknown> } };
      const state = node._filCompareState;
      if (!state) return result;
      state.nodeState.swap = sanitizeWidgetValue(findFilWidget(node, "swap"), "boolean", false);
      state.nodeState.resize_mode = sanitizeWidgetValue(findFilWidget(node, "resize_mode"), "string", "Off");
      state.nodeState.max_resolution = sanitizeWidgetValue(findFilWidget(node, "max_resolution"), "number", 4096);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // Apply visual effects (Connection FX, Adaptive Title Color)
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};