import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from './index'

const styles = {
  container: {
    fontSize: '24px',
    marginBottom: '16px',
  },
}

storiesOf('core|Form Controls/Checkbox', module)
  .add(
    'with defaults',
    () => (
      <div>
        <div style={styles.container}>
          <Checkbox name="test" value="test" />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 2" value="test" defaultChecked />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 3" value="test" label="This is a label" />
        </div>
      </div>
    ),
    {
      info: `Demonstrates default rendering of Checkbox component`,
    }
  )
  .add(
    'disabled',
    () => (
      <div>
        <div style={styles.container}>
          <Checkbox name="test" value="test" disabled />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 2" value="test" disabled defaultChecked />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 3" value="test" label="This is a label" disabled />
        </div>
      </div>
    ),
    {
      info: `Demonstrates a disabled Checkbox component`,
    }
  )
  .add(
    'required',
    () => (
      <div>
        <div style={styles.container}>
          <Checkbox name="test" value="test" required />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 2" value="test" required defaultChecked />
        </div>
        <div style={styles.container}>
          <Checkbox name="test 3" value="test" label="This is a label" required />
        </div>
      </div>
    ),
    {
      info: `Demonstrates a required Checkbox component`,
    }
  )
