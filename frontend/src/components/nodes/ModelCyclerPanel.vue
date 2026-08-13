<script setup lang="ts">
/**
 * FiLModelCycler — Cyberpunk HUD panel for cycling diffusion models & checkpoints.
 * Inspired by Power Lora Loader (rgthree) & Pixaroma, tailored for model testing.
 */
import { computed, ref, watch, onMounted } from "vue";
import {
  FilButton,
  FilComboBox,
  type FilComboOption,
  FilModal,
  FilSection,
  FilSegmented,
  FilSelect,
  FilToggle,
} from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { getJson, postJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";

interface ModelItem {
  id: string;
  name: string;
  enabled: boolean;
  autoOpen?: boolean;
}

interface ModelPreset {
  name: string;
  source_mode: string;
  models: string[];
}

interface ModelInfoDetail {
  index: number;
  fullName: string;
  cleanName: string;
  subfolder: string;
  extension: string;
  mode: string;
  size_str?: string;
  mtime_str?: string;
  arch?: string;
  precision?: string;
  has_preview?: boolean;
  model_title?: string;
  base_model?: string;
  creator?: string;
  download_count?: number;
  thumbs_up?: number;
  trained_words?: string[];
  sample_prompts?: string[];
  has_meta_json?: boolean;
  metadata?: Record<string, string>;
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

const sourceMode = createRef<string>("source_mode", "Diffusion Models");
const cycleMode = createRef<string>("cycle_mode", "Sequential (Loop)");
const unloadPrevious = createRef<boolean>("unload_previous", true);
const freeVram = createRef<boolean>("free_vram", true);
const skipOnError = createRef<boolean>("skip_on_error", true);
const weightDtype = createRef<string>("weight_dtype", "default");
const isAdvancedCollapsed = ref(true);

const installedModels = ref<string[]>([]);
const modelItems = ref<ModelItem[]>([]);
const searchFilter = ref("");
const isRefreshingModels = ref(false);
const draggedIndex = ref<number | null>(null);
const dragOverIndex = ref<number | null>(null);

const infoModalOpen = ref(false);
const activeInfoDetail = ref<ModelInfoDetail | null>(null);
const copySuccessMsg = ref("");

// Presets State
const presetsList = ref<ModelPreset[]>([]);
const selectedPresetName = ref("");
const savePresetModalOpen = ref(false);
const newPresetName = ref("");

const comboOptions = computed<FilComboOption[]>(() =>
  installedModels.value.map((m) => ({ value: m, label: m }))
);

const presetComboOptions = computed<FilComboOption[]>(() =>
  presetsList.value.map((p) => ({ value: p.name, label: `${p.name} (${p.models.length})` }))
);

const filteredModelItems = computed(() => {
  const q = searchFilter.value.trim().toLowerCase();
  if (!q) return modelItems.value.map((item, originalIndex) => ({ item, originalIndex }));
  return modelItems.value
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => item.name.toLowerCase().includes(q));
});

const activeModelCount = computed(
  () => modelItems.value.filter((i) => i.enabled && i.name.trim()).length
);

function isModelMissing(name: string): boolean {
  if (!name || !name.trim() || installedModels.value.length === 0) return false;
  return !installedModels.value.includes(name.trim());
}

function parseModelList(raw: string): ModelItem[] {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return lines.map((name, idx) => ({
    id: `item_${idx}_${Date.now()}`,
    name: name.replace(/^#\s*/, ""),
    enabled: !name.startsWith("#"),
  }));
}

function syncToNodeState() {
  const serialized = modelItems.value
    .filter((item) => item.name.trim())
    .map((item) => (item.enabled ? item.name : `# ${item.name}`))
    .join("\n");
  props.state.nodeState["model_list"] = serialized;
  const w = props.state.node ? findFilWidget(props.state.node, "model_list") : null;
  if (w) w.value = serialized;
}

async function loadInstalledModels() {
  const modeKey = sourceMode.value === "Diffusion Models" ? "diffusion_models" : "checkpoints";
  try {
    const res = await getJson<{ models: string[] }>(`${ROUTE_PREFIX}/models_list/${modeKey}`);
    if (res?.models) {
      installedModels.value = res.models;
    }
  } catch {
    installedModels.value = [];
  }
}

async function fetchPresets() {
  try {
    const res = await getJson<{ presets: ModelPreset[] }>(`${ROUTE_PREFIX}/cycler_presets`);
    if (res?.presets) {
      presetsList.value = res.presets;
    }
  } catch {
    presetsList.value = [];
  }
}

async function refreshModelsList() {
  isRefreshingModels.value = true;
  await loadInstalledModels();
  setTimeout(() => {
    isRefreshingModels.value = false;
  }, 500);
}

export interface CyclerRun {
  position: number;
  total: number;
  model_name: string;
  clean_name: string;
}

const lastRun = ref<CyclerRun | null>(null);

onMounted(() => {
  const rawList = String(props.state.nodeState["model_list"] ?? "");
  if (rawList) {
    modelItems.value = parseModelList(rawList);
  }
  loadInstalledModels();
  fetchPresets();

  const node = props.state.node as { _filCyclerLastRun?: CyclerRun } | undefined;
  if (node?._filCyclerLastRun) {
    lastRun.value = node._filCyclerLastRun;
  }
  props.state.ui.onCycleRun = (r: unknown) => {
    lastRun.value = r as CyclerRun;
  };
});

watch(sourceMode, () => {
  loadInstalledModels();
});

function addModelItem() {
  modelItems.value.push({
    id: `item_${Date.now()}_${Math.random()}`,
    name: "",
    enabled: true,
    autoOpen: true,
  });
  syncToNodeState();
}

function removeModelItem(index: number) {
  modelItems.value.splice(index, 1);
  syncToNodeState();
}

function onComboClose(index: number) {
  const item = modelItems.value[index];
  if (item && !item.name.trim()) {
    removeModelItem(index);
  }
}

async function openInfoModal(item: ModelItem, index: number) {
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
    mode: sourceMode.value,
    isLoading: true,
  };
  infoModalOpen.value = true;
  copySuccessMsg.value = "";

  const modeKey = sourceMode.value === "Diffusion Models" ? "diffusion_models" : "checkpoints";
  try {
    const res = await getJson<Partial<ModelInfoDetail> & { error?: string }>(`${ROUTE_PREFIX}/model_info/${modeKey}?path=${encodeURIComponent(name)}`);
    if (res && !res.error && activeInfoDetail.value && activeInfoDetail.value.fullName === name) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: res.size_str || "N/A",
        mtime_str: res.mtime_str || "N/A",
        arch: res.arch || "Diffusion Model",
        precision: res.precision || "FP16",
        has_preview: Boolean(res.has_preview),
        model_title: res.model_title || "",
        base_model: res.base_model || "",
        creator: res.creator || "",
        download_count: res.download_count || 0,
        thumbs_up: res.thumbs_up || 0,
        trained_words: res.trained_words || [],
        sample_prompts: res.sample_prompts || [],
        has_meta_json: Boolean(res.has_meta_json),
        metadata: res.metadata || {},
        isLoading: false,
      };
    } else if (activeInfoDetail.value) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: res?.size_str || "N/A",
        mtime_str: res?.mtime_str || "N/A",
        arch: res?.arch || "Diffusion Model",
        precision: res?.precision || "FP16",
        isLoading: false,
      };
    }
  } catch {
    if (activeInfoDetail.value) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: "N/A",
        mtime_str: "N/A",
        arch: "Diffusion Model",
        precision: "FP16",
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
  "⚖️ Size (Max → Min)",
  "⚡ Active ON First",
];

