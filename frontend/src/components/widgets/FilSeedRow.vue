<script setup lang="ts">
/**
 * Seed readout + Random / Use last / New fixed pills.
 *
 * OpticScanner and HiResFix each carried their own copy of this markup and of
 * ~25 lines of identical CSS, and the copies had already drifted: the "New
 * fixed" pill was an accent-filled button in one node and accent-colored text
 * in the other. Presentation only — the seed state (which nodeState key, which
 * `control_after_generate` watch, what the default is) stays in the nodes,
 * because those genuinely differ.
 */
defineProps<{
  /** Pre-formatted readout — the numeric seed, or "random" in random mode. */
  display: string;
  mode: "random" | "fixed";
  fieldAriaLabel: string;
  fieldTitle: string;
  /** Pill captions and tooltips, supplied by the caller so i18n keys stay node-local. */
  labels: { random: string; useLast: string; newFixed: string };
  titles: { random: string; useLast: string; newFixed: string };
}>();

const emit = defineEmits<{
  (e: "input-seed", value: number): void;
  (e: "random"): void;
  (e: "use-last"): void;
  (e: "new-fixed"): void;
}>();

function onInput(e: Event) {
  emit("input-seed", Number((e.target as HTMLInputElement).value) || 0);
}
</script>

<template>
  <div class="fil-w-seedrow">
    <input
      :value="display"
      type="text"
      class="fil-w-seedrow-field"
      :class="{ 'is-random': mode === 'random' }"
      :readonly="mode === 'random'"
      :aria-label="fieldAriaLabel"
      :title="fieldTitle"
      @input="onInput"
    />
    <button type="button" class="fil-w-seedrow-pill" :class="{ active: mode === 'random' }"
      :title="titles.random" @click="emit('random')">
      {{ labels.random }}
    </button>
    <button type="button" class="fil-w-seedrow-pill" :title="titles.useLast" @click="emit('use-last')">
      {{ labels.useLast }}
    </button>
    <button type="button" class="fil-w-seedrow-pill is-accent" :title="titles.newFixed" @click="emit('new-fixed')">
      {{ labels.newFixed }}
    </button>
  </div>
</template>

<style scoped>
.fil-w-seedrow {
  display: flex;
  gap: 6px;
  min-width: 0;
}
.fil-w-seedrow-field {
  flex: 1.3;
  min-width: 0;
  box-sizing: border-box;
  height: var(--fil-control-h);
  background: var(--fil-inset);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-pill-radius);
  padding: 0 12px;
  color: var(--fil-text);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 12px;
  text-align: center;
  outline: none;
  transition: border-color 0.08s;
}
.fil-w-seedrow-field:focus {
  border-color: var(--fil-accent);
}
.fil-w-seedrow-field:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-seedrow-field.is-random {
  color: var(--fil-muted);
  font-style: italic;
}
.fil-w-seedrow-pill {
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  height: var(--fil-control-h);
  padding: 0 8px;
  /* Same reasoning as FilSegmented: without this the Russian "Новый фикс."
   * wrapped to two lines inside HiResFix's narrower node and pushed the row
   * taller than the field beside it. Squeezed text truncates instead. */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: var(--fil-pill-radius);
  border: 1px solid var(--fil-pill-border);
  background: var(--fil-pill-bg);
  color: var(--fil-text);
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
}
.fil-w-seedrow-pill:hover {
  background: var(--fil-surface-3);
}
.fil-w-seedrow-pill:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
/* Two levels of emphasis in one row, and they must not collide:
 *   solid accent  = the mode this row is currently in ("Random")
 *   accent outline = the primary action ("New fixed")
 * Both were solid accent at first, which put two identical lime buttons side by
 * side with nothing to say which was state and which was a button. The label
 * stays `--fil-text` on the outlined variant rather than going accent-colored:
 * accent as text measures 3.10:1 on the light palette and 4.19:1 on Pixaroma,
 * under the 4.5:1 floor, while the border only has to clear 3:1.
 *
 * The scanner copy also declared `.active` twice — once with a white wash, once
 * with the accent — so the fill won but inherited the dead rule's white border. */
.fil-w-seedrow-pill.active {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
  color: var(--fil-accent-ink);
}
.fil-w-seedrow-pill.is-accent {
  background: color-mix(in srgb, var(--fil-accent) 12%, transparent);
  border-color: var(--fil-accent);
  color: var(--fil-text);
  font-weight: 700;
}
.fil-w-seedrow-pill.is-accent:hover {
  background: color-mix(in srgb, var(--fil-accent) 24%, transparent);
}
</style>
