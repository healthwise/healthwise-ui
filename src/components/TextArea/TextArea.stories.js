import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from './index'

storiesOf('Form Controls/Textarea', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of TextArea component`, () => (
    <TextArea label="TextArea Label" />
  ))
  .addWithInfo('with default value', `Demonstrates TextArea with max characters`, () => (
    <TextArea label="TextArea Label" maxCharacters="100" />
  ))
  .addWithInfo(
    'with default value',
    `Demonstrates uncontrolled rendering of TextArea component`,
    () => <TextArea label="TextArea Label" defaultValue="Initial value (uncontrolled component)" />
  )
  .addWithInfo('with value', `Demonstrates controlled TextArea component`, () => (
    <TextArea label="TextArea Label" value="Controlled value" />
  ))
