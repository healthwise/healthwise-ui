import upperFirst from 'lodash/upperFirst'

// Returns theme variables based on 'color' prop. This is useful
// in styled-components when you want to set a theme color based
// on props. The 'variant' option can be used to get the light
// or dark version of a color.
//
// Example:
// getThemeVariable('color', { variant: 'light' })({ color: 'primary', theme: { ... } })
// => theme.colorPrimaryLight
const getThemeVariable = (variable, { variant = undefined } = {}) => props => {
  let { theme, color } = props

  variant = variant ? upperFirst(variant) : undefined
  color = upperFirst(color)

  switch(variable) {
    case 'color': {
      return theme[`color${color}${variant || ''}`]
    }
    case 'colorText': {
      return theme[`colorTextOn${color}${variant || ''}`]
    }
  }
}

export default getThemeVariable
