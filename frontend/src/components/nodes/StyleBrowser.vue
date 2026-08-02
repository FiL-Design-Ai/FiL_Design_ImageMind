<script lang="ts">
/**
 * One of the scanner's four style widgets.
 *
 * In a plain `<script>` block rather than `<script setup>`, which cannot carry
 * ES exports — and the scanner needs this type to build the array it passes in.
 */
export interface StyleSource {
  /** The widget name — `photo_style`, `art_style`, … */
  id: string;
  label: string;
  icon: string;
  /** Everything the contract offers, `"None"` included. */
  options: string[];
  /** What is stored right now: `"None"`, or keys joined with `" | "`. */
  value: string;
}
</script>

<script setup lang="ts">
/**
 * The style picker for FiLOpticScanner, on the shared `FilBrowser` frame.
 *
 * The scanner keeps four separate style lists — photo, NSFW photo, art, NSFW
 * art — and the dialog this replaces showed them as four tabs. Which meant the
 * search box only ever searched the tab you were looking at: finding "noir"
 * required guessing which of the four it lived in first. Here all four are ONE
 * list, the tabs became rows in the left column with counts, and the search
 * runs across the lot.
 *
 * Nothing about how the styles are stored changed. Each source is still its own
 * `"None"`-or-`"a | b"` string on its own widget, so the backend and every
 * saved workflow are untouched — this component only reads and writes those
 * strings.
 */
import { computed, ref, watch } from "vue";
import FilBrowser from "@/components/widgets/FilBrowser.vue";
import FilBrowserSidebar from "@/components/widgets/FilBrowserSidebar.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import { STYLE_PREVIEWS } from "@/generated/stylePreviews";
import { noteRecent, recentsFor } from "@/stores/browserRecents";
import { rankItems, type SearchField } from "@/lib/browserSearch";
import type { BrowserItem, BrowserSidebarSection } from "@/lib/browserTypes";
import { useI18n } from "@/composables/useI18n";
import { CATEGORY_LABEL_KEY } from "@/constants/styleCategories";

const props = defineProps<{ sources: StyleSource[] }>();

const emit = defineEmits<{
  "update:source": [payload: { id: string; value: string }];
  "clear-all": [];
}>();

const open = defineModel<boolean>("open", { default: false });

const { t } = useI18n();

/** Where this browser's recents live. One scope: the point is that the four
 *  sources are one pool now. */
const RECENT_SCOPE = "styles";

// ── reading the style keys ───────────────────────────────────────────────────
//
// A key is `"📷 CATEGORY/📷 Name"`. The category is what the backend groups by
// and the name is what a person reads, so both are parsed once per entry rather
// than on every render.

const splitAt = (key: string) => key.indexOf("/");
const categoryOf = (key: string) => (splitAt(key) === -1 ? "" : key.slice(0, splitAt(key)));
const nameOf = (key: string) => (splitAt(key) === -1 ? key : key.slice(splitAt(key) + 1));

/**
 * The category as the user should read it.
 *
 * The word inside the key is Russian (see constants/styleCategories.ts for why
 * it stays that way), so it is looked up rather than shown raw. An unmapped
 * category — one just added on the Python side — falls back to the stripped
 * key, which is what this used to show for all of them.
 */
function categoryLabel(category: string): string {
  const key = CATEGORY_LABEL_KEY[category];
  const raw = stripEmoji(category);
  return key ? t(key, raw) : raw;
}

/** Emoji and text are stored together; the tiles want them apart. */
const LEADING_EMOJI = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}️\s]+/u;
const stripEmoji = (s: string) => s.replace(LEADING_EMOJI, "").trim();
function leadingEmoji(s: string): string {
  const m = LEADING_EMOJI.exec(s);
  return m ? m[0].trim() : "";
}

interface StyleEntry {
  /** Unique across sources — the same style name exists in more than one list. */
  id: string;
  sourceId: string;
  sourceLabel: string;
  key: string;
  category: string;
  categoryText: string;
  name: string;
}

