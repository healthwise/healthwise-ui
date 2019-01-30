import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DropDown from './index'

const items = [
  'one',
  'two',
  'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
]
const complexItems = [
  { name: 'one', value: 1 },
  { name: 'two', value: 2 },
  {
    name:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
    value: 3,
  },
]
const printItems = [
  {
    name: 'Small',
    value: '12pt',
    component: (
      <span className="hw-classy-class-name" style={{ fontSize: '1em' }}>
        Small
      </span>
    ),
  },
  {
    name: 'Medium',
    value: '14pt',
    component: (
      <span className="hw-classy-class-name" style={{ fontSize: '1.25em' }}>
        Medium
      </span>
    ),
  },
  {
    name: 'Large',
    value: '16pt',
    component: (
      <span className="hw-classy-class-name" style={{ fontSize: '1.75em' }}>
        Large
      </span>
    ),
  },
]
const prompt = 'Select a key'

storiesOf('Form Controls/Drop Down', module)
  .add(
    'Default options',
    () => <DropDown items={items} onSelect={action('selected')} />,
    {
      info: `Demonstrates default rendering of the component.  With no size specified, it defaults to large.  With no prompt specified, it defaults to "Select a value."`
    }
  )
  .add('With label', () => (
    <DropDown items={items} onSelect={action('selected')} label="Test label" />
  ), {
  info: `Demonstrates rendering of the component with a label`
})
  .add(
    'Preset value',
    () => <DropDown items={items} prompt={prompt} value="two" onSelect={action('selected')} />,
    {
      info: `Demonstrates rendering of the component with a preset value.`
    }
  )
  .add(
    'Complex items',
    () => <DropDown items={complexItems} prompt={prompt} onSelect={action('selected')} />,
    {
      info: `Demonstrates rendering of the component with a preset value.`
    }
  )
  .add(
    'Complex items with preset value',
    () => (
      <DropDown items={complexItems} prompt={prompt} value="two" onSelect={action('selected')} />
    ),
    {
      info: `Demonstrates rendering of the component with a preset value.`
    }
  )
  .add('Print DropDown', () => (
    <DropDown items={printItems} prompt={'Print'} value="two" onSelect={action('selected')} />
  ), {
  info: `Print with 3 size options.`
})
  .add(
    'Retain default text',
    () => (
      <DropDown
        items={printItems}
        prompt={'Print'}
        maintainPrompt
        value="two"
        onSelect={action('selected')}
      />
    ),
    {
      info: `Demonstrates a selection where the event is triggered, but the default text doesn't change.`
    }
  )
  .add(
    'Many items',
    () => (
      <DropDown
        items={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
        ]}
        prompt={prompt}
        onSelect={action('selected')}
      />
    ),
    {
      info: `Demonstrates default rendering of the component with many items.`
    }
  )
