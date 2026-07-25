<script setup lang="ts">
/**
 * Compact ON/OFF switch — replaces a two-button `FilSegmented(['ON','OFF'])`
 * pill for plain booleans. The row label already says what the toggle does;
 * switch position + accent color communicate state, so no per-state text.
 *
 * a11y: native <button role="switch">, Enter/Space toggle via click.
 */
const props = defineProps<{
  label?: string;
  title?: string;
  disabled?: boolean;
  /** Compact inline mode: no label|switch grid/full-width row — sizes to
   * content so it can sit next to another field in the same row (e.g. an
   * "Auto" toggle glued onto a number input). */
  bare?: boolean;
}>();

const modelValue = defineModel<"ON" | "OFF">({ required: true });

function toggle() {
  if (props.disabled) return;
  modelValue.value = modelValue.value === "ON" ? "OFF" : "ON";
}
</script>

<template>
  <div class="fil-w-toggle" :class="{ bare }" :title="title">
    <label v-if="label" class="fil-w-toggle-label">{{ label }}</label>
    <button
      type="button"
      class="fil-w-switch"
      :class="{ on: modelValue === 'ON' }"
      role="switch"
      :aria-checked="modelValue === 'ON'"
      :aria-label="label"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="fil-w-switch-thumb" />
    </button>
  </div>
</template>

<style scoped>
.fil-w-toggle {
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap, 6px);
  width: 100%;
}
.fil-w-toggle-label {
  grid-column: 1;
  font-size: 11px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  font-family: inherit;
}
.fil-w-toggle.bare {
  display: flex;
  width: auto;
  gap: 4px;
}
.fil-w-toggle.bare .fil-w-toggle-label {
  font-size: 10px;
  white-space: nowrap;
}
.fil-w-switch {
  grid-column: 2;
  justify-self: start;
  width: 36px;
  height: 20px;
  padding: 2px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.14);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.12s;
}
.fil-w-switch.on {
  background: var(--fil-accent);
}
.fil-w-switch:disabled {
  opacity: 0.5;
  cursor: default;
}
.fil-w-switch:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 2px;
}
.fil-w-switch-thumb {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.12s;
}
.fil-w-switch.on .fil-w-switch-thumb {
  transform: translateX(16px);
}
</style>
