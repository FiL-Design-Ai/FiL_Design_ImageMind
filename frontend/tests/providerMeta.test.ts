import { describe, expect, it } from "vitest";
import { PROVIDER_LIST } from "@/stores/providerStore";
import {
  PROVIDER_ACCOUNT_LINK,
  PROVIDER_CREDENTIAL_LINK,
  PROVIDER_EDITS_BASE_URL,
  PROVIDER_ICON,
  PROVIDER_LABEL,
} from "@/composables/providerMeta";

describe("provider metadata", () => {
  it("covers every provider the panel renders", () => {
    for (const pid of PROVIDER_LIST) {
      expect(PROVIDER_LABEL[pid], `label for ${pid}`).toBeTruthy();
      expect(PROVIDER_ICON[pid], `icon for ${pid}`).toBeTruthy();
      expect(PROVIDER_CREDENTIAL_LINK[pid], `credential link for ${pid}`).toBeTruthy();
    }
  });

  it("points every credential link at an https page", () => {
    for (const [pid, link] of Object.entries(PROVIDER_CREDENTIAL_LINK)) {
      expect(link.url, pid).toMatch(/^https:\/\//);
      expect(link.label, pid).toBeTruthy();
    }
    for (const [pid, link] of Object.entries(PROVIDER_ACCOUNT_LINK)) {
      expect(link.url, pid).toMatch(/^https:\/\//);
    }
  });

  it("offers a Base URL field to the local servers only", () => {
    expect([...PROVIDER_EDITS_BASE_URL].sort()).toEqual(["lmstudio", "ollama"]);
    for (const pid of ["openai", "google", "groq", "openrouter", "cloudflare"]) {
      expect(PROVIDER_EDITS_BASE_URL.has(pid), pid).toBe(false);
    }
  });

  it("sends Cloudflare to the dashboard for its account id", () => {
    expect(PROVIDER_ACCOUNT_LINK.cloudflare).toBeTruthy();
    expect(Object.keys(PROVIDER_ACCOUNT_LINK)).toEqual(["cloudflare"]);
  });
});
