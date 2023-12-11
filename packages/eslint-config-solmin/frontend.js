/** @type {import('eslint').Linter.Config} */

module.exports = {
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'standard-react',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
      }
    }
  ]
}
