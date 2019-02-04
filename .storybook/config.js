import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import CssBaseline from '../packages/core/CssBaseline'
import { CssVars } from '../packages/core/Theme'

addDecorator(withInfo)
addDecorator(story => {
  return (
    <div
      style={{
        padding: '16px',
        minHeight: '100vh',
      }}
    >
      <CssVars />
      <CssBaseline />
      {story()}
    </div>
  )
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
