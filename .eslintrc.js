// Same configuration as @healthwise-ui/eslint-plugin package
module.exports = {
  extends: ['plugin:react-app/recommended', 'plugin:prettier/recommended'],
  rules: {
    'react-app/jsx-a11y/href-no-hash': 'off',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
      },
    ],
  },
}
