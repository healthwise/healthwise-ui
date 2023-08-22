import { Portal } from './index'

export default {
  title: 'Dev Utilities/Portal',
  component: Portal,
}

export const Default = {
  render: () => (
    <div>
      <h2>This is inside the React Root</h2>
      <p>Scroll to the bottom to see outside the root.</p>
      <Portal>
        <h3>This is outside the React Root, in a Portal</h3>
      </Portal>
    </div>
  ),

  name: 'default',
}
