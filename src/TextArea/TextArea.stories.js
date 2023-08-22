import { action } from '@storybook/addon-actions'

import TextArea from './index'

const validatorFuncs = {
  typeMismatch: val => {
    let regex = /^[a-z0-9]+$/i
    return regex.test(val)
  },
  tooShort: val => {
    return val.length > 5
  },
}

export default {
  title: 'Form Controls/Text Area',
  component: TextArea,
}

export const Default = {
  render: () => <TextArea label="TextArea Label" />,
  name: 'default',
}

export const MaxCharacters = {
  render: () => <TextArea label="TextArea Label" maxCharacters="100" />,
  name: 'max characters',
}

export const Uncontrolled = {
  render: () => <TextArea label="TextArea Label" defaultValue="Default initial value" />,
  name: 'uncontrolled',
}

export const Controlled = {
  render: () => (
    <TextArea label="TextArea Label" value="Controlled value" onChange={action('changed')} />
  ),

  name: 'controlled',
}

export const Disabled = {
  render: () => (
    <TextArea label="TextArea Label" value="Saved value" onChange={action('changed')} disabled />
  ),

  name: 'disabled',
}

export const ViewOnly = {
  render: () => (
    <TextArea
      label="TextArea Label"
      value="Text to display"
      onChange={action('changed')}
      viewOnly
    />
  ),

  name: 'viewOnly',
}

export const Required = {
  render: () => <TextArea label="TextArea Label" required />,
  name: 'required',
}

export const DefaultError = {
  render: () => <TextArea label="TextArea Label" error={true} />,
  name: 'default error',
}

export const TextError = {
  render: () => <TextArea label="TextArea Label" error="A basic error message" />,
  name: 'text error',
}

export const ErrorAndMaxCharacters = {
  render: () => (
    <TextArea label="TextArea Label" maxCharacters="100" error="A basic error message" />
  ),
  name: 'error and max characters',
}

export const Validator = {
  render: () => (
    <TextArea
      label="TextArea Label"
      validators={validatorFuncs}
      onValid={action('isValid')}
      onInvalid={action('isNotValid')}
    />
  ),

  name: 'validator',
}
