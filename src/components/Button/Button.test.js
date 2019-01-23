/* global describe, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'

describe('<Button />', () => {
  it('renders correctly with defaults', () => {
    const component = renderer.create(<Button>Works</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with id and added classname', () => {
    const component = renderer.create(
      <Button id="idTest" className="classNameTest">
        Works
      </Button>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders correctly as submit', () => {
    const component = renderer.create(<Button type="submit">Works</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly as type button', () => {
    const component = renderer.create(<Button type="button">Works</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly as type reset', () => {
    const component = renderer.create(<Button type="reset">Works</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with text child', () => {
    const component = renderer.create(<Button>Text</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with complex children', () => {
    const component = renderer.create(
      <Button>
        <span>An element</span> Text
      </Button>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders correctly as a link button', () => {
    const component = renderer.create(<Button href="https://www.google.com">Child</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders rounded style correcty', () => {
    const component = renderer.create(<Button rounded>Child</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders flat style correcty', () => {
    const component = renderer.create(<Button flat>Child</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders raised style correcty', () => {
    const component = renderer.create(<Button raised>Child</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders primary theme correctly', () => {
    const component = renderer.create(<Button theme="primary">Primary button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders accemt theme correctly', () => {
    const component = renderer.create(<Button theme="accent">Accent button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('renders neutral theme correctly', () => {
    const component = renderer.create(<Button theme="neutral">Neutral button</Button>)
    expect(component).toMatchSnapshot()
  })

  it('accepts additional props', () => {
    const component = renderer.create(<Button aria-hidden="true">Child</Button>)
    expect(component).toMatchSnapshot()
  })
})
