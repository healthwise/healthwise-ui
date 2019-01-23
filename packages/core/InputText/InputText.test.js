import React from 'react'
import renderer from 'react-test-renderer'
import TestUtils from 'react-dom/test-utils'

import InputText from './index'

describe('<InputText />', () => {
  let onBlur
  beforeEach(() => {
    onBlur = jest.genMockFunction()
  })

  it('renders defaults correctly', () => {
    const tree = renderer.create(<InputText />)
    expect(tree).toMatchSnapshot()
  })

  it('renders underlined style correctly', () => {
    const tree = renderer.create(<InputText underlined />)
    expect(tree).toMatchSnapshot()
  })

  it('renders with placeholder text', () => {
    const tree = renderer.create(<InputText placeholder="Placeholder text" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders required prop', () => {
    const tree = renderer.create(<InputText required />)
    expect(tree).toMatchSnapshot()
  })

  it('renders label', () => {
    const tree = renderer.create(<InputText label="Label" />)
    expect(tree).toMatchSnapshot()
  })

  it('displays error message', () => {
    const tree = renderer.create(<InputText error="Error message" />)
    expect(tree).toMatchSnapshot()
  })

  it('calls onBlur', () => {
    const inputText = TestUtils.renderIntoDocument(<InputText onBlur={onBlur} />)

    const inputField = TestUtils.findRenderedDOMComponentWithClass(inputText, 'hw-input-text')
    TestUtils.Simulate.blur(inputField)
    expect(onBlur).toBeCalled()
  })

  it("doesn't call onBlur if not provided", () => {
    const inputText = TestUtils.renderIntoDocument(<InputText />)

    const inputField = TestUtils.findRenderedDOMComponentWithClass(inputText, 'hw-input-text')
    TestUtils.Simulate.blur(inputField)
    expect(onBlur).not.toBeCalled()
  })
})
