/* global describe it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import ScreenReaderOnly from './index'

describe('<ScreenReaderOnly />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ScreenReaderOnly>Test screen reader message</ScreenReaderOnly>)
    expect(tree).toMatchSnapshot()
  })

  it('can render HTML content', () => {
    const tree = renderer.create(
      <ScreenReaderOnly>
        <div>Test screen reader message</div>
      </ScreenReaderOnly>
    )
    expect(tree).toMatchSnapshot()
  })
})
