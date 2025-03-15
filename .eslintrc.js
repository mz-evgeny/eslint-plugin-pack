'use strict';

module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    'no-console': 'warn',
    'strict': ['error', 'global'],
  },
  ignorePatterns: ['examples/'],
}; 