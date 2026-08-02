<script setup lang="ts">
/**
 * The model picker for FiLProviderLoader, on the shared `FilBrowser` frame.
 *
 * What changed from the fixed-width dialog it replaces, and why:
 *
 *   - The provider tabs and the three rows of segmented filters moved into the
 *     left column, each row carrying a COUNT. Before, narrowing OpenRouter's
 *     367 models to free vision ones meant reading three separate controls and
 *     finding out how many were left only afterwards.
 *
 *   - Search ranks instead of filtering. `gpt-4o` used to sit below every
 *     longer name containing it, because a substring filter keeps the
 *     provider's own order.
 *
 *   - Recently used is a filter of its own. Favourites answer "the four I
 *     always use"; nothing answered "the one I tried twenty minutes ago".
 *
 * The picker still owns everything about providers, tiers and vision flags —
 * the browser knows none of it. It is handed `BrowserItem[]` and reports the
 * id that was picked.
 */
import { computed, ref, watch } from "vue";
import FilBrowser from "@/components/widgets/FilBrowser.vue";
import FilBrowserSidebar from "@/components/widgets/FilBrowserSidebar.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import { isFavourite, toggleFavourite, favouriteCountFor } from "@/stores/modelFavourites";
import { noteRecent, recentCountFor, recentsFor } from "@/stores/browserRecents";
import { PROVIDER_LABEL, PROVIDER_ICON } from "@/composables/providerMeta";
import { rankItems, type SearchField } from "@/lib/browserSearch";
import type { BrowserItem, BrowserSidebarSection, BrowserTag } from "@/lib/browserTypes";
import { useI18n } from "@/composables/useI18n";
import { toast } from "@/stores/toastStore";

