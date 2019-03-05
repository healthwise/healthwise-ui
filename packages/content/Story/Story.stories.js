import React from 'react'
import { storiesOf } from '@storybook/react'

import Story from './index'

const storyStructuredContent = {
  html: `
    <section>
      <h2>lorem ipsum dolor sit amet</h2>
      <div class="HwImageWrapper">
        <img src="http://via.placeholder.com/200x200">
      </div>
      <div class="HwNote">lorem ipsum</div>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  `,
}

storiesOf('content|Story', module).add(
  'with defaults',
  () => <Story data={storyStructuredContent} />,
  {
    info: `
        Demonstrates basic usage with defaults.
      `
  }
)
