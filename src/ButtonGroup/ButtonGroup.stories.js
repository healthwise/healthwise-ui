import { action } from '@storybook/addon-actions'

import ButtonGroup from './index'
import Button from '../Button'

export default {
  title: 'Form Controls/Button Group',
  component: ButtonGroup,
}

export const WithDefaults = {
  render: () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),

  name: 'with defaults',
}

export const CenterAligned = {
  render: () => (
    <ButtonGroup align="center">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),

  name: 'center aligned',
}

export const RightAligned = {
  render: () => (
    <ButtonGroup align="right">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),

  name: 'right aligned',
}
