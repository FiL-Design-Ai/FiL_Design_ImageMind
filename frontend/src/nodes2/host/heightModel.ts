/**
 * How tall the panel is, and who gets told about it.
 *
 * Three numbers, and they are easy to confuse:
 *   - `natural` — the height the panel's own content needs.
 *   - `stretch` — extra pixels the user dragged on top of it (growable only).
 *   - `height`  — what LiteGraph lays the widget out in; always the sum.
 *
 * Nothing here measures from `getHeight()`. LiteGraph calls that from its draw
 * loop, so measuring there is a forced reflow per frame per FiL node on the
 * canvas (`410fc95`). Measurement happens when the content actually changes,
 * driven by the observers, and `getHeight()` just reads the last result.
 */

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

/** Rounded up to a 4px grid: sub-pixel/1-2px content jitter (font metrics,
 * locale-driven label width) otherwise reports a slightly different height on
 * every reload of the same workflow, marking it dirty for no visible reason. */
const snap = (px: number): number => Math.ceil(px / 4) * 4;

export interface HeightModel {
  /** The height LiteGraph lays the widget out in. */
  height(): number;
  /** The height the panel's content needs on its own, without any stretch. */
  natural(): number;
  /** Extra pixels the user dragged on top of the content height. */
  stretch(): number;
  /** Called once `addDOMWidget` has handed back the widget to publish onto. */
  attachWidget(widget: unknown): void;
  /** Measure the panel and publish. No-op in growable mode — see `remeasureNatural`. */
  measure(): number;
  /** Growable mode: re-read the content minimum. False when nothing is laid out yet. */
  remeasureNatural(): boolean;
  /** Set the stretch (clamped at zero) and republish. */
  setStretch(px: number): void;
  /** Recompute `height` from `natural + stretch` and republish. */
  applyStretch(): void;
}

export function createHeightModel(
  host: HTMLElement,
  opts: { height: number; growable?: boolean },
): HeightModel {
  // Starts at the caller's estimate for the first paint, before anything is
  // mounted to measure.
  let currentHeight = opts.height;
  let naturalHeight = opts.height;
  let stretch = 0;
  let widget: { height?: number; computeSize?: () => [number, number] } | null = null;

  const content = (): HTMLElement | null => host.firstElementChild as HTMLElement | null;

  const publish = (): void => {
    if (!widget) return;
    // `height` became a getter-only accessor on BaseWidget in the ComfyUI
    // frontend (seen on 1.47.10). Assigning it throws *inside* LiteGraph's
    // draw loop, which aborts the frame — every FiL node then rendered as
    // nothing at all. `computeSize()` is the supported channel and is what
    // LiteGraph actually reads; only set `height` where it is still writable,
    // for older frontends that rely on it.
    if (isWritable(widget, "height")) {
      widget.height = currentHeight;
    }
    widget.computeSize = () => [host.clientWidth || 380, currentHeight];
  };

  return {
    height: () => currentHeight,
    natural: () => naturalHeight,
    stretch: () => stretch,

    attachWidget(w: unknown) {
      // Stored, not published. Publishing here would hand LiteGraph the
      // caller's estimate before anything has been measured, and the growable
      // arithmetic reads the node's box back through `computeSize()` — so an
      // early publish silently changes what the first drag computes as stretch.
      widget = w as typeof widget;
    },

    measure() {
      const el = content();
      // Hidden (e.g. hideOnZoom) or not yet mounted.
      if (!el || el.clientHeight === 0) return currentHeight;
      // In growable mode `host` carries an explicit height, so `scrollHeight`
      // reports that box instead of the content's own minimum. The min-content
      // re-measure is `remeasureNatural()`, which costs a forced reflow and so
      // is driven from the coalesced sync only.
      if (opts.growable) return currentHeight;
      currentHeight = snap(el.scrollHeight);
      naturalHeight = currentHeight;
      publish();
      return currentHeight;
    },

    remeasureNatural() {
      const el = content();
      if (!el || el.clientHeight === 0) return false;
      // The host has to lose its explicit height for one synchronous read to
      // get at the content's own minimum — with the height in place the
      // flexible rows have already absorbed the slack and `scrollHeight` just
      // echoes the box back. Two forced reflows per call is why only the
      // coalesced sync calls this, never `getHeight`.
      const explicit = host.style.height;
      host.style.height = "auto";
      naturalHeight = snap(el.scrollHeight);
      host.style.height = explicit;
      return true;
    },

    setStretch(px: number) {
      stretch = Math.max(0, px);
      this.applyStretch();
    },

    applyStretch() {
      currentHeight = naturalHeight + stretch;
      host.style.height = `${currentHeight}px`;
      publish();
    },
  };
}
