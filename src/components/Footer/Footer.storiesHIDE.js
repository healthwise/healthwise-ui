import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './index'

storiesOf('Components/Footer', module).addWithInfo(
  'with defaults',
  `Demonstrates default rendering of Footer component`,
  () => <Footer>Footer content</Footer>
)
