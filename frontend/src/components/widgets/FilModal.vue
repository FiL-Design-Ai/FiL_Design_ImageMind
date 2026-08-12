<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import FilIcon from "./FilIcon.vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    width?: string;
    closeOnEsc?: boolean;
    closeOnBackdrop?: boolean;
  }>(),
  { closeOnEsc: true, closeOnBackdrop: true, width: "520px" },
);

const open = defineModel<boolean>("open", { default: false });

const emit = defineEmits<{
  close: [];
}>();

const modalRef = ref<HTMLElement | null>(null);
const previousFocus = ref<HTMLElement | null>(null);

function close() {
  open.value = false;
  emit("close");
}

function onBackdropClick(e: MouseEvent | PointerEvent) {
  if (!props.closeOnBackdrop) return;
  if (e.target === e.currentTarget) close();
}

function onKeydown(e: KeyboardEvent) {
  if (props.closeOnEsc && e.key === "Escape") {
    close();
  }
  if (e.key === "Tab") trapTab(e);
}

function trapTab(e: KeyboardEvent) {
  if (!modalRef.value) return;
  const focusable = getFocusable(modalRef.value);
  if (!focusable.length) {
    e.preventDefault();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function getFocusable(el: HTMLElement): HTMLElement[] {
  return Array.from(
    el.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((f) => !(f as HTMLButtonElement).disabled && f.offsetParent !== null);
}

watch(
  open,
  (isOpen) => {
    if (isOpen) {
      previousFocus.value = document.activeElement as HTMLElement;
      nextTick(() => {
        const focusable = modalRef.value ? getFocusable(modalRef.value) : [];
        (focusable[0] || modalRef.value)?.focus();
      });
    } else {
      previousFocus.value?.focus();
      previousFocus.value = null;
    }
  },
);

onMounted(() => {
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fil-modal">
      <div
        v-if="open"
        ref="modalRef"
        class="fil-modal-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'Dialog'"
        @pointerdown="onBackdropClick"
        @click="onBackdropClick"
      >
        <div class="fil-modal-panel" :style="{ maxWidth: width }" @pointerdown.stop @click.stop>
          <div class="fil-modal-header">
            <span class="fil-modal-title">{{ title }}</span>
            <button class="fil-modal-close" title="Close" @click="close">
              <FilIcon name="close" :size="14" />
            </button>
          </div>
          <div class="fil-modal-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fil-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
}
.fil-modal-panel {
  width: 90%;
  max-height: 80vh;
  background: var(--fil-panel);
  border: 1px solid var(--fil-border);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.fil-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--fil-border);
}
.fil-modal-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--fil-text);
}
.fil-modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--fil-muted);
  cursor: pointer;
  transition: background 0.08s, color 0.08s;
}
.fil-modal-close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--fil-text);
}
.fil-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

/* Transitions */
.fil-modal-enter-active,
.fil-modal-leave-active {
  transition: opacity 0.15s ease;
}
.fil-modal-enter-from,
.fil-modal-leave-to {
  opacity: 0;
}
.fil-modal-enter-active .fil-modal-panel,
.fil-modal-leave-active .fil-modal-panel {
  transition: transform 0.15s ease;
}
.fil-modal-enter-from .fil-modal-panel {
  transform: scale(0.95) translateY(8px);
}
.fil-modal-leave-to .fil-modal-panel {
  transform: scale(0.95) translateY(8px);
}
</style>
