import { action } from '@storybook/addon-actions'

import PrintOnly from './index'

export default {
  title: 'Dev Utilities/Print Only',
  component: PrintOnly,
}

export const Default = {
  render: () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>This message only shows up when printing</PrintOnly>
    </div>
  ),

  name: 'default',
}

export const WithHtmlContent = {
  render: () => (
    <div>
      <p>Bring up print preview to show the print only message.</p>
      <PrintOnly>
        <div>
          This message contains
          <span
            style={{
              color: 'red',
            }}
          >
            HTML content
          </span>
        </div>
      </PrintOnly>
    </div>
  ),

  name: 'with HTML content',
}
