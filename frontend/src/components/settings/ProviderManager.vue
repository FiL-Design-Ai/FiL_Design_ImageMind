<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import FilButton from "@/components/widgets/FilButton.vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import {
  PROVIDER_LABEL,
  PROVIDER_ICON,
  PROVIDER_CREDENTIAL_LINK,
  PROVIDER_ACCOUNT_LINK,
  PROVIDER_EDITS_BASE_URL,
} from "@/composables/providerMeta";
import { useI18n } from "@/composables/useI18n";

const store = useProviderStore();
const { t } = useI18n();

const editing = ref<Record<string, { key: string; base_url: string; account_id: string }>>(
  Object.fromEntries(PROVIDER_LIST.map((pid) => [pid, { key: "", base_url: "", account_id: "" }]))
);

const probing = ref<Record<string, boolean>>({});
const probedOk = ref<Record<string, boolean>>({});
const loadingModels = ref<Record<string, boolean>>({});
// Off-status cards render as a single compact row; the user expands them to
// configure. Keyed by provider id, only meaningful while status === "off".
const expanded = ref<Record<string, boolean>>({});

onMounted(async () => {
  await Promise.all([store.loadAccounts(), store.loadDisplayNames()]);
  for (const pid of PROVIDER_LIST) {
    const acct = store.accounts[pid];
    editing.value[pid] = {
      // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
      // by the security contract) — the field always starts empty and the
      // `configured` flag drives the "a key is saved" UI state instead.
      key: "",
      base_url: acct?.base_url ?? "",
      account_id: acct?.account_id ?? "",
    };
  }
  // Load the model lists of already-configured providers so the cards are
  // populated the moment the panel opens. Listing only — probing here would
  // bill a completion against every configured account on every open, and it
  // is the user's click on Probe that asks for that.
  for (const pid of PROVIDER_LIST) {
    const acct = store.accounts[pid];
    if (acct?.configured || acct?.local || acct?.base_url) void doLoadModels(pid, false);
  }
});

const providerLabel = PROVIDER_LABEL;
const providerIconMap = PROVIDER_ICON;

function fieldClass(field: string): Record<string, boolean> {
  return { "fil-pm-has-val": field.length > 0 };
}

function needsAccountId(pid: string): boolean {
  return pid === "cloudflare";
}

const credentialLink = PROVIDER_CREDENTIAL_LINK;
const accountLink = PROVIDER_ACCOUNT_LINK;

/** Local servers always; anyone else only if a custom endpoint is already
 * saved, so an existing proxy setup does not become uneditable. */
function showBaseUrl(pid: string): boolean {
  return PROVIDER_EDITS_BASE_URL.has(pid) || Boolean(store.accounts[pid]?.stored_base_url);
}

/**
 * Local servers take no API key: `fetch_models_with_status` sends an auth
 * header only for providers outside LOCAL_PROVIDERS, so anything typed in that
 * field for Ollama or LM Studio is saved and never used again.
 */
function showApiKey(pid: string): boolean {
  return !store.accounts[pid]?.local;
}

/**
 * What the API-key field should say about the key already in place.
 *
 * The backend sends a masked key (`sk-…4f2a`) plus where it came from, because
 * a key can also arrive from an environment variable or config.yaml — and a
 * panel that only said "configured" gave no way to tell which account was
 * actually answering, or that the key was not this panel's to delete.
 */
function keyState(pid: string): { kind: string; label: string; hint: string } | null {
  const acct = store.accounts[pid];
  if (!acct || acct.local) return null;
  const hint = acct.key_hint ?? "";
  switch (acct.key_source) {
    case "file":
      return { kind: "file", label: hint, hint: t("pm_key_file_hint", "Key saved in data/auth.json — Delete removes it.") };
    case "env":
      return { kind: "env", label: `${hint} · env`, hint: `Key comes from the ${acct.env_var} environment variable, not from this panel. Saving one here overrides it.` };
    case "config":
      return { kind: "env", label: `${hint} · config.yaml`, hint: `Key comes from ${acct.env_var} in config.yaml, not from this panel. Saving one here overrides it.` };
    default:
      return { kind: "none", label: t("pm_no_key", "no key"), hint: t("pm_no_key_hint", "No API key for this provider yet.") };
  }
}

