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

const modelValue = defineModel<number>({ required: true });

const committed = computed(() => modelValue.value);
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
  if (v !== committed.value) modelValue.value = v;
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
  modelValue.value = v;
  text.value = formatNum(v);
}
</script>

<template>
  <div class="fil-w-numfield" :class="{ 'no-label': !label }" :title="title">
    <label v-if="label" class="fil-w-numfield-label">{{ label }}</label>
    <div class="fil-w-num-wrap">
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
      <div class="fil-w-num-step">
        <button
          type="button"
          class="fil-w-num-btn"
          tabindex="-1"
          aria-label="Increment"
          :disabled="disabled || (max != null && modelValue >= max)"
          @mousedown.prevent
          @click="bump($event.shiftKey ? 10 : 1)"
        >▲</button>
        <button
          type="button"
          class="fil-w-num-btn"
          tabindex="-1"
          aria-label="Decrement"
          :disabled="disabled || (min != null && modelValue <= min)"
          @mousedown.prevent
          @click="bump($event.shiftKey ? -10 : -1)"
        >▼</button>
      </div>
    </div>
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
/* grid-column: 2 only makes sense inside this component's OWN label|input
 * grid (the `label` prop path below). In the no-label/`display:contents`
 * path the bare <input> becomes a direct child of whatever grid the caller
 * built (e.g. a 4-column label/value/label/value paired row) — forcing
 * grid-column: 2 there collided with a sibling input already occupying
 * that column, silently bumping it onto a second row misaligned from its
 * own label. Scope the placement to the labeled variant only. */
.fil-w-numfield:not(.no-label) .fil-w-num-wrap {
  grid-column: 2;
}
.fil-w-num-wrap {
  position: relative;
  width: 100%;
  min-width: 0;
}
.fil-w-num {
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  padding: 7px 20px 7px 8px;
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
.fil-w-num-step {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  width: 17px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--fil-muted, #3a3d40);
  overflow: hidden;
  border-radius: 0 5px 5px 0;
}
.fil-w-num-btn {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-size: 7px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: color 0.08s, background 0.08s;
}
.fil-w-num-btn:last-child {
  border-top: 1px solid var(--fil-muted, #3a3d40);
}
.fil-w-num-btn:hover:not(:disabled) {
  color: var(--fil-accent);
  background: rgba(255, 255, 255, 0.07);
}
.fil-w-num-btn:disabled {
  opacity: 0.3;
  cursor: default;
}
</style>