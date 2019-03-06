import React from 'react'
import { storiesOf } from '@storybook/react'

import SvgImage from './index'

storiesOf('core|Dev Utilities/Svg Image', module).add(
  'with defaults',
  () => <SvgImage src="https://s.cdpn.io/3/kiwi.svg" recolor />,
  {
    info: `Demonstrates default rendering of SvgImage component`
  }
)
