module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'simple-import-sort', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-namespace': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight', 'url'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-restricted-exports': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
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
          // Internal packages in order: atoms, molecules, organisms, temlates.
          ['^atoms(/.*|$)', '^molecules(/.*|$)', '^organisms(/.*|$)', '^templates(/.*|$)'],
          // Utils and hooks.
          ['^utils(/.*|$)', '^hooks(/.*|$)'],
          // Then parent and siblings - order is kept thanks to alphabetical sorting.
          ['^\\.'],
          // Models import

          ['^types(/.*|$)', 'models(.*|$)'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 0,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
