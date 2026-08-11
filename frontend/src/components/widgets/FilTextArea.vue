<script setup lang="ts">
/**
 * Multi-line text field — the textarea counterpart of FilTextInput.
 *
 * The same ~12 declarations were pasted into OpticScanner and then again into
 * DatasetForge; this is the single copy. The label sits *above* the field
 * (unlike the label|control grid every single-line widget uses) because a
 * 2-row textarea next to a centered label reads badly at node width.
 *
 * Single-root by design: with no `label` the root element *is* the textarea,
 * so a caller can take a ref to the component and reach the real element via
 * `$el` — OpticScanner needs that to anchor its input sockets to the field.
 */
import FilIcon from "./FilIcon.vue";
import type { IconName } from "@/composables/icons";

withDefaults(
  defineProps<{
    label?: string;
    title?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    /** Value is driven by a connected input socket — dashed, dimmed, read-only. */
    linked?: boolean;
    /** Optional glyph shown before the label — omitted by default, so
     * existing call sites are visually unchanged. */
    icon?: IconName;
  }>(),
  { rows: 2 },
);

const modelValue = defineModel<string>({ required: true });
</script>

<template>
  <div v-if="label" class="fil-w-textarea-row" :title="title">
    <label class="fil-w-textarea-label">
      <FilIcon v-if="icon" :name="icon" :size="12" />{{ label }}
    </label>
    <textarea
      v-model="modelValue"
      class="fil-w-textarea"
      :class="{ 'is-linked': linked }"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly || linked"
    />
  </div>
  <textarea
    v-else
    v-model="modelValue"
    class="fil-w-textarea"
    :class="{ 'is-linked': linked }"
    :title="title"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    :readonly="readonly || linked"
  />
</template>

<style scoped>
.fil-w-textarea-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.fil-w-textarea-label {
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
}
.fil-w-textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 8px 10px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-text);
  font-family: inherit;
  font-size: 12px;
  resize: vertical;
  outline: none;
  transition: border-color 0.08s;
}
.fil-w-textarea::placeholder {
  /* Same reasoning as FilTextInput: `--fil-muted` is a text weight, so a
   * placeholder in it reads as a filled-in value. Mixed off `--fil-text` so it
   * dims rather than washes out on the light palettes. */
  color: color-mix(in srgb, var(--fil-text) 30%, transparent);
  font-style: italic;
}
.fil-w-textarea:focus {
  border-color: var(--fil-accent);
}
.fil-w-textarea:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-textarea:disabled {
  opacity: 0.5;
}
/* A link on the matching input socket wins over whatever is typed here, so the
 * field reads as a display of that fact instead of an editable value. */
.fil-w-textarea.is-linked {
  border-style: dashed;
  border-color: var(--fil-accent);
  color: var(--fil-muted);
  cursor: not-allowed;
}
</style>
