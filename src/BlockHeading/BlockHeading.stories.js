import { action } from '@storybook/addon-actions'

import BlockHeading from './index'

export default {
  title: 'Components/Block Heading',
  component: BlockHeading,
}

export const WithContent = {
  render: () => <BlockHeading>Sample Content</BlockHeading>,
  name: 'with content',
}
