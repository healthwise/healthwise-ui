import { action } from '@storybook/addon-actions'

import ProgressBar from './index'

const styles = {
  container: {
    width: '100%',
    maxWidth: '600px',
  },
}

export default {
  title: 'UI Feedback/Progress Bar',
  component: ProgressBar,
}

export const Default = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar showPercentage percentComplete={45} />
    </div>
  ),

  name: 'default',
}

export const Neutral = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar color="neutral" showPercentage percentComplete={45} />
    </div>
  ),

  name: 'neutral',
}

export const WithoutTextPercentage = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar color="primary" percentComplete={45} />
    </div>
  ),

  name: 'without text percentage',
}

export const IndeterminateType = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar progressBarType="indeterminate" />
    </div>
  ),

  name: 'indeterminate type',
}

export const QueryType = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar progressBarType="query" />
    </div>
  ),

  name: 'query type',
}

export const BufferType = {
  render: () => (
    <div style={styles.container}>
      <ProgressBar progressBarType="buffer" showPercentage percentComplete={45} buffer={60} />
    </div>
  ),

  name: 'buffer type',
}