const props = withDefaults(
  defineProps<{
    open: boolean;
    provider: string;
    model: string;
  }>(),
  { open: false, provider: "ollama", model: "" },
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

/**
 * Reads go through this, not bare `localStorage`. These run at module scope,
 * and `localStorage` is not guaranteed to exist — a blocked-storage profile, a
 * `file://` origin or an opaque one leaves it undefined or makes the getter
 * throw, and an unguarded read there takes the whole picker down on import.
 */
function recall(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function remember(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // quota, or a profile that forbids writes
  }
}

const STORAGE_KEY_VIEW = "fil_model_picker_view_mode";
const STORAGE_KEY_TYPE = "fil_model_picker_type_filter";
const STORAGE_KEY_TIER = "fil_model_picker_tier_filter";
const STORAGE_KEY_ONLY = "fil_model_picker_only_filter";

type TypeFilter = "all" | "vision" | "text";
type TierFilter = "all" | "free" | "paid" | "local";
type OnlyFilter = "all" | "fav" | "recent";

// The filters survive closing the picker, the way the view mode already did:
// somebody who narrowed 367 models to free vision ones should not redo it on
// every visit.
const typeFilter = ref<TypeFilter>((recall(STORAGE_KEY_TYPE) as TypeFilter) || "all");
const tierFilter = ref<TierFilter>((recall(STORAGE_KEY_TIER) as TierFilter) || "all");
const onlyFilter = ref<OnlyFilter>((recall(STORAGE_KEY_ONLY) as OnlyFilter) || "all");
const viewMode = ref<"list" | "grid">((recall(STORAGE_KEY_VIEW) as "list" | "grid") || "list");

watch(typeFilter, (v) => remember(STORAGE_KEY_TYPE, v));
watch(tierFilter, (v) => remember(STORAGE_KEY_TIER, v));
watch(onlyFilter, (v) => remember(STORAGE_KEY_ONLY, v));
watch(viewMode, (v) => remember(STORAGE_KEY_VIEW, v));

/** Where this provider's recents are kept — the same id under two providers is
 *  two different things, the rule `modelFavourites` already follows. */
const recentScope = computed(() => `models:${selectedProvider.value}`);

// ── the provider's list ──────────────────────────────────────────────────────

const currentModels = computed(() => store.modelsFor(selectedProvider.value));
const visionModels = computed(() => store.visionModelsFor(selectedProvider.value));
const isLoading = computed(() => store.isLoading(selectedProvider.value));
const probe = computed(() => store.probeState[selectedProvider.value]);
const ageLabel = computed(() => store.cachedAgeLabel(selectedProvider.value, t));

const isLocalProvider = computed(
  () => selectedProvider.value === "ollama" || selectedProvider.value === "lmstudio",
);

function getTier(m: string, p: string): "local" | "free" | "paid" {
  if (p === "ollama" || p === "lmstudio") return "local";
  if (m.toLowerCase().includes(":free")) return "free";
  return "paid";
}

/**
 * A Set, not `visionModels.includes(m)`.
 *
 * This is asked once per model while filtering and twice more for every row
 * that renders, so a linear scan made the whole thing quadratic: OpenRouter
 * lists 367 models, and each keystroke walked the vision list about a thousand
 * times over. Rebuilt only when the provider's list is replaced.
 */
const visionSet = computed(() => new Set(visionModels.value));
const isVision = (m: string) => visionSet.value.has(m);

// `isFavourite` reads a module-level ref, so calling it from a computed is
// enough for Vue to track it — a toggle replaces the Set and everything that
// read it re-evaluates.
const starred = (m: string) => isFavourite(selectedProvider.value, m);

// ── filters ──────────────────────────────────────────────────────────────────

/** Everything except the axis being counted, so each row's number answers
 *  "how many would be left if I clicked this" rather than "how many exist". */
function passes(m: string, skip: "type" | "tier" | "only" | null): boolean {
  const p = selectedProvider.value;
  if (skip !== "type" && typeFilter.value !== "all") {
    if (typeFilter.value === "vision" ? !isVision(m) : isVision(m)) return false;
  }
  if (skip !== "tier" && tierFilter.value !== "all" && getTier(m, p) !== tierFilter.value) return false;
  if (skip !== "only" && onlyFilter.value !== "all") {
    if (onlyFilter.value === "fav" ? !starred(m) : !recentsFor(recentScope.value).includes(m)) return false;
  }
  return true;
}

const SEARCH_FIELDS: SearchField<BrowserItem>[] = [{ weight: 100, read: (item) => item.id }];

function tagsFor(m: string): BrowserTag[] {
  const tier = getTier(m, selectedProvider.value);
  return [
    isVision(m)
      ? { label: t("pmp_tag_vision", "Vision"), tone: "accent" as const }
      : { label: t("pmp_tag_text", "Text"), tone: "neutral" as const },
    {
      label:
        tier === "local"
          ? t("pmp_tag_local", "Local")
          : tier === "free"
            ? t("pmp_tag_free", "Free")
            : t("pmp_tag_paid", "Paid"),
      tone: tier === "free" ? ("ok" as const) : ("neutral" as const),
    },
  ];
}

function toItem(m: string): BrowserItem {
  return { id: m, label: m, title: m, icon: isVision(m) ? "👁" : "📝", tags: tagsFor(m) };
}

/** Filtered, then ranked. Built once — mapping to items, back to ids and to
 *  items again ran `tagsFor` twice per model on every keystroke. */
const browserItems = computed<BrowserItem[]>(() => {
  const items = currentModels.value.filter((m) => passes(m, null)).map(toItem);
  return rankItems(items, searchQuery.value, SEARCH_FIELDS);
});

// ── the left column ──────────────────────────────────────────────────────────

const countIf = (skip: "type" | "tier" | "only", test: (m: string) => boolean) =>
  currentModels.value.filter((m) => passes(m, skip) && test(m)).length;

const sidebarSections = computed<BrowserSidebarSection[]>(() => {
  const models = currentModels.value;
  const scope = recentScope.value;

  const sections: BrowserSidebarSection[] = [
    {
      id: "providers",
      heading: t("pmp_group_provider", "Provider"),
      rows: PROVIDER_LIST.map((p) => ({
        id: `provider:${p}`,
        label: PROVIDER_LABEL[p] ?? p,
        iconName: PROVIDER_ICON[p],
        // No number while a provider has never been opened: a bare 0 there
        // reads as "this one is empty" rather than "not loaded yet".
        count: store.modelsFor(p).length || null,
      })),
    },
    {
      id: "only",
      heading: t("pmp_group_show", "Show"),
      rows: [
        { id: "only:all", label: t("pmp_only_all", "All models"), count: countIf("only", () => true) },
        {
          id: "only:fav",
          label: t("pmp_only_fav", "Favourites"),
          icon: "⭐",
          count: favouriteCountFor(selectedProvider.value, models),
        },
        {
          id: "only:recent",
          label: t("pmp_only_recent", "Recently used"),
          icon: "🕐",
          count: recentCountFor(scope, models),
        },
      ],
    },
    {
      id: "type",
      heading: t("pmp_group_type", "Type"),
      rows: [
        { id: "type:all", label: t("pmp_all_types", "All types"), count: countIf("type", () => true) },
        { id: "type:vision", label: t("pmp_type_vision", "Vision"), icon: "👁", count: countIf("type", isVision) },
        { id: "type:text", label: t("pmp_type_text", "Text"), icon: "📝", count: countIf("type", (m) => !isVision(m)) },
      ],
    },
  ];

  // Local providers only ever have local models, so free/paid would be two
  // rows that always read 0.
  const tierRows = isLocalProvider.value
    ? [{ id: "tier:local", label: t("pmp_tier_local", "Local"), icon: "💻", count: models.length }]
    : [
        { id: "tier:free", label: t("pmp_tier_free", "Free"), icon: "🆓", count: countIf("tier", (m) => getTier(m, selectedProvider.value) === "free") },
        { id: "tier:paid", label: t("pmp_tier_paid", "Paid"), icon: "💎", count: countIf("tier", (m) => getTier(m, selectedProvider.value) === "paid") },
      ];
  sections.push({
    id: "tier",
    heading: t("pmp_group_tier", "Tier"),
    rows: [
      { id: "tier:all", label: t("pmp_all_tiers", "All tiers"), count: countIf("tier", () => true) },
      ...tierRows,
    ],
  });

  return sections;
});

/** Four axes are in force at once, which is why the sidebar takes a list. */
const activeRows = computed(() => [
  `provider:${selectedProvider.value}`,
  `only:${onlyFilter.value}`,
  `type:${typeFilter.value}`,
  `tier:${tierFilter.value}`,
]);

function onSidebarPick(id: string) {
  const [group, value] = [id.slice(0, id.indexOf(":")), id.slice(id.indexOf(":") + 1)];
  if (group === "provider") {
    switchProvider(value);
    return;
  }
  // Clicking the row that is already on turns it back off, so a facet never
  // needs its own "All" to be hunted for.
  if (group === "only") onlyFilter.value = onlyFilter.value === value ? "all" : (value as OnlyFilter);
  else if (group === "type") typeFilter.value = typeFilter.value === value ? "all" : (value as TypeFilter);
  else if (group === "tier") tierFilter.value = tierFilter.value === value ? "all" : (value as TierFilter);
}

// ── provider switching and loading ───────────────────────────────────────────

async function loadCurrentProviderModels(force = false) {
  try {
    await store.loadModels(selectedProvider.value, force);
  } catch (err) {
    toast.error(err instanceof Error ? err.message : String(err));
  }
}

function switchProvider(p: string) {
  if (p === selectedProvider.value) return;
  selectedProvider.value = p;
  searchQuery.value = "";
  // Drop a tier the new provider cannot have — a kept "free" on Ollama filters
  // the list down to nothing and looks like a broken provider.
  if (isLocalProvider.value) {
    if (tierFilter.value === "free" || tierFilter.value === "paid") tierFilter.value = "all";
  } else if (tierFilter.value === "local") {
    tierFilter.value = "all";
  }
  selectedModel.value = store.modelsFor(p)[0] ?? "";
  void loadCurrentProviderModels();
}

watch(
  () => props.open,
  (isOpen) => {
    if (!isOpen) return;
    selectedProvider.value = props.provider || "ollama";
    selectedModel.value = props.model || "";
    // Search is per-visit: a leftover query silently hiding every model is
    // worse than retyping it. The sidebar filters are visible on screen, so
    // they can safely persist.
    searchQuery.value = "";
    if (isLocalProvider.value && (tierFilter.value === "free" || tierFilter.value === "paid")) {
      tierFilter.value = "all";
    }
    if (!isLocalProvider.value && tierFilter.value === "local") tierFilter.value = "all";
    void loadCurrentProviderModels();
  },
);

// ── the right-hand pane ──────────────────────────────────────────────────────

const detailTags = computed(() => (selectedModel.value ? tagsFor(selectedModel.value) : []));

async function copyModelId() {
  const id = selectedModel.value;
  if (!id) return;
  // `navigator.clipboard` needs a SECURE context, and ComfyUI is very often
  // reached over plain http on a LAN address where the whole API is simply
  // absent — so the textarea trick is the fallback rather than an afterthought.
  try {
    await navigator.clipboard.writeText(id);
    toast.success(t("pmp_copied", "Copied"));
    return;
  } catch {
    // no secure context, or permission refused
  }
  const ta = document.createElement("textarea");
  ta.value = id;
  ta.style.cssText = "position:fixed;top:-1000px;left:-1000px;";
  document.body.append(ta);
  ta.select();
  let ok: boolean;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  ta.remove();
  toast[ok ? "success" : "warning"](ok ? t("pmp_copied", "Copied") : id);
}

// ── the window ───────────────────────────────────────────────────────────────

const isOpen = computed({
  get: () => props.open,
  set: (v: boolean) => emit("update:open", v),
});

const countText = computed(() => {
  const shown = browserItems.value.length;
  const total = currentModels.value.length;
  const noun = tPlural("prov_models", shown, "model", "models", "models");
  return shown === total ? `${total} ${noun}` : `${shown} / ${total} ${noun}`;
});

function toggleStar(m: string) {
  toggleFavourite(selectedProvider.value, m);
}

function confirmSelection(id?: string) {
  const model = id || selectedModel.value;
  if (!model) return;
  selectedModel.value = model;
  noteRecent(recentScope.value, model);
  emit("select", { provider: selectedProvider.value, model });
  emit("update:open", false);
}
</script>

<template>
  <FilBrowser
    v-model:open="isOpen"
    v-model:query="searchQuery"
    v-model:selected="selectedModel"
    v-model:view="viewMode"
    :title="t('pmp_title', '🔌 Provider & model')"
    storage-key="fil_model_picker_rect"
    :items="browserItems"
    :count-text="countText"
    :search-placeholder="t('pmp_search', 'Search models…')"
    :search-title="t('pmp_search_tt', 'Ranks by how well the name matches, best first')"
    :empty-text="t('pmp_no_match', 'No models match these filters.')"
    :loading="isLoading"
    :loading-text="t('pmp_loading_provider', 'Loading models from provider…')"
    starrable
    :is-starred="starred"
    :pref-width="1060"
    @star="toggleStar"
    @confirm="confirmSelection"
  >
    <template #sidebar>
      <FilBrowserSidebar :sections="sidebarSections" :active="activeRows" @select="onSidebarPick" />
    </template>

    <template #toolbar>
      <span class="pmp-status">
        <span v-if="isLoading" class="pmp-badge loading">⏳ {{ t('pmp_loading', 'Loading…') }}</span>
        <span v-else-if="probe && probe.status && probe.status !== 'available'" class="pmp-badge error">
          ⚠️ {{ probe.message || probe.status }}
        </span>
        <span v-else class="pmp-badge online">● {{ t('pmp_online', 'Online') }}</span>
        <span v-if="ageLabel" class="pmp-age">{{ ageLabel }}</span>
      </span>
      <FilButton
        variant="sm"
        :label="t('pmp_refresh', '↻ Refresh')"
        :loading="isLoading"
        :title="t('tt_refresh', 'Reload models list')"
        @click="loadCurrentProviderModels(true)"
      />
    </template>

    <template #detail>
      <div v-if="!selectedModel" class="pmp-det-empty">
        {{ t('pmp_pick_to_see', 'Pick a model to see what it is.') }}
      </div>
      <div v-else class="pmp-det">
        <div class="pmp-det-provider">{{ PROVIDER_LABEL[selectedProvider] ?? selectedProvider }}</div>
        <!-- The full id, wrapped rather than clipped: this is the one place it
             has to be readable in full, and model names run very long. -->
        <div class="pmp-det-id">{{ selectedModel }}</div>
        <div class="pmp-det-tags">
          <span v-for="tag in detailTags" :key="tag.label" class="pmp-det-tag" :class="tag.tone">{{ tag.label }}</span>
        </div>
        <div class="pmp-det-acts">
          <FilButton
            variant="sm"
            :label="starred(selectedModel) ? t('pmp_unstar', '★ Remove from favourites') : t('pmp_star', '☆ Add to favourites')"
            @click="toggleStar(selectedModel)"
          />
          <FilButton variant="sm" :label="t('pmp_copy_id', '⧉ Copy id')" @click="copyModelId" />
        </div>
      </div>
    </template>

    <template #footer>
      <FilButton
        :label="t('pmp_cancel', 'Cancel')"
        :title="t('pmp_cancel_tt', 'Close without changing the model')"
        @click="isOpen = false"
      />
      <FilButton
        variant="accent"
        :label="t('pmp_apply', '✔ Use this model')"
        :title="t('pmp_apply_tt', 'Use the selected model')"
        :disabled="!selectedModel"
        @click="confirmSelection()"
      />
    </template>
  </FilBrowser>
</template>

<style scoped>
.pmp-status {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-size: 11px;
  white-space: nowrap;
}
.pmp-badge.online {
  color: var(--fil-ok);
}
.pmp-badge.loading {
  color: var(--fil-accent-text);
}
.pmp-badge.error {
  color: var(--fil-danger);
  max-width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pmp-age {
  color: var(--fil-muted);
  font-size: 10px;
}

.pmp-det-empty {
  color: var(--fil-muted);
  font-size: 12px;
  text-align: center;
  padding-top: 24px;
}
.pmp-det {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pmp-det-provider {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fil-muted);
}
.pmp-det-id {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--fil-text);
  overflow-wrap: anywhere;
}
.pmp-det-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.pmp-det-tag {
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--fil-pill-bg);
  color: var(--fil-muted);
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
}
.pmp-det-tag.accent {
  background: color-mix(in srgb, var(--fil-accent) 18%, transparent);
  color: var(--fil-accent-text);
}
.pmp-det-tag.ok {
  background: color-mix(in srgb, var(--fil-ok) 18%, transparent);
  color: var(--fil-ok);
}
.pmp-det-acts {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 2px;
}
</style>
