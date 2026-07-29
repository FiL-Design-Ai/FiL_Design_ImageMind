import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import FilHelpPopup from "@/components/widgets/FilHelpPopup.vue";
import { useHelpStore } from "@/stores/helpStore";

// FilHelpPopup wraps FilModal, which Teleports its body to `document.body` —
// a plain `wrapper.find` never sees it (confirmed empirically: querying the
// wrapper element after opening returns nothing while `document.body` has the
// content). Every assertion below goes through `document.body`.
function body() {
  return document.body;
}

let wrapper: VueWrapper | null = null;
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

describe("FilHelpPopup visibility", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders nothing while no help id is active", () => {
    wrapper = mount(FilHelpPopup);
    expect(body().querySelector(".fil-modal-backdrop")).toBeNull();
  });

  it("opens with a fallback message for an id that was never registered", async () => {
    const help = useHelpStore();
    wrapper = mount(FilHelpPopup);
    help.value_open("does-not-exist");
    await nextTick();

    expect(body().querySelector(".fil-modal-backdrop")).not.toBeNull();
    expect(body().textContent).toContain("No help available for this node.");
  });
});

describe("FilHelpPopup content", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders title, body, bullets, table and code for a registered def", async () => {
    const help = useHelpStore();
    help.registerAll({
      demo: {
        id: "demo",
        title: "Demo Node",
        body: "What this node does.",
        bullets: ["first point", "second point"],
        table: { headers: ["Field", "Meaning"], rows: [["seed", "RNG seed"]] },
        code: "print(1)",
      },
    });
    wrapper = mount(FilHelpPopup);
    help.value_open("demo");
    await nextTick();

    const root = body();
    expect(root.querySelector(".fil-help-title")?.textContent).toBe("Demo Node");
    expect(root.querySelector(".fil-help-body")?.textContent).toBe("What this node does.");

    const bullets = Array.from(root.querySelectorAll(".fil-help-bullet"));
    expect(bullets.map((b) => b.textContent?.trim())).toEqual(["first point", "second point"]);

    const rows = Array.from(root.querySelectorAll(".fil-help-table tbody tr"));
    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain("seed");
    expect(rows[0].textContent).toContain("RNG seed");

    expect(root.querySelector(".fil-help-code")?.textContent).toBe("print(1)");
  });

  it("omits bullets/table/code blocks the def doesn't provide", async () => {
    const help = useHelpStore();
    help.registerAll({ bare: { id: "bare", title: "Bare Node" } });
    wrapper = mount(FilHelpPopup);
    help.value_open("bare");
    await nextTick();

    const root = body();
    expect(root.querySelector(".fil-help-title")?.textContent).toBe("Bare Node");
    expect(root.querySelector(".fil-help-body")).toBeNull();
    expect(root.querySelector(".fil-help-bullet")).toBeNull();
    expect(root.querySelector(".fil-help-table")).toBeNull();
    expect(root.querySelector(".fil-help-code")).toBeNull();
  });

  it("switches content in place when the active id changes without closing", async () => {
    const help = useHelpStore();
    help.registerAll({
      one: { id: "one", title: "First" },
      two: { id: "two", title: "Second" },
    });
    wrapper = mount(FilHelpPopup);
    help.value_open("one");
    await nextTick();
    expect(body().querySelector(".fil-help-title")?.textContent).toBe("First");

    help.value_open("two");
    await nextTick();
    expect(body().querySelector(".fil-help-title")?.textContent).toBe("Second");
  });
});

describe("FilHelpPopup closing", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("closing via the modal's close button clears activeHelpId", async () => {
    const help = useHelpStore();
    help.registerAll({ demo: { id: "demo", title: "Demo Node" } });
    wrapper = mount(FilHelpPopup);
    help.value_open("demo");
    await nextTick();
    expect(help.activeHelpId).toBe("demo");

    const closeBtn = body().querySelector<HTMLElement>(".fil-modal-close")!;
    closeBtn.dispatchEvent(new Event("click"));
    await nextTick();

    expect(help.activeHelpId).toBeNull();
    expect(body().querySelector(".fil-modal-backdrop")).toBeNull();
  });

  it("pressing Escape closes the popup and clears activeHelpId", async () => {
    const help = useHelpStore();
    help.registerAll({ demo: { id: "demo", title: "Demo Node" } });
    wrapper = mount(FilHelpPopup);
    help.value_open("demo");
    await nextTick();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();

    expect(help.activeHelpId).toBeNull();
    expect(body().querySelector(".fil-modal-backdrop")).toBeNull();
  });
});
