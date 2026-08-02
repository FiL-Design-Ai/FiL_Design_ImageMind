<script setup lang="ts">
/**
 * Custom dropdown replacing a native `<select>` when options need an icon
 * (provider logos) and/or a badge (vision-capable models) — native
 * `<option>` elements cannot render anything but plain text, so a
 * floating panel (Teleport'd to `<body>`, positioned from the trigger's
 * `getBoundingClientRect()`) stands in for the browser's own popup.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import type { IconName } from "@/composables/icons";

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
  const maxPanelHeight = 260;
  const spaceBelow = viewportH - rect.bottom;
  const openUpward = spaceBelow < maxPanelHeight && rect.top > spaceBelow;
  panelStyle.value = {
    left: `${rect.left}px`,
    width: `${rect.width}px`,
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
  });
}

function close() {
  if (!open.value) return;
  open.value = false;
  window.removeEventListener("resize", onWindowChange);
  window.removeEventListener("scroll", onWindowChange, true);
  document.removeEventListener("mousedown", onDocMouseDown, true);
}

function onDocMouseDown(e: MouseEvent) {
  const target = e.target as Node;
  if (triggerRef.value?.contains(target) || panelRef.value?.contains(target)) return;
  close();
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

onBeforeUnmount(() => {
  window.removeEventListener("resize", onWindowChange);
  window.removeEventListener("scroll", onWindowChange, true);
  document.removeEventListener("mousedown", onDocMouseDown, true);
});
</script>

<template>
  <div class="fil-combo" :title="title">
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
      <span class="fil-combo-trigger-label">{{ selected ? optionLabel(selected) : modelValue }}</span>
      <span v-if="selected?.badge" class="fil-combo-badge">{{ selected.badge }}</span>
      <span class="fil-combo-chevron">▾</span>
    </button>

    <Teleport to="body">
      <div v-if="open" ref="panelRef" class="fil-combo-panel" :style="panelStyle" role="listbox" @keydown="onPanelKeydown">
        <input
          v-if="searchable"
          ref="searchRef"
          v-model="query"
          type="search"
          class="fil-combo-search"
          :placeholder="placeholder"
          spellcheck="false"
        />
        <div class="fil-combo-list">
          <button
            v-for="(o, i) in filtered"
            :key="o.value"
            type="button"
            class="fil-combo-option"
            :class="{ active: i === activeIndex, selected: o.value === modelValue }"
            role="option"
            :aria-selected="o.value === modelValue"
            @mouseenter="activeIndex = i"
            @click="select(o)"
          >
            <FilIcon v-if="o.icon" :name="o.icon" :size="16" />
            <span class="fil-combo-option-label">{{ optionLabel(o) }}</span>
            <span v-if="o.badge" class="fil-combo-badge">{{ o.badge }}</span>
          </button>
          <div v-if="filtered.length === 0" class="fil-combo-empty">No matches</div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.fil-combo {
  display: grid; grid-template-columns: minmax(0, var(--fil-label-col)) minmax(60px, 1fr);
  align-items: center; gap: var(--fil-node-gap); width: 100%;
}
.fil-combo-label { grid-column: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--fil-muted); font-family: inherit; }
.fil-combo-trigger {
  grid-column: 2;
  width: 100%; box-sizing: border-box; height: var(--fil-control-h);
  display: flex; align-items: center; gap: 6px;
  background: var(--fil-panel-alt); border: 1px solid var(--fil-border); border-radius: var(--fil-field-radius);
  padding: 5px 8px; color: var(--fil-text); font-family: inherit; font-size: 12px;
  outline: none; cursor: pointer; text-align: left; appearance: none; -webkit-appearance: none;
}
.fil-combo-trigger.open, .fil-combo-trigger:focus-visible { border-color: var(--fil-accent); outline: 2px solid var(--fil-accent); outline-offset: 1px; }
.fil-combo-trigger.disabled { opacity: 0.5; cursor: default; }
.fil-combo-trigger-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
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
}
.fil-combo-search {
  box-sizing: border-box; width: 100%; margin-bottom: 6px; padding: 6px 8px;
  background: var(--fil-panel-alt); border: 1px solid var(--fil-border); border-radius: 5px;
  color: var(--fil-text); font-family: inherit; font-size: 12px; outline: none;
}
.fil-combo-search:focus { border-color: var(--fil-accent); }
.fil-combo-list { display: flex; flex-direction: column; gap: 2px; max-height: 240px; overflow-y: auto; }
.fil-combo-option {
  display: flex; align-items: center; gap: 6px; width: 100%; box-sizing: border-box;
  padding: 6px 8px; border-radius: 5px; border: none; background: transparent; color: var(--fil-text);
  font-family: inherit; font-size: 12px; text-align: left; cursor: pointer; outline: none;
}
.fil-combo-option.active { background: var(--fil-surface-2); }
.fil-combo-option.selected { color: var(--fil-accent-text); font-weight: 600; }
.fil-combo-option-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fil-combo-empty { padding: 10px; text-align: center; color: var(--fil-muted); font-size: 12px; }
</style>
