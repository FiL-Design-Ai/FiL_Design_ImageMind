<script setup lang="ts">
import { computed, ref, watch } from "vue";
import FilModal from "@/components/widgets/FilModal.vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import FilInfo from "@/components/widgets/FilInfo.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import { isFavourite, toggleFavourite, favouriteCountFor } from "@/stores/modelFavourites";
import { PROVIDER_LABEL, PROVIDER_ICON } from "@/composables/providerMeta";
import { useI18n } from "@/composables/useI18n";
import { toast } from "@/stores/toastStore";

const props = withDefaults(
  defineProps<{
    open: boolean;
    provider: string;
    model: string;
  }>(),
  { open: false, provider: "ollama", model: "" }
);

const emit = defineEmits<{
  "update:open": [value: boolean];
  select: [payload: { provider: string; model: string }];
}>();

const store = useProviderStore();
const { t, tPlural } = useI18n();

const selectedProvider = ref<string>(props.provider);
const selectedModel = ref<string>(props.model);
const searchQuery = ref<string>("");

// Reads go through `recall`, not bare `localStorage`. These run at module
// scope, and `localStorage` is not guaranteed to exist — a blocked-storage
// browser profile, a file:// origin or an opaque one leaves it undefined or
// makes the getter throw, and an unguarded read there takes the whole picker
// module down on import. Writes were already wrapped; reads were not.
function recall(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

const typeFilter = ref<"all" | "vision" | "text">(
  (recall("fil_model_picker_type_filter") as "all" | "vision" | "text") || "all"
);
const tierFilter = ref<"all" | "free" | "paid" | "local">(
  (recall("fil_model_picker_tier_filter") as "all" | "free" | "paid" | "local") || "all"
);

const STORAGE_KEY_VIEW = "fil_model_picker_view_mode";
const STORAGE_KEY_TYPE = "fil_model_picker_type_filter";
const STORAGE_KEY_TIER = "fil_model_picker_tier_filter";
const STORAGE_KEY_FAV_ONLY = "fil_model_picker_fav_only";
const favOnly = ref<boolean>(recall(STORAGE_KEY_FAV_ONLY) === "1");
const viewMode = ref<"list" | "grid">((recall(STORAGE_KEY_VIEW) as "list" | "grid") || "list");

function remember(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage quota/security restriction
  }
}

function setViewMode(mode: "list" | "grid") {
  viewMode.value = mode;
  remember(STORAGE_KEY_VIEW, mode);
}

// The filters survive closing the picker, the way the view mode already did.
// They used to be wiped on every open, so a user who narrowed the 367-model
// OpenRouter list to free vision models had to redo it each time.
watch(typeFilter, (v) => remember(STORAGE_KEY_TYPE, v));
watch(tierFilter, (v) => remember(STORAGE_KEY_TIER, v));
watch(favOnly, (v) => remember(STORAGE_KEY_FAV_ONLY, v ? "1" : "0"));

// Filter option sets + labels for the FilSegmented controls. Tier options are
// provider-dependent: local providers (ollama/lmstudio) only ever have "local"
// models, remote ones split into free/paid.
const TYPE_OPTIONS = ["all", "vision", "text"] as const;
const TYPE_LABELS = computed<Record<string, string>>(() => ({
  all: t("pmp_all_types", "All Types"),
  vision: t("pmp_tag_vision_opt", "👁 Vision"),
  text: t("pmp_tag_text_opt", "📝 Text"),
}));
const TIER_LABELS = computed<Record<string, string>>(() => ({
  all: t("pmp_all_tiers", "All Tiers"),
  local: t("pmp_tier_local", "💻 Local"),
  free: t("pmp_tier_free", "🆓 Free"),
  paid: t("pmp_tier_paid", "💎 Paid"),
}));
const VIEW_OPTIONS = ["list", "grid"] as const;
const VIEW_LABELS = computed<Record<string, string>>(() => ({
  list: t("pmp_view_list", "☰ List"),
  grid: t("pmp_view_grid", "⊞ Tiles"),
}));

const tierOptions = computed<string[]>(() =>
  selectedProvider.value === "ollama" || selectedProvider.value === "lmstudio"
    ? ["all", "local"]
    : ["all", "free", "paid"]
);

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      selectedProvider.value = props.provider || "ollama";
      selectedModel.value = props.model || "";
      // Search is per-visit — a leftover query silently hiding every model is
      // worse than retyping it. The segmented filters are visible on screen,
      // so they can safely persist.
      searchQuery.value = "";
      if (!tierOptions.value.includes(tierFilter.value)) tierFilter.value = "all";
      void loadCurrentProviderModels();
    }
  }
);