function keyPlaceholder(pid: string): string {
  const state = keyState(pid);
  if (!state || state.kind === "none") return "sk-...";
  return `${state.label} — ${t("pm_type_to_replace", "type to replace")}`;
}

/**
 * Delete only removes what this panel wrote to `data/auth.json`.
 *
 * `configured` is also true for a key the shell or config.yaml supplies, and
 * the button used to go by that: it deleted nothing, the badge still read
 * `· env` afterwards, and the provider stayed configured — a control that
 * pretended to work.
 */
function hasStoredCredentials(pid: string): boolean {
  const acct = store.accounts[pid];
  if (!acct) return false;
  // `base_url` is the effective endpoint and is never empty for a local
  // provider, so `stored_base_url` is what says the user saved one.
  return acct.key_source === "file" || Boolean(acct.account_id) || Boolean(acct.stored_base_url);
}

function deleteHint(pid: string): string {
  if (hasStoredCredentials(pid)) return "Remove this provider's saved credentials from data/auth.json.";
  const source = store.accounts[pid]?.key_source;
  if (source === "env" || source === "config") {
    const where = source === "env" ? `the ${store.accounts[pid]?.env_var} environment variable` : "config.yaml";
    return `Nothing to delete here — the key comes from ${where}. Remove it there, or save your own key above to override it.`;
  }
  return "Nothing saved for this provider yet.";
}

type PmStatus = "connected" | "configured" | "off";

// Derives the header badge state. Only a successful probe counts as
// "connected", because only the probe generates: a model list proves the
// catalogue is readable and nothing more, and an OpenAI key with no billing
// lists 76 models and then refuses every completion. A saved key / local
// base_url means it's set up but unverified ("configured").
function providerStatus(pid: string): PmStatus {
  const acct = store.accounts[pid];
  if (store.probeState[pid]?.status === "available" || probedOk.value[pid]) {
    return "connected";
  }
  if (acct?.configured || acct?.local || acct?.base_url) return "configured";
  return "off";
}

// `computed`, not a plain const: useI18n fetches the locale asynchronously and
// a const evaluated once at setup would freeze the English fallbacks.
const STATUS_LABEL = computed<Record<PmStatus, string>>(() => ({
  connected: t("pm_status_connected", "Connected"),
  configured: t("pm_status_configured", "Configured"),
  off: t("pm_status_off", "Not connected"),
}));

// Only unconfigured ("off") providers collapse; a configured/connected one is
// always shown expanded regardless of the toggle.
function isCollapsed(pid: string): boolean {
  return providerStatus(pid) === "off" && !expanded.value[pid];
}

function toggleExpand(pid: string) {
  if (providerStatus(pid) !== "off") return;
  expanded.value[pid] = !expanded.value[pid];
}

async function doSave(pid: string) {
  const ed = editing.value[pid];
  await store.saveAccount(pid, {
    key: ed.key || null,
    base_url: ed.base_url || null,
    account_id: ed.account_id || null,
  });
  // Key was submitted; clear the field back to its write-only resting state.
  ed.key = "";
}

async function doDelete(pid: string) {
  editing.value[pid] = { key: "", base_url: "", account_id: "" };
  await store.deleteAccount(pid);
}

async function doProbe(pid: string) {
  probing.value[pid] = true;
  probedOk.value[pid] = false;
  try {
    const result = await store.probe(pid, "");
    // "available" is the backend's only success status
    // (common/provider_runtime.py probe_provider).
    probedOk.value[pid] = result?.status === "available";
  } finally {
    probing.value[pid] = false;
  }
}

// `force` bypasses the store's TTL: the button means "re-ask the provider",
// while the load on panel open is happy with a fresh cache.
async function doLoadModels(pid: string, force = true) {
  loadingModels.value[pid] = true;
  try {
    await store.loadModels(pid, force);
  } finally {
    loadingModels.value[pid] = false;
  }
}

