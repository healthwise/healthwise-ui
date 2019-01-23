/* global jest, describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Tab from './index'

describe('<Tab />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tab>Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('can accept additional class', () => {
    const tree = renderer.create(<Tab className="test">Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders flat tabs correctly', () => {
    const tree = renderer.create(<Tab type="flat">Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('is flagged as active when active', () => {
    const tree = renderer.create(<Tab isActive>Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('is flagged as disabled when disabled', () => {
    const tree = renderer.create(<Tab disabled>Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('has the proper link', () => {
    const tree = renderer.create(<Tab href="http://foo">Works!</Tab>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('has the correct visited state', () => {
    const tree = renderer
      .create(
        <Tab href="http://foo" visited>
          Works!
        </Tab>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('has the correct accessKey', () => {
    const tree = renderer
      .create(
        <Tab href="http://foo" accessKey={2}>
          Works!
        </Tab>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('triggers onClick when clicked', () => {
    const onClick = jest.fn()
    const wrapper = mount(<Tab onClick={onClick} />)
    wrapper.find('a').simulate('click')
    expect(onClick).toBeCalled()
  })
})