async function loadCurrentProviderModels(force = false) {
  try {
    await store.loadModels(selectedProvider.value, force);
  } catch (err) {
    toast.error(err instanceof Error ? err.message : String(err));
  }
}

function switchProvider(p: string) {
  selectedProvider.value = p;
  searchQuery.value = "";
  // Drop the tier only when the new provider has no such tier — local
  // providers offer "local" and nothing else, so a kept "free" would filter
  // the list down to nothing. A tier that still exists is left alone.
  if (!tierOptions.value.includes(tierFilter.value)) tierFilter.value = "all";
  const models = store.modelsFor(p);
  if (models.length > 0) {
    selectedModel.value = models[0];
  } else {
    selectedModel.value = "";
  }
  void loadCurrentProviderModels();
}

const currentModels = computed(() => store.modelsFor(selectedProvider.value));
const visionModels = computed(() => store.visionModelsFor(selectedProvider.value));
const isLoading = computed(() => store.isLoading(selectedProvider.value));
const probe = computed(() => store.probeState[selectedProvider.value]);
const ageLabel = computed(() => store.cachedAgeLabel(selectedProvider.value, t));

function getTier(m: string, p: string): "local" | "free" | "paid" {
  if (p === "ollama" || p === "lmstudio") return "local";
  if (m.toLowerCase().includes(":free")) return "free";
  return "paid";
}

function isVision(m: string): boolean {
  return visionModels.value.includes(m);
}

// `isFavourite` reads a module-level ref, so calling it from the template is
// enough for Vue to track it — a toggle replaces the Set and everything that
// read it re-renders. No manual invalidation needed.
function starred(m: string): boolean {
  return isFavourite(selectedProvider.value, m);
}
function toggleStar(m: string) {
  toggleFavourite(selectedProvider.value, m);
}
const favCount = computed(() => favouriteCountFor(selectedProvider.value, currentModels.value));

const filteredModels = computed(() => {
  let list = currentModels.value;
  const q = searchQuery.value.trim().toLowerCase();
  const p = selectedProvider.value;

  if (q) {
    list = list.filter((m) => m.toLowerCase().includes(q));
  }

  if (typeFilter.value === "vision") {
    list = list.filter((m) => isVision(m));
  } else if (typeFilter.value === "text") {
    list = list.filter((m) => !isVision(m));
  }

  if (tierFilter.value !== "all") {
    list = list.filter((m) => getTier(m, p) === tierFilter.value);
  }

  if (favOnly.value) {
    list = list.filter((m) => isFavourite(p, m));
  }

  return list;
});

function pickModel(m: string) {
  selectedModel.value = m;
}

function confirmSelection() {
  if (!selectedModel.value) return;
  emit("select", { provider: selectedProvider.value, model: selectedModel.value });
  emit("update:open", false);
}

function closeModal() {
  emit("update:open", false);
}
</script>

