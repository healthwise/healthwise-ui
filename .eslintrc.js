// Same configuration as @healthwise-ui/eslint-plugin package
module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['react-app', 'eslint:recommended', 'eslint-config-prettier', 'plugin:storybook/recommended'],
  rules: {
    strict: ['error', 'never']
  },
  env: {
    browser: true
  },
  ignorePatterns: ['node_modules'],
  globals: {
    __DEV__: 'readonly'
  }
};