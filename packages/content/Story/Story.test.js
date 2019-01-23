/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Story from './index'

describe('<Story />', () => {
  it('renders correctly with defaults', () => {
    const component = renderer.create(<Story data={{ html: '<b>bold</b>' }} />)
    expect(component).toMatchSnapshot()
  })
})
