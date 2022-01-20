module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', '@typescript-eslint', 'jest'],
  rules: {
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          // After builtins comes packages without space in between. `react` related packages first, then `gatsby`, then rest.
          // eslint-disable-next-line global-require
          [`^(${require('module').builtinModules.join('|')})(/|$)`, '^react', '^gatsby', '^@?\\w'],
          // Internal packages in order: layout, common, components, containers.
          ['^layout(/.*|$)', '^common(/.*|$)', '^components(/.*|$)', '^containers(/.*|$)'],
          // Utils and hooks.
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          // Then parent and siblings - order is kept thanks to alphabetical sorting.
          ['^\\.'],
          // Models import
          ['models(.*|$)'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src'],
      },
      alias: [
        ['layout', './src/layout'],
        ['common', './src/common'],
        ['components', './src/components'],
        ['containers', './src/containers'],
        ['templates', './src/templates'],
        ['pages', './src/pages'],
        ['styles', './src/styles'],
        ['mocks', './src/mocks'],
        ['utils', './src/utils'],
        ['utils', './src/testUtils'],
        ['hooks', './src/hooks'],
        ['shared', './src/shared'],
        ['constants', './src/constants'],
      ],
    },
  },
};
