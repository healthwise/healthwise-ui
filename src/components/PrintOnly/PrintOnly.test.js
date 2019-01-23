/* global describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import PrintOnly from './index'

describe('<PrintOnly />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrintOnly>Test Message</PrintOnly>)
    expect(tree).toMatchSnapshot()
  })
  it('can render HTML content', () => {
    const tree = renderer.create(
      <PrintOnly>
        <div>Test Message</div>
      </PrintOnly>
    )
    expect(tree).toMatchSnapshot()
  })
})
