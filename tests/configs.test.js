'use strict';

const assert = require('assert');
const plugin = require('../lib/index');

describe('eslint-plugin-pack', () => {
  it('should have configs property', () => {
    assert.ok(plugin.configs);
  });

  it('should have recommended config', () => {
    assert.ok(plugin.configs.recommended);
  });

  it('should have typescript config', () => {
    assert.ok(plugin.configs.typescript);
  });

  it('should have react config', () => {
    assert.ok(plugin.configs.react);
  });

  it('recommended config should have rules', () => {
    assert.ok(plugin.configs.recommended.rules);
  });

  it('typescript config should have rules', () => {
    assert.ok(plugin.configs.typescript.rules);
  });

  it('react config should have rules', () => {
    assert.ok(plugin.configs.react.rules);
  });

  // Новые тесты для ESLint v9
  it('recommended config should have languageOptions', () => {
    assert.ok(plugin.configs.recommended.languageOptions);
  });

  it('typescript config should have languageOptions', () => {
    assert.ok(plugin.configs.typescript.languageOptions);
  });

  it('react config should have languageOptions', () => {
    assert.ok(plugin.configs.react.languageOptions);
  });

  it('recommended config should have plugins as object', () => {
    assert.ok(plugin.configs.recommended.plugins);
    assert.strictEqual(typeof plugin.configs.recommended.plugins, 'object');
    assert.notStrictEqual(Array.isArray(plugin.configs.recommended.plugins), true);
  });

  it('typescript config should have plugins as object', () => {
    assert.ok(plugin.configs.typescript.plugins);
    assert.strictEqual(typeof plugin.configs.typescript.plugins, 'object');
    assert.notStrictEqual(Array.isArray(plugin.configs.typescript.plugins), true);
  });

  it('react config should have plugins as object', () => {
    assert.ok(plugin.configs.react.plugins);
    assert.strictEqual(typeof plugin.configs.react.plugins, 'object');
    assert.notStrictEqual(Array.isArray(plugin.configs.react.plugins), true);
  });

}); 