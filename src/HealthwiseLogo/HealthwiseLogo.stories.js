import { action } from '@storybook/addon-actions'

import HealthwiseLogo from './index'

export default {
  title: 'Media/Healthwise Logo',
  component: HealthwiseLogo,
}

export const WithDefaults = {
  render: () => (
    <div
      style={{
        width: '200px',
        padding: '20px',
      }}
    >
      <HealthwiseLogo />
    </div>
  ),

  name: 'with defaults',
}
