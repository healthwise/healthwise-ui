const defaultTheme = require('./defaultTheme')

const theme = (appSettings = {}) => ({
  ...defaultTheme,
  ...appSettings,
})

module.exports = theme