<template>
  <FilModal
    :open="open"
    width="860px"
    :title="t('pmp_title', '🔌 Choose Provider &amp; Model')"
    @update:open="(v) => emit('update:open', v)"
    @close="closeModal"
  >
    <div class="picker-container">
      <!-- Provider Tabs -->
      <div class="provider-tabs">
        <button
          v-for="p in PROVIDER_LIST"
          :key="p"
          type="button"
          class="tab-btn"
          :class="{ active: p === selectedProvider }"
          @click="switchProvider(p)"
        >
          <FilIcon :name="PROVIDER_ICON[p]" :size="18" />
          <span class="tab-label">{{ PROVIDER_LABEL[p] ?? p }}</span>
          <span v-if="store.modelsFor(p).length" class="tab-badge">
            {{ store.modelsFor(p).length }}
          </span>
        </button>
      </div>

      <!-- Provider Header Status -->
      <div class="provider-status-bar">
        <div class="status-info">
          <span class="provider-name">{{ PROVIDER_LABEL[selectedProvider] ?? selectedProvider }}</span>
          <span v-if="isLoading" class="status-badge loading">⏳ {{ t('pmp_loading', 'Loading...') }}</span>
          <span v-else-if="probe && probe.status && probe.status !== 'available'" class="status-badge error">
            ⚠️ {{ probe.message || probe.status }}
          </span>
          <span v-else class="status-badge online">
            ● {{ t('pmp_online', 'Online') }} ({{ currentModels.length }} {{ tPlural('prov_models', currentModels.length, 'model', 'models', 'models') }})
          </span>
          <span v-if="ageLabel" class="age-label">{{ t('pmp_updated', 'Updated') }}: {{ ageLabel }}</span>
        </div>
        <FilButton
          variant="sm"
          :label="t('pmp_refresh', '↻ Refresh')"
          :loading="isLoading"
          :title="t('tt_refresh', 'Reload models list')"
          @click="loadCurrentProviderModels(true)"
        />
      </div>

      <!-- Controls & Filters -->
      <div class="filter-controls">
        <div class="search-row">
        <div class="search-input-wrap">
          <FilIcon name="search" :size="14" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            :placeholder="t('pmp_search', 'Search models...')"
          />
          <button
            v-if="searchQuery"
            type="button"
            class="clear-search"
            :title="t('tt_clear_search', 'Clear search')"
            @click="searchQuery = ''"
          >✕</button>
        </div>

        <!-- Favourites is a toggle, not a fourth segmented row: it is
             orthogonal to type and tier, and the three existing rows already
             fill the width. -->
        <button
          type="button"
          class="fav-filter"
          :class="{ active: favOnly }"
          :aria-pressed="favOnly"
          :title="t('pmp_fav_only_tt', 'Show only starred models')"
          @click="favOnly = !favOnly"
        >
          <span class="fav-filter-star">{{ favOnly ? '★' : '☆' }}</span>
          <span>{{ t('pmp_fav_only', 'Favourites') }}</span>
          <span v-if="favCount" class="fav-filter-count">{{ favCount }}</span>
        </button>
        </div>

        <div class="filter-segments">
          <FilSegmented
            :options="[...TYPE_OPTIONS]"
            :option-labels="TYPE_LABELS"
            :model-value="typeFilter"
            @update:model-value="(v: string) => (typeFilter = v as 'all' | 'vision' | 'text')"
          />
          <FilSegmented
            :options="tierOptions"
            :option-labels="TIER_LABELS"
            :model-value="tierFilter"
            @update:model-value="(v: string) => (tierFilter = v as 'all' | 'free' | 'paid' | 'local')"
          />
          <FilSegmented
            :options="[...VIEW_OPTIONS]"
            :option-labels="VIEW_LABELS"
            :model-value="viewMode"
            @update:model-value="(v: string) => setViewMode(v as 'list' | 'grid')"
          />
        </div>
      </div>

      <!-- Models List / Grid Container -->
      <div class="models-list-wrapper">
        <div v-if="isLoading && !currentModels.length" class="empty-state">
          <FilInfo :text="t('pmp_loading_provider', 'Loading models from provider...')" />
        </div>
        <div v-else-if="!filteredModels.length" class="empty-state">
          <span>{{ t('pmp_no_match', 'No models matching criteria') }}</span>
        </div>
        <div v-else :class="['models-container', viewMode]">
          <!-- A real <button>, not a clickable <div>: the card is the primary
               control in this dialog, and every other interactive element in the
               codebase is a button, so keyboard users and screen readers were
               the only ones locked out of picking a model. -->
          <!-- The star is a sibling of the card, never a child: a <button>
               inside a <button> is invalid markup, and browsers resolve it by
               dropping one of them — starring would have selected the model
               instead, or stopped working entirely. -->
          <div v-for="m in filteredModels" :key="m" class="model-row">
            <button
              type="button"
              class="model-card"
              :class="{ selected: m === selectedModel }"
              :aria-pressed="m === selectedModel"
              @click="pickModel(m)"
            >
              <div class="model-main">
                <span class="type-icon">{{ isVision(m) ? '👁' : '📝' }}</span>
                <span class="model-name" :title="m">{{ m }}</span>
              </div>
              <div class="model-tags">
                <span v-if="isVision(m)" class="tag vision">{{ t('pmp_tag_vision', 'Vision') }}</span>
                <span v-else class="tag text">{{ t('pmp_tag_text', 'Text') }}</span>

                <span v-if="getTier(m, selectedProvider) === 'local'" class="tag local">{{ t('pmp_tag_local', 'Local') }}</span>
                <span v-else-if="getTier(m, selectedProvider) === 'free'" class="tag free">{{ t('pmp_tag_free', 'Free') }}</span>
                <span v-else class="tag paid">{{ t('pmp_tag_paid', 'Paid') }}</span>
              </div>
            </button>
            <button
              type="button"
              class="fav-btn"
              :class="{ on: starred(m) }"
              :aria-pressed="starred(m)"
              :aria-label="starred(m) ? t('pmp_unstar', 'Remove from favourites') : t('pmp_star', 'Add to favourites')"
              :title="starred(m) ? t('pmp_unstar', 'Remove from favourites') : t('pmp_star', 'Add to favourites')"
              @click="toggleStar(m)"
            >{{ starred(m) ? '★' : '☆' }}</button>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="picker-footer">
        <div class="selection-summary">
          <span v-if="selectedModel">{{ t('pmp_selected', 'Selected') }}: <strong>{{ selectedModel }}</strong></span>
          <span v-else class="muted">{{ t('pmp_none_selected', 'No model selected') }}</span>
        </div>
        <div class="footer-actions">
          <FilButton :label="t('pmp_cancel', 'Cancel')" :title="t('pmp_cancel_tt', 'Close without changing the model')" @click="closeModal" />
          <FilButton
            variant="accent"
            :label="t('pmp_apply', '✔ Apply Selection')"
            :title="t('pmp_apply_tt', 'Use the selected model')"
            :disabled="!selectedModel"
            @click="confirmSelection"
          />
        </div>
      </div>
    </div>
  </FilModal>
