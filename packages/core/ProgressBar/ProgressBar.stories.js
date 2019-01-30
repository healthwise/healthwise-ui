import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs/react'

import ProgressBar from './index'

const styles = {
  container: {
    width: '100%',
    maxWidth: '600px',
  },
}

storiesOf('UI Feedback/Progress Bar', module)
  .addDecorator(withKnobs)
  .add('with defaults', () => (
    <div style={styles.container}>
      <ProgressBar
        showPercentage
        percentComplete={number('Percentage', 45, { range: true, min: 0, max: 100, step: 1 })}
      />
    </div>
  ), {
  info: `Demonstrates default rendering of ProgressBar component`
})
  .add(
    'with defaults and color',
    () => (
      <div style={styles.container}>
        <ProgressBar
          theme="neutral"
          showPercentage
          percentComplete={number('Percentage', 45, { range: true, min: 0, max: 100, step: 1 })}
        />
      </div>
    ),
    {
      info: `Demonstrates default rendering of ProgressBar component`
    }
  )
  .add(
    'without text percentage',
    () => (
      <div style={styles.container}>
        <ProgressBar
          theme="primary"
          percentComplete={number('Percentage', 90, { range: true, min: 0, max: 100, step: 1 })}
        />
      </div>
    ),
    {
      info: `Demonstrates default rendering of ProgressBar component without percentage`
    }
  )
  .add(
    'using indeterminate type',
    () => (
      <div style={styles.container}>
        <ProgressBar
          theme="primary"
          progressBarType="indeterminate"
          showPercentage
          percentComplete={number('Percentage', 45, { range: true, min: 0, max: 100, step: 1 })}
        />
      </div>
    ),
    {
      info: `Demonstrates rendering of ProgressBar the indeterminate type`
    }
  )
  .add('using buffer type', () => (
    <div style={styles.container}>
      <ProgressBar
        progressBarType="buffer"
        percentComplete={number('Percentage', 45, { range: true, min: 0, max: 100, step: 1 })}
        buffer={number('Buffer', 60, { range: true, min: 0, max: 100, step: 1 })}
      />
    </div>
  ), {
  info: `Demonstrates rendering of ProgressBar the buffer type`
})
  .add(
    'using query type',
    () => (
      <div style={styles.container}>
        <ProgressBar theme="primary" progressBarType="query" percentComplete="0" />
      </div>
    ),
    {
      info: `Demonstrates rendering of ProgressBar using the query type`
    }
  )
