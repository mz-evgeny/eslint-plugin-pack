const nextPlugin = require("@next/eslint-plugin-next");

/**
 * Next.js specific ESLint configuration
 */
const next = [
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
];

module.exports = { next };
