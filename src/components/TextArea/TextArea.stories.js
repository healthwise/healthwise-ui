import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from './index'

storiesOf('Form Controls/Textarea', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of TextArea component`, () => (
    <TextArea label="TextArea Label" maxCharacters="100" />
  ))
  .addWithInfo('with value', `Demonstrates default rendering of TextArea component`, () => (
    <TextArea label="TextArea Label" maxCharacters="100" value="Initial value" />
  ))
