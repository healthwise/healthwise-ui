import { action } from '@storybook/addon-actions'

import References from './index'

const styles = {
  container: {
    width: '100%',
    maxWidth: '600px',
  },
}

export default {
  title: 'Components/References',
  component: References,
}

export const Default = {
  render: () => (
    <div style={styles.container}>
      <p>Before</p>
      <References
        references={[
          {
            id: 'id1',
            title: 'title1',
          },
          {
            id: 'id2',
            title: 'title2',
          },
          {
            id: 'id3',
            title: 'title3',
          },
        ]}
      />
      <p>After</p>
    </div>
  ),

  name: 'default',
}

export const Label = {
  render: () => (
    <div style={styles.container}>
      <p>Before</p>
      <References
        referencesLabel="Works Cited"
        references={[
          {
            id: 'id1',
            title: 'title1',
          },
          {
            id: 'id2',
            title: 'title2',
          },
          {
            id: 'id3',
            title: 'title3',
          },
        ]}
      />
      <p>After</p>
    </div>
  ),

  name: 'label',
}
