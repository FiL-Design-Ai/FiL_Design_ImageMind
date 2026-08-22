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
    /**
     * What the closed trigger shows, when that differs from the option's own
     * label. The list keeps the full label — a LoRA picker needs the path to
     * choose by — while the row it sits in can show a shortened form.
     */
    triggerLabel?: string;
    /**
     * Browse the options as a folder tree, splitting their values on `/` or
     * `\`. Off by default: it only makes sense where the values are paths.
     */
    browseFolders?: boolean;
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
  // Both, because a label can be a shortened form of the value: the LoRA
  // picker shows `Eva_epoch_10` for `Ideogram/Eva/Eva_epoch_10.safetensors`,
  // and typing the folder it lives in has to keep finding it. Matching the
  // value as well only ever widens the result.
  return props.options.filter(
    (o) => (o.label ?? o.value).toLowerCase().includes(q) || o.value.toLowerCase().includes(q),
  );
});

function optionLabel(o: FilComboOption): string {
  return o.label ?? o.value;
}

/**
 * Browsing by folder.
 *
 * A flat list is fine for twenty options and useless for four hundred, which is
 * what a models folder becomes. When `browseFolders` is on, the list shows the
 * folders at the current level with a count each, and typing anything drops
 * back to searching every option flat — so nothing is ever more than a search
 * away, and drilling is a choice rather than a toll.
 */
interface BrowseEntry {
  kind: "back" | "folder" | "option";
  label: string;
  count?: number;
  path?: string;
  option?: FilComboOption;
  sub?: string;
}

const curPath = ref("");

function folderOf(value: string): string {
  const norm = value.replace(/\\/g, "/");
  const cut = norm.lastIndexOf("/");
  return cut < 0 ? "" : norm.slice(0, cut);
}

function baseOf(value: string): string {
  const norm = value.replace(/\\/g, "/");
  return norm.slice(norm.lastIndexOf("/") + 1);
}

function parentOf(path: string): string {
  const cut = path.lastIndexOf("/");
  return cut < 0 ? "" : path.slice(0, cut);
}

/** Folder navigation is on only while the search box is empty. */
const browsing = computed(() => Boolean(props.browseFolders) && !query.value.trim());

const crumbs = computed(() => {
  const parts = curPath.value ? curPath.value.split("/") : [];
  return parts.map((label, index) => ({ label, path: parts.slice(0, index + 1).join("/") }));
});

