import { defineConfig, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

// `cssCodeSplit: false` + `build.lib` emits the bundled Vue `<style scoped>`
// CSS as a standalone `dist/style.css` — but a library build has no HTML
// entry point to `<link>` it from, and nothing in ComfyUI's WEB_DIRECTORY
// loading does that either. Verified against a real ComfyUI instance: the
// file was never fetched at all, so every node panel rendered with none of
// its component CSS (colors, spacing, hover/focus states, chip-grid layout)
// — only inline `:style` bindings and native form-control defaults. This
// plugin folds the CSS into the JS bundle as a self-injecting `<style>` tag
// (same pattern `styles/brand.ts` already uses for the palette variables),
// keeping the single-file design and removing the dead `style.css` output.
function inlineCssPlugin(): Plugin {
  return {
    name: "fil-inline-css",
    // Vite's own CSS-extraction runs as an internal "build" plugin, which
    // executes before user plugins without `enforce` but before user
    // `enforce: "post"` plugins — needs "post" here so the CSS asset already
    // exists in `bundle` by the time this hook runs.
    enforce: "post",
    generateBundle(_options, bundle) {
      let css = "";
      let cssFileName: string | null = null;
      for (const [fileName, item] of Object.entries(bundle)) {
        if (item.type === "asset" && fileName.endsWith(".css")) {
          css = typeof item.source === "string" ? item.source : item.source.toString();
          cssFileName = fileName;
        }
      }
      if (!css) return;
      for (const item of Object.values(bundle)) {
        if (item.type === "chunk" && item.isEntry) {
          const inject = `(function(){try{var s=document.createElement("style");s.textContent=${JSON.stringify(css)};document.head.appendChild(s);}catch(e){}})();\n`;
          item.code = inject + item.code;
        }
      }
      if (cssFileName) delete bundle[cssFileName];
    },
  };
}

// Vite build for the FiL Design ImageMind ComfyUI frontend extension.
//
// ComfyUI loads the file declared in WEB_DIRECTORY from
//   /extensions/<CUSTOM_NODE_DIR>/<ENTRY>.js
// via a dynamic `import()` (verified against a real ComfyUI 1.45.20
// instance). Output real ES modules, not UMD: main.ts does a genuine
// `import { app } from "/scripts/app.js"`, which only works correctly as a
// real ESM import — see main.ts's file header for why reading `window.app`
// instead (the UMD-compatible shape) missed `beforeRegisterNodeDef` for
// every node type on a cold page load.
export default defineConfig(({ command }) => ({
  plugins: [vue(), inlineCssPlugin()],
  // Vue/Pinia source references `process.env.NODE_ENV` for dev-only warnings.
  // In `build.lib` mode Vite does not auto-shim `process` for the browser
  // (unlike a normal app build), so it must be statically replaced here or
  // the bundle throws `ReferenceError: process is not defined` at load time.
  // Scoped to `command === "build"` only — this same config file also drives
  // `vitest run` (command "serve"), and forcing "production" there disables
  // Vue's devtools emit-hook instrumentation, which `@vue/test-utils`'s
  // `wrapper.emitted()` depends on to record component emits.
  define: command === "build" ? { "process.env.NODE_ENV": JSON.stringify("production") } : {},
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // ComfyUI serves extensions under /extensions/FiL_Design_ImageMind/...
  // (must match the custom_nodes/<folder-name> this package is installed under —
  // see frontend/src/constants/brand.ts for the single source of truth)
  base: "/extensions/FiL_Design_ImageMind/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: true,
    // Single-file ES module bundle: dist/fil_design_imagemind.js (inlined CSS).
    // Vue/Pinia are bundled in (not external) — a real running ComfyUI
    // 1.45.20 does not expose window.Vue / window.Pinia globally despite
    // the advanced guide's Rule 5 suggesting this "if available globally".
    // Marking them external there silently produced a bundle that threw
    // `ReferenceError` on first Vue/Pinia API use, before registration.
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      fileName: () => "fil_design_imagemind.js",
      formats: ["es"],
    },
    rollupOptions: {
      // The real ComfyUI-provided modules main.ts/runButtonFx.ts import `app`/`api` from —
      // not an npm package, must not be bundled or resolved from node_modules.
      external: ["/scripts/app.js", "/scripts/api.js"],
      output: {
        // Each node component is loaded via `defineAsyncComponent(() =>
        // import(...))`, which Rollup would otherwise split into separate
        // hashed chunk files. Keep the single-file-bundle design (simpler to
        // serve/reason about from ComfyUI's WEB_DIRECTORY) by inlining them.
        // `inlineDynamicImports` was renamed in Rollup 4 / Vite 8 and warns on
        // the old spelling.
        codeSplitting: false,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.ts"],
    // Tests run with the real Vue/Pinia from node_modules (not external);
    // the production `external` config above only applies to `vite build`.
  },
}));