import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from './index'

storiesOf('Form Controls/Textarea', module)
  .add('with defaults', () => (
    <TextArea label="TextArea Label" maxCharacters="100" />
  ), {
  info: `Demonstrates default rendering of TextArea component`
})
  .add('with value', () => (
    <TextArea label="TextArea Label" maxCharacters="100" value="Initial value" />
  ), {
  info: `Demonstrates default rendering of TextArea component`
})
