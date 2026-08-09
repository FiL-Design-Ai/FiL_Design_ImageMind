<script setup lang="ts">
/**
 * Wireless — the graph-wide view. Every 📡 Channel and everything wrong with
 * one, in one place, instead of opening each Channel's own gear to find out.
 *
 * Registered as a bottom panel tab, but mounted by our *own* `createApp()`
 * inside `filExtension.ts` (`type: "custom"`, a `render(el)` callback) rather
 * than handed to core as `type: "vue"` for `<component :is>`. That path was
 * tried first and looked fine — the tab appeared, the empty state rendered —
 * but Vue's reactivity never crossed into it: `vite.config.ts` bundles Vue
 * into this pack rather than sharing core's copy (see its own comment on
 * `external`), so a component core's *own* runtime mounts runs its render
 * effect on *core's* reactivity instance, while every `ref`/`computed` this
 * file creates belongs to *our* bundled one. The two never see each other's
 * `activeEffect`, so writes here never schedule a re-render there — no
 * thrown error, just a permanently stale first paint. Confirmed live: the
 * channel count kept logging correctly on every poll while the DOM never
 * moved. Every other piece of this pack's UI (`domWidgetHost.ts`,
 * `installToasts`) already sidesteps this the same way, by owning a
 * self-contained `createApp()` instead of joining core's tree — this
 * component is exactly the same fix, once removed to `filExtension.ts`
 * because `type: "custom"` mounts by DOM element, not by component.
 *
 * `app` therefore cannot come in as a parameter the way every `nodes2/`
 * module gets it from `main.ts`. It is read off `globalThis.app` instead, the
 * same fallback `filExtension.ts`'s own preflight uses — not a static import
 * of `/scripts/app.js`, which resolves fine in the running app (a real ES
 * module the host serves) but not under Vitest, where nothing serves that
 * path and the whole component's importers fail to transform.
 */
import { computed, onMounted, onUnmounted, shallowRef } from "vue";
import { useI18n } from "@/composables/useI18n";
import FilIcon from "@/components/widgets/FilIcon.vue";
import {
  channelColorFor,
  liveTreePlan,
  wirelessDiagnosticsTree,
  type DiagnosticRow,
  type GraphedDiagnosticRow,
  type WirelessChannel,
  type WirelessGraph,
  type WirelessNode,
  type WirelessTreePlan,
} from "@/nodes2/wireless";

const { t } = useI18n();

interface HostCanvas {
  graph?: WirelessGraph;
  selectNode?: (node: WirelessNode, add?: boolean) => void;
  deselectAll?: () => void;
  centerOnNode?: (node: WirelessNode) => void;
  setDirty?: (a: boolean, b?: boolean) => void;
  /** Switches the canvas into a subgraph — `LGraphCanvas.ts`'s own navigation, not ours. */
  openSubgraph?: (subgraph: WirelessGraph, fromNode: WirelessNode) => void;
}
interface HostApp {
  graph?: WirelessGraph;
  canvas?: HostCanvas;
}

function hostApp(): HostApp {
  return (globalThis as unknown as { app?: HostApp }).app ?? {};
}

const treePlan = shallowRef<WirelessTreePlan | null>(null);

/**
 * Same polling call the per-node panel makes (`ChannelPanel.vue`), same
 * reason: nothing here has an event to listen for. `liveTreePlan` resolves
 * every graph the workflow contains — root and every subgraph — through the
 * same per-graph cache the canvas overlay uses, so a second reader here costs
 * nothing extra when the two happen to land on the same tick.
 */
function refresh(): void {
  const graph = hostApp().graph;
  if (!graph || !Array.isArray(graph._nodes)) return;
  const next = liveTreePlan(graph);
  if (next !== treePlan.value) treePlan.value = next;
}

const POLL_MS = 500;
let timer: number | undefined;
onMounted(() => {
  refresh();
  timer = window.setInterval(refresh, POLL_MS);
});
onUnmounted(() => {
  if (timer !== undefined) window.clearInterval(timer);
});

