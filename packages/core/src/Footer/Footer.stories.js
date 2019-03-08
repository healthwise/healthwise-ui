import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './index'

storiesOf('core|Components/Footer', module).add(
  'with defaults',
  () => <Footer>Footer content</Footer>,
  {
    info: `Demonstrates default rendering of Footer component`,
  }
)
