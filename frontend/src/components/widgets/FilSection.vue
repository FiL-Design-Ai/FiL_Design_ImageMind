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
    modelValue?: boolean; // collapsed?
    collapsible?: boolean;
  }>(),
  { collapsible: true, modelValue: false },
);

const emit = defineEmits<{ "update:modelValue": [collapsed: boolean] }>();

function toggle() {
  if (!props.collapsible) return;
  emit("update:modelValue", !props.modelValue);
}

const arrow = computed(() => (props.modelValue ? "▶" : "▼"));
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
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--fil-muted, rgba(255, 255, 255, 0.7));
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
.fil-w-section:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}
.fil-w-section:disabled {
  cursor: default;
}
.fil-w-section:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-w-section-arrow {
  display: inline-block;
  width: 8px;
  font-size: 9px;
  color: var(--fil-accent);
}
</style>