import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { defaultProviderId } from "@/stores/settings/mindSettings";

const ProviderLoaderVue = defineAsyncComponent(() => import("@/components/nodes/ProviderLoader.vue"));

export const providerNode: NodeModule = {
  id: "FiLProviderLoader",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height kept LOW on purpose — computeSize() (~350px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [280, 250],
      family: "llm",
      description: "Provider and model runtime configuration.",
      badges: [{ text: "API key", color: "#d4a04a", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // Widget kind/fallback pairs reused by both onNodeCreated (fresh node,
    // widgets already at schema defaults) and onConfigure (see below).
    const widgetSpecs = [
      { name: "provider", kind: "string" as const, fallback: "ollama" },
      { name: "model", kind: "string" as const, fallback: "(loading...)" },
      { name: "temperature", kind: "number" as const, fallback: 0.7 },
      { name: "max_tokens", kind: "number" as const, fallback: 0 },
      { name: "rate_limit_ms", kind: "number" as const, fallback: 100 },
      { name: "max_image_side", kind: "number" as const, fallback: 1024 },
    ];

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filProviderState?: Record<string, unknown> };

      // Each read also resets the widget's own `.value` (not just this
      // display copy) when it doesn't match the expected type — a stale
      // `widgets_values` array from a workflow saved with an older schema
      // can otherwise leave the *real* hidden widget holding garbage (e.g.
      // this DOM widget's whole state object) that only surfaces as a hard
      // validation failure at Queue Prompt time. See sanitizeWidgetValue().
      // This pass alone only covers *freshly created* nodes though — see
      // the `onConfigure` hook below for why loaded/pasted nodes need a
      // second pass.
      // A new node starts on the provider chosen in Settings. Nodes arriving
      // from a workflow pass through here too, but LiteGraph's configure()
      // applies their saved widget values immediately afterwards, and the
      // onConfigure hook below re-reads them — so their own provider wins.
      const initialProvider = defaultProviderId();
      const providerWidget = findFilWidget(node, "provider");
      if (providerWidget) (providerWidget as { value?: unknown }).value = initialProvider;
      const initialModel = sanitizeWidgetValue(findFilWidget(node, "model"), "string", "(loading...)");
      const initialTemperature = sanitizeWidgetValue(findFilWidget(node, "temperature"), "number", 0.7);
      const initialMaxTokens = sanitizeWidgetValue(findFilWidget(node, "max_tokens"), "number", 0);
      const initialRateLimit = sanitizeWidgetValue(findFilWidget(node, "rate_limit_ms"), "number", 100);
      const initialMaxImageSide = sanitizeWidgetValue(findFilWidget(node, "max_image_side"), "number", 1024);

      // `seed`/`control_after_generate` are gone from the node schema; keeping
      // them here only re-created dead state on every node.
      for (const name of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
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
          max_image_side: initialMaxImageSide,
        }),
        initialValues: {
          provider: initialProvider,
          model: initialModel,
          temperature: initialTemperature,
          max_tokens: initialMaxTokens,
          rate_limit_ms: initialRateLimit,
          max_image_side: initialMaxImageSide,
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
      node._filProviderState = state;
      addFilDomWidget(node, "fil_provider_view", ProviderLoaderVue, { state, height: 180 });
      return result;
    };

    // LiteGraph's own `configure()` (loading a saved/pasted node) applies
    // `widgets_values` — a plain positional array — onto `node.widgets[i]`
    // AFTER `onNodeCreated` already ran, then calls `onConfigure`. That
    // means the sanitized defaults set above get silently overwritten by
    // whatever a stale, schema-mismatched save contains *after* the fact
    // (reproduced live: a workflow saved before `max_image_side` existed
    // shifts this DOM widget's own state object onto it). Re-sanitizing
    // here, once values are actually in their final restored place, is
    // what actually prevents the corrupted value from reaching `execute()`.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filProviderState?: Record<string, unknown> };
      const state = node._filProviderState;
      if (!state) return result;
      const nodeState = state.nodeState as Record<string, unknown>;
      for (const { name, kind, fallback } of widgetSpecs) {
        nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), kind, fallback);
      }
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // Apply visual effects (Connection FX)
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
