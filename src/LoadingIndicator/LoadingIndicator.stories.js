import LoadingIndicator from './index'

const styles = {
  invertedContainer: {
    background: '#424242',
  },
}

export default {
  title: 'UI Feedback/Loading Indicator',
  component: LoadingIndicator,
}

export const Default = {
  render: () => <LoadingIndicator />,
  name: 'default',
}

export const WithHiddenText = {
  render: () => <LoadingIndicator hiddenText="This is the custom hidden text" />,
  name: 'with hidden text',
}

export const Inverted = {
  render: () => (
    <div style={styles.invertedContainer}>
      <LoadingIndicator inverted />
    </div>
  ),

  name: 'inverted',
}