const hasChanges = (pid: string) => {
  const ed = editing.value[pid];
  if (!ed) return false;
  const acct = store.accounts[pid];
  // Any typed key is a change (the saved key is never echoed back to compare
  // against); base_url/account_id compare against the returned safe metadata.
  if (ed.key !== "") return true;
  return (
    ed.base_url !== (acct?.base_url ?? "") ||
    ed.account_id !== (acct?.account_id ?? "")
  );
};
</script>

<template>
  <div class="fil-pm-root">
    <div
      v-for="pid in PROVIDER_LIST"
      :key="pid"
      class="fil-pm-card"
      :class="{ 'fil-pm-card--collapsed': isCollapsed(pid) }"
    >
      <div
        class="fil-pm-header"
        :class="{ 'fil-pm-header--clickable': providerStatus(pid) === 'off' }"
        @click="toggleExpand(pid)"
      >
        <span class="fil-pm-icon"><FilIcon :name="providerIconMap[pid]" :size="20" /></span>
        <span class="fil-pm-name">{{ providerLabel[pid] }}</span>
        <span v-if="store.displayNames[pid]" class="fil-pm-disp">({{ store.displayNames[pid] }})</span>
        <span
          class="fil-pm-status"
          :class="`fil-pm-status--${providerStatus(pid)}`"
          :title="STATUS_LABEL[providerStatus(pid)]"
        >
          <span class="fil-pm-dot" />
          {{ STATUS_LABEL[providerStatus(pid)] }}
        </span>
        <span
          v-if="providerStatus(pid) === 'off'"
          class="fil-pm-chevron"
          :class="{ 'fil-pm-chevron--open': expanded[pid] }"
        >
          <FilIcon name="chevronRight" :size="12" />
        </span>
      </div>

      <template v-if="!isCollapsed(pid)">
      <div class="fil-pm-fields">
        <label v-if="showApiKey(pid)" class="fil-pm-field">
          <span class="fil-pm-field-head">
            <span class="fil-pm-field-label">{{ t("pm_api_key", "API Key") }}</span>
            <!-- The masked key lives in the input's own placeholder; a chip
                 repeating it beside the label showed the same `AQ.…ilyg`
                 twice. Which account is in play still matters, so the source
                 moved into the field's tooltip rather than disappearing. -->
            <a
              v-if="credentialLink[pid]"
              class="fil-pm-link"
              :href="credentialLink[pid]!.url"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
            >{{ credentialLink[pid]!.label }} ↗</a>
          </span>
          <input
            v-model="editing[pid].key"
            type="password"
            class="fil-pm-input"
            :class="fieldClass(editing[pid].key)"
            :placeholder="keyPlaceholder(pid)"
            :title="keyState(pid)?.hint"
            @keydown.enter="doSave(pid)"
          />
        </label>

        <label v-if="showBaseUrl(pid)" class="fil-pm-field">
          <span class="fil-pm-field-head">
            <span class="fil-pm-field-label">{{ t("pm_base_url", "Base URL") }}</span>
            <!-- Local servers have no key field to carry their link. -->
            <a
              v-if="!showApiKey(pid) && credentialLink[pid]"
              class="fil-pm-link"
              :href="credentialLink[pid]!.url"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
            >{{ credentialLink[pid]!.label }} ↗</a>
          </span>
          <input
            v-model="editing[pid].base_url"
            type="text"
            class="fil-pm-input"
            :class="fieldClass(editing[pid].base_url)"
            placeholder="http://localhost:11434"
            @keydown.enter="doSave(pid)"
          />
        </label>

        <label v-if="needsAccountId(pid)" class="fil-pm-field">
          <span class="fil-pm-field-head">
            <span class="fil-pm-field-label">{{ t("pm_account_id", "Account ID") }}</span>
            <a
              v-if="accountLink[pid]"
              class="fil-pm-link"
              :href="accountLink[pid]!.url"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
            >{{ accountLink[pid]!.label }} ↗</a>
          </span>
          <input
            v-model="editing[pid].account_id"
            type="text"
            class="fil-pm-input"
            :class="fieldClass(editing[pid].account_id)"
            @keydown.enter="doSave(pid)"
          />
        </label>
      </div>

      <div class="fil-pm-actions">
        <FilButton
          variant="accent"
          :label="hasChanges(pid) ? t('pm_save', 'Save') : t('pm_saved', 'Saved')"
          :disabled="!hasChanges(pid)"
          @click="doSave(pid)"
        />
        <span v-if="!hasChanges(pid) && store.cachedAgeLabel(pid)" class="fil-pm-age">
          {{ store.cachedAgeLabel(pid) }} {{ t("pm_ago", "ago") }}
        </span>
        <FilButton
          variant="danger"
          :label="t('pm_delete', 'Delete')"
          :disabled="!hasStoredCredentials(pid)"
          :title="deleteHint(pid)"
          @click="doDelete(pid)"
        />
        <FilButton
          variant="standard"
          :label="t('pm_probe', 'Probe')"
          :loading="probing[pid]"
          :flashing="probedOk[pid]"
          :disabled="!store.accounts[pid]?.local && !store.accounts[pid]?.configured && !editing[pid].key && !editing[pid].base_url"
          @click="doProbe(pid)"
        />
        <FilButton
          variant="standard"
          :label="t('pm_load_models', 'Load Models')"
          :loading="loadingModels[pid]"
          @click="doLoadModels(pid)"
        />
      </div>

      <div v-if="store.modelsByProvider[pid]?.error" class="fil-pm-err">
        {{ store.modelsByProvider[pid]!.error }}
      </div>

      <div
        v-if="store.probeState[pid] && store.probeState[pid]!.status !== 'available'"
        class="fil-pm-err"
      >
        {{ store.probeState[pid]!.message }}
      </div>

      <div v-if="store.modelsFor(pid).length > 0" class="fil-pm-models">
        <span class="fil-pm-model-tag" v-for="m in store.modelsFor(pid)" :key="m">
          {{ m }}
          <span v-if="store.visionModelsFor(pid).includes(m)" class="fil-pm-vision-badge" :title="t('pm_vision_capable', 'Vision-capable')">👁</span>
        </span>
      </div>

      <div v-if="store.lastError" class="fil-pm-err fil-pm-global-err">
        {{ store.lastError }}
      </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.fil-pm-root {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 0;
}
.fil-pm-card {
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 8px;
  padding: 12px;
}
.fil-pm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.fil-pm-card--collapsed {
  padding: 8px 12px;
}
.fil-pm-card--collapsed .fil-pm-header {
  margin-bottom: 0;
}
.fil-pm-header--clickable {
  cursor: pointer;
}
.fil-pm-header--clickable:hover .fil-pm-name {
  color: var(--fil-accent-text);
}
.fil-pm-chevron {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.12s ease;
}
.fil-pm-chevron--open {
  transform: rotate(90deg);
}
.fil-pm-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
}
.fil-pm-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--fil-text);
}
.fil-pm-disp {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}
.fil-pm-status {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
}
.fil-pm-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 22%, transparent);
}
.fil-pm-status--connected {
  color: var(--fil-ok);
}
.fil-pm-status--configured {
  color: var(--fil-accent-text);
}
.fil-pm-status--off {
  color: var(--fil-muted);
}
.fil-pm-fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
}
.fil-pm-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fil-pm-field-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.fil-pm-field-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.5);
}

.fil-pm-link {
  font-size: 10px;
  letter-spacing: 0.3px;
  color: var(--fil-accent);
  text-decoration: none;
  white-space: nowrap;
}

.fil-pm-link:hover {
  text-decoration: underline;
}
.fil-pm-input {
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 7px 8px;
  color: var(--fil-text);
  font-family: ui-monospace, monospace;
  font-size: 13px;
  outline: none;
  transition: border-color 0.08s;
}
.fil-pm-input:focus {
  border-color: var(--fil-accent);
}
.fil-pm-input.fil-pm-has-val {
  border-color: var(--fil-border);
}
.fil-pm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}
.fil-pm-models {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.fil-pm-model-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: var(--fil-surface-2);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.75);
  white-space: nowrap;
}
.fil-pm-vision-badge {
  font-size: 10px;
  line-height: 1;
}
.fil-pm-err {
  font-size: 11px;
  color: var(--fil-danger);
  margin-top: 4px;
}
.fil-pm-age {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  align-self: center;
}
</style>
