module.exports = (baseConfig, env, defaultConfig) => {
  const { rules } = defaultConfig.module
  const jsLoader = rules.find(rule => String(rule.test) === String(/\.(mjs|jsx?)$/))
  const cssLoader = rules.find(rule => String(rule.test) === String(/\.css$/))

  jsLoader.exclude = [/[/\\\\]node_modules[/\\\\]/]
  cssLoader.use[1].options = {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]--[local]'
  }

  return defaultConfig
}
