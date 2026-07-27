import { describe, it, expect, beforeEach } from "vitest";
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ProviderManager from "@/components/settings/ProviderManager.vue";
import { useProviderStore } from "@/stores/providerStore";

/** The panel reads accounts from the store; the API stub in tests/setup.ts
 * returns `{}`, so seed the store directly and re-render. */
async function mountWith(accounts: Record<string, unknown>) {
  const wrapper = mount(ProviderManager);
  const store = useProviderStore();
  store.accounts = accounts as typeof store.accounts;
  await nextTick();
  return wrapper;
}

/** Field labels of one provider's card — every provider gets a card, so a
 * document-wide scan would pick up the local servers' Base URL too. */
function fieldLabels(wrapper: { findAll: (s: string) => { text: () => string; html: () => string }[] }, provider: string): string[] {
  const card = wrapper.findAll(".fil-pm-card").find((c) => c.text().includes(provider));
  if (!card) throw new Error(`no card for ${provider}`);
  return [...card.html().matchAll(/class="fil-pm-field-label">([^<]+)</g)].map((m) => m[1]);
}

describe("ProviderManager fields", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("offers Base URL for a local server", async () => {
    const wrapper = await mountWith({
      ollama: { display_name: "Ollama", local: true, configured: true, account_id: "", base_url: "http://127.0.0.1:11434" },
    });
    expect(fieldLabels(wrapper, "Ollama")).toContain("Base URL");
  });

  it("drops Base URL for a cloud provider with no custom endpoint", async () => {
    const wrapper = await mountWith({
      openai: { display_name: "OpenAI API", local: false, configured: true, account_id: "", base_url: "" },
    });
    expect(fieldLabels(wrapper, "OpenAI")).not.toContain("Base URL");
  });

  it("keeps Base URL visible when one was already saved", async () => {
    const wrapper = await mountWith({
      openai: { display_name: "OpenAI API", local: false, configured: true, account_id: "", base_url: "https://proxy.internal/v1" },
    });
    expect(fieldLabels(wrapper, "OpenAI")).toContain("Base URL");
  });

  it("links out to the page that issues the credential", async () => {
    // Unconfigured providers render as a collapsed row — the first-time path
    // is expand, then reach for the key.
    const wrapper = await mountWith({
      groq: { display_name: "Groq", local: false, configured: false, account_id: "", base_url: "" },
    });
    expect(wrapper.find('a[href="https://console.groq.com/keys"]').exists()).toBe(false);

    // Every provider gets a card, so reach for Groq's rather than the first.
    const card = wrapper.findAll(".fil-pm-card").find((c) => c.text().includes("Groq"))!;
    await card.find(".fil-pm-header").trigger("click");
    await nextTick();

    const link = wrapper.find('a[href="https://console.groq.com/keys"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes("target")).toBe("_blank");
    expect(link.attributes("rel")).toContain("noopener");
  });

  it("sends Cloudflare to the dashboard for the account id", async () => {
    const wrapper = await mountWith({
      cloudflare: { display_name: "Cloudflare Workers AI", local: false, configured: true, account_id: "", base_url: "" },
    });
    expect(fieldLabels(wrapper, "Cloudflare")).toContain("Account ID");
    expect(fieldLabels(wrapper, "Cloudflare")).not.toContain("Base URL");
    expect(wrapper.find('a[href="https://dash.cloudflare.com/"]').exists()).toBe(true);
  });
});
