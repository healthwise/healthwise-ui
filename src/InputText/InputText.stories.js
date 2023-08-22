import { action } from '@storybook/addon-actions'

import InputText from './index'
import { createTheme } from '../Theme'

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

export default {
  title: 'Form Controls/InputText',
  component: InputText,
}

export const Default = {
  render: () => (
    <div>
      <InputText onChange={action('onChange')} />
      <InputText underlined onChange={action('onChange')} />
    </div>
  ),

  name: 'default',
}

export const Placeholder = {
  render: () => (
    <div>
      <InputText placeholder="Placeholder text" onChange={action('onChange')} />
      <InputText placeholder="Placeholder text" underlined onChange={action('onChange')} />
    </div>
  ),

  name: 'placeholder',
}

export const Label = {
  render: () => (
    <div>
      <InputText label="Label" placeholder="Placeholder text" onChange={action('onChange')} />
      <InputText
        label="Label"
        underlined
        placeholder="Placeholder text"
        onChange={action('onChange')}
      />
    </div>
  ),

  name: 'label',
}

export const Required = {
  render: () => (
    <div>
      <InputText
        required
        label="Required"
        placeholder="Placeholder text"
        onChange={action('onChange')}
      />
      <InputText
        required
        underlined
        label="Required"
        placeholder="Placeholder text"
        onChange={action('onChange')}
      />
    </div>
  ),

  name: 'required',
}

export const Focus = {
  render: () => (
    <InputText
      autoFocus
      label="Label"
      placeholder="Placeholder text"
      onChange={action('onChange')}
    />
  ),

  name: 'focus',
}

export const Disabled = {
  render: () => (
    <div>
      <InputText
        disabled
        label="Disabled"
        placeholder="Placeholder text"
        onChange={action('onChange')}
      />
      <InputText
        disabled
        underlined
        label="Disabled"
        placeholder="Placeholder text"
        onChange={action('onChange')}
      />
    </div>
  ),

  name: 'disabled',
}

export const ViewOnly = {
  render: () => (
    <div>
      <InputText
        viewOnly
        label="Label"
        value="Text to display only"
        onChange={action('onChange')}
      />
    </div>
  ),

  name: 'viewOnly',
}

export const ExternalValidation = {
  render: () => (
    <div>
      <h4 style={styles.header}>Loading</h4>
      <div style={styles.row}>
        <div style={styles.container}>
          <InputText label="Label" externalValidation="loading" onChange={action('onChange')} />
        </div>
        <div style={styles.container}>
          <InputText
            underlined
            externalValidation="loading"
            label="Label"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <h4 style={styles.header}>Valid</h4>
      <div style={styles.row}>
        <div style={styles.container}>
          <InputText label="Label" externalValidation="valid" onChange={action('onChange')} />
        </div>
        <div style={styles.container}>
          <InputText
            underlined
            externalValidation="valid"
            label="Label"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <h4 style={styles.header}>Invalid</h4>
      <div style={styles.row}>
        <div style={styles.container}>
          <InputText label="Label" externalValidation="invalid" onChange={action('onChange')} />
        </div>
        <div style={styles.container}>
          <InputText
            underlined
            externalValidation="invalid"
            label="Label"
            onChange={action('onChange')}
          />
        </div>
      </div>
    </div>
  ),

  name: 'externalValidation',
}

export const Errors = {
  render: () => (
    <div>
      <InputText
        label="Label"
        placeholder="Placeholder text"
        error="Error message"
        onChange={action('onChange')}
      />
      <InputText
        label="Label"
        underlined
        placeholder="Placeholder text"
        error="Error message"
        onChange={action('onChange')}
      />
    </div>
  ),

  name: 'errors',
}

export const Types = {
  render: () => (
    <div>
      Type: text
      <InputText type="text" placeholder="Type: text" onChange={action('onChange')} />
      Type: tel
      <InputText type="tel" placeholder="Type: tel" onChange={action('onChange')} />
      Type: password
      <InputText type="password" placeholder="Type: password" onChange={action('onChange')} />
      Type: email
      <InputText type="email" placeholder="Type: email" onChange={action('onChange')} />
      Type: search
      <InputText type="search" placeholder="Type: search" onChange={action('onChange')} />
      Type: url
      <InputText type="url" placeholder="Type: url" onChange={action('onChange')} />
      Type: number
      <InputText type="number" placeholder="Type: number" onChange={action('onChange')} />
      Type: date
      <InputText type="date" placeholder="Type: date" onChange={action('onChange')} />
      Type: datetime
      <InputText type="datetime" placeholder="Type: datetime" onChange={action('onChange')} />
      Type: datetime-local
      <InputText
        type="datetime-local"
        placeholder="Type: datetime-local"
        onChange={action('onChange')}
      />
      Type: month
      <InputText type="month" placeholder="Type: month" onChange={action('onChange')} />
      Type: week
      <InputText type="week" placeholder="Type: week" onChange={action('onChange')} />
      Type: time
      <InputText type="time" placeholder="Type: time" onChange={action('onChange')} />
    </div>
  ),

  name: 'types',
}
