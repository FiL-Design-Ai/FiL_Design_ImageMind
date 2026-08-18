<script setup lang="ts">
/**
 * FiLModelCycler — the panel that builds the queue of models the node walks.
 *
 * This file is the wiring only: it owns the widget-backed values, hands the
 * queue and the info dialog to their own modules, and lays the parts out.
 * Anything with logic in it lives in `modelCycler/`.
 */
import { computed, onMounted, ref, watch } from "vue";
import { FilSection, FilSelect, FilToggle } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useSocketBand, type BandNode } from "@/composables/useSocketBand";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import CyclerRow from "./modelCycler/CyclerRow.vue";
import CyclerRowMenu from "./modelCycler/CyclerRowMenu.vue";
import CyclerToolbar from "./modelCycler/CyclerToolbar.vue";
import ModelInfoModal from "./modelCycler/ModelInfoModal.vue";
import { folderKey, type CyclerRun } from "./modelCycler/types";
import { useModelInfo } from "./modelCycler/useModelInfo";
import { useModelQueue } from "./modelCycler/useModelQueue";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

/** A value the node also carries as a widget: both copies move together. */
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

const cycleOptions = [
  "Sequential (Loop)",
  "Sequential (Stop)",
  "Ping-Pong",
  "Random",
  "Fixed Index",
];

const weightDtypeOptions = ["default", "fp16", "bf16", "fp8_e4m3fn", "fp8_e5m2"];

const queue = useModelQueue(props.state, sourceMode);
const info = useModelInfo(sourceMode);

const previewMode = computed(() => folderKey(sourceMode.value));

/**
 * The toolbar's own width, whatever the node's is.
 *
 * The three lines were laid out against this: at 400 every box holds its
 * label and nothing stretches. Given the whole strip of a wide node instead,
 * the selects grow to fill it and the panel reads differently at every width.
 */
const TOOLBAR_WIDTH = 400;

const rootEl = ref<HTMLElement | null>(null);
const toolbar = ref<{ el: HTMLElement | null } | null>(null);
const toolbarEl = computed(() => toolbar.value?.el ?? null);
const { bandStyle, measure: measureBand } = useSocketBand(
  () => props.state.node as BandNode | undefined,
  toolbarEl,
  { maxWidth: TOOLBAR_WIDTH }
);

// The counter is the one control that comes and goes, so an empty queue and a
// full one are two different toolbars — and the strip has to be asked about
// both. Nothing else the list does changes what the bar needs, which is why
// the observer above ignores height.
watch(
  () => queue.items.value.length > 0,
  () => measureBand()
);

/** What the node reported about the run that just happened. */
const lastRun = ref<CyclerRun | null>(null);

onMounted(() => {
  queue.loadFromState();
  queue.loadInstalledModels();

  const node = props.state.node as { _filCyclerLastRun?: CyclerRun } | undefined;
  if (node?._filCyclerLastRun) lastRun.value = node._filCyclerLastRun;
  props.state.ui.onCycleRun = (r: unknown) => {
    lastRun.value = r as CyclerRun;
  };
});

// The other folder holds other models, so the pickers have to be re-offered.
watch(sourceMode, () => {
  queue.loadInstalledModels();
});

/**
 * The row menu's position is panel-local, so the canvas cannot clip it: a
 * popover floating above a node gets cut off at the node's edge.
 */
const rowMenu = ref<{ index: number; x: number; y: number } | null>(null);

function openRowMenu(index: number, event: MouseEvent) {
  const rect = rootEl.value?.getBoundingClientRect();
  rowMenu.value = {
    index,
    x: rect ? event.clientX - rect.left : 0,
    y: rect ? event.clientY - rect.top : 0,
  };
}

function showInfo(index: number) {
  const item = queue.items.value[index];
  if (item) info.show(item.name, index);
}

/** One ComfyUI run per active model, in the order the queue lists them. */
function queueAllModelsRun() {
  const count = queue.activeCount.value || 1;
  const w = globalThis as unknown as {
    app?: { queuePrompt?: (index?: number, batchCount?: number) => void };
  };
  if (!w.app?.queuePrompt) return;
  try {
    w.app.queuePrompt(0, count);
  } catch {
    w.app.queuePrompt(count as unknown as number);
  }
}
</script>

