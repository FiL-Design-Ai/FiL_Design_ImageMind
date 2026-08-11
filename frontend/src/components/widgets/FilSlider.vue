<script setup lang="ts">
/**
 * Labeled numeric field for ranged values (weights, strengths, temperatures).
 *
 * Used to pair a native `<input type=range>` track with a numeric readout.
 * Dropped the track: ComfyUI's own default number widget has no separate
 * bar either — dragging the field itself (see FilNumberInput's scrub
 * overlay) *is* the slider now, and the track was redundant with it.
 * `FilSlider` stays as a thin, ranged-value-flavored alias over
 * `FilNumberInput` so none of its call sites need to change.
 */
import FilNumberInput from "@/components/widgets/FilNumberInput.vue";

withDefaults(
  defineProps<{
    min: number;
    max: number;
    step?: number;
    label?: string;
    title?: string;
    disabled?: boolean;
    /** Pass-through to FilNumberInput — see its prop of the same name. */
    inlineLabel?: boolean;
  }>(),
  { step: 0.05 },
);

const modelValue = defineModel<number>({ required: true });
</script>

<template>
  <FilNumberInput
    v-model="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :label="label"
    :title="title"
    :disabled="disabled"
    :inline-label="inlineLabel"
  />
</template>
