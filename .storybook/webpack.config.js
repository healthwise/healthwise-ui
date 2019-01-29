module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules[0].exclude = [/[/\\\\]node_modules[/\\\\]/]
  return defaultConfig
}
