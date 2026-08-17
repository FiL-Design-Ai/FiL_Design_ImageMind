<script setup lang="ts">
/**
 * FiLModelCycler — Cyberpunk HUD panel for cycling diffusion models & checkpoints.
 * Inspired by Power Lora Loader (rgthree) & Pixaroma, tailored for model testing.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch, onMounted } from "vue";
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
import { floatedBandWidth, panelEdgesInGraph, socketBandBox } from "@/nodes2/socketBand";
import { stackDisplayNames } from "@/nodes2/loraNames";

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

/**
 * What a row calls its model: the file's own name, without the folders above it
 * and without the extension every one of them shares. The full path stays the
 * value, stays in the tooltip and stays in `model_list` — this is the label.
 */
function displayModelName(name: string): string {
  const base = name.replace(/\\/g, "/").split("/").pop() ?? name;
  return base.replace(/\.(safetensors|ckpt|pt|pth|bin|onnx|gguf|sft)$/i, "");
}

const comboOptions = computed<FilComboOption[]>(() =>
  installedModels.value.map((m) => ({ value: m, label: displayModelName(m) }))
);

/**
 * The row labels, grown back towards the path only for the entries that would
 * otherwise read the same — see `loraNames.ts`, shared with the LoRA stack.
 */
const displayNames = computed(() => stackDisplayNames(modelItems.value.map((item) => item.name)));

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

/** How many rows are switched on — the number the strip's counter reports. */
const enabledModelCount = computed(() => modelItems.value.filter((i) => i.enabled).length);

/**
 * The toolbar rides in the socket strip when the node's own labels leave room
 * for it — the same block the LoRA Loader uses, measured off this node rather
 * than tuned by hand. `socketBand.ts` explains the rest.
 */
const actionsBarEl = ref<HTMLElement | null>(null);
const bandStyle = ref<Record<string, string> | null>(null);

function measureBand() {
  const node = props.state.node as Parameters<typeof socketBandBox>[0] | undefined;
  if (!actionsBarEl.value || !node) return;

  // Measure the block where it sits in flow: floated, its own offsets would be
  // what the next measurement reads back.
  bandStyle.value = null;

  nextTick(() => {
    const target = actionsBarEl.value;
    const panelRoot = target?.parentElement;
    if (!target || !panelRoot) return;
    const edges = panelEdgesInGraph(panelRoot);
    if (!edges) return;

    const scale =
      (globalThis as { app?: { canvas?: { ds?: { scale: number } } } }).app?.canvas?.ds?.scale || 1;
    const asBox = (box: ReturnType<typeof socketBandBox>) =>
      box ? { top: `${box.top}px`, left: `${box.left}px`, right: `${box.right}px` } : null;

    const barHeight = target.getBoundingClientRect().height / scale;
    const box = socketBandBox(node, edges, barHeight);

    // The strip has to hold the block, not merely exist — measured in the shape
    // the block takes up there, which is not the shape it has down here.
    const needed = floatedBandWidth(target as HTMLElement);
    bandStyle.value = box && box.width >= needed ? asBox(box) : null;
  });
}

let bandObserver: ResizeObserver | null = null;

/** Short lists are read, not searched — the box only earns its row past this. */
const SEARCH_THRESHOLD = 6;
const showSearch = computed(() => modelItems.value.length > SEARCH_THRESHOLD);

// A filter left behind by a list that has since shrunk would keep hiding rows
// with nothing on screen to say why, so it goes when the box does.
watch(showSearch, (visible) => {
  if (!visible) searchFilter.value = "";
});

/** The bulk actions, behind one button — same as the LoRA Loader's. */
const menuOpen = ref(false);

function runFromMenu(action: () => void) {
  action();
  menuOpen.value = false;
}



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

  measureBand();
  // The strip's width follows the node's, so a resize can turn a fitting
  // toolbar into one that would cover the labels — and back.
  const panelRoot = actionsBarEl.value?.parentElement;
  if (panelRoot && typeof ResizeObserver !== "undefined") {
    bandObserver = new ResizeObserver(() => measureBand());
    bandObserver.observe(panelRoot);
  }
});

