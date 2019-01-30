import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Theme from '../Theme'
import { ProfileIcon } from '../Icon'
import Button from './index'

const theme = Theme()

const styles = {
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  header: {
    paddingLeft: '16px',
  },
  container: {
    padding: '16px',
  },
  container_light: {
    padding: '16px',
    background: theme['color-background-light'],
  },
  container_contrast: {
    padding: '16px',
    background: theme['color-background-contrast-dark'],
  },
}

const onClickAction = action('onClick')
const handleClick = event => {
  event.preventDefault()
  onClickAction(event)
}

storiesOf('Form Controls/Button', module)
  .add('with defaults', () => (
    <div style={styles.row}>
      <div style={styles.container}>
        <Button>Default</Button>
      </div>
      <div style={styles.container}>
        <Button raised>Raised</Button>
      </div>
      <div style={styles.container}>
        <Button rounded>Rounded</Button>
      </div>
      <div style={styles.container}>
        <Button flat>Flat</Button>
      </div>
      <div style={styles.container}>
        <Button outlined>Outlined</Button>
      </div>
      <div style={styles.container}>
        <Button rounded outlined>
          Rounded Outlined
        </Button>
      </div>
    </div>
  ), {
  info: `Demonstrates default rendering of a Button`
})
  .add('with themes', () => (
    <div>
      <h2 style={styles.header}>Primary (default)</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button>
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Light</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="primary-light">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-light" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-light" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button theme="primary-light" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button theme="primary-light" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="primary-dark">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-dark" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-dark" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-dark" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-dark" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Darker</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="primary-darker">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-darker" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-darker" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-darker" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="primary-darker" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Accent</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="accent">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button theme="accent" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button theme="accent" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Accent Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="accent-dark">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent-dark" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent-dark" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent-dark" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="accent-dark" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="neutral">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button theme="neutral" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button theme="neutral" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral Light</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="neutral-light">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-light" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-light" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button theme="neutral-light" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button theme="neutral-light" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button theme="neutral-dark">
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-dark" raised>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-dark" rounded>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-dark" flat>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button theme="neutral-dark" rounded outlined>
            <ProfileIcon /> Outlined
          </Button>
        </div>
      </div>
    </div>
  ), {
  info: `Demonstrates available themes for a Button`
})
  .add('with icon only', () => (
    <div style={styles.row}>
      <div style={styles.container}>
        <Button>
          <ProfileIcon />
        </Button>
      </div>
      <div style={styles.container}>
        <Button raised>
          <ProfileIcon />
        </Button>
      </div>
      <div style={styles.container}>
        <Button rounded>
          <ProfileIcon />
        </Button>
      </div>
      <div style={styles.container}>
        <Button flat>
          <ProfileIcon />
        </Button>
      </div>
      <div style={styles.container}>
        <Button outlined>
          <ProfileIcon />
        </Button>
      </div>
      <div style={styles.container}>
        <Button rounded outlined>
          <ProfileIcon />
        </Button>
      </div>
    </div>
  ), {
  info: `Demonstrates a button with only an icon child`
})
  .add('with links', () => (
    <div style={styles.row}>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick}>
          <ProfileIcon /> Default
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} raised>
          <ProfileIcon /> Raised
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} rounded>
          <ProfileIcon /> Rounded
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} flat>
          <ProfileIcon /> Flat
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} outlined>
          <ProfileIcon /> Outlined
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} rounded outlined>
          <ProfileIcon /> Rounded Outlined
        </Button>
      </div>
    </div>
  ), {
  info: `Demonstrates a button rendered as a link`
})
  .add('disabled', () => (
    <div>
      <h2 style={styles.header}>Regular Buttons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button disabled onClick={onClickAction}>
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button raised disabled onClick={onClickAction}>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded disabled onClick={onClickAction}>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button flat disabled onClick={onClickAction}>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button outlined disabled onClick={onClickAction}>
            <ProfileIcon /> Outlined
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded outlined disabled onClick={onClickAction}>
            <ProfileIcon /> Rounded Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Link Buttons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button href="#" disabled onClick={handleClick}>
            <ProfileIcon /> Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" raised disabled onClick={handleClick}>
            <ProfileIcon /> Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" rounded disabled onClick={handleClick}>
            <ProfileIcon /> Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" flat disabled onClick={handleClick}>
            <ProfileIcon /> Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" outlined disabled onClick={handleClick}>
            <ProfileIcon /> Outlined
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" rounded outlined disabled onClick={handleClick}>
            <ProfileIcon /> Rounded Outlined
          </Button>
        </div>
      </div>
    </div>
  ), {
  info: `Demonstrates a disabled Button`
})
