import React from 'react'
import { storiesOf } from '@storybook/react'

import SvgImage from './index'

storiesOf('Dev Utilities/Svg Image', module).addWithInfo(
  'with defaults',
  `Demonstrates default rendering of SvgImage component`,
  () => <SvgImage src="https://placeholder.pics/svg/300" />
)
