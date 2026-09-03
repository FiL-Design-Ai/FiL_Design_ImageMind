/**
 * The queue of models the cycler walks, and everything that rewrites it.
 *
 * `model_list` is the single value the backend reads — one model per line, a
 * leading `#` for a row switched off. Every edit here ends in `sync()`, because
 * a rewrite the widget never saw is a rewrite the graph loses on reload.
 */
import { computed, ref, watch, type Ref } from "vue";
import { getJson, postJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";
import { findFilWidget } from "@/nodes2/util";
import { stackDisplayNames } from "@/nodes2/loraNames";
import type { FilComboOption } from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { folderKey, type ModelItem } from "./types";

/** Short lists are read, not searched — the box only earns its row past this. */
const SEARCH_THRESHOLD = 6;

/** The sort orders the toolbar offers, and the key each one sends. */
export const SORT_OPTIONS: string[] = [
  "Name (A-Z)",
  "Name (Z-A)",
  "Size (Max to Min)",
  "Active first",
];

function sortKey(label: string): string {
  if (label.includes("Z-A")) return "name_desc";
  if (label.includes("Size")) return "size_desc";
  if (label.includes("Active")) return "enabled_first";
  return "name_asc";
}

/**
 * What a row calls its model: the file's own name, without the folders above it
 * and without the extension every one of them shares. The full path stays the
 * value, stays in the tooltip and stays in `model_list` — this is the label.
 */
export function displayModelName(name: string): string {
  const base = name.replace(/\\/g, "/").split("/").pop() ?? name;
  return base.replace(/\.(safetensors|ckpt|pt|pth|bin|onnx|gguf|sft)$/i, "");
}

function parseModelList(raw: string): ModelItem[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((name, idx) => ({
      id: `item_${idx}_${Date.now()}`,
      name: name.replace(/^#\s*/, ""),
      enabled: !name.startsWith("#"),
    }));
}

function rowsFrom(names: string[], tag: string): ModelItem[] {
  return names.map((name, idx) => ({
    id: `item_${tag}_${idx}_${Date.now()}`,
    name: name.replace(/^#\s*/, ""),
    enabled: !name.startsWith("#"),
  }));
}

export function useModelQueue(state: FilNodeState, sourceMode: Ref<string>) {
  const items = ref<ModelItem[]>([]);
  const installedModels = ref<string[]>([]);
  const searchFilter = ref("");
  const isRefreshing = ref(false);
  const selectedSort = ref<string>(SORT_OPTIONS[0]);

  const draggedIndex = ref<number | null>(null);
  const dragOverIndex = ref<number | null>(null);

  /**
   * The last thing this panel wrote, so a value arriving from anywhere else can
   * be told apart from the echo of our own write.
   */
  let ourLastWrite = String(state.nodeState["model_list"] ?? "");

  /** `model_list` as the backend wants it, on the state and on the widget. */
  function sync() {
    const serialized = items.value
      .filter((item) => item.name.trim())
      .map((item) => (item.enabled ? item.name : `# ${item.name}`))
      .join("\n");
    ourLastWrite = serialized;
    state.nodeState["model_list"] = serialized;
    const widget = state.node ? findFilWidget(state.node, "model_list") : null;
    if (widget) widget.value = serialized;
  }

  const comboOptions = computed<FilComboOption[]>(() =>
    installedModels.value.map((m) => ({ value: m, label: displayModelName(m) }))
  );

  /**
   * The row labels, grown back towards the path only for the entries that would
   * otherwise read the same — see `loraNames.ts`, shared with the LoRA stack.
   */
  const displayNames = computed(() => stackDisplayNames(items.value.map((item) => item.name)));

  const filteredItems = computed(() => {
    const q = searchFilter.value.trim().toLowerCase();
    const all = items.value.map((item, originalIndex) => ({ item, originalIndex }));
    if (!q) return all;
    return all.filter(({ item }) => item.name.toLowerCase().includes(q));
  });

  /** Rows that are on and actually name a file — the number of runs a Queue makes. */
  const activeCount = computed(
    () => items.value.filter((i) => i.enabled && i.name.trim()).length
  );

  /** How many rows are switched on — the number the strip's counter reports. */
  const enabledCount = computed(() => items.value.filter((i) => i.enabled).length);

  const showSearch = computed(() => items.value.length > SEARCH_THRESHOLD);

  // A filter left behind by a list that has since shrunk would keep hiding rows
  // with nothing on screen to say why, so it goes when the box does.
  watch(showSearch, (visible) => {
    if (!visible) searchFilter.value = "";
  });

  function normalizePath(p: string): string {
    return p.replace(/\\/g, "/").trim().toLowerCase();
  }

  function isModelMissing(name: string): boolean {
    if (!name || !name.trim() || installedModels.value.length === 0) return false;
    const cleanName = normalizePath(name);
    return !installedModels.value.some((installed) => normalizePath(installed) === cleanName);
  }

  async function loadInstalledModels() {
    try {
      const res = await getJson<{ models: string[] }>(
        `${ROUTE_PREFIX}/models_list/${folderKey(sourceMode.value)}`
      );
      installedModels.value = res?.models ?? [];
    } catch {
      installedModels.value = [];
    }
  }

  async function refresh() {
    isRefreshing.value = true;
    await loadInstalledModels();
    setTimeout(() => {
      isRefreshing.value = false;
    }, 500);
  }

  function loadFromState() {
    const raw = String(state.nodeState["model_list"] ?? "");
    ourLastWrite = raw;
    if (raw) items.value = parseModelList(raw);

    // And keep following it. Reported from a live graph: switching between two
    // open workflows emptied the list. Reading it once on mount was the reason —
    // on a switch the node is built and its panel mounted before `onConfigure`
    // restores the saved widget values, so the panel reads an empty `model_list`
    // and nothing ever tells it the real one arrived a moment later. On a fresh
    // page load the same race lands the other way, because the panel's chunk is
    // still being fetched while the values are restored — which is why this only
    // ever showed up when switching.
    //
    // `ourLastWrite` keeps the panel from re-parsing its own writing, which would
    // rebuild every row — new ids, dropped `autoOpen` — on each edit.
    watch(
      () => String(state.nodeState["model_list"] ?? ""),
      (incoming) => {
        if (incoming === ourLastWrite) return;
        ourLastWrite = incoming;
        items.value = incoming ? parseModelList(incoming) : [];
      }
    );
  }

  /** Drop the queue and rebuild it from `# `-marked names — sorting, folders. */
  function replaceAll(names: string[], tag = "r") {
    items.value = rowsFrom(names, tag);
    sync();
  }

  function add() {
    items.value.push({
      id: `item_${Date.now()}_${Math.random()}`,
      name: "",
      enabled: true,
      autoOpen: true,
    });
    sync();
  }

  function remove(index: number) {
    items.value.splice(index, 1);
    sync();
  }

  function duplicate(index: number) {
    const item = items.value[index];
    if (!item) return;
    items.value.splice(index + 1, 0, {
      ...item,
      id: `item_${Date.now()}_${Math.random()}`,
      autoOpen: false,
    });
    sync();
  }

  /** Move a row one place up or down; the same splice the drag path uses. */
  function move(index: number, delta: number) {
    const target = index + delta;
    if (target < 0 || target >= items.value.length) return;
    const [item] = items.value.splice(index, 1);
    items.value.splice(target, 0, item);
    sync();
  }

  function setName(index: number, name: string) {
    const item = items.value[index];
    if (!item) return;
    item.name = name;
    sync();
  }

  function setEnabled(index: number, enabled: boolean) {
    const item = items.value[index];
    if (!item) return;
    item.enabled = enabled;
    sync();
  }

  function toggleAll(enable: boolean) {
    items.value.forEach((item) => {
      item.enabled = enable;
    });
    sync();
  }

  /** An empty row whose picker was closed without a choice never existed. */
  function onComboClose(index: number) {
    const item = items.value[index];
    if (item && !item.name.trim()) remove(index);
  }

  function populateFromFolder() {
    replaceAll(installedModels.value, "all");
  }

  function clear() {
    items.value = [];
    sync();
  }

  /** Size order needs the files on disk, so the sort happens on the backend. */
  async function applySorting(label: string) {
    if (!label || items.value.length === 0) return;
    selectedSort.value = label;
    const raw = items.value.map((i) => (i.enabled ? i.name : `# ${i.name}`));
    try {
      const res = await postJson<{ sorted_models: string[] }>(`${ROUTE_PREFIX}/sort_models`, {
        mode: folderKey(sourceMode.value),
        models: raw,
        sort_by: sortKey(label),
      });
      if (res?.sorted_models) replaceAll(res.sorted_models, "s");
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
    if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  }

  function onDragLeave(index: number) {
    if (dragOverIndex.value === index) dragOverIndex.value = null;
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
      fromIndex >= items.value.length
    ) {
      draggedIndex.value = null;
      return;
    }
    const [item] = items.value.splice(fromIndex, 1);
    items.value.splice(targetIndex, 0, item);
    draggedIndex.value = null;
    sync();
  }

  function onDragEnd() {
    draggedIndex.value = null;
    dragOverIndex.value = null;
  }

  return {
    items,
    installedModels,
    comboOptions,
    displayNames,
    filteredItems,
    searchFilter,
    showSearch,
    activeCount,
    enabledCount,
    isRefreshing,
    selectedSort,
    sortOptions: SORT_OPTIONS,
    draggedIndex,
    dragOverIndex,
    isModelMissing,
    loadFromState,
    loadInstalledModels,
    refresh,
    replaceAll,
    add,
    remove,
    duplicate,
    move,
    setName,
    setEnabled,
    toggleAll,
    onComboClose,
    populateFromFolder,
    clear,
    applySorting,
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
    onDragEnd,
  };
}

export type ModelQueue = ReturnType<typeof useModelQueue>;
