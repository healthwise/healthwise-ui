import { action } from '@storybook/addon-actions'

import Ring from './index'

export default {
  title: 'UI Feedback/Ring',
  component: Ring,
}

export const Default = {
  render: () => <Ring />,
  name: 'default',
}

export const Themes = {
  render: () => (
    <>
      <Ring color="primary" />
      <Ring color="primaryLight" />
      <Ring color="primaryDark" />
      <Ring color="primaryDarker" />
      <Ring color="accent" />
      <Ring color="accentDark" />
      <Ring color="neutral" />
      <Ring color="neutralLight" />
      <Ring color="neutralDark" />
    </>
  ),
  name: 'themes',
}

export const Size = {
  render: () => (
    <>
      <Ring size={10} />
      <Ring size={20} />
      <Ring size={30} />
      <Ring size={40} />
      <Ring size={50} />
      <Ring size={60} />
      <Ring size={70} />
      <Ring size={80} />
      <Ring size={90} />
      <Ring size={100} />
    </>
  ),
  name: 'size',
}