const entries = computed<StyleEntry[]>(() => {
  const out: StyleEntry[] = [];
  for (const source of props.sources) {
    for (const key of source.options) {
      // "None" is the empty state, not a style anyone picks off a shelf.
      if (!key || key === "None") continue;
      const category = categoryOf(key);
      out.push({
        id: `${source.id}::${key}`,
        sourceId: source.id,
        sourceLabel: source.label,
        key,
        category,
        categoryText: categoryLabel(category),
        name: nameOf(key),
      });
    }
  }
  return out;
});

// ── what is chosen right now ─────────────────────────────────────────────────

function keysOf(value: string): string[] {
  if (!value || value === "None") return [];
  return value.split("|").map((s) => s.trim()).filter((s) => s && s !== "None");
}

/** Every chosen style as an entry id, so the card and the list agree. */
const chosenIds = computed<Set<string>>(() => {
  const out = new Set<string>();
  for (const source of props.sources) {
    for (const key of keysOf(source.value)) out.add(`${source.id}::${key}`);
  }
  return out;
});

const chosenEntries = computed(() => entries.value.filter((e) => chosenIds.value.has(e.id)));

function toggle(id: string) {
  const entry = entries.value.find((e) => e.id === id);
  if (!entry) return;
  const source = props.sources.find((s) => s.id === entry.sourceId);
  if (!source) return;

  const current = keysOf(source.value);
  const has = current.includes(entry.key);
  const next = has ? current.filter((k) => k !== entry.key) : [...current, entry.key];
  emit("update:source", { id: source.id, value: next.length ? next.join(" | ") : "None" });
  // Only an ADD is worth remembering. Recording a removal would fill the
  // recents with the styles somebody just decided against.
  if (!has) noteRecent(RECENT_SCOPE, entry.id);
}

function clearAll() {
  emit("clear-all");
}

// ── filters ──────────────────────────────────────────────────────────────────

const ALL = "all";
const sourceFilter = ref<string>(ALL);
const categoryFilter = ref<string>(ALL);
const onlyFilter = ref<"all" | "chosen" | "recent">("all");
const query = ref("");
const cursor = ref("");
const viewMode = ref<"grid" | "list">("grid");

function passes(e: StyleEntry, skip: "source" | "category" | "only" | null): boolean {
  if (skip !== "source" && sourceFilter.value !== ALL && e.sourceId !== sourceFilter.value) return false;
  if (skip !== "category" && categoryFilter.value !== ALL && e.category !== categoryFilter.value) return false;
  if (skip !== "only" && onlyFilter.value !== "all") {
    if (onlyFilter.value === "chosen" ? !chosenIds.value.has(e.id) : !recentsFor(RECENT_SCOPE).includes(e.id)) {
      return false;
    }
  }
  return true;
}

// The name is what people half-remember; the category and the source are worth
// finding by too, but should never outrank a name that actually matches.
const SEARCH_FIELDS: SearchField<StyleEntry>[] = [
  { weight: 100, read: (e) => stripEmoji(e.name) },
  { weight: 30, read: (e) => e.categoryText },
  { weight: 10, read: (e) => e.sourceLabel },
];

const visibleEntries = computed(() =>
  rankItems(entries.value.filter((e) => passes(e, null)), query.value, SEARCH_FIELDS),
);

const items = computed<BrowserItem[]>(() =>
  visibleEntries.value.map((e) => ({
    id: e.id,
    label: stripEmoji(e.name),
    sub: e.categoryText,
    icon: leadingEmoji(e.name) || e.sourceLabel.slice(0, 2),
    preview: STYLE_PREVIEWS[e.key],
    title: `${e.sourceLabel} · ${e.categoryText} / ${stripEmoji(e.name)}`,
    checked: chosenIds.value.has(e.id),
  })),
);

// ── the left column ──────────────────────────────────────────────────────────

const countWhere = (skip: "source" | "category" | "only", test: (e: StyleEntry) => boolean) =>
  entries.value.filter((e) => passes(e, skip) && test(e)).length;

/** Categories of whatever the OTHER filters leave, so the list shrinks with
 *  the source rather than always offering all of them. */
