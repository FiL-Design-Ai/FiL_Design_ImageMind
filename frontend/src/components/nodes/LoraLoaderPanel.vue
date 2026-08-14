<script setup lang="ts">
/**
 * FiLLoraLoader — Cyberpunk HUD panel for dynamic LoRA stack management with sliders.
 * Cleaned up: removed presets and advanced settings per user request.
 */
import { computed, ref, onMounted, watch } from "vue";
import {
  FilButton,
  FilComboBox,
  type FilComboOption,
  FilModal,
  FilSelect,
  FilSlider,
  FilToggle,
} from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { getJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";

interface LoraItem {
  id: string;
  name: string;
  enabled: boolean;
  sm: number;
  sc: number;
  /**
   * Show the two weights apart. Panel state only — the saved line already says
   * it by carrying two different numbers, so nothing extra is written out.
   * Model and CLIP strength are equal on almost every LoRA, and showing both
   * cost each row a second label, slider and stepper for a number the user
   * never touched.
   */
  split?: boolean;
  autoOpen?: boolean;
}

interface LoraInfoDetail {
  index: number;
  fullName: string;
  cleanName: string;
  subfolder: string;
  extension: string;
  size_str?: string;
  mtime_str?: string;
  arch?: string;
  precision?: string;
  model_title?: string;
  base_model?: string;
  creator?: string;
  download_count?: number;
  thumbs_up?: number;
  trigger_words?: string;
  sample_prompts?: string[];
  isLoading?: boolean;
}

const props = defineProps<{ state: FilNodeState }>();

function createRef<T>(name: string, defaultValue: T) {
  return computed<T>({
    get: () => (props.state.nodeState[name] as T) ?? defaultValue,
    set: (val: T) => {
      props.state.nodeState[name] = val;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = val;
    },
  });
}

const globalSm = createRef<number>("strength_model", 1.0);
const globalSc = createRef<number>("strength_clip", 1.0);

const installedLoras = ref<string[]>([]);
const loraItems = ref<LoraItem[]>([]);
const searchFilter = ref("");
const draggedIndex = ref<number | null>(null);
const dragOverIndex = ref<number | null>(null);

const infoModalOpen = ref(false);
const activeInfoDetail = ref<LoraInfoDetail | null>(null);
const copySuccessMsg = ref("");

const comboOptions = computed<FilComboOption[]>(() =>
  installedLoras.value.map((m) => ({ value: m, label: m }))
);

const filteredLoraItems = computed(() => {
  const q = searchFilter.value.trim().toLowerCase();
  if (!q) return loraItems.value.map((item, originalIndex) => ({ item, originalIndex }));
  return loraItems.value
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => item.name.toLowerCase().includes(q));
});



