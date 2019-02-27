import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TextArea from './index'

storiesOf('Form Controls/Textarea', module)
  .add('with defaults', () => (
    <TextArea label="TextArea Label" />
  ), {
    info: `Demonstrates default rendering of TextArea component`
  })
  .add('with max characters', () => (
    <TextArea label="TextArea Label" maxCharacters="100" />
  ), {
    info: `Demonstrates TextArea with max characters`
  })
  .add(
    'with default value', () => (
    <TextArea label="TextArea Label" defaultValue="Default initial value" />
  ), {
    info: `Demonstrates uncontrolled TextArea component`
  })
  .add('with value', () => (
    <TextArea label="TextArea Label" value="Controlled value" onChange={action('changed')} />
  ), {
    info: `Demonstrates controlled TextArea component`
  })
