<script setup lang="ts">
/**
 * Custom dropdown replacing a native `<select>` when options need an icon
 * (provider logos) and/or a badge (vision-capable models) — native
 * `<option>` elements cannot render anything but plain text, so a
 * floating panel (Teleport'd to `<body>`, positioned from the trigger's
 * `getBoundingClientRect()`) stands in for the browser's own popup.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import type { IconName } from "@/composables/icons";
import { ROUTE_PREFIX } from "@/constants/brand";

export interface FilComboOption {
  value: string;
  label?: string;
  icon?: IconName;
  badge?: string;
}

const props = withDefaults(
  defineProps<{
    options: FilComboOption[];
    searchable?: boolean;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    title?: string;
    previewMode?: string;
    autoOpen?: boolean;
  }>(),
  { searchable: false, placeholder: "Search…" },
);

const modelValue = defineModel<string>({ required: true });

const open = ref(false);
const query = ref("");
const activeIndex = ref(0);
const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const searchRef = ref<HTMLInputElement | null>(null);
const panelStyle = ref<Record<string, string>>({});

const hoveredOption = ref<string | null>(null);
const hoverPreviewFailed = ref(false);
const hoverPreviewStyle = ref<Record<string, string>>({});

function onOptionMouseEnter(o: FilComboOption, idx: number, e: MouseEvent) {
  activeIndex.value = idx;
  if (!props.previewMode || !o.value) {
    hoveredOption.value = null;
    return;
  }
  if (hoveredOption.value !== o.value) {
    hoveredOption.value = o.value;
    hoverPreviewFailed.value = false;
  }
  const el = e.currentTarget as HTMLElement | null;
  if (el) {
    const rect = el.getBoundingClientRect();
    const viewportW = window.innerWidth;
    const previewW = 160;
    const openLeft = rect.right + previewW + 16 > viewportW;
    hoverPreviewStyle.value = {
      top: `${Math.max(10, rect.top)}px`,
      ...(openLeft
        ? { right: `${viewportW - rect.left + 8}px` }
        : { left: `${rect.right + 8}px` }),
    };
  }
}

function onOptionMouseLeave() {
  hoveredOption.value = null;
}

const selected = computed(() => props.options.find((o) => o.value === modelValue.value));

const filtered = computed(() => {
  if (!props.searchable || !query.value.trim()) return props.options;
  const q = query.value.trim().toLowerCase();
  return props.options.filter((o) => (o.label ?? o.value).toLowerCase().includes(q));
});

function optionLabel(o: FilComboOption): string {
  return o.label ?? o.value;
}

function computePosition() {
  const trigger = triggerRef.value;
  if (!trigger) return;
  const rect = trigger.getBoundingClientRect();
  const viewportH = window.innerHeight;
  const viewportW = window.innerWidth;
  const maxPanelHeight = 260;
  const spaceBelow = viewportH - rect.bottom;
  const openUpward = spaceBelow < maxPanelHeight && rect.top > spaceBelow;

  const panelWidth = Math.max(rect.width, 380);
  let left = rect.left;
  if (left + panelWidth > viewportW - 12) {
    left = Math.max(12, viewportW - panelWidth - 12);
  }

  panelStyle.value = {
    left: `${left}px`,
    width: `${panelWidth}px`,
    minWidth: "320px",
    maxWidth: "calc(100vw - 24px)",
    ...(openUpward
      ? { bottom: `${viewportH - rect.top + 4}px` }
      : { top: `${rect.bottom + 4}px` }),
  };
}

function onWindowChange(e: Event) {
  // Close dropdown only if scroll/resize happened outside the panel.
  // e.target can be Document (not Element) for some scroll events bubbling
  // to the document — guard with instanceof before calling .contains().
  const target = e.target;
  if (target instanceof Element && panelRef.value?.contains(target)) return;
  close();
}

function openPanel() {
  if (props.disabled) return;
  open.value = true;
  query.value = "";
  activeIndex.value = Math.max(
    0,
    filtered.value.findIndex((o) => o.value === modelValue.value),
  );
  nextTick(() => {
    computePosition();
    if (props.searchable) searchRef.value?.focus();
    // Registered after the panel has actually rendered (Teleport target
    // exists) so panelRef is never null while these listeners are live.
    window.addEventListener("resize", onWindowChange as EventListener);
    window.addEventListener("scroll", onWindowChange as EventListener, true);
    document.addEventListener("mousedown", onDocMouseDown, true);
    window.addEventListener("pointerdown", onDocPointerDown, true);
  });
}

const emit = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  if (!open.value) return;
  open.value = false;
  emit("close");
  window.removeEventListener("resize", onWindowChange);
  window.removeEventListener("scroll", onWindowChange, true);
  document.removeEventListener("mousedown", onDocMouseDown, true);
  window.removeEventListener("pointerdown", onDocPointerDown, true);
}

function onDocMouseDown(e: MouseEvent | PointerEvent) {
  const target = e.target as Node;
  if (triggerRef.value?.contains(target) || panelRef.value?.contains(target)) return;
  close();
}

function onDocPointerDown(e: PointerEvent) {
  onDocMouseDown(e);
}

function toggle() {
  if (open.value) close();
  else openPanel();
}

function select(o: FilComboOption) {
  modelValue.value = o.value;
  close();
  triggerRef.value?.focus();
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (props.disabled) return;
  if (!open.value && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openPanel();
    return;
  }
  if (open.value) onPanelKeydown(e);
}

function onPanelKeydown(e: KeyboardEvent) {
  const list = filtered.value;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = list.length ? (activeIndex.value + 1) % list.length : 0;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = list.length ? (activeIndex.value - 1 + list.length) % list.length : 0;
  } else if (e.key === "Enter") {
    e.preventDefault();
    const o = list[activeIndex.value];
    if (o) select(o);
  } else if (e.key === "Escape") {
    e.preventDefault();
    close();
    triggerRef.value?.focus();
  }
}

watch(query, () => { activeIndex.value = 0; });

onMounted(() => {
  if (props.autoOpen) {
    nextTick(() => {
      openPanel();
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowChange);
  window.removeEventListener("scroll", onWindowChange, true);
  document.removeEventListener("mousedown", onDocMouseDown, true);
});

defineExpose({
  openPanel,
  close,
});
</script>

<template>
  <div class="fil-combo" :class="{ 'is-disabled': disabled }" :title="title">
    <label v-if="label" class="fil-combo-label">{{ label }}</label>
    <button
      ref="triggerRef"
      type="button"
      class="fil-combo-trigger"
      :class="{ open, disabled }"
      :disabled="disabled"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <FilIcon v-if="selected?.icon" :name="selected.icon" :size="16" />
      <span
        class="fil-combo-trigger-label"
        :class="{ 'is-placeholder': !selected && !modelValue }"
      >
        {{ selected ? optionLabel(selected) : (modelValue || placeholder) }}
      </span>
      <span v-if="selected?.badge" class="fil-combo-badge">{{ selected.badge }}</span>
      <span class="fil-combo-chevron">▾</span>
    </button>

    <Teleport to="body">
      <div v-if="open" ref="panelRef" class="fil-combo-panel" :style="panelStyle" role="listbox" @keydown="onPanelKeydown" @wheel.stop>
        <input
          v-if="searchable"
          ref="searchRef"
          v-model="query"
          type="search"
          class="fil-combo-search"
          :placeholder="placeholder"
          spellcheck="false"
          @keydown.stop
        />
        <div class="fil-combo-list" @wheel.stop>
          <button
            v-for="(o, i) in filtered"
            :key="o.value"
            type="button"
            class="fil-combo-option"
            :class="{ active: i === activeIndex, selected: o.value === modelValue }"
            role="option"
            :aria-selected="o.value === modelValue"
            @mouseenter="onOptionMouseEnter(o, i, $event)"
            @mouseleave="onOptionMouseLeave"
            @click="select(o)"
          >
            <FilIcon v-if="o.icon" :name="o.icon" :size="16" />
            <span class="fil-combo-option-label">{{ optionLabel(o) }}</span>
            <span v-if="o.badge" class="fil-combo-badge">{{ o.badge }}</span>
          </button>
          <div v-if="filtered.length === 0" class="fil-combo-empty">No matches</div>
        </div>
      </div>
      <!-- Hover Image Preview Popup -->
      <div
        v-if="open && previewMode && hoveredOption && !hoverPreviewFailed"
        class="fil-combo-hover-preview"
        :style="hoverPreviewStyle"
      >
        <img
          :src="`${ROUTE_PREFIX}/model_preview/${previewMode}?path=${encodeURIComponent(hoveredOption)}`"
          class="fil-combo-hover-img"
          alt="Model Preview"
          @error="hoverPreviewFailed = true"
        />
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.fil-combo {
  display: flex;
  align-items: center;
  gap: var(--fil-node-gap);
  width: 100%;
}
.fil-combo.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
.fil-combo-label {
  flex: 0 0 var(--fil-label-col);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--fil-muted);
  font-family: var(--fil-font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}
.fil-combo-trigger {
  flex: 1;
  min-width: 0;
  width: 100%; box-sizing: border-box; height: var(--fil-control-h);
  display: flex; align-items: center; gap: 6px;
  background: var(--fil-panel-alt); border: 1px solid var(--fil-border); border-radius: var(--fil-field-radius);
  padding: 5px 8px; color: var(--fil-text); font-family: var(--fil-font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif); font-size: 12px;
  outline: none; cursor: pointer; text-align: right; appearance: none; -webkit-appearance: none;
}
.fil-combo-trigger.open, .fil-combo-trigger:focus-visible { border-color: var(--fil-accent); outline: 2px solid var(--fil-accent); outline-offset: 1px; }
.fil-combo-trigger.disabled { opacity: 0.5; cursor: default; }
.fil-combo-trigger-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }
.fil-combo-trigger-label.is-placeholder { color: var(--fil-muted); opacity: 0.7; font-style: italic; }
.fil-combo-chevron { font-size: 9px; color: var(--fil-muted); flex-shrink: 0; }
.fil-combo-badge {
  flex-shrink: 0; font-size: 9px; line-height: 1; padding: 2px 5px; border-radius: 999px;
  background: var(--fil-accent); color: var(--fil-accent-ink); font-weight: 600;
}
.fil-combo-panel {
  position: fixed; z-index: 10001; box-sizing: border-box;
  background: var(--fil-panel); border: 1px solid var(--fil-border); border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); display: flex; flex-direction: column; overflow: hidden;
  padding: 6px;
  font-family: var(--fil-font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}
.fil-combo-search {
  box-sizing: border-box; width: 100%; margin-bottom: 6px; padding: 6px 8px;
  background: var(--fil-panel-alt); border: 1px solid var(--fil-border); border-radius: 5px;
  color: var(--fil-text); font-family: var(--fil-font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif); font-size: 12px; outline: none;
}
.fil-combo-search:focus { border-color: var(--fil-accent); }
.fil-combo-list { display: flex; flex-direction: column; gap: 2px; max-height: 240px; overflow-y: auto; }
.fil-combo-option {
  display: flex; align-items: center; gap: 6px; width: 100%; box-sizing: border-box;
  padding: 6px 8px; border-radius: 5px; border: none; background: transparent; color: var(--fil-text);
  font-family: var(--fil-font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif); font-size: 12px; text-align: left; cursor: pointer; outline: none;
}
.fil-combo-option.active { background: var(--fil-surface-2); }
.fil-combo-option.selected { color: var(--fil-accent-text); font-weight: 600; }
.fil-combo-option-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fil-combo-empty { padding: 10px; text-align: center; color: var(--fil-muted); font-size: 12px; }

.fil-combo-hover-preview {
  position: fixed;
  z-index: 10002;
  width: 160px;
  max-height: 220px;
  background: var(--fil-panel, #18181b);
  border: 1px solid var(--fil-accent, #a855f7);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fil-fade-in 0.15s ease-out;
}

.fil-combo-hover-img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  display: block;
}

@keyframes fil-fade-in {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
</style>
