import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended' // 추가
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',  // 추가
    },
  },
  /* 추가: S - JSONC */
  {
    files: ['**/*.{json,jsonc}'],
    plugins: {
      jsonc: jsonc,
    },
    extends: [
      'plugin:jsonc/recommended-with-json',
    ],
    rules: {
      'jsonc/quote-props': ['error', 'consistent-as-needed'],
      'jsonc/quotes': ['error', 'double'],
    },
  },
    /* 추가: E - JSONC */
)
