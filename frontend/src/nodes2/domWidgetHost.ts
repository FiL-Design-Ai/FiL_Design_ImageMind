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

/**
 * True when `prop` can be assigned on `obj` without throwing.
 *
 * ComfyUI turns some widget fields into getter-only accessors between frontend
 * releases; writing one throws, and when that happens inside LiteGraph's draw
 * loop the whole frame is lost. Probing the descriptor chain keeps the write
 * optional instead of fatal.
 */
function isWritable(obj: object, prop: string): boolean {
  for (let o: object | null = obj; o; o = Object.getPrototypeOf(o)) {
    const d = Object.getOwnPropertyDescriptor(o, prop);
    if (d) return Boolean(d.writable || d.set);
  }
  return true; // not defined anywhere yet — a plain assignment creates it
}
import FilNodeShell from "@/components/widgets/FilNodeShell.vue";
import { scrollRegionWantsWheel } from "@/composables/scrollGuard";

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
    minSize?: [number, number];
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
  // had scrolled directly over it — UNLESS the cursor is over a scrollable
  // inner region (a style picker list, chip list, help popup, …) that still
  // has room to scroll that way, in which case let it scroll normally instead
  // of hijacking the wheel for canvas zoom. `{ passive: false }` is required
  // for `preventDefault()` to actually suppress the host's own (non-)scroll.
  host.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      if (scrollRegionWantsWheel(e.target, e.deltaX, e.deltaY, host.parentElement)) return;
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

  // `getHeight()` starts at the caller's initial estimate for the very first
  // paint (before anything is mounted), then measures the live content on
  // every subsequent call. LiteGraph polls `getHeight()` on its own draw
  // loop, so this can't rely on a cached number kept in sync by a side
  // channel — a ResizeObserver here was tried and silently stopped firing
  // for some nodes (observed live: content height changed, callback never
  // ran), leaving the node's box pinned at the stale initial estimate with
  // dead space below the panel. Measuring on every call is cheap
  // (`scrollHeight` read) and can't go stale.
  let currentHeight = opts.height;
  // Forward declaration on purpose: the closures just below capture `widget`,
  // but it can only be assigned once addDOMWidget() has returned further down.
  // eslint-disable-next-line prefer-const
  let widget: any;

  const measureHeight = (): number => {
    const content = host.firstElementChild as HTMLElement | null;
    if (!content || content.clientHeight === 0) return currentHeight; // hidden (e.g. hideOnZoom) or not yet mounted
    // Rounded up to a 4px grid: sub-pixel/1-2px content jitter (font
    // metrics, locale-driven label width, etc.) otherwise reports a
    // slightly different height on every reload of the same workflow,
    // marking it dirty for no visible reason.
    currentHeight = Math.ceil(content.scrollHeight / 4) * 4;
    if (widget) {
      // `height` became a getter-only accessor on BaseWidget in the ComfyUI
      // frontend (seen on 1.47.10). Assigning it throws *inside* LiteGraph's
      // draw loop, which aborts the frame — every FiL node then rendered as
      // nothing at all. `computeSize()` is the supported channel and is what
      // LiteGraph actually reads; only set `height` where it is still writable,
      // for older frontends that rely on it.
      if (isWritable(widget, "height")) {
        (widget as { height?: number }).height = currentHeight;
      }
      widget.computeSize = () => [host.clientWidth || 380, currentHeight];
    }
    return currentHeight;
  };

  widget = n.addDOMWidget(name, "custom", host, {
    hideOnZoom: true,
    getValue: () => state,
    setValue: (v: S) => {
      if (v && typeof v === "object") {
        const payload = v as Record<string, unknown>;
        const targetState = state as Record<string, unknown>;
        if (payload.nodeState && typeof payload.nodeState === "object" && targetState.nodeState) {
          Object.assign(targetState.nodeState as object, payload.nodeState);
        }
        if (payload.ui && typeof payload.ui === "object" && targetState.ui) {
          Object.assign(targetState.ui as object, payload.ui);
        }
        for (const [k, val] of Object.entries(payload)) {
          if (k !== "nodeState" && k !== "ui") {
            targetState[k] = val;
          }
        }
      }
    },
    getHeight: measureHeight,
    ...(opts.onDraw ? { onDraw: opts.onDraw } : {}),
  });

  // Mount a fresh Vue app onto the host. Pinia is reused so cross-widget
  // stores (toast, providers, …) share state across nodes. `FilNodeShell`
  // wraps the caller's `root` component so every node picks up the shared
  // "?" help badge in one place instead of each node file wiring it itself.
  const app = createApp(FilNodeShell, { root, state, comfyClass: n.comfyClass ?? "default" }).use(useActivePinia());
  app.mount(host);

  // `getHeight()` above is the source of truth for the node's own box size,
  // but LiteGraph only calls `computeSize()`/re-layouts on its own cadence
  // (draw loop, drag, etc.) — a mid-frame content change (collapsible
  // section, conditional field, locale-driven label width) needs an
  // explicit nudge or the node box visibly lags one interaction behind the
  // actual content. Coalesced into one update per animation frame — a
  // section toggle can fire several layout passes in a row.
  function syncNodeHeight() {
    measureHeight();
    if (!n.computeSize || !n.setSize || !n.size) return;
    const [currentWidth, currentSizeHeight] = n.size;
    const [, computedHeight] = n.computeSize();
    const [minW, minH] = n.minSize ?? [0, 0];
    const targetWidth = Math.max(currentWidth, minW);
    // Header/title padding in LiteGraph (~35px for title bar + margins).
    // Ensure node total height always covers DOM content height + header.
    const requiredTotalHeight = currentHeight + 35;
    const targetHeight = Math.max(computedHeight, requiredTotalHeight, minH);
    if (targetWidth === currentWidth && Math.abs(targetHeight - currentSizeHeight) < 2) return;
    n.setSize([targetWidth, targetHeight]);
    n.graph?.setDirtyCanvas?.(true, true);
  }

  let resizeFrame = 0;
  const resizeObserver = new ResizeObserver(() => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      syncNodeHeight();
    });
  });
  resizeObserver.observe(host);

  // `root` is normally a `defineAsyncComponent(...)` (see nodes2/nodes/*.ts):
  // it resolves and mounts its real content *after* `app.mount(host)` above
  // already returned, so the very first paint can still be mid-layout when
  // the ResizeObserver's first callback fires. A few follow-up passes across
  // the next several frames catches the settled size independent of exactly
  // when the async chunk + first layout finish.
  let settleFrames = 20;
  (function settleLoop() {
    syncNodeHeight();
    if (settleFrames-- > 0) requestAnimationFrame(settleLoop);
  })();

  // Belt-and-suspenders backstop: the ResizeObserver above is the primary
  // mechanism, but it's been observed live to silently stop firing for some
  // nodes (reproduced: FiLNeuroCleaner stuck at 522px tall for 738px of real
  // content, indefinitely — computeSize() itself already reported the
  // correct number, only the ResizeObserver-triggered setSize() never ran a
  // second time). A cheap low-frequency poll for the widget's whole lifetime
  // guarantees eventual correctness even when the observer flakes out —
  // syncNodeHeight()'s own early-return (`Math.abs(...) < 2`) makes the
  // no-op case near-free.
  const pollInterval = setInterval(syncNodeHeight, 400);

  const controller: FilWidgetController<S> = { widget, host, app, state, unmount };
  function unmount(this: FilWidgetController<S>) {
    resizeObserver.disconnect();
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    clearInterval(pollInterval);
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