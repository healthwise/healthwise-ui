import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../../core/Button'
import CallToAction from './index'

const item = {
  html: `
    <div>
      <h3>Call to Action</h3>
      <img src="http://via.placeholder.com/48x48">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  `,
}

storiesOf('Structured Content/Call to Action', module).add(
  'with defaults',
  () => <CallToAction item={item} actionButtons={<Button rounded>Action</Button>} />,
  {
    info: `Demonstrates a default CallToAction`
  }
)
