<script setup lang="ts" generic="T extends string">
/**
 * Native select with FiL_Design_ImageMind styling. Equivalent of the legacy
 * `createSelectInput()` factory. Used for finite enumerations where a chip
 * grid would be too loud (e.g. `language`).
 */
defineProps<{
  options: T[];
  label?: string;
  title?: string;
  disabled?: boolean;
}>();

const modelValue = defineModel<T>({ required: true });
</script>

<template>
  <div class="fil-w-select" :title="title">
    <label v-if="label" class="fil-w-select-label">{{ label }}</label>
    <select
      v-model="modelValue"
      class="fil-w-select-input"
      :disabled="disabled"
      :aria-label="label"
    >
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<style scoped>
.fil-w-select {
  display: grid;
  grid-template-columns: minmax(0, var(--fil-label-col)) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap);
  width: 100%;
}
.fil-w-select-label {
  grid-column: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
}
.fil-w-select-input {
  grid-column: 2;
  width: 100%;
  box-sizing: border-box;
  height: var(--fil-control-h);
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  padding: 5px 8px;
  color: var(--fil-text);
  font-family: inherit;
  font-size: 12px;
  outline: none;
  cursor: pointer;
}
.fil-w-select-input:focus {
  border-color: var(--fil-accent);
}
.fil-w-select-input:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-select-input:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
