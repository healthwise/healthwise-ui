import React from 'react'
import { storiesOf } from '@storybook/react'
import IconArray from './index'

storiesOf('Media/Icon Array', module)
  .addWithInfo(
    'with default values',
    `
      Default, empty, 100 member icon array
    `,
    () => (
      <div style={{ width: '200px' }}>
        <IconArray />
      </div>
    )
  )
  .addWithInfo(
    'with 23 peeps selected ',
    `
      With 23 of 100 males selected
    `,
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="23" maxRange="23" total="100" iconType="male" />
      </div>
    )
  )
  .addWithInfo(
    'with 83-88 peeps selected ',
    `
      With 83-88 of 100 females selected
    `,
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="83" maxRange="88" iconType="female" />
      </div>
    )
  )
  .addWithInfo(
    'with 12-14 peeps out of 25',
    `
      With 11-14 of 25 persons selected - breaking every 5 persons
    `,
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="11" maxRange="14" total="25" iconType="neutral" forceBreakOn={5} />
      </div>
    )
  )
  .addWithInfo(
    'responsive',
    `
      Bound resizable with 62-73 of 100 peeps selected
    `,
    () => (
      <div style={{ width: '800px', height: '400px', resize: 'both', overflow: 'auto' }}>
        <IconArray minRange="62" maxRange="73" iconType="male" />
      </div>
    )
  )
