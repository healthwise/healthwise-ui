import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SplitButton from './index'

storiesOf('core|Form Controls/Button (split)', module)
  .add(
    'with defaults',
    () => (
      <SplitButton
        items={['First Option', 'Second Option', 'Third Option']}
        onItemClick={action('item clicked')}
      >
        Save
      </SplitButton>
    ),
    {
      info: `Demonstrates default rendering of Split Button component`,
    }
  )
  .add(
    'with button props',
    () => (
      <SplitButton
        buttonProps={{ rounded: true, outlined: true, onClick: action('main button clicked') }}
        items={['First Option', 'Second Option', 'Third Option']}
        onItemClick={action('item clicked')}
        rounded
      >
        I'm Rounded!
      </SplitButton>
    ),
    {
      info: `Demonstrates passing in <Button /> props to the main button of the Split Button component`,
    }
  )

// disabled?
// theme alternates?
