import React from 'react'
import Button from './Button'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Button')
  .addWithInfo(
    'simple usage',
    'This is the basic usage with the button with providing a label to show the text.',
    () => (
      <div>
        <Button label="The Button" onClick={action('onClick')} />
        <br />
        <p>
          Click the "?" mark at top-right to view the info.
        </p>
      </div>
    )
  )

storiesOf('Button')
  .addWithInfo(
    'simple usage (inline info)',
    `This is the basic usage with the button with providing a label to show the text.`,
    () => <Button label="The Button" onClick={action('onClick')} />,
    { inline: true }
  )

storiesOf('Button')
  .addWithInfo(
    'simple usage (disable source)',
    `This is the basic usage with the button with providing a label to show the text.`,
    () => <Button label="The Button" onClick={action('onClick')} />,
    { source: false, inline: true }
  )
