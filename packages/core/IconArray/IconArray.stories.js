import React from 'react'
import { storiesOf } from '@storybook/react'
import IconArray from './index'

storiesOf('Media/Icon Array', module)
  .add(
    'with default values',
    () => (
      <div style={{ width: '200px' }}>
        <IconArray />
      </div>
    ),
    {
      info: `
        Default, empty, 100 member icon array
      `
    }
  )
  .add(
    'with 23 peeps selected ',
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="23" maxRange="23" total="100" iconType="male" />
      </div>
    ),
    {
      info: `
        With 23 of 100 males selected
      `
    }
  )
  .add(
    'with 83-88 peeps selected ',
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="83" maxRange="88" iconType="female" />
      </div>
    ),
    {
      info: `
        With 83-88 of 100 females selected
      `
    }
  )
  .add(
    'with 12-14 peeps out of 25',
    () => (
      <div style={{ width: '200px' }}>
        <IconArray minRange="11" maxRange="14" total="25" iconType="neutral" forceBreakOn={5} />
      </div>
    ),
    {
      info: `
        With 11-14 of 25 persons selected - breaking every 5 persons
      `
    }
  )
  .add(
    'responsive',
    () => (
      <div style={{ width: '800px', height: '400px', resize: 'both', overflow: 'auto' }}>
        <IconArray minRange="62" maxRange="73" iconType="male" />
      </div>
    ),
    {
      info: `
        Bound resizable with 62-73 of 100 peeps selected
      `
    }
  )
