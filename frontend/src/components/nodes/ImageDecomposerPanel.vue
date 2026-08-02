<script setup lang="ts">
/**
 * FiLImageDecomposer — prompt and output language
 * (mirrors nodes/node_decomposer.py).
 *
 * Both node inputs are optional and the node needs at least one of them, which
 * nothing on the canvas said: an empty prompt with no image wired looks exactly
 * like a node that is ready to run. The hint line under the field is that
 * missing sentence.
 */
import { computed } from "vue";
import { FilTextArea, FilSegmented } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { DECOMPOSER_SOCKET_INPUTS } from "@/nodes2/nodes/decomposer";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, DECOMPOSER_SOCKET_INPUTS);

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const prompt = stringField("prompt", "");
const language = stringField("language", "en");

const languageOptions = computed(() => comboOptions("language", ["en", "ru"]));
// Two-letter codes are what the widget stores and what the backend interpolates
// into the request; the flags are display only.
const LANGUAGE_LABELS: Record<string, string> = { en: "🇬🇧 English", ru: "🇷🇺 Русский" };

/** True when neither an image is wired nor any prompt text has been typed. */
const hasImage = computed(() => {
  const inputs = (props.state.node as { inputs?: { name?: string; link?: number | null }[] } | undefined)?.inputs;
  return Boolean(inputs?.find((i) => i.name === "image")?.link != null);
});
const needsInput = computed(() => !hasImage.value && !prompt.value.trim() && !isLinked("prompt"));
</script>

<template>
  <div class="fil-idc-root">
    <FilTextArea :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt" :rows="4" :linked="isLinked('prompt')"
      :label="t('idcp_prompt', '📝 Prompt')"
      :placeholder="t('idcp_prompt_placeholder', 'Describe the scene, or wire an image instead…')"
      :title="isLinked('prompt')
        ? t('fld_linked_tt', 'Driven by the connected input — disconnect it to edit here.')
        : t('idcp_prompt_tt', 'Optional text to decompose. Ignored when an image is connected.')" />

    <p v-if="needsInput" class="fil-idc-hint">
      {{ t('idcp_needs_input', 'Connect an image or type a prompt — the node needs one of the two.') }}
    </p>

    <FilSegmented v-model="language" :options="languageOptions" :option-labels="LANGUAGE_LABELS"
      :label="t('idcp_language', '🌐 Output language')"
      :title="t('idcp_language_tt', 'Language of the decomposed Subject / Lighting / Composition / Style outputs.')" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-idc-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-idc-hint { margin: 0; font-size: 11px; line-height: 1.35; color: var(--fil-muted); }
</style>