function parseLoraList(raw: string): LoraItem[] {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return lines.map((line, idx) => {
    const isEnabled = !line.startsWith("#");
    let clean = line.replace(/^#\s*/, "");
    const parts = clean.split(":");
    const name = parts[0].trim();
    let sm = globalSm.value;
    let sc = globalSc.value;

    if (parts.length >= 2) {
      const parsedSm = float(parts[1]);
      if (!isNaN(parsedSm)) {
        sm = parsedSm;
        sc = parsedSm;
      }
    }
    if (parts.length >= 3) {
      const parsedSc = float(parts[2]);
      if (!isNaN(parsedSc)) {
        sc = parsedSc;
      }
    }

    return {
      id: `item_${idx}_${Date.now()}`,
      name,
      enabled: isEnabled,
      sm,
      sc,
      // A row saved with two different numbers opens showing both, so the
      // second one is never hidden behind a control the user has to find.
      split: sm !== sc,
    };
  });
}

function float(val: string): number {
  const n = parseFloat(val);
  return isNaN(n) ? 1.0 : n;
}

function syncToNodeState() {
  const serialized = loraItems.value
    .filter((item) => item.name.trim())
    .map((item) => {
      const entry = `${item.name}:${item.sm.toFixed(2)}:${item.sc.toFixed(2)}`;
      return item.enabled ? entry : `# ${entry}`;
    })
    .join("\n");
  props.state.nodeState["lora_list"] = serialized;
  const w = props.state.node ? findFilWidget(props.state.node, "lora_list") : null;
  if (w) w.value = serialized;
}

const loraMetaMap = ref<Record<string, { trigger_words?: string }>>({});

function isLoraMissing(name: string): boolean {
  if (!name || !name.trim() || installedLoras.value.length === 0) return false;
  return !installedLoras.value.includes(name.trim());
}

async function fetchLoraMetaIfNeeded(name: string) {
  const clean = name.trim();
  if (!clean || loraMetaMap.value[clean]) return;
  try {
    const meta = await getJson<{ trigger_words?: string }>(
      `${ROUTE_PREFIX}/model_info/loras?path=${encodeURIComponent(clean)}`
    );
    loraMetaMap.value[clean] = { trigger_words: meta?.trigger_words || "" };
  } catch {
    // Remember the miss too. The watcher below re-runs on every slider drag,
    // and an unrecorded name is asked again each time — one failing lookup
    // turned into a request per frame.
    loraMetaMap.value[clean] = { trigger_words: "" };
  }
}

watch(
  loraItems,
  (items: LoraItem[]) => {
    for (const item of items) {
      if (item.name && !loraMetaMap.value[item.name]) {
        fetchLoraMetaIfNeeded(item.name);
      }
    }
  },
  { immediate: true, deep: true }
);

const isRefreshingLoras = ref(false);

/**
 * Re-read the LoRA folder. The list is cached by ComfyUI and by us, which is
 * what makes opening a panel cheap — but a LoRA downloaded while the tab was
 * open would otherwise not appear until a reload.
 */
async function refreshLoraList() {
  isRefreshingLoras.value = true;
  // Both caches, or the trigger words stay at whatever the first lookup said.
  // Clearing the map alone would not bring them back: the watcher that fetches
  // them runs on the items, and those have not changed.
  loraMetaMap.value = {};
  await loadInstalledLoras();
  for (const item of loraItems.value) {
    if (item.name.trim()) fetchLoraMetaIfNeeded(item.name);
  }
  setTimeout(() => {
    isRefreshingLoras.value = false;
  }, 500);
}

async function loadInstalledLoras() {
  try {
    const res = await getJson<{ models: string[] }>(`${ROUTE_PREFIX}/models_list/loras`);
    if (res?.models) {
      installedLoras.value = res.models;
    }
  } catch {
    installedLoras.value = [];
  }
}

onMounted(() => {
  const rawList = String(props.state.nodeState["lora_list"] ?? "");
  if (rawList) {
    loraItems.value = parseLoraList(rawList);
  }
  loadInstalledLoras();
});

function resetAllWeights() {
  for (const item of loraItems.value) {
    item.sm = 1.0;
    item.sc = 1.0;
  }
  syncToNodeState();
}

function copyAllActiveTriggers() {
  const activeTriggers: string[] = [];
  for (const item of loraItems.value) {
    if (item.enabled && item.name.trim()) {
      const meta = loraMetaMap.value[item.name.trim()];
      if (meta?.trigger_words && meta.trigger_words.trim()) {
        activeTriggers.push(meta.trigger_words.trim());
      }
    }
  }
  if (activeTriggers.length > 0) {
    const combined = activeTriggers.join(", ");
    copyToClipboard(combined, `${activeTriggers.length} Active Triggers`);
  } else {
    copySuccessMsg.value = "No active trigger words found";
    setTimeout(() => (copySuccessMsg.value = ""), 2500);
  }
}

function addLoraItem() {
  loraItems.value.push({
    id: `item_${Date.now()}_${Math.random()}`,
    name: "",
    enabled: true,
    sm: globalSm.value,
    sc: globalSc.value,
    split: globalSm.value !== globalSc.value,
    autoOpen: true,
  });
  syncToNodeState();
}

function removeLoraItem(index: number) {
  loraItems.value.splice(index, 1);
  syncToNodeState();
}

async function openInfoModal(item: LoraItem, index: number) {
  const name = item.name.trim();
  const normalized = name.replace(/\\/g, "/");
  const parts = normalized.split("/");
  const baseName = parts[parts.length - 1] || "";
  const subfolder = parts.length > 1 ? parts.slice(0, -1).join("/") : "(root)";
  
  let cleanName = baseName;
  let ext = "";
  const extIdx = baseName.lastIndexOf(".");
  if (extIdx !== -1) {
    cleanName = baseName.substring(0, extIdx);
    ext = baseName.substring(extIdx);
  }

  activeInfoDetail.value = {
    index: index + 1,
    fullName: name,
    cleanName,
    subfolder,
    extension: ext || "(none)",
    isLoading: true,
  };
  infoModalOpen.value = true;
  copySuccessMsg.value = "";

  try {
    const res = await getJson<Partial<LoraInfoDetail> & { error?: string; trigger_words?: string }>(
      // `fetch=1` only here: the dialog is the user asking about this one
      // model, so it may go out to Civitai. The per-row lookup below must not.
      `${ROUTE_PREFIX}/model_info?mode=loras&fetch=1&path=${encodeURIComponent(name)}`
    );
    if (res && !res.error && activeInfoDetail.value && activeInfoDetail.value.fullName === name) {
      const tw = (res as Record<string, unknown>).trained_words;
      const twStr = Array.isArray(tw) && tw.length > 0
        ? (tw as string[]).join(", ")
        : (res.trigger_words || "");
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: res.size_str || "N/A",
        mtime_str: res.mtime_str || "N/A",
        arch: res.arch || "LoRA Adapter",
        precision: res.precision || "FP16",
        model_title: res.model_title || "",
        base_model: res.base_model || "",
        creator: res.creator || "",
        download_count: res.download_count || 0,
        thumbs_up: res.thumbs_up || 0,
        trigger_words: twStr,
        sample_prompts: res.sample_prompts || [],
        isLoading: false,
      };
    } else if (activeInfoDetail.value) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: "N/A",
        mtime_str: "N/A",
        isLoading: false,
      };
    }
  } catch {
    if (activeInfoDetail.value) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: "N/A",
        mtime_str: "N/A",
        isLoading: false,
      };
    }
  }
}

