<script setup lang="ts">
/**
 * Multi-line text field — the textarea counterpart of FilTextInput.
 * Supports an optional floating toolbar with Copy, Paste, Clear and word/character stats.
 */
import { ref, computed } from "vue";
import FilIcon from "./FilIcon.vue";
import type { IconName } from "@/composables/icons";
import { useI18n } from "@/composables/useI18n";
import { toast } from "@/stores/toastStore";

const props = withDefaults(
  defineProps<{
    label?: string;
    title?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    /** Value is driven by a connected input socket — dashed, dimmed, read-only. */
    linked?: boolean;
    /** Optional glyph shown before the label. */
    icon?: IconName;
    /** Show floating toolbar (Copy / Paste / Clear + Stats) on hover/focus. */
    toolbar?: boolean;
  }>(),
  { rows: 2, toolbar: false },
);

const emit = defineEmits<{
  (e: "clear"): void;
  (e: "paste", text: string): void;
  (e: "copy", text: string): void;
}>();

const { t } = useI18n();
const modelValue = defineModel<string>({ required: true });

const copied = ref(false);
let copiedTimer: ReturnType<typeof setTimeout> | null = null;

const wordCount = computed(() => {
  const v = (modelValue.value ?? "").trim();
  return v ? v.split(/\s+/).length : 0;
});
const charCount = computed(() => (modelValue.value ?? "").length);

async function onCopy() {
  if (!modelValue.value) return;
  try {
    await navigator.clipboard.writeText(modelValue.value);
    copied.value = true;
    if (copiedTimer) clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => {
      copied.value = false;
    }, 1500);
    emit("copy", modelValue.value);
  } catch (err) {
    toast.error(String((err as Error)?.message ?? err));
  }
}

async function onPaste() {
  if (props.disabled || props.readonly || props.linked) return;
  try {
    const clipText = await navigator.clipboard.readText();
    if (clipText) {
      modelValue.value = clipText;
      emit("paste", clipText);
    }
  } catch (err) {
    toast.error(String((err as Error)?.message ?? err));
  }
}

function onClear() {
  if (props.disabled || props.readonly || props.linked || !modelValue.value) return;
  modelValue.value = "";
  emit("clear");
}
</script>

