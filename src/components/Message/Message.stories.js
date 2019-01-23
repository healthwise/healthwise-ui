import React from 'react'
import { storiesOf } from '@storybook/react'

import Message from './index'

const styles = {
  container: {
    marginBottom: '16px',
  },
}

storiesOf('UI Feedback/Message', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of Message component`, () => (
    <Message>This is a default message</Message>
  ))
  .addWithInfo(
    'with different types',
    `Demonstrates 'info', 'warning', and 'error' Message types`,
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
    )
  )
  .addWithInfo(
    'with different alignment',
    `Demonstrates alignment options of Message component`,
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
    )
  )
