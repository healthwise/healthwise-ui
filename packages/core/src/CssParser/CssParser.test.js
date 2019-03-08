/* global describe, it, expect */
import CssParser from './index'

const styleParser = new CssParser()

const cssHtml = `
  .my-class-name {
    color: black;
  }

  .my-important-class-name {
    color: red;
  }`

const styleJson = [
  {
    selector: '.my-class-name',
    rules: [
      {
        directive: 'color',
        value: 'black',
      },
    ],
  },
  {
    selector: '.my-important-class-name',
    rules: [
      {
        directive: 'color',
        value: 'red',
      },
    ],
  },
]

describe('CssParser tests', () => {
  it('parses css', () => {
    const json = styleParser.parse(cssHtml)
    expect(json.length).toBe(2)

    expect(json[0].selector).toBe('.my-class-name')
    expect(json[0].rules.length).toBe(1)
    expect(json[0].rules[0].directive).toBe('color')
    expect(json[0].rules[0].value).toBe('black')

    expect(json[1].selector).toBe('.my-important-class-name')
    expect(json[1].rules.length).toBe(1)
    expect(json[1].rules[0].directive).toBe('color')
    expect(json[1].rules[0].value).toBe('red')
  })

  it('composes css', () => {
    const css = styleParser.compose(styleJson)
    expect(css).toContain('.my-class-name{color:black;}')
    expect(css).toContain('.my-important-class-name{color:red;}')
  })
})
