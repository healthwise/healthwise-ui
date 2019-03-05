import React from 'react'
import { storiesOf } from '@storybook/react'
import BlockHeading from './index'

storiesOf('core|Components/Block Heading', module).add(
  'with text content',
  () => <BlockHeading>Sample Content</BlockHeading>,
  {
    info: 'Demonstates basic usage with text content'
  }
)
