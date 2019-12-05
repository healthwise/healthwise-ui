const path = require('path')

module.exports = ({ config, mode }) => {
  const { rules } = config.module
  const jsLoader = rules.find(rule => String(rule.test) === String(/\.(mjs|jsx?)$/))
  const cssLoader = rules.find(rule => String(rule.test) === String(/\.css$/))

  // Make sure babel-loader doesn't process nested node_modules folders in monorepo
  jsLoader.exclude = [/[/\\\\]node_modules[/\\\\]/]

  // TODO: Modifying the CSS loader should be unnecessary once we finish refactoring
  // the content package to use styled-components
  // TEMP: commented out for now, since we are also narrowing the Storybook to "core" (since the full path is broken)
  // cssLoader.use[1].options = {
  //   importLoaders: 1,
  //   modules: true,
  //   localIdentName: '[name]--[local]',
  // }

  // TODO: Lerna should make this unnecessary, but for some reason components in
  // the content package can't find core components.
  config.resolve.alias['@healthwise-ui/core'] = path.resolve(
    __dirname,
    '..',
    'packages',
    'core',
    'src'
  )

  return config
}
