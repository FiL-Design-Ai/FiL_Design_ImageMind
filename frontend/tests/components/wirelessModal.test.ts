import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import FilWirelessModal from "@/components/widgets/FilWirelessModal.vue";
import { useWirelessStore } from "@/stores/wirelessStore";

function body() {
  return document.body;
}

let wrapper: VueWrapper | null = null;
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

describe("FilWirelessModal visibility and store control", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders nothing while dashboard is closed", () => {
    wrapper = mount(FilWirelessModal);
    expect(body().querySelector(".fil-modal-backdrop")).toBeNull();
  });

  it("opens when store.openDashboard is called", async () => {
    const store = useWirelessStore();
    wrapper = mount(FilWirelessModal);

    expect(store.isDashboardOpen).toBe(false);
    store.openDashboard();
    await nextTick();

    expect(store.isDashboardOpen).toBe(true);
    expect(body().querySelector(".fil-modal-backdrop")).not.toBeNull();
    expect(body().textContent).toContain("Wireless Dashboard");
  });

  it("switches tabs between overview and diagnostics", async () => {
    const store = useWirelessStore();
    wrapper = mount(FilWirelessModal);
    store.openDashboard("diagnostics");
    await nextTick();

    expect(store.activeTab).toBe("diagnostics");
  });
});
