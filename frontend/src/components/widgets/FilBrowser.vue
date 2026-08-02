<script setup lang="ts">
/**
 * FilBrowser — the shared frame behind the style picker and the model picker.
 *
 * A draggable, resizable window with three columns: filters on the left, cards
 * in the middle, details on the right. Modelled on the Pixaroma workflow
 * browser, which earned most of the awkward details below.
 *
 * What it owns: the window geometry, the search box, the Grid/List switch, the
 * cards, the keyboard, and where the focus goes. What it deliberately does not
 * own: what the items ARE. Callers map their data to `BrowserItem[]` and look
 * the picked id back up — see lib/browserTypes.ts for why.
 *
 * Three behaviours here are not decoration:
 *
 *   - The backdrop does NOT close the window. Releasing the mouse outside the
 *     window at the end of a drag reaches the backdrop as a plain click, so a
 *     close-on-backdrop would throw the dialog away mid-resize. Escape, the
 *     cross and the caller's own Cancel button are the ways out.
 *
 *   - Focus returns to the search box after any click that was not on a field.
 *     A card is a button, so clicking one takes focus, and the arrow keys then
 *     reach nothing — which is exactly how a footer promising "↑ ↓ move" ends
 *     up lying. Only a REAL click reproduces it; a synthetic one does not move
 *     focus at all.
 *
 *   - Up and Down jump a whole ROW in grid view, and the column count is read
 *     off the rendered grid rather than computed from widths. The grid is
 *     auto-fill, so the answer changes with the window and with both column
 *     widths; any arithmetic here would be a second copy of the CSS free to
 *     drift from it.
 */
import { computed, nextTick, onBeforeUnmount, ref, useSlots, watch } from "vue";
import { useBrowserRect } from "@/composables/useBrowserRect";
import { useI18n } from "@/composables/useI18n";
import type { BrowserItem } from "@/lib/browserTypes";

const props = withDefaults(
  defineProps<{
    title: string;
    /** Unique per window — two browsers sharing one key share one saved size. */
    storageKey: string;
    /** Already filtered and ranked by the caller. */
    items: readonly BrowserItem[];
    /** Right of the title: "367 models", "12 of 402 styles". */
    countText?: string;
    searchPlaceholder?: string;
    searchTitle?: string;
    emptyText?: string;
    loading?: boolean;
    loadingText?: string;
    showViewToggle?: boolean;
    /**
     * A single click also chooses, on top of moving the cursor.
     *
     * For a browser that picks SEVERAL things, where clicking a card toggles
     * it — making that take two clicks would be a step backwards from the
     * plain grid it replaces. A single-pick browser leaves this off, so a
     * mis-click cannot commit anything.
     */
    clickConfirms?: boolean;
    /** Draws a star on every card and emits `star`. */
    starrable?: boolean;
    /** Called during render, so a caller's reactive Set is tracked normally. */
    isStarred?: (id: string) => boolean;
    /** Footer key hints, as [keys, what]. */
    hints?: Array<[string, string]>;
    minWidth?: number;
    minHeight?: number;
    prefWidth?: number;
    prefHeight?: number;
  }>(),
  {
    showViewToggle: true,
    clickConfirms: false,
    starrable: false,
    loading: false,
  },
);

const emit = defineEmits<{
  confirm: [id: string];
  star: [id: string];
  close: [];
}>();

const open = defineModel<boolean>("open", { default: false });
const query = defineModel<string>("query", { default: "" });
const selected = defineModel<string>("selected", { default: "" });
const view = defineModel<"grid" | "list">("view", { default: "list" });

const { t } = useI18n();
const slots = useSlots();

// Destructured so the template sees plain refs and unwraps them. Kept as a
// whole object it would need `.value` on every use in the markup, which reads
// as a mistake even where it is correct.
const {
  windowStyle,
  sidebarStyle,
  detailStyle,
  isNarrow,
  startMove,
  startResize,
  startSidebarDrag,
  startDetailDrag,
  resetSidebar,
  resetDetail,
} = useBrowserRect({
  storageKey: props.storageKey,
  minW: props.minWidth,
  minH: props.minHeight,
  prefW: props.prefWidth,
  prefH: props.prefHeight,
  // This component stays mounted for as long as its node does; only the markup
  // inside the teleport comes and goes. Telling the composable when the window
  // is actually on screen is what stops every node on the canvas holding a
  // viewport listener for a window nobody is looking at.
  active: open,
});

