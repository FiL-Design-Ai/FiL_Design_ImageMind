<script setup lang="ts">
/**
 * Everything the cycler is driven by, in three lines.
 *
 * Where the models come from; how the list is ordered and how the cycle walks
 * it; and what to do with the queue now. The block rides in the socket strip
 * when it fits there and costs the node no height at all — `bandStyle` is
 * null when it does not, and it stays in flow.
 */
import { FilIcon, FilSegmented, FilSelect } from "@/components/widgets";
import { ref } from "vue";

defineProps<{
  sourceMode: string;
  cycleMode: string;
  cycleOptions: string[];
  sortValue: string;
  sortOptions: string[];
  isRefreshing: boolean;
  /** Rows switched on, rows in total, and rows that will actually run. */
  enabledCount: number;
  totalCount: number;
  activeCount: number;
  /** Absolute offsets when the block is lifted into the strip; null in flow. */
  bandStyle: Record<string, string> | null;
}>();

defineEmits<{
  "update:sourceMode": [value: string];
  "update:cycleMode": [value: string];
  sort: [label: string];
  refresh: [];
  clear: [];
  add: [];
  populate: [];
  "toggle-all": [];
  run: [];
}>();

/** The panel measures this element against the strip. */
const el = ref<HTMLElement | null>(null);
defineExpose({ el });
</script>

<template>
  <div
    ref="el"
    class="fil-cycler-actions-bar"
    :class="{ floated: Boolean(bandStyle) }"
    :style="bandStyle ?? undefined"
  >
    <!-- Where the models come from, and re-reading the folder at the far end. -->
    <div class="fil-band-line">
      <div class="fil-band-source">
        <FilSegmented
          :model-value="sourceMode"
          :options="['Diffusion Models', 'Checkpoints']"
          @update:model-value="(v) => $emit('update:sourceMode', v)"
        />
      </div>
      <button
        class="fil-refresh-models-btn"
        :class="{ spinning: isRefreshing }"
        title="Re-read the installed models from disk & extra paths"
        aria-label="Refresh the model list"
        @mousedown.stop
        @click.stop="$emit('refresh')"
      >
        <FilIcon name="repeat" :size="14" />
      </button>
    </div>

    <!-- How the list is ordered, how the cycle walks it, and emptying it. -->
    <div class="fil-band-line">
      <div class="fil-sort-select-wrap" title="Sort order of the queue">
        <FilSelect
          :model-value="sortValue"
          :options="sortOptions"
          @update:model-value="(v) => $emit('sort', v)"
        />
      </div>
      <div class="fil-cycler-mode-select" title="How the cycle walks the queue">
        <FilSelect
          :model-value="cycleMode"
          :options="cycleOptions"
          @update:model-value="(v) => $emit('update:cycleMode', v)"
        />
      </div>
      <button
        class="fil-action-link danger"
        title="Remove every model from the queue"
        @click="$emit('clear')"
      >
        Clear
      </button>
    </div>

    <!-- Adding a model, filling the queue from the folder, what the queue
         currently amounts to, and running the lot. -->
    <div class="fil-band-line">
      <button class="fil-band-add" @click="$emit('add')">+ Add Model</button>
      <button
        class="fil-action-link fil-cycler-populate-btn"
        title="Fill the queue with every model in the folder"
        @click="$emit('populate')"
      >
        Add All
      </button>
      <button
        v-if="totalCount"
        class="fil-stack-count"
        :title="enabledCount === totalCount ? 'Switch every model off' : 'Switch every model on'"
        @click="$emit('toggle-all')"
      >
        <span class="fil-stack-switch" :class="{ on: enabledCount > 0 }"></span>
        {{ enabledCount }} / {{ totalCount }}
      </button>
      <button
        class="fil-action-link fil-cycler-queue-btn"
        :title="`Queue ${activeCount} runs in ComfyUI to test all active models in order.`"
        @click="$emit('run')"
      >
        <FilIcon name="play" :size="11" /> Run All ({{ activeCount }})
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Four stacked lines, not one row of controls: a row flex puts the lines side
   by side and the block measures four times too wide to ever fit the strip. */
