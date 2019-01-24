import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Tab from '../Tab'
import TabGroup from './index'

const onClick = event => {
  event.preventDefault()
}

storiesOf('Components/Tab Group', module)
  .addWithInfo('with defaults', `Demonstates default rendering of a TabGroup`, () => (
    <div>
      <TabGroup>
        <Tab href="#" onClick={onClick}>
          First
        </Tab>
        <Tab href="#" onClick={onClick}>
          Second
        </Tab>
        <Tab href="#" onClick={onClick}>
          Third
        </Tab>
      </TabGroup>
    </div>
  ))
  .addWithInfo('with all statuses', `Demonstrates the various tab statuses`, () => (
    <div>
      <TabGroup>
        <Tab href="#" onClick={onClick} isActive>
          Active
        </Tab>
        <Tab href="#" onClick={onClick} visited>
          Visited
        </Tab>
        <Tab href="#" onClick={onClick} disabled>
          Disabled
        </Tab>
        <Tab href="#" onClick={onClick}>
          Unvisited
        </Tab>
      </TabGroup>
    </div>
  ))
  .addWithInfo(
    'without stretching',
    `Demonstrates a TabGroup which doesn't stretch to fill available space`,
    () => (
      <div>
        <TabGroup stretch={false}>
          <Tab href="#" onClick={onClick}>
            First
          </Tab>
          <Tab href="#" onClick={onClick}>
            Second
          </Tab>
          <Tab href="#" onClick={onClick}>
            Third
          </Tab>
        </TabGroup>
      </div>
    )
  )
  .addWithInfo(
    'with overflow',
    `Demonstrates a TabGroup which overflows its available space`,
    () => (
      <div
        style={{
          width: '80%',
          maxWidth: '500px',
          margin: '20px auto',
          padding: '20px',
          overflow: 'hidden',
          border: '1px solid #999',
        }}
      >
        <TabGroup data-something>
          <Tab href="#" onClick={onClick}>
            First
          </Tab>
          <Tab href="#" onClick={onClick}>
            Second
          </Tab>
          <Tab href="#" onClick={onClick}>
            Third
          </Tab>
          <Tab href="#" onClick={onClick}>
            Fourth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Fifth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Sixth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Seventh
          </Tab>
          <Tab href="#" onClick={onClick}>
            Eighth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Ninth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Tenth
          </Tab>
        </TabGroup>
      </div>
    )
  )
  .addWithInfo(
    'with overflow & active scrolled',
    `Demonstrates a TabGroup which overflows its available space, and loads with the active tab shown`,
    () => (
      <div
        style={{
          width: '80%',
          maxWidth: '500px',
          margin: '20px auto',
          padding: '20px',
          overflow: 'hidden',
          border: '1px solid #999',
        }}
      >
        <TabGroup data-something>
          <Tab href="#" onClick={onClick}>
            First
          </Tab>
          <Tab href="#" onClick={onClick}>
            Second
          </Tab>
          <Tab href="#" onClick={onClick}>
            Third
          </Tab>
          <Tab href="#" onClick={onClick}>
            Fourth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Fifth
          </Tab>
          <Tab href="#" isActive onClick={onClick}>
            Sixth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Seventh
          </Tab>
          <Tab href="#" onClick={onClick}>
            Eighth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Ninth
          </Tab>
          <Tab href="#" onClick={onClick}>
            Tenth
          </Tab>
        </TabGroup>
      </div>
    )
  )
  .addWithInfo('with min width', `Demonstrates tab with 'minWidth' prop set`, () => (
    <div style={{ margin: '10px' }}>
      <h3>With Min-Width</h3>
      <div style={{ width: '350px', border: '1px solid #aaa', margin: '20px' }}>
        <TabGroup>
          <Tab href="#" onClick={onClick}>
            First
          </Tab>
          <Tab href="#" minWidth="9em" onClick={onClick}>
            `minWidth` of `9em` Applied
          </Tab>
          <Tab href="#" onClick={onClick}>
            Third
          </Tab>
        </TabGroup>
      </div>

      <h3>Without Min-Width</h3>
      <div style={{ width: '350px', border: '1px solid #aaa', margin: '20px' }}>
        <TabGroup>
          <Tab href="#" onClick={onClick}>
            First
          </Tab>
          <Tab href="#" onClick={onClick}>
            Min Width Not Applied
          </Tab>
          <Tab href="#" onClick={onClick}>
            Third
          </Tab>
        </TabGroup>
      </div>
    </div>
  ))
