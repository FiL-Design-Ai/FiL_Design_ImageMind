<script setup lang="ts">
/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning
 * (mirrors nodes/node_edit_encoder.py).
 *
 * The four controls here are the ones that change what the node *does* with a
 * reference; everything else it owns (the two megapixel caps, the encoder role,
 * the latents method) is advanced and stays a native widget below.
 *
 * `reference_mode` is first and segmented rather than a dropdown, because
 * picking between its three values is the single decision this node exists to
 * make: whether the reference is looked at, pasted into the frame, or both.
 */
import { computed } from "vue";
import { FilTextArea, FilSelect, FilSegmented, FilSlider } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { EDIT_ENCODER_SOCKET_INPUTS, type EditEncoderRun } from "@/nodes2/nodes/edit_encoder";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t, tPlural } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, EDIT_ENCODER_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

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
const referenceMode = stringField("reference_mode", "vision");
const promptPreset = stringField("prompt_preset", "none");
const treatment = stringField("reference_treatment", "normal");

const strength = computed({
  get: () => {
    const raw = Number(props.state.nodeState.reference_strength ?? props.state.initialValues.reference_strength ?? 1);
    return Number.isFinite(raw) ? raw : 1;
  },
  set: (v: number) => { props.state.nodeState.reference_strength = v; },
});

const modeOptions = computed(() => comboOptions("reference_mode", ["vision", "latents", "both"]));
const presetOptions = computed(() => comboOptions("prompt_preset", ["none"]));
const treatmentOptions = computed(() => comboOptions("reference_treatment", ["normal"]));

const MODE_LABELS: Record<string, string> = {
  vision: "👁️ vision",
  latents: "🧩 latents",
  both: "👁️🧩 both",
};

const refs = computed(() => Number((props.state.ui as { refs?: number }).refs ?? 0));

/**
 * What the last run did, straight from its `ui` payload. Shown because every
 * way this node can disappoint is silent: a reference discarded, a strength
 * that does nothing in this mode, a style preset with nothing treated. The
 * `summary` output says all of it — and says it to nobody unless it is wired.
 *
 * The first line is the shape of the run; a NOTE line is the part worth
 * interrupting for, so that is what a warned run shows.
 */
const lastRun = computed(() => (props.state.ui as { lastRun?: EditEncoderRun | null }).lastRun ?? null);

const report = computed(() => {
  const run = lastRun.value;
  if (!run?.summary) return null;
  const lines = run.summary.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const note = lines.find(l => l.startsWith("NOTE:"));
  const text = (note ?? lines[0]).replace(/^NOTE:\s*/, "");
  return {
    // The NOTE prefix carried the capital letter; put one back rather than
    // opening the line mid-sentence.
    text: text.charAt(0).toUpperCase() + text.slice(1),
    warned: !!note,
    full: run.summary,
  };
});
</script>

<template>
  <div class="fil-ee-root">
    <div class="fil-ee-head" :title="t('eep_refs_tt', 'Reference images wired into the slots below the panel — each one adds a latent to the conditioning.')">
      🖼️ {{ refs }} {{ tPlural('eep_refs', refs, 'reference', 'references', 'references') }}
    </div>

    <FilTextArea :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt" :rows="3" :linked="isLinked('prompt')"
      :placeholder="t('eep_prompt_ph', 'What to change, keep, or compose from the references…')"
      :title="linkedTip('prompt', t('ee_prompt', 'Edit instruction: what to change, keep, or compose from the references.'))" />

    <FilSegmented v-model="referenceMode" :options="modeOptions" :option-labels="MODE_LABELS"
      :label="t('eep_mode', '🎯 References reach')"
      :title="t('ee_mode', 'How references reach the model.')" />

    <FilSelect v-model="promptPreset" :options="presetOptions" inline-label
      :label="t('eep_preset', '📝 Opening')"
      :title="t('ee_prompt_preset', 'A ready-made opening, prepended to whatever you type.')" />

    <FilSelect v-model="treatment" :options="treatmentOptions" inline-label
      :label="t('eep_treatment', '🎨 Treatment')"
      :title="t('ee_treatment', 'What to do to each reference before the text encoder looks at it.')" />

    <FilSlider :ref="(el: unknown) => setFieldEl('reference_strength', el)"
      :model-value="strength" :min="0" :max="3" :step="0.05"
      :disabled="isLinked('reference_strength')" inline-label
      :label="t('eep_strength', '💪 Strength')"
      :title="linkedTip('reference_strength', t('ee_strength', 'How hard the references pull on the text encoder.'))"
      @update:model-value="(v: number) => (strength = v)" />

    <!-- Last, because it reports on everything above it. -->
    <div v-if="report" class="fil-ee-report" :class="{ warned: report.warned }" :title="report.full">
      {{ report.warned ? '⚠️' : '✅' }} {{ report.text }}
    </div>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ee-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-ee-head { font-size: 11px; line-height: 1.2; color: var(--fil-muted); }
/* The last run, in one line. Clipped rather than wrapped so the node keeps its
 * height whatever the report says; the full text is the tooltip. */
.fil-ee-report { font-size: 11px; line-height: 1.3; color: var(--fil-muted);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fil-ee-report.warned { color: var(--fil-danger); white-space: normal; }
</style>
