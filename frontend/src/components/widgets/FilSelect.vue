<script setup lang="ts" generic="T extends string">
/**
 * Native select with FiL_Design_ImageMind styling. Equivalent of the legacy
 * `createSelectInput()` factory. Used for finite enumerations where a chip
 * grid would be too loud (e.g. `language`).
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import FilIcon from "./FilIcon.vue";
import type { IconName } from "@/composables/icons";

const props = defineProps<{
  options: T[];
  label?: string;
  title?: string;
  disabled?: boolean;
  /** Opt-in trial layout — see FilNumberInput's prop of the same name. The
   * border moves from the `<select>` onto a wrapper that holds label + select
   * side by side; off by default, so existing call sites are untouched. */
  inlineLabel?: boolean;
  /** Optional glyph shown before the label — omitted by default, so existing
   * call sites are visually unchanged. */
  icon?: IconName;
  /** Opt-in: options shaped "Name (Note)" render as just "Name", with "Note"
   * moved to a hover tooltip (native `title`) instead of sitting in the text.
   * Off by default — every other call site keeps showing the full string. */
  hintFromParens?: boolean;
}>();

const modelValue = defineModel<T>({ required: true });

// "Helios 44-2 (Vintage)" -> { main: "Helios 44-2", hint: "Vintage" }. Options
// with no trailing "(...)", or more than one, are left alone (hint null).
function splitHint(opt: string): { main: string; hint: string | null } {
  const m = /^(.*\S)\s+\(([^()]+)\)$/.exec(opt);
  return m ? { main: m[1], hint: m[2] } : { main: opt, hint: null };
}

function optionText(opt: string): string {
  return props.hintFromParens ? splitHint(opt).main : opt;
}

function optionHint(opt: string): string | undefined {
  return props.hintFromParens ? (splitHint(opt).hint ?? undefined) : undefined;
}

/**
 * Is the shown value wider than the box it sits in?
 *
 * A native <select> clips its own text and reports no overflow — scrollWidth
 * equals clientWidth however long the value is — so the only way to know is to
 * measure the string. It matters because plenty of real values do not fit at
 * node width: "FlowMatchEulerDiscreteScheduler" is 17px too wide for the
 * sampler's row (41px with the Russian label), and checkpoint and LoRA names
 * come off the user's own disk with no length limit at all. Shortening labels
 * cannot buy that back.
 */
const selectEl = ref<HTMLSelectElement | null>(null);
const clipped = ref(false);

// Chrome draws its dropdown arrow inside the select's content box.
const ARROW_PX = 16;
let measureCtx: CanvasRenderingContext2D | null = null;

function measure() {
  const el = selectEl.value;
  // clientWidth 0 means nothing has been laid out — a node scrolled out of
  // view, or jsdom, which also has no canvas to measure with. Leaving early
  // keeps the test output clean and costs nothing in a real browser.
  if (!el || el.clientWidth === 0) return;
  measureCtx ??= document.createElement("canvas").getContext("2d");
  if (!measureCtx) return;
  const cs = getComputedStyle(el);
  measureCtx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  const room = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - ARROW_PX;
  clipped.value = measureCtx.measureText(optionText(modelValue.value)).width > room;
}

let observer: ResizeObserver | null = null;
onMounted(() => {
  measure();
  // Our own element only — the node is resizable, and the row's share of it
  // changes with it. Guarded: jsdom has no ResizeObserver, and a throw here
  // would take the whole panel down with it.
  if (typeof ResizeObserver === "undefined" || !selectEl.value) return;
  observer = new ResizeObserver(() => measure());
  observer.observe(selectEl.value);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
watch(() => [modelValue.value, props.options] as const, () => nextTick(measure));

/**
 * What hovering the closed box says: the note pulled out of the text with
 * `hintFromParens`, otherwise the full value — but only when it is actually
 * cut off. When everything fits, no title, so the row's own explanation is
 * what the hover shows, the way it always has.
 */
const selectedHint = computed(
  () => optionHint(modelValue.value) ?? (clipped.value ? optionText(modelValue.value) : undefined),
);
</script>

<template>
  <div class="fil-w-select" :class="{ 'inline-label': !!label && inlineLabel }" :title="title">
    <label v-if="label && !inlineLabel" class="fil-w-select-label">
      <FilIcon v-if="icon" :name="icon" :size="12" />{{ label }}
    </label>
    <!-- `display: contents` unless inline-label is on, so the default path
         still has the <select> as a direct child of the label|control grid. -->
    <div class="fil-w-select-box">
      <span v-if="label && inlineLabel" class="fil-w-select-inline-label">
        <FilIcon v-if="icon" :name="icon" :size="12" />{{ label }}
      </span>
      <select
        ref="selectEl"
        v-model="modelValue"
        class="fil-w-select-input"
        :disabled="disabled"
        :aria-label="label"
        :title="selectedHint"
      >
        <option v-for="opt in options" :key="opt" :value="opt" :title="optionHint(opt)">{{ optionText(opt) }}</option>
      </select>
    </div>
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
  display: flex;
  align-items: center;
  gap: 4px;
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
.fil-w-select-box {
  display: contents;
}
/* Inline-label variant: the box becomes the bordered field, and the <select>
 * inside it goes borderless so there is only one frame on screen. */
.fil-w-select.inline-label {
  grid-template-columns: minmax(0, 1fr);
}
.fil-w-select.inline-label .fil-w-select-box {
  grid-column: 1;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  height: var(--fil-control-h);
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  overflow: hidden;
  transition: border-color 0.08s;
}
.fil-w-select.inline-label .fil-w-select-box:focus-within {
  border-color: var(--fil-accent);
}
.fil-w-select-inline-label {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 4px;
}
/* 60px floor: sampler names are long, and an ellipsized value is far worse
 * than an ellipsized label. */
.fil-w-select.inline-label .fil-w-select-input {
  flex: 1 1 60px;
  width: auto;
  min-width: 0;
  height: 100%;
  /* NOT transparent: a native <select> popup takes its background from the
   * <select> element's own computed background, not its parent's — with
   * `transparent` here Chrome painted the dropdown list on the page's white
   * default while `color` stayed `--fil-text` (near-white), so every option
   * rendered as invisible light-on-white text. Matching the wrapper's own
   * fill keeps the seamless look (identical colour, no visible seam) while
   * giving the popup a real colour to render option text against. */
  background: var(--fil-panel-alt);
  border: none;
  border-radius: 0;
  padding: 0 4px 0 6px;
  text-align: right;
}
.fil-w-select.inline-label .fil-w-select-input:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
</style>
