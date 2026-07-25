<script setup lang="ts">
/**
 * FiLColorWizard - Cyberpunk HUD panel for automatic color correction & quick presets.
 */
import { computed } from "vue";
import { FilSection, FilSegmented, FilSlider } from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { NODE_CONTRACTS } from "@/api/contracts";

const props = defineProps<{ state: FilNodeState }>();

// Methods come from the generated contract (backed by METHODS in
// common/color_correction.py), never from literals here: "LAB Contrast" is not a
// key METHODS knows — METHODS.get(method, METHODS["Full Auto"]) silently fell
// back to Full Auto, so picking it quietly ran a different algorithm, and the
// value is not even legal for the COMBO input.
const cwContract = NODE_CONTRACTS["FiLColorWizard"];
const methodSpec =
  cwContract?.inputs.required.find((i) => i.name === "method") ||
  cwContract?.inputs.optional.find((i) => i.name === "method");
const methodOptions = computed<string[]>(() =>
  methodSpec?.values?.length ? methodSpec.values : ["Full Auto"],
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
      <div class="fil-cw-presets-title">⚡ Quick Presets</div>
      <div class="fil-cw-presets-grid">
        <button type="button" class="fil-cw-preset-btn warm" title="Warm Sunny Tone" @click="applyPreset('warm')">
          ☀️ Warm Sun
        </button>
        <button type="button" class="fil-cw-preset-btn cool" title="Cool Sci-Fi Cyberpunk Tone" @click="applyPreset('cool')">
          🧊 Cool Sci-Fi
        </button>
        <button type="button" class="fil-cw-preset-btn skin" title="Natural Skin Preservation" @click="applyPreset('skin')">
          👤 Skin Protect
        </button>
        <button type="button" class="fil-cw-preset-btn contrast" title="Punchy LAB Contrast" @click="applyPreset('contrast')">
          ⚡ Contrast
        </button>
      </div>
    </div>

    <!-- Algorithm Method -->
    <FilSection title="⚙️ Method" />
    <FilSegmented
      v-model="method"
      :options="methodOptions"
    />

    <!-- Adjustment Sliders -->
    <FilSection title="🎛️ Adjustments" />
    <div class="fil-cw-slider-group">
      <FilSlider v-model="strength" :min="0" :max="1" :step="0.05" label="Correction Strength" />
      <FilSlider v-model="temperature" :min="-1" :max="1" :step="0.05" label="Temperature (Warm/Cool)" />
      <FilSlider v-model="tint" :min="-1" :max="1" :step="0.05" label="Tint (Green/Magenta)" />
    </div>

    <!-- Skin Protection Toggle -->
    <div class="fil-cw-toggle-row">
      <span class="fil-cw-toggle-label">🛡️ Preserve Skin Tones</span>
      <button
        type="button"
        class="fil-cw-toggle-btn"
        :class="{ active: preserveSkin }"
        @click="preserveSkin = !preserveSkin"
      >
        {{ preserveSkin ? 'ON' : 'OFF' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.fil-color-wizard-root {
  width: 100%; box-sizing: border-box; min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  color: var(--fil-text, #e8edf3);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-cw-presets-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}
.fil-cw-presets-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--fil-accent, #00f0ff);
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: var(--fil-text, #ddd);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s ease;
}
.fil-cw-preset-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--fil-accent, #00f0ff);
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

.fil-cw-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.fil-cw-toggle-label {
  font-size: 12px;
  font-weight: 600;
}
.fil-cw-toggle-btn {
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: var(--fil-muted, #aaa);
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-cw-toggle-btn.active {
  background: var(--fil-accent, #00f0ff);
  border-color: var(--fil-accent, #00f0ff);
  color: #12151a;
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
}
</style>