<template>
  <div
    ref="rootEl"
    class="fil-cycler-root"
    :class="{ 'fil-band-open': Boolean(bandStyle) || Boolean(rowMenu) }"
  >
    <CyclerToolbar
      ref="toolbar"
      :source-mode="sourceMode"
      :cycle-mode="cycleMode"
      :cycle-options="cycleOptions"
      :sort-value="queue.selectedSort.value"
      :sort-options="queue.sortOptions"
      :is-refreshing="queue.isRefreshing.value"
      :enabled-count="queue.enabledCount.value"
      :total-count="queue.items.value.length"
      :active-count="queue.activeCount.value"
      :band-style="bandStyle"
      @update:source-mode="(v) => (sourceMode = v)"
      @update:cycle-mode="(v) => (cycleMode = v)"
      @sort="queue.applySorting"
      @refresh="queue.refresh"
      @clear="queue.clear"
      @add="queue.add"
      @populate="queue.populateFromFolder"
      @toggle-all="queue.toggleAll(queue.enabledCount.value !== queue.items.value.length)"
      @run="queueAllModelsRun"
    />

    <!-- Which model the run in progress is on. -->
    <div v-if="lastRun" class="fil-cycler-now">
      <span class="fil-cycler-now-badge">{{ lastRun.position }}/{{ lastRun.total }}</span>
      <span class="fil-cycler-now-text" :title="lastRun.model_name">
        {{ lastRun.clean_name || lastRun.model_name }}
      </span>
    </div>

    <!-- A filter box over three rows is a row of chrome buying nothing. -->
    <div v-if="queue.showSearch.value" class="fil-cycler-search-bar">
      <input
        v-model="queue.searchFilter.value"
        type="search"
        class="fil-stack-search-input"
        placeholder="Filter model list..."
        spellcheck="false"
        @keydown.stop
      />
    </div>

    <TransitionGroup name="fil-stack-list" tag="div" class="fil-cycler-stack" @wheel.stop>
      <div v-if="queue.items.value.length === 0" key="empty" class="fil-cycler-empty">
        <span>
          No models in cycle — click <b>+ Add Model</b> for one, or <b>Add All</b> for the
          whole folder.
        </span>
      </div>

      <CyclerRow
        v-for="{ item, originalIndex } in queue.filteredItems.value"
        :key="item.id"
        :item="item"
        :display-name="queue.displayNames.value[originalIndex]"
        :options="queue.comboOptions.value"
        :preview-mode="previewMode"
        :missing="queue.isModelMissing(item.name)"
        :draggable="!queue.searchFilter.value"
        :dragging="queue.draggedIndex.value === originalIndex"
        :drag-over="queue.dragOverIndex.value === originalIndex"
        :drag-over-above="
          queue.dragOverIndex.value === originalIndex &&
          queue.draggedIndex.value !== null &&
          originalIndex < queue.draggedIndex.value
        "
        :drag-over-below="
          queue.dragOverIndex.value === originalIndex &&
          queue.draggedIndex.value !== null &&
          originalIndex > queue.draggedIndex.value
        "
        @menu="(e) => openRowMenu(originalIndex, e)"
        @info="showInfo(originalIndex)"
        @drag-start="(e) => queue.onDragStart(originalIndex, e)"
        @drag-over="(e) => queue.onDragOver(originalIndex, e)"
        @drag-leave="queue.onDragLeave(originalIndex)"
        @drop="(e) => queue.onDrop(originalIndex, e)"
        @drag-end="queue.onDragEnd"
        @close-picker="queue.onComboClose(originalIndex)"
        @update:name="(name) => queue.setName(originalIndex, name)"
        @update:enabled="(on) => queue.setEnabled(originalIndex, on)"
      />
    </TransitionGroup>

    <CyclerRowMenu
      v-if="rowMenu"
      :x="rowMenu.x"
      :y="rowMenu.y"
      :index="rowMenu.index"
      :total="queue.items.value.length"
      :enabled="Boolean(queue.items.value[rowMenu.index]?.enabled)"
      @close="rowMenu = null"
      @info="showInfo(rowMenu!.index)"
      @move="(delta) => queue.move(rowMenu!.index, delta)"
      @duplicate="queue.duplicate(rowMenu!.index)"
      @toggle-enabled="
        queue.setEnabled(rowMenu!.index, !queue.items.value[rowMenu!.index]?.enabled)
      "
      @remove="queue.remove(rowMenu!.index)"
    />

    <!-- No buttons down here: adding a model and running the queue both live on
         the toolbar, floated or not, and having them in both places showed each
         of them twice. -->

    <FilSection v-model="isAdvancedCollapsed" :title="t('cycler_advanced', 'Advanced Settings')" />
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

    <ModelInfoModal
      :open="info.open.value"
      :detail="info.detail.value"
      :copy-message="info.copyMessage.value"
      :total="queue.items.value.length"
      @update:open="(v) => (info.open.value = v)"
      @copy="info.copy"
    />
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


/* A button, a select and an input do not inherit a font family from the box
   they sit in — the browser hands them its own default, which is Arial here.
   So the toolbar was literally set in a different typeface from the panel
   around it: the node's name and its own list in system-ui, every button on
   the strip in Arial. Measured on the canvas, not guessed. */
.fil-cycler-root :deep(button),
.fil-cycler-root :deep(select),
.fil-cycler-root :deep(input) {
  font-family: inherit;
}


/* The counter is the exception: its two numbers change under the pointer, and
   in a proportional face the whole strip shifts when 9 becomes 10. */
.fil-cycler-root :deep(.fil-stack-count) {
  font-family: ui-monospace, SFMono-Regular, monospace;
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

.fil-cycler-adv-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}
</style>