/** One channel plus the graph it lives in — a subgraph's channels are just as real as the root's. */
interface GraphedChannel {
  channel: WirelessChannel;
  graph: WirelessGraph;
}

const channels = computed<GraphedChannel[]>(() =>
  (treePlan.value?.entries ?? []).flatMap(({ graph, plan }) => plan.channels.map((channel) => ({ channel, graph }))),
);

const problems = computed<GraphedDiagnosticRow[]>(() =>
  treePlan.value ? wirelessDiagnosticsTree(treePlan.value) : [],
);

function receivers(entry: GraphedChannel): number {
  const plan = treePlan.value?.entries.find((e) => e.graph === entry.graph)?.plan;
  return (plan?.resolution.links ?? []).filter((l) => l.channelName === entry.channel.name).length;
}

/**
 * Find a placement of this subgraph definition anywhere in the workflow, to
 * hand `openSubgraph` as its "entered from" node. A definition can be dragged
 * onto the canvas more than once; any one placement is a fine door to walk
 * through — this is navigation, not a link, so there is nothing to get wrong
 * by picking one arbitrarily among several.
 */
function findSubgraphInstance(root: WirelessGraph, subgraphId: unknown): WirelessNode | undefined {
  for (const node of root._nodes ?? []) {
    if (node.type === subgraphId) return node;
  }
  for (const nested of root.subgraphs?.values() ?? []) {
    for (const node of nested._nodes ?? []) {
      if (node.type === subgraphId) return node;
    }
  }
  return undefined;
}

/**
 * Jump the canvas to a node — the point of a list you can click through, not
 * just read. When the row's graph is a subgraph the canvas is not currently
 * showing, this switches into it first; if that fails for any reason (an
 * older host, a definition with no live placement left), it still tries to
 * select on whatever graph is on screen rather than doing nothing.
 */
function focusNode(nodeId: WirelessChannel["nodeId"], graph: WirelessGraph): void {
  const { canvas } = hostApp();
  if (!canvas) return;

  if (canvas.graph !== graph) {
    const root = hostApp().graph;
    const id = (graph as { id?: unknown }).id;
    const instance = root && id !== undefined ? findSubgraphInstance(root, id) : undefined;
    if (instance) {
      try {
        canvas.openSubgraph?.(graph, instance);
      } catch (error) {
        console.warn("[FiL_Design_ImageMind] wireless: could not open subgraph for navigation:", error);
      }
    }
  }

  const node = graph.getNodeById?.(nodeId);
  if (!node) return;
  canvas.deselectAll?.();
  canvas.selectNode?.(node);
  canvas.centerOnNode?.(node);
  canvas.setDirty?.(true, true);
}

const KIND_KEYS: Record<DiagnosticRow["kind"], string> = {
  dormant: "wireless_diag_dormant",
  ambiguous: "wireless_diag_ambiguous",
  typeMismatch: "wireless_diag_type_mismatch",
  unknownChannel: "wireless_diag_unknown_channel",
  selfLoop: "wireless_diag_self_loop",
  unusedChannel: "wireless_diag_unused_channel",
};

const KIND_FALLBACK: Record<DiagnosticRow["kind"], string> = {
  dormant: '{node} — input "{input}" is subscribed to {channel}, but a real wire already feeds it',
  ambiguous: '{node} — input "{input}" ({type}) could take {candidates}, so it takes none: pick one on the transmitter',
  typeMismatch: '{node} — input "{input}" is subscribed to {channel} ({channelType}), but the input is {inputType}',
  unknownChannel: '{node} — input "{input}" is subscribed to "{channel}", which does not exist',
  selfLoop: '{node} — input "{input}" is subscribed to {channel}, which this node itself feeds',
  unusedChannel: "{channel} — nothing in the graph is receiving it",
};