function copyToClipboard(text: string, label: string) {
  if (!text) return;
  navigator.clipboard.writeText(text);
  copySuccessMsg.value = `Copied ${label} to clipboard!`;
  setTimeout(() => {
    copySuccessMsg.value = "";
  }, 2500);
}

const selectedSort = ref("🔤 Name (A-Z)");

const sortOptions = [
  "🔤 Name (A-Z)",
  "🔠 Name (Z-A)",
  "⚡ Active ON First",
];

function applyLoraSorting(label: string) {
  if (!label || loraItems.value.length === 0) return;
  selectedSort.value = label;
  
  if (label.includes("Z-A")) {
    loraItems.value.sort((a, b) => b.name.localeCompare(a.name));
  } else if (label.includes("Active")) {
    loraItems.value.sort((a, b) => (a.enabled === b.enabled ? 0 : a.enabled ? -1 : 1));
  } else {
    loraItems.value.sort((a, b) => a.name.localeCompare(b.name));
  }
  syncToNodeState();
}

function onDragStart(index: number, e: DragEvent) {
  if (searchFilter.value) return;
  draggedIndex.value = index;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  }
}

function onDragOver(index: number, e: DragEvent) {
  if (searchFilter.value) return;
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  dragOverIndex.value = index;
}

function onDragLeave(index: number) {
  if (dragOverIndex.value === index) {
    dragOverIndex.value = null;
  }
}

function onDrop(targetIndex: number, e: DragEvent) {
  e.preventDefault();
  dragOverIndex.value = null;
  if (searchFilter.value) return;
  const fromIndex =
    draggedIndex.value !== null
      ? draggedIndex.value
      : Number(e.dataTransfer?.getData("text/plain"));
  if (
    isNaN(fromIndex) ||
    fromIndex === targetIndex ||
    fromIndex < 0 ||
    fromIndex >= loraItems.value.length
  ) {
    draggedIndex.value = null;
    return;
  }
  const item = loraItems.value.splice(fromIndex, 1)[0];
  loraItems.value.splice(targetIndex, 0, item);
  draggedIndex.value = null;
  syncToNodeState();
}

function onDragEnd() {
  draggedIndex.value = null;
  dragOverIndex.value = null;
}

/**
 * The rarely-used bulk actions, behind one button.
 *
 * Six controls sat in the toolbar and four fit across a node this wide: "All
 * OFF" was cut in half and "Clear" was off the edge entirely, unreachable
 * without resizing the node.
 */
const menuOpen = ref(false);

function runFromMenu(action: () => void) {
  action();
  menuOpen.value = false;
}

function toggleAll(enable: boolean) {
  loraItems.value.forEach((item) => {
    item.enabled = enable;
  });
  syncToNodeState();
}

function clearAllItems() {
  loraItems.value = [];
  syncToNodeState();
}

function updateItemName(index: number, name: string) {
  if (loraItems.value[index]) {
    loraItems.value[index].name = name;
    syncToNodeState();
  }
}

