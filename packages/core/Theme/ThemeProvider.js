import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createTheme from './createTheme'

const ThemeProvider = ({ theme, children }) => {
  const hwTheme = createTheme(theme)
  const muiTheme = createMuiTheme(theme)
  return (
    <StyledThemeProvider theme={hwTheme}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object
}

export default ThemeProvider