const entries = computed<BrowseEntry[]>(() => {
  if (!browsing.value) {
    // Searching: every option, and the folder spelled out beside the name so a
    // hit is placeable without opening it.
    return filtered.value.map((o) => ({
      kind: "option" as const,
      label: props.browseFolders ? baseOf(optionLabel(o)) : optionLabel(o),
      option: o,
      sub: props.browseFolders ? folderOf(o.value) : undefined,
    }));
  }

  const prefix = curPath.value ? `${curPath.value}/` : "";
  const folders = new Map<string, number>();
  const files: FilComboOption[] = [];
  for (const option of props.options) {
    const norm = option.value.replace(/\\/g, "/");
    if (prefix && !norm.toLowerCase().startsWith(prefix.toLowerCase())) continue;
    const rest = norm.slice(prefix.length);
    const slash = rest.indexOf("/");
    if (slash < 0) files.push(option);
    else {
      const name = rest.slice(0, slash);
      folders.set(name, (folders.get(name) ?? 0) + 1);
    }
  }

  const out: BrowseEntry[] = [];
  if (curPath.value) out.push({ kind: "back", label: "‹ back", path: parentOf(curPath.value) });
  for (const [name, count] of [...folders.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    out.push({
      kind: "folder",
      label: name,
      count,
      path: curPath.value ? `${curPath.value}/${name}` : name,
    });
  }
  for (const option of files) {
    out.push({ kind: "option", label: baseOf(optionLabel(option)), option });
  }
  return out;
});

function activate(entry: BrowseEntry): void {
  if (entry.kind === "option" && entry.option) {
    select(entry.option);
    return;
  }
  curPath.value = entry.path ?? "";
  query.value = "";
  activeIndex.value = 0;
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

  /**
   * How tall the list is allowed to be, from the room the screen actually has
   * rather than a number typed once.
   *
   * It was a flat 240px: seven or eight names out of the four hundred a models
   * folder holds, on a monitor with room for thirty. The panel also carries a
   * search box and, when browsing folders, a row of crumbs — hence the reserve
   * — and it keeps a margin from the screen edge so the last row is never
   * pressed against it.
   */
  const PANEL_CHROME = 92;
  const EDGE_MARGIN = 16;
  const room = (openUpward ? rect.top : spaceBelow) - PANEL_CHROME - EDGE_MARGIN;
  const listMaxHeight = Math.round(Math.min(560, Math.max(180, room)));

  const panelWidth = Math.max(rect.width, 380);
  let left = rect.left;
  if (left + panelWidth > viewportW - 12) {
    left = Math.max(12, viewportW - panelWidth - 12);
  }

  panelStyle.value = {
    left: `${left}px`,
    width: `${panelWidth}px`,
    "--fil-combo-list-max": `${listMaxHeight}px`,
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
  // Open where the current value lives, not at the root: on a LoRA two folders
  // deep, a picker that starts at the top makes the user walk back down to it
  // every time — the bug Pixaroma's own picker records having had.
  if (props.browseFolders) curPath.value = folderOf(modelValue.value ?? "");
  activeIndex.value = Math.max(
    0,
    entries.value.findIndex((entry) => entry.option?.value === modelValue.value),
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
  // The rows, whatever they are: with folder browsing on, walking the list has
  // to step over folders too, and Enter on one opens it.
  const list = entries.value;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = list.length ? (activeIndex.value + 1) % list.length : 0;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = list.length ? (activeIndex.value - 1 + list.length) % list.length : 0;
  } else if (e.key === "Enter") {
    e.preventDefault();
    const entry = list[activeIndex.value];
    if (entry) activate(entry);
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
        {{ triggerLabel || (selected ? optionLabel(selected) : (modelValue || placeholder)) }}
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
        <div v-if="browsing && crumbs.length" class="fil-combo-crumbs">
          <button type="button" class="fil-combo-crumb" @click="curPath = ''">All</button>
          <template v-for="(crumb, i) in crumbs" :key="crumb.path">
            <span class="fil-combo-crumb-sep">›</span>
            <button
              type="button"
              class="fil-combo-crumb"
              :class="{ here: i === crumbs.length - 1 }"
              @click="curPath = crumb.path"
            >
              {{ crumb.label }}
            </button>
          </template>
        </div>
        <div class="fil-combo-list" @wheel.stop>
          <button
            v-for="(entry, i) in entries"
            :key="entry.kind + (entry.option?.value ?? entry.path ?? entry.label)"
            type="button"
            class="fil-combo-option"
            :class="{
              active: i === activeIndex,
              selected: entry.option?.value === modelValue,
              folder: entry.kind !== 'option',
            }"
            role="option"
            :aria-selected="entry.option?.value === modelValue"
            :title="entry.option?.value"
            @mouseenter="entry.option && onOptionMouseEnter(entry.option, i, $event)"
            @mouseleave="onOptionMouseLeave"
            @click="activate(entry)"
          >
            <span v-if="entry.kind === 'folder'" class="fil-combo-folder-icon">📁</span>
            <FilIcon v-else-if="entry.option?.icon" :name="entry.option.icon" :size="16" />
            <span class="fil-combo-option-label">{{ entry.label }}</span>
            <span v-if="entry.sub" class="fil-combo-option-sub">{{ entry.sub }}</span>
            <span v-if="entry.count" class="fil-combo-folder-count">{{ entry.count }}</span>
            <span v-if="entry.kind === 'folder'" class="fil-combo-folder-chevron">›</span>
            <span v-if="entry.option?.badge" class="fil-combo-badge">{{ entry.option.badge }}</span>
          </button>
          <div v-if="entries.length === 0" class="fil-combo-empty">No matches</div>
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
.fil-combo-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  /* Set per opening from the room the screen has — see computePosition. */
  max-height: var(--fil-combo-list-max, 240px);
  overflow-y: auto;
}
/* Folder browsing. The rows reuse `.fil-combo-option` so a folder and a file
   line up and answer the keyboard the same way; only the trimmings differ. */
.fil-combo-crumbs {
  display: flex; align-items: center; flex-wrap: wrap; gap: 2px;
  padding: 0 2px 6px; font-size: 11px; color: var(--fil-muted);
}
.fil-combo-crumb {
  background: transparent; border: none; padding: 1px 3px; border-radius: 4px;
  color: var(--fil-muted); font-size: 11px; cursor: pointer;
}
.fil-combo-crumb:hover { color: var(--fil-accent-text, #c084fc); }
.fil-combo-crumb.here { color: var(--fil-text); cursor: default; }
.fil-combo-crumb-sep { color: color-mix(in srgb, var(--fil-border) 90%, transparent); }
.fil-combo-folder-icon { flex: none; font-size: 12px; }
.fil-combo-folder-count {
  flex: none; font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 10px; color: var(--fil-muted);
}
.fil-combo-folder-chevron { flex: none; color: var(--fil-muted); }
/* Where a search hit lives, since the name alone stops saying it once the
   folders are hidden. */
.fil-combo-option-sub {
  flex: none; margin-left: auto; font-size: 10px; color: var(--fil-muted);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 45%;
}
.fil-combo-option.folder .fil-combo-option-label { color: var(--fil-text); }

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