async function applyModelSorting(label: string) {
  if (!label || modelItems.value.length === 0) return;
  selectedSort.value = label;
  let sortBy = "name_asc";
  if (label.includes("Z-A")) sortBy = "name_desc";
  else if (label.includes("Size")) sortBy = "size_desc";
  else if (label.includes("Active")) sortBy = "enabled_first";

  const rawList = modelItems.value.map((i) => (i.enabled ? i.name : `# ${i.name}`));
  const modeKey = sourceMode.value === "Diffusion Models" ? "diffusion_models" : "checkpoints";
  try {
    const res = await postJson<{ sorted_models: string[] }>(`${ROUTE_PREFIX}/sort_models`, {
      mode: modeKey,
      models: rawList,
      sort_by: sortBy,
    });
    if (res?.sorted_models) {
      modelItems.value = res.sorted_models.map((name, idx) => ({
        id: `item_s_${idx}_${Date.now()}`,
        name: name.replace(/^#\s*/, ""),
        enabled: !name.startsWith("#"),
      }));
      syncToNodeState();
    }
  } catch (err) {
    console.error("Failed to sort models", err);
  }
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
  e.preventDefault();
  if (draggedIndex.value !== null && draggedIndex.value !== index) {
    dragOverIndex.value = index;
  }
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = "move";
  }
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
    fromIndex >= modelItems.value.length
  ) {
    draggedIndex.value = null;
    return;
  }
  const item = modelItems.value.splice(fromIndex, 1)[0];
  modelItems.value.splice(targetIndex, 0, item);
  draggedIndex.value = null;
  syncToNodeState();
}