function updateItemSm(index: number, val: number) {
  if (loraItems.value[index]) {
    loraItems.value[index].sm = val;
    syncToNodeState();
  }
}

/** The single weight: moves both, which is what the two sliders almost always held. */
function updateItemWeight(index: number, val: number) {
  const item = loraItems.value[index];
  if (!item) return;
  item.sm = val;
  item.sc = val;
  syncToNodeState();
}

function toggleItemSplit(index: number) {
  const item = loraItems.value[index];
  if (!item) return;
  item.split = !item.split;
  // Coming back to one weight has to leave one number behind, or the row
  // would keep applying a CLIP strength no longer shown anywhere.
  if (!item.split) {
    item.sc = item.sm;
    syncToNodeState();
  }
}

/** The slider a row always shows: one weight, or Model when they are apart. */
function updateItemPrimary(index: number, val: number) {
  const item = loraItems.value[index];
  if (!item) return;
  if (item.split) updateItemSm(index, val);
  else updateItemWeight(index, val);
}

function updateItemSc(index: number, val: number) {
  if (loraItems.value[index]) {
    loraItems.value[index].sc = val;
    syncToNodeState();
  }
}

function toggleItemEnabled(index: number, enabled: boolean) {
  if (loraItems.value[index]) {
    loraItems.value[index].enabled = enabled;
    syncToNodeState();
  }
}

// Stepping, parsing and formatting the weight are `FilNumberInput`'s job now —
// it is the same field the rest of the pack uses, down to the drag-to-scrub and
// the `1+0.05` arithmetic, none of which the hand-rolled stepper had.

function onComboClose(index: number) {
  const item = loraItems.value[index];
  if (item && !item.name.trim()) {
    removeLoraItem(index);
  }
}
</script>

