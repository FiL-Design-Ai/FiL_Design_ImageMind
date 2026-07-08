<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import FilButton from "@/components/widgets/FilButton.vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import { PROVIDER_LABEL, PROVIDER_ICON } from "@/composables/providerMeta";

const store = useProviderStore();

const editing = ref<Record<string, { key: string; base_url: string; account_id: string }>>({});

const probing = ref<Record<string, boolean>>({});
const probedOk = ref<Record<string, boolean>>({});
const loadingModels = ref<Record<string, boolean>>({});

onMounted(async () => {
  await Promise.all([store.loadAccounts(), store.loadDisplayNames()]);
  for (const pid of PROVIDER_LIST) {
    const acct = store.accounts[pid];
    editing.value[pid] = {
      // Stored keys are never echoed back by GET /fil_llm/auth (write-only
      // by the security contract) — the field always starts empty and the
      // `configured` flag drives the "a key is saved" UI state instead.
      key: "",
      base_url: acct?.base_url ?? "",
      account_id: acct?.account_id ?? "",
    };
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

async function doLoadModels(pid: string) {
  loadingModels.value[pid] = true;
  try {
    await store.loadModels(pid, true);
  } finally {
    loadingModels.value[pid] = false;
  }
}

const hasChanges = (pid: string) => {
  const ed = editing.value[pid];
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
    >
      <div class="fil-pm-header">
        <span class="fil-pm-icon"><FilIcon :name="providerIconMap[pid]" :size="20" /></span>
        <span class="fil-pm-name">{{ providerLabel[pid] }}</span>
        <span v-if="store.displayNames[pid]" class="fil-pm-disp">({{ store.displayNames[pid] }})</span>
      </div>

      <div class="fil-pm-fields">
        <label class="fil-pm-field">
          <span class="fil-pm-field-label">API Key</span>
          <input
            v-model="editing[pid].key"
            type="password"
            class="fil-pm-input"
            :class="fieldClass(editing[pid].key)"
            :placeholder="store.accounts[pid]?.configured ? '•••••••• (saved)' : 'sk-...'"
            @keydown.enter="doSave(pid)"
          />
        </label>

        <label class="fil-pm-field">
          <span class="fil-pm-field-label">Base URL</span>
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
          <span class="fil-pm-field-label">Account ID</span>
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
          :label="hasChanges(pid) ? 'Save' : 'Saved'"
          :disabled="!hasChanges(pid)"
          @click="doSave(pid)"
        />
        <span v-if="!hasChanges(pid) && store.cachedAgeLabel(pid)" class="fil-pm-age">
          {{ store.cachedAgeLabel(pid) }} ago
        </span>
        <FilButton
          variant="danger"
          label="Delete"
          :disabled="!store.accounts[pid]?.configured && !store.accounts[pid]?.base_url"
          @click="doDelete(pid)"
        />
        <FilButton
          variant="standard"
          label="Probe"
          :loading="probing[pid]"
          :flashing="probedOk[pid]"
          :disabled="!store.accounts[pid]?.local && !store.accounts[pid]?.configured && !editing[pid].key && !editing[pid].base_url"
          @click="doProbe(pid)"
        />
        <FilButton
          variant="standard"
          label="Load Models"
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
          <span v-if="store.visionModelsFor(pid).includes(m)" class="fil-pm-vision-badge" title="Vision-capable">👁</span>
        </span>
      </div>

      <div v-if="store.lastError" class="fil-pm-err fil-pm-global-err">
        {{ store.lastError }}
      </div>
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
}
.fil-pm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.fil-pm-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: var(--fil-accent, #7c5cfc);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  font-family: ui-monospace, monospace;
}
.fil-pm-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--fil-text, #f2f2f2);
}
.fil-pm-disp {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
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
.fil-pm-field-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.5);
}
.fil-pm-input {
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  padding: 7px 8px;
  color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, monospace;
  font-size: 13px;
  outline: none;
  transition: border-color 0.08s;
}
.fil-pm-input:focus {
  border-color: var(--fil-accent);
}
.fil-pm-input.fil-pm-has-val {
  border-color: var(--fil-muted, #555);
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
  background: rgba(255, 255, 255, 0.07);
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
  color: var(--fil-danger, #ef6666);
  margin-top: 4px;
}
.fil-pm-age {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  align-self: center;
}
</style>
