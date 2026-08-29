<script setup lang="ts">
/**
 * The three assist buttons (rephrase / densify / expand) that rewrite a text
 * field through the `/director_assist` route. Shared by the Prompt Director
 * (instruction field) and the Prompter (prompt field): the parent owns the
 * text via v-model and says whether it is editable (no link driving it).
 */
import { computed } from "vue";
import FilIcon from "./FilIcon.vue";
import { ASSIST_OPS, useAssist } from "@/composables/useAssist";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";

const props = withDefaults(
  defineProps<{
    state: FilNodeState;
    modelValue: string;
    /** False while a link drives the field — the buttons cannot rewrite it. */
    editable: boolean;
    context?: "instruction" | "prompt";
  }>(),
  { context: "instruction" },
);
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const { t } = useI18n();

const text = computed({
  get: () => props.modelValue,
  set: (v: string) => emit("update:modelValue", v),
});
const editable = computed(() => props.editable);

const { configLinked, busyOp, assist, canUndo, canRedo, undo, redo } = useAssist(
  () => props.state.node,
  text,
  editable,
  props.context,
);

function buttonTitle(op: (typeof ASSIST_OPS)[number]): string {
  if (!configLinked.value) return t("pda_no_config_tt", "Connect a Provider Loader to enable these buttons.");
  if (!props.editable) return t("pda_linked_tt", "Driven by the connected input — disconnect it to edit with the buttons.");
  return t(op.ttKey, op.ttFallback);
}
</script>

<template>
  <div class="fil-assist-col">
    <button v-for="op in ASSIST_OPS" :key="op.id" type="button"
      class="fil-assist-btn" :class="{ 'is-busy': busyOp === op.id }"
      :disabled="!configLinked || !editable || (busyOp !== null && busyOp !== op.id)"
      :title="buttonTitle(op)"
      @click="assist(op)">
      <FilIcon :name="busyOp === op.id ? 'spinner' : op.icon" :size="13" />
    </button>
    <div class="fil-assist-divider" />
    <button type="button"
      class="fil-assist-btn"
      :disabled="!canUndo || busyOp !== null"
      :title="t('pda_undo_tt', 'Undo — restore previous text.')"
      @click="undo">
      <FilIcon name="undo" :size="13" />
    </button>
    <button type="button"
      class="fil-assist-btn"
      :disabled="!canRedo || busyOp !== null"
      :title="t('pda_redo_tt', 'Redo — restore next text.')"
      @click="redo">
      <FilIcon name="redo" :size="13" />
    </button>
  </div>
</template>

<style scoped>
.fil-assist-col { display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; align-self: flex-start; margin-top: 1px; }
.fil-assist-divider {
  width: 16px;
  height: 1px;
  margin: 2px auto;
  background: var(--fil-glass-border, rgba(0, 150, 200, 0.25));
  opacity: 0.6;
}
.fil-assist-btn {
  width: 24px; height: 24px; padding: 0;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--fil-glass-bg, rgba(50, 80, 120, 0.18));
  border: 1px solid var(--fil-glass-border, rgba(0, 150, 200, 0.25));
  border-radius: 7px;
  color: var(--fil-muted);
  cursor: pointer;
  transition: color 0.1s, background 0.1s, border-color 0.1s;
}
.fil-assist-btn:hover:not(:disabled) {
  color: var(--fil-accent);
  border-color: var(--fil-accent);
  background: color-mix(in srgb, var(--fil-accent) 12%, transparent);
}
.fil-assist-btn:disabled { opacity: 0.38; cursor: not-allowed; }
.fil-assist-btn.is-busy { color: var(--fil-accent); pointer-events: none; }
.fil-assist-btn.is-busy :deep(svg) { animation: fil-assist-spin 0.8s linear infinite; }
@keyframes fil-assist-spin { to { transform: rotate(360deg); } }
</style>
