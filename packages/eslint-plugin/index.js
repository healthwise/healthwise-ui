module.exports = {
  configs: {
    recommended: {
      extends: [
        'plugin:react-app/recommended',
        'plugin:prettier/recommended',
        'prettier/flowtype',
        'prettier/react',
      ],
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
    },
  },
}
