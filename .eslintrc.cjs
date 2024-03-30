module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['build', 'dist', 'public'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    '@tanstack/eslint-plugin-query',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
};
