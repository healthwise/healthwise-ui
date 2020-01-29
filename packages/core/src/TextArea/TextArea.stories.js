import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TextArea from './index'

storiesOf('core|Form Controls/Text Area', module)
  .add('with defaults', () => <TextArea label="TextArea Label" />, {
    info: `Demonstrates default rendering of TextArea component`,
  })
  .add('with max characters', () => <TextArea label="TextArea Label" maxCharacters="100" />, {
    info: `Demonstrates TextArea with max characters`,
  })
  .add(
    'with default value',
    () => <TextArea label="TextArea Label" defaultValue="Default initial value" />,
    {
      info: `Demonstrates uncontrolled TextArea component`,
    }
  )
  .add(
    'with value',
    () => <TextArea label="TextArea Label" value="Controlled value" onChange={action('changed')} />,
    {
      info: `Demonstrates controlled TextArea component`,
    }
  )
  .add('disabled', () => <TextArea label="TextArea Label" value="Controlled value" disabled />, {
    info: `Demonstrates disabled TextArea component`,
  })
  .add('required', () => <TextArea label="TextArea Label" required />, {
    info: 'Demonstrates required TextArea component',
  })
  .add('with default error', () => <TextArea label="TextArea Label" error={true} />, {
    info: 'Demonstrates a TextArea component with a default error',
  })
  .add('with text error', () => <TextArea label="TextArea Label" error="A basic error message" />, {
    info: 'Demonstrates a TextArea component with a text error message',
  })
  .add(
    'with error and max characters',
    () => <TextArea label="TextArea Label" maxCharacters="100" error="A basic error message" />,
    {
      info: 'Demonstrates a TextArea component with a text error message and max characters',
    }
  )
