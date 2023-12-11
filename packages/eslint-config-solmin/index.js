/** @type {import('eslint').Linter.Config} */

module.exports = {
  /**
   * common config frontend and backend
   * frontend will override some config fit to frontend
   * */
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'standard'
  ],
  rules: {}
}
