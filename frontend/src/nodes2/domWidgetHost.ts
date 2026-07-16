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
 */
import { createApp, reactive, type Component, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilNodeShell from "@/components/widgets/FilNodeShell.vue";

export interface FilWidgetOptions<S extends object = Record<string, unknown>> {
  /** Reactive state object passed to the Vue component as `state` prop. */
  state: S;
  /** Widget body height in canvas pixels. Width always fills the node
   * (see `host.style.width` below) so it grows/shrinks with the node box. */
  height: number;
  /** Optional onDraw callback (Compose draw on canvas every frame — keep cheap). */
  onDraw?: (ctx: CanvasRenderingContext2D, widget: unknown) => void;
}

export interface FilWidgetController<S extends object = Record<string, unknown>> {
  widget: unknown;
  host: HTMLElement;
  app: VueApp<Element>;
  state: S;
  unmount(): void;
}

/** Sentinel attribute to spot double-mounts. */
const FIL_MOUNTED_FLAG = "__filVueMounted";

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
  const n = node as {
    addDOMWidget?: (
      name: string,
      type: string,
      element: HTMLElement,
      options: {
        hideOnZoom: boolean;
        getValue: () => S;
        setValue: (v: S) => void;
        getHeight: () => number;
        onDraw?: (ctx: CanvasRenderingContext2D, widget: unknown) => void;
      },
    ) => unknown;
    _filVueApps?: Record<string, FilWidgetController<S>>;
    graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
    computeSize?: () => [number, number];
    setSize?: (s: [number, number]) => void;
    size?: [number, number];
    comfyClass?: string;
  };

  if (typeof n.addDOMWidget !== "function") {
    console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${name}" — ComfyUI core too old?`);
    return null;
  }

  const host = document.createElement("div");
  host.className = "fil-vue-host";
  // Fill whatever width ComfyUI's own DOM-widget wrapper gives us, so the
  // panel grows/shrinks when the user resizes the node box. A fixed pixel
  // width here previously left dead space when a node was widened.
  host.style.width = "100%";
  host.style.boxSizing = "border-box";
  // No `min-height` floor here on purpose. It used to be `opts.height`, but
  // that pinned the host's own box at the *initial estimate* forever: the
  // ResizeObserver below measures the real content height, and a host whose
  // `scrollHeight` can never drop below the floor kept reporting the stale
  // estimate — so a node whose tightened body is (say) 104px tall stayed
  // pinned at a 185px estimate, leaving dead space below the panel. The
  // observer measures the mounted child directly now, so no floor is needed;
  // `getHeight()` still returns `opts.height` for the very first paint frame
  // before the observer runs.
  // ComfyUI's own DOM-widget wrapper adds an `h-full` class to whatever
  // element `addDOMWidget` mounts (`height: 100%` of the widget's own,
  // separately-computed box) — a CSS explicit `height` never grows past
  // its resolved value no matter how tall the content wants to be, content
  // just overflows past it instead of the box adapting. An inline style
  // has higher specificity than a class, so this forces `height: auto`
  // (content-driven sizing) — without it, `getHeight()` below can report the
  // right number but the *actual* rendered box stays capped at whatever
  // `h-full` resolved to, and Vue content visibly spills out past it.
  host.style.height = "auto";
  (host as unknown as Record<string, unknown>)[FIL_MOUNTED_FLAG] = true;

  // `host` is a canvas *sibling* overlay in the DOM tree, not a descendant of
  // the real <canvas> LiteGraph binds its own wheel-zoom listener to, so
  // scrolling while hovering any FiL panel silently did nothing. Forward the
  // event onto the real canvas so LiteGraph's own handler runs as if the user
  // had scrolled directly over it. `{ passive: false }` is required for
  // `preventDefault()` to actually suppress the host's own (non-)scroll.
  host.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      const realCanvas = (globalThis as unknown as {
        app?: { canvas?: { canvas?: HTMLCanvasElement } };
      }).app?.canvas?.canvas;
      if (!(realCanvas instanceof HTMLCanvasElement)) return;
      e.preventDefault();
      realCanvas.dispatchEvent(new WheelEvent("wheel", {
        deltaX: e.deltaX, deltaY: e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode,
        clientX: e.clientX, clientY: e.clientY, bubbles: true, cancelable: true,
      }));
    },
    { passive: false },
  );

  // The reactive `state` is the single source of truth for getValue/setValue.
  // Vue components mutate it through `state.X = …` — ComfyUI reads it on
  // serialize via `getValue`. Loading a workflow calls `setValue(v)` and
  // we Object.assign the payload into the reactive `state`.
  const state = reactive(opts.state) as S;

  // `getHeight()` starts at the caller's initial estimate, but is kept in
  // sync afterward by the ResizeObserver below — collapsible sections,
  // conditional fields (e.g. UpscaleTileCalc's auto-mode toggle), and
  // theme/locale-driven label length changes all resize `host` post-mount,
  // and a stale static number here left the node's own box the wrong size
  // while the Vue content kept growing — Vue content isn't clipped to the
  // node's box by default, so it visibly spilled out past the node's own
  // rectangle onto the canvas (and neighboring nodes) instead of just
  // leaving empty space.
  let currentHeight = opts.height;

  const widget = n.addDOMWidget(name, "custom", host, {
    hideOnZoom: true,
    getValue: () => state,
    setValue: (v: S) => {
      if (v && typeof v === "object") Object.assign(state, v);
    },
    getHeight: () => currentHeight,
    ...(opts.onDraw ? { onDraw: opts.onDraw } : {}),
  });

  // Mount a fresh Vue app onto the host. Pinia is reused so cross-widget
  // stores (toast, providers, …) share state across nodes. `FilNodeShell`
  // wraps the caller's `root` component so every node picks up the shared
  // "?" help badge in one place instead of each node file wiring it itself.
  const app = createApp(FilNodeShell, { root, state, comfyClass: n.comfyClass ?? "default" }).use(useActivePinia());
  app.mount(host);

  // Coalesced into one update per animation frame — a section toggle or
  // conditional-field change can fire several layout passes in a row.
  let resizeFrame = 0;
  const resizeObserver = new ResizeObserver(() => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      // Measure the mounted Vue content directly (the `.fil-node-shell`
      // wrapper), not `host.scrollHeight`. The host can be stretched taller
      // than its content by ComfyUI's own widget wrapper, and its scrollHeight
      // never drops below that — masking a shorter body and leaving dead space
      // below the panel. Before mount `firstElementChild` is null, so we keep
      // the current estimate until content exists.
      // Rounded up to a 4px grid: sub-pixel/1-2px content jitter (font
      // metrics, locale-driven label width, etc.) otherwise reports a
      // slightly different height on every reload of the same workflow,
      // marking it dirty for no visible reason.
      const content = host.firstElementChild as HTMLElement | null;
      const measured = Math.ceil((content?.scrollHeight ?? currentHeight) / 4) * 4;
      if (Math.abs(measured - currentHeight) < 2) return;
      currentHeight = measured;
      // Only height is touched — `computeSize()`'s own width opinion
      // ignores the `minSize` registered in nodeStyle.ts entirely (seen
      // live shrinking a 271px-wide node down to 210px on a section
      // collapse), so the *current* width is explicitly preserved instead
      // of trusting `computeSize()`'s full [w, h] pair.
      if (n.computeSize && n.setSize && n.size) {
        const [currentWidth] = n.size;
        const [, computedHeight] = n.computeSize();
        n.setSize([currentWidth, computedHeight]);
      }
      n.graph?.setDirtyCanvas?.(true, true);
    });
  });
  resizeObserver.observe(host);

  const controller: FilWidgetController<S> = { widget, host, app, state, unmount };
  function unmount(this: FilWidgetController<S>) {
    resizeObserver.disconnect();
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    try {
      this.app.unmount();
    } catch (err) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${name}":`, err);
    }
    while (this.host.firstChild) this.host.removeChild(this.host.firstChild);
  }
  controller.unmount = unmount.bind(controller);

  n._filVueApps ??= {};
  n._filVueApps[name] = controller;
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