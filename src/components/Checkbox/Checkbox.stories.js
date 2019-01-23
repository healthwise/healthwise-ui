import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from './index'

const styles = {
  container: {
    fontSize: '24px',
    marginBottom: '16px',
  },
}

storiesOf('Form Controls/Checkbox', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of Checkbox component`, () => (
    <div>
      <div style={styles.container}>
        <Checkbox name="test" value="test" />
      </div>
      <div style={styles.container}>
        <Checkbox name="test 2" value="test" defaultChecked />
      </div>
    </div>
  ))
  .addWithInfo('disabled', `Demonstrates a disabled Checkbox component`, () => (
    <div>
      <div style={styles.container}>
        <Checkbox name="test" value="test" disabled />
      </div>
      <div style={styles.container}>
        <Checkbox name="test 2" value="test" disabled defaultChecked />
      </div>
    </div>
  ))
  .addWithInfo('required', `Demonstrates a required Checkbox component`, () => (
    <div>
      <div style={styles.container}>
        <Checkbox name="test" value="test" required />
      </div>
      <div style={styles.container}>
        <Checkbox name="test 2" value="test" required defaultChecked />
      </div>
    </div>
  ))
