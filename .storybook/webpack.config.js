const path = require('path')

module.exports = ({ config, mode }) => {
  const { rules } = config.module
  const jsLoader = rules.find(rule => String(rule.test) === String(/\.(mjs|jsx?)$/))
  const cssLoader = rules.find(rule => String(rule.test) === String(/\.css$/))

  jsLoader.exclude = [/[/\\\\]node_modules[/\\\\]/]
  cssLoader.use[1].options = {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]--[local]'
  }

  // TODO: Lerna should make this unnecessary, but for some reason components in
  // the content package can't find core components.
  config.resolve.alias['@healthwise-ui/core'] = path.resolve(__dirname, '..', 'packages', 'core')

  return config
}
