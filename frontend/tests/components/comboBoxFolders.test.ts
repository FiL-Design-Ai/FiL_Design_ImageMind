/**
 * Browsing a models folder instead of scrolling it.
 *
 * A flat list is fine for twenty options; a LoRA folder is four hundred, and
 * `Krea2` alone holds forty-six on the machine this was built against. The
 * picker groups by folder while the search box is empty and drops back to
 * searching everything the moment it is not — the shape Pixaroma's picker uses,
 * and the reason it is pleasant.
 *
 * `browseFolders` is off by default, so every other combo in the pack is
 * untouched; the last case here is what pins that.
 */
import { describe, it, expect, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import FilComboBox from "@/components/widgets/FilComboBox.vue";

const OPTIONS = [
  "Ideogram/Eva/Eva_epoch_10.safetensors",
  "Ideogram/Eva/Eva_epoch_2.safetensors",
  "Ideogram/turbotime.safetensors",
  "Krea2/realism_engine.safetensors",
  "Krea2/ultra_real.safetensors",
  "loose_lora.safetensors",
].map((value) => ({ value, label: value.split("/").pop()!.replace(".safetensors", "") }));

let mounted: ReturnType<typeof mount> | null = null;

function openPicker(modelValue = "", props: Record<string, unknown> = {}) {
  mounted = mount(FilComboBox, {
    props: { options: OPTIONS, modelValue, searchable: true, browseFolders: true, ...props },
    attachTo: document.body,
  });
  return mounted;
}

// The panel teleports to the body, so a test that fails before its own cleanup
// leaves its rows in the document and the next one reads them instead of its
// own — the cascade this file produced on the first run.
afterEach(() => {
  mounted?.unmount();
  mounted = null;
  document.body.innerHTML = "";
});

function textOf(el: Element): string {
  return (el.textContent || "").replace(/\s+/g, " ").trim();
}

function rowTexts(): string[] {
  return [...document.querySelectorAll(".fil-combo-option")].map(textOf);
}

/** Only the folder rows — asserted by class, not by the icon in the text. */
function folderTexts(): string[] {
  return [...document.querySelectorAll(".fil-combo-option.folder")].map(textOf);
}

describe("FilComboBox browsing by folder", () => {
  it("shows the folders at this level with a count, and the loose files", async () => {
    const wrapper = openPicker();
    await wrapper.find(".fil-combo-trigger").trigger("click");

    const rows = rowTexts();
    const folders = folderTexts();
    expect(folders.some((r) => r.includes("Ideogram") && r.includes("3"))).toBe(true);
    expect(folders.some((r) => r.includes("Krea2") && r.includes("2"))).toBe(true);
    // A file at the root is listed here; the ones inside folders are not.
    expect(rows.some((r) => r.includes("loose_lora"))).toBe(true);
    expect(rows.some((r) => r.includes("Eva_epoch_10"))).toBe(false);
  });

  it("walks into a folder and back out", async () => {
    const wrapper = openPicker();
    await wrapper.find(".fil-combo-trigger").trigger("click");

    const ideogram = [...document.querySelectorAll<HTMLElement>(".fil-combo-option")].find((el) =>
      (el.textContent || "").includes("Ideogram"),
    )!;
    ideogram.click();
    await wrapper.vm.$nextTick();

    expect(rowTexts().some((r) => r.includes("turbotime"))).toBe(true);
    expect(folderTexts().some((r) => r.includes("Eva"))).toBe(true);
    expect(document.querySelector(".fil-combo-crumbs")?.textContent).toContain("Ideogram");

    const back = [...document.querySelectorAll<HTMLElement>(".fil-combo-option")].find((el) =>
      (el.textContent || "").includes("back"),
    )!;
    back.click();
    await wrapper.vm.$nextTick();
    expect(folderTexts().some((r) => r.includes("Krea2"))).toBe(true);
  });

  it("opens inside the folder the current value lives in", async () => {
    const wrapper = openPicker("Krea2/ultra_real.safetensors");
    await wrapper.find(".fil-combo-trigger").trigger("click");

    // Straight into Krea2, not at the root looking at two folder rows — and
    // the way back out is on screen rather than implied.
    expect(rowTexts().some((r) => r.includes("realism_engine"))).toBe(true);
    expect(folderTexts().filter((r) => !r.includes("back"))).toHaveLength(0);
    expect(folderTexts().some((r) => r.includes("back"))).toBe(true);
  });

  it("searching leaves the folders behind and looks everywhere", async () => {
    const wrapper = openPicker("Krea2/ultra_real.safetensors");
    await wrapper.find(".fil-combo-trigger").trigger("click");

    const search = document.querySelector<HTMLInputElement>(".fil-combo-search")!;
    search.value = "epoch";
    search.dispatchEvent(new Event("input"));
    await wrapper.vm.$nextTick();

    const rows = rowTexts();
    // Both live in a folder the picker was not standing in.
    expect(rows.some((r) => r.includes("Eva_epoch_10"))).toBe(true);
    expect(rows.some((r) => r.includes("Eva_epoch_2"))).toBe(true);
    // And each says where it lives, since the name alone no longer does.
    expect(rows.some((r) => r.includes("Ideogram/Eva"))).toBe(true);
  });

  it("picking a file reports the whole path, not the shown name", async () => {
    const wrapper = openPicker();
    await wrapper.find(".fil-combo-trigger").trigger("click");

    const krea = [...document.querySelectorAll<HTMLElement>(".fil-combo-option")].find((el) =>
      (el.textContent || "").includes("Krea2"),
    )!;
    krea.click();
    await wrapper.vm.$nextTick();

    const file = [...document.querySelectorAll<HTMLElement>(".fil-combo-option")].find((el) =>
      (el.textContent || "").includes("ultra_real"),
    )!;
    file.click();
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["Krea2/ultra_real.safetensors"]);
  });

  it("stays a flat list for every other combo in the pack", async () => {
    const wrapper = openPicker("", { browseFolders: false });
    await wrapper.find(".fil-combo-trigger").trigger("click");

    expect(folderTexts()).toHaveLength(0);
    expect(rowTexts()).toHaveLength(OPTIONS.length);
  });
});