const winEl = ref<HTMLElement | null>(null);
const bodyEl = ref<HTMLElement | null>(null);
const mainEl = ref<HTMLElement | null>(null);
const searchEl = ref<HTMLInputElement | null>(null);

const hasDetail = computed(() => Boolean(slots.detail) && !isNarrow.value);
const defaultHints = computed<Array<[string, string]>>(() => [
  [t("fb_hint_type_keys", "type"), t("fb_hint_type", "search")],
  ["← → ↑ ↓", t("fb_hint_move", "move")],
  [t("fb_hint_enter_keys", "Enter"), t("fb_hint_enter", "choose")],
  [t("fb_hint_dbl_keys", "double click"), t("fb_hint_dbl", "choose")],
  [t("fb_hint_esc_keys", "Esc"), t("fb_hint_esc", "close")],
]);
const footHints = computed(() => props.hints ?? defaultHints.value);

const starred = (id: string) => (props.isStarred ? props.isStarred(id) : false);

function focusSearch() {
  searchEl.value?.focus({ preventScroll: true });
}

function close() {
  open.value = false;
  emit("close");
}

/**
 * The title bar drags the window — except when the pointer actually landed on
 * the close button.
 *
 * `startMove` calls `setPointerCapture` on the title bar and reroutes every
 * subsequent pointer event to it, which is exactly what a drag needs and
 * exactly what swallows the button's own click: the button is a CHILD of the
 * title bar, so its pointerdown bubbles up here first. Without this guard the
 * close button visibly highlighted on press and did nothing — a tiny, dead
 * drag started and ate the interaction before the click could fire. Mirrors
 * the same guard in Pixaroma's floating_window.mjs, earned there first.
 */
function onTitlePointerDown(e: PointerEvent) {
  if ((e.target as HTMLElement | null)?.closest(".fb-titlebtn")) return;
  startMove(e);
}

function pick(item: BrowserItem) {
  selected.value = item.id;
  if (props.clickConfirms) emit("confirm", item.id);
}

function confirm(id: string) {
  if (!id) return;
  emit("confirm", id);
}

// ── keyboard ─────────────────────────────────────────────────────────────────

/** How many cards sit on one row right now, read off the real grid. */
function gridColumns(): number {
  if (view.value === "list") return 1;
  const grid = mainEl.value?.querySelector(".fb-grid");
  if (!grid) return 1;
  const cols = getComputedStyle(grid).gridTemplateColumns;
  const n = cols ? cols.trim().split(/\s+/).filter(Boolean).length : 0;
  return Math.max(1, n);
}

function moveSelection(step: number, wholeRow: boolean) {
  const list = props.items;
  if (!list.length) return;
  const cols = wholeRow ? gridColumns() : 1;
  const delta = step * cols;
  const at = list.findIndex((x) => x.id === selected.value);
  // Nothing selected yet: a downward key starts at the top, an upward one at
  // the bottom, so the first press always lands somewhere visible.
  let next = at < 0 ? (delta > 0 ? 0 : list.length - 1) : at + delta;
  // Clamped, not wrapped: arriving at the last card because Up was pressed
  // once too often is disorienting. A downward move that overshoots still
  // lands on the final card, so a short bottom row stays reachable.
  if (next < 0) next = wholeRow && step < 0 && at >= 0 ? Math.max(0, at % cols) : 0;
  if (next > list.length - 1) next = list.length - 1;
  selected.value = list[next].id;
  void nextTick(() => {
    const card = mainEl.value?.querySelector(".fb-item.is-selected");
    // Feature-tested rather than assumed: jsdom has no `scrollIntoView` at all,
    // and an unguarded call there fails as an unhandled rejection inside a
    // `nextTick` — which surfaces as a mystery error in an unrelated test
    // rather than anywhere near the keyboard code.
    if (card && typeof card.scrollIntoView === "function") card.scrollIntoView({ block: "nearest" });
  });
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    // Escape clears a search first: losing the typed query AND the window to
    // one keystroke is the wrong amount of undo for one key.
    e.stopPropagation();
    if (query.value) {
      query.value = "";
      focusSearch();
      return;
    }
    close();
    return;
  }

  const target = e.target as HTMLElement | null;
  const inTextField = Boolean(target?.closest("textarea, [contenteditable]"));
  if (inTextField) return;

  if (e.key === "Enter") {
    e.preventDefault();
    confirm(selected.value || props.items[0]?.id || "");
    return;
  }

  const horizontal = e.key === "ArrowLeft" || e.key === "ArrowRight";
  const vertical = e.key === "ArrowUp" || e.key === "ArrowDown";
  if (!horizontal && !vertical) return;

  // Left and Right belong to the CARET while there is text to move through, or
  // a typed query could not be edited without the mouse. Up and Down are always
  // navigation — a single-line input has no use for them.
  if (horizontal && target instanceof HTMLInputElement && target.value.length) {
    const caret = target.selectionStart ?? 0;
    const spanning = target.selectionStart !== target.selectionEnd;
    const atEdge = e.key === "ArrowLeft" ? caret === 0 : caret >= target.value.length;
    if (!atEdge || spanning) return;
  }

  e.preventDefault();
  const step = e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1;
  moveSelection(step, vertical);
}

