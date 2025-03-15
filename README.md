# eslint-plugin-pack

ESLint plugin with predefined configurations for TypeScript, React, and other technologies. Compatible with ESLint v9.

## Installation

```bash
npm install --save-dev eslint eslint-plugin-pack
# or
yarn add --dev eslint eslint-plugin-pack
# or
pnpm add -D eslint eslint-plugin-pack
```

## Usage

### Flat Config (ESLint v9)

```js
// eslint.config.js
const packPlugin = require('eslint-plugin-pack');

module.exports = [
  // Basic configuration
  packPlugin.configs.recommended,
  
  // Or TypeScript configuration
  // packPlugin.configs.typescript,
  
  // Or React configuration
  // packPlugin.configs.react,
  
  // Or full configuration (all rules)
  // packPlugin.configs.all,
  
  // Your custom rules
  {
    rules: {
      // Your custom rules here
    }
  }
];
```

### Legacy Config (ESLint v8 and below)

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:pack/recommended']
};
```

## Available Configurations

### `pack/recommended`

Basic set of ESLint rules with Prettier settings.

### `pack/typescript`

Rules for TypeScript projects, including:
- Naming conventions (PascalCase for types, UPPER_CASE for enums)
- Exhaustive switch checks
- Promise handling
- And other useful rules for TypeScript

### `pack/react`

Rules for React projects, including:
- Accessibility (a11y) rules
- React hooks rules
- Button type checking

### `pack/all`

Complete set of rules, including all the above configurations, as well as:
- CSS Modules
- Storybook
- Import rules

## Ignored Files

The plugin automatically ignores the following files and directories:
- Standard build and configuration files (build/, dist/, *.d.ts, etc.)
- Package manager files:
  - npm: package-lock.json, .npmrc, npm-debug.log*, .npm/
  - yarn: yarn-debug.log*, yarn-error.log*
  - pnpm: pnpm-lock.yaml, .pnpm-store/

## License

MIT