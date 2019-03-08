/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'

import TabGroup from './index'

describe('<TabGroup />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TabGroup />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('can accept additional class', () => {
    const tree = renderer.create(<TabGroup className="test" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders stretch TabGroup properly', () => {
    const tree = renderer.create(<TabGroup stretch />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders non-stretch TabGroup properly', () => {
    const tree = renderer.create(<TabGroup stretch={false} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('only supports Tab children', () => {
    const consoleerror = console.error
    console.error = jest.fn()

    const tree = renderer
      .create(
        <TabGroup>
          <div>INVALID CHILD</div>
        </TabGroup>
      )
      .toJSON()

    console.error = consoleerror
    expect(tree).toThrowErrorMatchingSnapshot()
  })
})
