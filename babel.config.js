module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: ['ie 11', '> 1%'],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/proposal-class-properties'],
  ignore: ['node_modules/**'],
}
