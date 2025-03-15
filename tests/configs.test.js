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
}); 