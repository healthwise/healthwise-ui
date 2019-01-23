/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import LoadingIndicator from './index'

describe('<LoadingIndicator />', () => {
  it('renders correctly with defaults', () => {
    const component = renderer.create(<LoadingIndicator />)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with hidden text', () => {
    const component = renderer.create(
      <LoadingIndicator hiddenText="this is the text that will be read by " />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders correctly inverted', () => {
    const component = renderer.create(<LoadingIndicator inverted />)
    expect(component).toMatchSnapshot()
  })
})
