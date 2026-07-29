<script setup lang="ts">
/**
 * Color picker: HSV square + hue strip + hex input, plus a quick-pick
 * preset row. Selection is emitted live while dragging — caller is
 * responsible for persistence via `colorStore` / node properties.
 */
import { computed, ref, watch } from "vue";

const PRESETS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6",
  "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#78716c",
];

const props = defineProps<{
  presets?: string[];
}>();

const modelValue = defineModel<string>({ default: "#78716c" });

const colors = computed(() => props.presets ?? PRESETS);

function select(color: string) {
  modelValue.value = color;
}

// ---- hex <-> hsv ----------------------------------------------------

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  const to2 = (v: number) => Math.round(clamp01(v / 255) * 255).toString(16).padStart(2, "0");
  return `#${to2(r)}${to2(g)}${to2(b)}`;
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return [h, s, max];
}

function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  // No initializer: the chain below ends in `else`, so every path assigns and
  // a starting [0,0,0] was dead (eslint 10's no-useless-assignment spots it).
  let r: number, g: number, b: number;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
}

// ---- reactive hsv state, kept in sync with modelValue ----------------

const hue = ref(0);
const sat = ref(0);
const val = ref(0);
const hexInput = ref(modelValue.value);

function syncFromHex(hex: string) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const [h, s, v] = rgbToHsv(...rgb);
  hue.value = h;
  sat.value = s;
  val.value = v;
  hexInput.value = rgbToHex(...rgb);
}

watch(modelValue, (v) => syncFromHex(v), { immediate: true });

const currentHex = computed(() => rgbToHex(...hsvToRgb(hue.value, sat.value, val.value)));

function commitHsv() {
  modelValue.value = currentHex.value;
  hexInput.value = currentHex.value;
}

function commitHexInput() {
  const rgb = hexToRgb(hexInput.value);
  if (!rgb) {
    hexInput.value = currentHex.value;
    return;
  }
  const [h, s, v] = rgbToHsv(...rgb);
  hue.value = h;
  sat.value = s;
  val.value = v;
  modelValue.value = rgbToHex(...rgb);
}

// ---- SV square + hue strip drag handling ------------------------------

const svRef = ref<HTMLDivElement | null>(null);
const hueRef = ref<HTMLDivElement | null>(null);

function updateSvFromEvent(e: PointerEvent) {
  const el = svRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  sat.value = clamp01((e.clientX - rect.left) / rect.width);
  val.value = clamp01(1 - (e.clientY - rect.top) / rect.height);
  commitHsv();
}

function updateHueFromEvent(e: PointerEvent) {
  const el = hueRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  hue.value = clamp01((e.clientX - rect.left) / rect.width) * 360;
  commitHsv();
}

function dragSv(e: PointerEvent) {
  e.preventDefault();
  updateSvFromEvent(e);
  const move = (ev: PointerEvent) => updateSvFromEvent(ev);
  const up = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

function dragHue(e: PointerEvent) {
  e.preventDefault();
  updateHueFromEvent(e);
  const move = (ev: PointerEvent) => updateHueFromEvent(ev);
  const up = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

const svBackground = computed(() => `hsl(${hue.value}, 100%, 50%)`);
const svThumbStyle = computed(() => ({
  left: `${sat.value * 100}%`,
  top: `${(1 - val.value) * 100}%`,
}));
const hueThumbStyle = computed(() => ({ left: `${(hue.value / 360) * 100}%` }));
</script>

<template>
  <div class="fil-color-picker" role="group" aria-label="Color picker">
    <div ref="svRef" class="fil-cp-sv" :style="{ background: svBackground }" @pointerdown="dragSv">
      <div class="fil-cp-sv-white"></div>
      <div class="fil-cp-sv-black"></div>
      <div class="fil-cp-sv-thumb" :style="svThumbStyle"></div>
    </div>
    <div ref="hueRef" class="fil-cp-hue" @pointerdown="dragHue">
      <div class="fil-cp-hue-thumb" :style="hueThumbStyle"></div>
    </div>
    <div class="fil-cp-hex-row">
      <span class="fil-cp-swatch" :style="{ background: currentHex }"></span>
      <input
        v-model="hexInput"
        class="fil-cp-hex-input"
        type="text"
        spellcheck="false"
        aria-label="Hex color"
        @keydown.enter="commitHexInput"
        @blur="commitHexInput"
      />
    </div>
    <div class="fil-cp-presets" role="listbox" aria-label="Preset colors">
      <button
        v-for="color in colors"
        :key="color"
        class="fil-color-swatch"
        :class="{ 'is-active': modelValue === color }"
        :style="{ '--swatch': color }"
        :aria-selected="modelValue === color"
        :aria-label="color"
        :title="color"
        @click="select(color)"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-color-picker {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: 176px;
  box-sizing: border-box;
}
.fil-cp-sv {
  position: relative;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  cursor: crosshair;
  touch-action: none;
}
.fil-cp-sv-white {
  position: absolute; inset: 0;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  border-radius: 4px;
}
.fil-cp-sv-black {
  position: absolute; inset: 0;
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  border-radius: 4px;
}
.fil-cp-sv-thumb {
  position: absolute;
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.fil-cp-hue {
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  cursor: pointer;
  touch-action: none;
}
.fil-cp-hue-thumb {
  position: absolute;
  top: 50%;
  width: 12px; height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.fil-cp-hex-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.fil-cp-swatch {
  width: 22px; height: 22px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  flex-shrink: 0;
}
.fil-cp-hex-input {
  flex: 1;
  min-width: 0;
  height: 22px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.25);
  color: #f2f2f2;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 12px;
  padding: 0 6px;
  outline: none;
}
.fil-cp-hex-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
}
.fil-cp-presets {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.fil-color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 2px solid transparent;
  background: var(--swatch);
  cursor: pointer;
  transition: border-color 0.08s, transform 0.08s;
  outline: none;
  box-sizing: border-box;
}
.fil-color-swatch:hover {
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.15);
}
.fil-color-swatch.is-active {
  border-color: #fff;
  box-shadow: 0 0 0 1px var(--swatch);
}
</style>
