import { action } from '@storybook/addon-actions'

import ScreenReaderOnly from './index'

export default {
  title: 'Dev Utilities/Screen Reader Only',
  component: ScreenReaderOnly,
}

export const Default = {
  render: () => (
    <div>
      <p>Use a screen reader to hear the ScreenReaderOnly message.</p>
      <ScreenReaderOnly>This message is only visible for a screen reader.</ScreenReaderOnly>
    </div>
  ),

  name: 'default',
}
