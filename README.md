# eslint-plugin-pack

ESLint plugin with recommended rules for modern development.

## Installation

```bash
npm install eslint-plugin-pack --save-dev
```

## Usage

### Basic Configuration

In your `eslint.config.mjs`:

```js
import pack from 'eslint-plugin-pack';

const { configs } = pack;

export default [
  ...configs.recommended,
  // Your additional settings...
];
```

### For Next.js Projects

If you're using Next.js, you can add additional rules:

```js
import pack from 'eslint-plugin-pack';

const { configs } = pack;

export default [
  ...configs.recommended,
  ...configs.next,
  // Your additional settings...
];
```

## Included Rules

The plugin includes recommended rules for:

- JavaScript/TypeScript
- React and React Hooks
- JSX accessibility (a11y)
- CSS modules
- Next.js (optional)
