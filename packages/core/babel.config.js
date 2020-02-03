module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: ['ie 11', '> 1%'],
      },
    ],
    '@babel/react',
  ],
  plugins: ['@babel/proposal-class-properties'],
  // Ignore node_modules in subdirectories of monorepo
  ignore: ['**/node_modules/**'],
}
