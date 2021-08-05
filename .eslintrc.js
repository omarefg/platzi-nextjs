module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:react/recommended', 'airbnb-typescript'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'jsx-a11y/anchor-is-valid': 'off',
        'no-spaced-func': 'off',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error'],
        'max-len': ['error', { code: 200, ignoreStrings: true }],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.stories.@(js|jsx|ts|tsx|mdx)'],
          },
        ],
        'react/require-default-props': 'off',
      },
      plugins: ['react', '@typescript-eslint'],
    },
  ],
};
