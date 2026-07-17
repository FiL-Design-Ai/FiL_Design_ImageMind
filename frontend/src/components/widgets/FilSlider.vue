<script setup lang="ts">
/**
 * Ranged slider + adjacent numeric input. Equivalent of the legacy
 * `createSliderRow()` factory in web/framework/components.mjs.
 */
import { computed } from "vue";
import FilNumberInput from "@/components/widgets/FilNumberInput.vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    min: number;
    max: number;
    step?: number;
    label?: string;
    title?: string;
    disabled?: boolean;
  }>(),
  { step: 0.05 },
);

const emit = defineEmits<{ "update:modelValue": [value: number] }>();

const clamped = computed(() => {
  let v = props.modelValue;
  if (v < props.min) v = props.min;
  if (v > props.max) v = props.max;
  return v;
});

function onSlider(e: Event) {
  const n = Number((e.target as HTMLInputElement).value);
  emit("update:modelValue", n);
}

function onNumber(n: number) {
  emit("update:modelValue", n);
}
</script>

<template>
  <div class="fil-w-slider" :title="title">
    <label v-if="label" class="fil-w-slider-label">{{ label }}</label>
    <div class="fil-w-slider-row">
      <input
        type="range"
        class="fil-w-slider-range"
        :value="clamped"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-label="label"
        @input="onSlider"
      />
      <FilNumberInput
        :model-value="clamped"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-label="label"
        @update:model-value="onNumber"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-w-slider {
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap, 6px);
  width: 100%;
}
.fil-w-slider-label {
  grid-column: 1;
  font-size: 11px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-family: inherit;
}
.fil-w-slider-row {
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.fil-w-slider-range {
  flex: 1;
  min-width: 0;
  accent-color: var(--fil-accent);
  cursor: pointer;
}
.fil-w-slider-range:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 2px;
}
.fil-w-slider-row :deep(.fil-w-num) {
  width: 70px;
  flex: none;
}
</style>