<template>
  <div v-if="label" class="fil-w-textarea-row" :title="title">
    <label class="fil-w-textarea-label">
      <FilIcon v-if="icon" :name="icon" :size="12" />{{ label }}
    </label>
    <div v-if="toolbar" class="fil-w-textarea-box">
      <textarea
        v-model="modelValue"
        class="fil-w-textarea has-toolbar"
        :class="{ 'is-linked': linked }"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly || linked"
      />
      <div class="fil-w-floating-toolbar">
        <div class="fil-w-tools-left">
          <button
            type="button"
            class="fil-w-tool-btn"
            :disabled="!modelValue"
            :title="t('ta_copy_tt', 'Copy text to clipboard')"
            @click.stop="onCopy"
          >
            <FilIcon :name="copied ? 'check' : 'copy'" :size="11" />
          </button>
          <button
            type="button"
            class="fil-w-tool-btn"
            :disabled="disabled || readonly || linked"
            :title="t('ta_paste_tt', 'Paste text from clipboard')"
            @click.stop="onPaste"
          >
            <FilIcon name="paste" :size="11" />
          </button>
          <button
            type="button"
            class="fil-w-tool-btn is-danger"
            :disabled="disabled || readonly || linked || !modelValue"
            :title="t('ta_clear_tt', 'Clear text (can be undone)')"
            @click.stop="onClear"
          >
            <FilIcon name="trash" :size="11" />
          </button>
        </div>
        <div class="fil-w-tools-right">
          {{ wordCount }} {{ t('ta_words', 'w') }} · {{ charCount }} {{ t('ta_chars', 'c') }}
        </div>
      </div>
    </div>
    <textarea
      v-else
      v-model="modelValue"
      class="fil-w-textarea"
      :class="{ 'is-linked': linked }"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly || linked"
    />
  </div>

  <div v-else-if="toolbar" class="fil-w-textarea-box" :title="title">
    <textarea
      v-model="modelValue"
      class="fil-w-textarea has-toolbar"
      :class="{ 'is-linked': linked }"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly || linked"
    />
    <div class="fil-w-floating-toolbar">
      <div class="fil-w-tools-left">
        <button
          type="button"
          class="fil-w-tool-btn"
          :disabled="!modelValue"
          :title="t('ta_copy_tt', 'Copy text to clipboard')"
          @click.stop="onCopy"
        >
          <FilIcon :name="copied ? 'check' : 'copy'" :size="11" />
        </button>
        <button
          type="button"
          class="fil-w-tool-btn"
          :disabled="disabled || readonly || linked"
          :title="t('ta_paste_tt', 'Paste text from clipboard')"
          @click.stop="onPaste"
        >
          <FilIcon name="paste" :size="11" />
        </button>
        <button
          type="button"
          class="fil-w-tool-btn is-danger"
          :disabled="disabled || readonly || linked || !modelValue"
          :title="t('ta_clear_tt', 'Clear text (can be undone)')"
          @click.stop="onClear"
        >
          <FilIcon name="trash" :size="11" />
        </button>
      </div>
      <div class="fil-w-tools-right">
        {{ wordCount }} {{ t('ta_words', 'w') }} · {{ charCount }} {{ t('ta_chars', 'c') }}
      </div>
    </div>
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
  width: 100%;
}
.fil-w-textarea-label {
  font-size: 11px;
  color: var(--fil-muted);
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
}
.fil-w-textarea-box {
  position: relative;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  min-height: 0;
}
.fil-w-textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  height: 100%;
  flex: 1 1 auto;
  padding: 8px 10px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-text);
  font-family: inherit;
  font-size: 12px;
  resize: none;
  outline: none;
  transition: border-color 0.08s;
}
.fil-w-textarea.has-toolbar {
  padding-bottom: 22px;
}
.fil-w-textarea::placeholder {
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
.fil-w-textarea.is-linked {
  border-color: var(--fil-accent);
  background: color-mix(in srgb, var(--fil-accent) 14%, var(--fil-panel-alt));
  color: var(--fil-muted);
  cursor: not-allowed;
}
.fil-w-floating-toolbar {
  position: absolute;
  bottom: 3px;
  left: 4px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  opacity: 0;
  transform: translateY(2px);
  transition: opacity 0.15s ease, transform 0.15s ease;
  background: color-mix(in srgb, var(--fil-panel-alt, #0d121c) 88%, transparent);
  backdrop-filter: blur(6px);
  border: 1px solid color-mix(in srgb, var(--fil-border, rgba(255,255,255,0.15)) 45%, transparent);
  border-radius: 4px;
  padding: 1px 3px;
  z-index: 2;
  height: 20px;
  box-sizing: border-box;
}
.fil-w-textarea-box:hover .fil-w-floating-toolbar,
.fil-w-textarea-box:focus-within .fil-w-floating-toolbar {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.fil-w-tools-left {
  display: flex;
  align-items: center;
  gap: 1px;
}
.fil-w-tool-btn {
  width: 17px;
  height: 17px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  color: var(--fil-muted);
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-w-tool-btn:hover:not(:disabled) {
  color: var(--fil-accent);
  background: color-mix(in srgb, var(--fil-accent) 16%, transparent);
  border-color: var(--fil-accent);
}
.fil-w-tool-btn.is-danger:hover:not(:disabled) {
  color: #f43f5e;
  background: rgba(244, 63, 94, 0.18);
  border-color: #f43f5e;
}
.fil-w-tool-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.fil-w-tools-right {
  font-size: 9.5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--fil-muted);
  opacity: 0.8;
  user-select: none;
  padding-right: 2px;
  line-height: 1;
}
</style>

