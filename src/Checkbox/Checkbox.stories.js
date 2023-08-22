import { action } from '@storybook/addon-actions'

import Checkbox from './index'

export default {
  title: 'Form Controls/Checkbox',
  component: Checkbox,
}

export const Default = {
  render: () => (
    <>
      <Checkbox name="test 1" value="test" label="Label 1" />
      <Checkbox name="test 2" value="test" label="Label 2" defaultChecked />
      <Checkbox name="test 3" value="test" label="Label 3" />
    </>
  ),

  name: 'default',
}

export const Disabled = {
  render: () => (
    <>
      <Checkbox name="test 1" value="test" label="Label 1" disabled />
      <Checkbox name="test 2" value="test" label="Label 2" disabled defaultChecked />
      <Checkbox name="test 3" value="test" label="Label 3" disabled />
    </>
  ),

  name: 'disabled',
}

export const ViewOnly = {
  render: () => (
    <>
      <Checkbox name="test 1" value="test" label="Label 1" viewOnly />
      <Checkbox name="test 2" value="test" label="Label 2" viewOnly defaultChecked />
      <Checkbox name="test 3" value="test" label="Label 3" viewOnly />
    </>
  ),

  name: 'viewOnly',
}

export const Required = {
  render: () => (
    <>
      <Checkbox name="test 1" value="test" label="Label 1" required />
      <Checkbox name="test 2" value="test" label="Label 2" required defaultChecked />
      <Checkbox name="test 3" value="test" label="Label 3" required />
    </>
  ),

  name: 'required',
}
