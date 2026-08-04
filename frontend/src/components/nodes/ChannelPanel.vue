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
 * `wireless.md` for the incident that prompted adding it. What opens depends
 * on the ambiguity's shape: a whole same-type cluster on one node gets the
 * cluster modal (every input as a row, every channel as a chip, one confirm
 * for all of it, pre-selected from what the user confirmed before —
 * `wirelessMemory.ts`); a single input with rival channels keeps the target
 * list. Rule 8 (`resolve.ts`) settles name-pairable clusters before either
 * modal is needed, so both only appear when names did not already answer.
 *
 * A third question opens the moment a CONDITIONING wire lands, before either
 * of those: "positive or negative?" The sampler's two inputs are both bare
 * CONDITIONING and nothing downstream can tell them apart, so the one who
 * plugs the wire in is asked once, and the answer is written onto the slot
 * (`setUserSlotName`). Because that rides on the node, it serialises with the
 * workflow — reopen the file, or restart ComfyUI and open it, and the slot is
 * already named, so the question is asked once per wire, never once per
 * session. Naming the channel is also what lets rule 8 settle the cluster,
 * which is why this question runs ahead of the ambiguity ones — and why the
 * second of the canonical pair never asks at all: once the first answer
 * names one channel, exclusion (rule 8's leftover deduction) settles the
 * other wire's place, and a question whose answer is already implied is not
 * a question.
 *
 * `channel.ts` cannot call straight into this component for it: it is an async
 * component, so a wire drawn the instant the node exists can fire
 * `onConnectionsChange` before `onMounted` here has run — confirmed live, not
 * theoretical. `channel.ts` instead leaves a note on the plain node object
 * (`_filPendingAmbiguityChecks` for the where-to questions,
 * `_filPendingNamingChecks` for the positive/negative one), and `refresh()`
 * below drains them every time it runs — on mount, so a check made before this
 * component existed still lands, and on every poll after, as the fallback if
 * `onMounted` itself is what was too slow.
 */
import { computed, onMounted, onUnmounted, ref, shallowRef } from "vue";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";
import FilButton from "@/components/widgets/FilButton.vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import FilModal from "@/components/widgets/FilModal.vue";
import FilToggle from "@/components/widgets/FilToggle.vue";
import { noteChannelPairs, pairedInputFor, noteNamingAnswer, namingAnswerHint } from "@/stores/wirelessMemory";
import { useToastStore } from "@/stores/toastStore";
import {
  applySlotColors,
  applySlotNames,
  assignCluster,
  channelColor,
  channelColorSoft,
  channelTargets,
  invalidateWirelessPlan,
  isAutoLabel,
  isBlocked,
  livePlan,
  setChannelTarget,
  setUserSlotName,
  subscribedChannel,
  takeOverWiredInput,
  undoTakeOver,
  type AmbiguousEntry,
  type ChannelTarget,
  type TakeOverUndo,
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
  closeResolvedCluster();
  syncSlots(graph);
  drainPendingNamingChecks();
  drainPendingAmbiguityChecks();
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
  timer = window.setInterval(refresh, POLL_MS);
});
onUnmounted(() => {
  if (timer !== undefined) window.clearInterval(timer);
  if (props.state.ui.refresh === refresh) delete props.state.ui.refresh;
});

/**
 * Consume every slot `channel.ts` flagged since the last drain, and open the
 * target list for the first one that turns out ambiguous (rule 3 or rule 7).
 *
 * Called from inside `refresh()`, after `plan.value` is already current for
 * this tick — checking `resolution.ambiguous` here does not need its own
 * fresh resolve. Slots that were never ambiguous (the common case: the wire
 * just resolved cleanly, or rule 8 paired it by name) are consumed just the
 * same, so they are not re-checked on the next poll.
 *
 * Which modal opens depends on the shape of what is ambiguous. Two or more
 * same-type inputs colliding on one node (rule 7 — `positive`/`negative`) is
 * one decision about several inputs, so it gets the cluster modal, one screen
 * for all of them. Anything else — one input, several rival channels (rule
 * 3) — is a decision about one channel and keeps the channel's target list.
 */
