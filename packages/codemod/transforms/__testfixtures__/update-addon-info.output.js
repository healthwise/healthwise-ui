import React from 'react'
import Button from './Button'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Button')
  .add(
    'simple usage',
    () => (
      <div>
        <Button label="The Button" onClick={action('onClick')} />
        <br />
        <p>
          Click the "?" mark at top-right to view the info.
        </p>
      </div>
    ),
    {
      info: 'This is the basic usage with the button with providing a label to show the text.'
    }
  )

storiesOf('Button')
  .add(
  'simple usage (inline info)',
  () => <Button label="The Button" onClick={action('onClick')} />,
  {
    info: {
      text: `This is the basic usage with the button with providing a label to show the text.`,
      inline: true
    }
  }
)

storiesOf('Button')
  .add(
  'simple usage (disable source)',
  () => <Button label="The Button" onClick={action('onClick')} />,
  {
    info: {
      text: `This is the basic usage with the button with providing a label to show the text.`,
      source: false,
      inline: true
    }
  }
)
