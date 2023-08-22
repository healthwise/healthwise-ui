import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'

import { CssVars } from '../src/Theme'
import CssBaseline from '../src/CssBaseline'

export default {
  decorators: [
    story => {
      return (
        <div style={{ padding: '16px' }}>
          <CssVars />
          <CssBaseline />
          {story()}
        </div>
      )
    },
  ],
  parameters: {
    options: {
      theme: create({
        base: 'light',
        brandTitle: 'Healthwise UI',
        brandUrl: 'https://github.com/healthwise/healthwise-ui',
      }),
    },
  },
}

// addDecorator(story => {
//   return (
//     <div style={{padding: '16px'}}>
//       <CssVars />
//       <CssBaseline />
//       {story()}
//     </div>
//   )
// })

// addParameters({
//   options: {
//     theme: create({
//       base: 'light',
//       brandTitle: 'Healthwise UI',
//       brandUrl: 'https://github.com/healthwise/healthwise-ui',
//     }),
//   },
// })
