const ignores = [
  "__mocks__",
  ".DS_Store",
  ".eslintrc.js",
  "eslint.config.mjs",
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
  ".storybook",
];

module.exports = { ignores };
