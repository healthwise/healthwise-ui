import { action } from '@storybook/addon-actions'

import DropDown from './index'

const ContainerDecorator = storyFn => <div style={{ maxWidth: '450px' }}>{storyFn()}</div>

const items = [
  'First option',
  'Second option',
  'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
]

const complexItems = [
  { name: 'First complex option', value: 1 },
  { name: 'Second complex option', value: 2 },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
    value: 3,
  },
]

const customKeyArray = [
  { text: 'First custom key option', id: 1 },
  { text: 'Second custom key option', id: 2 },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus lorem tellus scelerisque ut fermentum sit amet semper vel neque.',
    id: 3,
  },
]

const manyItemArray = [
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
]

const promptText = 'Select a value'

export default {
  title: 'Form Controls/Drop Down',
  component: DropDown,
  decorators: [ContainerDecorator],
}

export const Default = {
  render: () => <DropDown items={items} onChange={action('selected')} />,
  name: 'default',
}

export const Underlined = {
  render: () => <DropDown items={items} onChange={action('selected')} underlined />,
  name: 'underlined',
}

export const Prompt = {
  render: () => (
    <>
      <DropDown items={items} onChange={action('selected')} prompt={promptText} />
      <DropDown items={items} onChange={action('selected')} prompt={promptText} underlined />
    </>
  ),

  name: 'prompt',
}

export const Labeled = {
  render: () => (
    <>
      <DropDown items={items} onChange={action('selected')} label="This is a label" />
      <DropDown items={items} onChange={action('selected')} label="This is a label" underlined />
    </>
  ),

  name: 'labeled',
}

export const PresetValue = {
  render: () => (
    <>
      <DropDown
        items={items}
        prompt={prompt}
        defaultValue="Second option"
        onChange={action('selected')}
      />
      <DropDown
        items={items}
        prompt={prompt}
        defaultValue="Second option"
        onChange={action('selected')}
        underlined
      />
    </>
  ),

  name: 'preset value',
}

export const UnchangingValue = {
  render: () => (
    <>
      <DropDown items={items} prompt={prompt} value="Second option" onChange={action('selected')} />
      <DropDown
        items={items}
        prompt={prompt}
        value="Second option"
        onChange={action('selected')}
        underlined
      />
    </>
  ),

  name: 'unchanging value',
}

export const Disabled = {
  render: () => (
    <>
      <DropDown items={items} onChange={action('selected')} label="Test label" disabled />
      <DropDown
        items={items}
        onChange={action('selected')}
        label="Test label"
        disabled
        underlined
      />
    </>
  ),

  name: 'disabled',
}

export const Required = {
  render: () => (
    <>
      <DropDown items={items} onChange={action('selected')} label="Test label" required />
      <DropDown
        items={items}
        onChange={action('selected')}
        label="Test label"
        required
        underlined
      />
    </>
  ),

  name: 'required',
}

export const Error = {
  render: () => (
    <>
      <DropDown items={items} onChange={action('selected')} label="Test label" error />
      <DropDown items={items} onChange={action('selected')} label="Test label" error underlined />
      <p>Error property with text:</p>
      <DropDown
        items={items}
        onChange={action('selected')}
        label="Test label"
        error="Error text here"
      />
      <DropDown
        items={items}
        onChange={action('selected')}
        label="Test label"
        error="Error text here"
        underlined
      />
    </>
  ),

  name: 'error',
}

export const ComplexItemsObjectArray = {
  render: () => (
    <>
      <DropDown items={complexItems} prompt={prompt} onChange={action('selected')} />
      <DropDown items={complexItems} prompt={prompt} onChange={action('selected')} underlined />
    </>
  ),

  name: 'complex items (object array)',
}

export const ComplexItemsAndPresetValue = {
  render: () => (
    <>
      <DropDown
        items={complexItems}
        prompt={prompt}
        defaultValue="2"
        onChange={action('selected')}
      />
      <DropDown
        items={complexItems}
        prompt={prompt}
        defaultValue="2"
        onChange={action('selected')}
        underlined
      />
    </>
  ),

  name: 'complex items and preset value',
}

export const CustomKeys = {
  render: () => (
    <>
      <DropDown items={customKeyArray} valueKey="id" nameKey="text" onChange={action('selected')} />
      <DropDown
        items={customKeyArray}
        valueKey="id"
        nameKey="text"
        onChange={action('selected')}
        underlined
      />
    </>
  ),

  name: 'custom keys',
}

export const ManyItems = {
  render: () => (
    <>
      <DropDown prompt={prompt} items={manyItemArray} onChange={action('selected')} />
      <DropDown prompt={prompt} items={manyItemArray} onChange={action('selected')} underlined />
    </>
  ),

  name: 'many items',
}
