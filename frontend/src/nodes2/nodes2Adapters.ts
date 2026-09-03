/**
 * Nodes 2.0 (Vue) and Legacy LiteGraph compatibility helpers.
 * Inspired by Pixaroma shared nodes2.mjs pattern.
 */

/**
 * Returns true when ComfyUI's Nodes 2.0 (Vue) renderer is active.
 */
export function isVueNodes(): boolean {
  return Boolean((globalThis as any).LiteGraph?.vueNodesMode);
}

/**
 * Adaptive canvasOnly getter for internal DOM & custom widgets.
 *
 * In legacy renderer: setting canvasOnly: true keeps internal widgets out of
 * the legacy parameters side-panel tab.
 * In Nodes 2.0: shouldRenderAsVue = !options.canvasOnly allows the Vue body
 * to render the widget cleanly on the node face.
 */
export function applyAdaptiveCanvasOnly<T extends { options?: Record<string, unknown> }>(
  widget: T,
): T {
  if (!widget || !widget.options) return widget;
  try {
    Object.defineProperty(widget.options, "canvasOnly", {
      configurable: true,
      enumerable: true,
      get() {
        return isVueNodes() ? false : undefined;
      },
    });
  } catch {
    widget.options.canvasOnly = undefined;
  }
  return widget;
}
