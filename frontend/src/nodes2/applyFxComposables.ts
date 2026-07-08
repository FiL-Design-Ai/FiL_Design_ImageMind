/**
 * Apply visual effects (Connection FX, Run Button FX, Adaptive Title Color)
 * to a FiL_LLM node during registration.
 *
 * Called from each node's register() method to wire up the composables
 * that were previously in non-functional installers.
 *
 * Gets app from globalThis.app (available at runtime after ComfyUI init).
 */
import { useConnectionFx } from "@/composables/useConnectionFx";
import { useAdaptiveTitleInk } from "@/composables/useAdaptiveTitleInk";

interface LiteGraphNode {
  id?: string | number;
  color?: string;
  onConnect?: (...args: unknown[]) => unknown;
  onDisconnect?: (...args: unknown[]) => unknown;
}

/**
 * Apply all visual effect composables to a node.
 * Should be called in the node's register(nodeType, nodeData) function,
 * after prototype patching but before returning.
 */
export function applyFxComposables(proto: { prototype?: unknown }): void {
  if (!proto?.prototype) return;

  const p = proto.prototype as Record<string, unknown>;

  // Patch onNodeCreated to initialize Adaptive Title Color
  const origCreated = p.onNodeCreated as ((...args: unknown[]) => unknown) | undefined;
  p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
    const result = origCreated?.apply(this, args);
    const node = this as LiteGraphNode;

    // Initialize Adaptive Title Color — ComfyUI will use luminance to set contrast
    if (node.color) {
      useAdaptiveTitleInk();
    }

    return result;
  };

  // Patch onConnect to apply Connection FX connection event
  const origConnect = p.onConnect as ((...args: unknown[]) => unknown) | undefined;
  p.onConnect = function (this: unknown, ...args: unknown[]) {
    const { onConnect } = useConnectionFx();
    onConnect(...(args as Parameters<typeof onConnect>));
    return origConnect?.apply(this, args);
  };

  // Patch onDisconnect to apply Connection FX disconnection event
  const origDisconnect = p.onDisconnect as ((...args: unknown[]) => unknown) | undefined;
  p.onDisconnect = function (this: unknown, ...args: unknown[]) {
    const { onDisconnect } = useConnectionFx();
    onDisconnect(...(args as Parameters<typeof onDisconnect>));
    return origDisconnect?.apply(this, args);
  };
}
