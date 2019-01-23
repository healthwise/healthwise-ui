import React from 'react'
import { storiesOf } from '@storybook/react'

import LoadingIndicator from './index'

const styles = {
  invertedContainer: {
    background: '#424242',
  },
}

storiesOf('UI Feedback/Loading Indicator', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of a LoadingIndicator`, () => (
    <LoadingIndicator />
  ))
  .addWithInfo(
    'with hidden text',
    `Demonstrates a LoadingIndicator with custom hidden text`,
    () => (
      <div>
        <LoadingIndicator hiddenText="This is the custom hidden text" />
        Use a screen reader to hear custom hidden text
      </div>
    )
  )
  .addWithInfo('inverted', `Demonstrates an inverted color LoadingIndicator`, () => (
    <div style={styles.invertedContainer}>
      <LoadingIndicator inverted />
    </div>
  ))