onBeforeUnmount(() => {
  bandObserver?.disconnect();
  bandObserver = null;
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
    // `fetch=1` — the dialog is an explicit question about one model, so this
    // is where a Civitai lookup belongs; nothing else in the panel asks for it.
    const res = await getJson<Partial<ModelInfoDetail> & { error?: string }>(`${ROUTE_PREFIX}/model_info?mode=${modeKey}&fetch=1&path=${encodeURIComponent(name)}`);
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

/**
 * The row's own menu, on right-click.
 *
 * `preventDefault` on our own row element is what keeps LiteGraph's canvas menu
 * from opening on top of it. Rendered in flow inside the panel rather than
 * floating over the page: a popover above a node gets clipped by the canvas.
 */
const rowMenu = ref<{ index: number; x: number; y: number } | null>(null);

function openRowMenu(index: number, event: MouseEvent) {
  const panel = actionsBarEl.value?.parentElement;
  const rect = panel?.getBoundingClientRect();
  rowMenu.value = {
    index,
    x: rect ? event.clientX - rect.left : 0,
    y: rect ? event.clientY - rect.top : 0,
  };
}

function closeRowMenu() {
  rowMenu.value = null;
}

function runRowAction(action: () => void) {
  action();
  closeRowMenu();
}

/** Move a row one place up or down; the same splice the drag path uses. */
function moveItem(index: number, delta: number) {
  const target = index + delta;
  if (target < 0 || target >= modelItems.value.length) return;
  const [item] = modelItems.value.splice(index, 1);
  modelItems.value.splice(target, 0, item);
  syncToNodeState();
}

function duplicateItem(index: number) {
  const item = modelItems.value[index];
  if (!item) return;
  modelItems.value.splice(index + 1, 0, {
    ...item,
    id: `item_${Date.now()}_${Math.random()}`,
    autoOpen: false,
  });
  syncToNodeState();
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
  <div class="fil-cycler-root" :class="{ 'fil-band-open': Boolean(bandStyle) || Boolean(rowMenu) }">

    <!-- The whole toolbar, in three lines, lifted into the strip the socket
         labels leave empty when there is room for it — where it costs the node
         no height at all. `bandStyle` is null when there is not, and the block
         simply stays in flow. -->
    <div
      ref="actionsBarEl"
      class="fil-cycler-actions-bar"
      :class="{ floated: Boolean(bandStyle) }"
      :style="bandStyle ?? undefined"
    >
      <!-- Line 1: where the models come from, and re-reading the folder at the
           far end — directly above the rest of the right-hand column. -->
      <div class="fil-band-line">
        <div class="fil-band-source">
          <FilSegmented
            :model-value="sourceMode"
            :options="['Diffusion Models', 'Checkpoints']"
            @update:model-value="(v) => (sourceMode = v)"
          />
        </div>
        <button
          class="fil-refresh-models-btn"
          :class="{ spinning: isRefreshingModels }"
          title="🔄 Re-read the installed models from disk & extra paths"
          aria-label="Refresh the model list"
          @mousedown.stop
          @click.stop="refreshModelsList"
        >
          ⟳
        </button>
      </div>

      <!-- Line 2: how the cycle walks the list, how the list is ordered, which
           saved list it came from — and the rest behind one button. -->
      <div class="fil-band-line">
        <div class="fil-cycler-mode-select">
          <FilSelect
            :model-value="cycleMode"
            :options="cycleOptions"
            @update:model-value="(v) => (cycleMode = v)"
          />
        </div>
        <div class="fil-sort-select-wrap">
          <FilSelect
            :model-value="selectedSort"
            :options="sortOptions"
            @update:model-value="applyModelSorting"
          />
        </div>
        <div class="fil-preset-combo-wrap">
          <FilComboBox
            :model-value="selectedPresetName"
            :options="presetComboOptions"
            placeholder="📂 Preset..."
            @update:model-value="selectPreset"
          />
        </div>
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

      <!-- Line 3: adding a model, what the queue currently amounts to, and
           running the lot. -->
      <div class="fil-band-line">
        <button class="fil-band-add" @click="addModelItem">+ Add Model</button>
        <button
          v-if="modelItems.length"
          class="fil-stack-count"
          :title="enabledModelCount === modelItems.length ? 'Switch every model off' : 'Switch every model on'"
          @click="toggleAll(enabledModelCount !== modelItems.length)"
        >
          <span class="fil-stack-switch" :class="{ on: enabledModelCount > 0 }"></span>
          {{ enabledModelCount }} / {{ modelItems.length }}
        </button>
        <button
          class="fil-action-link fil-cycler-queue-btn"
          :title="`Queue ${activeModelCount} runs in ComfyUI to test all active models in order.`"
          @click="queueAllModelsRun"
        >
          ▶ Run All ({{ activeModelCount }})
        </button>
      </div>
    </div>

    <!-- In flow, not floating: a popover over a node gets clipped by the canvas. -->
    <div v-if="menuOpen" class="fil-actions-menu">
      <button class="fil-action-link highlight" title="Save Current List as Preset" @click="runFromMenu(() => (savePresetModalOpen = true))">💾 Save Preset</button>
      <button v-if="selectedPresetName" class="fil-action-link danger" title="Delete Selected Preset" @click="runFromMenu(deleteSelectedPreset)">🗑️ Delete Preset</button>
      <button class="fil-action-link" title="Fill the queue with every model in the folder" @click="runFromMenu(populateAllFolderModels)">Populate Folder</button>
      <button class="fil-action-link danger" title="Remove every model from the queue" @click="runFromMenu(clearAllItems)">Clear</button>
    </div>

    <!-- Active Run Status Badge -->
    <div v-if="lastRun" class="fil-cycler-now">
      <span class="fil-cycler-now-badge">{{ lastRun.position }}/{{ lastRun.total }}</span>
      <span class="fil-cycler-now-text" :title="lastRun.model_name">
        {{ lastRun.clean_name || lastRun.model_name }}
      </span>
    </div>

    <!-- A filter box over three rows is a row of chrome buying nothing. -->
    <div v-if="showSearch" class="fil-cycler-search-bar">
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
        @contextmenu.prevent.stop="openRowMenu(originalIndex, $event)"
        @dragover="onDragOver(originalIndex, $event)"
        @dragleave="onDragLeave(originalIndex)"
        @drop="onDrop(originalIndex, $event)"
        @dragend="onDragEnd"
      >
        <!-- One line: grip, name, info, switch. Remove and reordering live in
             the row's right-click menu — a queue is read far more often than it
             is edited. Only the grip is draggable. -->
        <div
          class="fil-drag-handle"
          title="Drag handle to reorder item"
          :draggable="!searchFilter"
          @dragstart="onDragStart(originalIndex, $event)"
        >
          ⋮⋮
        </div>

        <!-- Missing file warning badge -->
        <span
          v-if="isModelMissing(item.name)"
          class="fil-missing-badge"
          title="⚠️ Warning: Model file is missing from disk or unmounted!"
        >
          ⚠️
        </span>

        <div class="fil-cycler-select-wrap" :title="item.name || 'Select model'">
          <FilComboBox
            :model-value="item.name"
            :options="comboOptions"
            :searchable="true"
            :auto-open="item.autoOpen"
            :trigger-label="displayNames[originalIndex]"
            :title="item.name"
            browse-folders
            :preview-mode="sourceMode === 'Diffusion Models' ? 'diffusion_models' : 'checkpoints'"
            :placeholder="t('cycler_select_model', 'Select model...')"
            @close="onComboClose(originalIndex)"
            @update:model-value="(val) => updateItemName(originalIndex, val)"
          />
        </div>

        <button
          class="fil-row-info-btn"
          title="Model Information"
          aria-label="Model information"
          @mousedown.stop
          @click.stop="openInfoModal(item, originalIndex)"
        >
          ⓘ
        </button>

        <FilToggle
          :model-value="item.enabled ? 'ON' : 'OFF'"
          bare
          @update:model-value="(v) => toggleItemEnabled(originalIndex, v === 'ON')"
        />
      </div>
    </TransitionGroup>

    <!-- The row menu. In flow inside the panel, so the canvas cannot clip it,
         and closed by anything that is not a click on itself. -->
    <div
      v-if="rowMenu"
      class="fil-row-menu-backdrop"
      @click="closeRowMenu"
      @contextmenu.prevent="closeRowMenu"
    >
      <div
        class="fil-row-menu"
        :style="{ top: `${rowMenu.y}px`, left: `${rowMenu.x}px` }"
        @click.stop
        @contextmenu.prevent.stop
      >
        <button class="fil-row-menu-item" @click="runRowAction(() => openInfoModal(modelItems[rowMenu!.index], rowMenu!.index))">
          <span class="fil-row-menu-icon">ⓘ</span> More info
        </button>
        <button
          class="fil-row-menu-item"
          :disabled="rowMenu.index === 0"
          @click="runRowAction(() => moveItem(rowMenu!.index, -1))"
        >
          <span class="fil-row-menu-icon">↑</span> Move up
        </button>
        <button
          class="fil-row-menu-item"
          :disabled="rowMenu.index >= modelItems.length - 1"
          @click="runRowAction(() => moveItem(rowMenu!.index, 1))"
        >
          <span class="fil-row-menu-icon">↓</span> Move down
        </button>
        <button class="fil-row-menu-item" @click="runRowAction(() => duplicateItem(rowMenu!.index))">
          <span class="fil-row-menu-icon">⧉</span> Duplicate
        </button>
        <button
          class="fil-row-menu-item"
          @click="runRowAction(() => toggleItemEnabled(rowMenu!.index, !modelItems[rowMenu!.index].enabled))"
        >
          <span class="fil-row-menu-icon">◉</span>
          {{ modelItems[rowMenu.index]?.enabled ? "Disable" : "Enable" }}
        </button>
        <button class="fil-row-menu-item danger" @click="runRowAction(() => removeModelItem(rowMenu!.index))">
          <span class="fil-row-menu-icon">✕</span> Remove
        </button>
      </div>
    </div>

    <!-- No buttons down here: adding a model and running the queue both live on
         the third line of the toolbar, floated or not, and having them in both
         places showed each of them twice. -->

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

        <!-- Thumbnail Cover Preview -->
        <div class="fil-info-preview-wrap">
          <img
            :src="`${ROUTE_PREFIX}/model_preview?mode=${sourceMode === 'Diffusion Models' ? 'diffusion_models' : 'checkpoints'}&path=${encodeURIComponent(activeInfoDetail.fullName)}`"
            class="fil-info-preview-img"
            alt="Model Preview Thumbnail"
            @error="(e) => ((e.target as HTMLElement).style.display = 'none')"
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
/* Every panel surface in the pack is clipped to its rounded corners by the
   shared rule in `styles/brand.ts` — which also swallows a toolbar lifted above
   the panel, and the row menu where it runs past the last row. Opting out is
   scoped to this panel and to the two states that need it. */
.fil-node-shell .fil-cycler-root.fil-band-open {
  overflow: visible;
}

.fil-cycler-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px 6px;
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
  /* The containing block the floated toolbar measures its offsets against. */
  position: relative;
}

.fil-band-source {
  display: flex;
  flex: 1;
  min-width: 0;
}

.fil-band-source :deep(.fil-w-segmented) {
  display: flex;
  flex: 1;
  min-width: 0;
}

.fil-band-source :deep(.fil-w-pill) {
  flex: 1;
  width: 100%;
  grid-column: 1 / -1;
}

.fil-band-source :deep(.fil-w-seg) {
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
  height: 20px;
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

.fil-cycler-now {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 3px 8px;
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 14%, var(--fil-surface-2, #18181b));
  border: 1px solid color-mix(in srgb, var(--fil-accent, #a855f7) 35%, transparent);
  border-radius: 5px;
  box-sizing: border-box;
}

.fil-cycler-now-badge {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 10px;
  font-weight: 800;
  color: var(--fil-accent-text, #c084fc);
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 25%, transparent);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--fil-accent, #a855f7) 40%, transparent);
  flex-shrink: 0;
}

.fil-cycler-now-text {
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: var(--fil-text, #f4f4f5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

.fil-band-line {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  min-width: 0;
}

/* Re-read pins to the right of its line, which puts it in the same column as
   the ••• button and Run All below it, instead of drifting with the width of
   whatever sits to their left. */
.fil-band-line .fil-refresh-models-btn {
  margin-left: auto;
}

.fil-cycler-mode-select {
  flex: 1;
  min-width: 0;
}

/* The mode box carries a sentence — it gives way to the two fixed-width boxes
   beside it rather than pushing them off the line. */
.fil-cycler-mode-select :deep(.fil-w-select-input) {
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  box-sizing: border-box;
  padding: 0 3px;
  font-size: 11px;
  line-height: 18px;
}

.fil-band-add {
  flex: 1;
  height: 24px;
  /* A label allowed to wrap makes the block look narrower than it is, and the
     strip check believes it — that is how "+ Add Model" ended up on two lines
     inside a strip 100px too small for it. */
  white-space: nowrap;
  border: none;
  border-radius: 8px;
  background: var(--fil-accent-strong, #ffd60a);
  color: #1c1c1e;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 14px color-mix(in srgb, var(--fil-accent-strong, #ffd60a) 35%, transparent);
}

.fil-band-add:hover {
  filter: brightness(1.06);
}

/* The counter stands beside the add button and reads as one line with it only
   if it is the same height. */
.fil-stack-count {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  box-sizing: border-box;
  background: var(--fil-surface-2, #18181b);
  border: 1px solid color-mix(in srgb, var(--fil-border) 90%, transparent);
  border-radius: 999px;
  padding: 0 10px 0 4px;
  color: var(--fil-muted);
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.fil-stack-count:hover {
  color: var(--fil-text);
  border-color: color-mix(in srgb, var(--fil-accent, #a855f7) 55%, transparent);
}

/* Reads as the row switches do, so the tie between them is visible rather than
   explained. */
.fil-stack-switch {
  width: 20px;
  height: 11px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--fil-border) 90%, transparent);
  position: relative;
  flex: none;
  transition: background 0.12s;
}

.fil-stack-switch::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--fil-muted);
  transition: transform 0.12s, background 0.12s;
}

.fil-stack-switch.on {
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 65%, transparent);
}

.fil-stack-switch.on::after {
  transform: translateX(9px);
  background: #fff;
}

.fil-cycler-queue-btn {
  height: 24px;
  max-height: 24px;
  font-size: 11px;
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

.fil-actions-more.open,
.fil-action-link.highlight {
  color: var(--fil-accent-text, #c084fc);
}

.fil-preset-combo-wrap {
  flex: 1;
  min-width: 0;
}

/* Same height as the two select boxes it shares the line with. */
.fil-preset-combo-wrap :deep(.fil-combo-trigger) {
  width: 100%;
  height: 20px;
  min-height: 20px;
  box-sizing: border-box;
  padding: 0 6px;
  font-size: 11px;
}

/* Three stacked lines, not one row of controls: a row flex puts the lines side
   by side and the block measures three times too wide to ever fit the strip. */
.fil-cycler-actions-bar {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 1px 0;
  width: 100%;
  flex-wrap: nowrap;
}

/* Out of flow and up into the socket strip. Pointer events stay on the controls
   themselves, so the empty stretch between them still belongs to the canvas and
   dragging the node by that gap keeps working. */
.fil-cycler-actions-bar.floated {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  /* The bar is `width: 100%` in flow. Left and right insets plus a width is an
     over-constrained box and CSS drops the right one, so the bar would keep the
     panel's full width and run out over the output labels. */
  width: auto;
  /* One type size and one control height across the whole strip: Pixaroma's
     node reads tidy for exactly this reason. */
  font-size: 11px;
}

.fil-cycler-actions-bar.floated > * {
  pointer-events: auto;
}

.fil-cycler-actions-bar.floated .fil-action-link,
.fil-cycler-actions-bar.floated .fil-actions-more,
.fil-cycler-actions-bar.floated .fil-refresh-models-btn {
  height: 20px;
  box-sizing: border-box;
  font-size: 11px;
  font-weight: 500;
}

.fil-cycler-actions-bar.floated .fil-cycler-queue-btn {
  height: 24px;
}

.fil-cycler-actions-bar.floated :deep(.fil-w-select-input) {
  height: 20px;
  font-size: 11px;
}

/* The sort box carries an icon, three characters and a chevron — the wide
   default was 96px of strip for that. */
.fil-cycler-actions-bar.floated .fil-sort-select-wrap {
  width: 84px;
  min-width: 84px;
  flex: 0 0 84px;
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
  gap: 4px;
  min-width: 0;
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
  opacity: 0.45;
  transform: scale(0.98) translateY(-2px);
  border: 1.5px dashed var(--fil-accent, #a855f7);
  background: color-mix(in srgb, var(--fil-accent) 15%, var(--fil-surface-1));
  box-shadow: 0 8px 20px color-mix(in srgb, var(--fil-accent) 35%, transparent);
}

.fil-cycler-row.isDragOver {
  border-color: var(--fil-accent, #00f0ff);
  box-shadow: 0 0 14px color-mix(in srgb, var(--fil-accent, #00f0ff) 60%, transparent);
}

.fil-cycler-row.dragOverAbove::before {
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

.fil-cycler-row.dragOverBelow::after {
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

.fil-drag-handle {
  cursor: grab;
  color: var(--fil-muted);
  font-size: 11px;
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

/* The name is what a queue is read by, so it gets the room the removed cross
   and the shorter labels gave back — two steps up from the widget's own 12px,
   and lined up on the left so the eye runs down the starts. */
.fil-cycler-select-wrap :deep(.fil-combo-trigger) {
  font-size: 14px;
  justify-content: flex-start;
  text-align: left;
}

.fil-cycler-select-wrap :deep(.fil-combo-trigger-label) {
  text-align: left;
}

/* The switch is a target, not a label — two thirds of its stock size still
   takes a click comfortably and hands the name another dozen pixels. */
.fil-cycler-row :deep(.fil-w-toggle) {
  transform: scale(0.82);
  transform-origin: right center;
  flex: none;
}

.fil-row-menu-backdrop {
  position: absolute;
  inset: 0;
  z-index: 20;
}

.fil-row-menu {
  position: absolute;
  min-width: 150px;
  padding: 4px;
  background: var(--fil-surface-2, #18181b);
  border: 1px solid color-mix(in srgb, var(--fil-border) 90%, transparent);
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.fil-row-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--fil-text);
  font-size: 11px;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
}

.fil-row-menu-item:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 22%, transparent);
}

.fil-row-menu-item:disabled {
  color: var(--fil-muted);
  cursor: default;
  opacity: 0.5;
}

.fil-row-menu-item.danger:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fil-danger, #ef4444) 22%, transparent);
  color: var(--fil-danger, #ef4444);
}

.fil-row-menu-icon {
  width: 12px;
  text-align: center;
  color: var(--fil-muted);
}

.fil-cycler-btn-group {
  display: flex;
  gap: 6px;
  width: 100%;
  margin-top: 2px;
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
