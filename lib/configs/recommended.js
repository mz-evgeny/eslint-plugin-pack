const react = require("eslint-plugin-react");
const globals = require("globals");
const reactHooks = require("eslint-plugin-react-hooks");
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const cssPlugin = require("eslint-plugin-css");
import prettier from "eslint-config-prettier";

// TypeScript rules
const tsConfig = tseslint.config(eslint.configs.recommended, {
  files: ["**/*.{ts,tsx}"],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "enum", format: ["UPPER_CASE"] },
      { selector: "enumMember", format: ["UPPER_CASE"] },
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
  },
});

/**
 * Recommended ESLint configuration
 */
const recommended = [
  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript rules
  ...tsConfig,

  // CSS recommended rules
  cssPlugin.configs["flat/recommended"],

  // Global variables for browser and Node.js
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "no-duplicate-imports": "error",
      "no-extra-boolean-cast": "off",
      "no-useless-escape": "off",
      "object-shorthand": "error",
      curly: ["error", "all"],
    },
  },

  // React configuration for JS and TS files
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/button-has-type": "error",
      "react/react-in-jsx-scope": "off",
    },
  },

  // React Hooks rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // JSX a11y rules
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/no-static-element-interactions": "error",
    },
  },

  // Prettier rules
  prettier,

  // Ignore files
  {
    ignores: [
      "__mocks__",
      ".DS_Store",
      ".eslintrc.js",
      ".pnp.js",
      "*.d.ts",
      "*.local",
      "/.pnp",
      "build/",
      "builder.js",
      "dist/",
      "migrations",
      "node_modules/",
      "storybook-static/",
      "tsup.config.ts",
      "typings",
      "vite.config.ts",
      "vitest.config.ts",
      "vitest.globalSetup.ts",
      "yarn-debug.log*",
      "yarn-error.log*",
      "package-lock.json",
      "npm-debug.log*",
      ".npm",
      "pnpm-lock.yaml",
      ".pnpm-store/",
      "pnpm-debug.log*",
      ".next/",
      "out/",
      "next.config.js",
      "next.config.mjs",
      "next-env.d.ts",
      ".vercel/",
      "public/",
      ".next-sitemap.js",
    ],
  },
];

module.exports = { recommended };
