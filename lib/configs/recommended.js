/**
 * @fileoverview All configurations combined for ESLint
 * @author eslint-plugin-pack
 */

'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'import',
    '@typescript-eslint',
    'jsx-a11y',
    'react',
    'react-hooks',
    'css-modules',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:css-modules/recommended',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '__mocks__',
    '.DS_Store',
    '.eslintrc.js',
    '.pnp.js',
    '*.d.ts',
    '*.local',
    '/.pnp',
    'build/',
    'builder.js',
    'dist/',
    'migrations',
    'node_modules/',
    'storybook-static/',
    'tsup.config.ts',
    'typings',
    'vite.config.ts',
    'vitest.config.ts',
    'vitest.globalSetup.ts',
    'yarn-debug.log*',
    'yarn-error.log*',
    '.pnpm-store/',
    'pnpm-lock.yaml',
    'package-lock.json',
    '.npmrc',
    'npm-debug.log*',
    '.npm/',
  ],
  rules: {
    // TypeScript rules
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
    
    // JavaScript rules
    'arrow-body-style': ['error', 'as-needed'],
    'no-duplicate-imports': 'error',
    'no-extra-boolean-cast': 'off',
    'no-useless-escape': 'off',
    'object-shorthand': 'error',
    'curly': ['error', 'all'],
    
    // React rules
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'error',
    'react/button-has-type': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}; 