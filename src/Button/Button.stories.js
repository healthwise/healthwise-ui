import { action } from '@storybook/addon-actions'

import BlockHeading from './index'

import { createTheme } from '../Theme'
import { ProfileIcon } from '../Icon'
import Button from './index'

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

const onClickAction = action('onClick')

const handleClick = event => {
  event.preventDefault()
  onClickAction(event)
}

export default {
  title: 'Form Controls/Button',
  component: Button,
}

export const Defaults = {
  render: () => (
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
  ),

  name: 'defaults',
}

export const Themes = {
  render: () => (
    <div>
      <h2 style={styles.header}>Primary (default)</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button>
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Light</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="primaryLight">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryLight" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryLight" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button color="primaryLight" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button color="primaryLight" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="primaryDark">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDark" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDark" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDark" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDark" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Primary Darker</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="primaryDarker">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDarker" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDarker" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDarker" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="primaryDarker" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Accent</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="accent">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accent" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accent" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button color="accent" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button color="accent" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Accent Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="accentDark">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accentDark" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accentDark" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accentDark" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="accentDark" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="neutral">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutral" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutral" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button color="neutral" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container_light}>
          <Button color="neutral" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral Light</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="neutralLight">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralLight" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralLight" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button color="neutralLight" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container_contrast}>
          <Button color="neutralLight" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Neutral Dark</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button color="neutralDark">
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralDark" raised>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralDark" rounded>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralDark" flat>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button color="neutralDark" rounded outlined>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
      </div>
    </div>
  ),

  name: 'themes',
}

export const Links = {
  render: () => (
    <div style={styles.row}>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick}>
          <ProfileIcon />
          Default
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} raised>
          <ProfileIcon />
          Raised
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} rounded>
          <ProfileIcon />
          Rounded
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} flat>
          <ProfileIcon />
          Flat
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} outlined>
          <ProfileIcon />
          Outlined
        </Button>
      </div>
      <div style={styles.container}>
        <Button href="#" onClick={handleClick} rounded outlined>
          <ProfileIcon />
          Rounded Outlined
        </Button>
      </div>
    </div>
  ),

  name: 'links',
}

export const Icons = {
  render: () => (
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
  ),

  name: 'icons',
}

export const Disabled = {
  render: () => (
    <div>
      <h2 style={styles.header}>Regular Buttons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button disabled onClick={onClickAction}>
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button raised disabled onClick={onClickAction}>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded disabled onClick={onClickAction}>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button flat disabled onClick={onClickAction}>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button outlined disabled onClick={onClickAction}>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
        <div style={styles.container}>
          <Button rounded outlined disabled onClick={onClickAction}>
            <ProfileIcon />
            Rounded Outlined
          </Button>
        </div>
      </div>
      <h2 style={styles.header}>Link Buttons</h2>
      <div style={styles.row}>
        <div style={styles.container}>
          <Button href="#" disabled onClick={handleClick}>
            <ProfileIcon />
            Default
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" raised disabled onClick={handleClick}>
            <ProfileIcon />
            Raised
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" rounded disabled onClick={handleClick}>
            <ProfileIcon />
            Rounded
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" flat disabled onClick={handleClick}>
            <ProfileIcon />
            Flat
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" outlined disabled onClick={handleClick}>
            <ProfileIcon />
            Outlined
          </Button>
        </div>
        <div style={styles.container}>
          <Button href="#" rounded outlined disabled onClick={handleClick}>
            <ProfileIcon />
            Rounded Outlined
          </Button>
        </div>
      </div>
    </div>
  ),

  name: 'disabled',
}
