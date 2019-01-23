import React from 'react'
import { storiesOf } from '@storybook/react'

import PrintOnly from './index'

storiesOf('Dev Utilities/Print Only', module)
  .addWithInfo('with defaults', `Renders a PrintOnly message with default options`, () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>This message only shows up when printing</PrintOnly>
    </div>
  ))
  .addWithInfo('with HTML content', `Renders a PrintOnly message with HTML content`, () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>
        <div>
          This message contains <span style={{ color: 'red' }}>HTML content</span>
        </div>
      </PrintOnly>
    </div>
  ))
