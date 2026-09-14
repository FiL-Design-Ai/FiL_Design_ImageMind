<script setup lang="ts">
/**
 * FiLKrea2TiledDiffusion — One-Click High-Fidelity AI Upscaler & Enhancer.
 * Minimalist, sequential layout matching the official FiL Design standard.
 */
import { computed } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilTextArea } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { KREA2_SOCKET_INPUTS } from "@/nodes2/nodes/krea2_tiled_diffusion";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, KREA2_SOCKET_INPUTS);
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

// Fields
const upscaleFactor = numberField("upscale_factor", 2.0);
const denoise = numberField("denoise", 0.20);
const prompt = stringField("prompt", "high quality, ultra detailed, sharp focus, 8k uhd");
const seed = numberField("seed", 0);
const controlAfterGenerate = stringField("control_after_generate", "randomize");
const steps = numberField("steps", 20);

// Options from ComfyUI backend widgets
const controlOptions = computed(() => comboOptions("control_after_generate", ["fixed", "increment", "decrement", "randomize"]));
</script>

<template>
  <div class="fil-krea2-root">
    <!-- Upscale Factor -->
    <FilSlider
      :ref="(el: unknown) => setFieldEl('upscale_factor', el)"
      :model-value="upscaleFactor"
      :min="1"
      :max="8"
      :step="0.1"
      :disabled="isLinked('upscale_factor')"
      :label="t('krea2_p_factor', '🔍 Upscale factor')"
      inline-label
      :title="linkedTip('upscale_factor', t('krea2_upscale_factor', 'Target size multiplier (e.g. 2.0x).'))"
      @update:model-value="(v: number) => (upscaleFactor = v)"
    />

    <!-- Denoise (Creativity) -->
    <FilSlider
      :ref="(el: unknown) => setFieldEl('denoise', el)"
      :model-value="denoise"
      :min="0"
      :max="1"
      :step="0.01"
      :disabled="isLinked('denoise')"
      :label="t('krea2_p_denoise', '🌫️ Denoise (Creativity)')"
      inline-label
      :title="linkedTip('denoise', t('krea2_denoise', 'Denoising strength. 0.15-0.25 strictly preserves original identity while adding crisp micro-details.'))"
      @update:model-value="(v: number) => (denoise = v)"
    />

    <!-- Prompt -->
    <FilTextArea
      :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt"
      :rows="2"
      :disabled="isLinked('prompt')"
      :label="t('krea2_p_prompt', '📝 Prompt')"
      :placeholder="t('krea2_prompt_ph', 'Desired details: high quality, ultra detailed, sharp focus...')"
      :title="linkedTip('prompt', t('krea2_prompt', 'Positive prompt describing desired texture and detail.'))"
    />

    <!-- Seed -->
    <FilNumberInput
      :ref="(el: unknown) => setFieldEl('seed', el)"
      v-model="seed"
      :min="0"
      :max="0xFFFFFFFFFFFFFFFF"
      :step="1"
      :disabled="isLinked('seed')"
      :label="t('krea2_p_seed', '🌱 Seed')"
      inline-label
      :title="linkedTip('seed', t('krea2_seed', 'Random seed for diffusion noise.'))"
    />

    <!-- After Generate -->
    <FilSelect
      v-model="controlAfterGenerate"
      :options="controlOptions"
      :disabled="isLinked('seed')"
      :label="t('krea2_p_after_gen', '🔁 After generate')"
      inline-label
      :title="t('ksp_after_generate_tt', 'What ComfyUI does to the seed after queue.')"
    />

    <!-- Steps -->
    <FilNumberInput
      :ref="(el: unknown) => setFieldEl('steps', el)"
      v-model="steps"
      :min="1"
      :max="100"
      :step="1"
      :disabled="isLinked('steps')"
      :label="t('krea2_p_steps', '🪜 Steps')"
      inline-label
      :title="linkedTip('steps', t('krea2_steps', 'Sampling steps (20 steps recommended for high quality).'))"
    />
  </div>
</template>

<style scoped>
.fil-krea2-root {
  display: flex;
  flex-direction: column;
  gap: var(--fil-row-gap, 6px);
  width: 100%;
  box-sizing: border-box;
}
</style>
