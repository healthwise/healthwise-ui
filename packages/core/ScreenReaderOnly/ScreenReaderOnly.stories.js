import React from 'react'
import { storiesOf } from '@storybook/react'

import ScreenReaderOnly from './index'

storiesOf('core|Dev Utilities/Screen Reader Only', module).add(
  'with defaults',
  () => (
    <div>
      <p>Use a screen reader to hear the ScreenReaderOnly message.</p>
      <ScreenReaderOnly>This message is only visible for a screen reader.</ScreenReaderOnly>
    </div>
  ),
  {
    info: `Demonstrates basic rendering with defaults`,
  }
)
