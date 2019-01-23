import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './index'

const twoLevelsOfHeaders = [
  [
    { key: 'firstColumn', label: 'First Column', colspan: 2 },
    { key: 'secondColumn', label: 'Second Column', colspan: 2 },
    { key: 'thirdColumn', label: 'Third Column' },
  ],
  [
    { key: 'secondRowColumn1', label: 'Second Row 1' },
    { key: 'secondRowColumn2', label: 'Second Row 2', type: 'int' },
    { key: 'secondRowColumn3', label: 'Second Row 3', type: 'int' },
    { key: 'secondRowColumn4', label: 'Second Row 4' },
    { key: 'secondRowColumn5', label: 'Second Row 5' },
  ],
]

const twoLevelData = [
  {
    secondRowColumn1: 'test',
    secondRowColumn2: 1,
    secondRowColumn3: 3,
    secondRowColumn4: 'test4',
    secondRowColumn5: 'test5',
  },
  {
    secondRowColumn1: 'test1',
    secondRowColumn2: 2,
    secondRowColumn3: 4,
    secondRowColumn4: 'test14',
    secondRowColumn5: 'test15',
  },
  {
    secondRowColumn1: 'test1',
    secondRowColumn2: 2,
    secondRowColumn3: 4,
    secondRowColumn4: 'test14',
    secondRowColumn5: 'test15',
  },
]

const oneLevelOfHeaders = [
  [
    { key: 'firstColumn', label: 'First Column' },
    { key: 'secondColumn', label: 'Second Column', type: 'int' },
    { key: 'thirdColumn', label: 'Third Column' },
  ],
]

const oneLevelOfHeadersColSpan = [
  [
    { key: 'firstColumn', label: 'First Column', colspan: 2 },
    { key: 'secondColumn', label: 'Second Column', type: 'int' },
  ],
]

const oneLevelData = [
  { firstColumn: 'test', secondColumn: 1, thirdColumn: 'test3' },
  { firstColumn: 'test', secondColumn: 1, thirdColumn: 'test3' },
  { firstColumn: 'test', secondColumn: 1, thirdColumn: 'test3' },
]

storiesOf('Components/Table', module)
  .addWithInfo(
    'Default with two levels of headings',
    `Renders a Table with default options with two levels of headings`,
    () => <Table headers={twoLevelsOfHeaders} data={twoLevelData} caption="Test caption" />
  )
  .addWithInfo(
    'With totals and two levels of headings',
    `Renders a Table with totals and two levels of headings`,
    () => (
      <Table headers={twoLevelsOfHeaders} data={twoLevelData} caption="Test caption" includeTotal />
    )
  )
  .addWithInfo('With one level of headers', `Renders a Table with one level of headers`, () => (
    <Table headers={oneLevelOfHeaders} data={oneLevelData} caption="Test caption" />
  ))
  .addWithInfo(
    'With one level of headers and a colspan',
    `Renders a Table with one level of headers and a colspan`,
    () => <Table headers={oneLevelOfHeadersColSpan} data={oneLevelData} caption="Test caption" />
  )
  .addWithInfo(
    'With number columns',
    `Renders a Table with special formatting for number columns`,
    () => (
      <Table
        headers={[
          [
            { key: 'firstColumn', label: 'First Column' },
            { key: 'secondColumn', label: 'Second Column', type: 'int' },
            { key: 'thirdColumn', label: 'Third Column', type: 'int' },
          ],
        ]}
        data={[
          { firstColumn: 'test1', secondColumn: '1', thirdColumn: '10' },
          { firstColumn: 'test4', secondColumn: '50', thirdColumn: '25' },
          { firstColumn: 'test7', secondColumn: '5', thirdColumn: '15' },
        ]}
        caption="Test caption"
      />
    )
  )
  .addWithInfo(
    'With number columns and totals',
    `Renders a Table with number columns and a total row`,
    () => (
      <Table
        headers={[
          [
            { key: 'firstColumn', label: 'First Column' },
            { key: 'secondColumn', label: 'Second Column', type: 'int' },
            { key: 'thirdColumn', label: 'Third Column', type: 'int' },
          ],
        ]}
        data={[
          { firstColumn: 'test1', secondColumn: '1', thirdColumn: '10' },
          { firstColumn: 'test4', secondColumn: '50', thirdColumn: '25' },
          { firstColumn: 'test7', secondColumn: '5', thirdColumn: '15' },
        ]}
        caption="Test caption"
        includeTotal
      />
    )
  )
  .addWithInfo('With dates', `Renders a Table with formatting for date columns`, () => (
    <Table
      headers={[
        [
          { key: 'firstColumn', label: 'First Column' },
          { key: 'secondColumn', label: 'Second Column', type: 'date' },
          { key: 'thirdColumn', label: 'Third Column', type: 'int' },
          { key: 'fourthColumn', label: 'Fourth Column', type: 'int' },
        ],
      ]}
      data={[
        { firstColumn: 'test1', secondColumn: '01/01/2017', thirdColumn: '1', fourthColumn: '10' },
        { firstColumn: 'test4', secondColumn: '02/25/2017', thirdColumn: '50', fourthColumn: '25' },
        { firstColumn: 'test7', secondColumn: '12/15/2017', thirdColumn: '5', fourthColumn: '15' },
      ]}
      caption="Test caption"
      includeTotal
    />
  ))
  .addWithInfo('With no headers', `Renders a Table with no column headers`, () => (
    <Table headers={[]} data={oneLevelData} caption="Test caption" />
  ))
  .addWithInfo('With no data', `Renders a Table with no data`, () => (
    <Table headers={oneLevelOfHeaders} data={[]} caption="Test caption" />
  ))
  .addWithInfo('Empty', `Renders a Table with no data`, () => (
    <Table headers={[]} data={[]} caption="Test caption" />
  ))
  .addWithInfo(
    'List type table with two levels of headers',
    `Renders a list type table with two levels of headers`,
    () => (
      <div style={{ padding: '10px', background: '#edf6fb' }}>
        <Table
          headers={twoLevelsOfHeaders}
          data={twoLevelData}
          caption="Test caption"
          type="list"
        />
      </div>
    )
  )
  .addWithInfo(
    'List type table with one level of headers',
    `Renders a list type Table with one level of headers`,
    () => (
      <div style={{ padding: '10px', background: '#edf6fb' }}>
        <Table headers={oneLevelOfHeaders} data={oneLevelData} caption="Test caption" type="list" />
      </div>
    )
  )
  .addWithInfo(
    'List type table with totals',
    `Renders a list type Table with one level of headers and totals`,
    () => (
      <div style={{ padding: '10px', background: '#edf6fb' }}>
        <Table
          headers={oneLevelOfHeaders}
          data={oneLevelData}
          caption="Test caption"
          type="list"
          includeTotal
        />
      </div>
    )
  )
