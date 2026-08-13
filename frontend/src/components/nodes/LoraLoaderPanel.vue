<script setup lang="ts">
/**
 * FiLLoraLoader — Cyberpunk HUD panel for dynamic LoRA stack management with sliders & presets.
 * Redesigned to 100% mirror FiLModelCycler's premium stack architecture and styling.
 */
import { computed, ref, onMounted } from "vue";
import {
  FilButton,
  FilComboBox,
  type FilComboOption,
  FilModal,
  FilSection,
  FilSelect,
  FilToggle,
} from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { getJson, postJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";

interface LoraItem {
  id: string;
  name: string;
  enabled: boolean;
  sm: number;
  sc: number;
}

interface LoraPreset {
  name: string;
  loras: string[];
}

interface LoraInfoDetail {
  index: number;
  fullName: string;
  cleanName: string;
  subfolder: string;
  extension: string;
  size_str?: string;
  mtime_str?: string;
  trigger_words?: string;
  isLoading?: boolean;
}

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

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
const skipOnError = createRef<boolean>("skip_on_error", true);
const isAdvancedCollapsed = ref(true);

const installedLoras = ref<string[]>([]);
const loraItems = ref<LoraItem[]>([]);
const searchFilter = ref("");
const draggedIndex = ref<number | null>(null);
const dragOverIndex = ref<number | null>(null);

const infoModalOpen = ref(false);
const activeInfoDetail = ref<LoraInfoDetail | null>(null);
const copySuccessMsg = ref("");

// Presets State
const presetsList = ref<LoraPreset[]>([]);
const selectedPresetName = ref("");
const savePresetModalOpen = ref(false);
const newPresetName = ref("");

const comboOptions = computed<FilComboOption[]>(() =>
  installedLoras.value.map((m) => ({ value: m, label: m }))
);

const presetComboOptions = computed<FilComboOption[]>(() =>
  presetsList.value.map((p) => ({ value: p.name, label: `${p.name} (${p.loras.length})` }))
);

const filteredLoraItems = computed(() => {
  const q = searchFilter.value.trim().toLowerCase();
  if (!q) return loraItems.value.map((item, originalIndex) => ({ item, originalIndex }));
  return loraItems.value
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => item.name.toLowerCase().includes(q));
});

const activeLoraCount = computed(
  () => loraItems.value.filter((i) => i.enabled && i.name.trim()).length
);

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

async function fetchPresets() {
  try {
    const res = await getJson<{ presets: LoraPreset[] }>(`${ROUTE_PREFIX}/lora_cycler_presets`);
    if (res?.presets) {
      presetsList.value = res.presets;
    }
  } catch {
    presetsList.value = [];
  }
}

onMounted(() => {
  const rawList = String(props.state.nodeState["lora_list"] ?? "");
  if (rawList) {
    loraItems.value = parseLoraList(rawList);
  }
  loadInstalledLoras();
  fetchPresets();
});

