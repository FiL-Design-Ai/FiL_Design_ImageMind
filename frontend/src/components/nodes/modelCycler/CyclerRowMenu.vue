<script setup lang="ts">
/**
 * A row's own menu, on right-click.
 *
 * Rendered in flow inside the panel rather than floating over the page: a
 * popover above a node gets clipped by the canvas. `preventDefault` on the row
 * is what keeps LiteGraph's own canvas menu from opening on top of it, and it
 * closes on anything that is not a click on itself.
 */
import { FilIcon } from "@/components/widgets";

defineProps<{
  /** Panel-local offsets of the click that opened it. */
  x: number;
  y: number;
  /** Position in the queue, so the ends can grey out their move. */
  index: number;
  total: number;
  enabled: boolean;
}>();

const emit = defineEmits<{
  close: [];
  info: [];
  move: [delta: number];
  duplicate: [];
  "toggle-enabled": [];
  remove: [];
}>();

/** Every item does its thing and gets out of the way. */
function act(run: () => void) {
  run();
  emit("close");
}
</script>

<template>
  <div
    class="fil-row-menu-backdrop"
    @click="$emit('close')"
    @contextmenu.prevent="$emit('close')"
  >
    <div
      class="fil-row-menu"
      :style="{ top: `${y}px`, left: `${x}px` }"
      @click.stop
      @contextmenu.prevent.stop
    >
      <button class="fil-row-menu-item" @click="act(() => $emit('info'))">
        <FilIcon class="fil-row-menu-icon" name="info" :size="12" /> More info
      </button>
      <button
        class="fil-row-menu-item"
        :disabled="index === 0"
        @click="act(() => $emit('move', -1))"
      >
        <FilIcon class="fil-row-menu-icon" name="arrowUp" :size="12" /> Move up
      </button>
      <button
        class="fil-row-menu-item"
        :disabled="index >= total - 1"
        @click="act(() => $emit('move', 1))"
      >
        <FilIcon class="fil-row-menu-icon" name="arrowDown" :size="12" /> Move down
      </button>
      <button class="fil-row-menu-item" @click="act(() => $emit('duplicate'))">
        <FilIcon class="fil-row-menu-icon" name="copy" :size="12" /> Duplicate
      </button>
      <button class="fil-row-menu-item" @click="act(() => $emit('toggle-enabled'))">
        <FilIcon class="fil-row-menu-icon" name="power" :size="12" /> {{ enabled ? "Disable" : "Enable" }}
      </button>
      <button class="fil-row-menu-item danger" @click="act(() => $emit('remove'))">
        <FilIcon class="fil-row-menu-icon" name="close" :size="12" /> Remove
      </button>
    </div>
  </div>
</template>

<style scoped>
.fil-row-menu-backdrop {
  position: absolute;
  inset: 0;
  z-index: 20;
}

.fil-row-menu {
  position: absolute;
  min-width: 150px;
  padding: 4px;
  background: var(--fil-surface-2, #18181b);
  border: 1px solid color-mix(in srgb, var(--fil-border) 90%, transparent);
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.fil-row-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--fil-text);
  font-size: 11px;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
}

.fil-row-menu-item:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fil-accent, #a855f7) 22%, transparent);
}

.fil-row-menu-item:disabled {
  color: var(--fil-muted);
  cursor: default;
  opacity: 0.5;
}

.fil-row-menu-item.danger:hover:not(:disabled) {
  background: color-mix(in srgb, var(--fil-danger, #ef4444) 22%, transparent);
  color: var(--fil-danger, #ef4444);
}

.fil-row-menu-icon {
  width: 12px;
  text-align: center;
  color: var(--fil-muted);
}
</style>
