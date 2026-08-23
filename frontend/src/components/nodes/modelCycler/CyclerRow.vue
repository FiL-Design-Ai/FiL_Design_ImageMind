<script setup lang="ts">
/**
 * One model in the queue, on one line: grip, name, info, switch.
 *
 * Remove and reordering live in the row's right-click menu — a queue is read
 * far more often than it is edited, and the name is what it is read by. Only
 * the grip is draggable, so a click anywhere else still reaches the picker.
 */
import { FilComboBox, FilIcon, FilToggle, type FilComboOption } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import type { ModelItem } from "./types";

defineProps<{
  item: ModelItem;
  /** The label the row shows: the file's own name, grown back only if it clashes. */
  displayName: string;
  options: FilComboOption[];
  previewMode: "diffusion_models" | "checkpoints";
  missing: boolean;
  /** Dragging is off while a filter hides rows: the drop target would lie. */
  draggable: boolean;
  dragging: boolean;
  dragOver: boolean;
  dragOverAbove: boolean;
  dragOverBelow: boolean;
}>();

defineEmits<{
  menu: [event: MouseEvent];
  info: [];
  "drag-start": [event: DragEvent];
  "drag-over": [event: DragEvent];
  "drag-leave": [];
  drop: [event: DragEvent];
  "drag-end": [];
  "update:name": [name: string];
  "update:enabled": [enabled: boolean];
  "close-picker": [];
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="fil-cycler-row"
    :class="{
      disabled: !item.enabled,
      isDragging: dragging,
      isDragOver: dragOver,
      dragOverAbove,
      dragOverBelow,
    }"
    @contextmenu.prevent.stop="$emit('menu', $event)"
    @dragover="$emit('drag-over', $event)"
    @dragleave="$emit('drag-leave')"
    @drop="$emit('drop', $event)"
    @dragend="$emit('drag-end')"
  >
    <div
      class="fil-drag-handle"
      title="Drag handle to reorder item"
      :draggable="draggable"
      @dragstart="$emit('drag-start', $event)"
    >
      <FilIcon name="grip" :size="12" />
    </div>

    <button
      class="fil-row-info-btn"
      title="Model Information"
      aria-label="Model information"
      @mousedown.stop
      @click.stop="$emit('info')"
    >
      <FilIcon name="info" :size="14" />
    </button>

    <span
      v-if="missing"
      class="fil-missing-badge"
      title="Warning: Model file is missing from disk or unmounted!"
    >
      <FilIcon name="warning" :size="13" />
    </span>

    <div class="fil-cycler-select-wrap" :title="item.name || 'Select model'">
      <FilComboBox
        :model-value="item.name"
        :options="options"
        :searchable="true"
        :auto-open="item.autoOpen"
        :trigger-label="displayName"
        :title="item.name"
        browse-folders
        :preview-mode="previewMode"
        :placeholder="t('cycler_select_model', 'Select model...')"
        @close="$emit('close-picker')"
        @update:model-value="(val: string) => $emit('update:name', val)"
      />
    </div>

    <FilToggle
      :model-value="item.enabled ? 'ON' : 'OFF'"
      bare
      @update:model-value="(v: string) => $emit('update:enabled', v === 'ON')"
    />
  </div>
</template>

<style scoped>
.fil-cycler-row {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  /* 32 tall, border and all — the height Pixaroma's stack gives a row, and six
     less than the padding-driven one this started as. Eight rows of queue is a
     row and a half of node back. */
  box-sizing: border-box;
  height: 32px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 0 6px;
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

.fil-cycler-row.dragOverAbove::before,
.fil-cycler-row.dragOverBelow::after {
  content: "";
  position: absolute;
  left: 4px;
  right: 4px;
  height: 3px;
  background: var(--fil-accent, #00f0ff);
  border-radius: 999px;
  box-shadow: 0 0 10px var(--fil-accent, #00f0ff), 0 0 20px var(--fil-accent, #00f0ff);
  animation: pulseSnapLine 0.6s infinite alternate;
  z-index: 20;
}

.fil-cycler-row.dragOverAbove::before {
  top: -4px;
}

.fil-cycler-row.dragOverBelow::after {
  bottom: -4px;
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

/* The name is what a queue is read by, so it gets the room the removed cross
   and the shorter labels gave back — two steps up from the widget's own 12px,
   and lined up on the left so the eye runs down the starts. */
.fil-cycler-select-wrap :deep(.fil-combo-trigger) {
  width: 100%;
  font-size: 12px;
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
</style>
