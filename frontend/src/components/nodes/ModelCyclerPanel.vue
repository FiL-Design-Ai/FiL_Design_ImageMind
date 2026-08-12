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
import { getJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";

interface ModelItem {
  id: string;
  name: string;
  enabled: boolean;
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

const sourceMode = createRef<string>("source_mode", "Checkpoints");
const cycleMode = createRef<string>("cycle_mode", "Sequential (Loop)");
const unloadPrevious = createRef<boolean>("unload_previous", true);
const freeVram = createRef<boolean>("free_vram", true);
const skipOnError = createRef<boolean>("skip_on_error", true);
const weightDtype = createRef<string>("weight_dtype", "default");
const isAdvancedCollapsed = ref(true);

const installedModels = ref<string[]>([]);
const modelItems = ref<ModelItem[]>([]);
const draggedIndex = ref<number | null>(null);

const infoModalOpen = ref(false);
const activeInfoDetail = ref<ModelInfoDetail | null>(null);

const comboOptions = computed<FilComboOption[]>(() =>
  installedModels.value.map((m) => ({ value: m, label: m }))
);

const activeModelCount = computed(
  () => modelItems.value.filter((i) => i.enabled && i.name.trim()).length
);

/**
 * How many runs it takes to walk the whole cycle once — the number the Queue
 * button would have to be pressed by hand, and the batch count `Run All`
 * passes to the host.
 *
 * With every row switched off (or no rows at all) the backend falls back to
 * scanning the model folder, so the honest answer there is the folder's size,
 * not zero — see `node_model_cycler.py`'s `raw_lines` fallback.
 */
const plannedRuns = computed(() =>
  activeModelCount.value > 0 ? activeModelCount.value : installedModels.value.length
);

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

onMounted(() => {
  const rawList = String(props.state.nodeState["model_list"] ?? "");
  if (rawList) {
    modelItems.value = parseModelList(rawList);
  }
  loadInstalledModels();
});

watch(sourceMode, () => {
  loadInstalledModels();
});

function addModelItem() {
  const fallback = installedModels.value[0] || "";
  modelItems.value.push({
    id: `item_${Date.now()}_${Math.random()}`,
    name: fallback,
    enabled: true,
  });
  syncToNodeState();
}

function removeModelItem(index: number) {
  modelItems.value.splice(index, 1);
  syncToNodeState();
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

  const modeKey = sourceMode.value === "Diffusion Models" ? "diffusion_models" : "checkpoints";
  try {
    const res = await getJson<Partial<ModelInfoDetail>>(`${ROUTE_PREFIX}/model_info/${modeKey}?path=${encodeURIComponent(name)}`);
    if (res && activeInfoDetail.value && activeInfoDetail.value.fullName === name) {
      activeInfoDetail.value = {
        ...activeInfoDetail.value,
        size_str: res.size_str || "Unknown",
        mtime_str: res.mtime_str || "Unknown",
        arch: res.arch || "Unknown",
        precision: res.precision || "Unknown",
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
    }
  } catch {
    if (activeInfoDetail.value) {
      activeInfoDetail.value.isLoading = false;
    }
  }
}

function onDragStart(index: number, e: DragEvent) {
  draggedIndex.value = index;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  }
}

function onDragOver(e: DragEvent) {
  e.preventDefault();
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = "move";
  }
}

function onDrop(targetIndex: number, e: DragEvent) {
  e.preventDefault();
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

/**
 * Queue one run per model in the cycle, explicitly.
 *
 * `queuePrompt(number, batchCount)` is the host's own signature (`scripts/app.ts`),
 * `number: 0` meaning the back of the queue — the same call the Queue button
 * makes, only with a batch count the user asked for by pressing this button.
 * It is async, so a rejection arrives on the promise, not as a throw.
 */
function queueAllModelsRun() {
  const count = Math.max(1, plannedRuns.value);
  const w = globalThis as unknown as {
    app?: { queuePrompt?: (index?: number, batchCount?: number) => unknown };
  };
  const queue = w.app?.queuePrompt;
  if (typeof queue !== "function") return;
  try {
    void Promise.resolve(queue.call(w.app, 0, count)).catch(() => {});
  } catch {
    // a host that refuses the call is not worth breaking the panel over
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
        :options="['Checkpoints', 'Diffusion Models']"
        @update:model-value="(v) => (sourceMode = v)"
      />
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

    <!-- Action Toolbar (Bulk operations) -->
    <div class="fil-cycler-actions-bar">
      <button class="fil-action-link" @click="toggleAll(true)">All ON</button>
      <span class="fil-action-sep">•</span>
      <button class="fil-action-link" @click="toggleAll(false)">All OFF</button>
      <span class="fil-action-sep">•</span>
      <button class="fil-action-link" @click="populateAllFolderModels">Populate Folder</button>
      <span class="fil-action-sep">•</span>
      <button class="fil-action-link danger" @click="clearAllItems">Clear</button>
    </div>

    <!-- Models Stack List -->
    <div class="fil-cycler-stack">
      <div v-if="modelItems.length === 0" class="fil-cycler-empty">
        <span>No models in cycle — click <b>+ Add Model</b> or <b>Populate Folder</b> to build your queue.</span>
      </div>

      <div
        v-for="(item, idx) in modelItems"
        :key="item.id"
        class="fil-cycler-row"
        :class="{ disabled: !item.enabled, isDragging: draggedIndex === idx }"
        draggable="true"
        @dragstart="onDragStart(idx, $event)"
        @dragover="onDragOver($event)"
        @drop="onDrop(idx, $event)"
        @dragend="onDragEnd"
      >
        <!-- Drag Handle Grip -->
        <div class="fil-drag-handle" title="Drag to reorder" @mousedown.stop>
          ⋮⋮
        </div>

        <!-- Info Button -->
        <button
          class="fil-row-info-btn"
          title="Model Information"
          @mousedown.stop
          @click.stop="openInfoModal(item, idx)"
        >
          ⓘ
        </button>

        <div class="fil-cycler-select-wrap">
          <FilComboBox
            :model-value="item.name"
            :options="comboOptions"
            :searchable="true"
            :preview-mode="sourceMode === 'Diffusion Models' ? 'diffusion_models' : 'checkpoints'"
            :placeholder="t('cycler_select_model', 'Select model...')"
            @update:model-value="(val) => updateItemName(idx, val)"
          />
        </div>

        <FilToggle
          :model-value="item.enabled ? 'ON' : 'OFF'"
          bare
          @update:model-value="(v) => toggleItemEnabled(idx, v === 'ON')"
        />

        <button
          class="fil-cycler-remove-btn"
          title="Remove model"
          @click="removeModelItem(idx)"
        >
          ✕
        </button>
      </div>
    </div>

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
        :label="`▶ ${t('cycler_run_all', 'Run All')} (${plannedRuns})`"
        class="fil-cycler-queue-btn"
        :disabled="plannedRuns === 0"
        :title="`Queue ${plannedRuns} runs in ComfyUI to test all active models in order.`"
        @click="queueAllModelsRun"
      />
    </div>

    <!-- What the plain Queue button does, said out loud: one model per run. -->
    <div class="fil-cycler-runs-hint">
      {{
        plannedRuns === 0
          ? t("cycler_runs_hint_empty", "No models in the cycle yet — add rows, or Populate Folder.")
          : t(
              "cycler_runs_hint",
              "Queue runs one model per run — press Run All to queue the whole cycle at once.",
            )
      }}
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

    <!-- Model Info Modal -->
    <FilModal
      v-model:open="infoModalOpen"
      :title="`Model Info — ${activeInfoDetail?.model_title || activeInfoDetail?.cleanName || 'Details'}`"
      width="540px"
    >
      <div v-if="activeInfoDetail" class="fil-info-modal-content">
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
          <span class="fil-info-label">Trained Trigger Words:</span>
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
  gap: 8px;
  padding: 10px;
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-cycler-header {
  width: 100%;
}

.fil-cycler-header :deep(.fil-w-segmented) {
  display: flex;
  width: 100%;
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

.fil-cycler-controls {
  display: flex;
  align-items: center;
  gap: 8px;
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

.fil-cycler-auto-toggle {
  flex: 0 0 auto;
  white-space: nowrap;
}

.fil-cycler-actions-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 11px;
  padding: 0 2px;
}

.fil-action-link {
  background: none;
  border: none;
  color: var(--fil-accent, #a855f7);
  cursor: pointer;
  padding: 0;
  font-size: 11px;
  font-weight: 500;
  transition: opacity 0.1s;
}

.fil-action-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.fil-action-link.danger {
  color: var(--fil-danger, #ef4444);
}

.fil-action-sep {
  color: var(--fil-muted);
  font-size: 9px;
  opacity: 0.5;
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

.fil-cycler-row {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 4px 6px;
  transition: opacity 0.15s, border-color 0.15s;
}

.fil-cycler-row.disabled {
  opacity: 0.5;
}

.fil-cycler-row.isDragging {
  opacity: 0.4;
  border-style: dashed;
  border-color: var(--fil-accent, #a855f7);
}

.fil-drag-handle {
  cursor: grab;
  color: var(--fil-muted);
  font-size: 13px;
  letter-spacing: -1px;
  padding: 0 2px;
  user-select: none;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.1s, color 0.1s;
}

.fil-drag-handle:hover {
  opacity: 1;
  color: var(--fil-accent, #a855f7);
}

.fil-cycler-row:active .fil-drag-handle {
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

.fil-cycler-runs-hint {
  color: var(--fil-muted);
  font-size: 10px;
  line-height: 1.35;
  padding: 2px 2px 0;
  text-align: center;
}

.fil-cycler-adv-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}

.fil-info-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
  color: var(--fil-text);
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
  gap: 6px;
  font-size: 11px;
  line-height: 1.3;
}

.prompt-num {
  color: var(--fil-accent, #a855f7);
  font-weight: 700;
}

.prompt-text {
  color: var(--fil-text);
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
