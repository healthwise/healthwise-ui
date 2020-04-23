import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from './index'

const styles = {
  container: {
    fontSize: '24px',
    marginBottom: '16px',
  },
}

storiesOf('core|Form Controls/Radio', module)
  .add(
    'with defaults',
    () => (
      <div>
        <div style={styles.container}>
          <Radio name="test" value="test" />
          <Radio name="test" value="test 2" defaultChecked />
          <Radio name="test" value="test 3" label="This is a label" />
        </div>
      </div>
    ),
    {
      info: `Demonstrates default rendering of Radio component`,
    }
  )
  .add(
    'disabled',
    () => (
      <div>
        <div style={styles.container}>
          <Radio name="test" value="test" disabled />
          <Radio name="test" value="test 2" disabled defaultChecked />
          <Radio name="test" value="test 3" label="This is a label" disabled />
        </div>
      </div>
    ),
    {
      info: `Demonstrates a disabled Radio component`,
    }
  )
