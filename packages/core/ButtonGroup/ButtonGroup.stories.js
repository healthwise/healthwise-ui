import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../Button'
import ButtonGroup from './index'

storiesOf('core|Form Controls/Button Group', module)
  .add(
    'with defaults',
    () => (
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
    {
      info: `Demonstrates default rendering of ButtonGroup component`,
    }
  )
  .add(
    'center aligned',
    () => (
      <ButtonGroup align="center">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
    {
      info: `Demonstrates center aligned ButtonGroup`,
    }
  )
  .add(
    'right aligned',
    () => (
      <ButtonGroup align="right">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    ),
    {
      info: `Demonstrates right aligned ButtonGroup`,
    }
  )