function drainPendingAmbiguityChecks(): void {
  const node = hostNode() as (WirelessNode & { _filPendingAmbiguityChecks?: number[] }) | undefined;
  const pending = node?._filPendingAmbiguityChecks;
  if (!node || !pending?.length) return;
  // One question at a time: while the naming question is up, leave this queue
  // where it is — the refresh after it closes drains it. A name often settles
  // the ambiguity too (rule 8), so asking "where to" first would ask twice.
  if (namingOpen.value) return;
  node._filPendingAmbiguityChecks = [];

  const ambiguous = plan.value?.resolution.ambiguous ?? [];

  // One decision per node: a cluster is whatever same-type inputs on one node
  // are ambiguous together, whatever channel happens to be asking.
  const groups = new Map<string, AmbiguousEntry[]>();
  for (const entry of ambiguous) {
    const key = `${String(entry.node_id)}:${entry.type}`;
    const group = groups.get(key);
    if (group) group.push(entry);
    else groups.set(key, [entry]);
  }

  for (const slotIndex of pending) {
    const channel = channels.value.find((c) => c.slotIndex === slotIndex);
    if (!channel) continue;
    if (!ambiguous.some((a) => a.candidates.includes(channel.name))) continue;

    let cluster: AmbiguousEntry | undefined;
    for (const group of groups.values()) {
      if (group.length < 2) continue;
      const involves = group.find((a) => a.candidates.includes(channel.name));
      if (involves) {
        cluster = involves;
        break;
      }
    }

    if (cluster) openCluster(cluster.node_id, cluster.type);
    else openTargets(channel);
    break; // one modal at a time — any further pending slots stay resolvable via the gear
  }
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

const toasts = useToastStore();

/*
 * Inline rename — the pencil on a channel row. Naming is what powers rule 8's
 * pairing and the positive/negative question, yet the only way to name a
 * channel before this was LiteGraph's hidden "Rename Slot". Writing goes
 * through `setUserSlotName`, exactly like the naming question, so a rename is
 * the user's word (no receipt) and survives a reload via `fil_channel_names`.
 */
const renamingSlot = ref<number | null>(null);
const renameDraft = ref("");

const renameHint = computed(() => t("channel_rename_hint", "Rename this channel"));

function startRename(channel: WirelessChannel): void {
  renamingSlot.value = channel.slotIndex;
  renameDraft.value = channel.name;
}

function commitRename(): void {
  const node = hostNode();
  const slotIndex = renamingSlot.value;
  renamingSlot.value = null;
  if (!node || slotIndex == null) return;
  const slot = node.inputs?.[slotIndex];
  if (!slot) return;
  if (setUserSlotName(node, slot, renameDraft.value)) {
    invalidateWirelessPlan();
    refresh();
    redraw();
  }
}

function cancelRename(): void {
  renamingSlot.value = null;
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

/**
 * The "already wired" row's switch: the user's explicit choice to drop the
 * real wire and take this channel instead (`targets.ts` does the actual
 * swap). Rule 1 keeps automatics off a wired input — it does not bind the
 * user's own hand.
 */
function takeOver(target: ChannelTarget): void {
  const graph = hostNode()?.graph;
  const node = graph?.getNodeById?.(target.nodeId);
  if (!graph || !node || !editing.value) return;

  const undo = takeOverWiredInput(graph, node, target.inputName, editing.value);
  refresh();
  editing.value = plan.value?.channels.find((c) => c.name === editing.value?.name) ?? editing.value;
  syncTargets();
  redraw();

  // A takeover drops a wire the user drew, so give them a way back while the
  // toast lives. Undo re-connects the origin and removes the subscription.
  if (undo) offerTakeOverUndo(graph, node, undo);
}

function offerTakeOverUndo(graph: HostGraph, node: WirelessNode, undo: TakeOverUndo): void {
  toasts.success(t("channel_takeover_done", "Channel replaced the wire"), {
    action: {
      label: t("channel_takeover_undo", "Undo"),
      onClick: () => {
        undoTakeOver(graph, node, undo);
        refresh();
        syncTargets();
        redraw();
      },
    },
  });
}

const takeoverHint = computed(() =>
  t("channel_target_takeover", "Replace the real wire with this channel"),
);

/** The greyed-out rows explain themselves, rather than looking broken. */
function reason(target: ChannelTarget): string {
  switch (target.state) {
    case "otherChannel":
      return `${t("channel_target_other", "on channel")} ${target.otherChannelName ?? ""}`.trim();
    case "selfLoop":
      return t("channel_target_self", "feeds this channel");
    default:
      return "";
  }
}

/*
 * The cluster modal — one screen for one node's same-type inputs (rule 7's
 * `positive`/`negative` being the case that motivated it). The per-channel
 * target list asks "where does this channel go"; this one asks the paired
 * question "which channel goes to each of these inputs", and answers all of
 * it with one confirm.
 */

interface ClusterRow {
  inputName: string;
  inputLabel: string;
  /** The channel name currently picked for this input, if any. */
  chosen: string | null;
}

const clusterOpen = ref(false);
const clusterReceiver = shallowRef<WirelessNode | null>(null);
const clusterType = ref("");
const clusterRows = ref<ClusterRow[]>([]);

const clusterCandidates = computed<WirelessChannel[]>(() =>
  (plan.value?.channels ?? []).filter((c) => c.type === clusterType.value),
);

const clusterNodeName = computed(() => {
  const node = clusterReceiver.value;
  return node?.title?.trim() || node?.comfyClass || node?.type || "";
});

const clusterHasChoices = computed(() => clusterRows.value.some((row) => row.chosen));

/**
 * The modal exists to answer a question; when the graph stops asking it, the
 * modal goes away. Wiring the inputs one at a time is the live case: after
 * the first wire the pair cannot complete, so the modal rightly opens — and
 * after the second, rule 8 (or a hand-drawn wire, or a subscription) settles
 * the cluster, leaving the question stale. Without this, an answered question
 * stayed on screen until the user noticed and closed it by hand.
 */
function closeResolvedCluster(): void {
  if (!clusterOpen.value || !clusterReceiver.value) return;
  const nodeId = String(clusterReceiver.value.id);
  const type = clusterType.value;
  const stillAsked = (plan.value?.resolution.ambiguous ?? []).some(
    (entry) => String(entry.node_id) === nodeId && entry.type === type,
  );
  if (!stillAsked) clusterOpen.value = false;
}

function openCluster(nodeId: string | number, type: string): void {
  const graph = hostNode()?.graph;
  const receiver = graph?.getNodeById?.(nodeId);
  if (!receiver) return;

  clusterReceiver.value = receiver;
  clusterType.value = type;

  // The decision's rows: this node's inputs of the cluster type that are
  // still open. A real wire (rule 1) and a subscription (rule 2) have both
  // already settled what they settle; neither is this modal's to revisit.
  const rows: ClusterRow[] = [];
  for (const input of receiver.inputs ?? []) {
    if (!input || input.type !== type) continue;
    if (input.link != null) continue;
    if (subscribedChannel(receiver, input.name)) continue;
    rows.push({ inputName: input.name, inputLabel: input.label?.trim() || input.name, chosen: null });
  }

  // Pre-select what the user already confirmed once: a remembered pair whose
  // input is one of these rows and whose channel is still on offer. A
  // preference only — every row stays editable until the confirm below.
  const taken = new Set<string>();
  for (const channel of clusterCandidates.value) {
    const remembered = pairedInputFor(channel.name);
    if (!remembered) continue;
    const row = rows.find((r) => r.inputName === remembered && !r.chosen);
    if (!row || taken.has(channel.name)) continue;
    if (isBlocked(receiver, row.inputName, channel.name)) continue;
    if (String(channel.origin_id) === String(receiver.id)) continue;
    row.chosen = channel.name;
    taken.add(channel.name);
  }

  clusterRows.value = rows;
  clusterOpen.value = true;
}

function chooseClusterChannel(row: ClusterRow, channelName: string): void {
  // A channel lands on one input of the cluster: picking it here takes it
  // back wherever another row had it. Clicking the picked chip clears it.
  for (const other of clusterRows.value) {
    if (other !== row && other.chosen === channelName) other.chosen = null;
  }
  row.chosen = row.chosen === channelName ? null : channelName;
}

type ClusterOptionState = "chosen" | "taken" | "blocked" | "selfLoop" | "free";

function clusterOptionState(row: ClusterRow, channel: WirelessChannel): ClusterOptionState {
  const receiver = clusterReceiver.value;
  if (!receiver) return "free";
  if (row.chosen === channel.name) return "chosen";
  if (clusterRows.value.some((r) => r !== row && r.chosen === channel.name)) return "taken";
  if (isBlocked(receiver, row.inputName, channel.name)) return "blocked";
  if (String(channel.origin_id) === String(receiver.id)) return "selfLoop";
  return "free";
}

/** The disabled chips explain themselves, the way the target list's rows do. */
function clusterOptionReason(row: ClusterRow, channel: WirelessChannel): string {
  switch (clusterOptionState(row, channel)) {
    case "taken":
      return t("channel_cluster_taken", "already picked for another input");
    case "blocked":
      return t("channel_cluster_blocked", "excluded from this input");
    case "selfLoop":
      return t("channel_target_self", "feeds this channel");
    default:
      return "";
  }
}

function confirmCluster(): void {
  const receiver = clusterReceiver.value;
  if (!receiver) return;
  const assignments = clusterRows.value
    .filter((row): row is ClusterRow & { chosen: string } => row.chosen !== null)
    .map((row) => ({ inputName: row.inputName, channelName: row.chosen }));
  if (assignments.length === 0) return;

  assignCluster(receiver, assignments);
  // Remembered for the next cluster that asks the same question — never for
  // wiring anything on its own (`wirelessMemory.ts`).
  noteChannelPairs(assignments);

  clusterOpen.value = false;
  refresh();
  redraw();
}

/*
 * The naming question — asked the moment a CONDITIONING wire lands in one of
 * this node's own sockets: "positive or negative?" The sampler's two inputs
 * are both bare CONDITIONING, and nothing about the data itself says which is
 * which (rule 7), so the one who plugs the wire in is the only one who knows.
 * Asking *then* is what makes the answer cheap and certain — and writing it
 * onto the slot is what makes it asked only once.
 *
 * The answer goes through `setUserSlotName`, which is exactly core's "Rename
 * Slot": the label on the slot, and no receipt. That is load-bearing twice
 * over — the pack never overwrites it again, and it serialises with the
 * workflow, so reopening the file (or restarting ComfyUI and opening it) finds
 * the slot already named and never queues this question. `channel.ts`'s
 * `graphBeingConfigured` guard is the other half: a restored wire never
 * queues a check at all.
 */

const namingOpen = ref(false);
/** The transmitter slot the question is about; null while no question is up. */
const namingSlotIndex = ref<number | null>(null);
/** The answer to pre-highlight, remembered from the last time this was asked. */
const namingSuggested = ref<string | null>(null);

const namingHint = computed(() =>
  t(
    "channel_ask_hint",
    "Name it once — the answer is saved in the workflow and decides which sampler input the channel feeds.",
  ),
);

/** True while a slot's channel is called nothing but its type (numbered or not). */
function isTypeOnlyChannelName(channel: WirelessChannel): boolean {
  return channel.name === channel.type || channel.name.startsWith(`${channel.type} `);
}

function drainPendingNamingChecks(): void {
  const node = hostNode() as (WirelessNode & { _filPendingNamingChecks?: number[] }) | undefined;
  const pending = node?._filPendingNamingChecks;
  if (!node || !pending?.length) return;
  // While any question is up, leave the queue where it is — the refresh that
  // follows closing it drains this one. Consuming now would swallow the ask.
  if (namingOpen.value || clusterOpen.value || modalOpen.value) return;

  // One question at a time, and none at all when a name would change nothing:
  // slots are consumed one by one, whatever stays unasked goes back on the
  // queue for the refresh after this question is answered. That is also how
  // the leftover deduction keeps the second pos/neg wire click-free: the
  // answer to the first names it, exclusion settles the cluster, and the
  // second slot's check below simply finds nothing left to ask about.
  const remaining: number[] = [];
  for (let i = 0; i < pending.length; i++) {
    const slotIndex = pending[i];
    if (namingOpen.value) {
      remaining.push(slotIndex);
      continue;
    }
    const channel = channels.value.find((c) => c.slotIndex === slotIndex);
    if (!channel || channel.type !== "CONDITIONING") continue;

    const slot = node.inputs?.[slotIndex];
    if (!slot) continue;
    if (!isAutoLabel(node, slot)) continue; // already named — the once-only promise
    if (!isTypeOnlyChannelName(channel)) continue; // the origin already says what it is

    // Skip only a wire whose name would change nothing *and* is already put to
    // use: nothing stuck on it (no ambiguity mentions it) and it feeds at
    // least one input (a resolution link). That is the second pos/neg wire —
    // the first answer and exclusion already settled where it goes. An unused
    // channel still earns the question: with no receiver in the graph yet,
    // the name is exactly what a sampler added later will resolve by.
    const ambiguous = plan.value?.resolution.ambiguous ?? [];
    const isStuck = ambiguous.some((a) => a.candidates.includes(channel.name));
    const isFeeding = (plan.value?.resolution.links ?? []).some((l) => l.channelName === channel.name);
    if (!isStuck && isFeeding) continue;

    namingSlotIndex.value = slotIndex;
    namingSuggested.value = namingAnswerHint();
    namingOpen.value = true;
  }
  node._filPendingNamingChecks = remaining;
}

/**
 * Answer the question. `answer` is the name picked; null means "leave it
 * unnamed" (closing without choosing reads the same). Either way the question
 * is spent — it does not come back for this wire.
 */
function answerNaming(answer: string | null): void {
  const node = hostNode() as (WirelessNode & { _filPendingAmbiguityChecks?: number[] }) | undefined;
  const slotIndex = namingSlotIndex.value;
  namingOpen.value = false;
  namingSlotIndex.value = null;

  if (answer) noteNamingAnswer(answer);

  if (node && slotIndex != null && answer) {
    const slot = node.inputs?.[slotIndex];
    if (slot && setUserSlotName(node, slot, answer)) {
      // The name changed, so the plan — and anything rule 8 can now settle —
      // has to be recomputed before the next read.
      invalidateWirelessPlan();
    }
    // The ambiguity check this same wire queued is now stale: a name changes
    // what the wire can resolve, and a modal asking "where to" right after
    // "what is" would ask twice for one wire. Drop it. A skip keeps its
    // check — with no name, the where-to question still stands.
    if (node._filPendingAmbiguityChecks) {
      node._filPendingAmbiguityChecks = node._filPendingAmbiguityChecks.filter((s) => s !== slotIndex);
    }
  }
  refresh();
  redraw();
}

const emptyHint = computed(() =>
  t("channel_panel_empty", "Plug something in — every wired input becomes its own channel."),
);
const gearHint = computed(() => t("channel_panel_gear", "Choose where this channel goes"));
const noTargetsHint = computed(() =>
  t("channel_targets_none", "Nothing in the graph has a free input of this type."),
);
const clusterHint = computed(() =>
  t(
    "channel_cluster_hint",
    "Several inputs of one type on this node. Pick a channel for each — nothing is connected until you confirm.",
  ),
);
const clusterOkLabel = computed(() => t("channel_cluster_connect", "Connect"));
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
      <input
        v-if="renamingSlot === channel.slotIndex"
        v-model="renameDraft"
        class="fil-channel-rename"
        type="text"
        @keyup.enter="commitRename"
        @keyup.escape="cancelRename"
        @blur="commitRename"
      />
      <span v-else class="fil-channel-name" :title="channel.name">{{ channel.name }}</span>
      <span class="fil-channel-count">{{ receivers(channel.name) }}</span>
      <button
        v-if="renamingSlot !== channel.slotIndex"
        type="button"
        class="fil-channel-pencil"
        :title="renameHint"
        :aria-label="renameHint"
        @click="startRename(channel)"
      >
        <FilIcon name="pencil" :size="14" />
      </button>
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
          <FilToggle
            v-if="target.state === 'wired'"
            bare
            :title="takeoverHint"
            model-value="OFF"
            @update:model-value="takeOver(target)"
          />
          <span v-else-if="target.disabled" class="fil-channel-target-reason">{{ reason(target) }}</span>
          <FilToggle
            v-else
            bare
            :model-value="target.checked ? 'ON' : 'OFF'"
            @update:model-value="toggleTarget(target)"
          />
        </li>
      </ul>
    </FilModal>

    <FilModal
      v-model:open="clusterOpen"
      :title="`${t('channel_cluster_title', 'Where do the channels go?')} — ${clusterNodeName}`"
      width="460px"
    >
      <p class="fil-channel-empty">{{ clusterHint }}</p>
      <div class="fil-channel-cluster">
        <div v-for="row in clusterRows" :key="row.inputName" class="fil-channel-cluster-row">
          <span class="fil-channel-cluster-input" :title="row.inputName">{{ row.inputLabel }}</span>
          <div class="fil-channel-cluster-options">
            <button
              v-for="channel in clusterCandidates"
              :key="channel.name"
              type="button"
              class="fil-channel-chip"
              :class="{ 'is-chosen': clusterOptionState(row, channel) === 'chosen' }"
              :disabled="clusterOptionState(row, channel) !== 'free' && clusterOptionState(row, channel) !== 'chosen'"
              :title="clusterOptionReason(row, channel)"
              :style="{ borderColor: clusterOptionState(row, channel) === 'chosen' ? channelColor(channel.name) : undefined }"
              @click="chooseClusterChannel(row, channel.name)"
            >
              <span class="fil-channel-dot" :style="{ background: channelColor(channel.name) }" />
              <span class="fil-channel-chip-name">{{ channel.name }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="fil-channel-cluster-footer">
        <FilButton variant="accent" :label="clusterOkLabel" :disabled="!clusterHasChoices" @click="confirmCluster" />
      </div>
    </FilModal>

    <FilModal
      v-model:open="namingOpen"
      :title="t('channel_ask_title', 'Positive or negative?')"
      width="380px"
      @close="namingSlotIndex = null"
    >
      <p class="fil-channel-empty">{{ namingHint }}</p>
      <div class="fil-channel-naming-actions">
        <FilButton
          variant="accent"
          :class="{ 'is-suggested': namingSuggested === 'positive' }"
          :label="t('channel_ask_positive', 'Positive')"
          @click="answerNaming('positive')"
        />
        <FilButton
          variant="danger"
          :class="{ 'is-suggested': namingSuggested === 'negative' }"
          :label="t('channel_ask_negative', 'Negative')"
          @click="answerNaming('negative')"
        />
        <FilButton :label="t('channel_ask_skip', 'Leave unnamed')" @click="answerNaming(null)" />
      </div>
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

.fil-channel-gear,
.fil-channel-pencil {
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

.fil-channel-gear:hover,
.fil-channel-pencil:hover {
  background: var(--fil-surface-3);
  color: var(--fil-text);
}

.fil-channel-gear:focus-visible,
.fil-channel-pencil:focus-visible {
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

.fil-channel-cluster {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.fil-channel-cluster-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  border-radius: var(--fil-field-radius);
  background: var(--fil-surface-2);
}

.fil-channel-cluster-input {
  font-size: 12px;
  font-weight: 600;
  color: var(--fil-text);
}

.fil-channel-cluster-options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.fil-channel-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 4px 8px;
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  background: var(--fil-surface-1);
  color: var(--fil-text);
  font-size: 11px;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, opacity 0.12s;
}

.fil-channel-chip:hover:not(:disabled) {
  background: var(--fil-surface-3);
}

.fil-channel-chip.is-chosen {
  background: var(--fil-surface-3);
}

.fil-channel-chip:disabled {
  cursor: default;
  opacity: 0.45;
}

.fil-channel-chip:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}

.fil-channel-chip-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fil-channel-cluster-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
}

.fil-channel-naming-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

/* The remembered answer, pre-highlighted in the naming question. A ring, not a
   pressed state — the user still has to click it. */
.fil-channel-naming-actions .is-suggested {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}

.fil-channel-rename {
  flex: 1 1 auto;
  min-width: 0;
  box-sizing: border-box;
  padding: 2px 6px;
  border: 1px solid var(--fil-accent);
  border-radius: var(--fil-field-radius);
  background: var(--fil-surface-1);
  color: var(--fil-text);
  font-size: 12px;
  outline: none;
}
</style>
