import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../Button'
import Card from './index'

const ContainerDecorator = story => (
  <div style={{ width: '100%', maxWidth: '480px' }}>{story()}</div>
)

storiesOf('Components/Card', module)
  .addDecorator(ContainerDecorator)
  .addWithInfo('with defaults', `Demonstrates default rendering of a Card`, () => (
    <Card title="Card title" subtitle="Card subtitle" />
  ))
  .addWithInfo('with content', `Demonstrates a card with content`, () => (
    <Card title="Card title" subtitle="Card subtitle">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Card>
  ))
  .addWithInfo('with media', `Demonstrates default rendering of a Card`, () => (
    <Card
      title="Card title"
      subtitle="Card subtitle"
      mediaSrc="http://via.placeholder.com/1600x900"
      mediaAltText="Placeholder image"
    />
  ))
  .addWithInfo('with media and content', `Demonstrates default rendering of a Card`, () => (
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
  ))
  .addWithInfo('with actions', `Demonstrates default rendering of a Card`, () => (
    <Card
      title="Card title"
      subtitle="Card subtitle"
      mediaSrc="http://via.placeholder.com/1600x900"
      mediaAltText="Placeholder image"
      actions={[
        <Button key="card-action-1" rounded>
          Accept
        </Button>,
        <Button key="card-action-2" theme="neutral-dark" flat>
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
  ))