.fil-cycler-actions-bar {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
  padding: 1px 0;
  width: 100%;
  flex-wrap: nowrap;
}

.fil-band-line {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  min-width: 0;
}

/* ---- line 1: source ---- */

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

/* Re-read pins to the right of its line, which puts it in the same column as
   Clear and Run All below it, instead of drifting with the width of whatever
   sits to their left. */
.fil-band-line .fil-refresh-models-btn {
  margin-left: auto;
}

.fil-refresh-models-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-border) 90%, transparent);
  color: var(--fil-accent-text, #c084fc);
  cursor: pointer;
  padding: 0 8px;
  height: 24px;
  border-radius: 6px;
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

/* ---- line 2: order and cycle ---- */

/* The two boxes split what Clear leaves, evenly: at 400px that is about 170
   each, which spells out the longest option either of them has. */
.fil-sort-select-wrap,
.fil-cycler-mode-select {
  flex: 1 1 0;
  min-width: 0;
}

.fil-sort-select-wrap :deep(.fil-w-select),
.fil-cycler-mode-select :deep(.fil-w-select) {
  display: flex;
  width: 100%;
}

.fil-sort-select-wrap :deep(.fil-w-select-input),
.fil-cycler-mode-select :deep(.fil-w-select-input) {
  flex: 1;
  width: 100%;
  height: 24px;
  min-height: 24px;
  max-height: 24px;
  box-sizing: border-box;
  padding: 0 4px;
  font-size: 11px;
  line-height: 22px;
  text-align: left;
  text-align-last: left;
}

/* The order box is the one that changes what the eye reads next, so it keeps
   the accent it always had — the cycle box stays neutral chrome. */
.fil-sort-select-wrap :deep(.fil-w-select-input) {
  font-weight: 600;
  border-color: color-mix(in srgb, var(--fil-accent) 40%, transparent);
  color: var(--fil-accent-text, #c084fc);
  background: var(--fil-surface-2, #27272a);
  border-radius: 4px;
}

/* Neutral toolbar buttons: white bold label on the dark surface, the way the
   mockup draws Add All and Run All. Accent stays for the
   icons that carry state, not for the button chrome. */
.fil-action-link {
  height: 24px;
  min-height: 24px;
  max-height: 24px;
  box-sizing: border-box;
  background: var(--fil-surface-2, #27272a);
  border: 1px solid color-mix(in srgb, var(--fil-border) 90%, transparent);
  color: var(--fil-text);
  cursor: pointer;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  line-height: 22px;
  white-space: nowrap;
  flex-shrink: 0;
}

.fil-action-link:hover {
  background: color-mix(in srgb, var(--fil-text) 8%, var(--fil-surface-2, #27272a));
  border-color: color-mix(in srgb, var(--fil-text) 35%, transparent);
}

.fil-action-link.danger {
  border-color: color-mix(in srgb, var(--fil-danger) 45%, transparent);
  color: var(--fil-danger, #ef4444);
  background: color-mix(in srgb, var(--fil-danger) 14%, var(--fil-surface-2, #27272a));
}

.fil-action-link.danger:hover {
  background: color-mix(in srgb, var(--fil-danger) 25%, transparent);
  border-color: var(--fil-danger, #ef4444);
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-danger) 40%, transparent);
}

/* ---- line 3: the queue itself ---- */

.fil-band-add {
  flex: 1;
  height: 24px;
  /* A label allowed to wrap makes the block look narrower than it is, and the
     strip check believes it — that is how "+ Add Model" ended up on two lines
     inside a strip 100px too small for it. */
  white-space: nowrap;
  border: none;
  border-radius: 6px;
  background: var(--fil-accent-strong, #ffd60a);
  color: #1c1c1e;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 0 14px color-mix(in srgb, var(--fil-accent-strong, #ffd60a) 35%, transparent);
}

.fil-band-add:hover {
  filter: brightness(1.06);
}

/* The last line stands as one line: every control on it the same height. */
.fil-cycler-queue-btn,
.fil-cycler-populate-btn,
.fil-stack-count {
  height: 24px;
  max-height: 24px;
  font-size: 11px;
}

.fil-stack-count {
  display: inline-flex;
  align-items: center;
  gap: 6px;
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

/* The triangle reads as "go" in the accent, the label stays white. */
.fil-run-icon {
  color: var(--fil-accent-text, #ffd60a);
  font-size: 9px;
}

/* ---- lifted into the socket strip ---- */

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
     node reads tidy for exactly this reason. Four lines have to clear the
     strip's own height too, so the gap is tighter than it is in flow. */
  font-size: 11px;
  /* Three 24px lines and two gaps have to clear the strip's own height — on
     the cycler's five outputs that is about 100px, and the block comes to 78. */
  gap: 3px;
  padding: 0;
}

.fil-cycler-actions-bar.floated > * {
  pointer-events: auto;
}

.fil-cycler-actions-bar.floated .fil-band-line {
  gap: 4px;
}

/* One height for every control up there, so the three lines read as one
   block rather than three bars that happen to be stacked. */
.fil-cycler-actions-bar.floated .fil-action-link,
.fil-cycler-actions-bar.floated .fil-refresh-models-btn,
.fil-cycler-actions-bar.floated .fil-band-add,
.fil-cycler-actions-bar.floated .fil-stack-count,
.fil-cycler-actions-bar.floated .fil-cycler-queue-btn,
.fil-cycler-actions-bar.floated .fil-cycler-populate-btn {
  height: 24px;
  max-height: 24px;
  box-sizing: border-box;
  font-size: 11px;
  font-weight: 700;
}

.fil-cycler-actions-bar.floated :deep(.fil-w-pill) {
  height: 24px;
}

.fil-cycler-actions-bar.floated :deep(.fil-w-select-input) {
  height: 24px;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Long labels truncate instead of pushing the bar out of the strip. */
.fil-cycler-actions-bar.floated .fil-band-source :deep(.fil-w-seg) {
  overflow: hidden;
  text-overflow: ellipsis;
}

.fil-cycler-actions-bar.floated .fil-action-link {
  padding: 0 6px;
}

/* Floated floors: what each stretchy box gives up when the strip is tight.
   `[data-band-measure]` pins them there while the block is measured, so
   `max-content` reads the squeezed bar rather than the roomy one.
   These have to add up: the middle line is 110 + 110 for the boxes, about 42
   for Clear and 8 of gaps — 270, inside the 400 the panel is capped at. Raise
   one of them past that and the bar stops fitting the strip entirely, which
   is a whole layout lost to a round number. */
.fil-cycler-actions-bar.floated .fil-band-source {
  min-width: 170px;
}

.fil-cycler-actions-bar.floated .fil-sort-select-wrap,
.fil-cycler-actions-bar.floated .fil-cycler-mode-select {
  min-width: 110px;
}

.fil-cycler-actions-bar.floated .fil-band-add {
  min-width: 104px;
}

/* While measuring, every stretchy box sits exactly at its floor — a box left
   free to size to its own text answers with the roomy width and the check
   never fires. */
.fil-cycler-actions-bar[data-band-measure] .fil-band-source {
  flex: none;
  width: 170px;
}

.fil-cycler-actions-bar[data-band-measure] .fil-sort-select-wrap,
.fil-cycler-actions-bar[data-band-measure] .fil-cycler-mode-select {
  flex: none;
  width: 110px;
}

.fil-cycler-actions-bar[data-band-measure] .fil-band-add {
  flex: none;
  width: 104px;
}
</style>
