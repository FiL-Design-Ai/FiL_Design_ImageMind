<script setup lang="ts">
/**
 * Collapsible section header. Equivalent of the legacy
 * `installSections()` pattern in web/core/ui.js.
 *
 * v-model controls collapsed state. `false` = expanded (visible).
 */
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    collapsible?: boolean;
    /**
     * Optional right-aligned readout of what the section currently holds, so a
     * collapsed section can be read without opening it. Empty (the default)
     * renders nothing at all — every other node's header is untouched.
     */
    summary?: string;
  }>(),
  { collapsible: true, summary: "" },
);

const modelValue = defineModel<boolean>({ default: false });

function toggle() {
  if (!props.collapsible) return;
  modelValue.value = !modelValue.value;
}

const arrow = computed(() => (modelValue.value ? "▶" : "▼"));
</script>

<template>
  <button
    type="button"
    class="fil-w-section"
    :class="{ collapsible, collapsed: modelValue }"
    :aria-expanded="!modelValue"
    :disabled="!collapsible"
    @click="toggle"
  >
    <span class="fil-w-section-arrow">{{ arrow }}</span>
    <span class="fil-w-section-title">{{ title }}</span>
    <span v-if="summary" class="fil-w-section-summary">{{ summary }}</span>
  </button>
</template>

<style scoped>
.fil-w-section {
  box-sizing: border-box;
  width: 100%;
  padding: var(--fil-row-pad);
  border: none;
  border-radius: 5px;
  background: var(--fil-surface-1);
  color: var(--fil-muted);
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  cursor: pointer;
  text-align: left;
  user-select: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.08s, color 0.08s;
  display: flex;
  align-items: center;
  gap: 6px;
}
/* `color: #fff` here was white-on-white once the light theme was in play. */
.fil-w-section:hover:not(:disabled) {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}
.fil-w-section:disabled {
  cursor: default;
}
.fil-w-section:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
/* `--fil-accent-text`, not the raw accent: at 9px on the section row's own
 * composited background the raw accent measured 2.38:1 on the light palette,
 * below even the 3:1 a glyph needs. The pulled-back variant reads 3.97:1. */
.fil-w-section-arrow {
  display: inline-block;
  width: 8px;
  font-size: 9px;
  color: var(--fil-accent-text);
}
/* The title keeps the row's own uppercase treatment; the summary is a value,
 * not a heading, so it drops the caps and the letter-spacing. It is also the
 * part that gives way first — hence `flex: 0 1 auto` on the summary and no
 * rule at all on the title: a header without a summary (every other node's)
 * lays out exactly as it did before this was added. */
.fil-w-section-summary {
  /* The readout never claims more than half the row: past that it truncates,
   * rather than squeezing the title until it wraps onto a second line and the
   * header grows taller than every other one in the panel. `min-width: 0` is
   * what lets a nowrap flex item shrink at all (its default is min-content). */
  flex: 0 1 auto;
  margin-left: auto;
  min-width: 0;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--fil-accent-text);
}
</style>
