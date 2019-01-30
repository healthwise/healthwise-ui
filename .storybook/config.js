import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import CssBaseline from '../packages/core/CssBaseline'
import Theme from '../packages/core/Theme'

const theme = Theme()

addDecorator(withInfo)
addDecorator(story => (
  <div
    style={{
      padding: '16px',
      minHeight: '100vh',
      ...Object.entries(theme).reduce((vars, [key, value]) => {
        vars['--' + key] = value
        return vars
      }, {})
    }}
  >
    <CssBaseline />
    {story()}
  </div>
))

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
