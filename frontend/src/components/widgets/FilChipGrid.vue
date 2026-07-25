<script setup lang="ts" generic="T extends string">
/**
 * Chip grid — multi-column grid of pill chips. Equivalent of the legacy
 * `chipGrid()` factory in web/core/widgets.js. Used by Optic Scanner for
 * `agent`, `model_type`, `detail_level`, ... widgets.
 */
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    options: T[];
    columns?: number;
    disabled?: boolean;
  }>(),
  { columns: 3 },
);

const modelValue = defineModel<T>({ required: true });

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${Math.max(1, props.columns)}, minmax(0, 1fr))`,
}));

function select(value: T) {
  if (props.disabled) return;
  if (value !== modelValue.value) modelValue.value = value;
}
</script>

<template>
  <div class="fil-w-chips" :style="gridStyle" role="radiogroup">
    <button
      v-for="opt in options"
      :key="opt"
      type="button"
      role="radio"
      class="fil-w-chip"
      :class="{ active: opt === modelValue, disabled }"
      :aria-checked="opt === modelValue"
      :disabled="disabled"
      :title="opt"
      @click="select(opt)"
    >
      {{ opt }}
    </button>
  </div>
</template>

<style scoped>
.fil-w-chips {
  display: grid;
  gap: 5px;
  width: 100%;
}
.fil-w-chip {
  box-sizing: border-box;
  background: var(--fil-panel-alt, #1d1d1d);
  border: 1px solid var(--fil-muted, #444);
  border-radius: 5px;
  padding: 6px 4px;
  font-size: 10px;
  color: var(--fil-text, #ccc);
  cursor: pointer;
  user-select: none;
  text-align: center;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  font-family: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fil-w-chip:hover:not(.disabled) {
  border-color: var(--fil-accent);
  color: var(--fil-text, #fff);
}
.fil-w-chip.active {
  background: var(--fil-panel-alt, #1d1d1d);
  color: var(--fil-accent);
  border-color: var(--fil-accent);
  font-weight: 500;
  box-shadow: 0 0 8px color-mix(in srgb, var(--fil-accent) 55%, transparent);
}
.fil-w-chip.disabled {
  opacity: 0.5;
  cursor: default;
}
.fil-w-chip:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
</style>