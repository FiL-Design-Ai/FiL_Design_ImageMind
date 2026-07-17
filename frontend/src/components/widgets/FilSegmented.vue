<script setup lang="ts">
/**
 * Segmented pill — Random/Fixed-style toggle. Equivalent of the legacy
 * `segmentedPill()` factory in web/core/widgets.js.
 *
 * a11y: Tab/Shift+Tab move focus between buttons; Enter/Space activates;
 * ArrowLeft/ArrowRight move between options; `aria-pressed` reflects state.
 */
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    options: string[];
    modelValue: string;
    label?: string;
    title?: string;
    disabled?: boolean;
    /** Optional display override — maps the raw option value (what's
     * emitted/stored) to a more expressive label (e.g. with an emoji), so
     * call sites can stay visually descriptive without changing the
     * underlying value contract with the backend. */
    optionLabels?: Record<string, string>;
  }>(),
  {},
);

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const selected = computed(() => props.modelValue);
const buttonsRef = ref<HTMLButtonElement[]>([]);

function optionLabel(opt: string): string {
  return props.optionLabels?.[opt] ?? opt;
}

function select(value: string) {
  if (props.disabled) return;
  if (value !== selected.value) emit("update:modelValue", value);
}

function onKeydown(e: KeyboardEvent, index: number) {
  const opts = props.options;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const next = opts[(index + 1) % opts.length];
    select(next);
    buttonsRef.value[(index + 1) % opts.length]?.focus();
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const prev = opts[(index - 1 + opts.length) % opts.length];
    select(prev);
    buttonsRef.value[(index - 1 + opts.length) % opts.length]?.focus();
  }
}
</script>

<template>
  <div class="fil-w-segmented" :title="title">
    <label v-if="label" class="fil-w-segmented-label">{{ label }}</label>
    <div class="fil-w-pill" :class="{ disabled }" role="group" :aria-label="label">
      <button
        v-for="(opt, i) in options"
        :key="opt"
        :ref="(el) => { if (el) buttonsRef[i] = el as HTMLButtonElement }"
        type="button"
        class="fil-w-seg"
        :class="{ active: opt === selected }"
        :aria-pressed="opt === selected"
        :disabled="disabled"
        :tabindex="opt === selected ? 0 : -1"
        @click="select(opt)"
        @keydown="onKeydown($event, i)"
      >
        {{ optionLabel(opt) }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.fil-w-segmented {
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap, 6px);
  width: 100%;
}
.fil-w-segmented-label {
  grid-column: 1;
  font-size: 11px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-family: inherit;
}
.fil-w-pill {
  grid-column: 2;
  display: flex;
  gap: 0;
  min-width: 0;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 7px;
  padding: 3px;
}
.fil-w-pill.disabled {
  opacity: 0.5;
}
.fil-w-seg {
  flex: 1;
  text-align: center;
  padding: 6px;
  border: none;
  border-radius: 5px;
  background: transparent;
  font-family: inherit;
  font-size: 12px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  cursor: pointer;
  user-select: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.08s, color 0.08s;
}
.fil-w-seg:hover:not(.active) {
  color: var(--fil-text, rgba(255, 255, 255, 0.85));
}
.fil-w-seg.active {
  background: var(--fil-accent);
  color: #fff;
  font-weight: 500;
}
.fil-w-seg:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
</style>