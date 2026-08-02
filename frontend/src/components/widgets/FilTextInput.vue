<script setup lang="ts">
/**
 * Single-line labeled text field. Equivalent of FilSelect/FilNumberInput but
 * for plain strings (dataset name, trigger word, …) — no shared widget
 * covered this shape yet, every node that needed one rolled its own `<input>`.
 */
defineProps<{
  label?: string;
  title?: string;
  placeholder?: string;
  disabled?: boolean;
}>();

const modelValue = defineModel<string>({ required: true });
</script>

<template>
  <div class="fil-w-text" :title="title">
    <label v-if="label" class="fil-w-text-label">{{ label }}</label>
    <input
      v-model="modelValue"
      type="text"
      class="fil-w-text-input"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-label="label"
    />
  </div>
</template>

<style scoped>
.fil-w-text {
  display: grid;
  grid-template-columns: minmax(0, var(--fil-label-col)) minmax(60px, 1fr);
  align-items: center;
  gap: var(--fil-node-gap);
  width: 100%;
}
.fil-w-text-label {
  grid-column: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
}
.fil-w-text-input {
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
  transition: border-color 0.08s;
}
/* `--fil-muted` is #9ca8b5 in the default theme — bright enough on the dark
 * field that a placeholder read as a filled-in value. That made an empty
 * trigger-word field look like it said "ohwx" while the path preview
 * (correctly) fell back to "10_concept", so the preview looked broken.
 * Mixed off `--fil-text` rather than a fixed rgba so it also dims, instead of
 * washing out, on the light themes in brand.ts. */
.fil-w-text-input::placeholder {
  color: color-mix(in srgb, var(--fil-text) 30%, transparent);
  font-style: italic;
}
.fil-w-text-input:focus {
  border-color: var(--fil-accent);
}
.fil-w-text-input:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-text-input:disabled {
  opacity: 0.5;
}
</style>
