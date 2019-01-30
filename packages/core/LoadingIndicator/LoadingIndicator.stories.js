import React from 'react'
import { storiesOf } from '@storybook/react'

import LoadingIndicator from './index'

const styles = {
  invertedContainer: {
    background: '#424242',
  },
}

storiesOf('UI Feedback/Loading Indicator', module)
  .add('with defaults', () => (
    <LoadingIndicator />
  ), {
  info: `Demonstrates default rendering of a LoadingIndicator`
})
  .add(
    'with hidden text',
    () => (
      <div>
        <LoadingIndicator hiddenText="This is the custom hidden text" />
        Use a screen reader to hear custom hidden text
      </div>
    ),
    {
      info: `Demonstrates a LoadingIndicator with custom hidden text`
    }
  )
  .add('inverted', () => (
    <div style={styles.invertedContainer}>
      <LoadingIndicator inverted />
    </div>
  ), {
  info: `Demonstrates an inverted color LoadingIndicator`
})
