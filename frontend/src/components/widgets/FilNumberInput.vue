<script setup lang="ts">
/**
 * Number-input field accepting math expressions like `1024+64`.
 * Equivalent of the legacy `<input type=number>` with raw-eval math hook.
 *
 * - ↑ / ↓ step by `step` (Shift = ×10).
 * - Enter commits the evaluated value; Esc reverts to the last committed.
 * - `v-model` carries the *evaluated* number; the raw text is internal.
 */
import { computed, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    min?: number | null;
    max?: number | null;
    step?: number | null;
    disabled?: boolean;
    ariaLabel?: string;
    /** Optional — renders the same label|control grid row every other
     * leaf widget (FilSlider/FilSegmented/FilSelect/FilComboBox) uses, for
     * standalone fields. Callers that lay the label out externally (e.g.
     * paired rows) simply omit it and get the bare `<input>` as before. */
    label?: string;
    title?: string;
  }>(),
  { step: 1 },
);

const emit = defineEmits<{ "update:modelValue": [value: number] }>();

const committed = computed(() => props.modelValue);
const text = ref(formatNum(committed.value));

watch(committed, (v) => {
  // Keep the displayed text in sync when the upstream value changes
  // (workflow load, undo, external mutation) — but only if the user
  // is not actively typing (no focus).
  if (!focused.value) text.value = formatNum(v);
});

let focused = ref(false);
let pending: string | null = null;

function formatNum(v: number): string {
  return Number.isFinite(v) ? String(v) : "";
}

function safeEval(expr: string): number | null {
  const cleaned = (expr || "").trim();
  if (cleaned === "") return null;
  // Allow only digits, spaces, + - * / ( ) . and the literal ^ as **.
  if (!/^[0-9+\-*/(). ]+$/.test(cleaned.replace(/\^/g, "**"))) return null;
  try {
    const fn = new Function(`"use strict"; return (${cleaned});`);
    const n = Number(fn());
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function commit(parsed: number | null) {
  if (parsed === null) {
    text.value = formatNum(committed.value);
    return;
  }
  let v = parsed;
  if (props.min != null && v < props.min) v = props.min;
  if (props.max != null && v > props.max) v = props.max;
  if (v !== committed.value) emit("update:modelValue", v);
  text.value = formatNum(v);
}

function onFocus() {
  focused.value = true;
  pending = text.value;
}

function onBlur() {
  focused.value = false;
  commit(safeEval(text.value));
  pending = null;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    e.preventDefault();
    commit(safeEval(text.value));
    (e.target as HTMLInputElement).blur();
  } else if (e.key === "Escape") {
    e.preventDefault();
    if (pending !== null) text.value = pending;
    (e.target as HTMLInputElement).blur();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    bump(e.shiftKey ? 10 : 1);
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    bump(e.shiftKey ? -10 : -1);
  }
}

function bump(direction: number) {
  let v = committed.value + direction * (props.step || 1);
  if (props.min != null && v < props.min) v = props.min;
  if (props.max != null && v > props.max) v = props.max;
  emit("update:modelValue", v);
  text.value = formatNum(v);
}
</script>

<template>
  <div class="fil-w-numfield" :class="{ 'no-label': !label }" :title="title">
    <label v-if="label" class="fil-w-numfield-label">{{ label }}</label>
    <input
      v-model="text"
      type="text"
      class="fil-w-num"
      inputmode="numeric"
      :disabled="disabled"
      :min="min ?? undefined"
      :max="max ?? undefined"
      :step="step ?? undefined"
      :aria-label="ariaLabel ?? label"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />
  </div>
</template>

<style scoped>
.fil-w-numfield {
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap, 6px);
  width: 100%;
}
/* No label passed (paired-row / FilSlider readout usage): collapse to a
 * transparent wrapper so the bare `<input>` behaves exactly as before —
 * a direct participant in whatever flex/grid layout the caller provides. */
.fil-w-numfield.no-label {
  display: contents;
}
.fil-w-numfield-label {
  grid-column: 1;
  font-size: 11px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-family: inherit;
}
.fil-w-num {
  grid-column: 2;
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  padding: 7px 8px;
  color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 14px;
  text-align: left;
  outline: none;
  transition: border-color 0.08s;
}
.fil-w-num:focus {
  border-color: var(--fil-accent);
}
.fil-w-num:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-num:disabled {
  opacity: 0.5;
}
</style>