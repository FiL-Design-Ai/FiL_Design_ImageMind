<script setup lang="ts">
/**
 * FilStylePicker — category-tabbed, searchable grid for the photo/art style
 * pickers. Style keys follow the `"emoji CATEGORY/emoji Name"` convention
 * already used by `PHOTO_STYLES`/`ART_STYLES` (common/styles/*.py), so no
 * backend changes are needed to group them here.
 *
 * Preview thumbnails come from `STYLE_PREVIEWS` (generated/stylePreviews.ts,
 * built by `_gen_style_previews.py`) — a style key with an entry there
 * switches its tile to an `<img>`; anything missing falls back to the
 * emoji + name placeholder.
 */
import { computed, ref } from "vue";
import { STYLE_PREVIEWS } from "@/generated/stylePreviews";
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    styles: string[];
    multi?: boolean;
  }>(),
  { multi: false }
);

const modelValue = defineModel<string>({ required: true });

const emit = defineEmits<{ select: [value: string] }>();

function parseCategory(key: string): string {
  const idx = key.indexOf("/");
  return idx === -1 ? "" : key.slice(0, idx);
}
function parseName(key: string): string {
  const idx = key.indexOf("/");
  return idx === -1 ? key : key.slice(idx + 1);
}

const selectedList = computed<string[]>(() => {
  const raw = modelValue.value || "";
  if (!raw || raw === "None") return [];
  return raw.split("|").map((s) => s.trim()).filter((s) => s && s !== "None");
});

const selectedSet = computed<Set<string>>(() => new Set(selectedList.value));

function isSelected(key: string): boolean {
  return selectedSet.value.has(key);
}

const categories = computed(() => {
  const seen = new Set<string>();
  const list: string[] = [];
  for (const s of props.styles) {
    const c = parseCategory(s);
    if (c && !seen.has(c)) {
      seen.add(c);
      list.push(c);
    }
  }
  return list;
});

const ALL = "__all__";
const activeCategory = ref<string>(ALL);
const query = ref("");

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return props.styles.filter((s) => {
    if (activeCategory.value !== ALL && parseCategory(s) !== activeCategory.value) return false;
    if (!q) return true;
    return s.toLowerCase().includes(q);
  });
});

function previewFor(key: string): string | undefined {
  return STYLE_PREVIEWS[key];
}

function removeStyle(key: string) {
  const current = selectedList.value.filter((k) => k !== key);
  const nextVal = current.length > 0 ? current.join(" | ") : "None";
  modelValue.value = nextVal;
  emit("select", nextVal);
}

function select(key: string) {
  if (props.multi) {
    let next: string[];
    if (selectedSet.value.has(key)) {
      next = selectedList.value.filter((k) => k !== key);
    } else {
      next = [...selectedList.value, key];
    }
    const nextVal = next.length > 0 ? next.join(" | ") : "None";
    modelValue.value = nextVal;
    emit("select", nextVal);
  } else {
    // Single mode: clicking active deselects to None
    const nextVal = modelValue.value === key ? "None" : key;
    modelValue.value = nextVal;
    emit("select", nextVal);
  }
}
</script>

