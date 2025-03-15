# eslint-plugin-pack

ESLint плагин с предустановленными конфигурациями для TypeScript, React и других технологий.

## Установка

```bash
npm install --save-dev eslint eslint-plugin-pack
# или
yarn add --dev eslint eslint-plugin-pack
# или
pnpm add -D eslint eslint-plugin-pack
```

## Использование

### Базовая конфигурация

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:pack/recommended']
};
```

### TypeScript конфигурация

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:pack/typescript']
};
```

### React конфигурация

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:pack/react']
};
```

### Полная конфигурация (все правила)

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:pack/all']
};
```

## Доступные конфигурации

### `pack/recommended`

Базовый набор правил ESLint с настройками Prettier.

### `pack/typescript`

Правила для TypeScript проектов, включая:
- Правила именования (PascalCase для типов, UPPER_CASE для enum)
- Проверка исчерпывающих switch
- Обработка обещаний (promises)
- И другие полезные правила для TypeScript

### `pack/react`

Правила для React проектов, включая:
- Правила доступности (a11y)
- Правила для хуков React
- Проверка типов для кнопок

### `pack/all`

Полный набор правил, включающий все вышеперечисленные конфигурации, а также:
- CSS Modules
- Storybook
- Import правила

## Игнорируемые файлы

Плагин автоматически игнорирует следующие файлы и директории:
- Стандартные файлы сборки и конфигурации (build/, dist/, *.d.ts и т.д.)
- Файлы пакетных менеджеров:
  - npm: package-lock.json, .npmrc, npm-debug.log*, .npm/
  - yarn: yarn-debug.log*, yarn-error.log*
  - pnpm: pnpm-lock.yaml, .pnpm-store/

## Лицензия

MIT