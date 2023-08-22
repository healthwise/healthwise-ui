import { Fragment } from 'react'
import { action } from '@storybook/addon-actions'

import Message from './index'

export default {
  title: 'UI Feedback/Message',
  component: Message,
}

export const MessageTypes = {
  render: () => (
    <Fragment>
      <Message type="info">This is an 'info' message</Message>
      <Message type="warning">This is a 'warning' message</Message>
      <Message type="error">This is an 'error' message</Message>
    </Fragment>
  ),

  name: 'message types',
}

export const VariedAlignment = {
  render: () => (
    <Fragment>
      <Message align="left">This message is aligned left</Message>
      <Message align="center">This message is aligned center</Message>
      <Message align="right">This message is aligned right</Message>
    </Fragment>
  ),

  name: 'varied alignment',
}
