import React from 'react'
import { storiesOf } from '@storybook/react'

import Message from './index'

const styles = {
  container: {
    marginBottom: '16px',
  },
}

storiesOf('core|UI Feedback/Message', module)
  .add('with defaults', () => (
    <Message>This is a default message</Message>
  ), {
  info: `Demonstrates default rendering of Message component`
})
  .add(
    'with different types',
    () => (
      <div>
        <div style={styles.container}>
          <Message type="info">This is an 'info' message</Message>
        </div>
        <div style={styles.container}>
          <Message type="warning">This is a 'warning' message</Message>
        </div>
        <div style={styles.container}>
          <Message type="error">This is an 'error' message</Message>
        </div>
      </div>
    ),
    {
      info: `Demonstrates 'info', 'warning', and 'error' Message types`
    }
  )
  .add(
    'with different alignment',
    () => (
      <div>
        <div style={styles.container}>
          <Message align="left">This message is aligned left</Message>
        </div>
        <div style={styles.container}>
          <Message align="center">This message is aligned center</Message>
        </div>
        <div style={styles.container}>
          <Message align="right">This message is aligned right</Message>
        </div>
      </div>
    ),
    {
      info: `Demonstrates alignment options of Message component`
    }
  )
