<script setup lang="ts">
/**
 * FiLSeed node body. State is supplied by `addFilDomWidget` as a reactive
 * `state` object; mutations propagate to ComfyUI serialization via
 * `getValue()` already wired in the host.
 */
import { computed, watch } from "vue";
import { FilButton } from "@/components/widgets";
import { toast } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget, randomSeed } from "@/nodes2/util";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// Local shallow shortcuts — read/write through the reactive container.
const mode = computed({
  get: () => (props.state.nodeState.mode as "random" | "fixed") ?? "random",
  set: (v) => { props.state.nodeState.mode = v; },
});
const seed = computed({
  get: () => Number(props.state.nodeState.seed ?? 0) || 0,
  // Write the native seed widget directly, not just nodeState — a fixed
  // seed set only via nodeState can fail to reach the queued prompt.
  set: (v) => {
    props.state.nodeState.seed = v;
    const w = props.state.node ? findFilWidget(props.state.node, "seed") : null;
    if (w) w.value = v;
  },
});

// Point core's seed control at the mode the panel wants: "fixed" pins the
// widget, "randomize" makes core draw a fresh seed into the hidden widget
// every queue — this is what actually fires on queue in this frontend
// version (the graphToPrompt hook does not).
watch(mode, (m) => {
  const node = props.state.node;
  const ctrl = node ? findFilWidget(node, "control_after_generate") : null;
  if (ctrl) ctrl.value = m === "fixed" ? "fixed" : "randomize";
}, { immediate: true });

// Restore from a loaded workflow: setState() (from ComfyUI setValue)
// replaces nodeState entirely; we mirror it back into our locals.
watch(
  () => props.state.nodeState,
  (s) => {
    if (typeof s.mode === "string") mode.value = s.mode as "random" | "fixed";
    if (typeof s.seed === "number") seed.value = Number(s.seed);
  },
  { deep: true },
);

function setRandom() {
  mode.value = "random";
}

function useLast() {
  // After a random queue the last value core drew lives on the native seed
  // widget; fall back to lastRunSeed for older saved state.
  const node = props.state.node;
  const w = node ? findFilWidget(node, "seed") : null;
  const last = w && Number.isFinite(Number(w.value)) ? Number(w.value) : props.state.lastRunSeed;
  if (last == null || !Number.isFinite(last)) {
    toast.warning(t("sd_no_last_seed", "No last-run seed recorded yet"));
    return;
  }
  seed.value = last;
  mode.value = "fixed";
}

function newFixed() {
  seed.value = randomSeed();
  mode.value = "fixed";
}

// Writable so a fixed seed can be typed directly into the field. Typing any
// digits switches the node to "fixed" and applies the value; in random mode the
// field is readonly (see :readonly in the template) so the setter never fires.
const display = computed({
  get: () => (mode.value === "fixed" ? `${seed.value}` : "random"),
  set: (v) => {
    const n = parseInt(String(v).replace(/[^0-9]/g, ""), 10);
    if (!Number.isNaN(n)) {
      seed.value = n;
      mode.value = "fixed";
    }
  },
});

/**
 * The readout shrinks to fit instead of clipping.
 *
 * 19px is deliberately large — the seed is the one number on this node — but
 * the field only gets ~92px at the 250px node minimum, which is 8 monospace
 * characters. Measured live: a 9-digit seed (756978276) needed 100px and lost
 * its last digit, and `useLast()` copies whatever ComfyUI drew, which for a
 * 0..2^64 widget is far longer than that. A silently truncated seed is the
 * worst kind of wrong here — it still looks like a valid number.
 *
 * Monospace advance is ~0.6em, so `19 * 8 / len` is the size at which `len`
 * characters still fit the same box. Floored at 11px: below that the digits
 * stop being readable at working zoom, and the `title` below carries the full
 * value for the rare seed that long.
 */
const BASE_FONT_PX = 19;
const FITS_AT_BASE = 8;
const displayFontPx = computed(() => {
  const len = display.value.length;
  if (len <= FITS_AT_BASE) return BASE_FONT_PX;
  return Math.max(11, Math.floor((BASE_FONT_PX * FITS_AT_BASE) / len));
});
</script>

<template>
  <div class="fil-seed-root fil-flat">
    <input
      v-model="display"
      type="text"
      class="fil-seed-display"
      :style="{ fontSize: displayFontPx + 'px' }"
      :readonly="mode === 'random'"
      :title="mode === 'fixed' ? `${t('sd_locked', 'Locked seed')}: ${display}` : t('sd_auto_random', 'Auto-random')"
      :aria-label="t('sd_aria_seed_value', 'Seed value')"
    />
    <div class="fil-seed-actions">
      <FilButton label="🔀" variant="standard" :title="t('sd_mode', 'Random generates a new seed each run.')" @click="setRandom" />
      <FilButton label="♻️" variant="standard" :title="t('sd_use_last', 'Reuse the seed from the last executed run.')" @click="useLast" />
      <FilButton label="🎲" variant="accent" :title="t('sd_new_fixed', 'Generate a new random fixed seed.')" @click="newFixed" />
    </div>
  </div>
</template>

<style scoped>
/* Seed is a single compact row (field + 3 icon buttons), each already
 * bordered on its own — the shared "glass card" surface from
 * `.fil-node-shell [class$="-root"]` (styles/brand.ts) stacks another
 * border+shadow around them and reads as a box drawn around a box.
 *
 * The opt-out is the `fil-flat` class on the root element, not a property
 * override here: this used to cancel the card with `background: transparent;
 * border: none; box-shadow: none` on a specificity-inflated
 * `div.fil-seed-root[data-v-hash]` selector (0,2,1), which beat the shared
 * rule (0,2,0) but lost to every themed copy of it
 * (`:root[data-fil-theme=…] .fil-node-shell [class$="-root"]`, 0,3,0) — so
 * the frame reappeared as soon as a theme was on, measured live under
 * `nft_vibe` as a violet glow plus a 16px backdrop blur. `fil-flat` is
 * excluded in the selectors themselves, so no theme can out-specify it. */
.fil-seed-root { width: 100%; box-sizing: border-box; min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--fil-node-gap);
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.fil-seed-display {
  flex: 1; min-width: 0; box-sizing: border-box; height: var(--fil-control-h);
  background: var(--fil-glass-bg); border: 1px solid var(--fil-glass-border); border-radius: var(--fil-field-radius);
  padding: 6px 8px; color: var(--fil-text);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  /* Size comes from `displayFontPx` inline — see its docstring. This stays as
   * the value a browser with the script disabled would land on. */
  font-size: 19px; text-align: center; outline: none; transition: border-color .08s;
}
.fil-seed-display:focus { border-color: var(--fil-accent); }
.fil-seed-display[readonly] { color: var(--fil-muted); font-style: italic; }
.fil-seed-actions { display: flex; gap: 5px; flex-shrink: 0; }
.fil-seed-actions :deep(.fil-w-btn) { padding: 0; width: var(--fil-control-h); height: var(--fil-control-h); font-size: 16px; }
</style>
