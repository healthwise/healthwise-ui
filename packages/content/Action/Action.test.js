/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Action from './index'

describe('<Action />', () => {
  it('renders correctly with defaults', () => {
    const component = renderer.create(<Action data={{ html: '<b>bold</b>' }} />)
    expect(component).toMatchSnapshot()
  })
})
