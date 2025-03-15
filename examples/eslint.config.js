'use strict';

// Для реального использования вы бы импортировали из установленного пакета:
// const packPlugin = require('eslint-plugin-pack');
// Но для примера мы импортируем локально:
const packPlugin = require('../lib/index');

module.exports = [
  // Используем полную конфигурацию
  packPlugin.configs.recommended,
  
  // Дополнительные настройки
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]; 