import upperFirst from 'lodash/upperFirst'

const getThemeVariable = variable => props => {
  let { theme, color } = props
  color = upperFirst(color)

  switch(variable) {
    case 'color': {
      return theme[`color${color}`]
    }
    case 'colorText': {
      return theme[`colorTextOn${color}`]
    }
  }
}

export default getThemeVariable
