/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import IconArray from './index'

describe('<IconArray />', () => {
  it('renders correctly with default attributes', () => {
    const component = renderer.create(<IconArray />)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with happy attributes', () => {
    const component = renderer.create(
      <IconArray minRange="2" maxRange="3" total="9" iconType="female" />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with no iconType defined returns neutral icon array', () => {
    const component = renderer.create(<IconArray minRange="7" maxRange="8" total="16" />)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with no maxRange defined', () => {
    const component = renderer.create(<IconArray minRange="7" total="16" iconType="male" />)
    expect(component).toMatchSnapshot()
  })

  it('renders remainder icons if row break not even', () => {
    const component = renderer.create(
      <IconArray minRange="1" maxRange="2" total="10" iconType="neutral" />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders remainder icons if force break on', () => {
    const component = renderer.create(
      <IconArray minRange="2" maxRange="3" total="10" iconType="neutral" forceBreakOn={5} />
    )
    expect(component).toMatchSnapshot()
  })
})
