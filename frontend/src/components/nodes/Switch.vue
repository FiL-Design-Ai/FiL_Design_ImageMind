<script setup lang="ts">
/**
 * FiLSignalSwitch Vue panel.
 * Controls the `enable` toggle state with a sleek Cyberpunk Neon button.
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
  height: 36px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.fil-switch-btn.is-on {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%);
  border: 1px solid rgba(56, 189, 248, 0.7);
  color: #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.3), inset 0 0 6px rgba(56, 189, 248, 0.2);
}

.fil-switch-btn.is-on:hover {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(56, 189, 248, 0.4) 100%);
  border-color: #38bdf8;
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.3);
}

.fil-switch-btn.is-off {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(30, 41, 59, 0.6) 100%);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #f87171;
  box-shadow: 0 0 6px rgba(239, 68, 68, 0.15);
}

.fil-switch-btn.is-off:hover {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(30, 41, 59, 0.8) 100%);
  border-color: #f87171;
  box-shadow: 0 0 12px rgba(239, 68, 68, 0.3);
}

.fil-switch-icon {
  font-size: 14px;
}

.fil-switch-text {
  text-transform: uppercase;
}
</style>
