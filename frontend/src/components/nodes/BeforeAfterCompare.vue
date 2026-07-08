<script setup lang="ts">
/**
 * FiLBeforeAfterCompare — visual before/after viewer (canvas-drawn: before,
 * after, wipe, side-by-side, overlay, difference) plus the swap/resize
 * settings (collapsed by default, the viewer is the primary content).
 *
 * Image data arrives post-execution via `compare.ts`'s `onExecuted` hook,
 * which writes `{a, b}` image descriptors into `state.ui.compare_images` —
 * the backend (`node_compare.py`) always emits `a_images`/`b_images`
 * (ComfyUI's standard preview-image shape), never raw pixels.
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import FilComboBox, { type FilComboOption } from "@/components/widgets/FilComboBox.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import FilSlider from "@/components/widgets/FilSlider.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import FilSection from "@/components/widgets/FilSection.vue";
import { imageUrl, providerApi, type ImageDescriptor } from "@/api/client";
import { clamp01, type CompareMode } from "@/nodes2/compareEngine";
import { toast } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

interface CompareImages {
  a?: ImageDescriptor[];
  b?: ImageDescriptor[];
}

// ---- view mode / position / opacity — persisted in state.ui ------------

const mode = computed<CompareMode>({
  get: () => (props.state.ui.compare_mode as CompareMode) ?? "wipe",
  set: (v) => { props.state.ui.compare_mode = v; scheduleDraw(); },
});
const position = computed<number>({
  get: () => Number(props.state.ui.compare_position ?? 0.5),
  set: (v) => { props.state.ui.compare_position = clamp01(v); scheduleDraw(); },
});
const opacity = computed<number>({
  get: () => Number(props.state.ui.compare_opacity ?? 0.5),
  set: (v) => { props.state.ui.compare_opacity = clamp01(v); scheduleDraw(); },
});
const settingsCollapsed = computed<boolean>({
  get: () => props.state.ui.settings_collapsed !== false,
  set: (v) => { props.state.ui.settings_collapsed = v; },
});

const modeOptions = computed<FilComboOption[]>(() => [
  { value: "before", label: t("cmp_mode_before", "◀ Before") },
  { value: "after", label: t("cmp_mode_after", "After ▶") },
  { value: "wipe", label: t("cmp_mode_wipe", "↔ Wipe") },
  { value: "side-by-side", label: t("cmp_mode_side", "▥ Side-by-side") },
  { value: "overlay", label: t("cmp_mode_overlay", "◐ Overlay") },
  { value: "difference", label: t("cmp_mode_difference", "◈ Difference") },
]);

// ---- existing backend-facing settings (swap / resize / max resolution) --

const RESIZE_MODES = ["Off", "Preview only", "Preview + output"] as const;
const RESIZE_MODE_LABELS: Record<string, string> = {
  "Off": "🚫 Off",
  "Preview only": "👁️ Preview only",
  "Preview + output": "👁️➡️ Preview + output",
};

const swap = computed<"ON" | "OFF">(() => (props.state.nodeState.swap ? "ON" : "OFF"));
function setSwap(v: string) { props.state.nodeState.swap = v === "ON"; }

const resizeMode = computed(() => String(props.state.nodeState.resize_mode ?? "Off"));
function setResizeMode(v: string) { props.state.nodeState.resize_mode = v; }

const maxResolution = computed(() => Number(props.state.nodeState.max_resolution ?? 4096) || 4096);
function setMaxResolution(v: number) { props.state.nodeState.max_resolution = v; }

const showMaxResolution = computed(() => resizeMode.value !== "Off");

// ---- image loading --------------------------------------------------

const compareImages = computed<CompareImages>(() => (props.state.ui.compare_images as CompareImages) ?? {});
const imgA = ref<HTMLImageElement | null>(null);
const imgB = ref<HTMLImageElement | null>(null);
const loadError = ref(false);
const hasImages = computed(() => !!imgA.value || !!imgB.value);

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image load failed"));
    img.src = url;
  });
}

watch(
  () => props.state.ui.compare_images,
  async (val) => {
    const images = (val as CompareImages) ?? {};
    const aDesc = images.a?.[0];
    const bDesc = images.b?.[0];
    loadError.value = false;
    imgA.value = null;
    imgB.value = null;
    try {
      if (aDesc) imgA.value = await loadImage(imageUrl(aDesc));
      if (bDesc) imgB.value = await loadImage(imageUrl(bDesc));
    } catch {
      loadError.value = true;
    }
    scheduleDraw();
  },
  { deep: true, immediate: true },
);

watch([mode, position, opacity], () => scheduleDraw());

// ---- canvas rendering --------------------------------------------------

const wrapRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let rafId = 0;
let resizeObserver: ResizeObserver | null = null;

function containRect(cw: number, ch: number, iw: number, ih: number) {
  if (!iw || !ih) return { x: 0, y: 0, w: cw, h: ch };
  const containerRatio = cw / ch;
  const imgRatio = iw / ih;
  let w: number, h: number;
  if (imgRatio > containerRatio) { w = cw; h = cw / imgRatio; } else { h = ch; w = ch * imgRatio; }
  return { x: (cw - w) / 2, y: (ch - h) / 2, w, h };
}

function scheduleDraw() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => { rafId = 0; draw(); });
}

function draw() {
  const canvas = canvasRef.value;
  const wrap = wrapRef.value;
  if (!canvas || !wrap) return;
  const dpr = window.devicePixelRatio || 1;
  const cssW = wrap.clientWidth;
  const cssH = wrap.clientHeight;
  if (cssW <= 0 || cssH <= 0) return;
  const targetW = Math.round(cssW * dpr);
  const targetH = Math.round(cssH * dpr);
  if (canvas.width !== targetW || canvas.height !== targetH) {
    canvas.width = targetW;
    canvas.height = targetH;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);

  const a = imgA.value;
  const b = imgB.value;
  if (!a && !b) return;

  if (mode.value === "side-by-side") {
    const halfW = cssW / 2;
    if (a) {
      const r = containRect(halfW, cssH, a.naturalWidth, a.naturalHeight);
      ctx.drawImage(a, r.x, r.y, r.w, r.h);
    }
    if (b) {
      const r = containRect(halfW, cssH, b.naturalWidth, b.naturalHeight);
      ctx.drawImage(b, halfW + r.x, r.y, r.w, r.h);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.beginPath();
    ctx.moveTo(halfW, 0);
    ctx.lineTo(halfW, cssH);
    ctx.stroke();
    return;
  }

  const reference = a ?? (b as HTMLImageElement);
  const rect = containRect(cssW, cssH, reference.naturalWidth, reference.naturalHeight);

  if (mode.value === "before") {
    if (a) ctx.drawImage(a, rect.x, rect.y, rect.w, rect.h);
    return;
  }
  if (mode.value === "after") {
    if (b) ctx.drawImage(b, rect.x, rect.y, rect.w, rect.h);
    return;
  }
  if (mode.value === "overlay") {
    if (a) ctx.drawImage(a, rect.x, rect.y, rect.w, rect.h);
    if (b) {
      ctx.save();
      ctx.globalAlpha = opacity.value;
      ctx.drawImage(b, rect.x, rect.y, rect.w, rect.h);
      ctx.restore();
    }
    return;
  }
  if (mode.value === "difference") {
    if (a) ctx.drawImage(a, rect.x, rect.y, rect.w, rect.h);
    if (b) {
      ctx.save();
      ctx.globalCompositeOperation = "difference";
      ctx.drawImage(b, rect.x, rect.y, rect.w, rect.h);
      ctx.restore();
    }
    return;
  }

  // wipe (default)
  if (a) ctx.drawImage(a, rect.x, rect.y, rect.w, rect.h);
  if (b) {
    const splitX = rect.x + rect.w * position.value;
    ctx.save();
    ctx.beginPath();
    ctx.rect(splitX, rect.y, rect.x + rect.w - splitX, rect.h);
    ctx.clip();
    ctx.drawImage(b, rect.x, rect.y, rect.w, rect.h);
    ctx.restore();
    const accent = getComputedStyle(wrap).getPropertyValue("--fil-accent").trim() || "#e8724c";
    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.shadowColor = accent;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.moveTo(splitX, rect.y);
    ctx.lineTo(splitX, rect.y + rect.h);
    ctx.stroke();
    ctx.restore();
  }
}

function updatePositionFromPointer(e: PointerEvent) {
  const wrap = wrapRef.value;
  if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  position.value = clamp01((e.clientX - rect.left) / rect.width);
}

function onPointerDown(e: PointerEvent) {
  if (mode.value !== "wipe") return;
  updatePositionFromPointer(e);
  const move = (ev: PointerEvent) => updatePositionFromPointer(ev);
  const up = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => scheduleDraw());
  if (wrapRef.value) resizeObserver.observe(wrapRef.value);
  scheduleDraw();
});
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  if (rafId) cancelAnimationFrame(rafId);
});

// ---- save to output ----------------------------------------------------

async function saveSide(side: "a" | "b") {
  const desc = side === "a" ? compareImages.value.a?.[0] : compareImages.value.b?.[0];
  if (!desc) {
    toast.warning(t("cmp_no_preview", "Run the node to see a preview"));
    return;
  }
  try {
    const res = await providerApi.saveCompareImage(desc);
    toast.success(`${t("cmp_saved", "Saved to output")}: ${res.image.filename}`);
  } catch (err) {
    toast.warning(err instanceof Error ? err.message : "Save failed");
  }
}
</script>

<template>
  <div class="fil-cmp-root">
    <FilComboBox
      :options="modeOptions"
      :model-value="mode"
      :label="t('lbl_mode', '⚙️ Mode')"
      :title="t('cmp_view_mode', 'How to compare the two images.')"
      @update:model-value="(v) => (mode = v as CompareMode)"
    />

    <div ref="wrapRef" class="fil-cmp-canvas-wrap">
      <canvas
        ref="canvasRef"
        class="fil-cmp-canvas"
        :class="{ 'is-wipe': mode === 'wipe' }"
        @pointerdown="onPointerDown"
      />
      <div v-if="!hasImages" class="fil-cmp-placeholder">
        {{ loadError ? t('cmp_load_error', 'Could not load preview images') : t('cmp_no_preview', 'Run the node to see a preview') }}
      </div>
    </div>

    <FilSlider
      v-if="mode === 'wipe'"
      :model-value="position"
      :min="0" :max="1" :step="0.01"
      :label="t('cmp_position', 'Position')"
      @update:model-value="(v) => (position = v)"
    />
    <FilSlider
      v-if="mode === 'overlay'"
      :model-value="opacity"
      :min="0" :max="1" :step="0.01"
      :label="t('cmp_opacity', 'Opacity')"
      @update:model-value="(v) => (opacity = v)"
    />

    <div class="fil-cmp-save-row">
      <FilButton variant="sm" :label="t('cmp_save_before', '💾 Save before')" :disabled="!compareImages.a?.length" @click="saveSide('a')" />
      <FilButton variant="sm" :label="t('cmp_save_after', '💾 Save after')" :disabled="!compareImages.b?.length" @click="saveSide('b')" />
    </div>

    <FilSection :title="t('cmp_settings', 'Settings')" v-model="settingsCollapsed" />
    <div v-if="!settingsCollapsed" class="fil-cmp-settings">
      <FilSegmented :options="['ON', 'OFF']"
        :option-labels="{ ON: t('cmp_swap_on_label', '🔄 Swapped'), OFF: t('cmp_swap_off_label', '↔️ Normal') }"
        :model-value="swap" :label="t('lbl_swap', '🔁 Swap before/after')"
        :title="t('cmp_swap', 'Swap which image is shown as before/after.')" @update:model-value="setSwap" />
      <FilSegmented :options="[...RESIZE_MODES]" :option-labels="RESIZE_MODE_LABELS" :model-value="resizeMode" :label="t('lbl_resize_mode', '🖥️ Resize mode')"
        :title="t('cmp_resize_mode', 'Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output.')"
        @update:model-value="setResizeMode" />
      <FilSlider v-if="showMaxResolution" :model-value="maxResolution" :min="256" :max="8192" :step="64"
        :label="t('lbl_max_resolution', '🖼️ Max resolution')" :title="t('cmp_max_resolution', 'Maximum width or height used when resizing is enabled.')"
        @update:model-value="setMaxResolution" />
    </div>
  </div>
</template>

<style scoped>
.fil-cmp-root { display: flex; flex-direction: column; gap: 8px; padding: 8px;
  background: var(--fil-panel, #171b22); border-radius: var(--fil-radius, 8px);
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-cmp-canvas-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  background:
    linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.04) 75%) 0 0/16px 16px,
    linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.04) 75%) 8px 8px/16px 16px,
    #0d0f13;
}
.fil-cmp-canvas { display: block; width: 100%; height: 100%; touch-action: none; }
.fil-cmp-canvas.is-wipe { cursor: ew-resize; }
.fil-cmp-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 12px;
  color: var(--fil-muted, rgba(255, 255, 255, 0.5));
  font-size: 12px;
  pointer-events: none;
}
.fil-cmp-save-row { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.fil-cmp-settings { display: flex; flex-direction: column; gap: 8px; }
</style>