/**
 * Put focus back in the search box after a click that was not on a field.
 *
 * Deferred, because the click that steals focus has not finished landing yet;
 * and skipped when something in the window is legitimately focused, so
 * clicking into the detail pane's own inputs still works.
 */
function onMousedown(e: MouseEvent) {
  const target = e.target as HTMLElement | null;
  if (target?.closest("input, textarea, select, [contenteditable]")) return;
  setTimeout(() => {
    const active = document.activeElement;
    if (active && winEl.value?.contains(active) && active.matches("input, textarea, [contenteditable]")) return;
    focusSearch();
  }, 0);
}

// ── column grips ─────────────────────────────────────────────────────────────

function onSidebarGrip(e: PointerEvent) {
  const left = bodyEl.value?.getBoundingClientRect().left ?? 0;
  startSidebarDrag(e, left);
}
function onDetailGrip(e: PointerEvent) {
  const right = bodyEl.value?.getBoundingClientRect().right ?? 0;
  startDetailDrag(e, right);
}

/**
 * Escape, from anywhere.
 *
 * The keydown handler on the window itself only fires while focus is inside
 * it, and a click on the backdrop leaves focus on `document.body` — from where
 * Escape reached nothing and the window looked stuck. Added only while open and
 * removed on close, so the pack never holds a key listener it is not using.
 *
 * A keypress INSIDE the window stops propagating before it reaches the
 * document, so this never fires twice for one press.
 */
function onDocumentKeydown(e: KeyboardEvent) {
  if (e.key !== "Escape") return;
  if (query.value) {
    query.value = "";
    focusSearch();
    return;
  }
  close();
}