function addLoraItem() {
  const fallback = installedLoras.value[0] || "";
  loraItems.value.push({
    id: `item_${Date.now()}_${Math.random()}`,
    name: fallback,
    enabled: true,
    sm: globalSm.value,
    sc: globalSc.value,
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
      `${ROUTE_PREFIX}/model_info/loras?path=${encodeURIComponent(name)}`
    );
    if (res && !res.error && activeInfoDetail.value && activeInfoDetail.value.fullName === name) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: res.size_str || "N/A",
        mtime_str: res.mtime_str || "N/A",
        trigger_words: res.trigger_words || "",
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

function toggleAll(enable: boolean) {
  loraItems.value.forEach((item) => {
    item.enabled = enable;
  });
  syncToNodeState();
}

function populateAllFolderLoras() {
  loraItems.value = installedLoras.value.map((m, idx) => ({
    id: `item_all_${idx}_${Date.now()}`,
    name: m,
    enabled: true,
    sm: globalSm.value,
    sc: globalSc.value,
  }));
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

function selectPreset(presetName: string) {
  selectedPresetName.value = presetName;
  const target = presetsList.value.find((p) => p.name === presetName);
  if (target) {
    loraItems.value = target.loras.map((line, idx) => {
      const isEnabled = !line.startsWith("#");
      const clean = line.replace(/^#\s*/, "");
      const parts = clean.split(":");
      const name = parts[0];
      const sm = parts.length >= 2 ? float(parts[1]) : globalSm.value;
      const sc = parts.length >= 3 ? float(parts[2]) : sm;
      return {
        id: `item_p_${idx}_${Date.now()}`,
        name,
        enabled: isEnabled,
        sm,
        sc,
      };
    });
    syncToNodeState();
  }
}

async function submitSavePreset() {
  const name = newPresetName.value.trim();
  if (!name) return;
  const loras = loraItems.value.map((item) => {
    const entry = `${item.name}:${item.sm.toFixed(2)}:${item.sc.toFixed(2)}`;
    return item.enabled ? entry : `# ${entry}`;
  });
  try {
    const res = await postJson<{ presets: LoraPreset[] }>(`${ROUTE_PREFIX}/lora_cycler_presets`, {
      name,
      loras,
    });
    if (res?.presets) {
      presetsList.value = res.presets;
      selectedPresetName.value = name;
    }
  } catch (err) {
    console.error("Failed to save preset", err);
  }
  savePresetModalOpen.value = false;
  newPresetName.value = "";
}

async function deleteSelectedPreset() {
  const name = selectedPresetName.value;
  if (!name) return;
  try {
    const res = await fetch(`${ROUTE_PREFIX}/lora_cycler_presets/${encodeURIComponent(name)}`, {
      method: "DELETE",
    });
    const json = await res.json();
    if (json?.presets) {
      presetsList.value = json.presets;
      selectedPresetName.value = "";
    }
  } catch (err) {
    console.error("Failed to delete preset", err);
  }
}
</script>

<template>
  <div class="fil-cycler-root">
    <!-- Header Banner -->
    <div class="fil-cycler-header-banner">
      <div class="fil-header-title">
        <span>🧬 LoRA Loader</span>
      </div>
      <div class="fil-header-counter">
        Active: {{ activeLoraCount }}/{{ loraItems.length }}
      </div>
    </div>

    <!-- Presets Toolbar -->
    <div class="fil-cycler-preset-bar">
      <div class="fil-preset-combo-wrap">
        <FilComboBox
          :model-value="selectedPresetName"
          :options="presetComboOptions"
          placeholder="📂 Load Preset..."
          @update:model-value="selectPreset"
        />
      </div>
      <button
        class="fil-preset-btn accent"
        title="Save Current Stack as Preset"
        @click="savePresetModalOpen = true"
      >
        💾 Save Preset
      </button>
      <button
        v-if="selectedPresetName"
        class="fil-preset-btn danger"
        title="Delete Selected Preset"
        @click="deleteSelectedPreset"
      >
        🗑️
      </button>
    </div>

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
        <button class="fil-action-link" @click="toggleAll(true)">All ON</button>
        <button class="fil-action-link" @click="toggleAll(false)">All OFF</button>
        <button class="fil-action-link" @click="populateAllFolderLoras">Populate Folder</button>
        <button class="fil-action-link danger" @click="clearAllItems">Clear</button>
      </div>
    </div>

    <!-- Search Stack Filter Input -->
    <div class="fil-cycler-search-bar">
      <input
        v-model="searchFilter"
        type="search"
        class="fil-stack-search-input"
        placeholder="🔍 Filter LoRA list..."
        spellcheck="false"
      />
    </div>

    <!-- Dynamic LoRAs Stack List -->
    <TransitionGroup name="fil-stack-list" tag="div" class="fil-cycler-stack">
      <div v-if="loraItems.length === 0" key="empty" class="fil-cycler-empty">
        <span>No LoRAs in stack — click <b>+ Add LoRA</b> or <b>Populate Folder</b> to build your stack.</span>
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
        :draggable="!searchFilter"
        @dragstart="onDragStart(originalIndex, $event)"
        @dragover="onDragOver(originalIndex, $event)"
        @dragleave="onDragLeave(originalIndex)"
        @drop="onDrop(originalIndex, $event)"
        @dragend="onDragEnd"
      >
        <!-- Top Row: Grip, Info, Combo, Toggle, Remove -->
        <div class="fil-lora-top-row">
          <div class="fil-drag-handle" title="Drag to reorder" @mousedown.stop>
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

          <div class="fil-cycler-select-wrap">
            <FilComboBox
              :model-value="item.name"
              :options="comboOptions"
              :searchable="true"
              preview-mode="loras"
              placeholder="Select LoRA..."
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

        <!-- Sliders Row (Model Weight / CLIP Weight) -->
        <div v-if="item.enabled" class="fil-lora-sliders-wrap">
          <div class="fil-lora-slider-col">
            <div class="fil-slider-header">
              <span class="fil-slider-label">Model Weight</span>
              <span class="fil-slider-val">{{ item.sm.toFixed(2) }}</span>
            </div>
            <input
              type="range"
              min="-3.0"
              max="3.0"
              step="0.05"
              :value="item.sm"
              class="fil-lora-range"
              @input="(e) => updateItemSm(originalIndex, parseFloat((e.target as HTMLInputElement).value))"
            />
          </div>

          <div class="fil-lora-slider-col">
            <div class="fil-slider-header">
              <span class="fil-slider-label">CLIP Weight</span>
              <span class="fil-slider-val">{{ item.sc.toFixed(2) }}</span>
            </div>
            <input
              type="range"
              min="-3.0"
              max="3.0"
              step="0.05"
              :value="item.sc"
              class="fil-lora-range"
              @input="(e) => updateItemSc(originalIndex, parseFloat((e.target as HTMLInputElement).value))"
            />
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

    <!-- Advanced Settings Section -->
    <FilSection
      v-model="isAdvancedCollapsed"
      :title="t('cycler_advanced', 'Advanced Settings')"
    />
    <div v-if="!isAdvancedCollapsed" class="fil-cycler-adv-body">
      <FilToggle
        :model-value="skipOnError ? 'ON' : 'OFF'"
        :label="t('cycler_skip_error', 'Skip Corrupt Models')"
        @update:model-value="(v) => (skipOnError = v === 'ON')"
      />
    </div>

    <!-- Save Preset Modal -->
    <FilModal
      v-model:open="savePresetModalOpen"
      title="Save LoRA Stack Preset"
      width="400px"
    >
      <div class="fil-preset-modal-content">
        <label class="fil-info-label">Preset Name:</label>
        <input
          v-model="newPresetName"
          type="text"
          class="fil-stack-search-input"
          placeholder="e.g. Cinematic Portrait Stack..."
          @keydown.enter="submitSavePreset"
        />
        <div class="fil-cycler-btn-group" style="margin-top: 8px;">
          <FilButton variant="accent" label="Save Preset" @click="submitSavePreset" />
          <FilButton variant="standard" label="Cancel" @click="savePresetModalOpen = false" />
        </div>
      </div>
    </FilModal>

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

        <div class="fil-info-grid">
          <div class="fil-info-card">
            <span class="fil-info-card-label">Stack Index</span>
            <span class="fil-info-card-val">#{{ activeInfoDetail.index }} of {{ loraItems.length }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">File Size</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.size_str || 'Reading...' }}</span>
          </div>
        </div>

        <div v-if="activeInfoDetail.trigger_words" class="fil-info-field full">
          <div class="fil-info-header-row">
            <span class="fil-info-label">Trigger Words:</span>
            <button
              class="fil-copy-mini-btn"
              @click="copyToClipboard(activeInfoDetail.trigger_words || '', 'Trigger Words')"
            >
              📋 Copy
            </button>
          </div>
          <code class="fil-info-code">{{ activeInfoDetail.trigger_words }}</code>
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

.fil-cycler-preset-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.fil-preset-combo-wrap {
  flex: 1;
  min-width: 0;
}

.fil-preset-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid var(--fil-border);
  color: var(--fil-text);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease-in-out;
}

.fil-preset-btn.accent {
  background: var(--fil-accent, #a855f7);
  border: 1px solid var(--fil-accent, #a855f7);
  color: #ffffff;
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-accent) 45%, transparent);
}

.fil-preset-btn.accent:hover {
  background: color-mix(in srgb, var(--fil-accent) 85%, white);
  box-shadow: 0 0 12px color-mix(in srgb, var(--fil-accent) 70%, transparent);
}

.fil-preset-btn.danger:hover {
  border-color: var(--fil-danger, #ef4444);
  color: var(--fil-danger, #ef4444);
  background: color-mix(in srgb, var(--fil-danger) 20%, transparent);
}

.fil-cycler-actions-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 1px 0;
  width: 100%;
}

.fil-sort-select-wrap {
  width: 125px;
  min-width: 125px;
  flex: 0 0 125px;
}

.fil-sort-select-wrap :deep(.fil-w-select) {
  display: flex;
  width: 100%;
}

.fil-sort-select-wrap :deep(.fil-w-select-input) {
  flex: 1;
  width: 100%;
  padding: 3px 6px;
  font-size: 10px;
  font-weight: 600;
  border-color: color-mix(in srgb, var(--fil-accent) 40%, transparent);
  color: var(--fil-accent-text, #c084fc);
  background: var(--fil-surface-2, #27272a);
  border-radius: 4px;
  text-align: left;
  text-align-last: left;
}

.fil-actions-right-group {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.fil-action-link {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-accent) 35%, transparent);
  color: var(--fil-accent-text, #c084fc);
  cursor: pointer;
  padding: 3px 7px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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

.fil-stack-list-move {
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
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
  opacity: 0.35;
  transform: scale(0.97) rotate(-0.5deg);
  border-style: dashed;
  border-color: var(--fil-accent, #a855f7);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
}

.fil-lora-row.isDragOver {
  border-color: var(--fil-accent, #00f0ff);
  box-shadow: 0 0 12px color-mix(in srgb, var(--fil-accent, #00f0ff) 45%, transparent);
}

.fil-lora-row.dragOverAbove::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--fil-accent, #00f0ff);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--fil-accent, #00f0ff);
  animation: pulseSnapLine 0.8s infinite alternate;
  z-index: 10;
}

.fil-lora-row.dragOverBelow::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--fil-accent, #00f0ff);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--fil-accent, #00f0ff);
  animation: pulseSnapLine 0.8s infinite alternate;
  z-index: 10;
}

@keyframes pulseSnapLine {
  from { opacity: 0.6; box-shadow: 0 0 4px var(--fil-accent, #00f0ff); }
  to { opacity: 1; box-shadow: 0 0 10px var(--fil-accent, #00f0ff); }
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
  font-weight: bold;
  font-size: 13px;
  letter-spacing: -1px;
  padding: 2px 4px;
  user-select: none;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
}

.fil-drag-handle:hover {
  opacity: 1;
  color: var(--fil-accent, #00f0ff);
  transform: scale(1.15);
}

.fil-drag-handle:active {
  cursor: grabbing;
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

.fil-lora-sliders-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid color-mix(in srgb, var(--fil-border) 60%, transparent);
  width: 100%;
  box-sizing: border-box;
}

.fil-lora-slider-col {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fil-slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
}

.fil-slider-label {
  color: var(--fil-muted);
  font-weight: 500;
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

.fil-lora-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: var(--fil-inset);
  outline: none;
  cursor: pointer;
}

.fil-lora-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--fil-accent, #a855f7);
  box-shadow: 0 0 6px color-mix(in srgb, var(--fil-accent) 60%, transparent);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.fil-lora-range::-webkit-slider-thumb:hover {
  transform: scale(1.25);
}

.fil-lora-range::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: var(--fil-accent, #a855f7);
  box-shadow: 0 0 6px color-mix(in srgb, var(--fil-accent) 60%, transparent);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.fil-lora-range::-moz-range-thumb:hover {
  transform: scale(1.25);
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

.fil-cycler-adv-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}

.fil-preset-modal-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
