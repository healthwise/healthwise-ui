import { action } from '@storybook/addon-actions'

import Radio from './index'

const styles = {
  container: {
    padding: '16px',
  },
}

export default {
  title: 'Form Controls/Radio',
  component: Radio,
}

export const Default = {
  render: () => (
    <div style={styles.container}>
      <Radio name="test" value="test 1" label="Label 1" />
      <Radio name="test" value="test 2" label="Label 2" defaultChecked />
      <Radio name="test" value="test 3" label="Label 3" />
    </div>
  ),

  name: 'default',
}

export const Disabled = {
  render: () => (
    <div style={styles.container}>
      <Radio name="test2" value="test 1" label="Label 1" disabled />
      <Radio name="test2" value="test 2" label="Label 2" disabled defaultChecked />
      <Radio name="test2" value="test 3" label="Label 3" disabled />
    </div>
  ),

  name: 'disabled',
}

export const ViewOnly = {
  render: () => (
    <div style={styles.container}>
      <Radio name="test3" value="test 1" label="Label 1" viewOnly />
      <Radio name="test3" value="test 2" label="Label 2" viewOnly defaultChecked />
      <Radio name="test3" value="test 3" label="Label 3" viewOnly />
    </div>
  ),

  name: 'viewOnly',
}