const categories = computed(() => {
  const seen = new Map<string, number>();
  for (const e of entries.value) {
    if (!e.category || !passes(e, "category")) continue;
    seen.set(e.category, (seen.get(e.category) ?? 0) + 1);
  }
  return [...seen.entries()];
});

const sidebarSections = computed<BrowserSidebarSection[]>(() => {
  const sections: BrowserSidebarSection[] = [
    {
      id: "only",
      heading: t("sb_group_show", "Show"),
      rows: [
        { id: "only:all", label: t("sb_only_all", "All styles"), count: countWhere("only", () => true) },
        {
          id: "only:chosen",
          label: t("sb_only_chosen", "Selected"),
          icon: "✓",
          count: chosenEntries.value.length,
        },
        {
          id: "only:recent",
          label: t("sb_only_recent", "Recently used"),
          icon: "🕐",
          count: entries.value.filter((e) => recentsFor(RECENT_SCOPE).includes(e.id)).length,
        },
      ],
    },
    {
      id: "sources",
      heading: t("sb_group_source", "List"),
      rows: [
        { id: "source:all", label: t("sb_source_all", "All lists"), count: countWhere("source", () => true) },
        ...props.sources.map((s) => ({
          id: `source:${s.id}`,
          label: s.label,
          icon: s.icon,
          count: countWhere("source", (e) => e.sourceId === s.id),
        })),
      ],
    },
  ];

  if (categories.value.length) {
    sections.push({
      id: "categories",
      heading: t("sb_group_category", "Category"),
      rows: [
        { id: "category:all", label: t("sb_category_all", "All categories"), count: countWhere("category", () => true) },
        ...categories.value.map(([cat, count]) => ({
          id: `category:${cat}`,
          label: categoryLabel(cat),
          icon: leadingEmoji(cat),
          count,
        })),
      ],
    });
  }

  return sections;
});

const activeRows = computed(() => [
  `only:${onlyFilter.value}`,
  `source:${sourceFilter.value}`,
  `category:${categoryFilter.value}`,
]);

function onSidebarPick(id: string) {
  const at = id.indexOf(":");
  const group = id.slice(0, at);
  const value = id.slice(at + 1);
  if (group === "only") {
    onlyFilter.value = onlyFilter.value === value ? "all" : (value as "chosen" | "recent");
  } else if (group === "source") {
    sourceFilter.value = sourceFilter.value === value ? ALL : value;
    // A category belonging to the list just left behind would filter the
    // result down to nothing and look like an empty source.
    if (categoryFilter.value !== ALL && !categories.value.some(([c]) => c === categoryFilter.value)) {
      categoryFilter.value = ALL;
    }
  } else if (group === "category") {
    categoryFilter.value = categoryFilter.value === value ? ALL : value;
  }
}

// ── the window ───────────────────────────────────────────────────────────────

const countText = computed(() => {
  const shown = visibleEntries.value.length;
  const total = entries.value.length;
  const chosen = chosenEntries.value.length;
  const base = shown === total ? `${total}` : `${shown} / ${total}`;
  return chosen ? `${base} · ${chosen} ${t("sb_chosen_suffix", "selected")}` : base;
});

const cursorEntry = computed(() => entries.value.find((e) => e.id === cursor.value) ?? null);
const cursorPreview = computed(() => (cursorEntry.value ? STYLE_PREVIEWS[cursorEntry.value.key] : undefined));

// The search is per-visit: a leftover query silently hiding every style is
// worse than retyping it. The sidebar filters are visible on screen and stay.
watch(open, (isOpen) => {
  if (isOpen) query.value = "";
});
</script>

