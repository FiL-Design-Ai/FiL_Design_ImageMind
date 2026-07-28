/**
 * What tells the host that the panel's size moved.
 *
 * This module is where a 400ms `setInterval` used to live, per widget, for the
 * widget's whole lifetime — a backstop against the ResizeObserver "silently
 * stopping", the symptom being a node stuck at 522px against 738px of real
 * content. The observer was not flaking: it watched the host, whose box stops
 * following the content as soon as anything pins it (ComfyUI's own `h-full`,
 * or the growable stretch), while the measurement read the panel's
 * `scrollHeight`. Observing the panel itself closes that gap, and the timer is
 * gone (`86b4c0e`).
 */

export interface ContentObservers {
  disconnect(): void;
}

export function observeContent(
  host: HTMLElement,
  opts: { growable?: boolean },
  onChange: () => void,
): ContentObservers {
  // Coalesced into one update per animation frame — a section toggle can fire
  // several layout passes in a row.
  let frame = 0;
  const schedule = (): void => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      onChange();
    });
  };

  const resizeObserver = new ResizeObserver(schedule);
  // The host stays observed — it is still the reliable signal for width.
  resizeObserver.observe(host);

  // The panel's own root is the one element here sized by its content, so it is
  // what actually has to be observed. It arrives late: the node modules pass a
  // `defineAsyncComponent`, so `FilNodeShell` renders its wrapper synchronously
  // but the panel inside it only lands once the chunk resolves.
  const shell = host.firstElementChild;
  let panelRoot: Element | null = null;
  const observePanelRoot = (): boolean => {
    const panel = shell?.firstElementChild;
    if (!panel || panel === panelRoot) return Boolean(panelRoot);
    panelRoot = panel;
    resizeObserver.observe(panel);
    schedule();
    return true;
  };

  // Waits for the panel to mount, then stops. Skipped entirely when the panel
  // is already there (a plain, non-async component).
  let arrivalObserver: MutationObserver | null = null;
  if (shell && !observePanelRoot()) {
    arrivalObserver = new MutationObserver(() => {
      if (!observePanelRoot()) return;
      arrivalObserver?.disconnect();
      arrivalObserver = null;
    });
    arrivalObserver.observe(shell, { childList: true });
  }

  // Growable panels need a second, permanent signal: inside a height pinned by
  // the stretch, a section collapsing moves no border-box anywhere, so neither
  // observer above would ever fire. A DOM or class change is the only evidence
  // the content minimum moved — this is the case the poll was really covering,
  // now driven by the event instead of by a timer.
  let growObserver: MutationObserver | null = null;
  if (opts.growable && shell) {
    growObserver = new MutationObserver(schedule);
    growObserver.observe(shell, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }

  // The root component is normally a `defineAsyncComponent(...)` (see
  // nodes2/nodes/*.ts): it resolves and mounts its real content *after*
  // `app.mount(host)` already returned, so the very first paint can still be
  // mid-layout when the ResizeObserver's first callback fires. A few follow-up
  // passes across the next several frames catches the settled size independent
  // of exactly when the async chunk + first layout finish.
  let settleFrames = 20;
  (function settle() {
    onChange();
    if (settleFrames-- > 0) requestAnimationFrame(settle);
  })();

  return {
    disconnect() {
      resizeObserver.disconnect();
      arrivalObserver?.disconnect();
      growObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    },
  };
}
