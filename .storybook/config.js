import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

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
