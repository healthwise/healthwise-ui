// App-specific Storybook configuration. Put global settings or global decorators
// for Storybook in the setup function. The loadStories function is required
// to load stories dynamically from the app.

import React from 'react'
import { addDecorator, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'
import knobsAddon from '@storybook/addon-knobs'
import CssBaseline from '@healthwise/css-baseline'
import Theme from '@healthwise/theme'
import appTheme from 'appTheme'
const theme = Theme(appTheme)

const setup = () => {
  addDecorator(story => (
    <div
      style={{
        padding: theme['spacing-m'],
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {story()}
    </div>
  ))
  setAddon(infoAddon)
  setAddon(knobsAddon)
}

const loadStories = () => {
  // Requires all *.stories.js files that aren't in a node_modules directory
  const req = require.context('../src', true, /^((?![/\\\\]node_modules[/\\\\]).)*\.stories\.js$/)
  req.keys().forEach(req)
}

export { setup, loadStories }
