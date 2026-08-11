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
import { computed, onMounted, ref } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilToggle, FilSection } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { KSAMPLER_SOCKET_INPUTS } from "@/nodes2/nodes/ksampler";
import { providerApi, type SamplerOptionsPayload } from "@/api/client";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

/** Which installed samplers read eta / bongmath — served by the backend
 * (`GET /fil_design_imagemind/sampler_options`), which is the only place that
 * knows the real installed set (RES4LYF and friends register at runtime).
 * Module-level promise so ten KSampler nodes on a graph fetch once. */
let samplerOptionsPromise: Promise<SamplerOptionsPayload> | null = null;
function loadSamplerOptions(): Promise<SamplerOptionsPayload> {
  samplerOptionsPromise ??= providerApi.samplerOptions()
    .catch((err) => { samplerOptionsPromise = null; throw err; });
  return samplerOptionsPromise;
}

const etaSamplers = ref<Set<string> | null>(null);
const bongmathSamplers = ref<Set<string> | null>(null);
onMounted(() => {
  loadSamplerOptions()
    .then((p) => {
      etaSamplers.value = new Set(p.eta ?? []);
      bongmathSamplers.value = new Set(p.bongmath ?? []);
    })
    // Fail-open: without the server's verdict every widget stays enabled —
    // a widget wrongly grayed out is worse than one that does nothing.
    .catch(() => {});
});

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

/** The selected sampler ignores the widget's value entirely (the backend
 * drops it before sampling). null = server verdict not in yet → stay enabled. */
const etaIgnored = computed(
  () => etaSamplers.value !== null && !etaSamplers.value.has(samplerName.value),
);
const bongmathIgnored = computed(
  () => bongmathSamplers.value !== null && !bongmathSamplers.value.has(samplerName.value),
);

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
      :label="t('ksp_seed', '🌱 Seed')" inline-label
      :title="linkedTip('seed', t('ks_seed', 'Noise seed.'))" />
    <!-- Stock ComfyUI grays the after-generate combo out while seed is linked:
         the seed no longer belongs to the widget, so neither does its cycle
         control. -->
    <FilSelect v-model="controlAfterGenerate" :options="controlOptions" :disabled="isLinked('seed')"
      :label="t('ksp_after_generate', '🔁 After generate')" inline-label
      :title="linkedTip('seed', t('ksp_after_generate_tt', 'What ComfyUI does to the seed once the prompt has run.'))" />

    <FilNumberInput :ref="(el: unknown) => setFieldEl('steps', el)"
      v-model="steps" :min="1" :max="10000" :step="1" :disabled="isLinked('steps')"
      :label="t('ksp_steps', '🪜 Steps')" inline-label
      :title="linkedTip('steps', t('ks_steps', 'Number of denoising steps.'))" />
    <FilNumberInput :ref="(el: unknown) => setFieldEl('cfg', el)"
      v-model="cfg" :min="0" :max="100" :step="0.1" :disabled="isLinked('cfg')"
      :label="t('ksp_cfg', '🎯 CFG')" inline-label
      :title="linkedTip('cfg', t('ks_cfg', 'Classifier-free guidance scale.'))" />

    <FilSelect :ref="(el: unknown) => setFieldEl('sampler_name', el)"
      v-model="samplerName" :options="samplerOptions" :disabled="isLinked('sampler_name')"
      :label="t('ksp_sampler', '🎲 Sampler')" inline-label
      :title="linkedTip('sampler_name', t('ks_sampler', 'Sampling algorithm.'))" />
    <FilSelect :ref="(el: unknown) => setFieldEl('scheduler', el)"
      v-model="scheduler" :options="schedulerOptions" :disabled="isLinked('scheduler')"
      :label="t('ksp_scheduler', '📈 Scheduler')" inline-label
      :title="linkedTip('scheduler', t('ks_scheduler', 'Noise schedule.'))" />
    <FilSlider :ref="(el: unknown) => setFieldEl('denoise', el)"
      :model-value="denoise" :min="0" :max="1" :step="0.01" :disabled="isLinked('denoise')"
      :label="t('ksp_denoise', '🌫️ Denoise')" inline-label
      :title="linkedTip('denoise', t('ks_denoise', 'Denoise strength (1.0 = full).'))"
      @update:model-value="(v: number) => (denoise = v)" />

    <FilSection :title="t('ksp_section_advanced', '⚙️ Advanced')"
      :model-value="isCollapsed('advanced')" @update:model-value="(v: boolean) => setCollapsed('advanced', v)" />
    <!-- v-if, not v-show: a bare <template> renders as a fragment with no
         element for `display:none` to land on, so v-show here would be a no-op
         (the same trap already fixed in UpscaleTileCalc.vue). -->
    <template v-if="!isCollapsed('advanced')">
      <FilNumberInput :ref="(el: unknown) => setFieldEl('eta', el)"
        v-model="eta" :min="0" :max="100" :step="0.01" :disabled="isLinked('eta') || etaIgnored"
        :label="t('ksp_eta', '🌀 Eta')" inline-label
        :title="linkedTip('eta', etaIgnored
          ? t('ksp_eta_ignored_tt', 'This sampler ignores eta — only ancestral/SDE samplers use it.')
          : t('ks_eta', 'Noise multiplier for ancestral/SDE samplers (1.0 = standard, 0.0 = deterministic).'))" />
      <FilToggle :model-value="bongmath" :label="t('ksp_bongmath', '🧮 Bongmath')"
        :disabled="bongmathIgnored"
        :title="bongmathIgnored
          ? t('ksp_bongmath_ignored_tt', 'This sampler does not read the bongmath toggle.')
          : t('ks_bongmath', 'Enable bongmath implicit correction for RES4LYF samplers (ignored by standard samplers).')"
        @update:model-value="(v) => (bongmath = v)" />
      <FilSelect v-model="previewMethod" :options="previewOptions" inline-label
        :label="t('ksp_preview', '👁️ Preview')" :title="t('ks_preview', 'How the live sampling preview is rendered.')" />
      <FilSelect v-model="vaeDecode" :options="vaeDecodeOptions" inline-label
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