<template>
  <div class="fil-cycler-root">

    <!-- Action Toolbar (Bulk operations & Sort) -->
    <div class="fil-cycler-actions-bar">
      <div class="fil-sort-select-wrap">
        <FilSelect
          :model-value="selectedSort"
          :options="sortOptions"
          @update:model-value="applyLoraSorting"
        />
      </div>
      <div class="fil-actions-right-group">
        <button class="fil-action-link highlight" title="Copy all trigger words of active LoRAs to clipboard" @click="copyAllActiveTriggers">⚡ Copy Triggers</button>
        <button
          class="fil-refresh-loras-btn"
          :class="{ spinning: isRefreshingLoras }"
          title="🔄 Re-read the LoRA folder from disk"
          aria-label="Refresh the LoRA list"
          @mousedown.stop
          @click.stop="refreshLoraList"
        >
          🔄
        </button>
        <button
          class="fil-action-link fil-actions-more"
          :class="{ open: menuOpen }"
          title="More actions"
          aria-label="More actions"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          •••
        </button>
      </div>
    </div>

    <!-- The rest of the bulk actions. Laid out in flow rather than floating:
         a popover over a node gets clipped by the canvas, and this cannot. -->
    <div v-if="menuOpen" class="fil-actions-menu">
      <button class="fil-action-link highlight" title="Reset all LoRA weights to 1.00" @click="runFromMenu(resetAllWeights)">🔄 1.00 All</button>
      <button class="fil-action-link" @click="runFromMenu(() => toggleAll(true))">All ON</button>
      <button class="fil-action-link" @click="runFromMenu(() => toggleAll(false))">All OFF</button>
      <button class="fil-action-link danger" @click="runFromMenu(clearAllItems)">Clear</button>
    </div>

    <!-- Search Stack Filter Input -->
    <div class="fil-cycler-search-bar">
      <input
        v-model="searchFilter"
        type="search"
        class="fil-stack-search-input"
        placeholder="🔍 Filter LoRA list..."
        spellcheck="false"
        @keydown.stop
      />
    </div>

    <!-- Dynamic LoRAs Stack List -->
    <TransitionGroup name="fil-stack-list" tag="div" class="fil-cycler-stack" @wheel.stop>
      <div v-if="loraItems.length === 0" key="empty" class="fil-cycler-empty">
        <span>No LoRAs in stack — click <b>+ Add LoRA</b> to build your stack.</span>
      </div>

      <div
        v-for="{ item, originalIndex } in filteredLoraItems"
        :key="item.id"
        class="fil-lora-row"
        :class="{
          disabled: !item.enabled,
          isDragging: draggedIndex === originalIndex,
          isDragOver: dragOverIndex === originalIndex,
          dragOverAbove: dragOverIndex === originalIndex && draggedIndex !== null && originalIndex < draggedIndex,
          dragOverBelow: dragOverIndex === originalIndex && draggedIndex !== null && originalIndex > draggedIndex
        }"
        @dragover="onDragOver(originalIndex, $event)"
        @dragleave="onDragLeave(originalIndex)"
        @drop="onDrop(originalIndex, $event)"
        @dragend="onDragEnd"
      >
        <!-- Top Row: Grip, Info, Copy Triggers, Missing Badge, Combo, Toggle, Remove -->
        <div class="fil-lora-top-row">
          <div
            class="fil-drag-handle"
            title="Drag handle to reorder item"
            :draggable="!searchFilter"
            @dragstart="onDragStart(originalIndex, $event)"
          >
            ⋮⋮
          </div>

          <button
            class="fil-row-info-btn"
            title="LoRA Information"
            @mousedown.stop
            @click.stop="openInfoModal(item, originalIndex)"
          >
            ⓘ
          </button>

          <!-- No per-row copy button. The same words were reachable from three
               places at once — this one, the ⓘ dialog, and "Copy Triggers" in
               the toolbar — and this was the one that cost every row a control. -->

          <!-- Missing file warning badge -->
          <span
            v-if="isLoraMissing(item.name)"
            class="fil-missing-badge"
            title="⚠️ Warning: LoRA file is missing from disk!"
          >
            ⚠️
          </span>

          <div class="fil-cycler-select-wrap">
            <FilComboBox
              :model-value="item.name"
              :options="comboOptions"
              :searchable="true"
              :auto-open="item.autoOpen"
              preview-mode="loras"
              placeholder="Select LoRA..."
              @close="onComboClose(originalIndex)"
              @update:model-value="(val) => updateItemName(originalIndex, val)"
            />
          </div>

          <FilToggle
            :model-value="item.enabled ? 'ON' : 'OFF'"
            bare
            @update:model-value="(v) => toggleItemEnabled(originalIndex, v === 'ON')"
          />

          <button
            class="fil-cycler-remove-btn"
            title="Remove LoRA"
            @click="removeLoraItem(originalIndex)"
          >
            ✕
          </button>
        </div>

        <!-- Weight. One slider; the CLIP one appears only when asked for. -->
        <div
          v-if="item.enabled && item.name.trim()"
          class="fil-lora-weights"
          @mousedown.stop
          @pointerdown.stop
        >
          <div class="fil-weight-row">
            <FilSlider
              class="fil-weight-field"
              :model-value="item.sm"
              :min="-3"
              :max="3"
              :step="0.05"
              :label="item.split ? 'Model' : 'Strength'"
              inline-label
              :title="item.split ? 'Model strength' : 'Strength applied to both Model and CLIP'"
              @update:model-value="(v: number) => updateItemPrimary(originalIndex, v)"
            />
            <button
              class="fil-split-btn"
              :class="{ active: item.split }"
              :title="item.split ? 'Give CLIP the same strength as Model again' : 'Set CLIP strength separately'"
              :aria-pressed="Boolean(item.split)"
              @mousedown.stop
              @click.stop="toggleItemSplit(originalIndex)"
            >
              CLIP
            </button>
          </div>

          <div v-if="item.split" class="fil-weight-row">
            <FilSlider
              class="fil-weight-field"
              :model-value="item.sc"
              :min="-3"
              :max="3"
              :step="0.05"
              label="CLIP"
              inline-label
              title="CLIP strength"
              @update:model-value="(v: number) => updateItemSc(originalIndex, v)"
            />
            <span class="fil-split-btn-spacer" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- Action Buttons Group -->
    <div class="fil-cycler-btn-group">
      <FilButton
        variant="accent"
        label="+ Add LoRA"
        class="fil-cycler-add-btn"
        @click="addLoraItem"
      />
    </div>

    <!-- LoRA Info Modal -->
    <FilModal
      v-model:open="infoModalOpen"
      :title="`LoRA Info — ${activeInfoDetail?.cleanName || 'Details'}`"
      width="520px"
    >
      <div v-if="activeInfoDetail" class="fil-info-modal-content">
        <div v-if="copySuccessMsg" class="fil-copy-toast">
          {{ copySuccessMsg }}
        </div>

        <!-- Thumbnail Cover Preview -->
        <div class="fil-info-preview-wrap">
          <img
            :src="`${ROUTE_PREFIX}/model_preview?mode=loras&path=${encodeURIComponent(activeInfoDetail.fullName)}`"
            class="fil-info-preview-img"
            alt="LoRA Preview Thumbnail"
            @error="(e) => ((e.target as HTMLElement).style.display = 'none')"
          />
        </div>

        <div class="fil-info-grid">
          <div class="fil-info-card">
            <span class="fil-info-card-label">Stack Index</span>
            <span class="fil-info-card-val">#{{ activeInfoDetail.index }} of {{ loraItems.length }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Architecture / Base</span>
            <span class="fil-info-card-val highlight">{{ activeInfoDetail.base_model || activeInfoDetail.arch || 'LoRA Adapter' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">File Size</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.size_str || 'Reading...' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Precision</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.precision || 'FP16' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Modified Date</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.mtime_str || 'N/A' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Author & Stats</span>
            <span class="fil-info-card-val">
              {{ activeInfoDetail.creator || 'Civitai Community' }}
              <template v-if="activeInfoDetail.download_count"> (📥 {{ activeInfoDetail.download_count }})</template>
            </span>
          </div>
        </div>

        <div v-if="activeInfoDetail.trigger_words" class="fil-info-field full">
          <div class="fil-info-header-row">
            <span class="fil-info-label">Trigger Words:</span>
            <button
              class="fil-copy-mini-btn"
              @click="copyToClipboard(activeInfoDetail.trigger_words || '', 'Trigger Words')"
            >
              📋 Copy All
            </button>
          </div>
          <code class="fil-info-code highlight-code">{{ activeInfoDetail.trigger_words }}</code>
        </div>

        <div v-if="activeInfoDetail.sample_prompts && activeInfoDetail.sample_prompts.length > 0" class="fil-info-field full">
          <span class="fil-info-label">Sample Prompts (Civitai):</span>
          <div v-for="(pmt, idx) in activeInfoDetail.sample_prompts" :key="idx" class="fil-sample-prompt-item">
            <code class="fil-info-code flex-code">{{ pmt }}</code>
            <button
              class="fil-copy-mini-btn"
              @click="copyToClipboard(pmt, `Sample Prompt #${idx + 1}`)"
            >
              📋 Copy
            </button>
          </div>
        </div>

        <div class="fil-info-field full">
          <span class="fil-info-label">Full Relative Path:</span>
          <code class="fil-info-code">{{ activeInfoDetail.fullName }}</code>
        </div>
      </div>
    </FilModal>
  </div>
</template>

<style scoped>
.fil-cycler-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px 6px;
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-cycler-header-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 8px;
  background: var(--fil-surface-2, #27272a);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
}

.fil-header-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--fil-accent, #a855f7);
  letter-spacing: 0.3px;
}

.fil-header-counter {
  font-family: monospace;
  font-size: 10px;
  color: var(--fil-accent-text, #c084fc);
  background: color-mix(in srgb, var(--fil-accent) 15%, transparent);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--fil-accent) 30%, transparent);
}

