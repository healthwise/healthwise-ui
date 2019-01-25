import defaultTheme from './defaultTheme'

const theme = (appSettings = {}) => ({
  ...defaultTheme,
  ...appSettings,
})

export default theme
