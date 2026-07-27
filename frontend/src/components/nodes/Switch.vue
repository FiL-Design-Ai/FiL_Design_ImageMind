<script setup lang="ts">
/**
 * FiLSignalSwitch Vue panel — one big button carrying the `enable` state.
 *
 * ON tints with `--fil-ok`, OFF with `--fil-danger`, so the button follows
 * whichever theme is active instead of the fixed neon palette it shipped with.
 */
import { computed, watch } from "vue";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";

const props = defineProps<{ state: FilNodeState }>();

const enable = computed({
  get: () => Boolean(props.state.nodeState.enable ?? true),
  set: (val: boolean) => {
    props.state.nodeState.enable = val;
    const w = props.state.node ? findFilWidget(props.state.node, "enable") : null;
    if (w) w.value = val;
  },
});

function toggle() {
  enable.value = !enable.value;
}

watch(
  () => props.state.nodeState.enable,
  (val) => {
    if (val !== undefined) {
      const boolVal = Boolean(val);
      if (enable.value !== boolVal) {
        enable.value = boolVal;
      }
    }
  },
);
</script>

<template>
  <div class="fil-switch-panel">
    <button
      type="button"
      class="fil-switch-btn"
      :class="{ 'is-on': enable, 'is-off': !enable }"
      @click="toggle"
    >
      <span class="fil-switch-text">{{ enable ? "ON" : "OFF" }}</span>
    </button>
  </div>
</template>

<style scoped>
.fil-switch-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  width: 100%;
  box-sizing: border-box;
}

.fil-switch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: var(--fil-control-h-lg);
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: var(--fil-field-radius);
  background: var(--fil-surface-2);
  /* The label is `--fil-text`, never the state color. Measured across the seven
   * palettes, `--fil-danger` on its own tint runs 1.96–4.04:1 and `--fil-ok`
   * drops to 2.63:1 on the light theme — both under the 4.5:1 AA floor. On the
   * same tint `--fil-text` is 7.7–10.4:1 everywhere. State is carried by the
   * fill, the border and the word itself, which already reads ON or OFF. */
  color: var(--fil-text);
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, box-shadow 0.12s;
  outline: none;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.fil-switch-btn:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 2px;
}

/* Was a hardcoded emerald→sky gradient with sky-500 text; the palette had
 * nothing to do with the active theme and `--fil-ok` already means "this is
 * live". Same for the red below and `--fil-danger`. The glow is a single static
 * box-shadow — per styles/brand.ts, per-theme flourishes belong in
 * THEME_EFFECTS, and an animated one costs a repaint per frame per node. */
.fil-switch-btn.is-on {
  background: color-mix(in srgb, var(--fil-ok) 18%, transparent);
  border-color: color-mix(in srgb, var(--fil-ok) 65%, transparent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25),
    0 0 10px color-mix(in srgb, var(--fil-ok) 22%, transparent);
}

.fil-switch-btn.is-on:hover {
  background: color-mix(in srgb, var(--fil-ok) 30%, transparent);
  border-color: var(--fil-ok);
}

.fil-switch-btn.is-off {
  background: color-mix(in srgb, var(--fil-danger) 14%, transparent);
  border-color: color-mix(in srgb, var(--fil-danger) 45%, transparent);
}

.fil-switch-btn.is-off:hover {
  background: color-mix(in srgb, var(--fil-danger) 26%, transparent);
  border-color: var(--fil-danger);
}

.fil-switch-text {
  text-transform: uppercase;
}
</style>
