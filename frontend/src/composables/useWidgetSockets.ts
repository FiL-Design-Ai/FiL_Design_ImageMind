/**
 * Line a node's widget-input dots up with the panel fields they belong to.
 *
 * A hidden native widget gets its slot back from `exposeWidgetInputSockets`
 * (nodes2/widgetInputSockets.ts), but the slot has no row of its own — the dots
 * stack at the node's top edge until something tells LiteGraph where the field
 * actually sits. That is what this does, plus it reports which fields currently
 * have a link so a panel can show them as driven from the graph.
 *
 * Optic Scanner solved the same problem with a 300ms poll per node. This is the
 * event-driven version: a ResizeObserver and a MutationObserver on the panel
 * root cover everything that moves a field (a section collapsing, the node
 * being resized, a locale swap changing a label's width), and `linkVersion`
 * covers the one thing the DOM cannot see — a wire being connected or cut,
 * which the node module bumps from `onConnectionsChange`.
 */
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { anchorWidgetInputSockets, readLinkedInputs } from "@/nodes2/widgetInputSockets";
import type { FilNodeState } from "@/nodes2/filState";

export function useWidgetSockets(state: FilNodeState, names: string[]) {
  const els: Record<string, HTMLElement | null> = {};
  const linked = ref<Record<string, boolean>>({});

  /** Vue hands a component instance for component refs; measure the real node. */
  function setFieldEl(name: string, el: unknown): void {
    const resolved = (el as { $el?: unknown } | null)?.$el ?? el;
    els[name] = (resolved as HTMLElement | null) ?? null;
  }

  function isLinked(name: string): boolean {
    return Boolean(linked.value[name]);
  }

  function sync(): void {
    const node = state.node;
    if (!node) return;
    anchorWidgetInputSockets(node, names.map((name) => ({ name, el: els[name] })));
    const now = readLinkedInputs(node, names);
    // Reassign only on a real change: this feeds a reactive panel.
    if (names.some((name) => now[name] !== Boolean(linked.value[name]))) linked.value = now;
  }

  let resizeObserver: ResizeObserver | null = null;
  let mutationObserver: MutationObserver | null = null;
  let frame = 0;

  function schedule(): void {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      sync();
    });
  }

  onMounted(() => {
    sync();
    // Reached from a field element, never by querying the document: every FiL
    // panel carries the same host class, so a global lookup would hand back
    // some other node's panel whenever more than one is on the canvas.
    const target = Object.values(els).find(Boolean)?.closest<HTMLElement>(".fil-vue-host");
    if (!target) return;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(target);
    }
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(schedule);
      mutationObserver.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"],
      });
    }
  });

  // Bumped by the node module when a wire is connected or cut — no DOM change
  // accompanies that, so neither observer above would fire.
  watch(() => (state.ui as Record<string, unknown>)?.linkVersion, schedule);

  onBeforeUnmount(() => {
    resizeObserver?.disconnect();
    mutationObserver?.disconnect();
    if (frame) cancelAnimationFrame(frame);
  });

  return { setFieldEl, isLinked, syncWidgetSockets: sync };
}
