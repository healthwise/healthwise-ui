import defaultTheme from './defaultTheme'

const createTheme = (theme = {}) => ({
  ...defaultTheme,
  ...theme,
})

export default createTheme
