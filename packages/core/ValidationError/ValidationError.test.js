/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import ValidationError from './index'

describe('<ValidationError />', () => {
  it('renders correctly with minimum attributes', () => {
    const component = renderer.create(
      <ValidationError>Please answer this question before proceeding</ValidationError>
    )
    expect(component).toMatchSnapshot()
  })
})
