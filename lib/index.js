/**
 * @fileoverview ESLint plugin pack with predefined configurations
 * @author eslint-plugin-pack
 */

'use strict';

module.exports = {
  configs: {
    recommended: require('./configs/recommended'),
    typescript: require('./configs/typescript'),
    react: require('./configs/react'),
  },
}; 