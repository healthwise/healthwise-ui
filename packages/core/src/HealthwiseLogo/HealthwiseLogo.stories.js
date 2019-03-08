import React from 'react'
import { storiesOf } from '@storybook/react'
import HealthwiseLogo from './index'

storiesOf('core|Media/Healthwise Logo', module).add(
  'default',
  () => (
    <div style={{ width: '200px', padding: '20px' }}>
      <HealthwiseLogo />
    </div>
  ),
  {
    info: `
        Healthwise SVG logo
      `,
  }
)
