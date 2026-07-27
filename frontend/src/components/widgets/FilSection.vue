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
  }>(),
  { collapsible: true },
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
</style>