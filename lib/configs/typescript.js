/**
 * @fileoverview TypeScript configuration for ESLint
 * @author eslint-plugin-pack
 */

'use strict';

module.exports = {
  languageOptions: {
    parser: require('@typescript-eslint/parser'),
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
  },
  extends: [
    'plugin:pack/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enum', format: ['UPPER_CASE'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  },
}; 