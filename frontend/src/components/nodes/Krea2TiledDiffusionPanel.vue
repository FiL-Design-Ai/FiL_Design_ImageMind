<script setup lang="ts">
/**
 * FiLKrea2TiledDiffusion — High-Fidelity One-Click AI Upscaler & Enhancer.
 * Open, symmetrical 2-column layout (50/50) matching the official FiL Design standard.
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
    set: (v: number) => {
      props.state.nodeState[name] = v;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = v;
    },
  });
}

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => {
      props.state.nodeState[name] = v;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = v;
    },
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
const prompt = stringField("prompt", "crisp textures, sharp focus, authentic skin pores, fine fabrics, realistic micro-details");
const seed = numberField("seed", 0);
const controlAfterGenerate = stringField("control_after_generate", "randomize");
const steps = numberField("steps", 20);
const tileOverlap = stringField("tile_overlap", "auto (256px)");
const textureInjection = numberField("texture_injection", 0.20);
const colorMatch = stringField("color_match", "none");

// Options
const controlOptions = computed(() => comboOptions("control_after_generate", ["fixed", "increment", "decrement", "randomize"]));

const OVERLAP_OPTIONS = ["auto (256px)", "128px (fast)", "256px (optimal)", "384px (ultra-smooth)"] as const;
const OVERLAP_LABELS: Record<string, string> = {
  "auto (256px)": "Auto (256px)",
  "128px (fast)": "128px (Fast)",
  "256px (optimal)": "256px (Opt)",
  "384px (ultra-smooth)": "384px (Smooth)",
};
const overlapOptions = computed(() => comboOptions("tile_overlap", [...OVERLAP_OPTIONS]));

const COLOR_MATCH_OPTIONS = ["none", "luminance", "wavelet"] as const;
const COLOR_MATCH_LABELS: Record<string, string> = {
  none: "🚫 Off",
  luminance: "✨ Luminance",
  wavelet: "🌊 Wavelet",
};
const colorMatchOptions = computed(() => comboOptions("color_match", [...COLOR_MATCH_OPTIONS]));
</script>

<template>
  <div class="fil-krea2-root">
    <!-- Row 1: Scale & Denoise (50/50) -->
    <div class="fil-krea2-grid-2">
      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="linkedTip('upscale_factor', t('krea2_upscale_factor', 'Target size multiplier (e.g. 2.0x).'))">
          {{ t('krea2_p_factor', '🔍 Upscale factor') }}
        </label>
        <FilSlider
          :ref="(el: unknown) => setFieldEl('upscale_factor', el)"
          :model-value="upscaleFactor"
          :min="1"
          :max="8"
          :step="0.1"
          :disabled="isLinked('upscale_factor')"
          @update:model-value="(v: number) => (upscaleFactor = v)"
        />
      </div>

      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="linkedTip('denoise', t('krea2_denoise', 'Denoising strength (0.15-0.25 preserves original identity while adding micro-details).'))">
          {{ t('krea2_p_denoise', '🌫️ Denoise') }}
        </label>
        <FilSlider
          :ref="(el: unknown) => setFieldEl('denoise', el)"
          :model-value="denoise"
          :min="0"
          :max="1"
          :step="0.01"
          :disabled="isLinked('denoise')"
          @update:model-value="(v: number) => (denoise = v)"
        />
      </div>
    </div>

    <!-- Row 2: Seed & After Generate (50/50) -->
    <div class="fil-krea2-grid-2">
      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="linkedTip('seed', t('krea2_seed', 'Random seed for diffusion noise.'))">
          {{ t('krea2_p_seed', '🌱 Seed') }}
        </label>
        <FilNumberInput
          :ref="(el: unknown) => setFieldEl('seed', el)"
          v-model="seed"
          :min="0"
          :max="0xFFFFFFFFFFFFFFFF"
          :step="1"
          :disabled="isLinked('seed')"
        />
      </div>

      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="t('ksp_after_generate_tt', 'What ComfyUI does to the seed after queue.')">
          {{ t('krea2_p_after_gen', '🔁 After generate') }}
        </label>
        <FilSelect
          v-model="controlAfterGenerate"
          :options="controlOptions"
          :disabled="isLinked('seed')"
        />
      </div>
    </div>

    <!-- Row 3: Steps & Tile Overlap (50/50) -->
    <div class="fil-krea2-grid-2">
      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="linkedTip('steps', t('krea2_steps', 'Sampling steps (20 steps recommended for high quality).'))">
          {{ t('krea2_p_steps', '🪜 Steps') }}
        </label>
        <FilNumberInput
          :ref="(el: unknown) => setFieldEl('steps', el)"
          v-model="steps"
          :min="1"
          :max="100"
          :step="1"
          :disabled="isLinked('steps')"
        />
      </div>

      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="t('krea2_tile_overlap', 'Overlap between tiles.')">
          {{ t('krea2_p_overlap', '🧵 Overlap') }}
        </label>
        <FilSelect
          v-model="tileOverlap"
          :options="overlapOptions"
          :option-labels="OVERLAP_LABELS"
        />
      </div>
    </div>

    <!-- Row 4: Texture Injection & Color Match (50/50) -->
    <div class="fil-krea2-grid-2">
      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="linkedTip('texture_injection', t('krea2_texture_injection', 'Injects genuine high-frequency microtexture (pores, skin detail) to eliminate plastic look.'))">
          {{ t('krea2_p_texture', '🔬 Texture') }}
        </label>
        <FilSlider
          :ref="(el: unknown) => setFieldEl('texture_injection', el)"
          :model-value="textureInjection"
          :min="0"
          :max="1"
          :step="0.05"
          :disabled="isLinked('texture_injection')"
          @update:model-value="(v: number) => (textureInjection = v)"
        />
      </div>

      <div class="fil-krea2-field">
        <label class="fil-w-label" :title="t('krea2_color_match', 'Locks color palette and skin tones to source image.')">
          {{ t('krea2_p_colormatch', '🎨 Color match') }}
        </label>
        <FilSelect
          v-model="colorMatch"
          :options="colorMatchOptions"
          :option-labels="COLOR_MATCH_LABELS"
        />
      </div>
    </div>

    <!-- Row 5: Prompt (Full width) -->
    <div class="fil-krea2-field">
      <label class="fil-w-label" :title="linkedTip('prompt', t('krea2_prompt', 'Positive prompt describing desired texture and detail.'))">
        {{ t('krea2_p_prompt', '📝 Prompt') }}
      </label>
      <FilTextArea
        :ref="(el: unknown) => setFieldEl('prompt', el)"
        v-model="prompt"
        :rows="2"
        :disabled="isLinked('prompt')"
        :placeholder="t('krea2_prompt_ph', 'Desired details: high quality, ultra detailed, sharp focus...')"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-krea2-root {
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap, 8px);
  padding: var(--fil-node-pad, 8px);
  color: var(--fil-text, #fff);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-krea2-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  align-items: end;
  min-width: 0;
}

.fil-krea2-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.fil-w-label {
  font-size: 11px;
  line-height: 1.2;
  color: var(--fil-muted, #aaa);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
