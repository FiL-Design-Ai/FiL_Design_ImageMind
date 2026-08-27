<script setup lang="ts">
/**
 * FilWirelessModal — Global HUD and interactive dashboard for wireless channels.
 *
 * Allows users to inspect all channels across root and subgraphs, trace/focus connections
 * on canvas, mute/unmute channels, unlink receivers, filter by data type, and resolve problems.
 */
import { computed, onMounted, onUnmounted, shallowRef } from "vue";
import { useI18n } from "@/composables/useI18n";
import { useWirelessStore, type HostApp } from "@/stores/wirelessStore";
import FilModal from "./FilModal.vue";
import FilIcon from "./FilIcon.vue";
import FilButton from "./FilButton.vue";
import {
  channelColorFor,
  liveTreePlan,
  wirelessDiagnosticsTree,
  type DiagnosticRow,
  type GraphedDiagnosticRow,
  type WirelessChannel,
  type WirelessGraph,
  type WirelessTreePlan,
} from "@/nodes2/wireless";
import { allNodes } from "@/nodes2/wireless/graphAccess";
import type { NodeId } from "@/nodes2/wireless/types";

const { t } = useI18n();
const store = useWirelessStore();

function hostApp(): HostApp {
  return (globalThis as unknown as { app?: HostApp }).app ?? {};
}

const treePlan = shallowRef<WirelessTreePlan | null>(null);

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

interface GraphedChannel {
  channel: WirelessChannel;
  graph: WirelessGraph;
}

const allChannels = computed<GraphedChannel[]>(() =>
  (treePlan.value?.entries ?? []).flatMap(({ graph, plan }) =>
    plan.channels.map((channel) => ({ channel, graph })),
  ),
);

function receiversCount(entry: GraphedChannel): number {
  const treeEntry = treePlan.value?.entries.find((e) => e.graph === entry.graph);
  if (!treeEntry) return 0;
  return treeEntry.plan.resolution.links.filter(
    (l) => l.origin_id === entry.channel.nodeId && l.origin_slot === entry.channel.slotIndex,
  ).length;
}

const availableTypes = computed<string[]>(() => {
  const set = new Set<string>();
  for (const { channel } of allChannels.value) {
    if (channel.type && channel.type !== "*") {
      set.add(channel.type.toUpperCase());
    }
  }
  return Array.from(set).sort();
});

const filteredChannels = computed<GraphedChannel[]>(() => {
  const q = store.searchQuery.trim().toLowerCase();
  const filterType = store.activeTypeFilter;

  return allChannels.value.filter(({ channel }) => {
    if (filterType !== "ALL" && channel.type.toUpperCase() !== filterType) {
      return false;
    }
    if (!q) return true;
    return (
      channel.name.toLowerCase().includes(q) ||
      channel.type.toLowerCase().includes(q) ||
      String(channel.nodeId).includes(q)
    );
  });
});

const totalReceiversCount = computed(() =>
  allChannels.value.reduce((acc, entry) => acc + receiversCount(entry), 0),
);

const problems = computed<GraphedDiagnosticRow[]>(() => {
  const tPlan = treePlan.value;
  if (!tPlan) return [];
  return wirelessDiagnosticsTree(tPlan);
});

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

