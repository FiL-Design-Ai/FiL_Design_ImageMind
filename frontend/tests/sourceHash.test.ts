import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, renameSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { computeSourceHash } from "../scripts/sourceHash.mjs";

/**
 * The property the whole check rests on: the same sources hash the same way
 * wherever they are checked out.
 *
 * This replaced a CI step that rebuilt the bundle and compared it byte for byte
 * with the committed one — which silently required a Linux build to reproduce a
 * Windows build. Nobody had promised that, and no part of this project needs
 * it. The tests below are what make the replacement worth trusting: if line
 * endings leaked into the hash, CI would fail on every push from a Windows
 * machine and the guard would be worse than none.
 */

let root: string;

function write(relative: string, contents: string): void {
  const path = join(root, relative);
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, contents);
}

function project(lineEnding: "\n" | "\r\n"): void {
  const nl = lineEnding;
  write("src/main.ts", `export const a = 1;${nl}export const b = 2;${nl}`);
  write("src/nested/thing.ts", `export const c = 3;${nl}`);
  write("vite.config.ts", `export default {};${nl}`);
  write("package-lock.json", `{${nl}  "name": "x"${nl}}${nl}`);
}

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "fil-source-hash-"));
});

afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

describe("the source hash", () => {
  it("is the same whether the checkout uses LF or CRLF", () => {
    project("\n");
    const unix = computeSourceHash(root);

    rmSync(root, { recursive: true, force: true });
    mkdirSync(root, { recursive: true });
    project("\r\n");
    const windows = computeSourceHash(root);

    expect(windows.hash).toBe(unix.hash);
    expect(unix.fileCount).toBe(4);
  });

  it("changes when a source changes", () => {
    project("\n");
    const before = computeSourceHash(root).hash;

    write("src/main.ts", "export const a = 99;\n");

    expect(computeSourceHash(root).hash).not.toBe(before);
  });

  it("changes when the toolchain is repinned", () => {
    // A lockfile bump can change the bundle without a line of our code moving.
    project("\n");
    const before = computeSourceHash(root).hash;

    write("package-lock.json", '{\n  "name": "x",\n  "lockfileVersion": 3\n}\n');

    expect(computeSourceHash(root).hash).not.toBe(before);
  });

  it("changes when a file only moves", () => {
    // Same bytes, different module graph. The path is part of the hash for
    // exactly this case.
    project("\n");
    const before = computeSourceHash(root).hash;

    renameSync(join(root, "src/nested/thing.ts"), join(root, "src/thing.ts"));

    expect(computeSourceHash(root).hash).not.toBe(before);
  });

  it("does not depend on the order the filesystem lists files in", () => {
    // Two projects with the same content, built up in opposite order.
    project("\n");
    const forward = computeSourceHash(root).hash;

    rmSync(root, { recursive: true, force: true });
    mkdirSync(root, { recursive: true });
    write("package-lock.json", '{\n  "name": "x"\n}\n');
    write("vite.config.ts", "export default {};\n");
    write("src/nested/thing.ts", "export const c = 3;\n");
    write("src/main.ts", "export const a = 1;\nexport const b = 2;\n");

    expect(computeSourceHash(root).hash).toBe(forward);
  });

  it("ignores what is not an input to the bundle", () => {
    // `dist/` is the output, and `tests/` never reaches it — neither should
    // make the guard cry wolf.
    project("\n");
    const before = computeSourceHash(root).hash;

    write("dist/fil_design_imagemind.js", "// rebuilt\n");
    write("tests/whatever.test.ts", "// a new test\n");

    expect(computeSourceHash(root).hash).toBe(before);
  });
});