.fil-cycler-actions-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  padding: 1px 0;
  width: 100%;
  flex-wrap: nowrap;
}

.fil-sort-select-wrap {
  width: 96px;
  min-width: 85px;
  flex: 0 0 96px;
}

.fil-sort-select-wrap :deep(.fil-w-select) {
  display: flex;
  width: 100%;
}

.fil-sort-select-wrap :deep(.fil-w-select-input) {
  flex: 1;
  width: 100%;
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  box-sizing: border-box;
  padding: 0 3px;
  font-size: 9px;
  font-weight: 600;
  border-color: color-mix(in srgb, var(--fil-accent) 40%, transparent);
  color: var(--fil-accent-text, #c084fc);
  background: var(--fil-surface-2, #27272a);
  border-radius: 4px;
  text-align: left;
  text-align-last: left;
  line-height: 18px;
}

.fil-actions-right-group {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  flex-wrap: nowrap;
}

.fil-action-link {
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  box-sizing: border-box;
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-accent) 35%, transparent);
  color: var(--fil-accent-text, #c084fc);
  cursor: pointer;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  line-height: 18px;
  white-space: nowrap;
  flex-shrink: 0;
}

.fil-action-link:hover {
  background: color-mix(in srgb, var(--fil-accent) 25%, transparent);
  border-color: var(--fil-accent, #a855f7);
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-accent) 40%, transparent);
}

