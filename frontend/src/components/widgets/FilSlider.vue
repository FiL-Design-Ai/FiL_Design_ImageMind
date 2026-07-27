<script setup lang="ts">
/**
 * Ranged slider + adjacent numeric input. Equivalent of the legacy
 * `createSliderRow()` factory in web/framework/components.mjs.
 */
import { computed } from "vue";
import FilNumberInput from "@/components/widgets/FilNumberInput.vue";

const props = withDefaults(
  defineProps<{
    min: number;
    max: number;
    step?: number;
    label?: string;
    title?: string;
    disabled?: boolean;
  }>(),
  { step: 0.05 },
);

const modelValue = defineModel<number>({ required: true });

const clamped = computed({
  get: () => {
    let v = modelValue.value;
    if (v < props.min) v = props.min;
    if (v > props.max) v = props.max;
    return v;
  },
  set: (val: number) => {
    let v = val;
    if (v < props.min) v = props.min;
    if (v > props.max) v = props.max;
    modelValue.value = v;
  },
});

function onSlider(e: Event) {
  const n = Number((e.target as HTMLInputElement).value);
  clamped.value = n;
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
        v-model="clamped"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-label="label"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-w-slider {
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap);
  width: 100%;
}
.fil-w-slider-label {
  grid-column: 1;
  font-size: 11px;
  color: var(--fil-muted);
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
  /* `flex: 1` alone stretches the track to fill the ENTIRE remaining grid
   * column (a `1fr` track — see `.fil-w-slider`), which grows unbounded as
   * the node itself grows: on a wide node (e.g. Upscaler Advanced/Simple,
   * whose height now has to fit 20 outputs, forcing extra width too) a
   * single decimal-value track stretching 300+px looks disproportionate and
   * isn't any more precise to drag. `min-width: 0` still lets it shrink
   * properly on a narrow node; `max-width` just stops it growing past a
   * sane length once there's more room than the control needs.
   */
  flex: 1 1 auto;
  min-width: 0;
  max-width: 220px;
  accent-color: var(--fil-accent);
  cursor: pointer;
}
.fil-w-slider-range:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 2px;
}
.fil-w-slider-row :deep(.fil-w-num-wrap) {
  width: 70px;
  flex: none;
}
</style>