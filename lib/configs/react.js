/**
 * @fileoverview React configuration for ESLint
 * @author eslint-plugin-pack
 */

'use strict';

module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    'react': require('eslint-plugin-react'),
    'react-hooks': require('eslint-plugin-react-hooks'),
  },
  extends: [
    'plugin:pack/recommended',
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