/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import Radio from './index'

describe('<Radio />', () => {
  it('renders correctly with minimum props', () => {
    const component = renderer.create(<Radio name="steve" value="awesome" />)
    expect(component).toMatchSnapshot()
  })

  it('uses unused attributes to the input field', () => {
    const component = renderer.create(<Radio name="steve" value="okay" id="awesome" />)
    expect(component).toMatchSnapshot()
  })
})
