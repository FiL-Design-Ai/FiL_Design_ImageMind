/**
 * Position, size and column widths for a draggable browser window.
 *
 * Behaviour only — no markup, no class names. `FilBrowser.vue` owns the DOM and
 * asks this for a style object and four drag starters.
 *
 * Two things in here were not obvious and are the reason it is a module rather
 * than a handful of handlers in the component:
 *
 * 1. A pointer drag needs BOTH `setPointerCapture` and a buttons-are-up guard.
 *    Listening on `window` alone is not enough: with a real mouse the release
 *    can go missing (the pointer leaves the viewport, an iframe takes capture,
 *    something upstream stops the event) and the window then follows the cursor
 *    forever with no way to put it down. Synthetic pointer events never
 *    reproduce it, so a scripted test of the drag passes either way.
 *
 * 2. A saved rect comes back onto a screen that may be a different one. It has
 *    to SHRINK to fit, not merely keep a corner on screen: a window sized on a
 *    wide monitor and reopened on a laptop otherwise hangs off the right edge
 *    with its resize grip out of reach.
 *
 * The rect lives in `localStorage`, next to the pickers' other per-machine
 * preferences. It is deliberately not workflow state: a window size must never
 * travel inside a saved graph, and must never make a clean graph look dirty.
 */
import { computed, onBeforeUnmount, onMounted, ref, watch, type Ref } from "vue";

export interface BrowserRectValue {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Left column width. */
  sw: number;
  /** Right (detail) column width. */
  dw: number;
}

export interface BrowserRectOptions {
  /** Unique per window, or two browsers share one saved size. */
  storageKey: string;
  minW?: number;
  minH?: number;
  prefW?: number;
  prefH?: number;
  /** Breathing room kept between the window and the screen edge. */
  edge?: number;
  sideDef?: number;
  sideMin?: number;
  sideMaxFrac?: number;
  detailDef?: number;
  detailMin?: number;
  detailMaxFrac?: number;
  /** Below this width the detail column is hidden — three columns stop fitting. */
  narrowBelow?: number;
  /** A drag fires per pointermove; the write waits this long after the last one. */
  saveDelay?: number;
  /**
   * Whether the window is on screen right now.
   *
   * The browser component stays MOUNTED for as long as its node does — only
   * the markup inside the teleport is conditional — so without this the
   * viewport listener below would be attached once per node on the canvas and
   * never released. Five scanners meant five listeners re-fitting five hidden
   * windows on every browser resize. Omitted, the listener is simply always on,
   * which is the right answer for a caller that mounts the composable and the
   * window together.
   */
  active?: Ref<boolean>;
}

/** `active` is a live ref rather than a setting, so it is not one of these. */
type Resolved = Required<Omit<BrowserRectOptions, "active">>;

const DEFAULTS: Omit<Resolved, "storageKey"> = {
  minW: 620,
  minH: 380,
  prefW: 1040,
  prefH: 700,
  edge: 24,
  sideDef: 200,
  sideMin: 130,
  sideMaxFrac: 0.4,
  detailDef: 240,
  detailMin: 160,
  detailMaxFrac: 0.45,
  narrowBelow: 900,
  saveDelay: 300,
};

/**
 * Fill in whatever the caller left out.
 *
 * NOT `{ ...DEFAULTS, ...options }`: a spread copies keys whose value is
 * `undefined`, and a Vue component passing an unset optional prop hands over
 * exactly that — so the obvious one-liner replaced every default with
 * `undefined` and the window opened at `NaN` by `NaN`.
 */
function resolve(options: BrowserRectOptions): Resolved {
  const out: Resolved = { ...DEFAULTS, storageKey: options.storageKey };
  for (const [key, value] of Object.entries(options)) {
    if (key === "active" || value === undefined) continue;
    (out as unknown as Record<string, unknown>)[key] = value;
  }
  return out;
}

export interface Viewport { width: number; height: number }

function viewportNow(): Viewport {
  return { width: window.innerWidth, height: window.innerHeight };
}

const sideMaxFor = (o: Resolved, w: number) => Math.max(o.sideMin, Math.round(w * o.sideMaxFrac));
const detailMaxFor = (o: Resolved, w: number) => Math.max(o.detailMin, Math.round(w * o.detailMaxFrac));

/** Where a window goes when nothing has been saved: centred, within the screen. */
export function defaultRect(opts: Resolved, vp: Viewport = viewportNow()): BrowserRectValue {
  const w = Math.max(opts.minW, Math.min(opts.prefW, vp.width - opts.edge * 2));
  const h = Math.max(opts.minH, Math.min(opts.prefH, vp.height - opts.edge * 2));
  return {
    x: Math.round(Math.max(0, (vp.width - w) / 2)),
    y: Math.round(Math.max(0, (vp.height - h) / 2)),
    w: Math.round(w),
    h: Math.round(h),
    sw: opts.sideDef,
    dw: opts.detailDef,
  };
}

