<script setup lang="ts">
/**
 * Ana styled button — the v3 port of the legacy `styledButton()` factory
 * in web/core/widgets.js. Visual language is preserved (dark surface,
 * 6px corners, brand `--fil-accent` fill on hover/active).
 */
import { computed } from "vue";
import { icon as resolveIcon, type IconName } from "@/composables/icons";

type Variant = "standard" | "accent" | "danger" | "icon" | "full" | "sm";

const props = withDefaults(
  defineProps<{
    label?: string;
    variant?: Variant;
    icon?: IconName; // key into the shared icon set, when variant === "icon"
    title?: string;
    disabled?: boolean;
    loading?: boolean;
    flashing?: boolean;
  }>(),
  { variant: "standard" },
);

// Resolved from the fixed ICONS map (same as FilIcon.vue) — never render a
// caller-supplied string as raw HTML.
const iconSvg = computed(() => (props.icon ? resolveIcon(props.icon) : ""));

const emit = defineEmits<{ click: [event: MouseEvent] }>();

const classes = computed(() => [
  "fil-w-btn",
  props.variant === "accent" && "fil-w-btn-accent",
  props.variant === "danger" && "fil-w-btn-danger",
  props.variant === "icon" && "fil-w-btn-icon",
  props.variant === "full" && "fil-w-btn-full",
  props.variant === "sm" && "fil-w-btn-sm",
  props.flashing && "is-flashing",
  props.loading && "is-loading",
]);

const isDisabled = computed(() => props.disabled || props.loading);

function onClick(e: MouseEvent) {
  if (isDisabled.value) return;
  emit("click", e);
}
</script>

<template>
  <button
    :class="classes"
    :title="title"
    :disabled="isDisabled"
    :aria-disabled="isDisabled || undefined"
    @click="onClick"
  >
    <span v-if="loading" class="fil-w-btn-spinner" />
    <span v-if="icon && !loading" class="fil-w-btn-glyph" v-html="iconSvg" />
    <span v-if="label">{{ loading ? "" : label }}</span>
  </button>
</template>

<style scoped>
.fil-w-btn {
  box-sizing: border-box;
  padding: var(--fil-row-pad);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--fil-text, rgba(255, 255, 255, 0.85));
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.fil-w-btn:hover:not(:disabled) {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
  color: #fff;
}
.fil-w-btn:active {
  transform: translateY(1px);
}
.fil-w-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
.fil-w-btn-accent {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
  color: #fff;
}
.fil-w-btn-danger {
  color: var(--fil-danger, #ef6666);
}
.fil-w-btn-danger:hover:not(:disabled) {
  background: var(--fil-danger, #ef6666);
  border-color: var(--fil-danger, #ef6666);
  color: #fff;
}
.fil-w-btn-sm {
  padding: 4px 8px;
  font-size: 11px;
}
.fil-w-btn-full {
  width: 100%;
  display: block;
}
.fil-w-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.fil-w-btn-glyph :deep(svg) {
  width: 14px;
  height: 14px;
}
.fil-w-btn.is-flashing,
.fil-w-btn.is-flashing:hover {
  background: var(--fil-ok, #62c987);
  border-color: var(--fil-ok, #62c987);
  color: #fff;
}
.fil-w-btn.is-loading {
  cursor: wait;
}
.fil-w-btn:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-w-btn-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: fil-w-spin 0.6s linear infinite;
}
@keyframes fil-w-spin {
  to { transform: rotate(360deg); }
}
</style>