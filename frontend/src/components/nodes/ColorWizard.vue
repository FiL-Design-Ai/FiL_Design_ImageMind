<script setup lang="ts">
/**
 * FiLColorWizard - Cyberpunk HUD panel for automatic color correction & quick presets.
 */
import { computed } from "vue";
import { FilSection, FilComboBox, FilSlider, FilToggle, type FilComboOption } from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { NODE_CONTRACTS } from "@/api/contracts";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// Methods come from the generated contract (backed by METHODS in
// common/color_correction.py), never from literals here: "LAB Contrast" is not a
// key METHODS knows — METHODS.get(method, METHODS["Full Auto"]) silently fell
// back to Full Auto, so picking it quietly ran a different algorithm, and the
// value is not even legal for the COMBO input.
const cwContract = NODE_CONTRACTS["FiLColorWizard"];
const methodSpec =
  cwContract?.inputs.required.find((i) => i.name === "method") ||
  cwContract?.inputs.optional.find((i) => i.name === "method");
// A dropdown, not a segmented strip: five method names never fit across a
// ~290px node — measured live, every option was clipped to 53px of the 61–95px
// it needed, so not one of them was readable. The contract declares this widget
// as `combo` for exactly that reason.
const methodOptions = computed<FilComboOption[]>(() =>
  (methodSpec?.values?.length ? methodSpec.values : ["Full Auto"]).map((value) => ({ value })),
);

function createRef<T>(name: string, defaultValue: T) {
  return computed<T>({
    get: () => (props.state.nodeState[name] as T) ?? defaultValue,
    set: (val: T) => {
      props.state.nodeState[name] = val;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = val;
    },
  });
}

const method = createRef<string>("method", "Full Auto");
const strength = createRef<number>("strength", 0.8);
const temperature = createRef<number>("temperature", 0.0);
const tint = createRef<number>("tint", 0.0);
const preserveSkin = createRef<boolean>("preserve_skin", false);

function applyPreset(preset: "warm" | "cool" | "skin" | "contrast") {
  if (preset === "warm") {
    method.value = "Full Auto";
    temperature.value = 0.35;
    tint.value = 0.0;
    strength.value = 0.8;
    preserveSkin.value = true;
  } else if (preset === "cool") {
    method.value = "Full Auto";
    temperature.value = -0.35;
    tint.value = 0.15;
    strength.value = 0.85;
    preserveSkin.value = false;
  } else if (preset === "skin") {
    method.value = "White Patch";
    temperature.value = 0.05;
    tint.value = 0.0;
    strength.value = 0.75;
    preserveSkin.value = true;
  } else if (preset === "contrast") {
    // "LAB Enhance" is the actual METHODS key; "LAB Contrast" did not exist and
    // silently fell back to Full Auto.
    method.value = "LAB Enhance";
    temperature.value = 0.0;
    tint.value = 0.0;
    strength.value = 0.9;
    preserveSkin.value = false;
  }
}
</script>

<template>
  <div class="fil-color-wizard-root">
    <!-- Quick Presets -->
    <div class="fil-cw-presets-block">
      <div class="fil-cw-presets-title">{{ t('cw_presets', '⚡ Quick Presets') }}</div>
      <div class="fil-cw-presets-grid">
        <button type="button" class="fil-cw-preset-btn warm"
          :title="t('cw_preset_warm_tt', 'Warm Sunny Tone')" @click="applyPreset('warm')">
          {{ t('cw_preset_warm', '☀️ Warm Sun') }}
        </button>
        <button type="button" class="fil-cw-preset-btn cool"
          :title="t('cw_preset_cool_tt', 'Cool Sci-Fi Cyberpunk Tone')" @click="applyPreset('cool')">
          {{ t('cw_preset_cool', '🧊 Cool Sci-Fi') }}
        </button>
        <button type="button" class="fil-cw-preset-btn skin"
          :title="t('cw_preset_skin_tt', 'Natural Skin Preservation')" @click="applyPreset('skin')">
          {{ t('cw_preset_skin', '👤 Skin Protect') }}
        </button>
        <button type="button" class="fil-cw-preset-btn contrast"
          :title="t('cw_preset_contrast_tt', 'Punchy LAB Contrast')" @click="applyPreset('contrast')">
          {{ t('cw_preset_contrast', '⚡ Contrast') }}
        </button>
      </div>
    </div>

    <!-- Algorithm Method -->
    <FilSection :title="t('cw_section_method', '⚙️ Method')" />
    <FilComboBox
      v-model="method"
      :options="methodOptions"
      :title="t('tt_cw_method', 'Correction algorithm.')"
    />

    <!-- Adjustment Sliders -->
    <FilSection :title="t('cw_section_adjust', '🎛️ Adjustments')" />
    <div class="fil-cw-slider-group">
      <FilSlider v-model="strength" :min="0" :max="1" :step="0.05"
        :label="t('cw_strength', 'Correction Strength')"
        :title="t('tt_cw_strength', 'Correction strength (0 = no change).')" />
      <FilSlider v-model="temperature" :min="-1" :max="1" :step="0.05"
        :label="t('cw_temperature', 'Temperature (Warm/Cool)')"
        :title="t('tt_cw_temperature', 'Colour temperature.')" />
      <FilSlider v-model="tint" :min="-1" :max="1" :step="0.05"
        :label="t('cw_tint', 'Tint (Green/Magenta)')"
        :title="t('tt_cw_tint', 'Colour tint.')" />
    </div>

    <!-- Skin Protection Toggle — shared FilToggle, not a bespoke ON/OFF pill,
         so it matches the switches in UpscaleTileCalc and HiResFix. -->
    <FilToggle
      :model-value="preserveSkin ? 'ON' : 'OFF'"
      :label="t('cw_preserve_skin', '🛡️ Preserve Skin Tones')"
      :title="t('tt_cw_preserve_skin', 'Preserve skin tones.')"
      @update:model-value="(v: 'ON' | 'OFF') => (preserveSkin = v === 'ON')"
    />
  </div>
</template>

<style scoped>
.fil-color-wizard-root {
  width: 100%; box-sizing: border-box; min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap);
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-cw-presets-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--fil-border);
  border-radius: 8px;
}
.fil-cw-presets-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--fil-accent-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.fil-cw-presets-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}
.fil-cw-preset-btn {
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--fil-border);
  background: var(--fil-surface-1);
  color: var(--fil-text);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s ease;
}
.fil-cw-preset-btn:hover {
  background: var(--fil-surface-3);
  border-color: var(--fil-accent);
}
.fil-cw-preset-btn.warm:hover {
  border-color: #ffaa00;
  color: #ffaa00;
}
.fil-cw-preset-btn.cool:hover {
  border-color: #00f0ff;
  color: #00f0ff;
}
.fil-cw-preset-btn.skin:hover {
  border-color: #ff77aa;
  color: #ff77aa;
}
.fil-cw-preset-btn.contrast:hover {
  border-color: #ffaa00;
  color: #ffaa00;
}

.fil-cw-slider-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

</style>
