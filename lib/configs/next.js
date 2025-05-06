const path = require("path");
const { FlatCompat } = require("@eslint/eslintrc");
const { ignores } = require("../constants");

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
});

/**
 * Next.js specific ESLint configuration
 */
const next = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores,
  },
];

module.exports = { next };
