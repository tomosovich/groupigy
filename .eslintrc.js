const { todo } = require('node:test');
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'react/jsx-uses-react': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '': 'never',
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
      },
    },
  ],
};
// todo research disabling import/no-default-export for pages and layouts