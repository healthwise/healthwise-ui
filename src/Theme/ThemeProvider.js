import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import createTheme from './createTheme'

const ThemeProvider = ({ theme, children }) => {
  const hwTheme = createTheme(theme)
  return <StyledThemeProvider theme={hwTheme}>{children}</StyledThemeProvider>
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
}

export default ThemeProvider
