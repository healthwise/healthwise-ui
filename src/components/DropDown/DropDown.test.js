/* global it jest expect */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import DropDown from './index'
import styles from './DropDown.css'
import TestUtils from 'react-dom/test-utils'
import Icon from '../Icon'

const items = [
  'one',
  'two',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem tellus, scelerisque ut fermentum sit amet, semper vel neque.',
]
const complexItems = [{ name: 'one', value: 1 }, { name: 'two', value: 2 }]
const testFunc = function() {
  return 'test'
}
const testValue = originalValue => {
  let value = originalValue
  return {
    value: () => value,
    onSelect: (newValue, event) => {
      value = newValue
    },
  }
}

it('renders defaults correctly', () => {
  const tree = renderer.create(<DropDown items={items} onSelect={testFunc} />)
  expect(tree).toMatchSnapshot()
})

it('renders with complex items correctly', () => {
  const tree = renderer.create(<DropDown items={complexItems} onSelect={testFunc} />)
  expect(tree).toMatchSnapshot()
})

it('renders with no items correctly', () => {
  const tree = renderer.create(<DropDown items={[]} onSelect={testFunc} />)
  expect(tree).toMatchSnapshot()
})

it('renders with props correctly', () => {
  const tree = renderer.create(<DropDown items={items} onSelect={testFunc} prompt="Test prompt" />)
  expect(tree).toMatchSnapshot()
})

it('renders with props with value correctly', () => {
  const tree = renderer.create(
    <DropDown
      items={items}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('renders with label correctly', () => {
  const tree = renderer.create(<DropDown items={items} onSelect={testFunc} label="Test label" />)
  expect(tree).toMatchSnapshot()
})

it('validates string items are correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={['one', 'two']}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).not.toBeCalled()
})

it('validates number items are correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={[1, 2]}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).not.toBeCalled()
})

it('validates complex items with number value are correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={[{ name: 'one', value: 1 }]}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).not.toBeCalled()
})

it('validates complex items with string value are correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={[{ name: 'one', value: 'one' }]}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).not.toBeCalled()
})

it('validates complex items with wrong properties are not correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={[{ name: 'one', value: { value: 1 } }]}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).toBeCalled()
})

it('validates icon is correct type', () => {
  console.error = jest.fn()
  renderer.create(
    <DropDown
      items={items}
      onSelect={testFunc}
      prompt="Test prompt"
      value="two"
      icon={<Icon name="Key" color="black" />}
    />
  )
  expect(console.error).not.toBeCalled()
})

it('updates selected value correctly', () => {
  let nextValue = testValue()
  const container = document.createElement('div')
  const component = ReactDOM.render(
    <DropDown items={items} onSelect={nextValue.onSelect} />,
    container
  )

  let prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('Select a value')

  let buttons = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDown)
  expect(buttons.length).toEqual(1)
  TestUtils.Simulate.click(buttons[0])

  let options = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownOption)
  expect(options.length).toEqual(3)
  TestUtils.Simulate.click(options[1])
  expect(nextValue.value()).toEqual('two')

  prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('two')
})

it('does not update selected value for same value again', () => {
  let nextValue = testValue('unchanged')
  const container = document.createElement('div')
  const component = ReactDOM.render(
    <DropDown items={items} onSelect={nextValue.onSelect} value="two" />,
    container
  )

  let prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('two')

  let buttons = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDown)
  expect(buttons.length).toEqual(1)
  TestUtils.Simulate.click(buttons[0])

  let options = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownOption)
  expect(options.length).toEqual(3)
  TestUtils.Simulate.click(options[1])
  expect(nextValue.value()).toEqual('unchanged')

  prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('two')
})

it('can receive updated props with different values', () => {
  const container = document.createElement('div')

  let component = ReactDOM.render(<DropDown items={items} onSelect={testFunc} />, container)

  let nextValue = testValue()

  component = ReactDOM.render(
    <DropDown
      items={['four', 'five', 'six', 'seven']}
      onSelect={nextValue.onSelect}
      prompt="Rerendered"
    />,
    container
  )

  let prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('Rerendered')

  let buttons = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDown)
  expect(buttons.length).toEqual(1)
  TestUtils.Simulate.click(buttons[0])

  let options = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownOption)
  expect(options.length).toEqual(4)
  TestUtils.Simulate.click(options[1])
  expect(nextValue.value()).toEqual('five')
})

it('can receive updated props with same values', () => {
  const container = document.createElement('div')

  let component = ReactDOM.render(<DropDown items={items} onSelect={testFunc} />, container)

  component = ReactDOM.render(<DropDown items={items} onSelect={testFunc} />, container)

  const prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('Select a value')
})

it('can receive updated props with newly selected value', () => {
  const container = document.createElement('div')

  let component = ReactDOM.render(<DropDown items={items} onSelect={testFunc} />, container)

  component = ReactDOM.render(
    <DropDown items={items} onSelect={testFunc} prompt="Rerendered" value="two" />,
    container
  )

  const prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('two')
})

it('can receive updated props with different selected value', () => {
  const container = document.createElement('div')

  let component = ReactDOM.render(
    <DropDown items={items} onSelect={testFunc} value="one" />,
    container
  )

  component = ReactDOM.render(
    <DropDown items={items} onSelect={testFunc} prompt="Rerendered" value="two" />,
    container
  )

  const prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('two')
})

it('can receive updated props with undefined items', () => {
  const container = document.createElement('div')

  let component = ReactDOM.render(<DropDown items={items} onSelect={testFunc} />, container)

  component = ReactDOM.render(
    <DropDown items={undefined} onSelect={testFunc} prompt="Rerendered" />,
    container
  )

  let prompt = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownText)
  expect(prompt.length).toEqual(1)
  expect(prompt[0].textContent).toContain('Rerendered')

  let buttons = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDown)
  expect(buttons.length).toEqual(1)
  TestUtils.Simulate.click(buttons[0])

  let options = TestUtils.scryRenderedDOMComponentsWithClass(component, styles.DropDownOption)
  expect(options.length).toEqual(3)
})
