/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './index'

describe('<Checkbox />', () => {
  it('renders correctly with defaults', () => {
    const component = renderer.create(<Checkbox name="test" value="test value" />)
    expect(component).toMatchSnapshot()
  })

  it('renders checked checkbox correclty', () => {
    const component = renderer.create(<Checkbox name="test" value="test value" checked />)
    expect(component).toMatchSnapshot()
  })
})
