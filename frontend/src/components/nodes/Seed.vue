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
import { findFilWidget } from "@/nodes2/util";

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
    toast.warning("No last-run seed recorded yet");
    return;
  }
  seed.value = last;
  mode.value = "fixed";
}

function newFixed() {
  const n = Math.floor(Math.random() * 1_000_000_000) & 0x7fffffff;
  seed.value = n;
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
</script>

<template>
  <div class="fil-seed-root">
    <input
      v-model="display"
      type="text"
      class="fil-seed-display"
      :readonly="mode === 'random'"
      :title="mode === 'fixed' ? t('sd_locked', 'Locked seed') : t('sd_auto_random', 'Auto-random')"
      aria-label="Seed value"
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
 * `.fil-node-shell [class$="-root"]` (styles/brand.ts) stacks a 3rd/4th
 * nested border+shadow on top and reads as visual clutter at this size.
 * Override it to flat/transparent here only; every other node keeps the
 * shared shell untouched.
 * The `div` type selector (not just `.fil-seed-root`) is required: Vue's
 * scoped `[data-v-hash]` attribute gives this rule the same specificity
 * (0,2,0) as the global shell rule, and the global style tag is injected
 * into <head> AFTER the bundled component CSS, so on equal specificity it
 * would otherwise win by source order. `div.fil-seed-root[data-v-hash]`
 * is (0,2,1), which always wins deterministically. */
div.fil-seed-root {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--fil-node-gap);
  padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3);
  font-family: ui-sans-serif, system-ui, sans-serif;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  backdrop-filter: none;
}
.fil-seed-display {
  flex: 1; min-width: 0; box-sizing: border-box; height: 34px;
  background: var(--fil-glass-bg); border: 1px solid var(--fil-glass-border); border-radius: var(--fil-field-radius);
  padding: 6px 8px; color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 19px; text-align: center; outline: none; transition: border-color .08s;
}
.fil-seed-display:focus { border-color: var(--fil-accent); }
.fil-seed-display[readonly] { color: var(--fil-muted, #9ca8b5); font-style: italic; }
.fil-seed-actions { display: flex; gap: 5px; flex-shrink: 0; }
.fil-seed-actions :deep(.fil-w-btn) { padding: 0; width: 34px; height: 34px; font-size: 16px; }
</style>