const nextPlugin = require('@next/eslint-plugin-next');

/**
 * Next.js specific ESLint configuration
 */
const next = [
    nextPlugin.configs.recommended,
];

module.exports = { next }; 