<template>
  <FilBrowser
    v-model:open="open"
    v-model:query="query"
    v-model:selected="cursor"
    v-model:view="viewMode"
    :title="t('sb_title', '🎨 Styles')"
    storage-key="fil_style_picker_rect"
    :items="items"
    :count-text="countText"
    :search-placeholder="t('sb_search', 'Search every list…')"
    :search-title="t('sb_search_tt', 'Searches all four lists at once, by name and by category')"
    :empty-text="t('sb_empty', 'No styles match these filters.')"
    click-confirms
    :pref-width="1080"
    :hints="[
      [t('sb_hint_click_keys', 'click'), t('sb_hint_click', 'add or remove')],
      ['← → ↑ ↓', t('fb_hint_move', 'move')],
      [t('fb_hint_enter_keys', 'Enter'), t('sb_hint_click', 'add or remove')],
      [t('fb_hint_esc_keys', 'Esc'), t('fb_hint_esc', 'close')],
    ]"
    @confirm="toggle"
  >
    <template #sidebar>
      <FilBrowserSidebar :sections="sidebarSections" :active="activeRows" @select="onSidebarPick" />
    </template>

    <template #detail>
      <div class="sb-det">
        <template v-if="cursorEntry">
          <div class="sb-det-cov">
            <img v-if="cursorPreview" :src="cursorPreview" alt="" />
            <span v-else>{{ leadingEmoji(cursorEntry.name) || '🎨' }}</span>
          </div>
          <div class="sb-det-name">{{ stripEmoji(cursorEntry.name) }}</div>
          <div class="sb-det-path">{{ cursorEntry.sourceLabel }} · {{ cursorEntry.categoryText }}</div>
          <FilButton
            variant="sm"
            :label="chosenIds.has(cursorEntry.id) ? t('sb_remove', '− Remove') : t('sb_add', '+ Add')"
            @click="toggle(cursorEntry.id)"
          />
        </template>
        <div v-else class="sb-det-empty">{{ t('sb_pick_to_see', 'Point at a style to see it bigger.') }}</div>

        <!-- Everything chosen, from all four lists at once — the one place that
             answers "what is actually on right now" without four tabs. -->
        <div class="sb-chosen-head">
          {{ t('sb_chosen_head', 'Selected') }} <span>{{ chosenEntries.length }}</span>
        </div>
        <div v-if="!chosenEntries.length" class="sb-det-empty small">
          {{ t('sb_none_chosen', 'Nothing selected yet.') }}
        </div>
        <div v-else class="sb-chips">
          <span v-for="e in chosenEntries" :key="e.id" class="sb-chip" :title="`${e.sourceLabel} · ${e.categoryText}`">
            <span class="sb-chip-text">{{ stripEmoji(e.name) }}</span>
            <button
              type="button"
              class="sb-chip-x"
              :title="t('sb_remove', '− Remove')"
              :aria-label="t('sb_remove', '− Remove')"
              @click="toggle(e.id)"
            >×</button>
          </span>
        </div>
      </div>
    </template>

    <template #footer>
      <FilButton
        variant="sm"
        :label="t('sb_clear_all', '🗑 Clear all')"
        :title="t('sb_clear_all_tt', 'Remove every selected style from all four lists')"
        :disabled="!chosenEntries.length"
        @click="clearAll"
      />
      <FilButton variant="accent" :label="t('sb_done', 'Done')" @click="open = false" />
    </template>
  </FilBrowser>
</template>

<style scoped>
.sb-det {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sb-det-cov {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  overflow: hidden;
  font-size: 40px;
}
.sb-det-cov img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sb-det-name {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.sb-det-path {
  font-size: 10px;
  color: var(--fil-muted);
  overflow-wrap: anywhere;
}
.sb-det-empty {
  color: var(--fil-muted);
  font-size: 12px;
  text-align: center;
  padding: 16px 0;
}
.sb-det-empty.small {
  padding: 6px 0;
  font-size: 11px;
}
.sb-chosen-head {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  padding-top: 8px;
  border-top: 1px solid var(--fil-border);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fil-muted);
}
.sb-chosen-head span {
  padding: 1px 5px;
  border-radius: 99px;
  background: var(--fil-pill-bg);
}
.sb-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.sb-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: 100%;
  padding: 2px 4px 2px 8px;
  border-radius: 999px;
  background: var(--fil-accent);
  color: var(--fil-accent-ink);
  font-size: 11px;
  font-weight: 600;
}
.sb-chip-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sb-chip-x {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.22);
  color: var(--fil-accent-ink);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
}
.sb-chip-x:hover {
  background: var(--fil-danger);
  color: #ffffff;
}
</style>
