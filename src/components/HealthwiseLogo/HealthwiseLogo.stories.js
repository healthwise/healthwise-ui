import React from 'react'
import { storiesOf } from '@storybook/react'
import HealthwiseLogo from './index'

storiesOf('Media/Healthwise Logo', module).addWithInfo(
  'default',
  `
      Healthwise SVG logo
    `,
  () => (
    <div style={{ width: '200px', padding: '20px' }}>
      <HealthwiseLogo />
    </div>
  )
)
