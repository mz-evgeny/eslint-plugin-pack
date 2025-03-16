const react = require('eslint-plugin-react');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const cssPlugin = require('eslint-plugin-css');

/**
 * Recommended ESLint configuration
 */
const recommended = [
    // Base ESLint recommended rules
    eslint.configs.recommended,

    // TypeScript recommended rules
    tseslint.configs.recommended,

    // CSS recommended rules
    cssPlugin.configs["flat/recommended"],

    // Custom TypeScript strict rules
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': 'warn',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],

        },
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: '.',
            },
        },
    },


    // Global variables for browser and Node.js
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            }
        },
        rules: {
            'arrow-body-style': ['error', 'as-needed'],
            'no-duplicate-imports': 'error',
            'no-extra-boolean-cast': 'off',
            'no-useless-escape': 'off',
            'object-shorthand': 'error',
            'curly': ['error', 'all'],
        }
    },

    // React configuration for JS and TS files
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
            react,
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            'react/button-has-type': 'error',
        },
    },

    // React Hooks rules
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
        }
    },

    // JSX a11y rules
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            'jsx-a11y/anchor-is-valid': 'off',
            'jsx-a11y/no-static-element-interactions': 'error',
        },
    },

    // Ignore files
    {
        ignores: [
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
            'package-lock.json',
            'npm-debug.log*',
            '.npm',
            'pnpm-lock.yaml',
            '.pnpm-store/',
            'pnpm-debug.log*',
            '.next/',
            'out/',
            'next.config.js',
            'next.config.mjs',
            'next-env.d.ts',
            '.vercel/',
            'public/',
            '.next-sitemap.js'
        ]
    }
];

module.exports = { recommended };