/**
 * Fit a rect — saved, dragged, or half-written by hand — onto the screen.
 *
 * Every field is re-derived, and the column widths are re-clamped against the
 * window's CURRENT width, so a sidebar widened on a big screen cannot swallow
 * the list after the window shrinks.
 */
export function clampRect(
  raw: Partial<BrowserRectValue> | null | undefined,
  opts: Resolved,
  vp: Viewport = viewportNow(),
): BrowserRectValue {
  const d = defaultRect(opts, vp);
  const num = (v: unknown, fallback: number) => (typeof v === "number" && Number.isFinite(v) ? v : fallback);

  const w = Math.round(Math.max(opts.minW, Math.min(num(raw?.w, d.w), Math.max(opts.minW, vp.width))));
  const h = Math.round(Math.max(opts.minH, Math.min(num(raw?.h, d.h), Math.max(opts.minH, vp.height))));
  return {
    w,
    h,
    x: Math.round(Math.max(0, Math.min(num(raw?.x, d.x), Math.max(0, vp.width - w)))),
    y: Math.round(Math.max(0, Math.min(num(raw?.y, d.y), Math.max(0, vp.height - h)))),
    sw: Math.round(Math.max(opts.sideMin, Math.min(num(raw?.sw, d.sw), sideMaxFor(opts, w)))),
    dw: Math.round(Math.max(opts.detailMin, Math.min(num(raw?.dw, d.dw), detailMaxFor(opts, w)))),
  };
}

function readStored(key: string): Partial<BrowserRectValue> | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    // Anything that is not a plain object starts over from the default rather
    // than taking the window down on open.
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed as Partial<BrowserRectValue>;
  } catch {
    // Blocked storage, an opaque origin, or half-written JSON.
    return null;
  }
}

/**
 * Begin a pointer drag on `handle`, with both defences.
 *
 * `end` is idempotent because the buttons-are-up guard can reach it as well as
 * a real release.
 *
 * @returns true when a drag actually started (left button only).
 */
export function startPointerDrag(
  handle: Element,
  e: PointerEvent,
  onMove: (ev: PointerEvent) => void,
  onEnd?: () => void,
): boolean {
  if (e.button !== 0) return false;
  let done = false;
  const end = () => {
    if (done) return;
    done = true;
    handle.removeEventListener("pointermove", move as EventListener);
    handle.removeEventListener("pointerup", end);
    handle.removeEventListener("pointercancel", end);
    handle.removeEventListener("lostpointercapture", end);
    try {
      (handle as Element & { releasePointerCapture(id: number): void }).releasePointerCapture(e.pointerId);
    } catch {
      // already released, or never captured
    }
    onEnd?.();
  };
  const move = (ev: PointerEvent) => {
    if (!(ev.buttons & 1)) {
      end();
      return;
    }
    onMove(ev);
  };
  try {
    (handle as Element & { setPointerCapture(id: number): void }).setPointerCapture(e.pointerId);
  } catch {
    // No capture available — the buttons-are-up guard still covers us.
  }
  handle.addEventListener("pointermove", move as EventListener);
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
  handle.addEventListener("lostpointercapture", end);
  e.preventDefault();
  return true;
}

