import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from './index'

const styles = {
  container: {
    fontSize: '24px',
    marginBottom: '16px',
  },
}

storiesOf('core|Form Controls/Radio', module).add(
  'with defaults',
  () => (
    <div>
      <div style={styles.container}>
        <Radio name="test" value="test" />
      </div>
      <div style={styles.container}>
        <Radio name="test 2" value="test" defaultChecked />
      </div>
    </div>
  ),
  {
    info: `Demonstrates default rendering of Radio component`
  }
)
