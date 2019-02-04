import { createGlobalStyle } from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import defaultTheme from './defaultTheme'

// Make theme variables available as CSS custom properties.
// For example, theme.colorPrimary will be available in CSS
// as var(--color-primary)
const CssVars = createGlobalStyle`
  :root {
    ${props => Object.entries(props.theme).map(([key, value]) => {
      return `--${kebabCase(key)}: ${value};`
    }).join('\n')}
  }
`

CssVars.defaultProps = {
  theme: defaultTheme
}

export default CssVars