watch(
  open,
  (isOpen) => {
    if (isOpen) {
      // The refit belongs to the composable, which watches `open` itself.
      document.addEventListener("keydown", onDocumentKeydown);
      void nextTick(() => focusSearch());
    } else {
      document.removeEventListener("keydown", onDocumentKeydown);
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => document.removeEventListener("keydown", onDocumentKeydown));

defineExpose({ focusSearch });
</script>

<template>
  <Teleport to="body">
    <Transition name="fb-fade">
      <div v-if="open" class="fb-backdrop">
        <!-- The backdrop is a scrim, not a close button: see the note at the
             top of this file. -->
        <div
          ref="winEl"
          class="fb-win"
          :style="windowStyle"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
          @keydown="onKeydown"
          @mousedown="onMousedown"
          @pointerdown.stop
        >
          <div class="fb-title" @pointerdown="onTitlePointerDown">
            <span class="fb-title-text">{{ title }}</span>
            <span v-if="countText" class="fb-title-count">{{ countText }}</span>
            <span class="fb-sp" />
            <button
              type="button"
              class="fb-titlebtn"
              :title="t('fb_close', 'Close (Esc)')"
              :aria-label="t('fb_close', 'Close (Esc)')"
              @click="close"
            >✕</button>
          </div>

          <div class="fb-bar">
            <div class="fb-search">
              <span class="fb-search-icon" aria-hidden="true">⌕</span>
              <input
                ref="searchEl"
                v-model="query"
                type="text"
                class="fb-search-input"
                spellcheck="false"
                :placeholder="searchPlaceholder || t('fb_search', 'Search…')"
                :title="searchTitle || ''"
                :aria-label="searchPlaceholder || t('fb_search', 'Search…')"
              />
              <button
                v-if="query"
                type="button"
                class="fb-search-clear"
                :title="t('fb_clear_search', 'Clear search')"
                :aria-label="t('fb_clear_search', 'Clear search')"
                @click="query = ''; focusSearch()"
              >✕</button>
            </div>

            <div v-if="showViewToggle" class="fb-seg">
              <button
                type="button"
                :class="{ on: view === 'list' }"
                :title="t('fb_view_list_tt', 'A dense list — easier once there are hundreds')"
                @click="view = 'list'"
              >☰ {{ t('fb_view_list', 'List') }}</button>
              <button
                type="button"
                :class="{ on: view === 'grid' }"
                :title="t('fb_view_grid_tt', 'Picture tiles, for browsing by eye')"
                @click="view = 'grid'"
              >⊞ {{ t('fb_view_grid', 'Tiles') }}</button>
            </div>

            <slot name="toolbar" />
          </div>

          <div ref="bodyEl" class="fb-body">
            <div class="fb-side" :style="sidebarStyle">
              <slot name="sidebar" />
            </div>
            <div
              class="fb-grip-v"
              :title="t('fb_grip_side', 'Drag to resize. Double-click to reset.')"
              @pointerdown="onSidebarGrip"
              @dblclick="resetSidebar"
            />

            <div ref="mainEl" class="fb-main">
              <div v-if="loading && !items.length" class="fb-empty">
                {{ loadingText || t('fb_loading', 'Loading…') }}
              </div>
              <div v-else-if="!items.length" class="fb-empty">
                {{ emptyText || t('fb_empty', 'Nothing matches.') }}
              </div>
              <div v-else :class="view === 'grid' ? 'fb-grid' : 'fb-list'">
                <div
                  v-for="item in items"
                  :key="item.id"
                  class="fb-item"
                  :class="{ 'is-selected': item.id === selected, 'is-checked': item.checked }"
                >
                  <slot name="item" :item="item" :selected="item.id === selected">
                    <button
                      type="button"
                      class="fb-card"
                      :class="{ selected: item.id === selected, checked: item.checked }"
                      :aria-pressed="item.checked ?? item.id === selected"
                      :title="item.title || item.label"
                      @click="pick(item)"
                      @dblclick="clickConfirms || confirm(item.id)"
                    >
                      <span v-if="item.checked" class="fb-check" aria-hidden="true">✓</span>
                      <span v-if="view === 'grid'" class="fb-cov">
                        <img v-if="item.preview" :src="item.preview" class="fb-cov-img" alt="" loading="lazy" />
                        <span v-else class="fb-cov-icon">{{ item.icon || '◻' }}</span>
                      </span>
                      <span class="fb-card-main">
                        <span v-if="view === 'list' && item.icon" class="fb-card-icon">{{ item.icon }}</span>
                        <span class="fb-card-label">{{ item.label }}</span>
                      </span>
                      <span v-if="item.sub" class="fb-card-sub">{{ item.sub }}</span>
                      <span v-if="item.tags && item.tags.length" class="fb-tags">
                        <span
                          v-for="tag in item.tags"
                          :key="tag.label"
                          class="fb-tag"
                          :class="tag.tone || 'neutral'"
                          :title="tag.title || ''"
                        >{{ tag.label }}</span>
                      </span>
                    </button>
                  </slot>
                  <!-- A sibling, never a child: a <button> inside a <button> is
                       invalid markup and browsers resolve it by dropping one of
                       them, so starring would select the item instead. -->
                  <button
                    v-if="starrable"
                    type="button"
                    class="fb-star"
                    :class="{ on: starred(item.id) }"
                    :aria-pressed="starred(item.id)"
                    :title="starred(item.id) ? t('fb_unstar', 'Remove from favourites') : t('fb_star', 'Add to favourites')"
                    :aria-label="starred(item.id) ? t('fb_unstar', 'Remove from favourites') : t('fb_star', 'Add to favourites')"
                    @click.stop="emit('star', item.id)"
                    @dblclick.stop
                  >{{ starred(item.id) ? '★' : '☆' }}</button>
                </div>
              </div>
            </div>

            <template v-if="hasDetail">
              <div
                class="fb-grip-v"
                :title="t('fb_grip_detail', 'Drag to resize. Double-click to reset.')"
                @pointerdown="onDetailGrip"
                @dblclick="resetDetail"
              />
              <div class="fb-detail" :style="detailStyle">
                <slot name="detail" />
              </div>
            </template>
          </div>

          <div class="fb-foot">
            <span v-for="[keys, what] in footHints" :key="keys" class="fb-hint">
              <b>{{ keys }}</b> {{ what }}
            </span>
            <span class="fb-sp" />
            <slot name="footer" />
          </div>

          <div
            class="fb-grip"
            :title="t('fb_grip_win', 'Drag to resize the window')"
            @pointerdown="startResize"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fb-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.fb-win {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--fil-panel);
  border: 1px solid var(--fil-border);
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
  overflow: hidden;
}

/* ── title ── */
.fb-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 9px 10px 9px 14px;
  border-bottom: 1px solid var(--fil-border);
  cursor: move;
  /* The title bar is a drag handle; a stray text selection while dragging it
     leaves the whole header highlighted. */
  user-select: none;
}
.fb-title-text {
  font-size: 13px;
  font-weight: 600;
}
.fb-title-count {
  font-size: 11px;
  color: var(--fil-muted);
}
.fb-sp {
  flex: 1;
}
.fb-titlebtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--fil-muted);
  font-size: 12px;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;
}
.fb-titlebtn:hover {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}

