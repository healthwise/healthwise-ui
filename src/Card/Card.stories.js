import { action } from '@storybook/addon-actions'

import Button from '../Button'
import Card from './index'

const ContainerDecorator = story => (
  <div style={{ width: '100%', maxWidth: '480px' }}>{story()}</div>
)

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [ContainerDecorator],
}

export const WithDefaults = {
  render: () => <Card title="Card title" subtitle="Card subtitle" />,
  name: 'with defaults',
}

export const WithContent = {
  render: () => (
    <Card title="Card title" subtitle="Card subtitle">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Card>
  ),

  name: 'with content',
}

export const WithMedia = {
  render: () => (
    <Card
      title="Card title"
      subtitle="Card subtitle"
      mediaSrc="http://via.placeholder.com/1600x900"
      mediaAltText="Placeholder image"
    />
  ),

  name: 'with media',
}

export const WithMediaAndContent = {
  render: () => (
    <Card
      title="Card title"
      subtitle="Card subtitle"
      mediaSrc="http://via.placeholder.com/1600x900"
      mediaAltText="Placeholder image"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Card>
  ),

  name: 'with media and content',
}

export const WithActions = {
  render: () => (
    <Card
      title="Card title"
      subtitle="Card subtitle"
      mediaSrc="http://via.placeholder.com/1600x900"
      mediaAltText="Placeholder image"
      actions={[
        <Button key="card-action-1" rounded>
          Accept
        </Button>,
        <Button key="card-action-2" color="neutralDark" flat>
          Cancel
        </Button>,
      ]}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Card>
  ),

  name: 'with actions',
}
