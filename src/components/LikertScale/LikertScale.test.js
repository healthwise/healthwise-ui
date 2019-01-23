/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import LikertScale from './index'

// TODO: This has minimal testing because when we go to really use it we may need to strip out the event functionality

describe('<LikertScale />', () => {
  it('renders correctly with minimal attributes', () => {
    const component = renderer.create(<LikertScale id="q1" name="q1_0u" />)
    expect(component).toMatchSnapshot()
  })
})
