module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules[0].exclude = [/[/\\\\]node_modules[/\\\\]/]
  console.log(require('util').inspect(defaultConfig.module.rules, false, null, true))
  return defaultConfig
}
