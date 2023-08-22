import { action } from '@storybook/addon-actions'

import ValidationError from './index'

const styles = {
  input: {
    marginRight: '16px',
    padding: '8px',
    width: '200px',
  },
}

export default {
  title: 'UI Feedback/ValidationError',
  component: ValidationError,
}

/* Hack to make ValidationError show */
const head = document.head
const style = document.createElement('style')
const css = '.validation-error-container label { display: inline-block }'
style.appendChild(document.createTextNode(css))
head.appendChild(style)

export const Default = {
  render: () => (
    <div className="validation-error-container">
      <input type="email" id="test-input" style={styles.input} placeholder="Text input" />
      <ValidationError
        forId="test-input"
        style={{
          display: 'inline-block',
        }}
      >
        ValidationError message
      </ValidationError>
    </div>
  ),

  name: 'default',
}
