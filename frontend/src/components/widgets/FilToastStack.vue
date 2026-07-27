<script setup lang="ts">
/**
 * Toast stack — bottom-right notification surface rendered by Vue from
 * the `toastStore`. Equivalent of the legacy `#fil-toast-stack` container.
 *
 * Pauses the auto-dismiss timer on hover and triggers a leave animation
 * via CSS on dismiss. Mounted once at extension setup() and appended to
 * `document.body`.
 */
import { computed, onBeforeUnmount, watch } from "vue";
import { storeToRefs } from "pinia";
import { useToastStore, type ToastItem } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();
const store = useToastStore();
const { items } = storeToRefs(store);
const timers = new Map<number, ReturnType<typeof setTimeout>>();
// Hovered toasts: held out of the scheduler so the watcher below does not
// hand a paused timer straight back when the next toast arrives.
const paused = new Set<number>();

const colorMap = {
  info: "var(--fil-muted)",
  success: "var(--fil-ok)",
  warning: "var(--fil-accent)",
  error: "var(--fil-danger)",
};

function schedule(item: ToastItem) {
  if (item.sticky || item.timeout <= 0) return;
  timers.set(
    item.id,
    setTimeout(() => store.dismiss(item.id), item.timeout),
  );
}

function pause(item: ToastItem) {
  paused.add(item.id);
  const t = timers.get(item.id);
  if (t) {
    clearTimeout(t);
    timers.delete(item.id);
  }
}

function resume(item: ToastItem) {
  paused.delete(item.id);
  if (!timers.has(item.id) && !item.sticky) schedule(item);
}

function dismiss(item: ToastItem) {
  store.dismiss(item.id);
}

const visible = computed(() => items.value);

// Timers follow the store, not the mount: the stack is mounted once at
// setup() while empty, so scheduling only `onMounted` left every toast
// pushed afterwards without a timer — i.e. non-sticky toasts never
// auto-dismissed. `immediate` covers items already queued before mount.
watch(
  items,
  (list) => {
    const live = new Set(list.map((it) => it.id));
    for (const id of [...timers.keys()]) {
      if (!live.has(id)) {
        clearTimeout(timers.get(id)!);
        timers.delete(id);
      }
    }
    for (const id of [...paused]) {
      if (!live.has(id)) paused.delete(id);
    }
    for (const it of list) {
      if (!timers.has(it.id) && !paused.has(it.id)) schedule(it);
    }
  },
  { immediate: true, deep: true },
);

onBeforeUnmount(() => {
  for (const t of timers.values()) clearTimeout(t);
  timers.clear();
  paused.clear();
});
</script>

<template>
  <div class="fil-toast-stack" role="status" aria-live="polite">
    <div
      v-for="item in visible"
      :key="item.id"
      class="fil-toast"
      :class="`fil-toast-${item.level}`"
      :style="{ '--toast-color': colorMap[item.level] }"
      @mouseenter="pause(item)"
      @mouseleave="resume(item)"
    >
      <span class="fil-toast-dot" aria-hidden="true" />
      <span class="fil-toast-text">{{ item.text }}</span>
      <button
        v-if="item.action"
        type="button"
        class="fil-toast-action"
        @click.stop="(e) => { item.action!.onClick(e); dismiss(item); }"
      >
        {{ item.action.label }}
      </button>
      <button type="button" class="fil-toast-close" :aria-label="t('toast_close', 'Close')" @click.stop="dismiss(item)">
        ×
      </button>
    </div>
  </div>
</template>

<style scoped>
.fil-toast-stack {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100001;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
  max-width: min(360px, 90vw);
}
.fil-toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background: var(--fil-panel);
  color: var(--fil-text);
  border: 1px solid var(--fil-panel-alt);
  border-left: 3px solid var(--toast-color, var(--fil-muted));
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.42);
  font: 12.5px/1.45 system-ui, sans-serif;
  animation: fil-toast-in 0.18s cubic-bezier(0.2, 0.7, 0.3, 1);
}
@keyframes fil-toast-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: none; }
}
.fil-toast-dot {
  flex: none;
  width: 8px;
  height: 8px;
  margin-top: 4px;
  border-radius: 50%;
  background: var(--toast-color, var(--fil-muted));
}
.fil-toast-text { flex: 1; min-width: 0; align-self: center; }
.fil-toast-action {
  flex: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  background: var(--fil-surface-2);
  color: inherit;
  border: none;
  font: inherit;
  transition: background 0.12s;
}
.fil-toast-action:hover { background: var(--fil-surface-3); }
.fil-toast-close {
  flex: none;
  align-self: flex-start;
  cursor: pointer;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: none;
  color: var(--fil-muted);
  opacity: 0.6;
  transition: opacity 0.12s;
  font-size: 16px;
  line-height: 18px;
}
.fil-toast-close:hover { opacity: 1; }
</style>