export function useBrowserRect(options: BrowserRectOptions) {
  const opts = resolve(options);

  const rect: Ref<BrowserRectValue> = ref(clampRect(readStored(opts.storageKey), opts));

  let saveTimer: ReturnType<typeof setTimeout> | null = null;
  function save() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveTimer = null;
      try {
        localStorage.setItem(opts.storageKey, JSON.stringify(rect.value));
      } catch {
        // Quota, or a profile that forbids writes. The window still works; the
        // size just does not come back.
      }
    }, opts.saveDelay);
  }

  /** Re-fit onto the current screen. Called on open and on a browser resize. */
  function refit() {
    rect.value = clampRect(rect.value, opts);
  }

  const windowStyle = computed(() => ({
    left: `${rect.value.x}px`,
    top: `${rect.value.y}px`,
    width: `${rect.value.w}px`,
    height: `${rect.value.h}px`,
  }));
  const sidebarStyle = computed(() => ({ width: `${rect.value.sw}px` }));
  const detailStyle = computed(() => ({ width: `${rect.value.dw}px` }));
  const isNarrow = computed(() => rect.value.w < opts.narrowBelow);

  function startMove(e: PointerEvent) {
    const handle = e.currentTarget as Element | null;
    if (!handle) return;
    const offX = e.clientX - rect.value.x;
    const offY = e.clientY - rect.value.y;
    startPointerDrag(
      handle,
      e,
      (ev) => {
        const vp = viewportNow();
        rect.value = {
          ...rect.value,
          x: Math.round(Math.max(0, Math.min(ev.clientX - offX, vp.width - rect.value.w))),
          y: Math.round(Math.max(0, Math.min(ev.clientY - offY, vp.height - rect.value.h))),
        };
      },
      save,
    );
  }

  function startResize(e: PointerEvent) {
    const handle = e.currentTarget as Element | null;
    if (!handle) return;
    // Where inside the grip the pointer landed, or the corner jumps under the
    // cursor the moment it is grabbed and the window looks like it twitched.
    const offX = e.clientX - (rect.value.x + rect.value.w);
    const offY = e.clientY - (rect.value.y + rect.value.h);
    startPointerDrag(
      handle,
      e,
      (ev) => {
        const vp = viewportNow();
        const w = Math.max(opts.minW, Math.min(ev.clientX - offX - rect.value.x, vp.width - rect.value.x));
        const h = Math.max(opts.minH, Math.min(ev.clientY - offY - rect.value.y, vp.height - rect.value.y));
        rect.value = {
          ...rect.value,
          w: Math.round(w),
          h: Math.round(h),
          // The columns follow, or widening the sidebar and then narrowing the
          // window leaves no room for the list between them.
          sw: Math.min(rect.value.sw, sideMaxFor(opts, w)),
          dw: Math.min(rect.value.dw, detailMaxFor(opts, w)),
        };
      },
      save,
    );
  }

  /** `bodyLeft` is the left edge of the three-column area, in client pixels. */
  function startSidebarDrag(e: PointerEvent, bodyLeft: number) {
    const handle = e.currentTarget as Element | null;
    if (!handle) return;
    startPointerDrag(
      handle,
      e,
      (ev) => {
        const sw = Math.max(opts.sideMin, Math.min(ev.clientX - bodyLeft, sideMaxFor(opts, rect.value.w)));
        rect.value = { ...rect.value, sw: Math.round(sw) };
      },
      save,
    );
  }

  /** Measured from the RIGHT edge — that is the edge the detail column is pinned to. */
  function startDetailDrag(e: PointerEvent, bodyRight: number) {
    const handle = e.currentTarget as Element | null;
    if (!handle) return;
    startPointerDrag(
      handle,
      e,
      (ev) => {
        const dw = Math.max(opts.detailMin, Math.min(bodyRight - ev.clientX, detailMaxFor(opts, rect.value.w)));
        rect.value = { ...rect.value, dw: Math.round(dw) };
      },
      save,
    );
  }

  function resetSidebar() {
    rect.value = { ...rect.value, sw: Math.min(opts.sideDef, sideMaxFor(opts, rect.value.w)) };
    save();
  }
  function resetDetail() {
    rect.value = { ...rect.value, dw: Math.min(opts.detailDef, detailMaxFor(opts, rect.value.w)) };
    save();
  }
  /** Put the window back where a fresh one would open. */
  function resetAll() {
    rect.value = defaultRect(opts);
    save();
  }

  // Attached only while the window is on screen — see `active` above for what
  // happens otherwise.
  const onWindowResize = () => refit();
  let listening = false;
  function listen(on: boolean) {
    if (on === listening) return;
    listening = on;
    if (on) window.addEventListener("resize", onWindowResize);
    else window.removeEventListener("resize", onWindowResize);
  }

  const active = options.active;
  if (active) {
    watch(active, (isOn) => {
      if (isOn) refit();
      listen(isOn);
    });
  }

  onMounted(() => {
    if (!active || active.value) {
      refit();
      listen(true);
    }
  });
  onBeforeUnmount(() => {
    listen(false);
    // A pending debounce would otherwise fire after the window is gone, or be
    // dropped entirely if the page went away first.
    if (saveTimer) {
      clearTimeout(saveTimer);
      saveTimer = null;
      try {
        localStorage.setItem(opts.storageKey, JSON.stringify(rect.value));
      } catch {
        // see save()
      }
    }
  });

  return {
    rect,
    windowStyle,
    sidebarStyle,
    detailStyle,
    isNarrow,
    startMove,
    startResize,
    startSidebarDrag,
    startDetailDrag,
    resetSidebar,
    resetDetail,
    resetAll,
    refit,
  };
}

/** Test seam — the resolved defaults, so a test does not restate them. */
export function _resolveOptions(options: BrowserRectOptions): Resolved {
  return resolve(options);
}
