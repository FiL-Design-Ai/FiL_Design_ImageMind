import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";

/**
 * Flat ESLint config (ESLint 9) for the Vue 3 + TypeScript frontend.
 * Type checking is owned by `vue-tsc` (npm run typecheck); ESLint here
 * focuses on lint-level correctness (`flat/essential`), not template
 * reformatting — the house style for `.vue` templates is intentionally kept.
 */
export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      // TypeScript (via vue-tsc) already resolves identifiers/types, so the
      // core rule only produces false positives on DOM type-only references
      // (e.g. `as EventListener`). Disabling is the typescript-eslint default.
      "no-undef": "off",
      // Allow intentional unused args prefixed with `_`.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // The ComfyUI bridge surfaces are loosely typed; `any` is pragmatic there.
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    // Node body components receive `state` as a single reactive container
    // created by `domWidgetHost.addFilDomWidget` (`reactive(opts.state)`).
    // Mutating `state.X = …` IS the intended serialization bridge to ComfyUI
    // (`getValue: () => state`), not a one-way-data-flow violation.
    files: ["src/components/nodes/**/*.vue"],
    rules: {
      "vue/no-mutating-props": "off",
    },
  },
  {
    files: ["tests/**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        test: "readonly",
      },
    },
  },
);