.fil-action-link.danger {
  border-color: color-mix(in srgb, var(--fil-danger) 40%, transparent);
  color: var(--fil-danger, #ef4444);
}

.fil-action-link.danger:hover {
  background: color-mix(in srgb, var(--fil-danger) 25%, transparent);
  border-color: var(--fil-danger, #ef4444);
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-danger) 40%, transparent);
}

.fil-cycler-search-bar {
  width: 100%;
}

.fil-stack-search-input {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  background: var(--fil-inset);
  border: 1px solid var(--fil-border);
  border-radius: 5px;
  color: var(--fil-text);
  font-size: 11px;
  outline: none;
}

.fil-stack-search-input:focus {
  border-color: var(--fil-accent, #a855f7);
}

.fil-cycler-stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  min-height: 48px;
  position: relative;
}

.fil-cycler-empty {
  border: 1px dashed var(--fil-border);
  border-radius: 6px;
  padding: 12px 8px;
  text-align: center;
  color: var(--fil-muted);
  font-size: 11px;
  line-height: 1.4;
  background: var(--fil-inset);
}

.fil-stack-list-move,
.fil-stack-list-enter-active,
.fil-stack-list-leave-active {
  transition: all 0.2s ease;
}

.fil-stack-list-enter-from,
.fil-stack-list-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fil-stack-list-leave-active {
  position: absolute;
  width: 100%;
}

.fil-lora-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 6px 8px;
  position: relative;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
              box-shadow 0.2s ease,
              border-color 0.2s ease,
              opacity 0.2s ease;
}

.fil-lora-row.disabled {
  opacity: 0.5;
}

