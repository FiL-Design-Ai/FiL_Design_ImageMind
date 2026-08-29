<script setup lang="ts">
/**
 * FiLPromptDirector — instruction + source prompt on top, both wireable;
 * language and the seed row below (mirrors nodes/node_prompt_director.py).
 *
 * The two textareas are the whole point of the node, so they lead the panel —
 * the seed and its control_after_generate companion are hidden natively and
 * live at the bottom, the same way Noise Control renders its seed.
 * The assist column beside the instruction field is the shared AssistColumn.
 */
import { computed } from "vue";
import { FilTextArea, FilSegmented, FilNumberInput, FilSelect, AssistColumn } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { DIRECTOR_SOCKET_INPUTS } from "@/nodes2/nodes/prompt_director";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, DIRECTOR_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}
function numberField(name: string, fallback: number) {
  return computed({
    get: () => {
      const raw = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(raw) ? raw : fallback;
    },
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const instruction = stringField("instruction", "");
const sourcePrompt = stringField("source_prompt", "");
const language = stringField("language", "en");
const seed = numberField("seed", 0);
const controlAfterGenerate = stringField("control_after_generate", "fixed");

const languageOptions = computed(() => comboOptions("language", ["en", "ru", "zh"]));
const controlOptions = computed(() => comboOptions("control_after_generate", ["fixed", "increment", "decrement", "randomize"]));
// Two-letter codes are what the widget stores and what the backend interpolates
// into the language rule; the flags are display only.
const LANGUAGE_LABELS: Record<string, string> = { en: "🇬🇧 English", ru: "🇷🇺 Русский", zh: "🇨🇳 中文" };
</script>

<template>
  <div class="fil-pd-root">
    <!-- No labels: the placeholders say what each box is for, and keep
         FilTextArea on its single-root path where `$el` IS the textarea —
         which is what `setFieldEl` anchors the socket dot to. -->
    <div class="fil-pd-instruction-row">
      <FilTextArea :ref="(el: unknown) => setFieldEl('instruction', el)"
        v-model="instruction" :rows="3" toolbar :linked="isLinked('instruction')"
        :placeholder="t('pdp_instruction_ph', 'What to change: style, light, medium… e.g. “make it photorealistic, like a real photo”')"
        :title="linkedTip('instruction', t('pdp_instruction_tt', 'The instruction is the only creative direction the LLM follows. Type it or wire a STRING link.'))" />
      <AssistColumn v-model="instruction" :state="state" :editable="!isLinked('instruction')" context="instruction" />
    </div>

    <FilTextArea :ref="(el: unknown) => setFieldEl('source_prompt', el)" class="fil-pd-grow"
      v-model="sourcePrompt" :rows="4" toolbar :linked="isLinked('source_prompt')"
      :placeholder="t('pdp_source_ph', 'The prompt to rewrite — type it or wire a STRING link…')"
      :title="linkedTip('source_prompt', t('pdp_source_tt', 'The existing prompt the LLM rewrites. A wired link overrides this field.'))" />

    <FilSegmented v-model="language" :options="languageOptions" :option-labels="LANGUAGE_LABELS"
      :label="t('pdp_language', '🌐 Language')"
      :title="t('pdp_language_tt', 'Language of the finished prompt.')" />

    <FilNumberInput :ref="(el: unknown) => setFieldEl('seed', el)"
      v-model="seed" :min="0" :max="0xFFFFFFFFFFFFFFFF" :step="1" inline-label
      :label="t('pdp_seed', '🌱 Seed')"
      :title="t('pdp_seed_tt', 'Fixed seed reuses the cached answer (instant, no API call); a new seed asks the model for a fresh variant.')" />

    <FilSelect v-model="controlAfterGenerate" :options="controlOptions" inline-label
      :label="t('pdp_after_generate', '🔁 After generate')"
      :title="t('pdp_after_generate_tt', 'What ComfyUI does to the seed once the run finishes.')" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-pd-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif;
  /* `growable: true` in nodes2/prompt_director.ts gives the host an explicit
   * height (content + whatever the user dragged on top); filling it here is
   * what hands the slack to the two flex:1 fields below. Outside growable
   * mode the host is height:auto, so the percentage resolves to auto — inert. */
  height: 100%; }

/* The two text fields share the node's spare height when stretched. */
.fil-pd-grow { flex: 1 1 auto; min-height: 40px; height: auto; }

/* Instruction field + the assist column: the field keeps its full width minus
 * the 24px button stack, same geometry as the signed-off mockup. The row's
 * default align-items:stretch grows the textarea; the column centers itself. */
.fil-pd-instruction-row { display: flex; gap: 6px; min-width: 0; flex: 1 1 auto; min-height: 0; }
.fil-pd-instruction-row > :first-child { flex: 1; min-width: 0; height: auto; }
</style>
