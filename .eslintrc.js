module.exports = {
  extends: ['ecubelabs', 'react-app', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  rules: {
    '@typescript-eslint/indent': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.*'] }],
    'import/no-unresolved': ['error', { ignore: ['enzyme', '@material-ui/*'] }],
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'implicit-arrow-linebreak': 'off', // TODO: 임시. https://github.com/eslint/eslint/issues/11408
    'prettier/prettier': 'error',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/no-array-index-key': 'error',
  },
};