function onDragEnd() {
  draggedIndex.value = null;
  dragOverIndex.value = null;
}

function toggleAll(enable: boolean) {
  modelItems.value.forEach((item) => {
    item.enabled = enable;
  });
  syncToNodeState();
}

function populateAllFolderModels() {
  modelItems.value = installedModels.value.map((m, idx) => ({
    id: `item_all_${idx}_${Date.now()}`,
    name: m,
    enabled: true,
  }));
  syncToNodeState();
}

function clearAllItems() {
  modelItems.value = [];
  syncToNodeState();
}

function updateItemName(index: number, name: string) {
  if (modelItems.value[index]) {
    modelItems.value[index].name = name;
    syncToNodeState();
  }
}

function toggleItemEnabled(index: number, enabled: boolean) {
  if (modelItems.value[index]) {
    modelItems.value[index].enabled = enabled;
    syncToNodeState();
  }
}

function selectPreset(presetName: string) {
  selectedPresetName.value = presetName;
  const target = presetsList.value.find((p) => p.name === presetName);
  if (target) {
    modelItems.value = target.models.map((m, idx) => ({
      id: `item_p_${idx}_${Date.now()}`,
      name: m.replace(/^#\s*/, ""),
      enabled: !m.startsWith("#"),
    }));
    syncToNodeState();
  }
}

async function submitSavePreset() {
  const name = newPresetName.value.trim();
  if (!name) return;
  const models = modelItems.value.map((i) => (i.enabled ? i.name : `# ${i.name}`));
  try {
    const res = await postJson<{ presets: ModelPreset[] }>(`${ROUTE_PREFIX}/cycler_presets`, {
      name,
      source_mode: sourceMode.value,
      models,
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
    const res = await fetch(`${ROUTE_PREFIX}/cycler_presets/${encodeURIComponent(name)}`, {
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

function queueAllModelsRun() {
  const count = activeModelCount.value || 1;
  const w = globalThis as unknown as { app?: { queuePrompt?: (index?: number, batchCount?: number) => void } };
  if (w.app?.queuePrompt) {
    try {
      w.app.queuePrompt(0, count);
    } catch {
      w.app.queuePrompt(count as unknown as number);
    }
  }
}

const cycleOptions = [
  "Sequential (Loop)",
  "Sequential (Stop)",
  "Ping-Pong",
  "Random",
  "Fixed Index",
];

const weightDtypeOptions = ["default", "fp16", "bf16", "fp8_e4m3fn", "fp8_e5m2"];
</script>

<template>
  <div class="fil-cycler-root">
    <!-- Source Mode Selector -->
    <div class="fil-cycler-header">
      <FilSegmented
        :model-value="sourceMode"
        :options="['Diffusion Models', 'Checkpoints']"
        @update:model-value="(v) => (sourceMode = v)"
      />
      <button
        class="fil-refresh-models-btn"
        :class="{ spinning: isRefreshingModels }"
        title="🔄 Refresh installed models list from disk & extra paths"
        @mousedown.stop
        @click.stop="refreshModelsList"
      >
        🔄
      </button>
      <div v-if="lastRun" class="fil-cycler-now">
        {{ lastRun.position }}/{{ lastRun.total }}: {{ lastRun.clean_name || lastRun.model_name }}
      </div>
    </div>

    <!-- Mode bar -->
    <div class="fil-cycler-controls">
      <div class="fil-cycler-mode-select">
        <FilSelect
          :model-value="cycleMode"
          :options="cycleOptions"
          @update:model-value="(v) => (cycleMode = v)"
        />
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
        title="Save Current List as Preset"
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
          @update:model-value="applyModelSorting"
        />
      </div>
      <div class="fil-actions-right-group">
        <button class="fil-action-link" @click="toggleAll(true)">All ON</button>
        <button class="fil-action-link" @click="toggleAll(false)">All OFF</button>
        <button class="fil-action-link" @click="populateAllFolderModels">Populate Folder</button>
        <button class="fil-action-link danger" @click="clearAllItems">Clear</button>
      </div>
    </div>

    <!-- Search Stack Filter Input -->
    <div class="fil-cycler-search-bar">
      <input
        v-model="searchFilter"
        type="search"
        class="fil-stack-search-input"
        placeholder="🔍 Filter model list..."
        spellcheck="false"
        @keydown.stop
      />
    </div>

    <!-- Models Stack List -->
    <TransitionGroup name="fil-stack-list" tag="div" class="fil-cycler-stack" @wheel.stop>
      <div v-if="modelItems.length === 0" key="empty" class="fil-cycler-empty">
        <span>No models in cycle — click <b>+ Add Model</b> or <b>Populate Folder</b> to build your queue.</span>
      </div>

      <div
        v-for="{ item, originalIndex } in filteredModelItems"
        :key="item.id"
        class="fil-cycler-row"
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
        <!-- Drag Handle Grip: only THIS icon is draggable! -->
        <div
          class="fil-drag-handle"
          title="Drag handle to reorder item"
          :draggable="!searchFilter"
          @dragstart="onDragStart(originalIndex, $event)"
        >
          ⋮⋮
        </div>

        <!-- Info Button -->
        <button
          class="fil-row-info-btn"
          title="Model Information"
          @mousedown.stop
          @click.stop="openInfoModal(item, originalIndex)"
        >
          ⓘ
        </button>

        <!-- Missing file warning badge -->
        <span
          v-if="isModelMissing(item.name)"
          class="fil-missing-badge"
          title="⚠️ Warning: Model file is missing from disk or unmounted!"
        >
          ⚠️
        </span>

        <div class="fil-cycler-select-wrap">
          <FilComboBox
            :model-value="item.name"
            :options="comboOptions"
            :searchable="true"
            :auto-open="item.autoOpen"
            :preview-mode="sourceMode === 'Diffusion Models' ? 'diffusion_models' : 'checkpoints'"
            :placeholder="t('cycler_select_model', 'Select model...')"
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
          title="Remove model"
          @click="removeModelItem(originalIndex)"
        >
          ✕
        </button>
      </div>
    </TransitionGroup>

    <!-- Action Buttons Group -->
    <div class="fil-cycler-btn-group">
      <FilButton
        variant="accent"
        label="+ Add Model"
        class="fil-cycler-add-btn"
        @click="addModelItem"
      />
      <FilButton
        variant="standard"
        :label="`▶ Run All (${activeModelCount})`"
        class="fil-cycler-queue-btn"
        :title="`Queue ${activeModelCount} runs in ComfyUI to test all active models in order.`"
        @click="queueAllModelsRun"
      />
    </div>

    <!-- Advanced Settings Section -->
    <FilSection
      v-model="isAdvancedCollapsed"
      :title="t('cycler_advanced', 'Advanced Settings')"
    />
    <div v-if="!isAdvancedCollapsed" class="fil-cycler-adv-body">
      <FilSelect
        v-if="sourceMode === 'Diffusion Models'"
        :model-value="weightDtype"
        :options="weightDtypeOptions"
        :label="t('cycler_weight_dtype', 'Precision')"
        @update:model-value="(v) => (weightDtype = v)"
      />
      <FilToggle
        :model-value="unloadPrevious ? 'ON' : 'OFF'"
        :label="t('cycler_unload_prev', 'Unload GPU Memory')"
        @update:model-value="(v) => (unloadPrevious = v === 'ON')"
      />
      <FilToggle
        :model-value="freeVram ? 'ON' : 'OFF'"
        :label="t('cycler_flush_vram', 'Flush PyTorch Cache')"
        @update:model-value="(v) => (freeVram = v === 'ON')"
      />
      <FilToggle
        :model-value="skipOnError ? 'ON' : 'OFF'"
        :label="t('cycler_skip_error', 'Skip Corrupt Models')"
        @update:model-value="(v) => (skipOnError = v === 'ON')"
      />
    </div>

    <!-- Save Preset Modal -->
    <FilModal
      v-model:open="savePresetModalOpen"
      title="Save Model Queue Preset"
      width="400px"
    >
      <div class="fil-preset-modal-content">
        <label class="fil-info-label">Preset Name:</label>
        <input
          v-model="newPresetName"
          type="text"
          class="fil-stack-search-input"
          placeholder="e.g. Cyberpunk Checkpoints..."
          @keydown.enter="submitSavePreset"
        />
        <div class="fil-cycler-btn-group" style="margin-top: 8px;">
          <FilButton variant="accent" label="Save Preset" @click="submitSavePreset" />
          <FilButton variant="standard" label="Cancel" @click="savePresetModalOpen = false" />
        </div>
      </div>
    </FilModal>

    <!-- Model Info Modal -->
    <FilModal
      v-model:open="infoModalOpen"
      :title="`Model Info — ${activeInfoDetail?.model_title || activeInfoDetail?.cleanName || 'Details'}`"
      width="540px"
    >
      <div v-if="activeInfoDetail" class="fil-info-modal-content">
        <!-- Notification toast for copy actions -->
        <div v-if="copySuccessMsg" class="fil-copy-toast">
          {{ copySuccessMsg }}
        </div>

        <!-- Preview Thumbnail if available -->
        <div v-if="activeInfoDetail.has_preview" class="fil-info-preview-box">
          <img
            :src="`${ROUTE_PREFIX}/model_preview/${activeInfoDetail.mode === 'Diffusion Models' ? 'diffusion_models' : 'checkpoints'}?path=${encodeURIComponent(activeInfoDetail.fullName)}`"
            class="fil-info-preview-img"
            alt="Model Preview"
          />
        </div>

        <!-- Title & Civitai Stats Header -->
        <div v-if="activeInfoDetail.model_title || activeInfoDetail.creator" class="fil-info-title-block">
          <div v-if="activeInfoDetail.model_title" class="model-meta-title">
            {{ activeInfoDetail.model_title }}
          </div>
          <div class="model-meta-sub">
            <span v-if="activeInfoDetail.creator" class="meta-creator">By <b>{{ activeInfoDetail.creator }}</b></span>
            <span v-if="activeInfoDetail.download_count" class="meta-stat">📥 {{ activeInfoDetail.download_count.toLocaleString() }}</span>
            <span v-if="activeInfoDetail.thumbs_up" class="meta-stat">👍 {{ activeInfoDetail.thumbs_up.toLocaleString() }}</span>
          </div>
        </div>

        <div class="fil-info-grid">
          <div class="fil-info-card">
            <span class="fil-info-card-label">Position</span>
            <span class="fil-info-card-val">#{{ activeInfoDetail.index }} of {{ modelItems.length }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Architecture / Base</span>
            <span class="fil-info-card-val highlight">{{ activeInfoDetail.arch || activeInfoDetail.base_model || 'Detecting...' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">File Size</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.size_str || 'Reading...' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Precision</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.precision || 'Unknown' }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Category</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.mode }}</span>
          </div>
          <div class="fil-info-card">
            <span class="fil-info-card-label">Modified Date</span>
            <span class="fil-info-card-val">{{ activeInfoDetail.mtime_str || 'Unknown' }}</span>
          </div>
        </div>

        <!-- Trained Trigger Words if present -->
        <div v-if="activeInfoDetail.trained_words && activeInfoDetail.trained_words.length > 0" class="fil-info-field full">
          <div class="fil-info-header-row">
            <span class="fil-info-label">Trained Trigger Words:</span>
            <button
              class="fil-copy-mini-btn"
              title="Copy All Triggers to Clipboard"
              @click="copyToClipboard(activeInfoDetail.trained_words.join(', '), 'Trigger Words')"
            >
              📋 Copy Triggers
            </button>
          </div>
          <div class="fil-info-tags-list">
            <span v-for="tag in activeInfoDetail.trained_words" :key="tag" class="fil-info-tag">{{ tag }}</span>
          </div>
        </div>

        <!-- Sample Prompts if present -->
        <div v-if="activeInfoDetail.sample_prompts && activeInfoDetail.sample_prompts.length > 0" class="fil-info-field full">
          <span class="fil-info-label">Civitai Sample Test Prompts:</span>
          <div class="fil-info-prompts-list">
            <div v-for="(pmt, pidx) in activeInfoDetail.sample_prompts" :key="pidx" class="fil-info-prompt-item">
              <span class="prompt-num">#{{ pidx + 1 }}</span>
              <span class="prompt-text">{{ pmt }}</span>
              <button
                class="fil-copy-mini-btn"
                title="Copy Prompt"
                @click="copyToClipboard(pmt, `Prompt #${pidx + 1}`)"
              >
                📋 Copy
              </button>
            </div>
          </div>
        </div>

        <div class="fil-info-field full">
          <span class="fil-info-label">Clean Model Name (Watermark Output):</span>
          <span class="fil-info-val highlight">{{ activeInfoDetail.cleanName }}</span>
        </div>

        <div class="fil-info-field full">
          <span class="fil-info-label">Full Relative File Path:</span>
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

.fil-cycler-header {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.fil-cycler-header :deep(.fil-w-segmented) {
  display: flex;
  flex: 1;
  min-width: 0;
}

.fil-cycler-header :deep(.fil-w-pill) {
  flex: 1;
  width: 100%;
  grid-column: 1 / -1;
}

.fil-cycler-header :deep(.fil-w-seg) {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  font-size: 11px;
}

.fil-refresh-models-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-accent) 35%, transparent);
  color: var(--fil-accent-text, #c084fc);
  cursor: pointer;
  padding: 0 6px;
  height: 24px;
  border-radius: 4px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.fil-refresh-models-btn:hover {
  background: color-mix(in srgb, var(--fil-accent) 25%, transparent);
  border-color: var(--fil-accent, #a855f7);
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-accent) 40%, transparent);
}

.fil-refresh-models-btn.spinning {
  animation: fil-spin-anim 0.6s linear infinite;
}

@keyframes fil-spin-anim {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fil-cycler-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.fil-cycler-mode-select {
  flex: 1;
  min-width: 0;
}

.fil-cycler-mode-select :deep(.fil-w-select) {
  display: flex;
  width: 100%;
}

.fil-cycler-mode-select :deep(.fil-w-select-input) {
  flex: 1;
  width: 100%;
  text-align: left;
  text-align-last: left;
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

.fil-cycler-row {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 4px 6px;
  position: relative;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
              box-shadow 0.2s ease,
              border-color 0.2s ease,
              opacity 0.2s ease;
}

.fil-cycler-row.disabled {
  opacity: 0.5;
}

.fil-cycler-row.isDragging {
  opacity: 0.35;
  transform: scale(0.97) rotate(-0.5deg);
  border-style: dashed;
  border-color: var(--fil-accent, #a855f7);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
}

.fil-cycler-row.isDragOver {
  border-color: var(--fil-accent, #00f0ff);
  box-shadow: 0 0 12px color-mix(in srgb, var(--fil-accent, #00f0ff) 45%, transparent);
}

.fil-cycler-row.dragOverAbove::before {
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

.fil-cycler-row.dragOverBelow::after {
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

.fil-cycler-queue-btn {
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

.fil-info-preview-box {
  width: 100%;
  max-height: 220px;
  border-radius: 6px;
  overflow: hidden;
  background: var(--fil-inset);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fil-border);
}

.fil-info-preview-img {
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
}

.fil-info-title-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--fil-inset);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--fil-border);
}

.model-meta-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--fil-accent, #a855f7);
}

.model-meta-sub {
  display: flex;
  gap: 12px;
  font-size: 11px;
  color: var(--fil-muted);
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

.fil-info-card-val.highlight {
  color: var(--fil-accent, #a855f7);
}

.fil-info-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.fil-info-tag {
  background: color-mix(in srgb, var(--fil-accent) 18%, transparent);
  color: var(--fil-accent-text, #c084fc);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 600;
}

.fil-info-prompts-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
  max-height: 120px;
  overflow-y: auto;
  background: var(--fil-inset);
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid var(--fil-border);
}

.fil-info-prompt-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  line-height: 1.3;
}

.prompt-num {
  color: var(--fil-accent, #a855f7);
  font-weight: 700;
}

.prompt-text {
  flex: 1;
  color: var(--fil-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.fil-info-val {
  font-weight: 500;
}

.fil-info-val.highlight {
  color: var(--fil-accent, #a855f7);
  font-weight: 600;
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
