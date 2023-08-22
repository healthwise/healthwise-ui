import { action } from '@storybook/addon-actions'

import IconArray from './index'

const ContainerDecorator = storyFn => <div style={{ width: '200px' }}>{storyFn()}</div>

export default {
  title: 'Media/Icon Array',
  component: IconArray,
  decorators: [ContainerDecorator],
}

export const Default = {
  render: () => <IconArray />,
  name: 'default',
}

export const $23Of100MalesSelected = {
  render: () => <IconArray minRange="23" maxRange="23" total="100" iconType="male" />,
  name: '23 of 100 males selected',
}

export const $8388Of100FemalesSelected = {
  render: () => <IconArray minRange="83" maxRange="88" iconType="female" />,
  name: '83-88 of 100 females selected',
}

export const $1214PeepsOutOf25 = {
  render: () => (
    <IconArray minRange="11" maxRange="14" total="25" iconType="neutral" forceBreakOn={5} />
  ),

  name: '12-14 peeps out of 25',
}

export const Responsive = {
  render: () => <IconArray minRange="62" maxRange="73" iconType="male" />,
  name: 'responsive',
}