/* ── toolbar ── */
.fb-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding: 8px 10px;
  border-bottom: 1px solid var(--fil-border);
}
.fb-search {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}
.fb-search-icon {
  position: absolute;
  left: 9px;
  color: var(--fil-muted);
  font-size: 14px;
  pointer-events: none;
}
.fb-search-input {
  width: 100%;
  box-sizing: border-box;
  height: var(--fil-control-h);
  padding: 0 28px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-text);
  font: inherit;
  font-size: 12px;
  outline: none;
}
.fb-search-input:focus {
  border-color: var(--fil-accent);
}
.fb-search-clear {
  position: absolute;
  right: 8px;
  border: none;
  background: none;
  color: var(--fil-muted);
  font-size: 11px;
  cursor: pointer;
}
.fb-search-clear:hover {
  color: var(--fil-text);
}
.fb-seg {
  display: flex;
  flex-shrink: 0;
  gap: 2px;
  padding: 2px;
  background: var(--fil-inset);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
}
.fb-seg button {
  padding: 0 10px;
  height: calc(var(--fil-control-h) - 8px);
  border: none;
  border-radius: 5px;
  background: transparent;
  color: var(--fil-muted);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.1s, color 0.1s;
}
.fb-seg button:hover {
  color: var(--fil-text);
}
.fb-seg button.on {
  background: var(--fil-accent);
  color: var(--fil-accent-ink);
  font-weight: 600;
}

/* ── body ── */
.fb-body {
  display: flex;
  flex: 1;
  min-height: 0;
  min-width: 0;
}
.fb-side {
  flex-shrink: 0;
  overflow-y: auto;
  background: var(--fil-inset);
}
.fb-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 10px;
}
.fb-detail {
  flex-shrink: 0;
  overflow-y: auto;
  padding: 12px;
  background: var(--fil-inset);
}
/* A 5px column that behaves like a 9px one: the visible line stays hairline
   while the pointer target is wide enough to grab without aiming. */
.fb-grip-v {
  position: relative;
  flex-shrink: 0;
  width: 5px;
  cursor: col-resize;
  background: var(--fil-border);
  touch-action: none;
}
.fb-grip-v::after {
  content: "";
  position: absolute;
  inset: 0 -2px;
}
.fb-grip-v:hover {
  background: var(--fil-accent);
}

.fb-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--fil-muted);
  font-size: 12px;
  text-align: center;
}

