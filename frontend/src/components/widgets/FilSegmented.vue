<script setup lang="ts" generic="T extends string">
/**
 * Segmented pill — Random/Fixed-style toggle. Equivalent of the legacy
 * `segmentedPill()` factory in web/core/widgets.js.
 *
 * a11y: Tab/Shift+Tab move focus between buttons; Enter/Space activates;
 * ArrowLeft/ArrowRight move between options; `aria-pressed` reflects state.
 */
import { ref } from "vue";

const props = defineProps<{
  options: T[];
  label?: string;
  title?: string;
  disabled?: boolean;
  /** Optional display override — maps the raw option value (what's
   * emitted/stored) to a more expressive label (e.g. with an emoji), so
   * call sites can stay visually descriptive without changing the
   * underlying value contract with the backend. */
  optionLabels?: Record<string, string>;
}>();

const modelValue = defineModel<T>({ required: true });
const buttonsRef = ref<HTMLButtonElement[]>([]);

function optionLabel(opt: string): string {
  return props.optionLabels?.[opt] ?? opt;
}

function select(value: T) {
  if (props.disabled) return;
  if (value !== modelValue.value) modelValue.value = value;
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
    <div class="fil-w-pill" :class="{ disabled, few: options.length <= 3 }" role="group" :aria-label="label">
      <button
        v-for="(opt, i) in options"
        :key="opt"
        :ref="(el) => { if (el) buttonsRef[i] = el as HTMLButtonElement }"
        type="button"
        class="fil-w-seg"
        :class="{ active: opt === modelValue }"
        :aria-pressed="opt === modelValue"
        :disabled="disabled"
        :tabindex="opt === modelValue ? 0 : -1"
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
  grid-template-columns: minmax(0, var(--fil-label-col)) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap);
  width: 100%;
}
.fil-w-segmented-label {
  grid-column: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
}
.fil-w-pill {
  grid-column: 2;
  display: flex;
  gap: 0;
  min-width: 0;
  /* Explicit height, not "whatever 3px + a 6px button + a line of 12px text
   * adds up to" — that came out ~33px and made this the third distinct field
   * height in any node that mixes a segmented row with a select. */
  height: var(--fil-control-h);
  box-sizing: border-box;
  background: var(--fil-surface-2);
  border-radius: 7px;
  padding: 2px;
}
.fil-w-pill.disabled {
  opacity: 0.5;
}
.fil-w-seg {
  flex: 1;
  /* Flex items default to min-width:auto (content-based), so they refuse to
   * shrink below their own text width — with 5 options like "💎 Max Quality"
   * that forced the whole pill (and node) wider than the panel. min-width:0
   * lets them actually shrink; overflow/ellipsis keeps squeezed text tidy
   * instead of wrapping unpredictably. */
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  /* 6px all-round padding predated the 350px row nodes; at that width the
   * equal-split options lost ~8px of text each ("latent" read "late...").
   * Vertical space is owned by the pill's fixed height, so only the inline
   * padding matters here. */
  padding: 0 3px;
  border: none;
  border-radius: 5px;
  background: transparent;
  font-family: inherit;
  font-size: 12px;
  color: var(--fil-muted);
  cursor: pointer;
  user-select: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.08s, color 0.08s;
}
/* With two or three options the equal split (flex:1) ellipsises a long active
 * label ("Original Shot" → "Original Sh…") while its short neighbour sits on
 * spare space. Sizing options to their text fixes that; five-option pills keep
 * the equal split, since their combined max-content is what used to push whole
 * nodes wider. */
.fil-w-pill.few .fil-w-seg {
  flex: 1 1 auto;
  padding: 0 6px;
}
.fil-w-seg:hover:not(.active) {
  color: var(--fil-text);
}
.fil-w-seg.active {
  background: var(--fil-accent);
  color: var(--fil-accent-ink);
  font-weight: 500;
}
.fil-w-seg:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
</style>
