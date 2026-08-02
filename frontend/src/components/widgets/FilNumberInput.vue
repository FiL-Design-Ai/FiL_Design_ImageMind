<script setup lang="ts">
/**
 * Number-input field accepting math expressions like `1024+64`.
 * Equivalent of the legacy `<input type=number>` with raw-eval math hook.
 *
 * - ↑ / ↓ step by `step` (Shift = ×10). Left/right buttons do the same on click.
 * - Drag left/right anywhere on the field (mirrors ComfyUI's own
 *   `ScrubableNumberInput`) to scrub the value; a plain click with no
 *   movement enters text-edit mode instead (focuses and selects).
 * - Enter commits the evaluated value; Esc reverts to the last committed.
 * - `v-model` carries the *evaluated* number; the raw text is internal.
 */
import { computed, nextTick, ref, watch } from "vue";
import { startPointerDrag } from "@/composables/useBrowserRect";

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
const inputEl = ref<HTMLInputElement | null>(null);
// Drives whether the scrub overlay or the raw <input> owns pointer events —
// same split ComfyUI's own ScrubableNumberInput makes, so a drag never
// leaves a text caret blinking mid-canvas and a click never scrubs.
const editing = ref(false);

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

// How many decimal places `step` implies — 0.1 → 1, 0.01 → 2, 1 → 0. Rounding
// every committed value to this precision is what keeps repeated bumps/drags
// at `1.1, 1.2, 1.3` instead of drifting to `1.2000000000000002`: plain
// float addition (`0.1 + 0.1 + 0.1`) accumulates binary-fraction error that
// has nowhere else to be caught before it reaches the display or the value
// sent to the backend.
function stepDecimals(): number {
  const s = props.step ?? 1;
  if (!Number.isFinite(s) || s === 0) return 0;
  const str = Math.abs(s).toString();
  const dot = str.indexOf(".");
  return dot === -1 ? 0 : str.length - dot - 1;
}

function clamp(v: number): number {
  const decimals = stepDecimals();
  const factor = 10 ** decimals;
  let out = decimals > 0 ? Math.round(v * factor) / factor : Math.round(v);
  if (props.min != null && out < props.min) out = props.min;
  if (props.max != null && out > props.max) out = props.max;
  return out;
}

function safeEval(expr: string): number | null {
  const raw = (expr || "").trim();
  if (raw === "") return null;
  // `^` means exponentiation to anyone typing in a number field; in JavaScript
  // it is bitwise XOR. The rewrite happens once, up front, and the *rewritten*
  // string is both what gets validated and what gets evaluated. Validating one
  // string and evaluating another is how `2^10` used to return 8: the check saw
  // `2**10` and passed, then `new Function` received the original `2^10`.
  const cleaned = raw.replace(/\^/g, "**");
  // Digits, spaces, + - * / ( ) . only — no identifiers, so nothing in scope is
  // reachable from here.
  if (!/^[0-9+\-*/(). ]+$/.test(cleaned)) return null;
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
  const v = clamp(parsed);
  if (v !== committed.value) modelValue.value = v;
  text.value = formatNum(v);
}

function onFocus() {
  focused.value = true;
  editing.value = true;
  pending = text.value;
}

function onBlur() {
  focused.value = false;
  editing.value = false;
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
  const v = clamp(committed.value + direction * (props.step || 1));
  modelValue.value = v;
  text.value = formatNum(v);
}

// 10px of horizontal drag per `step` — same feel as ComfyUI's own number
// scrubber. `startPointerDrag` owns the capture/cleanup plumbing (jsdom has
// no setPointerCapture, a real drag can lose its pointerup); this only
// decides how far is "far enough" to count as a drag rather than a click.
const PX_PER_STEP = 10;

function onScrubPointerDown(e: PointerEvent) {
  if (props.disabled || editing.value) return;
  const startValue = committed.value;
  const startX = e.clientX;
  let moved = false;
  startPointerDrag(
    e.target as Element,
    e,
    (ev) => {
      const deltaX = ev.clientX - startX;
      if (!moved && Math.abs(deltaX) < 3) return;
      moved = true;
      const steps = Math.trunc(deltaX / PX_PER_STEP);
      const v = clamp(startValue + steps * (props.step || 1));
      if (v !== modelValue.value) {
        modelValue.value = v;
        text.value = formatNum(v);
      }
    },
    () => {
      if (moved) return;
      editing.value = true;
      void nextTick(() => {
        inputEl.value?.focus();
        inputEl.value?.select();
      });
    },
  );
}
</script>

<template>
  <div class="fil-w-numfield" :class="{ 'no-label': !label }" :title="title">
    <label v-if="label" class="fil-w-numfield-label">{{ label }}</label>
    <div class="fil-w-num-wrap">
      <button
        type="button"
        class="fil-w-num-arrow fil-w-num-arrow-left"
        tabindex="-1"
        aria-label="Decrement"
        :disabled="disabled || (min != null && modelValue <= min)"
        @mousedown.prevent
        @click="bump($event.shiftKey ? -10 : -1)"
      >◀</button>
      <div class="fil-w-num-center">
        <input
          ref="inputEl"
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
        <div
          class="fil-w-num-scrub"
          :class="{ 'is-editing': editing }"
          @pointerdown="onScrubPointerDown"
        ></div>
      </div>
      <button
        type="button"
        class="fil-w-num-arrow fil-w-num-arrow-right"
        tabindex="-1"
        aria-label="Increment"
        :disabled="disabled || (max != null && modelValue >= max)"
        @mousedown.prevent
        @click="bump($event.shiftKey ? 10 : 1)"
      >▶</button>
    </div>
  </div>
</template>

<style scoped>
.fil-w-numfield {
  display: grid;
  grid-template-columns: minmax(0, var(--fil-label-col)) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap);
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
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--fil-muted);
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
  height: var(--fil-control-h);
  display: flex;
  align-items: stretch;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  overflow: hidden;
  transition: border-color 0.08s;
}
.fil-w-num-wrap:focus-within {
  border-color: var(--fil-accent);
}
.fil-w-num-center {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
}
.fil-w-num {
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  height: 100%;
  background: transparent;
  border: none;
  padding: 0 4px;
  color: var(--fil-text);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 12px;
  text-align: center;
  outline: none;
}
.fil-w-num:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-w-num:disabled {
  opacity: 0.5;
}
/* Sits over the input and owns the pointer while `editing` is false: a
 * pointerdown here starts a drag-to-scrub (see `onScrubPointerDown`), and a
 * plain click with no movement hands off to the input as text-edit mode.
 * Hidden once editing so the input gets native caret placement / selection. */
.fil-w-num-scrub {
  position: absolute;
  inset: 0;
  cursor: ew-resize;
  touch-action: pan-y;
  z-index: 1;
}
.fil-w-num-scrub.is-editing {
  display: none;
}
.fil-w-num-arrow {
  flex: 0 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--fil-muted);
  font-size: 8px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: color 0.08s, background 0.08s;
}
.fil-w-num-arrow-left {
  border-right: 1px solid var(--fil-border);
}
.fil-w-num-arrow-right {
  border-left: 1px solid var(--fil-border);
}
.fil-w-num-arrow:hover:not(:disabled) {
  color: var(--fil-accent);
  background: var(--fil-surface-2);
}
.fil-w-num-arrow:disabled {
  opacity: 0.3;
  cursor: default;
}
</style>
