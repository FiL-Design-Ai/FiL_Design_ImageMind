<script setup lang="ts">
/**
 * FiLChannel panel — one row per channel this transmitter carries, and the gear
 * that says where each one goes.
 *
 * The node's inputs grow as they are used, and every wired input is its own
 * channel (`wireless.md` §3a), so this panel is a list, not a single control.
 * A row shows the channel's colour (the same one the canvas overlay draws
 * with), its name, and how many inputs it currently feeds.
 *
 * The gear opens the target list: every input in the graph of that type, ticked
 * where the channel lands. Ticks start on, because auto-distribution already
 * reaches everything it can — so unticking is the meaningful action, and it is
 * remembered on the receiving node (`wireless/subscriptions.ts`).
 *
 * The same list also opens itself, unprompted, the moment a wire lands in this
 * node and that wire turns out to create an ambiguity somewhere (rule 3 or
 * rule 7 — two channels of one type, or a node with two identical-type inputs
 * like a KSampler's `positive`/`negative`). Without this, the only sign
 * anything needed a decision was a row in the "Wireless" bottom-panel tab, and
 * nothing pointed a user there right when the decision became necessary — see
 * `wireless.md` for the incident that prompted adding it.
 */
import { computed, onMounted, onUnmounted, ref, shallowRef } from "vue";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";
import FilIcon from "@/components/widgets/FilIcon.vue";
import FilModal from "@/components/widgets/FilModal.vue";
import FilToggle from "@/components/widgets/FilToggle.vue";
import {
  applySlotColors,
  applySlotNames,
  channelColor,
  channelColorSoft,
  channelTargets,
  livePlan,
  setChannelTarget,
  type ChannelTarget,
  type WirelessChannel,
  type WirelessGraph,
  type WirelessNode,
  type WirelessPlan,
} from "@/nodes2/wireless";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

type HostGraph = WirelessGraph & { setDirtyCanvas?: (a: boolean, b: boolean) => void };

function hostNode(): (WirelessNode & { graph?: HostGraph }) | undefined {
  return props.state.node as (WirelessNode & { graph?: HostGraph }) | undefined;
}

const plan = shallowRef<WirelessPlan | null>(null);

/**
 * Re-read the plan, cheaply.
 *
 * `livePlan` hands back the *same object* until something in the graph that
 * could change the answer has changed, so this is a fingerprint walk and a
 * reference compare — the overlay already pays that on every frame.
 *
 * Polled rather than event-driven on purpose: the things this panel shows move
 * for reasons LiteGraph does not announce to an extension — a slot renamed
 * through core's own "Rename Slot", a wire drawn into some other node across
 * the canvas. The alternatives were patching host methods to find out, which
 * this pack has been burned by before (`CLAUDE.md`), or showing stale counts.
 */
function refresh(): void {
  const graph = hostNode()?.graph;
  if (!graph || !Array.isArray(graph._nodes)) return;
  const next = livePlan(graph);
  if (next !== plan.value) plan.value = next;
  syncSlots(graph);
}

/**
 * Make each wired socket look like what it carries: the channel's name on
 * the label, and the real type's colour on the dot instead of the flat
 * wildcard tone — see `slotLabels.ts` and `slotColors.ts` for why each needs
 * its own care (a receipt for the name, a reset-on-disconnect for the
 * colour). Folded into one pass since both walk the same slots at the same
 * moments: this poll, and the immediate call from `onConnectionsChange`.
 */
function syncSlots(graph: WirelessGraph): void {
  const node = hostNode();
  if (!node) return;
  const naming = new Map<string, string>();
  for (const channel of channels.value) {
    const slot = node.inputs?.[channel.slotIndex];
    if (slot) naming.set(slot.name, channel.name);
  }
  const namesChanged = applySlotNames(node, naming);
  const colorsChanged = applySlotColors(graph, node);
  if (namesChanged || colorsChanged) redraw();
}

const POLL_MS = 500;
let timer: number | undefined;

onMounted(() => {
  refresh();
  // A wire landing on this node has to show up at once, not on the next tick —
  // `channel.ts` calls this from `onConnectionsChange`.
  props.state.ui.refresh = refresh;
  props.state.ui.promptAmbiguity = promptAmbiguity;
  timer = window.setInterval(refresh, POLL_MS);
});
onUnmounted(() => {
  if (timer !== undefined) window.clearInterval(timer);
  if (props.state.ui.refresh === refresh) delete props.state.ui.refresh;
  if (props.state.ui.promptAmbiguity === promptAmbiguity) delete props.state.ui.promptAmbiguity;
});

/**
 * Called from `channel.ts` right after a new wire lands in `slotIndex` — never
 * on load, never for a disconnect, and never for a wire drawn anywhere else in
 * the graph, so this only ever fires at the one moment a user could plausibly
 * expect an answer: they just plugged something in.
 *
 * `refresh()` first, deliberately: the plan has to reflect *this* wire before
 * asking whether it created an ambiguity, and `livePlan`'s cache would
 * otherwise still be holding the answer from before it existed.
 */
function promptAmbiguity(slotIndex: number): void {
  refresh();
  const channel = channels.value.find((c) => c.slotIndex === slotIndex);
  if (!channel) return;
  const isNewlyAmbiguous = (plan.value?.resolution.ambiguous ?? []).some((a) =>
    a.candidates.includes(channel.name),
  );
  if (isNewlyAmbiguous) openTargets(channel);
}

/** The channels this node carries — one per wired input, in slot order. */
const channels = computed<WirelessChannel[]>(() => {
  const id = String(hostNode()?.id);
  return (plan.value?.channels ?? []).filter((c) => String(c.nodeId) === id);
});

