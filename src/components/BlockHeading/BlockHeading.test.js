/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import BlockHeading from './index'

describe('<BlockHeading />', () => {
  it('renders correctly with text node child', () => {
    const component = renderer.create(<BlockHeading>Block Heading</BlockHeading>).toJSON()

    expect(component).toMatchSnapshot()
  })
})
