<script setup lang="ts">
/**
 * FiLKSampler — sampler settings (mirrors nodes/node_ksampler.py).
 *
 * Ranges are copied from the node's own schema, not chosen here: a panel that
 * narrows `cfg` to a comfortable slider range would silently refuse values the
 * backend accepts. So the wide numeric fields (`cfg`, `eta`, `steps`, `seed`)
 * are number inputs, and only `denoise` — genuinely 0..1 — gets a slider.
 *
 * `control_after_generate` stays exactly as ComfyUI defines it. The seed UX in
 * Optic Scanner and HiResFix (random / use-last / new-fixed pills) is *their*
 * invention on top of a hidden seed; a KSampler seed is the one every ComfyUI
 * user already knows how to drive, and replacing it would be a private dialect.
 */
import { computed } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilToggle, FilSection } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { KSAMPLER_SOCKET_INPUTS } from "@/nodes2/nodes/ksampler";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, KSAMPLER_SOCKET_INPUTS);
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
function boolField(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => ((props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) ? "ON" : "OFF"),
    set: (v: "ON" | "OFF") => { props.state.nodeState[name] = v === "ON"; },
  });
}

/**
 * Sampler and scheduler lists come from the running ComfyUI, never from a
 * literal here: they grow with every sampler pack the user installs, and a
 * hardcoded list would quietly hide the ones this panel had not heard of.
 */
function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

function isCollapsed(section: string): boolean {
  const stored = (props.state.ui as Record<string, unknown>)[`collapsed_${section}`];
  return stored === undefined ? true : Boolean(stored);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}

const seed = numberField("seed", 0);
const controlAfterGenerate = stringField("control_after_generate", "randomize");
const steps = numberField("steps", 20);
const cfg = numberField("cfg", 7.0);
const samplerName = stringField("sampler_name", "euler");
const scheduler = stringField("scheduler", "normal");
const denoise = numberField("denoise", 1.0);
const eta = numberField("eta", 1.0);
const bongmath = boolField("bongmath", true);
const previewMethod = stringField("preview_method", "auto");
const vaeDecode = stringField("vae_decode", "true");

const controlOptions = computed(() => comboOptions("control_after_generate", ["fixed", "increment", "decrement", "randomize"]));
const samplerOptions = computed(() => comboOptions("sampler_name", ["euler"]));
const schedulerOptions = computed(() => comboOptions("scheduler", ["normal"]));
const previewOptions = computed(() => comboOptions("preview_method", ["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"]));
const vaeDecodeOptions = computed(() => comboOptions("vae_decode", ["true", "true (tiled)", "false"]));
</script>

<template>
  <div class="fil-ks-root">
    <FilNumberInput :ref="(el: unknown) => setFieldEl('seed', el)"
      v-model="seed" :min="0" :max="0xFFFFFFFFFFFFFFFF" :step="1" :disabled="isLinked('seed')"
      :label="t('ksp_seed', '🌱 Seed')"
      :title="linkedTip('seed', t('ks_seed', 'Noise seed.'))" />
    <FilSelect v-model="controlAfterGenerate" :options="controlOptions"
      :label="t('ksp_after_generate', '🔁 After generate')"
      :title="t('ksp_after_generate_tt', 'What ComfyUI does to the seed once the prompt has run.')" />

    <FilNumberInput :ref="(el: unknown) => setFieldEl('steps', el)"
      v-model="steps" :min="1" :max="10000" :step="1" :disabled="isLinked('steps')"
      :label="t('ksp_steps', '🪜 Steps')"
      :title="linkedTip('steps', t('ks_steps', 'Number of denoising steps.'))" />
    <FilNumberInput :ref="(el: unknown) => setFieldEl('cfg', el)"
      v-model="cfg" :min="0" :max="100" :step="0.1" :disabled="isLinked('cfg')"
      :label="t('ksp_cfg', '🎯 CFG')"
      :title="linkedTip('cfg', t('ks_cfg', 'Classifier-free guidance scale.'))" />
    <FilSlider :ref="(el: unknown) => setFieldEl('denoise', el)"
      :model-value="denoise" :min="0" :max="1" :step="0.01" :disabled="isLinked('denoise')"
      :label="t('ksp_denoise', '🌫️ Denoise')"
      :title="linkedTip('denoise', t('ks_denoise', 'Denoise strength (1.0 = full).'))"
      @update:model-value="(v: number) => (denoise = v)" />

    <FilSelect v-model="samplerName" :options="samplerOptions"
      :label="t('ksp_sampler', '🎲 Sampler')" :title="t('ks_sampler', 'Sampling algorithm.')" />
    <FilSelect v-model="scheduler" :options="schedulerOptions"
      :label="t('ksp_scheduler', '📈 Scheduler')" :title="t('ks_scheduler', 'Noise schedule.')" />

    <FilSection :title="t('ksp_section_advanced', '⚙️ Advanced')"
      :model-value="isCollapsed('advanced')" @update:model-value="(v: boolean) => setCollapsed('advanced', v)" />
    <!-- v-if, not v-show: a bare <template> renders as a fragment with no
         element for `display:none` to land on, so v-show here would be a no-op
         (the same trap already fixed in UpscaleTileCalc.vue). -->
    <template v-if="!isCollapsed('advanced')">
      <FilNumberInput :ref="(el: unknown) => setFieldEl('eta', el)"
        v-model="eta" :min="0" :max="100" :step="0.01" :disabled="isLinked('eta')"
        :label="t('ksp_eta', '🌀 Eta')"
        :title="linkedTip('eta', t('ks_eta', 'Noise multiplier for ancestral/SDE samplers (1.0 = standard, 0.0 = deterministic).'))" />
      <FilToggle :model-value="bongmath" :label="t('ksp_bongmath', '🧮 Bongmath')"
        :title="t('ks_bongmath', 'Enable bongmath implicit correction for RES4LYF samplers (ignored by standard samplers).')"
        @update:model-value="(v) => (bongmath = v)" />
      <FilSelect v-model="previewMethod" :options="previewOptions"
        :label="t('ksp_preview', '👁️ Preview')" :title="t('ks_preview', 'How the live sampling preview is rendered.')" />
      <FilSelect v-model="vaeDecode" :options="vaeDecodeOptions"
        :label="t('ksp_vae_decode', '🖼️ VAE decode')" :title="t('ks_vae_decode', 'Decode the result to an IMAGE preview/output. Needs a VAE.')" />
    </template>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ks-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
</style>
