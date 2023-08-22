import { action } from '@storybook/addon-actions'

import Tab from '../Tab'
import TabGroup from './index'

export default {
  title: 'Components/Tab Group',
  component: TabGroup,
}

export const Default = {
  render: () => (
    <TabGroup>
      <Tab href="#">First</Tab>
      <Tab href="#">Second</Tab>
      <Tab href="#">Third</Tab>
    </TabGroup>
  ),

  name: 'default',
}

export const WithAllStatuses = {
  render: () => (
    <TabGroup>
      <Tab href="#" isActive>
        Active
      </Tab>
      <Tab href="#" visited>
        Visited
      </Tab>
      <Tab href="#" disabled>
        Disabled
      </Tab>
      <Tab href="#">Unvisited</Tab>
    </TabGroup>
  ),

  name: 'with all statuses',
}

export const WithoutStretching = {
  render: () => (
    <TabGroup stretch={false}>
      <Tab href="#">First</Tab>
      <Tab href="#">Second</Tab>
      <Tab href="#">Third</Tab>
    </TabGroup>
  ),

  name: 'without stretching',
}

export const WithOverflow = {
  render: () => (
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
        <Tab href="#">First</Tab>
        <Tab href="#">Second</Tab>
        <Tab href="#">Third</Tab>
        <Tab href="#">Fourth</Tab>
        <Tab href="#">Fifth</Tab>
        <Tab href="#">Sixth</Tab>
        <Tab href="#">Seventh</Tab>
        <Tab href="#">Eighth</Tab>
        <Tab href="#">Ninth</Tab>
        <Tab href="#">Tenth</Tab>
      </TabGroup>
    </div>
  ),

  name: 'with overflow',
}

export const WithOverflowAndActiveScrolled = {
  render: () => (
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
        <Tab href="#">First</Tab>
        <Tab href="#">Second</Tab>
        <Tab href="#">Third</Tab>
        <Tab href="#">Fourth</Tab>
        <Tab href="#">Fifth</Tab>
        <Tab href="#" isActive>
          Sixth
        </Tab>
        <Tab href="#">Seventh</Tab>
        <Tab href="#">Eighth</Tab>
        <Tab href="#">Ninth</Tab>
        <Tab href="#">Tenth</Tab>
      </TabGroup>
    </div>
  ),

  name: 'with overflow and active scrolled',
}

export const WithMinWidth = {
  render: () => (
    <div
      style={{
        width: '350px',
        margin: '20px',
        border: '1px solid #aaa',
        borderRadius: '8px',
      }}
    >
      <TabGroup>
        <Tab href="#">First</Tab>
        <Tab href="#" minWidth="9em">
          `minWidth` of `9em` Applied
        </Tab>
        <Tab href="#">Third</Tab>
      </TabGroup>
      <TabGroup>
        <Tab href="#">First</Tab>
        <Tab href="#">Min Width Not Applied</Tab>
        <Tab href="#">Third</Tab>
      </TabGroup>
    </div>
  ),

  name: 'with min width',
}