function receivers(channelName: string): number {
  return (plan.value?.resolution.links ?? []).filter((l) => l.channelName === channelName).length;
}

function redraw(): void {
  hostNode()?.graph?.setDirtyCanvas?.(true, true);
}

const modalOpen = ref(false);
const editing = shallowRef<WirelessChannel | null>(null);
const targets = shallowRef<ChannelTarget[]>([]);

function syncTargets(): void {
  const graph = hostNode()?.graph;
  if (!graph || !plan.value || !editing.value) {
    targets.value = [];
    return;
  }
  targets.value = channelTargets(graph, plan.value, editing.value);
}

function openTargets(channel: WirelessChannel): void {
  refresh();
  // Re-find by name: `refresh()` may have rebuilt the plan, and the row's
  // channel object would then belong to the previous one.
  editing.value = plan.value?.channels.find((c) => c.name === channel.name) ?? channel;
  syncTargets();
  modalOpen.value = true;
}

function toggleTarget(target: ChannelTarget): void {
  const graph = hostNode()?.graph;
  const node = graph?.getNodeById?.(target.nodeId);
  if (!graph || !node || !plan.value || !editing.value) return;

  setChannelTarget(plan.value, node, target.inputName, editing.value, !target.checked);
  refresh();
  editing.value = plan.value?.channels.find((c) => c.name === editing.value?.name) ?? editing.value;
  syncTargets();
  redraw();
}

/** The greyed-out rows explain themselves, rather than looking broken. */
function reason(target: ChannelTarget): string {
  switch (target.state) {
    case "wired":
      return t("channel_target_wired", "already wired");
    case "otherChannel":
      return `${t("channel_target_other", "on channel")} ${target.otherChannelName ?? ""}`.trim();
    case "selfLoop":
      return t("channel_target_self", "feeds this channel");
    default:
      return "";
  }
}

const emptyHint = computed(() =>
  t("channel_panel_empty", "Plug something in — every wired input becomes its own channel."),
);
const gearHint = computed(() => t("channel_panel_gear", "Choose where this channel goes"));
const noTargetsHint = computed(() =>
  t("channel_targets_none", "Nothing in the graph has a free input of this type."),
);
</script>

<template>
  <div class="fil-channel-panel">
    <p v-if="channels.length === 0" class="fil-channel-empty">{{ emptyHint }}</p>

    <div
      v-for="channel in channels"
      :key="`${channel.slotIndex}:${channel.name}`"
      class="fil-channel-row"
      :style="{ borderColor: channelColorSoft(channel.name, 0.55) }"
    >
      <span class="fil-channel-dot" :style="{ background: channelColor(channel.name) }" />
      <span class="fil-channel-name" :title="channel.name">{{ channel.name }}</span>
      <span class="fil-channel-count">{{ receivers(channel.name) }}</span>
      <button
        type="button"
        class="fil-channel-gear"
        :title="gearHint"
        :aria-label="gearHint"
        @click="openTargets(channel)"
      >
        <FilIcon name="gear" :size="14" />
      </button>
    </div>

    <FilModal
      v-model:open="modalOpen"
      :title="`${t('channel_targets_title', 'Channel goes to')} — ${editing?.name ?? ''}`"
      width="460px"
    >
      <p v-if="targets.length === 0" class="fil-channel-empty">{{ noTargetsHint }}</p>
      <ul v-else class="fil-channel-targets">
        <li v-for="target in targets" :key="`${target.nodeId}:${target.inputName}`" class="fil-channel-target">
          <span class="fil-channel-target-text">
            <span class="fil-channel-target-node">{{ target.title }}</span>
            <span class="fil-channel-target-input">{{ target.inputLabel }}</span>
          </span>
          <span v-if="target.disabled" class="fil-channel-target-reason">{{ reason(target) }}</span>
          <FilToggle
            v-else
            bare
            :model-value="target.checked ? 'ON' : 'OFF'"
            @update:model-value="toggleTarget(target)"
          />
        </li>
      </ul>
    </FilModal>
  </div>
</template>

<style scoped>
.fil-channel-panel {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 10px;
  width: 100%;
  box-sizing: border-box;
}

.fil-channel-empty {
  margin: 0;
  padding: 4px 2px;
  font-size: 11px;
  line-height: 1.35;
  color: var(--fil-muted);
}

.fil-channel-row {
  display: flex;
  align-items: center;
  gap: 8px;
  height: var(--fil-control-h);
  padding: 0 6px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: var(--fil-field-radius);
  background: var(--fil-surface-2);
}

.fil-channel-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.fil-channel-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: var(--fil-text);
}

/* How many inputs this channel currently feeds — the number that answers
   "did it actually go anywhere", which the original pack only ever answered
   in the browser console. */
.fil-channel-count {
  flex: 0 0 auto;
  min-width: 18px;
  text-align: center;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: var(--fil-muted);
}

.fil-channel-gear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: var(--fil-field-radius);
  background: transparent;
  color: var(--fil-muted);
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}

.fil-channel-gear:hover {
  background: var(--fil-surface-3);
  color: var(--fil-text);
}

.fil-channel-gear:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}

.fil-channel-targets {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 320px;
  overflow-y: auto;
}

.fil-channel-target {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 6px;
  border-radius: var(--fil-field-radius);
}

.fil-channel-target:hover {
  background: var(--fil-surface-2);
}

.fil-channel-target-text {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex: 1 1 auto;
  min-width: 0;
}

.fil-channel-target-node {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: var(--fil-text);
}

.fil-channel-target-input {
  flex: 0 0 auto;
  font-size: 11px;
  color: var(--fil-muted);
}

.fil-channel-target-reason {
  flex: 0 0 auto;
  font-size: 10px;
  color: var(--fil-muted);
  opacity: 0.8;
}
</style>
