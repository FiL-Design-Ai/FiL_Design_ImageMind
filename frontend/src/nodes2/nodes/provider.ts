import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const ProviderLoaderVue = defineAsyncComponent(() => import("@/components/nodes/ProviderLoader.vue"));

export const providerNode: NodeModule = {
  id: "FiLProviderLoader",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [280, 300],
      family: "llm",
      description: "Provider and model runtime configuration.",
      badges: [{ text: "API key", color: "#d4a04a", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: { onNodeCreated?: (...a: unknown[]) => unknown; onRemoved?: (...a: unknown[]) => unknown };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[] };

      const providerWidget = findFilWidget(node, "provider");
      const initialProvider = String(providerWidget?.value ?? "ollama") || "ollama";
      const initialModel = String(findFilWidget(node, "model")?.value ?? "(loading...)") || "(loading...)";
      const initialTemperature = Number(findFilWidget(node, "temperature")?.value ?? 0.7) || 0.7;
      const initialMaxTokens = Number(findFilWidget(node, "max_tokens")?.value ?? 0) || 0;
      const initialRateLimit = Number(findFilWidget(node, "rate_limit_ms")?.value ?? 100) || 100;

      // Hide native combos/sliders — the Vue view owns them. `seed` and its
      // auto-added `control_after_generate` combo (ComfyUI adds one for any
      // widget literally named "seed") are hidden here too — the Vue panel
      // has no UI for them, but the native widget's own value still drives
      // execute()'s `seed` argument unmirrored, same as `refresh_models`.
      for (const name of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate"]) {
        const w = findFilWidget(node, name);
        if (w) (w as { hidden?: boolean }).hidden = true;
      }

      const state = {
        nodeState: createSyncedNodeState(node, {
          provider: initialProvider,
          model: initialModel,
          temperature: initialTemperature,
          max_tokens: initialMaxTokens,
          rate_limit_ms: initialRateLimit,
        }),
        initialValues: {
          provider: initialProvider,
          model: initialModel,
          temperature: initialTemperature,
          max_tokens: initialMaxTokens,
          rate_limit_ms: initialRateLimit,
        },
        ui: {},
      };
      // `node` must NOT be an enumerable own property of `state`: this same
      // object is what the DOM widget's getValue() returns (i.e. becomes
      // `widget.value`), and `node.widgets[i].value` circles right back to
      // it — a cycle that crashes LiteGraph's JSON.stringify-based
      // cloneObject (workflow save / graphToPrompt) with "Maximum call
      // stack size exceeded". Defining it as non-enumerable keeps
      // `props.state.node` working in ProviderLoader.vue (updateWidgetOptions)
      // while excluding it from JSON.stringify's enumerable-only traversal.
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      addFilDomWidget(node, "fil_provider_view", ProviderLoaderVue, { state, height: 340 });
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