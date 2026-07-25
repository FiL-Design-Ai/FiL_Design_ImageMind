<script setup lang="ts">
/** FiLHighResFix — HighRes-fix script controls (mirrors nodes/node_hiresfix.py).
 * Latent/pixel/controlnet fields show/hide reactively — this replaces the
 * widgethider.js behaviour of the original efficiency-nodes node. */
import { computed, watch } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilSegmented } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { toast } from "@/stores/toastStore";
import { findFilWidget } from "@/nodes2/util";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

function numberField(name: string, fallback: number) {
  return computed({
    get: () => Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) || fallback,
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

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const upscaleType = stringField("upscale_type", "latent");
const hiresCkpt = stringField("hires_ckpt_name", "(use same)");
const latentUpscaler = stringField("latent_upscaler", "nearest-exact");
const pixelUpscaler = stringField("pixel_upscaler", "");
const upscaleBy = numberField("upscale_by", 1.25);
const useSameSeed = boolField("use_same_seed", true);
const denoise = numberField("denoise", 0.56);
const hiresSteps = numberField("hires_steps", 12);
const iterations = numberField("iterations", 1);
const useControlnet = boolField("use_controlnet", false);
const controlNetName = stringField("control_net_name", "");
const strength = numberField("strength", 1.0);
const preprocessor = stringField("preprocessor", "none");

const ckptOptions = computed(() => comboOptions("hires_ckpt_name", ["(use same)"]));
const latentMethods = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"];
const pixelOptions = computed(() => comboOptions("pixel_upscaler", ["(none)"]));
const controlNetOptions = computed(() => comboOptions("control_net_name", ["(none)"]));
const preprocessorOptions = computed(() => comboOptions("preprocessor", ["none", "canny"]));

const showLatent = computed(() => upscaleType.value === "latent");
const showPixel = computed(() => upscaleType.value === "pixel" || upscaleType.value === "both");

// Own-seed block — mirrors FiLOpticScanner's bottom seed row (random/fixed
// mode + readout + Use last/New fixed pills). Randomization is driven by
// ComfyUI core's native `control_after_generate` on the hidden seed widget
// (verified: core randomizes it each queue even while hidden) — the
// graphToPrompt hook doesn't fire on queue in this frontend version.
const seedMode = computed({
  get: () => ((props.state.nodeState.seed_mode as "random" | "fixed") ?? "random"),
  set: (v: "random" | "fixed") => { props.state.nodeState.seed_mode = v; },
});
const seedValue = computed({
  get: () => Number(props.state.nodeState.seed ?? 0) || 0,
  // Write the native seed widget directly, not just nodeState: the
  // createSyncedNodeState mirror doesn't reach the seed widget (its value is
  // a prototype accessor tied to control_after_generate's linked-widget
  // machinery, unlike the plain numeric widgets), so a fixed seed set only
  // via nodeState never reaches the queued prompt. Direct assignment sticks.
  set: (v: number) => {
    props.state.nodeState.seed = v;
    const w = props.state.node ? findFilWidget(props.state.node, "seed") : null;
    if (w) w.value = v;
  },
});
const seedDisplay = computed(() => (seedMode.value === "fixed" ? `${seedValue.value}` : "random"));

// Point core's seed control at the mode the panel wants:
//   same-seed OR own+fixed → "fixed": seed stays put; in same-seed mode the
//     backend also pins the packed seed to 0, so FiLKSampler's cache stays
//     warm and re-queuing a fixed base seed doesn't re-sample.
//   own+random → "randomize": core draws a fresh seed into the hidden widget
//     every queue, so the hires pass actually varies.
watch([useSameSeed, seedMode], ([same, mode]) => {
  const node = props.state.node;
  const ctrl = node ? findFilWidget(node, "control_after_generate") : null;
  if (ctrl) ctrl.value = (same === "ON" || mode === "fixed") ? "fixed" : "randomize";
}, { immediate: true });

function setRandomSeed() {
  seedMode.value = "random";
}
function useLastSeed() {
  // After a random queue the last value core drew lives on the native seed
  // widget; fall back to lastRunSeed if the graphToPrompt hook did populate it.
  const node = props.state.node;
  const w = node ? findFilWidget(node, "seed") : null;
  const last = w && Number.isFinite(Number(w.value)) ? Number(w.value) : props.state.lastRunSeed;
  if (last == null || !Number.isFinite(last)) {
    toast.warning("No last-run seed recorded yet");
    return;
  }
  seedValue.value = last;
  seedMode.value = "fixed";
}
function newFixedSeed() {
  const n = Math.floor(Math.random() * 1_000_000_000) & 0x7fffffff;
  seedValue.value = n;
  seedMode.value = "fixed";
}
</script>

<template>
  <div class="fil-hrf-root">
    <FilSegmented :options="['latent', 'pixel', 'both']"
      :option-labels="{ latent: '🌀 latent', pixel: '🖼️ pixel', both: '🔀 both' }"
      :model-value="upscaleType" :label="t('lbl_upscale_type', '⬆️ Upscale type')"
      :title="t('hrf_upscale_type', 'Upscale in latent space, pixel space, or both.')"
      @update:model-value="(v: string) => (upscaleType = v)" />

    <template v-if="showLatent">
      <FilSelect :options="latentMethods" :model-value="latentUpscaler"
        :label="t('lbl_latent_up', '🌀 Latent upscaler')" :title="t('hrf_latent_up', 'Latent upscale method.')"
        @update:model-value="(v: string) => (latentUpscaler = v)" />
    </template>

    <template v-if="showPixel">
      <FilSelect :options="pixelOptions" :model-value="pixelUpscaler"
        :label="t('lbl_pixel_up', '🖼️ Pixel upscaler')" :title="t('hrf_pixel_up', 'Pixel upscale model (from upscale_models).')"
        @update:model-value="(v: string) => (pixelUpscaler = v)" />
    </template>

    <FilSelect :options="ckptOptions" :model-value="hiresCkpt"
      :label="t('lbl_hires_ckpt', '📦 Hires checkpoint')" :title="t('hrf_ckpt', 'Checkpoint for the hires pass. (use same) reuses the base model.')"
      @update:model-value="(v: string) => (hiresCkpt = v)" />

    <FilSlider :model-value="upscaleBy" :min="0.01" :max="8" :step="0.05" :label="t('lbl_upscale_by', '🔍 Upscale by')"
      :title="t('hrf_upscale_by', 'Upscale multiplier.')" @update:model-value="(v: number) => (upscaleBy = v)" />
    <FilSlider :model-value="denoise" :min="0" :max="1" :step="0.01" :label="t('lbl_hrf_denoise', '💧 Denoise')"
      :title="t('hrf_denoise', 'Denoise strength for the hires re-sample.')" @update:model-value="(v: number) => (denoise = v)" />

    <FilNumberInput v-model="hiresSteps" :min="1" :max="10000" :step="1"
      :label="t('lbl_hires_steps', '🪜 Hires steps')" :title="t('hrf_steps', 'Steps for the hires re-sample.')" />
    <FilNumberInput v-model="iterations" :min="0" :max="5" :step="1"
      :label="t('lbl_iterations', '🔁 Iterations')" :title="t('hrf_iterations', 'How many upscale+resample passes to run.')" />

    <FilSegmented :options="['ON', 'OFF']" :option-labels="{ ON: '♻️ same seed', OFF: '🎲 own' }" :model-value="useSameSeed"
      :label="t('lbl_use_same_seed', '🌱 Seed source')"
      :title="t('hrf_same_seed', 'Reuse the samplers seed for the hires pass.')"
      @update:model-value="(v) => (useSameSeed = v as 'ON' | 'OFF')" />

    <div v-if="useSameSeed === 'OFF'" class="fil-hrf-seed-row">
      <input
        :value="seedDisplay"
        type="text"
        class="fil-hrf-seed-field"
        :class="{ 'is-random': seedMode === 'random' }"
        :readonly="seedMode === 'random'"
        aria-label="Hires seed value"
        :title="seedMode === 'fixed' ? t('hrf_seed_locked', 'Locked hires seed') : t('hrf_seed_auto_random', 'Auto-random — a new hires seed is generated each run')"
        @input="(e) => (seedValue = Number((e.target as HTMLInputElement).value) || 0)"
      />
      <button type="button" class="fil-hrf-seed-pill" :class="{ active: seedMode === 'random' }"
        :title="t('hrf_seed_mode_tt', 'Random generates a new hires seed each run.')" @click="setRandomSeed">
        {{ t('hrf_seed_random', 'Random') }}
      </button>
      <button type="button" class="fil-hrf-seed-pill"
        :title="props.state.lastRunSeed != null ? `${t('hrf_seed_use_last_prefix', `Reuse the last run's hires seed:`)} ${props.state.lastRunSeed}` : t('hrf_seed_use_last_tt', 'Reuse the hires seed from the last executed run.')"
        @click="useLastSeed">
        {{ t('hrf_seed_use_last', 'Use last') }}
      </button>
      <button type="button" class="fil-hrf-seed-pill fil-hrf-seed-pill-accent"
        :title="t('hrf_seed_new_fixed_tt', 'Generate a new random fixed hires seed.')" @click="newFixedSeed">
        {{ t('hrf_seed_new_fixed', 'New fixed') }}
      </button>
    </div>

    <FilSegmented :options="['ON', 'OFF']" :option-labels="{ ON: '🕹️ ON', OFF: 'OFF' }" :model-value="useControlnet"
      :label="t('lbl_use_cn', '🕹️ Use ControlNet')"
      :title="t('hrf_use_cn', 'Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor.')"
      @update:model-value="(v) => (useControlnet = v as 'ON' | 'OFF')" />
    <template v-if="useControlnet === 'ON'">
      <FilSelect :options="controlNetOptions" :model-value="controlNetName"
        :label="t('lbl_cn_name', '🧩 ControlNet model')" :title="t('hrf_cn_name', 'ControlNet model to apply.')"
        @update:model-value="(v: string) => (controlNetName = v)" />
      <FilSlider :model-value="strength" :min="0" :max="10" :step="0.01" :label="t('lbl_cn_strength', '💪 Strength')"
        :title="t('hrf_cn_strength', 'ControlNet strength.')" @update:model-value="(v: number) => (strength = v)" />
      <FilSegmented :options="preprocessorOptions" :option-labels="{ none: '🚫 none', canny: '🪞 canny' }"
        :model-value="preprocessor" :label="t('lbl_cn_preproc', '🧪 Preprocessor')"
        :title="t('hrf_cn_preproc', `Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets).`)"
        @update:model-value="(v: string) => (preprocessor = v)" />
    </template>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-hrf-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif; }

/* Own-seed row — visually matches OpticScanner's bottom seed block. */
.fil-hrf-seed-row { display: flex; gap: 6px; min-width: 0; }
.fil-hrf-seed-field {
  flex: 1.3; min-width: 0; box-sizing: border-box; height: 34px;
  background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--fil-pill-radius);
  padding: 0 12px; color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 13px; text-align: center; outline: none; transition: border-color .08s;
}
.fil-hrf-seed-field:focus { border-color: var(--fil-accent); }
.fil-hrf-seed-field.is-random { color: var(--fil-muted, #9ca8b5); font-style: italic; }
.fil-hrf-seed-pill {
  flex: 1; min-width: 0; box-sizing: border-box; height: 34px; padding: 0 8px;
  border-radius: var(--fil-pill-radius); border: 1px solid var(--fil-pill-border);
  background: var(--fil-pill-bg); color: var(--fil-text, #e8edf3);
  font-family: inherit; font-size: 12px; font-weight: 600; cursor: pointer;
  transition: background .08s, border-color .08s, color .08s;
  appearance: none; -webkit-appearance: none; outline: none;
}
.fil-hrf-seed-pill:hover { background: rgba(255, 255, 255, 0.12); }
.fil-hrf-seed-pill.active { background: rgba(255, 255, 255, 0.16); border-color: rgba(255, 255, 255, 0.2); }
.fil-hrf-seed-pill:focus-visible { outline: 2px solid var(--fil-accent); outline-offset: -2px; }
.fil-hrf-seed-pill-accent {
  background: var(--fil-accent); border-color: var(--fil-accent); color: #241206; font-weight: 700;
}
.fil-hrf-seed-pill-accent:hover { filter: brightness(1.08); background: var(--fil-accent); }
</style>
