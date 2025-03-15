'use strict';

const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'writable',
        describe: 'readonly',
        it: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-console': 'warn',
      'strict': ['error', 'global'],
    },
  },
  {
    ignores: ['examples/', 'node_modules/', 'test-project/'],
  }
]; 