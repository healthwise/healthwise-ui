import React from 'react'
import { storiesOf } from '@storybook/react'
import BlockHeading from './index'

storiesOf('Components/Block Heading', module).addWithInfo(
  'with text content',
  `
      Demonstates basic usage with text content
    `,
  () => <BlockHeading>Sample Content</BlockHeading>
)
