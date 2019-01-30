import React from 'react'
import { storiesOf } from '@storybook/react'

import ValidationError from './index'

const styles = {
  input: {
    marginRight: '16px',
    padding: '8px',
    width: '200px',
  },
}

storiesOf('Components/ValidationError', module).add(
  'with defaults',
  () => {
    /* Hack to make ValidationError show */
    const head = document.head
    const style = document.createElement('style')
    const css = '.validation-error-container label { display: inline-block }'
    style.appendChild(document.createTextNode(css))
    head.appendChild(style)

    return (
      <div className="validation-error-container">
        <input type="email" id="test-input" style={styles.input} placeholder="Text input" />
        <ValidationError forId="test-input" style={{ display: 'inline-block' }}>
          ValidationError message
        </ValidationError>
      </div>
    )
  },
  {
    info: `Demonstrates default rendering of ValidationError component`
  }
)