/** Fills the one template every diagnostic sentence needs, from the row's own fields. */
function describe(row: DiagnosticRow): string {
  const template = t(KIND_KEYS[row.kind], KIND_FALLBACK[row.kind]);
  return template
    .replace("{node}", row.nodeTitle)
    .replace("{input}", row.input ?? "")
    .replace("{channel}", row.channelName ?? "")
    .replace("{type}", row.type ?? "")
    .replace("{inputType}", row.inputType ?? "")
    .replace("{channelType}", row.channelType ?? "")
    .replace("{candidates}", (row.candidates ?? []).join(", "));
}

const emptyChannels = computed(() => t("wireless_diag_no_channels", "No 📡 Channel nodes in this graph yet."));
const noProblems = computed(() => t("wireless_diag_no_problems", "Nothing to report."));
</script>

<template>
  <div class="fil-wireless-diag">
    <section class="fil-wireless-diag-section">
      <h4 class="fil-wireless-diag-heading">{{ t("wireless_diag_channels", "Channels") }}</h4>
      <p v-if="channels.length === 0" class="fil-wireless-diag-empty">{{ emptyChannels }}</p>
      <ul v-else class="fil-wireless-diag-list">
        <li
          v-for="entry in channels"
          :key="`${entry.channel.nodeId}:${entry.channel.slotIndex}`"
          class="fil-wireless-diag-row"
          role="button"
          tabindex="0"
          @click="focusNode(entry.channel.nodeId, entry.graph)"
          @keydown.enter="focusNode(entry.channel.nodeId, entry.graph)"
        >
          <span class="fil-wireless-diag-dot" :style="{ background: channelColorFor(entry.channel) }" />
          <span class="fil-wireless-diag-name">{{ entry.channel.name }}</span>
          <span class="fil-wireless-diag-type">{{ entry.channel.type }}</span>
          <span class="fil-wireless-diag-count">{{ receivers(entry) }}</span>
        </li>
      </ul>
    </section>

    <section class="fil-wireless-diag-section">
      <h4 class="fil-wireless-diag-heading">{{ t("wireless_diag_problems", "Problems") }}</h4>
      <p v-if="problems.length === 0" class="fil-wireless-diag-empty">{{ noProblems }}</p>
      <ul v-else class="fil-wireless-diag-list">
        <li
          v-for="(row, i) in problems"
          :key="i"
          class="fil-wireless-diag-row fil-wireless-diag-problem"
          role="button"
          tabindex="0"
          @click="focusNode(row.nodeId, row.graph)"
          @keydown.enter="focusNode(row.nodeId, row.graph)"
        >
          <FilIcon name="warning" :size="12" class="fil-wireless-diag-warn" />
          <span class="fil-wireless-diag-text">{{ describe(row) }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.fil-wireless-diag {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 12px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

.fil-wireless-diag-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fil-wireless-diag-heading {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fil-muted);
}

.fil-wireless-diag-empty {
  margin: 0;
  padding: 4px 2px;
  font-size: 12px;
  color: var(--fil-muted);
}

.fil-wireless-diag-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fil-wireless-diag-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 8px;
  border-radius: var(--fil-field-radius);
  cursor: pointer;
}

.fil-wireless-diag-row:hover,
.fil-wireless-diag-row:focus-visible {
  background: var(--fil-surface-2);
}

.fil-wireless-diag-row:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}

.fil-wireless-diag-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.fil-wireless-diag-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: var(--fil-text);
}

.fil-wireless-diag-type {
  flex: 0 0 auto;
  font-size: 10px;
  color: var(--fil-muted);
}

.fil-wireless-diag-count {
  flex: 0 0 auto;
  min-width: 16px;
  text-align: center;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: var(--fil-muted);
}

.fil-wireless-diag-problem {
  align-items: flex-start;
}

.fil-wireless-diag-warn {
  flex: 0 0 auto;
  margin-top: 2px;
  color: #e0a030;
}

.fil-wireless-diag-text {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 12px;
  line-height: 1.4;
  color: var(--fil-text);
}
</style>
