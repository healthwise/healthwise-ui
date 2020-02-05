import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { createTheme } from '../Theme'
import { ProfileIcon } from '../Icon'
import SplitButton from './index'

const theme = createTheme()

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
    background: theme.colorBackgroundLight,
  },
  container_contrast: {
    padding: '16px',
    background: theme.colorBackgroundContrastDark,
  },
}

const items = ['First Option', 'Second Option', 'Third Option']

const onClickAction = action('onClick')
const handleClick = event => {
  event.preventDefault()
  onClickAction(event)
}

storiesOf('core|Form Controls/Button Split', module)
  .add(
    'with defaults',
    () => (
      <div style={styles.row}>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            onOpen={action('menu opened')}
            onClose={action('menu closed')}
          >
            Default
          </SplitButton>
        </div>
      </div>
    ),
    {
      info: `Demonstrates default rendering of a Button`,
    }
  )
  .add(
    'with themes',
    () => (
      <div>
        <h2 style={styles.header}>Primary (default)</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')}>
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} raised>
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} rounded>
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton items={items} onItemClick={action('item clicked')} flat>
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton items={items} onItemClick={action('item clicked')} rounded outlined>
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Primary Light</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="primaryLight">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryLight"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryLight"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container_contrast}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryLight"
              flat
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container_contrast}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryLight"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Primary Dark</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="primaryDark">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDark"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDark"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDark"
              flat
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDark"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Primary Darker</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="primaryDarker">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDarker"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDarker"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDarker"
              flat
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="primaryDarker"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Accent</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accent">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accent" raised>
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accent" rounded>
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accent" flat>
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="accent"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Accent Dark</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accentDark">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="accentDark"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="accentDark"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="accentDark" flat>
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="accentDark"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Neutral</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutral">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutral" raised>
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutral" rounded>
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutral" flat>
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container_light}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutral"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Neutral Light</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutralLight">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralLight"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralLight"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container_contrast}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralLight"
              flat
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container_contrast}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralLight"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Neutral Dark</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton items={items} onItemClick={action('item clicked')} color="neutralDark">
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralDark"
              raised
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralDark"
              rounded
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralDark"
              flat
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              color="neutralDark"
              rounded
              outlined
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
        </div>
      </div>
    ),
    {
      info: `Demonstrates available themes for a Button`,
    }
  )
  .add(
    'with icon only',
    () => (
      <div style={styles.row}>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')}>
            <ProfileIcon />
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')} raised>
            <ProfileIcon />
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')} rounded>
            <ProfileIcon />
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')} flat>
            <ProfileIcon />
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')} outlined>
            <ProfileIcon />
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton items={items} onItemClick={action('item clicked')} rounded outlined>
            <ProfileIcon />
          </SplitButton>
        </div>
      </div>
    ),
    {
      info: `Demonstrates a button with only an icon child`,
    }
  )
  .add(
    'with links',
    () => (
      <div style={styles.row}>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
          >
            <ProfileIcon /> Default
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
            raised
          >
            <ProfileIcon /> Raised
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
            rounded
          >
            <ProfileIcon /> Rounded
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
            flat
          >
            <ProfileIcon /> Flat
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
            outlined
          >
            <ProfileIcon /> Outlined
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            items={items}
            onItemClick={action('item clicked')}
            href="#"
            onClick={handleClick}
            rounded
            outlined
          >
            <ProfileIcon /> Rounded Outlined
          </SplitButton>
        </div>
      </div>
    ),
    {
      info: `Demonstrates a button rendered as a link`,
    }
  )
  .add(
    'disabled',
    () => (
      <div>
        <h2 style={styles.header}>Regular Buttons</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              raised
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              rounded
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              flat
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              outlined
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              rounded
              outlined
              disabled
              onClick={onClickAction}
            >
              <ProfileIcon /> Rounded Outlined
            </SplitButton>
          </div>
        </div>
        <h2 style={styles.header}>Link Buttons</h2>
        <div style={styles.row}>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Default
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              raised
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Raised
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              rounded
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Rounded
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              flat
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Flat
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              outlined
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Outlined
            </SplitButton>
          </div>
          <div style={styles.container}>
            <SplitButton
              items={items}
              onItemClick={action('item clicked')}
              href="#"
              rounded
              outlined
              disabled
              onClick={handleClick}
            >
              <ProfileIcon /> Rounded Outlined
            </SplitButton>
          </div>
        </div>
      </div>
    ),
    {
      info: `Demonstrates a disabled Button`,
    }
  )
  .add(
    'controlled',
    () => (
      <div style={styles.row}>
        <div style={styles.container}>
          <SplitButton
            open
            items={items}
            onOpen={action('menu opened')}
            onClose={action('menu closed')}
          >
            Controlled Component: Open
          </SplitButton>
        </div>
        <div style={styles.container}>
          <SplitButton
            open={false}
            items={items}
            onOpen={action('menu opened')}
            onClose={action('menu closed')}
          >
            Controlled Component: Closed
          </SplitButton>
        </div>
      </div>
    ),
    {
      info: `Demonstrates default rendering of a Button`,
    }
  )
