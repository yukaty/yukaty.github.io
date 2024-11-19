import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {
        window: true,
        document: true,
        console: true,
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
