<script setup lang="ts">
/**
 * Native select with FiL_Design_ImageMind styling. Equivalent of the legacy
 * `createSelectInput()` factory. Used for finite enumerations where a chip
 * grid would be too loud (e.g. `language`).
 */
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    options: string[];
    modelValue: string;
    label?: string;
    title?: string;
    disabled?: boolean;
  }>(),
  {},
);

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const valueProxy = computed({
  get: () => props.modelValue,
  set: (v: string) => emit("update:modelValue", v),
});
</script>

<template>
  <div class="fil-w-select" :title="title">
    <label v-if="label" class="fil-w-select-label">{{ label }}</label>
    <select
      v-model="valueProxy"
      class="fil-w-select-input"
      :disabled="disabled"
      :aria-label="label"
      @change="(e) => emit('update:modelValue', (e.target as HTMLSelectElement).value)"
    >
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<style scoped>
.fil-w-select {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}
.fil-w-select-label {
  font-size: 11px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-family: inherit;
}
.fil-w-select-input {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  padding: 5px 8px;
  color: var(--fil-text, #f2f2f2);
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