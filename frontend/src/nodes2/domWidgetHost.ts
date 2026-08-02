/**
 * DOM widget host — mounts a Vue app instance into a ComfyUI DOM widget
 * using the official `node.addDOMWidget(name, type, element, opts)` API
 * (per the ComfyUI advanced guide §5.3).
 *
 * Contract:
 *   - `hideOnZoom: true` — ComfyUI hides the widget when the canvas is
 *     zoomed far out (essential for performance on large graphs).
 *   - `getValue` / `setValue` — required so the widget state survives
 *     workflow serialize/load (`.json`). The host bridges these to a
 *     single reactive state object passed by the caller.
 *   - `getHeight` — widget body height in canvas pixels.
 *
 * Each mounted Vue app is kept on the node as `node._filVueApps[name]`
 * and unmounted in `onRemoved` (the per-node modules do that).
 *
 * This file is the composition root and nothing else. The parts it wires
 * together live in `nodes2/host/`, each with the reasoning for why it behaves
 * the way it does:
 *   - `hostElement`    — the element and its load-bearing inline styles
 *   - `wheelForwarding`— wheel events onto the canvas, scoped to our panel
 *   - `stateBridge`    — getValue/setValue against the reactive state
 *   - `heightModel`    — natural height, stretch, and what gets published
 *   - `nodeSizeSync`   — reconciling the node's box with that height
 *   - `observers`      — what tells us the panel moved
 */
import { createApp, reactive, type Component, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilNodeShell from "@/components/widgets/FilNodeShell.vue";
import { createHostElement } from "@/nodes2/host/hostElement";
import { attachWheelForwarding } from "@/nodes2/host/wheelForwarding";
import { applyWidgetValue } from "@/nodes2/host/stateBridge";
import { createHeightModel } from "@/nodes2/host/heightModel";
import { createNodeSizeSync, type SizableNode } from "@/nodes2/host/nodeSizeSync";
import { observeContent } from "@/nodes2/host/observers";

export interface FilWidgetOptions<S extends object = Record<string, unknown>> {
  /** Reactive state object passed to the Vue component as `state` prop. */
  state: S;
  /** Widget body height in canvas pixels. Width always fills the node
   * (see the host element's `width` below) so it grows/shrinks with the node box. */
  height: number;
  /** Optional onDraw callback (Compose draw on canvas every frame — keep cheap). */
  onDraw?: (ctx: CanvasRenderingContext2D, widget: unknown) => void;
  /**
   * Let the user drag the node *taller* than its content instead of having
   * the height snapped straight back to the measured content height.
   *
   * The extra pixels are handed to the panel as an explicit host height, so
   * a component whose layout has flexible rows (`flex: 1` textareas, see
   * OpticScanner.vue) hands the slack to those rows. Off by default: for a
   * panel with nothing stretchable in it the only visible result would be
   * dead space below the content.
   */
  growable?: boolean;
}

export interface FilWidgetController<S extends object = Record<string, unknown>> {
  widget: unknown;
  host: HTMLElement;
  app: VueApp<Element>;
  state: S;
  unmount(): void;
}

interface DomWidgetNode extends SizableNode {
  addDOMWidget?: (
    name: string,
    type: string,
    element: HTMLElement,
    options: {
      hideOnZoom: boolean;
      getValue: () => unknown;
      setValue: (v: unknown) => void;
      getHeight: () => number;
      onDraw?: (ctx: CanvasRenderingContext2D, widget: unknown) => void;
    },
  ) => unknown;
  _filVueApps?: Record<string, FilWidgetController<never>>;
  comfyClass?: string;
}

/**
 * Mount a Vue component as a ComfyUI DOM widget on the given node.
 *
 * @param node LGraphNode instance — must already be on the graph.
 * @param name Widget name (must be unique per node).
 * @param root Vue root component.
 * @param opts State container + size + optional onDraw.
 */
export function addFilDomWidget<S extends object = Record<string, unknown>>(
  node: unknown,
  name: string,
  root: Component,
  opts: FilWidgetOptions<S>,
): FilWidgetController<S> | null {
  const n = node as DomWidgetNode;

  if (typeof n.addDOMWidget !== "function") {
    console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${name}" — ComfyUI core too old?`);
    return null;
  }

  const host = createHostElement();
  attachWheelForwarding(host);

  // The reactive `state` is the single source of truth for getValue/setValue.
  // Vue components mutate it through `state.X = …`; ComfyUI reads it on
  // serialize via `getValue`, and hands a saved payload back to `setValue`.
  const state = reactive(opts.state) as S;
  const heights = createHeightModel(host, opts);

  const widget = n.addDOMWidget(name, "custom", host, {
    hideOnZoom: true,
    getValue: () => state,
    setValue: (v: unknown) => applyWidgetValue(state, v),
    getHeight: () => heights.height(),
    ...(opts.onDraw ? { onDraw: opts.onDraw } : {}),
  });

  // The right-side Properties Panel has no Vue renderer for "custom" DOM
  // widgets (frontend's widgetRegistry.ts only knows the built-in types) and
  // falls back to WidgetLegacy.vue, which draws the widget into a blank
  // <canvas> sized to whatever `getHeight()` reports — stretching the panel
  // to our real content height (500-1000+px) with nothing visible in it.
  // `canvasOnly` is the flag the panel's own widget filter
  // (rightSidePanel/shared.ts) checks to skip a widget entirely; it doesn't
  // touch canvas rendering. Verified against comfyui_frontend_package 1.47.10.
  const wOpts = widget as { options?: Record<string, unknown> };
  wOpts.options = { ...wOpts.options, canvasOnly: true };

  heights.attachWidget(widget);

  // Mount a fresh Vue app onto the host. Pinia is reused so cross-widget
  // stores (toast, providers, …) share state across nodes. `FilNodeShell` is
  // the one wrapper around the caller's `root`, so per-node chrome has a single
  // place to live.
  //
  // It used to be handed `comfyClass` as well, for a "?" help badge the comment
  // here claimed it rendered. It never did: the help popup is mounted once
  // globally in `installers/helpToolbar.ts` and keyed off `helpStore`, so the
  // prop was required of this one caller and read by nobody.
  const app = createApp(FilNodeShell, { root, state }).use(useActivePinia());
  app.mount(host);

  // After the mount: the growable patch reads the node's own `computeSize()`,
  // which only reports the widget once it exists.
  const sizing = createNodeSizeSync(n, heights, opts);
  const observers = observeContent(host, opts, () => sizing.sync());

  const controller: FilWidgetController<S> = {
    widget,
    host,
    app,
    state,
    unmount() {
      observers.disconnect();
      try {
        app.unmount();
      } catch (err) {
        console.warn(`[FiL_Design_ImageMind] unmount failed for "${name}":`, err);
      }
      while (host.firstChild) host.removeChild(host.firstChild);
    },
  };

  n._filVueApps ??= {};
  (n._filVueApps as Record<string, FilWidgetController<S>>)[name] = controller;
  return controller;
}

/** Cleanup helper called from each node's `onRemoved` callback. */
export function unmountAllFilWidgets(node: unknown): void {
  const n = node as { _filVueApps?: Record<string, FilWidgetController> };
  if (!n._filVueApps) return;
  for (const key of Object.keys(n._filVueApps)) {
    try {
      n._filVueApps[key].unmount();
    } catch (err) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${key}":`, err);
    }
    delete n._filVueApps[key];
  }
}