<template>
  <div class="fil-style-picker">
    <div v-if="selectedList.length > 0" class="fil-style-selected-bar">
      <span
        v-for="s in selectedList"
        :key="s"
        class="fil-style-chip"
      >
        <span class="fil-chip-text">{{ parseName(s) }}</span>
        <button type="button" class="fil-chip-remove" title="Remove style" @click.stop="removeStyle(s)">×</button>
      </span>
    </div>

    <div class="fil-style-cats">
      <button
        type="button"
        class="fil-style-cat"
        :class="{ active: activeCategory === ALL }"
        @click="activeCategory = ALL"
      >
        {{ t('fsp_all_categories', 'All') }}
      </button>
      <button
        v-for="c in categories"
        :key="c"
        type="button"
        class="fil-style-cat"
        :class="{ active: activeCategory === c }"
        @click="activeCategory = c"
      >
        {{ c }}
      </button>
    </div>
    <div class="fil-style-search-wrap">
      <input
        v-model="query"
        type="search"
        class="fil-style-search"
        :placeholder="t('fsp_search_placeholder', 'Search styles…')"
        :aria-label="t('fsp_search_aria', 'Search styles')"
        spellcheck="false"
      />
      <button
        v-if="query.trim().length > 0"
        type="button"
        class="fil-style-search-clear"
        :title="t('fsp_clear_search', 'Clear search')"
        @click="query = ''"
      >
        ×
      </button>
    </div>
    <div class="fil-style-grid">
      <button
        v-for="s in filtered"
        :key="s"
        type="button"
        class="fil-style-tile"
        :class="{ active: isSelected(s) }"
        :title="s"
        @click="select(s)"
      >
        <span class="fil-style-tile-preview">
          <img v-if="previewFor(s)" :src="previewFor(s)" class="fil-style-tile-img" alt="" />
          <span v-else class="fil-style-tile-placeholder">{{ parseName(s).split(' ')[0] }}</span>
        </span>
        <span class="fil-style-tile-label">{{ parseName(s) }}</span>
      </button>
      <div v-if="filtered.length === 0" class="fil-style-empty">No matches</div>
    </div>
  </div>
</template>

<style scoped>
.fil-style-picker {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fil-style-cats {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.fil-style-cat {
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid var(--fil-muted, rgba(255, 255, 255, 0.2));
  background: rgba(255, 255, 255, 0.04);
  color: var(--fil-text, rgba(255, 255, 255, 0.8));
  font-size: 11px;
  cursor: pointer;
  user-select: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
}
.fil-style-cat:hover {
  border-color: var(--fil-accent);
}
.fil-style-cat.active {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
  color: var(--fil-accent-ink, #fff);
  font-weight: 500;
}
.fil-style-cat:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-style-search-wrap {
  position: relative;
  width: 100%;
}
.fil-style-search {
  box-sizing: border-box;
  width: 100%;
  padding: 7px 28px 7px 10px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  color: var(--fil-text, #ddd);
  font-family: inherit;
  font-size: 12px;
  outline: none;
}
.fil-style-search:focus {
  border-color: var(--fil-accent);
}
.fil-style-search-clear {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #bbb;
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-style-search-clear:hover {
  background: rgba(255, 75, 75, 0.3);
  color: var(--fil-danger, #ff6b6b);
}
.fil-style-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 8px;
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 2px;
}
.fil-style-tile {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 6px;
  border-radius: 8px;
  border: 1px solid var(--fil-muted, rgba(255, 255, 255, 0.14));
  background: var(--fil-panel-alt, #1d1d1d);
  color: var(--fil-text, #ccc);
  cursor: pointer;
  user-select: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
}
.fil-style-tile:hover {
  border-color: var(--fil-accent);
  color: var(--fil-text, #fff);
}
.fil-style-tile.active {
  border-color: var(--fil-accent);
  background: color-mix(in srgb, var(--fil-accent) 14%, transparent);
}
.fil-style-tile:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-style-tile-preview {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 22px;
}
.fil-style-tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fil-style-tile-label {
  font-size: 10px;
  text-align: center;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.fil-style-empty {
  grid-column: 1 / -1;
  padding: 20px;
  text-align: center;
  color: var(--fil-muted, #666);
  font-size: 12px;
}

.fil-style-selected-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--fil-accent, #00f0ff) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--fil-accent, #00f0ff) 20%, transparent);
}
.fil-style-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--fil-accent, #00f0ff);
  color: var(--fil-accent-ink, #12151a);
  font-size: 11px;
  font-weight: 600;
}
.fil-chip-text {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fil-chip-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: var(--fil-accent-ink, #12151a);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: background 0.08s, color 0.08s;
}
.fil-chip-remove:hover {
  background: var(--fil-danger, #ff4b4b);
  color: #ffffff;
}
</style>