</template>

<style scoped>
.picker-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--fil-text);
}

.provider-tabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: thin;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 8px;
  border: 1px solid var(--fil-pill-border);
  background: var(--fil-pill-bg);
  color: var(--fil-muted);
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.15s ease;
}
.tab-btn:hover {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}
.tab-btn.active {
  background: var(--fil-panel-alt);
  border-color: var(--fil-accent);
  color: var(--fil-accent-text);
  font-weight: 600;
}
.tab-badge {
  font-size: 10px;
  background: var(--fil-pill-bg);
  padding: 1px 5px;
  border-radius: 99px;
}

.provider-status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
}
.status-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.provider-name {
  font-weight: 600;
}
.status-badge {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
}
.status-badge.online {
  color: var(--fil-ok);
}
.status-badge.loading {
  color: var(--fil-accent-text);
}
.status-badge.error {
  color: var(--fil-danger);
}
.age-label {
  font-size: 10px;
  color: var(--fil-muted);
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.search-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}
.fav-filter {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  height: var(--fil-control-h);
  padding: 0 12px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}
.fav-filter:hover {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}
.fav-filter.active {
  border-color: var(--fil-accent);
  color: var(--fil-accent-text);
  font-weight: 600;
}
.fav-filter:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fav-filter-star {
  font-size: 14px;
  line-height: 1;
}
.fav-filter-count {
  font-size: 10px;
  background: var(--fil-pill-bg);
  padding: 1px 5px;
  border-radius: 99px;
}
.search-icon {
  position: absolute;
  left: 10px;
  color: var(--fil-muted);
}
.search-input {
  width: 100%;
  box-sizing: border-box;
  height: var(--fil-control-h);
  padding: 6px 30px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-text);
  font-size: 12px;
  outline: none;
}
.search-input:focus {
  border-color: var(--fil-accent);
}
.clear-search {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: var(--fil-muted);
  cursor: pointer;
}

.filter-segments {
  display: flex;
  gap: 8px;
  min-width: 0;
}
/* FilSegmented roots are width:100%; let each take an equal share of the row. */
.filter-segments > * {
  flex: 1;
  min-width: 0;
}

.models-list-wrapper {
  height: 320px;
  overflow-y: auto;
  background: var(--fil-inset);
  border-radius: 8px;
  border: 1px solid var(--fil-border);
  padding: 8px;
}
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--fil-muted);
  font-size: 12px;
}
.models-container.list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.models-container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 8px;
}
/* The row is the flex/grid item now; the card inside it takes the space the
   card itself used to. */
.model-row {
  display: flex;
  align-items: stretch;
  gap: 4px;
  min-width: 0;
}
.fav-btn {
  flex-shrink: 0;
  width: 34px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  color: var(--fil-muted);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: all 0.12s ease;
}
.fav-btn:hover {
  background: var(--fil-surface-2);
  color: var(--fil-text);
}
.fav-btn.on {
  color: var(--fil-accent-text);
  border-color: var(--fil-accent);
}
.fav-btn:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.models-container.grid .model-card {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
}
.models-container.grid .model-main {
  width: 100%;
}
.models-container.grid .model-tags {
  width: 100%;
  justify-content: flex-start;
}
.model-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  padding: 8px 12px;
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.12s ease;
  /* Button resets — the card became a real <button> for keyboard access. */
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  font: inherit;
  color: inherit;
  appearance: none;
  -webkit-appearance: none;
}
.model-card:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.model-card:hover {
  background: var(--fil-surface-2);
  border-color: var(--fil-border);
}
.model-card.selected {
  background: rgba(240, 138, 69, 0.15);
  border-color: var(--fil-accent);
}
.model-main {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.type-icon {
  font-size: 14px;
}
.model-name {
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.model-tags {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}
.tag {
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}
.tag.vision {
  background: rgba(240, 138, 69, 0.15);
  color: var(--fil-accent-text);
}
.tag.text,
.tag.local,
.tag.free,
.tag.paid {
  background: var(--fil-pill-bg);
  color: var(--fil-muted);
}

.picker-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
}
.selection-summary {
  font-size: 12px;
}
.selection-summary .muted {
  color: var(--fil-muted);
}
.footer-actions {
  display: flex;
  gap: 8px;
}
</style>
