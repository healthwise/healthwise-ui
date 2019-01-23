import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import InputText from './index'

const styles = {
  container: {
    width: '350px',
    marginBottom: '16px',
  },
}

storiesOf('Form Controls/Input Text', module)
  .addWithInfo('with defaults', `Demonstrates default rendering of InputText component`, () => (
    <div>
      <div style={styles.container}>
        <InputText onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        <InputText underlined onChange={action('onChange')} />
      </div>
    </div>
  ))
  .addWithInfo('with placeholder text', `Demonstrates InputText with placeholder text`, () => (
    <div>
      <div style={styles.container}>
        <InputText placeholder="Placeholder text" onChange={action('onChange')} required />
      </div>
      <div style={styles.container}>
        <InputText placeholder="Placeholder text" underlined onChange={action('onChange')} />
      </div>
    </div>
  ))
  .addWithInfo('with label', `Demonstrates InputText with a label`, () => (
    <div>
      <div style={styles.container}>
        <InputText label="Label" placeholder="Placeholder text" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        <InputText
          label="Label"
          underlined
          placeholder="Placeholder text"
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
  .addWithInfo('required', `Demonstrates InputText with the isRequired prop`, () => (
    <div>
      <div style={styles.container}>
        <InputText
          required
          label="Required"
          placeholder="Placeholder text"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        <InputText
          required
          underlined
          label="Required"
          placeholder="Placeholder text"
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
  .addWithInfo('disabled', `Demonstrates a disabled InputText component`, () => (
    <div>
      <div style={styles.container}>
        <InputText
          disabled
          label="Disabled"
          placeholder="Placeholder text"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        <InputText
          disabled
          underlined
          label="Disabled"
          placeholder="Placeholder text"
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
  .addWithInfo('with errors', `Demonstrates an InputText component with error messages`, () => (
    <div>
      <div style={styles.container}>
        <InputText
          label="Label"
          placeholder="Placeholder text"
          error="Error shows after onBlur event"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        <InputText
          label="Label"
          placeholder="Placeholder text"
          error="Error message always visible"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        <InputText
          label="Label"
          underlined
          placeholder="Placeholder text"
          error="Error shows after onBlur event"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        <InputText
          label="Label"
          underlined
          placeholder="Placeholder text"
          error="Error message always visible"
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
  .addWithInfo('with all types', `Demonstrates all type props of InputText component`, () => (
    <div>
      <div style={styles.container}>
        Type: text
        <InputText type="text" placeholder="Type: text" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: tel
        <InputText type="tel" placeholder="Type: tel" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: password
        <InputText type="password" placeholder="Type: password" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: email
        <InputText type="email" placeholder="Type: email" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: search
        <InputText type="search" placeholder="Type: search" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: url
        <InputText type="url" placeholder="Type: url" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: number
        <InputText type="number" placeholder="Type: number" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: date
        <InputText type="date" placeholder="Type: date" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: datetime
        <InputText type="datetime" placeholder="Type: datetime" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: datetime-local
        <InputText
          type="datetime-local"
          placeholder="Type: datetime-local"
          onChange={action('onChange')}
        />
      </div>
      <div style={styles.container}>
        Type: month
        <InputText type="month" placeholder="Type: month" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: week
        <InputText type="week" placeholder="Type: week" onChange={action('onChange')} />
      </div>
      <div style={styles.container}>
        Type: time
        <InputText type="time" placeholder="Type: time" onChange={action('onChange')} />
      </div>
    </div>
  ))
