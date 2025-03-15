/**
 * @fileoverview React configuration for ESLint
 * @author eslint-plugin-pack
 */

'use strict';

module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'error',
    'react/button-has-type': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}; 