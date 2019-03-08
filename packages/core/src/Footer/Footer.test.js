/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './index'

describe('<Footer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