.fil-lora-row.isDragging {
  opacity: 0.45;
  transform: scale(0.98) translateY(-2px);
  border: 1.5px dashed var(--fil-accent, #a855f7);
  background: color-mix(in srgb, var(--fil-accent) 15%, var(--fil-surface-1));
  box-shadow: 0 8px 20px color-mix(in srgb, var(--fil-accent) 35%, transparent);
}

.fil-lora-row.isDragOver {
  border-color: var(--fil-accent, #00f0ff);
  box-shadow: 0 0 14px color-mix(in srgb, var(--fil-accent, #00f0ff) 60%, transparent);
}

.fil-lora-row.dragOverAbove::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 4px;
  right: 4px;
  height: 3px;
  background: var(--fil-accent, #00f0ff);
  border-radius: 999px;
  box-shadow: 0 0 10px var(--fil-accent, #00f0ff), 0 0 20px var(--fil-accent, #00f0ff);
  animation: pulseSnapLine 0.6s infinite alternate;
  z-index: 20;
}

.fil-lora-row.dragOverBelow::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 4px;
  right: 4px;
  height: 3px;
  background: var(--fil-accent, #00f0ff);
  border-radius: 999px;
  box-shadow: 0 0 10px var(--fil-accent, #00f0ff), 0 0 20px var(--fil-accent, #00f0ff);
  animation: pulseSnapLine 0.6s infinite alternate;
  z-index: 20;
}

@keyframes pulseSnapLine {
  from { opacity: 0.6; box-shadow: 0 0 4px var(--fil-accent, #00f0ff); }
  to { opacity: 1; box-shadow: 0 0 12px var(--fil-accent, #00f0ff); }
}

.fil-lora-top-row {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.fil-drag-handle {
  cursor: grab;
  color: var(--fil-muted);
  font-size: 13px;
  letter-spacing: -1px;
  padding: 2px 4px;
  border-radius: 4px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.15s ease-in-out;
}

.fil-drag-handle:hover {
  opacity: 1;
  color: var(--fil-accent, #00f0ff);
  background: color-mix(in srgb, var(--fil-accent) 20%, transparent);
  transform: scale(1.25);
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-accent) 40%, transparent);
}

.fil-drag-handle:active {
  cursor: grabbing;
  transform: scale(1.1);
  color: var(--fil-accent, #a855f7);
}

.fil-row-info-btn {
  background: transparent;
  border: none;
  color: var(--fil-muted);
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 3px;
  transition: color 0.1s, background 0.1s;
}

.fil-row-info-btn:hover {
  color: var(--fil-accent, #a855f7);
  background: var(--fil-surface-2);
}

.fil-missing-badge {
  font-size: 11px;
  cursor: help;
  user-select: none;
  animation: fil-pulse-warning 1.5s infinite alternate;
}
@keyframes fil-pulse-warning {
  from { opacity: 0.6; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1.15); }
}

.fil-cycler-select-wrap {
  flex: 1;
  min-width: 0;
  width: 100%;
}

.fil-cycler-select-wrap :deep(.fil-combo) {
  width: 100%;
}

.fil-cycler-select-wrap :deep(.fil-combo-trigger) {
  width: 100%;
}

.fil-cycler-remove-btn {
  background: transparent;
  border: none;
  color: var(--fil-muted);
  cursor: pointer;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 4px;
  transition: color 0.1s, background 0.1s;
}

.fil-cycler-remove-btn:hover {
  color: var(--fil-danger);
  background: color-mix(in srgb, var(--fil-danger) 16%, transparent);
}

.fil-lora-weights {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
  border-top: 1px solid color-mix(in srgb, var(--fil-border) 60%, transparent);
  width: 100%;
  box-sizing: border-box;
}

.fil-weight-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}


.fil-split-btn {
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--fil-border) 80%, transparent);
  color: var(--fil-muted, #94a3b8);
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 9px;
  letter-spacing: 0.3px;
  padding: 1px 4px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  flex: none;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
}

.fil-split-btn:hover {
  color: var(--fil-accent-text, #c084fc);
  border-color: color-mix(in srgb, var(--fil-accent, #a855f7) 55%, transparent);
}

.fil-split-btn.active {
  color: var(--fil-accent-text, #c084fc);
  border-color: color-mix(in srgb, var(--fil-accent, #a855f7) 70%, transparent);
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 18%, transparent);
}

/* Keeps the CLIP slider aligned under the Model one, which the split button
   would otherwise shift by its own width. */
.fil-split-btn-spacer {
  width: 33px;
  flex: none;
}







.fil-refresh-loras-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-accent) 35%, transparent);
  color: var(--fil-accent-text, #c084fc);
  cursor: pointer;
  padding: 0 6px;
  height: 20px;
  border-radius: 4px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.fil-refresh-loras-btn.spinning {
  animation: fil-lora-spin 0.6s linear infinite;
}

@keyframes fil-lora-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fil-weight-field {
  flex: 1;
  min-width: 0;
}

.fil-actions-menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  padding: 3px 0 1px;
  width: 100%;
  box-sizing: border-box;
}

.fil-actions-more {
  font-family: ui-monospace, SFMono-Regular, monospace;
  letter-spacing: 1px;
}

.fil-actions-more.open {
  color: var(--fil-accent-text, #c084fc);
}

.fil-slider-val {
  font-family: monospace;
  font-size: 10px;
  font-weight: 700;
  color: var(--fil-accent-text, #c084fc);
  background: var(--fil-inset);
  padding: 1px 4px;
  border-radius: 3px;
  border: 1px solid var(--fil-border);
}






.fil-cycler-btn-group {
  display: flex;
  gap: 6px;
  width: 100%;
  margin-top: 2px;
}

.fil-cycler-add-btn {
  flex: 1;
  justify-content: center;
  font-weight: 600;
}

.fil-info-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
  color: var(--fil-text);
  position: relative;
}

.fil-copy-toast {
  position: absolute;
  top: -6px;
  right: 0;
  background: var(--fil-accent, #a855f7);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  animation: fil-fade-in 0.2s ease-out;
}

.fil-info-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.fil-copy-mini-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid var(--fil-border);
  color: var(--fil-accent, #a855f7);
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.fil-copy-mini-btn:hover {
  background: color-mix(in srgb, var(--fil-accent) 20%, transparent);
  border-color: var(--fil-accent, #a855f7);
}

.fil-info-preview-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.fil-info-preview-img {
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--fil-accent) 40%, transparent);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--fil-accent) 30%, transparent);
}

.fil-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.fil-info-card {
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fil-info-card-label {
  font-size: 10px;
  color: var(--fil-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.fil-info-card-val {
  font-size: 12px;
  font-weight: 600;
}

.fil-info-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--fil-border);
}

.fil-info-field.full {
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-bottom: none;
}

.fil-info-label {
  color: var(--fil-muted);
  font-size: 11px;
}

.fil-info-code {
  background: var(--fil-inset);
  padding: 6px 10px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-family: monospace;
  font-size: 11px;
  word-break: break-all;
  color: var(--fil-accent-text, #c084fc);
  border: 1px solid var(--fil-border);
}
</style>
