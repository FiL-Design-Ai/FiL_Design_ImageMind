/**
 * The element ComfyUI's DOM widget wraps, and the Vue app mounts into.
 *
 * Every style here is load-bearing and was arrived at against a real ComfyUI —
 * see the comments. Nothing else in the host writes to these.
 */

/** Sentinel attribute to spot double-mounts. */
export const FIL_MOUNTED_FLAG = "__filVueMounted";

export function createHostElement(badge?: string): HTMLElement {
  const host = document.createElement("div");
  host.className = "fil-vue-host";
  // Read by `styles/vueNodeSkin.ts` to rebuild, in CSS, the pill the canvas
  // renderer draws inline in the title row (`nodeStyle.ts::drawInlineBadge`).
  // It rides on our own element because the Vue-rendered title bar belongs to
  // the host and this pack does not write into other people's DOM.
  if (badge) host.dataset.filBadge = badge;
  // Fill whatever width ComfyUI's own DOM-widget wrapper gives us, so the
  // panel grows/shrinks when the user resizes the node box. A fixed pixel
  // width here previously left dead space when a node was widened.
  host.style.width = "100%";
  host.style.boxSizing = "border-box";
  // No `min-height` floor here on purpose. It used to be the caller's height
  // estimate, but that pinned the host's own box at the *initial estimate*
  // forever: the observers measure the real content height, and a host whose
  // `scrollHeight` can never drop below the floor kept reporting the stale
  // estimate — so a node whose tightened body is (say) 104px tall stayed
  // pinned at a 185px estimate, leaving dead space below the panel. The
  // observers measure the mounted child directly, so no floor is needed;
  // `getHeight()` still returns the estimate for the very first paint frame
  // before they run.
  // ComfyUI's own DOM-widget wrapper adds an `h-full` class to whatever
  // element `addDOMWidget` mounts (`height: 100%` of the widget's own,
  // separately-computed box) — a CSS explicit `height` never grows past
  // its resolved value no matter how tall the content wants to be, content
  // just overflows past it instead of the box adapting. An inline style
  // has higher specificity than a class, so this forces `height: auto`
  // (content-driven sizing) — without it, the height model below can report
  // the right number while the *actual* rendered box stays capped at whatever
  // `h-full` resolved to, and Vue content visibly spills out past it.
  host.style.height = "auto";
  (host as unknown as Record<string, unknown>)[FIL_MOUNTED_FLAG] = true;
  return host;
}
