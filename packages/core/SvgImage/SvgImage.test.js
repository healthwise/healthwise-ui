/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import SvgImage from './index'

const svgUrl = 'https://placeholder.pics/svg/300'
const mockSvg =
  '<svg width="100%" height="100%"><g transform="translate(50,50)"><rect x="0" y="0" width="150" height="50" style="fill:red;" /></g></svg>'
const mockSvgWithClass =
  '<svg width="100%" height="100%"><style type="text/css">g.svg1{stroke:#123456;}</style><g class="svg1" transform="translate(50,50)"><rect x="0" y="0" width="150" height="50" style="fill:red;" /></g></svg>'

describe('<SvgImage />', () => {
  it('renders as an image when not an svg', () => {
    const component = renderer.create(
      <SvgImage src="http://via.placeholder.com/1600x900" dataId="1234567890" />
    )
    expect(component).toMatchSnapshot()
  })

  it('shows alt text on the image when not an svg', () => {
    const component = renderer.create(
      <SvgImage
        src="http://via.placeholder.com/1600x900"
        dataId="1234567890"
        alt="steve was here"
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('adds class name on the image wrapper', () => {
    const component = renderer.create(
      <SvgImage
        src="http://via.placeholder.com/1600x900"
        dataId="1234567890"
        alt="steve was here"
        additionalClassName="steve-was-here"
      />
    )
    expect(component).toMatchSnapshot()
  })

  // These don't really work properly, TODO: need to figure out how to properly mock the fetch promise structure
  it('updates classes', () => {
    global.fetch.mockResponse(mockSvgWithClass)
    const component = renderer.create(
      <SvgImage src={svgUrl} dataId="1234567890" additionalClassName="steve-was-here" />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders without classes', () => {
    global.fetch.mockResponse(mockSvg)
    const component = renderer.create(
      <SvgImage src={svgUrl} dataId="1234567890" additionalClassName="steve-was-here" />
    )
    expect(component).toMatchSnapshot()
  })
})
