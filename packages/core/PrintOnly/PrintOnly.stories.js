import React from 'react'
import { storiesOf } from '@storybook/react'

import PrintOnly from './index'

storiesOf('core|Dev Utilities/Print Only', module)
  .add('with defaults', () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>This message only shows up when printing</PrintOnly>
    </div>
  ), {
  info: `Renders a PrintOnly message with default options`
})
  .add('with HTML content', () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>
        <div>
          This message contains <span style={{ color: 'red' }}>HTML content</span>
        </div>
      </PrintOnly>
    </div>
  ), {
  info: `Renders a PrintOnly message with HTML content`
})
