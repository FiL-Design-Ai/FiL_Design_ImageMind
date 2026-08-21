<script setup lang="ts">
/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning
 * (mirrors nodes/node_edit_encoder.py).
 *
 * Deliberately lean: resize is full-auto on the backend and the
 * reference-layout method stays a native advanced widget, so the panel is a
 * live wired-reference counter plus the prompt textarea. The Autogrow
 * reference slots stay core-managed below the panel.
 */
import { computed } from "vue";
import { FilTextArea } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { EDIT_ENCODER_SOCKET_INPUTS } from "@/nodes2/nodes/edit_encoder";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, EDIT_ENCODER_SOCKET_INPUTS);

const prompt = computed({
  get: () => String(props.state.nodeState.prompt ?? props.state.initialValues.prompt ?? ""),
  set: (v: string) => { props.state.nodeState.prompt = v; },
});

const refs = computed(() => Number((props.state.ui as { refs?: number }).refs ?? 0));
</script>

<template>
  <div class="fil-ee-root">
    <div class="fil-ee-head" :title="t('eep_refs_tt', 'Reference images wired into the slots below the panel — each one adds a latent to the conditioning.')">
      🖼️ {{ refs }} {{ t('eep_refs', 'refs') }}
    </div>

    <FilTextArea :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt" :rows="3" :linked="isLinked('prompt')"
      :placeholder="t('eep_prompt_ph', 'What to change, keep, or compose from the references…')"
      :title="isLinked('prompt')
        ? t('fld_linked_tt', 'Driven by the connected input — disconnect it to edit here.')
        : t('ee_prompt', 'Edit instruction: what to change, keep, or compose from the references.')" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ee-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-ee-head { font-size: 11px; line-height: 1.2; color: var(--fil-muted); }
</style>