function describeProblem(row: DiagnosticRow): string {
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

function focusNode(nodeId: NodeId, graph: WirelessGraph): void {
  const canvas = hostApp().canvas;
  if (!canvas) return;

  if (canvas.openSubgraph && graph !== hostApp().graph) {
    const root = hostApp().graph;
    if (root) {
      for (const rootNode of allNodes(root)) {
        if ((rootNode as unknown as { subgraphs?: WirelessGraph[] }).subgraphs?.includes(graph)) {
          canvas.openSubgraph(graph, rootNode);
          break;
        }
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

function onFocusChannel(entry: GraphedChannel): void {
  store.focusChannelAndReceivers(entry.graph, entry.channel);
}

function onMuteToggle(entry: GraphedChannel): void {
  const count = receiversCount(entry);
  if (count > 0) {
    store.muteChannel(entry.graph, entry.channel);
  } else {
    store.unmuteChannel(entry.graph, entry.channel);
  }
}

function onUnlinkAll(entry: GraphedChannel): void {
  const confirmMsg = t(
    "wireless_confirm_unlink_all",
    `Unlink all receiver nodes from channel "${entry.channel.name}"?`,
  ).replace("{channel}", entry.channel.name);

  if (window.confirm(confirmMsg)) {
    store.unlinkAll(entry.graph, entry.channel.name);
  }
}
</script>

<template>
  <FilModal
    v-model:open="store.isDashboardOpen"
    :title="t('wireless_dashboard_title', '📡 Wireless Dashboard')"
    width="740px"
    :resizable="true"
    @close="store.closeDashboard"
  >
    <div class="fil-wd-container">
      <!-- Header info -->
      <div class="fil-wd-top">
        <div class="fil-wd-desc">
          <span>{{ t("wireless_dashboard_subtitle", "Manage all wireless channels, signal routing, and receiver nodes.") }}</span>
        </div>
        <div class="fil-wd-badge">
          {{
            t("wireless_summary_badge", "{channels} channels · {receivers} receivers")
              .replace("{channels}", String(allChannels.length))
              .replace("{receivers}", String(totalReceiversCount))
          }}
        </div>
      </div>

      <!-- Controls & Search -->
      <div class="fil-wd-controls">
        <div class="fil-wd-search">
          <FilIcon name="search" :size="14" class="fil-wd-search-icon" />
          <input
            v-model="store.searchQuery"
            type="text"
            class="fil-wd-search-input"
            :placeholder="t('wireless_search_channels', 'Search channels, types, or connected nodes...')"
          />
          <button v-if="store.searchQuery" class="fil-wd-search-clear" @click="store.searchQuery = ''">
            <FilIcon name="close" :size="12" />
          </button>
        </div>

        <div class="fil-wd-tabs">
          <button
            class="fil-wd-tab"
            :class="{ active: store.activeTab === 'overview' }"
            @click="store.activeTab = 'overview'"
          >
            {{ t("wireless_tab_overview", "Channels Overview") }}
            <span class="fil-wd-tab-badge">{{ allChannels.length }}</span>
          </button>
          <button
            class="fil-wd-tab"
            :class="{ active: store.activeTab === 'diagnostics', warn: problems.length > 0 }"
            @click="store.activeTab = 'diagnostics'"
          >
            {{ t("wireless_tab_diagnostics", "Diagnostics & Issues") }}
            <span v-if="problems.length > 0" class="fil-wd-tab-badge warn">{{ problems.length }}</span>
          </button>
        </div>
      </div>

      <!-- Type Filters (Overview tab only) -->
      <div v-if="store.activeTab === 'overview' && availableTypes.length > 0" class="fil-wd-filters">
        <button
          class="fil-wd-filter-pill"
          :class="{ active: store.activeTypeFilter === 'ALL' }"
          @click="store.activeTypeFilter = 'ALL'"
        >
          {{ t("wireless_filter_type_all", "All Types") }}
        </button>
        <button
          v-for="typeName in availableTypes"
          :key="typeName"
          class="fil-wd-filter-pill"
          :class="{ active: store.activeTypeFilter === typeName }"
          @click="store.activeTypeFilter = typeName"
        >
          {{ typeName }}
        </button>
      </div>

      <!-- Main Body -->
      <div class="fil-wd-content">
        <!-- Overview Tab -->
        <div v-if="store.activeTab === 'overview'" class="fil-wd-list">
          <div v-if="filteredChannels.length === 0" class="fil-wd-empty">
            <FilIcon name="info" :size="24" class="fil-wd-empty-icon" />
            <p>{{ t("wireless_diag_no_channels", "No 📡 Channel nodes in this graph yet.") }}</p>
          </div>

          <div
            v-for="entry in filteredChannels"
            :key="`${entry.channel.nodeId}:${entry.channel.slotIndex}`"
            class="fil-wd-card"
          >
            <div class="fil-wd-card-left">
              <span class="fil-wd-dot" :style="{ background: channelColorFor(entry.channel) }" />
              <div class="fil-wd-card-info">
                <span class="fil-wd-card-name">{{ entry.channel.name }}</span>
                <span class="fil-wd-card-meta">
                  <span class="fil-wd-type-tag">{{ entry.channel.type }}</span>
                  <span class="fil-wd-node-tag">Node #{{ entry.channel.nodeId }}</span>
                </span>
              </div>
            </div>

            <div class="fil-wd-card-mid">
              <span
                class="fil-wd-receivers-badge"
                :class="{ active: receiversCount(entry) > 0, idle: receiversCount(entry) === 0 }"
              >
                {{
                  receiversCount(entry) > 0
                    ? t("wireless_receivers_count", "{count} receivers").replace("{count}", String(receiversCount(entry)))
                    : t("wireless_no_receivers", "0 receivers")
                }}
              </span>
            </div>

            <div class="fil-wd-card-actions">
              <button
                class="fil-wd-action-btn"
                :title="t('wireless_btn_focus_tt', 'Focus canvas and select this transmitter and all receiver nodes')"
                @click="onFocusChannel(entry)"
              >
                <FilIcon name="eye" :size="13" />
                <span>{{ t("wireless_btn_focus", "Focus & Trace") }}</span>
              </button>

              <button
                class="fil-wd-action-btn"
                :class="{ active: receiversCount(entry) > 0 }"
                :title="receiversCount(entry) > 0 ? t('wireless_btn_mute', 'Mute') : t('wireless_btn_unmute', 'Unmute')"
                @click="onMuteToggle(entry)"
              >
                <FilIcon :name="receiversCount(entry) > 0 ? 'toggleOn' : 'toggleOff'" :size="13" />
                <span>{{ receiversCount(entry) > 0 ? t("wireless_btn_mute", "Mute") : t("wireless_btn_unmute", "Unmute") }}</span>
              </button>

              <button
                class="fil-wd-action-btn danger"
                :title="t('wireless_btn_unlink_all', 'Unlink all')"
                @click="onUnlinkAll(entry)"
              >
                <FilIcon name="trash" :size="13" />
                <span>{{ t("wireless_btn_unlink_all", "Unlink all") }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Diagnostics Tab -->
        <div v-else class="fil-wd-list">
          <div v-if="problems.length === 0" class="fil-wd-empty success">
            <FilIcon name="check" :size="24" class="fil-wd-empty-icon" />
            <p>{{ t("wireless_diag_no_problems", "Nothing to report. All wireless links are healthy.") }}</p>
          </div>

          <div
            v-for="(row, i) in problems"
            :key="i"
            class="fil-wd-card fil-wd-card-problem"
            @click="focusNode(row.nodeId, row.graph)"
          >
            <div class="fil-wd-prob-left">
              <FilIcon name="warning" :size="16" class="fil-wd-prob-warn" />
              <div class="fil-wd-prob-info">
                <span class="fil-wd-prob-text">{{ describeProblem(row) }}</span>
                <span class="fil-wd-prob-hint">Click to jump to Node #{{ row.nodeId }} on canvas</span>
              </div>
            </div>
            <button class="fil-wd-action-btn" @click.stop="focusNode(row.nodeId, row.graph)">
              <FilIcon name="chevronRight" :size="14" />
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="fil-wd-footer">
        <span class="fil-wd-hotkey-hint">Shortcut: <kbd>Alt</kbd> + <kbd>W</kbd> or via Menu <b>FiL Design</b></span>
        <FilButton variant="standard" size="sm" @click="store.closeDashboard">
          {{ t("btn_close", "Close") }}
        </FilButton>
      </div>
    </div>
  </FilModal>
</template>

<style scoped>
.fil-wd-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 420px;
  max-height: 68vh;
  box-sizing: border-box;
}

.fil-wd-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.fil-wd-desc {
  font-size: 12px;
  color: var(--fil-muted, #8b949e);
}

.fil-wd-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 12px;
  background: var(--fil-surface, rgba(255, 255, 255, 0.06));
  color: var(--fil-accent, #58a6ff);
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.1));
}

.fil-wd-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.fil-wd-search {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.fil-wd-search-icon {
  position: absolute;
  left: 10px;
  color: var(--fil-muted, #8b949e);
  pointer-events: none;
}

.fil-wd-search-input {
  width: 100%;
  padding: 6px 30px 6px 30px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.12));
  background: var(--fil-bg, #0d1117);
  color: var(--fil-text, #c9d1d9);
  outline: none;
  transition: border-color 0.15s;
}

.fil-wd-search-input:focus {
  border-color: var(--fil-accent, #58a6ff);
}

.fil-wd-search-clear {
  position: absolute;
  right: 8px;
  border: none;
  background: transparent;
  color: var(--fil-muted, #8b949e);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.fil-wd-tabs {
  display: flex;
  gap: 4px;
  background: var(--fil-surface, rgba(255, 255, 255, 0.04));
  padding: 3px;
  border-radius: 8px;
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.08));
}

.fil-wd-tab {
  border: none;
  background: transparent;
  color: var(--fil-muted, #8b949e);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.12s;
}

.fil-wd-tab:hover {
  color: var(--fil-text, #c9d1d9);
}

.fil-wd-tab.active {
  background: var(--fil-panel, #161b22);
  color: var(--fil-text, #c9d1d9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.fil-wd-tab-badge {
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.fil-wd-tab-badge.warn {
  background: rgba(248, 81, 73, 0.25);
  color: #f85149;
}

.fil-wd-filters {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 2px;
}

.fil-wd-filter-pill {
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.1));
  background: var(--fil-surface, rgba(255, 255, 255, 0.03));
  color: var(--fil-muted, #8b949e);
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.12s;
}

.fil-wd-filter-pill:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--fil-text, #c9d1d9);
}

.fil-wd-filter-pill.active {
  background: var(--fil-accent, #58a6ff);
  color: #ffffff;
  border-color: var(--fil-accent, #58a6ff);
}

.fil-wd-content {
  flex: 1;
  overflow-y: auto;
  min-height: 240px;
}

.fil-wd-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fil-wd-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 16px;
  color: var(--fil-muted, #8b949e);
  font-size: 13px;
  text-align: center;
}

.fil-wd-empty.success {
  color: #3fb950;
}

.fil-wd-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--fil-surface, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.08));
  border-radius: 8px;
  gap: 12px;
  transition: border-color 0.12s, background-color 0.12s;
}

.fil-wd-card:hover {
  border-color: var(--fil-border-hover, rgba(255, 255, 255, 0.18));
  background: var(--fil-surface-hover, rgba(255, 255, 255, 0.05));
}

.fil-wd-card-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 180px;
}

.fil-wd-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px currentColor;
}

.fil-wd-card-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fil-wd-card-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--fil-text, #c9d1d9);
}

.fil-wd-card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}

.fil-wd-type-tag {
  color: var(--fil-accent, #58a6ff);
  font-weight: 500;
}

.fil-wd-node-tag {
  color: var(--fil-muted, #8b949e);
}

.fil-wd-card-mid {
  display: flex;
  align-items: center;
}

.fil-wd-receivers-badge {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 6px;
  font-weight: 500;
}

.fil-wd-receivers-badge.active {
  background: rgba(63, 185, 80, 0.15);
  color: #3fb950;
  border: 1px solid rgba(63, 185, 80, 0.3);
}

.fil-wd-receivers-badge.idle {
  background: rgba(255, 255, 255, 0.05);
  color: var(--fil-muted, #8b949e);
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.08));
}

.fil-wd-card-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.fil-wd-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.1));
  background: var(--fil-surface, rgba(255, 255, 255, 0.04));
  color: var(--fil-text, #c9d1d9);
  cursor: pointer;
  transition: all 0.12s;
}

.fil-wd-action-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.2);
}

.fil-wd-action-btn.active {
  color: #3fb950;
}

.fil-wd-action-btn.danger:hover {
  background: rgba(248, 81, 73, 0.15);
  color: #f85149;
  border-color: rgba(248, 81, 73, 0.3);
}

.fil-wd-card-problem {
  cursor: pointer;
}

.fil-wd-prob-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.fil-wd-prob-warn {
  color: #d29922;
  margin-top: 2px;
  flex-shrink: 0;
}

.fil-wd-prob-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fil-wd-prob-text {
  font-size: 12px;
  color: var(--fil-text, #c9d1d9);
}

.fil-wd-prob-hint {
  font-size: 10px;
  color: var(--fil-muted, #8b949e);
}

.fil-wd-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--fil-border, rgba(255, 255, 255, 0.08));
}

.fil-wd-hotkey-hint {
  font-size: 11px;
  color: var(--fil-muted, #8b949e);
}

.fil-wd-hotkey-hint kbd {
  background: rgba(255, 255, 255, 0.08);
  padding: 1px 5px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