/* ── cards ── */
.fb-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.fb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
  gap: 8px;
}
.fb-item {
  display: flex;
  align-items: stretch;
  gap: 4px;
  min-width: 0;
  position: relative;
}
.fb-grid .fb-item {
  /* In tiles the star floats on the corner of the card rather than taking a
     column of its own — a 34px button beside a 124px tile eats a quarter of it. */
  display: block;
}
.fb-card {
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 7px;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  transition: background 0.1s, border-color 0.1s;
}
.fb-card:hover {
  background: var(--fil-surface-2);
  border-color: var(--fil-accent);
}
.fb-card.selected {
  background: color-mix(in srgb, var(--fil-accent) 16%, transparent);
  border-color: var(--fil-accent);
}
/* "Chosen" and "the cursor is here" are different states and have to look
   different: a filled card for chosen, an outline for the cursor. In a
   multi-pick browser they are on different cards most of the time. */
.fb-card.checked {
  background: color-mix(in srgb, var(--fil-accent) 26%, transparent);
  border-color: var(--fil-accent);
}
.fb-card.checked.selected {
  box-shadow: inset 0 0 0 1px var(--fil-accent);
}
.fb-check {
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--fil-accent);
  color: var(--fil-accent-ink);
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
}
.fb-list .fb-check {
  position: static;
  flex-shrink: 0;
}
.fb-card:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fb-grid .fb-card {
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
  padding: 6px;
}
.fb-cov {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 5px;
  background: var(--fil-inset);
  overflow: hidden;
  font-size: 24px;
}
.fb-cov-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fb-card-main {
  display: flex;
  align-items: center;
  gap: 7px;
  flex: 1;
  min-width: 0;
}
.fb-card-icon {
  flex-shrink: 0;
  font-size: 13px;
}
.fb-card-label {
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fb-grid .fb-card-label {
  white-space: normal;
  font-size: 10px;
  line-height: 1.3;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.fb-card-sub {
  flex-shrink: 0;
  font-size: 10px;
  color: var(--fil-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fb-grid .fb-card-sub {
  text-align: center;
}
.fb-tags {
  display: flex;
  flex-shrink: 0;
  gap: 4px;
}
.fb-grid .fb-tags {
  flex-wrap: wrap;
  justify-content: center;
}
.fb-tag {
  padding: 2px 5px;
  border-radius: 4px;
  background: var(--fil-pill-bg);
  color: var(--fil-muted);
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}
.fb-tag.accent {
  background: color-mix(in srgb, var(--fil-accent) 18%, transparent);
  color: var(--fil-accent-text);
}
.fb-tag.ok {
  background: color-mix(in srgb, var(--fil-ok) 18%, transparent);
  color: var(--fil-ok);
}
.fb-tag.warn {
  background: color-mix(in srgb, var(--fil-danger) 18%, transparent);
  color: var(--fil-danger);
}
.fb-star {
  flex-shrink: 0;
  width: 30px;
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  background: var(--fil-surface-1);
  color: var(--fil-muted);
  font-size: 15px;
  line-height: 1;
  padding: 0;
  cursor: pointer;
  transition: color 0.1s, border-color 0.1s, background 0.1s;
}
.fb-grid .fb-star {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border-color: transparent;
  background: rgba(0, 0, 0, 0.35);
  font-size: 12px;
}
.fb-star:hover {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}
.fb-star.on {
  color: var(--fil-accent-text);
  border-color: var(--fil-accent);
}
.fb-star:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}

/* ── footer ── */
.fb-foot {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  padding: 7px 10px;
  border-top: 1px solid var(--fil-border);
  font-size: 10px;
  color: var(--fil-muted);
}
.fb-hint b {
  padding: 1px 5px;
  margin-right: 4px;
  border-radius: 4px;
  background: var(--fil-pill-bg);
  color: var(--fil-text);
  font-weight: 600;
}

/* ── resize grip ── */
.fb-grip {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  touch-action: none;
  background: linear-gradient(
    135deg,
    transparent 0 45%,
    var(--fil-border) 45% 55%,
    transparent 55% 70%,
    var(--fil-border) 70% 80%,
    transparent 80%
  );
}

.fb-fade-enter-active,
.fb-fade-leave-active {
  transition: opacity 0.14s ease;
}
.fb-fade-enter-from,
.fb-fade-leave-to {
  opacity: 0;
}
</style>
