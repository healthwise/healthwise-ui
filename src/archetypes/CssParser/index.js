import CssJs from './css.js'

export default class CssParser {
  parse(cssHtml) {
    var cssJs = new CssJs()
    var parsed = cssJs.parseCSS(cssHtml)
    return parsed
  }

  // This doesn't support nested css properties at this time (e.g. @media { ... })
  compose(cssJson) {
    let cssHtml = ''
    if (Array.isArray(cssJson)) {
      for (let declaration of cssJson) {
        cssHtml += declaration.selector + '{'
        for (let rule of declaration.rules) {
          cssHtml += `${rule.directive}:${rule.value};`
        }
        cssHtml += '}\n'
      }
    } else {
      console.info(`Unable to compose css from input that is not an array of declarations.
      Example:
      [
        {
          "selector": ".my-class-name",
          "rules": [
            {
              "directive": "color",
              "value": "black"
            }
          ]
        },
        {
          "selector": ".my-important-class-name",
          "rules": [
            {
              "directive": "color",
              "value": "red"
            },
            {
              "directive": "font-weight",
              "value": "600"
            }
          ]
        }
      ]

      Given: ${JSON.stringify(cssJson)}`)
    }
    return cssHtml
  }
}
