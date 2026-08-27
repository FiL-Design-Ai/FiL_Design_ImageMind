<script setup lang="ts">
/**
 * FiLPrompter — single prompt text area with AssistColumn on the right.
 * The prompt passes through untouched at queue execution time.
 * The assist buttons (rephrase / densify / expand) call /director_assist live.
 */
import { computed } from "vue";
import { FilTextArea, AssistColumn } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { PROMPTER_SOCKET_INPUTS } from "@/nodes2/nodes/prompter";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, PROMPTER_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

const prompt = stringField("prompt", "");
</script>

<template>
  <div class="fil-pr-root">
    <div class="fil-pr-prompt-row">
      <FilTextArea
        :ref="(el: unknown) => setFieldEl('prompt', el)"
        class="fil-pr-grow"
        v-model="prompt"
        :rows="4"
        :linked="isLinked('prompt')"
        :placeholder="t('prp_prompt_ph', 'Type your prompt here or wire a STRING link…')"
        :title="linkedTip('prompt', t('prp_prompt_tt', 'The prompt text — passed directly to the output on generate. The 3 buttons edit it live.'))"
      />
      <AssistColumn v-model="prompt" :state="state" :editable="!isLinked('prompt')" />
    </div>
  </div>
</template>

<style scoped>
.fil-pr-root {
  width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif;
  height: 100%;
}
.fil-pr-prompt-row { display: flex; gap: 6px; min-width: 0; flex: 1 1 auto; min-height: 0; }
.fil-pr-prompt-row > :first-child { flex: 1; min-width: 0; height: auto; }
.fil-pr-grow { flex: 1 1 auto; min-height: 50px; height: auto; }
</style>
