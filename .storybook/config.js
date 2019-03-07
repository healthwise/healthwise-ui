import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { create } from '@storybook/theming'
import CssBaseline from '../packages/core/CssBaseline'

addDecorator(withInfo)
addDecorator(story => {
  return (
    <div
      style={{
        padding: '16px',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {story()}
    </div>
  )
})
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Healthwise UI',
      brandUrl: 'https://github.com/healthwise/healthwise-ui',
    })
  }
})

// Automatically import all files ending in *.stories.js
const req = require.context(
  '../packages',
  true,
  /^((?![/\\\\]node_modules[/\\\\]).)*\.stories\.js$/
)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
