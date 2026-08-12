<script setup lang="ts">
/**
 * FiLNoiseControl — RNG source and seed-variation controls
 * (mirrors nodes/node_noise_control.py).
 *
 * The variation seed and its weight only do anything while Variation is on, so
 * they are hidden when it is off rather than sitting there greyed out — the
 * node is four fields, and two of them being inert by default is most of it.
 */
import { computed } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilSegmented } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { NOISE_CONTROL_SOCKET_INPUTS } from "@/nodes2/nodes/noise_control";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, NOISE_CONTROL_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function numberField(name: string, fallback: number) {
  return computed({
    get: () => {
      const raw = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(raw) ? raw : fallback;
    },
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}
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

const rngSource = stringField("rng_source", "cpu");
const seed = numberField("seed", 0);
const controlAfterGenerate = stringField("control_after_generate", "randomize");
const weight = numberField("weight", 0.5);

const rngOptions = computed(() => comboOptions("rng_source", ["cpu", "gpu"]));
const controlOptions = computed(() => comboOptions("control_after_generate", ["fixed", "increment", "decrement", "randomize"]));
const RNG_LABELS: Record<string, string> = { cpu: "🖥️ CPU", gpu: "🎮 GPU" };
</script>

<template>
  <div class="fil-nsc-root">
    <!-- Segmented, not a dropdown: the list is two entries and picking between
         them is the whole point of the node. -->
    <FilSegmented v-model="rngSource" :options="rngOptions" :option-labels="RNG_LABELS"
      :label="t('nscp_rng_source', '🎲 Noise on')"
      :title="t('nsc_rng_source', 'Device the initial noise is drawn on.')" />

    <FilNumberInput :ref="(el: unknown) => setFieldEl('seed', el)"
      v-model="seed" :min="0" :max="0xFFFFFFFFFFFFFFFF" :step="1" :disabled="isLinked('seed')" inline-label
      :label="t('nscp_seed', '🌱 Variation seed')"
      :title="linkedTip('seed', t('nsc_seed', 'Variation seed.'))" />

    <FilSelect v-model="controlAfterGenerate" :options="controlOptions" :disabled="isLinked('seed')" inline-label
      :label="t('nscp_after_generate', '🔁 After generate')"
      :title="linkedTip('seed', t('nscp_after_generate_tt', 'What ComfyUI does to the variation seed once the prompt has run.'))" />

    <FilSlider :ref="(el: unknown) => setFieldEl('weight', el)"
      :model-value="weight" :min="0" :max="1" :step="0.01" :disabled="isLinked('weight')" inline-label
      :label="t('nscp_weight', '⚖️ Variation weight')"
      :title="linkedTip('weight', t('nsc_weight', 'Variation strength: 0 = base seed only, 1 = variation seed only.'))"
      @update:model-value="(v: number) => (weight = v)" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-nsc-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
</style>
