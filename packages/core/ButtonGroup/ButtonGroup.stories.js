import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/Button'
import ButtonGroup from './index'

storiesOf('Form Controls/Button Group', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of ButtonGroup component`, () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ))
  .addWithInfo('center aligned', `Demonstrates center aligned ButtonGroup`, () => (
    <ButtonGroup align="center">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ))
  .addWithInfo('right aligned', `Demonstrates right aligned ButtonGroup`, () => (
    <ButtonGroup align="right">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ))
